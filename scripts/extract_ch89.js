import fs from 'fs'
import path from 'path'

const inputPath = 'C:\\Users\\ADMIN\\.gemini\\antigravity-ide\\brain\\0802019a-5947-40f4-8232-426663f6c557\\.system_generated\\steps\\982\\content.md'
const content = fs.readFileSync(inputPath, 'utf-8')

const lines = content.split('\n')
const rawParagraphs = []

let insideStory = false

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim()
  
  if (line === 'Ragged, ragged, scattering away.') {
    insideStory = true
  }
  
  if (insideStory) {
    let cleaned = line
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
      .trim()
    
    if (cleaned && !cleaned.startsWith('<!') && !cleaned.startsWith('<div') && !cleaned.startsWith('</div') && !cleaned.startsWith('<a') && !cleaned.startsWith('<img') && !cleaned.startsWith('- [')) {
      rawParagraphs.push(cleaned)
    }
  }
  
  if (line.includes('—That was something that not even the span of 400 years could fade, the color of Love.') && insideStory) {
    break
  }
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

fs.writeFileSync('ch89_raw.json', JSON.stringify(finalParagraphs, null, 2), 'utf-8')
console.log(`Extracted ${finalParagraphs.length} paragraphs to ch89_raw.json`)
