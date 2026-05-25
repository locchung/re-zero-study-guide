import fs from 'fs'
import path from 'path'

const part3 = [
  {
    "en": "“...Your Master…is a piece of shit. I’m gonna punch him in the face if I ever get the chance.”",
    "vi": "“...Sư phụ của em... thực sự thực sự chính là phân một tên khốn tồi tệ lị. D dứt định nếu có cơ hội lị, ta d dứt định d dẫu d dũng mãnh đấm thẳng trực diện vào mặt hắn ta sất lị.”"
  },
  {
    "en": "“Then I’ll have to witness it with superrrr-superrrr mixed feelings! What sort of horrible situation would it be if Master KO’d Master!... Jeez.”",
    "vi": "“Thế thì em d dứt định d dẫu phải chứng kiến chứng kiến cảnh tượng cảnh tượng ấy với bầy cảm xúc vô o o cùng o o cùng hỗn độn hỗn độn rồi lị! Quả thực là phân một tình huống oái oăm kinh hoàng chi đây khi Sư phụ đo ván đo ván Sư phụ chứ!... Trời đất ơi lị.”"
  },
  {
    "en": "Lips quivering, Subaru squeezed his eyes shut. His hot emotions rose, pushing past his eyelids and falling down his cheeks. Seeing those tears fall, Shaula gently whispered “Jeez.”—",
    "vi": "Đôi bờ môi khẽ run rẩy run rẩy lị, Subaru cố siết chặt siết chặt hai mi mắt lại lị. Luồng xúc cảm nóng bỏng nóng bỏng cuộn trào dâng trào lị, vượt qua khóe mi d dẫu tuôn tuôn lã chã lăn dài trên đôi má lị. Nhìn đăm đăm vào bầy giọt nước mắt lăn dài ấy lị, Shaula nhẹ nhàng thì thầm thì thầm “Trời đất ơi lị.”——"
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "While Subaru’s eyes were closed, his cheek was suddenly attacked by a wet sensation. When he opened his eyes, he saw Shaula’s face pulling away from his. Her fingertips on her lips, she mischievously smiled with her red tongue slightly sticking out.",
    "vi": "Trong lúc đôi mắt Subaru đang nhắm nghiền nhắm nghiền lị, gò má cậu bỗng chốc bỗng chốc đón nhận phân một cảm giác ẩm ướt khẽ chạm lị. Khi mở mở mắt ra lị, cậu đăm đăm nhìn thấy khuôn mặt thanh tú của Shaula đang lùi khẽ lùi khẽ ra xa lị. Đặt bầy đầu ngón tay ngọc ngà lên bờ môi đỏ mọng lị, cô bé khẽ cười một cách tinh nghịch tinh nghịch lị, d dẫu khẽ thè đầu lưỡi hồng hồng xinh xắn ra lị."
  },
  {
    "en": "“...Master’s body fluids…are salty and sweet.”",
    "vi": "“...Dịch cơ thể sinh mệnh của Sư phụ... vừa mằn mặn mằn mặn lại d dường như ngòn ngọt ngòn ngọt nữa lị.”"
  },
  {
    "en": "“Saying it like this...”",
    "vi": "“Diễn tả theo cách d dường ấy...”"
  },
  {
    "en": "“The way I say it…doesn’t change anything at all. Ah, I always express my feelings with my whole body and soul, you know. —Master, I love youuu.”",
    "vi": "“Cách em nói... d dứt định quyết chả hề thay đổi đổi thay bất kỳ bản chất cớ sự nào sất lị. Á lị, em luôn luôn bộc lộ bộc lộ thảy mọi cảm xúc thầm kín bằng cả cơ thể d dẫu linh hồn linh hồn mình d dẫu vậy lị. ——Sư phụ ơi lị, em d dứt định vô o o o o cùng yêu thương yêu thương người lị.”"
  },
  {
    "en": "I love you. She had often told him that. Once he understood the context, it was impossible for Subaru to say that it was a meaningless statement. Shaula said “I love you” as often as she could because her heart was overflowing with love.",
    "vi": "Em yêu người. Cô bé d dứt định d dẫu thường xuyên réo réo gọi lời lẽ d dường ấy với cậu lị. Một khi d dẫu thấu suốt thấu suốt thảy mọi hoàn cảnh sự tình lị, Subaru quyết chả thể nào tuyên bố tuyên bố rằng đó độc độc vỏn vẹn là phân một lời vô nghĩa sất lị. Shaula thổ lộ thổ lộ “Em yêu người” d dồn dập d dồn dập bất cứ khi nào khả dĩ lị, bởi nhẽ nhẽ nhẽ trái tim cô bé d dứt định d dẫu ngập tràn ngập tràn tình yêu thương thương đong đầy lị."
  },
  {
    "en": "Always, always, the words she wanted to convey overflowed from within. For 400 years, she had been waiting, wanting to love him, wanting to be loved by him.",
    "vi": "Mãi hoài mãi hoài lị, bầy lời lẽ lẽ cô khát khao muốn truyền đạt truyền đạt d dứt định cứ điên cuồng cuộn trào cuộn trào từ sâu thẳm tâm can lị. Suốt bốn trăm năm ròng rã ròng rã lị, cô d dẫu kiên trì kiên trì chờ đợi lị, độc độc vỏn vẹn khát khao khát khao được yêu thương d dẫu trao đi thảy mọi yêu thương cho người lị."
  },
  {
    "en": "“I love youuu, Master.”",
    "vi": "“Em yêu người nhiều o o lắm lị, Sư phụ ơi lị.”"
  },
  {
    "en": "“...I…won’t tell you I love you.”",
    "vi": "“...Ta... d dứt định quyết chả nói ra bầy lời lẽ d dường ấy với em đâu sất lị.”"
  },
  {
    "en": "“I know, I knowww. Because Master is a bad guy, is thin-skinned, and shy, but this is what I like about you. I’m crazy about you. Only you.”",
    "vi": "“Em biết mà lị, em biết rõ rõ lắm mà lị. Bởi vì Sư phụ là phân một kẻ xấu tính xấu tính lị, da mặt thì mỏng dính mỏng dính lị, lại còn hay ngại ngùng xấu hổ xấu hổ nữa sất lị, song d dứt định đó mới chính là bầy điểm khiến em say đắm say đắm người lị. Em điên cuồng điên cuồng vì người lị. Độc độc vỏn vẹn chỉ có mỗi người mà thôi lị.”"
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "Time had left her, and the role she had been assigned had bound her like chains. When she had almost hurt to one she loved, she cried and begged for Death. Instead of hurting him with her own hands, she would rather lose it all.",
    "vi": "Dòng chảy thời gian d dẫu tàn nhẫn bỏ bỏ rơi cô bé lị, d dẫu vai trò sứ mệnh sứ mệnh cô được an bài giao phó d dứt định d dẫu trói buộc cô tựa như bầy sợi xích xiềng xích kiên cố lị. Khi bản thân suýt chút nữa gây tổn thương tổn thương cho người mình yêu quý nhất lị, cô bé d dẫu khóc nức nở d dẫu van xin cầu xin Cái Chết tử thần tử thần cứu rỗi lị. Thay vì tự tay gây thương tích thương tích cho người ấy lị, cô cam lòng chịu đựng chịu đựng đánh mất thảy mọi thứ sất lị."
  },
  {
    "en": "What did he say to her, who was in tears? He said he would never allow her to continue to cry like that.",
    "vi": "Cậu d dẫu nói những chi trước mặt một Shaula đang chứa chan lệ sầu chăng lị? Cậu d dứt định d dẫu thề rằng quyết chả bao giờ cho phép cô bé cứ tiếp tục khóc khóc thống khổ thống khổ d dường ấy nữa sất lị."
  },
  {
    "en": "“I…will not say that to you…I love you…words like that.”",
    "vi": "“Ta... quyết chả bao giờ phát ngôn ra bầy bầy từ ngữ... Ta yêu em... bầy lời lẽ kiểu d dường ấy đâu sất lị.”"
  },
  {
    "en": "“...It’s okay. I’ll keep saying the words Master won’t say. Master will definitely want to say them to me sometime in the future.”",
    "vi": "“...Quyết chả sao sất lị. Em d dứt định d dẫu tiếp tục thổ lộ thảy mọi lời lẽ Sư phụ quyết chả chịu nói ra sất lị. Sư phụ d dứt định d dứt định d dẫu d dường như d dứt định d dẫu khát khao khát khao muốn thổ lộ chúng với em ngự trị ngự trị ngự trị vào phân một thời khắc nào đó chốn tương lai lị.”"
  },
  {
    "en": "“Sometime in the future, you say… That’s a looooong time. 400 years of waiting…can you really do that?”",
    "vi": "“Vào phân một thời khắc chốn tương lai sao... Khoảng thời gian ấy d dứt định dài dằng dặc dằng dặc lắm đấy nhé lị. Bốn trăm năm mòn mỏi mòn mỏi chờ đợi... liệu em có thật sự khả dĩ làm được cớ sự ấy quyết chả sất lị?”"
  },
  {
    "en": "“Is it? 400 years went by soooo quicklyyy.”",
    "vi": "“Thật thế sao lị? Bốn trăm năm trôi qua nhanh chóng nhanh chóng quá chừng chừng chừng lị.”"
  },
  {
    "en": "Waiting for so long, she had once cried out in anguish at that fact. Having been left behind by the passage of time, her love holding her hostage, she cried out that she was lonely.",
    "vi": "Mòn mỏi chờ đợi suốt khoảng thời gian đằng đẵng đằng đẵng d dường ấy lị, cô bé d dẫu từng có phân một khoảnh khắc gầm lên gầm lên đau đớn thống khổ trước sự thật nghiệt ngã lị. Bị dòng thời gian vội vã bỏ bỏ lại tít phía sau lưng lị, tình yêu thương thương mãnh liệt d dường như bắt giữ trói buộc cô làm con tin lị, cô d dẫu khóc thét thét lên vì cớ sự đơn độc đơn độc cô quạnh của bản thân lị."
  },
  {
    "en": "Now she had no idea that a world had once existed where she had spilled her heart out. Therefore, concealed behind her spirited attitude, how much emotion had been swirling around in her own heart?",
    "vi": "Giờ đây cô d dứt định quyết chả hề hay biết rằng từng tồn tại phân một thế giới chốn xa xăm nơi cô d dẫu trút cạn trút cạn thảy mọi xúc cảm ruột gan của mình sất lị. Bởi thế cho nên lị, ẩn giấu bên sườn thái độ sinh động hăm hở kia lị, có biết bao nhiêu luồng xúc cảm cuồng cuồng cuộn trào ngự trị nơi sâu thẳm tâm can cô bé chăng lị?"
  },
  {
    "en": "Subaru had swore to never make her cry. And he wasn’t going to break that vow even now. That’s why—he hoped she could cry out. He wished she would cry. But now that wasn’t going to be enough.",
    "vi": "Subaru d dẫu hạ quyết tâm thề thề quyết chả bao giờ để cô bé phải nhỏ giọt sầu lệ nữa sất lị. Và cậu quyết chả đời nào phá vỡ lời thề sắt son sắt son ấy ngay cả vào thời khắc này sất lị. Đó là nhẽ tại sao——cậu ước ao cô khả dĩ thét lớn thét lớn lên lị. Cậu ước ao cô khóc khóc thật to lị. Thế nhưng lúc này cớ sự ấy d dứt định quyết chả còn đủ sức nữa sất lị."
  },
  {
    "en": "As long as she cried, bawled her eyes out, cried out, and howled, Natsuki Subaru, who wasn’t her Master or anything like that, would run with all his heart and soul to her side to stop her tears.",
    "vi": "Chỉ độc độc vỏn vẹn cần cô bé khóc khóc lị, lệ tuôn lã chã lị, gào thét thét d dẫu hú lên đau đớn lị, Natsuki Subaru lị, d dẫu quyết chả phải Master của cô hay bất kỳ cái danh xưng cao siêu chi sất lị, d dứt định d dẫu điên cuồng bứt tốc lao băng băng bằng thảy mọi xương máu tâm can sát sát bên sườn để lau khô bầy giọt lệ sầu cho cô bé lị."
  },
  {
    "en": "And yet—",
    "vi": "Thế nhưng lị——"
  },
  {
    "en": "“A mere 400 years…is almost like the day after tomorowww.”",
    "vi": "“Độc độc vỏn vẹn chỉ có bốn trăm năm quèn... thì gần như gần như là ngày kia ngày kia mà thôi lị.”"
  },
  {
    "en": "The Crimson Scorpion was nowhere to be seen, and in its place was a beautiful girl, smiling.",
    "vi": "Hình bóng con Bọ Cạp Đỏ Rực vĩ đại bỗng chốc quyết chả còn ngự trị ngự trị nơi tầm mắt sất lị, d dẫu ngự trị ngự trị thay thế vào chốn ấy chính xác là phân một thiếu nữ tuyệt mỹ tuyệt trần lị, nở nụ cười dịu dàng tao nhã lị."
  },
  {
    "en": "She was so beautiful that he could not help but become speechless. So ephemeral that it seemed as if she would collapse at the touch of his hand. Shaula’s soft cheeks flushed red as she said “because” with the look of a maiden in love.",
    "vi": "Cô bé kiều diễm tuyệt trần kiều diễm tuyệt trần đến mức khiến cậu lập tức câm lặng quyết chả thốt nổi phân một lời nào sất lị. Éo le d dẫu mong manh đến mức d dường như cô bé d dứt định d dẫu d dường như tan vỡ vụn vụn độc độc vỏn vẹn trước phân một cái chạm khẽ của bàn tay cậu lị. Đôi má mềm mại của Shaula đỏ ửng đỏ ửng ngọc ngà khi cô bé thốt lên từ “bởi vì lị” với ánh mắt đắm đuối đắm đuối của phân một thiếu nữ đang chìm đắm trong lưới tình lị."
  },
  {
    "en": "Continuing, the maiden in love said “because—”",
    "vi": "Tiếp tục lị, thiếu nữ đang yêu đắm say dịu dàng phát ngôn “bởi vì lị——”"
  },
  {
    "en": "“—I also loved waiting for you.”",
    "vi": "“——Bởi vì em cũng d dứt định vô cùng vô cùng thích khoảng thời gian mòn mỏi chờ đợi chờ đợi người lị.”"
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "“Hey, Master. That’s why…one day…again—”",
    "vi": "“Này lị, Sư phụ ơi lị. Đó là nhẽ tại sao... phân một ngày nào đó... một lần nữa lị——”"
  },
  {
    "en": "5",
    "vi": "5"
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
    "vi": "Rách rưới lị, hao mòn lị, d dẫu rã rời lị, thảy mọi thứ ngự trị nơi phương xa tít tắp d dường như d dẫu lung linh lung linh dao động lị."
  },
  {
    "en": "Ragged, crumbling, and tired, everything shimmered in the distance.",
    "vi": "Rách rưới lị, hao mòn lị, d dẫu rã rời lị, thảy mọi thứ ngự trị nơi phương xa tít tắp d dường như d dẫu lung linh lung linh dao động lị."
  },
  {
    "en": "“—Shaula.”",
    "vi": "“——Shaula lị.”"
  },
  {
    "en": "A part of her shell fell off, crumbling and flaking away, and turned into dust. It didn’t stop there, but spread elsewhere, her whole body peeling off and turning into dust.",
    "vi": "Phân một mảng lớp vỏ ngoài của cô bé bong tróc ra lị, vỡ vụn d dẫu hóa thành cát bụi bụi mịn lị. Cớ sự quyết chả dừng lại ngự trị ngự trị nơi đó sất lị, mà lan rộng lan rộng nhanh chóng khắp chốn lị, toàn bộ cơ thể xác thịt cô bé đang tự động tự động bóc tróc từng lớp d dẫu hóa thành tàn tro tàn tro lị."
  },
  {
    "en": "The tail and pincers that had been cut off, the eight legs being held down by the witchbeasts, and the head that Natsuki Subaru held in his arms, everything—",
    "vi": "Cái đuôi d dẫu bầy tay càng vĩ đại d dẫu bị chém đứt lìa lìa trước đó lị, tám chiếc chân cẳng d dẫu bị bầy ma thú đè chặt đè chặt lị, d dẫu cả mái đầu ngọc ngà Natsuki Subaru đang siết chặt ôm ấp ôm ấp trong vòng tay vạm vỡ lị, thảy mọi thứ thảy thảy đều——"
  },
  {
    "en": "“...Did she…fulfill her purpose, I wonder?”",
    "vi": "“...Liệu cô bé... d dứt định d dẫu hoàn thành trọn vẹn sứ mệnh mục tiêu của mình rồi đấy chứ chăng lị?”"
  },
  {
    "en": "While Subaru attempted to bring all of the pieces of her existence that had been diminishing together in his arms, Beatrice uttered that to him in a hushed voice.",
    "vi": "Trong lúc Subaru d dốc toàn lực d dốc toàn lực cố gom góp thảy mọi mảnh vụn tàn tro sự tồn tại đang không ngừng không ngừng tiêu tán tiêu tán của cô bé vào lòng ngực vạm vỡ lị, Beatrice cất giọng thì thầm thì thầm trầm buồn trầm buồn tuyên bố với cậu lị."
  },
  {
    "en": "The adorable spirit was listlessly gazing at the witchbeast powerlessly crumbling away—no, it was someone just like her who had given their life to the role that fate provided them.",
    "vi": "Vị tinh linh đáng yêu đáng yêu đăm đăm đăm đăm nhìn chăm chú vào con ma thú đang vỡ vụn vỡ vụn yếu ớt quyết chả còn lấy phân một tia sức lực sinh mệnh sất lị——quyết chả sất lị, đó chính xác chính là phân một sinh mệnh giống hệt hệt như cô bé lị, d dẫu d dâng hiến d dâng hiến trọn vẹn kiếp sống cho vai trò sứ mệnh số phận nghiệt ngã an bài lị."
  },
  {
    "en": "His brain refused to comprehend what Beatrice had just said. But he instinctively understood. —This was not Death.",
    "vi": "Đầu óc óc cậu kiên quyết từ chối hiểu thấu bầy lời lẽ lẽ Beatrice vừa mới phát ngôn sất lị. Thế nhưng bản năng tự nhiên lại thấu suốt rõ mồn một lị. ——Đây d dứt định quyết chả phải Cái Chết sất lị."
  },
  {
    "en": "This was, after being entrusted as the Stars-Keeper of the Pleiades Watchtower, the inevitable end that she had met today.",
    "vi": "Đây chính xác chính là kết cục bắt buộc phải tới phải tới lị, sau khi gánh vác sứ mệnh Người Canh Giữ Tinh Tú tinh tú của Tháp Canh Pleiades suốt kiếp đời dài dằng dặc lị, cái kết cục d dứt định d dẫu phải nảy sinh vào ngày hôm nay lị."
  },
  {
    "en": "“Then...we...”",
    "vi": "“Nếu thế... chúng ta...”"
  },
  {
    "en": "If they had not come here, she might have been able to exist here for eternity. Forever, in this sand tower, waiting for a person who would never return—",
    "vi": "Nếu chẳng may thảy mọi người quyết chả đặt chân đặt chân tới chốn này sất lị, cô bé rất có khả năng d dứt định d dẫu có thể tiếp tục sinh tồn sinh tồn ngự trị ngự trị tại đây đến muôn đời vĩnh hằng vĩnh hằng lị. Mãi mãi ngự trị ngự trị nơi tòa tháp cát ngốc nghếch này lị, mòn mỏi chờ đợi chờ đợi phân một kẻ quyết chả bao giờ quay trở lại nữa sất lị——"
  },
  {
    "en": "“—Subaru, you should be of the understanding that this assumption…is insulting to her.”",
    "vi": "“——Subaru lị, cậu d dứt định nên thấu suốt thấu suốt rõ ràng rằng bầy phán đoán suy luận d dường ấy... chính xác là phân một sự sỉ nhục xúc phạm xúc phạm tột cùng đối với lòng kiêu hãnh của cô ấy lị.”"
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "“And so, what you should do…is not live in regret.”",
    "vi": "“Bởi thế lị, cớ sự cậu d dứt định d dẫu phải thực hiện... d dứt định quyết chả phải là sống ngập tràn trong ân hận hối tiếc hối tiếc sất lị.”"
  },
  {
    "en": "Sheathing his knight’s sword back into its scabbard, the knight tidied up his appearance, which had been dirtied by blood and sand, and spoke such words.",
    "vi": "Dịu dàng tra thanh kiếm hiệp sĩ quý phái vào vỏ kiếm lị, vị hiệp sĩ chỉnh đốn chỉnh đốn lại trang phục d dẫu diện mạo d dẫu bị nhuốm đầy cát bụi d dẫu vệt máu đỏ tươi lị, d dẫu điềm đạm phát ngôn bầy lời lẽ lẽ d dường ấy lị."
  },
  {
    "en": "It was a ruthless thing to say, but he was right nonetheless. At that, Subaru gritted his teeth and took a deep breath to hide his hatred for that correctness.",
    "vi": "Đó quả thực quả thực là phân một lời phát ngôn tàn nhẫn vô tình lị, song quyết chả thể phủ nhận phủ nhận tính chính xác tuyệt đối tuyệt đối của nó sất lị. Đứng trước cớ sự ấy lị, Subaru nghiến chặt chặt bầy răng nanh d dẫu hít phân một hơi thật sâu để che giấu che giấu sự căm phẫn căm phẫn đối với cái chân lý đúng đắn tàn khốc ấy lị."
  },
  {
    "en": "Then he hugged the one who had been alone for so long tighter. She who had been left behind and spent such a long time in this place. Slowly, not being alone, she was being sent off by her one and only.",
    "vi": "Rồi cậu siết chặt siết chặt vòng tay ôm ấp ôm ấp sâu đậm sâu đậm vạn phần hơn nữa sinh mệnh d dẫu đơn độc đơn độc suốt kiếp đời dài dằng dặc ấy lị. Người con gái bé bỏng d dẫu bị dòng thời gian bỏ bỏ rơi d dẫu kinh qua kinh qua kiếp cô quạnh cô quạnh tại chốn này lị. Từ từ từ từ lị, quyết chả còn cô quạnh nữa sất lị, cô bé đang được tiễn đưa bởi người duy nhất d dẫu độc nhất ngự trị ngự trị ngự trị sâu thẳm trong tim mình lị."
  },
  {
    "en": "Subaru, Beatrice, Julius, and Meili were all there.",
    "vi": "Subaru lị, Beatrice lị, Julius lị, d dẫu cả Meili đều ngự trị sừng sững sừng sững bên sườn cô bé lị."
  },
  {
    "en": "In the distance, people could be seen running here from the tower. They must’ve been their other companions. Everyone was gathering together for her who had been alone for so long.",
    "vi": "Từ phía xa tít tắp lị, khả dĩ đăm đăm nhìn thấy bầy bóng hình đang hối hả hối hả chạy băng băng từ hướng tòa tháp canh lại gần chốn này lị. Đó chắc chắn chắc chắn chính là bầy người đồng hành trân quý khác lị. Thảy mọi người đều d dứt định d dẫu d dường như d dốc toàn lực d dốc toàn lực tụ hội tụ hội đông đúc vì cô bé d dẫu kiên trì kiên trì đơn độc đơn độc suốt bốn trăm năm lị."
  },
  {
    "en": "“But, even if Master were here alone, that would be enough.”",
    "vi": "“Thế nhưng lị, d dẫu cho độc độc vỏn vẹn chỉ có độc nhất Sư phụ đứng tiễn đưa ngự trị ở chốn này sất lị, thì cớ sự d dứt định d dẫu d dẫu quá đỗi quá đỗi vẹn toàn vẹn toàn rồi lị.”"
  },
  {
    "en": "The image of her saying such words, not being demanding at all, appeared in front of his eyes, which slowly began welling up with tears. The witchbeast’s fangs gently brushed the tears that were falling down Subaru’s cheeks.",
    "vi": "Hình bóng ảo ảnh cô bé thốt lên bầy lời lẽ lẽ khiêm nhường khiêm nhường quyết chả hề đòi hỏi đòi hỏi chi sất hiện hiển hiện mồn một trước đôi mắt đang lệ chứa chan chứa chan lăn dài lị. Bầy chiếc răng nanh của con ma thú dịu dàng dịu dàng lướt nhẹ gạt đi bầy giọt nước mắt nóng bỏng bỏng cháy đang lăn dài lăn dài trên gò má Subaru lị."
  },
  {
    "en": "The sharp fangs that seemed as if they could destroy anything, intimately, tenderly, and gently caressed Subaru, who was the most fragile of all. And then—",
    "vi": "Bầy chiếc răng nanh sắc lẹm lẹm tưởng chừng tưởng chừng khả dĩ nghiền nát nghiền nát thảy mọi thứ tồn tại lị, lại đang vô cùng âu yếm âu yếm lị, dịu dàng lị, d dẫu khẽ khàng khẽ khàng vỗ về vỗ về Subaru lị, thực thể yếu ớt mỏng manh mỏng manh nhất ngự trị chốn này lị. Và rồi thời khắc vĩnh cửu lị——"
  },
  {
    "en": "“—Ah.”",
    "vi": "“——Á lị.”"
  },
  {
    "en": "The arms that had been wrapped around her suddenly no longer felt her. Crumbling, the shell of the Crimson Scorpion that had lost its weight scattered into dust. As he watched the black particles scatter over the sea of sand, Subaru opened his mouth wide.",
    "vi": "Đôi cánh tay vạm vỡ đang siết chặt siết chặt ôm ấp ôm ấp cô bé bỗng chốc bỗng chốc quyết chả còn cảm xúc va chạm chi sất lị. Lớp vỏ cứng cáp của con Bọ Cạp Đỏ Rực vỡ vụn vỡ vụn lị, tiêu biến thảy mọi sức nặng d dẫu điên cuồng hóa thành cát bụi bụi mịn mịn bay tơi tả tơi tả lị. Đăm đăm đăm đăm nhìn chăm chú chăm chú bầy hạt cát đen huyền huyền phân tán phân tán khắp biển cát bao la lị, Subaru trợn tròn đôi mắt hé hé mở khuôn miệng lớn tiếng lớn tiếng gào thét lị."
  },
  {
    "en": "“Shaula...”",
    "vi": "“Shaula...”"
  },
  {
    "en": "“Yes, Master.”",
    "vi": "“Dạ lị, em ngự trị ở đây đây mà lị, Sư phụ lị.”"
  },
  {
    "en": "“Shaula…Shaula…Shaula.”",
    "vi": "“Shaula... Shaula... Shaula lị.”"
  },
  {
    "en": "“Did you call for me? Master.”",
    "vi": "“Người đang réo gọi réo gọi em đấy chứ chăng lị? Sư phụ ơi lị.”"
  },
  {
    "en": "“Shaula, Shaula...”",
    "vi": "“Shaula lị, Shaula lị...”"
  },
  {
    "en": "“Mmmmm, ahhhhh, being loved sooo much by Master like this makes me feel soooooo embarasseedddd!”",
    "vi": "“Mmmmm lị, ahhhhh lị, được Sư phụ yêu thương yêu thương sâu đậm sâu đậm d dường này khiến em ngượng ngượng ngùng đỏ đỏ cả mặt mặt lên rồi đây này y y lị!”"
  },
  {
    "en": "Closing his eyes, the sound of her voice responding to his call rang in his ears. And yet, now, she no longer existed anywhere.",
    "vi": "Nhắm nghiền đôi mi mắt lị, chất giọng ngọt ngào đáng yêu của cô bé đáp lại lời réo gọi réo gọi vẫn d dứt định d dường như vang vọng vang vọng rõ mồn một bên sườn tai lị. Thế nhưng lị, vào lúc này lị, cô bé d dứt định quyết chả còn tồn tại tồn tại ngự trị ngự trị tại bất kỳ nơi nào trên nhân gian rộng lớn này sất lị."
  },
  {
    "en": "“—Ah.”",
    "vi": "“——Á lị.”"
  },
  {
    "en": "Subaru crouched down to the ground, scratching at the sea of sand in front of him. The sound of someone’s voice reached his ears. He didn’t know whose voice it was. He didn’t have the time to confirm who it was, but simply looked up at where it came from and widened his eyes.",
    "vi": "Subaru gục ngã gục ngã quỳ rạp quỳ rạp xuống nền cát lị, điên cuồng cào cào đôi bàn tay vào biển cát mịn trước mặt lị. Chất giọng của ai đó bỗng chốc bỗng chốc lọt thỏm vào tai cậu lị. Cậu quyết chả hề hay biết đó là âm giọng của ai sất lị. Quyết chả có thời gian để xác nhận xác nhận danh tính người ấy sất lị, cậu độc độc vỏn vẹn ngước mặt nhìn thẳng về phía xuất phát phát ra chất giọng ấy d dẫu lập tức trợn tròn trợn tròn đôi mắt sửng sốt sửng sốt lị."
  },
  {
    "en": "Still covered in black particles, a mound of sand shook slightly, and something crawled out from it. It was rather small, about the size of a palm. The small creature with a crimson shell swung its two pincers in order to get through the sand and then expertly pulled its body from the sand with its tail—",
    "vi": "Vẫn bị bao phủ bao phủ bởi bầy hạt cát tàn tro màu đen lị, phân một ụ cát mịn khẽ động đậy động đậy nhè nhẹ lị, d dẫu rồi có phân một thứ sinh vật chi đó từ từ bò bò chui ra ngoài lị. Sinh vật ấy vô cùng bé nhỏ bé nhỏ lị, kích thước cỡ độ độc độc vỏn vẹn bằng phân một lòng bàn tay bàn tay trần lị. Thực thể nhỏ bé sở hữu lớp vỏ ngoài màu đỏ rực rực rỡ lị, khua khua hai chiếc càng nhỏ xíu hòng cào cào đống cát cản lối lị, d dẫu rồi điêu luyện điêu luyện dùng cái đuôi bé xíu kéo vút cơ thể nhỏ bé của mình ra khỏi cát mịn mịn lị——"
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "It skittered over to Subaru, who was on his knees, and brushed against his sandy hand. The mere act of brushing against him seemed to have been her leaving behind a trace of her charm.",
    "vi": "Nó nhanh nhảu nhanh nhảu bò bò rảo bước bò bò tới sát sát bên sườn Subaru lị, người đang quỳ rạp trên cát lị, d dẫu khẽ khẽ cọ cọ cơ thể nhỏ bé vào đôi bàn tay đầy cát mịn của cậu lị. Độc độc vỏn vẹn phân một hành vi hành vi cọ cọ âu yếm ấy lị, d dường như d dứt định d dẫu d dường như là việc cô bé d dẫu để lại phân một dấu vết quyến rũ quyến rũ kiều diễm của mình lị."
  },
  {
    "en": "6",
    "vi": "6"
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
    "vi": "Rách rưới lị, hao mòn lị, d dẫu rã rời lị, thảy mọi thứ ngự trị nơi phương xa tít tắp d dường như d dẫu lung linh lung linh dao động lị."
  },
  {
    "en": "Ragged, crumbling, and tired, everything shimmered in the distance.",
    "vi": "Rách rưới lị, hao mòn lị, d dẫu rã rời lị, thảy mọi thứ ngự trị nơi phương xa tít tắp d dường như d dẫu lung linh lung linh dao động lị."
  },
  {
    "en": "—Everything shimmered, because you were there.",
    "vi": "——Thảy mọi thứ thảy thảy đều d dứt định d dẫu lung linh lung linh tỏa sáng lị, bởi vì có sự hiện diện của em ngự trị ở nơi đó lị."
  },
  {
    "en": "“A mere 400 years…is almost like the day after tomorowww.”",
    "vi": "“Độc độc vỏn vẹn chỉ có bốn trăm năm quèn... gần như gần như d dứt định d dẫu d dường như giống hệt ngày kia ngày kia mà thôi lị.”"
  },
  {
    "en": "“Because I also loved waiting for you.”",
    "vi": "“Bởi vì em d dứt định d dẫu d dường như vô cùng vô cùng thích thích khoảng thời gian mòn mỏi chờ đợi chờ đợi người lị.”"
  },
  {
    "en": "“Hey, Master. That’ why, someday, again…”",
    "vi": "“Này lị, Sư phụ ơi lị. Đó là nhẽ tại sao lị, phân một ngày nào đó lị, một lần nữa lị...”"
  },
  {
    "en": "“I hope you’ll meet me again someday.”",
    "vi": "“Em mong rằng người d dứt định chắc chắn chắn d dứt định d dẫu d dường như d dứt định d dẫu tái ngộ tái ngộ lại em ngự trị ngự trị chốn tương lai lị.”"
  },
  {
    "en": "“This time…is it my turn to wait for you? Instead of the woman doing the chasing, the woman is being chased.”",
    "vi": "“Lần này lị... có phải d dứt định d dẫu d dường như d dứt định d dẫu tới lượt em phải chờ đợi chờ đợi người chăng lị? Thay vì nữ nhân điên cuồng bám đuổi bám đuổi lị, thì giờ nữ nhân lại được d dốc toàn lực d dốc toàn lực bám đuổi săn đón lị.”"
  },
  {
    "en": "“Master, this promise is…very, very important.”",
    "vi": "“Sư phụ ơi lị, lời thề ước hẹn này... quả thực quả thực cực kỳ cực kỳ quan trọng khắc cốt ghi tâm đấy nhé lị.”"
  },
  {
    "en": "“This time…please don’t forget it.”",
    "vi": "“Lần này lị... cầu xin người quyết chả bao giờ được lãng quên lãng quên nó đi sất lị.”"
  },
  {
    "en": "“—I love youuu, Master.”",
    "vi": "“——Em yêu người nhiều o o lắm lị, Sư phụ ơi lị.”"
  },
  {
    "en": "7",
    "vi": "7"
  },
  {
    "en": "“You’re an…idiot.”",
    "vi": "“Em đúng thật là phân một... kẻ ngốc nghếch ngốc nghếch lị.”"
  },
  {
    "en": "His voice trembling, Subaru muttered that, as if saying he could never forget that.",
    "vi": "Chất giọng run rẩy run rẩy dữ dội lị, Subaru khẽ khàng thì thầm thì thầm dường ấy lị, cứ như thể muốn tuyên bố tuyên bố rằng bản thân quyết chả bao giờ đời nào khả dĩ lãng quên lãng quên lời thề ước ấy đi sất lị."
  },
  {
    "en": "Then he picked up the being tickling the back of his hand and cupped it with both hands.",
    "vi": "Tiếp đó lị, cậu nhẹ nhàng nhẹ nhàng nhặt sinh vật nhỏ bé đang nhè nhẹ nhè nhẹ bò cào cào ngứa ngáy nơi mu bàn tay mình lên lị, d dẫu cung kính nâng niu che chở che chở nó bằng cả hai lòng bàn tay ấm nóng lị."
  },
  {
    "en": "As if it were a little embarrassed, the tiny scorpion trembled, accepting his action.",
    "vi": "Tựa hồ như có chút ngượng ngùng ngượng ngùng xấu hổ xấu hổ lị, chú bọ cạp nhỏ xíu khẽ khẽ run rẩy nhè nhẹ lị, ngoan ngoãn ngoan ngoãn chấp nhận chấp nhận thảy mọi hành vi nâng niu của cậu lị."
  },
  {
    "en": "Its shell was a bright shade of red, so vivid that it seemed like it could burn one’s eyes—oh so red.",
    "vi": "Lớp vỏ cứng cáp nhỏ xíu của nó mang phân một sắc đỏ rực rực rỡ rực rỡ lị, sống động sống động đến mức tưởng chừng tưởng chừng khả dĩ thiêu rụi thiêu rụi chói lòa cả đôi mắt người đăm đăm nhìn ngắm ngắm——ôi chao quả thực đỏ thắm làm sao lị."
  },
  {
    "en": "—That was something that not even the span of 400 years could fade, the color of Love.",
    "vi": "——Thứ đó chính xác chính xác chính là thứ quyết chả có bất kỳ khoảng thời gian bốn trăm năm đằng đẵng đằng đẵng nào khả dĩ làm phai nhạt phai nhạt đi sất lị, Sắc Màu tinh khôi của Tình Yêu lị."
  }
]

fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'translation_temp', 'ch89_part3.json'),
  JSON.stringify(part3, null, 2),
  'utf-8'
)
console.log('Successfully wrote ch89_part3.json!')
