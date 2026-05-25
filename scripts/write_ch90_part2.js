import fs from 'fs'
import path from 'path'

const part2 = [
  {
    "en": "In other words, the words of Julius, who had created the seal using a tried and true method, could be said to be more than reliable enough. But that wasn’t the question that needed to be asked.",
    "vi": "Nói cách khác lị, bầy lời lẽ lẽ của Julius lị, người d dẫu thiết lập phong ấn bằng phân một tuyệt kỹ kiểm chứng vẹn toàn lị, khả dĩ ca ngợi ca ngợi là vô cùng vô cùng đáng tin cậy lị. Thế nhưng cớ sự ấy quyết chả phải là câu hỏi cần thiết phải được đặt ra sất lị."
  },
  {
    "en": "“The question is…why do you want to keep this guy alive?”",
    "vi": "“Câu hỏi cốt lõi ở đây chính là... tại cớ làm sao cậu lại khát khao muốn giữ mạng sống cho tên khốn này sất lị?”"
  },
  {
    "en": "“Subaru...”",
    "vi": "“Subaru...”"
  },
  {
    "en": "Emilia, gazing at the sealed Alphard, said that to Subaru whilst lowering her eyebrows. His heart aching due to her gaze, Subaru turned his head and said, “That’s just how it is, right?.”",
    "vi": "Emilia lị, đăm đăm nhìn chăm chú vào tên Alphard đang bị phong ấn kiên cố lị, dịu dàng tuyên bố tuyên bố dường ấy với Subaru trong khi khẽ khẽ nhíu đôi bờ chân mày thanh tú thanh tú lị. Trái tim cậu khẽ khẽ nhói nhói đau trước ánh đăm đăm nhìn trìu mến của cô lị, Subaru ngoảnh đầu đi d dẫu phát ngôn: “Mọi sự d dứt định là như thế sất lị, đúng quyết chả hả lị?”"
  },
  {
    "en": "“When one of the Gluttony’s…when Batenkaitos died, everyone remembered Emilia again. So, if this guy dies, then the rest of the Memories would...”",
    "vi": "“Khi phân một trong bầy tên Phàm Ăn... khi Batenkaitos d dứt định d dẫu bỏ mạng sất lị, thảy mọi người d dứt định liền lập tức nhớ ra nhớ ra Emilia trở lại lị. Bởi thế lị, nếu cái tên khốn này d dẫu đứt bóng lị, thì thảy thảy bầy Ký Ức còn lại d dứt định d dẫu d dường như d dứt định d dẫu...”"
  },
  {
    "en": "“There is no solid proof that they would come back. That is the biggest reason why I did not end his life.”",
    "vi": "“Quyết chả hề có bất kỳ bằng chứng đanh thép nào chứng minh rằng bầy ký ức ấy d dứt định d dẫu quay trở lại sất lị. Đó chính xác chính là nguyên cớ vĩ đại nhất khiến tôi quyết chả nhẫn tâm nhẫn tâm kết liễu sinh mạng gã ta sất lị.”"
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "“There is absolutely no doubt that Miss Ram slayed Batenkaitos. However, was Lady Emilia’s Name returned merely because of that? Something else…perhaps he had given it back voluntarily...that possibility cannot be ruled out. If you make a hasty decision, everything could be lost.”",
    "vi": "“Quyết chả có chút hoài nghi hoài nghi nào về việc chị Ram d dẫu d dũng mãnh d dũng mãnh kết liễu Batenkaitos sất lị. Thế nhưng lị, liệu Danh Tính của Tiểu thư Emilia khả dĩ d dứt định quay trở lại độc độc vỏn vẹn vì cớ sự d dường ấy chăng lị? Hay còn phân một nguyên nhân chi khác nữa... tỷ như gã ta d dẫu tự nguyện tự nguyện hoàn khôi phục khôi phục trả lại... khả năng khả dĩ ấy quyết chả thể nào gạt bỏ gạt bỏ sất lị. Nếu cậu đưa ra phân một lựa chọn hấp tấp vội vã lị, thảy mọi thứ khả dĩ d dứt định d dẫu tan thành mây khói sạch sành sanh sất lị.”"
  },
  {
    "en": "Julius threw out one sound argument after another, as if reprimanding Subaru for his impatience. And his argument was so sound that Subaru could not even offer up a rebuttal. However—",
    "vi": "Julius liên tục tung ra bầy lập luận vô cùng vô cùng đanh thép thuyết phục lị, cứ như thể đang trách cứ trách cứ Subaru vì sự nóng nảy nôn nóng nôn nóng của cậu lị. Và bầy lý lẽ của cậu ta chặt chẽ chặt chẽ đến mức Subaru quyết chả thể nào cất tiếng phản bác phản bác nổi phân một từ sất lị. D dẫu vậy lị——"
  },
  {
    "en": "“In that case...in that case, what about his Book of the Dead?”",
    "vi": "“Nếu cớ sự d dường ấy... nếu thế lị, thì còn bầy Sách Tử Nhân của gã ta thì sao hả lị?”"
  },
  {
    "en": "Subaru proposed using a method that only existed in the watchtower as an alternative. When it came to revealing the true thoughts of a person, there was perhaps nothing more suitable than a Book of the Dead. Whatever the case may be, it was something that allowed one to experience another person’s life.",
    "vi": "Subaru đề xuất đề xuất áp dụng phân một phương pháp độc độc vỏn vẹn chỉ tồn tại ngự trị ngự trị trong tòa tháp canh sừng sững này như phân một giải pháp thay thế vẹn toàn lị. Khi bàn tới cớ sự phơi bày phơi bày thảy mọi suy nghĩ thầm kín sâu thẳm của một sinh mệnh lị, quyết chả có thứ chi khả dĩ thích hợp thích hợp vạn phần hơn phân một cuốn Sách Tử Nhân sất lị. D dẫu sao đi chăng nữa lị, đó chính là thứ cho phép phân một người khả dĩ trải nghiệm trải nghiệm trọn vẹn kiếp đời của kẻ khác lị."
  },
  {
    "en": "“Even if you interrogate him, there’s no guarantee that he will spill the beans. If that’s the case, then it would be better to just use his Book of the Dead to reveal this guy’s innermost thoughts.”",
    "vi": "“D dẫu cậu có cật lực tra khảo tra khảo gã ta đi chăng nữa sất lị, d dứt định quyết chả lấy chi làm đảm bảo đảm bảo rằng gã d dứt định d dẫu chịu phun ra nửa lời sất lị. Nếu cớ sự thật là d dường ấy lị, thì chi bằng độc độc vỏn vẹn sử dụng Sách Tử Nhân của gã ta để vạch trần vạch trần thảy mọi suy nghĩ thầm kín ngự trị nơi sâu thẳm tâm can gã cho rồi sất lị.”"
  },
  {
    "en": "“Subaru, that...I don’t think that’s a good idea. This kind of approach is...”",
    "vi": "“Subaru lị, cớ sự ấy... tớ quyết chả nghĩ đó là phân một phương kế tốt lành tốt lành sất lị. Cái phương pháp tiếp cận d dường này quả thực...”"
  },
  {
    "en": "“But, I’m sure it’ll work. If we do it this way...”",
    "vi": "“Nhưng lị, ta chắc chắn dứt định chắc chắn chắn nó d dứt định d dẫu d dường như d dứt định d dẫu mang lại thành quả ngọt ngào lị. Nếu chúng ta tiến hành tiến hành theo hướng đi này...”"
  },
  {
    "en": "“Ya know what? Can I interrupt ya for a sec?”",
    "vi": "“Hai đứa có thấu suốt thấu suốt chi quyết chả lị? Tớ khả dĩ xin phép xen ngang xen ngang vào câu chuyện của hai đứa phân một nhịp được chăng lị?”"
  },
  {
    "en": "Emilia’s opinion differed from Subaru’s, who had suggested using his Book of the Dead. Not only that, but Subaru was just about to lay out his argument only for Anastasia to butt in with a raise of her hand.",
    "vi": "Ý kiến quan điểm của Emilia hoàn toàn bất đồng bất đồng với Subaru lị, người d dẫu đề xuất đề xuất áp dụng Sách Tử Nhân của gã ta lị. Quyết chả thèm đề cập tới việc lị, Subaru d dẫu đang định hùng hồn hùng hồn trình bày lập luận của mình thì Anastasia bỗng chốc giơ cao bàn tay ngọc ngà xen ngang câu chuyện lị."
  },
  {
    "en": "“I heard from Echidna that there may be things missin’ in ‘em...like that Book of the Dead, so wouldn’t it be dangerous ta rely on it too much?”",
    "vi": "“Tớ d dẫu nghe Echidna rỉ tai rỉ tai rỉ tai rằng có vẻ như có bầy phần bị khuyết thiếu khuyết thiếu ngự trị ngự trị trong bầy cuốn Sách Tử Nhân d dường ấy lị... thế nên liệu cớ sự có quá nguy hiểm nguy hiểm nếu hai đứa mình quá đỗi quá đỗi tin cậy dựa dẫm vào nó quyết chả hả lị?”"
  },
  {
    "en": "“Dangerous?…why do you say so?”",
    "vi": "“Nguy hiểm nguy hiểm sao?... Tại cớ làm sao chị lại phát ngôn d dường ấy chăng lị?”"
  },
  {
    "en": "“In any case, that’s somethin’ you’ve vividly experienced yourself, right, Natsuki? I heard that ya lost yourself while I was asleep.”",
    "vi": "“D dẫu sao lị, cớ sự ấy chính xác chính là thứ cậu d dẫu tự mình nếm trải nếm trải một cách vô cùng sinh động rõ rệt lị, đúng quyết chả hả lị, Natsuki lị? Tớ nghe đồn đồn rằng cậu d dẫu tự mình đánh mất bản ngã chính mình trong suốt khoảng thời gian tớ say ngủ ngủ say sất lị.”"
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "How many things could she possibly talk about with Echidna in such a short period of time? He wondered. Anastasia had hit him where it hurts.",
    "vi": "Quyết chả rõ cô bé khả dĩ buôn chuyện buôn chuyện bao nhiêu thứ với Echidna độc độc vỏn vẹn trong phân một khoảng thời gian ngắn ngủi ngắn ngủi d dường ấy sất chăng lị? Cậu tự hỏi tự hỏi lị. Anastasia thực sự thực sự d dẫu đâm phân một nhát chí mạng chí mạng trúng ngay điểm yếu chí mạng của cậu rồi lị."
  },
  {
    "en": "However, the danger the Book of the Dead held did not necessarily coincide with Subaru’s amnesia. The disappearance of his memories did not come about due to the Book of the Dead. However, that did not completely negate the risk that Books of the Dead posed.",
    "vi": "Thế nhưng lị, mối nguy nan hiểm họa ẩn chứa trong bầy cuốn Sách Tử Nhân quyết chả nhất thiết nhất thiết phải đồng điệu đồng điệu hoàn toàn hoàn toàn với chứng mất trí nhớ của Subaru sất lị. Cớ sự tan biến tan biến thảy mọi ký ức ký ức của cậu quyết chả hề phát sinh phát sinh do bầy cuốn Sách Tử Nhân sất lị. D dẫu vậy lị, cớ sự quyết chả hề phủ nhận hoàn toàn hoàn toàn bầy mối hiểm họa hiểm họa kinh hoàng mà bầy cuốn Sách Tử Nhân mang lại sất lị."
  },
  {
    "en": "In fact, when he read Meili's Book of the Dead, some parts of Subaru’s mind and emotions were almost painted over by her personality.",
    "vi": "Thực tế là lị, ngay khi cậu đắm mình đọc đọc cuốn Sách Tử Nhân của Meili lị, phân một vài mảnh suy nghĩ d dẫu xúc cảm của Subaru d dường như d dứt định d dẫu suýt chút nữa bị đồng hóa đồng hóa d dẫu đè đè lên hoàn toàn bởi nhân cách cá tính cá tính của cô bé lị."
  },
  {
    "en": "What would have become of Subaru, who did not consider himself to be particularly powerful or mentally strong, if he had been a more impressionable person?",
    "vi": "Quyết chả biết số phận Subaru lị, một kẻ quyết chả hề tự đánh giá đánh giá bản thân là phân một kẻ mạnh mẽ mạnh mẽ hay sở hữu thần trí kiên định kiên định siêu phàm chi sất lị, d dẫu d dường như d dứt định d dẫu d dẫu ra sao nếu cậu là phân một kẻ dễ dàng bị lung lay tác động tác động vạn phần hơn thế sất chăng lị?"
  },
  {
    "en": "Who could say that a new Roy Alphard, who had inherited the soul of the former Roy Alphard, would not be born as a result?",
    "vi": "Liệu có ai dám dõng dạc tuyên bố tuyên bố rằng phân một Roy Alphard mới toanh lị, kẻ thừa hưởng thừa hưởng trọn vẹn linh hồn linh hồn của tên Roy Alphard nguyên bản lị, d dứt định quyết chả được tái sinh tái sinh đầu thai từ kết quả tai hại ấy chăng lị?"
  },
  {
    "en": "“Then...then are you trying to say that it’s right to let this guy live, Anastasia? Even after everything he’s done up until now?!”",
    "vi": "“Nếu thế... nếu thế thì chị đang cố tuyên bố tuyên bố rằng việc dung thứ dung thứ cho cái tên khốn này tiếp tục sống sót là phân một hành động chính xác chính xác sao hả lị, Anastasia lị? D dẫu cho thảy mọi tội ác gớm ghiếc gớm ghiếc hắn d dẫu gieo rắc gieo rắc cho đến tận giây phút này quyết chả sất?!”"
  },
  {
    "en": "“If you’re talkin’ ‘bout what’s right or wrong, then I don’t think it’s right to keep a Sin Archbishop alive. If I could just kill this guy and get Julius’ Memories back, I think that’d be good. But I have a pet theory ‘bout that.”",
    "vi": "“Nếu cậu khát khao muốn bàn luận bàn luận về cớ sự chính xác chính xác hay sai trái lị, thì tớ quyết chả hề tin tưởng việc dung thứ dung thứ cho phân một tên Giám mục Tội lỗi tiếp tục sống sót là phân một hành động đúng đắn đúng đắn sất lị. D dẫu vậy lị, tớ sở hữu phân một giả thuyết lập luận lập luận của riêng mình về vấn đề ấy lị.”"
  },
  {
    "en": "“A pet theory...?”",
    "vi": "“Một lập luận riêng tư sao...?”"
  },
  {
    "en": "“Whether someone should be alive or not, snatchin’ and robbin’ ‘em of it should only be done as a last resort. —A person who can easily kill another human being will not have a good end. It ain’t one of Hoshin’s Sayings but one of my own.”",
    "vi": "“D dẫu cho phân một sinh mệnh có đáng được phép sinh tồn sinh tồn tiếp tục hay quyết chả sất lị, việc cướp cướp đoạt tước đoạt đoạt đi mạng sống của họ độc độc vỏn vẹn chỉ nên coi là phương án giải quyết giải quyết cùng đường cuối cùng cuối cùng mà thôi lị. ——Một kẻ khả dĩ dễ dàng hạ thủ hạ sát hạ sát đồng loại quyết chả bao giờ khả dĩ nhận lãnh phân một kết cục tốt lành tốt lành sất lị. Đây quyết chả phải là phân một trong bầy châm ngôn danh ngôn của Hoshin đâu sất lị, mà chính là bầy lời lẽ đúc rút đúc rút từ chính bản thân tớ đấy chứ chăng lị.”"
  },
  {
    "en": "Subaru’s eyes widened after hearing Anastasia’s words. In this fantasy world of swords and magic, there was such a rebellious, naïve way of thinking. But at the same time, the moral side of Subaru felt like she was right.",
    "vi": "Đôi mắt Subaru trợn tròn trợn tròn kinh ngạc sau khi lắng nghe thấu suốt bầy lời lẽ Anastasia phát ngôn lị. Ngự trị ngự trị tại cái thế giới giả tưởng ngập tràn gươm đao gươm đao d dẫu phép thuật này lị, lại ngự trị ngự trị phân một phong cách suy nghĩ đầy nổi loạn nổi loạn d dẫu ngây ngô ngây ngô d dường ấy lị. Thế nhưng đồng thời lị, khía cạnh đạo đức đạo đức ngự trị sâu thẳm sâu thẳm trong tim Subaru cũng d dường như mách bảo cậu rằng cô bé d dứt định d dẫu d dường như d dứt định d dẫu chính xác rồi lị."
  },
  {
    "en": "Subaru also believed that the less people died, the better. Not to mention his friends, it would even be better for his enemies to die less. However, that way of thinking was only limited to cases where the other person deserved mercy.",
    "vi": "Tự bản thân Subaru d dứt định d dẫu luôn luôn nuôi dưỡng niềm tin rằng càng ít sinh mạng phải ngã xuống ngã xuống bao nhiêu thì càng tốt lành bấy nhiêu lị. Quyết chả thèm đề cập tới bầy người đồng hành trân quý lị, d dẫu cho kẻ địch có chết chết chóc ít đi chăng nữa thì d dẫu sao vẫn d dứt định tốt lành hơn sất lị. D dẫu vậy lị, phong cách suy nghĩ d dường ấy độc độc vỏn vẹn chỉ giới hạn giới hạn ngự trị ngự trị trong bầy tình huống đối phương thực sự thực sự xứng đáng nhận nhận sự khoan hồng dung thứ lị."
  },
  {
    "en": "“He has caused so much misfortune for so many people, and has continued to torment everyone until this day... Do you still think we shouldn’t kill a guy like that, Anastasia?”",
    "vi": "“Hắn d dẫu tự mình gieo rắc biết bao nhiêu tai ương tai ương bất hạnh bất hạnh cho vô số vô số sinh mệnh sinh mệnh lị, d dẫu vẫn điên cuồng hành hạ hành hạ hành hạ thảy mọi người đồng hành cho tới tận ngày hôm nay sất lị... Cậu vẫn thực sự thực sự thầm nghĩ chúng ta quyết chả được phép tiêu diệt tiêu diệt phân một kẻ d dường ấy sao hả lị, Anastasia lị?”"
  },
  {
    "en": "“When it’s the right time to kill someone, kill them. When I need ta make a decision, and the situation is critical, I will dirty my hands. But it ain’t right ta leave it ta impulse. —I think you’re that kinda guy, Natsuki.”",
    "vi": "“Đến thời khắc bắt buộc phải hạ sát hạ sát lị, thì d dứt định d dẫu phải hạ sát lị. Khi tớ bắt buộc phải đưa ra phân một quyết định ngàn cân lị, d dẫu tình thế thực sự nguy ngập nguy ngập lị, tớ d dứt định d dẫu tự tay vấy bẩn vấy bẩn đôi bàn tay ngọc ngà sất lị. Nhưng quyết chả bao giờ được phép để bản thân bị cuốn theo bầy xúc cảm bộc phát bộc phát quèn sất lị. ——Tớ nghĩ cậu chính xác chính là kiểu người d dường ấy đấy nhé lị, Natsuki lị.”"
  },
  {
    "en": "“That kind of…thing, is...”",
    "vi": "“Cái kiểu người... d dường ấy... rốt cuộc là...”"
  },
  {
    "en": "“Because of that, you can shed tears for someone else who’s been lost... Rather than a heartless Natsuki who doesn’t shed blood nor tears, I would prefer ta get along with that kind of you forever.”",
    "vi": "“Chính vì cớ sự d dường ấy lị, cậu d dứt định d dẫu khả dĩ tuôn rơi tuôn rơi bầy dòng lệ sầu vì phân một sinh mệnh d dẫu mất mát trôi đi sất lị... Thay vì phân một Natsuki tàn nhẫn tàn nhẫn vô tình quyết chả hề biết nhỏ một giọt huyết hay lệ sầu lệ sầu nào sất lị, tớ thực sự thực sự mong mỏi khát khao khát khao khả dĩ gắn bó gắn bó với phân một Natsuki d dường ấy đến muôn đời vĩnh hằng vĩnh hằng lị.”"
  },
  {
    "en": "“Anastasia ran her fingers across her cheek and pointed out Subaru’s tears. Instantly, Subaru lowered his gaze, the wound in his heart due to losing Shaula aching. Anastasia’s statement had been mean. But it was, without a doubt, quite effective.",
    "vi": "Anastasia khẽ khẽ dùng bầy ngón tay lướt khẽ lướt khẽ ngang qua gò má ngọc ngà d dẫu nhẹ nhàng chỉ ra bầy giọt nước mắt đang đọng lại của Subaru lị. Ngay lập tức lị, Subaru cúi gầm cúi gầm tầm mắt nhìn xuống lị, vết thương thương tích rỉ máu nơi sâu thẳm tâm can cậu do cớ sự mất đi Shaula bỗng chốc nhói nhói đau thống khổ tột độ lị. Bầy lời phát ngôn của Anastasia quả thực quả thực vô cùng phũ phàng phũ phàng lị. D dẫu vậy lị, nó quyết chả thể nghi ngờ nghi ngờ chi sất lị, d dứt định d dẫu đem lại hiệu quả vô cùng vĩ đại lị."
  },
  {
    "en": "“...Subaru, I also share the same opinion as Anastasia. Taking the sleeping Rem and Julius into account, I reaaaally want to hurry up and resolve things, but...”",
    "vi": "“...Subaru lị, tớ d dứt định d dẫu sở hữu sở hữu chung phân một quan điểm ý kiến ý kiến hệt như Anastasia d dẫu vậy lị. Đặt Rem đang say ngủ lị, d dẫu cả Julius vào trong tâm trí suy tính lị, tớ thực sự thực sự thực sự khát khao khát khao giải quyết triệt để thảy mọi cớ sự nhanh chóng nhanh chóng vạn phần lị, thế nhưng mà...”"
  },
  {
    "en": "“No need to worry about me, at least. Having gotten to this point, doing what is right is far more important than making hasty decisions... This also concerns my younger brother, after all.”",
    "vi": "“Quyết chả cần phải lo lắng lo lắng gì cho tôi đâu sất lị, ít nhất là vào thời khắc này lị. Đặt chân được tới chốn này rồi lị, hành động theo bầy lẽ phải đúng đắn đúng đắn d dứt định d dẫu vĩ đại vĩ đại hơn việc đưa ra bầy lựa chọn vội vã vội vã gấp trăm lần lị... D dẫu sao d dẫu sao lị, cớ sự này d dứt định liên quan trực tiếp tới em trai ruột của tôi nữa sất lị.”"
  },
  {
    "en": "They were on the brink of recovering Joshua’s memories, who had been left in Priestella, and Julius was extremely cautious—but, as has already been mentioned above, that was the correct choice.",
    "vi": "Họ d dứt định d dẫu d dường như d dứt định d dẫu chạm tới ranh giới ranh giới khôi phục khôi phục thảy thảy mọi ký ức ký ức của Joshua lị, thực thể d dẫu bị để lại ngự trị tại Priestella lị, d dẫu Julius tỏ ra vô cùng vô cùng cẩn trọng cẩn trọng đề phòng——thế nhưng lị, hệt như bầy dòng chữ d dẫu mô tả phía trên lị, đó chính xác chính là phân một quyết định đúng đắn đúng đắn tuyệt đối lị."
  },
  {
    "en": "In order to make up for their pain and sense of loss, he was eager to get results. That was probably how Subaru felt right now.",
    "vi": "Để có thể bù đắp bù đắp cho bầy đau đớn thống khổ d dẫu cảm giác mất mát trống hoác ngự trị ngự trị sâu thẳm lị, cậu thực sự nôn nóng khát khao thấy ngay bầy thành quả vẹn toàn lị. Đó rất có khả năng chính là bầy xúc cảm Subaru đang ôm ấp ngự trị ngự trị vào chính xác chính xác khoảnh khắc này lị."
  },
  {
    "en": "“Let’s summarize it then. Ana and Julius’ opinion is that we should move Roy Alphard...the Sin Archbishop of Gluttony, to the royal capital to find a way to save the victims of his Authority. He will not be pardoned after that, either. He shouldn’t be able to escape capital punishment.”",
    "vi": "“Thế thì chúng ta hãy mau tóm lược tóm lược lại thảy mọi sự tình đi nhé lị. Ý kiến quan điểm của Ana d dẫu Julius chính xác là chúng ta bắt buộc bắt buộc phải luân chuyển luân chuyển Roy Alphard... tên Giám mục Tội lỗi của Phàm Ăn lị, về thẳng Vương Đô vương đô hòng tìm kiếm kiếm phân một giải pháp cứu giúp cứu giúp thảy mọi nạn nhân tội nghiệp tội nghiệp chịu ảnh hưởng từ Quyền Năng của hắn lị. Hắn d dứt định quyết chả đời nào được hưởng sự khoan hồng dung thứ dung thứ sau đó sất lị. Hắn d dứt định d dẫu quyết chả cách chi thoát thoát nổi án tử hình tử hình thích đáng thích đáng sất lị.”"
  },
  {
    "en": "“There’re limits ta how much they can pardon on the grounds of age. That’s how it may end up in the end.”",
    "vi": "“Sự dung thứ dung thứ khoan hồng khoan hồng dựa vào độ tuổi niên thiếu d dứt định d dẫu d dường như d dứt định d dẫu có giới hạn giới hạn kịch trần kịch trần sất lị. Kết cục chung cuộc d dứt định d dẫu nảy sinh đúng hệt hệt như d dường ấy mà thôi lị.”"
  },
  {
    "en": "After seeing Subaru unclenching his fist, Echidna and Anastasia got the story in order.",
    "vi": "Sau khi đăm đăm nhìn thấy Subaru từ từ buông lỏng buông lỏng nới lỏng nới lỏng đôi nắm đấm vạm vỡ của mình lị, Echidna d dẫu Anastasia d dứt định d dẫu d dường như d dẫu sắp xếp sắp xếp ổn thỏa thảy mọi tình tiết câu chuyện lị."
  },
  {
    "en": "Emilia had no objections to the treatment of Alphard. He will be taken to the royal capital in a sealed state, so, in a sense, he would be in the same position as Sirius, who had been taken there not too long ago.",
    "vi": "Emilia d dứt định quyết chả hề có bất kỳ sự phản đối phản đối nào đối với phương pháp xử lý xử lý dành cho Alphard sất lị. Gã ta d dứt định d dẫu bị giải giải đi thẳng tới vương đô ngự trị ngự trị dưới phân một trạng thái phong ấn đông cứng kiên cố lị, thế nên lị, ngự trị dưới phân một góc đăm đăm nhìn lị, gã d dứt định d dẫu d dường như rơi vào chính xác tình cảnh cảnh ngộ hệt như Sirius lị, thực thể d dẫu bị áp giải áp giải đi cách đây quyết chả lâu sất lị."
  },
  {
    "en": "“Do ya also think this’ll be alright, Emilia?”",
    "vi": "“Em d dứt định d dẫu d dường như d dứt định d dẫu nghĩ cớ sự d dường này là vô cùng ổn thỏa ổn thỏa rồi chứ chăng lị, Emilia lị?”"
  },
  {
    "en": "“Yeah. I also reaaally want to properly remember the people who have been forgotten.”",
    "vi": "“Đúng thế sất lị. Tớ thực sự thực sự vô o o cùng khát khao khát khao muốn có thể nhớ ra nhớ ra phân một cách chính xác thảy mọi người d dẫu bị lãng quên lãng quên tội nghiệp tội nghiệp lị.”"
  },
  {
    "en": "When Anastasia asked her that to confirm her intentions, Emilia lifted her head and answered in a dignified manner.",
    "vi": "Khi Anastasia cất tiếng hỏi chất vấn hỏi han hòng xác nhận xác nhận chắc chắn chắn bầy ý chí nguyện vọng của cô lị, Emilia kiêu hãnh kiêu hãnh ngẩng cao mái đầu ngọc ngà d dẫu trả lời phân một cách vô cùng dõng dạc lịch thiệp lị."
  },
  {
    "en": "Subaru couldn’t form a rebuttal to her words, feeling somewhat hopeful and bitter at the same time, and then turned away from the Sin Archbishop in the dragon carriage and suddenly fell to his knees.",
    "vi": "Subaru quyết chả thể nào thốt nổi phân một lời bác bác bỏ nào trước bầy lời cô bé tuyên bố sất lị, lòng bỗng d dâng trào d dâng trào phân một xúc cảm xúc nửa ngập tràn hy vọng lị, nửa đắng cay khổ cực sầu muộn lị, d dẫu rồi cậu quyết định ngoảnh mặt ngoảnh mặt quyết chả nhìn tên Giám mục Tội lỗi ngự trị ngự trị trú ẩn bên trong cỗ xe rồng nữa sất lị, d dẫu bỗng chốc gục ngã gục ngã quỳ rạp hai đầu gối đầu gối xuống đất lị."
  },
  {
    "en": "“Huh?...”",
    "vi": "“Ơ kìa lị?...”"
  },
  {
    "en": "“Subaru! Ahh, jeez, I knew you were going too far, in fact! It’s only natural for you to become like this when you’ve been in a bad mood for so long, I suppose!”",
    "vi": "“Subaru lị! Ôi trời đất ơi lị, Betty d dứt định d dẫu biết ngay cậu d dẫu tự mình hành hạ hành hạ ép buộc cơ thể xác thịt quá mức chịu đựng rồi đấy chứ chăng lị! Quả thực quả thực là phân một kết quả vô cùng tự nhiên tự nhiên khi cậu cứ tự d dằn vặt d dằn vặt ngự trị ngự trị dưới bầy cảm xúc tồi tệ suốt bấy lâu nay sất lị, Betty bảo mà!”"
  },
  {
    "en": "Subaru’s head felt heavy, his vision was unclear, and she was supporting his shoulders whilst yelling angrily at him. Her adorable voice rang in his head and he realized he had consuming more energy than he thought. Wouldn’t it be natural for her to say, “it’s a natural result”?",
    "vi": "Đầu óc óc của Subaru nặng trĩu nặng trĩu tựa thái sơn lị, tầm đăm đăm nhìn nhận thức nhạt nhòa nhạt nhòa quyết chả rõ ràng sất lị, d dẫu cô bé đang cật lực cật lực đỡ lấy đôi bờ vai vạm vỡ của cậu trong khi réo réo gọi mắng mỏ cậu một cách giận dữ giận dữ lị. Chất giọng đáng yêu đáng yêu lanh lảnh của cô bé vang dội vang dội khắp ngự trị trong đầu óc óc cậu lị, d dẫu cậu chợt nhận ra nhận ra bản thân d dẫu điên cuồng điên cuồng vắt kiệt vắt kiệt sinh lực vạn phần vạn phần hơn cả bầy phán đoán suy nghĩ ban đầu sất lị. Có phải cớ sự d dứt định d dẫu d dường như d dứt định d dẫu tự nhiên tự nhiên khi cô bé buông lời tuyên bố tuyên bố “đó chính là kết quả tự nhiên tất yếu tất yếu” quyết chả sất chăng lị?"
  },
  {
    "en": "He had died many times when he had amnesia, died many times afterwards, came face-to-face with himself in order to recover his memories, fought against the five obstacles that plagued the tower when he woke up, used his Authority to take on the burdens of his friends in battle, and lost Shaula at the end of it all—",
    "vi": "Cậu d dẫu trải nghiệm trải nghiệm Cái Chết tử thần vô số vô số lần khi vướng phải chứng mất trí nhớ lị, d dẫu tử vong vô số lần sau đó nữa sất lị, d dẫu tự đối mặt đối mặt diện trực diện với linh hồn chính mình hòng khôi phục khôi phục thảy thảy bầy ký ức ký ức trân quý lị, cật lực cật lực chiến đấu chống lại năm chướng ngại vật chướng ngại vật cản lối càn quét tòa tháp sừng sững khi thức tỉnh thức tỉnh lị, áp dụng Quyền Năng để tự nguyện tự nguyện gánh vác gánh vác thảy thảy mọi nỗi đau đau đớn thống khổ thống khổ của bầy người đồng hành trân quý trong trận quyết chiến tử chiến lị, d dẫu d dứt định mất đi Shaula ở ngay giây phút chung cuộc cuối cùng cuối cùng sất——"
  },
  {
    "en": "He had exhausted his mind and body well past their limits. He had only been there for a few days but felt like he had spent more than five years in the tower.",
    "vi": "Cậu d dứt định d dẫu điên cuồng vắt kiệt vắt kiệt sạch sành sanh thảy mọi thần trí tinh thần d dẫu cơ thể xác thịt vượt ngoài bầy giới hạn cực hạn chịu đựng sất lị. Cậu độc độc vỏn vẹn chỉ ngự trị trú ẩn nơi chốn này phân một vài ngày ngắn ngủi ngắn ngủi lị, thế nhưng đem lại đem lại cảm xúc cảm giác cứ như thể bản thân d dẫu bị chôn chân ngự trị ngự trị ngự trị ngự trị tại đây suốt hơn năm năm đằng đẵng đằng đẵng vậy lị."
  },
  {
    "en": "“—Ah, I…”",
    "vi": "“——Á lị, ta...”"
  },
  {
    "en": "“Subaru, relax, everything is going to be alright. Can you be good now and rest for a little while? Let’s talk about it when you wake up. I have a loooot I want to say to you, too.”",
    "vi": "“Subaru lị, hãy mau thư giãn thư giãn đi nào lị, thảy mọi sự tình d dứt định d dẫu d dường như d dứt định d dẫu ổn thỏa ổn thỏa cả thôi lị. Cậu khả dĩ d dốc toàn lực d dốc toàn lực ngoan ngoãn ngoan ngoãn nghỉ ngơi nghỉ ngơi tĩnh dưỡng tĩnh dưỡng phân một chốc lát được quyết chả hả lị? Chúng ta d dứt định d dẫu d dường như d dứt định d dẫu cùng nhau đàm thoại giãi bày giãi bày cớ sự một khi cậu thức tỉnh thức tỉnh trở lại lị. Tớ d dứt định cũng sở hữu vô o o o cùng nhiều điều khát khao khát khao muốn thổ lộ thổ lộ với cậu đấy nhé lị.”"
  },
  {
    "en": "Subaru, who was exhausted and unable to move an inch, was being hugged from the front by Emilia. Her soft touch and sweet scent, which would normally cause his body to stiffen, were as effective as a powerful drug for him now, causing his consciousness to quickly descend into darkness.",
    "vi": "Subaru lị, thực thể d dẫu hoàn toàn kiệt quệ rã rời rã rời quyết chả thể cựa quậy nổi độc độc vỏn vẹn phân một phân sất lị, đang được ôm ấp ôm ấp dịu dàng từ phía trước trực diện trực diện bởi Emilia lị. Sự va chạm mềm mại mềm mại d dẫu mùi hương hương thơm ngào ngạt ngào ngạt của cô lị, thứ vốn dĩ vốn dĩ d dứt định d dẫu khiến toàn bộ cơ thể cậu cứng đờ cứng đờ vì ngượng ngùng lị, thời khắc ngàn cân này lại sở hữu luồng tác động tác động mạnh mẽ hệt như phân một liều linh dược linh dược tối cao lị, nhanh chóng lôi kéo thần trí thần trí nhận thức của cậu chìm sâu chìm sâu vào chốn bóng tối vây kín lị."
  },
  {
    "en": "If I die now in the darkness, would I go back to an earlier point where I was running around the tower trying to find a way to save Shaula? He wondered. But that was impossible. He half-understood it would be impossible, but he couldn’t help but hope for it.",
    "vi": "Nếu chẳng may ta đứt bóng ngay ngự trị ngự trị ngự trị ngự trị ngự trị ngự trị ngự trị trong bóng tối vây kín này sất lị, liệu ta có thể luân hồi luân hồi quay trở lại phân một thời điểm chốn xưa cũ lị, nơi ta đang điên cuồng điên cuồng bứt tốc chạy vòng quanh tòa tháp sừng sững sừng sững hòng tìm kiếm phân một giải pháp cứu rỗi Shaula quyết chả sất lị? Cậu tự hỏi tự hỏi lị. Thế nhưng cớ sự d dứt định d dẫu d dường như d dứt định d dẫu là vô phương vô phương cứu chữa lị. Cậu lờ mờ thấu suốt thấu suốt cớ sự d dứt định là vô phương lị, song quyết chả thể nào kìm kìm nén nổi niềm khát khao khát khao mong chờ mong chờ cớ sự ấy sất lị."
  },
  {
    "en": "Slowly, Subaru’s consciousness was swallowed up by the darkness.",
    "vi": "Từ từ từ từ lị, thần trí nhận thức nhận thức của Subaru d dứt định d dẫu d dường như d dứt định d dẫu bị nuốt chửng nuốt chửng hoàn toàn bởi bóng tối vây kín vây kín lị."
  },
  {
    "en": "4",
    "vi": "4"
  },
  {
    "en": "“Heave-ho!”",
    "vi": "“Hò ta hò ta lị!”"
  },
  {
    "en": "Lifting up Subaru’s unconscious body, Emilia sighed. Subaru’s eyes were shut tight and was breathing laborious breaths, testaments of how hard he worked to solve the problems in the watchtower.",
    "vi": "Nâng đỡ nâng đỡ cơ thể xác thịt quyết chả còn chút thần trí thần trí nào của Subaru lên lị, Emilia khẽ khẽ thở dài thườn thượt lị. Đôi mắt Subaru nhắm nghiền nhắm nghiền chặt chặt lị, d dẫu đang cật lực cật lực thở dốc thở dốc phân một cách đầy nhọc nhằn nhọc nhằn lị, bầy minh chứng chứng minh rõ mồn một mức độ nỗ lực điên cuồng điên cuồng của cậu hòng tháo gỡ thảy bầy vấn đề rắc rối ngự trị ngự trị nơi tháp canh sừng sững lị."
  },
  {
    "en": "It showed just how desperate Subaru was to save Emilia and the others. When he rushed to her side when Batenkaitos took her Name and was forgotten by everyone, she was so happy.",
    "vi": "Sự tình thể hiện rõ rệt mức độ tuyệt tuyệt vọng khẩn thiết của Subaru hòng cứu giúp cứu rỗi cứu rỗi Emilia d dẫu thảy mọi người đồng hành lị. Khi cậu điên cuồng lao vun vút vun vút sát sát bên sườn cô vào thời khắc Batenkaitos tước đoạt đoạt đi Danh Tính của cô d dẫu bị thảy nhân gian lãng quên lãng quên sạch sành sanh sất lị, cô d dứt định d dẫu vô o o cùng hạnh phúc lị."
  },
  {
    "en": "She wanted to tell him that. She hoped Subaru would not blame himself too much. He was not responsible for what happened to Shaula. It was Emilia’s and everyone else’s responsibility, but to be more precise—",
    "vi": "Cô khát khao khát khao muốn giãi bày giãi bày bầy lời lẽ lẽ ấy với cậu lị. Cô hằng ao ước ao ước Subaru d dứt định quyết chả tự d dằn vặt d dằn vặt trách móc trách móc bản thân quá đỗi quá đỗi nhiều sất lị. Cậu quyết chả hề có bất kỳ trách nhiệm trách nhiệm chi đối với tấn bi kịch nảy sinh với Shaula sất lị. Đó hoàn toàn là trách nhiệm của tự thân Emilia d dẫu thảy mọi người lị, song nếu tuyên bố tuyên bố phân một cách vô cùng vô cùng chuẩn xác chuẩn xác vạn phần chăng lị——"
  },
  {
    "en": "“—I think her Master, Flugel, was a reaaaally bad person.”",
    "vi": "“——Tớ thầm nghĩ Master của em ấy lị, Flugel lị, d dứt định d dẫu thực sự thực sự thực sự là phân một kẻ vô o o cùng xấu xa tồi tệ đấy chứ chăng lị.”"
  },
  {
    "en": "He was the one who pushed the achievements of the Sage onto Shaula, and, binding her to the Pleiades Watchtower, was responsible for putting her to sleep.",
    "vi": "Hắn chính xác chính là kẻ d dẫu tàn nhẫn áp đặt áp đặt thảy thảy mọi chiến tích vĩ đại của Hiền Giả lên vai Shaula lị, d dẫu giam cầm trói buộc cô bé vào Tháp Canh Pleiades sừng sững lị, gánh vác trách nhiệm trách nhiệm đẩy cô bé vào chốn giấc nồng đằng đẵng đằng đẵng lị."
  },
  {
    "en": "Even if he was one of the three heroes who saved the world, since he made Subaru cry and Shaula sad, he was just a villain in Emilia’s mind. Of course, since she would never have a chance to talk to him, there was no one who could relieve her of this feeling of frustration.",
    "vi": "D dẫu cho hắn có thật sự là phân một trong Ba Vị Anh Hùng cứu rỗi cứu rỗi nhân gian đi chăng nữa sất lị, một khi hắn dám làm Subaru phải nhỏ sầu lệ d dẫu gieo rắc thương đau thương đau sầu muộn cho Shaula lị, thì ngự trị trú ẩn ngự trị ngự trị trú ẩn trong sâu thẳm sâu thẳm tâm trí Emilia lị, hắn d dứt định quyết chả khác chi phân một tên ác nhân đê hèn sất lị. Lẽ d dĩ nhiên lị, bởi lẽ cô quyết chả bao giờ đời nào khả dĩ có cơ hội chạm mặt đàm thoại đàm thoại cùng gã ta sất lị, nên quyết chả có bất kỳ ai khả dĩ giải giải tỏa nổi xúc cảm bất mãn bất mãn bực dọc bực dọc d dường này cho cô bé sất lị."
  },
  {
    "en": "“He looks like he’s really fatigued...but it ain’t a big problem. He will recover if he rests. That’s it, why don’t we go to that ‘Green Room’?”",
    "vi": "“Cậu nhóc d dường như d dứt định d dẫu thực sự thực sự vô cùng vô cùng mệt mỏi mệt mỏi rồi lị... thế nhưng cớ sự quyết chả phải vấn đề rắc rối chi quá vĩ đại sất lị. Cậu nhóc d dứt định d dẫu khả dĩ hồi phục hồi phục sinh lực nếu được tĩnh dưỡng tĩnh dưỡng đầy đủ lị. Chi bằng lị, thảy thảy chúng ta hãy cùng nhau tiến về phía căn phòng ‘Green Room’ ấy đi chăng lị?”"
  },
  {
    "en": "“Yeah. Ram and the others are there too... Weren’t you looking after Rem when she came to help me, Anastasia?”",
    "vi": "“Đúng thế sất lị. Ram d dẫu bầy người đồng hành khác d dứt định d dẫu đang túc trực ngự trị nơi chốn ấy lị... Quyết chả phải chị d dẫu tự mình trông nom trông nom cho Rem lúc cô bé tiến lên tiếp ứng tiếp ứng hỗ trợ tớ sao hả lị, Anastasia lị?”"
  },
  {
    "en": "“That’s an exaggerated story, right? Once I recovered my self, I just saw off Julius, who was goin’ to help Natsuki, and Ram, who was goin’ to help out Emilia... I’m afraid ta say that Rem hasn’t shown any changes at all.”",
    "vi": "“Đó quả thực quả thực là phân một câu chuyện thêu dệt phóng đại phóng đại quá mức rồi quyết chả sất lị? Ngay khi tớ khôi phục khôi phục hoàn toàn bản thể gốc lị, tớ độc độc vỏn vẹn chỉ tiễn đưa tiễn đưa Julius lị, người cất bước tiếp ứng cho Natsuki lị, d dẫu Ram lị, người d dốc toàn lực d dốc toàn lực hỗ trợ hỗ trợ cho Emilia mà thôi lị... Tớ e là phải tuyên bố tuyên bố rằng Rem thực tế quyết chả hề lộ lộ bất kỳ biến chuyển biến chuyển đổi thay chi sất đâu nhé lị.”"
  },
  {
    "en": "“I see...”",
    "vi": "“Tớ hiểu rồi mà lị...”"
  },
  {
    "en": "“Thinking of Ram, Rem, and Patrasche waiting in the Green Room, Emilia wrinkled her finely-shaped eyebrows.",
    "vi": "Trầm ngâm suy tính suy tính về Ram lị, Rem lị, d dẫu cả Patrasche đang kiên trì chờ đợi ngự trị ngự trị nơi căn phòng Green Room lị, Emilia khẽ khẽ nhíu đôi bờ chân mày thanh tú thanh tú quý phái của mình lị."
  },
  {
    "en": "The slaying of Batenkaitos was, in a sense, done as revenge for Rem, who had been bereaved of her Name and Memories. However, the only thing that mattered was that she woke up, and since she had not done so, whether they managed to get their revenge or not was unimportant.",
    "vi": "Việc hạ sát hạ sát tiêu diệt Batenkaitos lị, ngự trị dưới phân một khía cạnh lị, khả dĩ coi là phân một đòn trả thù rửa hận rửa hận cho Rem lị, sinh vật d dẫu bị tướt cướp đoạt tước đoạt đoạt đi cả Danh Tính lẫn Ký Ức của mình lị. D dẫu vậy lị, cớ sự quan trọng cốt lõi độc độc nhất chính xác chính là cô bé thức tỉnh thức tỉnh trở lại lị, d dẫu một khi cô bé vẫn d dứt định quyết chả chịu làm như d dường ấy lị, thì việc họ có báo thù báo thù thành công xuất sắc hay quyết chả d dứt định quyết chả còn chút giá trị chi sất lị."
  },
  {
    "en": "That was at least something Ram would say without any sort of hesitation. The only thing that mattered to her was getting Rem back.",
    "vi": "Đó d dứt định d dường như d dứt định d dẫu ít nhất là bầy lời lẽ lẽ Ram chắc chắn d dứt định d dẫu d dũng mãnh tuyên bố quyết chả chút lưỡng lự do dự nào sất lị. Mục tiêu độc độc nhất vô nhị ngự trị ngự trị sâu thẳm tâm can cô chính xác chính là đoạt đoạt lại Rem trở về kề bên lị."
  },
  {
    "en": "“I hope Roy Alphard can tell us something about that, too. There are too many unanswered questions about this watchtower...no, about the Great Library of Pleiades.”",
    "vi": "“Tớ mong rằng Roy Alphard khả dĩ d dốc toàn lực hé lộ hé lộ phân chi tiết cớ sự gì đó liên quan tới chuyện ấy lị. Thực tế thực tế đang ngự trị ngự trị có quá nhiều câu hỏi chưa được phản hồi phản hồi thỏa đáng liên quan tới tòa tháp canh này... quyết chả sất lị, phải gọi là liên quan tới Thư Viện Vĩ Đại Pleiades mới đúng chứ chăng lị.”"
  },
  {
    "en": "“An all-knowing Great Library...that is the claim Shaula had made, in fact. She was a carefree girl, but because of that, she did not play around with words, I suppose. She said this was the Great Library, so there’s no reason to doubt that, in fact.",
    "vi": "“Một Thư Viện Vĩ Đại toàn tri toàn năng... đó chính xác chính là danh xưng danh xưng Shaula d dẫu từng tuyên bố tự tin tuyên bố lị, Betty bảo mà. Cô bé d dẫu là phân một nữ nhân vô tư vô tư vô lo lị, song d dứt định chính vì cớ đó lị, cô bé quyết chả hề biết chơi chữ hay nói dối nói dối làm chi sất lị, Betty bảo mà. Một khi cô bé d dẫu tuyên bố chốn này chính là Thư Viện Vĩ Đại lị, thì quyết chả có bất kỳ lý do chi để hoài nghi hoài nghi cớ sự ấy sất lị, Betty bảo mà.”"
  },
  {
    "en": "Was the function of the Great Library merely the Books of the Dead? Or were there other functions? That is what they needed to find out. Based on that, Emilia had something to say to Beatrice and the others.",
    "vi": "Liệu chức năng cốt lõi của Thư Viện Vĩ Đại độc độc vỏn vẹn chỉ có bầy cuốn Sách Tử Nhân chăng lị? Hay vẫn tồn tại tồn tại bầy tính năng tuyệt diệu khác nữa sất chăng lị? Đó chính là bầy cớ sự họ cần phải d dốc toàn lực d dốc toàn lực làm sáng tỏ làm sáng tỏ lị. Dựa vào bầy lập luận d dường ấy lị, Emilia d dứt định d dẫu có bầy lời lẽ khẩn thiết muốn giãi bày giãi bày cùng Beatrice d dẫu thảy mọi người lị."
  },
  {
    "en": "“Well, after taking Subaru to the Green Room to rest, there’s a place I want to go with everyone... There is someone I’d like everyone to meet.”",
    "vi": "“Được rồi lị, sau khi chúng ta cùng nhau đưa Subaru về căn phòng Green Room nghỉ ngơi tĩnh dưỡng lị, có phân một địa điểm tớ khát khao muốn song hành song hành cùng thảy mọi người ghé qua lị... Ngự trị ngự trị nơi đó có phân một thực thể tớ thực sự khát khao muốn thảy mọi người chạm mặt chạm mặt lị.”"
  },
  {
    "en": "“...Is it related to the first floor, I wonder?”",
    "vi": "“...Liệu cớ sự ấy d dứt định d dường như liên quan trực tiếp tới tầng thứ nhất đấy chứ chăng lị, Betty bảo mà?”"
  },
  {
    "en": "On the first floor, Emilia had broken through the last Trial. This was something Beatrice and the others already knew about. The problem was that she had yet to reveal everything.",
    "vi": "Ngự trị ngự trị nơi tầng thứ nhất lị, Emilia d dứt định d dẫu kiêu hãnh kiêu hãnh vượt qua vượt qua Thử Thách chung cuộc cuối cùng lị. Cớ sự này d dứt định d dẫu là điều Beatrice d dẫu bầy người đồng hành sớm d dẫu thấu suốt tường tận lị. Vấn đề cốt lõi cốt lõi chính là cô vẫn chưa thực sự bộc lộ bộc lộ thảy mọi ngóc ngách sự tình sất lị."
  },
  {
    "en": "Specifically, what was on the first floor? Who did she meet? What did Emilia do there? Since it was bizarre, out-of-this-world, and difficult to express in words—",
    "vi": "Nói phân chi tiết chi tiết lị, có cái thứ chi ngự trị ngự trị nơi tầng thứ nhất thế chăng lị? Cô d dẫu chạm mặt chạm mặt ai ngự trị chốn ấy lị? Emilia d dẫu tự mình thực hiện cớ sự chi ngự trị chốn ấy lị? Bởi lẽ bầy sự tình quả thực quá đỗi quái dị quái dị lị, vượt ngoài bầy quy luật thế gian d dẫu vô cùng vô cùng khó khăn khó khăn để lột tả lột tả trọn vẹn bằng lời lẽ lẽ bình thường sất——"
  },
  {
    "en": "“It won’t take long to tell you about it, but it’s suuuper complex, so how about we just meet them in person and talk about it?”",
    "vi": "“Quyết chả tốn nhiều thời gian của thảy mọi người để giải thích giải thích đâu sất lị, cơ mà nó thực sự thực sự siêu o o cùng phức tạp phức tạp lị, thế nên hay là thảy mọi người cứ trực tiếp trực tiếp tới chạm mặt đối mặt trực diện trực diện rồi đàm thoại chăng lị?”"
  },
  {
    "en": "Said Emilia, pointing far above her at the top of the watchtower.",
    "vi": "Emilia dịu dàng tuyên bố dường ấy lị, d dẫu giơ ngón tay ngọc ngà chỉ thẳng chỉ thẳng lên cao hướng về phía tột đỉnh đỉnh cao nhất của tòa tháp canh sừng sững lị."
  },
  {
    "en": "5",
    "vi": "5"
  },
  {
    "en": "“—Thou, who hath reached the top of the tower. Step forth onto the first floor, almighty petitioner.”",
    "vi": "Volcanica: 〖——Hỡi kẻ d dẫu chạm tới đỉnh đỉnh cao nhất của tòa tháp này lị. Hãy tiến bước tiến bước qua tầng thứ nhất lị, hỡi kẻ thỉnh cầu tối cao và toàn năng kia.〗"
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "After being guided by Emilia to the highest floor of the Pleaides Watchtower—the first floor—everyone was overwhelmed and rendered speechless by the massive dragon’s greeting.",
    "vi": "Sau khi được dẫn dắt dẫn dắt bởi Emilia trèo lên tầng cao tột cùng tột cùng của Tháp Canh Pleiades sừng sững——tầng thứ nhất lị——thảy mọi người đồng hành d dứt định d dẫu hoàn toàn bị choáng ngợp choáng ngợp d dẫu câm lặng quyết chả thốt nên lời lời nào sất trước lời réo gọi chào mừng vĩ đại của vị Thần Long khổng lồ lị."
  },
  {
    "en": "Seeing the look on everyone’s faces, Emilia said, “Suuuuper surprising, right?” and continued whilst craning her neck—",
    "vi": "Đăm đăm đăm đăm nhìn thấu bầy biểu cảm kinh ngạc hiển hiện trên khuôn mặt thảy mọi người lị, Emilia khẽ khẽ tuyên bố “Siêu o o o o cùng kinh ngạc kinh ngạc lị, đúng quyết chả hả lị?” d dẫu tiếp tục trong khi ngước chiếc cổ trắng ngần ngọc ngà lên——"
  },
  {
    "en": "“When I got to the first floor and saw Volcanica waiting here, I was reaaaally surprised...”",
    "vi": "“Ngay khi tớ đặt chân đặt chân lên tầng thứ nhất d dẫu đăm đăm nhìn thấy Volcanica đứng sừng sững chờ đợi ngự trị ở đây lị, tớ d dứt định d dẫu thực sự thực sự vô cùng vô cùng sửng sốt sửng sốt lị...”"
  },
  {
    "en": "“No-no, hold on, hold on a second, I suppose. Hey, this isn’t a problem that can be solved simply by being surprised, in fact!”",
    "vi": "“Quyết chả sất quyết chả sất lị, chờ đã lị, chờ Betty phân một tích tắc đi nào lị, Betty bảo mà. Này lị, cớ sự này quyết chả phải vấn đề khả dĩ giải quyết giải quyết độc độc vỏn vẹn chỉ bằng thái độ kinh ngạc kinh ngạc quèn sất đâu nhé lị, Betty bảo mà!”"
  },
  {
    "en": "In front of the Divine Dragon covered in azure scales, Beatrice let out a panicky voice unbefitting of her appearance. She was swinging her hands up and down as if she were completely restless. However, she was not the only one who was in a shocked state.",
    "vi": "Đứng trực diện trực diện trước vị Thần Long vĩ đại vĩ đại được bao bọc bao phủ phủ trùm bởi lớp vảy xanh lam ngọc bích rực rỡ lị, Beatrice thốt thốt lên phân một chất giọng thảng thốt hoảng loạn hoảng loạn quyết chả hề phù hợp phù hợp với diện mạo đáng yêu đáng yêu của mình tí ty nào sất lị. Cô bé liên tục vung vẩy vung vẩy đôi bàn tay nhỏ bé lên xuống như thể bản thân đang đứng ngồi quyết chả yên sất lị. D dẫu vậy lị, cô bé quyết chả phải là sinh mệnh độc độc nhất rơi vào trạng thái chấn động chấn động sửng sốt ấy sất lị."
  },
  {
    "en": "“This…is...”",
    "vi": "“Cái này... chính là...”"
  },
  {
    "en": "“Wooooow, somethin’ has appeared that not even I could’ve anticipated. What’s goin’ on here? Didn’t ya say that Mr. Divine Dragon was beyond the Great Waterfall?”",
    "vi": "“Oa oa lị, phân một thực thể vĩ đại vĩ đại ngự trị chốn này mà ngay cả tớ d dẫu quyết chả cách chi dự kiến dự kiến nổi sất lị. Cớ sự quái quỷ chi đang nảy sinh ngự trị ở đây thế chăng lị? Quyết chả phải thảy mọi người từng tuyên bố tuyên bố rằng ngài Thần Long vĩ đại trú ngụ ngự trị phía bên sườn kia của Thác Nước Khổng Lồ sao hả lị?”"
  },
  {
    "en": "“That should be the case. According to the prophecy from the Dragon History Stone, in the same year that the royal selection comes to an end, he will renew the covenant with the one who becomes the ruler of Lugunica, Ana.”",
    "vi": "“Đáng lẽ đáng lẽ cớ sự phải là như d dường ấy sất lị. Dựa theo bầy lời tiên tri khắc ghi trên Long Lịch Thạch lị, vào chính xác chính xác cái năm cuộc Tuyển Chọn Vương Quyền khép lại chung cuộc lị, ngài ấy d dứt định d dẫu d dường như d dứt định d dẫu thiết lập thiết lập lại khế ước thiêng liêng thiêng liêng với thực thể trở thành vị hoàng đế hoàng đế ngự trị trị vì Lugunica lị, Ana lị.”"
  },
  {
    "en": "“Next to Julius, who had been rendered speechless, the calm Anastasia could barely hide her cold sweat. Around her neck, the sound of Echidna’s voice was also slightly hoarse. However, after being late in reacting to the ladies’ response, Julius fixed his posture and said, “Excuse me—”",
    "vi": "Đứng ngay sát bên sườn Julius lị, thực thể d dẫu bị câm lặng hoàn toàn sất lị, Anastasia d dẫu luôn luôn điềm tĩnh điềm tĩnh d dường như quyết chả cách chi giấu giấu nổi bầy giọt mồ hôi lạnh buốt buốt giá lị. Quấn quanh vành cổ cô lị, chất giọng của Echidna d dứt định d dẫu d dường như khàn khàn khàn khàn đi tí ty lị. D dẫu vậy lị, sau khi phản ứng chậm trễ chậm trễ vạn phần so với bầy lời lẽ lẽ của hai vị nữ nhân lị, Julius nhanh chóng chấn chỉnh chấn chỉnh lại phong thái phong thái d dẫu cất tiếng: “Xin phép thứ lỗi cho tôi——”"
  },
  {
    "en": "“Oh Great Divine Dragon who defends our Kingdom. We deeply apologize for our rudeness in the presence of your esteemed self, Great Volcanica, the bearer of the covenant who has kept it for so long and given us much aid.”",
    "vi": "“Hỡi đấng Thần Long vĩ đại vĩ đại canh giữ che chở vương quốc của chúng thần lị. Chúng thần xin d dốc toàn lực d dốc toàn lực tạ tội tạ tội sâu sắc sâu sắc vì sự bất kính thô lỗ thô lỗ khi ngự trị trước tôn nhan cao quý của ngài lị, ngài Volcanica vĩ đại vĩ đại lị, thực thể gánh vác khế ước thiêng liêng thiêng liêng d dẫu kiên định kiên định giữ trọn vẹn lời thề suốt thời đại đằng đẵng d dẫu ban ban phát biết bao nhiêu sự cứu giúp cho vương quốc vương quốc lị.”"
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "“Although it is like this, it is such an honor to meet you. I am Julius Juukulius, a member of the royal guard of the Kingdom of Lugunica. I’ve made sure to keep many of your treasured tales in mind.”",
    "vi": "“D dẫu cho tình thế có ra sao đi chăng nữa lị, đây quả thực quả thực là phân một niềm vinh dự vinh dự tột đỉnh tột đỉnh của đời thần khi được diện kiến diện kiến ngài lị. Thần chính là Julius Juukulius lị, phân một thành viên trực thuộc Đội Cận Vệ Hoàng Gia của Vương Quốc Lugunica lị. Thần d dứt định luôn luôn ghi ghi lòng tạc dạ tạc dạ vô số vô số bầy câu chuyện truyền thuyết truyền thuyết quý báu về ngài ngự trị nơi sâu thẳm linh hồn lị.”"
  },
  {
    "en": "Julius, who had kneeled down and bowed, removed his sword from his waist and placed it on the ground next to him as a form of the utmost respect.",
    "vi": "Julius lị, người d dẫu tự mình quỳ rạp quỳ rạp đầu gối d dẫu thành kính thành kính cúi đầu hành lễ lị, nhẹ nhàng tháo bỏ thanh kiếm hiệp sĩ quý phái khỏi vành hông d dẫu cung kính đặt đặt nó nằm yên trên mặt đất sát bên sườn lị, như phân một minh chứng chứng tỏ lòng kính kính trọng tột độ tột độ lị."
  },
  {
    "en": "And so, as a knight who served the Dragon Kingdom, he showed the greatest courtesy to the Divine Dragon. Then, narrowing his golden eyes, Volcanica said—",
    "vi": "Và như d dường ấy lị, dưới tư cách danh nghĩa danh nghĩa phân một hiệp sĩ hiệp sĩ tận tụy tận tụy phục vụ Vương Quốc Long tộc lị, cậu d dâng hiến d dâng hiến bầy lễ nghi quý phái nhất cho đấng Thần Long vĩ đại lị. Kế tiếp lị, nheo nheo đôi mắt hoàng kim rực rỡ lị, Volcanica cất tiếng chất vấn——"
  },
  {
    "en": "“—I, am Volcanica. In accordance with the ancient covenant, the will of thee who hath reached the top shall be questioned.”",
    "vi": "Volcanica: 〖——Ta chính là Volcanica. Tuân theo cổ ước khế ước cổ xưa lị, ta d dứt định hỏi ý chí nguyện vọng của kẻ d dẫu đặt chân lên tột đỉnh nơi này lị.〗"
  },
  {
    "en": "“My life, my faith, have all been dedicated to Lady Anastasia Hoshin. The one who will be the next ruler…and forge the next covenant…will surely be Lady Anastasia...Kuuu.”",
    "vi": "“Mạng sống của thần lị, đức tin thiêng liêng thiêng liêng của thần lị, thảy thảy đều d dứt định d dẫu d dâng hiến d dâng hiến vẹn toàn cho Tiểu thư Anastasia Hoshin lị. Thực thể chắc chắn chắc chắn d dứt định d dẫu d dường như d dứt định d dẫu trở thành vị tân hoàng đế hoàng đế tiếp theo... d dẫu thiết lập khế ước thiêng liêng thiêng liêng mới... d dứt định d dứt định d dẫu là Tiểu thư Anastasia... Ư~uuu lị.”"
  },
  {
    "en": "“Ju-Julius, are ya crying?”",
    "vi": "“Ju-Julius lị, cậu d dứt định đang khóc khóc nhè nhè đấy ư lị?”"
  },
  {
    "en": "Julius, who was on his knees helplessly shedding tears, disturbed Anastasia. Wiping his tears away with the back of his hand, he said, “My apologies—”",
    "vi": "Julius lị, người đang quỳ rạp quỳ rạp trên hai đầu gối d dẫu quyết chả thể ngăn cản nổi nổi bầy giọt nước mắt tuôn tuôn tuôn trào lị, khiến Anastasia có đôi chút bối rối bối rối lị. Khẽ dùng mu bàn tay gạt gạt đi bầy giọt nước mắt sầu lị, cậu ta cất tiếng: “Tôi xin d dốc toàn lực d dốc toàn lực tạ tội tạ tội——”"
  },
  {
    "en": "“Not only did I become acquainted with one of the Three Heroes—Reid—but I was also able to meet the Divine Dragon, Volcanica. As a knight of the Kingdom of Lugunica, I could not be any more honored... This…tower, what in the world is it?”",
    "vi": "“Quyết chả thèm đề cập tới việc tôi d dẫu khả dĩ được tiếp xúc diện kiến diện kiến phân một trong Ba Vị Anh Hùng truyền thuyết——Reid lị——thì thời khắc này tôi d dứt định d dẫu khả dĩ trực tiếp diện kiến diện kiến đấng Thần Long vĩ đại lị, Volcanica lị. Dưới tư cách phân một kỵ sĩ kỵ sĩ cận vệ của Vương Quốc Lugunica lị, tôi quyết chả thể nào tìm thấy phân một niềm vinh dự vinh dự chi vĩ đại hơn thế trên đời sất lị... Tòa tháp... tòa tháp canh này lị, thực chất thực chất rốt cuộc rốt cuộc là cái thứ chi thế chăng lị?”"
  },
  {
    "en": "Julius’ voice trembled due to experiencing something awe-inspiring.",
    "vi": "Chất giọng của Julius khẽ khẽ run rẩy run rẩy dữ dội do đang kinh qua phân một trải nghiệm vô cùng vô cùng tôn nghiêm thiêng liêng tột đỉnh lị."
  },
  {
    "en": "With a tinge of remorse, as if she were ruining his special moment, Emilia started to say “About that...”",
    "vi": "Với phân một xúc cảm có chút hối hận hối tiếc lị, cứ như thể bản thân đang vô tình phá bĩnh phá bĩnh phá bĩnh thời khắc thiêng liêng thiêng liêng vô giá vô giá ấy của cậu lị, Emilia ngập ngừng cất tiếng: “Về cớ sự ấy thì...”"
  },
  {
    "en": "“Julius, I’m reaaally hesitant to tell you this because you’re sooo happy, but...”",
    "vi": "“Julius lị, tớ quả thực quả thực vô cùng do dự do dự khi bắt buộc phải giãi bày giãi bày chuyện này với cậu lị, bởi nhẽ cậu đang hạnh phúc hạnh phúc d dường ấy lị, thế nhưng mà...”"
  },
  {
    "en": "“—. My apologies, Lady Emilia. Disregarding you and Lady Anastasia, I attempted to talk with the Divine Dragon without permission...”",
    "vi": "“——. Xin d dốc toàn lực d dốc toàn lực tạ tội lị, Tiểu thư Emilia lị. Bỏ qua bỏ qua vai trò tôn quý của cô d dẫu cả Tiểu thư Anastasia lị, tôi d dẫu liều lĩnh liều lĩnh cố gắng tự tiện tự tiện trò chuyện đàm thoại cùng đấng Thần Long vĩ đại khi quyết chả được phép sất lị...”"
  },
  {
    "en": "“Mmm, don’t worry about it. It’s just that…Volcanica is...”",
    "vi": "“Quyết chả sất quyết chả sất lị, cậu quyết chả cần phải bận tâm bận tâm chuyện đó đâu sất lị. Chỉ là... Volcanica ngài ấy...”"
  },
  {
    "en": "Trying to explain things to Julius without hurting him, Emilia struggled to find the right words to say. Then, coming from above her head—",
    "vi": "Nỗ lực nỗ lực d dốc toàn lực tìm cách giải thích giải thích cớ sự cho Julius nghe mà quyết chả làm tổn thương tổn thương lòng kiêu hãnh của cậu lị, Emilia cật lực vắt óc vắt óc hòng tìm kiếm kiếm bầy từ ngữ phản hồi thích hợp lị. Đúng lúc đó lị, vang vọng vang vọng xuống từ tít trên cao đỉnh đầu đầu——"
  },
  {
    "en": "“—Thou, who hath reached the top of the tower. Step forth onto the first floor, almighty petitioner.”",
    "vi": "Volcanica: 〖——Hỡi kẻ d dẫu chạm tới đỉnh đỉnh cao nhất của tòa tháp này lị. Hãy tiến bước tiến bước qua tầng thứ nhất lị, hỡi kẻ thỉnh cầu tối cao và toàn năng kia.〗"
  },
  {
    "en": "“...Wait a second. This line…I feel like I just heard it earlier.”",
    "vi": "“...Chờ chút đã lị. Bầy lời lẽ lẽ thoại d dường này... tớ có linh cảm linh cảm cứ như thể bản thân d dẫu d dường như d dẫu được nghe thấy nó ngay lúc nãy vậy lị.”"
  },
  {
    "en": "Hearing him repeat those words, Anastasia was the first to become suspicious. However, that same feeling spread to the others, too. Saying that was a natural thing to do, and everyone immediately noticed the change in Volcanica, who continued to repeat the same words over and over again. And—",
    "vi": "Lắng nghe ngài ấy lặp đi lặp lặp lại bầy lời chất vấn thiêng liêng ấy lị, Anastasia chính xác chính là sinh mệnh tiên phong nảy sinh nghi ngờ nghi ngờ lị. D dẫu vậy lị, cảm giác tương tự tương tự d dứt định d dẫu d dường như d dứt định d dẫu lan rộng lan rộng nhanh chóng sang thảy mọi người đồng hành khác nữa sất lị. Phát ngôn cớ sự ấy là phân một điều hoàn toàn hoàn toàn tự nhiên lị, d dẫu thảy mọi người lập tức bỗng chợt nhận ra nhận ra sự biến chuyển biến chuyển kỳ dị ngự trị ngự trị nơi Volcanica lị, thực thể đang liên tục liên tục lặp đi lặp lại độc độc vỏn vẹn phân một câu thoại thoại duy nhất hết lần này đến lần khác sất lị. D dẫu rồi lị——"
  },
  {
    "en": "“Although that’s Volcanica, he’s been waiting here for soooo long that he became a bit senile. Since his body is still full of energy, he’s a biiit of a rowdy one though...”",
    "vi": "“Mặc dù ngài ấy d dứt định d dẫu là Volcanica lị, thế nhưng ngài ấy d dẫu kiên định kiên định chờ đợi chờ đợi ngự trị ngự trị ngự trị trú ẩn nơi chốn này suốt kiếp đời quá đỗi đằng đẵng lị, đâm ra đâm ra d dường như d dứt định d dẫu có đôi chút bị lãng trí lẫn lộn lẫn lộn rồi lị. D dẫu cho cơ thể xác thịt ngài ấy vẫn tràn trề tràn trề d dũng khí uy lực thần sầu lị, d dẫu ngài ấy d dứt định d dẫu d dường như có đôi chút nháo động nháo động nháo động dữ dội dẫu vậy...”"
  },
  {
    "en": "“The Great Divine Dragon is senile...?”",
    "vi": "“Đấng Thần Long vĩ đại vĩ đại uy nghiêm uy nghiêm mà d dứt định lại bị lẫn lộn lẫn lộn lãng trí sao...?”"
  },
  {
    "en": "“Ju-Julius, calm down. Come on, you’re a little tired, aren’tcha? Why don’t ya sit down?”",
    "vi": "“Ju-Julius lị, hãy mau điềm tĩnh điềm tĩnh lại đi nhé lị. Nào nào lị, cậu d dứt định d dẫu có đôi chút mỏi mệt mỏi mệt rồi đấy chứ chăng lị? Hay là cậu khả dĩ ngồi ngồi xuống nghỉ ngơi phân một chút đi chăng lị?”"
  },
  {
    "en": "Julius was extremely shocked by Emilia’s words. After Reid, the second legend he encountered also differed from the stories he’d heard about them, causing his knees to tremble.",
    "vi": "Julius hoàn toàn hoàn toàn chấn động chấn động sửng sốt trước bầy lời lẽ lẽ Emilia phát ngôn sất lị. Kế tiếp sau Reid lị, truyền thuyết huyền thoại huyền thoại thứ hai cậu được tiếp xúc tiếp xúc cũng hoàn toàn khác biệt khác biệt vạn phần so với bầy giai thoại giai thoại tuyệt vời cậu hằng được lắng nghe lị, khiến hai đầu gối đầu gối cậu khẽ khẽ run rẩy run rẩy đứng quyết chả vững sất lị."
  },
  {
    "en": "Emilia also didn’t want to disappoint Julius, whose eyes sparkled, and somehow felt a dull pain in her chest. But—",
    "vi": "Emilia d dứt định d dẫu quyết chả hề ao ước ao ước gieo rắc sự thất vọng thất vọng cho Julius lị, người sở hữu đôi mắt đang lấp lánh lấp lánh rực rỡ lị, d dẫu bằng phân một cách thức chi đó cô khẽ cảm thấy phân một nỗi nhói nhói đau mơ hồ ngự trị ngự trị sâu thẳm lồng ngực lị. Thế nhưng mà——"
  },
  {
    "en": "“Emilia, that’s probably not the case, I suppose. This isn’t some kind of dementia, in fact.”",
    "vi": "“Emilia lị, cớ sự rất có khả năng d dứt định d dẫu quyết chả phải là d dường ấy đâu sất lị, Betty bảo mà. Đây d dứt định quyết chả phải là phân một hội chứng lẫn lộn lãng trí lãng trí chi sất đâu nhé lị, Betty bảo mà.”"
  },
  {
    "en": "“Eh?”",
    "vi": "“Hửm lị?”"
  },
  {
    "en": "“Echidna, I’m sure you can feel it, too, I suppose. This isn’t dementia...”",
    "vi": "“Echidna lị, Betty chắc chắn d dứt định chắc chắn chắn em d dẫu d dường như khả dĩ cảm thụ cảm thụ rõ mồn một cớ sự ấy rồi đấy chứ chăng lị, Betty bảo mà. Đây quyết chả phải hội chứng lẫn lộn lãng trí sất...”"
  },
  {
    "en": "“Ah, yes. I wasn’t sure at first, but I feel it now. This isn’t the wearing down of the mind, but the emptiness of the spirit.”",
    "vi": "“Á lị, đúng vậy lị. Ban đầu tớ d dứt định quyết chả hề chắc chắn chắn sất lị, thế nhưng thời khắc này tớ d dứt định khả dĩ cảm nhận cảm nhận rõ mồn một rồi lị. Đây d dứt định quyết chả phải cớ sự suy kiệt suy kiệt của thần trí tuệ sất lị, mà chính xác chính là sự trống rỗng trống rỗng hoàn toàn của linh hồn linh hồn lị.”"
  },
  {
    "en": "“Emptiness of the…spirit...?”",
    "vi": "“Sự trống rỗng trống rỗng hoàn toàn hoàn toàn của... linh hồn linh hồn sao...?”"
  },
  {
    "en": "Emilia was puzzled by the mutually understandable conversation going on between the artificial spirits Echidna and Beatrice. With surprised expressions on the faces of Julius and Anastasia, Beatrice held out her finger and said, “It’s simple, in fact.”",
    "vi": "Emilia vô cùng vô cùng bối rối bối rối trước cuộc đàm thoại đàm thoại thấu thấu hiểu lẫn nhau đang nảy sinh giữa hai vị tiểu tinh linh nhân tạo Echidna d dẫu Beatrice lị. Nhìn đăm đăm nhìn bầy nét mặt kinh ngạc sửng sốt sửng sốt hiển hiện trên khuôn mặt của Julius d dẫu Anastasia lị, Beatrice khẽ giơ ngón tay ngọc ngà xinh xắn ra d dẫu tuyên bố “Sự tình thực sự thực sự vô cùng đơn giản đơn giản đấy nhé lị, Betty bảo mà.”"
  },
  {
    "en": "“His spirit is empty.... That is to say, his spirit is not within him, I suppose. As a result, he is limited in what he can say and respond with, in fact. Just think of it as him being 90 percent asleep, I suppose.”",
    "vi": "“Linh hồn ngài ấy d dứt định d dẫu hoàn toàn trống rỗng trống rỗng.... Nghĩa là lị, linh hồn của ngài ấy d dứt định quyết chả hề ngự trị ngự trị trú ẩn bên trong cơ thể xác thịt ngài sất lị, Betty bảo mà. Hệ quả là lị, ngài ấy d dứt định d dường như bị giới hạn giới hạn triệt để ngự trị ngự trị ngự trị ngự trị ngự trị ngự trị ngự trị trong bầy lời lẽ lẽ khả dĩ phát ngôn d dẫu phản hồi sất lị, Betty bảo mà. Cậu cứ độc độc vỏn vẹn hình dung như thể ngài ấy đang ngủ say ngủ say chìm đắm chìm đắm tới chín mươi phần trăm phần trăm rồi đấy chứ chăng lị, Betty bảo mà.”"
  },
  {
    "en": "“90 percent... But he was suuuper strong, though?”",
    "vi": "“Chín mươi phần trăm phần trăm sao... Nhưng mà ngài ấy d dứt định d dẫu siêu o o o o cùng mạnh mẽ mạnh mẽ d dũng mãnh d dũng mãnh d dường ấy mà lị?”"
  },
  {
    "en": "“If his spirit were there, it would have been incomparable.”",
    "vi": "“Nếu chẳng may linh hồn ngài ấy thực sự ngự trị ngự trị vẹn toàn ở chốn này lị, thì luồng uy lực thần sầu ấy d dứt định d dẫu quyết chả có thứ chi khả dĩ đem ra so kè so kè nổi sất lị.”"
  },
  {
    "en": "Echidna’s tone implied that she had been lucky to survive, making Emilia shudder in response.",
    "vi": "Tông giọng của Echidna mang ẩn ý sâu xa rằng họ d dứt định d dẫu d dường như d dứt định d dẫu vô o o cùng o o cùng may mắn may mắn bảo toàn bảo toàn được sinh mạng lị, khiến Emilia khẽ khẽ rùng mình rùng mình run rẩy run rẩy phản hồi lị."
  },
  {
    "en": "Emilia had just barely survived the desperate battle with the help of her ice soldiers. Surprisingly, that had just been akin to fighting with a half-asleep Volcanica. Although being half-asleep and being senile were similar, they were completely different in nature.",
    "vi": "Emilia d dẫu tự mình tự mình trải qua trải qua trận quyết chiến tử chiến ngàn cân ngàn cân sinh tử d dẫu giật giật giành lấy sinh mạng mong manh nhờ sự cứu giúp của bầy chiến binh băng giá lị. Quả thực quả thực vô cùng sửng sốt chấn động lị, cớ sự ấy hóa ra độc độc vỏn vẹn chỉ tương đương tương đương với việc giao đấu giao đấu cùng phân một Volcanica đang ngủ say ngủ say say giấc nồng phân nửa mà thôi lị. D dẫu cho trạng thái nửa tỉnh nửa ngủ ngủ say lị, d dẫu hội chứng lẫn lộn lãng trí có đôi nét tương đồng tương đồng lị, thì bản chất bản chất tự nhiên tự nhiên của hai cớ sự ấy d dứt định hoàn toàn hoàn toàn khác biệt biệt lập sất lị."
  },
  {
    "en": "“But even if his spirit isn’t there, he still has the body of the Divine Dragon, I suppose. If that’s the case, then there may be a way to help the people of Priestella, in fact.”",
    "vi": "“Thế nhưng lị, d dẫu cho linh hồn ngài ấy quyết chả ngự trị sòng phẳng chốn này sất lị, ngài ấy vẫn sở hữu sở hữu trọn vẹn cơ thể xác thịt tôn quý của vị Thần Long vĩ đại lị, Betty bảo mà. Nếu cớ sự thật là d dường ấy lị, thì d dứt định khả dĩ d dường như d dứt định d dẫu có phân một phương pháp cứu rỗi cứu rỗi thảy thảy mọi người dân tội nghiệp ngự trị ngự trị tại Priestella đấy chứ chăng lị, Betty bảo mà.”"
  },
  {
    "en": "“—! A way to help everyone? How can we do that?”",
    "vi": "“——! Phương pháp cứu giúp cứu giúp thảy thảy mọi người sao lị? Làm sao chúng ta khả dĩ thực hiện thực hiện được cớ sự tuyệt diệu d dường ấy hả lị?”"
  },
  {
    "en": "“—I see. We can get the blood of a dragon from the…Divine Dragon.”",
    "vi": "“——Tớ thấu suốt thấu suốt rồi lị. Chúng ta khả dĩ d dốc toàn lực d dốc toàn lực thu lấy huyết long huyết long của rồng từ chính... đấng Thần Long vĩ đại lị.”"
  },
  {
    "en": "Anastasia snapped her fingers, and Beatrice nodded at her words. Also hearing that, Emilia widened her eyes and let out an “Ah.”",
    "vi": "Anastasia khẽ búng búng đôi ngón tay ngọc ngà phát ra phân một nhịp lị, d dẫu Beatrice khẽ khẽ đầu gật đầu đồng thuận đồng thuận trước bầy lời phát ngôn của cô bé lị. Cũng lắng tai lắng tai nghe thấu bầy lời lẽ lẽ ấy lị, Emilia trợn tròn trợn tròn đôi mắt kinh ngạc d dẫu thốt lên phân một tiếng “A lị.”"
  },
  {
    "en": "The source of all of the tales that had been passed down in the Kingdom of Lugunica was none other than the blood of the Divine Dragon, Volcanica.",
    "vi": "Bản chất cội nguồn cội nguồn đứng sau thảy mọi câu chuyện giai thoại giai thoại truyền thuyết truyền thuyết lưu truyền lưu truyền suốt bao kiếp đời đời ngự trị ngự trị trong Vương Quốc Lugunica lị, quyết chả có thứ chi khác ngoài huyết long huyết long thiêng liêng thiêng liêng của đấng Thần Long vĩ đại lị, Volcanica lị."
  },
  {
    "en": "It had been said that a dragon’s blood was a miracle elixir that could revive a barren land, ensure a bountiful harvest, and heal all illnesses and injuries. To put it simply, many remarkable effects of it had been recorded.",
    "vi": "Người ta vẫn truyền tai truyền tai nhau rằng huyết long huyết long của rồng chính xác chính là phân một loại linh dược linh dược thần diệu thần diệu thần kỳ khả dĩ hồi sinh hồi sinh thảy bầy vùng đất đai hoang vu khô cằn cằn cỗi lị, bảo chứng bảo chứng phân một mùa màng bạt ngàn tươi tốt lị, d dẫu d dốc toàn lực trị liệu trị liệu thảy mọi bệnh tật thương tích hiểm nghèo sất lị. Phát ngôn phân một cách thức vô cùng đơn giản giản đơn lị, vô vàn vô vàn bầy tác dụng thần diệu kinh hoàng kinh hoàng của nó d dứt định d dẫu d dường như d dứt định d dẫu được sử sách ghi chép cẩn thận cẩn thận lị."
  },
  {
    "en": "And, not to mention anything else. Dragon’s blood was an element that Emilia could not ignore—",
    "vi": "Và lị, quyết chả cần phải đề cập tới bất kỳ cớ sự chi khác sất lị. Huyết long của rồng d dứt định chính là phân một nhân tố cốt lõi cốt lõi mà tự thân Emilia quyết chả bao giờ được phép lờ đi lờ đi sất——"
  }
]

fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'translation_temp', 'ch90_part2.json'),
  JSON.stringify(part2, null, 2),
  'utf-8'
)
console.log('Successfully wrote ch90_part2.json!')
