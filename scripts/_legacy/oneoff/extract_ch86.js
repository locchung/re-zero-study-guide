import fs from 'fs'
import path from 'path'

const inputPath = 'C:\\Users\\ADMIN\\.gemini\\antigravity-ide\\brain\\0802019a-5947-40f4-8232-426663f6c557\\.system_generated\\steps\\788\\content.md'
const content = fs.readFileSync(inputPath, 'utf-8')

const lines = content.split('\n')
const rawParagraphs = []

// The story starts around line 1175: "Since long before, she had harboured misgivings."
// And ends around line 1570: "Never, can they echo, the same."
let insideStory = false

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim()
  
  if (line.includes('Since long before, she had harboured misgivings.')) {
    insideStory = true
  }
  
  if (insideStory) {
    // Clean up p tags and other HTML markup that might have been preserved in the download
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
    
    // Skip empty lines or meta tags
    if (cleaned && !cleaned.startsWith('<!') && !cleaned.startsWith('<div') && !cleaned.startsWith('</div') && !cleaned.startsWith('<a') && !cleaned.startsWith('<img')) {
      rawParagraphs.push(cleaned)
    }
  }
  
  if (line.includes('Never, can they echo, the same.') && insideStory) {
    break
  }
}

// Add the common header lines to rawParagraphs
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

fs.writeFileSync('ch86_raw.json', JSON.stringify(finalParagraphs, null, 2), 'utf-8')
console.log(`Extracted ${finalParagraphs.length} paragraphs to ch86_raw.json`)
