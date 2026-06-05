import fs from 'fs'
import path from 'path'

const tempDir = path.join(process.cwd(), 'scripts', 'translation_temp')

const regexReplacements = [
  // 1. Particle "lị", "sất", "bầy" with custom Unicode boundaries
  [/(?:\s+|^)lị(?=[,\s.!?…”’—]|$)/g, ''],
  [/(?:\s+|^)sất(?=[,\s.!?…”’—]|$)/g, ''],
  [/(?:\s+|^)bầy(?=[,\s.!?…”’—]|$)/g, ' những'],
  [/(?:\s+|^)y y(?=[,\s.!?…”’—]|$)/g, ''],
  
  // 2. Draft double consonants / weird letter repetitions
  [/d dứt định/g, 'nhất định'],
  [/d dứt/g, 'nhất'],
  [/d dẫu/g, 'dẫu'],
  [/d dường như/g, 'dường như'],
  [/d dường/g, 'dường'],
  [/d dồn dập/g, 'dồn dập'],
  [/d dốc toàn lực/g, 'dốc toàn lực'],
  [/d dấn thân/g, 'dấn thân'],
  [/d dâng hiến/g, 'dâng hiến'],
  [/d dời đi/g, 'dời đi'],
  [/d dời/g, 'dời'],
  [/d dỗ dành/g, 'dỗ dành'],
  [/d dũng mãnh/g, 'dũng mãnh'],
  
  [/q quyết chả/g, 'quyết không'],
  [/quyết chả/g, 'không'],
  
  [/độc độc vỏn vẹn/g, 'chỉ vỏn vẹn'],
  [/độc độc/g, 'chỉ'],
  [/phân một/g, 'một'],
  [/o o cùng/g, 'vô cùng'],
  [/o o/g, ''],
  
  [/c cướp đoạt/g, 'cướp đoạt'],
  [/c cự tuyệt/g, 'cự tuyệt'],
  [/c cảm thấy/g, 'cảm thấy'],
  [/c cảm thụ/g, 'cảm thụ'],
  [/c cảm giác/g, 'cảm giác'],
  [/c cản lối/g, 'cản lối'],
  [/c cất tiếng/g, 'cất tiếng'],
  [/c cất công/g, 'cất công'],
  [/c cỗ xe/g, 'cỗ xe'],
  [/c cọ cọ/g, 'cọ cọ'],
  [/c cúi đầu/g, 'cúi đầu'],
  [/c cứu giúp/g, 'cứu giúp'],
  [/c cứu rỗi/g, 'cứu rỗi'],
  [/c con/g, 'con'],
  [/c cào cào/g, 'cào cào'],
  
  [/quèn/g, ''], // e.g. "món đạo cụ sân khấu quèn" -> "món đạo cụ sân khấu"

  // 3. Repeated word patterns
  [/thực thực/g, 'thực'],
  [/khóc khóc/g, 'khóc'],
  [/thì thầm thì thầm/g, 'thì thầm'],
  [/gào thét thét/g, 'gào thét'],
  [/gào thét gào thét/g, 'gào thét'],
  [/ôm ấp ôm ấp/g, 'ôm ấp'],
  [/siết chặt siết chặt/g, 'siết chặt'],
  [/đâm đăm nhìn/g, 'nhìn'],
  [/nhìn chăm chăm/g, 'nhìn'],
  [/nhìn đăm đăm/g, 'nhìn'],
  [/run rẩy run rẩy/g, 'run rẩy'],
  [/nóng bỏng nóng bỏng/g, 'nóng bỏng'],
  [/bộc lộ bộc lộ/g, 'bộc lộ'],
  [/thấu suốt thấu suốt/g, 'thấu suốt'],
  [/tuyên bố tuyên bố/g, 'tuyên bố'],
  [/đơn độc đơn độc/g, 'đơn độc'],
  [/kiên trì kiên trì/g, 'kiên trì'],
  [/đối mặt đối mặt/g, 'đối mặt'],
  [/gặp mặt gặp mặt/g, 'gặp mặt'],
  [/chắc chắn chắc chắn/g, 'chắc chắn'],
  [/ngọt ngào ngọt ngào/g, 'ngọt ngào'],
  [/dịu dàng dịu dàng/g, 'dịu dàng'],
  [/nhẹ nhàng nhẹ nhàng/g, 'nhẹ nhàng'],
  [/yêu thương yêu thương/g, 'yêu thương'],
  [/thay đổi đổi thay/g, 'thay đổi'],
  [/lãng quên lãng quên/g, 'lãng quên'],
  [/nguyện vọng nguyện vọng/g, 'nguyện vọng'],
  [/tin tưởng tin tưởng/g, 'tin tưởng'],
  [/hoàn toàn hoàn toàn/g, 'hoàn toàn'],
  [/lo lắng lo lắng/g, 'lo lắng'],
  [/thực sự thực sự/g, 'thực sự'],
  [/vô cùng vô cùng/g, 'vô cùng'],
  [/nhanh chóng nhanh chóng/g, 'nhanh chóng'],
  [/rõ ràng rõ ràng/g, 'rõ ràng'],
  [/xác nhận xác nhận/g, 'xác nhận'],
  [/cư xử cư xử/g, 'cư xử'],
  [/ngượng ngùng ngượng ngùng/g, 'ngượng ngùng'],
  [/đỡ lấy đỡ lấy/g, 'đỡ lấy'],
  [/sống động sống động/g, 'sống động'],
  [/phân tán phân tán/g, 'phân tán'],
  [/âu yếm âu yếm/g, 'âu yếm'],
  [/gạt đi gạt đi/g, 'gạt đi'],
  [/bất chợt bỗng chốc/g, 'bất chợt'],
  [/bỗng chốc bỗng chốc/g, 'bỗng chốc'],
  [/nhỏ xíu nhỏ xíu/g, 'nhỏ xíu'],
  [/trợn tròn trợn tròn/g, 'trợn tròn'],
  [/gục ngã quỳ rạp quỳ rạp/g, 'quỳ rạp'],
  [/quỳ rạp quỳ rạp/g, 'quỳ rạp'],
  [/cát bụi bụi mịn mịn/g, 'cát bụi'],
  [/bụi mịn mịn/g, 'bụi mịn'],
  [/cát mịn mịn/g, 'cát mịn'],
  [/khẽ khẽ/g, 'khẽ'],
  [/từ từ từ từ/g, 'từ từ'],
  [/dần dần dần dần/g, 'dần dần'],
  [/mòn mỏi mòn mỏi/g, 'mòn mỏi'],
  [/rõ mồn một mồn một/g, 'rõ mồn một'],
  [/đậm sâu đậm sâu/g, 'đậm sâu'],
  [/trực tiếp trực tiếp/g, 'trực tiếp'],
  [/vô vàn vô vàn/g, 'vô vàn'],
  [/lờ mờ lờ mờ/g, 'lờ mờ'],
  [/hối hả hối hả/g, 'hối hả'],
  [/chạy băng băng băng/g, 'chạy băng băng'],
  [/chạy băng băng/g, 'chạy băng'],
  [/bay tơi tả tơi tả/g, 'bay tơi tả'],
  [/ao ước ao ước/g, 'ao ước'],
  [/khát khao khát khao/g, 'khát khao'],
  [/hỗ trợ hỗ trợ/g, 'hỗ trợ'],
  [/đáng lẽ đáng lẽ/g, 'đáng lẽ'],
  [/vỗ về vỗ về/g, 'vỗ về'],
  [/ảo ảnh ảo ảnh/g, 'ảo ảnh'],
  [/mộng tưởng mộng tưởng/g, 'mộng tưởng'],
  [/trói buộc trói buộc/g, 'trói buộc'],
  [/đóng đóng/g, 'đóng'],
  [/đục đẽo đục đẽo/g, 'đục đẽo'],
  [/trống hoác hoác/g, 'trống hoác'],
  [/hồn nhiên hồn nhiên/g, 'hồn nhiên'],
  [/phiền toái phiền toái/g, 'phiền toái'],
  [/kêu gào kêu gào/g, 'kêu gào'],
  [/cống hiến cống hiến/g, 'cống hiến'],
  [/tái ngộ tái ngộ/g, 'tái ngộ'],
  [/bão cát bão cát/g, 'bão cát'],
  [/chăm chú chăm chú/g, 'chăm chú'],
  [/u u tối tối/g, 'u tối'],
  [/thôi thúc thôi thúc/g, 'thôi thúc'],
  [/u sầu u sầu/g, 'u sầu'],
  [/gật đầu gật đầu/g, 'gật đầu'],
  [/buông buông/g, 'buông'],
  [/rỉ máu rỉ máu/g, 'rỉ máu'],
  [/chịu chịu/g, 'chịu'],
  [/anh trai trai/g, 'anh trai'],
  [/áp sát áp sát/g, 'áp sát'],
  [/gặm gặm/g, 'gặm'],
  [/tương phản tương phản/g, 'tương phản'],
  [/chưng minh chưng minh/g, 'chứng minh'],
  [/chứng minh chứng minh/g, 'chứng minh'],
  [/chứa đựng chứa đựng/g, 'chứa đựng'],
  [/trị liệu trị liệu/g, 'trị liệu'],
  [/cắn chặt cắn chặt/g, 'cắn chặt'],
  [/mở toang mở toang/g, 'mở toang'],
  [/vun vút vun vút/g, 'vun vút'],
  [/xộc xệch xộc xệch/g, 'xộc xệch'],
  [/trò chuyện trò chuyện/g, 'trò chuyện'],
  [/giãi bày giãi bày/g, 'giãi bày'],
  [/biệt ly biệt ly/g, 'biệt ly'],
  [/khó khăn khó khăn/g, 'khó khăn'],
  [/nhớ ra nhớ ra/g, 'nhớ ra'],
  [/che che/g, 'che'],
  [/nhớ nhớ/g, 'nhớ'],
  [/rất nhiều rất nhiều/g, 'rất nhiều'],
  [/chạy hối hả hối hả/g, 'chạy hối hả'],
  [/dồn dập dồn dập/g, 'dồn dập'],
  [/chăm chú đăm đăm nhìn/g, 'nhìn chăm chú'],
  [/chen ngang chen ngang/g, 'chen ngang'],
  [/tước đoạt tước đoạt/g, 'tước đoạt'],
  [/kết liễu kết liễu/g, 'kết liễu'],
  [/tiêu diệt tiêu diệt/g, 'tiêu diệt'],
  [/lừa dối lừa dối/g, 'lừa dối'],
  [/huyễn hoặc tự huyễn hoặc/g, 'huyễn hoặc'],
  [/vị kỷ vị kỷ/g, 'vị kỷ'],
  [/ích kỷ ích kỷ/g, 'ích kỷ'],
  [/công sức công sức/g, 'công sức'],
  [/trớ trêu trớ trêu/g, 'trớ trêu'],
  [/châm biếm châm biếm/g, 'châm biếm'],
  [/mòn mỏi mòn mỏi/g, 'mòn mỏi'],
  [/hồi tưởng hồi tưởng/g, 'hồi tưởng'],
  [/gieo rắc gieo rắc/g, 'gieo rắc'],
  [/thuần hóa thuần hóa/g, 'thuần hóa'],
  [/khôi phục khôi phục/g, 'khôi phục'],
  [/thức tỉnh thức tỉnh/g, 'thức tỉnh'],
  [/lo lắng lo lắng/g, 'lo lắng'],
  [/sốt ruột sốt ruột/g, 'sốt ruột'],
  [/tường thuật tường thuật/g, 'tường thuật'],
  [/dằn vặt dằn vặt/g, 'dằn vặt'],
  [/ủy mị ủy mị/g, 'ủy mị'],
  [/đồng thuận đồng thuận/g, 'đồng thuận'],
  [/ý kiến ý kiến/g, 'ý kiến'],
  [/vẫy vẫy/g, 'vẫy'],
  [/chào đón chào đón/g, 'chào đón'],
  [/đã lâu đã lâu/g, 'đã lâu'],
  [/tái tạo tái tạo/g, 'tái tạo'],
  [/hành xử hành xử/g, 'hành xử'],
]

