import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tempDir = path.join(__dirname, 'translation_temp');
const rawPath = path.join(tempDir, 'arc7_ch24_raw.json');

const raw = JSON.parse(fs.readFileSync(rawPath, 'utf-8'));
console.log(`Loaded ${raw.length} paragraphs for chapter 24.`);

const part1 = raw.slice(0, 200);
const part2 = raw.slice(200, 400);
const part3 = raw.slice(400);

fs.writeFileSync(path.join(tempDir, 'ch24_part1_raw.json'), JSON.stringify(part1, null, 2), 'utf-8');
fs.writeFileSync(path.join(tempDir, 'ch24_part2_raw.json'), JSON.stringify(part2, null, 2), 'utf-8');
fs.writeFileSync(path.join(tempDir, 'ch24_part3_raw.json'), JSON.stringify(part3, null, 2), 'utf-8');

console.log(`Successfully split:`);
console.log(`- ch24_part1_raw.json: ${part1.length} paragraphs`);
console.log(`- ch24_part2_raw.json: ${part2.length} paragraphs`);
console.log(`- ch24_part3_raw.json: ${part3.length} paragraphs`);
