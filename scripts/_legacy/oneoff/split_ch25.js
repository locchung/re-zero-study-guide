import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tempDir = path.join(__dirname, 'translation_temp');
const rawPath = path.join(tempDir, 'arc7_ch25_raw.json');

const raw = JSON.parse(fs.readFileSync(rawPath, 'utf-8'));
console.log(`Loaded ${raw.length} paragraphs for chapter 25.`);

const part1 = raw.slice(0, 150);
const part2 = raw.slice(150);

fs.writeFileSync(path.join(tempDir, 'ch25_part1_raw.json'), JSON.stringify(part1, null, 2), 'utf-8');
fs.writeFileSync(path.join(tempDir, 'ch25_part2_raw.json'), JSON.stringify(part2, null, 2), 'utf-8');

console.log(`Successfully split:`);
console.log(`- ch25_part1_raw.json: ${part1.length} paragraphs`);
console.log(`- ch25_part2_raw.json: ${part2.length} paragraphs`);
