import fs from 'fs';
import path from 'path';

const tempDir = path.join(process.cwd(), 'scripts', 'translation_temp');
const partFiles = ['ch17_part1.json', 'ch17_part2.json', 'ch17_part3.json'];

for (const file of partFiles) {
  const filePath = path.join(tempDir, file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const normalized = content.normalize('NFC');
    fs.writeFileSync(filePath, normalized, 'utf-8');
    console.log(`Normalized ${file} to NFC.`);
  }
}
