import fs from 'fs'
import path from 'path'

const tempDir = path.join(process.cwd(), 'scripts', 'translation_temp')

const deepPolishReplacements = [
  // 1. Contextual sequence fixes first (highly targeted to prevent broken sub-replacements)
  [/(?<=\s|^)chắc chắn d dứt định d dẫu d dường như d dứt định d dẫu/gi, 'chắc chắn sẽ'],
  [/(?<=\s|^)chắc chắn dứt định đã dường như đã/gi, 'chắc chắn sẽ'],
  [/(?<=\s|^)chính xác chính là người d dẫu/gi, 'chính là người đã'],
  [/(?<=\s|^)người d dẫu/gi, 'người đã'],
  [/(?<=\s|^)nhất định d dẫu/gi, 'đã'],
  [/(?<=\s|^)nhất định đã/gi, 'đã'],
  [/(?<=\s|^)d dứt định d dẫu/gi, 'đã'],

  // 2. Double consonants and raw typing artifacts (Unicode-safe boundaries)
  [/(?<=\s|^)d dứt định/gi, 'nhất định'],
  [/(?<=\s|^)d dứt/gi, 'nhất'],
  [/(?<=\s|^)d dẫu/gi, 'đã'], // 'd dẫu' is almost always 'đã' in the raw drafts
  [/(?<=\s|^)d dường như/gi, 'dường như'],
  [/(?<=\s|^)d dường/gi, 'dường'],
  [/(?<=\s|^)d dồn dập/gi, 'dồn dập'],
  [/(?<=\s|^)d dốc toàn lực/gi, 'dốc toàn lực'],
  [/(?<=\s|^)d dấn thân/gi, 'dấn thân'],
  [/(?<=\s|^)d dâng hiến/gi, 'dâng hiến'],
  [/(?<=\s|^)d dời đi/gi, 'dời đi'],
  [/(?<=\s|^)d dời/gi, 'dời'],
  [/(?<=\s|^)d dỗ dành/gi, 'dỗ dành'],
  [/(?<=\s|^)d dũng mãnh/gi, 'dũng mãnh'],
  
  [/(?<=\s|^)q quyết chả/gi, 'quyết không'],
  [/(?<=\s|^)quyết chả/gi, 'không'],
  
  [/(?<=\s|^)độc độc vỏn vẹn/gi, 'chỉ vỏn vẹn'],
  [/(?<=\s|^)độc độc/gi, 'chỉ'],
  [/(?<=\s|^)phân một/gi, 'một'],
  [/(?<=\s|^)o o cùng/gi, 'vô cùng'],
  [/(?<=\s|^)o o/gi, ''],
  
  [/(?<=\s|^)c cướp đoạt/gi, 'cướp đoạt'],
  [/(?<=\s|^)c cự tuyệt/gi, 'cự tuyệt'],
  [/(?<=\s|^)c cảm thấy/gi, 'cảm thấy'],
  [/(?<=\s|^)c cảm thụ/gi, 'cảm thụ'],
  [/(?<=\s|^)c cảm giác/gi, 'cảm giác'],
  [/(?<=\s|^)c cản lối/gi, 'cản lối'],
  [/(?<=\s|^)c cất tiếng/gi, 'cất tiếng'],
  [/(?<=\s|^)c cất công/gi, 'cất công'],
  [/(?<=\s|^)c cỗ xe/gi, 'cỗ xe'],
  [/(?<=\s|^)c cọ cọ/gi, 'cọ cọ'],
  [/(?<=\s|^)c cúi đầu/gi, 'cúi đầu'],
  [/(?<=\s|^)c cứu giúp/gi, 'cứu giúp'],
  [/(?<=\s|^)c cứu rỗi/gi, 'cứu rỗi'],
  [/(?<=\s|^)c con/gi, 'con'],
  [/(?<=\s|^)c cào cào/gi, 'cào cào'],

  // 3. Remove spammed particles safely
  [/(?<=\s|^)(lị|sất|quèn)(?=[,\s.!?…”’—]|$)/gi, ''],

  // 4. Clumsy grammar and Sino-Vietnamese over-translation corrections
  [/(?<=\s|^)ngự trị trong sự tĩnh lặng vây kín/gi, 'trong sự tĩnh lặng bao trùm'],
  [/(?<=\s|^)quỳ rạp ngự trị trên nền cát/gi, 'quỳ rạp trên bãi cát'],
  [/(?<=\s|^)ngự trị tít sau lưng/gi, 'đứng ở phía sau'],
  [/(?<=\s|^)ngự trị trong đôi bàn tay nâng niu/gi, 'nằm trong lòng bàn tay'],
  [/(?<=\s|^)ngự trị trong lòng bàn tay/gi, 'nằm trong lòng bàn tay'],
  [/(?<=\s|^)ngự trị chốn nhân gian/gi, 'trên đời này'],
  [/(?<=\s|^)ngự trị dưới một niềm tin/gi, 'mang một niềm tin'],
  [/(?<=\s|^)ngự trị nơi tầng thứ ba/gi, 'nơi tầng ba'],
  [/(?<=\s|^)ngự trị trong trái tim/gi, 'trong trái tim'],
  [/(?<=\s|^)ngự trị sâu thẳm/gi, 'sâu thẳm'],
  [/(?<=\s|^)ngự trị nằm trên/gi, 'trên'],
  [/(?<=\s|^)ngự trị nơi/gi, 'nơi'],
  [/(?<=\s|^)ngự trị tại/gi, 'tại'],
  [/(?<=\s|^)ngự trị trên/gi, 'trên'],
  [/(?<=\s|^)ngự trị trong/gi, 'trong'],
  [/(?<=\s|^)ngự trị chốn/gi, 'chốn'],
  [/(?<=\s|^)ngự trị/gi, ''], // Clean standalone instances

  [/(?<=\s|^)không khả dĩ tìm kiếm nổi/gi, 'chẳng thể tìm nổi'],
  [/(?<=\s|^)không khả dĩ hoàn thành/gi, 'chẳng thể thực hiện'],
  [/(?<=\s|^)không khả dĩ/gi, 'không thể'],
  [/(?<=\s|^)quyết chả khả dĩ/gi, 'chẳng thể nào'],
  [/(?<=\s|^)khả dĩ/gi, 'có thể'],

  [/(?<=\s|^)nhất định không hề hay biết/gi, 'chẳng hề hay biết'],
  [/(?<=\s|^)nhất định không thể nào/gi, 'không thể nào'],
  [/(?<=\s|^)nhất định dẫu/gi, 'đã'],
  [/(?<=\s|^)nhất định dẫu dường như/gi, 'dường như'],
  [/(?<=\s|^)nhất định luôn tự/gi, 'lúc nào cũng'],
  [/(?<=\s|^)nhất định luôn/gi, 'lúc nào cũng'],

  [/(?<=\s|^)bắp tay vạm vỡ của Subaru/gi, 'cánh tay Subaru'],
  [/(?<=\s|^)bắp tay vạm vỡ/gi, 'cánh tay'],
  [/(?<=\s|^)hai lòng bàn tay nâng niu/gi, 'lòng bàn tay'],
  [/(?<=\s|^)đôi bàn tay nâng niu/gi, 'lòng bàn tay'],
  
  [/(?<=\s|^)Trần Trụi Nữ Nhân/gi, 'chị gái trần trụi'],
  [/(?<=\s|^)Trần Trụi Nữ/gi, 'chị trần trụi'],
  [/(?<=\s|^)khuôn mặt ngọc ngà của Subaru/gi, 'khuôn mặt Subaru'],
  [/(?<=\s|^)khuôn mặt ngọc ngà/gi, 'khuôn mặt'],
  [/(?<=\s|^)vành tai ngọc ngà/gi, 'vành tai'],

  [/(?<=\s|^)thảy thảy đều/gi, 'tất cả đều'],
  [/(?<=\s|^)thảy mọi thứ/gi, 'mọi thứ'],
  [/(?<=\s|^)thảy mọi người/gi, 'mọi người'],
  [/(?<=\s|^)thảy mọi/gi, 'mọi'],
  [/(?<=\s|^)thảy/gi, 'tất cả'],
  [/(?<=\s|^)bầy/gi, 'những'],

  [/(?<=\s|^)nhỏ xíu nhỏ xíu/gi, 'nhỏ xíu'],
  [/(?<=\s|^)khẽ khẽ cọ cọ/gi, 'khẽ cọ'],
  [/(?<=\s|^)khẽ cọ cọ/gi, 'khẽ cọ'],
  [/(?<=\s|^)khẽ khẽ run rẩy/gi, 'khẽ run rẩy'],
  [/(?<=\s|^)nỗ lực dốc toàn lực dỗ dành vỗ về/gi, 'vỗ về dỗ dành'],
  [/(?<=\s|^)dốc toàn lực dỗ dành vỗ về/gi, 'vỗ về dỗ dành'],

  [/(?<=\s|^)giọt sầu lệ/gi, 'giọt lệ'],
  [/(?<=\s|^)sầu lệ/gi, 'lệ'],
  [/(?<=\s|^)nhỏ giọt sầu lệ dẫu khóc nức nở/gi, 'rơi lệ khóc thương'],

  [/(?<=\s|^)món đạo cụ sân khấu quèn/gi, 'món đạo cụ sân khấu'],
  [/(?<=\s|^)đạo cụ sân khấu quèn/gi, 'đạo cụ sân khấu'],
  [/(?<=\s|^)sinh mệnh quèn/gi, 'mạng sống'],
  
  [/(?<=\s|^)đứng sừng sững đằng sau/gi, 'đứng ở phía sau'],
  [/(?<=\s|^)đứng sừng sững/gi, 'đứng'],

  [/(?<=\s|^)cũng Julius/gi, 'và Julius'],
  [/(?<=\s|^)cũng Meili/gi, 'và Meili'],
  [/(?<=\s|^)cũng Subaru/gi, 'và Subaru'],
  [/(?<=\s|^)cũng Ram/gi, 'và Ram'],
  [/(?<=\s|^)cũng Rem/gi, 'và Rem'],
  [/(?<=\s|^)cũng Beatrice/gi, 'và Beatrice'],
  [/(?<=\s|^)cũng chú bọ cạp/gi, 'và chú bọ cạp'],
  [/(?<=\s|^)cũng bầy/gi, 'cùng những'],

  [/(?<=\s|^)chắc chắn dứt định/gi, 'chắc chắn'],
  [/(?<=\s|^)chắc chắn d dứt định/gi, 'chắc chắn'],
  [/(?<=\s|^)dứt định/gi, 'nhất định'],
  [/(?<=\s|^)tái ngộ lại/gi, 'gặp lại'],
  [/(?<=\s|^)tái ngộ/gi, 'gặp lại'],

  [/(?<=\s|^)thực thể/gi, 'người'],
  [/(?<=\s|^)Sách Tử Nhân/gi, 'Sách Chết'],
  [/(?<=\s|^)Thần Long/gi, 'Thần Long'],
  [/(?<=\s|^)Ma Thú/gi, 'Ma Thú'],
]

