import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tempDir = path.join(__dirname, 'translation_temp');

function splitChapter(chNum, splits) {
  const rawPath = path.join(tempDir, `arc7_ch${chNum}_raw.json`);
  if (!fs.existsSync(rawPath)) {
    console.error(`Chapter raw file not found: ${rawPath}`);
    return;
  }

  const raw = JSON.parse(fs.readFileSync(rawPath, 'utf-8'));
  console.log(`\nLoaded ${raw.length} paragraphs for chapter ${chNum}.`);

  const parts = [];
  let prevIdx = 0;
  for (let i = 0; i < splits.length; i++) {
    parts.push(raw.slice(prevIdx, splits[i]));
    prevIdx = splits[i];
  }
  parts.push(raw.slice(prevIdx));

  parts.forEach((part, partIdx) => {
    const partNum = partIdx + 1;
    const outPath = path.join(tempDir, `ch${chNum}_part${partNum}_raw.json`);
    fs.writeFileSync(outPath, JSON.stringify(part, null, 2), 'utf-8');
    console.log(`- ch${chNum}_part${partNum}_raw.json: ${part.length} paragraphs`);
  });
}

// Split configuration
splitChapter('36', [100, 200]);
splitChapter('37', [95]);
splitChapter('38', [95, 190, 280]);
splitChapter('39', [110, 220, 330]);
