import fs from 'fs'

const raw = JSON.parse(fs.readFileSync('ch87_raw.json', 'utf-8'))
console.log(`Loaded ${raw.length} paragraphs for chapter 87.`)

const part1 = raw.slice(0, 120)
const part2 = raw.slice(120, 240)
const part3 = raw.slice(240)

fs.writeFileSync('ch87_part1_raw.json', JSON.stringify(part1, null, 2), 'utf-8')
fs.writeFileSync('ch87_part2_raw.json', JSON.stringify(part2, null, 2), 'utf-8')
fs.writeFileSync('ch87_part3_raw.json', JSON.stringify(part3, null, 2), 'utf-8')

console.log(`Successfully split:`)
console.log(`- ch87_part1_raw.json: ${part1.length} paragraphs`)
console.log(`- ch87_part2_raw.json: ${part2.length} paragraphs`)
console.log(`- ch87_part3_raw.json: ${part3.length} paragraphs`)
