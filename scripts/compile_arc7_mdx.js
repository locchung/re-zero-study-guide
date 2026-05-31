import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const chapters = [
  { num: 1, title: 'Chương 1: Lễ Rửa Tội | Baptism' },
  { num: 2, title: 'Chương 2: Lần Theo Dấu Vết Dã Thú | Animal Tracking' },
  { num: 3, title: 'Chương 3: Đối Đầu Với Rem | VS Rem' },
  { num: 4, title: 'Chương 4: Lựa Chọn Quả Cảm | A Brave Choice' },
  { num: 5, title: 'Chương 5: Làm Đàn Ông Thật Gian Nan | Being a Man is Tough' },
  { num: 6, title: 'Chương 6: Phương Nam Xa Xôi | A Land Faraway in the South' },
  { num: 7, title: 'Chương 7: Làm Đàn Ông Quả Thực Gian Nan | Being a Man was Tough' },
  { num: 8, title: 'Chương 8: Tên | Name' },
  { num: 9, title: 'Chương 9: Cách Sống Của Đế Quốc | The Way of the Empire' },
  { num: 10, title: 'Chương 10: Tộc Nhân Shudraq | The People of Shudraq' },
  { num: 11, title: 'Chương 11: Nghi Thức Huyết Tế | The Lifeblood Ritual' },
  { num: 12, title: 'Chương 12: Đế Quốc Vollachia | The Vollachian Empire' }
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

function compileChapter({ num, title }) {
  const inPath = path.join(tempDir, `arc7_ch${num}_translated.json`);
  if (!fs.existsSync(inPath)) {
    console.error(`Translated file not found: ${inPath}`);
    return;
  }

  console.log(`Compiling Chapter ${num} to MDX...`);
  const data = JSON.parse(fs.readFileSync(inPath, 'utf-8'));
  const lines = [];

  lines.push('---');
  lines.push(`title: '${title}'`);
  lines.push(`chapter: ${num}`);
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

    const escapedEn = escapeXml(en);
    lines.push(`<Sentence en="${escapedEn}">`);
    lines.push(`  ${vi}`);
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
  console.log('All Arc 7 MDX files compiled successfully!');
}

run();
