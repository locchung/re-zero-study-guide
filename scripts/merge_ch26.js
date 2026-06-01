import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tempDir = path.join(__dirname, 'translation_temp');

function run() {
  const parts = [];
  const partFiles = [
    'ch26_part1.json',
    'ch26_part2.json'
  ];

  for (const file of partFiles) {
    const filePath = path.join(tempDir, file);
    if (!fs.existsSync(filePath)) {
      console.error(`Part file not found: ${filePath}`);
      return;
    }
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    parts.push(...data);
  }

  // Ensure all paragraphs have unique sequential IDs
  const finalData = parts.map((item, index) => ({
    id: index + 1,
    en: item.en,
    vi: item.vi
  }));

  const outPath = path.join(tempDir, 'arc7_ch26_translated.json');
  fs.writeFileSync(outPath, JSON.stringify(finalData, null, 2), 'utf-8');
  console.log(`Successfully merged ${finalData.length} paragraphs to ${outPath}`);
}

run();
