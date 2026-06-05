import fs from 'fs';

const filePath = './scripts/translation_temp/arc7_ch46_translated.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

for (const item of data) {
  const vi = item.vi || '';
  if (/phép màu|ma thuật|phăm|mòng/i.test(vi)) {
    console.log(`ID: ${item.id}`);
    console.log(`  EN: ${item.en}`);
    console.log(`  VI: ${item.vi}`);
  }
}
