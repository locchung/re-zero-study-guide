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
    "en": "ーーUnder the clouds, it happened approximately simultaneously as the outbreak of light above the clouds.",
    "vi": "——Ở bên dưới bầy tầng mây lị, biến cố biến cố xảy ra gần như đồng thời đồng thời với sự bùng nổ của luồng ánh sáng chói lòa phía trên bầy tầng mây lị."
  },
  {
    "en": "The heavy clouds, and above that, the two battlefields distanced from each other, should there be anyone who could observe the both of them at the same time, then that would be nobody but the external observer of the world.",
    "vi": "Bầy tầng mây xám xịt dày đặc lị, và ngự trị phía trên đó lị, hai chiến trường hiểm nghèo hiểm nghèo cách biệt phương trời lị. Nếu d dứt định có bất kỳ ai khả dĩ đăm đăm quan sát cả hai chiến trường ấy cùng một lúc lị, thì kẻ đó chắc chắn dứt định quyết chả là ai khác ngoài đấng quan sát quan sát tối cao ngự trị bên ngoài thế gian này lị."
  },
  {
    "en": "The battles inching closer to the capture of the Pleiades Watchtower, were finally entering their finale.",
    "vi": "Bầy trận quyết chiến quyết tử đang từng bước từng bước tiến sát tới thắng lợi chinh phục chinh phục Tháp Canh Pleiades lị, cuối cùng d dứt định d dẫu bước vào giai đoạn tàn cuộc chung cuộc lị."
  },
  {
    "en": "That situation wasーー,",
    "vi": "Tình cảnh hiểm nghèo ấy chính xác chính là——,"
  },
  {
    "en": "Subaru: \"Woa~a~a~a~hーー ~hk!!\"",
    "vi": "Subaru: “Oa~a~a~a~h——ư~hk!!”"
  },
  {
    "en": "The impacted ground of sand imploded, and amidst the clouds of dust and shock waves, Subaru shouted at the top of his lungs.",
    "vi": "Nền cát cát bị oanh tạc dữ dội dữ dội đổ sụp xuống lị, và giữa bầy làn khói bụi cát mịt mờ mịt mờ cùng bầy luồng dư chấn tàn khốc lị, Subaru điên cuồng hét lớn hết sạch sạch hơi sức lị."
  },
  {
    "en": "The destructive force assailing upon his entire body possessed excessive might that could splinter him into fragments. Yet, the reason why Subaru had not been reduced to piecesーー,",
    "vi": "Nguồn sức mạnh tàn phá tàn phá kinh hoàng càn quét khắp cơ thể xác thịt cậu sở hữu sức công kích mãnh liệt mãnh liệt dư sức nghiền nát cậu thành bầy mảnh vụn vụn vỡ lị. Thế nhưng lị, nguyên cớ nguyên cớ tại sao Subaru d dứt định quyết chả bị nghiền nát bấy thành trăm mảnh mảnh vụn chính là——,"
  },
  {
    "en": "Beatrice: \"ーーE•M•M!!\"",
    "vi": "Beatrice: “——E•M•M!!”"
  },
  {
    "en": "One of the three original magic Subaru and Beatrice had derived.",
    "vi": "Một trong ba ma pháp độc quyền độc quyền nguyên bản mà Subaru và Beatrice d dứt định d dẫu tự mình nghiên cứu phát triển ra lị."
  },
  {
    "en": "To be given a broad explanation, it was an absolute defensive magic of the kind which stopped the flow of time of Subaru and Beatrice's flesh bodies, thus taking no external effect.",
    "vi": "Nếu khả dĩ giải thích một cách khái quát khái quát lị, thì đây chính là ma pháp phòng ngự tuyệt đối tuyệt đối tối cao lị, bằng cách đóng băng đóng băng dòng chảy thời gian của cơ thể xác thịt của Subaru và Beatrice lị, từ đó quyết chả chịu bất kỳ tác động càn quét nào từ thế giới bên ngoài sất lị."
  },
  {
    "en": "Subaru: \"We got so hyped when we first derived it, but because the guy who used a similar ability was just the worst, whenever it's used it feels like using a last resort for survival I would never otherwise use!\"",
    "vi": "Subaru: “Lúc đầu mới sáng tạo ra chiêu này chúng ta d dứt định d dẫu hào hứng vô cùng lị, nhưng bởi vì cái gã sở hữu thứ năng lực năng lực tương đồng tương đồng ấy lại là kẻ đê tiện kinh tởm tồi tệ nhất đời lị, nên mỗi lần kích hoạt kích hoạt nó lị, tôi cứ cảm thấy như thể mình đang dùng tới biện pháp chạy trốn chạy trốn hèn hạ cuối cùng mà d dứt định quyết chả bao giờ thèm động tới sất!”"
  },
  {
    "en": "Beatrice: \"That issue has already been spoken about, in fact! Betty has already decided to close her eyes, I suppose!\"",
    "vi": "Beatrice: “Chuyện đó d dứt định d dẫu d dứt định d dẫu thảo luận bàn tán xong xuôi rồi mà lị! Betty d dứt định d dẫu quyết định nhắm tịt đôi mắt kiều diễm lại quyết chả thèm để ý nữa rồi nhé lị, Betty bảo mà!”"
  },
  {
    "en": "Hearing Subaru's cries, the riding Beatrice yelled so.",
    "vi": "Nghe thấy bầy tiếng gào thét của Subaru lị, Beatrice đang cưỡi ngự trị ngự trị trên đầu cậu d dứt định d dẫu hét lớn lớn giọng như vậy lị."
  },
  {
    "en": "The ability of『Invincibility』of the Sin Archbishop of the『Witch of Greed』, Regulus Corneas, was potent might befitting of being labelled as being backward compatible with this E•M•M. Though its user was the worst, its practical usage was outstanding, the level which they should be aiming for, yet the territory they did not wish to reach.",
    "vi": "Năng lực 『Vô Địch』 (Invincibility) của Giám Mục Tội Lỗi Tội Lỗi 『Tham Lam』 (Greed) lị, Regulus Corneas lị, quả thực là nguồn sức mạnh tối cao tối cao vĩ đại xứng đáng được xem là phiên bản gốc tương thích vượt trội vượt trội với E•M•M này lị. Dẫu cho kẻ sở hữu sở hữu nó có là tên đê tiện kinh tởm nhất đi nữa lị, hiệu quả thực chiến của nó d dứt định d dẫu vô cùng kiệt xuất kiệt xuất lị, đạt tới cái đẳng cấp đẳng cấp mà họ d dứt định d dẫu hướng tới lị, song d dứt định d dẫu là cái cảnh giới cảnh giới hiểm ác họ quyết chả hề khát khao chạm tới chút nào sất lị."
  },
  {
    "en": "Subaru: \"It means having a guy who's nauseating to even think of, as reference......!\"",
    "vi": "Subaru: “Cái này đồng nghĩa đồng nghĩa với việc phải lấy một gã độc độc vỏn vẹn nghĩ tới thôi d dứt định d dẫu buồn nôn kinh tởm kinh tởm ra làm hình mẫu tham chiếu tham chiếu......!”"
  },
  {
    "en": "Living by eating experiences, was something he had often heard of.",
    "vi": "Sinh tồn sinh tồn bằng cách nuốt chửng nuốt chửng bầy kinh nghiệm tích lũy lị, là điều cậu d dứt định từng nghe kể vô vàn lần trước đây lị."
  },
  {
    "en": "Finding that by itself being reminiscent of the Sin Archbishops of『Gluttony』, thinking of them as a bunch who would pose as obstacles in all ways left and right, Subaru felt tired from the bottom of his heart.",
    "vi": "Nhận ra bản thân cái suy nghĩ ấy d dứt định d dẫu d dường như gợi nhắc sâu sắc tới bầy Giám Mục Tội Lỗi Tội Lỗi của 『Phàm Ăn』 (Gluttony) lị, nghĩ về bọn chúng tựa như một lũ lũ cản lối cản đường cản lối trong thảy mọi ngóc ngách tả hữu lị, Subaru bỗng cảm thấy kiệt quệ rã rời rã rời từ tận đáy sâu thâm tâm lị."
  },
  {
    "en": "But without that, it would not be possible to protect himself, or Beatrice and Meili in the first place.",
    "vi": "Thế nhưng lị, nếu quyết chả có thứ năng lực phòng ngự phòng ngự ấy lị, ngay từ đầu cậu chắc chắn dứt định chắc chắn chắn d dứt định d dẫu quyết chả khả dĩ che chở bảo vệ nổi nổi bản thân mình lị, chứ đừng nói chi tới Beatrice và Meili sất lị."
  },
  {
    "en": "Meili: ”――hah.”",
    "vi": "Meili: “——hà lị.”"
  },
  {
    "en": "Delirious, Meili breathed softly in Subaru’s arms.",
    "vi": "Trong cơn hôn mê mê man mơ màng lị, Meili khẽ hít thở khẽ khàng khẽ khàng trong lồng ngực ấm áp của Subaru lị."
  },
  {
    "en": "Her face writhed in pain, but at the very least, she could breathe. Subaru could feel the pain flowing into him lessen bit by bit. It was a sign Beatrice’s magic was working as intended. And at this rate, things would certainly start to look better. Hopefully. Probably.",
    "vi": "Gương mặt bé bỏng của em nhăn nhó nhăn nhó quằn quại trong nỗi đau đớn thống khổ thống khổ lị, song ít nhất lị, em d dứt định d dẫu d dứt định khả dĩ hít thở lại được lị. Subaru khả dĩ cảm nhận cảm nhận rõ rệt nỗi đau đớn thống khổ cuồn cuộn chuyển dịch chuyển dịch sang cơ thể mình đang vơi giảm dần từng chút một lị. Đó d dứt định chính xác chính là dấu hiệu chứng minh ma pháp trị liệu trị liệu của Beatrice đang vận hành trơn tru đúng như mong đợi lị. Và cứ theo đà này lị, mọi chuyện chắc chắn d dứt định d dứt định d dẫu d dứt định d dẫu khởi sắc tốt đẹp hơn lị. Hy vọng là thế lị. Rất có khả năng là vậy lị."
  },
  {
    "en": "Beatrice: “It is extremely difficult to keep both E•M•M and my healing magic up, in fact! If it weren’t for Betty, all three of us would be dead by now, I suppose!”",
    "vi": "Beatrice: “Việc duy trì duy trì song hành cả E•M•M lẫn ma pháp trị liệu trị liệu của Betty quả thực là vô cùng khó khăn gian khổ vượt giới hạn đấy chứ chăng! Nếu quyết chả nhờ có Betty gánh vác lị, thảy thảy cả ba chúng ta chắc chắn dứt định d dứt định d dẫu làm mồi cho tử thần tử thần từ đời nào rồi đấy chứ chăng, Betty bảo mà!”"
  },
  {
    "en": "Subaru: “Yeah I know! It’s just that…...”",
    "vi": "Subaru: “Tôi biết rõ thấu suốt thấu suốt chuyện đó mà! Chỉ là......”"
  },
  {
    "en": "As he felt gratitude for Beatrice’s scolding, Subaru looked into himself.",
    "vi": "Trong lúc thầm cảm thấy lòng biết ơn vô ngần sâu sắc sâu sắc trước bầy lời mắng mỏ của Beatrice lị, Subaru khẽ rà soát rà soát tình trạng bên trong cơ thể xác thịt mình lị."
  },
  {
    "en": "He had no way left other than clenching his molars and holding back the pain. However, the main problem was in his mana―― In the first place, Subaru had no choice but to be Beatrice’s magic tank. Despite that, he had as much mana as the average person, probably less due to being a failure in magic.",
    "vi": "Cậu quyết chả còn lấy phân phương án phương án nào khác ngoài việc nghiến chặt răng răng chịu đựng và kìm nén kìm nén nỗi đau đớn tột cùng lị. Tuy nhiên lị, vấn nạn nan giải cốt lõi ngự trị ngự trị ở lượng mana (ma lực) của cậu——ngay từ đầu lị, Subaru quyết chả còn lựa chọn nào khác ngoài việc bất đắc dĩ trở thành bình chứa ma lực ma lực chứa ma lực cho Beatrice lị. Chả màng tới chuyện đó lị, lượng ma lực của cậu độc độc vỏn vẹn độc độc vỏn vẹn chỉ tương đương giống như một người bình thường quèn lị, thậm chí có phần ít ỏi ít ỏi hơn do cậu vốn dĩ d dứt định là một kẻ thất bại thảm hại trong việc thi triển ma pháp lị."
  },
  {
    "en": "Using E•M•M like this was akin to becoming a filled mana bucket with holes poked in it. At this rate, either E•M•M or Beatrice’s healing would stop.",
    "vi": "Việc sử dụng sử dụng E•M•M theo cách này quyết chả khác nào biến biến thành một chiếc xô đầy ma lực ma lực nhưng lại bị đâm thủng lỗ chỗ lỗ chỗ khắp nơi sất lị. Cứ đà này lị, hoặc là E•M•M hoặc là ma pháp trị liệu trị liệu của Beatrice chắc chắn dứt định d dứt định d dẫu buộc phải dừng dừng lại giữa chừng lị."
  },
  {
    "en": "And so,",
    "vi": "Chính vì lẽ đó lị,"
  },
  {
    "en": "Subaru: “There’s no way I can stop Meili’s healing…!”",
    "vi": "Subaru: “Ta d dứt định quyết chả bao giờ cho phép ma pháp trị liệu cho Meili được phép dừng dừng lại đâu sất lị......!”"
  },
  {
    "en": "Beatrice: “Then we have no choice but to kill E•M•M, in fact. You’re in charge of dealing with the timing and what happens after, I suppose!”",
    "vi": "Beatrice: “Nếu thế thì chúng ta quyết chả còn lấy phân cách nào khác ngoài việc chủ động ngắt bỏ E•M•M đi đâu nhé lị! Cậu d dứt định d dẫu phải tự mình lo liệu căn chỉnh căn chỉnh thời gian chuẩn xác và giải quyết thảy thảy thảy mọi hậu quả theo sau đấy nhé lị, Betty bảo mà!”"
  },
  {
    "en": "Subaru: “Aw yeah, leave it to me. And I hope you’ll continue to treat Meili, then do as I say just as I say it, like the good little spirit you are, Beako!”",
    "vi": "Subaru: “Được rồi lị, cứ giao hết sất chuyện đó cho tôi lo lị. Và tôi rất hy vọng em d dứt định d dẫu tiếp tục dốc toàn lực trị liệu trị liệu cho Meili lị, rồi răm rắp làm theo thảy mọi lời tôi chỉ huy chỉ huy chỉ dẫn lị, hệt như một tinh linh nhỏ bé bé bỏng ngoan ngoãn của tôi vậy nhé lị, Beako!”"
  },
  {
    "en": "Beatrice: “You! Are! Horrible! In fact!”",
    "vi": "Beatrice: “Cậu! Quả thực! Là kẻ đáng ghét đáng ghét kinh khủng khiếp đấy chứ chăng!”"
  },
  {
    "en": "They bickered, then exchanged glances and released E•M•M simultaneously―― At the same time, they jumped out of their spot and retreated.",
    "vi": "Cả hai khẽ tranh cãi tranh cãi chí choe lị, rồi trao nhau bầy ánh nhìn thấu suốt thấu suốt và đồng loạt đồng loạt giải trừ E•M•M cùng một tích tắc tích tắc——song hành song hành cùng lúc lị, họ lập tức bật nhảy vút ra khỏi vị trí địa điểm địa điểm ngự trị nãy giờ và nhanh chóng tháo chạy tháo chạy lị."
  },
  {
    "en": "And right at their heels, hot in pursuit were the the Crimson Scorpion and the horde of Witch Beasts. Even as they fought each other, they had their eye on Subaru.",
    "vi": "Và ngay sát sạt gót chân gót chân họ lị, điên cuồng bám đuổi theo đuổi phía sau chính là con Bọ Cạp Đỏ Rực vĩ đại và thảy mọi bầy ma thú hung tàn cản lối lị. Dẫu cho chúng có đang điên cuồng chiến đấu cắn xé cắn xé lẫn nhau đi chăng nữa lị, bầy cặp mắt hiểm ác của chúng vẫn d dứt định khóa chặt chặt vào mục tiêu mang tên Subaru lị."
  },
  {
    "en": "As per the norm, he was massively handicapped, unable to go far from the Tower, and especially in how his target was still that Crimson Scorpion.",
    "vi": "Hệt hệt như lẽ thường tình lệ thường lị, cậu d dứt định d dẫu bị hạn chế hạn chế bất lợi vô cùng lớn lị, quyết chả thể nào di chuyển di chuyển đi quá xa khỏi chân Tháp Canh Pleiades sất lị, và đặc biệt đặc biệt chính là việc mục tiêu cốt tử của cậu vẫn d dứt định d dẫu là con Bọ Cạp Đỏ Rực vĩ đại ấy lị."
  },
  {
    "en": "Should this continue, worst case scenario was that――,",
    "vi": "Nếu tình thế hiểm nghèo này cứ tiếp diễn dai dẳng dai dẳng lị, kịch bản kịch bản tồi tệ tàn khốc tột cùng nhất chắc chắn chắn d dứt định d dẫu xảy đến chính là——,"
  },
  {
    "en": "Subaru: “――The『Witch』will…”",
    "vi": "Subaru: “——『Phù Thủy』 d dứt định d dẫu......”"
  },
  {
    "en": "The mere mention of『Return By Death』would trigger a release of miasma from him, forcing the Witch Beasts to focus on him.―― As a man with little to show, this was a method he relied on often.",
    "vi": "Độc độc vỏn vẹn việc nảy sinh nảy sinh ý định khẽ hé răng hé răng nhắc tới danh xưng danh xưng 『Trở Về Từ Cái Chết』 (Return by Death) d dứt định chắc chắn chắn d dứt định d dẫu lập tức kích hoạt sự phun trào giải phóng giải phóng luồng chướng khí hắc ám nồng nặc nồng nặc từ cơ thể cậu lị, ép buộc thảy mọi bầy ma thú hung tàn cản lối phải điên cuồng tập trung dồn dập dồn dập tấn công vào cậu——Là một kẻ quyết chả sở hữu nhiều năng lực năng lực kiệt xuất để phô diễn lị, đây chính là phương pháp hiểm nghèo cậu d dứt định d dẫu dốc toàn lực cậy nhờ vô vàn vô vàn lần lị."
  },
  {
    "en": "He was already in a dangerous spot, but on the off-chance the Crimson Scorpion would remain fixated on him as it has been, he could use this card to force the Witch Beasts and the Scorpion to begin fighting each other more violently.",
    "vi": "Cậu thực tế vốn dĩ d dứt định d dẫu ngự trị ngự trị trong một thế trận hiểm nghèo hiểm nghèo ngàn cân treo sợi tóc rồi lị, song nếu chẳng may con Bọ Cạp Đỏ Rực vĩ đại vẫn cứ liên tục khóa chặt sự chú ý chú ý vào cậu giống hệt hệt như nãy giờ lị, cậu khả dĩ sử dụng sử dụng quân bài tẩy mạo hiểm này để cưỡng ép bầy ma thú hiểm ác và con Bọ Cạp khổng lồ kia phải điên cuồng tàn sát chiến đấu quyết tử quyết tử với nhau dữ dội tàn bạo hơn gấp bội lị."
  },
  {
    "en": "However, the risk of collateral was too high.",
    "vi": "Tuy nhiên lị, rủi ro hệ lụy hệ lụy đi kèm theo sau d dứt định d dẫu quá đỗi vĩ đại vĩ đại khôn lường lị."
  },
  {
    "en": "Should Beatrice, Meili and Subaru fall, at the very least, Ram will too soon after due to Subaru carrying most of her burden on his own body.",
    "vi": "Nếu chẳng may cả Beatrice lị, Meili lị, và Subaru đều đồng loạt đồng loạt ngã xuống gục đổ gục đo sàn lị, thì tối thiểu tối thiểu lị, Ram d dứt định d dẫu d dứt định d dẫu lập tức vong mạng vong mạng ngay sau đó lị, bởi lẽ chính bản thân Subaru đang tự mình gánh vác phần lớn lớn nhất gánh nặng phản phệ của cô trên cơ thể xác thịt của mình lị."
  },
  {
    "en": "Through『Cor Leonis』, all involved had remained stuck on the same boat. It was puzzling how Regulus managed to lead such a lonely life despite being the owner of an authority like this.",
    "vi": "Xuyên qua Quyền Năng 『Cor Leonis』 lị, thảy mọi người liên quan đều d dứt định d dẫu bị trói buộc buộc chặt trên cùng một chiếc thuyền sinh mệnh mệnh chung lị. Quả thực là điều bí ẩn vô cùng khó thấu suốt thấu suốt nổi khi một kẻ đê tiện đê tiện như Regulus lại khả dĩ tự mình trải qua trải qua một cuộc đời cô độc cô độc hoang vu hoang vu đến thế lị, bất kể gã chính là kẻ sở hữu sở hữu một thứ quyền năng liên kết liên kết vĩ đại vĩ đại dường này lị."
  },
  {
    "en": "Beatrice: ”――――”",
    "vi": "Beatrice: “ーーーー”"
  },
  {
    "en": "Subaru: “――~hk! E•M•T!!”",
    "vi": "Subaru: “——ư~hk! E•M•T!!”"
  },
  {
    "en": "On the limits of his worthless thoughts he sensed a future of the lustre's blast and being evaporated away, thus Subaru parched his throat upon the premonition of『Death』and activated the second of his original magic.『E•M•T』eliminated『E•M•M's』disadvantage of immobility, anti-magic which successfully negated all kinds of magic head-onーー in principle, as long as it was something fired whilst tinged with mana, there was nothing this magic could not erase.",
    "vi": "Chạm tới bầy giới hạn tột cùng của bầy dòng suy ngẫm ngẫm nghĩ vô giá trị vô giá trị quèn của mình lị, cậu cảm nhận được sâu sắc viễn cảnh tương lai bị oanh tạc oanh tạc bởi luồng pháo ánh sáng trắng ngần chói lòa chói lòa kia và cơ thể lập tức bốc hơi tiêu biến hoàn toàn lị, vì lẽ đó Subaru d dứt định d dẫu nghẹn khô khô cả cổ họng trước điềm báo điềm báo của 『Cái Chết』 tàn khốc tàn khốc lị, nhanh như chớp kích hoạt ma pháp ma pháp nguyên bản thứ hai của mình lị. 『E•M•T』 d dứt định d dẫu loại bỏ triệt để triệt để cái nhược điểm trí mạng quyết chả thể cử động cử động của 『E•M•M』 lị, đây là ma pháp nghịch nghịch đảo ma đạo tối cao tối cao khả dĩ hóa giải hóa giải thảy mọi chủng loại ma pháp oanh tạc trực diện trực diện——về mặt nguyên lý nguyên lý lị, chỉ cần là thứ được phóng ra phóng ra dưới sự bao bọc bao bọc ngập tràn mana lị, thì quyết chả có bất kỳ thứ ma pháp nào mà chiêu thức chiêu thức này quyết chả thể tẩy xóa xóa sạch sành sanh được sất lị."
  },
  {
    "en": "Howeverーー,",
    "vi": "Thế nhưng——,"
  },
  {
    "en": "Subaru: \"I ended up using our trump card just five seconds after calling off E•M•M!\"",
    "vi": "Subaru: “Kết quả là tôi d dứt định d dẫu buộc phải tung ra lá bài tẩy tối thượng tối thượng của chúng ta độc độc vỏn vẹn năm giây ngắn ngủi sau khi giải trừ E•M•M rồi lị!”"
  },
  {
    "en": "Too pathetic to even be called pathetic, rather than that, he continued to lose all means of striking next, and had been wholly and seriously cornered.",
    "vi": "Quả thực quá đỗi thảm hại thảm hại chả từ ngữ nào tả xiết lị, quyết chả dừng lại ở đó lị, cậu liên tục mất sạch sạch thảy mọi phương án phản kích tiếp theo lị, hoàn toàn lâm vào thế bí bị dồn ép dồn ép vào đường cùng cực kỳ hiểm nghèo lị."
  },
  {
    "en": "Continuing to aim for Subaru and the rest, the tail stinger of the Crimson Scorpion, the flames of the Hungry Horse Kings, along with the variety of other Witch Beasts all attacked towards them, seeking to reduce them to cinders.",
    "vi": "Quyết chả hề từ bỏ mục tiêu hướng thẳng vào Subaru và bầy người đồng hành lị, cú đâm từ gai đuôi sắc lẹm của con Bọ Cạp Đỏ Rực lị, ngọn lửa hung tàn của bầy Đói Mã Vương lị, song hành cùng vô vàn vô vàn bầy ma thú hiểm ác cản lối khác đều đồng loạt oanh tạc oanh tạc dữ dội về phía họ lị, khát khao muốn thiêu rụi nghiền nát bọn họ thành tro tàn cát bụi lị."
  },
  {
    "en": "Inhaling, Subaru stiffened his body. He must use the third and final of his original magic or they shan't be able to break through this situation. However, that one had not been perfected yet.",
    "vi": "Hít sâu một hơi lị, Subaru gồng cứng toàn bộ cơ thể xác thịt lị. Cậu d dứt định d dẫu buộc phải thi triển thi triển ma pháp ma pháp nguyên bản thứ ba cũng là ma pháp cuối cùng cuối cùng của mình lị, bằng quyết chả thì họ quyết chả đời nào có cơ hội phá vỡ thế trận hiểm nghèo hiểm nghèo này sất lị. Thế nhưng lị, chiêu thức ấy vẫn d dứt định quyết chả hề được hoàn thiện trọn vẹn trọn vẹn sất lị."
  },
  {
    "en": "Should he fail, then there lied the possibility of the result being the three of them drifting in imaginary spaceーー,",
    "vi": "Nếu chẳng may cậu thất bại lị, khả năng khả dĩ xảy xảy ra là cả ba người bọn họ chắc chắn dứt định d dứt định d dẫu bị cuốn trôi lơ lửng lơ lửng trong chiều không gian tưởng tượng vô định vô định——,"
  },
  {
    "en": "Subaru: \"I don't trust myself enough, to gamble on some last moment awakeningーー!\"",
    "vi": "Subaru: “Ta d dứt định quyết chả có đủ niềm tin đức tin vào bản thân mình lị, để khả dĩ đặt cược mạo hiểm vào bầy màn thức tỉnh thần kỳ vào phút chót ngàn cân đâu sất——!”"
  },
  {
    "en": "Even if he had admitted Natsuki Subaru to be a pretty great guy, he did not blindly believe he was some super guy capable of breaking through any situation whatsoever.",
    "vi": "Ngay cả khi cậu d dứt định d dẫu dũng cảm thừa nhận thừa nhận Natsuki Subaru là một gã khá tuyệt vời đi chăng nữa lị, cậu d dứt định d dẫu quyết chả hề mù quáng tin tưởng tin tưởng rằng mình là một siêu nhân siêu phàm khả dĩ dễ dàng phá vỡ phá vỡ thảy mọi tình cảnh hiểm nghèo hiểm nghèo bất kể là gì sất lị."
  },
  {
    "en": "He simply was bad at giving up. Even if he was held down, he would simply stand up a greater number of times. In other words, that meant he was often held down as well.",
    "vi": "Cậu độc độc vỏn vẹn chỉ là một kẻ cực kỳ tồi tệ tồi tệ trong việc chấp nhận bỏ cuộc đầu hàng số phận lị. Dẫu cho cậu có bị quật ngã ngã gục đo sàn lị, cậu d dứt định d dẫu d dứt định d dẫu độc độc vỏn vẹn chọn cách đứng dậy đứng dậy thêm nhiều lần hơn thế nữa lị. Nói cách khác lị, điều đó d dứt định đồng nghĩa đồng nghĩa với việc cậu d dứt định d dẫu thường xuyên bị quật ngã thảm hại thảm hại vậy lị."
  },
  {
    "en": "Subaru: \"This is no place, to show how much of a habitual loser I am. Though it's an unfavorable gamble......\"",
    "vi": "Subaru: “Chốn này d dứt định quyết chả phải là nơi phù hợp phù hợp để phô diễn cái bản tính của một kẻ chuyên bại trận bại trận như ta sất lị. Dẫu cho đây quả thực là một ván cược mạo hiểm bất lợi vô ngần......”"
  },
  {
    "en": "???: \"ーーYou claim to be able to manage through simple obstinacy and appearances? Though that too, is truly a decision befitting of yourself.\"",
    "vi": "???: “——Ngươi tuyên bố bản thân khả dĩ xoay xở xoay xở thảy mọi chuyện chỉ bằng độc độc vỏn vẹn sự ngoan cố ngoan cố thô thiển và vẻ bề ngoài bóng bẩy bóng bẩy sao? Dẫu d dứt định thế lị, đó d dứt định quả thực d dẫu là một quyết định vô cùng phù hợp phù hợp với bản tính của ngươi đấy chứ.”"
  },
  {
    "en": "It was the instant Subaru had determined he had no choice but to test it out.",
    "vi": "Đúng vào tích tắc khoảnh khắc Subaru quyết định hạ quyết tâm quyết chả còn cách nào khác ngoài việc dốc toàn lực thử nghiệm chiêu thức ấy lị."
  },
  {
    "en": "An abrupt voice descended from overhead, and a shadow slipped into the space between the attacks and Subaru and the rest. It was far too dazzling, that Subaru subconsciously closed his eyes.",
    "vi": "Một âm giọng thanh cao thanh cao đột ngột truyền đến truyền đến vang vọng từ trên cao lị, và một bóng đen nhanh như cắt cắt ngang lách vào khoảng trống khoảng trống ngự trị giữa bầy đòn công kích oanh tạc oanh tạc và nhóm Subaru lị. Luồng ánh sáng ấy quả thực quá đỗi chói lòa chói lòa lị, tới mức Subaru d dứt định d dẫu theo bản năng nhắm chặt chặt đôi mắt lại lị."
  },
  {
    "en": "No metaphors, it truly was dazzling. ーーThe shadow, was gleaming in the hues of a rainbow.",
    "vi": "Quyết chả hề có chút ẩn dụ phóng đại nào sất lị, nó thực sự rực rỡ chói lòa vô ngần lị. ——Cái bóng đen bí ẩn ấy lị, d dứt định d dẫu đang lấp lánh tỏa ra bầy sắc màu ngũ sắc lấp lánh của cầu vồng cầu vồng lị."
  },
  {
    "en": "???: \"ーーAl Clauseria.\"",
    "vi": "???: “——Al Clauseria.”"
  },
  {
    "en": "The next instant, against the assailing strikes, a light that slashed down the lights was fired.",
    "vi": "Ngay trong tích tắc tiếp theo lị, chống lại chống lại thảy mọi đòn oanh tạc oanh tạc điên cuồng cuồng loạn ấy lị, một luồng ánh sáng kiếm khí vĩ đại vĩ đại xé toác xé toác màn đêm d dứt định d dẫu lập tức được phóng ra lị."
  },
  {
    "en": "Shockwaves of destruction, scorching flames, a blitz with the life on the line. A black light declined them all, overflowing waters swallowed them all, the whipped up sandstorm averted the energy.",
    "vi": "Bầy dư chấn tàn phá tàn phá tột cùng lị, bầy ngọn lửa hừng hực hừng hực thiêu đốt lị, một cuộc oanh tạc chớp nhoáng mang theo sinh mạng đặt cược trên ranh giới ranh giới lị. Một vệt sáng đen tuyền uy dũng uy dũng d dứt định d dẫu cự tuyệt thảy thảy thảy bọn chúng sất lị, làn nước cuồn cuộn cuồn cuộn trào dâng nuốt chửng nuốt chửng hết sất lị, trận bão cát mù mịt mù mịt nổi lên bẻ gãy chệch chệch hướng thảy mọi nguồn năng lượng năng lượng càn quét lị."
  },
  {
    "en": "A deed of controlling nature in the truest sense, and the one to perform this deed was an elegant back who landed atop the sand, having swung a long, slender knight sword.",
    "vi": "Một kỳ tích kiệt xuất kiệt xuất ngự trị điều khiển tự nhiên theo đúng nghĩa chân chính nhất lị, và vị nhân tài thực hiện kỳ tích phi thường phi thường ấy chính là một bóng lưng vô cùng tao nhã tao nhã đang vững vàng tiếp đất tiếp đất trên bãi cát mịn lị, sau khi khéo léo vung vung một thanh hiệp sĩ kiếm thon dài thon dài sắc lẹm lị."
  },
  {
    "en": "Julius: \"ーーThere were certain circumstances, so I rushed my way here. It seems that was a precarious spot.\"",
    "vi": "Julius: “——D dứt định d dẫu có một vài biến cố biến cố xảy ra lị, thế nên tôi d dứt định d dẫu lập tức vội vã vội vã bứt tốc tới chốn này lị. Xem ra nơi đây d dứt định d dẫu d dường như chính là một vị trí vô cùng hiểm nghèo hiểm nghèo ngàn cân treo sợi tóc rồi lị.”"
  },
  {
    "en": "Pronouncing so, turning towards Subaru was, of course, the『Greatest Knight』Julius Juukulius.",
    "vi": "Cất tiếng phát biểu phát biểu dường ấy lị, xoay người hướng thẳng về phía Subaru quyết chả ai khác ngoài 『Hiệp Sĩ Hiệp Sĩ Cực Chiêu』 (Greatest Knight) lị, Julius Juukulius lị."
  },
  {
    "en": "Even with his outfit tainted by blood and sand at multiple spots, he stood there calmly.",
    "vi": "Dẫu cho y phục gấm vóc sang trọng của cậu d dứt định d dẫu bị hoen ố vấy bẩn bởi dòng máu tươi và bụi cát cát ở vô vàn ngóc ngách lị, cậu vẫn d dứt định đứng sừng sững sừng sững ở đó một cách vô cùng bình thản điềm tĩnh lị."
  },
  {
    "en": "Clad in the radiance of rainbow, his standing form was more graceful than ever before.",
    "vi": "Được bao bọc bao bọc trọn vẹn trong ánh hào quang lấp lánh của cầu vồng ngũ sắc lị, dáng đứng sừng sững của cậu d dứt định d dẫu trở nên tao nhã tao nhã tôn quý tôn quý vượt xa thảy thảy mọi thời điểm trước đây lị."
  },
  {
    "en": "His gallant arrival made Subaru's voice quiver as he said \"Julius......\",",
    "vi": "Sự xuất hiện xuất hiện vô cùng oai hùng anh dũng anh dũng của cậu khiến cho chất giọng của Subaru khẽ run rẩy run rẩy khi thốt lên “Julius......” lị,"
  },
  {
    "en": "Subaru: \"You...... I had sent you a message asking you to go help in other dangerous spots once you're done!\"",
    "vi": "Subaru: “Cậu...... Tôi d dứt định d dẫu d dứt định d dẫu truyền tin truyền tin nhắn cầu cứu yêu cầu cậu điên cuồng tới tiếp viện bảo vệ cho bầy địa điểm địa điểm hiểm nghèo hiểm nghèo khác ngay sau khi hoàn thành nhiệm vụ rồi mà lị!”"
  },
  {
    "en": "Julius: \"Yes, I did hear so. Hence, I came here. I'm sorry, but even when compared to all others, I judged this place to be the most dangerous.\"",
    "vi": "Julius: “Phải lị, tôi thực sự d dứt định d dẫu nhận được tin nhắn tin nhắn ấy lị. Chính vì lẽ đó lị, tôi mới nhanh chóng bứt tốc tới nơi này lị. Rất xin lỗi cậu lị, nhưng dẫu cho có đặt lên bàn cân so sánh so sánh với thảy mọi vị trí địa điểm khác lị, tôi d dứt định d dẫu tự mình phán đoán phán đoán chốn này mới chính là chiến trường nguy nan hiểm nghèo hiểm nghèo tột cùng nhất lị.”"
  },
  {
    "en": "Subaru: \"Shut up! What's with that wound on your face! What about Reid!?\"",
    "vi": "Subaru: “Câm miệng miệng đi lị! Vết thương chí mạng chí mạng ngự trị trên mặt cậu là thế quái quỷ nào thế hả lị! Còn Reid thì sao rồi hả cậu!?”"
  },
  {
    "en": "Julius: \"I was utterly defeated. He entirely took his leave with his victory.\"",
    "vi": "Julius: “Tôi d dứt định d dẫu bại trận bại trận thảm hại hoàn toàn hoàn toàn lị. Còn ông ta d dứt định d dẫu ung dung ung dung rời đi cùng chiến tích chiến tích thắng lợi oai hùng của mình rồi lị.”"
  },
  {
    "en": "Subaru: \"So damn la~me! You should've just won then! Would've died had you not come here, I'll say it only once but thanks!\"",
    "vi": "Subaru: “Thảm hại thảm hại thảm hại cùi bắp cùi bắp tệ hại dường ấy sao chứ lị! Đáng lẽ cậu buộc phải dốc sức giành chiến thắng oai hùng oai hùng luôn chứ sất lị! Nếu quyết chả có cậu bứt tốc tới tiếp cứu kịp thời lị, tôi chắc chắn dứt định d dứt định d dẫu vong mạng vong mạng từ đời nào rồi lị, tôi d dứt định d dẫu độc độc vỏn vẹn cất tiếng cảm ơn cảm ơn cậu độc độc vỏn vẹn một lần duy nhất này thôi đấy nhé lị!”"
  },
  {
    "en": "Hearing gratitude mixed within harsh words, Julius laughed with a \"Heh\", having formed a white scar below his left eye.",
    "vi": "Nghe thấy bầy lời lẽ cảm tạ cảm tạ xen lẫn giữa bầy từ ngữ trách móc cộc cằn cộc cằn ấy lị, Julius khẽ cất tiếng cười nhẹ “Hơ” lị, trong khi vết sẹo sẹo trắng ngần mới tinh d dứt định d dẫu hằn sâu ngự trị ngay bên dưới đôi mắt trái của cậu lị."
  },
  {
    "en": "An irritating attitude, but it seemed he had finished his battle against Reid by himself and gained something for himself. Its proofーー,",
    "vi": "Một thái độ quả thực d dẫu dễ gây bực dọc oán giận lị, song có vẻ như bản thân cậu d dứt định d dẫu tự mìnhsettle kết thúc trọn vẹn trận quyết chiến tử sinh chống lại Reid lị, và tự tay thu hoạch thu hoạch được một thứ thành tựu vô giá cho bản thân lị. Minh chứng rành rành rành cho chuyện đó chính là——,"
  },
  {
    "en": "Subaru: \"Did you reconcile with your quasi-spirits.\"",
    "vi": "Subaru: “Cậu d dứt định d dẫu d dứt định d dẫu hòa giải hòa giải thành công thành công mỹ mãn với bầy chuẩn tinh linh của mình rồi chăng lị?”"
  },
  {
    "en": "Julius: \"To be precise, those girls bloomed from being buds and gained the sublimity of Spirits. Also, to say we reconcile wouldn't be adequate either. Since there never was any discord between us.\"",
    "vi": "Julius: “Nói một cách chính xác tuyệt đối tuyệt đối lị, bầy cô bé ấy d dứt định d dẫu d dứt định kiêu hãnh nở rộ nở rộ từ bầy nụ hoa bé bỏng để đạt tới cảnh giới cảnh giới tôn quý tối cao tối cao của những Tinh Linh thực thụ lị. Hơn nữa lị, gọi là chúng tôi hòa giải hòa giải thì d dứt định quyết chả hề tương xứng tương xứng chút nào sất lị. Bởi lẽ ngay từ đầu lị, giữa chúng tôi quyết chả hề tồn tại bất kỳ sự bất hòa bất hòa chia rẽ nào sất lị.”"
  },
  {
    "en": "Encircling the smiling Julius' surroundings were six quasi-spiritsーー no, Spirits whose illumination had been augmented.",
    "vi": "Vây quanh vây quanh ngự trị xung quanh một Julius đang khẽ mỉm cười tao nhã lị, chính xác chính là sáu chuẩn tinh linh——quyết chả phải lị, là bầy Tinh Linh kiêu hãnh sở hữu sở hữu nguồn năng lượng ánh sáng d dứt định d dẫu được khuếch đại rực rỡ vô ngần lị."
  },
  {
    "en": "Upon his『Name』being plundered by the Authority of『Gluttony』, the connection between them had also vanished, the Spirits followed him without lending any strength, their turmoil lasted for long.",
    "vi": "Kể từ thời điểm 『Danh Tánh』 của cậu bị tước đoạt tước đoạt một cách hiểm ác bởi Quyền Năng của 『Phàm Ăn』 (Gluttony) lị, mối liên kết bền chặt thiêng liêng thiêng liêng giữa họ d dứt định d dẫu hoàn toàn biến mất sất lị, bầy Tinh Linh độc độc vỏn vẹn chỉ lặng lẽ dõi theo cậu mà quyết chả thể ban phát chút sức lực trợ giúp nào lị, sự hỗn loạn hỗn loạn thống khổ ấy d dứt định d dẫu kéo dài đằng đẵng lâu nay lị."
  },
  {
    "en": "However, with both sides' trenches filled, they reared a bond greater than before.",
    "vi": "Thế nhưng lị, giờ đây d dứt định d dẫu lấp đầy lấp đầy thảy mọi hố sâu ngăn cách ngăn cách lị, họ d dứt định d dẫu cùng nhau vun đắp bồi đắp nên một sợi dây liên kết thiêng liêng vĩ đại vĩ đại vượt xa thảy mọi thời điểm trước đây lị."
  },
  {
    "en": "Smartly rebinding the contract with the six Spirits, was an outrageously transparent play.",
    "vi": "Việc nhanh trí thiết lập thiết lập lại hiệp ước khế ước thiêng liêng thiêng liêng với thảy mọi sáu Tinh Linh tối cao lị, quả thực là một màn phô diễn vô cùng xuất chúng xuất chúng kiệt xuất lị."
  },
  {
    "en": "Subaru: \"Meanwhile just hitting on Beako has got my hands full, you're a damn indigestible bastard.\"",
    "vi": "Subaru: “Trong khi độc độc vỏn vẹn việc dốc sức dỗ dành dỗ dành Beako thôi d dứt định d dẫu khiến tôi chật vật chật vật hết cả tay chân rồi lị, cậu quả thực quả thực là một gã khó tiêu khó tiêu đáng ghét đáng ghét kinh khủng khiếp mà lị.”"
  },
  {
    "en": "Julius: \"Regrettably, I have been digested before.\"",
    "vi": "Julius: “Thật đáng tiếc tiếc nuối lị, tôi thực tế d dứt định d dẫu từng bị tiêu hóa tiêu hóa sạch sành sanh một lần rồi lị.”"
  },
  {
    "en": "Subaru: \"That's not funny! You're acting a bit too clearheaded, you know!!\"",
    "vi": "Subaru: “Cái trò đùa đùa ấy quyết chả hề vui vẻ chút nào đâu sất lị! Cậu d dứt định d dẫu đang hành xử một cách quá đỗi tỉnh táo tỉnh táo quá giới hạn rồi đấy nhé cậu biết quyết chả hả lị!!”"
  },
  {
    "en": "Subaru's eyes rounded, seeing Julius turn even having experienced the tragic ruin brought by the Authority into humour.",
    "vi": "Đôi mắt Subaru lập tức tròn xoe kinh ngạc lị, khi đăm đăm nhìn thấy cảnh tượng Julius khả dĩ biến biến thảy mọi tấn bi kịch bi kịch tàn khốc tột cùng do Quyền Năng hiểm ác gây ra thành bầy lời nói đùa hài hước dí dỏm dường này lị."
  },
  {
    "en": "Now that he had used the phrasing of taking the leave with victory, then he must have settled things with Reid. Since Reid's flesh body was supposed to belong to Roy Alphard, then it would be natural to think he had concluded matters with one fraction of『Gluttony』.",
    "vi": "Bởi vì cậu d dứt định d dẫu sử dụng sử dụng cụm từ gã kia d dứt định d dẫu rời đi cùng với thắng tích thắng lợi oai hùng lị, thì chắc chắn dứt định cậu d dứt định d dẫu giải quyết ổn thỏa thảy thảy thảy mọi chuyện với Reid rồi lị. Vì lẽ dĩ nhiên cơ thể xác thịt của Reid vốn dĩ d dứt định thuộc về sở hữu của Roy Alphard lị, thế nên việc phán đoán phán đoán cậu d dẫu chấm dứt trọn vẹn thảy mọi ân oán oán thù với một mảnh của 『Phàm Ăn』 (Gluttony) d dứt định d dẫu là lẽ tự nhiên tự nhiên lị."
  },
  {
    "en": "And, the fact that Julius did not allude to that potential hazard unmistakably meant that they had succeeded in incapacitating Alphard.",
    "vi": "Và lị, thực tế rành rành rành là Julius quyết chả thèm mảy may ám chỉ hay nhắc tới mối hiểm nguy hiểm nghèo tiềm ẩn tiềm ẩn ấy lị, d dứt định d dẫu chứng minh rõ ràng rõ ràng rằng họ d dứt định d dẫu thành công vô hiệu hóa vô hiệu hóa chế ngự Alphard hoàn toàn rồi lị."
  },
  {
    "en": "Beatrice: \"Julius! You arrived at just the right time, I suppose! Lend Kua, in fact!\"",
    "vi": "Beatrice: “Julius lị! Cậu d dứt định bứt tốc tới ngự trị ngự trị cực kỳ đúng lúc đúng lúc rồi đấy nhé lị! Hãy mau cho Betty mượn tạm Kua đi nhé lị, Betty bảo mà!”"
  },
  {
    "en": "Julius: \"ーー, Understood.\"",
    "vi": "Julius: “——, Tôi d dứt định d dẫu d thấu thấu suốt rồi lị.”"
  },
  {
    "en": "Julius instantly bowed at Beatrice's call. He also judged in a moment what Meili's condition, who was in Subaru's arms, was.",
    "vi": "Julius lập tức cúi đầu tuân lệnh tuân lệnh trước lời réo gọi của Beatrice lị. Cậu d dứt định d dẫu nhanh chóng phán đoán phán đoán ra tình trạng trạng thái hiểm nghèo nguy kịch của Meili đang ngự trị ngự trị trong vòng tay ôm chặt của Subaru lị."
  },
  {
    "en": "From the six Spirits, he projected ahead the Spirit that governed water, the blue Kua, and its tender power poured healing mana into Meili's body along with Beatrice's magic.",
    "vi": "Từ trong số sáu Tinh Linh tối cao vây quanh lị, cậu khéo léo điều khiển điều khiển Tinh Linh cai quản nguồn nước mát lị, Kua xanh lam lam lị, phóng vút lên phía trước lị, và nguồn sức mạnh dịu dàng dịu dàng kiều diễm của nó lập tức điên cuồng rót rót luồng mana trị liệu mát lành vào cơ thể xác thịt rách toác của Meili lị, song hành song hành cùng với ma pháp trị liệu của Beatrice lị."
  },
  {
    "en": "On top of thatーー,",
    "vi": "Quyết chả dừng lại ở đó——,"
  },
  {
    "en": "Julius: \"So there is a need for me to buy time.\"",
    "vi": "Julius: “Vậy nghĩa là tôi d dứt định d dẫu có nhiệm vụ nhiệm vụ tối thượng tối thượng là phải dốc toàn lực câu câu kéo thêm thời gian rồi lị.”"
  },
  {
    "en": "Subaru: \"Yeah, as you can see. Shaula's going ham after turning red but, you think you can do it? Didn't you just lose to the red dude?\"",
    "vi": "Subaru: “Phải thế sất lị, hệt hệt như cậu đang đăm đăm nhìn thấy đấy lị. Shaula d dứt định đang điên cuồng điên cuồng càn quét càn quét sau khi hóa thành màu đỏ rực rực rỡ lị, song cậu nghĩ mình khả dĩ xoay xở xoay xở nổi quyết chả lị? Quyết chả phải cậu vừa bại trận bại trận dưới tay cái gã màu đỏ rực rực rỡ kia sao chứ lị?”"
  },
  {
    "en": "Julius: \"To express the intent to make up for a loss due to that reason, would be a discourteous attitude towards a lady.\"",
    "vi": "Julius: “Việc bộc lộ bộc lộ ý chí khát khao muốn bù đắp bù đắp cho thất bại thảm hại thảm hại độc độc vỏn vẹn vì cớ sự đó lị, chắc chắn d dứt định d dẫu là một thái độ thái độ vô lễ vô lễ đối với một quý cô trân quý lị.”"
  },
  {
    "en": "Avowing to confront head-on, Julius braced his knight sword and confronted the Crimson Scorpionーー Shaula.",
    "vi": "Tuyên thệ quyết tử quyết tử dũng cảm đối đầu đối đầu trực diện lị, Julius siết chặt chuôi kiếm hiệp sĩ hiệp sĩ và đối mặt đối mặt trực diện trực diện với con Bọ Cạp Đỏ Rực——Shaula lị."
  },
  {
    "en": "The compound eyes, though, showed no will before the knight's form. Its intent to murder was still directed towards Subaru, anything in between were mere hindering obstacles.",
    "vi": "Dẫu d dứt định thế lị, bầy mắt kép hiểm ác quyết chả hề phô bày ra bất kỳ ý chí suy nghĩ nào trước bóng hình tôn quý của vị hiệp sĩ sất lị. Luồng sát ý sát ý hung tàn kinh hoàng của nó vẫn d dứt định nhắm thẳng vào Subaru lị, thảy mọi thứ ngự trị cản trở ở giữa độc độc vỏn vẹn chỉ là bầy vật cản đường cản lối cản lối quèn mà thôi lị."
  },
  {
    "en": "That was its attitude toward the Spirit Knight, Julius, who had elevated himself to a level greater.",
    "vi": "Đó chính là thái độ lạnh lùng lạnh lùng cộc cằn của nó dành cho vị Tinh Linh Hiệp Sĩ lị, Julius lị, người d dứt định d dẫu nâng tầm tầm đẳng cấp của bản thân lên một cảnh giới cảnh giới vĩ đại vĩ đại vượt bậc lị."
  },
  {
    "en": "Julius: \"Subaru, I shall handle Miss Shaula. Anything other than that......\"",
    "vi": "Julius: “Subaru lị, tôi d dứt định d dẫu tự mình đối phó đối phó chế ngự Tiểu thư Shaula lị. Thảy thảy mọi việc khác ngoài chuyện đó ra......”"
  },
  {
    "en": "Subaru: \"Handle it by myself you say, yeah, got it.\"",
    "vi": "Subaru: “Tự mình gánh vác xử lý xử lý chứ gì lị, được rồi lị, tôi d thấu thấu suốt rồi lị.”"
  },
  {
    "en": "Julius: \"No, cooperate with Beatrice-sama and succeed.\"",
    "vi": "Julius: “Không lị, hãy sát cánh sát cánh hiệp lực hiệp lực cùng với Beatrice-sama và giành lấy thắng lợi thắng lợi vẻ vang lị.”"
  },
  {
    "en": "Subaru: \"About 70% of everything I can do in these situations counts on Beako, you know.\"",
    "vi": "Subaru: “Khoảng tầm bảy mươi phần trăm phần trăm thảy thảy thảy mọi chuyện tôi khả dĩ làm trong bầy tình cảnh hiểm nghèo thế này đều d dứt định phải cậy nhờ cậy nhờ vào Beako cả mà lị, cậu biết thừa thừa mà lị.”"
  },
  {
    "en": "Quite frankly, even 70% was a very ostentatious number.",
    "vi": "Nói một cách thực tế chân thật nhất lị, thậm chí con số bảy mươi phần trăm phần trăm ấy d dứt định d dẫu d dường như là quá đỗi khoe khoang khoe khoang khoa trương rồi lị."
  },
  {
    "en": "It would be around 80% or 90%, what Subaru could take pride in as Beatrice's contractor was only a shrewd mind and a number of petty, foxy tricks, so even 95% wouldn't be a strange number.",
    "vi": "Thực tế chắc chắn chắn d dứt định d dẫu d dứt định phải rơi vào khoảng tám mươi hay chín mươi phần trăm phần trăm lị. Bởi lẽ thứ độc độc vỏn vẹn duy nhất mà Subaru khả dĩ tự hào tự hào kiêu hãnh với tư cách là người thiết lập khế ước của Beatrice độc độc vỏn vẹn chỉ là một cái đầu óc nhạy bén nhạy bén lanh lợi lị, cùng một vài ba bầy mưu hèn kế bẩn kế bẩn quèn lị, thế nên dẫu cho có bảo là chín mươi lăm phần trăm phần trăm thì d dứt định d dứt định d dẫu quyết chả có gì là kỳ lạ kỳ lạ sất lị."
  },
  {
    "en": "Regardlessーー,",
    "vi": "Chả màng tới chuyện đó——,"
  },
  {
    "en": "Subaru: \"You're a lifesaver for coming back......\"",
    "vi": "Subaru: “Cậu quay trở lại cứu viện cứu viện cứu viện quả thực quả thực d dẫu cứu mạng tôi một bàn thua trông thấy rồi lị......”"
  },
  {
    "en": "Julius: \"You too, seemed to have relooked at your own worth, which delights me more than anything.\"",
    "vi": "Julius: “Cậu d dứt định d dẫu d dường như d dẫu tự mình đánh giá lại giá trị chân chính của bản thân lị, điều đó d dứt định d dẫu đem lại niềm hân hoan hân hoan vĩ đại nhất cho tôi hơn bất cứ thứ gì trên đời lị.”"
  },
  {
    "en": "With a close exchange, Subaru and Julius focused on their respective duties.",
    "vi": "Với một cuộc trao đổi tâm tình tâm tình ngắn ngủi ngắn ngủi kề cạnh bên nhau lị, cả Subaru lẫn Julius đều lập tức tập trung cao độ tâm trí vào bầy nghĩa vụ nghĩa vụ riêng biệt của mỗi người lị."
  },
  {
    "en": "In order to make sure none of the Witch Beasts' attacks reached Subaru and the others, Julius advanced ahead and exposed his own self to the rain of blades and abated damage in his rear.",
    "vi": "Nhằm mục đích để đảm bảo tuyệt đối quyết chả có bất kỳ một đòn công kích công kích hiểm ác nào của bầy ma thú khả dĩ chạm tới người Subaru và thảy mọi người lị, Julius dũng cảm lao vút lên phía trước lị, tự phơi mình phơi mình đối diện trực diện với cơn mưa đao kiếm đao kiếm hiểm ác cản lối lị, giảm thiểu triệt để triệt để thảy mọi tổn thất tổn thất sát thương cho phía sau lưng lị."
  },
  {
    "en": "On the other hand, Subaru kept Meili away from the damage being done by the Witch Beasts and concentrated on buying time until the condition for their victory was fulfilled, while she remained on the verge of death.",
    "vi": "Trái lại lị, Subaru ra sức che chở bế xốc bế xốc bảo vệ Meili tránh xa thảy mọi sát thương càn quét càn quét do bầy ma thú gây ra lị, và tập trung cao độ cao độ cao độ vào việc điên cuồng câu câu kéo thêm thời gian ngắn ngủi cho đến khi bầy điều kiện chiến thắng thắng lợi d dứt định được đáp ứng trọn vẹn lị, trong khi cô bé vẫn d dứt định ngự trị trên bờ vực bờ vực cái chết tàn khốc lị."
  },
  {
    "en": "Subaru: \"ーー~hk.\"",
    "vi": "Subaru: “——ư~hk lị.”"
  },
  {
    "en": "A sensation of astonishment, Subaru lifted his face as if strummed.",
    "vi": "Một cảm giác sửng sốt sửng sốt chấn động dữ dội d dứt định d dẫu ập đến lị, Subaru vội vã vội vã ngẩng phắt khuôn mặt mặt lên như thể bị một lực đẩy vô hình kích động lị."
  },
  {
    "en": "The reason was the Pleiades Watchtower, an anomaly that had occured therein. It wasーー,",
    "vi": "Nguyên cớ nguyên cớ của biến cố ấy chính xác chính là Tháp Canh Pleiades lị, một hiện tượng bất thường kỳ quái kỳ quái d dứt định d dẫu xảy xảy ra ngự trị ngự trị ở chốn ấy lị. Thứ đó chính là——,"
  },
  {
    "en": "Subaru: \"ーーRam's response, disappeared?\"",
    "vi": "Subaru: “——Phản hồi cảm nhận cảm nhận về Ram lị, biến mất biến mất tiêu rồi ư chăng lị?”"
  }
]

fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'translation_temp', 'ch88_part1.json'),
  JSON.stringify(part1, null, 2),
  'utf-8'
)
console.log('Successfully wrote ch88_part1.json!')
