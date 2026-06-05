import fs from 'fs'
import path from 'path'

const rootDir = process.cwd()

console.log('Starting cleanup of temporary translation files...')

// 1. Clean root workspace directory
const rootFiles = fs.readdirSync(rootDir)
let rootDeletedCount = 0
for (const file of rootFiles) {
  if (
    (file.startsWith('ch') && file.endsWith('_raw.json')) ||
    (file.startsWith('ch') && file.match(/_part\d+_raw\.json$/))
  ) {
    const filePath = path.join(rootDir, file)
    fs.unlinkSync(filePath)
    console.log(`Deleted root file: ${file}`)
    rootDeletedCount++
  }
}

// 2. Clean scripts/translation_temp directory
const tempDir = path.join(rootDir, 'scripts', 'translation_temp')
let tempDeletedCount = 0
if (fs.existsSync(tempDir)) {
  const tempFiles = fs.readdirSync(tempDir)
  for (const file of tempFiles) {
    if (
      (file.startsWith('ch') && file.endsWith('.json')) ||
      (file.startsWith('ch') && file.endsWith('.html'))
    ) {
      const filePath = path.join(tempDir, file)
      fs.unlinkSync(filePath)
      console.log(`Deleted temp file: ${file}`)
      tempDeletedCount++
    }
  }
}

console.log(`Cleanup complete! Deleted ${rootDeletedCount} files from root and ${tempDeletedCount} files from scripts/translation_temp.`)
