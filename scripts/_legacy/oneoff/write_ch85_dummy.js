import fs from 'fs'
import path from 'path'

const ch85 = [
  {
    "en": "※　※　※　※　※　※　※　※　※　※　※　※",
    "vi": "※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※"
  },
  {
    "en": "Translated By :",
    "vi": "Dịch bởi:"
  },
  {
    "en": "Art Sources :",
    "vi": "Nguồn ảnh:"
  },
  {
    "en": "※　※　※　※　※　※　※　※　※　※　※　※",
    "vi": "※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※"
  },
  {
    "en": "ALL RIGHTS BELONG TO TAPPEI NAGATSUKI, THE ORIGINAL AUTHOR OF RE:ZERO STARTING A LIFE IN A DIFFERENT WORLD FROM ZERO, THIS IS A TRANSLATION OF THE FREE JAPANESE WEB NOVEL INTO ENGLISH",
    "vi": "Bản quyền thuộc về Tappei Nagatsuki, tác giả gốc của Re:Zero Starting Life in a Different World from Zero, đây là bản dịch phi thương mại từ bản Web Novel tiếng Nhật sang tiếng Anh."
  },
  {
    "en": "JAPANESE WEB NOVEL SOURCE",
    "vi": "Nguồn Web Novel tiếng Nhật"
  },
  {
    "en": "※　※　※　※　※　※　※　※　※　※　※",
    "vi": "※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※"
  },
  {
    "en": "ーーThe『Greatest Knight』, to name himself so entailed courage.",
    "vi": "——Để tự xưng tụng bản thân là 『Kỵ Sĩ Ưu Tú Nhất』, dứt định đòi hỏi một lòng dũng cảm phi thường vĩ đại."
  },
  {
    "en": "He indeed took pride in being called so, extolled so by others.",
    "vi": "Anh thực sự lấy làm kiêu hãnh tự hào khi được người đời xưng tụng gọi tên, được thảy mọi người tán dương ca tụng dường ấy."
  },
  {
    "en": "Looking down upon that Julius, the young girl narrowed her spherical eyes,",
    "vi": "Nhìn xuống một Julius đang quỳ rạp kính cẩn dường ấy, cô gái trẻ khẽ nheo đôi mắt tròn xoe của mình lại,"
  },
  {
    "en": "Anastasia: \"Really? I don't remember though...... but.\"",
    "vi": "Anastasia: “Thật ư? Tôi dẫu quyết chả nhớ gì cả...... thế nhưng.”"
  },
  {
    "en": "Julius: \"ーーーー\"",
    "vi": "Julius: “————”"
  },
  {
    "en": "Anastasia: \"At the first glance, I thought. ーーThat I gotta make this onii-san mine.\"",
    "vi": "Anastasia: “Ngay từ cái nhìn đầu tiên, tôi đã thầm nghĩ. ——Rằng tôi dứt định dẫu phải thu phục biến vị kỵ sĩ này thành của riêng tôi mà thôi lị.”"
  },
  {
    "en": "At such proximity, were the blazing, sparkling eyes of his eternally craving lord, revealing the intent to not relinquish anything and everything.",
    "vi": "Tại khoảng cách kề sát cự ly cực gần dường ấy, chính là đôi mắt lấp lánh rực cháy của vị chủ nhân vĩnh hằng đầy tham vọng, để lộ rõ mưu đồ ý đồ quyết chả bao giờ chịu buông bỏ bất kỳ thứ gì và mọi thứ trên đời."
  },
  {
    "en": "To the『Greed』seeking to obtain everything, Julius Juukulius devoted his sword once again.",
    "vi": "Hướng về phía vị 『Tham Lam』 đang khao khát đoạt lấy thảy mọi thứ trên thế gian, Julius Juukulius dứt khoát hiến dâng thanh kiếm kỵ sĩ của mình một lần nữa."
  },
  {
    "en": "A sublime play, like the tale of a lord and knight in fictionーー,",
    "vi": "Một vở kịch lộng lẫy tuyệt mỹ, tựa như câu chuyện truyền kỳ về minh quân và trung thần trong bầy tiểu thuyết viễn tưởng——,"
  },
  {
    "en": "The restoration of the plundered bond of『Lord and Retainer』, was realized in the second layer of『Electra』.",
    "vi": "Sự khôi phục tái sinh của sợi dây liên kết liên kết quân thần vốn bị cướp đoạt tàn nhẫn, dẫu được hiện thực hóa trọn vẹn tại tầng thứ hai 『Electra』."
  },
  {
    "en": "That was, the accomplishment of eliminating one of the five obstacles set forth by Natsuki Subaru.",
    "vi": "Đó chính là thành tựu vinh quang xóa sổ hoàn toàn một trong số năm trở ngại hiểm nghèo do Natsuki Subaru đề ra."
  },
  {
    "en": "Great Library Pleiádes, the second『Trial』ーー hereby concludes.",
    "vi": "Thư Viện Vĩ Đại Pleiades, 『Thử Thách』 thứ hai——chính thức kết thúc tại đây."
  }
];

// Let's create the dummy full array of 282 elements to make sure we don't drop paragraphs
// We will read ch85_raw.html and write the complete script programmatically or manually.
// Wait, the ch85 raw has 282 paragraphs, which is quite large. Let's write the complete translations.
// To do this, let's write a python or javascript translator script that generates it, or let's write the full ch85 JSON content.
// Since writing a 282-element JSON directly in a prompt can be very long and expensive, let's write the translation in 2 parts or write the complete JSON content in write_ch85_part1.js and write_ch85_part2.js, and compile them.
// Let's check: how many paragraphs are in ch85_raw.html? The extraction tool said "Extracted 282 paragraphs".
// Let's write a Node script that has the complete translations in two parts to be safe against context length and prompt truncation!
// Part 1: ch85_part1.json (paragraphs 1-140)
// Part 2: ch85_part2.json (paragraphs 141-282)
// This is exceptionally smart and robust, completely aligned with our "Divided Workflow" constraint!
// Let's write scripts/split_ch85.js to split the extracted paragraphs in ch85_raw.html into two JSON files.
// Wait, the extracted paragraphs are in `scripts/translation_temp/ch85_raw.html`. Yes, let's look at its format:
// Each paragraph is separated by '\n\n'.
// Let's write a Node script that splits them!
