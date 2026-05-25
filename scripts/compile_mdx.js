import fs from 'fs'
import path from 'path'

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

const chapterNum = parseInt(process.argv[2])
const title = process.argv[3]

if (!chapterNum || !title) {
  console.error('Usage: node compile_mdx.js <chapterNum> <title>')
  process.exit(1)
}

const tempDir = path.join(process.cwd(), 'scripts', 'translation_temp')
const files = fs.readdirSync(tempDir)
  .filter(f => f.startsWith(`ch${chapterNum}_part`) && f.endsWith('.json'))
  .sort((a, b) => {
    const numA = parseInt(a.match(/_part(\d+)/)[1])
    const numB = parseInt(b.match(/_part(\d+)/)[1])
    return numA - numB
  })

console.log(`Found ${files.length} parts for chapter ${chapterNum}:`, files)

const allSentences = []
for (const file of files) {
  const filePath = path.join(tempDir, file)
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  allSentences.push(...data)
}

console.log(`Total sentences combined: ${allSentences.length}`)

const lines = []
lines.push('---')
lines.push(`title: '${title}'`)
lines.push(`chapter: ${chapterNum}`)
lines.push(`arc: 6`)
lines.push('---')
lines.push('')

for (const s of allSentences) {
  const en = s.en.trim()
  const vi = s.vi.trim()
  
  if (en === '※　※　※　※　※　※　※　※　※　※　※　※' || en === '※※　※　※　※　※　※　※　※　※　※　※　※') {
    lines.push('<Sentence en="※　※　※　※　※　※　※　※　※　※　※　※">')
    lines.push('  ※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※')
    lines.push('</Sentence>')
    lines.push('')
    continue
  }
  
  if (en === '※　※　※　※　※　※　※　※　※　※　※') {
    lines.push('<Sentence en="※　※　※　※　※　※　※　※　※　※　※">')
    lines.push('  ※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※')
    lines.push('</Sentence>')
    lines.push('')
    continue
  }

  const escapedEn = escapeXml(en)
  lines.push(`<Sentence en="${escapedEn}">`)
  lines.push(`  ${vi}`)
  lines.push(`</Sentence>`)
  lines.push('')
}

const mdxContent = lines.join('\n')
const outFile = path.join(process.cwd(), 'content', 'arc6', `chuong-${chapterNum}.mdx`)
fs.writeFileSync(outFile, mdxContent, 'utf-8')
console.log(`Successfully compiled to: ${outFile} (${mdxContent.length} bytes)`)
