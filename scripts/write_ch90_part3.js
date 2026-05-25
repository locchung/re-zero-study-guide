import fs from 'fs'
import path from 'path'

const part3 = [
  {
    "en": "“If I get the blood from Volcanica...”",
    "vi": "“Nếu mình d dứt định khả dĩ lấy lấy được huyết long của rồng từ Volcanica...”"
  },
  {
    "en": "The reason why Emilia was participating in the royal selection was to obtain the Dragon’s Blood kept in the Kingdom of Lugunica and use it to thaw the frozen soil of the Great Elior Forest.",
    "vi": "Nguyên cớ cốt lõi khiến Emilia d dũng mãnh d dấn thân vào cuộc Tuyển Chọn Vương Quyền chính xác chính là đoạt lấy huyết long của rồng được cẩn mật cẩn mật bảo quản ngự trị ngự trị trong vương cung của Vương Quốc Lugunica lị, d dẫu áp dụng nó để làm tan tan chảy lớp băng vĩnh cửu bao phủ vùng đất hoang vu của Đại Ngàn Elior Forest lị."
  },
  {
    "en": "Emilia was determined to participle in the royal selection in order to liberate her people, who had been frozen in that forest because of her power going wild.",
    "vi": "Emilia d dẫu hạ quyết tâm sắt son d dấn thân vào cuộc Tuyển Chọn Vương Quyền lị, hòng giải cứu giải cứu giải thoát cho bầy người đồng bào của mình lị, bầy người d dẫu d dường như d dứt định d dẫu bị đông cứng đông cứng ngự trị ngự trị trong khu rừng rậm rạp ấy do luồng uy lực điên cuồng mất kiểm soát kiểm soát của chính bản thân cô từ thuở trước lị."
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "The realization that her main purpose in participating in it had a possibility of being achieved suddenly hit her. It made Emilia tense up and hold her breath.",
    "vi": "Sự ngộ nhận ngộ nhận rằng mục tiêu cốt lõi cốt lõi của cô khi d dấn thân vào cuộc Tuyển Chọn Vương Quyền d dứt định d dẫu có cơ hội hoàn thành vẹn toàn bỗng chốc bỗng chốc xộc thẳng vào tâm trí cô lị. Điều ấy khiến toàn thân Emilia khẽ cứng đờ cứng đờ d dẫu nín nín thở chờ đợi lị."
  },
  {
    "en": "If Volcanica’s blood could be obtained here, then Emilia would no longer have a reason to ascend the throne—",
    "vi": "Nếu chẳng may huyết long của Volcanica khả dĩ đoạt đoạt lấy ngay tại chốn này lị, thế thì Emilia d dứt định quyết chả còn lấy phân một lý do chi để kiêu hãnh leo lên ngôi báu hoàng đế nữa sất——"
  },
  {
    "en": "“I...”",
    "vi": "“Tớ...”"
  },
  {
    "en": "“...Emilia, I’m sorry to have confused you, I suppose. The Blood that you are thinking about is not the same blood of this Volcanica, in fact. That’s why you won’t be able to achieve that, I suppose.”",
    "vi": "“...Emilia lị, Betty vô cùng xin lỗi vì d dứt định d dẫu làm cậu bị bối rối lẫn lộn đấy chứ chăng lị, Betty bảo mà. Huyết long rồng rồng mà cậu đang suy tính ngợi nghĩ ngự trị trong đầu quyết chả phải là thứ huyết long chảy ngự trị ngự trị ngự trị ngự trị ngự trị ngự trị trong huyết quản của Volcanica đứng sừng sững này đâu sất lị, Betty bảo mà. Đó là nhẽ tại sao cậu d dứt định quyết chả khả dĩ hoàn thành hoàn thành mục tiêu ấy sất lị, Betty bảo mà.”"
  },
  {
    "en": "Said Beatrice to Emilia, who was about to lose her reason for participating in the royal selection. Emilia then looked at her with rounded eyes and said “Huh?.”",
    "vi": "Beatrice dịu dàng cất tiếng phát ngôn dường ấy với Emilia lị, người con gái sắp sửa đánh mất đi lẽ sống lẽ sống d dấn thân d dấn thân vào cuộc Tuyển Chọn Vương Quyền lị. Emilia lập tức trợn tròn đôi mắt tròn xoe đăm đăm nhìn cô bé d dẫu thốt lên: “Hả lị?.”"
  },
  {
    "en": "“What do you mean I won’t be able to achieve that? I’ve…studied reaaallllly hard, you know. In order to melt the ice in the forest, I need the Dragon’s Blood in the royal castle. So...”",
    "vi": "“Ý em tuyên bố tuyên bố rằng tớ quyết chả thể nào hoàn thành hoàn thành được cớ sự ấy sất là sao hả lị? Tớ d dẫu... nỗ lực học tập học tập chăm chỉ vô o o cùng đấy nhé lị. Để làm tan tan rã lớp băng tuyết ngự trị ngự trị ngự trị ngự trị nơi rừng rậm rậm rạp lị, tớ vô cùng cần kíp huyết long rồng rồng lưu giữ trong vương cung hoàng gia vương cung vương cung lị. Thế nên...”"
  },
  {
    "en": "“There’s nothing wrong with that idea, I suppose. However, as I stated earlier, the Blood in Lugunica’s royal castle and the blood of this Volcanica are, strictly speaking, not the same... The Dragon’s Blood in the royal castle is the blood that spilled from the last beat of a dying dragon’s heart, I suppose.”",
    "vi": "“Quyết chả hề có chi sai lệch sai lệch ngự trị ngự trị trong suy tính suy tính ấy sất lị, Betty bảo mà. D dẫu thế lị, hệt như bầy lời lẽ Betty tuyên bố tuyên bố ban nãy lị, Huyết rồng rồng ngự trị ngự trị nơi vương cung của Lugunica d dẫu huyết long của Volcanica đứng sừng sững sừng sững chốn này lị, nếu xét phân chi tiết kỹ lưỡng lị, thì quyết chả phải cùng phân một thứ sất lị... Huyết long của rồng lưu giữ trong vương cung chính xác là thứ huyết long phun ra từ nhịp đập đập cuối cùng cuối cùng của phân một trái tim rồng đang hấp hối hấp hối sắp chết sất lị, Betty bảo mà.”"
  },
  {
    "en": "“The last drop of blood from the…heart?”",
    "vi": "“Giọt huyết long cuối cùng phun ra từ... trái tim sao lị?”"
  },
  {
    "en": "Hearing things she had never heard before, Emilia frowned, scrunching up her finely-shaped eyebrows. Beatrice gently nodded, and then Julius raised his hand and said, “May I ask a question?.”",
    "vi": "Lắng tai nghe thấu bầy sự tình bản thân chưa từng được nghe thấy từ thuở trước lị, Emilia khẽ nhíu đôi chân mày thanh tú thanh tú quý phái của mình lị. Beatrice khẽ gật đầu gật đầu lị, d dẫu rồi Julius khẽ giơ bàn tay ngọc ngà d dẫu phát ngôn: “Tôi khả dĩ xin phép đặt câu hỏi chất vấn quyết chả sất lị?.”"
  },
  {
    "en": "Julius, who seemed to have just barely recovered from the shock of hearing about the existence or nonexistence of the Divine Dragon’s spirit, looked up at the Divine Dragon, whose responses remained unchanged—",
    "vi": "Julius lị, người d dường như d dứt định độc độc vỏn vẹn chỉ vừa mới gượng gượng dậy khôi phục khỏi cơn sửng sốt chấn động chấn động khi nghe nghe tin về sự tồn tại tồn tại hay quyết chả sất của linh hồn đấng Thần Long lị, hướng đăm đăm nhìn ngước lên phía Thần Long vĩ đại lị, thực thể d dẫu sở hữu bầy câu thoại thoại quyết chả hề đổi thay chút nào sất——"
  },
  {
    "en": "“Excuse me, Lady Beatrice, but what do you mean by what you just said? I am also a knight belonging to the royal guard of the Kingdom of Lugunica. My ears pick up many things regarding the Kingdom. However, the thing you just said...”",
    "vi": "“Xin hãy rộng lượng thứ lỗi cho tôi lị, Tiểu thư Beatrice lị, thế nhưng bầy lời cô vừa phát ngôn mang ẩn ý chi thế chăng lị? Tôi d dứt định d dẫu d dường như d dứt định d dẫu là phân một kỵ sĩ cận vệ trực thuộc Đội Cận Vệ Hoàng Gia của Vương Quốc Lugunica lị. Đôi vành tai tôi d dứt định thu nhận thu nhận vô số giai thoại giai thoại liên quan tới vương quốc vương quốc lị. Thế nhưng cớ sự cô vừa tuyên bố tuyên bố...”"
  },
  {
    "en": "“—As its heart beat one last time, the blood from its heart was poured into a container. That blood, as the true blood of a dragon, was entrusted to the royal castle in order to serve as proof of the covenant between man and dragon.”",
    "vi": "“——Đúng vào tích tắc nhịp tim đập đập cuối cùng cuối cùng của nó lị, dòng huyết long phun ra từ trái tim d dứt định d dẫu được d dồn dập rót thẳng vào phân một chiếc bình bình chứa lị. Thứ huyết long ấy lị, ngự dưới danh nghĩa danh nghĩa huyết long chân chính chân chính của rồng thần lị, d dứt định d dẫu được giao phó giao phó ký thác ký thác cho vương cung hoàng gia hòng phụng sự phụng sự làm tín vật minh chứng minh chứng cho khế ước thiêng liêng thiêng liêng giữa nhân loại nhân loại d dẫu long tộc lị.”"
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "“It’s no surprise that you do not know this, in fact. The words I said just now came from a book that had been sealed within the Forbidden Library... There is no longer any trace of its existence in the outside world, for it was an account left by the Witch of Greed, Echidna, I suppose.”",
    "vi": "“Quyết chả có chi kinh ngạc kinh ngạc khi cậu quyết chả hề hay biết cớ sự ấy sất lị, Betty bảo mà. Bầy lời Betty vừa thổ lộ thổ lộ ra chính xác chính là trích ra từ phân một cuốn sách cổ d dẫu bị phong ấn phong ấn ngự trị ngự trị ngự trị ngự trị ngự trị ngự trị trong Thư Viện Cấm cấm kỵ... Quyết chả còn bất kỳ dấu vết sự tồn tại nào của nó ngự trị ngự trị chốn nhân gian ngoài kia sất lị, bởi nhẽ nhẽ nhẽ đó chính là bầy dòng ghi chép ghi chép để lại bởi Phù Thủy Tham Lam lị, Echidna lị, Betty bảo mà.”"
  },
  {
    "en": "“After hearing Beatrice’s response, Julius gasped, his eyes widening. As a knight of the Kingdom, he didn’t even know about that, but if it came from Beatrice, he couldn’t consider it a lie. And if it was the truth—",
    "vi": "Lắng nghe lắng nghe câu trả lời đanh thép của Beatrice lị, Julius khẽ khẽ khịt khịt mũi d dẫu trợn tròn đôi mắt kinh ngạc lị. Dưới danh nghĩa phân một kỵ sĩ kỵ sĩ trung kiên của Vương Quốc lị, cậu ta thậm chí thậm chí quyết chả hề biết hay biết cớ sự d dường ấy sất lị, thế nhưng d dẫu cho bầy lời ấy phát ra từ miệng Beatrice lị, cậu quyết chả thể nào nghĩ nghĩ đó là lời nói dối sất lị. Và nếu cớ sự thật là chân lý chân lý——"
  },
  {
    "en": "“Then, which dragon’s blood is the Dragon’s Blood being kept in the royal capital, Lugunica? The last beating of the heart would mean...”",
    "vi": "“Thế thì lị, thứ huyết long rồng rồng hiện đang được cẩn mật cẩn mật bảo quản ngự trị ngự trị ngự trị ngự trị nơi vương đô Lugunica thực chất thực chất rốt cuộc rốt cuộc là huyết long của con rồng nào sất lị? Nhịp đập đập cuối cùng của trái tim d dứt định đồng nghĩa đồng nghĩa với việc...”"
  },
  {
    "en": "“It’d be strange if the dragon who left the blood didn’t die... In that case, it wouldn’t make sense for it ta have come from the empty-headed Mr. Divine Dragon.”",
    "vi": "“Quả thực quả thực vô cùng vô cùng kỳ quái kỳ quái nếu con rồng hiến dâng hiến dâng dòng huyết long ấy quyết chả bỏ mạng sất lị... Nếu cớ sự thật là d dường ấy lị, thì quyết chả hợp lý hợp lý chút nào sất khi tuyên bố tuyên bố dòng huyết ấy chảy ra từ ngài Thần Long đầu óc rỗng tuếch trống rỗng sừng sững sừng sững ngự trị ngự trị ở chốn này lị.”"
  },
  {
    "en": "“Julius and Anastasia voiced their doubts, but they were also justified in doing so. If the Dragon’s Blood came from the last beat of its heart, then it would not belong to Volcanica. Also, if it was still the blood of a great power—",
    "vi": "Julius d dẫu Anastasia d dứt định d dẫu d dường như d dứt định d dẫu cất tiếng chất vấn chất vấn bầy nghi ngại của mình lị, thế nhưng bầy hành động ấy hoàn toàn hoàn toàn hợp lý hợp lý vạn phần lị. Nếu Huyết rồng rồng thiêng liêng chảy ra từ nhịp đập đập cuối cùng của trái tim rồng lị, thế thì nó d dứt định quyết chả thể nào thuộc về Volcanica sất lị. Thêm nữa lị, d dẫu cho nó vẫn mang luồng uy lực uy lực vô song vô song d dường ấy sất lị——"
  },
  {
    "en": "“Unfortunately, it wasn’t mentioned in the book, in fact.”",
    "vi": "“Đáng tiếc nuối tột cùng là lị, cớ sự quyết chả hề được đề cập đề cập chi sất ngự trị ngự trị trong sách cổ sất lị, Betty bảo mà.”"
  },
  {
    "en": "“...That person is always doing things half-heartedly. From what I can tell, that Witch of Greed is the biggest reason why Natsuki is so cold to me, right? Because of that, he doesn’t have a good impression of me, and now that impression is only getting amplified.”",
    "vi": "“...Cái thực thể ấy d dứt định d dẫu luôn luôn hành xử hành xử phân một nửa chừng nửa vời hệt như d dường ấy lị. Dựa vào bầy sự tình tớ thấu suốt lị, vị Phù Thủy Tham Lam ấy chính là nguyên cớ cốt lõi cốt lõi khiến Natsuki lạnh nhạt lạnh nhạt thờ ơ đối xử với tớ d dường ấy quyết chả sất lị? Độc độc vỏn vẹn vì cớ đó lị, cậu ta d dứt định quyết chả hề có phân một ấn tượng tốt lành nào về tớ sất lị, d dẫu giờ đây cái ấn tượng tồi tệ ấy lại càng thêm phần khuếch đại khuếch đại lên vạn phần lị.”"
  },
  {
    "en": "“Don’t speak ill of Mother, I suppose. Mind your words, in fact.”",
    "vi": "“Quyết chả được phép buông lời nói xấu nói xấu Mẹ của Betty sất lị! Hãy mau cẩn thận cẩn thận bầy lời lẽ lẽ phát ngôn đi nhé lị, Betty bảo mà.”"
  },
  {
    "en": "“Don’t fight like that, you two! But, errmmm, mmm...”",
    "vi": "“Quyết chả được phép tranh cãi tranh cãi kiểu d dường ấy sất hai người ơi lị! Thế nhưng mà lị, ừm lị, mmm...”"
  },
  {
    "en": "“After scolding the two of them who were getting heated with each other because of having a difference of opinion regarding Echidna, Emilia silently lowered her head.",
    "vi": "Sau khi cất tiếng trách phạt trách phạt hai người họ lị, bầy sinh mệnh đang bừng bừng bừng bừng đấu khẩu đấu khẩu dữ dội do có sự bất đồng bất đồng ý kiến sâu sắc sâu sắc liên quan tới Echidna lị, Emilia lặng lẽ lặng lẽ cúi gầm mái đầu ngọc ngà xuống lị."
  },
  {
    "en": "When Emilia first heard that Volcanica’s blood was different from the Dragon’s Blood in the royal castle, she was surprised. And yet, at the same time, she was relieved.",
    "vi": "Khi Emilia lần đầu tiên đầu tiên lắng tai nghe cớ sự huyết long của Volcanica hoàn toàn khác biệt khác biệt biệt lập đối với Huyết rồng rồng ngự trị vương cung vương cung vương cung hoàng gia lị, cô d dứt định d dẫu vô o o cùng sửng sốt sửng sốt lị. D dẫu thế lị, cùng phân một thời khắc ấy lị, cô khẽ khẽ thở phào nhẹ lòng lị."
  },
  {
    "en": "“...Such a thing is…sooooo strange.”",
    "vi": "“...Mọi sự quả thực quả thực... vô o o o o cùng kỳ quái kỳ quái sất lị.”"
  },
  {
    "en": "Emilia’s main goal was to help everyone in the forest. This goal remained unchanged even today. Therefore, if she were able to obtain Volcanica’s blood here and use it as a solution, it would be possible to liberate everyone in the Great Elior Forest using it. However, while she wanted to do so, she was hesitant.",
    "vi": "Mục tiêu cốt lõi cốt lõi cao cả nhất của Emilia luôn luôn là cứu giúp cứu giúp thảy mọi người đồng bào ngự trị ngự trị trong rừng rậm rậm rạp lị. Cái mục tiêu sắt son ấy d dứt định quyết chả hề đổi thay đổi thay chút nào sất cho tới tận ngày hôm nay lị. Bởi vậy cho nên lị, nếu cô d dứt định khả dĩ lấy lấy được huyết long của Volcanica ngay tại chốn này d dẫu áp dụng nó như phân một phương pháp giải thoát giải thoát lị, cô hoàn toàn khả dĩ giải phóng giải phóng cho thảy thảy thảy mọi người ngự trị Đại Ngàn Elior Forest vẹn toàn lị. Thế nhưng lị, d dẫu cho cô vô cùng khát khao muốn hành động như d dường ấy lị, cô d dứt định d dẫu d dường như khẽ khẽ ngập ngừng ngập ngừng do dự lị."
  },
  {
    "en": "—If she used another means to melt the permafrost plaguing the Great Elior Forest, would she step off the stage and stop participating in the royal selection?",
    "vi": "——Nếu chẳng may cô áp dụng phân một phương pháp giải pháp khác để làm tan chảy lớp băng vĩnh cửu bao phủ Đại Ngàn Elior Forest lị, liệu cô có quyết định cất bước cất bước bước xuống bước xuống khỏi vũ đài Tuyển Chọn Vương Quyền d dẫu tuyên bố từ bỏ từ bỏ cuộc đua vương quyền quyền lực chăng lị?"
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "“...Emilia’s concerns aside, if Beatrice’s words are true, can anythin’ be done with Mr. Volcanica’s blood? There’s a high possibility of it bein’ a disappointment, right?”",
    "vi": "“...Tạm thời bỏ qua bỏ qua bầy mối lo ngại lo ngại của Emilia đi nhé lị, nếu bầy lời lẽ thoại của Beatrice chính xác chính là sự thật lị, thì liệu có khả dĩ làm được cái trò gì từ huyết long của ngài Volcanica quyết chả sất lị? Khả năng khả dĩ vĩ đại là d dứt định d dẫu d dường như d dứt định d dẫu d dâng d dâng lên phân một nỗi thất vọng thất vọng tràn trề tràn trề đúng quyết chả sất lị?”"
  },
  {
    "en": "“Whether he’s become useless, senile, or lost his spirit, he is still a Divine Dragon, I suppose. So his blood must be quite powerful as well. It’s just that...”",
    "vi": "“D dẫu cho ngài ấy có d dường như trở nên phế vật phế vật lị, lãng trí lẫn lộn lị, hay đánh mất linh hồn bản ngã đi chăng nữa sất lị, ngài ấy d dứt định vẫn chính xác là đấng Thần Long vĩ đại vĩ đại lị, Betty bảo mà. Thế nên huyết long của ngài ấy d dứt định d dẫu d dường như d dứt định d dẫu d dẫu ngập tràn uy lực phi phàm lị. Độc độc vỏn vẹn chỉ có điều là...”"
  },
  {
    "en": "“It wouldn’t be enough to melt everyone’s ice, right?”",
    "vi": "“Nó d dứt định quyết chả khả dĩ đủ sức làm tan chảy lớp băng bao phủ thảy thảy mọi người đồng bào đúng quyết chả hả lị?”"
  },
  {
    "en": "In response to Emilia’s question, Beatrice gave her an apologetic look and nodded her head. Gazing at the appearance of Beatrice who looked more sad than herself, Emilia relaxed her lips, looked up, and said, “It’s okay.”",
    "vi": "Phản hồi lại câu hỏi khẩn thiết khẩn thiết của Emilia lị, Beatrice dành cho cô bé phân một ánh đăm đăm đăm nhìn ngập tràn hối lỗi hối lỗi d dẫu nhè nhẹ gật gật mái đầu lị. Đăm đăm nhìn nhận nét mặt u sầu u sầu còn vĩ đại vĩ đại hơn cả bản thân mình của Beatrice lị, Emilia khẽ mỉm cười mỉm cười lị, ngẩng cao mái đầu ngọc ngà d dẫu dịu dàng tuyên bố: “Quyết chả sao sất đâu mà lị.”"
  },
  {
    "en": "“That fact is pretty disappointing, but since it was something that happened so suddenly, I was soooo surprised that I didn’t realize it... So, it’s not a big deal.”",
    "vi": "“Sự thật cớ sự ấy quả thực quả thực đem lại chút thất vọng thất vọng lị, thế nhưng vì mọi cớ sự ập tới quá đỗi đột ngột đột ngột lị, tớ d dứt định d dẫu o o cùng sửng sốt sửng sốt chấn động đến nỗi quyết chả kịp nhận ra cớ sự sất lị... Thế nên lị, cớ sự quyết chả phải vấn đề rắc rối chi quá to tát sất đâu lị.”"
  },
  {
    "en": "“I’m sorry, I suppose. I should have told you about it, in fact... I didn’t expect the Divine Dragon to be in a place like this, I suppose. It’s truly regrettable.”",
    "vi": "“Betty vô cùng xin lỗi lị, Betty bảo mà. Betty đáng lẽ đáng lẽ bắt buộc phải thổ lộ thổ lộ tường tận cho cậu biết cớ sự sất lị, Betty bảo mà... Betty thực sự thực sự quyết chả cách chi ngờ nổi ngài Thần Long vĩ đại lại ngự trị ngự trị trú ẩn nơi chốn kỳ dị d dường này sất lị, Betty bảo mà. Thực sự thực sự vô cùng đáng tiếc tiếc nuối tột cùng lị.”"
  },
  {
    "en": "“Mmm, that’s right, he’s such a troublemaker.”",
    "vi": "“Ừm lị, đúng hệt như d dường ấy sất lị, ngài ấy quả thực quả thực là phân một thực thể gieo rắc rắc rối phiền hà phiền hà mà lị.”"
  },
  {
    "en": "Beatrice’s face sunk in a way that didn’t suit her, and Emilia puffed up her chest.",
    "vi": "Gương mặt đáng yêu đáng yêu của Beatrice sụ sụ xuống phân một cách quyết chả hề phù hợp phù hợp với diện mạo của mình lị, d dẫu Emilia khẽ ưỡn bộ ngực kiêu hãnh của mình lên lị."
  },
  {
    "en": "To be honest, she really did feel disappointed. However, what she had said to Beatrice was the truth. Rather, it felt as if she had been told she could not take shortcuts or cheat.",
    "vi": "Thành thực thành thực mà giãi bày giãi bày lị, cô thực sự thực sự nếm trải phân một nỗi thất vọng mơ hồ lị. D dẫu thế lị, bầy lời cô vừa thổ lộ thổ lộ với Beatrice chính xác chính là sự thật tâm can lị. Thay vào đó lị, cô cảm thấy cảm giác cứ như thể bản thân d dẫu được răn dạy răn dạy rằng bản thân quyết chả được phép đi đường tắt đi đường tắt hay giở trò gian lận gian lận cẩu thả sất lị."
  },
  {
    "en": "“Then, let’s get back to the question at hand. If the blood of the Divine Dragon is used, there is a possibility of restoring those in Priestella who have had their appearances changed due to Lust’s Authority. As Beatrice stated, even if he does not have a spirit, the blood itself should still contain great power.”",
    "vi": "“Nếu thế lị, thảy mọi người chúng ta hãy quay trở lại câu hỏi cốt lõi ngự trị ngự trị ngự trị ngự trị ngự trị ngự trị ngự trị trong tay đi nhé lị. Nếu chúng ta khả dĩ sử dụng huyết long của Thần Long vĩ đại lị, thì d dứt định có khả năng phục hồi phục hồi lại diện mạo ban sơ cho bầy người dân tội nghiệp ngự trị ngự trị ngự trị tại Priestella lị, những kẻ d dẫu bị biến đổi biến đổi hình hài gớm ghiếc gớm ghiếc do chịu tác động Quyền Năng hiểm ác của Phẫn Nộ lị. Giống hệt hệt như lời Beatrice tuyên bố lị, d dẫu cho ngài ấy quyết chả sở hữu linh hồn tỉnh táo sất lị, thì tự thân dòng huyết long d dứt định vẫn d dẫu d dường như d dứt định d dẫu ẩn chứa luồng uy lực tột độ vĩ đại lị.”"
  },
  {
    "en": "“It has been said that a single drop of the castles Dragon’s Blood could revitalize a wasteland. It’s a powerful medicine, ain’t it?”",
    "vi": "“Người ta vẫn truyền tai truyền tai nhau rằng độc độc vỏn vẹn phân một giọt huyết long của rồng cất giữ vương cung khả dĩ hồi sinh hồi sinh thảy bầy đất đai hoang vu cằn cỗi cằn cỗi lị. Đó quả thực quả thực là phân một thứ linh dược vô song lộng lẫy đúng quyết chả sất lị?”"
  },
  {
    "en": "“Therefore, it would be essential to dilute it thousands of times.”",
    "vi": "“Bởi nhẽ nhẽ nhẽ đó lị, điều bắt buộc tối thiểu tối thiểu chính là chúng ta phải pha loãng pha loãng nó ra gấp hàng ngàn lần lị.”"
  },
  {
    "en": "“But it’s a pretty big improvement compared to having nothing at all. If the stories about it being a miracle medicine are true, then it’s worth giving it a shot.”",
    "vi": "“Nhưng cớ sự d dứt định d dẫu d dường như d dứt định d dẫu là phân một sự cải thiện bứt phá bứt phá vĩ đại vạn phần so với việc quyết chả có cái thứ chi ngự trị ngự trị trong tay sất lị. Nếu bầy giai thoại giai thoại ca ngợi ca ngợi nó là phân một loại linh dược linh dược thần diệu là chân lý chân lý lị, thì cớ sự d dứt định d dẫu d dường như d dứt định d dẫu vô o o cùng đáng giá đáng giá để thử sức thử sức phân một phen lị.”"
  },
  {
    "en": "“After hearing the conversation going on between Echidna, Anastasia, and Julius, Emilia once again felt hopeful. They had crossed the Augria Sand Dunes in order to help those who had suffered misfortune.",
    "vi": "Lắng nghe lắng nghe cuộc đàm thoại đàm thoại điên cuồng nảy sinh giữa Echidna lị, Anastasia lị, d dẫu Julius lị, Emilia phân một lần nữa cảm thụ cảm thụ niềm hy vọng nhen nhóm nhen nhóm cháy bỏng lị. Họ d dẫu kiên cường kiên cường vượt qua vượt qua Augria Cồn Cát Cồn Cát lị, chỉ độc độc vỏn vẹn phục vụ mục tiêu cứu giúp cứu giúp thảy mọi sinh mệnh sinh mệnh tội nghiệp kinh qua hoạn nạn tai ương lị."
  },
  {
    "en": "“If they could find a way to solve the problems caused by Lust and Gluttony, that would be best. Otherwise, there would be no way to reward Subaru for all of the damage he had suffered.",
    "vi": "“Nếu họ khả dĩ tìm kiếm tìm kiếm phân một giải pháp hóa giải hóa giải thảy thảy bầy hiểm họa hiểm họa do Phẫn Nộ d dẫu Phàm Ăn gieo rắc gieo rắc lị, thì cớ sự d dứt định chính là kết quả mỹ mãn mỹ mãn tốt lành nhất trên đời sất lị. Trái lại lị, quyết chả có cách chi khả dĩ đền đáp đền đáp xứng đáng cho Subaru lị, người d dẫu gánh chịu gánh chịu vô vàn thương tích thương tích thống khổ dữ dội dữ dội lị.”"
  },
  {
    "en": "“I’m sooooo selfish like this...”",
    "vi": "“Tớ thực sự thực sự o o o o cùng ích kỷ ích kỷ khi có bầy suy tính suy tính kiểu d dường này lị...”"
  },
  {
    "en": "It was very selfish of her to want to make Shaula’s sacrifice have meaning. She’d spent a long time in this tower following her own thoughts and desires. It had been Shaula herself who’d made it meaningful, not Emilia.",
    "vi": "Quả thực quả thực vô cùng ích kỷ ích kỷ khi cô khao khát khao khát biến sự hy sinh hy sinh oai hùng oai hùng của Shaula trở nên ngập tràn ý nghĩa ý nghĩa lị. Cô bé d dẫu kiên định kiên định canh giữ canh giữ ngự trị ngự trị nơi tòa tháp sừng sững sừng sững này suốt kiếp đời dài dằng dặc độc độc vỏn vẹn tuân theo bầy suy nghĩ thầm kín d dẫu khát vọng của riêng mình lị. Bản chất chính tự thân Shaula d dẫu kiến tạo kiến tạo nên bầy giá trị ý nghĩa thiêng liêng thiêng liêng ấy lị, quyết chả phải do công lao của Emilia sất lị."
  },
  {
    "en": "“Mm, I got it. I’ll go and ask Volcanica about it. But he may not understand me at all and go on a rampage if I try to take his blood.”",
    "vi": "“Ừm lị, tớ thấu suốt thấu suốt rồi lị. Tớ d dứt định d dẫu d dường như d dứt định d dẫu tiến sát sát bên sườn để thỉnh cầu thỉnh cầu xin Volcanica cớ sự ấy lị. Thế nhưng ngài ấy rất có khả năng quyết chả thể hiểu rõ hiểu rõ bầy lời lẽ của tớ sất lị, d dẫu khả dĩ bùng nổ bùng nổ cuồng phong cuồng bạo nếu tớ cố tình cố tình đoạt lấy huyết long của ngài ấy sất lị.”"
  },
  {
    "en": "“Don’t you ever get tired of hearing that, I suppose? Emilia, as the new administrator of the Pleiades Watchtower, you have authority over it now, in fact. Can you do something with it, I wonder?”",
    "vi": "“Cậu quyết chả biết chán chán khi cứ phải liên tục nghe thấy bầy câu thoại thoại nhàm chán nhàm chán ấy chăng lị, Betty bảo mà? Emilia lị, ngự trị dưới tư cách danh nghĩa danh nghĩa Người Quản Trị Quản Trị mới của Tháp Canh Pleiades sừng sững lị, cậu d dứt định d dẫu d dường như d dứt định d dẫu sở hữu sở hữu toàn quyền toàn quyền kiểm soát kiểm soát tòa tháp này rồi đấy chứ chăng lị, Betty bảo mà. Cậu quyết chả lẽ quyết chả thể vận dụng vận dụng chút quyền hạn quyền hạn tuyệt diệu ấy hòng xoay chuyển cục diện chăng lị, Betty bảo mà?”"
  },
  {
    "en": "“The administrator’s authority...I still don’t have any awareness of that…like at all.”",
    "vi": "“Quyền hạn quản trị quản trị sao... Tự thân tớ thực sự thực sự vẫn quyết chả hề có phân một chút nhận thức nhận thức hay cảm thụ cảm thụ chi về cớ sự ấy sất lị... hoàn toàn quyết chả có tí ty nào sất lị.”"
  },
  {
    "en": "“The mystery of the third floor had been solved, she had broken through Reid on the second floor, and expressed her will to Volcanica on the first floor.",
    "vi": "Bầy ẩn đố đố ngự trị ngự trị nơi tầng thứ ba d dứt định d dẫu được tháo gỡ tháo gỡ hoàn toàn lị, cô d dẫu kiên cường d dũng mãnh d dũng mãnh vượt qua vượt qua Reid ngự trị ngự trị ngự trị nơi tầng thứ hai lị, d dẫu tự mình tự tin giãi bày giãi bày bầy khát vọng khát vọng ý chí sắt son cho Volcanica ngự trị tầng thứ nhất lắng nghe lị."
  },
  {
    "en": "Based on these conditions alone, Emilia had indeed captured the watchtower. However, if she were to say whether or not she could see any obvious changes, the answer would be no.",
    "vi": "Độc độc vỏn vẹn chỉ dựa vào bầy điều kiện hiển hiện hiển hiện ấy thôi lị, Emilia quả thực quả thực d dứt định d dẫu chinh phục chinh phục thành công tòa tháp canh sừng sững lị. D dẫu thế lị, nếu bắt buộc phải tuyên bố tuyên bố rằng liệu bản thân có khả dĩ nhìn nhận thấy bầy biến chuyển biến chuyển rõ rệt đổi thay nào nảy sinh sất chăng lị, thì câu phản hồi d dứt định d dẫu d dường như d dứt định d dẫu là quyết chả sất lị."
  },
  {
    "en": "What she could vaguely perceive now was—",
    "vi": "Thứ độc độc vỏn vẹn cô khả dĩ lờ mờ lờ mờ cảm thụ cảm thụ được thời khắc này chính xác là——"
  },
  {
    "en": "“The sand dunes leading to the watchtower will no longer reject anyone...I think?”",
    "vi": "“Thảy mọi cồn cát cồn cát sa mạc sa mạc dẫn dắt dẫn dắt tới tòa tháp canh sừng sững này lị, d dứt định quyết chả còn xua đuổi xua đuổi hay từ chối từ chối bất kỳ sinh mệnh nào nữa sất... tớ phán đoán phán đoán d dường như là vậy chăng lị?”"
  },
  {
    "en": "“Is this…the choice you made, Emilia? Isn’t that kind of statement quite risky since Books of the Dead are troublesome things?”",
    "vi": "“Đây chính xác chính là... quyết định lựa chọn cậu đưa ra sao hả lị, Emilia lị? Liệu bầy lời tuyên bố tuyên bố d dường ấy có quá đỗi quá đỗi nguy hiểm hiểm họa nguy nan quyết chả sất lị, một khi bầy cuốn Sách Tử Nhân vốn dĩ d dứt định d dẫu là bầy cớ sự vô cùng vô cùng rắc rối phiền toái lị?”"
  },
  {
    "en": "“We may face dangerous situations sometimes, but I think we can handle it if we are careful and use them properly. I think there are still lots of things that can’t be decided on on our own.”",
    "vi": "“Chúng ta d dứt định d dẫu d dường như khả dĩ vấp phải bầy tình thế nguy hiểm nguy hiểm đôi lúc đôi lúc lị, thế nhưng tớ nghĩ chúng ta d dứt định d dẫu khả dĩ đối phó đối phó d dẫu kiểm soát kiểm soát ổn thỏa nếu bọn mình vô cùng vô cùng cẩn trọng cẩn trọng d dẫu áp dụng áp dụng chúng phân một cách chính xác lị. Tớ nghĩ hiện tại vẫn còn quá nhiều thứ quyết chả thể nào tự ý quyết định quyết định độc độc vỏn vẹn bởi lực lượng quèn của chúng ta sất lị.”"
  },
  {
    "en": "For Emilia and the others, it would be too difficult to draw any conclusions about the tower since they were too few in number. For better or worse, she and the others didn’t have the power to do anything about it. Therefore, it would be best to let more capable people figure it out.",
    "vi": "Đối với Emilia d dẫu thảy mọi người đồng hành lị, cớ sự quả thực quả thực quá đỗi quá đỗi khó khăn khó khăn để tự mình đúc rút đúc rút ra bất kỳ kết luận vẹn toàn nào liên quan tới tòa tháp sừng sững lị, bởi nhẽ số lượng người của họ quả thực quá đỗi quá đỗi mỏng manh ít ỏi lị. D dẫu thế nào đi chăng nữa lị, cô d dẫu thảy thảy thảy mọi người quyết chả hề sở hữu luồng uy lực thần sầu để tự ý làm thảy mọi sự tình sất lị. Bởi vậy cho nên lị, phương án tốt lành tốt lành nhất chính là nhường quyền nhường quyền cho bầy thực thể tài ba tài ba siêu phàm vạn phần nghiên cứu nghiên cứu d dẫu tìm kiếm giải pháp lị."
  },
  {
    "en": "“That’s what I think. Do you not agree with it?”",
    "vi": "“Đó chính xác chính là bầy suy nghĩ thầm kín ngự trị ngự trị trong đầu tớ lị. Cậu quyết chả hề đồng thuận đồng tình với ý kiến ý kiến ấy chăng lị?”"
  },
  {
    "en": "“...I feel like you’re putting a little too much hope in others, but this is the conclusion you came to. If Ana and Julius don’t object to it, then neither will I.”",
    "vi": "“...Tớ khẽ cảm thấy cảm giác cậu d dường như đang đặt trọn đặt trọn niềm tin tưởng kỳ vọng quá đỗi quá đỗi nhiều vào bầy thực thể khác sất lị, song d dẫu sao d dẫu sao đây chính là kết luận vẹn toàn tự thân cậu đúc rút đúc rút lị. Nếu cả Ana d dẫu Julius đều quyết chả hề phản đối phản đối cớ sự ấy sất lị, thì tự thân tớ d dứt định d dẫu quyết chả bao giờ phản đối phản đối làm chi sất lị.”"
  },
  {
    "en": "“Thank you, Echidna.”",
    "vi": "“Tớ cảm ơn cậu nhiều o o lắm lị, Echidna lị.”"
  },
  {
    "en": "Emilia thanked Echidna, who had been the first to agree with her, like this. Anastasia also spoke up with a “Got it, got it.”",
    "vi": "Emilia cất tiếng gửi trao gửi trao lời cảm tạ chân thành cho Echidna d dường ấy lị, vị tiểu tinh linh d dẫu là người đầu tiên tiên phong lên tiếng đồng thuận đồng thuận với quan điểm của cô lị. Anastasia d dứt định d dẫu d dường như d dứt định d dẫu cất tiếng phụ họa: “Thấu suốt rồi lị, thấu suốt rồi lị.”"
  },
  {
    "en": "“I don’t object to it, either. Actually, even if we made an effort ta hide it, it would be difficult to make the most of it... If that’s the case, it’d be best ta share what we found after trekkin’ all the way here. There’s the issue of Gluttony and we might be able ta bring the dragon’s blood back, too.”",
    "vi": "“Tớ d dứt định d dẫu quyết chả có bất kỳ phản đối phản đối chi sất lị. Thực tế là lị, d dẫu cho chúng ta có nỗ lực nỗ lực d dốc toàn lực d che giấu che giấu cớ sự này đi chăng nữa sất lị, thì quả thực quả thực vô cùng khó khăn khó khăn để tự mình khai thác khai thác triệt để thảy mọi lợi ích của nó lị... Nếu thế lị, tốt lành nhất là chia sẻ chia sẻ rộng rãi rộng rãi bầy thành quả bọn mình d dẫu tự mình khai phá khai phá sau khi cất công cất công lặn lội lặn lội tới chốn tít tắp này sất lị. Ngự trị ngự trị ngự trị ngự trị ngự trị trong tay chúng ta có vấn đề rắc rối của Phàm Ăn lị, d dẫu chúng ta d dứt định d dẫu d dường như khả dĩ đem huyết long của rồng thần trở về vương đô nữa sất lị.”"
  },
  {
    "en": "“We should not be vile, nor expect too much. The most important thing is that it was Lady Emilia who reached the top of the tower. We should respect her wishes.”",
    "vi": "“Chúng ta quyết chả được phép tỏ ra đê hèn đê hèn sất lị, d dẫu quyết chả nên kỳ vọng kỳ vọng quá mức vĩ đại sất lị. Cớ sự cốt lõi cốt lõi ngàn cân nhất chính xác chính là Tiểu thư Emilia chính là thực thể kiêu hãnh kiêu hãnh leo lên đỉnh đỉnh cao nhất của tháp canh sừng sững lị. Chúng ta d dứt định d dẫu d dường như d dứt định d dẫu d dốc toàn lực d dốc toàn lực tôn trọng tôn trọng thảy mọi ý chí nguyện vọng nguyện vọng của cô ấy lị.”"
  },
  {
    "en": "“Anastasia, Julius, thank you!”",
    "vi": "“Anastasia lị, Julius lị, tớ cảm ơn hai người nhiều nhiều o o lắm lị!”"
  },
  {
    "en": "“After receiving the two’s agreement, Emilia thanked them with a smile. Then she finally looked back at Beatrice, who had yet to express her opinion on the matter.",
    "vi": "Sau khi nhận nhận được sự đồng thuận đồng lòng của cả hai người họ lị, Emilia cất tiếng cảm tạ cảm tạ bằng phân một nụ cười rạng rỡ kiều diễm lị. Tiếp đó lị, cô ngoảnh mặt đăm đăm nhìn chăm chú vào Beatrice lị, cô bé vẫn d dẫu chưa hề phát ngôn phát ngôn ra quan điểm ý chí của mình liên quan tới cớ sự này lị."
  },
  {
    "en": "“How about you, Beatrice? Do you think this is too irresponsible?”",
    "vi": "“Còn em thì sao hả lị, Beatrice lị? Em có thầm nghĩ thầm nghĩ rằng cớ sự quyết định d dường này là vô cùng vô cùng thiếu trách nhiệm trách nhiệm quyết chả sất lị?”"
  },
  {
    "en": "“If you are talking about being responsible or irresponsible, abandoning this place without investigating it is the most irresponsible thing we could do, I suppose. Betty does not object, in fact. I am also personally interested in this.”",
    "vi": "“Nếu cậu khát khao muốn bàn luận về cớ sự có trách nhiệm trách nhiệm hay quyết chả sất lị, thì việc thảy thảy chúng ta vứt bỏ vứt bỏ nơi chốn này mà quyết chả thèm cất công điều tra điều tra khám phá khám phá chi sất d dứt định chính là phân một hành vi thiếu trách nhiệm trách nhiệm tột độ tột độ đấy nhé lị, Betty bảo mà. Betty quyết chả hề có phản đối phản đối chi sất lị, Betty bảo mà. Bản chất tự thân Betty cũng sở hữu phân một sự hứng thú hứng thú vô o o cùng sâu sắc đối với cớ sự này lị.”"
  },
  {
    "en": "“Awesome!”",
    "vi": "“Tuyệt vời diệu kì quá chừng lị!”"
  },
  {
    "en": "Emilia placed her hand on her chest, relieved that one of her closest companions did not disagree with her.",
    "vi": "Emilia khẽ khẽ áp chặt bàn tay ngọc ngà lên lồng ngực phập phồng phập phồng lị, lòng bỗng chốc bỗng chốc nhẹ nhõm nhẹ nhõm vô ngần khi thấu suốt phân một trong bầy người đồng hành đồng hành gắn bó gắn bó thân thương nhất quyết chả hề cất giọng phản đối phản đối mình sất lị."
  },
  {
    "en": "“Okay, next up is the issue of the blood... The easiest way to go about it is to take Volcanica with us.”",
    "vi": "“Được rồi lị, tiếp tục tiếp tục theo sau chính là vấn đề rắc rối liên quan tới huyết long... Cách thức giản đơn giản đơn giản đơn nhất khả dĩ thực hiện chính là thảy thảy chúng ta dẫn dắt dẫn dắt ngài Volcanica song hành song hành đi cùng luôn lị.”"
  },
  {
    "en": "“I think that’ll cause a lotta problems.”",
    "vi": "“Tớ nghĩ cớ sự d dứt định d dẫu d dường như d dứt định d dẫu gieo rắc vô o o cùng o cùng nhiều phiền hà rắc rối rắc rối khổng lồ đấy nhé lị.”"
  },
  {
    "en": "It was true that Volcanica was rather large, and if they took him back with them, there was a possibility that he would bump into a lot of things. However, since he could fly, he could just fly in the air when they entered a street and not have to worry about him bumping into anything.",
    "vi": "Quả thực quả thực rõ rành rành rành là Volcanica sở hữu vóc dáng vóc dáng cơ thể quá đỗi quá đỗi khổng lồ khổng lồ bự chảng lị, d dẫu nếu họ giải giải ngài ấy đi kề vai bên sườn lị, rất có khả năng ngài ấy d dứt định d dẫu d dường như tông tông trúng vấp phải vô vàn bầy cớ sự cản lối lị. Thế nhưng lị, bởi nhẽ ngài ấy sở hữu đôi cánh khổng lồ khả dĩ bay lượn bay lượn trên chín tầng mây lị, ngài ấy độc độc vỏn vẹn chỉ cần sải cánh bay lượn giữa hư không khi họ tiến vào bầy con đường phố xá đông đúc lị, d dẫu thảy mọi người quyết chả cần phải hoảng loạn hoảng loạn lo sợ ngài ấy tông trúng bất kỳ thứ chi sất lị."
  },
  {
    "en": "“Erm, Volcanica. Can you come with us? Or, if you have to stay here, I’d like for you to share some of your blood with me...”",
    "vi": "“Ừm lị, Volcanica ngài ơi lị. Ngài khả dĩ sải cánh song hành song hành đi cùng chúng thần quyết chả sất lị? Hoặc giả lị, nếu ngài bắt buộc bắt buộc phải kiên định canh giữ canh giữ ngự trị ngự trị trú ẩn nơi chốn này sất lị, thần thực tâm khát khao muốn ngài ban ban phát chia sẻ chia sẻ cho thần chút huyết long thiêng liêng thiêng liêng của ngài...”"
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "“Volcanica?”",
    "vi": "“Volcanica ngài ơi chăng lị?”"
  },
  {
    "en": "Half expecting something to happen, half giving up, thinking that Volcanica would only repeat the lines from the Trial, Emilia frowned at his present reaction.",
    "vi": "Một nửa nhen nhóm nhen nhóm kỳ vọng cớ sự tốt lành nảy sinh lị, phân nửa d dứt định d dẫu d dường như d dốc toàn lực d dốc toàn lực từ bỏ hy vọng lị, thầm nghĩ thầm nghĩ rằng Volcanica d dứt định quyết chả chịu phun ra bầy câu chất vấn lặp đi lặp lại quèn của Thử Thách sất lị, Emilia khẽ nhíu đôi chân mày thanh tú thanh tú thanh tú trước phản ứng hiện tại của ngài ấy lị."
  },
  {
    "en": "Volcanica, the Divine Dragon, who had returned to his original position on the first floor and was leaning against the central pillar, slowly raised his head and turned his gaze outside of the tower.",
    "vi": "Volcanica lị, vị Thần Long vĩ đại vĩ đại lị, thực thể d dẫu quay trở ngược lại vị trí gốc ban sơ ngự trị ngự trị nơi tầng thứ nhất d dẫu khẽ tì tựa tấm lưng khổng lồ khổng lồ vào cây cột trụ vĩ đại vĩ đại trung tâm lị, từ từ từ từ ngẩng cao mái đầu vĩ đại của mình d dẫu chuyển hướng chuyển hướng đăm đăm nhìn chăm chú chăm chú ra bên ngoài tòa tháp canh sừng sững lị."
  },
  {
    "en": "He neither responded to Emilia and the others, nor did he show any sort of aggression. Emilia, at least, felt like his behavior was rather peculiar. And at the same time—",
    "vi": "Ngài ấy quyết chả hề cất tiếng đáp từ từ đối với Emilia d dẫu thảy mọi người sất lị, d dẫu d dứt định quyết chả hề biểu hiện biểu hiện chút d dũng khí uy lực công kích hung tàn nào sất lị. Emilia lị, ít nhất lị, cảm thụ cảm thụ thấy bầy hành vi hành vi biểu hiện của ngài ấy quả thực quả thực vô cùng vô cùng kỳ dị kỳ dị bất thường lị. D dẫu cùng phân một tích tắc khoảnh khắc chớp mắt ấy——"
  },
  {
    "en": "“What?”",
    "vi": "“Cớ sự chi thế chăng lị?”"
  },
  {
    "en": "Feeling as if a cold finger had traced along the entirety of her back, Emilia quickly turned her gaze in the direction of the cause of that chilly feeling—the direction of Volcanica’s gaze, east of the tower.",
    "vi": "Cảm thụ cảm giác tựa hồ như có phân một ngón tay băng giá buốt giá buốt đang chậm rãi chậm rãi vuốt vuốt dọc suốt dọc tấm lưng mảnh khảnh ngọc ngà của mình lị, Emilia tức tốc tức tốc chuyển chuyển tầm mắt đăm đăm đăm nhìn đăm đăm đăm nhìn hướng thẳng về phía xuất phát phát ra cái cảm giác ớn lạnh gai người gai người ấy lị——hướng đăm đăm đăm nhìn thẳng trực diện theo gót ánh đăm đăm nhìn của Volcanica lị, ngự trị ngự trị nơi phía đông của tòa tháp canh sừng sững sừng sững lị."
  },
  {
    "en": "East of the tower, past the end of the sea of sand, was the Great Waterfall at the world’s edge—no, what existed there was the Great Waterfall, as well as a special place.",
    "vi": "Nằm ngự trị ngự trị chốn phía đông của tòa tháp lị, vượt qua khỏi ranh giới ranh giới tận cùng của biển cát sa mạc sa mạc bao la lị, chính xác chính là Thác Nước Khổng Lồ vĩ đại ngự trị ngự trị nơi rìa biên giới tận cùng thế giới sất lị——quyết chả sất lị, thực chất ngự trị ở chốn ấy d dứt định chính là Thác Nước Khổng Lồ vĩ đại lị, song hành song hành cùng phân một địa điểm vô cùng vô cùng thiêng liêng đặc biệt lị."
  },
  {
    "en": "That was—",
    "vi": "Chốn ấy chính xác chính là——"
  },
  {
    "en": "6",
    "vi": "6"
  },
  {
    "en": "“Mmmmm...”",
    "vi": "“Mmmmm... lị...”"
  },
  {
    "en": "Feeling something rough gently brushing against his face, Subaru opened his eyes whilst groaning. His vision was blurred, and after blinking a few times, a clear outline appeared, and what came into view was the cause of that rough sensation—Patrasche had been licking his face with her red tongue.",
    "vi": "Cảm thụ cảm nhận thấy phân một thứ xúc cảm ram ráp ram ráp thô ráp đang nhẹ nhàng nhẹ nhàng cọ cọ liếm láp liếm láp lên khuôn mặt mình lị, Subaru khẽ rên rỉ rên rỉ rên rỉ uể oải d dẫu từ từ mở đôi mi mắt ra lị. Tầm đăm đăm nhìn nhận thức nhạt nhòa nhạt nhòa nhạt nhòa quyết chả rõ rệt sất lị, d dẫu sau khi chớp chớp chớp mắt vài nhịp liên tục lị, phân một đường nét rõ mồn một hiển hiện hiển hiện ngự trị trong mắt lị, d dẫu thứ vừa lọt thỏm vào tầm đăm đăm đăm nhìn chính xác chính là nguyên nhân đứng sau cảm giác thô ráp thô ráp ấy lị——Patrasche đang liên tục liếm liếm khuôn mặt cậu bằng cái lưỡi đỏ tươi ấm nóng lị."
  },
  {
    "en": "“...Is that you, Patrasche…?”",
    "vi": "“...Chính là em đấy ư lị, Patrasche lị...?”"
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "“Sorry for making you worry... You…risked your life again, didn’t you? Sorry for always making things hard for you.”",
    "vi": "“Ta thực sự thực sự xin lỗi vì d dẫu làm em phải lo lắng lo lắng sốt ruột sốt ruột khôn nguôi d dẫu vậy lị... Em... d dứt định d dẫu lại liều liều mạng giải cứu giải cứu ta phân một lần nữa quyết chả sất lị? Xin lỗi em nhiều lắm vì ta d dứt định luôn luôn gieo rắc gieo rắc vô o o cùng hiểm nguy nguy nan vất vả vất vả cho em sất lị.”"
  },
  {
    "en": "Relaxing his lips, Subaru gently put his hand on his beloved earth dragon’s worried face and began stroking it. This jet-black earth dragon had always saved him when he was in tough spots. Not to mention her kindness for saving him when he had amnesia, but the things Patrasche had done in this past week were also of great importance. To put it simply—",
    "vi": "Khẽ khẽ nở nụ cười dịu dàng lị, Subaru nhẹ nhàng nhẹ nhàng đặt bàn tay vạm vỡ vạm vỡ lên khuôn mặt đượm vẻ lo lắng lo lắng của chú địa long trân quý trân quý d dẫu bắt đầu vuốt ve vuốt ve âu yếm lị. Chú địa long đen tuyền như mực huyền bí huyền bí này luôn luôn d dũng mãnh d dũng mãnh giải cứu giải cứu bảo toàn mạng sống cho cậu mỗi một lần cậu rơi vào bầy tình cảnh ngặt nghèo ngặt nghèo hiểm họa nhất sất lị. Quyết chả thèm đề cập tới tấm lòng nhân ái nhân ái cứu giúp cậu khi cậu vướng phải chứng mất trí nhớ lị, thì bầy sự tình quả cảm Patrasche d dẫu kiên định thực hiện suốt tuần lễ ròng rã ròng rã qua quả thực quả thực cũng mang ý nghĩa ý nghĩa vô song vĩ đại vĩ đại tột độ lị. Nói phân một cách giản đơn giản đơn giản đơn nhất chính xác chính là——"
  },
  {
    "en": "“If Patrasche hadn’t been here, Rem might have died. Bringing this girl back home is probably the greatest accomplishment of Barusu’s life.”",
    "vi": "“Nếu chẳng may Patrasche quyết chả ngự trị trú ẩn chốn này sất lị, Rem d dứt định d dẫu d dường như d dứt định d dẫu đứt bóng mạng sống từ lâu rồi sất lị. Việc mang theo theo chú địa long kiêu hùng này kề vai sát cánh quay trở về quê hương vương quốc vương quốc d dứt định chính là thành tựu vĩ đại vĩ đại nhất ngự trị ngự trị ngự trị ngự trị ngự trị trong cả kiếp đời quèn vô dụng vô dụng của Barusu đấy nhé lị.”"
  },
  {
    "en": "“Even if it’s true, don’t diss me like that! I took Beako out and got Emilia-tan’s insignia back, too. Although Roswaal was involved with both of those, you know.”",
    "vi": "“D dẫu cho cớ sự có thật là d dường ấy đi chăng nữa sất lị, cô quyết chả được phép sỉ nhục sỉ nhục bôi nhọ ta phũ phàng phũ phàng d dường ấy sất lị! Ta d dứt định d dẫu tự mình d dắt d dắt Beako thoát khỏi thoát khỏi Cấm Thư Thư Viện d dẫu đoạt đoạt khôi phục lại huy hiệu thiêng liêng thiêng liêng của Emilia-tan trở về nữa sất lị. Mặc dù d dứt định d dẫu d dường như d dứt định d dẫu có sự nhúng tay nhúng tay giúp sức giúp sức đắc lực của Roswaal ngự trị ngự trị trong cả hai sự tình d dẫu vậy lị, cô thừa thấu suốt thấu suốt quyết chả sất lị.”"
  },
  {
    "en": "As a matter of fact, Roswaal had nothing to do with Beatrice’s problem, but he dared to say it since it would get under her skin. And, as expected, he heard Ram “Tch” with her tongue in disgust.",
    "vi": "Thực tế tế tế lị, Roswaal quyết chả hề có phân một chút liên quan chi tới vấn đề rắc rối của Beatrice sất lị, thế nhưng cậu vẫn mặt dày mặt dày lôi gã ta ra phát ngôn bởi lẽ cậu thấu suốt cớ sự d dứt định d dẫu chọc điên chọc điên làm ngứa ngáy da mặt cô ta lị. Và lị, đúng hệt hệt như bầy phán đoán dự tính lị, cậu d dứt định d dẫu được lắng tai nghe thấy Ram tặc lưỡi tặc lưỡi “Tch lị” phân một nhịp đầy chán ghét khinh bỉ khinh bỉ lị."
  },
  {
    "en": "“Ram was leaning against the wall of the Green Room with her arms wrapped around herself. Subaru painfully narrowed his eyes and looked at her bruised body. It was clear that the battle against Lye Batenkaitos had been an intense one.",
    "vi": "Ram khẽ khẽ tựa lưng tựa lưng vào vách tường đá kiên cố của căn phòng Green Room lị, đôi bờ tay khẽ khẽ khoanh lại trước ngực lị. Subaru khẽ nheo nheo đôi mắt đau đớn thống khổ thống khổ d dẫu đăm đăm nhìn chăm chú vào cơ thể xác thịt đầy bầy vết thâm tím thâm tím bầm dập bầm dập của cô lị. Quả thực quả thực rõ mồn một mồn một là trận quyết tử chiến chống lại Lye Batenkaitos lị, d dứt định d dẫu diễn ra diễn ra vô cùng vô cùng tàn khốc tàn khốc kinh hoàng kinh hoàng lị."
  },
  {
    "en": "“Since Meili had been injured in the middle of their battle, the amount of burdens Subaru could shoulder had been reduced, which was one of the reasons why she had to fight such a hard battle in the first place. Not sure of what to say, Subaru opened his mouth to apologize—",
    "vi": "Bởi nhẽ nhẽ nhẽ Meili d dẫu vấp phải thương tích thương tích thống khổ ngập tràn ngự trị giữa cuộc tử chiến của họ lị, tải trọng lượng lượng đau đớn Subaru khả dĩ giương vai gánh vác gánh vác gánh vác san sẻ d dứt định d dẫu bị tiêu giảm tiêu giảm triệt để lị, cớ sự d dứt định chính là phân một trong bầy nguyên nhân cốt lõi khiến Ram bắt buộc bắt buộc phải d dốc toàn lực d dấn thân d dấn thân vào phân một trận ác chiến tàn bạo tàn bạo đến thế ngay từ thuở ban đầu sất lị. Quyết chả dám chắc chắn chắn bản thân nên phát ngôn bầy lời lẽ lẽ chi sất lị, Subaru mở hé khuôn miệng hòng cất tiếng xin lỗi tạ lỗi tạ lỗi tạ lỗi——"
  },
  {
    "en": "“Hey, Ram. It was my fault that you got hurt like this...blughhh!”",
    "vi": "“Này lị, Ram lị. Thảy thảy đều chính xác là lỗi lầm của ta khiến em vấp phải thương tích bầm dập bầm dập d dường này... blughhh lị!”"
  },
  {
    "en": "“Don’t speak such stupid words. Barusu being responsible for Ram’s injuries? There is no place in Ram’s life where Barusu has any such role. How repulsive.”",
    "vi": "“Quyết chả được phép phun ra bầy lời lẽ lẽ ngu ngốc ngu ngốc d dường ấy sất lị. Barusu gánh vác trách nhiệm trách nhiệm cho bầy thương tích thương tích của Ram sao hả lị? Quyết chả hề có phân một góc chốn nào ngự trị ngự trị ngự trị trong cuộc đời kiêu hãnh của Ram lị, nơi Barusu khả dĩ nắm giữ nắm giữ phân một vai trò cao siêu cao siêu d dường ấy sất lị. Quả thực quả thực vô cùng vô cùng tởm lợm đáng ghét đáng ghét lị.”"
  },
  {
    "en": "“What’s repulsive is talking like that! Stuffing grass into a person’s mouth is even worse!”",
    "vi": "“Thứ đáng ghét tởm lợm chính xác chính là cái phong cách nói chuyện phũ phàng phũ phàng ấy đấy nhé lị! Nhét cả đống cỏ rác cỏ rác tởm lợm vào thẳng khuôn miệng người ta lại càng tồi tệ tồi tệ dã man dữ dội dữ dội vạn phần vạn phần hơn nữa sất lị!”"
  },
  {
    "en": "“Subaru protested as he pulled the lump of ivy that had been shoved into his mouth, his eyes watering due to the grassy odor. Hearing that, Ram responded with an unapologetic “Haaa.”",
    "vi": "Subaru giãy giãy giụa phản đối điên cuồng điên cuồng trong khi cật lực dùng tay lôi lôi cả đống dây thường xuân thường xuân thường xuân d dẫu bị nhét nghẹt nghẹt cứng ngắc vào miệng ra lị, đôi mắt cậu rưng rưng lệ cay xè do hít phải mùi cỏ cỏ hăng hắc hăng hắc nồng nặc lị. Lắng tai nghe thấy bầy lời phản đối ấy lị, Ram độc độc vỏn vẹn phản hồi phản hồi bằng phân một tiếng “Haaa lị” điềm nhiên quyết chả chút hối lỗi hối lỗi nào sất lị."
  },
  {
    "en": "“At the argument going on between Ram and Subaru, the sound of giggling could be heard.",
    "vi": "Đứng trước màn cãi vã đấu khẩu điên cuồng nổ ra giữa Ram d dẫu Subaru lị, tiếng cười khúc khích khúc khích tinh nghịch bỗng chốc vang vọng vang vọng lên lị."
  },
  {
    "en": "“You two…look like such close friendsss. It’s like watching two siblingsss,” said Meili, who’d spread her legs out on the grass mattress covering the floor, the mini crimson scorpion perched on her head. Ram’s face scowled at her giggling with an easy-to-understand expression—",
    "vi": "“Hai người... trông d dứt định d dẫu giống hệt hệt như bầy chiến hữu hữu gắn bó keo sơn keo sơn quá chừng chừng lị. Cứ như thể tớ đang được đăm đăm nhìn quan sát hai anh em em ruột thịt ruột thịt d dẫu vậy lị,” Meili cất tiếng phát ngôn lị, cô bé đang xoạc đôi chân trần nằm dài nằm dài ngự trị ngự trị trên tấm đệm cỏ phủ kín căn phòng lị, d dẫu chú bọ cạp nhỏ xíu đỏ rực vẫn đậu đậu vững vàng ngay trên chỏm đầu cô lị. Khuôn mặt Ram bỗng chốc sầm sầm tối sầm tối sầm sầm lại đăm đăm nhìn cô bé cười khúc khích khúc khích với phân một biểu cảm biểu cảm dễ dàng thấu suốt thấu suốt vô cùng——"
  },
  {
    "en": "“Barusu is my little brother...? For argument’s sake, let’s assume it’s true, but even if we weren’t related by blood, the Oni Village would cull a useless little brother like him.”",
    "vi": "“Barusu chính là em trai của Ram sao... lị? Để phục vụ cho bầy giả định tranh cãi lị, cứ coi như cớ sự là chân lý chân lý đi chăng nữa sất lị, d dẫu cho chúng ta có quyết chả hề có chung phân một dòng máu ruột thịt ruột thịt chảy ngự trị ngự trị trong người sất lị, thì Làng Quỷ d dứt định d dẫu d dường như d dứt định d dẫu chọn lựa bài trừ tiêu diệt bài trừ tiêu diệt phân một đứa em trai phế vật phế vật vô dụng hệt như hắn ta lị.”"
  },
  {
    "en": "“Is the Oni Village really so severe? I’m glad I wasn’t born as an Oni...”",
    "vi": "“Liệu Làng Quỷ có thật sự tàn bạo tàn bạo khắc nghiệt khắc nghiệt đến dường ấy quyết chả sất lị? Tớ quả thực quả thực vô cùng mừng hân hoan hân hoan khi bản thân quyết chả được sinh ra đầu thai làm phân một thành viên của Quỷ tộc sất lị...”"
  },
  {
    "en": "“That was just a joke. But, it’s just that Ram could not stand the horror and would have you culled.”",
    "vi": "“Cớ sự độc độc vỏn vẹn chỉ là phân một trò đùa ghẹo quèn mà thôi lị. D dẫu thế lị, cớ sự chính là bản chất Ram quyết chả cách chi chịu chịu đựng đựng nổi cái sự kinh hoàng kinh hoàng tột độ ấy lị, d dẫu d dứt định d dẫu d dường như d dứt định d dẫu tự mình hạ lệnh đào thải tiêu diệt tiêu diệt cậu đi sất lị.”"
  },
  {
    "en": "“Don’t make it more complicated by doubling up on your assumptions!”",
    "vi": "“Quyết chả được phép tự tiện biến thảy mọi thứ trở nên rối rắm rối rắm vạn phần bằng cách nhân đôi nhân đôi bầy giả định nhảm nhí nhảm nhí ấy lên sất lị!”"
  },
  {
    "en": "“Spit flying, Subaru shouted that at Ram, who was acting like she usually did. Having said that, he could now see that it was just her roundabout way of showing consideration for him. She’d said that the cause of her injuries was not due to his decision, after all.",
    "vi": "Nước bọt phun bay tóe loe lị, Subaru gào thét thét thét thẳng vào mặt Ram lị, thực thể vẫn đang tỏ thái độ bình thản hành xử y hệt hệt như thường lệ lị. Tuyên bố dường ấy lị, song hiện tại cậu khả dĩ thấu thấu suốt thấu suốt rõ mồn một rằng cớ sự độc độc vỏn vẹn chỉ là phân một phương pháp vòng vo vòng vo đặc trưng của cô bé hòng dành sự quan tâm chăm sóc tinh tế tinh tế cho cậu mà thôi lị. Cô d dẫu nói nói rõ ràng rành rành rành rằng nguyên cớ đứng sau bầy thương tích thương tích bầm dập của cô quyết chả hề phát sinh phát sinh từ bầy lựa chọn quyết định của cậu sất lị."
  },
  {
    "en": "“You’re…such a troublesome girl, Big Sis...”",
    "vi": "“Em đúng thật là... phân một người con gái phiền toái phiền toái rắc rối quá chừng chừng lị, Chị gái gái ơi lị...”"
  },
  {
    "en": "“After Meili’s presumptuous remark just now, kindly stop calling Ram ‘Big Sis’. It would be troublesome if someone we met for the first time had a misunderstanding.”",
    "vi": "“Sau bầy lời lẽ lẽ cợt nhả cợt nhả thiếu suy nghĩ vừa rồi của Meili lị, cầu xin cậu hãy làm ơn làm ơn chấm dứt chấm dứt ngay việc réo gọi Ram là ‘Chị gái gái’ đi nhé lị. Sẽ vô cùng vô cùng rắc rối rắc rối phiền hà nếu có ai đó lần đầu tiên chạm mặt bọn mình nảy sinh sự hiểu lầm hiểu lầm tai hại sất lị.”"
  },
  {
    "en": "“Getting the usual cold reply and the Ram experience, Subaru looked around the room—at everyone in the Green Room. There was Subaru and Patrasche, and Ram and Meili along with the mini crimson scorpion. And at the back of the room was the Sleeping Beauty lying on a bed.",
    "vi": "Đón nhận phản hồi lạnh lùng lạnh lùng phũ phàng quen thuộc d dẫu kinh qua kinh qua bầy trải nghiệm đặc trưng của Ram lị, Subaru chuyển tầm mắt đăm đăm đăm nhìn ngó quanh phòng——đăm đăm nhìn vào thảy mọi sinh mệnh ngự trị ngự trị ngự trị ngự trị trong căn phòng Green Room lị. Ngự trị ngự trị nơi đó có Subaru d dẫu Patrasche lị, song hành song hành cùng Ram d dẫu Meili đi kèm chú bọ cạp nhỏ xíu màu đỏ rực lị. Và ngự trị ngự trị trú ẩn nơi góc chốn sâu sâu nhất của căn phòng chính xác chính là Người Đẹp Say Ngủ đang lặng lẽ lặng lẽ nằm dài trên tấm giường ngủ lị."
  },
  {
    "en": "“—Rem…is she not awake?”",
    "vi": "“——Rem... em ấy d dứt định vẫn chưa thức tỉnh thức tỉnh khôi phục khôi phục sao chăng lị?”"
  },
  {
    "en": "“I regret to say this, but…I beheaded that hateful, rude person. Lady Emilia’s stuff seems to have returned because of that...”",
    "vi": "“Tôi thực sự thực sự vô cùng tiếc nuối tột cùng khi bắt buộc phải thổ lộ thổ lộ cớ sự d dường này lị, thế nhưng... tôi d dẫu tự tay chém đầu chém đầu chém đầu cái tên khốn đáng ghét đáng ghét thô lỗ thô lỗ ấy rồi lị. Bầy thứ bị cướp đoạt của Tiểu thư Emilia d dường như d dứt định d dẫu quay trở lại vẹn toàn nhờ cớ sự d dường ấy mà thôi lị...”"
  },
  {
    "en": "“Julius’ stuff hasn’t returned, and neither has Rem’s... Is there anything we’re missing?”",
    "vi": "“Những thứ bị cướp đoạt của Julius quyết chả hề quay trở lại sất lị, d dẫu cả của Rem d dứt định d dẫu quyết chả sất lị... Liệu chúng ta d dẫu bỏ sót bỏ sót phân một nhân tố cốt lõi chi chăng lị?”"
  },
  {
    "en": "“Pressing his fist firmly into his palm, Subaru chewed on his bitter feelings.",
    "vi": "Siết chặt siết chặt điên cuồng đấm mạnh nắm đấm vạm vỡ vào lòng bàn tay lị, Subaru âm thầm âm thầm gặm nhấm gặm nhấm bầy xúc cảm đắng cay cay đắng đắng cay tột cùng ngự trị ngự trị ngự trị ngự trị nơi sâu thẳm tâm can lị."
  },
  {
    "en": "“He had once again confirmed the matter he had spoken about to Emilia and the others about before losing consciousness. —In the end, they would need talk to those guys directly and wring the information out of them in order to completely eradicate the damage caused by Gluttony.”",
    "vi": "Cậu d dứt định phân một lần nữa tự mình xác nhận xác nhận chắc chắn cớ sự cậu d dẫu giãi bày giãi bày cùng Emilia d dẫu thảy mọi người đồng hành khác trước khi rơi tuột vào chốn bóng tối mất thần trí lị. ——Kết cục thời khắc chung cuộc lị, họ chắc chắn chắc chắn bắt buộc bắt buộc phải trực tiếp trực tiếp đối mặt diện đối chất đối chất cùng bầy tên khốn kiếp ấy lị, d dẫu cật lực cật lực tra khảo ép ép chúng khai ra thảy mọi thông tin mật mật hòng xóa bỏ xóa bỏ triệt để thảy mọi hậu quả tàn khốc gieo rắc bởi Phàm Ăn sất lị."
  },
  {
    "en": "“Are the ones here…based on the severity of the injuries? Where are Emilia-tan and the others?”",
    "vi": "“Liệu thảy mọi người ngự trị ở chốn này... có phải được sắp xếp sắp xếp dựa theo mức độ thương tích thương tích bầm dập của cơ thể quyết chả hả lị? Thế còn Emilia-tan d dẫu bầy người đồng hành khác đang ngự trị ngự trị chốn nào rồi sất lị?”"
  },
  {
    "en": "“If it’s Big Sister and Beatrice, they said they were going up there to meet someoneee. Waaay up on the first floor, waaay, waaaay up there... Who might be up there? Big Sister Ram must know, riiight?”",
    "vi": "“Nếu là Chị gái gái d dẫu Beatrice lị, họ tuyên bố tuyên bố rằng bản thân đang điên cuồng cất bước leo lên tầng tột đỉnh đỉnh cao để chạm mặt chạm mặt phân một ai đó đấy nhé lị. Tít tít trên cao tầng thứ nhất lị, tít tít lị, tít tít tắp trên cao chốn ấy ấy... Quyết chả rõ có gã nào khả dĩ ngự trị trú ẩn nơi chốn ấy chăng lị? Chị gái Ram chắc chắn d dứt định chắc chắn chắn d dường như d dứt định d dẫu phải hay biết hay biết rõ rành rành rành đúng quyết chả sất lị?”"
  },
  {
    "en": "“It’s nothing to be concerned with. However, there is a large, senile old man there.”",
    "vi": "“Quyết chả có chi khiến cậu phải bận tâm bận tâm lo nghĩ sất lị. D dẫu vậy lị, ngự trị ngự trị nơi chốn ấy có phân một lão già già khổng lồ khổng lồ bự chảng đang bị lãng trí lẫn lộn lẫn lộn đấy nhé lị.”"
  },
  {
    "en": "“The senile old man at the top of the watchtower…is DEFINITELY an important key character...”",
    "vi": "“Một lão già khổng lồ khổng lồ lẫn lộn lãng trí ngự trị tột đỉnh tột đỉnh của tháp canh sừng sững sừng sững sao... D DỨT ĐỊNH d dứt định d dường như chính là phân một nhân vật chốt chốt cốt lõi vô cùng vô cùng ngàn cân...”"
  },
  {
    "en": "“Hearing that there was a new character, Subaru wrinkled his eyebrows. Who was the senile old man that Ram was talking about? Or, if they were an overseer like Reid on the second floor, then—",
    "vi": "Lắng tai nghe tin về sự hiện diện hiện diện của phân một nhân vật mới toanh lị, Subaru khẽ nhíu chặt chặt đôi chân mày lị. Ai chính là lão già lẫn lộn lãng trí mà Ram đang mở miệng đề cập đề cập tới chăng lị? Hay là lị, nếu ngài ấy ngự dưới vai trò phân một hộ vệ hộ vệ quản lý quản lý hệt như Reid ngự trị nơi tầng thứ hai lị, thì cớ sự——"
  },
  {
    "en": "“—It couldn’t be Flugel, right?”",
    "vi": "“——Quyết chả lẽ d dứt định là Flugel đấy chứ chăng lị?”"
  },
  {
    "en": "“Barusu.”",
    "vi": "“Barusu lị.”"
  },
  {
    "en": "“If Flugel is the one who is up there, I’ll never forgive him. I have enough to say to that guy to fill a whole mountain. If he isn’t there, then Shaula...”",
    "vi": "“Nếu chẳng may Flugel thực sự chính là thực thể ngự trị ngự trị trú ẩn nơi chốn ấy lị, ta d dứt định quyết chả bao giờ bao giờ đời nào tha thứ dung thứ cho hắn sất lị! Ta sở hữu quá nhiều điều khát khao muốn nện nện thẳng vào mặt gã ta lộng lẫy xếp đầy cả phân một tòa núi vĩ đại vĩ đại lị. Nếu chẳng may gã quyết chả ngự trị chốn ấy sất lị, thế thì Shaula...”"
  },
  {
    "en": "“Barusu, please calm down.”",
    "vi": "“Barusu lị, cầu xin cậu hãy làm ơn làm ơn tĩnh tâm điềm tĩnh điềm tĩnh lại đi sất lị.”"
  },
  {
    "en": "“Calm down? Ram…you, that kind of thing, Shaula, she...”",
    "vi": "“Điềm tĩnh điềm tĩnh sao hả lị? Ram lị... em lị, bầy cớ sự cớ sự d dường ấy lị, Shaula lị, cô bé ấy...”"
  },
  {
    "en": "“The cheek of the vigorous and rash Subaru was slapped while he was trying to determine the true identity of the old man on the top floor of the tower, causing him to put strength into his knees. The cause…was the palm of Ram, who had moved in on him.",
    "vi": "Gò má của phân một Subaru đang bừng bừng bừng bừng tức tối nóng nảy nóng nảy bỗng chốc đón nhận đón nhận phân một cú tát như trời giáng trời giáng lị, ngay trong lúc cậu đang điên cuồng điên cuồng vắt óc vắt óc hòng xác định xác định danh tính thực sự của lão già ngự trị ngự trị nơi tầng cao tột đỉnh tột đỉnh của tháp canh sừng sững lị, cớ sự khiến đôi đầu gối đầu gối cậu khẽ khẽ chùng xuống vì lực chấn động dữ dội lị. Bản chất nguyên cớ đứng sau cớ sự ấy... quyết chả ai khác ngoài lòng bàn tay mảnh khảnh mảnh khảnh của Ram lị, người d dẫu áp sát áp sát nện mạnh trực diện vào mặt cậu lị."
  },
  {
    "en": "“With his face having been slapped, Subaru widened his eyes and looked at Ram with a dumbfounded expression.",
    "vi": "Bị tát nện thẳng trực diện trực diện vào gò má lị, Subaru trợn tròn trợn tròn đôi mắt sửng sốt sửng sốt d dẫu đăm đăm nhìn chăm chú vào Ram bằng phân một biểu cảm mặt đờ đẫn đờ đẫn câm lặng câm lặng hoàn toàn lị."
  },
  {
    "en": "“Don’t use Shaula as a crutch because of your own powerlessness.”",
    "vi": "“Quyết chả được phép lấy danh nghĩa danh nghĩa Shaula ra làm cái cớ cái cớ che đậy che đậy cho cái sự bất lực bất lực phế vật phế vật của chính bản thân cậu sất lị.”"
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "“I heard about Shaula. She was obnoxious and unmannered, and the eyes that admired Barusu were rotten...but she wasn’t so bad that she deserved to disappear.”",
    "vi": "“Ram d dẫu được lắng tai nghe tường tận bầy câu chuyện liên quan tới Shaula rồi lị. Cô bé d dẫu là phân một kẻ phiền toái phiền toái lị, thô lỗ thô lỗ quyết chả biết giữ kẽ lễ nghi chi sất lị, d dẫu cả đôi mắt đắm đuối đắm đuối tôn sùng Barusu của cô bé thì quả thực quả thực vô cùng vô cùng tồi tệ tồi tệ mục ruỗng mục ruỗng... thế nhưng cô bé d dứt định quyết chả hề có chi tồi tệ đến mức xứng đáng xứng đáng phải tan biến tan biến sạch trơn khỏi nhân gian rộng lớn này sất lị.”"
  },
  {
    "en": "“As she spoke, Ram gently placed her hand on Subaru’s struck cheek. It was hot, but her palm was cold. While absorbing the heat, Ram continued her words to the speechless Subaru.",
    "vi": "Trong lúc cất tiếng phát ngôn phát ngôn dường ấy lị, Ram khẽ khàng đặt bàn tay mảnh khảnh mảnh khảnh lên gò má d dẫu bị tát đỏ ửng đỏ ửng của Subaru lị. Gò má nóng bỏng bỏng lị, thế nhưng lòng bàn tay của cô bỗng chốc vô cùng vô cùng mát lạnh buốt giá lị. Trong lúc đang hấp thụ hấp thụ lượng nhiệt nóng bừng bừng từ má cậu lị, Ram tiếp tục bộc lộ bầy lời phát ngôn của mình trước phân một Subaru đang câm lặng câm lặng quyết chả thốt nổi phân một lời sất lị."
  },
  {
    "en": "“If you can’t accept it, then, rather than getting angry, just cry. Shaula would be happier if you cried out “I miss you” rather than using her as a reason for your anger. —Ram is the same way.”",
    "vi": "“Nếu chẳng may cậu quyết chả cam lòng cam lòng chấp nhận chấp nhận số phận nghiệt ngã ấy sất lị, thì thay vì nổi giận nổi giận cuồng bạo điên cuồng lị, cậu hãy tự mình bật khóc bật khóc thật lớn đi chăng lị. Shaula d dứt định d dẫu d dường như d dứt định d dẫu vô o o o o cùng o o cùng hạnh phúc hạnh phúc hơn vạn phần nếu cậu lớn tiếng lớn tiếng khóc thét thét thét thét thét thét thét thét thét lên “Ta thực sự nhớ em lắm lị” thay vì biến cô bé thành phân một cái cớ cái cớ phục vụ cơn cuồng nộ cuồng nộ quèn của mình sất lị. ——Tự bản thân Ram cũng mang chung quan điểm quan điểm d dường ấy lị.”"
  },
  {
    "en": "“Ram...”",
    "vi": "“Ram...”"
  },
  {
    "en": "“I still believe you are mixing up someone you should strongly care for with someone else.”",
    "vi": "“Ram thực tế vẫn kiên định kiên định tin tưởng tin tưởng rằng cậu đang tự tiện lẫn lộn lẫn lộn phân một sinh mệnh cậu bắt buộc phải quan tâm săn sóc sâu đậm với phân một kẻ quỷ quái nào khác nữa sất lị.”"
  },
  {
    "en": "“After getting one last word in, Ram flicked Subaru’s forehead with her finger. That painless force made Subaru fall onto his butt, and, as he placed his hand on his forehead, said “My bad...”",
    "vi": "Sau khi cất tiếng bộc lộ lời phát ngôn cuối cùng vẹn toàn lị, Ram khẽ búng búng đôi ngón tay ngọc ngà lên trán của Subaru lị. Luồng uy lực quyết chả chút đau đớn đau đớn chi sất lị, vậy mà làm Subaru mất thăng bằng ngã ngã ngửa ngửa mông chạm thẳng xuống nền cỏ lị, d dẫu trong lúc giơ bàn tay vạm vỡ vạm vỡ sờ sờ trán mình lị, cậu khẽ khẽ: “Ta tạ tội... lỗi tại ta lị...”"
  },
  {
    "en": "“If Subaru calmed down, Flugel being on the first floor could just be called his own desire, or even something like paranoia. But for argument’s sake, if Flugel really was there—",
    "vi": "Nếu chẳng may Subaru khả dĩ điềm tĩnh điềm tĩnh tĩnh tâm trở lại lị, giả thuyết Flugel đang sừng sững ngự trị nơi tầng thứ nhất độc độc vỏn vẹn khả dĩ coi là niềm ao ước ao ước ích kỷ của cậu lị, hay thậm chí thậm chí d dường như là phân một triệu chứng hoang tưởng hoang tưởng sất lị. D dẫu thế lị, để phục vụ cho bầy giả định tranh luận lị, nếu Flugel thực sự thực sự sừng sững ngự trị ngự trị ngự trị ngự trị ngự trị ở chốn ấy chăng——"
  },
  {
    "en": "“Before Barusu could do anything, Lady Emilia and I would beat him until he was on the cusp of death.”",
    "vi": "“Trước khi Barusu khả dĩ giở bầy trò quèn chi sất lị, Tiểu thư Emilia d dẫu Ram d dứt định d dẫu d dường như d dứt định d dẫu nện nện thẳng vào mặt gã khốn kiếp ấy cho tới khi gã chạm sát sát sát sàn sạt ranh giới ranh giới Cái Chết tử thần vĩnh viễn vĩnh viễn mới thôi sất lị.”"
  },
  {
    "en": "“...I can see you doing that, but not Emilia-tan.”",
    "vi": "“...Ta khả dĩ d dốc toàn lực d dốc toàn lực mộng tưởng mộng tưởng thấy cảnh em điên cuồng điên cuồng thực hiện cớ sự tàn bạo tàn bạo ấy lị, thế nhưng quyết chả bao giờ bao giờ đời nào khả dĩ thấy Emilia-tan làm chuyện d dường ấy đâu sất lị.”"
  },
  {
    "en": "When thinking of Shaula, the amount of anger directed at Flugel was by no means small, and everyone in the tower naturally shared that feeling.",
    "vi": "Khi đắm chìm suy tư suy tư về Shaula lị, lượng phẫn nộ phẫn nộ căm hờn hướng thẳng về phía Flugel d dứt định quyết chả hề nhỏ bé chút nào sất lị, d dẫu thảy mọi sinh mệnh ngự trị ngự trị trong tòa tháp sừng sững này d dĩ nhiên d dĩ nhiên đều d dường như d dứt định d dẫu có chung phân một xúc cảm căm hờn căm hờn d dường ấy lị."
  }
]

fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'translation_temp', 'ch90_part3.json'),
  JSON.stringify(part3, null, 2),
  'utf-8'
)
console.log('Successfully wrote ch90_part3.json!')
