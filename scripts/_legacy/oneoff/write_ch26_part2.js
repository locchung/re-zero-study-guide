import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tempDir = path.join(__dirname, 'translation_temp');

const part2 = [
  {
    "id": 166,
    "en": "Kuna answered while shrugging her shoulders, and Subaru nodded saying “I see”.",
    "vi": "Kuna vừa nhún vai vừa trả lời, và Subaru gật đầu nói “Tôi hiểu rồi”."
  },
  {
    "id": 167,
    "en": "Soon after, he was at a loss as to where he should be in the room. In the first place, Subaru's position in this group wasn’t very clear.",
    "vi": "Ngay sau đó, cậu lúng túng không biết nên đứng ở vị trí nào trong phòng. Ngay từ đầu, vị thế của Subaru trong nhóm này vốn chẳng hề rõ ràng."
  },
  {
    "id": 168,
    "en": "Although he had been the one to plan the operation for the fall of Guaral, because of Arakiya and Priscilla’s intrusion it would be difficult for him to say he had been successful.",
    "vi": "Mặc dù cậu chính là người lập kế hoạch cho sự sụp đổ của Guaral, nhưng do sự xâm nhập của Arakiya và Priscilla, thật khó để nói rằng cậu đã hoàn toàn thành công."
  },
  {
    "id": 169,
    "en": "???: [Miss Natsumi, if you are in trouble, how about you sit next to me?]",
    "vi": "Giọng nói bí ẩn: [Tiểu thư Natsumi, nếu cô thấy bất tiện, cô ngồi cạnh tôi được chứ?]"
  },
  {
    "id": 170,
    "en": "And so, Zikr stood quickly and pulled a chair out in front of Subaru, who had been lost in thought.",
    "vi": "Nói rồi, Zikr nhanh chóng đứng dậy và kéo một chiếc ghế ra trước mặt Subaru, người vẫn đang chìm đắm trong suy nghĩ."
  },
  {
    "id": 171,
    "en": "Small and stocky, Zikr looked at Subaru and smiled like a gentleman. At his grin, Subaru pointed to himself,",
    "vi": "Dáng người thấp bé nhưng săn chắc, Zikr nhìn Subaru và mỉm cười lịch lãm như một quý ông. Trước nụ cười của ông ta, Subaru tự chỉ vào mình,"
  },
  {
    "id": 172,
    "en": "Subaru: [Um, I'm sure you've noticed this already, but you know I'm just crossdressing, right?]",
    "vi": "Subaru: [Ờm, tôi chắc chắn là ông đã nhận ra điều này rồi, nhưng ông biết tôi chỉ là đang giả gái thôi, đúng không?]"
  },
  {
    "id": 173,
    "en": "Zikr: [If you are posing as a woman, then I am also posing as a man. My idea of a man is to behave like a gentleman with a woman, regardless of who is posing as what.]",
    "vi": "Zikr: [Nếu cô đang đóng vai một người phụ nữ, thì tôi cũng đang đóng vai một người đàn ông. Khái niệm về đàn ông của tôi là cư xử lịch thiệp với phụ nữ, bất kể ai đang đóng vai gì.]"
  },
  {
    "id": 174,
    "en": "Subaru: [So this is the Womanizer…!]",
    "vi": "Subaru: [Hóa ra đây chính là Sát Thủ Tình Trường thực thụ…!]"
  },
  {
    "id": 175,
    "en": "Instead of using “womanizer” as a derogatory term, “womanizer” was used as a term of respect that had a different idea behind it.",
    "vi": "Thay vì dùng cụm từ này như một sự mỉa mai, nó được xem như một danh hiệu tôn kính mang một triết lý sống hoàn toàn khác biệt."
  },
  {
    "id": 176,
    "en": "Subaru was embarrassed to be dressed in women's clothing, but he took Zikr's advice and proceeded to sit down in the chair that had been pulled out for him.",
    "vi": "Subaru ngượng ngùng trong bộ trang phục nữ giới, nhưng cậu vẫn nghe theo lời khuyên của Zikr và tiến tới ngồi xuống chiếc ghế đã được kéo ra cho mình."
  },
  {
    "id": 177,
    "en": "Complementing that, Subaru gave Zikr a \"Pardon me,\" as he took his seat.",
    "vi": "Để tỏ lòng biết ơn, Subaru khẽ nói \"Xin phép ông,\" khi yên vị trên ghế."
  },
  {
    "id": 178,
    "en": "Subaru: [Also, thank you for protecting me upstairs, I would’ve been in danger if Zikr-san hadn't protected me.]",
    "vi": "Subaru: [Ngoài ra, cảm ơn ông vì đã bảo vệ tôi ở tầng trên, nếu Zikr-san không che chở thì tôi đã gặp nguy hiểm rồi.]"
  },
  {
    "id": 179,
    "en": "Zikr: [No, it was just a matter of my body moving in the spur of the moment. I do not know if I could repeat that feat next time. I am the Coward, after all.]",
    "vi": "Zikr: [Không đâu, đó chỉ là do cơ thể tôi tự động di chuyển trong khoảnh khắc đó thôi. Tôi chẳng biết liệu lần sau mình có thể lặp lại kỳ tích đó không. Dù sao thì tôi cũng là Kẻ Hèn Nhát mà.]"
  },
  {
    "id": 180,
    "en": "Upon hearing Subaru's thank you, Zikr proudly referred to himself as the Coward.",
    "vi": "Khi nghe lời cảm ơn của Subaru, Zikr tự hào tự gọi mình là Kẻ Hèn Nhát."
  },
  {
    "id": 181,
    "en": "This was because the Imperial General Second-Class, Zikr, had been remembered this way by the Emperor to whom he had sworn allegiance.",
    "vi": "Đó là vì vị Tướng nhị đẳng của Đế Quốc, Zikr, đã được ghi nhớ theo cách này bởi chính vị Hoàng đế mà ông thề trung thành."
  },
  {
    "id": 182,
    "en": "And Abel, the aforementioned Emperor who was held in such high esteem by the worthy Zikr――,",
    "vi": "Và Abel, vị Hoàng đế đã nói ở trên, người được kính trọng hết mực bởi Zikr――,"
  },
  {
    "id": 183,
    "en": "Abel: [――The Fortress City of Guaral has fallen, and the commander of the garrisoned troops, General Second-Class Zikr Osman, has shifted to our side, complementing the forces of the People of Shudraq of Buddheim Jungle.]",
    "vi": "Abel: [――Thành Lũy Guaral đã thất thủ, và chỉ huy quân đồn trú, Tướng nhị đẳng Zikr Osman, đã chuyển sang phe ta, bổ sung cho lực lượng của người tộc Shudraq từ Rừng Rậm Buddheim.]"
  },
  {
    "id": 184,
    "en": "Priscilla: [That is surely not enough. While I have heard of the bravery of the People of Shudraq, we are still far too weak to take the Empire on.]",
    "vi": "Priscilla: [Chắc chắn chừng đó là chưa đủ. Dù ta đã nghe danh sự dũng cảm của người tộc Shudraq, chúng ta vẫn còn quá yếu để đối đầu với cả Đế Quốc.]"
  },
  {
    "id": 185,
    "en": "Abel: [No doubt. Priscilla, where are your men?]",
    "vi": "Abel: [Không sai. Priscilla, binh lính của ngươi đâu rồi?]"
  },
  {
    "id": 186,
    "en": "Priscilla: [I do not have my private army in the Empire. Aside from that, the only people I could call my army include that clown in the iron helmet, a drunken swordsman, and a pipsqueak whose only qualification is his cute face.]",
    "vi": "Priscilla: [Ta không có quân đội riêng ở Đế Quốc này. Ngoại trừ việc đó ra, những người duy nhất ta có thể gọi là thuộc hạ gồm gã hề đội mũ sắt kia, một kiếm sĩ say rượu, và một thằng nhóc tì chỉ được mỗi khuôn mặt dễ nhìn.]"
  },
  {
    "id": 187,
    "en": "Abel: [――――]",
    "vi": "Abel: [――――]"
  },
  {
    "id": 188,
    "en": "While Subaru was in the room talking with Kuna, Abel and Priscilla were having their own discussion.",
    "vi": "Trong khi Subaru đang ở trong phòng nói chuyện với Kuna, Abel and Priscilla cũng đang tự bàn luận."
  },
  {
    "id": 189,
    "en": "The two of them looked at each other thoughtfully as they gauged the other's strength and circumstances, but Subaru intervened with a \"Wait a minute\".",
    "vi": "Cả hai nhìn nhau đầy dò xét khi đánh giá thực lực và hoàn cảnh của đối phương, nhưng Subaru đã xen vào bằng một câu \"Chờ một chút\"."
  },
  {
    "id": 190,
    "en": "He had been pushed around completely and wished to not be left behind again.",
    "vi": "Cậu đã bị xoay chuyển hoàn toàn và không muốn lại bị bỏ lại phía sau thêm lần nào nữa."
  },
  {
    "id": 191,
    "en": "Priscilla: [What is the matter, foolish commoner? You are still present?]",
    "vi": "Priscilla: [Có chuyện gì vậy, tên thường dân ngu ngốc kia? Ngươi vẫn còn lảng vảng ở đây sao?]"
  },
  {
    "id": 192,
    "en": "Subaru: [I'm here, and I can't believe I'm saying this, but it's a hell of a thing that you can look at me without being impressed. The last time she saw me like this, Beako had nightmares for a good while.]",
    "vi": "Subaru: [Tôi vẫn ở đây, và tôi không tin là mình lại nói ra điều này, nhưng thật đáng kinh ngạc là cô nhìn tôi thế này mà chẳng có chút ấn tượng gì cả. Lần trước nhìn thấy tôi như thế này, Beako đã gặp ác mộng suốt một thời gian đấy.]"
  },
  {
    "id": 193,
    "en": "Priscilla: [I believe I had already given you a compliment concerning your attire. Surely you do not believe you shall receive a reward for pulling Al up with a dirty cloth?]",
    "vi": "Priscilla: [Ta tin là ta đã dành cho ngươi một lời khen ngợi về trang phục của ngươi rồi. Chắc chắn ngươi không nghĩ mình sẽ nhận được phần thưởng vì đã kéo Al lên bằng một tấm vải bẩn chứ?]"
  },
  {
    "id": 194,
    "en": "Subaru: [I’m not expecting anything! No, I kind of am. I'm hoping that you'll at least listen to me a little bit.]",
    "vi": "Subaru: [Tôi chẳng trông mong gì cả! Mà không, thực ra là có đấy. Tôi hy vọng cô ít nhất cũng sẽ chịu lắng nghe tôi một chút.]"
  },
  {
    "id": 195,
    "en": "Priscilla's eyes narrowed at Subaru, who was leaning forward with his hands on the roundtable.",
    "vi": "Ánh mắt của Priscilla nheo lại nhìn Subaru, người đang nhoài người về phía trước với hai tay chống lên bàn tròn."
  },
  {
    "id": 196,
    "en": "She looked as if she was trying to judge him, but Subaru was not afraid. Unlike before, Kuna and Zikr were here as well. That said, though, he felt like he made for a pathetic bulwark.",
    "vi": "Cô ta trông như đang cố phán xét cậu, nhưng Subaru không hề sợ hãi. Không giống như trước, Kuna và Zikr cũng ở đây. Tuy nhiên, cậu cảm giác như mình chỉ là một bức bình phong thảm hại."
  },
  {
    "id": 197,
    "en": "Subaru: [Anyway, why’re you even here? I can't get anywhere asking Al. Let’s hear it clearly from your mouth.]",
    "vi": "Subaru: [Dù sao thì, tại sao cô lại ở đây? Tôi chẳng moi được gì từ Al cả. Hãy để tôi được nghe rõ ràng từ chính miệng cô xem nào.]"
  },
  {
    "id": 198,
    "en": "Priscilla: [That is an annoying question. ...I am here to speak with that guy, Vincent Abellux.]",
    "vi": "Priscilla: [Một câu hỏi phiền phức. ...Ta đến đây để nói chuyện với gã kia, Vincent Abellux.]"
  },
  {
    "id": 199,
    "en": "Subaru: [――――]",
    "vi": "Subaru: [――――]"
  },
  {
    "id": 200,
    "en": "Jutting her chin in his direction, Priscilla replied as if this were something obvious. In response, Abel, who sat comfortably with crossed arms, closed one of his sable eyes, while the other swirled with complicated emotions.",
    "vi": "Hếch cằm về phía hắn, Priscilla trả lời như thể đây là điều hiển nhiên. Đáp lại, Abel, người đang ngồi thoải mái với hai tay khoanh trước ngực, khẽ nhắm một bên mắt đen lại, trong khi bên mắt còn lại dao động với những cảm xúc phức tạp."
  },
  {
    "id": 201,
    "en": "It was a bewildering look that could be of joy, anger, sorrow, pleasure, or something else, something inexplicable that unaffiliated to any of those feelings.",
    "vi": "Đó là một ánh nhìn bối rối có thể là vui, buồn, mừng, giận, hay thứ gì đó khác, một điều gì đó không thể giải thích nổi và không thuộc về bất kỳ cảm xúc nào trong số đó."
  },
  {
    "id": 202,
    "en": "Subaru: [Talk to Abel…? But how did you know where Abel was?]",
    "vi": "Subaru: [Nói chuyện với Abel…? Nhưng làm sao cô biết Abel ở đâu?]"
  },
  {
    "id": 203,
    "en": "Priscilla: [The throne of the Emperor, in the Imperial Capital of Lupugana, has a device that allows them to teleport elsewhere. Should they sense any potential political change, they may escape to the east through it. ――To the tomb where Emperors have been buried for generations.]",
    "vi": "Priscilla: [Ngai vàng của Hoàng đế, tại Hoàng Thủ Lupugana, có một thiết bị cho phép họ dịch chuyển đi nơi khác. Nếu họ cảm nhận được bất kỳ biến động chính trị tiềm tàng nào, họ có thể trốn thoát về phía đông thông qua nó. ――Tới lăng mộ nơi các Hoàng đế được chôn cất qua nhiều thế hệ.]"
  },
  {
    "id": 204,
    "en": "Subaru: [The Emperors’ Graveyard?]",
    "vi": "Subaru: [Nghĩa trang của các Hoàng đế ư?]"
  },
  {
    "id": 205,
    "en": "Priscilla: [That is where that mechanism would take him. I believe I am correct, Vincent… No, it is more convenient to call you Abel, presently.]",
    "vi": "Priscilla: [Đó là nơi mà cơ chế kia sẽ đưa hắn tới. Ta tin là ta đúng chứ, Vincent… Không, gọi ngươi là Abel vào lúc này có vẻ tiện hơn.]"
  },
  {
    "id": 206,
    "en": "Priscilla's eyes blazed red as she turned the conversation away from Subaru to Abel.",
    "vi": "Đôi mắt của Priscilla đỏ rực lên khi cô ta chuyển cuộc hội thoại từ Subaru sang Abel."
  },
  {
    "id": 207,
    "en": "Exhaling under her burning gaze, Abel nodded,",
    "vi": "Khẽ thở ra dưới ánh nhìn rực lửa của cô ta, Abel gật đầu,"
  },
  {
    "id": 208,
    "en": "Abel: [Yes, call me Abel, right now. At least, I am not qualified to call myself Emperor now that the throne has been taken from me.]",
    "vi": "Abel: [Đúng vậy, lúc này cứ gọi ta là Abel đi. Ít nhất, ta không có tư cách tự gọi mình là Hoàng đế một khi ngai vàng đã bị cướp đoạt.]"
  },
  {
    "id": 209,
    "en": "Priscilla: [Exceptional, law-abiding, and foolishly honest… In any case, you think too softly. It appears that during your time sitting on the Emperor's throne, you have forgotten how to stand up.]",
    "vi": "Priscilla: [Đặc biệt, tuân thủ luật pháp và thành thật đến ngu ngốc… Dù thế nào đi nữa, ngươi nghĩ quá đơn giản rồi. Có vẻ như trong thời gian ngồi trên ngai vàng Hoàng đế, ngươi đã quên mất cách đứng dậy rồi.]"
  },
  {
    "id": 210,
    "en": "Abel: [Gaze upon me, and tell me I have forgotten how to stand up.]",
    "vi": "Abel: [Hãy nhìn kỹ ta xem, rồi hãy phán xét rằng ta đã quên cách đứng lên hay chưa.]"
  },
  {
    "id": 211,
    "en": "Priscilla's unrelenting taunting did not deter Abel’s swarthiness.",
    "vi": "Lời chế giễu không ngừng của Priscilla không hề làm lung lay sự kiên định của Abel."
  },
  {
    "id": 212,
    "en": "At that moment, their gazes clashed feverishly, and the air in the conference room even smelled of rising heat. As it was, it seemed inevitable that the discussion would break down and fire would rage――,",
    "vi": "Ngay lúc đó, ánh mắt của họ va chạm nảy lửa, và không khí trong phòng hội nghị dường như cũng bốc lên hơi nóng hừng hực. Cứ đà này, có vẻ như cuộc thảo luận đổ vỡ và xung đột bùng phát là điều khó tránh khỏi――,"
  },
  {
    "id": 213,
    "en": "???: [Well, well, calm down, both of you. There's nothing to be gained by getting into trouble, right?]",
    "vi": "Giọng nói bí ẩn: [Nào nào, bình tĩnh lại đi cả hai người. Chẳng thu được lợi lộc gì từ việc gây gổ đâu đúng không?]"
  },
  {
    "id": 214,
    "en": "However, there was a man who had the audacity needed to poke at a powder keg on the verge of explosion while puffing on a cigarette.",
    "vi": "Tuy nhiên, có một gã sở hữu đủ sự gan góc cần thiết để chạm vào một thùng thuốc súng sắp phát nổ trong khi đang rít một hơi thuốc."
  },
  {
    "id": 215,
    "en": "It was Al who easily stepped into the uncomfortable atmosphere with what must have been a wry smile. Instead of sitting down, he remained standing, under the combined smoldering glares of both Abel and Priscilla.",
    "vi": "Chính Al là người dễ dàng bước vào bầu không khí khó chịu này với một nụ cười gượng gạo ẩn sau lớp mặt nạ. Thay vì ngồi xuống, hắn vẫn đứng vững trước ánh nhìn giận dữ của cả Abel và Priscilla."
  },
  {
    "id": 216,
    "en": "Al: [Even though the Princess acts like this, she’s got her cute sides too. As soon as she found out that she had to rush extra-fast to Guaral, she spurred her flying dragon at full speed, almost enough to exhaust him. That's how much she was looking forward to seeing you… Guah!?]",
    "vi": "Al: [Mặc dù Công chúa hành xử thế này, nhưng cô ấy cũng có những mặt đáng yêu lắm đấy. Ngay khi phát hiện ra mình phải tức tốc đến Guaral, cô ấy đã thúc phi long bay hết tốc lực, suýt nữa làm nó kiệt sức luôn. Cô ấy đã mong đợi được gặp lại ngài đến thế đấy… Ự hự!?]"
  },
  {
    "id": 217,
    "en": "Priscilla: [Such foolishness.]",
    "vi": "Priscilla: [Thật là ngu xuẩn.]"
  },
  {
    "id": 218,
    "en": "Al went behind Priscilla as he spoke and tried to defend her humanity, but his master did not take his thoughts to heart and slammed her fan into his stomach with fierce force.",
    "vi": "Al đi ra phía sau Priscilla vừa nói vừa cố gắng bảo vệ tính người của cô, nhưng chủ nhân của hắn không hề để tâm đến suy nghĩ đó và thẳng tay nện chiếc quạt vào bụng hắn với một lực cực mạnh."
  },
  {
    "id": 219,
    "en": "Al yelped and fell to one knee on the spot, his body bent into a crooked shape.",
    "vi": "Al ré lên một tiếng rồi quỳ rạp một gối xuống tại chỗ, cơ thể gập lại thành một hình thù vặn vẹo."
  },
  {
    "id": 220,
    "en": "Priscilla: [To presume to speak for what I feel is of hubris to the extreme. When did you become so full of yourself? Know your place, clown.]",
    "vi": "Priscilla: [Dám tự tiện phát ngôn thay cho cảm xúc của ta là kẻ kiêu ngạo đến cùng cực. Ngươi tự mãn từ khi nào thế hả? Hãy biết thân biết phận đi, tên hề.]"
  },
  {
    "id": 221,
    "en": "Al: [The fact that you're running out of patience’s proof enough… But you're really here to help, ain't you?]",
    "vi": "Al: [Việc Công chúa mất kiên nhẫn đã là bằng chứng quá đủ rồi… Nhưng quả thực cô đến đây để giúp đỡ đúng không?]"
  },
  {
    "id": 222,
    "en": "Priscilla: [――――]",
    "vi": "Priscilla: [――――]"
  },
  {
    "id": 223,
    "en": "Priscilla's crimson eyes narrowed as she revealed her displeasure at Al's words.",
    "vi": "Đôi mắt crimson của Priscilla nheo lại khi cô ta để lộ vẻ không hài lòng trước những lời của Al."
  },
  {
    "id": 224,
    "en": "But the fact that she did not explicitly deny it in words,  was a sign that Al's words had been right on the mark.",
    "vi": "Nhưng thực tế là cô ta không hề lên tiếng phủ nhận trực tiếp bằng lời nói, đó là một dấu hiệu cho thấy những gì Al nói đã trúng phóc."
  },
  {
    "id": 225,
    "en": "Subaru: [Priscilla came to help Abel...?]",
    "vi": "Subaru: [Priscilla đến đây để giúp đỡ Abel sao...?]"
  },
  {
    "id": 226,
    "en": "It seemed so unreal that Subaru was unable to shake the feeling of discomfort. Of course, looking at the results alone, there could not be any doubt that Priscilla had already helped Abel, Subaru and the others. However, her nature, as Subaru knew it, prevented him from being convinced.",
    "vi": "Chuyện đó có vẻ phi thực tế đến mức Subaru không thể xua tan cảm giác bất an. Tất nhiên, nếu chỉ nhìn vào kết quả, không còn nghi ngờ gì nữa khi Priscilla thực sự đã giúp đỡ Abel, Subaru và những người khác. Tuy nhiên, tính cách của cô ta, như Subaru đã biết, khiến cậu không thể bị thuyết phục hoàn toàn."
  },
  {
    "id": 227,
    "en": "Was fighting to protect someone, even if it had the benefit of defeating an enemy not of her liking, really logic that applied for the person known as Priscilla Barielle?",
    "vi": "Chiến đấu để bảo vệ ai đó, ngay cả khi nó mang lại lợi ích là đánh bại một kẻ thù không vừa mắt cô ta, liệu có thực sự là logic áp dụng cho người được gọi là Priscilla Barielle không?"
  },
  {
    "id": 228,
    "en": "Priscilla: [You have a gleam in your eyes that suggests unpleasant thoughts. Do you wish them to be gouged, foolish commoner?]",
    "vi": "Priscilla: [Ánh mắt của ngươi đang hiện lên những suy nghĩ không mấy dễ chịu đâu đấy. Ngươi có muốn ta móc mắt ngươi ra không, tên thường dân ngu ngốc kia?]"
  },
  {
    "id": 229,
    "en": "Subaru: [Don't look people in the eye and tell them something so scary. To be honest, I'm not sure how much I believe you…]",
    "vi": "Subaru: [Đừng có nhìn thẳng vào mắt người khác rồi buông lời đáng sợ như vậy chứ. Thú thật thì tôi chẳng biết nên tin cô bao nhiêu phần nữa…]"
  },
  {
    "id": 230,
    "en": "Priscilla: [――In any case, Abel, I understand that you reached the east using the mechanism on the throne. If that is the case, were you expecting me to join up with the People of Shudraq and come to the Fortress City?]",
    "vi": "Priscilla: [――Dù thế nào đi nữa, Abel, ta hiểu rằng ngươi đã đến phía đông bằng cách sử dụng cơ chế dịch chuyển trên ngai vàng. Nếu đúng như vậy, phải chăng ngươi đã tính trước chuyện ta sẽ liên kết với tộc Shudraq để tiến về Thành Lũy này?]"
  },
  {
    "id": 231,
    "en": "Subaru: [Expecting to be here…?]",
    "vi": "Subaru: [Tính trước là cô sẽ ở đây sao…?]"
  },
  {
    "id": 232,
    "en": "While Priscilla was admittedly exceptionally perceptive, Subaru found it difficult to fathom the circumstances that Abel had so readily accepted.",
    "vi": "Mặc dù Priscilla thừa nhận là cực kỳ nhạy bén, Subaru vẫn thấy khó lòng thấu hiểu nổi những tình cảnh mà Abel đã chấp nhận một cách dễ dàng như vậy."
  },
  {
    "id": 233,
    "en": "Certainly, the given conditions seemed to satisfy the speculation though.",
    "vi": "Dẫu sao thì, những điều kiện đưa ra có vẻ như đã thỏa mãn giả thuyết đó."
  },
  {
    "id": 234,
    "en": "Al: [Don't get it wrong, bro. The smart guys here are convinced. If we keep it together here, we can avoid trouble we don't wanna deal with.]",
    "vi": "Al: [Đừng hiểu lầm nhé, người anh em. Những kẻ thông minh ở đây đều đã bị thuyết phục rồi. Nếu chúng ta cùng đồng lòng ở chỗ này, chúng ta có thể tránh được những rắc rối mà bản thân không muốn dây vào.]"
  },
  {
    "id": 235,
    "en": "Subaru: [And you're okay with that…?]",
    "vi": "Subaru: [Và anh cũng thấy ổn với chuyện đó sao…?]"
  },
  {
    "id": 236,
    "en": "Al: [Good or bad, we'll just have to suck it up. Even if you try to fight, you'll lose. ――Because me and the Princess are gonna win anyway.]",
    "vi": "Al: [Dù tốt hay xấu, chúng ta cũng đành phải chấp nhận thôi. Ngay cả khi cậu cố gắng phản kháng, cậu vẫn sẽ thua cuộc. ――Bởi vì tôi và Công chúa kiểu gì cũng giành chiến thắng thôi.]"
  },
  {
    "id": 237,
    "en": "Subaru: [Oh…]",
    "vi": "Subaru: [Ồ…]"
  },
  {
    "id": 238,
    "en": "Al, still on his knees, slid up to Subaru and declared so with a whisper.",
    "vi": "Al, vẫn đang quỳ, nhích lại gần Subaru và thì thầm tuyên bố như vậy."
  },
  {
    "id": 239,
    "en": "To be honest, it was surprising for Subaru to hear Al assure him that they would win. Originally, Al had a tendency to draw an arbitrary line in regards to what was around him, rather than being humble.",
    "vi": "Thành thật mà nói, Subaru rất đỗi ngạc nhiên khi nghe Al cam đoan chắc nịch rằng họ sẽ thắng. Vốn dĩ, Al luôn có xu hướng vạch ra một ranh giới tùy tiện đối với thế giới xung quanh mình hơn là tỏ ra khiêm tốn."
  },
  {
    "id": 240,
    "en": "In fact, the other knights of Royal Candidates were all renowned and talented―― and neither Subaru nor Al were special enough to be overconfident among them.",
    "vi": "Trên thực tế, các hiệp sĩ khác của các ứng viên Vương nữ đều cực kỳ nổi tiếng và tài năng―― và cả Subaru lẫn Al đều không đủ đặc biệt để tự phụ trước mặt họ."
  },
  {
    "id": 241,
    "en": "This was why Subaru felt a certain amount of sympathy for Al.",
    "vi": "Đây là lý do tại sao Subaru cảm thấy có một sự đồng cảm nhất định dành cho Al."
  },
  {
    "id": 242,
    "en": "That was why his assertion here was so surprising to Subaru.",
    "vi": "Chính vì thế, lời khẳng định này của gã khiến Subaru vô cùng sửng sốt."
  },
  {
    "id": 243,
    "en": "Even though he seemed to be unchanging and unconcerned, change was coming. This was because of his master-servant relationship with Priscilla and the accompanying battle of the Royal Selection.",
    "vi": "Mặc dù gã có vẻ như không hề thay đổi và chẳng mấy quan tâm, nhưng sự thay đổi đang cận kề. Đó là bởi vì mối quan hệ chủ-tớ của hắn với Priscilla và cuộc chiến Tuyển Chọn Vương Nữ đi kèm."
  },
  {
    "id": 244,
    "en": "Al: [But I can only speak highly of those who have a chance of winning, even if it's only by a hundred millionth of a percent. In that respect, this Arakiya girl was in a class of her own. I couldn’t see any way to win.]",
    "vi": "Al: [Nhưng tôi chỉ đánh giá cao những ai có cơ hội chiến thắng, dù chỉ là một phần trăm tỷ cơ hội. Về mặt đó, con bé Arakiya kia ở một đẳng cấp hoàn toàn khác biệt. Tôi chẳng thấy có cách nào để thắng nổi.]"
  },
  {
    "id": 245,
    "en": "Subaru: […I see, the Nine Divine Generals are the strongest members of the Empire. You could say they're kinda like Reinhard and Julius in the Kingdom of Lugunica.]",
    "vi": "Subaru: […Tôi hiểu rồi, Cửu Thần Tướng là những kẻ mạnh nhất Đế Quốc. Có thể nói họ giống như Reinhard và Julius ở Vương Quốc Lugunica vậy.]"
  },
  {
    "id": 246,
    "en": "If one were to select the strongest members within the Kingdom of Lugunica, they would probably find that most of them would be knights. Reinhard and Julius dispensed being mentioned, Marcos, the captain of the Royal Guard, and Roswaal, the Head Magician of the Court, could likewise be included.",
    "vi": "Nếu chọn ra những người mạnh nhất trong Vương Quốc Lugunica, người ta có lẽ sẽ thấy hầu hết trong số họ đều là hiệp sĩ. Reinhard và Julius là đương nhiên rồi, Marcos, đội trưởng Cận Vệ Hoàng Gia, và Roswaal, Pháp sư Cung đình tối cao, cũng có thể được đưa vào danh sách."
  },
  {
    "id": 247,
    "en": "Subaru would also like to add Wilhelm and Garfiel to the list, and have an all-star lineup to face the Nine Divine Generals.",
    "vi": "Subaru cũng muốn thêm Wilhelm và Garfiel vào danh sách đó, để tạo nên một đội hình toàn sao đối đầu với Cửu Thần Tướng."
  },
  {
    "id": 248,
    "en": "Subaru: [No, that’s not important, no matter how many times you speak of the Nine Divine Generals, it's hard to believe that someone would be able to match Reinhard…]",
    "vi": "Subaru: [Không, chuyện đó không quan trọng, dẫu có nhắc đến Cửu Thần Tướng bao nhiêu lần đi nữa, thật khó để tin rằng lại có ai đó sánh ngang được với Reinhard…]"
  },
  {
    "id": 249,
    "en": "Abel: [――I am afraid that is not so.]",
    "vi": "Abel: [――Ta e là không phải như vậy đâu.]"
  },
  {
    "id": 250,
    "en": "Subaru: [What?]",
    "vi": "Subaru: [Cái gì?]"
  },
  {
    "id": 251,
    "en": "When Subaru tried to gauge the strength of the Nine Divine Generals as the most important opponent to be wary of, Abel said something that made him doubt his ears.",
    "vi": "Khi Subaru cố gắng ước lượng sức mạnh của Cửu Thần Tướng với tư cách là đối thủ đáng gờm nhất phải đề phòng, Abel đã nói một câu khiến cậu không tin nổi vào tai mình."
  },
  {
    "id": 252,
    "en": "What did he just say? ――That there’s a being that can rival Reinhard?",
    "vi": "Anh ta vừa nói cái gì cơ? ――Rằng có một sự tồn tại có thể địch lại Reinhard sao?"
  },
  {
    "id": 253,
    "en": "Subaru: [Are you saying that there are other bug characters like Reinhard?]",
    "vi": "Subaru: [Ý anh là có những nhân vật mạnh đến mức phi lý như Reinhard khác nữa sao?]"
  },
  {
    "id": 254,
    "en": "Zikr: [I'm not familiar with this vocabulary, but if you mean comparable, I will have to agree. The Nine Divine Generals have a First, above Arakiya.]",
    "vi": "Zikr: [Tôi không quen thuộc với từ ngữ này lắm, nhưng nếu cô ý chỉ sự tương đồng, tôi buộc phải đồng ý. Cửu Thần Tướng có vị trí Đệ Nhất, đứng trên cả Arakiya.]"
  },
  {
    "id": 255,
    "en": "Subaru: [The First of the Nine Divine Generals is...?]",
    "vi": "Subaru: [Đệ Nhất của Cửu Thần Tướng là...?]"
  },
  {
    "id": 256,
    "en": "Zikr: [――Cecilus Segmunt.]",
    "vi": "Zikr: [――Cecilus Segmunt.]"
  },
  {
    "id": 257,
    "en": "Next to Subaru, who opened his mouth with a gulp, Zikr quietly said those two words.",
    "vi": "Bên cạnh Subaru, người đang há hốc mồm kinh ngạc, Zikr lặng lẽ thốt ra cái tên đó."
  },
  {
    "id": 258,
    "en": "Subaru understood that it was a person's name, and that it was the name of the First Rank in question. The person with that name was the strongest of the Empire, the pride of Vollachia, an overpowered character.",
    "vi": "Subaru hiểu rằng đó là tên của một người, và là tên của kẻ giữ vị trí Đệ Nhất đang được nhắc tới. Người mang cái tên đó chính là kẻ mạnh nhất Đế Quốc, niềm tự hào của Vollachia, một sự tồn tại mạnh đến phi lý."
  },
  {
    "id": 259,
    "en": "Abel: [The Blue Lightning of Vollachia, as he is called, is a swordsman of the highest class, ranked alongside the Sword Saint of Lugunica, the Admirer of Kararagi, and the Mad Prince of Gusteko.]",
    "vi": "Abel: [Lam Lôi của Vollachia, đúng như danh xưng của hắn, là một kiếm sĩ thuộc đẳng cấp tối cao, được xếp ngang hàng với Kiếm Thánh của Lugunica, Kiếm Dã của Kararagi, và Cuồng Vương tử của Gusteko.]"
  },
  {
    "id": 260,
    "en": "Subaru: [Umm… I remember hearing that nickname before… So you're serious?]",
    "vi": "Subaru: [Ờm… Tôi nhớ là đã nghe thấy biệt danh đó ở đâu rồi… Anh nghiêm túc đấy chứ?]"
  },
  {
    "id": 261,
    "en": "Abel: [If you were to antagonize him, you would lose your head in the blink of an eye. That is the kind of man he is.]",
    "vi": "Abel: [Nếu ngươi đối đầu với hắn, đầu ngươi sẽ lìa khỏi cổ trong chớp mắt. Đó chính là kiểu người như hắn.]"
  },
  {
    "id": 262,
    "en": "Abel, who had his arms crossed, nodded in response to Subaru's question, as his cheeks tightened.",
    "vi": "Abel, người vẫn đang khoanh tay, gật đầu trước câu hỏi của Subaru trong khi cơ mặt căng thẳng."
  },
  {
    "id": 263,
    "en": "In this situation, there was no reason for Abel or Zikr to tell a lie or a joke. In other words, what they had spoken must be the simple truth.",
    "vi": "Trong tình thế này, chẳng có lý do gì để Abel hay Zikr nói dối hay đùa cợt. Nói cách khác, những gì họ vừa tuyên bố chắc chắn là sự thật hiển nhiên."
  },
  {
    "id": 264,
    "en": "Cecilus Segmunt, the strongest man in the Empire, who was as skilled as Reinhard.",
    "vi": "Cecilus Segmunt, người đàn ông mạnh nhất Đế Quốc, kẻ sở hữu võ nghệ ngang tầm Reinhard."
  },
  {
    "id": 265,
    "en": "Subaru felt a chill run down his spine as he wondered just how dangerous and fierce this superclass swordsman was.",
    "vi": "Subaru cảm thấy một luồng ớn lạnh chạy dọc sống lưng khi tự hỏi vị kiếm sĩ siêu việt này nguy hiểm và hung tàn đến mức nào."
  },
  {
    "id": 266,
    "en": "It was a battle of vast differences in strength. Being both outnumbered and outclassed in quality, how could they possibly hope to win?",
    "vi": "Đó là một trận chiến với sự chênh lệch quá lớn về thực lực. Khi vừa thiếu hụt về số lượng vừa thua kém xa về chất lượng, làm sao họ có thể hy vọng giành chiến thắng?"
  },
  {
    "id": 267,
    "en": "Al: […However, if you think about it that way, there's still some hope. The fact that I could beat Lil' Miss Arakiya, ranked Second, here, was a big win for us.]",
    "vi": "Al: […Tuy nhiên, nếu nghĩ theo hướng đó thì vẫn còn chút hy vọng. Việc đánh bại cô bé Arakiya xếp hạng Nhị đẳng ở đây thực sự là một thắng lợi lớn cho chúng ta đấy.]"
  },
  {
    "id": 268,
    "en": "Subaru: [Al…]",
    "vi": "Subaru: [Al…]"
  },
  {
    "id": 269,
    "en": "Despite the heavy mood of Subaru and the others, Al said this with a cheerful voice.",
    "vi": "Bất chấp tâm trạng nặng trĩu của Subaru và những người khác, Al vẫn nói bằng một giọng điệu vui vẻ."
  },
  {
    "id": 270,
    "en": "It was a very optimistic opinion, however it was also a reality that the others could not get on board as easily. However, taking in Al's spirit, Subaru exhaled, \"That's right\".",
    "vi": "Đó là một ý kiến cực kỳ lạc quan, dẫu vậy thực tế là những người khác không thể dễ dàng đồng tình như thế. Tuy nhiên, lấy lại tinh thần nhờ Al, Subaru thở ra, \"Đúng thế thật\"."
  },
  {
    "id": 271,
    "en": "If they only considered the negative side of things, they would not be able to make any progress. In fact, Subaru and his team had been able to conquer the Fortress City with minimal damage. They had even managed to add Priscilla and Al as reinforcements, although it was hard to state whether they were friend or foe.",
    "vi": "Nếu chỉ nghĩ về mặt tiêu cực của mọi chuyện, họ sẽ chẳng thể tiến bộ được chút nào. Trên thực tế, Subaru và đồng đội đã chiếm được Thành Lũy với tổn thất tối thiểu. Họ thậm chí còn có được Priscilla và Al làm viện binh đắc lực, dẫu chưa rõ họ là bạn hay thù."
  },
  {
    "id": 272,
    "en": "He was sure Rem would do her best to heal the injured Shudraqians, and Mizelda would return to the front lines. They could expect to see more of her relaxed, stoic demeanor, and all-around combat ability.",
    "vi": "Cậu chắc chắn Rem sẽ làm hết sức mình để chữa trị cho những người Shudraq bị thương, và Mizelda sẽ sớm trở lại tiền tuyến. Họ có thể mong đợi được thấy thêm vẻ ung dung, kiên nghị cùng khả năng chiến đấu toàn diện của cô ta."
  },
  {
    "id": 273,
    "en": "Henceforth――,",
    "vi": "Sau đây――,"
  },
  {
    "id": 274,
    "en": "Subaru: [Al’s right… It's great that we were able to defeat one of the Nine Divine Generals... and a pretty highly-ranked one at that. I'm sure she's got some information, considering her position.]",
    "vi": "Subaru: [Al nói đúng… Thật tuyệt vời khi chúng ta có thể đánh bại một trong Cửu Thần Tướng... lại còn là một kẻ có thứ hạng khá cao. Với vị trí của cô ta, chắc chắn cô ta nắm giữ không ít thông tin hữu ích.]"
  },
  {
    "id": 275,
    "en": "Al: [Yeah, you could say that! That's brilliant, bro. Information’s more valuable than gold during a war. Since she was left alive, let’s hear what she has to say.]",
    "vi": "Al: [Đúng vậy, có thể nói thế đấy! Thật xuất sắc, người anh em. Thông tin còn quý hơn vàng trong thời chiến. Vì cô ta vẫn còn sống, hãy xem cô ta có điều gì để khai ra nào.]"
  },
  {
    "id": 276,
    "en": "Subaru: [Right. She might have a lead…]",
    "vi": "Subaru: [Phải. Cô ta có thể nắm giữ manh mối…]"
  },
  {
    "id": 277,
    "en": "Subaru forced himself to get in the mood, and Al matched him. At that rate, the subject of the conversation changed toward the acquisition of information from Arakiya, who had been successfully captured alive.",
    "vi": "Subaru ép mình lấy lại khí thế, và Al cũng hưởng ứng theo. Cứ thế, chủ đề của cuộc đối thoại chuyển hướng sang việc khai thác thông tin từ Arakiya, người đã bị bắt sống thành công."
  },
  {
    "id": 278,
    "en": "???: [Wait, Subaru and Iron-Mask. I'm going to have to disagree with you on that.]",
    "vi": "Giọng nói bí ẩn: [Chờ đã, Subaru và Mặt Nạ Sắt. Về chuyện đó, tôi buộc phải không đồng tình với hai người rồi.]"
  },
  {
    "id": 279,
    "en": "But then Kuna, who was participating as the representative of Shudraq, intervened.",
    "vi": "Nhưng rồi Kuna, người tham gia với tư cách đại diện cho tộc Shudraq, đã lên tiếng can thiệp."
  },
  {
    "id": 280,
    "en": "As Subaru and Al turned around, Kuna stroked her own green-dyed hair, and said――,",
    "vi": "Khi Subaru và Al quay lại, Kuna vuốt mái tóc nhuộm xanh lá của mình, nói――,"
  },
  {
    "id": 281,
    "en": "Kuna: [That woman is dangerous. You never know what she'll do if she sees an opening. It's definitely better to kill her as soon as possible.]",
    "vi": "Kuna: [Ả ta quá nguy hiểm. Không ai biết ả sẽ làm gì nếu thấy sơ hở. Tốt nhất là nên kết liễu ả càng sớm càng tốt.]"
  },
  {
    "id": 282,
    "en": "Subaru: [I understand that, but that's too short-sighted. Killing her is not…]",
    "vi": "Subaru: [Tôi hiểu điều đó, nhưng như vậy thì thiển cận quá. Việc giết cô ta không phải là…]"
  },
  {
    "id": 283,
    "en": "Kuna: [The Chieftain ended up badly hurt already. I don't care what Subaru says, we and the others need to execute her.]",
    "vi": "Kuna: [Tộc trưởng đã bị thương nặng như vậy rồi. Bất kể Subaru có nói gì, chúng tôi và những người khác bắt buộc phải hành quyết ả.]"
  },
  {
    "id": 284,
    "en": "Kuna mentioned Arakiya’s execution upfront, and glared at Subaru with stubborn insistence.",
    "vi": "Kuna thẳng thừng đề xuất việc xử tử Arakiya, giận dữ lườm Subaru với sự khăng khăng bướng bỉnh."
  },
  {
    "id": 285,
    "en": "When she pointed out Mizelda's condition, Subaru had no choice but to keep his mouth shut. Her safety had been left to Rem, but even if her wounds healed, the fact that she had been injured would not disappear.",
    "vi": "Khi cô chỉ ra tình trạng của Mizelda, Subaru không còn cách nào khác ngoài việc im lặng. Sự an nguy của tộc trưởng đã được giao phó cho Rem, nhưng ngay cả khi vết thương lành lặn, sự thật rằng cô đã bị thương tổn nặng nề vẫn không hề biến mất."
  },
  {
    "id": 286,
    "en": "If the Shudraqians found that unforgivable, then Arakiya would have to pay the price.",
    "vi": "Nếu người tộc Shudraq coi đó là điều không thể tha thứ, thì Arakiya buộc phải trả giá bằng mạng sống."
  },
  {
    "id": 287,
    "en": "Subaru: [――――]",
    "vi": "Subaru: [――――]"
  },
  {
    "id": 288,
    "en": "While searching for a response to Kuna, Subaru glanced at Priscilla.",
    "vi": "Trong lúc tìm kiếm câu trả lời cho Kuna, Subaru liếc nhìn sang Priscilla."
  },
  {
    "id": 289,
    "en": "He wanted to see what kind of reaction Priscilla would have to Kuna's insistence on executing Arakiya, as she seemed to have an unusual relationship with her.",
    "vi": "Cậu muốn xem Priscilla sẽ phản ứng thế nào trước sự khăng khăng muốn xử tử Arakiya của Kuna, bởi cô ta có vẻ như có một mối quan hệ không hề tầm thường với Arakiya."
  },
  {
    "id": 290,
    "en": "However――,",
    "vi": "Tuy nhiên――,"
  },
  {
    "id": 291,
    "en": "Priscilla: [I have already decided on my attitude towards Arakiya. First and foremost, it was me who slashed down the back of that thing. Are those black eyes on your face merely decoration?]",
    "vi": "Priscilla: [Ta đã sớm quyết định thái độ đối với Arakiya rồi. Trước hết, chính ta là người đã chém gục gã đó từ phía sau. Đôi mắt đen kia trên mặt ngươi chỉ để làm cảnh thôi sao?]"
  },
  {
    "id": 292,
    "en": "Subaru: [Guh…]",
    "vi": "Subaru: [Gư…]"
  },
  {
    "id": 293,
    "en": "Priscilla: [I possess no intention to say anything for the sake of Arakiya. If her fate ends here, it will be part of Arakiya’s own path. ――Although it would be a shame.]",
    "vi": "Priscilla: [Ta không có ý định nói bất kỳ điều gì vì lợi ích của Arakiya. Nếu số phận của nó kết thúc ở đây, đó sẽ là một phần trên con đường của riêng nó. ――Dù vậy thì cũng thật đáng tiếc.]"
  },
  {
    "id": 294,
    "en": "Subaru: […I don't understand you at all.]",
    "vi": "Subaru: […Tôi thực sự chẳng hiểu nổi cô chút nào cả.]"
  },
  {
    "id": 295,
    "en": "Subaru shook his head at Priscilla, who spoke simply as she weighed the value of Arakiya's life.",
    "vi": "Subaru lắc đầu nhìn Priscilla, người phát ngôn một cách thản nhiên khi cân đo giá trị mạng sống của Arakiya."
  },
  {
    "id": 296,
    "en": "At the end of the day, their relationship seemed to be sour, but judging by Arakiya's attitude, it could have been intimate. Yet, Priscilla's attitude was terribly disconnected.",
    "vi": "Xét cho cùng, mối quan hệ giữa hai người họ có vẻ bất hòa, nhưng dựa vào thái độ của Arakiya, nó có thể đã từng rất thân thiết. Vậy mà, thái độ của Priscilla lại vô cùng thờ ơ lãnh đạm."
  },
  {
    "id": 297,
    "en": "As an outsider, Subaru had no idea what their relationship was like.",
    "vi": "Là một người ngoài cuộc, Subaru hoàn toàn mù tịt về mối quan hệ giữa họ."
  },
  {
    "id": 298,
    "en": "Subaru: [But if you die, it's all over. Life doesn't come back.]",
    "vi": "Subaru: [Nhưng một khi đã chết là hết. Mạng sống không thể lấy lại được đâu.]"
  },
  {
    "id": 299,
    "en": "Priscilla: [You dare to teach the value of life to me? Do you believe that I can misjudge the value of another's life?]",
    "vi": "Priscilla: [Ngươi dám dạy bảo ta về giá trị của mạng sống sao? Ngươi tin rằng ta có thể đánh giá sai giá trị sinh mạng của kẻ khác à?]"
  },
  {
    "id": 300,
    "en": "Subaru: [――. You're not omnipotent. Even you can make mistakes.]",
    "vi": "Subaru: [――. Cô không phải là đấng toàn năng. Ngay cả cô cũng có lúc phạm sai lầm thôi.]"
  },
  {
    "id": 301,
    "en": "Directly facing Priscilla, Subaru answered without a pause.",
    "vi": "Đối mặt trực diện với Priscilla, Subaru đáp lại không một chút do dự."
  },
  {
    "id": 302,
    "en": "As soon as he said that, the air in the room became tense.",
    "vi": "Ngay khi cậu dứt lời, bầu không khí trong căn phòng lập tức trở nên căng như dây đàn."
  },
  {
    "id": 303,
    "en": "Kuna and Zikr gasped, while Al could be seen putting his hand on the forehead of helmet. Subaru, too, was aware that he had said something foolish in a spur-of-the-moment manner.",
    "vi": "Kuna và Zikr nín thở, trong khi có thể thấy Al đang đặt tay lên trán mũ bảo hiểm của mình. Bản thân Subaru cũng nhận thức rõ rằng mình vừa phát ngôn một điều ngu ngốc trong lúc bốc đồng."
  },
  {
    "id": 304,
    "en": "Only after speaking those words, did he realize that it was a pattern that would likely end up with him losing his life by incurring Priscilla’s displeasure with those words.",
    "vi": "Chỉ sau khi thốt ra những lời đó, cậu mới nhận ra đây là hành vi rất dễ dẫn đến kết cục mất mạng vì dám chọc giận Priscilla."
  },
  {
    "id": 305,
    "en": "The next moment, he might be beheaded by that shining crimson sword.",
    "vi": "Rất có thể trong khoảnh khắc tiếp theo, đầu cậu sẽ lìa khỏi cổ bởi thanh bảo kiếm đỏ rực sáng loáng kia."
  },
  {
    "id": 306,
    "en": "But even so――,",
    "vi": "Nhưng dẫu vậy――,"
  },
  {
    "id": 307,
    "en": "Subaru: [I'm not wrong. Even you can be wrong.]",
    "vi": "Subaru: [Tôi không sai đâu. Ngay cả cô cũng có thể phạm sai lầm thôi.]"
  },
  {
    "id": 308,
    "en": "Again and again, Subaru repeated the statement that could cost him his life.",
    "vi": "Hết lần này đến lần khác, Subaru lặp lại lời khẳng định có thể tước đi mạng sống của mình."
  },
  {
    "id": 309,
    "en": "A moment later, in front of Subaru. Priscilla's eyes narrowed with a cold glare. And then, the scorching “death” that would make Subaru pay for his indiscretion――,",
    "vi": "Một lát sau, ngay trước mặt Subaru, đôi mắt Priscilla nheo lại with ánh nhìn lạnh lẽo. Và rồi, cái “chết” thiêu đốt bắt Subaru phải trả giá cho sự vô lễ của mình――,"
  },
  {
    "id": 310,
    "en": "Priscilla: [Even I can err, yes? It is a spiteful thing, really.]",
    "vi": "Priscilla: [Ngay cả ta cũng có thể sai sót sao? Quả thực là một lời nói đầy ác ý đấy.]"
  },
  {
    "id": 311,
    "en": "Never came.",
    "vi": "Đã không hề xảy đến."
  },
  {
    "id": 312,
    "en": "Subaru: [Eh…]",
    "vi": "Subaru: [Hả…]"
  },
  {
    "id": 313,
    "en": "Subaru's eyes widened in surprise, and he exhaled his clenched lungs.",
    "vi": "Đôi mắt Subaru mở to đầy kinh ngạc, và cậu khẽ thở phào nhẹ nhõm lồng ngực đang căng cứng."
  },
  {
    "id": 314,
    "en": "Taking one look at Subaru, Priscilla opened her fan noisily and directed her gaze past Subaru, its aim Kuna.",
    "vi": "Liếc nhìn Subaru một cái, Priscilla xòe quạt ra phát ra tiếng động lớn rồi hướng ánh nhìn qua vai Subaru, nhắm thẳng về phía Kuna."
  },
  {
    "id": 315,
    "en": "Priscilla: [Before we cut off that thing's head, it would be best to find a use for it.]",
    "vi": "Priscilla: [Trước khi chúng ta chặt đầu gã đó, tốt nhất nên tìm cách tận dụng giá trị của nó đã.]"
  },
  {
    "id": 316,
    "en": "Kuna: [――What, are you trying to tell us what to do? You're an outsider.]",
    "vi": "Kuna: [――Cái gì, ngươi đang cố ra lệnh cho chúng tôi sao? Ngươi chỉ là kẻ ngoài cuộc thôi.]"
  },
  {
    "id": 317,
    "en": "Priscilla: [If you wish to ignore my advice, do it.]",
    "vi": "Priscilla: [Nếu ngươi muốn phớt lờ lời khuyên của ta, thì cứ việc làm đi.]"
  },
  {
    "id": 318,
    "en": "Withdrawing her opinion, Priscilla's gaze stroked over Kuna's slender body as if it were attempting to burn her.",
    "vi": "Thu hồi lại ý kiến của mình, ánh mắt của Priscilla lướt qua thân hình mảnh mai của Kuna như thể muốn thiêu đốt cô ta."
  },
  {
    "id": 319,
    "en": "Hugging herself involuntarily, Kuna ended up naturally demonstrating the pressure that could be felt from that gaze. Unfortunately, Priscilla and Kuna were at different levels.",
    "vi": "Tự ôm lấy mình một cách vô thức, Kuna rốt cuộc đã thể hiện áp lực có thể cảm nhận rõ rệt từ ánh nhìn đó. Thật không may, Priscilla và Kuna ở những đẳng cấp hoàn toàn khác biệt."
  },
  {
    "id": 320,
    "en": "Al: [Honestly, I was a bit anxious. But now we're all on the same page!]",
    "vi": "Al: [Thú thật là tôi cũng hơi lo lắng một chút. Nhưng giờ thì chúng ta đã cùng chung quan điểm rồi!]"
  },
  {
    "id": 321,
    "en": "As if to break the tense atmosphere, Al struck the roundtable with his hand with force.",
    "vi": "Như để phá vỡ bầu không khí căng thẳng, Al vỗ mạnh tay xuống bàn tròn."
  },
  {
    "id": 322,
    "en": "Having thus attracted everyone’s attention, he looked at Subaru through his steel helmet and,",
    "vi": "Sau khi thu hút sự chú ý của mọi người theo cách đó, hắn nhìn Subaru qua chiếc mũ sắt của mình và,"
  },
  {
    "id": 323,
    "en": "Al: [It's good news that you didn't die, bro, but it's also good news that the world didn't lose that ero-kawaii girl. That said, when she wakes up, we'll talk――]",
    "vi": "Al: [Thật là tin tốt khi cậu không chết, người anh em, nhưng cũng thật may mắn khi thế gian này không mất đi cô bé gợi cảm dễ thương đó. Nói đoạn, khi cô ta tỉnh lại, chúng ta sẽ trò chuyện――]"
  },
  {
    "id": 324,
    "en": "???: [――Big problem~!]",
    "vi": "Giọng nói bí ẩn: [――Có chuyện lớn rồi~!]"
  },
  {
    "id": 325,
    "en": "Al was just about to summarize their opinions of what to do with Arakiya, when he heard the sound of hurried and panicked footsteps.",
    "vi": "Al vừa định tóm lược ý kiến của bọn họ về việc xử trí Arakiya, thì nghe thấy tiếng bước chân vội vã và hoảng loạn vang lên."
  },
  {
    "id": 326,
    "en": "It was Holly, her large body twisting around the entrance of the room, as she burst inside the conference hall with a flurry of footsteps and a panicked voice.",
    "vi": "Đó là Holly, thân hình hộ pháp của cô lách qua lối vào phòng khi cô lao vào trong sảnh hội nghị với một loạt bước chân dồn dập và chất giọng hoảng hốt."
  },
  {
    "id": 327,
    "en": "Her body and breath bounced as she drew everyone's attention, and there were words.",
    "vi": "Lồng ngực cô phập phồng và hơi thở gấp gáp khi cô thu hút sự chú ý của toàn bộ căn phòng, rồi buông ra những lời."
  },
  {
    "id": 328,
    "en": "Those were――,",
    "vi": "Những lời đó chính là――,"
  },
  {
    "id": 329,
    "en": "Holly: [A couple of Imperial Soldiers got in, and the Divine General we captured has escaped~!]",
    "vi": "Holly: [Một vài tên lính Đế Quốc đã lọt được vào đây, và vị Thần Tướng chúng ta bắt giữ đã trốn thoát mất rồi~!]"
  }
];

function run() {
  const outPath = path.join(tempDir, 'ch26_part2.json');
  fs.writeFileSync(outPath, JSON.stringify(part2, null, 2), 'utf-8');
  console.log(`Saved ${part2.length} paragraphs to ${outPath}`);
}

run();
