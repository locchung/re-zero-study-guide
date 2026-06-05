import fs from 'fs'

const raw = JSON.parse(fs.readFileSync('ch86_raw.json', 'utf-8'))
console.log(`Loaded ${raw.length} paragraphs for chapter 86.`)

const part1 = raw.slice(0, 130)
const part2 = raw.slice(130, 260)
const part3 = raw.slice(260)

fs.writeFileSync('ch86_part1_raw.json', JSON.stringify(part1, null, 2), 'utf-8')
fs.writeFileSync('ch86_part2_raw.json', JSON.stringify(part2, null, 2), 'utf-8')
fs.writeFileSync('ch86_part3_raw.json', JSON.stringify(part3, null, 2), 'utf-8')

console.log(`Successfully split:`)
console.log(`- ch86_part1_raw.json: ${part1.length} paragraphs`)
console.log(`- ch86_part2_raw.json: ${part2.length} paragraphs`)
console.log(`- ch86_part3_raw.json: ${part3.length} paragraphs`)
