import fs from 'fs';

const filePath = './scripts/translation_temp/arc7_ch48_translated.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

for (const item of data) {
  const vi = item.vi || '';
  if (/giật giật|nghiêng nghiêng|giật\s+giật|nghiêng\s+nghiêng|\bmay\b|\bcan\b/giu.test(vi)) {
    console.log(`ID: ${item.id}`);
    console.log(`  EN: ${item.en}`);
    console.log(`  VI: ${item.vi}`);
  }
}
