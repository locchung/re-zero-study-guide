import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const chapters = [
  { num: '61', title: 'Chương 61: Chào Mừng Đến Với Đảo Đấu Sĩ | Welcome, to the Gladiator Island!', chapterVal: 61 },
  { num: '62', title: 'Chương 62: Luật Lệ Của Hòn Đảo | The Island’s Order', chapterVal: 62 },
  { num: '63', title: 'Chương 63: Sparka | Sparka', chapterVal: 63 },
  { num: '64', title: 'Chương 64: Những Từ Ngữ Ma Thuật | Magic Words', chapterVal: 64 },
  { num: '65', title: 'Chương 65: Chiến Thần Ăn Chực Học Đường | The School Food Fighter', chapterVal: 65 }
];

const tempDir = path.join(__dirname, 'translation_temp');
const outDir = path.join(process.cwd(), 'content', 'arc7');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function compileChapter({ num, title, chapterVal }) {
  const inPath = path.join(tempDir, `arc7_ch${num}_translated.json`);
  if (!fs.existsSync(inPath)) {
    console.error(`Translated file not found: ${inPath}`);
    return;
  }

  console.log(`Compiling Chapter ${num} to MDX...`);
  const data = JSON.parse(fs.readFileSync(inPath, 'utf-8'));
  const lines = [];

  lines.push('---');
  lines.push(`title: '${title.replace(/'/g, "\\'")}'`);
  lines.push(`chapter: ${chapterVal}`);
  lines.push(`arc: 7`);
  lines.push('---');
  lines.push('');

  for (const s of data) {
    const en = s.en.trim();
    const vi = s.vi.trim();

    if (en === '※　※　※　※　※　※　※　※　※　※　※　※' || en === '※※　※　※　※　※　※　※　※　※　※　※　※') {
      lines.push('<Sentence en="※　※　※　※　※　※　※　※　※　※　※　※">');
      lines.push('  ※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※');
      lines.push('</Sentence>');
      lines.push('');
      continue;
    }

    if (en === '※　※　※　※　※　※　※　※　※　※　※') {
      lines.push('<Sentence en="※　※　※　※　※　※　※　※　※　※　※">');
      lines.push('  ※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※');
      lines.push('</Sentence>');
      lines.push('');
      continue;
    }

    if (en === '△▼△▼△▼△') {
      lines.push('<Sentence en="△▼△▼△▼△">');
      lines.push('  △▼△▼△▼△');
      lines.push('</Sentence>');
      lines.push('');
      continue;
    }

    // Determine if it is a dialogue line or a paragraph to decide if we should do <Word> replacements.
    // However, the JSON files do not have <Word> tags. We can wrap proper nouns using <Word> tags in the vi text dynamically.
    // The guidelines: "Vocabulary worth studying -> <Word en="...">Vietnamese</Word> inside Sentence".
    // Let's keep it simple: we can do a replace for proper nouns if we want, or do it on compile.
    // Let's just output the <Sentence en="..."> vi </Sentence> block.
    // If the sentence is dialogue (starts with character name like "Vincent: ["), we keep it as-is.
    // If it has proper nouns, we can inject <Word> tags for some key ones if they are in the vi text.
    // Let's write a helper to wrap proper nouns.
    let polishedVi = vi;
    
    // We only wrap in <Word> tags if it's not a dialogue line.
    const isDialogue = /^[A-ZÀ-Ỹa-zà-ỹ]+(\s+[A-ZÀ-Ỹa-zà-ỹ]+)*:\s*\[/.test(en);
    if (!isDialogue) {
      const properNouns = [
        { en: 'Return by Death', vi: 'Return by Death' },
        { en: 'Divine Protection', vi: 'Divine Protection' },
        { en: 'Witch Factor', vi: 'Witch Factor' },
        { en: 'Authority', vi: 'Authority' },
        { en: 'Unseen Hand', vi: 'Unseen Hand' },
        { en: 'Witch Cult', vi: 'Witch Cult' },
        { en: 'Soul Marriage Technique', vi: 'Soul Marriage Technique' },
        { en: 'Great Disaster', vi: 'Great Disaster' },
        { en: 'Crimson Lapis Castle', vi: 'Crimson Lapis Castle' },
        { en: 'Nine Divine Generals', vi: 'Nine Divine Generals' },
        { en: 'Subaru', vi: 'Subaru' },
        { en: 'Emilia', vi: 'Emilia' },
        { en: 'Beatrice', vi: 'Beatrice' },
        { en: 'Yorna Mishigure', vi: 'Yorna Mishigure' },
        { en: 'Yorna', vi: 'Yorna' },
        { en: 'Vincent Vollachia', vi: 'Vincent Vollachia' },
        { en: 'Vincent', vi: 'Vincent' },
        { en: 'Abel', vi: 'Abel' },
        { en: 'Tanza', vi: 'Tanza' },
        { en: 'Taritta', vi: 'Taritta' },
        { en: 'Louis', vi: 'Louis' },
        { en: 'Medium', vi: 'Medium' },
        { en: 'Al', vi: 'Al' },
        { en: 'Kafma Irulux', vi: 'Kafma Irulux' },
        { en: 'Kafma', vi: 'Kafma' },
        { en: 'Todd', vi: 'Todd' },
        { en: 'Jamal', vi: 'Jamal' },
        { en: 'Cecilus Segmunt', vi: 'Cecilus Segmunt' },
        { en: 'Cecilus', vi: 'Cecilus' },
        { en: 'Schwartz', vi: 'Schwartz' },
        { en: 'Ginunhive', vi: 'Ginunhive' },
        { en: 'Weitz', vi: 'Weitz' },
        { en: 'Hiain', vi: 'Hiain' },
        { en: 'Idra', vi: 'Idra' },
        { en: 'Gustav Morello', vi: 'Gustav Morello' },
        { en: 'Gustav', vi: 'Gustav' },
        { en: 'Ceci', vi: 'Ceci' },
        { en: 'Basu', vi: 'Basu' },
        { en: 'Sparka', vi: 'Sparka' },
        { en: 'Guiltilaw', vi: 'Guiltilaw' }
      ];

      // Sort proper nouns by length of vi descending to match longer ones first
      const sortedNouns = [...properNouns].sort((a, b) => b.vi.length - a.vi.length);
      
      const matchedPns = [];
      for (const noun of sortedNouns) {
        // Match word boundaries for the Vietnamese term
        const regex = new RegExp(`\\b${noun.vi}\\b`, 'g');
        
        // Temporarily replace matches with placeholders
        polishedVi = polishedVi.replace(regex, (match) => {
          const id = matchedPns.length;
          matchedPns.push({ placeholder: `__PN_PLACEHOLDER_${id}__`, en: noun.en, vi: match });
          return `__PN_PLACEHOLDER_${id}__`;
        });
      }
      
      // Substitute placeholders back with <Word> tags
      for (const matched of matchedPns) {
        polishedVi = polishedVi.replace(matched.placeholder, `<Word en="${matched.en}">${matched.vi}</Word>`);
      }
    }

    const escapedEn = escapeXml(en);
    lines.push(`<Sentence en="${escapedEn}">`);
    lines.push(`  ${polishedVi}`);
    lines.push(`</Sentence>`);
    lines.push('');
  }

  const mdxContent = lines.join('\n');
  const outFile = path.join(outDir, `chuong-${num}.mdx`);
  fs.writeFileSync(outFile, mdxContent, 'utf-8');
  console.log(`Successfully compiled to: ${outFile} (${mdxContent.length} bytes)`);
}

function run() {
  for (const ch of chapters) {
    compileChapter(ch);
  }
  console.log('Done compiling requested chapters.');
}

run();
