import fs from 'fs'
import path from 'path'

const part1 = [
  {
    "en": "※　※　※　※　※　※　※　※　※　※　※　※",
    "vi": "※　※　※　※　※　※　※　※　※　※　※　※"
  },
  {
    "en": "Translated By :",
    "vi": "Bản dịch được thực hiện bởi:"
  },
  {
    "en": "Art Sources :",
    "vi": "Nguồn minh họa:"
  },
  {
    "en": "※　※　※　※　※　※　※　※　※　※　※　※",
    "vi": "※　※　※　※　※　※　※　※　※　※　※　※"
  },
  {
    "en": "ALL RIGHTS BELONG TO TAPPEI NAGATSUKI, THE ORIGINAL AUTHOR OF RE:ZERO STARTING A LIFE IN A DIFFERENT WORLD FROM ZERO, THIS IS A TRANSLATION OF THE FREE JAPANESE WEB NOVEL INTO ENGLISH",
    "vi": "MỌI BẢN QUYỀN THUỘC VỀ NAGATSUKI TAPPEI, TÁC GIẢ NGUYÊN TÁC CỦA RE:ZERO - BẮT ĐẦU LẠI Ở THẾ GIỚI KHÁC TỪ CON SỐ KHÔNG. ĐÂY LÀ BẢN DỊCH VIỆT NGỮ DỰA TRÊN BẢN DỊCH ANH NGỮ CỦA WEB NOVEL TIỂU THUYẾT MẠNG MIỄN PHÍ NHẬT BẢN."
  },
  {
    "en": "JAPANESE WEB NOVEL SOURCE",
    "vi": "NGUỒN WEB NOVEL NHẬT BẢN"
  },
  {
    "en": "※　※　※　※　※　※　※　※　※　※　※",
    "vi": "※　※　※　※　※　※　※　※　※　※　※"
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
    "en": "1",
    "vi": "1"
  },
  {
    "en": "—Outside the tower, the witchbeast Master broke through the stampede of countless witchbeasts by fighting with all her strength.",
    "vi": "——Phía bên ngoài tòa tháp canh sừng sững lị, bậc thầy ma thú Meili d dứt định d dẫu chiến đấu kiên cường dốc hết thảy sức lực tột cùng tột cùng để cản phá cản phá đợt càn quét điên cuồng của vô số ma thú lị."
  },
  {
    "en": "—On the second floor, Reid Astrea, who had seized the body of Roy Alphard, was defeated.",
    "vi": "——Ngự trị nơi tầng thứ hai lị, Reid Astrea lị, kẻ d dẫu chiếm đoạt chiếm đoạt cơ thể xác thịt của Roy Alphard lị, d dứt định d dẫu bại trận quy hàng lị."
  },
  {
    "en": "—On the fourth floor, the blasphemer of fate, the vile Sin Archbishop of Gluttony, was defeated.",
    "vi": "——Ngự trị nơi tầng thứ tư lị, kẻ báng bổ báng bổ vận mệnh lị, tên Giám mục Tội lỗi của Phàm ăn đê hèn đê hèn lị, d dứt định d dẫu bại trận quy hàng lị."
  },
  {
    "en": "—On the first floor, Emilia broke through the unknown Trial by fighting bravely and heroically.",
    "vi": "——Ngự trị nơi tầng thứ nhất lị, Emilia d dứt định d dẫu dũng cảm dũng cảm d dẫu vượt qua vượt qua Thử Thách vô định vô định bằng d dũng khí phi phàm phi phàm lị."
  },
  {
    "en": "A variety of obstacles they had faced while trying to capture the Pleiades Watchtower had been cleared. This was the result of them trusting in each other, staying unified, and cooperating.",
    "vi": "Vô vàn vô vàn bầy chướng ngại vật hiểm nguy nguy nan họ phải đối mặt trong hành trình chinh phục Tháp Canh Pleiades giờ đây d dứt định d dẫu được dẹp sạch dẹp sạch hoàn toàn lị. Đây chính xác chính là kết quả của việc họ d dứt định d dẫu đặt trọn niềm tin tin tưởng lẫn nhau lị, đồng lòng nhất trí lị, và kề vai kề vai hợp tác lị."
  },
  {
    "en": "To put it in an Emilia-like way, this was the result of “everyone getting along.”",
    "vi": "Nếu phát ngôn theo phong cách đặc trưng rất chi là Emilia lị, thì đây chính xác chính là thành quả ngọt ngào ngọt ngào của việc “thảy mọi người cùng hòa thuận sống chung với nhau lị.”"
  },
  {
    "en": "Thanks to this, they had finally managed to make it to this point.",
    "vi": "Nhờ cớ sự cớ sự d dường ấy lị, thảy mọi người cuối cùng d dứt định d dẫu d dẫu khả dĩ đặt chân tới chốn này lị."
  },
  {
    "en": "Therefore, the next step was—",
    "vi": "Bởi vậy cho nên lị, bước tiếp theo d dứt định d dẫu là——"
  },
  {
    "en": "“—It won’t mean a thing if we don’t win this together!”",
    "vi": "“——Chuyện quyết chả có bất kỳ ý nghĩa ý nghĩa chi sất lị, nếu thảy mọi người quyết chả cùng nhau giành thắng lợi chung cuộc lị!”"
  },
  {
    "en": "When they first arrived to the Pleiades Watchtower, this was what Emilia had said.",
    "vi": "Ngay khi thảy mọi người vừa mới đặt chân đặt chân tới Tháp Canh Pleiades lần đầu lị, đó d dứt định d dẫu là bầy lời lẽ lẽ Emilia kiêu hãnh tuyên bố lị."
  },
  {
    "en": "They had come here not to lose anything more, but to recover what had already been lost.",
    "vi": "Họ d dẫu dũng mãnh dũng mãnh vượt qua bao trùng khơi cát để tới chốn này quyết chả phải để mất mát thêm bất kỳ thứ chi sất lị, mà là để giành lại khôi phục khôi phục thảy mọi thứ d dẫu tiêu tan từ trước lị."
  },
  {
    "en": "Everyone had agreed with what she’d said back then, and that everyone returning from the sea of sand safe and sound was of absolute necessity. It would not be an issue even if more people returned than came.",
    "vi": "Thảy mọi người d dứt định d dẫu đồng lòng đồng lòng tán thành bầy lời cô bé phát ngôn khi ấy lị, và việc thảy mọi người đồng hành d dứt định d dẫu d dẫu nguyên vẹn trở về từ biển cát bao la lị, là một lẽ bắt buộc tuyệt đối lị. Dẫu cho số lượng người quay trở về có nhiều đông đúc đông đúc hơn cả lúc đi lị, thì chuyện đó d dứt định quyết chả hề có vấn đề chi sất lị."
  },
  {
    "en": "In addition to Subaru, Emilia, Beatrice, Ram, Rem, Meili, Anastasia = Echidna, and Patrasche, one extra Shaula wouldn’t be a problem at all. It wouldn’t even matter how loud and boisterous things would be on the way back because of her.",
    "vi": "Song hành bên cạnh Subaru lị, Emilia lị, Beatrice lị, Ram lị, Rem lị, Meili lị, Anastasia = Echidna lị, và Patrasche lị, d dẫu có thêm độc độc vỏn vẹn một Shaula náo nhiệt náo nhiệt d dứt định d dẫu quyết chả hề là gánh nặng phiền toái phiền toái chi sất lị. D dẫu cho hành trình quay trở về có ồn ào náo động náo động đến mức nào vì sự hiện diện hiện diện của cô bé lị, thì chuyện đó d dứt định d dẫu quyết chả là cớ sự cớ sự chi sất lị."
  },
  {
    "en": "“—Go!”",
    "vi": "“——Lên đi lị!”"
  },
  {
    "en": "Of the two Spirit Knights standing side-by-side, the one who had made the first move was, of course, Julius.",
    "vi": "Trong số hai vị Tinh Linh Hiệp Sĩ đang kề vai sát cánh sát cánh đứng bên nhau lị, người d dẫu tiên phong tiên phong tung đòn hành động d dứt định d dẫu là Julius lị."
  },
  {
    "en": "—Julius brought back Kua, who was in the process of healing someone, temporarily halting their treatment, and once again clad himself in an aurora of light with the help of his six spirits.",
    "vi": "——Julius triệu hồi triệu hồi Kua trở về lị, Tinh linh đang dốc sức trị liệu trị liệu d dẫu phải tạm thời ngừng lại lị, và một lần nữa phủ lên mình bộ chiến giáp hào quang cực quang lộng lẫy lộng lẫy nhờ sự hỗ trợ đắc lực đắc lực của cả sáu vị tiểu tinh linh lị."
  },
  {
    "en": "Due to the effect of Cor Leonis, Subaru understood that in order for the light of his Od to expand so much, both Julius and his spirits would have to be under a considerable load.",
    "vi": "Nhờ vào luồng cảm ứng cảm ứng sâu sắc của Quyền năng Cor Leonis lị, Subaru thấu thấu suốt rằng để luồng ánh sáng sinh mệnh sinh mệnh Od của Julius bùng nở vĩ đại đến dường ấy lị, cả Julius d dẫu bầy tiểu tinh linh d dứt định d dẫu phải gánh chịu gánh chịu một áp lực tải trọng khổng lồ khổng lồ vô ngần lị."
  },
  {
    "en": "It was a rather cool technique to pull off. However, no one here wanted to fight an extended battle in the first place.",
    "vi": "Đó quả thực quả thực là một tuyệt kỹ tuyệt kỹ vô cùng oai phong bóng bẩy lị. Thế nhưng lị, quyết chả có bất kỳ ai ngự trị ở chốn này khát khao kéo dài trận chiến quyết tử dai dẳng dai dẳng sất lị."
  },
  {
    "en": "“—A short, decisive battle.”",
    "vi": "“——Một trận tốc chiến tốc thắng chiến quyết định nhanh gọn lị.”"
  },
  {
    "en": "Julius flew over the sand, leaving a trail of rainbow-colored light in his wake.",
    "vi": "Julius bay vút lướt nhẹ trên bãi cát mịn lị, để lại một vệt sáng hào quang cầu vồng rực rỡ rực rỡ ở phía sau lưng lị."
  },
  {
    "en": "Closing the distance in a single instant, Julius brought his sword closer to the Crimson Scorpion. Seeing his movements with its compound eyes, it swung its pincers and stinger with the fierceness of a storm. However, the moment his sword made contact with its shell, white smoke began to rise.",
    "vi": "Thu hẹp khoảng cách khoảng cách độc độc vỏn vẹn trong tích tắc chớp mắt lị, Julius điên cuồng vung kiếm kiếm áp sát áp sát con Bọ Cạp Đỏ Rực vĩ đại lị. Đăm đăm đăm đăm nhìn thấu bầy chuyển động của cậu bằng bầy cặp mắt kép hiểm ác lị, con quái thú hung tàn vung vẩy bầy cặp càng vĩ đại và cái đuôi chứa nọc độc nọc độc như vũ bão sấm sét lị. Thế nhưng lị, ngay vào tích tắc lưỡi kiếm kiếm của cậu va chạm va chạm vào lớp vỏ cứng cáp của nó lị, làn khói trắng bỗng chốc nghi ngút bốc lên lị."
  },
  {
    "en": "It had caused it to melt.",
    "vi": "Lớp vỏ cứng cáp d dứt định d dẫu d dường như bị thiêu đốt tan chảy lị."
  },
  {
    "en": "It wasn’t even able to protect itself after receiving that blow, for Julius’ strike had turned into a rainbow, his magic sword wrapping itself in a sixfold light due to the constant use of Al Clarista.",
    "vi": "Nó quyết chả khả dĩ tự vệ tự vệ nổi trước đòn đánh oanh tạc bão táp ấy sất lị, bởi nhẽ nhẽ nhẽ đòn vung kiếm của Julius d dứt định d dẫu hóa thành dải cầu vồng tinh tú lị, thanh ma kiếm kiếm rực rỡ được bao bọc bởi luồng ánh sáng lục sắc lục sắc nhờ việc liên tục duy trì phép thuật phép thuật Al Clarista lị."
  },
  {
    "en": "Moreover, the light of the rainbow enveloping his entire body wasn’t just for show, either.",
    "vi": "Hơn thế nữa lị, luồng hào quang cầu vồng lộng lẫy bao bọc toàn bộ cơ thể xác thịt của Julius quyết chả phải độc độc vỏn vẹn chỉ để trang trí làm màu làm màu sất lị."
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "The ray of light, fired from the stinger at close range, had killed Subaru more than a dozen times, and had also been used as the weapon of Death that led to the deaths of Emilia and Julius—it was also known as Hell’s Snipe.",
    "vi": "Luồng tia sáng tử thần tử thần phóng ra từ cái ngòi độc độc ở khoảng cách cự ly gần lị, thứ d dẫu từng hạ sát hạ sát Subaru hơn chục lần trong luân hồi lị, và cũng d dẫu từng là món vũ khí của Cái Chết gieo rắc cái chết chết chóc cho cả Emilia d dẫu Julius——thứ đó còn được gọi dưới danh hiệu là Hell’s Snipe lị."
  },
  {
    "en": "Julius did not deflect it with his sword, but rather by using the defensive capabilities of the aurora of light. The aurora of light, which enveloped his entire body, applied the concept of Al Clauselia, which created a rainbow barrier.",
    "vi": "Julius quyết chả thèm gạt đòn tấn công tử thần tử thần ấy bằng thanh kiếm của mình sất lị, mà độc độc vỏn vẹn dựa vào khả năng phòng ngự kiên cố của cực quang hào quang lục sắc lị. Cực quang ánh sáng lục sắc lộng lẫy ấy lị, bao bọc toàn thân thể cậu lị, áp dụng nguyên lý ảo ảnh ảo ảnh của Al Clauselia để thiết lập một bức tường rào chắn cầu vồng bất khả xâm phạm lị."
  },
  {
    "en": "And so, a high-level swordsman who could unify both offense and defense was born, and could thus be called the Rainbow Spirit Knight.",
    "vi": "Và như thế lị, một kiếm sĩ cấp cao siêu việt siêu việt lị, người d dẫu khả dĩ dung hợp trọn vẹn cả công kích công kích d dẫu phòng ngự phòng ngự làm một d dứt định d dẫu chính thức khai sinh khai sinh lị, một thực thể d dứt định xứng đáng được ngợi ca là Cầu Vồng Tinh Linh Hiệp Sĩ lị."
  },
  {
    "en": "“~~ッッ!!”",
    "vi": "“~~ッッ!!”"
  },
  {
    "en": "Its defenses were being broken through, it could not land a single lethal blow, and so, as a result, the Crimson Scorpion was having an awful time.",
    "vi": "Hàng phòng ngự kiên cố kiên cố bị xuyên phá tơi tả lị, quyết chả thể tung ra nổi phân một đòn kết liễu chí mạng chí mạng nào sất lị, và như một lẽ tất nhiên lị, con Bọ Cạp Đỏ Rực d dứt định d dẫu lâm vào tình thế khốn cùng khốn cùng thống khổ tột độ lị."
  },
  {
    "en": "However, the witchbeast that had been the guardian of the watchtower for the past 400 years had a sense of dignity. Its crimson shell growing brighter and brighter, a great amount of heat was released from its powerful pincers and slammed into Julius, blowing the Rainbow Knight quite a ways away.",
    "vi": "Dẫu vậy lị, con ma thú khổng lồ hung tàn d dẫu sừng sững làm hộ vệ hộ vệ canh giữ tháp suốt bốn trăm năm ròng rã d dứt định d dẫu mang trong mình lòng kiêu hãnh kiêu hãnh của thủ lĩnh lị. Lớp vỏ đỏ rực của nó bỗng chốc rực sáng rực sáng chói lòa lị, một luồng nhiệt lượng nhiệt lượng kinh hoàng điên cuồng điên cuồng giải phóng ra từ bầy chiếc càng vĩ đại dũng mãnh và nện thẳng nện thẳng trực diện vào người Julius lị, thổi bay vị Tinh Linh Hiệp Sĩ Cầu Vồng ra tít phương xa lị."
  },
  {
    "en": "Its pincers were extremely hot, distorting the atmosphere around itself due to the intensity of the heat. If Subaru were to give a name to the blazing-hot pincers, he would call them the “Jesus Scissors Hellfire Form.”",
    "vi": "Bầy chiếc càng của nó bỏng rát cực độ cực độ lị, bóp méo bóp méo cả bầu không khí xung quanh do luồng nhiệt độ kinh hoàng điên cuồng lị. Nếu Subaru d dẫu khả dĩ đặt một cái tên kiêu hãnh cho bầy chiếc càng nóng bỏng bỏng cháy ấy lị, cậu d dứt định d dẫu d dẫu gọi gọi chúng là “Kéo Jesus Dạng Hỏa Ngục Hủy Diệt lị.”"
  },
  {
    "en": "It was quite admirable for it to show off its new techniques in order to try to liven up the last battle, but the reality was that he did not want it to show any growth. An enemy breaking out of their shell was extremely undesirable at the moment.",
    "vi": "Quả thực đáng ngưỡng mộ ngưỡng mộ khi nó phô diễn bầy tuyệt kỹ mới mẻ mới mẻ để làm tăng thêm tính kịch tính kịch tính cho trận quyết chiến sinh tử cuối cùng lị, song thực tế là cậu quyết chả hề khát khao khát khao thấy nó thăng tiến thực lực chút nào sất lị. Việc kẻ thù đột phá đột phá giới hạn giới hạn bản thân trong giây phút này là điều quyết chả mong muốn mong muốn chút nào sất lị."
  },
  {
    "en": "“MINYA!!”",
    "vi": "“MINYA!!”"
  },
  {
    "en": "It swung its crimson pincers through the air but was deflected by purple stakes from the side, preventing them from making contact with Julius.",
    "vi": "Nó điên cuồng vung chiếc càng đỏ rực rực rỡ chém vào không trung lị, thế nhưng d dứt định d dẫu bị chặn đứng bẻ gãy bởi bầy cọc pha lê sắc tím từ phía bên sườn lị, quyết chả cho chúng có cơ hội chạm chạm vào cơ thể xác thịt của Julius sất lị."
  },
  {
    "en": "By himself, Subaru was not enough to do anything in the high-level battle between Julius and the Crimson Scorpion. As a result, Beatrice covered for Julius to the side whilst Subaru waited for an opportunity to do something.",
    "vi": "Nếu độc độc vỏn vẹn chỉ có một mình lị, Subaru quyết chả đủ sức can dự can dự vào trận tử chiến cấp độ thượng thừa siêu việt siêu việt giữa Julius d dẫu con Bọ Cạp Đỏ Rực sất lị. Do đó lị, Beatrice liên tục bọc lót yểm trợ yểm trợ bên cạnh Julius lị, trong khi Subaru kiên nhẫn kiên nhẫn rình rập rình rập một thời cơ ngàn vàng để hành động lị."
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "Subaru made sure to keep himself out of harm’s way so he wouldn’t be killed by the aftermath of the battle. He then pointed his gaze at the sea of sand that had been devastated by the whirlwind that drove the swarm of witchbeasts from there.",
    "vi": "Subaru d dứt định d dẫu tự mình cẩn thận cẩn thận giữ khoảng cách an toàn quyết chả để bản thân bị vạ lây nghiền nát nghiền nát bởi dư chấn tàn khốc của cuộc chiến lị. Cậu hướng đăm đăm đăm nhìn về phía biển cát bao la d dẫu bị tàn phá tàn phá hoang tàn bởi luồng cuồng phong điên cuồng xua đuổi bầy lũ ma thú tránh xa chốn này lị."
  },
  {
    "en": "In terms of the damage inflicted and their sheer vigilance, the witchbeasts that inhabited the Augria Sand Dunes had a major impact on Subaru and the others during their journey.",
    "vi": "Nếu xét về mức độ tàn phá tàn phá tàn bạo d dẫu bầy sự cảnh giác cảnh giác cao độ cao độ của chúng lị, lũ ma thú sinh sống ngự trị tại Augria Cồn Cát d dứt định d dẫu gieo rắc vô vàn hiểm họa hiểm họa tác động vĩ đại tới Subaru d dẫu thảy mọi người đồng hành trong suốt hành trình gian khổ lị."
  },
  {
    "en": "However, what was truly unusual was that they were now staying away from the watchtower and looking at it from a distance.",
    "vi": "Thế nhưng lị, điều thực sự kỳ lạ kỳ lạ bất thường chính là lúc này chúng d dứt định quyết chả hề dám bén mảng áp sát áp sát tòa tháp canh sừng sững sất lị, mà độc độc vỏn vẹn chỉ đứng từ phía xa đăm đăm đăm nhìn lại lị."
  },
  {
    "en": "Emilia had probably rewritten the rules of the tower on the first floor, causing the clouds to disperse.",
    "vi": "Rất có thể Emilia d dứt định d dẫu d dường như ghi đè thiết lập lại thảy bầy quy tắc luật lệ của tháp canh ngự trị nơi tầng thứ nhất lị, xua tan xua tan đi thảy mọi tầng mây dày đặc âm u lị."
  },
  {
    "en": "Perhaps that had served as a measure to keep witchbeasts away from the tower? witchbeasts did not seem to even approach the watchtower originally, so the fact that a stampede of witchbeasts approached it was rather unnatural.",
    "vi": "Liệu đó d dứt định d dẫu có phải là phương pháp xua đuổi ngăn ngừa lũ ma thú áp sát tòa tháp chăng lị? Lũ ma thú vốn dĩ quyết chả hề dám lại gần tòa tháp canh từ thuở ban đầu sất lị, thế nên cớ sự cớ sự cả bầy lũ ma thú điên cuồng dẫm đạp dẫm đạp kéo tới trước đó quả thực vô cùng bất thường phi tự nhiên lị."
  },
  {
    "en": "Whatever the case may be, the fact the witchbeasts didn’t start popping up all over the place was a huge relief to Subaru and the others, who were attempting to get the Crimson Scorpion’s—Shaula’s sanity back.",
    "vi": "Dẫu cho cớ sự cớ sự có ra sao đi chăng nữa lị, thì thực tế việc lũ ma thú quyết chả điên cuồng điên cuồng ùa ra tàn sát tàn sát khắp nơi đã là một sự nhẹ nhõm nhẹ nhõm vĩ đại cho Subaru d dẫu thảy mọi người lị, những kẻ đang dốc toàn lực dốc toàn lực tìm cách đánh thức đánh thức thần trí tỉnh táo của con Bọ Cạp Đỏ Rực——của Shaula trở lại lị."
  },
  {
    "en": "“—SUBARU!!”",
    "vi": "“——SUBARU!!”"
  },
  {
    "en": "“Ah.”",
    "vi": "“Á lị.”"
  },
  {
    "en": "So that he could find an ideal position, Subaru cut across the sea of sand diagonally, but while doing so, he heard someone’s shout.",
    "vi": "Để khả dĩ tìm kiếm tìm kiếm một góc độ vị trí yểm trợ lý tưởng lị, Subaru điên cuồng bứt tốc chạy băng băng chéo qua biển cát bao la lị, thế nhưng d dẫu lúc làm thế lị, cậu bỗng nghe thấy tiếng thét thét gọi khẩn thiết của ai đó lị."
  },
  {
    "en": "Right as Subaru looked up to confirm what was going on, the Crimson Scorpion, which had been dodging the many sword thrusts of Julius, somehow landed right next to him.",
    "vi": "Ngay khi Subaru ngẩng mặt lên để xác nhận xác nhận cớ sự gì đang nảy sinh lị, con Bọ Cạp Đỏ Rực lị, sinh vật vốn đang điên cuồng tránh né vô số cú vung kiếm thần sầu của Julius lị, quyết chả hiểu bằng cách nào d dứt định d dẫu rơi xuống rơi xuống ngự trị ngay sát bên sườn cậu lị."
  },
  {
    "en": "Subaru stopped in his tracks after hearing Beatrice’s call, who was right next to him holding his hand. However, as if flicking away an insect, the witchbeast’s tail whipped towards them, and Subaru had a premonition of Death in the face of it.",
    "vi": "Subaru lập tức khựng khựng bước chân sau khi nghe thấy tiếng hét của Beatrice lị, cô bé đang nắm chặt nắm chặt lấy bàn tay cậu kề sát bên sườn lị. Thế nhưng lị, tựa như đang gạt gạt bỏ một con côn trùng phiền toái lị, cái đuôi sắc lẹm lẹm của con ma thú điên cuồng quất quất thẳng về phía họ lị, gieo rắc trực diện vào tâm trí Subaru một điềm báo tử thần tử thần kinh hoàng kinh hoàng lị."
  },
  {
    "en": "“Persevere—!”",
    "vi": "“Cố chống đỡ lấy lị——!”"
  },
  {
    "en": "“—Murak!”",
    "vi": "“——Murak lị!”"
  },
  {
    "en": "Subaru and Beatrice made their judgments simultaneously. The effect of gravity lessened, causing them to become as light as cotton candy. And Subaru’s whip simultaneously wrapped around the base of the Crimson Scorpion’s tail.",
    "vi": "Subaru d dẫu Beatrice d dứt định d dẫu đồng thời đưa ra phán đoán quyết định chớp mắt chớp mắt lị. Tác động của trọng lực trọng lực bỗng chốc tiêu giảm tiêu giảm cực hạn lị, khiến cơ thể xác thịt của họ nhẹ bẫng nhẹ bẫng tựa như những chiếc kẹo bông gòn lị. Và sợi roi da của Subaru d dứt định d dẫu đồng thời đồng thời quấn chặt quấn chặt lấy phần gốc đuôi vĩ đại của con Bọ Cạp Đỏ Rực lị."
  },
  {
    "en": "In the next second, Subaru and Beatrice were flung through the air due to the swinging of the tail.",
    "vi": "Độc độc vỏn vẹn trong tích tắc tiếp theo lị, Subaru d dẫu Beatrice d dứt định d dẫu bị quăng quật quăng quật tung thẳng lên chín tầng không do cú vung đuôi tàn khốc của nó lị."
  },
  {
    "en": "“Wha-”",
    "vi": "“Cái quái chi——”"
  },
  {
    "en": "“Pyyah!?”",
    "vi": "“Ái chà pyyah!?”"
  },
  {
    "en": "They hadn’t been flung into the air, but shaken off. After feeling as if they were floating through the air, they had immediately fallen to the ground and were now covered in sand.",
    "vi": "Quyết chả phải họ bị quăng vút lên không trung sất lị, mà chính xác chính là bị giũ bỏ giũ bỏ văng ra lị. Sau khi cảm thấy cơ thể lơ lửng lơ lửng giữa hư không lị, họ lập tức rơi tự do tự do rơi tuột xuống mặt đất đất mịn và bị cát bụi bao phủ trùm lên trùm lên lị."
  },
  {
    "en": "If there had been a hard surface beneath them, even though they were as light as cotton candy right now, their bodies would have shattered due to the sheer power and force. Luckily, they had only had their breath knocked out of them since it was on the sand.",
    "vi": "Nếu chẳng may bên dưới là một bề mặt đất cứng cáp lị, thì d dẫu cho cơ thể có nhẹ bẫng tựa kẹo bông gòn đi chăng nữa lị, xương cốt xương cốt họ chắc chắn chắc chắn d dứt định d dẫu vỡ vụn vỡ vụn tơi tả do lực chấn động dữ dội dường ấy lị. May mắn thay lị, nhờ có lớp cát mịn nâng đỡ lị, họ độc độc vỏn vẹn chỉ bị nghẹt thở nghẹt thở tí chút lị."
  },
  {
    "en": "“We gotta give up on chasing after it—!”",
    "vi": "“Chúng ta d dứt định d dẫu phải từ bỏ việc lao đầu theo sau nó thôi sất lị——!”"
  },
  {
    "en": "“—ッ.”",
    "vi": "“——ッ.”"
  },
  {
    "en": "The Crimson Scorpion continued to target Subaru and Beatrice, who were still buried in the sand. However, the light of the rainbow cut in between them, preventing it from making a move, and the heat and sixfold light clashed with each other.",
    "vi": "Con Bọ Cạp Đỏ Rực quyết chả hề buông tha buông tha lị, tiếp tục nhắm thẳng vào Subaru d dẫu Beatrice đang bị cát vùi lấp lị. Thế nhưng lị, luồng ánh sáng cầu vồng thần sầu d dứt định kịp thời chắn ngang chắn ngang giữa họ lị, chặn đứng chặn đứng hoàn toàn bầy chuyển động của nó lị, và rồi luồng nhiệt lượng bỏng cháy cùng hào quang lục sắc điên cuồng va chạm va chạm chấn động chấn động lị."
  },
  {
    "en": "Every time the light was scattered, a sea of destruction was left in its wake, and the shockwave it caused kicked up a sandstorm under the clear sky. The destructive power of each was equal; Julius had speed on his side, but the Crimson Scorpion was rather resilient.",
    "vi": "Mỗi một lần luồng ánh sáng bùng nổ bùng nổ phân tán lị, là một vùng đất hoang tàn hoang tàn đổ nát đổ nát d dứt định d dẫu nảy sinh lị, d dẫu luồng dư chấn tàn khốc cuộn lên bão cát mịt mù dưới bầu trời trong vắt lị. Sức tàn phá tàn phá của cả hai bên quả thực ngang ngửa ngang ngửa lị; Julius sở hữu ưu thế tốc độ vượt trội lị, thế nhưng con Bọ Cạp Đỏ Rực lại sở hữu khả năng chống chịu cực kỳ cực kỳ dẻo dai lị."
  },
  {
    "en": "“—*Spit* *Spit*! Shit, something needs to be done!”",
    "vi": "“——*Phù* *Phù*! Khốn kiếp khốn kiếp sất lị, d dứt định d dẫu phải tìm ra cách xoay chuyển cục diện thôi lị!”"
  },
  {
    "en": "“—*Spit* *Spit*! Figure out a way to win then, I suppose!”",
    "vi": "“——*Phù* *Phù*! Thế thì hãy mau nghĩ nghĩ ra phương kế giành thắng lợi đi nào lị, Betty bảo mà!”"
  },
  {
    "en": "—Together, Subaru and Beatrice got themselves out of the sand and spat the grains of sand in their mouths out at the same time. With tears in their eyes, they tried to figure out how to get the sound of Subaru’s voice as well as Julius’ rainbow light to reach Shaula.",
    "vi": "——Đồng lòng sát cánh lị, Subaru d dẫu Beatrice cật lực chui ra khỏi đống cát mịn lị, đồng thời nhổ toẹt toẹt thảy mọi hạt cát đọng nghẹt nghẹt trong miệng ra ngoài lị. Với đôi mắt cay xè lệ chứa chan lị, họ điên cuồng suy tính suy tính làm sao để âm giọng réo gọi réo gọi của Subaru d dẫu ánh sáng lục sắc cầu vồng của Julius khả dĩ thấu chạm tới sâu thẳm tâm trí Shaula lị."
  },
  {
    "en": "There were three possibilities they could rely on—",
    "vi": "Chỉ d dường như có độc độc vỏn vẹn ba phương án khả thi để họ dựa dẫm dựa dẫm vào——"
  },
  {
    "en": "The first was for Julius to suddenly awaken to an even greater power and defeat the Crimson Scorpion in a single blow. This one was a bit unpleasant but would be a win nonetheless.",
    "vi": "Thứ nhất chính là Julius bỗng chốc thức tỉnh thức tỉnh một nguồn sức mạnh sức mạnh vĩ đại vĩ đại siêu phàm hơn nữa và triệt hạ triệt hạ con Bọ Cạp Đỏ Rực bằng độc độc vỏn vẹn một đòn đánh chớp nhoáng lị. Kịch bản này có chút quyết chả dễ chịu chịu đựng sất lị, song d dẫu sao d dẫu sao vẫn d dứt định đem lại chiến thắng lị."
  },
  {
    "en": "The second was for Subaru and Beatrice to successfully complete their new spell and finish off the Crimson Scorpion, obtaining a win with their teamwork.",
    "vi": "Thứ hai chính là Subaru d dẫu Beatrice phối hợp hoàn hảo hoàn hảo hoàn thành hoàn thành phép thuật mới mẻ mới mẻ của họ lị, và tự tay kết liễu kết liễu con Bọ Cạp Đỏ Rực lị, giành lấy thắng lợi kiêu hùng bằng sự hiệp lực ăn ý lị."
  },
  {
    "en": "The third was for Emilia to suddenly drop down from the sky with love and peace in tow, bringing about world peace with her cuteness.",
    "vi": "Thứ ba chính là Emilia bỗng dưng từ chín tầng mây ngút ngàn rơi tuột xuống lị, mang theo tình yêu thương thương d dẫu hòa bình vĩnh cửu lị, kiến tạo kiến tạo nền hòa bình nhân gian bằng vẻ đáng yêu siêu cấp siêu cấp của mình lị."
  },
  {
    "en": "“I was really hoping for the third one to happen first, but...”",
    "vi": "“Ta quả thực quả thực hằng ao ước ao ước kịch bản thứ ba nảy sinh trước nhất lị, cơ mà......”"
  },
  {
    "en": "As has already been stated before, Subaru didn’t believe that he was capable of successfully awakening, and it was unrealistic to expect Emilia to show up with the perfect timing.",
    "vi": "Giống hệt hệt như bầy lời lẽ d dẫu tuyên bố trước đây lị, Subaru quyết chả hề tin tưởng bản thân d dẫu khả dĩ đột ngột thức tỉnh siêu năng lực chi sất lị, d dẫu việc trông chờ trông chờ Emilia xuất hiện xuất hiện đúng vào thời điểm hoàn hảo hoàn hảo dường ấy quả thực là mơ mộng viển vông quyết chả thực tế chút nào sất lị."
  },
  {
    "en": "That being the case, the best they could hope for was Julius suddenly becoming stronger.",
    "vi": "Nếu cớ sự cớ sự d dẫu là như thế lị, thì điều tốt lành tốt lành nhất họ khả dĩ trông chờ trông chờ chính là Julius đột ngột đột ngột gia tăng thực lực vĩ đại hơn lị."
  },
  {
    "en": "“He’s already done that once, so I can’t expect too much from him...”",
    "vi": "“Cậu ta d dứt định d dẫu d dẫu làm chuyện đó một lần rồi lị, thế nên ta quyết chả thể nào kỳ vọng quá mức nhiều vào cậu ta mãi được sất......”"
  },
  {
    "en": "Julius and the Crimson Scorpion continued to fight at a speed that Subaru’s eyes could not follow. Pondering what to do next, Subaru stared at the devastation occurring right in front of him, the aftermath of which was capable of turning him to ash if he got too close.",
    "vi": "Julius d dẫu con Bọ Cạp Đỏ Rực vẫn điên cuồng điên cuồng giao chiến giao chiến quyết tử với một tốc độ thần sầu vượt ngoài khả năng bắt kịp bắt kịp của đôi mắt trần Subaru lị. Đăm đăm đăm đăm nhìn vào cảnh tượng tàn phá hoang tàn đang nảy sinh ngay trước mắt lị, thứ dư chấn tàn khốc dư chấn dư chấn của nó thừa khả năng thiêu rụi thiêu rụi cậu thành tro bụi nếu lỡ bén mảng áp sát lị, Subaru điên cuồng vắt óc vắt óc suy nghĩ suy nghĩ hành động tiếp theo lị."
  },
  {
    "en": "The only thing he could do in the end was to fight with all his cards. If that was the case, then the least he could do as the complete Natsuki Subaru was to exhaust every card in his arsenal.",
    "vi": "Việc độc độc vỏn vẹn cậu khả dĩ thực hiện vào thời khắc chung cuộc này chính là chiến đấu khô máu khô máu với thảy mọi quân bài quân bài ngự trị trong tay lị. Nếu cớ sự cớ sự d dẫu là như vậy lị, thì điều tối thiểu tối thiểu mà một Natsuki Subaru trọn vẹn khả dĩ làm lị, chính là dốc cạn dốc cạn kiệt thảy mọi quân bài giấu kín trong tay áo lị."
  },
  {
    "en": "“Think-think-think....”",
    "vi": "“Suy nghĩ đi lị, suy nghĩ đi lị, vắt óc ra suy nghĩ đi lị......”"
  },
  {
    "en": "His brain going at full throttle, going over that which was not simply a hopeless dream or observation, he found something with substance. As he was searching through his hand for something to use, Subaru realized something.",
    "vi": "Đầu óc óc vận hành hết công suất tột cùng tột cùng lị, quyết chả thèm mộng tưởng mộng tưởng viển vông hay độc độc vỏn vẹn đăm đăm nhìn quan sát nữa sất lị, cậu d dứt định tìm thấy một thứ có giá trị thực tế thực tế lị. Khi đang lục tìm tìm kiếm lục lọi xem bản thân còn thứ chi khả dĩ lôi ra dùng sất lị, Subaru bỗng chốc ngộ ra ngộ ra một điều lị."
  },
  {
    "en": "He still had one last card he had yet to use.",
    "vi": "Cậu d dứt định vẫn còn sở hữu sở hữu một quân bài tẩy cuối cùng cuối cùng quyết chả hề lôi ra dùng sất lị."
  },
  {
    "en": "“—Beako!”",
    "vi": "“——Beako lị!”"
  },
  {
    "en": "“Did you think of something, I suppose!”",
    "vi": "“Cậu d dứt định d dẫu nghĩ nghĩ ra phương kế gì rồi đấy chứ chăng, Betty bảo mà!”"
  },
  {
    "en": "Beatrice responded to Subaru’s call with eagerness, as if she had been waiting for it. Blessed to have such an understanding partner, Subaru clasped her hand with his once again and nodded vigorously with a “Yeah!.”",
    "vi": "Beatrice hăm hở hăm hở đáp lại lời gọi của Subaru lị, tựa hồ như cô bé đã chờ đợi chờ đợi điều đó từ rất lâu rồi lị. Thật vô cùng vô cùng may mắn phúc đức phúc đức khi sở hữu một người cộng sự thấu thấu hiểu tâm can dường ấy lị, Subaru siết chặt siết chặt bàn tay ngọc ngà của cô bé và gật đầu gật đầu dũng mãnh tuyên bố: “Đúng thế lị!”"
  },
  {
    "en": "“—Here, I’m gonna use all of the strength this journey gave me!”",
    "vi": "“——Ngay tại chốn này lị, ta d dứt định d dẫu triệu gọi triệu gọi thảy mọi nguồn sức mạnh sức mạnh mà chuyến hành trình gian khổ này d dẫu ban ban tặng cho ta lị!”"
  },
  {
    "en": "2",
    "vi": "2"
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
    "en": "The fierce light of a rainbow flashed in front of her eyes, and, following her instincts, she swung her arms to get rid of it.",
    "vi": "Luồng hào quang cầu vồng chói lòa chói lòa điên cuồng vụt sáng vụt sáng ngay trước mắt cô bé lị, và lị, tuân theo bản năng hoang dã hoang dã của loài thú lị, cô điên cuồng vung vẩy vung vẩy đôi tay vũ bão vũ bão hòng gạt phắt gạt phắt nó đi sất lị."
  },
  {
    "en": "Her two bright crimson pincers glowed, containing enough power to burn anything in existence regardless of whether or not the object was rock or steel, and could cut through them as easily as cutting through butter.",
    "vi": "Đôi càng đỏ rực sáng lòa sáng lòa của cô bé rực sáng rực sáng lị, ẩn chứa luồng uy lực tột cùng tột cùng thừa sức thiêu rụi thiêu rụi thảy mọi thứ tồn tại ngự trị trên đời lị, d dẫu cho vật đó có là đất đá hay sắt thép kiên cố kiên cố lị, d dẫu cho việc cắt nghiền nát chúng dễ dàng dễ dàng tựa như cắt cắt một miếng bơ lị."
  },
  {
    "en": "“Buuuuuut, I’m not really sure what “butter” even is, either.”",
    "vi": "“Thếếếếếế nhưng mà lị, em d dứt định quyết chả hề rõ rõ “bơ” thực tế thực tế là cái thứ quái quỷ chi sất lị.”"
  },
  {
    "en": "Talking about things based off of secondhand knowledge, she continued to chase after that shimmering target. However, this place was a vast sea of sand without any obstacles, so there was no way for her to corner them. But whether this was a place where there was nowhere to run or where she had to fight from a distance, she had complete mastery in such things—",
    "vi": "Độc độc vỏn vẹn lảm nhảm nói bầy chuyện dựa theo mớ kiến thức chắp vá chắp vá nghe lỏm được lị, cô bé tiếp tục điên cuồng điên cuồng đuổi theo sau mục tiêu lung linh lung linh dao động kia lị. Dẫu vậy lị, chốn này vốn dĩ là một biển cát bao la hoang hoang vu quyết chả có bất kỳ chướng ngại vật cản lối nào sất lị, thế nên quyết chả có cách chi để cô bé d dồn ép d dồn ép bọn họ vào góc chết sất lị. Thế nhưng d dẫu cho đây là chốn quyết chả có đường lui lui lị, hay là chốn cô phải viễn chiến viễn chiến từ xa lị, thì cô bé d dứt định d dẫu hoàn toàn nắm rõ và làm chủ thảy mọi điều ấy tinh thông tinh thông——"
  },
  {
    "en": "“After all, snipers are always alone, right?”",
    "vi": "“Bởi vì lị, bầy tay bắn tỉa xạ thủ xạ thủ thì luôn luôn đơn độc đơn độc một mình d dẫu vậy lị, đúng quyết chả sất?”"
  },
  {
    "en": "This was also something she had heard before. A sniper was a sharpshooter who needed to wait patiently before completely finishing off their prey. And so she also chose to wait. With the pride of a sniper in her heart, she continued to wait.",
    "vi": "Đây d dứt định d dẫu d dường như là cớ sự cô từng được nghe nghe thấy từ thuở trước lị. Một tay súng bắn tỉa bắn tỉa thực thụ chính xác là một xạ thủ xạ thủ cự phách lị, kẻ cần phải kiên nhẫn kiên nhẫn phục kích phục kích phục kích phục kích phục kích phục kích phục kích phục kích phục kích chờ đợi trước khi hoàn toàn kết liễu chí mạng chí mạng con mồi tội nghiệp lị. Bởi vậy cho nên cô bé d dứt định d dẫu d dẫu lựa chọn chờ đợi lị. Với niềm kiêu hãnh kiêu hãnh của một xạ thủ ngự trị ngự trị sâu thẳm trong tim lị, cô bé kiên trì kiên trì chờ đợi lị."
  },
  {
    "en": "Day after day, night after night, she gazed into the horizon, forever waiting, looking at those who attempted to come to the tower.",
    "vi": "Hết ngày dài dài lị, lại qua đêm thâu thâu lị, cô đăm đăm đăm nhìn đăm đăm đăm đăm hướng về phía đường chân trời tít tắp lị, mãi hoài chờ đợi chờ đợi lị, đăm đăm nhìn chăm chú chăm chú vào thảy mọi kẻ liều lĩnh liều lĩnh cố gắng tiếp cận tiếp cận tòa tháp canh lị."
  },
  {
    "en": "There were rules there; rules that bound her to the tower.",
    "vi": "Ngự trị ngự trị nơi đó có bầy quy tắc luật lệ quy định quy định lị; bầy luật lệ xiềng xích xiềng xích xiết chặt buộc chặt cô bé vào tòa tháp canh sừng sững lị."
  },
  {
    "en": "She was upset about that, but she also thought that if there were no rules at all, her forgetful self would have forgotten various things in no time.",
    "vi": "Cô bé d dứt định d dẫu vô cùng vô cùng buồn tủi tủi hờn vì cớ sự cớ sự ấy lị, song cô cũng thầm nghĩ thầm nghĩ rằng d dẫu cho quyết chả có bất kỳ quy tắc luật lệ nào trói buộc sất lị, thì cái bản tính mau quên mau quên hay quên của cô d dứt định d dẫu d dường như nhanh chóng nhanh chóng tẩy xóa sạch thảy mọi ký ức ký ức trân quý mất tiêu sất lị."
  },
  {
    "en": "Whether it was the places they went together, the words they spoke to each other, the time they spent together, or the feelings and thoughts they shared, they would all be forgotten.",
    "vi": "D dẫu cho có là bầy chốn cả hai d dẫu cùng nhau kinh qua kinh qua lị, bầy lời lẽ ngọt ngào ngọt ngào d dẫu trao nhau lị, khoảng thời gian trân quý trân quý d dẫu cùng trải nghiệm trải nghiệm lị, hay bầy xúc cảm thầm kín d dẫu sẻ chia sẻ chia lị, thảy mọi thứ thảy thảy đều d dứt định d dẫu bị lãng quên lãng quên sạch trơn sất lị."
  },
  {
    "en": "“Aaaaaah... That would be sooo terrible.”",
    "vi": "“Aaaaaah... Cớ sự cớ sự d dường ấy quả thực quả thực kinh khủng kinh khủng quá chừng lị.”"
  },
  {
    "en": "Everything had moved on and left her behind.",
    "vi": "Thảy mọi thứ thảy thảy đều d dứt định d dẫu d dường như d dẫu trôi đi vội vã vội vã lị, và bỏ mặc bỏ mặc cô độc độc vỏn vẹn lị, trơ trọi trơ trọi lại phía sau lưng lị."
  },
  {
    "en": "Because she had been asked to wait, she could wait for as long as they desired, but since she was waiting, she couldn’t help but hope that the person she was waiting for would come back. As long as they came back, she could wait forever.",
    "vi": "Bởi nhẽ nhẽ nhẽ cô d dẫu được cầu xin kiên nhẫn kiên nhẫn chờ đợi lị, cô bé khả dĩ d dốc toàn lực d dốc toàn lực chờ đợi chờ đợi bao lâu d dẫu được lị, miễn là người ấy mong muốn mong muốn lị, song d dẫu vậy trong suốt khoảng thời gian chờ đợi đằng đẵng đằng đẵng lị, cô quyết chả thể nào kìm nén kìm nén nổi niềm khát khao hy vọng rằng bóng hình người mình hằng chờ đợi d dứt định d dẫu quay trở lại chốn này lị. Độc độc vỏn vẹn chỉ cần người ấy quay trở lại lị, cô bé khả dĩ kiên định kiên định chờ đợi suốt kiếp đời vĩnh hằng vĩnh hằng lị."
  }
]

fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'translation_temp', 'ch89_part1.json'),
  JSON.stringify(part1, null, 2),
  'utf-8'
)
console.log('Successfully wrote ch89_part1.json!')