const allowedReduplications = new Set([
  'băng băng',
  'khe khẽ',
  'nhè nhẹ',
  'từ từ',
  'dần dần',
  'đăm đăm',
  'khẽ khẽ',
  'nhún nhún',
  'cào cào',
  'cọ cọ',
  'thăm thẳm',
  'sừng sững',
  'bừng bừng',
  'cuồn cuộn',
  'chầm chậm',
  'xinh xinh',
  'nho nhỏ',
  'vun vút',
  'vời vợi',
  'đằng đẵng',
  'râm ran',
  'lao xao',
  'xào xạc',
  'vi vu',
  'bâng khuâng',
  'nhấp nhô',
  'trập trùng',
  'chập chờn',
  'nghẹn ngào',
  'ào ào'
]);

const uWord = '[a-zA-Z0-9àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]';
const regex3 = new RegExp(`(?:\\s+|^)(${uWord}+(?:\\s+${uWord}+){2})\\s+\\1(?=\\s+|[.,:!?…”’—]|$)`, 'gi');
const regex2 = new RegExp(`(?:\\s+|^)(${uWord}+(?:\\s+${uWord}+){1})\\s+\\1(?=\\s+|[.,:!?…”’—]|$)`, 'gi');
const regex1 = new RegExp(`(?:\\s+|^)(${uWord}+)\\s+\\1(?=\\s+|[.,:!?…”’—]|$)`, 'gi');

