import fs from 'fs'
import path from 'path'

const rawFile = path.join(process.cwd(), 'scripts', 'translation_temp', 'ch85_raw.html')
const rawText = fs.readFileSync(rawFile, 'utf-8')
const paragraphs = rawText.split('\n\n').map(p => p.trim()).filter(Boolean)

console.log(`Total paragraphs found: ${paragraphs.length}`)

const part1Size = 150
const part2Size = 150

const part1 = paragraphs.slice(0, part1Size)
const part2 = paragraphs.slice(part1Size, part1Size + part2Size)
const part3 = paragraphs.slice(part1Size + part2Size)

fs.writeFileSync(
  path.join(process.cwd(), 'ch85_part1_raw.json'),
  JSON.stringify(part1, null, 2),
  'utf-8'
)
fs.writeFileSync(
  path.join(process.cwd(), 'ch85_part2_raw.json'),
  JSON.stringify(part2, null, 2),
  'utf-8'
)
fs.writeFileSync(
  path.join(process.cwd(), 'ch85_part3_raw.json'),
  JSON.stringify(part3, null, 2),
  'utf-8'
)

console.log(`Successfully split into:`)
console.log(`- ch85_part1_raw.json: ${part1.length} paragraphs`)
console.log(`- ch85_part2_raw.json: ${part2.length} paragraphs`)
console.log(`- ch85_part3_raw.json: ${part3.length} paragraphs`)
