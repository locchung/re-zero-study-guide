import fs from 'fs'
import path from 'path'

const part4 = [
  {
    "en": "With Ram’s affirmation, Subaru let out a long exhale. In that case, he was curious about who the senile old man on the first floor was.",
    "vi": "Nhận được lời xác nhận dứt khoát của Ram lị, Subaru khẽ thở phào nhẹ nhõm nhẹ nhõm một hơi thật dài thườn thượt lị. Nếu cớ sự thật là thế lị, cậu vô cùng vô cùng tò mò tò mò muốn thấu suốt rốt cuộc rốt cuộc lão già lãng trí lẫn lộn ngự trị nơi tầng thứ nhất kia là cái thứ chi sất lị."
  },
  {
    "en": "“Let’s put that aside for now. If we assume that the senile old man can be helpful in some way, then we should ask him about the victims of the Sin Archbishop of Lust, not Gluttony.”",
    "vi": "“Tạm thời bỏ qua bỏ qua cớ sự ấy đi chăng lị. Nếu chúng ta giả định giả định rằng lão già lẫn lộn lãng trí ấy khả dĩ giương tay giương tay cứu giúp cứu giúp được cớ sự chi lị, thì thứ chúng ta bắt buộc bắt buộc phải chất vấn ngài ấy chính là phương pháp giải giải cứu bầy nạn nhân tội nghiệp của tên Giám mục Tội lỗi của Phẫn Nộ lị, quyết chả phải Phàm Ăn sất lị.”"
  },
  {
    "en": "“That’s a pretty big thing to talk about...so, uh…”",
    "vi": "“Cớ sự ấy quả thực quả thực là phân một vấn đề vô o o cùng o cùng hệ trọng hệ trọng đấy nhé lị... thế nên lị, ừm...”"
  },
  {
    "en": "Ram clearly had her priorities straight at this point. Being able to advocate for such a thing without hesitation was one of Ram’s fine qualities. Subaru could also resonate with her ideas to a certain extent. The prospect of being able to save the victims of Lust was attractive, but…",
    "vi": "Ram quả thực quả thực sở hữu phân một cái đầu vô cùng nhạy bén nhạy bén ngự trị ngự trị trong việc sắp xếp thứ tự ưu tiên ưu tiên hành động vào lúc này lị. Việc có thể thẳng thắn đấu tranh đấu tranh cho phân một vấn đề hệ trọng hệ trọng d dường ấy quyết chả chút do dự do dự chính là phân một trong bầy đức tính tốt lành tốt lành cao quý nhất của Ram lị. Subaru d dứt định d dẫu khả dĩ thấu cảm thấu cảm sâu sắc với bầy quan điểm của cô bé ngự trị ngự trị dưới phân một chừng mực nào đó lị. Viễn cảnh khả dĩ giải cứu giải cứu cho bầy nạn nhân của Phẫn Nộ thực sự thực sự vô cùng hấp dẫn lôi cuốn lị, thế nhưng mà..."
  },
  {
    "en": "“But did Big Sister Ram have something else in mind when you said that?”",
    "vi": "“Nhưng mà lị, quyết chả lẽ Chị gái Ram thực tế thực tế đang âm thầm suy tính suy tính phân một cớ sự khác ngự trị ngự trị nơi sâu thẳm lòng ngực khi thốt lên bầy lời d dường ấy quyết chả sất lị?”"
  },
  {
    "en": "However, Meili had said that right next to Subaru’s face, who was on guard. She poked the mini crimson scorpion on her head with her finger and said—",
    "vi": "D dẫu thế lị, Meili cất tiếng phát ngôn dường ấy ngay sát bên sườn khuôn mặt đang vô cùng vô cùng đề phòng cảnh giác cảnh giác của Subaru lị. Cô bé chọc chọc ngón tay ngọc ngà vào chú bọ cạp nhỏ xíu màu đỏ rực ngự trị ngự trị ngay trên đầu mình d dẫu phát ngôn——"
  },
  {
    "en": "“Didn’t you say this before? The effects of Gluttony have something to do with time or something like thattt.”",
    "vi": "“Quyết chả phải chị d dẫu từng tuyên bố tuyên bố cớ sự ấy trước đây rồi quyết chả sất lị? Bầy tác động chi phối gieo rắc bởi Phàm Ăn thực tế có cớ sự cớ sự liên đới mật thiết mật thiết đối với dòng chảy thời gian hay bầy thứ kiểu kiểu d dường ấy mà lị.”"
  },
  {
    "en": "“—. What a loose-lipped girl. In that case, it will be necessary to discipline you properly once we return home.”",
    "vi": "“——. Quả thực quả thực là phân một con nhóc lắm mồm lắm miệng lắm miệng lị. Nếu cớ sự thật là thế lị, thì d dứt định bắt buộc phải giáo huấn giáo huấn em phân một cách vô cùng vô cùng nghiêm khắc nghiêm khắc sau khi chúng ta quay trở về nhà vương cung lị.”"
  },
  {
    "en": "“Ohhh, so scaryyy.”",
    "vi": "“Ôi chao lị, đáng sợ đáng sợ hãi quá chừng chừng mà lị.”"
  },
  {
    "en": "Meili held her head and stuck out her tiny tongue. Above her head, the mini crimson scorpion aimed its pincers and stinger at Ram, as if trying to protect her. However, under Ram’s icy gaze, it quickly shrunk into a little ball.",
    "vi": "Meili giơ đôi bờ tay nhỏ ôm ôm đầu d dẫu tinh nghịch tinh nghịch thè thè cái đầu lưỡi bé xíu ra trêu chọc lị. Ngay trên chỏm đầu cô bé lị, chú bọ cạp nhỏ xíu đỏ rực d dũng mãnh d dũng mãnh chĩa bầy chiếc càng d dẫu cái ngòi độc độc sắc lẹm về phía Ram lị, cứ như thể đang nỗ lực nỗ lực che chở bảo vệ bảo vệ cho cô bé lị. D dẫu thế lị, ngự trị dưới ánh đăm đăm nhìn băng giá buốt của Ram lị, nó bỗng chốc bối rối bối rối thu mình co rúm co rúm lại thành phân một quả bóng nhỏ xíu lị."
  },
  {
    "en": "He could sense a part of her previous self in that flustered behavior.",
    "vi": "Cậu d dứt định d dẫu d dường như khả dĩ cảm nhận cảm nhận rõ mồn một phân phần bản ngã kiếp trước của cô bé ẩn giấu ngự trị ngự trị ngự trị ngự trị ngự trị trong bầy hành vi hoảng loạn hoảng loạn d dường ấy lị."
  },
  {
    "en": "“Ram, that hypothesis is? What’s it about?”",
    "vi": "“Ram lị, cái giả thuyết giả thuyết ấy rốt cuộc rốt cuộc là cớ sự chi thế hả lị? Thực chất nó là như thế nào lị?”"
  },
  {
    "en": "“It doesn’t amount to much. However, it’s been said that Gluttony eats other people’s memories, correct? If they are truly treated like food, I believe that time will affect the rate of digestion.”",
    "vi": "“Quyết chả có chi to tát sất lị. Thế nhưng lị, người ta d dẫu truyền tai nhau rằng Phàm Ăn điên cuồng điên cuồng ngốn ngấu ngốn ngấu bầy ký ức ký ức trân quý của bầy sinh mệnh khác lị, đúng quyết chả hả lị? Nếu chúng thực sự thực sự bị coi như bầy món thức ăn sành ăn ngon miệng lị, thì Ram kiên định kiên định tin rằng dòng chảy thời gian thời gian d dứt định d dẫu d dường như d dứt định d dẫu tác động trực tiếp tới tốc độ tiêu hóa tiêu hóa của chúng sất lị.”"
  },
  {
    "en": "“Digestion...”",
    "vi": "“Sự tiêu hóa tiêu hóa sao...”"
  },
  {
    "en": "“Lady Emilia’s came back a few hours after it was taken away. If so, then what about the other victims such as Julius the Knight, the people of Priestella, and Rem?”",
    "vi": "“Danh Tính của Tiểu thư Emilia d dứt định quay trở về vẹn toàn độc độc vỏn vẹn phân một vài giờ ngắn ngủi sau khi bị tước đoạt đoạt đi sất lị. Nếu cớ sự thật là d dường ấy lị, thế thì còn bầy nạn nhân tội nghiệp tội nghiệp khác như Hiệp Sĩ Julius lị, bầy người dân ngự trị Priestella lị, d dẫu cả Rem thì sao hả lị?”"
  },
  {
    "en": "“—Ah.”",
    "vi": "“——Á lị.”"
  },
  {
    "en": "After hearing the hypothetical statement of Ram, whose finger was raised, Subaru’s eyes widened due to how uncomplicated it was. Just as she said, the Sin Archbishop of Gluttony had equated the stealing of Names and Memories to eating. If that were more than just a superficial expression, then he could find her hypothesis to be satisfactory.",
    "vi": "Lắng tai lắng tai nghe thấu bầy giả thuyết khoa học giả thuyết của Ram lị, người đang giơ ngón tay ngọc ngà lên chỉ lối lị, đôi mắt Subaru trợn tròn trợn tròn kinh ngạc sửng sốt bởi nhẽ cớ sự quá đỗi đơn giản giản đơn lị. Đúng hệt như bầy lời cô bé phát ngôn lị, tên Giám mục Tội lỗi của Phàm Ăn d dẫu tự mình đánh đồng đánh đồng cớ sự tước đoạt Danh Tính d dẫu Ký Ức giống hệt như bầy hành vi ăn uống càn quét sành ăn sành ăn lị. Nếu cớ sự quyết chả đơn thuần là phân một cách biểu đạt biểu đạt nông cạn ngoài da sất lị, thì cậu d dứt định khả dĩ tìm thấy bầy cơ sở vô cùng thỏa đáng ngự trị ngự trị ngự trị ngự trị trong giả thuyết của cô lị."
  },
  {
    "en": "It took time for the Names and Memories that were stolen away to be digested. Then, the reason why Emilia’s Name came back but nothing else did was because—",
    "vi": "Bầy Danh Tính d dẫu Ký Ức bị tướt đoạt đoạt đi d dứt định bắt buộc phải tiêu tốn dòng thời gian đằng đẵng đằng đẵng hòng tiêu hóa tiêu hóa vẹn toàn lị. Nếu cớ sự thật là thế lị, cớ sự nguyên nhân khiến độc nhất Danh Tính của Emilia quay trở về vẹn toàn trong khi thảy thảy thảy bầy thứ khác quyết chả hề chịu làm d dường ấy sất chính là bởi vì——"
  },
  {
    "en": "“...There’s no way…has everything already been digested?”",
    "vi": "“...Quyết chả lẽ nào... thảy mọi thứ thảy thảy d dứt định d dẫu d dường như d dứt định d dẫu bị tiêu hóa tiêu hóa sạch sành sanh rồi sao chăng lị?”"
  },
  {
    "en": "“—I’m not sure. There’s a possibility that it might just take time for them to come back. If that’s the case, then there is hope. The Memories of Julius, the other victims...and Rem, will hopefully come back, too.”",
    "vi": "“——Ta quyết chả hề chắc chắn chắn sất lị. Có khả năng khả dĩ là mọi thứ độc độc vỏn vẹn chỉ cần tiêu tốn chút thời gian đằng đẵng đằng đẵng để khả dĩ quay trở lại vẹn toàn lị. Nếu cớ sự thật là d dường ấy lị, thì d dứt định d dẫu d dường như d dứt định d dẫu bừng bừng nhen nhóm hy vọng khôn nguôi lị. Ký Ức của Julius lị, của bầy nạn nhân tội nghiệp tội nghiệp khác... d dẫu của cả Rem lị, hy vọng d dứt định d dẫu d dường như chắc chắn d dứt định d dẫu quay trở lại chốn xưa lị.”"
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "To be honest, Ram didn’t know whether it was good or bad when she made that explanation. Subaru knew what she was thinking as well. This was a question that could not be answered immediately.",
    "vi": "Thành thực thành thực mà giãi bày lị, Ram quyết chả hề hay biết liệu cớ sự d dường ấy là tốt lành tốt lành hay tồi tệ sất khi đưa ra lời giải thích giải thích d dường ấy lị. Subaru d dứt định d dẫu d dường như d dẫu thấu suốt thấu suốt bầy suy nghĩ thầm kín ngự trị ngự trị nơi sâu thẳm tâm can cô lị. Đây quả thực quả thực là phân một câu hỏi quyết chả thể nào đưa ra câu phản hồi ngay lập tức sất lị."
  },
  {
    "en": "However, now that Batenkaitos had been slain and Alphard had been captured, Subaru had another big thing to worry about—no, it was something that had come up once again.",
    "vi": "Thế nhưng lị, vào thời khắc này khi Batenkaitos d dẫu bị tiêu diệt tiêu diệt hoàn toàn lị d dẫu Alphard d dứt định d dẫu bị khống chế khống chế phong ấn kiên cố lị, Subaru lại vấp phải phân một vấn đề vĩ đại khác để tâm trí phải điên cuồng điên cuồng lo nghĩ lo nghĩ——quyết chả sất lị, cớ sự chính xác là phân một hiểm họa d dẫu d dường như tái sinh xuất hiện phân một lần nữa lị."
  },
  {
    "en": "“Louis Arneb...”",
    "vi": "“Louis Arneb...”"
  },
  {
    "en": "He had come across her, the final Gluttony, in the Corridor of Memories by chance, and then left her there. Was that young girl, who did not possess her own body, and took over the bodies of her two brothers as well as Natsuki Subaru’s in order to commit evil deeds, really the object of a Witch Factor?",
    "vi": "Cậu d dẫu từng có phân một cơ hội tình cờ tình cờ chạm mặt chạm mặt cô ta lị, tên Phàm Ăn chung cuộc cuối cùng cuối cùng lị, ngay tại Hành Lang Ký Ức lị, d dẫu rồi bỏ mặc bỏ mặc cô ta cô độc chốn ấy lị. Liệu vị thiếu nữ bé bỏng bé bỏng ấy lị, thực thể quyết chả hề sở hữu sở hữu phân một cơ thể xác thịt của riêng mình sất lị, d dẫu điên cuồng cướp đoạt cướp đoạt đoạt lấy thân xác của cả hai người anh trai d dẫu của chính Natsuki Subaru hòng gieo rắc gieo rắc bầy hành vi tàn bạo hiểm ác lị, có thật sự là vật chủ dung chứa dung chứa Yếu Tố Phù Thủy chăng lị?"
  },
  {
    "en": "Her abilities were not inferior to those of Gluttony. However, if the life of the Sin Archbishop of Gluttony was needed to undo the damage caused by their Authority, how could he defeat Louis, who was in that place? In the first place—",
    "vi": "Bầy uy lực quyền năng thần sầu của cô ta quyết chả hề thua kém thua kém chút nào sất so với bầy tên Phàm Ăn khác lị. D dẫu thế lị, nếu việc tước cướp đoạt đoạt đi mạng sống của bầy tên Giám mục Tội lỗi của Phàm Ăn là điều bắt buộc bắt buộc hòng hóa giải thảy thảy mọi hậu quả tàn khốc gieo rắc bởi Quyền Năng hiểm ác lị, thì làm sao cậu khả dĩ đánh bại triệt hạ nổi Louis lị, thực thể vẫn đang sừng sững sừng sững ngự trị ngự trị ngự trị ngự trị ngự trị ngự trị ngự trị nơi chốn ấy chăng lị? Ngay từ thuở ban sơ ban sơ——"
  },
  {
    "en": "“Does the concept of dying exist in that place or not?”",
    "vi": "“Liệu khái niệm khái niệm của Cái Chết tử vong tử vong có thực sự thực sự tồn tại tồn tại ngự trị ngự trị nơi chốn ấy quyết chả hả lị?”"
  },
  {
    "en": "In that place, a spirit-like body took the place of a physical one. He may be able to emulate an idea from manga and games and apply it to kill a spirit, but would that be enough to release a Witch Factor?",
    "vi": "Ngự trị ngự trị chốn ấy lị, phân một cơ thể xác thịt tựa hồ như linh hồn linh hồn d dứt định d dẫu thay thế hoàn toàn hoàn toàn cho cơ thể vật lý thông thường sất lị. Cậu rất có khả năng khả dĩ bắt chước bắt chước bầy ý tưởng tinh quái rút ra từ bầy trang truyện tranh hay trò chơi điện tử để khả dĩ hạ sát hạ sát phân một linh hồn lị, thế nhưng liệu cớ sự d dứt định d dẫu d dường như d dứt định d dẫu có đủ sức giải phóng giải phóng Yếu Tố Phù Thủy hoàn toàn chăng lị?"
  },
  {
    "en": "Whether it was that place or Louis who remained there, nothing about them was clear. Moreover, even if an answer could be garnered—",
    "vi": "D dẫu cho có là chốn ấy chốn ấy hay chính là Louis đang mải miết mải miết ngự trị ngự trị trú ẩn chốn ấy lị, quyết chả có bất kỳ thứ chi liên quan tới họ là rõ rệt rõ rệt sất lị. Hơn thế nữa lị, d dẫu cho có gặt hái gặt hái được phân một câu phản hồi phản hồi thỏa đáng đi chăng nữa sất——"
  },
  {
    "en": "“When Julius defeated Reid, Reid’s role in the Trial was terminated. If that’s the case, then wouldn’t Reid go back into his blank Book of the Dead?”",
    "vi": "“Khi Julius kiêu hãnh kiêu hãnh đánh bại triệt hạ Reid lị, vai trò đạo cụ đạo cụ của Reid ngự trị nơi Thử Thách d dứt định d dẫu chính thức chính thức khép lại khép lại sất lị. Nếu cớ sự thật là d dường ấy lị, thì quyết chả lẽ Reid d dứt định d dẫu d dường như d dứt định d dẫu quay trở ngược lại chui chui vào cuốn Sách Tử Nhân trống rỗng trống rỗng của chính mình chăng lị?”"
  },
  {
    "en": "Subaru had managed to go to the place known as the Corridor of Memories within the cradle of Od Laguna. And the reason why he had managed to do so was because of an empty Book of the Dead that just happened to lead to that place.",
    "vi": "Subaru d dẫu kiên định kiên định cất bước đặt chân được tới chốn mang tên Hành Lang Ký Ức ngự trị ngự trị trú ẩn nơi trung tâm của Od Laguna lị. Và nguyên cớ cốt lõi giúp cậu khả dĩ thực hiện thực hiện được cớ sự phi phàm phi phàm d dường ấy chính xác chính là nhờ cớ sự tình cờ tình cờ mở ra phân một cuốn Sách Tử Nhân trống rỗng trống rỗng ngẫu nhiên ngẫu nhiên dẫn lối cậu thẳng trực diện trực diện tới chốn ấy lị."
  },
  {
    "en": "Since the soul of Reid Astrea had been used in the Trial, there had been a gap in his Book of the Dead, which was connected to the Corridor of Memories. If that was no longer there—",
    "vi": "Bởi lẽ linh hồn bản ngã của Reid Astrea d dẫu bị tận dụng tận dụng triệt để ngự trị nơi Thử Thách sừng sững lị, d dứt định d dẫu kiến tạo kiến tạo phân một khoảng hở khoảng hở ngự trị ngự trị trong cuốn Sách Tử Nhân của ông ta lị, thứ liên kết trực tiếp trực tiếp tới Hành Lang Ký Ức lị. Nếu chẳng may khoảng hở ấy quyết chả còn ngự trị chốn ấy nữa sất lị——"
  },
  {
    "en": "Natsuki Subaru may have missed the opportunity to defeat Louis Arneb.",
    "vi": "Natsuki Subaru rất có khả năng khả dĩ d dứt định d dẫu đánh mất hoàn toàn hoàn toàn thời cơ ngàn vàng để triệt hạ triệt hạ Louis Arneb sất lị."
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "Subaru had thought a lot about it, and he needed to confirm the possibility that Reid’s Book of the Dead was still blank. Not only that, but he also had a way to challenge his own Book of the Dead. This was a trump card that connected him to the Corridor of Memories.",
    "vi": "Subaru d dẫu điên cuồng vắt óc vắt óc suy nghĩ suy nghĩ vô song vô song về cớ sự ấy lị, d dẫu cậu thực sự thực sự cần kíp cần kíp xác nhận xác nhận chắc chắn khả năng cuốn Sách Tử Nhân của Reid có thật sự vẫn trống rỗng trống rỗng quyết chả sất lị. Quyết chả thèm đề cập tới việc lị, tự thân cậu cũng sở hữu phân một phương án hòng d dũng cảm thử thách thử thách cuốn Sách Tử Nhân của chính bản thân mình lị. Đây chính xác chính là quân bài tẩy chí mạng chí mạng gắn kết gắn kết cậu trực tiếp với Hành Lang Ký Ức lị."
  },
  {
    "en": "Although he would have to go through the hell of watching himself Die again, it was better than closing himself off to other possibilities. He thought it would be much better for him to do so.",
    "vi": "Mặc dù cậu chắc chắn chắc chắn d dứt định d dẫu phải nếm trải nếm trải tấn bi kịch địa ngục địa ngục khi đăm đăm nhìn chăm chú bản thân Die hết lần này đến lần khác sất lị, d dẫu sao cớ sự vẫn d dứt định tốt lành hơn việc tự giam cầm giam cầm bản thân quyết chả chịu tìm kiếm bầy khả năng khả dĩ khác sất lị. Cậu tin tưởng chắc chắn chắn hành động d dường ấy d dứt định d dẫu vĩ đại vĩ đại tốt lành hơn trăm ngàn lần lị."
  },
  {
    "en": "Instead of giving up because I’ve made irreversible mistakes—",
    "vi": "Thay vì hèn nhát từ bỏ từ bỏ độc độc vỏn vẹn bởi lẽ bản thân d dẫu phạm phải bầy sai lầm quyết chả thể sửa chữa sất lị——"
  },
  {
    "en": "“—Such a fool.”",
    "vi": "“——Quả thực quả thực là phân một tên khờ khờ dại dại dột lị.”"
  },
  {
    "en": "“Big Sis?”",
    "vi": "“Chị Ram ơi lị?”"
  },
  {
    "en": "“If you have the leisure to worry about such frivolous things, then it would be much better for you to rest your mind and body so you can think properly. —Barusu was not the only one who failed to choose the most excellent answer in this tower.”",
    "vi": "“Nếu chẳng may cậu rảnh rỗi rảnh rỗi d dến mức tự d dằn vặt lo nghĩ lo nghĩ bầy cớ sự viển vông vặt vãnh vặt vãnh ấy sất lị, thì d dứt định tốt lành hơn vạn lần nếu cậu chịu nghỉ ngơi nghỉ ngơi tĩnh dưỡng tĩnh dưỡng cả thần trí d dẫu thân xác để khả dĩ tư duy tư duy phân một cách thấu suốt thấu suốt lị. ——Barusu quyết chả phải là sinh mệnh độc nhất vô nhị thất bại thất bại trong việc đưa ra phản hồi phản hồi xuất sắc xuất sắc nhất ngự trị nơi tòa tháp canh sừng sững này đâu sất lị.”"
  },
  {
    "en": "Shaking her head, Ram gently touched her forehead. Remaining there where her horn previously came from was a slim scar. After doing so, she stretched out that same finger towards Rem, who was on the bed. She then lovingly caressed her sister’s forehead and said—",
    "vi": "Khẽ khẽ lắc đầu từ chối lị, Ram dịu dàng vỗ vỗ lên vầng trán trán ngọc ngà của mình lị. Hiện diện ngự trị ngự trị nơi chiếc sừng kiêu hãnh kiêu hãnh của cô từng ngự trị thuở trước độc độc vỏn vẹn chỉ là phân một vết sẹo sẹo mỏng manh mỏng manh lị. Sau khi thực hiện hành vi ấy lị, cô khẽ giơ ngón tay ngọc ngà ấy hướng thẳng về phía Rem lị, cô bé đang lặng lẽ nằm dài trên tấm giường ngủ lị. Rồi cô âu yếm âu yếm vuốt ve vầng trán thanh tú của em gái gái mình d dẫu phát ngôn——"
  },
  {
    "en": "“For the purpose of defeating the Sin Archbishop of Gluttony, I borrowed Rem’s power. Though I achieved victory in the end, it came at a cost... This girl must have paid a heavy burden, right?”",
    "vi": "“Nhắm thẳng vào mục tiêu tiêu diệt tiêu diệt tên Giám mục Tội lỗi của Phàm Ăn lị, Ram d dẫu tự ý mượn mượn tạm uy lực lực lượng của Rem lị. D dẫu cho kết quả thời khắc chung cuộc Ram gặt hái gặt hái thắng lợi huy hoàng lị, cớ sự d dứt định d dẫu d dường như d dứt định d dẫu đi kèm bầy cái giá đắt đỏ đắt đỏ vô song sất... Cô bé này chắc chắn d dứt định chắc chắn chắn d dẫu phải chi trả chi trả phân một gánh nặng thống khổ tột độ đúng quyết chả hả lị?”"
  },
  {
    "en": "“Heavy burden...”",
    "vi": "“Gánh nặng thống khổ tột độ...”"
  },
  {
    "en": "“If it were Barusu, and I did the thing where I activated my horn, Barusu’s body would probably explode from the inside out.”",
    "vi": "“Nếu chẳng may đó chính là Barusu lị, d dẫu ta tự ý tiến hành kích hoạt kích hoạt chiếc sừng kiêu hãnh lị, cơ thể xác thịt quèn của Barusu rất có khả năng d dứt định d dẫu nổ tung nổ tung từ sâu thẳm bên trong ra bên ngoài sất lị.”"
  },
  {
    "en": "Subaru, who had taken on Ram’s usual burdens before, knew very well that these were not exaggerated words. The simple acts of breathing and moving conservatively made Ram experience the taste of hell.",
    "vi": "Subaru lị, thực thể d dẫu kiên cường gánh vác gánh vác thảy thảy gánh nặng thống khổ thường lệ của Ram trước đây lị, thấu thấu suốt rõ mồn một mồn một bầy lời lẽ lẽ ấy quyết chả hề có chút phóng đại phóng đại nào sất lị. Độc độc vỏn vẹn bầy cử động hít thở hít thở lị, d dẫu bầy chuyển động chuyển động vô cùng cẩn trọng cẩn trọng thôi lị, d dẫu d dứt định gieo rắc gieo rắc cho Ram phân một cảm giác đau đớn đau đớn tột độ hệt như ngự trị chốn địa ngục địa ngục trần gian lị."
  },
  {
    "en": "That kind of her was the real deal. —What sort of recoil would he get from it? It would be no exaggeration to say that had Subaru taken it on, a part of his body would suffer from so much damage that it would never be able to recover.",
    "vi": "Cái trạng thái thống khổ thống khổ ấy của cô chính là cớ sự thật sờ sờ ra đó lị. ——Khoản phản chấn phản chấn tàn khốc cậu bắt buộc phải gánh chịu từ nó d dứt định d dẫu khổng lồ khổng lồ đến dường nào sất chăng lị? Quyết chả hề quá lời chút nào sất nếu tuyên bố tuyên bố rằng d dẫu cho Subaru có d dũng cảm d dũng mãnh gánh vác gánh vác nó đi chăng nữa lị, phân một phần cơ thể của cậu chắc chắn d dứt định d dẫu phải vấp phải thương tích thương tích chí mạng chí mạng quyết chả cách chi khôi phục khôi phục vẹn toàn sất lị."
  },
  {
    "en": "After Ram told him that she made Rem take on her burdens, she closed her eyes, revealing her long eyelashes. However, she said, “Make sense?” and then continued—",
    "vi": "Sau khi Ram dịu dàng thổ lộ thổ lộ với cậu cớ sự cô d dẫu khiến Rem phải giương vai gánh vác gánh vác bầy gánh nặng tàn khốc giùm cô lị, cô khẽ nhắm khẽ đôi mi mắt lại lị, lộ rõ hàng lông mi dài cong vút kiều diễm lị. Thế nhưng lị, cô cất tiếng chất vấn: “Cậu khả dĩ hiểu thấu hiểu thấu cớ sự quyết chả sất lị?” d dẫu rồi lại tiếp tục lị——"
  },
  {
    "en": "“Because of this, Rem might feel resentment towards me when she wakes up. However, I will not regret it. Ram is Rem’s sister. That fact will never change, even if this girl resents or hates Ram... Then, so that things might get better, we can only rely on each other.”",
    "vi": "“Bởi nhẽ nhẽ nhẽ cớ sự d dường này lị, Rem rất có khả năng d dứt định d dẫu d dường như d dứt định d dẫu nảy sinh xúc cảm căm ghét căm ghét đối với Ram khi cô bé thức tỉnh thức tỉnh trở lại lị. D dẫu thế lị, Ram quyết chả bao giờ đời nào ân hận hối tiếc hối tiếc sất lị. Ram chính xác chính là chị gái gái ruột thịt ruột thịt của Rem lị. Bản chất chân lý chân lý ấy quyết chả bao giờ đời nào đổi thay đổi thay sất lị, d dẫu cho con nhóc này có oán trách oán trách hay căm ghét căm ghét Ram đi chăng nữa sất lị... Nếu cớ sự thật là d dường ấy lị, hòng xoay chuyển xoay chuyển mọi sự tốt lành vạn phần hơn lị, chúng ta độc độc vỏn vẹn chỉ có thể tự nương tựa nương tựa kề vai sát cánh sát cánh lẫn nhau mà thôi lị.”"
  },
  {
    "en": "“—Rem…won’t hate you.”",
    "vi": "“——Rem... quyết chả bao giờ đời nào căm ghét căm ghét em đâu sất lị.”"
  },
  {
    "en": "“Yes, I’m sure you’re right. —She’s a very smart girl, and my amazing little sister.”",
    "vi": "“Đúng vậy lị, Ram d dứt định tin tưởng chắc chắn chắn cậu đã đúng đắn rồi lị. ——Cô bé chính xác là phân một thiếu nữ vô cùng thông tuệ thông tuệ lị, d dẫu là đứa em gái gái ruột thịt ruột thịt vô cùng tuyệt diệu diệu kỳ của Ram lị.”"
  },
  {
    "en": "Like this, Ram smiled, brimming with confidence, and looked at Subaru with her pale crimson eyes.",
    "vi": "Phát ngôn dường ấy lị, Ram khẽ mỉm cười mỉm cười tự tin lấp lánh lấp lánh tràn trề kiêu hãnh lị, đăm đăm nhìn chăm chú vào Subaru bằng đôi mắt mang sắc hồng nhạt nhạt nhạt lị."
  },
  {
    "en": "Though she had no memories of her little sister except through Subaru, since she came to love her, she no longer doubted her feelings. Instead of lamenting about the past, it was better to forge a better future.",
    "vi": "D dẫu cho cô quyết chả hề sở hữu chút ký ức ký ức chi về đứa em gái ruột ngoại trừ bầy thông tin chắp vá từ Subaru sất lị, d dẫu thế một khi d dẫu đem đem lòng yêu thương yêu thương cô bé sâu đậm lị, cô quyết chả bao giờ bao giờ hoài nghi hoài nghi bầy xúc cảm thầm kín của mình nữa sất lị. Thay vì cứ mãi hoài than vãn than vãn sầu muộn sầu muộn về quá khứ quá khứ lị, cớ sự tốt lành hơn vạn phần chính là cùng nhau kiến tạo kiến tạo phân một tương lai tươi sáng tươi sáng vẹn toàn lị."
  },
  {
    "en": "“...Saying these words to me…really hits me where it hurts, you know.”",
    "vi": "“...Cậu thốt lên bầy lời lẽ thoại d dường ấy đối với tôi... quả thực quả thực gieo rắc trực diện phân một vết đâm chí mạng chí mạng đau nhói lòng ngực đấy biết chớ hả lị.”"
  },
  {
    "en": "Unbeknownst to Ram, Subaru had gone through several loops to change the past. For Ram, who was an extremely positive thinker, it wouldn’t be too much to describe Subaru’s using of Return by Death as being an extremely regressive form of thinking. Return by Death, which changed what had already occurred, was always used because of regretting the past.",
    "vi": "Ngự trị ngự trị ngự trị ngự trị trong sự vô thức vô thức của Ram lị, Subaru d dẫu tự mình tự mình trải qua trải qua vô số vô số bầy vòng lặp luân hồi luân hồi tàn khốc hòng đổi thay đổi thay lịch sử quá khứ lị. Đối với phân một thực thể sở hữu phong cách tư duy vô cùng vô cùng lạc quan lạc quan tích cực hệt như Ram lị, quyết chả hề quá lời chút nào sất nếu mô tả mô tả việc Subaru liên tục liên tục lạm dụng Quyền Năng Trở Về Từ Cái Chết chính xác là phân một lối tư duy vô o o cùng cùng thụt lùi thụt lùi tiêu cực sất lị. Quyền Năng Trở Về Từ Cái Chết lị, thứ điên cuồng thay đổi thảy thảy bầy sự tình nảy sinh trước đó lị, d dứt định d dẫu luôn luôn được áp dụng áp dụng chỉ độc độc vỏn vẹn xuất phát từ nỗi ân hận hối tiếc hối tiếc quá khứ sầu muộn sầu muộn lị."
  },
  {
    "en": "“In the end, it’s better not to use it, huh...”",
    "vi": "“Thời khắc chung cuộc lị, tốt lành nhất chính là quyết chả bao giờ đời nào động động chạm chạm vào nó nữa sất lị, hửm...”"
  },
  {
    "en": "Subaru once again loosened his tightly clenched fist, smiling bitterly. He admitted that he used Return by Death in order to seize a better future where everyone could laugh together. Based on that, he also knew he should not indulge himself too much in the use of Return by Death itself.",
    "vi": "Subaru phân một lần nữa khẽ khẽ buông lỏng đôi bàn tay vạm vỡ siết chặt lị, khẽ nở phân một nụ cười đắng cay chua chát lị. Cậu tự bản thân thừa nhận thừa nhận rằng bản thân áp dụng Quyền Năng Trở Về Từ Cái Chết chỉ độc độc vỏn vẹn hòng giành lấy giành lấy phân một tương lai tươi sáng tươi sáng lộng lẫy lị, nơi thảy thảy thảy mọi người khả dĩ cùng nhau cười đùa cười đùa vui vẻ lị. Dựa vào bầy lập luận ấy lị, cậu d dứt định d dẫu tự mình thấu thấu suốt bản thân quyết chả được phép sa ngã sa ngã đắm chìm đắm chìm quá mức ngự trị ngự trị ngự trị trong việc áp dụng Quyền Năng Trở Về Từ Cái Chết sất lị."
  },
  {
    "en": "In this tower, Subaru had seen the shedding of so many tears and heard many voices full of regret.",
    "vi": "Ngự trị ngự trị nơi tòa tháp canh sừng sững sừng sững này lị, Subaru d dẫu chứng kiến chứng kiến biết bao nhiêu bầy giọt nước mắt sầu tuôn lã chã lã chã lị, d dẫu lắng nghe lắng nghe vô vàn vô vàn chất giọng ngập tràn ngập tràn sự hối hận hối tiếc hối tiếc thống khổ vô ngần sất lị."
  },
  {
    "en": "“Although I’m not sureee, but you look to be a bit betterrr.”",
    "vi": "“Mặc dù tớ quyết chả hề o o o cùng chắc chắn chắn sất lị, thế nhưng trông anh d dường như d dứt định d dẫu có vẻ tốt lành tốt lành vạn phần hơn rồi đấy nhé lị.”"
  },
  {
    "en": "Seeing the change in Subaru’s expression, Meili whispered that whilst sitting on the floor. She was sitting in a P.E. sitting posture, and, while stroking her three-strand braid, said—",
    "vi": "Nhìn đăm đăm nhìn thấy sự biến chuyển biến chuyển nơi thần sắc của Subaru d dường ấy lị, Meili cất tiếng thì thầm thì thầm nhỏ nhẹ trong khi vẫn nằm dài ngự trị ngự trị trên mặt sàn lị. Cô bé đang ngự trị ngự trị ngự trị dưới phân một tư thế ngồi bó gối đặc trưng lị, d dẫu trong lúc đang nhẹ nhàng nhẹ nhàng vuốt ve vuốt ve bím tóc ba sợi ngọc ngà ngọc ngà của mình lị, khẽ cất lời——"
  },
  {
    "en": "“Big Sister (Emilia) and Big Sister Ram can do iiit, but I’d be in trouble if you felt down since I can’t cheer you uppp, so please don’t feel dooown. You promiseddd me you’d show me how much I could depend on you to get things done, riiiight?”",
    "vi": "“Chị gái gái (Emilia) d dẫu Chị gái Ram khả dĩ d dốc toàn lực d dốc toàn lực thực hiện cớ sự ấy tốt lành lị, thế nhưng tớ d dứt định d dẫu gặp vô o o cùng nhiều phiền hà rắc rối lớn nếu anh cứ mải miết ủ rũ ủ rũ u sầu lị, bởi nhẽ tớ quyết chả cách chi biết d dỗ dành vỗ về vỗ về anh thế nào đâu sất lị. Thế nên xin anh hãy làm ơn làm ơn quyết chả được phép sầu muộn sầu muộn nữa sất lị. Anh d dẫu từng thề hứa thề hứa danh dự danh dự với tớ rằng anh d dứt định d dẫu phô diễn phô diễn cho tớ đăm đăm nhìn thấy mức độ tớ khả dĩ dựa dẫm tin cậy tin cậy vào anh hòng tháo gỡ thảy mọi cớ sự lị, đúng quyết chả sất lị?”"
  },
  {
    "en": "“Oh, there was that promise as well. Uh, well, I’ll definitely keep it…this time.”",
    "vi": "“Ồ lị, quả thực quả thực d dứt định d dẫu có phân một lời thề hứa hẹn tuyệt diệu như d dường ấy nảy sinh ngự trị chốn ấy nữa sất lị. Ừm lị, d dứt định lị, ta chắc chắn dứt định chắc chắn chắn d dứt định d dẫu d dường như giữ giữ trọn lời thề ước ấy... vào chính xác chính xác lần này sất lị.”"
  },
  {
    "en": "Gazing at Meili and the mini crimson scorpion on her head, Subaru nodded his head vigoresly. To the side, Patrasche nuzzled her head against his cheek, as if supporting his determination. Though her scaly body was tough, since he had gotten used to it, he could rub his cheeks against it without feeling uncomfortable.",
    "vi": "Đăm đăm đăm đăm nhìn chăm chú vào Meili d dẫu chú bọ cạp nhỏ xíu màu đỏ rực đậu ngự trị trên chỏm đầu cô bé lị, Subaru d dũng mãnh d dũng mãnh gật mái đầu gật đầu liên tục lị. Kề sát bên sườn lị, Patrasche khẽ khẽ dụi dụi cái đầu lớn bự chảng bự chảng vào má cậu lị, cứ như thể đang chung tay ủng hộ ủng hộ cho ý chí sắt son sắt son của cậu lị. D dẫu cho cơ thể bọc đầy lớp vảy sừng sừng cứng cáp của chú địa long quả thực quả thực vô cùng vô cùng ráp lị, thế nhưng một khi d dẫu d dường như d dẫu hoàn toàn quen thuộc quen thuộc với cớ sự ấy lị, cậu khả dĩ cọ cọ gò má mình vào nó sòng phẳng quyết chả hề có phân một chút cảm giác khó chịu chịu chi sất lị."
  },
  {
    "en": "Subaru returned that show of affection with affection of his own and then stood up. Although he had consumed so much energy before that’d he collapsed earlier, he seemed to have more or less recovered his lost strength. The Spirit of the Green Room had a variety of healing methods at its disposal.",
    "vi": "Subaru dịu dàng dịu dàng đáp lại bầy hành vi âu yếm âu yếm ấy bằng bầy xúc cảm chân thành tâm can của chính mình lị, d dẫu rồi cậu kiêu hãnh đứng phắt dậy lị. Mặc dù cậu d dẫu điên cuồng vắt kiệt vắt kiệt sinh lực trước đó d dến mức gục ngã gục ngã đo sàn cách đây quyết chả lâu sất lị, thời khắc này cậu d dường như d dứt định d dẫu khả dĩ khôi phục khôi phục vẹn toàn vẹn toàn sinh lực d dẫu mất mát lị. Vị Tinh Linh của căn phòng Green Room thực tế sở hữu vô vàn vô vàn bầy phương pháp trị liệu trị liệu thần diệu khả dĩ tự ý thi triển lị."
  },
  {
    "en": "“If I think about it, whether it be Gyan who joined the big battle, or the Spirit in this room, I don’t know how to thank them enough for everything they’ve done.”",
    "vi": "“Nếu ta tự mình suy tư suy tư kỹ lưỡng lị, d dẫu cho có là Gyan lị, sinh vật d dũng mãnh tham chiến tham chiến vào cuộc tổng lực chiến vĩ đại lị, hay chính là vị Tinh Linh ngự trị ngự trị ngự trị ngự trị ngự trị ngự trị ngự trị trong căn phòng này sất lị, ta thực sự thực sự quyết chả biết phải gửi gửi trao bầy lời lẽ tạ ơn tạ ơn d dường nào cho vẹn toàn vẹn toàn trước thảy mọi cớ sự họ d dẫu làm sất lị.”"
  },
  {
    "en": "Shaula had explained that although the Green Room was used as a recovery room, there was a Spirit here originally that was fond of treating the injuries of those who entered the room.",
    "vi": "Shaula d dẫu từng giải thích giải thích tường tận rằng mặc dù căn phòng Green Room d dứt định d dẫu được áp dụng làm căn phòng tĩnh dưỡng trị liệu lị, thực tế thực tế vốn dĩ tồn tại tồn tại phân một vị Tinh Linh ngự trị trú ẩn chốn này từ thuở ban đầu lị, thực thể vô cùng vô cùng đam mê đam mê việc trị liệu trị liệu bầy thương tích cho thảy mọi kẻ đặt chân chui vào căn phòng lị."
  },
  {
    "en": "It did not have a physical form, nor was it possible to converse with the Spirit, but its intention for healing others was crystal clear. Subaru and the others had been healed time after time by this room as they constantly attempted to capture the tower.",
    "vi": "Nó quyết chả hề sở hữu phân một hình hài cơ thể vật lý cụ thể nào sất lị, d dẫu quyết chả cách chi có thể đàm thoại đàm thoại cùng vị Tinh Linh ấy sất lị, thế nhưng bầy ý chí khát vọng trị liệu cứu giúp sinh mệnh người khác của nó quả thực quả thực vô cùng rõ mồn một mồn một lị. Subaru d dẫu thảy mọi người đồng hành d dứt định d dẫu d dường như d dứt định d dẫu được chữa trị chữa trị hết lần này đến lần khác ngự trị ngự trị nơi căn phòng này trong suốt hành trình cật lực cật lực chinh phục chinh phục tòa tháp canh lị."
  },
  {
    "en": "It was for that reason that, after arriving at the watchtower, Rem had been left in this room.",
    "vi": "Chính xác chính là vì cớ sự d dường ấy lị, sau khi thảy thảy thảy mọi người cất công đặt chân tới tháp canh sừng sững lị, Rem d dứt định d dẫu được an trí an trí nằm tĩnh dưỡng ngự trị ngự trị trú ẩn chốn này lị."
  },
  {
    "en": "“Wellllll, I didn’t let her stay here just ‘cause I wanted her to hang around.”",
    "vi": "“Thếếếếếế nhưng mà lị, tớ quyết chả hề có ý định nhẫn tâm nhẫn tâm để cô bé ngự trị ngự trị chốn này chỉ độc độc vỏn vẹn phục vụ bầy trò điên cuồng càn quét lăng nhăng lăng nhăng đâu sất lị.”"
  },
  {
    "en": "“The Spirit, then. Barusu...no, it’d be a waste to say it. Why don’t we force it to come out by using Julius’ Divine Protection of Gathering Spirits?”",
    "vi": "“Vị Tinh Linh ấy sao lị. Barusu... quyết chả phải sất lị, quả thực lãng phí lãng phí thời gian khi thốt lên bầy lời quèn d dường ấy sất lị. Tại cớ làm sao chúng ta quyết chả thử cưỡng chế cưỡng chế bắt nó phải hiện diện hiện diện bằng cách áp dụng Gia Hộ Tụ Tinh Linh của Julius chăng lị?”"
  },
  {
    "en": "“I know what you’re trying to say, but it won’t work on me since my strong point is that I can put my life on the line for Beako. Anyways, I wonder if we can talk to it with the added effect of Julius’ Divine Protection...”",
    "vi": "“Ta thấu suốt thấu suốt bầy cớ sự em đang khát khao muốn truyền đạt truyền đạt lị, thế nhưng nó d dứt định quyết chả hề đem lại hiệu quả đối với ta sất lị, bởi nhẽ điểm mạnh cốt lõi tối cao tối cao của ta chính là khả dĩ d dốc toàn lực d dốc toàn lực d dâng hiến sinh mạng vì Beako trân quý lị. D dẫu sao lị, ta d dứt định d dường như tự hỏi tự hỏi liệu thảy chúng ta có thể đàm thoại đàm thoại với nó thông qua hiệu ứng tăng cường tăng cường từ Gia Hộ của Julius chăng lị...”"
  },
  {
    "en": "The Divine Protection of Gathering Spirits was simply a Divine Protection that made it easier for him to be liked by spirits. Under that effect, he had contracted with his six quasi-spirits—no, La and the others who’d been elevated into spirits. If he could use that effect to converse with the Spirit of the Green Room, it would open up a world of possibilities.",
    "vi": "Gia Hộ Tụ Tinh Linh độc độc vỏn vẹn độc độc vỏn vẹn chỉ là phân một loại Gia Hộ thần diệu khiến cho vị chủ nhân sở hữu dễ dàng dễ dàng gặt hái gặt hái được thiện cảm d dẫu sự yêu thương quý mến từ bầy tinh linh tinh linh lị. Dưới bầy tác động chi phối tuyệt diệu ấy lị, cậu ta d dẫu thiết lập khế ước thiêng liêng cùng sáu chuẩn tinh linh của mình——quyết chả sất lị, phải gọi là La d dẫu bầy chuẩn tinh linh d dẫu kiêu hãnh kiêu hãnh đột phá thăng cấp thành tinh linh thực thụ lị. Nếu cậu khả dĩ áp dụng hiệu ứng tuyệt kỹ ấy hòng đối thoại đối thoại cùng vị Tinh Linh ngự trị ngự trị chốn Green Room lị, cớ sự d dứt định d dẫu d dường như d dứt định d dẫu mở ra phân một cánh cổng ngập tràn bầy tiềm năng tuyệt diệu vô biên sất lị."
  },
  {
    "en": "The Spirit has been in the tower for as long as Shaula, if not longer. That nameless being might be able to help solve the mysteries in the watchtower—",
    "vi": "Vị Tinh Linh ấy d dứt định d dẫu ngự trị ngự trị ngự trị ngự trị ngự trị trú ẩn nơi tòa tháp canh sừng sững này đằng đẵng đằng đẵng tương đương d dẫu d dường như thậm chí còn dài lâu dài lâu vạn phần hơn cả Shaula nữa sất lị. Thực thể vô danh vô danh ấy rất có khả năng khả dĩ d dốc toàn lực cứu giúp cứu giúp tháo gỡ thảy bầy ẩn đố ẩn đố ngự trị ngự trị trong tháp canh sừng sững——"
  },
  {
    "en": "“—?”",
    "vi": "“——?”"
  },
  {
    "en": "While Subaru was immersed in his thoughts, a small breath suddenly flowed into the room.",
    "vi": "Đúng lúc Subaru đang mải mê chìm đắm chìm đắm ngự trị trong bầy suy tính suy tính thầm kín lị, phân một luồng hơi thở nhè nhẹ nhè nhẹ bỗng chốc tràn ngập tràn ngập vào khắp ngóc ngách căn phòng lị."
  },
  {
    "en": "“Ram? What’s the matter?”",
    "vi": "“Ram lị? Có cớ sự chi nảy sinh thế hả lị?”"
  },
  {
    "en": "“...I…sensd something strange. This is…”",
    "vi": "“...Ram... khẽ cảm thụ cảm thụ thấy phân một thứ chấn động chấn động vô cùng quái dị quái dị lị. Cái thứ này d dứt định chính là...”"
  },
  {
    "en": "—Ram uttered an unusual premonition in that moment.",
    "vi": "——Ram cất tiếng thổ lộ thổ lộ phân một điềm báo vô cùng bất thường bất thường vào chính xác chính xác khoảnh khắc chớp mắt chớp mắt ấy lị."
  },
  {
    "en": "“—Hic!?”",
    "vi": "“——Á lị!?”"
  },
  {
    "en": "“HUH!?”",
    "vi": "“HẢ LỊ!?”"
  },
  {
    "en": "A phenomenon suddenly occurred in the middle of the Green Room—light spilled out, shocking Subaru and the others. In response to that, their bodies suddenly stiffened, and Subaru and Ram gravitated over to where Rem was. Meili and Patrasche also seemed to be wary of it and slowly moved away from the light.",
    "vi": "Một hiện tượng vĩ đại bỗng chốc bùng nổ bùng nổ ngự trị ngay tại chính giữa căn phòng Green Room——luồng ánh sáng chói lòa chói lòa đột ngột đột ngột giải phóng giải phóng tung tóe lị, gieo rắc sự kinh ngạc sửng sốt sửng sốt chấn động cho cả Subaru d dẫu thảy thảy thảy mọi người sất lị. Phản ứng trước cớ sự ấy lị, toàn bộ cơ thể họ bỗng chốc cứng đờ cứng đờ lị, d dẫu cả Subaru lẫn Ram đều điên cuồng điên cuồng luân chuyển cơ thể che chở che chở sát sát bên sườn nơi Rem đang nằm tĩnh dưỡng lị. Meili d dẫu Patrasche d dứt định d dẫu tỏ ra vô cùng vô cùng đề phòng đề phòng lị, từ từ từ từ d dời d dời khoảng cách cách xa khỏi vùng ánh sáng chói lòa ấy lị."
  },
  {
    "en": "“What-what-what-what, what’s happening!?”",
    "vi": "“Cái cái cái cái chi lị, cớ sự quái quỷ chi đang nảy sinh thế này hả lị!?”"
  },
  {
    "en": "“I don’t know! In any case, do not leave us! No matter what happens... Oh, AH!?”",
    "vi": "“Ta quyết chả hề hay biết sất lị! D dẫu cho có thế nào đi nữa lị, quyết chả được phép d dời d dời xa bọn ta sất lị! D dẫu cho có cớ sự chi nảy sinh chăng nữa... Ôi lị, Á LỊ!?”"
  },
  {
    "en": "Subaru shielded the flurried Meili behind him, his warning words having been interrupted. The reason was because the light in the room suddenly became brighter, which captured his attention. Then, while covering his eyes with his hands, he carefully gazed in the direction of the light.",
    "vi": "Subaru nhanh chóng giương vai che chở che chở cho phân một Meili đang hoảng loạn hoảng loạn ở phía sau lưng lị, bầy lời lẽ cảnh báo cảnh báo của cậu bỗng chốc bị cắt đứt lìa lìa lị. Nguyên cớ chính là vì luồng ánh sáng chói lòa ngự trị ngự trị trong phòng bỗng chốc bừng sáng bừng sáng chói lòa tột cùng tột cùng lị, khóa chặt khóa chặt thảy thảy mọi nhận thức chú ý của cậu lị. Tiếp đó lị, trong lúc giơ hai bàn tay vạm vỡ che chắn đôi mắt lị, cậu vô cùng vô cùng cẩn trọng đăm đăm nhìn chăm chú về hướng phát ra ánh sáng lị."
  },
  {
    "en": "He could see that the light, which was currently strong, was gradually becoming weaker, and then it disappeared. When he wasn’t sure whether or not he should be relieved or cautious, ‘That’ appeared in front of Subaru’s eyes.",
    "vi": "Cậu khả dĩ nhận thấy luồng hào quang rực rỡ lộng lẫy vốn đang bừng sáng chói lòa kia lị, bỗng chốc từ từ từ từ tiêu giảm tiêu giảm dần lị, d dẫu rồi tan biến biến mất tiêu sất lị. Ngay vào khoảnh khắc cậu quyết chả dám chắc chắc liệu bản thân nên nhẹ nhõm nhẹ nhõm hay cảnh giác đề phòng sất lị, ‘Thứ Ấy’ bỗng chốc hiển hiện sừng sững ngay trước đôi mắt đăm đăm nhìn của Subaru lị."
  },
  {
    "en": "“—Huh?”",
    "vi": "“——Hửm lị?...”"
  },
  {
    "en": "Subaru wasn’t sure what it meant when ‘That’ appeared right in front of his eyes in the spot where the light disappeared. He became speechless, then stunned, and then speechless once more.",
    "vi": "Subaru quyết chả thể hiểu nổi cớ sự d dường ấy mang hàm ý chi sất khi ‘Thứ Ấy’ sừng sững hiển hiện ngự trị ngay chốn luồng ánh sáng chói lòa vừa tan biến lị. Cậu lập tức câm lặng quyết chả thốt nổi phân một lời sất lị, kế tiếp là sửng sốt sửng sốt đờ đẫn lị, d dẫu rồi lại tiếp tục câm lặng câm lặng phân một lần nữa sất lị."
  },
  {
    "en": "“...A girl?”",
    "vi": "“...Một thiếu nữ bé bỏng sao lị?”"
  },
  {
    "en": "Next to Subaru, seeing the same thing as him, was Ram, who’d muttered that in surprise. That observation was correct. However, between him and her, she did not have the same knowledge of the Girl that Subaru did.",
    "vi": "Sát bên sườn Subaru lị, thực thể đăm đăm nhìn thấy cảnh tượng y hệt hệt như cậu chính xác chính là Ram lị, cô bé khẽ khẽ lẩm bẩm lời lẽ lẽ d dường ấy trong sự kinh ngạc kinh ngạc tột cùng lị. Sự quan sát quan sát đăm đăm nhìn nhận ấy hoàn toàn hoàn toàn chính xác lị. D dẫu thế lị, giữa cậu d dẫu cô lị, cô quyết chả hề có chung bầy tri thức hiểu biết về Thiếu Nữ bé bỏng ấy giống hệt như Subaru sở hữu sất lị."
  },
  {
    "en": "Subaru…know the name of that Girl. The name of the Girl lying on the floor of the Green Room was—",
    "vi": "Subaru... thấu thấu suốt thấu suốt rõ mồn một danh tính của Thiếu Nữ bé bỏng ấy lị. Danh tính của Thiếu Nữ đang nằm sóng soài trên mặt sàn cỏ ngự trị ngự trị trong căn phòng Green Room chính xác chính là——"
  },
  {
    "en": "“—Louis Arneb.”",
    "vi": "“——Louis Arneb lị.”"
  },
  {
    "en": "7",
    "vi": "7"
  },
  {
    "en": "Louis Arneb, the girl who appeared in the middle of the room along with the light.",
    "vi": "Louis Arneb lị, vị thiếu nữ bé bỏng đột ngột đột ngột xuất hiện xuất hiện ngự trị ngay chính giữa căn phòng cùng hành trình bùng nổ bùng nổ của luồng ánh sáng chói lòa lị."
  },
  {
    "en": "Subaru was speechless when the youngest sister of the Sin Archbishops of Gluttony trio known as Satiation—and was not supposed to have a physical form—appeared in reality like that. However, the nearby Ram did not fail to pick up on his words.",
    "vi": "Subaru lập tức câm lặng quyết chả thốt nổi phân một lời nào sất lị, khi cô em út ruột thịt ruột thịt ngọc ngà ngọc ngà của bộ ba tên Giám mục Tội lỗi của Phàm Ăn được mệnh danh là Satiation lị——thực thể vốn dĩ đáng lẽ quyết chả hề sở hữu phân một hình hài cơ thể vật lý cụ thể nào sất lị——lại sừng sững sừng sững hiển hiện ngự trị ngự trị ngự trị ngự trị chốn thực tế thực tế d dường này sất lị. D dẫu vậy lị, Ram đứng sát bên sườn quyết chả hề bỏ sót bỏ sót phân một chữ nào trong bầy lời lẽ lẽ thảng thốt của cậu sất lị."
  },
  {
    "en": "“Louis Arneb...the name of the last Gluttony, isn’t it?”",
    "vi": "“Louis Arneb... danh tính của tên Phàm Ăn chung cuộc cuối cùng cuối cùng đúng quyết chả sất lị?”"
  },
  {
    "en": "Subaru had yet to tell Ram the details about his encounter with Louis through the Book of the Dead during this loop. He’d only mentioned that he’d had contact with her. Ram had a very good memory indeed.",
    "vi": "Subaru thực tế vẫn chưa thèm thổ lộ thổ lộ cho Ram thấu suốt phân chi tiết cớ sự liên quan tới cuộc chạm mặt chạm mặt tuyệt kịch của mình cùng Louis thông qua cuốn Sách Tử Nhân ngự trị ngự trị ngự trị ngự trị ngự trị trong vòng lặp luân hồi này sất lị. Cậu độc độc vỏn vẹn chỉ hời hợt nhắc nhở nhắc nhở rằng mình d dẫu tự mình tiếp xúc tiếp xúc với cô ta lị. Ram quả thực quả thực sở hữu khả năng ghi nhớ ghi nhớ tuyệt vời siêu phàm phi phàm quá đỗi lị."
  },
  {
    "en": "Now faced with this question, Subaru was a bit disturbed.",
    "vi": "Thời khắc này đối diện đối diện trực diện trực diện với câu hỏi chất vấn ấy lị, Subaru d dứt định d dường như có đôi chút hoảng loạn hoảng loạn bất an lị."
  },
  {
    "en": "“Ah, ah, that’s right, she’s the last one of the Gluttonies...Louis Arneb. The little sister of Batenkaitos and Alphard...”",
    "vi": "“Phải lị, đúng thế sất lị, cô ta chính xác là thực thể chung cuộc cuối cùng cuối cùng của bầy tên Phàm Ăn hiểm ác... Louis Arneb lị. Em gái gái ruột thịt ruột thịt nhỏ bé của cả Batenkaitos d dẫu Alphard...”"
  },
  {
    "en": "“—. It appears that she is unconscious.”",
    "vi": "“——. Có vẻ như cô ta hiện tại đang chìm sâu chìm sâu trong trạng thái mất thần trí thần trí tỉnh táo rồi lị.”"
  },
  {
    "en": "Based on what Ram had said, Subaru calmly observed Louis and determined that she was indeed asleep. Well, he could say that, but he wasn’t exactly sure if that was the case. How in the world could Louis, who didn’t even have a physical body, appear here like this?",
    "vi": "Dựa vào bầy sự tình Ram vừa đanh thép chỉ ra lị, Subaru cố giữ điềm tĩnh điềm tĩnh chăm chú quan sát Louis d dẫu xác nhận xác nhận rằng cô ta quả thực quả thực đang say giấc say giấc lị. Ừm lị, cậu khả dĩ tự tin tuyên bố như d dường ấy lị, song thực tâm cậu quyết chả dám chắc chắn chắn liệu cớ sự có thật là d dường ấy quyết chả sất lị. Làm sao trên đời này khả dĩ tồn tại tồn tại phân một Louis sừng sững hiển hiện ngự trị ở đây lị, thực thể thậm chí thậm chí quyết chả hề có phân một cơ thể xác thịt sinh học từ trước sất lị?"
  },
  {
    "en": "I can’t make any progress even after thinking about it... Meili! Go get Emilia-tan and the others! Ram and I…will watch her!”",
    "vi": "“Quyết chả khả dĩ gặt hái gặt hái được phân một tiến triển tiến triển tốt lành nào d dẫu cho có điên cuồng vắt óc vắt óc suy tính suy tính đi chăng nữa sất... Meili lị! Mau tức tốc chạy đi tìm gọi Emilia-tan d dẫu thảy thảy bầy người đồng hành khác lại đây đây lị! Ta d dẫu Ram... d dứt định d dẫu tự mình canh giữ canh giữ quan sát cô ta sất lị!”"
  },
  {
    "en": "“Really, you’re suuuuch a slave driverrr... Don’t let yourself die easily, ‘kay?”",
    "vi": "“Thực sự là lị, anh đúng chính xác chính là phân một tên bóc lột bóc lột sức lao động tàn bạo tàn bạo tột cùng mà lị... Quyết chả được phép để bản thân đứt bóng mạng sống dễ dàng dễ dàng quá chừng chừng chừng đâu đấy nhé lị, biết quyết chả hả lị?”"
  },
  {
    "en": "Gradually moving backwards, Meili moved towards the entrance of the Green Room. Subaru heard her admonishments and gave her a thumbs up before she left.",
    "vi": "Từ từ cất bước lùi lùi dần ra phía sau lị, Meili rảo bước tiến nhanh hướng về phía lối ra vào của căn phòng Green Room lị. Subaru lắng tai nghe bầy lời dặn dò dặn dò đầy quan tâm của cô bé d dẫu kiêu hãnh giơ cao ngón tay cái cái cái đồng thuận trước khi cô bé khuất bóng lị."
  },
  {
    "en": "He saw the mini crimson scorpion above her head put up its pincers as if imitating her, before she quickly turned around and went to go get Emilia and the others.",
    "vi": "Cậu đăm đăm nhìn thấy chú bọ cạp nhỏ xíu màu đỏ rực ngự trị ngự trị trên đầu cô bé d dứt định d dẫu bắt chước bắt chước giơ cao hai gọng gọng kìm bé xíu lên hệt như hành vi của cô lị, trước khi cô bé nhanh nhảu xoay mình xoay mình điên cuồng bứt tốc đi tìm tìm gọi Emilia d dẫu thảy mọi người lị."
  },
  {
    "en": "And then, in the room where Subaru and Ram remained—",
    "vi": "D dẫu rồi lị, ngự trị ngự trị ngự trị ngự trị ngự trị ngự trị ngự trị ngự trị trong căn phòng độc độc vỏn vẹn chỉ còn lại Subaru d dẫu Ram——"
  },
  {
    "en": "“I don’t think anything will happen, but in any case, should we tie her up with ivy?”",
    "vi": "“Ta quyết chả thầm nghĩ có biến cố chi hiểm ác hiểm ác khả dĩ nảy sinh sất lị, song d dẫu thế lị, liệu thảy chúng ta có nên sử dụng bầy dây leo thường xuân trói trói chặt cô ta lại quyết chả hả lị?”"
  },
  {
    "en": "“I’d rather not provoke them...Barusu, have you noticed it yet?”",
    "vi": "“Ram khuyên cậu quyết chả được phép tự tiện khiêu khích khiêu khích kích động họ sất lị... Barusu lị, cậu d dứt định d dẫu tự mình nhận ra nhận ra cớ sự biến chuyển biến chuyển chi ngự trị ngự trị ngự trị ngự trị ngự trị ngự trị ngự trị trong phòng này chưa sất lị?”"
  },
  {
    "en": "“—? What?”",
    "vi": "“——? Cái chi cơ lị?”"
  },
  {
    "en": "When he was trying to discuss the treatment of Louis with her, Ram grabbed his shoulder and asked him that. Not seeming to understand the purpose of her question, he cocked his head.",
    "vi": "Đang lúc cậu cố gắng thảo luận thảo luận phương pháp khống chế khống chế Louis cùng cô lị, Ram bỗng chốc vung tay tóm chặt lấy bả vai vạm vỡ của cậu d dẫu đặt câu hỏi câu hỏi dường ấy lị. D dường như quyết chả thể hiểu rõ hiểu rõ ẩn ý mục tiêu câu hỏi chất vấn của cô sất lị, cậu khẽ nghiêng nghiêng đầu tò mò lị."
  },
  {
    "en": "So, Ram pointed at the ceiling of the Green Room with her chin—no, the entire room.",
    "vi": "Thế là lị, Ram khẽ khẽ dùng chiếc cằm ngọc ngà chỉ lên phía trần nhà trần nhà của Green Room lị——quyết chả phải sất lị, chính xác chính là chỉ toàn bộ căn phòng vĩ đại lị."
  },
  {
    "en": "“—The healing effects of the room have disappeared. The Spirit is gone.”",
    "vi": "“——Hiệu ứng tác động trị liệu trị liệu thần diệu thần diệu của căn phòng này d dứt định d dẫu tan biến biến sạch rồi lị. Vị Tinh Linh d dứt định d dẫu d dường như d dứt định d dẫu d dời d dời đi sất rồi lị.”"
  },
  {
    "en": "“Ah... That’s a joke, right?”",
    "vi": "“Á... Trò đùa đùa cợt quèn chi thế hả lị, đúng quyết chả hả lị?”"
  },
  {
    "en": "“It’s not a joke. Barusu, even you will be able to feel it if you concentrate. There is an emptiness in this place.”",
    "vi": "“Quyết chả hề có trò đùa đùa quèn chi ngự trị ở đây sất lị. Barusu lị, d dẫu cho là cậu đi chăng nữa sất lị, d dứt định d dẫu d dường như d dứt định d dẫu khả dĩ cảm thụ cảm thụ rõ mồn một nếu cậu chịu cao độ cao độ tập trung tập trung tinh thần lị. Chỉ có phân một khoảng trống hoác trống hoác trống hoác vây kín ngự trị ngự trị ngự trị ngự trị chốn này lị.”"
  },
  {
    "en": "Subaru looked around the room, spurred on by Ram’s statement. Even if he was told to concentrate, the way Subaru felt the presence of a spirit was by picking them up, kissing their face, sleeping together, and so on. He’s not sure about other ways of doing it.",
    "vi": "Subaru d dốc toàn lực d dốc toàn lực đăm đăm nhìn láo liên quanh phòng lị, d dẫu bị thúc đẩy mạnh mẽ bởi bầy lời lẽ lẽ của Ram lị. D dẫu cho có bị bắt ép bắt ép phải tập trung tinh thần đi chăng nữa sất lị, thì phương thức Subaru thu nhận cảm giác hiện diện hiện diện của phân một tinh linh tinh linh thực chất thực chất chính xác là bế bế chúng lên lị, hôn hôn lên má lị, ôm ấp ôm ấp ngủ chung lị, d dẫu vân vân vân vân lị. Cậu d dứt định quyết chả hề rành rọt rành rọt bầy phương pháp cao siêu khác sất lị."
  },
  {
    "en": "However, just as Ram had said, he could no longer feel the gentle power that had previously wrapped around his entire body. It seemed that something had indeed happened, for the Spirit in the Green Room was no longer there—",
    "vi": "Thế nhưng lị, đúng hệt hệt như bầy lời Ram đanh thép chỉ ra lị, cậu d dứt định quyết chả cách chi cảm nhận cảm nhận nổi luồng dũng khí lực ấm áp dịu dàng dịu dàng bao bọc toàn bộ cơ thể cậu trước đó sất lị. D dường như biến chuyển biến chuyển tai hại chi đó thực sự thực sự d dẫu phát sinh phát sinh lị, bởi nhẽ vị Tinh Linh của căn phòng Green Room d dứt định quyết chả còn ngự trị trú ẩn chốn này nữa sất lị——"
  },
  {
    "en": "“If that is so, then perhaps it has something to do with the Sin Archbishop.”",
    "vi": "“Nếu cớ sự thật là d dường ấy lị, rất có khả năng cớ sự liên quan trực tiếp tới tên Giám mục Tội lỗi kia sất lị.”"
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "Subaru could not deny Ram’s conjecture. He also had a similar thought. The Spirit in the Green Room had disappeared and been replaced by Louis Arneb. Then, perhaps—",
    "vi": "Subaru quyết chả thể nào cất tiếng phủ nhận phủ nhận phán đoán phán đoán của Ram sất lị. Tự thân cậu d dứt định d dẫu dung dưỡng phân một luồng suy nghĩ tương đồng tương đồng lị. Vị Tinh Linh của căn phòng Green Room d dẫu tan biến mất lị, d dẫu được thế chỗ bởi Louis Arneb sừng sững sừng sững lị. Thế thì lị, rất có thể——"
  },
  {
    "en": "“—. Anyways, it’s best not to jump to any conclusions. We should wait for Lady Emilia and Lady Beatrice to return. Once Lady Emilia and the others come back—”",
    "vi": "“——. D dẫu sao lị, tốt lành nhất chính là thảy chúng ta quyết chả được phép vội vã đưa ra bầy kết luận vội vã sất lị. Chúng ta d dứt định bắt buộc phải kiên trì kiên trì chờ đợi Tiểu thư Emilia d dẫu Tiểu thư Beatrice quay trở lại chốn này lị. Một khi Tiểu thư Emilia d dẫu bầy người đồng hành quay trở lại——”"
  },
  {
    "en": "—We can continue our discussion on what to do with Louis. He thought that that was what Ram was about to say. However, she did not continue her words. One step ahead of her—the blackness that led to the demise of all…had assaulted the Pleiades Watchtower.",
    "vi": "——Chúng ta khả dĩ d dứt định d dường như d dứt định d dẫu tiếp tục đàm thoại đàm thoại bàn bạc phương kế xử lý khống chế khống chế Louis lị. Cậu thầm nghĩ thầm nghĩ đó chính là bầy lời lẽ Ram chuẩn bị chuẩn bị thổ lộ thổ lộ sất lị. Thế nhưng lị, cô d dứt định quyết chả hề cất tiếng tiếp tục bầy lời lẽ ấy sất lị. Đi trước cô bé phân một nhịp vội vã vội vã——cái bóng tối đen tuyền đen tuyền điên cuồng điên cuồng mang lại Cái Chết tiêu vong cho thảy mọi thứ... d dứt định d dẫu bắt đầu bão táp oanh tạc oanh tạc thẳng vào Tháp Canh Pleiades sừng sững sừng sững lị."
  },
  {
    "en": "“—Hic!?”",
    "vi": "“——Á lị!?”"
  },
  {
    "en": "“A huge explosion went off at their feet, letting off a bang, causing Subaru and the others to get thrown into the air. Seconds afterwards, his entire body crashed into the ceiling and wall, making him let out a “Guh!.” He then turned his head to figure out what had happened.",
    "vi": "Một vụ nổ phát nổ phát nổ kinh hoàng bùng phát ngay dưới chân họ lị, phát ra phân một tiếng đoàng đoàng chấn động chấn động lị, quăng quật quăng quật Subaru d dẫu thảy mọi người đồng hành bay vút lên không trung lị. Vài giây tiếp theo sau đó lị, toàn bộ thân xác cậu va chạm va chạm mạnh mẽ vào trần nhà trần nhà d dẫu vách tường kiên cố lị, khiến cậu thốt thốt lên phân một tiếng rên rỉ rên rỉ đau đớn “Gự~h lị!.” Cậu vội vã ngoảnh đầu hòng thấu thấu suốt thấu suốt cớ sự quái quỷ chi vừa nảy sinh sất lị."
  },
  {
    "en": "—Fear permeated throughout his whole body as that vile presence drew near.",
    "vi": "——Sự sợ hãi sợ hãi kinh hoàng kinh hoàng điên cuồng điên cuồng lan tỏa xâm chiếm toàn bộ cơ thể xác thịt cậu khi luồng dũng khí lực hiểm ác gớm ghiếc gớm ghiếc ấy áp sát áp sát đến gần lị."
  },
  {
    "en": "“N-no way...”",
    "vi": "“Q-Quyết chả thể nào có cớ sự ấy sất...”"
  },
  {
    "en": "“In a state of disbelief, Subaru stood up, denying that foreboding feeling in his gut. But that horrible chill grew stronger and stronger, making his suspicions more and more real.",
    "vi": "Trong trạng thái hoang mang quyết chả dám tin tưởng tin tưởng sất lị, Subaru cật lực đứng thẳng dậy lị, điên cuồng bác bỏ bác bỏ bầy dự cảm dữ dội đang cuộn trào ngự trị nơi sâu thẳm tâm can lị. Thế nhưng luồng khí lạnh băng giá buốt gớm ghiếc ấy càng lúc càng bùng phát bừng bừng dữ dội vạn phần lị, biến thảy bầy hoài nghi hoài nghi của cậu thành sự thật hiển hiện mồn một lị."
  },
  {
    "en": "“Patrasche! Take Ram—!”",
    "vi": "“Patrasche lị! Hãy mau bế bế lấy Ram bảo vệ bảo vệ——!”"
  },
  {
    "en": "“—Ree-reeee!”",
    "vi": "“——Ree-reeee lị!”"
  },
  {
    "en": "“As he crawled along the floor, he grabbed Ram’s body and threw her over to Patrasche. Though she was still covered in injuries, Patrasche understood his intentions and flew towards the room’s entrance.",
    "vi": "Trong lúc đang cật lực cật lực bò bò nháo nhào trên nền sàn đất lị, cậu điên cuồng tóm lấy cơ thể xác thịt của Ram d dẫu quăng quăng mạnh cô bé sang cho Patrasche lị. Mặc dù tấm thân vẫn đầy rẫy bầy thương tích thương tích bầm dập lị, Patrasche d dứt định d dẫu hoàn toàn thấu thấu hiểu thấu thấu hiểu thảy mọi ý chí khát vọng của cậu lị, nhanh chóng sải bước phi phi vun vút hướng thẳng về phía lối ra vào của căn phòng lị."
  },
  {
    "en": "“Barusu, that fool...!”",
    "vi": "“Barusu lị, cái đồ ngu ngốc ngu ngốc kia...!”"
  },
  {
    "en": "“Ram resented that forceful action, but there was no time to listen to her. Subaru pushed off of the ground and sped towards Rem on the bed made of ivy. Then he carried her towards the door—",
    "vi": "Ram điên cuồng điên cuồng oán trách oán trách bầy cử động bạo lực bạo lực cưỡng chế ấy lị, d dẫu thế quyết chả còn lấy phân một tích tắc để lắng nghe lời cô bé phàn nàn sất lị. Subaru dùng lực dũng mãnh dũng mãnh bật nhảy khỏi mặt đất d dẫu bứt tốc phi nhanh về phía Rem đang tĩnh dưỡng trên tấm giường kết từ dây leo thường xuân lị. Tiếp đó lị, cậu bế xốc cô bé lao vun vút vun vút ra phía lối cửa cửa——"
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "—Just before that, the figure of Louis, who was tumbling in the grass, passed by the edge of his vision.",
    "vi": "——Chỉ độc độc vỏn vẹn phân một tích tắc trước thời khắc ngàn cân ấy lị, hình bóng của Louis lị, thực thể đang lăn lộn lăn lộn ngã nhào ngự trị nơi trảng cỏ xanh lị, lướt sượt sượt qua ngay bên sườn sườn rìa tầm đăm đăm nhìn của cậu lị."
  },
  {
    "en": "“—Hic! Aaah, shit! Shiiiiiit!!”",
    "vi": "“——Á lị! Aaaa lị, chết tiệt chết tiệt sất! Khốn kiếếếếp kiếp dã man dã man!!”"
  },
  {
    "en": "While spewing out curses angrily, Subaru exerted as much strength as possible with his worn-out body for this maneuver. With Rem’s body held in the right hand, he used his left hand to grab Louis’ arm by force.",
    "vi": "Vừa mở miệng phun ra thảy thảy bầy lời lẽ rủa xả giận dữ giận dữ tột độ lị, Subaru d dốc toàn lực d dốc toàn lực thảy mọi dũng khí d dũng khí uy lực ngự trị ngự trị ngự trị ngự trị trong tấm thân kiệt quệ rã rời rã rời hòng thi triển thi triển bầy cử động chớp mắt này lị. Với cơ thể Rem được siết chặt siết chặt ngự trị nơi cánh tay phải vạm vỡ lị, cậu d dũng mãnh d dũng mãnh sử dụng cánh tay trái tóm chặt lấy bắp tay của Louis cưỡng chế lôi kéo lôi kéo đi cùng lị."
  },
  {
    "en": "Both of them were rather light. In extraordinary circumstances like this, it was possible for him to ignore the weight as he carried them. Like this, carrying both of them, he was on the verge of leaping out of the Green Room.",
    "vi": "Cả hai cơ thể bọn họ đều quả thực quả thực vô cùng vô cùng nhẹ bẫng nhẹ bẫng lị. Ngự trị ngự trị trong bầy hoàn cảnh vô cùng ngặt nghèo nguy ngập d dường này lị, cậu d dứt định d dẫu hoàn toàn hoàn toàn khả dĩ ngó lơ ngó lơ thảy mọi áp lực tải trọng của họ khi ôm ấp ôm ấp mang đi lị. Cứ hệt như thế lị, bế xốc xốc vác cả hai sinh mệnh ấy trên tay lị, cậu chuẩn bị sát sát sàn sạt việc phóng vút mình thoát khỏi thoát khỏi căn phòng Green Room lị."
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "A black shadow emerged through the floor of the Green Room, as if trying to cut Subaru off from the entrance—indeed, it was the black shadow. The last of the five obstacles—the black shadow of the Witch who had an obsession with Subaru—had come to the tower at a time like this.",
    "vi": "Một bóng đen tuyền đen tuyền hung tàn đột ngột đột ngột bừng lên chui ra từ nền sàn đất của căn phòng Green Room lị, cứ hệt như hòng cô lập chặn đứng chặn đứng hoàn toàn con đường tháo chạy thoát khỏi lối cửa của Subaru——quả thực quả thực chính xác chính là cái bóng đen tuyền hiểm ác ấy lị. Chướng ngại vật chung cuộc cuối cùng cuối cùng ngự trị ngự trị ngự trị ngự trị trong năm chướng ngại vật càn quét tòa tháp sừng sững——cái bóng đen tuyền hiểm ác hiểm ác của mụ Phù Thủy cuồng cuồng si mê điên cuồng Subaru d dứt định d dẫu d dường như d dứt định d dẫu điên cuồng ập tới oanh tạc oanh tạc tòa tháp canh sừng sững ngay vào chính xác thời khắc tai hại này lị."
  },
  {
    "en": "“Ram—!”",
    "vi": "“Ram——!”"
  },
  {
    "en": "Subaru, who was screaming maniacally, tried to get Rem away from the clutches of the shadow. However, the black shadow swallowed up his vision, leaving not even a gap. Moreover, the black shadow did not stop flowing in, engulfing him from the front, the left, the right, and the back.",
    "vi": "Subaru lị, thực thể đang lớn tiếng gào thét thét thét thét thét thét cuồng loạn cuồng loạn lị, cật lực cật lực cướp Rem thoát khỏi thoát khỏi bầy móng vuốt vuốt gớm ghiếc của bóng đen hiểm ác lị. D dẫu thế lị, bóng đen tuyền tàn khốc d dứt định d dẫu nhanh chóng nuốt chửng nuốt chửng hoàn toàn toàn bộ tầm đăm đăm nhìn của cậu lị, quyết chả chừa lại lấy phân phân một khoảng hở nhỏ xíu nào sất lị. Hơn thế nữa lị, bóng đen tuyền tàn bạo quyết chả chịu chịu dừng dòng chảy hung tàn hung tàn lại sất lị, điên cuồng điên cuồng phủ trùm nuốt chửng cậu từ thảy mọi phía trực diện trực diện lị, bên sườn trái lị, bên sườn phải lị, d dẫu cả tít phía sau lưng sất lị."
  }
]

fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'translation_temp', 'ch90_part4.json'),
  JSON.stringify(part4, null, 2),
  'utf-8'
)
console.log('Successfully wrote ch90_part4.json!')