function removeAdjacentDuplicates(text) {
  let cleaned = text;
  let previous;
  
  do {
    previous = cleaned;
    
    // 1. Clean three-word repetitions (e.g. "dốc toàn lực dốc toàn lực")
    cleaned = cleaned.replace(regex3, (match, p1) => {
      const prefix = match.startsWith(' ') ? ' ' : '';
      return prefix + p1;
    });
    
    // 2. Clean two-word repetitions (e.g. "trói buộc trói buộc")
    cleaned = cleaned.replace(regex2, (match, p1) => {
      const prefix = match.startsWith(' ') ? ' ' : '';
      return prefix + p1;
    });
    
    // 3. Clean single-word repetitions with allowed list (e.g. "khóc khóc")
    cleaned = cleaned.replace(regex1, (match, p1) => {
      const prefix = match.startsWith(' ') ? ' ' : '';
      const redup = (p1 + ' ' + p1).toLowerCase();
      if (allowedReduplications.has(redup)) {
        return match;
      }
      return prefix + p1;
    });
    
  } while (cleaned !== previous);
  
  return cleaned;
}

function polishText(text) {
  let polished = text
  
  // Step 1: Remove custom systematic replacements
  for (const [regex, replacement] of deepPolishReplacements) {
    polished = polished.replace(regex, replacement)
  }
  
  // Step 2: Remove adjacent duplicated word sequences (Unicode-safe)
  polished = removeAdjacentDuplicates(polished)
  
  // Step 3: Specific particle boundary cleanup
  polished = polished.replace(/(?:\s+|^)lị(?=[,\s.!?…”’—]|$)/gi, '')
  polished = polished.replace(/(?:\s+|^)sất(?=[,\s.!?…”’—]|$)/gi, '')
  polished = polished.replace(/(?:\s+|^)quèn(?=[,\s.!?…”’—]|$)/gi, '')
  polished = polished.replace(/(?:\s+|^)bầy(?=[,\s.!?…”’—]|$)/gi, ' những')
  
  // Step 4: Spacing and punctuation cleanup
  polished = polished.replace(/\s+([,.:!?”’——])/g, '$1')
  polished = polished.replace(/“\s+/g, '“')
  polished = polished.replace(/—\s+/g, '—')
  polished = polished.replace(/\s+/g, ' ').trim()
  polished = polished.replace(/,\s*,/g, ',')
  polished = polished.replace(/\.\s*\./g, '.')
  
  return polished
}

