import fs from 'fs'

const inputPath = 'C:\\Users\\ADMIN\\.gemini\\antigravity-ide\\brain\\0802019a-5947-40f4-8232-426663f6c557\\.system_generated\\steps\\1037\\content.md'
const content = fs.readFileSync(inputPath, 'utf-8')

const pMatches = content.match(/<p[^>]*>([\s\S]*?)<\/p>/gi)
if (pMatches) {
  console.log(`Found ${pMatches.length} <p> tags.`)
  for (let i = pMatches.length - 50; i < pMatches.length; i++) {
    console.log(`[${i}]: ${pMatches[i].substring(0, 120)}`)
  }
}
