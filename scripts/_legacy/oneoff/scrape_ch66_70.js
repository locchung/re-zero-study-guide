import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const chapters = [
  { num: '66', url: 'https://witchculttranslation.com/2022/08/20/arc-7-chapter-66-hiain-yatz/' },
  { num: '67', url: 'https://witchculttranslation.com/2022/08/24/arc-7-chapter-67-hidden-behind-the-molar/' },
  { num: '68', url: 'https://witchculttranslation.com/2022/08/29/arc-7-chapter-68-guidance-of-the-sword-wolf/' },
  { num: '69', url: 'https://witchculttranslation.com/2022/09/06/arc-7-chapter-69-arriving-from-the-imperial-capital/' },
  { num: '70', url: 'https://witchculttranslation.com/2022/09/08/arc-7-chapter-70-one-thing/' },
];

const rawDir = path.join(__dirname, '..', 'raw');
const tempDir = path.join(__dirname, 'translation_temp');
for (const d of [rawDir, tempDir]) if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });

function cleanHtml(html) {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8217;/g, '’')
    .replace(/&#8216;/g, '‘')
    .replace(/&#8220;/g, '“')
    .replace(/&#8221;/g, '”')
    .replace(/&#8212;/g, '—')
    .replace(/&#8230;/g, '…')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim();
}

async function scrapeChapter({ num, url }) {
  console.log(`Fetching Chapter ${num}...`);
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!res.ok) throw new Error(`Failed Chapter ${num}: ${res.status} ${res.statusText}`);
  const html = await res.text();

  const startIndex = html.indexOf('<div class="entry-content">');
  const endIndex = html.indexOf('</div><!-- .entry-content -->');
  if (startIndex === -1 || endIndex === -1) throw new Error(`No entry-content for Chapter ${num}`);
  const contentHtml = html.substring(startIndex, endIndex);

  const pMatches = contentHtml.match(/<p[^>]*>([\s\S]*?)<\/p>/gi) || [];
  const paras = [];
  let storyStarted = false;

  for (const p of pMatches) {
    const cleaned = cleanHtml(p);
    if (!cleaned) continue;
    if (!storyStarted) {
      if (cleaned.includes('※') || /Translated By|Machine Translated|Proofread|ALL RIGHTS BELONG|JAPANESE WEB NOVEL|Checking By|Art Source/i.test(cleaned)) continue;
      storyStarted = true;
    }
    if (/Share this:|Like this:|Loading\.\.\.|Previous Chapter|Next Chapter|Table of Contents/i.test(cleaned)) continue;
    paras.push(cleaned);
  }

  // raw/chapter_NN.txt — blank-line-separated, matching the existing raw/ format
  fs.writeFileSync(path.join(rawDir, `chapter_${num}.txt`), paras.join('\n\n') + '\n', 'utf-8');
  // JSON form for the pipeline / completeness checker
  const json = paras.map((para, i) => ({ id: i + 1, en: para, vi: '' }));
  fs.writeFileSync(path.join(tempDir, `arc7_ch${num}_raw.json`), JSON.stringify(json, null, 2), 'utf-8');
  console.log(`  Chapter ${num}: ${paras.length} paragraphs -> raw/chapter_${num}.txt`);
}

for (const ch of chapters) {
  try { await scrapeChapter(ch); } catch (e) { console.error(`Error ch${ch.num}:`, e.message); }
}
