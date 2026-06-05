import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tempDir = path.join(__dirname, 'translation_temp');

function splitChapter(chNum, splitIndex) {
  const rawPath = path.join(tempDir, `arc7_ch${chNum}_raw.json`);
  if (!fs.existsSync(rawPath)) {
    console.error(`Chapter raw file not found: ${rawPath}`);
    return;
  }

  const raw = JSON.parse(fs.readFileSync(rawPath, 'utf-8'));
  console.log(`Loaded ${raw.length} paragraphs for chapter ${chNum}.`);

  const part1 = raw.slice(0, splitIndex);
  const part2 = raw.slice(splitIndex);

  fs.writeFileSync(path.join(tempDir, `ch${chNum}_part1_raw.json`), JSON.stringify(part1, null, 2), 'utf-8');
  fs.writeFileSync(path.join(tempDir, `ch${chNum}_part2_raw.json`), JSON.stringify(part2, null, 2), 'utf-8');

  console.log(`Successfully split chapter ${chNum}:`);
  console.log(`- ch${chNum}_part1_raw.json: ${part1.length} paragraphs`);
  console.log(`- ch${chNum}_part2_raw.json: ${part2.length} paragraphs`);
}

splitChapter(27, 170);
splitChapter(28, 140);
splitChapter(29, 115);
splitChapter(30, 140);
