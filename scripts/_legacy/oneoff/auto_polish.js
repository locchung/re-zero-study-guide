import fs from 'fs';
import path from 'path';

const tempDir = './scripts/translation_temp';
const files = [
  'arc7_ch46_translated.json',
  'arc7_ch48_translated.json',
  'arc7_ch49_translated.json',
  'arc7_ch50_translated.json'
];

const synonyms = {
  'dẫu': ['dù', 'mặc dù', 'cho dù', 'tuy', 'dù rằng'],
  'thực sự': ['thật sự', 'quả thật', 'quả nhiên', 'thực ra', 'quả quyết'],
  'vô cùng': ['cực kỳ', 'hết sức', 'rất', 'tột cùng'],
  'chắc chắn': ['hẳn là', 'tin rằng', 'không nghi ngờ gì', 'quả quyết'],
  'cơ thể': ['thân thể', 'hình hài', 'thân xác', 'tấm thân'],
  'dẫu vậy': ['tuy vậy', 'dù thế', 'dù vậy', 'thế nhưng'],
  'chợt': ['đột nhiên', 'bỗng dưng', 'chợt nhiên', 'bỗng'],
  'dường như': ['có vẻ', 'trông có vẻ', 'như thể', 'tựa như'],
  'thậm chí': ['ngay cả', 'đến cả', 'cả đến'],
  'tuy nhiên': ['song', 'nhưng', 'thế mà', 'vậy mà']
};

function capitalize(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function processFile(fileName) {
  const filePath = path.join(tempDir, fileName);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const wordCounts = {};
  for (const word of Object.keys(synonyms)) {
    wordCounts[word] = 0;
  }

  let replacedCount = 0;

  for (const item of data) {
    if (!item.vi) continue;
    let vi = item.vi;

    // Process longer phrases first to avoid partial replacements (e.g. 'dẫu vậy' before 'dẫu')
    const sortedWords = Object.keys(synonyms).sort((a, b) => b.length - a.length);

    for (const word of sortedWords) {
      // Regex to match the word with Unicode letter boundaries
      const regex = new RegExp(`(?<!\\p{L})(${word})(?!\\p{L})`, 'giu');
      vi = vi.replace(regex, (match) => {
        wordCounts[word]++;
        if (wordCounts[word] > 2) {
          replacedCount++;
          const list = synonyms[word];
          const syn = list[(wordCounts[word] - 3) % list.length];
          // Preserve capitalization
          const isCapitalized = match.charAt(0) === match.charAt(0).toUpperCase() && match.charAt(0) !== match.charAt(0).toLowerCase();
          return isCapitalized ? capitalize(syn) : syn;
        }
        return match;
      });
    }
    item.vi = vi;
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`Processed ${fileName}: replaced ${replacedCount} overused connectors.`);
  for (const [word, count] of Object.entries(wordCounts)) {
    if (count > 0) {
      console.log(`  - '${word}': saw ${count} times`);
    }
  }
}

for (const file of files) {
  processFile(file);
}
