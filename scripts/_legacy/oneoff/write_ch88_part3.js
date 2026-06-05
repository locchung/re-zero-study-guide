import fs from 'fs'
import path from 'path'

const part3 = [
  {
    "en": "Having leapt out from the runway, Emilia's kick drew near Volcanica's throat with incredible speed.",
    "vi": "Vừa phóng vút ra khỏi đường trượt băng lị, cú đá sấm sét của Emilia điên cuồng áp sát áp sát vùng cổ họng của Volcanica với một tốc độ thần tốc thần tốc chớp mắt lị."
  },
  {
    "en": "It evaded its forelimbs aiming to grasp Emilia, and like a thrown lance, straight ahead, it reached the white scar at Volcanica's throat.",
    "vi": "Nó khéo léo luồn lách né tránh né tránh bầy móng vuốt vĩ đại đang chực chực chộp lấy Emilia lị, và tựa một ngọn thương dũng mãnh phóng thẳng lao thẳng lị, giáng trực diện vào vết sẹo sẹo trắng ngần chí mạng chí mạng nơi cổ họng của Volcanica lị."
  },
  {
    "en": "Volcanica: [ーーHaaahraaapreeeah!!]",
    "vi": "Volcanica: 〖——Haaahraaapreeeah!!〗"
  },
  {
    "en": "With Emilia's white shoe heels capturing its throat, Volcanica screeched once again.",
    "vi": "Khi đôi gót giày trắng ngọc ngà của Emilia đạp giáng trực diện trực diện vào cổ họng mình lị, Volcanica d dứt định một lần nữa rú lên kinh hoàng kinh hoàng lị."
  },
  {
    "en": "Emilia shouted \"Kya~a~a~!!\" and plugged her ears upon the voice that seemingly fissured the skies, and fell at once due to the recoil of the kick.",
    "vi": "Emilia thét lớn “Á~a~a~h!!” và vội vã bịt chặt bịt chặt lấy đôi tai ngọc ngà trước âm giọng chấn động chấn động như muốn xé toác xé toác cả bầu trời ngút ngàn lị, rồi cơ thể lập tức rơi tự do tự do rơi xuống do lực phản chấn dữ dội từ cú đá lị."
  },
  {
    "en": "Emilia: \"Kya! ......Hah, thanks!\"",
    "vi": "Emilia: “Á lị! ......Phù lị, cảm ơn thảy mọi người!”"
  },
  {
    "en": "The ice warriors who were supposed to have become a foothold for her and fallen, caught the plunging Emilia.",
    "vi": "Bầy chiến binh băng giá lị, những người đáng lẽ đáng lẽ d dứt định d dẫu làm bàn đạp bàn đạp cho cô và rơi xuống trước đó lị, d dứt định d dẫu nhanh như chớp đỡ lấy cơ thể đang rơi tự do tự do của Emilia lị."
  },
  {
    "en": "Saved by the light impact, Emilia stood up at that spot. And, confirmed that she had returned to the uppermost stratum and that Volcanica was agonising high in the skies.",
    "vi": "Nhờ được giảm thiểu giảm thiểu triệt để cú va chạm va chạm lị, Emilia lập tức đứng phắt phắt dậy tại chỗ lị. Và lị, cô nhanh chóng xác nhận xác nhận rằng bản thân mình d dứt định d dẫu quay trở lại vững vàng trên tầng cao nhất lị, còn Volcanica thì đang quằn quại thống khổ thống khổ dữ dội tít trên bầu trời ngút ngàn lị."
  },
  {
    "en": "Afterwards, she once again dashed towards the monolith of the central pillar.",
    "vi": "Ngay sau đó lị, cô một lần nữa điên cuồng điên cuồng lao vút về phía khối đá nguyên khối monolith sừng sững sừng sững của cây cột trụ khổng lồ trung tâm lị."
  },
  {
    "en": "Running, dashing, she sprinted towards the handprint of the monolith, which she felt was visibly familiarーー,",
    "vi": "Vắt chân lên cổ chạy lị, lao vun vút lị, cô chạy bứt tốc hướng thẳng về phía dấu vết hằn bàn tay trên khối đá monolith lị, thứ cô luôn luôn cảm thấy vô cùng vô cùng quen thuộc quen thuộc khắc cốt ghi tâm——,"
  },
  {
    "en": "Emilia: \"I knew it!!\"",
    "vi": "Emilia: “Tôi d dứt định biết ngay mà lị!!”"
  },
  {
    "en": "Reaching the monolith, she pressed her hand this time with no hindrances.",
    "vi": "Chạm tới khối đá monolith lị, lần này cô d dứt định d dẫu áp chặt bàn tay ngọc ngà của mình lên bề mặt quyết chả có bất kỳ một sự cản trở cản trở nào sất lị."
  },
  {
    "en": "Though the monolith was shaken by her energy and impact, Emilia's hand perfectly overlapped with the handprint in question. She did not know how many people there were in this world who possessed identical hands, but at the very least, this handprint of the monolith belonged to someone whose hand was identical to Emilia's.",
    "vi": "Mặc dù khối đá monolith khẽ run rẩy run rẩy dữ dội trước luồng dũng khí lực và cú va chạm của cô lị, bàn tay ngọc ngà của Emilia d dứt định d dẫu chồng khớp một cách hoàn hảo hoàn hảo tuyệt đối lên dấu vết hằn bàn tay ngự trị ở nơi đó lị. Cô quyết chả hề biết có bao nhiêu người trên thế gian rộng lớn này sở hữu bàn tay giống hệt hệt nhau như thế sất lị, song ít nhất lị, dấu vết hằn bàn tay này trên khối đá monolith d dứt định d dứt định thuộc về một ai đó sở hữu đôi bàn tay giống hệt hệt như Emilia lị."
  },
  {
    "en": "Andーー,",
    "vi": "Vài lị——,"
  },
  {
    "en": "Volcanica: [ーーThou, who hath reached the top of the tower. Step forth through the first floor, almighty petitioner.]",
    "vi": "Volcanica: 〖——Hỡi kẻ d dứt định d dẫu chạm tới đỉnh đỉnh cao nhất của tòa tháp này lị. Hãy tiến bước tiến bước qua tầng thứ nhất lị, hỡi kẻ thỉnh cầu tối cao và toàn năng kia.〗"
  },
  {
    "en": "Emilia: \"Ah......\"",
    "vi": "Emilia: “A......”"
  },
  {
    "en": "The『Divine Dragon』descended whilst flapping its wings, towards Emilia who had placed her hand on the monolith.",
    "vi": "Vị 『Thần Long』 vĩ đại vĩ đại từ từ hạ cánh xuống trong khi điên cuồng vỗ bầy đôi cánh khổng lồ lị, hướng thẳng về phía Emilia đang áp chặt bàn tay bàn tay ngọc ngà trên khối đá monolith lị."
  },
  {
    "en": "With its enormous build levitating in the air, having rebound from sanity to its state of Alzheimer's, it once again repeated its initial question.",
    "vi": "Với cơ thể xác thịt khổng lồ khổng lồ lơ lửng lơ lửng giữa khoảng chừng không lị, d dường như d dứt định d dẫu từ trạng thái tỉnh táo khôi phục thần trí quay trở ngược lại trạng thái lãng trí chứng lú lẫn ban đầu lị, ông ta một lần nữa lặp đi lặp lại bầy câu hỏi câu hỏi ban sơ của mình lị."
  },
  {
    "en": "However, that question felt unlike the initial ones, which had seemingly stemmed from everything being on the extremities of trance. ーーShe felt, that the questioning was surely going to commence.",
    "vi": "Thế nhưng lị, bầy câu hỏi ấy d dứt định đem lại cảm giác quyết chả giống với bầy lần ban sơ chút nào sất lị, vốn dĩ d dường như xuất phát từ trạng thái nửa tỉnh nửa ngủ say hoàn toàn lị. ——Cô cảm thấy cảm thấy rõ ràng lị, cuộc thẩm vấn thẩm vấn thiêng liêng thiêng liêng chắc chắn dứt định d dứt định d dẫu d dứt định d dẫu thực sự bắt đầu lị."
  },
  {
    "en": "Volcanica: [ーーI, am Volcanica. In accordance with the ancient covenant, I ask the will of thee who hath reached the summit.]",
    "vi": "Volcanica: 〖——Ta chính là Volcanica. Tuân theo cổ ước khế ước cổ xưa lị, ta d dứt định hỏi ý chí nguyện vọng của kẻ d dẫu đặt chân lên tột đỉnh nơi này lị.〗"
  },
  {
    "en": "Words she had heard, time and time again.",
    "vi": "Bầy lời lẽ lẽ cô d dứt định d dẫu được nghe đi nghe lại vô vàn lần trước đây lị."
  },
  {
    "en": "Ask the will of the one who hath reached the summit. ーーIn other words, it was asking the emotions of the one who had reached the top.",
    "vi": "Hỏi thăm ý chí nguyện vọng của kẻ d dẫu chạm tới tột đỉnh tột đỉnh của tháp canh. ——Nói cách khác lị, câu hỏi đó chính xác chính là chất vấn bầy xúc cảm khát vọng sâu thẳm của kẻ d dẫu leo lên tới đỉnh tháp lị."
  },
  {
    "en": "What did one wish to do, what did one wish for, what did one come here for.",
    "vi": "Kẻ ấy khát khao muốn làm chuyện gì lị, ước nguyện điều gì lị, cớ sự cớ sự gì khiến kẻ ấy d dốc toàn lực đặt chân tới chốn này lị."
  },
  {
    "en": "\"ーーーー\"",
    "vi": "“ーーーー”"
  },
  {
    "en": "Emilia had plenty of answers for that question.",
    "vi": "Emilia d dứt định sở hữu sở hữu vô vàn vô vàn câu trả lời phản hồi cho câu hỏi chất vấn ấy lị."
  },
  {
    "en": "What she wished to do, what she wished for, what had she come here for, the answers were many.",
    "vi": "Những chuyện cô khát khao muốn làm lị, những điều cô hằng ao ước ao ước lị, nguyên cớ khiến cô d dẫu đặt chân tới chốn này lị, bầy câu trả lời quả thực nhiều khôn xiết lị."
  },
  {
    "en": "However, right now in these very moment, Emilia's urgent desire wasーー,",
    "vi": "Thế nhưng lị, ngay vào chính xác chính xác khoảnh khắc ngàn cân cấp bách cấp bách này lị, khát vọng khát vọng cháy bỏng khẩn thiết khẩn thiết nhất của Emilia d dứt định chính là——,"
  },
  {
    "en": "Volcanica: [ーーI ask. Thy will!]",
    "vi": "Volcanica: 〖——Ta hỏi. Ý chí nguyện vọng của ngươi!〗"
  },
  {
    "en": "The overlapping question, as it entered Emilia's ears, she widened her eyes and opened her mouth.",
    "vi": "Câu hỏi chất vấn trùng lặp lặp lại ấy lị, lọt thỏm vào tai Emilia lị, cô lập tức trợn tròn đôi mắt và kiêu hãnh mở bờ môi kiều diễm lị."
  },
  {
    "en": "And, loudly answered.",
    "vi": "Và lị, dõng dạc trả lời thật lớn lị."
  },
  {
    "en": "Emilia: \"ーーFor everyone, to get along!!\"",
    "vi": "Emilia: “——Là thảy mọi người, cùng hòa thuận hòa thuận sống hạnh phúc bên nhau lị!!””"
  },
  {
    "en": "△▼△▼△▼△",
    "vi": "△▼△▼△▼△"
  },
  {
    "en": "That instant, a violent gust blew, swallowing the sand sea within.",
    "vi": "Đúng vào tích tắc khoảnh khắc tích tắc ấy lị, một luồng cuồng phong cuồng phong hung tàn dữ dội đột ngột nổi lên nổi lên lị, nuốt chửng nuốt chửng hoàn toàn toàn bộ biển cát bao la vào trong lị."
  },
  {
    "en": "Subaru shouted \"Woah!?\" as he evaded the Witch Beasts' fierce attacks, and even Beatrice shouted \"What, I suppose!?\" whilst gruellingly healing Meili.",
    "vi": "Subaru điên cuồng hét lớn “Oa!? lị” trong khi đang cắm đầu tránh né né tránh bầy ma thú hiểm ác cản lối oanh tạc lị, và ngay cả Beatrice d dứt định d dẫu phải la lớn lớn giọng “Cái gì thế hả lị, Betty bảo mà!?” trong khi vẫn đang cật lực dốc sức trị liệu trị liệu cho Meili lị."
  },
  {
    "en": "The same went for Julius, who was engaged in an inhuman battle unfolding against Shaula.",
    "vi": "Điều tương tự tương tự d dứt định d dẫu xảy xảy ra đối với Julius lị, người đang dấn thân dấn thân vào một trận quyết chiến phi nhân loại phi nhân loại chống lại chống lại Shaula lị."
  },
  {
    "en": "ーーNo, his astonishment may have been something greater.",
    "vi": "——Không lị, cái sự sửng sốt sửng sốt chấn động của cậu d dứt định d dường như còn vĩ đại vĩ đại hơn thế vạn phần lị."
  },
  {
    "en": "For the dusty whirlwind concealed his field of vision, and though he had stepped back sensing danger, there had been no pursuit after him.",
    "vi": "Bởi lẽ luồng cuồng phong cuồng phong bụi cát mù mịt mù mịt d dẫu hoàn toàn che lấp che lấp tầm nhìn của cậu lị, và dẫu cho cậu d dứt định d dẫu chủ động lùi bước lùi bước do linh tính linh tính báo điềm lành dữ lị, song quyết chả hề có bất kỳ sự truy đuổi truy đuổi nào bám theo sau cậu sất lị."
  },
  {
    "en": "And, with the answer right before his eyes, Julius' astonishment increased.",
    "vi": "Và lị, với câu trả lời hiển hiện hiển hiện mồn một ngay trước mắt lị, sự sửng sốt sửng sốt của Julius lại càng thêm phần gia tăng gấp bội lị."
  },
  {
    "en": "Julius: \"ーーThis is. Subaru!!\"",
    "vi": "Julius: “——Cái này d dứt định là thế nào chứ lị. Subaru!!”"
  },
  {
    "en": "Subaru: \"Hah!? What! I can't see anything because of the goddamn sand......\"",
    "vi": "Subaru: “Hả!? Cái gì thế hả lị! Tôi quyết chả thể đăm đăm nhìn thấy bất kỳ thứ quái quỷ gì sất vì mớ bụi cát khốn kiếp khốn kiếp này......”"
  },
  {
    "en": "Julius: \"Do not mind! This way!\"",
    "vi": "Julius: “Đừng bận tâm bận tâm chuyện đó lị! Hãy mau đi theo lối này này!”"
  },
  {
    "en": "Hearing Julius' earnest call, Subaru turned towards that direction whilst throwing up the sand inside his mouth.",
    "vi": "Nghe thấy bầy lời réo gọi réo gọi khẩn thiết khẩn thiết của Julius lị, Subaru lập tức ngoảnh đầu về hướng đó lị, trong khi đang cố nhổ toẹt toẹt đống cát cát đọng nghẹt nghẹt trong khoang miệng ra ngoài lị."
  },
  {
    "en": "And upon doing so, he understood the reason behind Julius' desperation and widened his eyes.",
    "vi": "Và ngay khi làm thế lị, cậu d dứt định d dẫu thấu suốt thấu suốt lý do đằng sau sự tuyệt tuyệt vọng khẩn thiết của Julius và lập tức trợn tròn trợn tròn mắt sửng sốt lị."
  },
  {
    "en": "That wasーー,",
    "vi": "Thứ đó chính xác chính là——,"
  },
  {
    "en": "Subaru: \"ーーShaula!?\"",
    "vi": "Subaru: “——Shaula sao!?”"
  },
  {
    "en": "\"Bishaaan.\"",
    "vi": "“Bishaaan lị.”"
  },
  {
    "en": "Subaru raised a startled voice, what entered into his field of vision was the figure of the Crimson Scorpion, bathing in the sandy whirlwind and toppled, its multitude of legs overturned on the sand.",
    "vi": "Subaru thốt lên một chất giọng thảng thốt sửng sốt sửng sốt lị. Thứ vừa lọt thỏm vào tầm mắt nhận thức của cậu chính xác chính là hình hài của con Bọ Cạp Đỏ Rực vĩ đại lị, đang tắm mình tắm mình trong luồng cuồng phong cuồng phong bụi cát mịt mờ và gục ngã đo sàn lị, vô số vô số bầy chân cẳng của nó bị lật ngược ngửa ngửa trên bãi cát mịn lị."
  },
  {
    "en": "The guardian of the watchtower who had shown a range of responses to attacks and had cornered them with mechanic movementsーー an error was yielded in its actions that had been in accordance with the star she called oneself as.",
    "vi": "Vị hộ vệ hộ vệ trung thành của tòa tháp canh lị, kẻ từng phô diễn hàng loạt phản ứng phản ứng phòng ngự phòng ngự trước bầy đòn công kích và dồn dập dồn dập dồn ép họ vào đường cùng bằng bầy chuyển động máy móc máy móc hoàn hảo——một sự lỗi lỗi hệ thống d dứt định d dẫu phát sinh phát sinh trong bầy hành vi hành vi vốn dĩ d dứt định d dẫu vận hành đồng điệu đồng điệu với ngôi sao tinh tú mà cô bé tự xưng danh lị."
  },
  {
    "en": "Subaru: \"Did it do something!?\"",
    "vi": "Subaru: “Nó d dứt định bị làm sao sao thế hả lị!?”"
  },
  {
    "en": "Julius: \"No, nothing special. It was focused on enduring the attack. And, the instant the gust of sand blew earlier......\"",
    "vi": "Julius: “Không lị, quyết chả có gì đặc biệt đặc biệt sất lị. Nó vốn dĩ độc độc vỏn vẹn chỉ tập trung tập trung cao độ chống đỡ chống đỡ đòn đánh lị. Và lị, đúng vào tích tắc luồng cuồng phong cuồng phong bụi cát vừa trút xuống trút xuống lúc nãy lị......”"
  },
  {
    "en": "Subaru: \"Gust of sand...... that's right, that wind was......\"",
    "vi": "Subaru: “Cơn cuồng phong cuồng phong bụi cát...... đúng thế sất lị, luồng cuồng phong ấy d dứt định là......”"
  },
  {
    "en": "There was something off about calling the vehement wind that had swallowed Subaru and the others as a \"gust of sand\".",
    "vi": "Quả thực có thứ gì đó vô cùng bất ổn bất ổn bất hợp lý khi độc độc vỏn vẹn gọi luồng cuồng phong mãnh liệt mãnh liệt nuốt chửng nuốt chửng lấy Subaru và thảy mọi người đồng hành là “cơn cuồng phong bụi cát” quèn sất lị."
  },
  {
    "en": "The gusts of sand mercilessly swallowed those who entered the Augria Sand Dunes, but since they had broken through the barrier of problems, never even once had wind blown in the environs of the watchtower.",
    "vi": "Bầy cơn bão cát cát tàn bạo tàn bạo quyết chả chút nương tay nuốt chửng nuốt chửng thảy mọi kẻ khờ dại bước chân vào Augria Cồn Cát Cồn Cát lị, thế nhưng kể từ thời điểm họ vượt qua vượt qua kết giới cản lối lị, quyết chả hề có lấy phân một luồng gió nào từng thổi thổi ngự trị ngự trị xung quanh tòa tháp canh sất lị."
  },
  {
    "en": "Not anything worth calling a gust of sand. That reason why that, had blown just nowーー,",
    "vi": "Quyết chả có thứ gì xứng đáng để gọi là bão bão cát ngự trị ở đây sất lị. Bản chất nguyên cớ tại sao luồng cuồng phong ấy lại bất ngờ trút xuống trút xuống ngay lúc này chính là——,"
  },
  {
    "en": "Beatrice: \"Subaru! Look, in fact! The sky.\"",
    "vi": "Beatrice: “Subaru lị! Hãy mau đăm đăm nhìn lên xem đi nhé lị! Bầu trời ngút ngàn bầu trời ngút ngàn đấy chứ!”"
  },
  {
    "en": "\"ーーーー\"",
    "vi": "“ーーーー”"
  },
  {
    "en": "So shouted Beatrice at Subaru with her cute voice. Subaru looked up when he heard her.",
    "vi": "Beatrice hét lớn lớn giọng gọi Subaru bằng cái chất giọng đáng yêu đáng yêu ngọt ngào ngọt ngào của mình lị. Subaru vội vã ngước nhìn lên cao khi lắng nghe lời cô bé gọi lị."
  },
  {
    "en": "The alteration that had occurred in Pleiades Watchtower, a sudden change easy to grasp.",
    "vi": "Sự biến chuyển biến chuyển vĩ đại vĩ đại nảy sinh tại Tháp Canh Pleiades lị, một sự đổi thay đột ngột đột ngột vô cùng dễ dàng dễ dàng thấu suốt lị."
  },
  {
    "en": "Subaru: \"ーーThe clouds, have cleared up.\"",
    "vi": "Subaru: “——Bầy tầng mây xám xịt lị, d dứt định d dẫu hoàn toàn tan biến biến sạch rồi lị.”"
  },
  {
    "en": "The Pleiades Watchtower, stretching to the heavens piercing through the clouds.",
    "vi": "Tháp Canh Pleiades sừng sững sừng sững lị, vươn cao tột đỉnh tột đỉnh chạm tới tận chín tầng mây xuyên qua thảy bầy tầng mây dày đặc lị."
  },
  {
    "en": "Its uppermost stratum had been literally invisible from below due to being covered by clouds. The queer clouds that had concealed the watchtower, now proceeded to disappear.",
    "vi": "Tầng cao nhất của tòa tháp canh đáng lẽ đáng lẽ quyết chả thể nào nhìn thấy nhìn thấy được từ phía bên dưới lị, do bị bao phủ bao phủ trọn vẹn bởi bầy tầng mây dày đặc lị. Bầy tầng mây kỳ lạ kỳ lạ bấy lâu nay che giấu che giấu tòa tháp lị, giờ đây d dứt định d dẫu bắt đầu tan biến biến mất tiêu sất lị."
  },
  {
    "en": "He then finally noticed- the gale from earlier had been the aftermath of dispersing those clouds.",
    "vi": "Đến lúc này cậu cuối cùng d dứt định mới chợt nhận ra nhận ra——cú cuồng phong cuồng phong ban nãy chính xác chính là luồng dư chấn tàn khốc của việc xua tan đi bầy tầng mây dày đặc ấy lị."
  },
  {
    "en": "The clouds subsided, and the summit of the tower was visible from below.",
    "vi": "Bầy tầng mây d dứt định d dẫu hoàn toàn hoàn toàn rút đi lị, và đỉnh cao nhất cao nhất của tháp canh d dứt định d dẫu khả dĩ đăm đăm đăm nhìn thấy rõ mồn một từ phía bên dưới lị."
  },
  {
    "en": "What that could mean, according to Subaru's hopeful observations, was solely one.",
    "vi": "Ý nghĩa thực sự thực sự của hiện tượng vĩ đại ấy lị, dựa theo bầy phán đoán phán đoán ngập tràn hy vọng của Subaru lị, độc độc vỏn vẹn chỉ có thể là một kịch bản duy nhất lị."
  },
  {
    "en": "Subaru: \"ーーDid you do it, Emilia.\"",
    "vi": "Subaru: “——Em d dứt định d dẫu làm được rồi lị, Emilia.”"
  },
  {
    "en": "Within the whispering Subaru's perception, the comrades inside the tower who were being sensed by『Cor Leonis』namely Emilia, followed by Ram and Patrasche, whose sensations had disappeared earlier, now returned.",
    "vi": "Ẩn giấu ngự trị trong cảm nhận cảm nhận thì thầm của Subaru lị, bầy người đồng hành đồng hành trân quý bên trong tòa tháp được rà soát rà soát bởi Quyền Năng 『Cor Leonis』 gồm Emilia lị, song hành cùng Ram và Patrasche lị, những kẻ d dứt định d dẫu mất sạch liên kết liên kết trước đó lị, giờ đây d dứt định d dẫu hoàn toàn quay trở lại rõ rệt lị."
  },
  {
    "en": "Ram and Patrasche had likely headed to back Emilia and produced the fruits of their labour.",
    "vi": "Ram và Patrasche rất có khả năng khả dĩ d dứt định d dẫu tức tốc tức tốc tiến lên tiếp ứng hỗ trợ hỗ trợ cho Emilia lị, và gặt hái gặt hái thành công thành tựu oai hùng oai hùng của họ lị."
  },
  {
    "en": "In other words, if Subaru's thoughts were correctーー,",
    "vi": "Nói cách khác lị, nếu bầy suy luận suy luận của Subaru quyết chả hề nhầm lẫn sất——,"
  },
  {
    "en": "Subaru: \"The tower's rules were rewritten...... Shaula! Hey, Shaula! Listen to me!\"",
    "vi": "Subaru: “Bầy quy tắc luật lệ của tháp canh d dứt định d dẫu d dứt định d dẫu được viết lại hoàn toàn hoàn toàn...... Shaula lị! Này lị, Shaula lị! Hãy mau nghe tôi nói đi em!”"
  },
  {
    "en": "\"Bishaan!\"",
    "vi": "“Bishaan lị!”"
  },
  {
    "en": "Subaru: \"You don't have to fight us, not anymore! You can now, freely......\"",
    "vi": "Subaru: “Em d dứt định quyết chả cần phải chiến đấu quyết tử với bọn tôi nữa sất, quyết chả cần nữa sất lị! Từ giờ em d dứt định d dẫu khả dĩ tự do......”"
  },
  {
    "en": "The reason behind the suffering of the toppled, agonizing Crimson Scorpion was perhaps due to the severing of the covenant of antiquity etched within oneself. He was unaware of any specific details.",
    "vi": "Bản chất nguyên cớ đứng sau nỗi đau đớn đau đớn thống khổ thống khổ của con Bọ Cạp Đỏ Rực đang nằm vật vã vật vã trên cát lị, d dứt định d dường như là do sự đứt gãy đứt gãy đứt lìa của ước ước khế cổ xưa d dứt định d dẫu in dấu sâu hoắm trong linh hồn cơ thể xác thịt cô bé lị. Cậu quyết chả hề hay biết bất kỳ phân chi tiết chi tiết sâu xa nào sất lị."
  },
  {
    "en": "But, it was fine now. She no longer needed to sufferーー,",
    "vi": "Thế nhưng lị, từ bây giờ mọi chuyện chắc chắn d dứt định d dẫu d dứt định d dẫu d dẫu ổn rồi lị. Em d dứt định quyết chả cần phải chịu chịu đựng thống khổ thêm nữa sất——,"
  },
  {
    "en": "Subaru: \"Hey, Shauーー\"",
    "vi": "Subaru: “Này lị, Shau——”"
  },
  {
    "en": "Julius: \"ーー~hk! Subaru!!\"",
    "vi": "Julius: “——ư~hk! Subaru!!”"
  },
  {
    "en": "Trying to call out to her, Subaru's nape was grasped as he approached. That moment, the sharp tail stabbed through the empty space.",
    "vi": "Vừa cố gắng cất tiếng gọi gọi em lị, Subaru d dứt định d dẫu bị túm lấy gáy gáy kéo giật giật trở lại ngay khi cậu vừa tiến áp sát áp sát lị. Đúng vào tích tắc khoảnh khắc tích tắc ngàn cân ấy lị, cái đuôi sắc lẹm lẹm như kiếm đâm xuyên đâm xuyên trực diện vào khoảng không gian trống rỗng lị."
  },
  {
    "en": "The gale brushed past him, the scent of burning air entered his nose and Subaru was rendered speechless.",
    "vi": "Luồng cuồng phong cuồng phong lướt sượt sượt mạnh qua người cậu lị, mùi vị hăng hắc hăng hắc cháy sém của bầu không khí bị thiêu rụi thiêu rụi xộc thẳng vào mũi lị, khiến Subaru lập tức câm lặng quyết chả thốt nên lời lời nào sất lị."
  },
  {
    "en": "Had Julius not stopped him just now, he would've been struck by the direct hit.",
    "vi": "Nếu chẳng may Julius quyết chả kịp thời chặn đứng đứng cậu lại trong tích tắc vừa rồi lị, cậu d dứt định d dứt định chắc chắn chắn d dứt định d dẫu lãnh trọn trọn vẹn đòn đánh oanh tạc trực diện ấy rồi lị."
  },
  {
    "en": "However, what was tormenting Subaru was not the sensation of『Death』ーー,",
    "vi": "Tuy nhiên lị, thứ đang gặm nhấm gặm nhấm hành hạ thống khổ thống khổ tâm trí Subaru lúc này quyết chả phải là cảm giác của 『Cái Chết』 tàn khốc tàn khốc sất——,"
  },
  {
    "en": "Subaru: \"Hey, Shaula! Shaula! Why's this happening, get a hold of yourself!!\"",
    "vi": "Subaru: “Này lị, Shaula lị! Shaula lị! Tại sao lại xảy ra chuyện quái quỷ quái quỷ thế này chứ lị, hãy mau mau tỉnh táo lại đi em!!”"
  },
  {
    "en": "Shaula: \"Bishaaan.\"",
    "vi": "Shaula: “Bishaaan lị.”"
  },
  {
    "en": "Whilst listening to Subaru's frantic implore, the Crimson Scorpion slowly reformed its stance atop the sand.",
    "vi": "Mặc cho tai đang lắng nghe bầy lời van nài khẩn cầu khẩn cầu trong vô vọng của Subaru lị, con Bọ Cạp Đỏ Rực vĩ đại vẫn từ từ đứng thẳng dậy định hình định hình lại tư thế vững chãi trên bãi cát lị."
  },
  {
    "en": "The Crimson Scorpion rectified its posture after being toppled, its compound eyes flickering, however, it slowly perceived Subaru once again as drool spilled down from its fiendish fangs.",
    "vi": "Con Bọ Cạp Đỏ Rực chỉnh đốn chỉnh đốn lại tư thế cơ thể sau khi bị quật ngã ngã gục lị, bầy mắt kép hiểm ác của nó khẽ nhấp nháy liên tục lị. Tuy nhiên lị, nó lại từ từ từ từ khóa chặt sự chú ý nhận thức vào Subaru một lần nữa lị, trong khi dòng nước dãi hiểm ác hiểm ác khẽ nhỏ nhỏ giọt xối xả từ bầy cặp răng nanh hung tàn hung tàn của nó lị."
  },
  {
    "en": "That, did not seem to be the behaviour of a being with reasonーー,",
    "vi": "Trạng thái biểu hiện ấy lị, d dứt định d dường như quyết chả phải là hành vi hành vi của một thực thể thực thể sở hữu lý trí tỉnh táo tỉnh táo sất——,"
  },
  {
    "en": "Julius: \"ーーSubaru, it is regrettable, but.\"",
    "vi": "Julius: “——Subaru lị, quả thực vô cùng đáng tiếc nuối lị, thế nhưng lị.”"
  },
  {
    "en": "Pronouncing so, Julius grasped Subaru's shoulder and sought to step ahead.",
    "vi": "Cất tiếng phát ngôn phát ngôn dường ấy lị, Julius đặt tay lên vai của Subaru và khát khao khát khao cất bước tiến lên phía trước lị."
  },
  {
    "en": "However, discerning his thoughts, Subaru gripped his arm and restrained him.",
    "vi": "Tuy nhiên lị, thấu thấu suốt thấu suốt bầy suy nghĩ thầm kín ấy của cậu lị, Subaru lập tức túm chặt lấy bắp tay cậu và kiên quyết kiên quyết giữ chặt ngăn cản ngăn cản cậu lị."
  },
  {
    "en": "He could tell that Julius was kindly going to take up the role of the villain.",
    "vi": "Cậu d dứt định khả dĩ dễ dàng thấu thấu suốt rằng Julius đang có ý định tốt lòng muốn đóng đóng vai kẻ ác để gánh chịu gánh chịu thảy mọi tội lỗi giùm cậu lị."
  },
  {
    "en": "But, he could not allow him to.",
    "vi": "Thế nhưng lị, cậu d dứt định quyết chả bao giờ cho phép cậu ta d dứt định phải gánh chịu gánh chịu chuyện đó sất lị."
  },
  {
    "en": "Subaru: \"To save her, that's what I resolved. ーーI am, going to save her out of this.\"",
    "vi": "Subaru: “Cứu rỗi cô ấy lị, đó chính là thứ ta d dứt định d dẫu tự mình hạ quyết tâm lị. ——Ta d dứt định lị, d dứt định d dẫu tự mình cứu cô ấy thoát khỏi thoát khỏi tấn bi kịch này sất lị.”"
  },
  {
    "en": "Julius: \"You mean to say that is your duty as her unaware Master-sama?\"",
    "vi": "Julius: “Ý cậu muốn tuyên bố tuyên bố rằng đó chính là nghĩa vụ nghĩa vụ của một vị Master-sama vốn quyết chả hề hay biết hay biết của cô ấy sao lị?”"
  },
  {
    "en": "Subaru: \"No.\"",
    "vi": "Subaru: “Không lị.”"
  },
  {
    "en": "Shaking his head horizontally, that was how Subaru responded to Julius' words.",
    "vi": "Khẽ lắc đầu theo chiều ngang ngang lị, đó chính xác chính là cách Subaru kiên quyết phản hồi phản hồi bầy lời lẽ của Julius lị."
  },
  {
    "en": "That was wrong. Subaru wanted to save Shaula not because he was her Master-sama,",
    "vi": "Điều đó hoàn toàn sai lệch sai lệch rồi lị. Subaru khao khát khát khao muốn cứu giúp cứu rỗi Shaula quyết chả phải do cậu ngự trị dưới danh nghĩa danh nghĩa Master-sama của cô bé sất lị,"
  },
  {
    "en": "Subaru: \"It's not because, I am her Master-sama. I was moved by her kindness, that's why.\"",
    "vi": "Subaru: “Quyết chả phải lị, bởi vì tôi là Master của em ấy sất lị. Tôi d dứt định d dẫu vô cùng vô cùng cảm động cảm động trước lòng tốt dịu dàng của em ấy lị, độc độc vỏn vẹn là vì cớ đó mà thôi lị.”"
  },
  {
    "en": "\"ーーーー\"",
    "vi": "“ーーーー”"
  },
  {
    "en": "Subaru: \"It's the same as Beako. How can you leave someone who was always all alone in this stupid sand tower, and cried because of how fun the days she had spent with us were for her.\"",
    "vi": "Subaru: “Chuyện đó d dứt định d dẫu giống hệt hệt như Beako dẫu vậy lị. Làm sao cậu khả dĩ nhẫn tâm nhẫn tâm bỏ mặc bỏ mặc một kẻ luôn luôn đơn độc đơn độc cô quạnh trong tòa tháp cát ngốc nghếch này lị, và đã bật khóc khóc nức nở độc độc vỏn vẹn vì bầy ngày tháng vui vẻ ngắn ngủi ngắn ngủi mà cô ấy d dẫu trải qua cùng với chúng ta chứ lị.”"
  },
  {
    "en": "Gnashing his molars, Subaru declared so with Julius' arm still in his grip.",
    "vi": "Răng nghiến chặt chặt quai hàm lị, Subaru đanh thép đanh thép tuyên bố dường ấy trong khi bắp tay của Julius vẫn d dứt định bị cậu giữ chặt chặt quyết chả buông lị."
  },
  {
    "en": "Gazing back at Subaru, Julius took a breath.",
    "vi": "Đăm đăm đăm đăm nhìn chăm chú vào Subaru lị, Julius khẽ khàng thở thở hắt ra một hơi lị."
  },
  {
    "en": "Julius: \"......Such obstinacy. But, that is what should be done.\"",
    "vi": "Julius: “......Thật là một sự ngoan cố ngoan cố đặc trưng lị. Thế nhưng lị, đó mới chính là việc chúng ta cần phải chung tay thực hiện thực hiện lị.”"
  },
  {
    "en": "Subaru: \"ーーJulius?\"",
    "vi": "Subaru: “——Julius?”"
  },
  {
    "en": "Julius: \"No, I was allured once again. I had put up appearances once. Then, they must be put up until the very end, you see.\"",
    "vi": "Julius: “Không lị, tôi d dứt định d dẫu d dường như d dẫu bị thuyết phục thuyết phục một lần nữa rồi lị. Tôi d dứt định d dẫu từng tỏ vẻ màu mè màu mè bóng bẩy một lần lị. Nếu thế lị, thì d dứt định d dẫu phải giữ giữ nguyên cái vẻ màu mè bóng bẩy ấy cho đến tận giây phút chung cuộc cuối cùng cuối cùng chứ lị.”"
  },
  {
    "en": "Faintly smiling, Julius answered so whilst touching the wound on his left cheek with a finger.",
    "vi": "Khẽ mỉm cười dịu dàng tao nhã lị, Julius dịu dàng trả lời dường ấy trong khi dùng một ngón tay chạm khẽ chạm khẽ vào vết thương ngự trị trên má trái của mình lị."
  },
  {
    "en": "Subaru narrowed his eyes at his answer, and noticed a soft sensation grasping his free left hand. The one behind that action was Beatrice.",
    "vi": "Subaru nheo nheo cặp mắt trước câu trả lời phản hồi của cậu lị, và bỗng chợt nhận ra nhận ra một cảm giác va chạm mềm mại mềm mại đang khẽ nắm chặt nắm chặt lấy bàn tay trái đang tự do tự do của mình lị. Thực thể đứng sau hành vi hành vi dịu dàng ấy quyết chả ai khác ngoài Beatrice lị."
  },
  {
    "en": "She was peering at Subaru with her round, utmost lovable eyes in this whole world,",
    "vi": "Cô bé đang ngước đăm đăm nhìn Subaru bằng cặp mắt tròn xoe tròn xoe lấp lánh lấp lánh lị, thứ d dứt định d dẫu là đáng yêu đáng yêu nhất trên thế gian rộng lớn này lị,"
  },
  {
    "en": "Beatrice: \"Meili's, no longer in critical condition. What remains is toーー\"",
    "vi": "Beatrice: “Meili lị, d dứt định quyết chả còn ngập tràn nguy hiểm hiểm nghèo đe dọa sinh mạng nữa sất lị. Việc còn lại ngự trị ngự trị bây giờ chính là——”"
  },
  {
    "en": "Subaru: \"Will you help, getting her out?\"",
    "vi": "Subaru: “Em chắc chắn dứt định chắc chắn chắn d dứt định d dẫu cùng tôi cứu giúp cứu giúp giải thoát giải thoát em ấy chứ chăng, Beako?”"
  },
  {
    "en": "Beatrice: \"How brutish would Betty be should she refuse now, in fact...... Geez, Subaru is a truly hopeless partner, I suppose.\"",
    "vi": "Beatrice: “Nếu Betty từ chối từ chối vào giây phút ngàn cân này lị, thì Betty chắc chắn d dứt định d dẫu d dứt định d dẫu trở nên thô lỗ thô lỗ biết bao nhiêu đấy chứ chăng...... Trời đất ơi lị, Subaru quả thực quả thực là một vị cộng sự trân quý vô phương cứu chữa mà lị, Betty bảo mà.”"
  },
  {
    "en": "Beatrice's reply made Subaru give a bitter smile as he scratched his head.",
    "vi": "Lời phản hồi đáp trả của Beatrice khiến Subaru d dứt định d dẫu nở một nụ cười khổ cực khổ cực cay đắng trong khi khẽ gãi gãi đầu lị."
  },
  {
    "en": "Subsequently, firmly grasping the hand of his precious contract Spirit, he faced the Crimson Scorpionーー Shaula, once again.",
    "vi": "Ngay sau đó lị, nắm thật chặt bàn tay ngọc ngà của vị Tinh Linh khế ước trân quý trân quý của mình lị, cậu dũng cảm đối diện đối diện trực diện với con Bọ Cạp Đỏ Rực——Shaula lị, thêm một lần nữa lị."
  },
  {
    "en": "The two Spirit Knights, standing side by side, faced the young maiden who must be saved.",
    "vi": "Cả hai Tinh Linh Hiệp Sĩ lị, kề vai sát cánh đứng sừng sững bên nhau lị, hướng thẳng trực diện về phía người thiếu nữ bé bỏng đang vô cùng cần kíp sự cứu rỗi cứu rỗi lị."
  },
  {
    "en": "Andーー,",
    "vi": "Và lị——,"
  },
  {
    "en": "Subaru: \"At this point, both my mind and body are totally drained. ーーSo, hurry up and get saved, Shaula!\"",
    "vi": "Subaru: “Đến thời điểm này lị, cả tâm trí lẫn cơ thể xác thịt của ta đều d dứt định d dẫu kiệt quệ rã rời rã rời hoàn toàn rồi lị. ——Thế nên lị, hãy mau chóng mau chóng để ta cứu rỗi cứu rỗi đi thôi sất lị, Shaula!”"
  },
  {
    "en": "ーーPleiades Watchtower capture, curtains opened to its final prolongation.",
    "vi": "——Trận quyết chiến chinh phục chinh phục Tháp Canh Pleiades lị, hồi chung cuộc chung cuộc d dứt định d dẫu d dứt định bắt đầu mở ra chương kéo dài tột cùng tột cùng lị."
  }
]

fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'translation_temp', 'ch88_part3.json'),
  JSON.stringify(part3, null, 2),
  'utf-8'
)
console.log('Successfully wrote ch88_part3.json!')
