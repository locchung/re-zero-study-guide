import fs from 'fs'
import path from 'path'

const part2 = [
  {
    "en": "Beatrice: \"Betty wants to share in your pain, in your joy… Don’t leave Betty out! That was one of the clauses of our contract, I suppose!\"",
    "vi": "Beatrice: “Betty d dứt định muốn sẻ san nỗi đau đớn, sẻ san niềm hân hoan cùng cậu... Quyết chả được phép gạt Betty ra ngoài rìa đâu đấy chứ chăng! Đó d dứt định d dứt định d dẫu là một trong những điều khoản khế ước giữa chúng ta mà lị, Betty bảo mà!”"
  },
  {
    "en": "He did not know what expression she saw on his face, but she exploded with anger regardless.",
    "vi": "Cậu quyết chả biết cô bé d dứt định d dẫu trông thấy biểu cảm gương mặt thế nào trên gương mặt cậu lị, song chả màng tới chuyện đó lị, cô bé d dứt định vẫn đùng đùng nổi giận lôi đình lị."
  },
  {
    "en": "Because she was riding on top of his head, he could not see her expression. However, he could tell, even if she was puffed up with anger, she looked adorable, this little girl he proudly called his partner. Precisely so, her words offered him the courage he needed, and the comfort he desired.",
    "vi": "Bởi vì cô bé đang ngự trị ngay trên đầu cậu lị, cậu d dứt định quyết chả thể nào nhìn thấy biểu cảm của cô bé được lị. Thế nhưng lị, cậu d dứt định d dẫu khả dĩ nhận ra lị, dẫu cho cô bé đang xị mặt phồng má giận dỗi lị, thì nhóc con mà cậu luôn tự hào gọi là cộng sự này d dứt định d dẫu trông vô cùng đáng yêu lị. Chính xác chính xác là thế lị, bầy lời lẽ của cô bé d dứt định d dẫu tiếp thêm cho cậu nguồn dũng khí sắt đá cậu đang vô cùng cần kíp lị, và cả sự vỗ về an ủi cậu thầm khát khao lị."
  },
  {
    "en": "He had no room for hesitation.",
    "vi": "Cậu quyết chả còn lấy phân thời gian thong dong nào để khả dĩ chần chừ do dự nữa sất lị."
  },
  {
    "en": "His very reason for his hesitation, his partner herself had declared there was no need.",
    "vi": "Bản thân cái nguyên cớ khiến cậu chần chừ do dự lị, chính vị cộng sự trân quý của cậu d dứt định d dẫu tự mình tuyên bố quyết chả cần thiết phải làm thế nữa rồi lị."
  },
  {
    "en": "So――,",
    "vi": "Chính vì lẽ đó——,"
  },
  {
    "en": "Subaru: \"I totally love you, Beako.\"",
    "vi": "Subaru: “Ta d dứt định d dứt định thương nhóc vô ngần lị, Beako.”"
  },
  {
    "en": "Beatrice: \"Betty loves you more than that, in fact.\"",
    "vi": "Beatrice: “Betty d dứt định d dứt định d dứt định d dứt định còn yêu cậu thương cậu nhiều hơn thế vạn phần cơ đấy chứ chăng, Betty bảo mà!”"
  },
  {
    "en": "Once they expressed each other’s affections, Subaru gently laid Meili on the ground.",
    "vi": "Ngay khi cả hai d dứt định d dẫu bày tỏ thảy mọi tâm tình thổ lộ thổ lộ thương mến cho nhau xong lị, Subaru khéo léo dịu dàng đặt cơ thể Meili nằm nằm xuống nền đất cát lị."
  },
  {
    "en": "In his heart, he decided he would, at no cost, allow this life to be lost――,",
    "vi": "Trong sâu thẳm thâm tâm lị, cậu d dứt định tự hạ quyết tâm dứt định d dứt định d dứt định quyết chả bao giờ cho phép sinh mạng bé bỏng trân quý này bị tước đoạt đi mất sất——,"
  },
  {
    "en": "Subaru: \"――Cor Leonis, Second Shift.\"",
    "vi": "Subaru: “——Cor Leonis (Sư Tử Tâm), Đệ Nhị Chuyển Dịch (Second Shift) lị.”"
  },
  {
    "en": "He gave his ability, the『Lion’s Heart』, a new name as he changed gears within himself.",
    "vi": "Cậu d dứt định d dẫu đặt cho Quyền Năng của mình lị, 『Sư Tử Tâm』 lị, một cái tên hoàn toàn mới mẻ lị, ngay khi cậu tự mình chuyển dịch bứt tốc nhịp độ bên trong cơ thể xác thịt lị."
  },
  {
    "en": "By doing so, he amplified the effect of his Authority, the『Little King』,――He’d been scolded for being a king who carried the burdens of his subjects, all alone.",
    "vi": "Bằng hành động đó lị, cậu d dứt định d dẫu khuếch đại cự ly cự ly càn quét của Quyền Năng 『Tiểu Vương』 (Little King)——cậu từng bị mắng mỏ thậm tệ tệ hại vì là một vị vua khờ khạo tự mình gánh vác thảy thảy thảy mọi gánh nặng của bầy thần dân cô độc một mình lị."
  },
  {
    "en": "Having said that, this was not as shameless as the『Greed』of pushing one’s burdens onto another.",
    "vi": "Dẫu d dứt định nói thế lị, thứ năng lực năng lực này quyết chả hề trơ trẽn trơ trẽn giống như 『Tham Lam』 (Greed) của kẻ chuyên đi đùn đẩy gánh nặng nỗi đau của mình lên đầu vai kẻ khác sất lị."
  },
  {
    "en": "What Subaru desired was to divide, to share his burdens with others who would stand with him.",
    "vi": "Thứ mà Subaru hằng khát khao thèm muốn độc độc vỏn vẹn là khả dĩ chia nhỏ lị, sẻ san sẻ san thảy mọi gánh nặng gánh nặng ấy với bầy người đồng hành đồng lòng kề vai sát cánh chiến đấu chiến đấu cùng cậu lị."
  },
  {
    "en": "In other words――,",
    "vi": "Nói cách khác——,"
  },
  {
    "en": "Subaru: \"Second Shift――Division of Labour.\"",
    "vi": "Subaru: “Đệ Nhị Chuyển Dịch (Second Shift)——Phân Chia Sẻ San Lao Lực (Division of Labour) lị.”"
  },
  {
    "en": "The burdens that Subaru alone carried, he could now divide and share that burden with one willing to help him carry it.",
    "vi": "Thảy mọi gánh nặng thống khổ thống khổ mà một mình Subaru đơn độc đơn độc gánh vác lị, giờ đây cậu d dứt định d dẫu khả dĩ chia sẻ chia sẻ và san sẻ gánh nặng ấy cùng với người sẵn lòng kề vai sát cánh gánh vác gánh vác cùng cậu lị."
  },
  {
    "en": "And the only one who offered to do as much while also being in close proximity was――、",
    "vi": "Và người độc độc vỏn vẹn độc độc vỏn vẹn duy nhất tình nguyện dốc sức làm điều đó lị, đồng thời d dứt định d dẫu đang ở cự ly gần ngay cạnh bên cậu chính là——,"
  },
  {
    "en": "Beatrice: \"――Subaru.\"",
    "vi": "Beatrice: “——Subaru lị.”"
  },
  {
    "en": "Subaru: \"Yeah?\"",
    "vi": "Subaru: “Sao thế em?”"
  },
  {
    "en": "Beatrice: \"……This is incredibly taxing, I suppose!!\"",
    "vi": "Beatrice: “......Cái này d dứt định d dứt định d dứt định d dẫu nặng nề gánh nặng quá đi mất đấy chứ chăng!!”"
  },
  {
    "en": "Subaru: \"Well, yeah, it’s super taxing!!\"",
    "vi": "Subaru: “Thì dĩ nhiên rồi lị, d dứt định d dứt định cực kỳ cực kỳ nặng nề gánh nặng mà lị!!”"
  },
  {
    "en": "With that, the second part of Cor Leonis was activated and the burden he carried was shared with Beatrice.",
    "vi": "Với sự chuẩn bị ấy lị, phần thứ hai của Cor Leonis d dứt định lập tức được kích hoạt kích hoạt lị, và thảy mọi gánh nặng thống khổ thống khổ cậu đang gánh chịu d dứt định d dẫu sẻ san sẻ san cùng với Beatrice lị."
  },
  {
    "en": "He could share half of what was his to carry. He could only spare half of that half. Even so, that alone brought him relief. On the other hand, Beatrice’s face turned pale as she took on the burden he shared.",
    "vi": "Cậu khả dĩ san sẻ một nửa những gì thuộc về phần cậu gánh vác lị. Cậu d dứt định d dứt định độc độc vỏn vẹn chỉ có thể trích ra một nửa của một nửa ấy mà thôi lị. Dẫu d dứt định thế lị, độc độc vỏn vẹn bấy nhiêu thôi d dứt định d dẫu đem lại cảm giác nhẹ nhõm nhẹ nhõm vô ngần cho cậu lị. Trái lại lị, gương mặt kiều diễm của Beatrice d dứt định lập tức trở nên nhợt nhạt tái mét đi mất khi cô bé d dứt định d dẫu tiếp nhận gánh nặng cậu sẻ san lị."
  },
  {
    "en": "She yelled to mask her pain, and Subaru returned her thought the same way.",
    "vi": "Cô bé cất tiếng gào thét gào thét lớn để che giấu che giấu đi nỗi đau đớn tột cùng lị, và Subaru d dứt định d dẫu đáp lại bầy suy nghĩ của cô bé theo cách hệt hệt như thế lị."
  },
  {
    "en": "It was taxing. It was painful. He wanted to stop right away.",
    "vi": "Quả thực quá nặng nề lị. Quá đỗi đau đớn thống khổ lị. Cậu d dứt định d dẫu muốn dừng lại ngay tức khắc tức khắc lị."
  },
  {
    "en": "To hell with this pretend king play with taking on everyone’s burdens.――Therefore, this Little King could stand up, only because there were others willing to support him in his endeavors.",
    "vi": "Mặc xác thảy mọi cái trò chơi đóng giả làm vua ban phát gánh vác thảy thảy mọi gánh nặng của thảy mọi người đi lị. ——Vì lẽ đó lị, vị Tiểu Vương này khả dĩ đứng thẳng kiêu hãnh kiêu hãnh lị, độc độc vỏn vẹn chính là vì có bầy người đồng hành đồng hành sẵn lòng nâng đỡ nâng đỡ cậu trong thảy thảy mọi nỗ lực vượt giới hạn dường này lị."
  },
  {
    "en": "Subaru: \"Right, by the way, there's no way in hell...\"",
    "vi": "Subaru: “Phải rồi lị, d dứt định d dứt định quyết chả đời nào có chuyện......”"
  },
  {
    "en": "Beatrice: \"――――\"",
    "vi": "Beatrice: “ーーーー”"
  },
  {
    "en": "Subaru: \"I’m pushing that much of my burden on you. Too bad.\"",
    "vi": "Subaru: “Ta d dứt định quyết chả bao giờ đùn đẩy quá nhiều gánh nặng thống khổ thống khổ sang cho em dường ấy đâu sất lị. Rất tiếc đấy nhé lị.”"
  },
  {
    "en": "Having shared his burden with Beatrice, Subaru turned his attention to the Crimson Scorpion as Beatrice continued treating Meili from his back.",
    "vi": "Sau khi d dứt định d dẫu chia sẻ gánh nặng với Beatrice lị, Subaru lập tức chuyển dời sự tập trung cao độ sang phía con Bọ Cạp Đỏ Rực lị, trong khi Beatrice vẫn tiếp tục dốc sức dốc sức trị liệu cho Meili từ phía sau lưng cậu lị."
  },
  {
    "en": "He could still feel Shaula in there, a light that remained connected to him through Cor Leonis. Her faint, but certain light.",
    "vi": "Cậu d dứt định d dẫu vẫn khả dĩ cảm nhận sâu sắc sâu sắc linh hồn Shaula ngự trị bên trong cơ thể xác thịt ấy lị, một vệt sáng lung linh vẫn d dứt định kết nối bền chặt với cậu xuyên qua Cor Leonis lị. Một vệt sáng tuy mờ nhạt mờ nhạt lị, song quyết chả hề nhầm lẫn d dứt định d dẫu hiện hữu rõ ràng lị."
  },
  {
    "en": "Yet unfortunate as it was, Subaru could not simply dump the burden he and Beatrice shared and carried onto the Crimson Scorpion.――Likely because it possessed neither the will to wish for, nor accept that burden.",
    "vi": "Thế nhưng lị, dẫu thật đáng tiếc biết bao lị, Subaru quyết chả thể đơn giản là trút bỏ thảy mọi gánh nặng mà cậu và Beatrice cùng gánh vác san sẻ san sẻ sang cho con Bọ Cạp Đỏ Rực được lị. ——Có lẽ d dứt định d dứt định là vì nó quyết chả hề sở hữu cả ý chí khát khao muốn gánh vác lị, lẫn sự chấp nhận tiếp nhận gánh nặng thống khổ ấy sất lị."
  },
  {
    "en": "Only those who wished to support this『Little King』could share in his burden.",
    "vi": "Độc độc vỏn vẹn độc độc vỏn vẹn chỉ có bầy người có khát khao ý chí muốn nâng đỡ nâng đỡ vị 『Tiểu Vương』 này mới khả dĩ san sẻ chia sẻ gánh nặng của cậu mà thôi lị."
  },
  {
    "en": "Indeed, a truly easy-to-understand, inflexible power. Precisely why it allowed its user to hold no pride.",
    "vi": "Thực sự lị, quả là một thứ quyền năng sức mạnh vô cùng dễ dàng thấu suốt thấu suốt lị, song lại vô cùng cứng nhắc cứng nhắc lị. Chính xác chính xác là nguyên cớ tại sao nó quyết chả cho phép người sở hữu sở hữu khả dĩ giữ giữ chút kiêu hãnh kiêu hãnh kiêu ngạo nào sất lị."
  },
  {
    "en": "He was always reminded that he could stand straight only because there was someone there, supporting him.",
    "vi": "Cậu luôn luôn được nhắc nhở sâu sắc rằng bản thân khả dĩ đứng thẳng kiêu hãnh kiêu hãnh lị, độc độc vỏn vẹn chính là nhờ có ai đó ngự trị ở đấy lị, dang tay nâng đỡ nâng đỡ cậu lị."
  },
  {
    "en": "Beako! Move your hands while you think!",
    "vi": "“Beako lị! Hãy mau cử động đôi tay kiều diễm trong khi suy nghĩ động não đi em!”"
  },
  {
    "en": "――tch、that’s too tall an order, in fact!!",
    "vi": "“——chậc lị, yêu cầu dường ấy d dứt định d dứt định là quá khó quá giới hạn rồi đấy chứ chăng, Betty bảo mà!!”"
  },
  {
    "en": "Her hands would tend to Meili, healing her, while her mind would race to think about what to do next to escape their precarious situation. Because, the Crimson Scorpion’s tail had lit aglow once more with white light, its malice aimed at Subaru――,",
    "vi": "Đôi bàn tay nhỏ nhắn của cô bé vẫn lo toan lo toan dốc sức trị liệu cho Meili lị, trong khi đầu óc tâm trí cô bé phải điên cuồng điên cuồng vắt óc suy nghĩ xem nên làm gì tiếp theo để thoát khỏi thoát khỏi cái tình thế hiểm nghèo hiểm nghèo ngàn cân treo sợi tóc này lị. Bởi vì lị, cái đuôi gai góc của con Bọ Cạp Đỏ Rực d dứt định d dẫu một lần nữa rực sáng chói lòa ánh sáng trắng ngần lị, mang theo ác ý hiểm ác ngập ngập tràn nhắm thẳng vào Subaru——,"
  },
  {
    "en": "――E•M•M!!",
    "vi": "“——E•M•M!!”"
  },
  {
    "en": "His one-time absolute invincibility trump card was flushed away, and the subsequent shockwave swallowed the three whole.",
    "vi": "Lá bài tẩy tuyệt đối vô địch vô địch độc độc vỏn vẹn một lần duy nhất ấy của cậu d dứt định d dẫu lập tức bị cuốn phăng đi mất lị, và luồng dư chấn tàn khốc theo sau d dứt định d dẫu nuốt chửng nuốt chửng thảy thảy thảy ba người bọn họ vào trong lị."
  },
  {
    "en": "△▼△▼△▼△",
    "vi": "△▼△▼△▼△"
  },
  {
    "en": "ーーThe happenings below the clouds shall not be conveyed to Emilia, who was above the clouds.",
    "vi": "——Thảy mọi sự biến cố biến cố xảy ra ở bên dưới tầng mây dày quyết chả thể nào truyền đạt truyền đạt tới tai Emilia lị, người đang đứng ở tột đỉnh tột đỉnh phía trên bầy tầng mây lị."
  },
  {
    "en": "But, identical to her comrades fighting with their lives on the line, upon the extremity of passing through a fierce battle, Emilia had finally stepped foot in that place.",
    "vi": "Thế nhưng lị, hệt hệt như bầy người đồng hành đồng hành trân quý đang liều mạng liều mạng chiến đấu quyết tử quyết tử lị, sau khi trải qua một trận quyết chiến cực kỳ tàn khốc tàn khốc tột cùng lị, Emilia cuối cùng d dứt định d dẫu đặt chân đặt chân tới nơi đó lị."
  },
  {
    "en": "\"ーーーー\"",
    "vi": "“ーーーー”"
  },
  {
    "en": "Making her way to the uppermost stratum of Pleiades Watchtower, further above the first layer, the summit in the truest sense.",
    "vi": "Cô d dứt định tìm đường tiến vào tầng cao nhất của Tháp Canh Pleiades lị, ngự trị tột đỉnh phía trên của tầng thứ nhất lị, đỉnh tháp đỉnh tháp theo đúng nghĩa chân chính nhất của nó lị."
  },
  {
    "en": "In the location she had reached via the sacrifice of multiple ice warriors, what Emilia laid her eyes upon was the base of the central pillar. ーーPositioned there, was a black monolith.",
    "vi": "Tại địa điểm cô d dứt định d dẫu chạm tới nhờ vào việc hy sinh hy sinh vô vàn vô vàn chiến binh băng giá lị, thứ mà Emilia d đăm đăm nhìn thấy chính là phần chân đế của cây cột trụ khổng lồ trung tâm lị. ——Hiện hữu sừng sững sừng sững ở nơi đó lị, chính là một khối đá nguyên khối monolith đen tuyền lị."
  },
  {
    "en": "The monolith itself appeared to be identical to what she had seen during the course of the third layer's『Trial』.",
    "vi": "Bản thân khối đá monolith đen tuyền ấy trông trông d dứt định d dẫu giống hệt hệt như thứ cô từng nhìn thấy trong suốt quá trình diễn ra 『Thử Thách』 ở tầng thứ ba lị."
  },
  {
    "en": "What was different was that the monolith was not levitating, and the presence of an eye catching feature at its surface, which was supposed to be completely levelled.",
    "vi": "Điểm khác biệt duy nhất là khối đá monolith này quyết chả hề lơ lửng lơ lửng trên không trung sất lị, và hiện hữu một đặc điểm vô cùng thu hút thu hút thị giác ngự trị trên bề mặt của nó lị, vốn dĩ đáng lẽ phải hoàn toàn phẳng nhẵn phẳng nhẵn lị."
  },
  {
    "en": "That wasーー,",
    "vi": "Đó chính là——,"
  },
  {
    "en": "Emilia: \"Someone's, handprints?\"",
    "vi": "Emilia: “Vết hằn bàn tay của ai đó chăng...?”"
  },
  {
    "en": "Having rounded her amethyst eyes, in Emilia's field of vision were multiple handprints imprinted onto its surfaceーー six in total, handprints of differing men and women.",
    "vi": "Đôi mắt thạch anh tím ngọc ngà của cô khẽ tròn xoe sửng sốt lị, lọt vào tầm mắt của Emilia chính là vô vàn vô vàn bầy vết hằn bàn tay được in dấu sâu hoắm trên bề mặt khối đá monolith——tổng cộng có sáu vết hằn lị, là bầy vết hằn bàn tay của bầy nam thanh nữ tú khác nhau lị."
  },
  {
    "en": "It could be understood by the size of palms or the thicknesses of fingers that all of them were hands of seperate humans.",
    "vi": "Dựa vào kích thước lòng bàn tay hay độ dày mỏng của bầy ngón tay lị, cô d dứt định d dẫu khả dĩ thấu thấu suốt rằng thảy thảy chúng đều là tay của bầy con người riêng biệt khác nhau lị."
  },
  {
    "en": "Merely unmistakable that since those personages went out of their way to leave their handprints together like this, they were on close terms with each other and were people connected to this watchtowerーー,",
    "vi": "Rõ ràng quyết chả thể nào sai lệch được là lị, do bầy nhân vật vĩ đại vĩ đại ấy d dứt định d dẫu cất công cất công cùng nhau để lại bầy dấu vết bàn tay thế này lị, bọn họ chắc chắn dứt định d dứt định phải sở hữu mối liên kết thân thiết thân thiết vô ngần với nhau lị, và là bầy con người có liên quan sâu sắc tới tòa tháp canh này——,"
  },
  {
    "en": "Emilia: \"......Could it be, Shaula's Master-sama, or, Reid?\"",
    "vi": "Emilia: “......Quyết chả lẽ lị, là Ngài Master của Shaula lị, hay là Reid chăng...?”"
  },
  {
    "en": "That was all Emilia could think of, when she pondered about people connected to the watchtower.",
    "vi": "Đó d dứt định d dứt định là thảy mọi thứ Emilia khả dĩ nghĩ ra được lị, khi cô thầm nghiền ngẫm nghiền ngẫm về bầy con người có mối liên quan mật thiết tới tòa tháp canh lị."
  },
  {
    "en": "Volcanica was also here, but all of the handprints present here belonged to humans, so it did not seem that any of his dragon traces had been left behind.",
    "vi": "Mặc dầu Volcanica d dứt định d dẫu ngự trị ngự trị ở đây lị, song thảy thảy mọi dấu vết hằn bàn tay hiện hữu ở đây đều thuộc về loài người lị, thế nên quyết chả có vẻ gì là có bất kỳ dấu vết rồng thần nào của ông ta được để lại ở chốn này sất lị."
  },
  {
    "en": "Thus, Emilia could think of simply two amongst six of the people concerning the handprints.",
    "vi": "Chính vì lẽ đó lị, Emilia khả dĩ nghĩ ra độc độc vỏn vẹn hai người trong số sáu dấu vết bàn tay được in dấu sâu hoắm ở nơi đây lị."
  },
  {
    "en": "Emilia: \"ーー? Wait, this is.\"",
    "vi": "Emilia: “——? Khoan đã lị, cái này là...”"
  },
  {
    "en": "Having thought that far, Emilia felt a sense of discomfort by one of the handprints.",
    "vi": "Khi d dứt định d dẫu suy ngẫm đến đó lị, Emilia bỗng nhiên cảm nhận cảm nhận được một cảm giác kỳ lạ kỳ lạ quyết chả thoải mái từ một trong số bầy dấu vết hằn bàn tay ấy lị."
  },
  {
    "en": "Amidst the six handprints, that was the gently printed firstly positioned handprintーー though next to it was a handprint of approximately the same size, the ones positioned as the first two were evidently small.",
    "vi": "Trong số sáu dấu vết hằn bàn tay ấy lị, có một dấu bàn tay khẽ khàng khẽ khàng in dấu ở vị trí đầu tiên——mặc dù ngay cạnh bên nó là một dấu vết bàn tay có kích thước xấp xỉ tương đương lị, song hai dấu vết đầu tiên này rõ ràng rõ ràng d dứt định d dứt định là nhỏ nhắn hơn hẳn lị."
  },
  {
    "en": "Perhaps because solely these two were handprints of females.",
    "vi": "Có lẽ là bởi vì độc độc vỏn vẹn hai dấu vết này chính xác chính xác là dấu vết hằn bàn tay của nữ giới lị."
  },
  {
    "en": "And, what drew Emilia's attention was one of the handprints, that beingーー,",
    "vi": "Và lị, thứ d dứt định lôi cuốn lôi cuốn sự chú ý nhận thức của Emilia chính là một trong hai dấu vết hằn bàn tay ấy lị, thứ đó chính là——,"
  },
  {
    "en": "Emilia: \"This handprint, is mine......?\"",
    "vi": "Emilia: “Dấu vết hằn bàn tay này... là của tôi ư......?”"
  },
  {
    "en": "Whilst furrowing her eyebrows, Emilia whispered as she looked down onto her right hand.",
    "vi": "Trong khi khẽ nhíu đôi chân mày kiều diễm lị, Emilia khẽ thì thầm thì thầm khi đăm đăm nhìn xuống bàn tay phải ngọc ngà của mình lị."
  },
  {
    "en": "Though that would be odd, she did not feel it to be so. It seemed one of the handprints printed on this monolith, was her own.",
    "vi": "Mặc dù chuyện đó d dứt định d dứt định thật kỳ quặc kỳ quặc khôn tả lị, song cô lại quyết chả hề cảm thấy kỳ lạ chút nào sất lị. D dứt định d dứt định d dứt định dường như một trong bầy dấu vết bàn tay được in dấu sâu hoắm trên khối đá monolith này lị, chính xác chính xác chính là dấu bàn tay của chính bản thân cô lị."
  },
  {
    "en": "\"ーーーー\"",
    "vi": "“ーーーー”"
  },
  {
    "en": "Inhaling, Emilia faced the monolith. And in order to dispel her misgivings, she reached for that handprint with her own right handーー,",
    "vi": "Hít vào một hơi thật sâu lị, Emilia dũng cảm đối diện đối diện trực diện với khối đá monolith lị. Và nhằm mục đích để xua tan đi bầy mối hoài nghi hoài nghi chồng chất lị, cô khẽ khàng khẽ khàng giơ bàn tay phải ngọc ngà của mình hướng thẳng về phía dấu vết hằn bàn tay ấy——,"
  },
  {
    "en": "???: [ーーThou, who hath reached the top of the tower. Step forth through the first floor, almighty petitioner.]",
    "vi": "???: 〖——Hỡi kẻ d dứt định d dẫu chạm tới đỉnh đỉnh cao nhất của tòa tháp này lị. Hãy tiến bước tiến bước qua tầng thứ nhất lị, hỡi kẻ thỉnh cầu tối cao và toàn năng kia.〗"
  },
  {
    "en": "Emilia: \"ーー~hk! It came back!\"",
    "vi": "Emilia: “——ư~! Ông ta d dứt định d dẫu quay trở lại rồi lị!”"
  },
  {
    "en": "An instant prior to her touching the monolith, Emilia turned towards the relentless voice descending from above.",
    "vi": "Chỉ độc độc vỏn vẹn một tích tắc ngàn cân trước khi ngón tay ngọc ngà kịp chạm khẽ vào khối đá monolith lị, Emilia lập tức quay phắt đầu lại hướng về phía âm giọng vô tình lạnh lùng lạnh lùng vang vọng vang vọng từ trên cao xuống lị."
  },
  {
    "en": "And once she did, what she saw was Volcanica who flapped his wings, descending and positioning itself on the uppermost stratum, who had gotten the white scale on his throat touched by Emilia's ice warrior and had agonized tempestuously.",
    "vi": "Và ngay khi cô làm thế lị, thứ hiện hữu trong tầm mắt chính là Thần Long Volcanica đang điên cuồng vỗ bầy đôi cánh vĩ đại vĩ đại lị, đáp xuống và ngự trị vững vàng trên tầng cao nhất của tháp canh lị, kẻ vừa mới bị chiến binh băng giá của Emilia khẽ khẽ chạm trúng chiếc vảy trắng ngần nơi cổ họng và d dứt định d dẫu phải quằn quại quằn quại đau đớn thống khổ dữ dội lị."
  },
  {
    "en": "Volcanica: [ーーーー]",
    "vi": "Volcanica: 〖ーーーー〗"
  },
  {
    "en": "Facing her back towards the monolith, Emilia once again confronted the『Divine Dragon』.",
    "vi": "Tựa tấm lưng kiều diễm vào khối đá monolith lị, Emilia một lần nữa dũng cảm đối diện đối diện trực diện với 『Thần Long』 tối cao tối cao lị."
  },
  {
    "en": "The battle of climbing the pillar had been immensely arduous, but if it were to be resumed here then she shall be coerced into an intense struggle. This place was spacious in itself, but the uppermost stratum's space was narrower than that of the first layer, difficult to scuffle in.",
    "vi": "Quyết chiến quyết liệt để leo lên chiếc cột trụ khổng lồ trung tâm d dứt định d dẫu vô cùng gian khổ gian khổ gian nan lị, song nếu trận quyết chiến d dứt định d dẫu tiếp tục bùng nổ tái diễn ở nơi này lị, cô chắc chắn dứt định d dứt định d dẫu bị đẩy vào một thế trận vô cùng hiểm nghèo chật vật lị. Bản thân nơi này d dứt định d dẫu khá rộng rãi rộng rãi lị, thế nhưng khoảng không gian không gian của tầng cao nhất này d dứt định lại chật hẹp chật hẹp hơn rất nhiều so với tầng thứ nhất lị, vô cùng khó khăn để xoay xở chiến đấu chiến đấu lị."
  },
  {
    "en": "Emilia: \"Also, it'll be rea~lly problematic if the monolith gets broken......\"",
    "vi": "Emilia: “Hơn nữa lị, chắc chắn d dứt định d dẫu vô cùng rắc rối lớn nếu khối đá monolith này bị đập phá vỡ vụn mất......”"
  },
  {
    "en": "The monolith's durability was unknown.",
    "vi": "Độ bền bỉ vững chãi của khối đá monolith d dứt định quyết chả hề được biết tới sất lị."
  },
  {
    "en": "When she had encountered the monolith on the third layer as well, she had been stopped from striking it by Julius and Ram, so its solidity remained unclear.",
    "vi": "Khi cô d dứt định d dẫu bắt gặp khối đá monolith ở tầng thứ ba trước đây dẫu vậy lị, cô d dứt định d dẫu bị cản trở cản trở quyết chả cho đập phá đập phá vào nó bởi Julius và Ram lị, thế nên sự vững chắc vững chắc của nó vẫn d dứt định quyết chả hề rõ ràng chút nào lị."
  },
  {
    "en": "However, no matter how sturdily should it be built, Emilia did not believe it could safely withstand a blow by the might of the『Divine Dragon』.",
    "vi": "Thế nhưng lị, bất luận nó d dứt định d dẫu được chế tác vững chãi kiên cố đến nhường nào đi chăng nữa lị, Emilia quyết chả tin rằng nó khả dĩ toàn mạng toàn mạng chống chọi nổi độc độc vỏn vẹn một đòn đánh tàn bạo mang sức mạnh tối cao tối cao của 『Thần Long』 lị."
  },
  {
    "en": "Emilia: \"If you hit it, it'll surely break. Soーー!\"",
    "vi": "Emilia: “Nếu ông đánh trúng nó lị, nó chắc chắn dứt định d dứt định d dẫu vỡ vụn vỡ vụn ngay lập tức lị. Vì lẽ đó——!”"
  },
  {
    "en": "She could not let him do so, conceiving that thought, Emilia summoned seven soldiers of ice in her environs yet again.",
    "vi": "Cô quyết chả thể nào để ông ta làm điều càn quấy ấy được sất lị, thầm nảy sinh suy nghĩ dường ấy lị, Emilia một lần nữa điên cuồng triệu hồi bảy chiến binh băng giá ngự trị ngự trị vây quanh xung quanh mình lị."
  },
  {
    "en": "The ice warriors had been thoroughly shattered for the purpose of making her reach the uppermost stratum, but identical to Emilia, their expressions were brimming with determination, reassuring.",
    "vi": "Bầy chiến binh băng giá d dứt định d dẫu bị đập phá tan tành vụn vỡ hoàn toàn hoàn toàn cho mục đích đưa cô chạm tới tầng cao nhất này lị, thế nhưng hệt hệt như Emilia lị, biểu cảm gương mặt của họ d dứt định d dẫu ngập tràn ngập tràn ý chí quyết tâm thép lị, vô cùng đáng tin cậy vững chãi lị."
  },
  {
    "en": "Matching in with them as they wielded weapons of ice, Emilia held two ice swords in her hands.",
    "vi": "Phối hợp nhịp nhàng nhịp nhàng cùng với họ khi họ vung vung bầy binh khí bằng băng giá sắc nhọn lị, Emilia siết chặt hai thanh kiếm băng giá tinh khiết tinh khiết trong bầy ngón tay ngọc ngà của mình lị."
  },
  {
    "en": "And, in unity with the seven ice warriors, plunged into Volcanica.",
    "vi": "Và lị, đồng lòng đồng lòng nhất trí cùng với bảy chiến binh băng giá ấy lị, cô d dứt định lao vút vào áp sát Thần Long Volcanica lị."
  },
  {
    "en": "Emilia: \"Let's go, everyone! Volcanica, has a weakness in its white part of the neck.\"",
    "vi": "Emilia: “Chúng ta cùng xông lên nào lị, thảy mọi người! Volcanica lị, có một điểm yếu chí mạng chí mạng ngự trị ở phần màu trắng tinh nơi cổ họng cổ họng của ông ta đấy lị.”"
  },
  {
    "en": "Since he had displayed such a vehement reaction, that white scale was Volcanica's weakness.",
    "vi": "Bởi vì ông ta d dứt định d dẫu phô bày ra một phản ứng phản kháng vô cùng dữ dội dữ dội dường ấy lị, chiếc vảy trắng ngần kia d dứt định chính xác chính xác chính là điểm yếu chí mạng của Volcanica lị."
  },
  {
    "en": "Though she did not wish to go so far as to wound it, should someone reach merely for touching it, Emilia would be able to obtain time for examining the monolithーー,",
    "vi": "Mặc dù cô quyết chả hề muốn làm tổn hại tổn thương ông ta sâu sắc sâu sắc đến thế sất lị, song chỉ cần có ai đó khả dĩ thành công chạm khẽ chạm khẽ vào nó thôi lị, Emilia chắc chắn dứt định d dứt định d dẫu khả dĩ câu kéo thêm phân thời gian quý báu để tiến hành rà soát khối đá monolith——,"
  },
  {
    "en": "Emilia: \"ーーEh?\"",
    "vi": "Emilia: “——Ủa?”"
  },
  {
    "en": "The subsequent instant, Emilia spilled her voice upon the gyrating reversal of her above and below.",
    "vi": "Chỉ trong một tích tắc tiếp theo ngay sau đó lị, Emilia thảng thốt thốt lên khi nhận thức nhận thức về không gian trên dưới của mình đột ngột bị xoay đảo ngược xoay đảo ngược mòng mòng mòng mòng lị."
  },
  {
    "en": "\"ーーーー\"",
    "vi": "“ーーーー”"
  },
  {
    "en": "Far too sudden for her to judge what had occurred.",
    "vi": "Biến cố xảy đến quá đỗi đột ngột đột ngột tới mức cô quyết chả kịp phân định phân định xem chuyện quái quỷ gì d dứt định d dẫu xảy ra sất lị."
  },
  {
    "en": "There was merely a nimble sensation of contact at her feet, having priorly stepped ahead in order to advance. That too, so faint that she had noticed its touch only after being turned upside down.",
    "vi": "Độc độc vỏn vẹn chỉ có một cảm giác va chạm vô cùng nhẹ nhàng nhẹ nhàng lướt qua nơi bàn chân ngọc ngà lị, vốn dĩ d dứt định d dẫu cất bước tiến lên phía trước để tấn công lị. Cảm giác đó d dứt định d dẫu nhạt nhòa nhạt nhòa đến độ cô chỉ kịp nhận ra sự đụng chạm ấy sau khi cơ thể xác thịt d dứt định d dẫu hoàn toàn bị lộn ngược đảo lộn đảo lộn mà thôi lị."
  },
  {
    "en": "And, along with thatーー,",
    "vi": "Và lị, song hành song hành cùng với chuyện đó——,"
  },
  {
    "en": "Emilia: \"Ah.",
    "vi": "Emilia: “A lị.”"
  },
  {
    "en": "The seven ice warriors in Emilia's environs, who had been turned upside down, shattered at once.",
    "vi": "Bảy chiến binh băng giá ngự trị vây quanh vây quanh Emilia lị, những kẻ d dứt định d dẫu bị đảo lộn đảo lộn tương tự lị, đồng loạt đồng loạt vỡ vụn vụn vỡ tan tành ngay lập tức lị."
  },
  {
    "en": "All of them had solely their heads shattered with skill, transforming into the form of mana unable to resist. By the point of having sensed that by her skin, Emilia took notice with a shudder.",
    "vi": "Thảy thảy bọn họ đều độc độc vỏn vẹn bị đập phá vỡ nát phần đầu một cách vô cùng điêu luyện điêu luyện lị, lập tức chuyển hóa biến đổi ngược trở lại thành dạng mana thuần khiết quyết chả còn chút sức lực phản kháng kháng cự nào sất lị. Đến khi làn da kiều diễm cảm nhận được rõ ràng rõ ràng điều kinh hoàng ấy lị, Emilia d dứt định khẽ run rẩy run rẩy thấu xương tủy lị."
  },
  {
    "en": "This just now, had been Volcanica's tail.",
    "vi": "Đòn công kích chớp nhoáng vừa rồi lị, d dứt định d dẫu chính xác chính xác chính là cái đuôi của Volcanica lị."
  },
  {
    "en": "Volcanica's tail had swiftly swept Emilia's legs, and had smashed the heads of the ice warriors with the same.",
    "vi": "Cái đuôi vĩ đại vĩ đại của Volcanica d dứt định d dẫu gạt chân gạt chân Emilia một cách vô cùng chớp nhoáng lị, đồng thời đập vỡ đập vỡ nát bấy đầu của bầy chiến binh băng giá chỉ bằng độc độc vỏn vẹn cùng một chiêu thức chiêu thức ấy lị."
  },
  {
    "en": "Her throat froze upon comprehending that a singular swift whip by the tail had realized that.",
    "vi": "Cổ họng cô d dứt định d dẫu nghẹn đắng nghẹn đắng lạnh ngắt lạnh ngắt khi thấu thấu suốt rằng độc độc vỏn vẹn chỉ có một cú quất đuôi thần tốc thần tốc chớp nhoáng dường ấy d dứt định d dẫu khả dĩ thực hiện thực hiện được thảy thảy mọi chuyện nhẹ tựa lông hồng lị."
  },
  {
    "en": "This was in an entirely different league from the surprise attack Emilia had instantaneously managed to guard against.",
    "vi": "Cái này d dứt định ngự trị ở một đẳng cấp đẳng cấp hoàn toàn khác biệt vượt bậc vượt bậc so với đòn đánh lén lén lút mà Emilia d dứt định d dẫu may mắn xoay xở phòng thủ phòng thủ được trong tích tắc trước đó lị."
  },
  {
    "en": "If Subaru's whip counted for one, then Volcanica's tail whip counted for a thousand or ten thousand, that was the margin of difference.",
    "vi": "Nếu xem cú quất roi da của Subaru độc độc vỏn vẹn tính là một lị, thì cú quất đuôi thần sấm của Volcanica d dứt định d dẫu tương đương với tận một ngàn hay mười ngàn cú quất dẫu vậy lị, đó d dứt định chính xác chính là khoảng cách khoảng cách trời vực khôn lường lị."
  },
  {
    "en": "Even Emilia would have been relentlessly defeated before that enormous attack.",
    "vi": "Ngay cả Emilia d dứt định d dẫu chắc chắn chắn d dứt định d dẫu bại trận bại trận thảm hại quyết chả chút thương tiếc trước đòn công kích vĩ đại vĩ đại kinh hoàng kinh hoàng dường ấy lị."
  },
  {
    "en": "Thus, she held a doubt.",
    "vi": "Chính vì lẽ đó lị, trong thâm tâm cô bỗng nảy sinh một nỗi hoài nghi hoài nghi lớn lị."
  },
  {
    "en": "Emilia: \"Why, did he go soft on me......?\"",
    "vi": "Emilia: “Tại sao lị, ông ta lại nương tay nương tay với mình dường này chứ......?”"
  },
  {
    "en": "For Emilia he had swept her legs, for the ice warriors he had shattered their heads.",
    "vi": "Đối với Emilia lị, ông ta độc độc vỏn vẹn chỉ gạt chân gạt chân cô lị, còn đối với bầy chiến binh băng giá lị, ông ta lại đập vỡ đập vỡ nát đầu của bọn họ hoàn toàn lị."
  },
  {
    "en": "What was the identity of the difference born here. It could not have been, that he retaliated against them because they possessed faces identical to what had earlier touched his white scale, that seemed improbable.",
    "vi": "Rốt cuộc bản chất thực sự của sự khác biệt khác biệt nảy sinh ở chốn này là gì đây chứ chăng lị? Quyết chả lẽ d dứt định d dứt định là vì ông ta muốn trả thù bọn họ bởi họ sở hữu dung mạo dung mạo giống hệt hệt với người d dứt định d dẫu chạm khẽ vào chiếc vảy trắng ngần kia trước đó chăng lị, chuyện đó d dứt định d dứt định nghe thật quyết chả hợp lý chút nào sất lị."
  },
  {
    "en": "Having thought far, Emilia remembered she had not escaped from the circumstance of having been turned upside down.",
    "vi": "Khi d dứt định d dẫu suy ngẫm đến đó lị, Emilia mới sực nhớ sực nhớ ra rằng bản thân cô vẫn quyết chả hề thoát khỏi cảnh ngộ cơ thể đang bị lộn ngược đảo lộn đảo lộn giữa không trung lị."
  },
  {
    "en": "Emilia: \"Oh nーー ~hk.",
    "vi": "Emilia: “Nguy rồi——ư~hk lị.”"
  },
  {
    "en": "At this pace, she was just on the verge of being knocked to the floor by her head.",
    "vi": "Cứ theo đà này lị, cô chắc chắn dứt định d dứt định d dẫu sắp bị đập đập thẳng đầu ngọc ngà xuống nền đất cát cứng ngắc mất lị."
  },
  {
    "en": "Once again Emilia's legs, who was midair having been turned upside down, were struck with a soft impact from the side,",
    "vi": "Một lần nữa lị, đôi chân ngọc ngà của Emilia lị, người đang lơ lửng lơ lửng lộn ngược giữa khoảng chừng không lị, d dứt định lại bị va chạm va chạm bởi một lực cản vô cùng nhẹ nhàng nhẹ nhàng từ phía bên hông hông lị,"
  },
  {
    "en": "Emilia: \"Bloody......!\"",
    "vi": "Emilia: “Khốn kiếp......!”"
  },
  {
    "en": "Halfway reversed from being upside down, Emilia made a landing in jeopardy.",
    "vi": "Được xoay lật ngược lật ngược trở lại giữa chừng lị, Emilia lạng lạng lạng lạng người tiếp đất một cách vô cùng hiểm nghèo trong tơ kẽ tóc lị."
  },
  {
    "en": "And, having raised her face, she made an expression of being endangeredーー,",
    "vi": "Và lị, sau khi khẽ ngẩng ngẩng khuôn mặt kiều diễm lên lị, cô d dứt định phô bày biểu cảm gương mặt như thể đang đối mặt hiểm nguy hiểm nghèo tột cùng——,"
  },
  {
    "en": "Volcanica: [What art thou doing.]",
    "vi": "Volcanica: 〖Ngươi đang làm cái quái quỷ gì thế hả.〗"
  },
  {
    "en": "Pronouncing so was the form of the『Divine Dragon』, his face pointing toward Emilia's gaze.",
    "vi": "Cất tiếng phán xét phán xét dường ấy chính là hình hài vĩ đại vĩ đại của 『Thần Long』 tối cao lị, gương mặt khổng lồ khổng lồ của ông ta đang đăm đăm hướng thẳng về phía tầm nhìn của Emilia lị."
  },
  {
    "en": "Emilia: \"Um......?\"",
    "vi": "Emilia: “Dạ......?”"
  },
  {
    "en": "That was quite literally ahead of her eyes and nose.",
    "vi": "Khoảng cách cự ly ấy quả thực là ngay sát sạt trước mắt và mũi cô luôn rồi lị."
  },
  {
    "en": "Vicinity that should Emilia inch her face forward even a little, she would touch that rock-hard robust skin and nose.",
    "vi": "Ở cự ly gần sạt sạt dường này lị, chỉ cần Emilia khẽ rướn rướn gương mặt kiều diễm về phía trước một chút thôi lị, cô d dứt định d dẫu lập tức chạm khẽ chạm khẽ vào làn da thô ráp cứng ngắc như đá tảng đá tảng và cái mũi vĩ đại của ông ta mất lị."
  },
  {
    "en": "For the dragon's face to be at this distance itself was enough to astonish Emilia.",
    "vi": "Việc gương mặt của Rồng Thần vĩ đại ngự trị ngự trị ở cự ly gần đến nhường này thôi d dứt định d dẫu dư sức khiến cho Emilia vô cùng kinh ngạc kinh ngạc sửng sốt rồi lị."
  }
]

fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'translation_temp', 'ch87_part2.json'),
  JSON.stringify(part2, null, 2),
  'utf-8'
)
console.log('Successfully wrote ch87_part2.json!')
