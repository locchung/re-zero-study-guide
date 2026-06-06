#!/usr/bin/env node
/**
 * Unified chapter pipeline — crawl → scaffold → (translate) → compile → qa → register.
 *
 * Replaces the dozens of per-chapter scrape_/split_/merge_/write_/compile_/translate_
 * scripts with one parameterized tool driven by scripts/chapters.config.json.
 *
 * Stages:
 *   crawl    <num>   Fetch the WCT page → raw/chapter_<num>.txt + translation_temp/arc<A>_ch<num>_raw.json
 *   scaffold <num>   Create translation_temp/arc<A>_ch<num>_translated.json (en copied, vi="") for translating
 *   compile  <num>   translated.json + title → content/arc<A>/chuong-<num>.mdx
 *   qa       <num>   Run check_terms.py + check_completeness.py on the compiled MDX
 *   register <num>   Ensure src/lib/chapters.ts has the entry (idempotent, sorted)
 *   status           Show every configured chapter's progress through the stages
 *   all      <num>   crawl → scaffold (stops where human translation is needed)
 *
 * Usage:
 *   node scripts/pipeline.mjs crawl 66
 *   node scripts/pipeline.mjs status
 *   node scripts/pipeline.mjs compile 66 && node scripts/pipeline.mjs qa 66
 * Or via pnpm: `pnpm chapter crawl 66`
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawnSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const TEMP = path.join(__dirname, 'translation_temp');
const RAW = path.join(ROOT, 'raw');
const SKILL = path.join(ROOT, '.claude', 'skills', 'rezero-vn-translation', 'scripts');

const cfg = JSON.parse(fs.readFileSync(path.join(__dirname, 'chapters.config.json'), 'utf-8'));
const pad = (n) => String(n).padStart(2, '0');
const ensure = (d) => { if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true }); };

function chapter(num) {
  const c = cfg.chapters.find((x) => String(x.num) === String(num));
  if (!c) { console.error(`✗ Chapter ${num} not in chapters.config.json — add it first.`); process.exit(1); }
  return { ...c, arc: c.arc ?? cfg.arc };
}
const rawTxt = (c) => path.join(RAW, `chapter_${c.num}.txt`);
const rawJson = (c) => path.join(TEMP, `arc${c.arc}_ch${c.num}_raw.json`);
const transJson = (c) => path.join(TEMP, `arc${c.arc}_ch${c.num}_translated.json`);
const mdxPath = (c) => path.join(ROOT, 'content', `arc${c.arc}`, `chuong-${pad(c.num)}.mdx`);

const cleanHtml = (h) => h
  .replace(/<[^>]+>/g, '')
  .replace(/&nbsp;/g, ' ').replace(/&#8217;/g, '’').replace(/&#8216;/g, '‘')
  .replace(/&#8220;/g, '“').replace(/&#8221;/g, '”').replace(/&#8212;/g, '—')
  .replace(/&#8230;/g, '…').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .trim();

const escapeXml = (s) => s
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&apos;');

// ── Title integrity ────────────────────────────────────────────────────────
// The WCT URL slug is authoritative for a chapter's title, e.g.
//   .../arc-7-chapter-66-hiain-yatz/  →  "hiain yatz".
// We assert the configured/compiled title matches it, so an Arc-6 title can
// never again be pasted onto Arc-7 content (the chuong-66 "Earnestly Wishes" bug).
const STOP = new Set(['the','of','a','an','from','to','in','on','and','for','with','behind','at','by','is','was']);
function slugContentWords(url) {
  const m = (url || '').match(/chapter-\d+[a-z]?-([a-z0-9-]+?)\/?$/i);
  if (!m) return [];
  return m[1].split('-').map((w) => w.toLowerCase()).filter((w) => w && !STOP.has(w));
}
function engHalf(title) { const p = (title || '').split('|'); return (p.length > 1 ? p[1] : p[0]).trim(); }
function titleVsSlug(title, url) {
  const slug = slugContentWords(url);
  if (!slug.length) return { ok: true, ratio: 1, slug };   // censored/unparseable slug — can't check, don't block
  const t = engHalf(title).toLowerCase().replace(/[^a-z0-9 ]/g, ' ');
  const hit = slug.filter((w) => t.split(/\s+/).includes(w)).length;
  return { ok: hit / slug.length >= 0.5, ratio: hit / slug.length, slug };
}

// ── crawl ────────────────────────────────────────────────────────────────
async function crawl(num) {
  const c = chapter(num);
  if (!c.url) { console.error(`✗ Chapter ${num} has no url in config.`); process.exit(1); }
  ensure(RAW); ensure(TEMP);
  console.log(`Crawling ch${num} from ${c.url}`);
  const res = await fetch(c.url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!res.ok) { console.error(`✗ HTTP ${res.status} ${res.statusText}`); process.exit(1); }
  const html = await res.text();
  // Surface the page's real title and check the config against it (and the slug).
  const tm = html.match(/<h1[^>]*entry-title[^>]*>([\s\S]*?)<\/h1>/i);
  const pageTitle = tm ? cleanHtml(tm[1]) : '';
  if (pageTitle) console.log(`  source title: ${pageTitle}`);
  const tvs = titleVsSlug(c.title, c.url);
  if (!tvs.ok) console.warn(`  ⚠ config title "${engHalf(c.title)}" looks wrong vs slug "${tvs.slug.join(' ')}" — update chapters.config.json.`);
  const s = html.indexOf('<div class="entry-content">');
  const e = html.indexOf('</div><!-- .entry-content -->');
  if (s === -1 || e === -1) { console.error('✗ Could not find entry-content div.'); process.exit(1); }
  const body = html.substring(s, e);
  const matches = body.match(/<p[^>]*>([\s\S]*?)<\/p>/gi) || [];
  const paras = [];
  let started = false;
  for (const p of matches) {
    const t = cleanHtml(p);
    if (!t) continue;
    if (!started) {
      if (t.includes('※') || /recruiting|Translated By|Machine Translated|Proofread|ALL RIGHTS BELONG|JAPANESE WEB NOVEL|Checking By|Art Source/i.test(t)) continue;
      started = true;
    }
    if (/Share this:|Like this:|Loading\.\.\.|Previous Chapter|Next Chapter|Table of Contents/i.test(t)) continue;
    paras.push(t);
  }
  fs.writeFileSync(rawTxt(c), paras.join('\n\n') + '\n', 'utf-8');
  fs.writeFileSync(rawJson(c), JSON.stringify(paras.map((en, i) => ({ id: i + 1, en, vi: '' })), null, 2), 'utf-8');
  console.log(`  ✓ ${paras.length} paragraphs → ${path.relative(ROOT, rawTxt(c))}`);
}

// ── scaffold (prepare translated.json for the human/model translation step) ─
function scaffold(num) {
  const c = chapter(num);
  if (!fs.existsSync(rawJson(c))) { console.error(`✗ No raw json — run crawl ${num} first.`); process.exit(1); }
  if (fs.existsSync(transJson(c))) { console.log(`  · translated.json already exists — leaving it.`); return; }
  const raw = JSON.parse(fs.readFileSync(rawJson(c), 'utf-8'));
  fs.writeFileSync(transJson(c), JSON.stringify(raw.map((r) => ({ ...r, vi: '' })), null, 2), 'utf-8');
  console.log(`  ✓ scaffolded ${path.relative(ROOT, transJson(c))} (${raw.length} units to translate)`);
}

// ── compile (translated.json → MDX) ────────────────────────────────────────
function compile(num) {
  const c = chapter(num);
  // Guard: the title must match the URL slug, or refuse to compile (prevents the
  // wrong-title bug). Override with --force only if you know the slug is unusual.
  if (c.url) {
    const m = titleVsSlug(c.title, c.url);
    if (!m.ok) {
      console.error(`✗ TITLE MISMATCH for ch${c.num}: config title "${engHalf(c.title)}" does not match URL slug "${m.slug.join(' ')}" (${Math.round(m.ratio * 100)}% overlap).`);
      console.error(`  Fix the title in scripts/chapters.config.json. (Re-run with --force to override.)`);
      if (!process.argv.includes('--force')) process.exit(1);
    }
  }
  if (!fs.existsSync(transJson(c))) { console.error(`✗ No translated.json — run scaffold + translate first.`); process.exit(1); }
  const data = JSON.parse(fs.readFileSync(transJson(c), 'utf-8'));
  const untranslated = data.filter((s) => !s.vi || !s.vi.trim()).length;
  if (untranslated) console.warn(`  ⚠ ${untranslated} unit(s) still have empty vi — compiling anyway.`);
  const out = [`---`, `title: '${c.title}'`, `chapter: ${c.num}`, `arc: ${c.arc}`, `---`, ``];
  for (const s of data) {
    const en = (s.en || '').trim();
    const vi = (s.vi || '').trim();
    out.push(`<Sentence en="${escapeXml(en)}">`, `  ${vi}`, `</Sentence>`, ``);
  }
  ensure(path.dirname(mdxPath(c)));
  fs.writeFileSync(mdxPath(c), out.join('\n'), 'utf-8');
  console.log(`  ✓ compiled → ${path.relative(ROOT, mdxPath(c))} (${data.length} blocks)`);
}

// ── validate (title integrity: slug ↔ config ↔ MDX frontmatter) ────────────
function validate(num) {
  const c = chapter(num);
  let ok = true;
  const m = titleVsSlug(c.title, c.url);
  if (!m.ok) { console.error(`  ✗ config title vs URL slug: "${engHalf(c.title)}" ≠ "${m.slug.join(' ')}" (${Math.round(m.ratio * 100)}%)`); ok = false; }
  else console.log(`  ✓ config title matches URL slug`);
  if (fs.existsSync(mdxPath(c))) {
    const fm = fs.readFileSync(mdxPath(c), 'utf-8').match(/title:\s*'([\s\S]*?)'\s*\n/);
    const mdxTitle = fm ? fm[1] : '';
    if (mdxTitle !== c.title) { console.error(`  ✗ MDX frontmatter ≠ config:\n      mdx:    ${mdxTitle}\n      config: ${c.title}`); ok = false; }
    else console.log(`  ✓ MDX frontmatter title matches config`);
  }
  return ok;
}

// ── retitle (re-sync MDX frontmatter + chapters.ts row from the config) ─────
function retitle(num) {
  const c = chapter(num);
  const v = titleVsSlug(c.title, c.url);
  if (!v.ok) { console.error(`✗ Refusing: config title "${engHalf(c.title)}" doesn't match slug "${v.slug.join(' ')}". Fix config first.`); process.exit(1); }
  const titleEsc = c.title.replace(/'/g, "\\'");
  if (fs.existsSync(mdxPath(c))) {
    let mdx = fs.readFileSync(mdxPath(c), 'utf-8');
    const before = mdx;
    mdx = mdx.replace(/^title:\s*'[\s\S]*?'\s*$/m, `title: '${titleEsc}'`);
    if (mdx !== before) { fs.writeFileSync(mdxPath(c), mdx, 'utf-8'); console.log(`  ✓ ${path.relative(ROOT, mdxPath(c))} title synced`); }
    else console.log(`  · MDX title already correct`);
  }
  const tsPath = path.join(ROOT, 'src', 'lib', 'chapters.ts');
  let ts = fs.readFileSync(tsPath, 'utf-8');
  const rowRe = new RegExp(`(\\{ slug: 'chuong-${pad(c.num)}', title: )'(?:[^']|\\\\')*?'(, chapterNumber: ${c.num}, arc: ${c.arc} \\})`);
  if (rowRe.test(ts)) {
    ts = ts.replace(rowRe, `$1'${titleEsc}'$2`);
    fs.writeFileSync(tsPath, ts, 'utf-8');
    console.log(`  ✓ chapters.ts (arc ${c.arc}) row synced`);
  } else { console.warn(`  ⚠ no chapters.ts row for chuong-${pad(c.num)} arc ${c.arc} — skipped`); }
}

// ── qa (validate title, then run the python checkers) ──────────────────────
function qa(num) {
  const c = chapter(num);
  const file = mdxPath(c);
  if (!fs.existsSync(file)) { console.error(`✗ No MDX — run compile ${num} first.`); process.exit(1); }
  console.log('── title ──');
  validate(num);
  for (const [label, script, args] of [
    ['terms', 'check_terms.py', [file]],
    ['completeness', 'check_completeness.py', ['--auto', file]],
  ]) {
    console.log(`\n── ${label} ──`);
    const r = spawnSync('python3', [path.join(SKILL, script), ...args], { encoding: 'utf-8', env: { ...process.env, PYTHONIOENCODING: 'utf-8' } });
    process.stdout.write(r.stdout || '');
    if (r.stderr) process.stderr.write(r.stderr);
  }
}

// ── register (idempotent insert into chapters.ts) ──────────────────────────
function register(num) {
  const c = chapter(num);
  const tsPath = path.join(ROOT, 'src', 'lib', 'chapters.ts');
  let ts = fs.readFileSync(tsPath, 'utf-8');
  const slug = `chuong-${pad(c.num)}`;
  if (ts.includes(`slug: '${slug}'`)) { console.log(`  · ${slug} already registered.`); return; }
  console.warn(`  ⚠ NOTE: registry numbering currently tags entries arc: 6 and may collide across arcs — verify placement.`);
  const entry = `  { slug: '${slug}', title: ${JSON.stringify(c.title)}, chapterNumber: ${c.num}, arc: ${c.arc} },`;
  const idx = ts.lastIndexOf(']');
  ts = ts.slice(0, idx) + entry + '\n' + ts.slice(idx);
  fs.writeFileSync(tsPath, ts, 'utf-8');
  console.log(`  ✓ registered ${slug} (review order in chapters.ts).`);
}

// ── status ─────────────────────────────────────────────────────────────────
function status() {
  const flag = (b) => (b ? '✓' : '·');
  console.log('num  raw  trans  done  mdx  reg   title');
  for (const c0 of cfg.chapters) {
    const c = { ...c0, arc: c0.arc ?? cfg.arc };
    const hasRaw = fs.existsSync(rawJson(c));
    const hasTrans = fs.existsSync(transJson(c));
    let done = false;
    if (hasTrans) { const d = JSON.parse(fs.readFileSync(transJson(c), 'utf-8')); done = d.length > 0 && d.every((s) => s.vi && s.vi.trim()); }
    const hasMdx = fs.existsSync(mdxPath(c));
    const reg = fs.existsSync(path.join(ROOT, 'src', 'lib', 'chapters.ts')) &&
      fs.readFileSync(path.join(ROOT, 'src', 'lib', 'chapters.ts'), 'utf-8').includes(`chuong-${pad(c.num)}'`);
    console.log(`${String(c.num).padEnd(4)} ${flag(hasRaw)}    ${flag(hasTrans)}      ${flag(done)}     ${flag(hasMdx)}    ${flag(reg)}     ${c.title}`);
  }
}

// ── dispatch ────────────────────────────────────────────────────────────────
const [stage, num] = process.argv.slice(2);
const need = () => { if (!num) { console.error(`✗ ${stage} needs a chapter number.`); process.exit(1); } };
switch (stage) {
  case 'crawl': need(); await crawl(num); break;
  case 'scaffold': need(); scaffold(num); break;
  case 'compile': need(); compile(num); break;
  case 'validate': need(); process.exit(validate(num) ? 0 : 1); break;
  case 'retitle': need(); retitle(num); break;
  case 'qa': need(); qa(num); break;
  case 'register': need(); register(num); break;
  case 'status': status(); break;
  case 'all': need(); await crawl(num); scaffold(num); console.log(`\n→ Now translate ${path.relative(ROOT, transJson(chapter(num)))}, then: pnpm chapter compile ${num} && pnpm chapter qa ${num}`); break;
  default:
    console.log(`Stages: crawl | scaffold | compile | validate | retitle | qa | register | status | all\nUsage: node scripts/pipeline.mjs <stage> <num>`);
}
