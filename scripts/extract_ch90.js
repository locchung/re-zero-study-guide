import fs from 'fs'

const inputPath = 'C:\\Users\\ADMIN\\.gemini\\antigravity-ide\\brain\\0802019a-5947-40f4-8232-426663f6c557\\.system_generated\\steps\\1037\\content.md'
const content = fs.readFileSync(inputPath, 'utf-8')

const pMatches = content.match(/<p[^>]*>([\s\S]*?)<\/p>/gi)
const rawParagraphs = []

// The story starts at index 1 and ends at index 684. Let's verify and extract.
for (let i = 1; i <= 684; i++) {
  const p = pMatches[i]
  let cleaned = p
    .replace(/<p[^>]*>/gi, '')
    .replace(/<\/p>/gi, '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8212;/g, '—')
    .replace(/&#8230;/g, '...')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/<em>/g, '')
    .replace(/<\/em>/g, '')
    .trim()
  
  rawParagraphs.push(cleaned)
}

const header = [
  "※　※　※　※　※　※　※　※　※　※　※　※",
  "Translated By :",
  "Art Sources :",
  "※　※　※　※　※　※　※　※　※　※　※　※",
  "ALL RIGHTS BELONG TO TAPPEI NAGATSUKI, THE ORIGINAL AUTHOR OF RE:ZERO STARTING A LIFE IN A DIFFERENT WORLD FROM ZERO, THIS IS A TRANSLATION OF THE FREE JAPANESE WEB NOVEL INTO ENGLISH",
  "JAPANESE WEB NOVEL SOURCE",
  "※　※　※　※　※　※　※　※　※　※　※"
]

const finalParagraphs = [...header, ...rawParagraphs]

fs.writeFileSync('ch90_raw.json', JSON.stringify(finalParagraphs, null, 2), 'utf-8')
console.log(`Extracted ${finalParagraphs.length} paragraphs to ch90_raw.json`)