function fixCapitalization(text) {
  let fixed = text
  
  // 1. Capitalize first letter of string
  fixed = fixed.replace(/^([a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ])/, (match) => match.toUpperCase())
  
  // 2. Capitalize letter after “
  fixed = fixed.replace(/^“([a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ])/, (match, p1) => "“" + p1.toUpperCase())
  
  // 3. Capitalize letter after —— or —
  fixed = fixed.replace(/^——([a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ])/, (match, p1) => "——" + p1.toUpperCase())
  fixed = fixed.replace(/^—([a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ])/, (match, p1) => "—" + p1.toUpperCase())
  
  // 4. Capitalize letter after punctuation like . or ? or ! inside quotes
  fixed = fixed.replace(/([.!?]“?\s+)([a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ])/g, (match, p1, p2) => p1 + p2.toUpperCase())
  
  return fixed
}

for (let part = 1; part <= 5; part++) {
  const fileName = `ch90_part${part}.json`
  const filePath = path.join(tempDir, fileName)
  
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`)
    continue
  }
  
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  let polishedCount = 0
  
  const polishedData = data.map(item => {
    const originalVi = item.vi
    let polishedVi = polishText(originalVi)
    polishedVi = fixCapitalization(polishedVi)
    
    if (originalVi !== polishedVi) {
      polishedCount++
    }
    return {
      en: item.en,
      vi: polishedVi
    }
  })
  
  fs.writeFileSync(filePath, JSON.stringify(polishedData, null, 2), 'utf-8')
  console.log(`Super polished ${fileName}: changed ${polishedCount} of ${data.length} sentences.`)
}
console.log('Super polish finished!')
