import fs from 'fs'
import path from 'path'

function splitEnglish(text) {
  const cleaned = text
    .replace(/ALL RIGHTS BELONG TO TAPPEI NAGATSUKI[\s\S]*?※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※/g, '')
    .replace(/Translated by[\s\S]*?Proofread by[\s\S]*?Fan Art[\s\S]*?※※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※/g, '')
    .replace(/^[\s\S]*?――/m, '――')

  const sections = cleaned.split(/※※?\s*※\s*※\s*※\s*※?\s*※\s*※\s*※\s*※\s*※\s*※?\s*※\s*※/g)

  return sections
    .map((s) => s.trim())
    .filter((s) => s.length > 20 && !s.match(/^\d+\.\s/))
    .map((s) => s.replace(/\n\n/g, ' ').replace(/\n/g, ' ').replace(/\s+/g, ' ').trim())
}

function splitVietnamese(text) {
  const sections = text.split(/\n---\n/)
  return sections
    .map((s) => {
      const match = s.match(/\[S\d+\]\s*([\s\S]*)/)
      if (match) return match[1].trim()
      return null
    })
    .filter((s) => s && s.length > 5 && !s.startsWith('#') && !s.startsWith('※'))
    .map((s) => s.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim())
}

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function createMdx(chapterNum, arcNum, enParagraphs, vnParagraphs) {
  const lines = []
  lines.push('---')
  lines.push(`title: 'Chương ${chapterNum}'`)
  lines.push(`chapter: ${chapterNum}`)
  lines.push(`arc: ${arcNum}`)
  lines.push('---')
  lines.push('')

  const maxLen = Math.max(enParagraphs.length, vnParagraphs.length)

  for (let i = 0; i < maxLen; i++) {
    const en = enParagraphs[i] || ''
    const vn = vnParagraphs[i] || ''
    if (!en || !vn) continue

    const escapedEn = escapeXml(en)
    lines.push(`<Sentence en="${escapedEn}">`)
    lines.push(`  ${vn}`)
    lines.push(`</Sentence>`)
    lines.push('')
  }

  return lines.join('\n')
}

const chapterNum = parseInt(process.argv[2])
const arcNum = parseInt(process.argv[3])
const enFile = process.argv[4]
const vnFile = process.argv[5]

if (!chapterNum || !enFile) {
  console.error('Usage: node convert-to-mdx.mjs <chapterNum> <arcNum> <enFile> [vnFile]')
  process.exit(1)
}

const enText = fs.readFileSync(enFile, 'utf-8')
const enParagraphs = splitEnglish(enText)
console.error(`English paragraphs: ${enParagraphs.length}`)

let vnParagraphs = []
if (vnFile && fs.existsSync(vnFile)) {
  const vnText = fs.readFileSync(vnFile, 'utf-8')
  vnParagraphs = splitVietnamese(vnText)
  console.error(`Vietnamese paragraphs: ${vnParagraphs.length}`)
}

const mdx = createMdx(chapterNum, arcNum, enParagraphs, vnParagraphs)
const outFile = path.join(process.cwd(), 'content', 'arc6', `chuong-${chapterNum}.mdx`)
fs.writeFileSync(outFile, mdx, 'utf-8')
console.error(`Written: ${outFile} (${mdx.length} chars)`)
