import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tempDir = path.join(__dirname, 'translation_temp');

const part3 = [
  {
    "id": 201,
    "en": "Even if he was a beast of ambition, devoid of the slightest sense of responsibility or loyalty, he would play the role of a Divine General who faithfully obeyed the order of “no interference” given by the false Emperor.",
    "vi": "Dù lão có là một con dã thú đầy dã tâm, chẳng có lấy một chút tinh thần trách nhiệm hay lòng trung nghĩa, lão vẫn sẽ đóng vai một Tướng quan Thần thánh tuân thủ tuyệt đối mệnh lệnh \"không can thiệp\" do Hoàng đế giả ban xuống."
  },
  {
    "id": 202,
    "en": "Olbart: [That's, His Excellency’s ordered me ta stay out of it even tho’ you’ve declared war right ta his face. I'm not like Kafma, who gets mad all the time when it comes ta the Emperor. Not wise ta turn the foxgirl into an enemy, in this city.]",
    "vi": "Olbart: [Chuyện đó là, Bệ hạ đã ra lệnh cho ta đứng ngoài cuộc dẫu cho các nhóc đã tuyên chiến ngay trước mặt ngài ấy. Ta không giống Kafma, kẻ lúc nào cũng nổi đóa khi liên quan đến Hoàng đế đâu nha. Biến cô nàng cáo thành kẻ địch ở thành phố này thì không khôn ngoan đâu nha.]"
  },
  {
    "id": 203,
    "en": "As expected, despite Olbart hearing Subaru's appeal that could have just as well been derogatory, he nevertheless did not attempt to use force.",
    "vi": "Đúng như dự đoán, dẫu Olbart nghe thấy lời kêu gọi của Subaru vốn dĩ có thể coi là xúc phạm, lão vẫn không hề có ý định sử dụng vũ lực."
  },
  {
    "id": 204,
    "en": "However, he did not take kindly to Subaru's insistence, and his attitude naturally made Abel, Al and the others put into question whether the shinobi's absurd ambitions were true, or not.",
    "vi": "Tuy nhiên, lão không hề thiện cảm với sự quả quyết của Subaru, và thái độ của lão tự nhiên khiến Abel, Al cùng những người khác phải đặt dấu hỏi liệu dã tâm lố bịch của gã shinobi là thật hay giả."
  },
  {
    "id": 205,
    "en": "And――,",
    "vi": "Và――,"
  },
  {
    "id": 206,
    "en": "Abel: [――So would that be the ulterior motive dwelling within your heart that I was unable to conjecture?]",
    "vi": "Abel: [――Vậy ra đó chính là động cơ thầm kín ẩn sâu trong lòng ngươi mà ta không tài nào phỏng đoán nổi sao?]"
  },
  {
    "id": 207,
    "en": "Olbart: [Good grief, these guys just don’t get it. At this rate, I'll just have ta give up and acknowledge it's no use talkin’ ta ‘em.]",
    "vi": "Olbart: [Trời đất ơi, lũ nhóc này chẳng hiểu gì cả nha. Cứ đà này, ta đành phải bỏ cuộc và thừa nhận nói chuyện với tụi nó là vô ích thôi.]"
  },
  {
    "id": 208,
    "en": "Among those who were skeptical, Abel was the first to accept the unbelievable details.",
    "vi": "Giữa những kẻ đang nghi ngờ, Abel là người đầu tiên chấp nhận những chi tiết không thể tin nổi này."
  },
  {
    "id": 209,
    "en": "Pierced by the glint in his eyes, Olbart blurted out some excuse as if he didn’t feel like it. There had been no reason for Olbart to open his heart to Subaru and the others in earnest at this juncture from the get-go.",
    "vi": "Bị đâm thấu bởi tia sáng trong mắt gã, Olbart thốt ra lời bào chữa như thể lão chẳng màng bận tâm. Ngay từ đầu, Olbart đã không có lý do gì để thực sự mở lòng với nhóm Subaru tại thời điểm này."
  },
  {
    "id": 210,
    "en": "Naturally, Al and the rest of the fighters were getting more tense due to Olbart's attitude――,",
    "vi": "Lẽ tự nhiên, Al cùng những chiến binh còn lại càng thêm căng thẳng trước thái độ của Olbart――,"
  },
  {
    "id": 211,
    "en": "Olbart: [Stop it, stop it, you’ll only end up losin’ if ya start a fight. I’m tellin’ ya, the reason I won’t use violent methods with’cha isn’t ‘cause I'm nice, it's ‘cause I was told not to, aight? I’m prepared ta get even with’cha if ya folks make a move on me first.]",
    "vi": "Olbart: [Thôi đi, thôi đi nha, động thủ là các nhóc chỉ có thiệt thôi đấy chứ. Ta bảo này, lý do ta không dùng biện pháp bạo lực với các nhóc không phải vì ta tử tế, mà là vì ta được dặn không được làm thế, rõ chưa hả? Ta sẵn sàng ăn miếng trả miếng nếu các nhóc ra tay trước với ta đấy nha.]"
  },
  {
    "id": 212,
    "en": "Taritta: [Guh… That may be true…]",
    "vi": "Taritta: [Ưm... Có thể là vậy thật...]"
  },
  {
    "id": 213,
    "en": "They hadn't fought yet, but they’d be back at square one if they tried to start something. Taritta's cheeks tightened at Olbart's warning, her narrowed eyes darting a glance at Subaru and Medium.",
    "vi": "Họ chưa giao chiến, nhưng nếu cố tình khơi mào chuyện gì đó, họ sẽ lại quay về vạch xuất phát. Cơ má Taritta đanh lại trước lời cảnh báo của Olbart, đôi mắt nheo lại liếc nhìn sang Subaru và Medium."
  },
  {
    "id": 214,
    "en": "Seeing this, Olbart nodded his head as if to speak affirmatively,",
    "vi": "Chứng kiến cảnh đó, Olbart gật đầu như để khẳng định,"
  },
  {
    "id": 215,
    "en": "Olbart: [Bring back the shrunken ones, ya say. That's a tad greedy, don't’cha think? I'm thinkin’ of leavin’ without doin’ anythin’, okay?]",
    "vi": "Olbart: [Đòi biến bọn bị thu nhỏ trở lại bình thường sao. Như thế là hơi tham lam rồi đấy nha? Ta đang tính rời đi mà không làm gì đây này, được chứ hả?]"
  },
  {
    "id": 216,
    "en": "Medium: [But Gramps, you made us small, didn't you? Or is there anyone else besides Gramps who can bring us back to normal?]",
    "vi": "Medium: [Nhưng ông lão ơi, ông làm bọn tôi nhỏ lại mà đúng không? Hay là ngoài ông lão ra còn có ai khác biến bọn tôi trở lại bình thường được không nha?]"
  },
  {
    "id": 217,
    "en": "Olbart: [I've never really thought ‘bout it… Girl, how old are ya, really?]",
    "vi": "Olbart: [Ta chưa từng thực sự nghĩ về chuyện đó đâu nha... Cô bé, nhóc thực tế bao nhiêu tuổi rồi hả?]"
  },
  {
    "id": 218,
    "en": "Medium: [Me? I'm what, twenty?]",
    "vi": "Medium: [Tôi á? Chắc là hai mươi nha?]"
  },
  {
    "id": 219,
    "en": "Olbart: [Then maybe if ya wait ten years, you’ll go back ta normal? Dunno, tho’.]",
    "vi": "Olbart: [Thế thì có lẽ nếu nhóc đợi mười năm nữa, nhóc sẽ tự động trở lại bình thường chăng? Ta cũng không biết đâu nha.]"
  },
  {
    "id": 220,
    "en": "Medium raised her hand and asked a question, her cheeks reddening at his blunt answer. Albeit it was just Olbart’s bewildering attitude, his answer was troubling for Subaru and the others.",
    "vi": "Medium giơ tay hỏi một câu, hai má đỏ bừng trước câu trả lời cộc lốc của lão. Dẫu đó chỉ là thái độ gây hoang mang của Olbart, câu trả lời của lão vẫn khiến Subaru cùng những người khác lo ngại."
  },
  {
    "id": 221,
    "en": "But it was a fact that there was no way to get answers out of him by force, and no other method to undo what had been done.",
    "vi": "Thế nhưng, sự thật là không có cách nào dùng vũ lực ép lão khai ra câu trả lời, và cũng không có phương pháp nào khác để đảo ngược những gì đã xảy ra."
  },
  {
    "id": 222,
    "en": "And yet――,",
    "vi": "Dẫu vậy――,"
  },
  {
    "id": 223,
    "en": "Subaru: [You know you can't just pack up and go home. Olbart-san, I'm going to have to ask you to stay with us a little longer…]",
    "vi": "Subaru: [Ông biết mình không thể cứ thế phủi mông đi về mà. Olbart-san, tôi phải yêu cầu ông ở lại với chúng tôi thêm chút nữa...]"
  },
  {
    "id": 224,
    "en": "Olbart: [I don’t wanna, tho’. Since you’re treatin’ me like an ol’ man and all that. I'm an ol’ man with a short life ahead of me, and I got the right ta choose who I talk ta with the lil’ time I got.]",
    "vi": "Olbart: [Ta không muốn đâu nha. Nhất là khi nhóc cứ đối xử với ta như một lão già này nọ. Ta là một lão già sắp gần đất xa trời, và ta có quyền lựa chọn người để nói chuyện trong chút thời gian ngắn ngủi còn lại nha.]"
  },
  {
    "id": 225,
    "en": "Abel: [――Then, I shall present you with the opportunity to kill the Emperor.]",
    "vi": "Abel: [――Vậy thì, ta sẽ trao cho ngươi cơ hội sát hại Hoàng đế.]"
  },
  {
    "id": 226,
    "en": "Immediately after that, Subaru gasped at yet another change in atmosphere, and gazed the one who had spoken, Abel.",
    "vi": "Ngay sau đó, Subaru nín thở trước một sự thay đổi không khí khác, và chăm chú nhìn người vừa cất lời, chính là Abel."
  },
  {
    "id": 227,
    "en": "Abel had done nothing else than put his own life on the scales, that statement causing Olbart to scratch his head with an \"Oioi\",",
    "vi": "Abel chẳng làm gì khác ngoài việc đặt chính mạng sống của mình lên bàn cân, tuyên bố đó khiến Olbart gãi đầu kèm theo tiếng: “Ơ kìa”,"
  },
  {
    "id": 228,
    "en": "Olbart: [How many times do I gotta tell ya folks that yer premise’s wrong? Isn’t it pretty bad if ya can't remember things better than me?]",
    "vi": "Olbart: [Ta phải nói với các nhóc bao nhiêu lần là tiền đề của các nhóc sai bét rồi hả? Trí nhớ của các nhóc tệ hơn cả lão già này thì nguy to đấy nha?]"
  },
  {
    "id": 229,
    "en": "Abel: [If your goal is the Emperor's life, you have had many opportunities in the past. But you have not actualized it. ――Because the Flame of the Yang Sword protects the Emperor.]",
    "vi": "Abel: [Nếu mục tiêu của ngươi là mạng sống của Hoàng đế, ngươi đã có nhiều cơ hội trong quá khứ. Thế nhưng ngươi lại không hiện thực hóa nó. ――Bởi vì ngọn lửa Dương Kiếm bảo vệ Hoàng đế.]"
  },
  {
    "id": 230,
    "en": "Olbart: [Oh…]",
    "vi": "Olbart: [Ồ...]"
  },
  {
    "id": 231,
    "en": "Abel: [I can divulge how to overcome the Flame.]",
    "vi": "Abel: [Ta có thể tiết lộ cách vượt qua ngọn lửa đó.]"
  },
  {
    "id": 232,
    "en": "Olbart’s expression underwent a shift, becoming distinctly different from the facade he had held up until that point.",
    "vi": "Nét mặt của Olbart trải qua một sự biến chuyển, trở nên khác biệt rõ rệt so với lớp mặt nạ lão đeo cho đến thời điểm đó."
  },
  {
    "id": 233,
    "en": "The old man raised his eyebrows and stared at the oni mask-wearing Abel with clear surprise. Abel, on the other hand, had risen from his chair, standing there majestically.",
    "vi": "Lão già nhướng mày và nhìn trừng trừng vào Abel đeo mặt nạ quỷ với vẻ bất ngờ lộ rõ. Abel, mặt khác, đã đứng dậy khỏi ghế, đứng đó sừng sững uy nghiêm."
  },
  {
    "id": 234,
    "en": "Subaru: [The Flame, of the Yang Sword…]",
    "vi": "Subaru: [Ngọn lửa Dương Kiếm sao...]"
  },
  {
    "id": 235,
    "en": "What that meant, Subaru did not know for certain.",
    "vi": "Điều đó có nghĩa là gì, Subaru không dám chắc chắn."
  },
  {
    "id": 236,
    "en": "However, it was true that for Olbart, the shock was such that it made it possible to see through to the other side, breaking through the ostensible emotions that he had put up to this point.",
    "vi": "Thế nhưng, sự thật là đối với Olbart, cú sốc lớn đến mức có thể nhìn thấu sang khía cạnh khác, đập tan những cảm xúc bề nổi mà lão đã trưng ra cho đến tận lúc này."
  },
  {
    "id": 237,
    "en": "Based on the conversation, it was some sort of secret that protected the Emperor of Vollachia, and it was because of this that Olbart's ambition had not come to fruition thus far.",
    "vi": "Dựa trên cuộc trò chuyện, đó là một loại bí mật bảo hộ Hoàng đế Vollachia, và chính vì điều này mà dã tâm của Olbart cho đến nay vẫn chưa thể thành hiện thực."
  },
  {
    "id": 238,
    "en": "A method to remove those fetters and overcome them, that was what Abel had claimed.",
    "vi": "Một phương pháp để tháo gỡ xiềng xích đó và vượt qua chúng, đó chính là những gì Abel đã tuyên bố."
  },
  {
    "id": 239,
    "en": "Olbart: [――. I thought all ya did was hide yer face and not care for the elderly, who the hell are ya? Ya shouldn't joke ‘round ‘bout such things.]",
    "vi": "Olbart: [――. Ta cứ nghĩ ngươi chỉ biết che mặt và không kính trọng người già thôi chứ, ngươi rốt cuộc là kẻ nào hả? Đừng có đem những chuyện như thế ra làm trò đùa nha.]"
  },
  {
    "id": 240,
    "en": "Abel: [Is your belief really that someone who weaves sophistry and jokes in a place like this can raise a rebellion against this mighty Empire? If so, they would have to be either a madman bereft of sanity, or a great man with a lot of nerve.]",
    "vi": "Abel: [Ngươi thực sự tin rằng một kẻ ngụy biện và đùa giỡn ở một nơi thế này có thể dấy binh khởi nghĩa chống lại Đế quốc hùng mạnh này sao? Nếu có, kẻ đó hẳn phải là một tên điên mất trí, hoặc là một vĩ nhân có lá gan cực lớn.]"
  },
  {
    "id": 241,
    "en": "Olbart: [You're neither of those things, are ya?]",
    "vi": "Olbart: [Ngươi không thuộc kiểu nào trong số đó đúng không nhỉ?]"
  },
  {
    "id": 242,
    "en": "Abel: [Naturally.]",
    "vi": "Abel: [Lẽ đương nhiên.]"
  },
  {
    "id": 243,
    "en": "Concisely, Abel responded to Olbart's question.",
    "vi": "Ngắn gọn, Abel đáp lại câu hỏi của Olbart."
  },
  {
    "id": 244,
    "en": "Whether it was serious or just sophistry, Subaru could not decide. Or perhaps the man named Abel was the real deal, a madman, a great man, or all of those simultaneously.",
    "vi": "Cho dù đó là nghiêm túc hay chỉ là ngụy biện, Subaru cũng không thể đưa ra phán đoán. Hoặc giả, người đàn ông tên Abel chính là sự kết hợp thực tế của một kẻ điên, một vĩ nhân, hay tất cả những thứ đó cùng một lúc."
  },
  {
    "id": 245,
    "en": "Olbart: [――――]",
    "vi": "Olbart: [————]"
  },
  {
    "id": 246,
    "en": "In reaction to Abel's reply, Olbart fell silent for a moment.",
    "vi": "Đáp lại câu trả lời của Abel, Olbart im lặng trong một khoảnh khắc."
  },
  {
    "id": 247,
    "en": "He raised his bushy eyebrows and brought his now utterly cold cup of tea to his lips. Then, once he gently placed the empty teacup on the desk beside him,",
    "vi": "Lão nhướng đôi lông mày rậm rạp của mình lên và đưa tách trà giờ đã nguội ngắt lên môi nhấp một ngụm. Sau đó, khi lão nhẹ nhàng đặt tách trà rỗng lên chiếc bàn bên cạnh,"
  },
  {
    "id": 248,
    "en": "Olbart: [I believe you were talking about the bell of Fire Time.]",
    "vi": "Olbart: [Ta tin là các nhóc vừa nói về tiếng chuông Hỏa Giờ nha.]"
  },
  {
    "id": 249,
    "en": "Subaru: [Huh?]",
    "vi": "Subaru: [Hả?]"
  },
  {
    "id": 250,
    "en": "With that sudden question, Subaru let out a stupid-sounding voice.",
    "vi": "Trước câu hỏi đột ngột đó, Subaru thốt ra một giọng điệu nghe ngớ ngẩn."
  },
  {
    "id": 251,
    "en": "However, the one to reply immediately with “That’s right~” and a nod was Medium. Her body now smaller, she pointed out the window, indicating the majesty of the Crimson Lapis Castle,",
    "vi": "Thế nhưng, người lập tức gật đầu đáp lại bằng câu “Đúng vậy đó nha~” chính là Medium. Cơ thể giờ đã nhỏ lại, cô bé chỉ tay ra ngoài cửa sổ, hướng về phía vẻ tráng lệ của Hồng Ngọc Thành,"
  },
  {
    "id": 252,
    "en": "Medium: [Yorna-chan’s calling us, so we'll be in trouble if we stay small.]",
    "vi": "Medium: [Yorna-chan đang gọi bọn tôi đấy, nên nếu cứ nhỏ thế này thì nguy to đó nha.]"
  },
  {
    "id": 253,
    "en": "Olbart: [Yorna-chan! Kakakakka! You’ve got real balls, lass.]",
    "vi": "Olbart: [Yorna-chan sao! Kakakakka! Gan nhóc lớn thật đấy, cô bé.]"
  },
  {
    "id": 254,
    "en": "Medium: [――?]",
    "vi": "Medium: [――?]"
  },
  {
    "id": 255,
    "en": "He tilted his head, amazed by Medium's boldness in addressing Yorna with \"chan\".",
    "vi": "Lão nghiêng đầu, sửng sốt trước sự táo bạo của Medium khi gọi Yorna bằng hậu tố \"chan\"."
  },
  {
    "id": 256,
    "en": "At the same time, Olbart did the same, now calmed down, gazing towards the Crimson Lapis Castle, pointed to by Medium, as he muttered “Right”,",
    "vi": "Đồng thời, Olbart giờ đã bình tâm lại, hướng mắt nhìn về Hồng Ngọc Thành mà Medium vừa chỉ, lão lẩm bẩm: “Phải rồi”,"
  },
  {
    "id": 257,
    "en": "Olbart: [Putting aside the topic of whether I’m aimin’ for His Excellency’s life or not, I sure am curious ‘bout how ta get past the Yang Sword that protects the Emperor of Vollachia.]",
    "vi": "Olbart: [Bỏ qua chủ đề liệu ta có đang nhắm vào mạng sống của Bệ hạ hay không, ta quả thực vô cùng tò mò về cách vượt qua Dương Kiếm bảo vệ Hoàng đế Vollachia đấy nha.]"
  },
  {
    "id": 258,
    "en": "Subaru: [――Hk! If that’s the case…]",
    "vi": "Subaru: [――Hự! Nếu đã như vậy...]"
  },
  {
    "id": 259,
    "en": "Olbart: [Oh, com’on, it's too early ta tell. I'm the one who got yer hopes up, but I got a lotta things on my mind. ――So, why don't we play a game?]",
    "vi": "Olbart: [Ồ thôi nào, còn quá sớm để khẳng định đấy nha. Ta là người khơi dậy hy vọng cho các nhóc, cơ mà ta cũng đang có rất nhiều điều phải bận tâm. ――Vậy nên, sao chúng ta không chơi một trò chơi nhỉ?]"
  },
  {
    "id": 260,
    "en": "Subaru: […A game?]",
    "vi": "Subaru: [...Một trò chơi sao?]"
  },
  {
    "id": 261,
    "en": "Olbart: [Yes, a game. Ya like that, don't’cha? Boy.]",
    "vi": "Olbart: [Đúng vậy, một trò chơi. Nhóc thích thế đúng không nhỉ? Cậu bé.]"
  },
  {
    "id": 262,
    "en": "Thrusting his finger right in front of Subaru’s nose as the latter leaned forward, Olbart so declared.",
    "vi": "Chĩa thẳng ngón tay ngay trước mũi Subaru khi cậu rướn người về phía trước, Olbart tuyên bố như vậy."
  },
  {
    "id": 263,
    "en": "As his eyes had been wholly unable to follow that movement, Subaru went stiff, stuck in place.",
    "vi": "Vì đôi mắt hoàn toàn không thể theo kịp chuyển động đó, Subaru cứng đờ người, đứng chôn chân tại chỗ."
  },
  {
    "id": 264,
    "en": "Olbart presented some kind of condition, or a “game”, as he called it as a preface.",
    "vi": "Olbart đưa ra một loại điều kiện, hay một “trò chơi” như lời lão gọi để làm tiền đề."
  },
  {
    "id": 265,
    "en": "Subaru was not sure if this was the way he wanted to avoid complete annihilation and improve this stagnant situation, but――,",
    "vi": "Subaru không dám chắc liệu đây có phải là cách cậu muốn để tránh khỏi sự hủy diệt hoàn toàn và cải thiện tình hình bế tắc này hay không, thế nhưng――,"
  },
  {
    "id": 266,
    "en": "Subaru: [What if I said no?]",
    "vi": "Subaru: [Nếu tôi từ chối thì sao?]"
  },
  {
    "id": 267,
    "en": "Olbart: [Then ya won't be able to get anythin’ ya want.]",
    "vi": "Olbart: [Thế thì nhóc sẽ không nhận được bất cứ thứ gì mình muốn đâu nha.]"
  },
  {
    "id": 268,
    "en": "Subaru: [――――]",
    "vi": "Subaru: [————]"
  },
  {
    "id": 269,
    "en": "Olbart: [By the way, since ya folks got what’cha think I want, the shinobi's techniques’ll be comin’ down on ya folks without relent.]",
    "vi": "Olbart: [Nhân tiện nha, vì các nhóc đã nắm giữ thứ các nhóc nghĩ ta muốn, thuật của shinobi sẽ giáng xuống đầu các nhóc không ngừng nghỉ đâu đấy chứ.]"
  },
  {
    "id": 270,
    "en": "As if it were an obvious answer, Olbart made that ruthless announcement.",
    "vi": "Như thể đó là một câu trả lời hiển nhiên, Olbart đưa ra thông báo tàn nhẫn đó."
  },
  {
    "id": 271,
    "en": "The old man was smiling; the sight of the dark emotions stirring in the depths of his pale, cloudy eyes brought chills.",
    "vi": "Lão già đang mỉm cười; cảnh tượng những cảm xúc đen tối khuấy động sâu thẳm đôi mắt đục ngầu, nhợt nhạt của lão mang lại cảm giác ớn lạnh sống lưng."
  },
  {
    "id": 272,
    "en": "He may be having a peaceful and harmonious conversation on the surface, but under it, he was concealing a shinobi style of mercilessly reaping others’ lives.",
    "vi": "Bên ngoài lão có vẻ đang trò chuyện ôn hòa và thân thiện, song ẩn sâu dưới lớp vỏ ấy, lão đang che giấu phong thái của một shinobi sẵn sàng đoạt mạng kẻ khác không chút thương tiếc."
  },
  {
    "id": 273,
    "en": "Abel: [What shall the game be?]",
    "vi": "Abel: [Trò chơi đó là gì?]"
  },
  {
    "id": 274,
    "en": "Avoiding a bout with Olbart had been made impossible once he presented his conditions. Abel had sensed the same thing, and made his question in Subaru’s stead, the latter unable to open his mouth.",
    "vi": "Tránh né một cuộc giao chiến với Olbart đã trở thành điều bất khả thi một khi lão đưa ra các điều kiện. Abel cũng cảm nhận được điều tương tự, gã thay Subaru đặt câu hỏi khi cậu đang không thể mở miệng."
  },
  {
    "id": 275,
    "en": "Olbart nodded his head to that appeal, and said, “Right”,",
    "vi": "Olbart gật đầu trước câu hỏi đó, lão nói: “Phải rồi”,"
  },
  {
    "id": 276,
    "en": "Olbart: [We don't have much time before the fox girl calls ya, and I've been told not ta mess with’cha folks, so I'm in a bit of a pickle… Oh, that one’s perfect.]",
    "vi": "Olbart: [Chúng ta không có nhiều thời gian trước khi cô nàng cáo gọi các nhóc, vả lại ta cũng được dặn không được đụng vào các nhóc nên hơi tiến thoái lưỡng nan đây nha... Ồ, trò này thì hoàn hảo rồi.]"
  },
  {
    "id": 277,
    "en": "Subaru: [Perfect for who, Olbart-san? For us?]",
    "vi": "Subaru: [Hoàn hảo cho ai thế hả Olbart-san? Cho chúng tôi sao?]"
  },
  {
    "id": 278,
    "en": "Olbart: [For both of us, me and ya.]",
    "vi": "Olbart: [Cho cả hai bên, cả ta và các nhóc nha.]"
  },
  {
    "id": 279,
    "en": "With a toothy grin at Subaru's drawn-out question, Olbart showed his hands.",
    "vi": "Nhoẻn miệng cười để lộ răng trước câu hỏi kéo dài của Subaru, Olbart xòe hai bàn tay ra."
  },
  {
    "id": 280,
    "en": "Then turning to Subaru and the others bracing themselves, he spoke,",
    "vi": "Rồi quay sang phía Subaru cùng những người khác đang thủ thế phòng bị, lão nói,"
  },
  {
    "id": 281,
    "en": "Olbart: [――Tag.]",
    "vi": "Olbart: [――Đuổi bắt.]"
  },
  {
    "id": 282,
    "en": "Everyone: [――――]",
    "vi": "Mọi người: [————]"
  },
  {
    "id": 283,
    "en": "Olbart: [I’m used ta playin’ it with the young peeps from my village. Easy ta understand, isn't it?]",
    "vi": "Olbart: [Ta thường chơi trò này với tụi nhóc trong làng mình. Dễ hiểu đúng không nhỉ?]"
  }
];

fs.writeFileSync(path.join(tempDir, 'ch42_part3.json'), JSON.stringify(part3, null, 2), 'utf-8');
console.log('Saved ch42_part3.json');
