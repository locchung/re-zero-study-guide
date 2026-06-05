import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const chapters = [
  { num: '36', title: 'Chương 36: Ma Đô Hỗn Loạn | Chaotic Demon City', chapterVal: 36 },
  { num: '37', title: 'Chương 37: Thành Chủ Hồng Ngọc Thành | The Lord of the Crimson Lapis Castle', chapterVal: 37 },
  { num: '38', title: 'Chương 38: Phần Thưởng Tám Năm Chờ Đợi | A Reward Eight Years in the Making', chapterVal: 38 },
  { num: '39', title: 'Chương 39: Ác Độc | Vicious', chapterVal: 39 }
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
        { en: 'Jamal', vi: 'Jamal' }
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
  const outFile = path.join(outDir, `chuong-${num.toString().padStart(2, '0')}.mdx`);
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
