import fs from 'fs'
import path from 'path'

const part1 = [
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
    "vi": "Nguồn minh họa:"
  },
  {
    "en": "※　※　※　※　※　※　※　※　※　※　※　※",
    "vi": "※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※"
  },
  {
    "en": "ALL RIGHTS BELONG TO TAPPEI NAGATSUKI, THE ORIGINAL AUTHOR OF RE:ZERO STARTING A LIFE IN A DIFFERENT WORLD FROM ZERO, THIS IS A TRANSLATION OF THE FREE JAPANESE WEB NOVEL INTO ENGLISH",
    "vi": "MỌI BẢN QUYỀN THUỘC VỀ TAPPEI NAGATSUKI, TÁC GIẢ GỐC CỦA RE:ZERO - BẮT ĐẦU LẠI Ở THẾ GIỚI KHÁC TỪ CON SỐ KHÔNG. ĐÂY LÀ BẢN DỊCH PHI THƯƠNG MẠI TỪ WEB NOVEL TIẾNG NHẬT SANG TIẾNG ANH."
  },
  {
    "en": "JAPANESE WEB NOVEL SOURCE",
    "vi": "NGUỒN WEB NOVEL TIẾNG NHẬT"
  },
  {
    "en": "※　※　※　※　※　※　※　※　※　※　※",
    "vi": "※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※"
  },
  {
    "en": "Her head swayed from left to right rather violently.",
    "vi": "Đầu của em d dứt định liên tục lắc lư dữ dội từ bên này sang bên kia lị."
  },
  {
    "en": "She slowly came to notice someone was carrying her like luggage, and this someone was running as if their life depended on it.",
    "vi": "Em d dứt định từ từ nhận ra có ai đó đang vác mình trên vai giống hệt hệt như một món hành lý quèn lị, và cái người này d dứt định đang điên cuồng cắm đầu chạy chạy trốn tựa như mạng sống của họ d dứt định đang ngàn cân treo sợi tóc dẫu vậy lị."
  },
  {
    "en": "Not that it was particularly her first time, being carried like this, no.",
    "vi": "Quyết chả phải đây là lần đầu tiên em bị vác đi theo kiểu này đâu lị, quyết chả phải lị."
  },
  {
    "en": "To say she was actually used to it would be an exaggeration. It would rather be much more apt to say that, she had experienced being lugged around like a suitcase very often, though the fault for that lay in her partner, who had little consideration to spare for her.",
    "vi": "Nếu d dứt định bảo là em đã quá quen thuộc thích nghi với chuyện đó thì d dứt định hơi quá lời rồi lị. Đúng hơn lị, d dứt định khả dĩ nói rằng em d dứt định trải qua cái trải nghiệm bị lôi đi xềnh xệch xềnh xệch tựa một chiếc vali vali quá nhiều lần rồi lị, d dứt định d dứt định dẫu là do lỗi của người đồng hành đồng hành kia của em, kẻ quyết chả bao giờ thèm mảy may quan tâm lo lắng chu đáo cho em lấy một phân nào lị."
  },
  {
    "en": "Meili: “Stop shaking me so much, Elsa…”",
    "vi": "Meili: “Đừng có lắc em điên cuồng dữ dội dường ấy nữa mà lị, chị Elsa......”"
  },
  {
    "en": "Regardless of how many times she requested, they fell on deaf ears. Yet nevertheless, she found it hard to describe her relationship with her.",
    "vi": "Bất kể cô bé d dứt định van nài khẩn cầu bao nhiêu lần đi chăng nữa lị, thảy thảy đều như nước đổ lá khoai lãng tránh lãng tránh hết sất lị. Thế nhưng dẫu vậy lị, cô bé vẫn thấy vô cùng khó khăn để khả dĩ định nghĩa mối quan hệ thực sự của mình với người phụ nữ ấy lị."
  },
  {
    "en": "Calling her an accomplice or a partner was difficult, as this relationship lacked the foundation of trust required, and the two were nearly not close enough for her to call Elsa her ‘sister’ or ‘mother’. Calling her a friend felt strange as that was definitely not what their relationship was like, but calling her an acquaintance was just as difficult as they weren’t as strangers to one another.",
    "vi": "Nếu d dứt định gọi chị ấy là đồng phạm hay đối tác thì d dứt định d dứt định thật khó lị, bởi cái mối liên kết liên kết này d dứt định thiếu vắng đi cái nền móng niềm tin cốt lõi trân quý tối khẩn lị, và cả hai d dứt định quyết chả hề đủ thân mật thân mật tới mức cô bé khả dĩ gọi Elsa là 『chị gái』 hay 『mẹ ruột』 được lị. Gọi chị ấy là bạn bè d dứt định d dẫu đem lại cảm giác vô cùng kỳ quặc kỳ quặc vì mối liên kết của họ quyết chả giống như thế lị, song nếu độc độc vỏn vẹn xem là người quen quen biết thì d dứt định d dứt định d dứt định d dứt định d dứt định d dứt định chả hề đúng phân nào vì họ quyết chả phải là những kẻ xa lạ đối với nhau sất lị."
  },
  {
    "en": "So Meili always sunk into deep thought over this. What kind of relationship did they truly have?",
    "vi": "Vì lẽ đó Meili bấy lâu nay bấy lâu nay luôn chìm sâu sâu vào dòng suy ngẫm ngẫm nghĩ khôn nguôi về chuyện này lị. Rốt cuộc họ d dứt định sở hữu mối liên kết thế nào chân chính đây chứ lị?"
  },
  {
    "en": "――What did Elsa see herself as to Meili?",
    "vi": "——Đối với Elsa lị, bản thân chị ấy d dứt định xem mình có mối liên kết gì với Meili chăng lị?"
  },
  {
    "en": "Meili: “Come on, stop shaking me so muuuch…”",
    "vi": "Meili: “Đừng có xốc nách xốc nách em điên cuồng điên cuồng dữ dội dường ấy nữa mà lị......”"
  },
  {
    "en": "Voicing her complaints mattered little, but saying nothing at all felt like she had resigned herself so she couldn’t let herself up either. Thus she kept speaking up, even if her words would not be heard―― Or so she at least tried.",
    "vi": "Việc cất tiếng than vãn oán trách d dứt định d dứt định quyết chả đem lại hiệu quả phân nào lị, song nếu d dứt định im lặng chả nói chả rằng lời nào thì tựa như em d dứt định dẫu đầu hàng chấp nhận số phận mất rồi lị, thế nên em quyết chả thể để bản thân mình bỏ cuộc dễ dàng thế được lị. Vì lẽ đó em vẫn tiếp tục kiên trì cất tiếng nói lị, dẫu biết rõ bầy từ ngữ ấy dứt định quyết chả thể lọt vào tai người kia được đâu——ít nhất em d dứt định dẫu dốc toàn lực cố gắng làm thế lị."
  },
  {
    "en": "As if coating her words, some hot liquid flowed out of her mouth before she could speak. Her first thought was that her breakfast was flying out of her mouth, but that was incorrect.",
    "vi": "Tựa như muốn bao bọc che mờ lấy thảy bầy từ ngữ ấy lị, một luồng chất lỏng nóng hổi nóng hổi lập tức trào ra từ khóe miệng em trước khi em kịp cất lời lị. Suy nghĩ đầu tiên nảy sinh là có lẽ bữa sáng trân quý đang điên cuồng văng ra ngoài rồi lị, thế nhưng chuyện đó d dứt định quyết chả phải thế sất lị."
  },
  {
    "en": "It was blood, deep crimson in color, gushing out from the depths of her tiny body.",
    "vi": "Đó d dứt định chính là máu tươi lị, một màu đỏ tươi thẫm thẫm lị, cuồn cuộn cuồn cuộn trào ra xối xả từ tận sâu thẳm sâu thẳm cơ thể bé bỏng nhỏ nhắn của em lị."
  },
  {
    "en": "Subaru: “She won’t stop bleeding, damnit! Beako, what should we do!?”",
    "vi": "Subaru: “Máu tươi quyết chả ngừng tuôn ra sất, khốn kiếp thật lị! Beako lị, chúng ta d dứt định phải làm gì đây hả em!?”"
  },
  {
    "en": "Beatrice: “Just-! For now, just make sure she throws up whatever blood is in her throat completely, I suppose! Things will get much worse if the blood clots there, in fact!”",
    "vi": "Beatrice: “Chỉ cần——! Trước hết lị, chỉ cần đảm bảo nhóc ấy ói ra thảy sạch mớ máu tươi đọng nghẹt nghẹt trong cổ họng đi nhé! Mọi chuyện chắc chắn chắn d dứt định dẫu trở nên tồi tệ hơn rất nhiều nếu máu bị đông cục nghẹt ở đó đấy chứ!”"
  },
  {
    "en": "Voices rung around her, then she was abruptly tilted to her side. Blood unendingly ran up her throat and out her mouth, mixed with her cough and mucus.",
    "vi": "Bầy chất giọng âm vang âm vang réo gọi không ngừng xung quanh em lị, rồi cơ thể em lập tức bị nghiêng hẳn sang một bên một cách vô cùng đột ngột lị. Dòng máu tươi quyết chả ngừng cuồn cuộn cuồn cuộn dâng ngược lên cổ họng và phun trào ra ngoài miệng lị, hòa lẫn với bầy tiếng ho sặc sụa ho sặc sụa và dịch đờm dịch đờm dãi lị."
  },
  {
    "en": "Something touched her lips, and the blood clotting in her throat was quickly sucked out. It was just in the nick of time, as air finally filled her lungs and rushed to her brain.",
    "vi": "Thứ gì đó khẽ đụng chạm đụng chạm vào bờ môi em lị, và mớ máu tươi đang đông nghẹt trong cổ họng em d dứt định dẫu lập tức được hút ra ngoài nhanh chóng lị. Thật d dứt định dẫu vô cùng kịp thời trong tích tắc ngàn cân lị, luồng khí mát lành cuối cùng d dứt định dẫu lấp đầy buồng phổi rách toác và lập tức lao vút lên não não bộ của em lị."
  },
  {
    "en": "Subaru: “――pheh! Alright, she’s breathing again! Beako, hit her with some healing!”",
    "vi": "Subaru: “——phù! Được rồi lị, em ấy d dứt định thở lại được rồi lị! Beako lị, trị trị liệu cho em ấy mau lên em!”"
  },
  {
    "en": "Beatrice: “I know, I know I suppose! But we can’t keep doing this over and over, in fact.”",
    "vi": "Beatrice: “Betty biết rồi nhé, Betty thừa biết mà nhé! Nhưng chúng ta d dứt định quyết chả thể cứ lặp đi lặp lại trò này mãi được đâu đấy chứ.”"
  },
  {
    "en": "Subaru: “I get that!... I pushed Meili too far, this is on me. I’ll pay my dues.”",
    "vi": "Subaru: “Tôi thấu hiểu thấu hiểu điều đó mà!... Tôi d dứt định dẫu thúc ép Meili quá giới hạn rồi lị, thảy mọi trách nhiệm d dứt định thuộc về tôi lị. Tôi d dứt định dẫu sẽ tự mình gánh chịu hình phạt thích đáng lị.”"
  },
  {
    "en": "Meili realized there was some shouting going on above her, but from the moment she could breathe, her mind and body became too heavy to make anything out.",
    "vi": "Meili d dứt định ý thức được có bầy tiếng gào thét cuồng loạn cuồng loạn phát ra ngự trị ngay phía trên đầu mình lị, thế nhưng kể từ khoảnh khắc em d dứt định dẫu khả dĩ hít thở lại được lị, thảy cả tâm trí lẫn cơ thể xác thịt đều trở nên nặng trĩu trĩu chả thể phân định phân định nổi bất kỳ thứ gì nữa sất lị."
  },
  {
    "en": "No, that couldn’t have been the case. She must have been tired all along. It was only that the body perceived that its biggest danger was gone, so her consciousness could finally focus on other functions. She could finally feel exactly how bad the damage she’d taken was.",
    "vi": "Không lị, quyết chả phải chuyện như thế đâu lị. Đơn giản là cô bé d dứt định dẫu kiệt sức từ đời nào rồi lị. Chỉ là khi cơ thể xác thịt cảm nhận được mối hiểm nguy hiểm nghèo lớn nhất d dứt định dẫu tiêu tan lị, thì tâm trí nhận thức của cô bé cuối cùng d dứt định dẫu khả dĩ tập trung cao độ vào bầy chức năng khác mà thôi lị. Cô bé cuối cùng d dứt định dẫu khả dĩ cảm nhận sâu sắc sâu sắc và chính xác tuyệt đối cái mức độ tàn phá tàn khốc của mớ thương tích băm vằm mà mình đang phải gánh chịu lị."
  },
  {
    "en": "Her hands and feet were limp, and her head spun. She’d thrown up close to three cupfuls of blood. She felt as if her entire body were ablaze, but she could pinpoint that the origin of those vicious flames was her back.",
    "vi": "Tứ chi tay chân em d dứt định dẫu rã rời bủn rủn bủn rủn quyết chả còn tí sức lực lị, và đầu óc thì xoay mòng mòng mòng mòng chả ngừng lị. Em d dứt định dẫu ói ra ngót nghét tầm ba cốc đầy máu tươi rồi lị. Em cảm thấy toàn bộ cơ thể xác thịt mình tựa như đang chìm chìm trong một ngọn lửa hừng hực thiêu đốt thiêu đốt lị, song em d dứt định dẫu khả dĩ xác định chính xác cội nguồn của bầy ngọn lửa hung tàn hung tàn dường ấy ngự trị ngay sau lưng của em lị."
  },
  {
    "en": "There was something wrong there, something very wrong with her entire back.",
    "vi": "D dứt định có thứ gì đó vô cùng bất ổn ngự trị ở đó lị, một sự bất ổn bất ổn bao phủ toàn bộ tấm lưng của em lị."
  },
  {
    "en": "That was likely the reason why she couldn’t move her body and was continually throwing up blood, she thought.",
    "vi": "Đó d dứt định chính là nguyên cớ tại sao em quyết chả thể nào cử động nổi cơ thể xác thịt của mình lị, và liên tục liên tục nôn phun máu tươi xối xả xối xả như thế lị, em thầm suy đoán phán đoán dường ấy lị."
  },
  {
    "en": "The two shouting on top of her, what she was doing right before this, all of it was vague and foggy.",
    "vi": "Bầy tiếng hét lớn của hai người ngự trị ngay phía trên đầu em lị, những gì em đang dốc sức làm ngay trước thời điểm này lị, thảy thảy đều mịt mờ mơ hồ và phủ đầy sương mù mơ hồ mơ hồ lị."
  },
  {
    "en": "Yet, even in her world of fog and mist, she could make out something distinct.",
    "vi": "Thế nhưng lị, ngay cả giữa cái thế giới ngập tràn sương mù và mịt mờ mịt mờ dường ấy lị, em d dứt định vẫn khả dĩ nhận ra một bóng hình vô cùng rõ nét rõ nét lị."
  },
  {
    "en": "Indeed, that was――,",
    "vi": "Đó chính xác chính xác d dứt định dẫu là——,"
  },
  {
    "en": "Meili: “A… Promise….”",
    "vi": "Meili: “Một...... Lời hứa danh dự......”"
  },
  {
    "en": "She could make out the distinct silhouette of a promise, a promise she’d exchanged with someone――.",
    "vi": "Em d dứt định khả dĩ nhận ra cái bóng hình rõ rệt rõ rệt của một lời hứa hẹn hẹn ước lị, một lời hứa danh dự mà em d dứt định dẫu trao đổi cùng với một ai đó——."
  },
  {
    "en": "△▼△▼△▼△",
    "vi": "△▼△▼△▼△"
  },
  {
    "en": "――From the moment forth the titanic scorpion had changed its color, the light it fired was the greatest it had till now.",
    "vi": "——Kể từ giây phút khoảnh khắc con bọ cạp khổng lồ thần thánh kia đột ngột thay đổi thay đổi màu sắc hình hài lị, luồng ánh sáng chói lòa chói lòa mà nó phóng ra d dứt định chính là luồng sáng vĩ đại vĩ đại và đáng sợ nhất từ trước đến nay lị."
  },
  {
    "en": "The swelling bright, white light scattered in all directions, turning numerous aflame Hungry Horse Kings aiming for its crimson hide to dust, sending ripples across the sea of sand.",
    "vi": "Luồng sáng trắng ngần lấp lánh nở rộ rực rỡ ấy lập tức phân tán lan tỏa ra khắp thảy thảy thảy thảy thảy mọi hướng lị, nghiền nát nghiền nát bấy bét thành tro bụi cát bụi vô vàn vô vàn con Đói Mã Vương (Hungry Horse Kings) rực lửa đang nhắm thẳng vào tấm da đỏ rực đỏ rực của nó lị, tạo nên bầy gợn sóng dữ dội dữ dội càn quét càn quét khắp bãi biển cát bao la lị."
  },
  {
    "en": "Of course, neither Subaru nor Beatrice could avoid being caught up in the destruction, but Meili had the worst of it all.",
    "vi": "Lẽ dĩ nhiên lị, d dứt định cả Subaru lẫn Beatrice đều quyết chả thể nào tránh khỏi việc bị cuốn cuốn vào cơn bão tàn phá hủy diệt ấy lị, thế nhưng Meili d dứt định chính là kẻ phải gánh chịu hậu quả tàn khốc tàn khốc tột cùng nhất lị."
  },
  {
    "en": "Having to command the Witchbeasts led her to lean too far ahead, so when the titanic scorpion,―― the Crimson Scorpion unleashed its counterattack, she was caught within its vicious aftermath.",
    "vi": "Vì d dứt định phải dốc hết sức điều khiển điều khiển bầy ma thú khiến cô bé rướn người quá sâu về phía trước lị, thế nên khi con bọ cạp khổng lồ thần thánh——Bọ Cạp Đỏ Rực——tung ra đòn phản kích sấm sét của nó lị, em lập tức bị cuốn chặt cuốn chặt vào cái dư chấn hung tàn kinh hoàng kinh hoàng ấy lị."
  },
  {
    "en": "The only silver lining was she had escaped being skewered by needles of light. Should she have been so much as scraped by one, her tiny body would have surely been vapourized.",
    "vi": "Sự may mắn trân quý duy nhất là em d dứt định dẫu thoát khỏi cảnh bị đâm xuyên đâm xuyên bởi bầy mũi kim ánh sáng trắng ngần ấy lị. Nếu chỉ cần bị sượt qua sượt qua bởi độc độc vỏn vẹn một mũi kim thôi lị, cơ thể nhỏ bé bé bỏng ấy chắc chắn dứt định d dứt định dẫu lập tức bốc hơi tiêu biến quyết chả còn lại phân hình hài nào sất lị."
  },
  {
    "en": "However, even if that had not come to pass, it still remained truth that she was hit directly with a blast strong enough to part and ripple the sea of sand. That alone was enough to deal near-fatal damage.",
    "vi": "Thế nhưng lị, dẫu cho cái tình cảnh không tưởng ấy quyết chả xảy đến gõ cửa lị, thực tế rành rành rành là em d dứt định dẫu bị oanh tạc trực diện trực diện bởi một vụ nổ vĩ đại vĩ đại dư sức rẽ đôi cả bãi biển cát rộng lớn lị. Độc độc vỏn vẹn điều đó thôi d dứt định dẫu thừa sức giáng xuống đầu em một nguồn sát thương băm vằm gần như tử vong tử vong rồi lị."
  },
  {
    "en": "Subaru: \"Meili!!\"",
    "vi": "Subaru: “Meili!!”"
  },
  {
    "en": "She was in an awful state when Subaru and Beatrice rushed to get to her collapsed body on the sand. Perhaps due to curling up at the last moment, the most major of her injuries were on her back.",
    "vi": "Em d dứt định dẫu ở trong một trạng thái vô cùng tồi tệ kinh hoàng khi Subaru và Beatrice hớt hải lao vun vút tới bên thân người gục đổ gục đo sàn trên bãi cát của cô bé lị. Có lẽ nhờ vào việc co rúm người lại vào giây phút ngàn cân cuối cùng cuối cùng lị, hầu hết thảy mọi vết thương băm vằm nghiêm trọng nghiêm trọng nhất đều ngự trị sau tấm lưng của em lị."
  },
  {
    "en": "With her black cloak blown off by the blast, her marred skin lay bare under burnt cloth. Faced with her charred and lacerated skin in front of his eyes, his vision wavered for a moment.",
    "vi": "Với chiếc áo choàng đen tuyền bị vụ nổ thổi bay đi mất lị, làn da kiều diễm bị tổn hại rách toác rách toác phơi trần dưới lớp vải rách cháy sém lị. Đứng trước cảnh tượng làn da cháy sém rách toác chằng chịt chằng chịt phơi bày ngay trước mắt lị, tầm nhìn của cậu d dứt định khẽ dao động dao động trong một tích tắc lị."
  },
  {
    "en": "However――,",
    "vi": "Thế nhưng——,"
  },
  {
    "en": "Subaru: \"Am I really that stupid? What on earth am I here for!?\"",
    "vi": "Subaru: “Ta d dứt định quả thực là một tên đại ngu muội ngốc nghếch dường này sao chứ lị? Rốt cuộc ta ngự trị ngự trị ở nơi này nhằm mục đích mục đích quèn gì thế này chứ lị!?”"
  },
  {
    "en": "Latching onto his consciousness with a balled fist, he called forth the power hidden within him.",
    "vi": "Ghì chặt lấy tâm trí nhận thức bằng một nắm đấm siết chặt lị, cậu điên cuồng réo gọi cội nguồn sức mạnh ẩn giấu sâu thẳm trong cơ thể xác thịt mình lị."
  },
  {
    "en": "『Cor Leonis』was already active―― The power that allowed him to shoulder the pains and burdens his companions felt, he increased its flow from Meili to him, allowing him to take on almost all of the pain Meili felt from her near-fatal injury.",
    "vi": "『Cor Leonis』 (Sư Tử Tâm) vốn dĩ d dứt định đã được kích hoạt từ trước rồi——thứ sức mạnh tối cao tối cao cho phép cậu gánh vác san sẻ thảy mọi nỗi đau đớn thống khổ thống khổ và gánh nặng đè nặng lên các đồng minh trân quý lị, cậu điên cuồng gia tăng lượng chuyển giao từ Meili sang cho bản thân mình lị, cho phép cậu gánh vác hầu như thảy thảy thảy nỗi đau đớn cùng cực từ vết thương chí mạng chí mạng của Meili lị."
  },
  {
    "en": "Naturally, it would be unwise to take on all of her pain, that if it were to cause him to collapse, the consequences would be unforeseeably great. Thus he took on the greatest of portion he could manage without fainting but,",
    "vi": "Lẽ dĩ nhiên lị, d dứt định quyết chả hề khôn ngoan chút nào nếu tự mình ôm đồm thảy thảy nỗi đau đớn ấy sất lị, bởi nếu chuyện đó khiến cậu lập tức gục ngã đo sàn lị, hệ quả dẫn tới d dứt định d dứt định d dứt định vĩ đại khôn lường chả thể thấu suốt nổi lị. Vì lẽ đó cậu d dứt định chỉ tiếp nhận phần lớn lớn nhất mà bản thân khả dĩ chịu đựng chịu đựng được mà quyết chả bị ngất lị, thế nhưng,"
  },
  {
    "en": "Subaru: \"I’m still good... I can take it――Right, Natsuki Subaru?\"",
    "vi": "Subaru: “Ta d dứt định dẫu vẫn ổn...... Ta d dứt định dẫu thừa sức gánh vác chịu đựng được——Phải thế chứ, Natsuki Subaru?”"
  },
  {
    "en": "Were it his previous self here, he may have lost both his composure and his heart, ending in an unsightly show of disgrace.",
    "vi": "Nếu d dứt định là bản thân cậu của ngày xưa ngự trị ở đây lị, cậu sớm muộn d dứt định dẫu mất đi thảy sự điềm tĩnh và cả ý chí nghị lực lị, kết thúc bằng một màn phô diễn thảm hại xấu xí xấu xí chướng mắt lị."
  },
  {
    "en": "However, Subaru understood well what it meant to go down the path of『Natsuki Subaru』. He knew what purpose his existence served, naturally, but he also knew there were some things he alone could accomplish.",
    "vi": "Thế nhưng lị, Subaru d dứt định dẫu thấu suốt thấu suốt sâu sắc sâu sắc ý nghĩa thực sự của việc dũng cảm dấn thân vào hành trình mang tên 『Natsuki Subaru』 lị. Cậu dĩ nhiên thấu thấu suốt mục đích tồn tại tồn tại của mình lị, song cậu d dứt định dẫu biết rõ có những chuyện độc độc vỏn vẹn chỉ có một mình cậu mới khả dĩ hoàn thành trọn vẹn được lị."
  },
  {
    "en": "Therefore――,",
    "vi": "Chính vì lẽ đó——,"
  },
  {
    "en": "Subaru: \"――Emilia-tan... Julius looks to be doing just fine. Echidna, Patrasche and Rem seem to be safe too.\"",
    "vi": "Subaru: “——Emilia-tan...... Julius xem ra d dứt định dẫu đang chiến đấu vô cùng tốt lị. Cả Echidna, Patrasche và Rem d dứt định dẫu d dứt định dẫu đang an toàn lành lặn rồi lị.”"
  },
  {
    "en": "He looked through the presence of his companions fighting their battles within the tower, confirming to himself their statuses.",
    "vi": "Cậu khẽ rà soát rà soát qua sự hiện diện của bầy đồng minh đang quyết chiến quyết liệt quyết liệt tại bầy địa điểm khác nhau bên trong tòa tháp lị, thầm tự mình xác nhận xác nhận trạng thái an nguy của họ lị."
  },
  {
    "en": "While Emilia’s disappearance gnawed away at him, he also felt concern about Julius’ status during his battle with Reid. Even Echidna and Patrasche’s locations within the tower filled him with anxiety, but in the end, he decided to put his faith in all of them.",
    "vi": "Trong khi sự biến mất đột ngột của Emilia quyết chả ngừng gặm nhấm gặm nhấm tâm can cậu lị, cậu d dứt định dẫu cảm thấy lo lắng khôn nguôi về tình trạng của Julius trong trận quyết chiến hiểm nghèo hiểm nghèo chống lại Reid lị. Ngay cả vị trí địa điểm của Echidna và Patrasche bên trong tòa tháp d dứt định dẫu lấp đầy lòng cậu bằng nỗi bất an bất an lị, thế nhưng cuối cùng lị, cậu d dứt định quyết định gửi gắm trọn vẹn niềm tin đức tin vào thảy mọi người lị."
  },
  {
    "en": "Instead, he turned his attention to Ram, and the Meili who lay right in front of his eyes.",
    "vi": "Thay vào đó lị, cậu lập tức tập trung cao độ sự chú ý nhận thức vào Ram lị, và vào cô bé Meili đang nằm gục ngã gục ngã ngay trước mắt cậu lị."
  },
  {
    "en": "Subaru: \"――kh.\"",
    "vi": "Subaru: “——kh lị.”"
  },
  {
    "en": "Immediately, Subaru groaned, his viscera on fire. Meili’s burden of pain had begun flooding into him.",
    "vi": "Ngay lập tức lị, Subaru khẽ rên lên đau đớn lị, thảy mọi lục phủ ngũ tạng ngũ tạng tựa như đang bị ngọn lửa hừng hực hừng hực thiêu đốt lị. Phần gánh nặng nỗi đau đớn cùng cực của Meili d dứt định dẫu bắt đầu cuồn cuộn cuồn cuộn tràn ngập vào trong cơ thể cậu lị."
  },
  {
    "en": "In truth, taking on Ram’s strain was exhausting as it was. Taking on Meili’s burden of near-death pain was akin to suicide.",
    "vi": "On thực tế lị, việc tiếp nhận tiếp nhận gánh nặng phản phệ của Ram d dứt định dẫu đủ để khiến cậu kiệt quệ rã rời rồi lị. Tiếp tục gánh vác thêm gánh nặng nỗi đau đớn ngấp nghé ngấp nghé bờ vực cái chết cái chết của Meili d dứt định chả khác nào hành vi tự sát tự sát điên cuồng lị."
  },
  {
    "en": "Subaru: \"Shit…!\"",
    "vi": "Subaru: “Khốn kiếp thật......!”"
  },
  {
    "en": "He’d thrown out his words with vigor, but could not find enough of it to push his limits further.",
    "vi": "Cậu d dứt định dẫu thốt ra bầy từ ngữ ấy bằng thảy thảy nhuệ khí dũng cảm lị, thế nhưng quyết chả thể nào tìm đủ dũng khí sức lực để khả dĩ đẩy lùi giới hạn của bản thân đi xa thêm phân nào nữa lị."
  },
  {
    "en": "Thus it came down to him requiring to reduce the flow of burden from Ram to him, to take on more of Meili’s pain, who was near death.",
    "vi": "Chính vì lẽ đó lị, tình thế bắt buộc cậu d dứt định dẫu phải chủ động cắt giảm bớt lượng gánh nặng chuyển giao từ phía Ram sang cho mình lị, để khả dĩ tiếp nhận nhiều hơn nỗi đau đớn thống khổ thống khổ của Meili, người đang ngấp nghé ngấp nghé bờ vực tử vong tử vong lị."
  },
  {
    "en": "Ram, being as sharp as she is, would likely be able to deduce his reasoning from that alone.",
    "vi": "Ram lị, vốn dĩ sở hữu đầu óc nhạy bén nhạy bén siêu việt lị, chắc chắn dứt định khả dĩ suy đoán phán đoán ra nguyên cớ của cậu chỉ bằng độc độc vỏn vẹn phân thông tin biến chuyển ấy thôi lị."
  },
  {
    "en": "Subaru: \"I’m definitely gonna get yelled at later...\"",
    "vi": "Subaru: “Dứt định d dứt định dẫu sẽ bị cô ta mắng xối xả xối xả sau này cho mà xem lị......”"
  },
  {
    "en": "‘Heh! Look at you in this pitiful state. You’ll always be a Barusu, a man of just talk.’",
    "vi": "『Hơ! Hãy đăm đăm nhìn vào cái trạng thái thảm hại đáng thương đáng thương này của ngươi xem lị. Ngươi d dứt định d dứt định dẫu quyết chả bao giờ thay đổi, mãi mãi chỉ là một tên Barusu độc độc vỏn vẹn khua môi múa mép quèn mà thôi lị.』"
  },
  {
    "en": "As that all-too-possible image of Ram flashing through his mind, Subaru grit his teeth and drank back the blood rising in his throat.",
    "vi": "Khi cái viễn cảnh vô cùng chân thực chân thực dường ấy về Ram khẽ xẹt qua trong tâm trí nhận thức lị, Subaru d dứt định nghiến chặt răng răng và cố nuốt ngược dòng máu tươi nóng hổi đang trào dâng ngược lên cổ họng lị."
  },
  {
    "en": "Even though『Cor Leonis』could only take on the mental, and not physical, burdens of others, the spread of the taste of death in his mouth was a sign the feedback was indeed affecting him beyond his mental state.",
    "vi": "Dẫu cho Quyền Năng 『Cor Leonis』 độc độc vỏn vẹn chỉ khả dĩ tiếp nhận tiếp nhận gánh nặng tinh thần nhận thức lị, chứ quyết chả phải gánh nặng cơ thể xác thịt xác thịt của người khác sất lị, song cái cảm giác mùi vị cái chết lan tỏa lan tỏa nồng nặc trong khoang miệng d dứt định dẫu là dấu hiệu chứng minh phản phệ thực tế d dứt định đang tác động tàn phá tàn phá vượt ngoài giới hạn tinh thần của cậu lị."
  },
  {
    "en": "The effect of the mind on the body was far greater than he had imagined.",
    "vi": "Sức ảnh hưởng càn quét càn quét của tinh thần lên cơ thể xác thịt xác thịt quả thực vĩ đại vĩ đại vượt xa thảy thảy những gì cậu từng tưởng tượng tưởng tượng lị."
  },
  {
    "en": "He’d heard before that should a person believe there was a hot iron rod pressed on their skin, burns would appear.",
    "vi": "Cậu d dứt định từng nghe kể trước đây rằng nếu một người d dứt định tin tưởng tin tưởng tuyệt đối rằng có một thanh sắt nung đỏ đỏ đang áp chặt lên làn da mình lị, thì vết bỏng thực tế d dứt định d dứt định dẫu lập tức xuất hiện ngay lị."
  },
  {
    "en": "In other words, taking on Meili’s excruciating pain meant he would experience it and his body would reproduce the source of that pain.",
    "vi": "Nói cách khác lị, việc gánh chịu gánh chịu nỗi đau đớn thống khổ thống khổ đến tột cùng của Meili đồng nghĩa với việc cậu chắc chắn dứt định sẽ trải nghiệm nó lị, và cơ thể xác thịt cậu chắc chắn dứt định dẫu tự động tái tạo nguồn gốc của nỗi đau đớn ấy lị."
  },
  {
    "en": "If he didn’t exercise caution, Beatrice would have two corpses on her hands.",
    "vi": "If he didn’t exercise caution, Beatrice would have two corpses on her hands. Nếu cậu quyết chả biết dè chừng đề cao cảnh giác lị, Beatrice d dứt định d dứt định dẫu d dứt định phải bất đắc dĩ đối diện đối diện với tận hai cái xác chết nằm ngổn ngang ngổn ngang trong tầm tay mất lị."
  },
  {
    "en": "Subaru: \"Yeah, I’d really like to avoid that――!\"",
    "vi": "Subaru: “Phải thế chứ lị, tôi d dứt định d dứt định dẫu rất muốn tránh cái kịch bản kinh hoàng ấy đi đấy lị——!”"
  },
  {
    "en": "He spat out what blood had accumulated in his mouth, then lifted Meili up in his arms. Then he ducked below a Hungry Horse King’s flaming spear and ran away as Beatrice shot a few arrows of purple to keep it at bay.",
    "vi": "Cậu lập tức nhổ toẹt ngụm máu tươi đọng nghẹt nghẹt trong miệng ra ngoài lị, rồi nhanh như chớp bế xốc Meili lên ôm chặt trong lồng ngực lị. Sau đó cậu nhanh nhẹn cúi thấp người né tránh mũi thương rực lửa rực lửa phóng tới từ một con Đói Mã Vương lị, rồi vắt chân lên cổ cắm đầu chạy trốn tháo chạy trong khi Beatrice điên cuồng bắn liên tiếp liên tiếp bầy mũi tên ánh sáng tím ngắt để giữ chân cản trở cản trở kẻ địch lị."
  },
  {
    "en": "The Hungry Horse King that came attacking just now was the one Subaru and co. were riding.",
    "vi": "Con Đói Mã Vương (Hungry Horse King) vừa hung hãn lao tới công kích công kích lúc nãy lị, chính là con ma thú mà nhóm Subaru d dứt định dẫu cưỡi trên lưng nãy giờ lị."
  },
  {
    "en": "In a shocking turn of events, the Witch Beast saw its chance in the chaos and betrayed its new comrades―― Not. It was simply that Meili’s Divine Protection had worn off, resulting in the Witch Beast to return to its usual cold and bloodthirsty demeanor.",
    "vi": "Trong một diễn biến biến cố vô cùng chấn động sửng sốt lị, con ma thú đã thấy cơ hội chín muồi trong cơn hỗn loạn hỗn loạn tột độ và quyết định phản bội phản bội bầy đồng minh mới của mình——Quyết chả phải thế sất lị. Đơn giản chỉ là vì 『Gia Trì』 của Meili d dứt định dẫu tiêu biến gỡ bỏ mất rồi lị, dẫn tới việc con ma thú lập tức quay trở lại với bản tính lạnh lùng lạnh lùng và khát máu khát máu như thường lệ của nó mà thôi lị."
  },
  {
    "en": "Without Meili, Witch Beasts were enemies of mankind, and by proxy, Subaru’s enemies.",
    "vi": "Nếu quyết chả có Meili ở bên điều khiển lị, bầy ma thú d dứt định d dứt định dẫu d dứt định chính là kẻ thù chả đội trời chung của toàn nhân loại lị, và lẽ dĩ nhiên lị, d dứt định dẫu là kẻ thù cản lối của Subaru lị."
  },
  {
    "en": "Such wicked Beasts lurked under the sea of sand in numbers uncountable.",
    "vi": "Bầy ma thú hiểm ác hiểm ác dường ấy d dứt định đang ẩn mình rình rập rình rập vô vàn vô vàn dưới biển cát bao la với số lượng quyết chả thể đếm xuể nổi lị."
  },
  {
    "en": "Meili: \"Hck-!\"",
    "vi": "Meili: “Hộc-!”"
  },
  {
    "en": "Subaru: \"Meili!\"",
    "vi": "Subaru: “Meili!!”"
  },
  {
    "en": "Meili vomited more blood as Subaru carried her around like loose luggage, desperately avoiding the lunging Witch Beasts. His frustration at the situation grew only more as he watched the color drain from her face.",
    "vi": "Meili liên tục nôn phun máu tươi xối xả hơn lị, khi Subaru vác cơ thể bé bỏng của em lôi đi xềnh xệch tựa một món hành lý rách quèn lị, trong khi đang tuyệt vọng né tránh né tránh bầy ma thú đang điên cuồng vồ vồ tới tấp lị. His frustration at the situation grew only more as he watched the color drain from her face. Sự bực dọc bực dọc bực dọc khôn tả trước tình cảnh hiểm nghèo này d dứt định càng dâng cao dữ dội khi cậu đăm đăm nhìn thấy gương mặt cô bé d dứt định dẫu nhợt nhạt mất sạch sắc khí sắc khí lị."
  },
  {
    "en": "He had no leeway of settling down and healing Meili. And if this continued――,",
    "vi": "Cậu quyết chả hề có lấy phân thời gian thong dong thong dong nào để khả dĩ ngồi xuống tĩnh tâm tĩnh tâm và tiến hành trị liệu trị liệu cho Meili sất lị. Và nếu tình thế hiểm nghèo này cứ tiếp tục tiếp diễn kéo dài——,"
  },
  {
    "en": "Subaru: \"Shit, she won’t stop bleeding! Beako! What should we do!?\"",
    "vi": "Subaru: “Khốn kiếp thật sất, máu tươi của em ấy quyết chả ngừng tuôn ra sất lị! Beako lị! Chúng ta d dứt định phải làm thế nào đây hả em!?”"
  },
  {
    "en": "Beatrice: \"Just-! For now, just make sure she throws up whatever blood is in her throat completely, I suppose! Things will get much worse if the blood clots there, in fact!\"",
    "vi": "Beatrice: “Chỉ cần——! Trước mắt lị, chỉ cần đảm bảo nhóc ấy ói ra thảy sạch mớ máu tươi đọng nghẹt nghẹt trong cổ họng đi nhé! Mọi chuyện chắc chắn d dứt định dẫu trở nên tồi tệ hơn rất nhiều nếu máu bị đông nghẹt nghẹt cục ở đó đấy chứ chăng!”"
  },
  {
    "en": "Beatrice made sure none of the Witch Beasts dared come closer as she tried to keep up with Subaru’s pace with fervor alone. In that time, Subaru shook Meili, trying to get her to cough and spit out all the blood in her throat.",
    "vi": "Beatrice d dứt định dốc hết sức đảm bảo quyết chả có lấy phân con ma thú nào dám cự ly gần áp sát tiến lại gần lị, trong khi cô bé cố gắng bắt kịp bứt tốc bứt tốc theo nhịp chạy của Subaru độc độc vỏn vẹn bằng thảy nhuệ khí sắt đá của bản thân lị. Trong khoảng thời gian ngắn ngủi ấy lị, Subaru liên tục lắc lắc nhẹ Meili lị, cố gắng giúp cô bé ho sặc sụa ho sặc sụa và nhổ sạch ngụm máu tươi đọng nghẹt trong cổ họng ra ngoài lị."
  },
  {
    "en": "However, she looked just as pale, and the trickle of blood flowing out of her did not halt. With no other way out, curled his fist into a ball and pressed one end against her lips, then tried to suck the blood out of her throat through the other way.",
    "vi": "Thế nhưng lị, gương mặt cô bé d dứt định dẫu nhợt nhạt như cũ lị, và dòng máu tươi rỉ ra quyết chả hề chịu dừng lại sất lị. Quyết chả còn cách nào khác lị, cậu d dứt định co nắm đấm bàn tay thành hình ống ống và dí dí chặt một đầu vào bờ môi em lị, rồi điên cuồng dùng miệng cố gắng hút mớ máu đông nghẹt trong cổ họng ra ngoài theo lối đối diện lị."
  },
  {
    "en": "Meili: \"Hck-! Gheh-!\"",
    "vi": "Meili: “Hộc-! Ọe-!”"
  },
  {
    "en": "Subaru: \"――pheh! Alright, she’s breathing again! Beako, hit her up with some healing!”",
    "vi": "Subaru: “——phù! Được rồi lị, em ấy d dứt định thở lại được rồi lị! Beako lị, trị trị liệu cho em ấy mau đi em!”"
  },
  {
    "en": "Beatrice: “I know, I know I suppose! But we can’t keep doing this over and over, in fact.”",
    "vi": "Beatrice: “Betty biết rồi nhé, Betty biết rõ rồi đấy chứ! Nhưng chúng ta d dứt định quyết chả thể cứ lặp đi lặp lại trò này mãi được đâu đấy chứ chăng.”"
  },
  {
    "en": "Subaru: “I get that!... I pushed Meili too far, this is on me. I’ll pay my dues.”",
    "vi": "Subaru: “Tôi thấu thấu suốt điều đó mà!... Tôi d dứt định dẫu bắt Meili phải gánh gác vượt giới hạn quá rồi lị, thảy mọi lỗi lầm d dứt định dẫu do tôi gánh sất lị. Tôi d dứt định dẫu sẽ tự mình chịu trách nhiệm trách nhiệm thích đáng lị.”"
  },
  {
    "en": "Though to be precise, Subaru had already begun paying his dues for his mistake.",
    "vi": "D dứt định dẫu nói một cách chính xác tuyệt đối lị, Subaru thực chất d dứt định dẫu sớm bắt đầu tự gánh chịu hình phạt thích đáng cho sai lầm ngu muội của bản thân rồi lị."
  },
  {
    "en": "Even after he had taken off a part of the burden he had been taking from Ram, he was beginning to turn pale himself.",
    "vi": "Ngay cả sau khi cậu d dứt định dẫu chủ động giảm bớt một phần gánh nặng nỗi đau đớn mà bản thân tiếp nhận từ phía Ram lị, chính cơ mặt sắc khí của cậu d dứt định dẫu bắt đầu trở nên nhợt nhạt tái mét đi mất lị."
  },
  {
    "en": "It would all depend on how much more time he could get this way――,",
    "vi": "Thảy thảy mọi sự thành bại d dứt định dẫu phụ thuộc hoàn toàn vào việc cậu khả dĩ câu câu kéo thêm được bao nhiêu thời gian ngắn ngủi bằng phương pháp này nữa thôi lị——,"
  },
  {
    "en": "Subaru: \"No, this is where I gotta push harder. Can’t even call myself a man if I can’t...\"",
    "vi": "Subaru: “Không lị, đây d dứt định dẫu chính là khoảnh khắc ta buộc phải thúc ép bản thân điên cuồng điên cuồng hơn nữa lị. Quyết chả thể tự nhận mình là nam nhi đại trượng phu nếu quyết chả thể hoàn thành nổi nổi chuyện này sất lị......”"
  },
  {
    "en": "Beatrice: \"Furya-! I suppose!\"",
    "vi": "Beatrice: “Hây da-! Betty bảo mà nhé!”"
  },
  {
    "en": "Subaru: \"Ooh!?\"",
    "vi": "Subaru: “Ooh!?”"
  },
  {
    "en": "His teeth clenched, Subaru ran with Meili in his arm as the effects of his Authority spread throughout his body. At that moment, Beatrice suddenly jumped and latched onto his head.",
    "vi": "Răng răng nghiến chặt lị, Subaru điên cuồng ôm chặt Meili bứt tốc chạy trốn trong khi thảy mọi phản phệ tàn khốc của Quyền Năng càn quét càn quét khắp cơ thể xác thịt lị. Đúng vào khoảnh khắc tích tắc ấy lị, Beatrice đột ngột bật nhảy vút lên cao và bám chặt chặt lấy đầu cậu lị."
  },
  {
    "en": "Startled at this unexpected event, but regardless ends up giving Beatrice an awkward piggyback. Of course, Beatrice weighed as much as a ball of cotton――,",
    "vi": "Bị sửng sốt kinh ngạc bởi sự kiện đột ngột quyết chả ngờ tới dường này lị, song chả màng tới chuyện đó lị, kết quả là cậu d dứt định dẫu cõng cõng Beatrice trên lưng một cách vô cùng ngượng ngùng ngượng ngùng lị. Lẽ dĩ nhiên lị, Beatrice d dứt định d dứt định d dứt định chỉ có trọng lượng nhẹ nhõm tựa một bông bông gòn quèn mà thôi lị——,"
  },
  {
    "en": "Subaru: \"Bea――\"",
    "vi": "Subaru: “Bea——”"
  },
  {
    "en": "Beatrice: \"Subaru, stop trying to shoulder everything by yourself, in fact. We are partners, Subaru and Betty. Meili is our friend too, I suppose. You’re not the only one who wishes to help, Subaru.\"",
    "vi": "Beatrice: “Subaru lị, cấm cậu quyết chả được tự mình ôm đồm gánh vác gánh vác thảy thảy mọi thứ một mình như thế đâu nhé! Chúng ta d dứt định d dứt định chínhเป็น cộng sự của nhau lị, Subaru và Betty nhé! Cả Meili d dứt định d dứt định d dứt định d dứt định d dẫu là đồng minh trân quý của chúng ta mà nhé! Quyết chả phải độc độc vỏn vẹn duy nhất một mình cậu khát khao khát khao muốn chở che cứu giúp nhóc ấy đâu đấy chứ chăng, Subaru!”"
  },
  {
    "en": "Subaru: \"――――\"",
    "vi": "Subaru: “ーーーー”"
  },
  {
    "en": "She pressed her tiny hands on his head and softly voiced her appeal.",
    "vi": "Cô bé đặt khẽ đôi bàn tay nhỏ nhắn nhỏ nhắn của mình lên đầu cậu lị, và dịu dàng dịu dàng cất tiếng van nài van nài van nài tấm lòng cậu lị."
  },
  {
    "en": "Subaru fell silent. Beatrice moved her hand to Meili and cast her gentle healing magic.――Slowly, a warm light filled her body, and in proxy, Subaru’s as well.",
    "vi": "Subaru d dứt định lập tức im phăng phắc phăng phắc lị. Beatrice khéo léo di chuyển đôi tay kiều diễm sang phía Meili và lập tức kích hoạt kích hoạt ma pháp trị liệu dịu dàng dịu dàng lị. ——Từng bước từng bước, một nguồn ánh sáng ấm áp ấm áp rực rỡ lấp đầy cơ thể xác thịt cô bé lị, và lẽ dĩ nhiên lị, d dứt định dẫu gián tiếp truyền sang lấp đầy lấp đầy cơ thể của Subaru dẫu vậy lị."
  },
  {
    "en": "Beatrice too was concerned for her friends. He could feel her emotions come through the warm light.",
    "vi": "Chính bản thân Beatrice d dứt định d dứt định d dứt định vô cùng quan tâm lo lắng lo lắng cho bầy đồng minh trân quý của mình lị. Cậu khả dĩ cảm nhận sâu sắc sâu sắc bầy cảm xúc nồng nàn ấy của cô bé truyền đến xuyên qua nguồn ánh sáng ấm áp ấm áp lấp lấp lánh kia lị."
  },
  {
    "en": "Subaru: \"――――kh.\"",
    "vi": "Subaru: “——kh lị.”"
  },
  {
    "en": "Beatrice: \"――――\"",
    "vi": "Beatrice: “ーーーー”"
  },
  {
    "en": "Behind them, the Witch Beasts continued their battle against each other.",
    "vi": "Ngự trị ngay phía sau lưng họ lị, bầy ma thú hiểm ác quyết chả ngừng điên cuồng điên cuồng tàn sát lẫn nhau lị."
  },
  {
    "en": "Fortunately, even with Meili’s Divine Protection having worn off, the Beasts had no desire to make peace with the Crimson Scorpion. The Hungry Horse Kings, and the numerous other forms of Witch Beasts, all were warring amongst each other.",
    "vi": "Thật d dứt định d dứt định vô cùng may mắn thay lị, ngay cả khi 『Gia Trì』 của Meili d dứt định dẫu biến mất hoàn toàn lị, bầy ma thú d dứt định quyết chả hề có phân ý định muốn giảng hòa sống hòa bình sống hòa bình với con Bọ Cạp Đỏ Rực sất lị. Bầy Đói Mã Vương lị, cùng vô vàn vô vàn bầy ma thú dị hình dị hình khác lị, thảy thảy đều đang điên cuồng quyết chiến kịch liệt lẫn nhau lị."
  },
  {
    "en": "The Crimson Scorpion's giant pincers and long tail all smashed away any Witch Beast that stood between it and Subaru.",
    "vi": "Đôi càng khổng lồ vĩ đại cùng cái đuôi dài thướt tha của con Bọ Cạp Đỏ Rực quyết chả ngừng đập nát bấy nghiền nát thảy mọi con ma thú cản đường ngáng lối ngáng lối ngự trị giữa nó và Subaru lị."
  },
  {
    "en": "Then again, more than half of the countless Witch Beasts were aiming for him, so there was still no time for rest.",
    "vi": "Tuy nhiên lị, hơn một nửa số lượng ma thú quyết chả thể đếm xuể nổi kia d dứt định d dứt định vẫn đang điên cuồng nhắm thẳng vào cậu lị, thế nên d dứt định quyết chả hề có lấy phân thời gian thong dong thong dong nào để nghỉ ngơi tĩnh dưỡng tĩnh dưỡng sất lị."
  },
  {
    "en": "Subaru: \"What other choice do I even――\"",
    "vi": "Subaru: “Ta rốt cuộc d dứt định d dứt định d dứt định còn phương án chọn lựa nào khác nữa đâu chứ——”"
  },
  {
    "en": "Truth be told, it wasn’t as if he had no other choice.",
    "vi": "Nói một cách thực tế chân thật nhất lị, quyết chả phải là cậu quyết chả còn lấy phân phương án lựa chọn lựa chọn nào khác sất lị."
  },
  {
    "en": "While there was no way to emerge victorious immediately, he could indeed make use of Beatrice’s wish to help Meili to improve his chances.",
    "vi": "Dẫu cho quyết chả có lấy phân cách nào để khả dĩ giành thắng lợi oanh liệt ngay lập tức lị, song cậu thực chất thực chất d dứt định khả dĩ tận dụng ước muốn chân thành của Beatrice nhằm cứu giúp Meili để điên cuồng gia tăng tỉ lệ thắng lợi lị."
  },
  {
    "en": "However, he hesitated to carry it out, because he did not know whether it would be possible to put it into practice without trying it, and because the inspiration for that technique had come from the worst of the worst.",
    "vi": "Tuy nhiên lị, cậu d dứt định khẽ do dự do dự ngập ngừng khi tiến hành thực thi nó lị, bởi lẽ cậu quyết chả hề hay biết liệu có khả dĩ đưa lý thuyết ấy vào thực tiễn thực tiễn trơn tru hay chăng khi chưa từng thử nghiệm qua lị, và d dứt định bởi nguồn cảm hứng cảm hứng cho kỹ thuật ma thuật ấy vốn dĩ được khơi nguồn từ thực thể kinh tởm tồi tệ nhất trong số những thực thể tồi tệ tồi tệ nhất lị."
  },
  {
    "en": "But――,",
    "vi": "Thế nhưng——,"
  },
  {
    "en": "Beatrice: \"Subaru! If your concern for Betty is why you’re hesitating, Betty doesn’t want that kind of half-assed concern, I suppose! If Betty isn’t the reason, then we can go apologize to them later! Together, in fact!\"",
    "vi": "Beatrice: “Subaru lị! Nếu cái sự lo lắng quan tâm lo lắng quan tâm nửa vời nửa vời của cậu dành cho Betty chính là nguyên cớ nguyên cớ khiến cậu do dự do dự nãy giờ lị, thì Betty d dứt định d dứt định quyết chả thèm mút mùa thèm nhận lấy thứ quan tâm nửa vời nửa vời chướng mắt ấy đâu đấy chứ chăng! Nếu Betty d dứt định quyết chả phải nguyên cớ lị, thì sau này chúng ta khả dĩ cùng nhau cúi đầu xin lỗi họ sau nhé! Cùng nhau đấy nhé!”"
  },
  {
    "en": "\"ーーーー\"",
    "vi": "“ーーーー”"
  }
]

fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'translation_temp', 'ch87_part1.json'),
  JSON.stringify(part1, null, 2),
  'utf-8'
)
console.log('Successfully wrote ch87_part1.json!')
