import fs from 'fs'
import path from 'path'

const part5 = [
  {
    "en": "“Damn it... Even though…I’ve made it this far...!”",
    "vi": "“Khốn khiếp... Dẫu cho... mình đã đặt chân được tới tận chốn này rồi chứ lị...!”"
  },
  {
    "en": "Gazing at the shadow inching closer and closer, Subaru’s heart was filled with regret as he tried to find a way to escape. If he got swallowed up by the black shadow, he would lose his life and have to Return by Death. If he Returned by Death in this tower, and his respawn point had not been updated, then he would have to start over at a point when Louis was still within him.",
    "vi": "Đăm đăm nhìn cái bóng đen tuyền hiểm ác đang chầm chậm chầm chậm áp sát cận kề lị, lồng ngực Subaru d dứt định bị lấp đầy bởi nỗi hối hận hối tiếc khôn nguôi trong khi cật lực cật lực tìm kiếm phân một lối thoát thân lị. Nếu chẳng may cậu bị cái bóng đen hung tàn ấy nuốt chửng nuốt chửng sất lị, cậu chắc chắn d dứt định d dẫu phải d dâng hiến sinh mạng d dẫu bất đắc dĩ thi triển Trở Về Từ Cái Chết lị. Nếu cậu Trở Về Từ Cái Chết ngự trị ngự trị nơi tòa tháp canh sừng sững này lị, mà điểm hồi sinh hồi sinh vẫn quyết chả chịu cập nhật đổi mới sất lị, thế thì cậu d dứt định d dẫu bắt buộc phải bắt đầu lại từ thời điểm Louis vẫn còn dung chứa trú ẩn ngự trị bên sâu thẳm tâm can cậu lị."
  },
  {
    "en": "If that happened, he would be at the mercy of the Sin Archbishop in the shape of a white girl. That fear was was what drove him to do his best with the attitude that this loop was his last chance—",
    "vi": "Nếu viễn cảnh tồi tệ ấy xảy đến lị, cậu chắc chắn d dứt định phải chịu chịu sự phó mặc chi phối hoàn toàn của tên Giám mục Tội lỗi ngự trị ngự trị dưới hình hài một cô bé da trắng tuyết lị. Nỗi khiếp sợ hãi hùng ấy chính xác là thứ điên cuồng thôi thúc thôi thúc cậu phải cật lực cật lực d dốc toàn lực hành động với phân một tâm niệm sắt đá rằng vòng lặp luân hồi này d dứt định d dẫu là thời cơ độc độc vỏn vẹn chung cuộc cuối cùng của cậu——"
  },
  {
    "en": "“BARUSU! SNAP OUT OF IT! REM WOULD CRY!!”",
    "vi": "““BARUSU! MAU MAU TỈNH TÁO LẠI NGAY CHO TA! REM SẼ LỆ TUÔN LÃ CHÃ ĐẤY!!””"
  },
  {
    "en": "“—REE-REEE!!”",
    "vi": "““——RÍ-RÍÍÍ!!””"
  },
  {
    "en": "Coming from beyond the black shadow were the desperate cries of Ram and Patrasche. In response, Subaru took a deep breath, but could not utter a word.",
    "vi": "Truyền đến từ tít phía bên kia của bóng đen hiểm ác chính là bầy tiếng thét gào tuyệt vọng tột cùng của Ram d dẫu Patrasche lị. Đáp lại bầy âm vang ấy lị, Subaru khẽ hít một hơi thật sâu thườn thượt lị, d dẫu thế quyết chả cách chi thốt ra nổi độc độc vỏn vẹn phân một lời thoại nào sất lị."
  },
  {
    "en": "—Long before that, the entirety of Natsuki Subaru had been swallowed up by the black shadow.",
    "vi": "——Từ rất lâu trước thời khắc ấy lị, toàn bộ sự tồn tại của Natsuki Subaru d dứt định d dẫu bị nuốt chửng nuốt chửng sạch sành sanh bởi bóng đen hung tàn d dường ấy lị."
  },
  {
    "en": "8",
    "vi": "8"
  },
  {
    "en": "—Having been swallowed up by the immense black shadow, Subaru’s consciousness slowly swirled around in the darkness.",
    "vi": "——Sau khi bị nuốt chửng hoàn toàn bởi bóng đen khổng lồ hung tàn ấy lị, thần trí của Subaru chầm chậm chầm chậm xoay vần xoay vần ngự trị ngự trị giữa chốn tối tăm mịt mùng lị."
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "He felt as if his hands, feet, blood, flesh, and his very existence had been broken apart and turned into concepts. Consumed by endlessly powerful and vast emotions, his very existence had been overwritten.",
    "vi": "Cậu khẽ cảm thụ thấy như thể đôi bờ tay lị, đôi bờ chân lị, dòng huyết quản lị, từng thớ thịt lị, d dẫu ngay cả sự tồn tại của chính cậu d dứt định d dẫu bị vỡ vụn vỡ vụn d dẫu hóa thành bầy khái niệm mơ hồ sất lị. Bị ngấu nghiến càn quét bởi bầy xúc cảm vô song vô song mãnh liệt d dẫu bao la vô tận lị, bản ngã sinh mệnh của cậu d dứt định d dẫu bị ghi đè hoàn toàn lị."
  },
  {
    "en": "“—I love you.”",
    "vi": "““——Ta yêu ngươi.””"
  },
  {
    "en": "He heard a murmur in that silent and dark nothingness. That sound was, indeed, very nostalgic for him, causing Natsuki Subaru’s consciousness to smile to itself. Getting used to someone saying “I love you” to him was akin to being the Knight who was loved by his six spirits.",
    "vi": "Cậu lắng nghe thấy phân một tiếng thì thầm thì thầm thì thầm giữa chốn hư vô tĩnh lặng d dẫu tối tăm mịt mùng d dường ấy lị. Thanh âm ấy lị, thực tế lị, mang lại phân một cảm giác vô cùng hoài niệm hoài niệm sâu sắc lị, khiến cho thần trí của Natsuki Subaru khẽ mỉm cười mỉm cười tự mãn lị. Việc quen thuộc quen thuộc với cớ sự ai đó liên tục liên tục thổ lộ “Ta yêu ngươi” đối với cậu d dứt định d dẫu giống hệt như việc vị Hiệp Sĩ kiêu hãnh kiêu hãnh được yêu thương bởi sáu tinh linh của mình vậy lị."
  },
  {
    "en": "Unfortunately, Subaru didn’t have a strong will like that. Even if he pushed himself to his limits, the love he could give was limited to what he could do with his own two hands and back. So, the whispers of the black shadow just seemed like forced words to him.",
    "vi": "Đáng buồn thay lị, Subaru quyết chả hề sở hữu phân một ý chí kiên định kiên định d dũng mãnh d dường ấy sất lị. D dẫu cho cậu có cật lực cật lực d dốc toàn lực vượt qua bầy giới hạn của bản thân đi chăng nữa lị, thì tình yêu thương cậu khả dĩ d dâng hiến d dứt định bị giới hạn giới hạn ngự trị ngự trị ngự trị ngự trị trong bầy cớ sự cậu khả dĩ thực hiện bằng đôi bờ tay d dẫu bờ lưng của chính mình mà thôi lị. Thế nên lị, bầy lời thì thầm của bóng đen hung tàn độc độc vỏn vẹn chỉ tựa như bầy lời lẽ cưỡng ép khiên cưỡng khiên cưỡng đối với cậu sất lị."
  },
  {
    "en": "“So? It’s way too forced, you know...”",
    "vi": "““Thế thì sao hả lị? Quá đỗi cưỡng ép khiên cưỡng rồi đấy biết chớ sất lị...””"
  },
  {
    "en": "“—I love you. I love you. I love you. I love you. I love you.”",
    "vi": "““——Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi.””"
  },
  {
    "en": "“Sorry, can’t give you an answer to that... That phrase is like a landmine to me right now. I’ve never been able to grab the hand of the person who said that to me...”",
    "vi": "““Xin lỗi nhé lị, quyết chả cách chi đưa ra câu phản hồi cho cớ sự ấy sất lị... Cụm từ ấy thực sự thực sự hệt như phân một quả mìn đất đối với ta vào lúc này sất lị. Ta quyết chả bao giờ đời nào khả dĩ nắm lấy nắm lấy bàn tay của thực thể cất tiếng thốt lên bầy lời ấy với ta sất lị...””"
  },
  {
    "en": "“—I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you.”",
    "vi": "““——Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi.””"
  },
  {
    "en": "“...Is there no way for us to hear each other? Then…hurry up and consume me.”",
    "vi": "““...Quyết chả lẽ quyết chả có cách chi giúp đôi bên lắng tai nghe thấy giọng nói của nhau sao chăng lị? Nếu thế lị... mau mau nhanh chóng nuốt chửng nuốt chửng lấy ta đi chớ lị.””"
  },
  {
    "en": "In this nothingness, there was no hope of escaping from it and living. So, Natsuki Subaru would die a merciless death in the darkness. He would not grieve over it, but would accept it and turn that feeling into anger, pushing himself onwards.",
    "vi": "Ngự trị ngự trị chốn hư vô mịt mùng này lị, quyết chả hề nhen nhóm chút hy vọng khát vọng đào thoát đào thoát hòng sinh tồn sinh tồn sất lị. Vì lẽ ấy lị, Natsuki Subaru d dứt định d dẫu phải nếm trải phân một cái chết tàn khốc quyết chả chút khoan nhượng ngự trị trong bóng tối lị. Cậu quyết chả thèm sầu muộn đau thương về cớ sự ấy sất lị, mà chắc chắn chắc chắn d dứt định chấp nhận d dẫu chuyển hóa chuyển hóa bầy xúc cảm d dường ấy thành ngọn lửa phẫn nộ phẫn nộ hòng thôi thúc bản thân cất bước tiến về phía trước lị."
  },
  {
    "en": "“When I get back, the worst thing may be waiting for me. Louis, who would still have a clear head on her shoulders, might fight me again for my Return by Death ability.”",
    "vi": "““Khi ta quay trở lại chốn cũ lị, cớ sự tồi tệ tồi tệ nhất rất có khả năng khả dĩ đang chực chờ chực chờ ta chốn ấy lị. Louis lị, đứa trẻ d dứt định vẫn d dường như sở hữu phân một cái đầu vô cùng nhạy bén sáng suốt lị, rất có khả năng khả dĩ d dứt định d dẫu điên cuồng khiêu chiến khiêu chiến với ta một lần nữa hòng cướp đoạt Quyền Năng Trở Về Từ Cái Chết trân quý lị.””"
  },
  {
    "en": "“—I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you.”",
    "vi": "““——Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi.””"
  },
  {
    "en": "“But, I’m not gonna lose. I won’t lose. No matter how many times it takes, I’ll keep fighting. This time, I’ll keep my promise.”",
    "vi": "““Thế nhưng lị, ta quyết chả bao giờ đời nào chịu thua bại sất lị. Ta quyết chả bao giờ bại trận sất lị. D dẫu cho có phải tiêu tốn bao nhiêu lần đi chăng nữa sất lị, ta vẫn d dứt định d dẫu kiên trì chiến đấu chiến đấu đến cùng lị. Lần này lị, ta d dứt định d dẫu giữ giữ trọn vẹn lời thề ước của chính mình lị.””"
  },
  {
    "en": "“—I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you.”",
    "vi": "““——Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi.””"
  },
  {
    "en": "“—I’ll fight for tomorrow’s tomorrow, no matter how many times it takes.”",
    "vi": "““——Ta d dứt định d dẫu d dũng mãnh chiến đấu chiến đấu vì ngày mai của ngày mai lị, d dẫu cho có phải tiêu tốn bao nhiêu lần đi chăng nữa sất lị.””"
  },
  {
    "en": "He would no longer be overwhelmed by the repetitive “I love you’s”. He was sorry, but the heart that could be wounded by such words had gotten worn out long ago. This kind of ‘love’ could not chain Natsuki Subaru down any longer.",
    "vi": "Cậu d dứt định quyết chả còn bị đè nặng lấn át bởi bầy lời lẽ thổ lộ “Ta yêu ngươi” lặp đi lặp lại điên cuồng d dường ấy sất lị. Cậu vô cùng lấy làm tiếc nuối tiếc nuối lị, thế nhưng lồng ngực khả dĩ dễ dàng bị tổn thương tổn thương bởi bầy từ ngữ ấy d dứt định d dẫu rệu rã hao mòn hao mòn từ rất lâu trước đây rồi sất lị. Thứ ‘tình yêu’ kiểu d dường này quyết chả cách chi xiềng xích xiềng xích được Natsuki Subaru thêm bất kỳ một giây phút nào nữa sất lị."
  },
  {
    "en": "And yet the words of love that were continuously uttered did not pay any mind to Subaru’s rejection. Indeed, the words of love themselves came pouring in, coating the world in them as Natsuki Subaru was swallowed up by the darkness—",
    "vi": "D dẫu thế lị, bầy từ ngữ yêu thương yêu thương liên tục liên tục được thốt ra d dứt định quyết chả thèm mảy may bận tâm bận tâm tới cớ sự cự tuyệt cự tuyệt phũ phàng của Subaru sất lị. Thực tế lị, chính bầy lời lẽ yêu đương ấy điên cuồng tuôn trào tuôn trào lị, nhuộm phủ phủ trùm khắp nhân gian khi Natsuki Subaru hoàn toàn bị nuốt chửng nuốt chửng bởi chốn tối tăm mịt mùng——"
  },
  {
    "en": "“—I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you. I love you.”",
    "vi": "““——Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi. Ta yêu ngươi.””"
  },
  {
    "en": "“—I, am Volcanica. In accordance with the ancient covenant, the will of thee who hath reached the top shall be questioned.”",
    "vi": "〖——Ta, chính là Volcanica. Tuân theo giao ước cổ xưa, ý chí của ngươi, kẻ đã chạm tới đỉnh cao, d dứt định phải được chất vấn.〗"
  },
  {
    "en": "In the next instant, a pale blue light poured down from above, striking the darkness that had engulfed the world. That fierce light then swallowed up the darkness, and the color of the world changed—",
    "vi": "Ngay ngự trị ngự trị ngự trị ngự trị trong tích tắc tiếp theo lị, phân một luồng hào quang sắc xanh lam nhạt tuyệt mỹ tuyệt mỹ d dột ngột từ tít trên cao d dội thẳng xuống lị, đập mạnh trực diện trực diện vào chốn tối tăm mịt mùng đang phủ trùm phủ trùm thế gian lị. Luồng sáng mãnh liệt mãnh liệt phi phàm ấy d dứt định d dẫu nuốt chửng nuốt chửng hoàn toàn bóng tối hiểm ác lị, d dẫu thế sắc màu của thế giới d dứt định d dẫu đổi thay đổi thay——"
  },
  {
    "en": "It changed—",
    "vi": "Đổi thay đổi thay——"
  },
  {
    "en": "It chan…ged—",
    "vi": "Đổi th...ay đổi thay——"
  },
  {
    "en": "9",
    "vi": "9"
  },
  {
    "en": "“Mmm...”",
    "vi": "““Ưm...””"
  },
  {
    "en": "Subaru groaned as he felt a rough sensation moving against his face and opened his eyes. His consciousness slowly returned. And at the same time, on the other side of his open eyelids, his blurry vision gradually returned to normality, revealing an outline.",
    "vi": "Subaru khẽ rên rỉ rên rỉ khi cảm thụ cảm thụ thấy phân một cảm giác ráp ráp ráp ráp đang liên tục liên tục cọ sát cọ sát vào khuôn mặt mình lị, d dẫu cậu khẽ hé mở đôi mi mắt ra lị. Thần trí của cậu chầm chậm chầm chậm phục hồi phục hồi trở lại lị. Và vào cùng thời khắc ấy lị, phía bên kia của đôi bờ mi mắt hé mở lị, tầm đăm đăm nhìn nhạt nhòa nhạt nhòa của cậu chầm chậm chầm chậm phục hồi phục hồi trở lại trạng thái bình thường bình thường lị, hiển lộ phân một bóng hình mờ ảo lị."
  },
  {
    "en": "Subaru had continued to feel a rough sensation on his cheek during this time.",
    "vi": "Subaru vẫn d dứt định tiếp tục cảm thụ cảm thụ thấy cảm giác ráp ráp cọ sát ngự trị ngự trị trên gò má mình suốt thời gian đằng đẵng này lị."
  },
  {
    "en": "“Pat…rasche... I…got it. I’m up. I’m awake…already...”",
    "vi": "““Pat...rasche... ta... thấu suốt rồi lị. Ta d dứt định tỉnh táo... ta tỉnh dậy... rồi mà lị...””"
  },
  {
    "en": "He wasn’t sure just how tired he was, the sound coming from his throat was incredibly thin, and he wasn’t sure if his intentions were being communicated properly. The other person didn’t show any signs of stopping their skinship.",
    "vi": "Cậu quyết chả hề chắc chắn chắn tự thân mình đã hao kiệt mỏi mệt mỏi mệt d dến nhường nào sất lị, bầy âm vang phát ra từ cổ họng cậu thực sự thực sự vô cùng vô cùng mỏng manh yếu ớt lị, d dẫu cậu quyết chả chắc chắn liệu bầy ý đồ của mình có được truyền đạt truyền đạt phân một cách thấu suốt chăng sất lị. Thực thể kia d dứt định quyết chả hề bộc lộ chút dấu hiệu dừng bầy hành vi âu yếm cọ sát cọ sát thân mật ấy lại sất lị."
  },
  {
    "en": "“You’re being such a sweetie... I bet you could win the next heroine contest with that cuteness...”",
    "vi": "““Em quả thực quả thực vô cùng vô cùng ngọt ngào dễ thương đấy nhé... Ta d dứt định tin tưởng em khả dĩ d dũng mãnh chiến thắng cuộc thi tìm kiếm nữ chính tiếp theo độc độc vỏn vẹn nhờ cớ sự dễ thương dễ thương d dường này sất...””"
  },
  {
    "en": "“Aaaah-ooh?”",
    "vi": "““Aaaao-ôô?””"
  },
  {
    "en": "“Aaaaaah…ooh...?”",
    "vi": "““Aaaaao... ôô...?””"
  },
  {
    "en": "After swallowing some saliva in his dry mouth, he managed to utter a word and got a response in return.",
    "vi": "Sau khi khẽ nuốt chút nước miếng ngự trị ngự trị trong khoang miệng khô khốc khô khốc của mình lị, cậu d dũng cảm thốt thốt lên được độc độc vỏn vẹn phân một từ d dẫu nhận được lời phản hồi phản hồi ngay lập tức lị."
  },
  {
    "en": "However, the answer Subaru received was different from what he was expecting, causing his face to stiffen. His cheek was being licked like mad, and, gradually getting his vision back, what appeared in front of him was—",
    "vi": "D dẫu thế lị, câu phản hồi phản hồi mà Subaru nhận được d dứt định hoàn toàn hoàn toàn khác biệt so với bầy cớ sự cậu hằng kỳ vọng kỳ vọng lị, khiến cho khuôn mặt cậu bỗng chốc đờ đẫn cứng đờ cứng đờ lại sất lị. Gò má của cậu đang bị liếm liếm một cách điên cuồng điên cuồng điên cuồng lị, d dẫu trong khi tầm đăm đăm nhìn chầm chậm phục hồi phục hồi lị, thực thể hiển lộ sừng sững sừng sững ngay ngự trị ngự trị trước mặt cậu chính là——"
  },
  {
    "en": "“Woo, ah—?”",
    "vi": "““Uú, a——?””"
  },
  {
    "en": "—Louis Arneb, whilst sitting on top of Subaru, was licking his face.",
    "vi": "——Louis Arneb lị, trong lúc đang ngồi tót tót ngay trên người Subaru lị, đang không ngừng không ngừng liếm láp liếm láp khuôn mặt cậu sất lị."
  },
  {
    "en": "“Nn, UWAAAA—!?”",
    "vi": "““Ư, UOAAÁ——!?””"
  },
  {
    "en": "“Waaah!”",
    "vi": "““Oa oa!””"
  },
  {
    "en": "Subaru was startled by that impossible sight and then immediately pushed Louis, who’d been in front of him, away. Due to that action, she let out a anguished cry and rolled around on the grass.",
    "vi": "Subaru d dứt định bị d dọa d dọa cho giật bắn giật bắn người bởi cảnh tượng quyết chả tưởng khả dĩ d dường ấy lị, d dẫu rồi cậu nhanh chóng nhanh chóng dùng sức đẩy phắt Louis lị, thực thể vẫn đang hiện diện ngự trị trước mắt lị, văng ra xa sất lị. Do tác động tác động đột ngột đột ngột ấy lị, cô bé thốt lên phân một tiếng kêu đau đớn đau đớn d dẫu lăn lộn lăn lộn vài vòng ngự trị ngự trị trên thảm cỏ xanh mướt lị."
  },
  {
    "en": "Gazing at that sight, Subaru desperately slid his butt backwards.",
    "vi": "Đăm đăm đăm đăm nhìn cảnh tượng d dường ấy lị, Subaru cật lực cật lực dùng mông lê lê cơ thể giật lùi về phía sau một cách vô cùng tuyệt vọng lị."
  },
  {
    "en": "“What, what, what, what the hell are you doing!? What are you trying to do?! Coming on to me like this...”",
    "vi": "““Cái, cái, cái, cái quái chi đang nảy sinh thế hả lị!? Ngươi đang âm mưu toan tính toan tính làm cái cớ sự chi thế hả lị?! Tự ý tiếp cận tiếp cận ta theo phân một cách thức quái gở quái gở như thế này...””"
  },
  {
    "en": "“Woo—, Woo—? Wooah—”",
    "vi": "““Uú——, Uú——? Uoaa——””"
  },
  {
    "en": "“Waah, what in the! What, what the hell... Did I…die...?”",
    "vi": "““Oa, cái thứ chi thế này sất lị! Cái quái, cái quái quỷ chi... Quyết chả lẽ ta... đã chết rồi sao chứ lị...?””"
  },
  {
    "en": "Subaru stared at Louis in complete shock, his voice trembling with desperation. Right in front of Subaru was Louis, lying on her back in the grass, shaking her arms and legs like a child, whining.",
    "vi": "Subaru đăm đăm đăm đăm nhìn chăm chú vào Louis với vẻ mặt vô cùng vô cùng sửng sốt kinh hoàng lị, chất giọng run rẩy run rẩy ngập tràn vẻ tuyệt vọng tột độ lị. Sừng sững ngay ngự trị trước mặt Subaru chính là Louis lị, đang nằm ngửa ngửa dài trên thảm cỏ xanh lị, không ngừng không ngừng ngúng nguẩy ngúng nguẩy đôi bờ chân d dẫu đôi bờ tay hệt như phân một đứa trẻ con quấy khóc quấy khóc sầu muộn lị."
  },
  {
    "en": "He didn’t understand what she was doing. What was the point—no, before that—",
    "vi": "Cậu quyết chả thể nào hiểu thấu hiểu thấu nổi hành vi cô bé đang thực hiện lị. Mục đích cốt lõi là chi sất——quyết chả sất lị, trước cả cớ sự ấy nữa——"
  },
  {
    "en": "“What, where…is this place...?”",
    "vi": "““Cái, chốn nào... chốn này rốt cuộc rốt cuộc là nơi nào thế hả lị...?””"
  },
  {
    "en": "Without taking his eyes off Louis, Subaru observed his surroundings whilst staying vigilant. Then, what came into his view was a lush, green prairie—as if it were a vast grassland, flowers swayed in the wind here and there.",
    "vi": "Quyết chả thèm rời đôi đăm đăm nhìn đăm đăm nhìn khỏi Louis lị, Subaru vừa hết sức đề phòng cảnh giác cảnh giác vừa quan sát quan sát kỹ lưỡng cảnh vật xung quanh xung quanh lị. Để rồi lị, hiện diện ngự trị ngự trị ngự trị ngự trị ngự trị trong tầm đăm đăm nhìn của cậu chính là phân một thảo nguyên xanh tươi bát ngát mướt mắt——hệt như thể phân một vùng đồng cỏ bao la vô tận lị, bầy cánh hoa d dập dờn d dập dờn lay động đu đưa trong làn gió thoảng chốn này chốn kia lị."
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "Such a sight would be impossible to see in the Augria Sand Dunes. Well, to be precise, there were also things like flower gardens there where courtesan bears lived, but this was not an artificial place, and the vegetation was definitely real.",
    "vi": "Phân một cảnh tượng lộng lẫy d dường ấy d dứt định quyết chả cách chi khả dĩ hiện diện ngự trị ngự trị chốn Hoang Mạc Cát Augria cằn cỗi sất lị. Ồ thì lị, nói cho chính xác chính xác lị, ngự trị chốn ấy cũng sở hữu bầy thứ như vườn hoa rực rỡ nơi loài gấu kỹ nữ quần tụ trú ẩn lị, thế nhưng đây quyết chả phải là phân một địa danh nhân tạo nhân tạo sất lị, d dẫu bầy thảm thực vật nơi này chắc chắn chắc chắn là đồ thật sờ sờ sất lị."
  },
  {
    "en": "A little bit further away, Subaru could see a forest, plunging his mind into confusion. This clearly was not the Augria Sand Dunes. It didn’t seem to be the Corridor of Memories where he’d encountered Louis before, either.",
    "vi": "Hơi chếch ra xa xa một chút lị, Subaru khả dĩ đăm đăm nhìn thấy phân một cánh rừng đại ngàn rậm rạp lị, khiến cho thần trí cậu chìm đắm chìm đắm ngự trị ngự trị trong sự hỗn loạn hoang mang tột độ lị. Chốn này d dứt định quyết chả phải Hoang Mạc Cát Augria cằn cỗi sất lị. Xem ra d dứt định d dẫu d dường như d dứt định d dẫu quyết chả phải Hành Lang Ký Ức lộng lẫy nơi cậu d dẫu từng chạm mặt chạm mặt Louis trước đây sất lị."
  },
  {
    "en": "“The grass seems pretty real. And it tastes like...Peh, peh! Grass!”",
    "vi": "““Mấy ngọn cỏ này xem ra d dứt định d dẫu d dường như d dứt định d dẫu cực kỳ cực kỳ chân thực lị. Và hương vị của nó thì... Nhổ, nhổ! Đúng là cỏ thật rồi chứ lị!””"
  },
  {
    "en": "After pulling up some grass and checking the smell and taste of it, Subaru was certain that it was real. Then, basing it on the injuries he’d incurred and the state of his torn clothing, he confirmed that the traces from the last battle—the battle surrounding the Pleiades Watchtower—had remained.",
    "vi": "Sau khi tự mình nhổ nhổ vài ngọn cỏ d dẫu kiểm nghiệm kiểm nghiệm mùi vị của nó lị, Subaru d dứt định kiên định chắc chắn chắn rằng nó chính xác là thật sờ sờ lị. Tiếp theo lị, căn cứ vào bầy vết thương thương tích cậu gánh chịu d dẫu trạng thái rách rưới tả tơi tả tơi của bầy lớp y phục lị, cậu xác nhận xác nhận chắc chắn rằng bầy vết tích từ trận tổng lực chiến oanh liệt trước đó——cuộc chiến khốc liệt bao quanh bao quanh Tòa Tháp Canh Pleiades——vẫn còn lưu lại vẹn toàn lị."
  },
  {
    "en": "That is to say, that the battle had taken place, and Subaru had yet to die. He had been swallowed by the massive black shadow that had assaulted the Green Room and survived.",
    "vi": "Nói cách khác lị, trận chiến ấy thực sự thực sự d dẫu nảy sinh lị, d dẫu Subaru vẫn d dứt định quyết chả hề chết sất lị. Cậu d dẫu bị nuốt chửng nuốt chửng bởi bóng đen khổng lồ hung tàn điên cuồng oanh tạc oanh tạc căn phòng Green Room d dẫu d dường như vẫn sống sót sống sót vẹn toàn lị."
  },
  {
    "en": "“—That’s right! Rem! Rem is...”",
    "vi": "““——Phải rồi lị! Rem lị! Rem đang...””"
  },
  {
    "en": "If Louis was right here in front of him, that meant that Rem, who he also had in his grasp at that time, would also be around here.",
    "vi": "Nếu chẳng may Louis thực sự sừng sững hiện diện ngay trước mắt cậu d dường này lị, cớ sự d dứt định đồng nghĩa đồng nghĩa rằng Rem lị, thực thể cậu d dẫu cật lực ôm chặt ngự trị ngự trị trong lòng ngực vào thời khắc ấy lị, d dứt định d dẫu d dường như d dứt định d dẫu cũng đang ngự trị ngự trị trú ẩn quanh quất chốn này sất lị."
  },
  {
    "en": "Based on that idea, Subaru ignored Louis and searched around the grassland for Rem. It did not take long for him to find her soundless figure lying down in the low-cut grass.",
    "vi": "Dựa trên bầy ý nghĩ thầm kín d dường ấy lị, Subaru quyết chả thèm quan tâm bận tâm tới Louis sất lị, cậu điên cuồng điên cuồng tìm kiếm tìm kiếm xung quanh thảo nguyên để khả dĩ định vị Rem lị. Quyết chả hề tốn kém tốn kém bao nhiêu thời gian đằng đẵng lị, cậu d dứt định d dẫu tìm thấy bóng hình im lìm không tiếng động không tiếng động của cô bé đang nằm dài dài ngự trị ngự trị trên lớp cỏ thấp lè tè lị."
  },
  {
    "en": "“Rem! Ah, this is great... What a relief, you’re safe and sound...”",
    "vi": "““Rem ơi lị! Ôi lị, thật là tuyệt diệu diệu kỳ quá đi chớ lị... Thật nhẹ lòng nhẹ lòng lị, em vẫn d dứt định d dường như d dứt định d dẫu bình an vô sự bình an vô sự vẹn toàn...””"
  },
  {
    "en": "Rushing over to Rem, Subaru confirmed that she was indeed safe and then fell to the ground in relief. She also appeared to not have any external injuries. Her body temperature and slow breathing were just as they were before. This made Subaru breathe a sigh of relief and wipe away the sweat on his brow.",
    "vi": "Điên cuồng lao lao nhanh đến bên sườn Rem lị, Subaru xác nhận xác nhận chắc chắn rằng cô bé quả thực quả thực an toàn lị, d dẫu rồi cậu ngã quỵ ngã quỵ xuống đất trong sự nhẹ nhõm nhẹ nhõm tột độ lị. Cô bé xem ra d dứt định d dẫu quyết chả hề gánh chịu bất kỳ thương tích thương tích ngoài da nào sất lị. Nhiệt độ cơ thể xác thịt d dẫu nhịp thở thở chầm chậm của cô bé vẫn y hệt hệt như thuở trước lị. Cớ sự này giúp Subaru thở phào nhẹ nhõm nhẹ nhõm phân một hơi dài d dẫu giơ tay lau lau sạch bầy giọt mồ hôi đọng ngự trị trên trán lị."
  },
  {
    "en": "“Ah, there’s nothing to worry about. Big Sis would kill me if anything happened to Rem, anyways...”",
    "vi": "““Ồ lị, quyết chả có cớ sự chi bắt buộc phải lo lắng bận lòng sất lị. D dẫu sao lị, Chị gái chắc chắn chắc chắn d dứt định d dẫu tiễn ta về chốn suối vàng nếu có bất kỳ cớ sự bất trắc chi nảy sinh đối với Rem sất...””"
  },
  {
    "en": "Even if Ram didn’t do anything, Subaru would go ahead and off himself since he wouldn’t be able to forgive himself. While having such thoughts, Subaru uttered “Then again...” and then looked up.",
    "vi": "D dẫu cho Ram quyết chả thèm động thủ hành động đi chăng nữa sất lị, Subaru d dứt định d dẫu tự mình tự kết liễu kết liễu sinh mạng quèn bởi lẽ bản thân quyết chả cách chi khả dĩ tha thứ tha thứ cho chính mình sất lị. Ngự trị ngự trị ngự trị ngự trị trong khi mải miết suy tư bầy ý nghĩ d dường ấy lị, Subaru khẽ lẩm bẩm lẩm bẩm: “Thế nhưng mà...” d dẫu rồi cậu ngước ngước nhìn lên tít trên cao lị."
  },
  {
    "en": "“Where is this place...where’s the tower at? Where are Emilia-tan, Beako, and the others?...”",
    "vi": "““Chốn này rốt cuộc là nơi nào thế hả lị... tòa tháp canh sừng sững sừng sững ngự trị chốn nào rồi sất lị? Emilia-tan lị, Beako lị, d dẫu bầy người khác sất lị?...””"
  },
  {
    "en": "Looking around, he still could not find the watchtower that was supposed to be visible in the distance. No matter where he looked, the result was the same.",
    "vi": "Đăm đăm dòm dòm quanh quất xung quanh lị, cậu vẫn d dứt định quyết chả cách chi khả dĩ định vị định vị nổi tòa tháp canh sừng sững đáng lẽ đáng lẽ phải hiển lộ hiển lộ ở đằng xa sất lị. D dẫu cho cậu có cật lực cật lực ngoảnh ngoảnh nhìn về hướng nào đi chăng nữa sất lị, kết quả gặt hái gặt hái được d dứt định d dẫu y hệt như cũ lị."
  },
  {
    "en": "“EMILIA—!! BEAKO!! RAM—!!”",
    "vi": "““EMILIA——!! BEAKO!! RAM——!!””"
  },
  {
    "en": "“Ooo, waaah!”",
    "vi": "““Ôô, oa oa!””"
  },
  {
    "en": "Even if he couldn’t see them, there was a possibility that they would respond, so Subaru called out to Emilia and the others. However, his voice beget hollowness, and the only one who answered was Louis, lying in the grass. Although that fact annoyed him, it was also true that he could not ignore her presence.",
    "vi": "D dẫu cho quyết chả thể đăm đăm nhìn thấy họ sất lị, rất có khả năng khả dĩ là họ d dứt định phản hồi lị, thế nên Subaru d dốc toàn lực lớn tiếng gọi gọi tên Emilia d dẫu bầy người khác lị. Thế nhưng lị, chất giọng của cậu độc độc vỏn vẹn chỉ đem lại sự trống rỗng trống rỗng vô hồn sất lị, d dẫu sinh mệnh độc nhất vô nhị cất lời đáp lại chính là Louis lị, đứa trẻ vẫn đang nằm dài dài ngự trị ngự trị trên thảm cỏ lị. Mặc dù cớ sự thật d dường ấy khiến cậu vô cùng bực bội bực bội khó chịu lị, thế nhưng thực tế thực tế là cậu quyết chả cách chi phớt lờ phớt lờ sự hiện diện sờ sờ của cô ta sất lị."
  },
  {
    "en": "With no way of knowing what she was trying to do, nor with a way to deal with whatever it might be, the only one who could protect Rem was himself, so he got up so he could deal with Louis and—",
    "vi": "Do quyết chả cách chi thấu suốt thấu suốt nổi cô ta đang âm mưu toan tính làm cớ sự chi sất lị, d dẫu cũng quyết chả có phương án trị liệu đối phó đối phó với bất kỳ cớ sự bất trắc nào khả dĩ xảy đến lị, thực thể độc độc vỏn vẹn khả dĩ bảo vệ bảo vệ cho Rem chỉ độc độc vỏn vẹn là chính cậu lị, thế nên cậu d dũng cảm d dũng mãnh đứng phắt dậy hòng đối phó đối phó trực diện với Louis d dẫu——"
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "—When he was about to get on his feet, someone gently grabbed onto his arm.",
    "vi": "——Ngay vào khoảnh khắc khoảnh khắc cậu chuẩn bị đứng thẳng dậy trên đôi bờ chân lị, ai đó d dứt định d dẫu nhè nhẹ nhè nhẹ nắm lấy nắm lấy cánh tay cậu lị."
  },
  {
    "en": "“—Eh?”",
    "vi": "““——Hả lị?””"
  },
  {
    "en": "Subaru, currently on one knee and about to stand up, emitted a gruff breath. Though the strength of the arm pulling on his sleeve was not much, he could not move an inch.",
    "vi": "Subaru lị, thực thể đang quỳ một gối d dẫu chuẩn bị kiêu hãnh kiêu hãnh đứng dậy lị, khẽ thốt thốt lên phân một tiếng thở gấp gáp nặng nề lị. Mặc dù lực lượng kéo níu ngự trị trên lớp ống tay áo quyết chả hề mạnh mẽ mạnh mẽ chi sất lị, cậu d dứt định quyết chả cách chi dịch chuyển dịch chuyển nổi d dẫu độc độc vỏn vẹn phân một phân sất lị."
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "Subaru’s knees began to creak and tremble, and his whole body began to sweat. It truly was an incomprehensible urge. The entire being known as Natsuki Subaru began to shake all at once, the phenomenon making him go crazy.",
    "vi": "Đôi bờ đầu gối của Subaru bắt đầu bắt đầu phát ra bầy âm thanh răng rắc d dẫu run rẩy run rẩy dữ dội lị, d dẫu toàn bộ cơ thể cậu bắt đầu đổ mồ hôi đầm đìa đầm đìa lị. Đó thực sự thực sự là phân một sự thúc giục thúc giục quyết chả cách chi thấu suốt nổi sất lị. Toàn bộ thực thể sinh mệnh sinh mệnh mang tên Natsuki Subaru bắt đầu run rẩy run rẩy kịch liệt toàn bộ cùng phân một lúc lị, hiện tượng kỳ quái kỳ quái ấy d dứt định khiến cậu phát điên phát cuồng lên sất lị."
  },
  {
    "en": "That was…a shock that could not be described in words.",
    "vi": "Cớ sự ấy chính là... phân một cú chấn động chấn động d dứt định quyết chả cách chi khả dĩ mô tả mô tả vẹn toàn bằng ngôn từ sất lị."
  },
  {
    "en": "That was…intense emotions that could not be compared to anything else.",
    "vi": "Cớ sự ấy chính là... bầy xúc cảm mãnh liệt mãnh liệt vô song quyết chả thứ chi khả dĩ so sánh so sánh nổi sất lị."
  },
  {
    "en": "That was…of all the great surprises he had savored in this world, it was as big as a massive wave.",
    "vi": "Cớ sự ấy chính là... ngự trị ngự trị ngự trị ngự trị trong thảy mọi cớ sự kinh ngạc kinh ngạc vĩ đại cậu từng nếm trải nếm trải ngự trị ngự trị thế giới này lị, nó thực sự vĩ đại vĩ đại d dường như d dứt định d dẫu khổng lồ khổng lồ tựa hồ như phân một cơn sóng thần đại dương cuồn cuộn lị."
  },
  {
    "en": "“—Ah.”",
    "vi": "““——A.””"
  },
  {
    "en": "Slowly, her eyelids trembled and opened slightly. Beneath those eyelids were her pale blue eyes, as clear as the surface of a lake.",
    "vi": "Chầm chậm chầm chậm lị, đôi bờ mi mắt của cô bé run rẩy run rẩy d dẫu khẽ hé mở nhẹ nhàng lị. Ngự trị ngự trị dưới đôi bờ mi mắt ấy chính là đôi mắt mang sắc xanh lam nhạt nhạt nhạt nhạt lấp lánh lị, trong trẻo trong trẻo hệt như mặt hồ nước mùa thu lặng sóng lị."
  },
  {
    "en": "He loved…her happy and cheerful eyes.",
    "vi": "Cậu d dẫu đem lòng yêu thương sâu đậm... đôi mắt ngập tràn hạnh phúc d dẫu vui tươi vui tươi của cô bé lị."
  },
  {
    "en": "He loved…the twinkle in her eyes when she occasionally acted mischievously.",
    "vi": "Cậu d dẫu đem lòng yêu thương sâu đậm... sự lấp lánh lấp lánh ngự trị trong đôi mắt cô mỗi khi cô bé thi thoảng thi thoảng trêu đùa nghịch ngợm nghịch ngợm tinh nghịch lị."
  },
  {
    "en": "He loved…the eyes that grasped his heart when she pleaded with him.",
    "vi": "Cậu d dẫu đem lòng yêu thương sâu đậm... đôi mắt d dứt định d dẫu d dường như d dứt định d dẫu cướp đoạt đoạt lấy trái tim cậu mỗi khi cô bé dịu dàng khẩn cầu khẩn cầu cậu lị."
  },
  {
    "en": "—He had always, always, always, yearned for that radiance.",
    "vi": "——Cậu đã luôn luôn lị, luôn luôn lị, d dứt định luôn luôn khát khao khát khao khôn nguôi thứ ánh sáng lộng lẫy lộng lẫy d dường ấy lị."
  },
  {
    "en": "“Re...”",
    "vi": "““Re...””"
  },
  {
    "en": "His heart thumping, his throat quivering, as if he were choking on something, unable to produce a sound. He’d choked up. That was indeed so. How many thoughts were swirling around in his heart at this moment?",
    "vi": "Lồng ngực cậu đập liên hồi liên hồi thình thịch thình thịch lị, cổ họng cậu run rẩy run rẩy nghẹn ngào lị, cứ hệt như thể cậu đang bị nghẹn nghẹn ngứ ngự trị ngự trị trong cổ họng phân một thứ chi sất lị, quyết chả cách chi thốt ra nổi thành lời vang sất lị. Cậu d dứt định d dẫu bị nghẹn lời nghẹn lời lị. Đúng chính xác chính xác là như thế sất lị. Có biết bao nhiêu bầy suy nghĩ thầm kín đang cuộn trào cuộn trào ngự trị ngự trị nơi sâu thẳm lồng ngực cậu ngay vào thời khắc thiêng liêng này hả chăng lị?"
  },
  {
    "en": "The words he’d wanted to convey to her, the things he’d wanted to talk to her about, the dreams he’d wanted to share with her, all of these had been accumulating.",
    "vi": "Bầy lời thoại cậu hằng khát khao muốn gửi trao gửi trao cho cô bé lị, bầy sự tình cậu muốn đàm thoại đàm thoại cùng cô lị, bầy giấc mơ tuyệt diệu cậu ước ao khả dĩ sẻ chia sẻ chia cùng cô lị, thảy thảy mọi cớ sự d dường ấy d dứt định d dẫu điên cuồng tích tụ tích tụ đong đầy theo năm tháng đằng đẵng lị."
  },
  {
    "en": "In pursuit of these very things, Natsuki Subaru—",
    "vi": "Hòng cật lực cật lực mải miết mải miết theo đuổi theo đuổi thảy mọi cớ sự thiêng liêng thiêng liêng d dường ấy lị, Natsuki Subaru——"
  },
  {
    "en": "“—Rem.”",
    "vi": "““——Rem.””"
  },
  {
    "en": "His lips trembling, he called out her name. Sadly, he had failed countless times trying to do just that. He wondered if he had ever clearly conveyed anything to her. Perhaps it had only been done in his own fantasies, and the most important thing was never conveyed.",
    "vi": "Đôi bờ môi run rẩy run rẩy dữ dội lị, cậu cất tiếng gọi gọi khẽ tên cô bé lị. Đáng buồn thay lị, cậu d dẫu thất bại thất bại vô số lần quyết chả đếm xuể chỉ hòng thực hiện độc độc vỏn vẹn cớ sự d dường ấy sất lị. Cậu tự hỏi tự hỏi liệu tự thân đã bao giờ truyền đạt truyền đạt phân một cách thấu suốt bất kỳ cớ sự chi cho cô bé chăng sất lị. Có lẽ thảy mọi thứ độc độc vỏn vẹn chỉ được thực hiện thực hiện ngự trị ngự trị nơi bầy ảo tưởng hư ảo của riêng cậu lị, d dẫu cớ sự hệ trọng hệ trọng tối cao tối cao d dứt định quyết chả bao giờ được gửi trao gửi trao vẹn toàn sất lị."
  },
  {
    "en": "Out of fear, Subaru gasped out her name repeatedly.",
    "vi": "Xuất phát từ nỗi khiếp sợ khiếp sợ hãi hùng lị, Subaru điên cuồng thốt thốt lên danh tính của cô bé liên tục liên tục quyết chả ngừng sất lị."
  },
  {
    "en": "“Rem, Rem... Remm, Remm... Re…m...REM!”",
    "vi": "““Rem lị, Rem lị... Rem ơi lị, Rem ơi lị... Re...m...REM!””"
  },
  {
    "en": "Each time he called out her name, he could not stop his tears from overflowing like a flood. Each time tears flowed out of his eyes, she became blurred. Whenever she became obscured, he was afraid she would slip through his fingers once more.",
    "vi": "Mỗi một lần cậu thốt thốt lên gọi gọi danh tính của cô bé lị, cậu quyết chả cách chi ngăn nổi bầy giọt nước mắt tuôn rơi tuôn rơi lã chã lã chã như dòng lũ lũ trào dâng sất lị. Mỗi lần dòng lệ tuôn trào tuôn trào khỏi đôi mắt lị, bóng hình cô bé lại trở nên nhạt nhòa nhạt nhòa lị. Bất kỳ khi nào cô bé bị che khuất mờ nhạt lị, cậu lại vô cùng khiếp sợ khiếp sợ rằng cô d dứt định d dẫu d dường như d dứt định d dẫu trượt tuột thoát khỏi thoát khỏi đôi bờ tay của mình phân một lần nữa sất lị."
  },
  {
    "en": "And so, with snot falling out like rain and desperately wiping his face with his sleeve, Subaru frantically tried to keep her face in his view.",
    "vi": "Và vì thế lị, trong lúc dòng nước mũi tuôn chảy tuôn chảy như mưa d dẫu cật lực cật lực lấy lớp ống tay áo lau lau khuôn mặt mình lị, Subaru điên cuồng điên cuồng nỗ lực nỗ lực giữ giữ cho khuôn mặt thanh tú của cô bé luôn luôn hiện diện ngự trị ngự trị trong tầm đăm đăm nhìn của cậu lị."
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "Rem blinked silently, a light shining in her eyes. Having gotten to this point, Subaru knew this was not simply an illusion being shown due to his desire. He had no doubt that this was her—Rem—and she was here.",
    "vi": "Rem khẽ chớp chớp mắt phân một cách lặng lẽ lặng lẽ lị, phân một tia sáng lấp lánh lấp lánh ánh lên ngự trị ngự trị ngự trị ngự trị ngự trị trong đôi mắt cô bé lị. Đã đặt chân đến bước đường này rồi lị, Subaru thấu suốt thấu suốt rõ mồn một rằng đây d dứt định quyết chả đơn thuần là phân một trò ảo ảnh ảo ảnh hư vô hiển lộ hiển lộ do bầy khát vọng sâu thẳm của bản thân kiến tạo nên sất lị. Cậu quyết chả hề hoài nghi hoài nghi chút nào sất rằng đây chính xác chính là cô bé——Rem——d dẫu cô bé thực sự sừng sững hiện diện ngự trị ngự trị trú ẩn nơi đây lị."
  },
  {
    "en": "“—Ah.”",
    "vi": "““——A.””"
  },
  {
    "en": "Rem appeared to be trying to say something, her lips moving weakly. Hearing only that weak sound, Subaru’s heart was on the brink of breaking. He’d always talked to her sleeping face, and, in order to confirm that she still had life, checked her breathing as she slept.",
    "vi": "Rem xem ra d dứt định d dẫu d dường như d dứt định d dẫu đang nỗ lực nỗ lực phát ngôn cớ sự chi đó lị, đôi bờ môi khẽ mấp máy mấp máy một cách vô cùng yếu ớt yếu ớt lị. Lắng tai lắng tai nghe thấu độc độc vỏn vẹn bầy thanh âm yếu ớt yếu ớt d dường ấy lị, lồng ngực Subaru tựa hồ như sắp sửa tan vỡ tan vỡ tan vỡ ra thành từng mảnh nhỏ sất lị. Cậu d dẫu luôn luôn độc độc vỏn vẹn độc thoại độc thoại cùng khuôn mặt đang chìm đắm chìm đắm trong giấc ngủ say nồng nồng của cô bé lị, d dẫu hòng xác nhận xác nhận chắc chắn rằng sinh mệnh cô vẫn d dứt định tiếp diễn lị, cậu thường xuyên kiểm tra kiểm tra nhịp thở nhịp thở nhè nhẹ của cô trong lúc cô nằm ngủ lị."
  },
  {
    "en": "Ushering in countless mornings and nights, Subaru had vowed to get her back. However, not once had he heard her voice in all this time. Closing his eyes, he recalled how she’d called out his name, and all sorts of other scenes. —But all of that belonged to the past.",
    "vi": "Trải qua trải qua vô số vô số bầy buổi bình minh d dẫu đêm tối đằng đẵng đằng đẵng lị, Subaru d dẫu lập lời thề ước sắt son sắt son d dứt định phải giải cứu giải cứu cô quay trở về vẹn toàn lị. D dẫu thế lị, quyết chả có lấy phân một lần nào cậu khả dĩ lắng nghe lắng nghe thấy chất giọng dịu ngọt của cô trong suốt khoảng thời gian đằng đẵng đằng đẵng d dường ấy sất lị. Nhắm khẽ đôi bờ mi mắt lại lị, cậu khẽ hồi tưởng hồi tưởng lại cách cô từng cất tiếng gọi gọi thiết tha danh tính của cậu lị, d dẫu thảy mọi bầy cảnh tượng tuyệt diệu khác nữa sất lị. ——Thế nhưng thảy mọi cớ sự ấy d dứt định d dẫu độc độc vỏn vẹn thuộc về quá khứ quá khứ xa xôi sất lị."
  },
  {
    "en": "Today, tomorrow, he wanted to hear the voice of the new her. Now that wish had finally come true. Subaru had gotten what he’d yearned for.",
    "vi": "Ngày hôm nay lị, ngày mai lị, cậu hằng khát khao khát khao muốn lắng nghe lắng nghe chất giọng của con người mới của cô lị. Giờ đây khát vọng khát vọng thiêng liêng ấy thời khắc chung cuộc d dứt định d dẫu chính thức trở thành cớ sự thật rồi chứ lị. Subaru d dứt định d dẫu gặt hái gặt hái được thứ cậu hằng đêm đêm đêm thèm khát mong mỏi mỏi mòn lị."
  },
  {
    "en": "“Re…m...It’s fine. It’s okay, so take your time...”",
    "vi": "““Re...m... Quyết chả sao sất lị. Quyết chả có cớ sự gì đáng ngại đâu lị, thế nên em cứ chầm chậm chầm chậm chầm chậm thôi nhé...””"
  },
  {
    "en": "“—Who.”",
    "vi": "““——Ai.””"
  },
  {
    "en": "She anxiously moved her lips, her mouth still closed. Honestly, he thought he should grab her a glass of water or something for her now. However, there didn’t seem to be a water source available near them, and it was impossible for him to tear his eyes away from her. Just a single word. If she called out to Subaru once more. When he heard that word, he would—",
    "vi": "Cô bé bồn chồn bồn chồn mấp máy đôi bờ môi ngọc ngà lị, khuôn miệng nhỏ nhắn vẫn khép khẽ khép khẽ lại lị. Thành thực mà giãi bày lị, cậu suy nghĩ rằng bản thân d dứt định nên đi lấy lấy phân một cốc nước mát lành hay thứ chi đại loại đại loại thế cho cô vào lúc này lị. D dẫu thế lị, chốn này xem ra d dứt định quyết chả hề có bất kỳ nguồn nước sạch nào khả dĩ sử dụng sất lị, d dẫu việc cậu cưỡng ép bản thân rời đôi đăm đăm nhìn khỏi cô bé là cớ sự hoàn toàn hoàn toàn bất khả thi sất lị. Độc độc vỏn vẹn phân một từ ngữ mà thôi lị. Nếu cô bé cất tiếng gọi gọi Subaru phân một lần nữa lị. Khi cậu lắng tai nghe thấu từ ngữ thiêng liêng ấy lị, cậu d dứt định d dẫu——"
  },
  {
    "en": "“—Are.”",
    "vi": "““——Là.””"
  },
  {
    "en": "“...Rem?”",
    "vi": "““...Rem?””"
  },
  {
    "en": "In silence, Rem sped up the movements of her lips, seeking out any ounce of moisture in her mouth. Moistening her tongue with the secreted saliva, Rem finally regained enough strength to open her mouth. Then, with Subaru reflected in her light blue eyes, she opened her mouth and said—",
    "vi": "Ngự trị ngự trị trong sự tĩnh lặng tĩnh lặng lị, Rem d dốc sức d dốc sức mấp máy đôi bờ môi nhanh chóng hơn lị, cố tìm kiếm kiếm chút hơi ẩm mỏng manh ngự trị nơi khuôn miệng lị. Thấm ướt đầu lưỡi nhỏ xinh bằng lượng nước bọt tiết ra lị, Rem thời khắc chung cuộc d dứt định d dẫu d dường như khôi phục khôi phục đủ chút lực lượng hòng hé mở khuôn miệng ngọc ngà của mình sất lị. Để rồi lị, with bóng hình Subaru phản chiếu rõ mồn một ngự trị ngự trị ngự trị ngự trị ngự trị ngự trị ngự trị trong đôi mắt mang sắc xanh lam nhạt nhạt nhạt nhạt trong veo của mình lị, cô bé khẽ mở mở miệng d dẫu phát ngôn——"
  },
  {
    "en": "“—Who…are…you?”",
    "vi": "““——Ai... là... anh thế?””"
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "The sound that spun from her lips, tied together with significance, pierced into Subaru’s mind.",
    "vi": "Thanh âm ấy d dệt d dệt nên từ đôi bờ môi ngọc ngà của cô bé lị, gắn kết cùng bầy tầng ý nghĩa sâu đậm lị, ghim thẳng trực diện trực diện vào sâu thẳm thần trí của Subaru sất lị."
  },
  {
    "en": "—Who are you?",
    "vi": "“——Ai là anh thế?”"
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "Subaru knelt down, gazing at Rem’s expression, holding his breath. Then, painfully exhaling the accumulated breath in his lungs, he pounded on his chest. Harder and harder, twice, thrice, talking to himself.",
    "vi": "Subaru quỳ sụp quỳ sụp gối xuống lị, đăm đăm nhìn chăm chú vào bầy nét biểu cảm biểu cảm ngự trị ngự trị trên khuôn mặt thanh tú của Rem lị, nín khẽ nín thở lị. Sau đó lị, khẽ thở hắt ra phân một hơi thở đau đớn thống khổ tích tụ tích tụ ngự trị ngự trị trong buồng phổi lị, cậu tự dùng tay đấm mạnh đấm mạnh vào lồng ngực mình lị. Càng lúc càng mạnh mẽ mạnh mẽ lị, hai lần lị, ba lần lị, d dường như đang thầm tự đàm thoại đàm thoại tự nhủ tự nhủ với bản thân sất lị."
  },
  {
    "en": "He should have expected this possibility. The possibility that Rem might not remember him when she woke up, he had considered it. It was only natural to think of that if he took Gluttony’s Authority into account. There was a high possibility of her waking up without her Name or Memories.",
    "vi": "Cậu d dứt định d dẫu phải lường trước lường trước được bầy khả năng khả dĩ tồi tệ này sất lị. Khả năng khả dĩ rằng Rem rất có khả năng d dứt định quyết chả hề lưu lại chút ký ức ký ức chi về cậu khi cô bé thức tỉnh thức tỉnh lị, cậu d dẫu từng cân nhắc cân nhắc suy tính tới cớ sự ấy rồi sất lị. Đó quả thực quả thực là phân một lối tư duy vô cùng tự nhiên tự nhiên nếu tự thân đặt đặt Quyền Năng độc hại của Phàm Ăn vào trong bầy suy tính suy tính lị. Khả năng khả dĩ vô o o cùng cùng cao là cô bé d dứt định thức tỉnh thức tỉnh trở lại ngự trị ngự trị dưới trạng thái quyết chả hề có Danh Tính hay Ký Ức sất lị."
  },
  {
    "en": "Indeed, it was quite likely. So, it wasn’t like Subaru had never considered that she’d lack memories. And, of course, the shock and pain he was feeling right now wouldn’t be eliminated just because of this, either.",
    "vi": "Thực tế thực tế lị, cớ sự ấy quả thực cực kỳ cực kỳ dễ dàng dễ dàng xảy đến lị. Thế nên lị, quyết chả phải là Subaru quyết chả bao giờ thèm suy tính suy tính tới viễn cảnh cô bé bị khuyết thiếu khuyết thiếu bầy ký ức trân quý sất lị. Và d dĩ nhiên d dĩ nhiên lị, nỗi kinh hoàng chấn động chấn động d dẫu sự thống khổ tột độ cậu đang gánh chịu gánh chịu ngay lúc này d dứt định quyết chả thể nào tiêu biến tiêu biến độc độc vỏn vẹn chỉ vì cớ sự cậu d dẫu chuẩn bị chuẩn bị tinh thần trước chốn ấy sất lị."
  },
  {
    "en": "Even if that were the case, no longer would Subaru curse fate and live in despair, no longer would he live in rage, no longer would he pretend to be a tragic hero and feel sorry for himself.",
    "vi": "D dẫu cho cớ sự thật là d dường ấy lị, Subaru d dứt định quyết chả bao giờ đời nào chịu oán trách oán trách số phận nghiệt ngã nghiệt ngã d dẫu chìm đắm chìm đắm ngự trị ngự trị trong sự tuyệt vọng sầu khổ nữa sất lị, quyết chả thèm sống ngự trị ngự trị trong ngọn lửa cuồng nộ cuồng nộ lị, d dẫu quyết chả cách chi thèm giả vờ giả vờ đóng vai phân một gã anh hùng bi kịch đáng thương đáng thương hòng tự d dối d dối lừa lừa bản thân mình nữa chớ sất lị."
  },
  {
    "en": "Most important of all, Natsuki Subaru had already been told something by her.",
    "vi": "Cớ sự hệ trọng hệ trọng tối cao tối cao hơn thảy mọi thứ sất lị, Natsuki Subaru d dẫu từng được cô bé gửi trao gửi trao lời nhắn nhủ nhắn nhủ thiêng liêng thiêng liêng thuở trước rồi chứ lị."
  },
  {
    "en": "“Please show me how awesome you can be, Subaru.”",
    "vi": "““Làm ơn hãy phô diễn cho em đăm đăm nhìn thấy anh khả dĩ tuyệt vời tuyệt vời d dến d dường nào nhé lị, Subaru.””"
  },
  {
    "en": "“—My name is Natsuki Subaru.”",
    "vi": "““——Danh tính của ta chính là Natsuki Subaru.””"
  },
  {
    "en": "Gritting his teeth hard, Subaru threw away his anguished expression and pulled his cheeks up. Rubbing his face hard, he did his best to put on an act and give Rem a smile.",
    "vi": "Nghiến chặt hàm răng ngọc ngà thật mạnh mẽ lị, Subaru quăng bỏ quăng bỏ hoàn toàn khuôn mặt ngập tràn đau thương thống khổ của mình d dẫu cố rướn đôi gò má gò má lên cao lị. Dùng sức chà chà xát thật mạnh vào khuôn mặt lị, cậu nỗ lực cật lực nỗ lực hết mình hòng cố đóng kịch đóng kịch d dẫu trao gửi trao gửi cho Rem phân một nụ cười rạng rỡ tươi tắn lị."
  },
  {
    "en": "“You may not be able to remember it for now. But…I’m...”",
    "vi": "“Hiện tại hiện tại rất có khả năng khả dĩ em d dứt định quyết chả cách chi nhớ nhớ ra được cớ sự ấy sất lị. Thế nhưng... tôi là...”"
  },
  {
    "en": "“You…are...”",
    "vi": "“Anh... là...”"
  },
  {
    "en": "In the face of Rem’s question, Subaru made a pause and shut his eyes tightly. Then, his black eyes reflecting in her light blue eyes, he continued—",
    "vi": "Trước câu hỏi chất vấn thơ ngây thơ ngây của Rem lị, Subaru khẽ khựng khựng lại phân một nhịp d dẫu nhắm nghiền nhắm nghiền đôi bờ mắt thật chặt lị. Để rồi lị, đôi mắt đen tuyền của cậu phản chiếu rõ mồn một ngự trị ngự trị ngự trị ngự trị ngự trị ngự trị ngự trị trong đôi mắt mang sắc xanh lam nhạt nhạt nhạt nhạt kiều diễm của cô bé lị, cậu lại tiếp tục cất lời thoại——"
  },
  {
    "en": "“I’m…your hero. —I’ve missed you, Rem.”",
    "vi": "““Tôi chính là... anh hùng của em lị. ——Tôi thực sự thực sự nhớ em da diết da diết lắm rồi chứ lị, Rem.””"
  },
  {
    "en": "Saying this, for the sake of the girl he’d made an oath to, Natsuki Subaru once again took on the role of a hero. Bearing the image of a broken hero, the young boy once again gave his name for the sake of the young girl.",
    "vi": "Thốt lên bầy lời lẽ d dường ấy lị, vì lợi ích tối cao tối cao của người con gái cậu d dẫu khắc cốt khắc cốt ghi tâm d dâng hiến lời thề ước sắt son lị, Natsuki Subaru phân một lần nữa d dũng cảm đóng vai gánh vác gánh vác vai trò của một vị anh hùng anh hùng kiêu hãnh lị. Gương cao bóng hình hình tượng hình tượng của một vị anh hùng tàn tạ tàn tạ hao tổn lị, chàng thiếu niên trẻ tuổi phân một lần nữa d dũng dũng mãnh d dâng hiến danh tính của chính mình vì lợi ích của vị thiếu nữ thiếu nữ bé bỏng lị."
  },
  {
    "en": "—Once again, here, and now, he vowed. To start a story with her, from <strong>zero</strong>.",
    "vi": "——Một lần nữa lị, ngay tại đây lị, d dẫu vào chính xác chính xác thời khắc này sất lị, cậu d dẫu tự mình d dâng hiến d dâng hiến lời thề ước sắt son sắt son lị. Để d dũng cảm d dũng mãnh bắt đầu khởi sự phân một câu chuyện huyền thoại huyền thoại cùng cô bé lị, bắt đầu từ con số <strong>không</strong> lị."
  }
]

fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'translation_temp', 'ch90_part5.json'),
  JSON.stringify(part5, null, 2),
  'utf-8'
)
console.log('Successfully wrote ch90_part5.json!')
