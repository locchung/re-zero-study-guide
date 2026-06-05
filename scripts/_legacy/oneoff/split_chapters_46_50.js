import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tempDir = path.join(__dirname, 'translation_temp');

function splitChapter(chNum, split1, split2) {
  const rawPath = path.join(tempDir, `arc7_ch${chNum}_raw.json`);
  if (!fs.existsSync(rawPath)) {
    console.error(`Chapter raw file not found: ${rawPath}`);
    return;
  }

  const raw = JSON.parse(fs.readFileSync(rawPath, 'utf-8'));
  console.log(`Loaded ${raw.length} paragraphs for chapter ${chNum}.`);

  const part1 = raw.slice(0, split1);
  const part2 = raw.slice(split1, split2);
  const part3 = raw.slice(split2);

  fs.writeFileSync(path.join(tempDir, `ch${chNum}_part1_raw.json`), JSON.stringify(part1, null, 2), 'utf-8');
  fs.writeFileSync(path.join(tempDir, `ch${chNum}_part2_raw.json`), JSON.stringify(part2, null, 2), 'utf-8');
  if (part3.length > 0) {
    fs.writeFileSync(path.join(tempDir, `ch${chNum}_part3_raw.json`), JSON.stringify(part3, null, 2), 'utf-8');
  }

  console.log(`Successfully split chapter ${chNum}:`);
  console.log(`- ch${chNum}_part1_raw.json: ${part1.length} paragraphs`);
  console.log(`- ch${chNum}_part2_raw.json: ${part2.length} paragraphs`);
  if (part3.length > 0) {
    console.log(`- ch${chNum}_part3_raw.json: ${part3.length} paragraphs`);
  }
}

// Split configurations for ch46 to ch50
splitChapter(46, 100, 200);
splitChapter(47, 110, 220);
splitChapter(48, 115, 230);
splitChapter(49, 120, 240);
splitChapter(50, 125, 250);
