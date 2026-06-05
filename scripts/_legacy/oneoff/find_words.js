import fs from 'fs';
import path from 'path';

const tempDir = './scripts/translation_temp';
const files = ['ch50_part1.json', 'ch50_part2.json', 'ch50_part3.json'];

for (const file of files) {
  const filePath = path.join(tempDir, file);
  if (!fs.existsSync(filePath)) continue;
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  for (const item of data) {
    const vi = item.vi || '';
    if (/\bmay\b/i.test(vi) || /\bthan\b/i.test(vi)) {
      console.log(`File: ${file}, ID: ${item.id}`);
      console.log(`  EN: ${item.en}`);
      console.log(`  VI: ${item.vi}`);
    }
  }
}
