import fs from 'fs';

const filePath = './scripts/translation_temp/arc7_ch49_translated.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

const targets = [
  'huơ', 'chạy', 'tưng', 'đằng', 'vẫy', 'kiểu', 'and', 'If', 'May'
];

for (const item of data) {
  const vi = item.vi || '';
  let found = false;
  // Match consecutive duplicates or exact words
  if (/huơ\s+huơ|tưng\s+tưng|đằng\s+đằng|vẫy\s+vẫy|kiểu\s+kiểu/i.test(vi)) found = true;
  if (/\band\b/i.test(vi) || /\bIf\b/i.test(vi) || /\bMay\b/i.test(vi)) found = true;
  if (/chạy,\s+chạy/i.test(vi)) found = true;

  if (found) {
    console.log(`ID: ${item.id}`);
    console.log(`  EN: ${item.en}`);
    console.log(`  VI: ${item.vi}`);
  }
}
