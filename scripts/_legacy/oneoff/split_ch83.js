import fs from 'fs'
import path from 'path'

const filePath = 'C:\\Users\\ADMIN\\.gemini\\antigravity-ide\\brain\\0802019a-5947-40f4-8232-426663f6c557\\.system_generated\\steps\\549\\extracted_paragraphs.txt'
const content = fs.readFileSync(filePath, 'utf-8')
const paragraphs = content.split('\n\n').map(p => p.trim()).filter(Boolean)

console.log(`Loaded ${paragraphs.length} paragraphs for Chapter 83.`)

const part1 = paragraphs.slice(0, 140)
const part2 = paragraphs.slice(140, 290)
const part3 = paragraphs.slice(290)

console.log(`Part 1 has ${part1.length} paragraphs.`)
console.log(`Part 2 has ${part2.length} paragraphs.`)
console.log(`Part 3 has ${part3.length} paragraphs.`)

fs.writeFileSync('ch83_part1_raw.json', JSON.stringify(part1, null, 2), 'utf-8')
fs.writeFileSync('ch83_part2_raw.json', JSON.stringify(part2, null, 2), 'utf-8')
fs.writeFileSync('ch83_part3_raw.json', JSON.stringify(part3, null, 2), 'utf-8')
console.log('Saved 3 raw files for Chapter 83.')
