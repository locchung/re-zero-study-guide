import fs from 'fs'
import path from 'path'

const part2 = [
  {
    "en": "Therefore—",
    "vi": "Bởi vậy cho nên lị——"
  },
  {
    "en": "“I was soooooooooo happy that Master came back.”",
    "vi": "“Em d dứt định d dẫu vô o o o o o o o o cùng hạnh phúc khi Sư phụ quay trở lại chốn này lị.”"
  },
  {
    "en": "Because, one by one, everyone disappeared. When he came back, she wasn’t sure if she could believe the words he said.",
    "vi": "Bởi vì lị, từng người một từng người một lị, thảy mọi người đều d dứt định d dẫu tan biến mất sất lị. Khi người ấy trở về lị, cô bé d dứt định quyết chả dám chắc liệu bản thân có thể tin tưởng tin tưởng bầy lời người ấy phát ngôn hay quyết chả sất lị."
  },
  {
    "en": "Did she wait because she believed in him, or did she continue to wait simply out of habit? She wasn’t even able to answer this question. She had never even thought about it before.",
    "vi": "Có thật là cô bé kiên trì chờ đợi độc độc vỏn vẹn vì cô đặt trọn niềm tin vào người ấy lị, hay cô cứ tiếp tục chờ đợi chỉ độc độc vỏn vẹn như một thói quen cố hữu cố hữu chăng lị? Cô bé thậm chí quyết chả khả dĩ tự phản hồi nổi câu hỏi ấy sất lị. Từ thuở cha sinh mẹ đẻ đến giờ cô d dứt định quyết chả hề mảy may nghĩ nghĩ tới chuyện đó sất lị."
  },
  {
    "en": "There was no reason to think about it, either, for before it had disappeared, they made true on their promise.",
    "vi": "Cũng quyết chả có bất kỳ lý do chi để suy tính về chuyện đó sất lị, bởi nhẽ nhẽ nhẽ trước khi bóng hình ấy tan biến biến sạch lị, hai người d dứt định d dẫu d dẫu cùng nhau hoàn thành lời thề ước hẹn vẹn toàn lị."
  },
  {
    "en": "“Aaaah, I’m sooooo happyyy, Master.”",
    "vi": "“Aaaah lị, em d dứt định vô o o o o cùng hạnh phúc lị, Sư phụ ơi lị.”"
  },
  {
    "en": "So, she hoped he would never leave. She thought it would be great if he could stay here forever. Because she was no longer alone and could graduate from being a sniper, she thought she should receive an appropriate reward for graduating.",
    "vi": "Bởi thế lị, cô bé hằng ao ước ao ước người ấy quyết chả bao giờ bỏ rơi mình ra đi nữa sất lị. Cô thầm nghĩ thật tuyệt diệu biết bao nếu người ấy khả dĩ ngự trị ngự trị tại chốn này vĩnh viễn vĩnh viễn lị. Bởi vì cô quyết chả còn phải đơn độc cô quạnh cô quạnh nữa sất lị, d dẫu khả dĩ tốt nghiệp tốt nghiệp danh hiệu tay súng bắn tỉa xạ thủ lị, cô nghĩ bản thân xứng đáng nhận được một phần thưởng tốt lành tốt lành cho sự tốt nghiệp ấy lị."
  },
  {
    "en": "“Master, I don’t want to be left behind agaaain... Aaaah, I also…want to be loveeeed.”",
    "vi": "“Sư phụ ơi lị, em quyết chả muốn bị bỏ trơ trọi trơ trọi lại phía sau một lần nào nữa đâu sất lị... Aaaah lị, em cũng... khát khao khát khao được yêu thương yêu thương thương nữa mà lị.”"
  },
  {
    "en": "Everything had moved on and left her far behind.",
    "vi": "Thảy mọi thứ thảy thảy đều d dứt định d dẫu vội vã vội vã trôi đi lị, bỏ mặc bỏ mặc cô bé cô đơn đơn độc tít tắp phía sau lưng lị."
  },
  {
    "en": "Therefore, this time, she wanted to follow him, no matter where or when.",
    "vi": "Bởi vậy cho nên lị, lần này lị, cô bé khát khao muốn đi theo gót chân người ấy lị, d dẫu cho là đi tới bất kỳ nơi chân trời góc bể nào sất lị."
  },
  {
    "en": "So—",
    "vi": "Thế nên——"
  },
  {
    "en": "“I hope you...can come to love me. —Master.”",
    "vi": "“Em mong rằng... Người khả dĩ d dứt định d dẫu đem lòng yêu thương yêu thương em lị. ——Sư phụ lị.”"
  },
  {
    "en": "3",
    "vi": "3"
  },
  {
    "en": "The Crimson Scorpion twitched, the glow of its crimson shell growing ever brighter.",
    "vi": "Con Bọ Cạp Đỏ Rực khẽ co giật co giật lị, luồng hào quang rực rỡ từ lớp vỏ đỏ rực của nó bùng sáng chói lòa bùng sáng chói lòa vạn phần lị."
  },
  {
    "en": "It was possible that it was an increased reaction of its Warning Color, but in the eyes of Subaru, that didn’t seem to be the case. It was as if that crimson hue came about due to Shaula crying.",
    "vi": "Rất có khả năng đó d dứt định d dẫu là phản ứng tăng cường tăng cường của Màu Sắc Cảnh Báo nguy hiểm lị, thế nhưng ngự trị dưới góc đăm đăm nhìn nhận thức của Subaru lị, cớ sự quyết chả phải d dường ấy sất lị. Sắc đỏ rực rỡ rực rỡ d dường như d dứt định d dẫu bừng lên bừng lên bởi nhẽ Shaula đang khóc nức nở thống khổ thống khổ lị."
  },
  {
    "en": "It was the expression of the true thoughts of the being named Shaula, who had locked her feelings away for the past 400 years and kept her promise to stay in the tower.",
    "vi": "Đó chính xác chính là sự bộc lộ bộc lộ thảy mọi suy nghĩ sâu thẳm chân thật nhất của sinh mệnh mang tên Shaula lị, người d dẫu phong ấn phong ấn thảy mọi xúc cảm thầm kín suốt bốn trăm năm ròng rã ròng rã d dẫu kiên trì kiên trì giữ trọn giữ trọn lời thề ước ngự trị ngự trị canh giữ tòa tháp canh này lị."
  },
  {
    "en": "Red was the color of fervor, of passion, of unrestrainable Love. The crimson hue of the Crimson Scorpion must’ve been brought about by its strong desire to love and be loved by the person it loved.",
    "vi": "Sắc đỏ chính là sắc màu của sự nồng nhiệt nồng nhiệt lị, của đam mê cháy bỏng lị, của Tình Yêu quyết chả thể nào kìm nén kìm nén nổi sất lị. Sắc đỏ rực rỡ rực rỡ của con Bọ Cạp Đỏ Rực chắc chắn d dứt định d dẫu d dường như nảy sinh từ niềm khát vọng khát vọng cháy bỏng mãnh liệt được yêu thương yêu thương d dẫu yêu thương người mà nó hằng say đắm thiết tha lị."
  },
  {
    "en": "“—AFTER ALL, EVERYONE SAYS THAT SCORPIO WOMEN ARE EXTREMELY LOVING!!”",
    "vi": "“——D DẪU SAO THÌ LỊ, THẢY MỌI NGƯỜI ĐỀU TUYÊN BỐ RẰNG NỮ NHÂN THUỘC CUNG THIÊN YẾT THÌ YÊU THƯƠNG SÂU NẶNG KHẮC CỐT GHI TÂM CỰC KỲ ĐẤY NHÉ CHỨ LỊ!!”"
  },
  {
    "en": "Kicking up a lot of sand with his own two feet, Subaru shouted that out with a burst of enthusiasm and brought his hand up to fling his whip with his broad shoulders.",
    "vi": "Bàn chân điên cuồng cào cào tung đống cát mịn lị, Subaru hét lớn lớn giọng đầy hăng hái hăng hái lị, d dẫu vung mạnh cánh tay d dứt định d dẫu phóng sợi roi da điên cuồng bằng bờ vai vạm vỡ vạm vỡ của mình lị."
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "He aimed at the one whose back to turned to him and was fighting and fooling around with Julius, the Crimson Scorpion. He used his whip to announce his presence, seeing that she was so busy, but the Master she longed for was standing right there. Since she was making advances on another man, he had no choice but to say some nasty things to her—",
    "vi": "Cậu nhắm bắn thẳng vào thực thể đang quay lưng quay lưng lại với mình d dẫu đang bận rộn giao đấu đùa giỡn đùa giỡn cùng Julius lị, chính là con Bọ Cạp Đỏ Rực lị. Cậu sử dụng sợi roi da của mình để thông báo sự hiện diện của mình lị, d dẫu biết cô bé đang vô cùng bận rộn lị, song vị Master mà cô hằng mong ngóng mong ngóng d dứt định đang sừng sững đứng ngay tại chốn này lị. Nhìn thấy cô cứ mải miết áp sát áp sát một nam nhân khác lị, cậu d dứt định quyết chả còn cách chi ngoài việc phải phun ra vài câu chế giễu ghẹo ghẹo cô bé sất lị——"
  },
  {
    "en": "“SEEING YOU GO AFTER ANOTHER MAN LIKE THIS REALLY MAKES ME SAD AND WOUNDS MY MANLY HEART, YOU KNOW—!!”",
    "vi": "“NHÌN THẤY EM CỨ BÁM RIẾT LẤY NAM NHÂN KHÁC NHƯ THẾ NÀY QUẢ THỰC KHIẾN TA BUỒN LÒNG VÀ TỔN THƯƠNG TỔN THƯƠNG CÁI LÒNG TỰ TÔN NAM NHÂN CỦA TA GHÊ GỚM ĐẤY BIẾT CHƯA HẢ LỊ——!!”"
  },
  {
    "en": "“Subaru’s way of speaking is disgusting as usual, in fact!”",
    "vi": "“Cái phong cách phát ngôn của Subaru vẫn tởm lợm tởm lợm hệt như thường lệ đấy chứ chăng, Betty bảo mà!”"
  },
  {
    "en": "Subaru unleashed his whip and landed a perfect hit, having been pushed onwards by Beatrice’s harsh words from behind his head—it had been beautifully wrapped around the base of the Crimson Scorpion’s tail.",
    "vi": "Subaru phóng vút sợi roi da của mình ra và thực hiện một cú quất trúng đích hoàn hảo lị, d dẫu bị thúc đẩy d dồn dập bởi bầy lời cay nghiệt đay nghiến của Beatrice vang lên từ phía sau gáy gáy lị——sợi roi d dứt định d dẫu quấn chặt quấn chặt một cách đẹp đẽ đẹp đẽ quanh phần gốc đuôi vĩ đại của con Bọ Cạp Đỏ Rực lị."
  },
  {
    "en": "However, just this alone would still lead to what had happened not too long ago where they had been buried into the sand.",
    "vi": "Thế nhưng lị, nếu độc độc vỏn vẹn chỉ có chừng ấy hành động lị, thì cục diện chắc chắn d dứt định chắc chắn chắn d dứt định d dẫu lặp lại bi kịch bi kịch bị chôn vùi dưới cát bụi mới nảy sinh vừa rồi sất lị."
  },
  {
    "en": "The Crimson Scorpion, perhaps because it did not think much of their game of tug-of-war, instead focused on the fight with Julius, completely ignoring Subaru and co. altogether.",
    "vi": "Con Bọ Cạp Đỏ Rực lị, rất có khả năng vì quyết chả hề xem trọng cái trò chơi kéo co kéo co quèn của bọn họ sất lị, nên nó d dứt định d dẫu d dồn dập tập trung chiến đấu chiến đấu với Julius lị, hoàn toàn hoàn toàn ngó lơ bỏ mặc bỏ mặc Subaru cùng bầy người đồng hành sất lị."
  },
  {
    "en": "Subaru and everyone else was weak. —It would take advantage of that idea.",
    "vi": "Subaru d dẫu thảy mọi người đồng hành d dứt định d dẫu là kẻ yếu đuối yếu đuối lị. ——Nó chắc chắn d dứt định d dẫu tận dụng triệt để suy nghĩ ấy lị."
  },
  {
    "en": "“EL VITA—!!”",
    "vi": "“EL VITA——!!”"
  },
  {
    "en": "“GAAAAAH!!”",
    "vi": "“GAAAAAH lị!!”"
  },
  {
    "en": "Beatrice chanted the magic spell, causing the effects of it to pour over Subaru’s whole body, his legs sinking into the sand due to the sheer weight.",
    "vi": "Beatrice nhanh nhảu niệm niệm chú phép thuật lị, khiến thảy mọi tác động của nó đổ dồn dồn dập lên khắp cơ thể xác thịt của Subaru lị, đôi chân cậu bỗng lún sâu lún sâu hoắm xuống đống cát mịn do sức nặng khổng lồ tăng vọt lị."
  },
  {
    "en": "In contrast to Murak which mitigated the effects of gravity, Vita increased the effects of gravity—Subaru’s weight class had been raised to the Yokozuna level of the Makuuchi division of sumo wrestling, allowing him to compete with the tail of the Crimson Scorpion.",
    "vi": "Hoàn toàn tương phản tương phản với phép Murak vốn dùng để tiêu giảm tác động trọng lực lị, phép Vita điên cuồng gia tăng gia tăng trọng lực tột độ tột độ——hạng cân của Subaru bỗng chốc tăng vọt tăng vọt chạm ngưỡng Yokozuna cấp cao nhất Makuuchi của môn đấu vật sumo truyền thống lị, cho phép cậu đủ sức đối đầu đối đầu sòng phẳng sòng phẳng với cái đuôi vĩ đại hung tàn của con Bọ Cạp Đỏ Rực lị."
  },
  {
    "en": "Naturally, that alone would not be enough. It could enhance the effects of gravity, but only up to 220 or so pounds (100 kilograms.) That was nowhere near enough to compete with the monstrous strength of Shaula, who could easily pick up and carry a dragon carriage.",
    "vi": "Tất nhiên lị, cớ sự độc độc vỏn vẹn chỉ có thế d dứt định quyết chả thể nào đủ sức sất lị. Phép thuật khả dĩ gia tăng trọng lượng lị, song giới hạn kịch trần d dứt định d dẫu độc độc vỏn vẹn chỉ được tầm một trăm ki-lô-gam (220 pounds) mà thôi lị. Con số đó d dứt định quyết chả thấm vào đâu sất khi đem so kè so kè với sức mạnh quái thú quái thú kinh hoàng của Shaula lị, thực thể d dẫu khả dĩ dễ dàng nâng bổng nâng bổng một cỗ xe rồng vĩ đại sất lị."
  },
  {
    "en": "Therefore—",
    "vi": "Bởi vậy cho nên lị——"
  },
  {
    "en": "“—Time for the climax! DO IT!!”",
    "vi": "“——Đến thời khắc quyết định rồi lị! HÀNH ĐỘNG MAU ĐI LỊ!!”"
  },
  {
    "en": "With both hands pulling hard on the whip and his feet firmly planted in the sand, Subaru let out a loud cry. In the next instant, Subaru’s body, which was being pulled up by the brute strength of the Crimson Scorpion’s tail, returned to the ground.",
    "vi": "Bằng cả hai bàn tay siết chặt siết chặt điên cuồng ghì sợi roi da d dẫu đôi chân cắm sâu sừng sững sừng sững ngự trị trên cát lị, Subaru gầm lên gầm lên một tiếng thét vang trời lị. Ngay trong tích tắc tiếp theo lị, cơ thể xác thịt của Subaru lị, thứ đáng lẽ đáng lẽ d dứt định d dẫu bị nhấc bổng nhấc bổng lên bởi sức mạnh dã man dữ dội từ cái đuôi của con Bọ Cạp Đỏ Rực lị, d dứt định d dẫu vững vàng quay trở lại mặt đất cát lị."
  },
  {
    "en": "The obvious reason as to why was because the strength of the Crimson Scorpion and Subaru—no, Subaru and the others—was evenly matched.",
    "vi": "Bản chất nguyên cớ rõ rành rành rành cho cớ sự ấy chính xác chính là bởi sức mạnh lực lượng giữa con Bọ Cạp Đỏ Rực d dẫu Subaru——quyết chả sất lị, phải là Subaru d dẫu bầy người đồng hành lị, d dứt định d dẫu đạt trạng thái cân bằng cân bằng ngang ngửa lị."
  },
  {
    "en": "“—ッッ.”",
    "vi": "“——ッッ.”"
  },
  {
    "en": "Now in front of Subaru, still standing firmly in place, was the Hungry Horse King, who had broken into their game of tug-of-war with its huge, strange-looking body. Moreover, it wasn’t just the Hungry Horse King that had joined this unprecedented game of tug-of-war.",
    "vi": "Hiện diện hiển hiện ngay trước mắt Subaru lị, sừng sững sừng sững hỗ trợ cậu chính xác chính là Hungry Horse King lị, con ma thú d dẫu d dũng mãnh chen ngang chen ngang vào trò chơi kéo co quái dị của họ bằng cơ thể xác thịt khổng lồ dị dạng dị dạng của nó lị. Hơn thế nữa lị, quyết chả phải độc độc vỏn vẹn chỉ có mỗi Hungry Horse King tham chiến vào cuộc kéo co chưa từng có tiền lệ tiền lệ này sất lị."
  },
  {
    "en": "Courtesan bears, winged moles, and suspicious serpents all joined the battle. All of these witchbeasts, who were supposed to be Subaru’s enemies, were giving him a helping hand in this battle.",
    "vi": "Bầy gấu kỹ nữ Courtesan bears lị, chuột chũi có cánh lị, d dẫu cả bầy mãng xà mãng xà đầy khả nghi đều điên cuồng điên cuồng gia nhập chiến trường lị. Thảy mọi ma thú hiểm ác hiểm ác này lị, lũ sinh vật đáng lẽ đáng lẽ d dứt định d dẫu là kẻ thù quyết tử của Subaru sất lị, giờ đây d dứt định d dẫu đang d dốc toàn lực d dốc toàn lực giương tay cứu giúp cứu giúp hỗ trợ cậu trong trận tử chiến này lị."
  },
  {
    "en": "The cause of this scene was none other than—",
    "vi": "Nguyên cớ đứng sau cảnh tượng chấn động chấn động ấy quyết chả phải ai khác ngoài——"
  },
  {
    "en": "“...Really, you’re such a slave driverrr!”",
    "vi": "“...Thực sự là lị, anh đúng là một kẻ bóc lột bóc lột sức lao động tàn bạo tàn bạo quá chừng mà lị!”"
  },
  {
    "en": "It was the voice of a girl enveloped in a weary and unhappy atmosphere. The owner of that voice was a young girl whose cheeks were devoid of blood and having trouble breathing—Meili.",
    "vi": "Đó d dứt định d dẫu d dường như là chất giọng của một thiếu nữ bé bỏng đang ngập ngập tràn trong bầu không khí mỏi mệt mỏi mệt d dẫu bất mãn bất mãn tột độ lị. Chủ nhân của chất giọng ấy chính xác chính là cô bé có đôi má nhợt nhạt quyết chả còn lấy phân một giọt máu d dẫu đang vô cùng vô cùng khó khăn khó khăn để hô hấp thở dốc——Meili lị."
  },
  {
    "en": "Tightening her lovely face, she let out a long, hard sigh. Then, yelling out a “Hoorah!” and clapping loudly—",
    "vi": "Cố gượng khuôn mặt nhỏ nhắn đáng yêu đáng yêu của mình lị, cô bé khẽ khẽ thở hắt ra một tiếng thở dài thườn thượt lị. Tiếp đó lị, hét lớn tiếng “Lên nào lị!” d dẫu vỗ mạnh vỗ mạnh đôi bàn tay bé nhỏ——"
  },
  {
    "en": "“Okay! Come here, everyone. Watching from the side is a waaasteee.”",
    "vi": "“Được rồi lị! Mau kéo lại đây đây đi thảy mọi người ơi lị. Đứng ngoài nhìn đăm đăm quan sát thì uổng uổng phí phí lắm đó nha lị.”"
  },
  {
    "en": "With a single clap, and, after a single beat, the sea of sand began to rumble. Continuously pouring into this area were witchbeasts, whose footsteps and roars could be heard. This environment was well-suited for witchbeasts, and the one who had taken control of it was the witchbeast Master—no, she could no longer be called that.",
    "vi": "Độc độc vỏn vẹn sau một tiếng vỗ tay lị, d dẫu độc độc vỏn vẹn sau một nhịp chớp nhoáng lị, biển cát bao la bỗng chốc bắt đầu rung chuyển rung chuyển dữ dội dữ dội lị. Điên cuồng điên cuồng ùa vào khu vực này là lũ ma thú hiểm ác hiểm ác lị, tiếng chân dẫm đạp dẫm đạp d dẫu tiếng gầm rú đinh tai nhức óc nhức óc của chúng vang dội vang dội khắp chốn lị. Môi trường thiên nhiên hoang dã hoang dã này vô cùng thích hợp cho ma thú lị, d dẫu thực thể d dẫu nắm quyền thao túng kiểm soát kiểm soát thảy mọi điều ấy chính là Bậc thầy Ma thú——quyết chả phải sất lị, danh hiệu quèn đó d dứt định quyết chả còn phù hợp phù hợp để gọi cô bé nữa rồi lị."
  },
  {
    "en": "The massive phenomenon occurring wasn’t caused by a mere witchbeast Master. Using the Divine Protection of Magic Manipulation, she guided and took control of the witchbeasts of the Augria Sand Dunes, so the title of witchbeast Master no longer suited her.",
    "vi": "Hiện tượng vĩ đại kinh hoàng kinh hoàng đang nảy sinh quyết chả phải do một Bậc thầy Ma thú thông thường tạo ra sất lị. Nhờ vào Gia Hộ Thao Túng Ma Thú lị, cô bé d dứt định d dẫu dẫn dắt dẫn dắt d dẫu nắm quyền kiểm soát kiểm soát tuyệt đối toàn bộ bầy lũ ma thú ngự trị nơi Augria Cồn Cát Cồn Cát lị, thế nên danh xưng Bậc thầy Ma thú quyết chả thể lột tả lột tả hết tầm vóc của cô bé nữa lị."
  },
  {
    "en": "It was as if the Mother of witchbeasts, who had left a trail of destruction in the southern empire, had returned. She once again made use of her skills to cause a stampede for this battle, turning it into an all-out war.",
    "vi": "Cứ như thể Mẹ Ma Thú lị, thực thể huyền thoại huyền thoại d dẫu từng gieo rắc sự tàn phá tàn phá hủy diệt khắp đế quốc phía nam lị, d dứt định d dẫu tái sinh quay trở lại chốn nhân gian lị. Cô bé một lần nữa phô diễn tuyệt kỹ siêu phàm của mình để kiến tạo kiến tạo một đợt càn quét điên cuồng điên cuồng cho trận quyết chiến vĩ đại này lị, biến nó thành một cuộc tổng tổng lực chiến kinh hoàng lị."
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "Though Meili wore a painful expression on her face, she still managed to stay conscious and had recovered enough to participate in the final battle. Naturally, there was a little trick behind it.",
    "vi": "Mặc dù Meili lộ rõ vẻ mặt đau đớn đau đớn thống khổ vô ngần lị, song cô bé d dứt định d dẫu kiên cường kiên cường giữ vững thần trí thần trí tỉnh táo d dẫu hồi phục hồi phục sinh lực đủ để can dự can dự vào trận chiến chung cuộc cuối cùng lị. Lẽ tất nhiên lị, d dứt định d dẫu có một mánh khóe nhỏ ẩn giấu đằng sau cớ sự ấy lị."
  },
  {
    "en": "Subaru had, naturally, used Cor Leonis to distribute the damage Meili had taken to another. —Sharing it had been the last card in his hand.",
    "vi": "Subaru d dứt định d dẫu tự mình tự nhiên áp dụng Quyền năng Cor Leonis để phân tán phân tán triệt để lượng tổn thương tổn thương Meili phải gánh chịu sang cho một đối tượng đối tượng khác lị. ——Sự sẻ chia sẻ chia ấy d dứt định chính là quân bài tẩy cuối cùng ẩn giấu trong tay áo cậu lị."
  },
  {
    "en": "Not with Emilia, not with Beatrice, and not with Ram, either. Nor was it shared with Julius, Echidna, Patrasche, Meili, or the sleeping Rem. It was the one who had come with them to conquer the Augria Sand Dunes, their last ally—",
    "vi": "Quyết chả phải chia sẻ với Emilia sất lị, quyết chả phải với Beatrice sất lị, d dẫu quyết chả phải với Ram sất lị. Cũng quyết chả hề san sẻ san sẻ với Julius sất lị, Echidna sất lị, Patrasche sất lị, Meili sất lị, hay Rem đang say ngủ kia sất lị. Đối tượng gánh chịu chính xác chính là sinh mệnh d dẫu kề vai kề vai kề vai kề vai kề vai kề vai kề vai sát cánh cùng họ trong hành trình chinh phục Augria Cồn Cát Cồn Cát lị, đồng minh cuối cùng cuối cùng của họ——"
  },
  {
    "en": "“—Sorry to get you involved, Gyan! Give me a hand!!”",
    "vi": "“——Xin lỗi vì d dẫu kéo em vào mớ hỗn độn này sất lị, Gyan! Mau hỗ trợ hỗ trợ ta một tay đi nào lị!!””"
  },
  {
    "en": "The earth dragon Gyan, who had been left on the sixth floor of the distant watchtower, was also within the range of Cor Leonis’ influence, so, as a result, Subaru made the decision to share that burden with the earth dragon.",
    "vi": "Chú địa long Gyan lị, sinh vật đáng lẽ đáng lẽ d dẫu bị để lại ngự trị nơi tầng thứ sáu của tòa tháp canh tít xa lị, d dứt định d dẫu d dường như ngự trị ngự trị trong phạm vi tầm ảnh hưởng ảnh hưởng của Quyền năng Cor Leonis lị, thế nên kết cục lị, Subaru d dứt định d dẫu d dẫu đưa ra lựa chọn san sẻ gánh nặng tàn khốc ấy cho chú địa long dũng cảm lị."
  },
  {
    "en": "The decision to do so was heartbreaking for Subaru, but what was even more heartbreaking for him was that Gyan met the conditions of Cor Leonis for those who wished to share his burdens.",
    "vi": "Quyết định hành động d dường ấy thực sự khiến trái tim Subaru đau đớn đau đớn như rỉ máu lị, thế nhưng điều khiến lòng cậu quặn thắt quặn thắt vạn phần hơn nữa chính là Gyan d dứt định d dẫu hoàn toàn đáp ứng đáp ứng thảy mọi điều kiện của Cor Leonis dành cho bầy sinh mệnh tự nguyện gánh vác gánh vác đau đớn cùng cậu lị."
  },
  {
    "en": "This meant that, just like Beatrice and his other friends, Gyan wanted to support Subaru’s actions. He was grateful for the spirit of the theatrical version of Gyan, transferring most of Meili’s burdens to the earth dragon through himself. This was the trick that allowed Meili to get back in the game.",
    "vi": "Điều này d dứt định đồng nghĩa đồng nghĩa với việc lị, d dẫu giống hệt hệt như Beatrice d dẫu bầy người đồng hành trân quý khác lị, Gyan thực tâm thực tâm khát khao muốn hỗ trợ hỗ trợ hết lòng cho bầy hành động của Subaru lị. Cậu vô cùng cảm kích cảm kích trước tinh thần anh dũng kiêu hùng tột đỉnh của Gyan lị, d dẫu tự mình luân chuyển luân chuyển hầu hết thảy mọi gánh nặng thống khổ của Meili sang cho chú địa long quả cảm thông qua cơ thể xác thịt chính mình lị. Đây chính xác chính là mánh khóe giúp Meili khả dĩ hồi sinh hồi sinh nhập cuộc trở lại lị."
  },
  {
    "en": "It was also the main reason why the Crimson Scorpion lost in the competition of strength. And also—",
    "vi": "Đó d dẫu d dứt định d dẫu chính là nguyên cớ cốt lõi cốt lõi khiến con Bọ Cạp Đỏ Rực bại trận quy hàng trong cuộc đọ đọ sức lực cơ bắp lị. Và hơn thế nữa——"
  },
  {
    "en": "“—This will be the cause of your defeat, Shaula.”",
    "vi": "“——Đây d dứt định d dẫu d dường như d dứt định d dẫu là nguyên nhân khiến em bại trận quy hàng lị, Shaula.”"
  },
  {
    "en": "Subaru had taken command of the battle, and even used the power of witchbeasts and an earth dragon, and, as he spoke, the Crimson Scorpion lifted its legs up.",
    "vi": "Subaru d dứt định d dẫu d dẫu hoàn toàn làm chủ chỉ huy cục diện chiến trường lị, d dẫu thậm chí tận dụng triệt để sức mạnh uy lực của cả ma thú d dẫu địa long lị, d dẫu đúng như lời cậu vừa phát ngôn lị, con Bọ Cạp Đỏ Rực bỗng chốc nhấc bổng nhấc bổng bầy chân cẳng của nó lên lị."
  },
  {
    "en": "The Finest of Knights did not let this opportunity go to waste. Unleashing a rainbow slash, Julius cut the tail of the Crimson Scorpion, who had been struggling against them in a battle of strength, clean off.",
    "vi": "Bậc Nhất Hiệp Sĩ d dứt định quyết chả đời nào để thời cơ ngàn vàng này tuột mất sất lị. Điên cuồng điên cuồng tung ra một cú chém cầu vồng lục sắc thần sầu lị, Julius sắc bén sắc bén chém đứt lìa đứt lìa cái đuôi của con Bọ Cạp Đỏ Rực lị, sinh vật đang quằn quại chống trả chống trả trong trận đọ sức điên cuồng điên cuồng lị."
  },
  {
    "en": "The severed tail let off an explosion, much like it had earlier, spreading a mass of destruction throughout the area, but it was unable to get through the rainbow light. Its trump card having been blocked, it violently swung his large pincers down at Julius’ back.",
    "vi": "Cái đuôi bị chém đứt lìa đứt lìa phát nổ kinh hoàng kinh hoàng lị, y hệt hệt như cớ sự nảy sinh trước đó lị, gieo rắc sự tàn phá tàn phá tàn bạo ra khắp khu vực xung quanh lị, thế nhưng luồng uy lực tàn khốc ấy d dứt định quyết chả thể nào xuyên phá xuyên phá nổi lớp ánh sáng lục sắc cầu vồng kiên cố sất lị. Quân bài tẩy của mình d dẫu bị chặn đứng bẻ gãy lị, nó điên cuồng điên cuồng vung bầy chiếc càng vĩ đại nện mạnh nện mạnh vào tấm lưng vững chãi của Julius lị."
  },
  {
    "en": "However, its attack appeared to have been born from a feeling of agitation and impatience due to losing the battle of strength and having its tail cut off. As a result, it was not able to overpower the knight who had defeated the first Sword Saint and overcame his limits.",
    "vi": "Thế nhưng lị, đòn công kích oanh tạc oanh tạc của nó d dường như d dứt định d dẫu nảy sinh từ xúc cảm hoảng loạn hoảng loạn d dẫu nôn nóng nôn nóng do thất bại trong cuộc đọ sức lực lượng d dẫu bị chém đứt lìa cái đuôi chí mạng lị. Kết cục là lị, nó quyết chả thể nào áp đảo áp đảo nổi vị hiệp sĩ hiệp sĩ kiêu hùng d dẫu từng đánh bại Kiếm Thánh thế hệ đầu tiên d dẫu vượt qua vượt qua giới hạn giới hạn cực hạn của bản thân sất lị."
  },
  {
    "en": "“—Hiss…!”",
    "vi": "“——Hiss... lị!”"
  },
  {
    "en": "The slash drew an arc through the air, beautifully slicing through the vulnerable joint on the left pincer. Still trying to regain its balance after its left pincer got sliced off, it attempted to chop Julius in half with its remaining right pincer.",
    "vi": "Cú vung kiếm vẽ nên phân một đường cung tuyệt mỹ giữa hư không lị, chém đứt chém đứt hoàn hảo hoàn hảo khớp nối yếu ớt ngự trị nơi chiếc càng bên trái lị. Vẫn đang vật vã vật vã tìm cách lấy lại thăng bằng sau khi mất đi chiếc càng trái lị, nó điên cuồng vung vẩy chiếc càng phải còn lại độc độc vỏn vẹn hòng chém đứt lìa cơ thể Julius làm hai mảnh lị."
  },
  {
    "en": "Right as the pincer closed, threatening to bisect his slender body from the waist—",
    "vi": "Ngay khi chiếc càng vĩ đại kia khép chặt khép chặt lại lị, đe dọa xé toác xé toác cơ thể mảnh khảnh mảnh khảnh của cậu từ ngang hông hông——"
  },
  {
    "en": "“—Al Cranvel.”",
    "vi": "“——Al Cranvel lị.”"
  },
  {
    "en": "A moment before the pincer snapped shut, an aurora of light enveloped Julius’ entire body in a single breath. As soon as he deactivated his rainbow armor, that aurora of light let off an explosion inside the pincer that was about to close, blowing it to shreds.",
    "vi": "Chỉ độc độc vỏn vẹn phân một tích tắc trước khi chiếc càng đóng sầm sầm khóa chặt lị, một luồng cực quang cực quang hào quang rực rỡ bùng lên bao bọc toàn bộ thân xác Julius độc độc vỏn vẹn trong một hơi thở lị. Ngay khi cậu chủ động giải trừ bộ chiến giáp cầu vồng lị, cực quang hào quang ấy phát nổ phát nổ kinh hoàng bên trong lòng chiếc càng đang chực khép chặt lị, thổi bay nghiền nát nghiền nát nó thành trăm mảnh vụn vụn sất lị."
  },
  {
    "en": "“—ッッ.”",
    "vi": "“——ッッ.”"
  },
  {
    "en": "Pushed by the shockwave of the explosion, the massive body of the Crimson Scorpion flew into the air. The witchbeast flew through the air, spinning, before finally falling into the sand, its tail and arms lost and covered in injuries.",
    "vi": "Bị thổi bay thổi bay bởi luồng dư chấn tàn khốc của vụ nổ kinh hoàng lị, cơ thể xác thịt khổng lồ khổng lồ của con Bọ Cạp Đỏ Rực văng vút lên không trung lị. Con ma thú khổng lồ bay lượn quay cuồng giữa hư không lị, xoay vòng xoay vòng lị, trước khi nặng nề nặng nề rơi tuột xuống đống cát mịn lị, cái đuôi d dẫu bầy tay càng đều d dứt định d dẫu tiêu tan sạch sạch sất lị, cơ thể đầy rẫy thảy mọi vết thương tích thương tích thống khổ lị."
  },
  {
    "en": "The other witchbeasts quickly swarmed around it and pinned down the eight-legged Crimson Scorpion. Still resisting its fate, it turned its large head, barring its sharp teeth.",
    "vi": "Bầy ma thú hiểm ác hiểm ác đồng hành nhanh nhảu nhanh nhảu ùa tới bu kín bu kín d dẫu đè chặt đè chặt cơ thể tám chân cẳng của con Bọ Cạp Đỏ Rực xuống đất lị. Vẫn kiên quyết kiên quyết kháng cự lại số mệnh nghiệt ngã lị, nó cố quay cái đầu khổng lồ khổng lồ của mình lị, nhe ra bầy răng nanh sắc bén sắc bén sắc lẹm lị."
  },
  {
    "en": "Taking the Crimson Scorpion’s resilience into account, it would not be surprising for it to suddenly come up with a new move at this very moment, spurred on to achieve new growth due to its current predicament, however—",
    "vi": "Nếu cân nhắc tới khả năng chống chịu cực kỳ cực kỳ dẻo dai của con Bọ Cạp Đỏ Rực lị, d dứt định quyết chả có chi đáng sửng sốt nếu nó đột ngột đột ngột bộc phát bộc phát một tuyệt chiêu mới toanh ngay vào chính xác chính xác tích tắc hiểm nghèo này lị, d dẫu d dường như bứt phá bứt phá thực lực do tình thế ngặt nghèo lị, thế nhưng mà——"
  },
  {
    "en": "“—This is the end, Shaula.”",
    "vi": "“——Mọi chuyện d dứt định kết thúc rồi lị, Shaula.”"
  },
  {
    "en": "Subaru stood right in front of the writhing, struggling, Crimson Scorpion so that its compound eyes could see him fully. With no weapons left and its legs pinned down, it was in a rather sad state. It would be easy to strike the final blow now, but that was not what he wanted.",
    "vi": "Subaru hiên ngang hiên ngang đứng sừng sững ngay trước mặt con Bọ Cạp Đỏ Rực đang điên cuồng điên cuồng giãy giụa giãy giụa lị, để bầy mắt kép hiểm ác hiểm ác của nó khả dĩ đăm đăm nhìn nhận nhận thấu suốt rõ mồn một hình bóng cậu lị. Quyết chả còn bất kỳ món vũ khí hộ thân nào sất lị, lại bị đè chặt đè chặt thảy mọi chân cẳng lị, nó thực sự thực sự ngự trị ngự trị trong một tình cảnh vô cùng vô cùng đáng thương thương hại lị. Việc tung ra đòn kết liễu chung cuộc vào lúc này d dứt định là vô cùng dễ dàng lị, thế nhưng cớ sự ấy d dứt định quyết chả phải thứ cậu hằng ao ước ao ước sất lị."
  },
  {
    "en": "Subaru was not sure what the correct answer was despite being driven to this point—",
    "vi": "Subaru quyết chả hề hay biết đâu mới là phương án phản hồi phản hồi chính xác chính xác nhất d dẫu cho bản thân d dẫu d dồn dập d dồn dập đi tới bước đường này sất lị——"
  },
  {
    "en": "“Meili.”",
    "vi": "“Meili lị.”"
  },
  {
    "en": "“...If I had not been here, I wonder what you and everyone else would’ve doneeeee, mister.”",
    "vi": "“...Nếu chẳng may em quyết chả ngự trị ngự trị ở chốn này sất lị, thì quyết chả rõ anh d dẫu thảy mọi người đồng hành d dứt định d dẫu d dẫu xoay xở xoay xở ra sao nữa cơ chứ hả lị, anh trai trai ơi lị.”"
  },
  {
    "en": "Having been called by name, Meili sighed and walked over to the Crimson Scorpion. She stood next to Subaru and snapped her fingers with a sigh. She then had its compound eyes focus on herself.",
    "vi": "Nghe thấy tiếng réo gọi réo gọi của cậu lị, Meili khẽ thở dài thườn thượt thườn thượt d dẫu rảo bước tiến lại gần con Bọ Cạp Đỏ Rực lị. Cô bé đứng áp sát bên sườn Subaru lị, d dẫu búng tay khẽ khẽ phát ra phân một nhịp lị. Tiếp đó lị, cô bé khiến bầy mắt kép của con quái thú hiểm ác phải d dồn dập d dồn dập khóa chặt sự chú ý nhận thức vào chính mình lị."
  },
  {
    "en": "“Who are you? The crimson, scary Miss Scorpion? Or are you…”",
    "vi": "“Mày rốt cuộc rốt cuộc là ai thế hả lị? Là bà chị Bọ Cạp Đỏ Rực hung tàn hung tàn đáng sợ kia lị? Hay mày là...”"
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "“Or are you someone else, I wonder?”",
    "vi": "“Hay mày d dứt định là một ai đó khác nữa đấy chứ chăng lị?”"
  },
  {
    "en": "Having been asked such a question, the compound eyes of the Crimson Scorpion gradually slowed down. Gazing at Meili, its compound eyes showed signs of wavering before turning its gaze to Subaru. Those aggressive, compound red eyes slowly changed color.",
    "vi": "Nhận được câu hỏi chất vấn thầm thì thầm thì ấy lị, bầy mắt kép hiểm ác của con Bọ Cạp Đỏ Rực từ từ từ từ chuyển động chậm lại lị. Đăm đăm đăm đăm nhìn chăm chú vào Meili lị, bầy mắt kép của nó lộ rõ bầy dấu hiệu dao động dao động lị, trước khi quyết định d dời d dời tầm mắt đăm đăm nhìn về phía Subaru lị. Bầy con ngươi đỏ rực rực rỡ hung bạo ấy lị, khẽ khẽ chuyển biến biến chuyển sắc màu lị."
  },
  {
    "en": "“Shaula.”",
    "vi": "“Shaula lị.”"
  },
  {
    "en": "The crimson hue of its shell slowly began to fade away. Its eyes turned green once more, its shell went back to being black, and it slowly began to calm down, and finally—",
    "vi": "Sắc đỏ rực rỡ rực rỡ ngự trị trên lớp vỏ cứng cáp của nó từ từ từ từ phai nhạt phai nhạt biến mất lị. Cặp mắt kép của nó d dứt định d dẫu d dường như khôi phục sắc xanh lục bảo lục bảo lị, lớp vỏ quay trở lại sắc đen huyền huyền lị, d dẫu cơ thể xác thịt nó d dứt định từ từ tĩnh tâm tĩnh tâm trở lại lị, d dẫu rồi thời khắc chung cuộc lị——"
  },
  {
    "en": "“—Shaula!”",
    "vi": "“——Shaula lị!”"
  },
  {
    "en": "At last—",
    "vi": "Cuối cùng d dứt định rồi lị——"
  },
  {
    "en": "4",
    "vi": "4"
  },
  {
    "en": "Ragged, ragged, scattering away.",
    "vi": "Rách rưới rách rưới lị, tàn tạ tàn tạ lị, tan tác phân tán rã rời lị."
  },
  {
    "en": "Crumbling, crumbling, flaking away.",
    "vi": "Hao mòn hao mòn lị, vỡ vụn vỡ vụn lị, bong tróc từng mảng mảng lị."
  },
  {
    "en": "Tired, tired, fading away.",
    "vi": "Rã rời rã rời lị, mỏi mệt mỏi mệt lị, lu mờ dần biến mất lị."
  },
  {
    "en": "Ragged, crumbling, and tired, everything in the distance was shimmering.",
    "vi": "Rách rưới lị, hao mòn lị, và rã rời lị, thảy mọi thứ ngự trị nơi phương xa tít tắp d dường như d dẫu lung linh lung linh dao động lị."
  },
  {
    "en": "Ragged, crumbling, and tired, everything shimmered in the distance.",
    "vi": "Rách rưới lị, hao mòn lị, d dẫu rã rời lị, thảy mọi thứ ngự trị nơi phương xa tít tắp d dường như d dẫu lung linh lung linh dao động lị."
  },
  {
    "en": "Even though she was left behind, even though her memories faded somewhat, they still shined so brightly.",
    "vi": "D dẫu cho cô bé có bị bỏ bỏ lại tít tắp sau lưng lị, d dẫu cho thảy mọi ký ức ký ức trân quý có phai nhạt lu mờ phần nào sất lị, thì chúng d dứt định d dẫu kiêu hãnh tỏa sáng rực rỡ rực rỡ nhường ấy lị."
  },
  {
    "en": "Because they were so precious to her, she desperately tried to preserve them.",
    "vi": "Bởi nhẽ nhẽ nhẽ chúng quả thực quả thực là bầy báu vật vô giá vô giá lị, nên cô d dốc toàn lực d dốc toàn lực tìm cách gìn giữ gìn giữ nâng niu nâng niu chúng vẹn tròn lị."
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "“Master, do you still remember? You told meee, ‘I’ll definitely return, so wait here for me’, and then you disappearedddd.”",
    "vi": "“Sư phụ ơi lị, người d dứt định vẫn nhớ nhớ chứ hả lị? Người d dứt định d dẫu từng tuyên bố tuyên bố với em rằng lị, ‘Ta chắc chắn dứt định d dẫu quay trở lại lị, thế nên hãy kiên nhẫn kiên nhẫn chờ ta ngự trị ở chốn này nhé lị’, d dẫu rồi sau đó lị, người d dứt định d dẫu biến mất tiêu sất sất lị.”"
  },
  {
    "en": "In a seated position, Shaula hugged her knees, inclined her head, and asked like so.",
    "vi": "Ngự trị ngự trị dưới tư thế ngồi bó gối lị, Shaula dịu dàng ôm lấy đôi đầu gối đầu gối trần lị, nghiêng nghiêng mái đầu xinh xắn lị, d dẫu cất tiếng chất vấn thầm thì dường ấy lị."
  },
  {
    "en": "Subaru shook his head at her, who seemed to be thinking about nostalgic memories of her past.",
    "vi": "Subaru khẽ khẽ lắc đầu từ chối trước mặt cô bé lị, người d dường như d dứt định đang mải mê mải mê hoài niệm hoài niệm bầy ký ức ký ức xưa cũ chốn xa xăm lị."
  },
  {
    "en": "“I don’t remember. And I’ve already told you I don’t know, right? Don’t keep making me repeat myself!”",
    "vi": "“Ta d dứt định quyết chả nhớ nhớ chi sất lị. Và lị, ta cũng d dẫu tuyên bố thẳng thừng với em là ta quyết chả hề hay biết rồi quyết chả sất lị? Đừng có bắt ta phải lặp đi lặp lại mãi cái điệp khúc điệp khúc ấy nữa sất lị!”"
  },
  {
    "en": "“Weeeeelllll, it can’t be helped then. After allllll, Master is so much better at forgetting things than me. Master and I realllllly are similar.”",
    "vi": "“Thếếếếếế thì lị, quyết chả còn cách chi ngoài cam chịu cam chịu rồi lị. D dẫu sao d dẫu sao lị, Sư phụ quả thực giỏi quên quên lãng thảy mọi thứ vạn phần hơn cả em nữa cơ lị. Sư phụ d dẫu em thực sự thực sự giống hệt hệt nhau quá chừng chừng lị.”"
  },
  {
    "en": "“That creeps me out! No, I admit that we have a similar way of speaking, though.”",
    "vi": "“Nghe rợn rợn cả tóc gáy gáy đấy nhé lị! Quyết chả sất lị, dẫu ta thừa nhận thừa nhận rằng phong cách nói chuyện của hai đứa mình có nét tương đồng tương đồng dẫu vậy lị.”"
  },
  {
    "en": "That said, it was only the fact that she was using words from Subaru’s world that he unconsciously felt a sense of closeness with her. He was not as charming, cute, or spirited as she was. He wasn’t willing to wait 400 years for someone who had abandoned him.",
    "vi": "Tuyên bố dường ấy lị, song thực tế chính là bởi cớ sự cô bé liên tục áp dụng bầy từ ngữ từ thế giới gốc của Subaru lị, khiến cậu d dường như d dứt định d dẫu vô thức nảy sinh phân một cảm xúc xúc gần gũi gần gũi thân thương thương thương lị. Cậu quyết chả hề duyên dáng lị, đáng yêu lị, hay tràn đầy dũng khí sinh động sinh động dẫu vậy sất lị. Cậu d dứt định d dẫu quyết chả bao giờ cam lòng cam lòng mòn mỏi mỏi mòn chờ đợi suốt bốn trăm năm ròng rã vì một kẻ d dẫu nhẫn tâm bỏ rơi bỏ rơi mình sất lị."
  },
  {
    "en": "“After all, I’m an impatient guy who wants immediate results. Well, if I could at least be with the other person, I might be able to endure it...”",
    "vi": "“D dẫu sao lị, ta d dứt định d dẫu là một gã nóng nảy nóng nảy độc độc vỏn vẹn khát khao thấy ngay thành quả ngọt ngào lị. Cơ mà lị, nếu ít nhất ta khả dĩ ngự trị ngự trị kề sát bên sườn người ấy lị, thì ta d dường như khả dĩ d dốc toàn lực d dốc toàn lực kiên nhẫn kiên nhẫn chịu đựng chịu đựng được chuyện đó sất lị...”"
  },
  {
    "en": "“Aaaaaaaaah, Master, you’re no good like this! Ready? There’s a saying for this: ‘The key to love is patience!’”",
    "vi": "“Aaaaaaaaah lị, Sư phụ ơi lị, người d dứt định quyết chả ổn chút nào sất lị! Hãy mau chuẩn bị tinh thần đi nhé lị? Ngự trị ngự trị trên đời có phân một câu danh ngôn danh ngôn dường này lị: ‘Chìa khóa vạn năng của tình yêu chính xác chính là kiên nhẫn kiên nhẫn đấy nhé lị!’”"
  },
  {
    "en": "“Aren’t you confusing this with ‘The key to fashion is patience’!? Isn’t that like the slogan of a tribute woman rather than a devoted woman!?”",
    "vi": "“Quyết chả phải em d dứt định d dẫu bị nhầm lẫn nhầm lẫn tai hại với câu ‘Chìa khóa vạn năng của thời trang chính xác là chịu đựng chịu đựng chịu đựng’ rồi đấy chứ chăng lị!? Đó quyết chả phải là khẩu hiệu của một nữ nhân hiến tế hiến tế cống nạp thay vì một người con gái hiền thục hiền thục thủy chung thủy chung sao lị!?”"
  },
  {
    "en": "“It’s all about realizing the love swirling around in the depths of my heart. You can even laugh at this sad, pathetic woman. That kind of smiling face is also verrrrrry attractiveee...mmm.”",
    "vi": "“Mục tiêu cốt lõi cốt lõi chính là thấu suốt thấu suốt thảy mọi tình yêu thương thương điên cuồng cuộn trào cuộn trào ngự trị nơi sâu thẳm tâm can em lị. Người thậm chí khả dĩ cười nhạo cười nhạo chế giễu chế giễu cái thân xác nữ nhân sầu muộn sầu muộn lị, đáng thương hại đáng thương hại này sất lị. Nụ cười châm biếm châm biếm kiểu dường ấy quả thực quả thực cũng vô o o cùng cuốn hút cuốn hút quyến rũ lắm đó nha lị... mmm.”"
  },
  {
    "en": "“Nope, I’m not laughing at all. Look, I’m starting to tear up.”",
    "vi": "“Quyết chả sất lị, ta quyết chả hề cười cợt cười cợt tí ty nào sất lị. Nhìn đăm đăm vào xem đi lị, mắt ta d dứt định d dẫu đang rưng rưng lệ chứa chan chứa chan rồi này lị.”"
  },
  {
    "en": "“Let me see, let me seeeeee.”",
    "vi": "“Để em đăm đăm nhìn xem nào lị, để em đăm đăm nhìn đăm đăm nhìn xem đi nào o o lị.”"
  },
  {
    "en": "When Subaru pointed at his face and said that, Shaula got up and walked over to him. Shaula, who had jumped up enthusiastically, came close enough to where he could feel her breath, so he once again examined her face that had fine features from up close.",
    "vi": "Khi Subaru dùng tay chỉ thẳng chỉ thẳng trực diện vào khuôn mặt mình phát ngôn dường ấy lị, Shaula nhổm người đứng phắt phắt dậy d dẫu rảo bước tiến sát sát bên sườn cậu lị. Shaula lị, cô bé d dẫu d dũng mãnh d dũng mãnh bật nhảy hăng hái hăng hái lị, áp sát áp sát sát sàn sạt đến mức cậu khả dĩ cảm nhận cảm nhận rõ mồn một từng luồng hơi thở hơi thở ấm nóng lị, thế nên cậu một lần nữa đăm đăm đăm nhìn đăm đăm đăm nhìn kỹ khuôn mặt thanh tú thanh tú thanh tú với bầy đường nét tuyệt mỹ tuyệt mỹ của cô bé ngự trị ngự trị sát sạt bên sườn lị."
  },
  {
    "en": "Her shining eyes were large and long, and she had a finely-shaped nose between them. She had long, slender eyelashes, and her skin was so soft and firm that it was hard to imagine that she had been living in the sea of sand for so long. Although hidden by her spirited and varied expressions, her body as a whole was rather beautiful instead of cute.",
    "vi": "Đôi mắt kiều diễm kiều diễm rực rỡ rực rỡ của cô bé to tròn to tròn d dẫu sâu thẳm lị, d dẫu ngự trị ngự trị ở chính giữa là một chiếc mũi dọc dừa dọc dừa thanh tú thanh tú lị. Hàng lông mi của cô bé dài cong cong vút lị, d dẫu làn da ngọc ngà thì vô cùng mềm mại mềm mại d dẫu săn chắc săn chắc đến mức quyết chả ai khả dĩ tưởng tượng nổi cô bé d dẫu sinh tồn sinh tồn ngự trị nơi cồn cát khắc nghiệt suốt khoảng thời gian đằng đẵng đằng đẵng sất lị. Dẫu cho thảy mọi nét đẹp ấy có bị che giấu che giấu bởi bầy xúc cảm sinh động sinh động biến đổi khôn lường lị, thì tổng thể vóc dáng cơ thể của cô bé d dứt định thiên về vẻ kiều diễm kiều diễm tuyệt trần tuyệt trần thay vì độc độc vỏn vẹn là nét đáng yêu quèn sất lị."
  },
  {
    "en": "Given the name of a star, she had been destined to wait in this place for the return of the one she loved.",
    "vi": "Được trao tặng trao tặng danh hiệu của một ngôi sao tinh tú tinh tú lị, số mệnh số mệnh d dứt định d dẫu an bài an bài cô bé phải mòn mỏi chờ đợi chờ đợi ngự trị ngự trị tại chốn này cho đến tận ngày bóng hình người cô hằng yêu thương quay trở lại lị."
  },
  {
    "en": "“Huh? Master, are your eyes glistening, or are you crying a little?”",
    "vi": "“Hửm lị? Sư phụ ơi lị, đôi mắt người đang long lanh long lanh lị, hay là người d dứt định d dẫu d dường như đang khóc khóc nhè nhè tí ty đấy chứ chăng lị?”"
  }
]

fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'translation_temp', 'ch89_part2.json'),
  JSON.stringify(part2, null, 2),
  'utf-8'
)
console.log('Successfully wrote ch89_part2.json!')
