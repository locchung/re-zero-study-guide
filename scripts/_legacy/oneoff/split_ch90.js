import fs from 'fs'

const raw = JSON.parse(fs.readFileSync('ch90_raw.json', 'utf-8'))
console.log(`Loaded ${raw.length} paragraphs for chapter 90.`)

const part1 = raw.slice(0, 140)
const part2 = raw.slice(140, 280)
const part3 = raw.slice(280, 420)
const part4 = raw.slice(420, 560)
const part5 = raw.slice(560)

fs.writeFileSync('ch90_part1_raw.json', JSON.stringify(part1, null, 2), 'utf-8')
fs.writeFileSync('ch90_part2_raw.json', JSON.stringify(part2, null, 2), 'utf-8')
fs.writeFileSync('ch90_part3_raw.json', JSON.stringify(part3, null, 2), 'utf-8')
fs.writeFileSync('ch90_part4_raw.json', JSON.stringify(part4, null, 2), 'utf-8')
fs.writeFileSync('ch90_part5_raw.json', JSON.stringify(part5, null, 2), 'utf-8')

console.log(`Successfully split:`)
console.log(`- ch90_part1_raw.json: ${part1.length} paragraphs`)
console.log(`- ch90_part2_raw.json: ${part2.length} paragraphs`)
console.log(`- ch90_part3_raw.json: ${part3.length} paragraphs`)
console.log(`- ch90_part4_raw.json: ${part4.length} paragraphs`)
console.log(`- ch90_part5_raw.json: ${part5.length} paragraphs`)