function cleanText(text) {
  let cleaned = text
  for (const [regex, replacement] of regexReplacements) {
    cleaned = cleaned.replace(regex, replacement)
  }
  
  // Custom double checks
  cleaned = cleaned.replace(/(?:\s+|^)lị(?=[,\s.!?…”’—]|$)/g, '')
  cleaned = cleaned.replace(/(?:\s+|^)sất(?=[,\s.!?…”’—]|$)/g, '')
  cleaned = cleaned.replace(/(?:\s+|^)quèn(?=[,\s.!?…”’—]|$)/g, '')
  cleaned = cleaned.replace(/(?:\s+|^)bầy(?=[,\s.!?…”’—]|$)/g, ' những')
  
  // Clean up extra spaces around punctuation and multiple spaces
  cleaned = cleaned.replace(/\s+([,.:!?”’——])/g, '$1')
  cleaned = cleaned.replace(/“\s+/g, '“')
  cleaned = cleaned.replace(/—\s+/g, '—')
  cleaned = cleaned.replace(/\s+/g, ' ').trim()
  
  // Replace double commas or double periods
  cleaned = cleaned.replace(/,\s*,/g, ',')
  cleaned = cleaned.replace(/\.\s*\./g, '.')
  
  return cleaned
}

for (let part = 1; part <= 5; part++) {
  const fileName = `ch90_part${part}.json`
  const filePath = path.join(tempDir, fileName)
  
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`)
    continue
  }
  
  // Reload fresh copy from write_ch90_part*.js to run with clean replacements
  // Wait, let's just clean the current state since we can clean recursively or clean directly.
  // Actually, we can just run cleanText repeatedly until no more changes, or reload.
  // Let's run it on the current files. Since the current files are partially cleaned,
  // running cleanText on them will clean the remaining "lị", "sất", etc. beautifully!
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  let cleanedCount = 0
  
  const cleanedData = data.map(item => {
    const originalVi = item.vi
    const cleanedVi = cleanText(originalVi)
    if (originalVi !== cleanedVi) {
      cleanedCount++
    }
    return {
      en: item.en,
      vi: cleanedVi
    }
  })
  
  fs.writeFileSync(filePath, JSON.stringify(cleanedData, null, 2), 'utf-8')
  console.log(`Cleaned ${fileName}: changed ${cleanedCount} of ${data.length} sentences.`)
}
console.log('Draft cleanup finished!')
