import fs from 'fs'
import path from 'path'

const part2 = [
  {
    "en": "In other words, the perpetually slumbering Rem saw no dreams. ーーUnceasingly, she simply gazed into the darkness beyond her eyelids, merely respiring within a desolate, void world.",
    "vi": "Nói cách khác, Rem đang chìm trong giấc ngủ ngàn thu quyết chả hề nhìn thấy bất kỳ giấc mơ nào lị. ——Quyết chả hề ngơi nghỉ, cô bé chỉ đơn thuần đăm đăm nhìn vào khoảng tối tăm vô tận phía sau đôi mi khép chặt, độc độc vỏn vẹn hô hấp giữa một thế giới hoang vu, trống rỗng tột cùng."
  },
  {
    "en": "Thus, it was naught but a coincidence for her to have noticed this way of abusing said『Synesthesia』here.",
    "vi": "Chính vì lẽ đó, việc cô bé nhận ra phương pháp lạm dụng thứ gọi là 『Cộng Cảm』 ở nơi đây dứt định dẫu quyết chả ngoài một sự trùng hợp ngẫu nhiên thôi lị."
  },
  {
    "en": "Though irksome, it was by dint of Subaru's idea. Because he took up Ram's burden through a queer power and bestowed upon her the strength to fight, she conceived an idea accomplishing the same.",
    "vi": "Dẫu thật phiền toái vô cùng, song đó dứt định dẫu nhờ vào ý tưởng độc đáo của Subaru lị. Bởi lẽ cậu ta đã gánh vác trọn vẹn gánh nặng của Ram thông qua một thứ sức mạnh kỳ quặc ma mị và ban tặng cho cô dũng khí chiến đấu, cô dẫu sớm nảy sinh ra ý tưởng thực hiện điều tương tự."
  },
  {
    "en": "Those connected together with『Synesthesia』shared mighty sentiments, or even wounds and agony at times.",
    "vi": "Những thực thể liên kết chặt chẽ với nhau bằng 『Cộng Cảm』 dẫu khả dĩ san sẻ cho nhau những cảm xúc mãnh liệt phi thường, hay dẫu có lúc là cả những vết thương đau đớn cùng cực."
  },
  {
    "en": "Though she was ignorant of its principle, this hypothesis was there within a book in Beatrice's forbidden archive which she had once read in the past.",
    "vi": "Dẫu cho cô quyết chả hề hay biết về nguyên lý cốt lõi của nó, giả thuyết này vốn dĩ đã được ghi chép trong một cuốn sách cổ thuộc thư viện cấm của Beatrice mà cô từng có dịp đọc qua trước đây."
  },
  {
    "en": "ーーThat what was termed as『Synesthesia』, operated with the connection of the Od between two differing individuals.",
    "vi": "——Rằng thứ được gọi là 『Cộng Cảm』 ấy, vốn dĩ vận hành dựa trên sự kết nối chặt chẽ giữa Od của hai cá thể khác biệt nhau."
  },
  {
    "en": "What was termed as the Od, was the source of power existing in the depths of the humanーー it could also be synonymous for the soul.",
    "vi": "Thứ được gọi là Od ấy, chính là nguồn cội sức mạnh ngự trị sâu thẳm trong cơ thể con người—— dẫu khả dĩ xem nó đồng nghĩa với linh hồn chân chính."
  },
  {
    "en": "Though on instances it was also used in place of mana as power for utilising magic, originally, the Od was the pure property itself that made the human be human.",
    "vi": "Dẫu cho trong vài tình huống cụ thể, nó dẫu được vận dụng thay thế cho mana như một nguồn năng lượng kích hoạt ma pháp, song về căn bản, Od chính là thuộc tính thuần khiết nhất định hình nên sự tồn tại của con người dẫu vậy."
  },
  {
    "en": "The consequence of having a territory that shan't be trespassed by anyone, that mutually linked those born of the same womb, perhaps resulted in『Synthesia』, so propounded the theory.",
    "vi": "Hệ quả của việc sở hữu một ranh giới bất khả xâm phạm đối với bất kỳ ai, thứ liên kết thiêng liêng những sinh mệnh được sinh ra từ cùng một tử cung, có lẽ dẫu chính là cội nguồn tạo nên 『Cộng Cảm』, học thuyết cổ xưa ấy dẫu tuyên bố như thế lị."
  },
  {
    "en": "In the end, it came to be determined as a common belief, and was not something that had been proven.",
    "vi": "Dẫu sao thì, chuyện đó cuối cùng dẫu chỉ được xem là một quan niệm dân gian phổ biến, chứ quyết chả phải một sự thật dẫu được chứng minh rõ ràng."
  },
  {
    "en": "However, since it had been left in the forbidden archive, it surely was not some phoney spiel either. Above all else, Ram personally had taken a liking to that theory.",
    "vi": "Tuy nhiên, một khi nó dẫu được lưu giữ cẩn trọng trong thư viện cấm, thì dứt định quyết chả phải là những lời nói dối vô căn cứ chả đâu vào đâu lị. Trên hết thảy mọi thứ, bản thân Ram dẫu cực kỳ ưa thích học thuyết ấy lị."
  },
  {
    "en": "To have one's own self and someone else be connected together by birth, was a lovely thing.",
    "vi": "Việc bản thân mình và một người khác được gắn kết chặt chẽ với nhau ngay từ lúc chào đời, quả thực dứt định là một điều vô cùng tuyệt diệu hảo lị."
  },
  {
    "en": "Ram: \"A multitude of problems were caused, due to that bothersome horn, after all.\"",
    "vi": "Ram: “Dẫu sao thì, thảy mọi phiền toái rắc rối trút xuống đầu ta dẫu đều do chiếc sừng phiền hà ấy mà ra cả thôi lị.”"
  },
  {
    "en": "The impulse of destruction transmitted by that white horn, Ram loathed it.",
    "vi": "Cái xung động hủy diệt điên cuồng truyền đến từ chiếc sừng trắng ngần ấy, Ram bấy lâu nay dứt định luôn ghét cay ghét đắng lị."
  },
  {
    "en": "She was exasperated by her environs lionising Ram as the reincarnation of the Oni God as well. There existed not a fragment of connection, between that obscure obsolete being, and Ram.",
    "vi": "Cô dẫu cảm thấy chán ghét tột cùng khi những kẻ xung quanh liên tục tung hô, thần thánh hóa Ram là hóa thân chuyển thế của Quỷ Thần lị. Quyết chả tồn tại lấy một mảnh liên kết nhỏ nhoi nào giữa thực thể mờ nhạt lỗi thời ấy và Ram cả."
  },
  {
    "en": "Ram shan't deem value in precisely such an entity.",
    "vi": "Ram dứt định quyết không bao giờ thèm đánh giá cao một thực thể như thế lị."
  },
  {
    "en": "Henceforth, to have one's own self and someone else be connected together by birth, independent of such an entity, was a lovely thing.",
    "vi": "Chính vì thế, việc bản thân mình và một sinh mệnh khác được liên kết gắn bó từ thuở lọt lòng, hoàn toàn độc lập với một thực thể dường ấy, quả dứt định là một điều ngọt ngào diệu kỳ lị."
  },
  {
    "en": "And, if such a connection with someone truly did existーー,",
    "vi": "Và, nếu một sự kết nối thiêng liêng với một ai đó thực sự tồn tại trên đời——,"
  },
  {
    "en": "Ram: \"ーーCertainly, by birth itself, Ram could not have been stopped from loving her.\"",
    "vi": "Ram: “——Dứt định rồi lị, ngay từ lúc chào đời chào đời, quyết chả có thứ gì khả dĩ ngăn cản Ram hết mực yêu thương em ấy đâu lị.”"
  },
  {
    "en": "Even as an infant, she shan't pay regard to means for the sake of protecting that bond.",
    "vi": "Ngay cả khi còn là một đứa trẻ sơ sinh, cô dứt định quyết chả thèm màng tới bất kỳ thủ đoạn phương pháp nào để bảo vệ mối liên kết thiêng liêng ấy."
  },
  {
    "en": "For the sake of protecting her, for the sake of admiring her, for the sake of adoring her, for the sake of loving her, she shall surely devote her all.",
    "vi": "Để bảo vệ em ấy, để ngưỡng mộ em ấy, để yêu chiều em ấy, để thương yêu em ấy hết lòng hết dạ, cô chắc chắn dứt định sẽ dâng hiến thảy mọi thứ của bản thân."
  },
  {
    "en": "Thusーー,",
    "vi": "Chính vì vậy——,"
  },
  {
    "en": "Ram: \"Please do forgive. Your bad nee-sama, who is making you shoulder the burden at this time as well.\"",
    "vi": "Ram: “Làm ơn hãy tha thứ cho ta lị. Người nee-sama tồi tệ của em, đến tận thời điểm hiểm nghèo này dẫu vẫn bắt em phải gánh vác gánh nặng cùng ta lị.”"
  },
  {
    "en": "By way of『Synesthesia』, Ram shared the burden levied upon her own flesh body to her sleeping younger sister.",
    "vi": "Thông qua phương thức 『Cộng Cảm』, Ram dẫu san sẻ phần gánh nặng đè nặng lên cơ thể xác thịt của mình sang cho người em gái đang chìm sâu trong giấc ngủ."
  },
  {
    "en": "It was in consequence of having experienced Subaru's Authority by herself once. Having witnessed something once, Ram could largely materialize it identically.",
    "vi": "Đây chính là hệ quả tất yếu sau khi cô dẫu tự mình trải nghiệm qua Quyền Năng của Subaru một lần. Chỉ cần được tận mắt chứng kiến một lần duy nhất, Ram về cơ bản dứt định khả dĩ tái hiện lại nó giống hệt chả sai phân nào."
  },
  {
    "en": "What Subaru did was an identical contrivanceーー it possibly coercively connected others' Od with one's own Od, inducing a fairly arbitrary『Synesthesia』. Subaru's side could possibly consign his burden over if he felt inclined to do so as well, but since Subaru was a fool, he would not do so.",
    "vi": "Những gì Subaru đã làm dẫu là một thủ thuật tương tự—— nó khả dĩ cưỡng ép kết nối Od của người khác với Od của chính mình, kích hoạt một trạng thái 『Cộng Cảm』 khá tùy tiện lị. Phía Subaru dẫu khả dĩ chuyển giao trọn vẹn gánh nặng của cậu ta sang nếu cậu ta muốn thế, song vì Subaru là một tên đại ngu muội ngốc nghếch, cậu ta quyết chả bao giờ làm chuyện đó đâu lị."
  },
  {
    "en": "Contrarily, by taking it upon himself, he endeavoured to abate the burden of his allies.",
    "vi": "Ngược lại hoàn toàn, bằng cách tự mình ôm đồm thảy mọi thứ, cậu ta dẫu nỗ lực giảm bớt gánh nặng cho các đồng minh trân quý của mình."
  },
  {
    "en": "Ram: \"ーーTruly a fool.\"",
    "vi": "Ram: “——Quả thực d dứt định dẫu là kẻ ngốc nghếch lị.”"
  },
  {
    "en": "Words she had pronounced toward Batenkaitos a short time ago.",
    "vi": "Những từ ngữ cô dẫu thốt ra nhắm vào Batenkaitos cách đây chả lâu."
  },
  {
    "en": "However, despite being the same words, they did not echo the same.",
    "vi": "Tuy nhiên, dẫu cho cùng một câu từ như thế, âm vang phản chiếu của chúng lại quyết chả hề giống nhau."
  },
  {
    "en": "What Subaru had achieved through the Authority, Ram could reconstruct it with Rem, whom she was connected to through『Synesthesia』.",
    "vi": "Những gì Subaru đạt được thông qua Quyền Năng, Ram dứt định khả dĩ tái cấu trúc hoàn hảo nó cùng Rem, người mà cô đang liên kết chặt chẽ thông qua 『Cộng Cảm』."
  },
  {
    "en": "She was oblivious to what had transpired at Subaru's side. However, this would surely serve to ease him. Ram too, could abscond from the repulsive situation namely being connected with Subaru for long.",
    "vi": "Cô quyết chả hề hay biết những gì đang diễn ra ở phía Subaru lị. Tuy nhiên, việc này chắc chắn dứt định dẫu giúp cậu ta nhẹ gánh đi phần nào lị. Ram dẫu khả dĩ nhanh chóng thoát khỏi cái tình cảnh ghê tởm ghê tởm là bị liên kết với Subaru suốt một thời gian dài dường ấy."
  },
  {
    "en": "In lieu, Ram's burden was streaming towards Rem, althoughーー,",
    "vi": "Để thay thế thế chỗ, gánh nặng của Ram dẫu đang cuồn cuộn truyền sang cho Rem, mặc dù vậy——,"
  },
  {
    "en": "Rem: \"ーーーー\"",
    "vi": "Rem: “ーーーー”"
  },
  {
    "en": "Rem, perpetually slumbering, spoke naught.",
    "vi": "Rem, vẫn đang chìm sâu trong giấc ngủ ngàn thu ấy, quyết chả nói nửa lời."
  },
  {
    "en": "Merely gallantly, splendidly, with the white horn she was made to grasp in her stacked handsーー Ram's broken horn that had been fitted inside her wand, with that as a catalyst, she was consigning the mana flowing into her own horn over to Ram.",
    "vi": "Chỉ đơn thuần một cách dũng cảm, tuyệt diệu tuyệt diệu vô ngần, cùng chiếc sừng trắng muốt ngự trị trong đôi bàn tay khép chặt xếp lên nhau—— chiếc sừng bị gãy của Ram vốn được gắn chặt bên trong cây quyền trượng của em ấy, lấy đó làm vật xúc tác cốt lõi, cô bé dẫu đang truyền toàn bộ lượng mana cuồn cuộn chảy vào chiếc sừng của mình sang cho Ram."
  },
  {
    "en": "It was unfathomable how prodigious a burden shall be laid onto Rem's body for mediating the expansive mana which Ram required.",
    "vi": "Quyết chả thể nào đo lường hay thấu suốt nổi gánh nặng khổng lồ kinh hoàng đến nhường nào dứt định dẫu đè nặng lên cơ thể mảnh mai của Rem để điều phối lượng mana vĩ đại vĩ đại mà Ram đòi hỏi."
  },
  {
    "en": "ーーTherefore, this was a decisive battle of brief duration.",
    "vi": "——Chính vì lẽ đó, đây dứt định dẫu là một trận quyết chiến tốc chiến tốc thắng trong tích tắc thời gian cực ngắn lị."
  },
  {
    "en": "Ley: \"Nee-sa-ma~a~a~ ~tsu!!\"",
    "vi": "Ley: “Nee-sa-ma~a~a~ ~tsu!!”"
  },
  {
    "en": "A roar into time, after having been hurled by her kick, Batenkaitos rebounded towards Ram whilst smiling.",
    "vi": "Một tiếng gầm xé toạc không gian thời gian, sau khi bị cú đá của cô thổi bay văng xa, Batenkaitos lập tức bật ngược lao nhanh về phía Ram trong khi vẫn cười ngoác miệng đầy hung ác."
  },
  {
    "en": "Utilising the might of the seeming『Leaper』, the magical technique erased the existing distance in-between in the span of a blink of an eyeーー however, even that technique of phantom teleportation was rendered futile should it get viewed in its entirety by the opponent.",
    "vi": "Vận dụng sức mạnh tối cao của thứ dường như là 『Kẻ Nhảy Vọt』, ma thuật kỳ dị ấy đã xóa nhòa hoàn toàn khoảng cách hiện hữu giữa cả hai chỉ trong một cái chớp mắt tích tắc—— thế menh, ngay cả kỹ thuật dịch chuyển tức thời ảo ảnh ảo diệu ấy dẫu dứt định trở nên vô dụng vô ngần một khi đã bị đối thủ thấu suốt thấu suốt toàn bộ đường đi nước bước."
  },
  {
    "en": "Ram: \"You certainly are slow, sluggard. At this rate, Ram will become an old woman.\"",
    "vi": "Ram: “Ngươi dứt định quả là chậm chạp lị, đồ lười biếng thối tha lị. Cứ cái đà này, Ram d dứt định dẫu biến thành một bà già lẩm cẩm mất thôi lị.”"
  },
  {
    "en": "She purloined the opponent's field of vision with『Clairvoyance』.",
    "vi": "Cô dẫu chiếm đoạt trọn vẹn tầm nhìn thị giác của đối thủ thông qua 『Thiên Lý Nhãn』."
  },
  {
    "en": "The opponent's focus, eye movements, the part wherein strength was being poured, by synthesising these she could read the aim with greater ease than reading the mind.",
    "vi": "Tiêu điểm của đối thủ, chuyển động nhãn cầu của đối thủ, vị trí mà sức mạnh đang được tích tụ dồn nén, bằng cách tổng hợp thảy mọi yếu tố ấy, cô khả dĩ đọc vị ý đồ mục tiêu của hắn dễ dàng hơn cả việc đọc suy nghĩ tâm trí lị."
  },
  {
    "en": "Dodging the perforating palm, she reversely twisted all five of its fingers as it slipped through.",
    "vi": "Né tránh lòng bàn tay xuyên thấu đang đâm tới, cô lập tức bẻ ngược xoắn vặn cả năm ngón tay của hắn ngay khi nó lướt qua."
  },
  {
    "en": "Pounding a rebuff into his throat seeking to give rise to a skreak, she slammed the opponent into the wall with a sharp spinning kick.",
    "vi": "Giáng thẳng một cú đòn chí mạng vào cổ họng đang chực hét lên kinh hoàng của hắn, cô dập mạnh đối thủ vào bức tường đá bằng một cú đá xoay vòng vô cùng sắc lẹm."
  },
  {
    "en": "Ley: \"Ga...... ~hk.\"",
    "vi": "Ley: “Ga...... ~hk.”"
  },
  {
    "en": "Ram: \"Although, Ram is cute even when she has grown old.\"",
    "vi": "Ram: “Cơ mà lị, Ram d dứt định dẫu vô cùng đáng yêu ngay cả khi đã trở nên già cỗi lão hóa đấy lị.”"
  },
  {
    "en": "Whilst pronouncing so, she seized the opponent's nape through his clothes and lowered it, dropping him onto the floor by his head yet again. Pelting that face with her heel, she pulverised his snout.",
    "vi": "Trong khi thản nhiên cất lời khẳng định như thế, cô dẫu tóm chặt gáy đối thủ xuyên qua lớp áo vải và ghì mạnh xuống, dập sọ đầu hắn xuống mặt sàn đá một lần nữa lị. Dùng gót chân kiều diễm nện liên tiếp vào gương mặt ấy, cô dập nát bấy chiếc mũi của hắn."
  },
  {
    "en": "Stepping backward and evading both of the arms attempting to grasp her, she belaboured him with innumerable blades of wind.",
    "vi": "Lùi bước né tránh cả hai cánh tay đang điên cuồng vươn ra hòng chộp lấy mình, cô lập tức trút xuống người hắn vô vàn vô vàn những lưỡi đao gió sắc lẹm cắt xé."
  },
  {
    "en": "ーーGhi, a~a~a~a~!!",
    "vi": "——Ghi, a~a~a~a~!!"
  },
  {
    "en": "Ram: \"What an ugly shriek, coming from such an adorable face.\"",
    "vi": "Ram: “Thật là một tiếng hét thảm hại xấu xí kinh tởm lị, xuất phát từ một gương mặt khả ái đáng yêu dường ấy lị.”"
  },
  {
    "en": "His entire body slashed by blades of wind, Batenkaitos disappeared whilst spouting blood.",
    "vi": "Toàn thân chằng chịt vết thương do bị đao gió chém xé tơi bời, Batenkaitos lập tức biến mất giữa làn sương máu phun trào."
  },
  {
    "en": "As ever, his flesh body unremittingly repeated transfiguration, however, solely what was atop his neck, that which she was acquainted with by sight, shan't attempt to transform.",
    "vi": "Như mọi khi, thể xác thịt của hắn quyết chả ngừng lặp đi lặp lại việc biến đổi dị hình, thế nhưng, chỉ duy nhất phần từ cổ trở lên, cái gương mặt quen thuộc mà cô đã nhẵn mặt nhẵn mặt ấy, dứt định quyết chả hề có ý định biến đổi chút nào lị."
  },
  {
    "en": "She was close to vomiting. Though Ram shall not, because that would be inelegant.",
    "vi": "Cô dẫu suýt chút nữa d dứt định dẫu buồn nôn kinh tởm lị. Tuy nhiên Ram dứt định quyết chả thèm làm thế đâu lị, bởi hành vi đó dứt định trông cực kỳ mất đi vẻ thanh lịch kiêu sa lị."
  },
  {
    "en": "Ley: \"ーーーー\"",
    "vi": "Ley: “ーーーー”"
  },
  {
    "en": "Whilst shedding immense blood, Batenkaitos artlessly swooped down upon her.",
    "vi": "Giữa cơn mưa máu phun trào xối xả, Batenkaitos chỉ đơn thuần lao thẳng xuống nhắm vào cô."
  },
  {
    "en": "Stating unerringly, he was surely making free use of miraculous superhuman techniques. Coalescing the might of multifarious transcendental beings, from the outset, he must be formulating techniques impossible of being reconstructed by anyone.",
    "vi": "Khẳng định chả sai phân nào lị, hắn dứt định đang tự do vận dụng những kỹ thuật thực chiến phi thường vượt xa giới hạn con người lị. Bằng cách hội tụ liên kết sức mạnh tối cao của vô vàn thực thể siêu việt khác nhau, ngay từ đầu, hắn chắc chắn dứt định phải đang kiến tạo nên những kỹ thuật quyết chả thể nào được tái hiện bởi bất kỳ ai khác trên đời."
  },
  {
    "en": "That excelling blitz, specialising in all possible orientations, was shut down by Ram through outstripping violence.",
    "vi": "Trận tập kích thần tốc kiệt xuất ấy, bao trùm thảy mọi hướng tấn công khả dĩ, dẫu bị chặn đứng hoàn toàn bởi Ram bằng một thứ bạo lực vượt trội áp đảo tột cùng lị."
  },
  {
    "en": "She guillotined those monumental techniques of hundreds, of thousands, using might worth millions. This was what the battle had now come to be.",
    "vi": "Cô dứt định chém đứt phăng thảy mọi kỹ thuật đồ sộ hàng trăm, hàng ngàn ấy bằng một nguồn sức mạnh vĩ đại vĩ đại tương đương hàng triệu phân lị. Trận chiến lúc này dẫu dứt định chuyển biến thành cục diện như thế rồi lị."
  },
  {
    "en": "She sought not to even come in contact with Batenkaitos. Her condition felt well.",
    "vi": "Cô dứt định quyết chả thèm mảy may chạm tay trực tiếp vào người Batenkaitos lị. Trạng thái cơ thể cô đang cảm thấy cực kỳ tuyệt vời hảo lị."
  },
  {
    "en": "She grew accustomed to it in Subaru's absence after all. She had unfastened approximately two more shackles.",
    "vi": "Dù sao thì, cô dẫu sớm quen thuộc thích nghi với trạng thái này trong khoảng thời gian Subaru vắng mặt rồi lị. Cô dẫu tự tay tháo bỏ thêm tầm hai lớp xiềng xích giới hạn nữa rồi lị."
  },
  {
    "en": "Likely fifty percent of her primeーー no, since Ram had been very young in those days, aspects of her that had matured were far mightier now compared to Ram back then.",
    "vi": "Có lẽ dẫu tương đương năm mươi phần trăm sức mạnh thời đỉnh cao hoàng kim—— không lị, bởi lẽ Ram hồi đó dẫu còn rất nhỏ tuổi thơ dại lị, những phương diện đã trưởng thành chín muồi của cô lúc này dứt định vĩ đại và mạnh mẽ hơn Ram của ngày xưa rất nhiều lị."
  },
  {
    "en": "And, to not wallow in that might, was Ram's forte.",
    "vi": "Và rồi lị, quyết chả hề chìm đắm hay ngủ quên trong thứ sức mạnh vĩ đại vĩ đại ấy dứt định chính là thế mạnh ưu điểm vượt trội của Ram lị."
  },
  {
    "en": "Ram: \"Having the horn broken was correct after all.\"",
    "vi": "Ram: “Hóa ra việc chiếc sừng bị chém rụng năm xưa dứt định dẫu là chuyện hoàn toàn chính xác rồi lị.”"
  },
  {
    "en": "If it weren't for that night, she may have eventually yielded to the horn's allurement.",
    "vi": "Nếu quyết chả phải do biến cố đêm hôm đó gõ cửa, cô sớm muộn dứt định dẫu khuất phục trước sự mê hoặc đầy ma mị của chiếc sừng ấy."
  },
  {
    "en": "Though she wanted to proclaim that to be improbable, she could not ascertain if it truly was improbable. Thus, Ram attested to the present being correct, and boasted the invigorating nature of the path she had walked.",
    "vi": "Dẫu cho cô rất muốn dứt định khẳng định rằng chuyện đó quyết chả thể nào xảy ra, song cô quyết chả thể dám chắc liệu nó có thực sự không tưởng hay chăng lị. Vì lẽ đó, Ram d dứt định khẳng định hiện tại d dứt định dẫu là con đường chính xác nhất, và vô cùng kiêu hãnh về bản chất tràn đầy sức sống của hành trình mà mình đã tự tay đi qua."
  },
  {
    "en": "Owing to the loss of her horn, Ram lived without having to become the『Oni』she detested.",
    "vi": "Nhờ vào việc đánh mất đi chiếc sừng quý giá ấy, Ram d dứt định khả dĩ sinh sống an nhiên mà quyết chả buộc phải biến thành một 『Quỷ』 tộc tàn bạo hung hãn mà mình hằng ghét bỏ lị."
  },
  {
    "en": "Ram: \"To begin with, if it weren't for that night Roswaal-sama couldn't have been met, so it wasn't even worth making a comparison.\"",
    "vi": "Ram: “Ngay từ đầu lị, nếu quyết chả phải vì cái đêm định mệnh rực lửa ấy thì dứt định quyết chả bao giờ gặp gỡ được Roswaal-sama rồi lị, thế nên thảy mọi sự so sánh dường ấy dứt định quyết chả hề đáng giá lấy một phân lị.”"
  },
  {
    "en": "No greater conclusion, wielding that as the answer Ram presented her palm forwards.",
    "vi": "Quyết chả còn kết luận nào vĩ đại hơn thế, dùng chính chân lý ấy làm câu trả lời tối thượng, Ram dứt định đưa lòng bàn tay kiều diễm của mình hướng thẳng về phía trước lị."
  },
  {
    "en": "At the surface of her palm appeared Batenkaitos, having leapt through space. His countenance, astonished by having the point of his appearance read through, she gripped it tight,",
    "vi": "Ngay trên bề mặt lòng bàn tay cô, hình bóng Batenkaitos đột ngột hiện hữu sau cú nhảy vọt xuyên thấu không gian lị. Gương mặt hắn lộ rõ vẻ kinh hoàng kinh ngạc tột độ vì bị đọc vị chính xác điểm xuất hiện ảo ảnh ảo ảnh ấy, cô nhanh như chớp chộp chặt lấy nó lị,"
  },
  {
    "en": "Ram: \"You cannot fly in continuity, isn't it? Have grown tired of looking at your magic tricks. And that face as well.\"",
    "vi": "Ram: “Ngươi dứt định quyết chả thể nhảy vọt dịch chuyển liên tục liên tục được đâu lị, đúng chăng lị? Ta d dứt định dẫu chán ngấy việc phải nhìn vào trò ảo thuật ma pháp quèn của ngươi rồi lị. Và d dứt định dẫu chán ghét cái bản mặt tởm lợm đó nữa lị.”"
  },
  {
    "en": "Ley: \"Waiーー\"",
    "vi": "Ley: “Khoan đã——”"
  },
  {
    "en": "Ram: \"No waiting.\"",
    "vi": "Ram: “Quyết chả khoan nhượng lị.”"
  },
  {
    "en": "An icy pronouncement, Ram materialised a blade of wind in her palm which grasped the opponent's face.",
    "vi": "Một lời tuyên bố lạnh giá như băng tuyết lị, Ram lập tức ngưng tụ hiện thực hóa một lưỡi đao gió sắc lẹm ngay trong lòng bàn tay đang chộp chặt lấy gương mặt đối thủ."
  },
  {
    "en": "Within that juncture, his eyes, his nose, his lips, his ears, with all possible parts of his face slashed, Batenkaitos screeched whilst vomiting blood.",
    "vi": "Ngay trong tích tắc thời gian ngắn ngủi ấy, đôi mắt, chiếc mũi, đôi môi, đôi tai của hắn, thảy mọi bộ phận khả dĩ trên gương mặt đều bị chém xé nát bấy bét, khiến Batenkaitos thét lên kinh hoàng trong khi liên tục phun trào máu tươi."
  },
  {
    "en": "With the same momentum, she gouged his face with the blade of wind until it was minced to naught.",
    "vi": "Được đà lấn tới với uy thế kinh hoàng, cô dứt định dùng lưỡi đao gió khoét sâu nghiền nát gương mặt hắn cho đến khi nó bị băm vằm quyết chả còn lại phân hình dạng nào lị."
  },
  {
    "en": "And, from Ram's palm, who sought to accomplish so, Batenkaitos' form disappeared in but an instant.",
    "vi": "Và rồi, ngay từ lòng bàn tay của Ram, người đang dốc sức hoàn thành đòn chí mạng ấy, hình dáng của Batenkaitos d dứt định dẫu lập tức biến mất chỉ trong một cái chớp mắt cực ngắn."
  },
  {
    "en": "However, albeit he escaped, he shan't be able to escape from the wounds, from the agony, from the reality.",
    "vi": "Tuy nhiên, dẫu cho hắn có chạy trốn thoát thân đi chăng nữa, hắn chắc chắn dứt định quyết chả thể nào thoát khỏi những vết thương chằng chịt, thoát khỏi cơn đau đớn cùng cực tàn khốc, và thoát khỏi thực tế phũ phàng trước mắt đâu lị."
  },
  {
    "en": "Ley: \"Ah, a~a~h, a~a~a~a~hーー ~tsu!!\"",
    "vi": "Ley: “A, a~a~h, a~a~a~a~h—— ~tsu!!”"
  },
  {
    "en": "Whilst squalling, Batenkaitos writhed as he shed profuse blood instead of tears.",
    "vi": "Trong khi điên cuồng gào thét thảm thiết, Batenkaitos quằn quại lăn lộn trên sàn khi dòng máu tươi phun trào xối xả tuôn rơi xối xả thay cho những giọt nước mắt tột cùng."
  },
  {
    "en": "Whilst observing that, Ram steadily advanced her feet towards his side.",
    "vi": "Lặng lẽ chứng kiến cảnh tượng ấy, Ram từng bước từng bước điềm tĩnh bước đều bước tiến thẳng về phía hắn lị."
  },
  {
    "en": "Hearing Ram's approaching footsteps, Batenkaitos' form changed.",
    "vi": "Nghe thấy tiếng bước chân đang dần dần áp sát tiến gần của Ram, hình dạng thể xác của Batenkaitos lập tức biến đổi dị hình dị hình lị."
  },
  {
    "en": "The proprietor of a gigantic, burly flesh body. ーーKnocking the imminent fist down, she shattered his knee.",
    "vi": "Một chủ nhân sở hữu một thể xác hộ pháp to lớn, vạm vỡ phi thường lị. ——Gạt phăng nắm đấm thép đang hung hãn lao tới xuống, cô dứt định đập nát bấy xương đầu gối của hắn lị."
  },
  {
    "en": "Kicked down, Batenkaitos' figure altered in order to escape from Ram.",
    "vi": "Bị đá gục xuống đo sàn, hình dáng của Batenkaitos liên tục biến đổi dị hình hòng nhanh chóng chạy trốn thoát thân khỏi tầm tay Ram lị."
  },
  {
    "en": "The giant of a bearded face, taking a spherical stance solidified his defence. ーーKicking his frame upward, she nailed him onto the ceiling with a barrage of fists, gradually transforming what was below his skin, which was the subject of vaunt, into lumps of flesh.",
    "vi": "Tên khổng lồ sở hữu gương mặt râu ria xồm xoàm ấy d dứt định co rúm người lại tạo thành một tư thế hình cầu vững chắc củng cố phòng ngự tuyệt đối lị. ——Đá văng cả thân hình đồ sộ của hắn bay vút lên cao lị, cô găm chặt hắn lên trần nhà bằng một loạt loạt loạt những cú đấm sấm sét liên hoàn liên hoàn liên hoàn, từng bước từng bước biến thảy những gì ngự trị bên dưới làn da cứng cáp kia——thứ mà hắn hằng kiêu hãnh tự phụ——thành những cục thịt băm vằm nát bấy."
  },
  {
    "en": "In order to kill Ram, who conferred upon him interminable torture, Batenkaitos' form altered.",
    "vi": "Để đoạt mạng bằng được Ram, người đang gieo rắc trút xuống đầu hắn nỗi tra tấn cực hình vô hạn vô hạn chả chịu nổi dường này, hình dạng của Batenkaitos lại tiếp tục biến đổi dị hình lị."
  },
  {
    "en": "The bald old man, the magical technique of phantom teleportation. ーーWhilst pitying the magical trick whose stratagem had already come to light, she caught him, drove his face into the wall, and sprinted as though to whittle his entire frame.",
    "vi": "Một lão già đầu trọc hói lị, cùng ma thuật dịch chuyển tức thời ảo ảnh ảo diệu lị. ——Trong khi thầm thương hại trò ảo thuật quèn vốn dĩ d dứt định đã bị bóc trần mưu đồ chiến thuật chiến thuật sạch sẽ từ đời nào lị, cô nhanh như chớp tóm gọn lấy hắn, đập thẳng mặt hắn vào bức tường đá, và lao vút điên cuồng như thể muốn bào nạo bào mòn cạo sạch toàn bộ thể xác của hắn lị."
  },
  {
    "en": "Ley: \"Ah, babababababababa~a~a~ーー ~hk!!\"",
    "vi": "Ley: “A, babababababababa~a~a~—— ~hk!!”"
  },
  {
    "en": "Repressed by Ram's prodigious might, Batenkaitos' entire frame was pared, retaining no place to escape to.",
    "vi": "Bị áp chế hoàn toàn bởi sức mạnh vĩ đại vĩ đại siêu việt của Ram, toàn bộ thể xác của Batenkaitos bị bào nạo cạo sạch chằng chịt vết thương băm vằm, quyết chả còn lấy một chỗ trú ẩn an toàn để trốn chạy thoát thân lị."
  },
  {
    "en": "Winding and meandering, his form transfigured within Ram's grasp as though seeking the optimum solution.",
    "vi": "Xoắn vặn, uốn lượn, luồn lách liên tục liên tục, hình dạng của hắn biến đổi dị hình không ngừng ngay trong tầm tay chộp chặt của Ram tựa như đang tuyệt vọng kiếm tìm phương án giải quyết tối ưu tối ưu nhất lị."
  },
  {
    "en": "Suppressing it altogether, Ram grieved for the hundreds, thousands, tens of thousands of victims with all of her might.",
    "vi": "Đè bẹp áp chế thảy thảy mọi sự kháng cự đó, Ram d dứt định dốc toàn bộ sức mạnh lồng ngực để làm lễ tưởng niệm đau buồn tưởng niệm đau buồn cho hàng trăm, hàng ngàn, hàng vạn nạn nhân khốn khổ lị."
  },
  {
    "en": "A memorial held via vehemence for those men and women who had been captured by『Gluttony』, and had the arts they forged, the paths they walked, the emotions they loved, trampled upon, slighted and disparaged.",
    "vi": "Một lễ tưởng niệm được tiến hành bằng bạo lực đầy mãnh liệt dành cho những nam nhân kiệt xuất và nữ nhân kiều diễm đã bị 『Phàm Ăn』 cướp đoạt tàn nhẫn tàn nhẫn, để rồi thảy mọi kỹ nghệ thực chiến họ dày công tôi luyện, những con đường họ kiêu hãnh đi qua, những cảm xúc yêu thương trân quý họ hằng ôm giữ, đều bị chà đạp tàn bạo, coi thường và khinh miệt rẻ rúng."
  },
  {
    "en": "No longer would arts, paths, emotions be utilised.",
    "vi": "Quyết chả bao giờ kỹ nghệ, hành trình hay cảm xúc ấy d dứt định dẫu được phép vận dụng lạm dụng một lần nào nữa lị."
  },
  {
    "en": "For naught was efficacious against Ram.",
    "vi": "Bởi lẽ quyết chả có lấy phân thứ gì khả dĩ đem lại hiệu quả công kích hữu hiệu nhắm vào Ram lúc này cả lị."
  },
  {
    "en": "Ram: \"Kindly take your own responsibility, by yourself.\"",
    "vi": "Ram: “Xin mời tự mình gánh vác chịu trách nhiệm cho thảy mọi tội lỗi của bản thân đi giùm cho lị.”"
  },
  {
    "en": "Swinging her arm, Ram heaved aside the blasphemer who had his entire frame tempestuously pared.",
    "vi": "Vung mạnh cánh tay kiều diễm lị, Ram quăng vứt sang một bên tên báng bổ tội đồ khốn nạn vừa bị cô bào nạo tàn phá tơi bời tơi bời tựa một cơn bão cát lị."
  },
  {
    "en": "Falling over the floor of the watchtower, Batenkaitos shuddered and trembled. Slowly, steadily, gradually, his form proceeded to alter.",
    "vi": "Ngã lăn lộn đo sàn trên mặt đất của tháp canh canh phòng, Batenkaitos run rẩy và co giật kịch liệt lị. Từng bước từng bước, một cách điềm tĩnh điềm tĩnh, hình dáng của hắn lại dần dần tiến hành biến đổi dị hình lị."
  },
  {
    "en": "Having relied on multitudes of『Memories』, his form changedーー,",
    "vi": "Do liên tục phụ thuộc dựa dẫm vào vô vàn vô vàn những 『Ký Ức』 cướp đoạt được, hình dáng của hắn d dứt định biến đổi dị hình——,"
  },
  {
    "en": "Ram: \"Ah, long time no see. Ram wanted to meet, this face. Though this would make for around the third time doing so.\"",
    "vi": "Ram: “A lị, lâu quá quyết chả gặp mặt rồi lị. Ram thực sự d dứt định dẫu rất muốn gặp mặt gặp mặt cái bản mặt này đấy lị. Dù cho đây d dứt định đã là lần thứ ba chúng ta chạm mặt chạm mặt nhau kiểu này rồi lị.”"
  },
  {
    "en": "Ley: \"ーーAh, kah, ah.\"",
    "vi": "Ley: “——Ah, kah, ah.”"
  },
  {
    "en": "As she wiped off the blood on her forehead and loosened her lips, ahead of Ram's glance was Batenkaitos.",
    "vi": "Khi cô nhẹ nhàng lau đi dòng máu tươi chảy ròng ròng trên trán và hé mở nở nụ cười quyến rũ trên bờ môi mỏng, hiện ngự ngay trước tầm mắt đăm đăm của Ram chính xác chính là Batenkaitos lị."
  },
  {
    "en": "It was Batenkaitos, in the truest possible purport. Not the cunning and wily existence who had, until now, borrowed the faces and techniques of others, but Batenkaitos, who had returned to his own face and form.",
    "vi": "Đó d dứt định chính là Batenkaitos, theo đúng nghĩa chân chính thực sự nhất lị. Quyết chả phải một thực thể xảo quyệt gian manh vốn dĩ bấy lâu nay chuyên mượn tạm gương mặt và kỹ thuật của kẻ khác, mà chính là Batenkaitos nguyên bản đã quay trở về với gương mặt và hình hài đích thực của bản thân."
  },
  {
    "en": "Regardless whom should one become, whom should one depend on, whom should one resort to, it is impossible to escape from oneself.",
    "vi": "Hoàn toàn bất kể ngươi có cố biến thành ai đi chăng nữa, phụ thuộc dựa dẫm vào ai đi chăng nữa, tìm đến ai làm cứu cánh đi chăng nữa, dứt định quyết chả bao giờ khả dĩ trốn chạy chạy trốn khỏi chính bản thân mình được đâu lị."
  },
  {
    "en": "Just as even upon losing her horn, the actuality that Ram was an Oni did not change.",
    "vi": "Hoàn toàn tương tự như việc dẫu cho có đánh mất đi chiếc sừng quý giá năm xưa, thực tế phũ phàng rằng Ram chính là một Quỷ tộc d dứt định dẫu quyết chả bao giờ thay đổi thay đổi phân nào lị."
  },
  {
    "en": "Just as even upon having her『Memories』plundered, the actuality that Ram was Rem's elder sister did not change.",
    "vi": "Và d dứt định hoàn toàn tương tự như việc dẫu cho có bị cướp đoạt sạch sành sanh thảy thảy 『Ký Ức』 đi chăng nữa, thực tế thiêng liêng rằng Ram chính là nee-sama của Rem d dứt định dẫu quyết chả bao giờ thay đổi lị."
  },
  {
    "en": "Ram: \"In the very end at least, would you like to try resisting using your own strength?\"",
    "vi": "Ram: “Ít nhất thì vào những giây phút cuối đời cuối đời này, ngươi có muốn thử giãy giụa chống cự quyết liệt bằng chính sức mạnh nguyên bản quèn của bản thân mình chăng lị?”"
  },
  {
    "en": "Ley: \"ーーーー\"",
    "vi": "Ley: “ーーーー”"
  },
  {
    "en": "Ram: \"By the way, you said something curious on the spiral staircase, didn't you. ーーIt seems, you have a younger brother or younger sister, isn't it. For the sake of your younger siblings, how about putting your willpower to display?\"",
    "vi": "Ram: “Nhắc mới nhớ lị, lúc nãy ngay tại cầu thang xoắn ốc ngươi d dứt định dẫu thốt ra phân thông tin gì đó vô cùng kỳ quặc kỳ quặc nhỉ lị. ——Hình như lị, ngươi d dứt định dẫu sở hữu một người em trai hoặc em gái gì đó đúng chăng lị. Vì lợi ích an nguy của bầy em nhỏ trân quý của mình, ngươi thấy thế nào về việc thử phô diễn ý chí nghị lực sắt đá của bản thân xem sao lị?”"
  },
  {
    "en": "Collapsed down, Batenkaitos' painful breathing abruptly diminished.",
    "vi": "Nằm gục đổ gục đo sàn trên nền đất, nhịp thở đứt quãng đầy đau đớn khó nhọc của Batenkaitos đột ngột dịu hẳn đi."
  },
  {
    "en": "He had not lost his life. He had reacted to Ram's remark.",
    "vi": "Hắn dứt định quyết chưa hề trút hơi thở cuối cùng lìa đời đâu lị. Hắn chỉ đơn thuần d dứt định vừa có phản ứng phản hồi mãnh liệt trước câu nhận xét của Ram mà thôi lị."
  },
  {
    "en": "Younger brother and younger sister, the moment he heard the echo of those words, Batenkaitos' breath faintly calmed down. And, steadily, Batenkaitos revitalised his body at his locusーー,",
    "vi": "Hai tiếng em trai và em gái lị, ngay vào khoảnh khắc âm vang của những câu từ ấy lọt vào tai, hơi thở của Batenkaitos khẽ trở nên bình ổn bình ổn hơn một chút lị. Và rồi, từng bước từng bước một cách điềm tĩnh điềm tĩnh, Batenkaitos d dứt định hồi phục chút sinh lực cho cơ thể ngay tại chỗ ngự trị của mình——,"
  },
  {
    "en": "Ley: \"Ou...r...... ou...r...... little sister, don't......\"",
    "vi": "Ley: “Em...... em gái...... của bọn ta...... quyết chả được......”"
  },
  {
    "en": "Ram: \"Don't lay a finger on her, you say? Sorry, but do you think you're in a position where you can make such an insistence? Have you ever lent your ears to someone's plea even once?\"",
    "vi": "Ram: “Quyết chả được đụng chạm đụng chạm vào một sợi tóc tơ của em ấy đúng chăng lị? Thật vô cùng đáng tiếc nuối lị, song ngươi tự phán đoán xem bản thân mình đang ở vị thế vị thế gì mà dám đưa ra lời đòi hỏi khẩn thiết dường ấy chứ lị? Bản thân ngươi d dứt định dẫu từng chịu lắng nghe tiếng van nài khẩn cầu van nài khẩn cầu của bất kỳ ai dù chỉ một lần duy nhất chưa lị?”"
  },
  {
    "en": "Ley: \"But, still......\"",
    "vi": "Ley: “Nhưng...... cơ mà dẫu vậy......”"
  },
  {
    "en": "Ram: \"ーーーー\"",
    "vi": "Ram: “ーーーー”"
  },
  {
    "en": "Distorting his bloodstained, crumpled face, Batenkaitos pleaded with a tearful voice.",
    "vi": "Khẽ méo mó gương mặt chằng chịt chằng chịt vết thương nhuộm đẫm máu tươi tơi bời kia, Batenkaitos van nài khẩn cầu bằng một chất giọng run rẩy như sắp bật khóc tột cùng."
  },
  {
    "en": "Upon the call of that poignant yet remarkably genuine echo, Ram slightly straitened her eyes. Afterwards, along with a sigh, she closed her eyes.",
    "vi": "Trước âm vang đầy chua xót cay đắng song lại vô cùng chân thật hiếm hoi ấy gõ cửa, Ram khẽ nheo nheo đôi mắt kiều diễm lại phân nào lị. Sau đó, cùng với một tiếng thở dài thườn thượt thườn thượt nhẹ nhàng, cô dứt định nhắm nghiền đôi mi lại lị."
  },
  {
    "en": "Ram: \"Will thinkーー\"",
    "vi": "Ram: “Ta d dứt định dẫu sẽ suy nghĩ suy nghĩ chuyện đó——”"
  },
  {
    "en": "Ley: \"ーーNee-sama, is far too kind.\"",
    "vi": "Ley: “——Nee-sama...... quả thực d dứt định dẫu quá đỗi dịu dàng dịu dàng rồi lị~ tsu.”"
  },
  {
    "en": "Within the juncture, the moment her gaze went astray, Batenkaitos bequeathed simply those words behind, and erased his form.",
    "vi": "Ngay trong tích tắc tích tắc thời gian ngắn ngủi ấy, vào khoảnh khắc tầm mắt của cô vừa hơi chệch hướng lãng tránh lãng tránh đi phân nào lị, Batenkaitos chỉ đơn thuần để lại câu nói dường ấy phía sau lưng, và lập tức xóa sạch hình hài thực thể của mình lị."
  },
  {
    "en": "The spacial leap of the『Leaper』Dorkellーー leaving not a single vestige behind, the blasphemer vanished from her field of vision.",
    "vi": "Cú nhảy vọt dịch chuyển không gian của 『Kẻ Nhảy Vọt』 Dorkell—— quyết chả để lại dù chỉ một mảnh vết tích nhỏ nhoi nào phía sau lưng, tên báng bổ tội đồ khốn nạn d dứt định dẫu lập tức biến mất hoàn toàn khỏi tầm nhìn thị giác của cô lị."
  },
  {
    "en": "ーーHe had escaped. <a id=\"twolb\" href=\"#two\">[1]</a>",
    "vi": "——Hắn d dứt định dẫu chạy trốn thoát thân mất rồi lị. <a id=\"twolb\" href=\"#two\">[1]</a>"
  },
  {
    "en": "Ley: \"Haha ~tsu! Ahahaha ~tsu! Ahakhahahaha~!\"",
    "vi": "Ley: “Ha ha ~tsu! A ha ha ha ~tsu! A ha ha ha ha ha ha~!”"
  },
  {
    "en": "Utilising the odd talent of『Leaper』Dorkell with freedom, Batenkaitos fled from Ram's territory.",
    "vi": "Tự do vận dụng thiên tài kỳ dị của 『Kẻ Nhảy Vọt』 Dorkell một cách vô cùng thoải mái tự tại, Batenkaitos điên cuồng chạy trốn khỏi ranh giới lãnh địa thống trị tối thượng của Ram lị."
  },
  {
    "en": "No longer, shall he consider recklessness like eating Ram. Paying no regard to appearances, he chose flight.",
    "vi": "Quyết chả bao giờ hắn dám ôm giữ những suy nghĩ điên cuồng ngớ ngẩn như việc ăn ngấu nghiến nuốt chửng Ram nữa lị. Quyết chả thèm bận tâm mảy may đến thể diện hay danh dự sĩ diện quèn nào nữa, hắn d dứt định quyết định chọn phương án chạy trốn thoát thân làm tối thượng lị."
  },
  {
    "en": "Can't win. Can't win. Can't win against that one.",
    "vi": "Quyết chả thể thắng nổi lị. Quyết chả thể thắng nổi lị. Dứt định quyết chả thể nào giành thắng lợi trước thực thể siêu việt dường ấy được đâu lị."
  },
  {
    "en": "Just as he had thought, that one was a monster. How conventional for her to have bought time and returned after becoming more powerful as well.",
    "vi": "Đúng hệt như những gì hắn hằng suy tính phán đoán lị, thực thể ấy d dứt định chính là một con quái vật siêu việt thực sự lị. Thật là một chiêu trò quá đỗi bài bản điêu luyện khi cô ta khôn ngoan câu giờ mua lấy chút thời gian ngắn ngủi rồi quay trở lại chiến trường với một nguồn sức mạnh vĩ đại vĩ đại và đáng sợ hơn bội phần dường ấy chứ lị."
  },
  {
    "en": "That one, was a kind of existence who shan't get atop neither the platter of gourmet nor the platter of bizarre eating.",
    "vi": "Thực thể dường ấy, dứt định chính là loại tồn tại quyết chả bao giờ chịu ngự trị trên chiếc đĩa ẩm thực sành ăn sang trọng của kẻ 『Sành Ăn』, và d dứt định quyết chả bao giờ chịu nằm trên chiếc đĩa ăn thô tục tạp nham tạp nham của kẻ 『Bạo Thực』 đâu lị."
  }
]

fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'translation_temp', 'ch86_part2.json'),
  JSON.stringify(part2, null, 2),
  'utf-8'
)
console.log('Successfully wrote ch86_part2.json!')
