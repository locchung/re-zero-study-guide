import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tempDir = path.join(__dirname, 'translation_temp');

const raw = JSON.parse(fs.readFileSync(path.join(tempDir, 'ch26_part2_raw.json'), 'utf-8'));
const trans = JSON.parse(fs.readFileSync(path.join(tempDir, 'ch26_part2.json'), 'utf-8'));

console.log(`Raw count: ${raw.length}`);
console.log(`Trans count: ${trans.length}`);

for (const r of raw) {
  const t = trans.find(x => x.en === r.en);
  if (!t) {
    console.log(`Missing: ID ${r.id} -> ${r.en}`);
  }
}
