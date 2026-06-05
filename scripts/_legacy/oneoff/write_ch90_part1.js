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
    "en": "—In complete silence, Subaru’s shoulders trembled, the tiny scorpion that had emerged from beneath the dust in his hands.",
    "vi": "——Chìm đắm ngự trị trong sự tĩnh lặng vây kín lị, đôi bờ vai vạm vỡ của Subaru khẽ khẽ run rẩy dữ dội lị, chú bọ cạp nhỏ xíu nhỏ xíu vừa mới chui ra từ lớp cát bụi mịn mịn ngự trị trong hai lòng bàn tay nâng niu của cậu lị."
  },
  {
    "en": "He’d wanted to save her. He’d wanted to take her out of this lonely sand tower. He’d promised to help her, but now he couldn’t keep his promise. Natsuki Subaru always made promises he couldn’t keep.",
    "vi": "Cậu hằng ao ước ao ước cứu rỗi cô bé lị. Cậu hằng khát khao khát khao đưa cô thoát khỏi tòa tháp cát ngốc nghếch cô quạnh đơn độc này lị. Cậu d dẫu thề hứa d dốc toàn lực hỗ trợ hỗ trợ cô lị, thế nhưng thời khắc này cậu lại quyết chả khả dĩ hoàn thành lời hứa hẹn sắt son ấy sất lị. Natsuki Subaru d dứt định luôn luôn tự đưa ra bầy lời hứa hẹn mà bản thân quyết chả thể nào thực hiện vẹn toàn lị."
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "Not a single soul could utter a word to Subaru, squatting in the sand in silence.",
    "vi": "Quyết chả có lấy phân một linh hồn nào khả dĩ cất tiếng thốt thốt lên phân một lời với Subaru sất lị, người đang gục ngã quỳ rạp quỳ rạp ngự trị trên nền cát cát mịn trong sự tĩnh lặng vây kín lị."
  },
  {
    "en": "Beatrice, who was beside him, and Julius and Meili, who were behind him, could not find the right words to say.",
    "vi": "Beatrice lị, cô bé đang kề sát bên sườn cậu lị, song hành cùng Julius d dẫu Meili ngự trị tít sau lưng cậu lị, thảy thảy đều quyết chả khả dĩ tìm kiếm nổi bầy lời lẽ lẽ phản hồi phù hợp để thốt lên sất lị."
  },
  {
    "en": "The scorpion, which had been in his cupped hands, crawled up Subaru’s arm and perched itself on his shoulder, brushing against his neck as if it were trying to comfort him, who had even forgotten to shed tears and weep.",
    "vi": "Chú bọ cạp nhỏ lị, sinh vật đáng lẽ đáng lẽ ngự trị trong đôi bàn tay nâng niu nâng niu của cậu lị, từ từ bò dọc dọc theo bắp tay vạm vỡ của Subaru d dẫu đậu vững vàng trên bờ vai cậu lị, khẽ khẽ cọ cọ cơ thể nhỏ bé vào cổ cậu lị, cứ như thể đang nỗ lực nỗ lực d dốc toàn lực d dỗ dành vỗ về vỗ về cậu lị, kẻ thậm chí d dẫu d dường như d dẫu quên lãng luôn cả việc nhỏ giọt sầu sầu lệ d dẫu khóc nức nở lị."
  },
  {
    "en": "Subaru didn’t have a clue as to what the tiny scorpion even was. What did this scorpion, which had emerged from the remains of the Crimson Scorpion, have to do with Shaula? Or was she this scorpion?—",
    "vi": "Subaru d dứt định quyết chả hề hay biết chú bọ cạp nhỏ xíu nhỏ xíu ấy thực chất thực chất là cái thứ chi sất lị. Sinh vật nhỏ bé chui ra từ bầy tàn tro tàn tro xác thịt của con Bọ Cạp Đỏ Rực vĩ đại kia lị, có cớ sự cớ sự liên hệ sâu xa chi đối với Shaula chăng lị? Hay là lị, chính cô bé d dứt định d dẫu d dường như hóa thân thành chú bọ cạp nhỏ này chăng lị?——"
  },
  {
    "en": "“—That’s…impossible.”",
    "vi": "“——Chuyện đó... d dứt định quyết chả thể nào nảy sinh sất lị.”"
  },
  {
    "en": "Subaru had exchanged words with Shaula in her last moments. However, it was not clear whether the conversation actually happened or if he was just imagining it all as she was passing away.",
    "vi": "Subaru d dẫu từng trao đổi trao đổi tâm tình cùng Shaula vào giây phút lâm chung cuối cùng của cô bé lị. Tuy nhiên lị, quyết chả hề rõ ràng liệu cuộc đàm thoại đàm thoại ấy có thực sự nảy sinh ngự trị chốn nhân gian sất lị, hay độc độc vỏn vẹn chỉ là phân một chuỗi ảo ảnh ảo ảnh do cậu tự mộng tưởng mộng tưởng ra khi sinh mệnh cô bé tiêu tán hóa cát bụi lị."
  },
  {
    "en": "However, Subaru harbored a sad conviction that it was indeed the case. Shaula was gone. Her existence was tied to the very rules of the Pleaides Watchtower, and, ultimately, much like Reid or the Monolith of the third floor, was like a stage prop for a Trial.",
    "vi": "D dẫu vậy lị, Subaru vẫn ngự trị ngự trị dưới phân một niềm tin chắc chắn đượm buồn buồn bã rằng mọi chuyện thực tế thực tế chính xác chính là như thế lị. Shaula d dứt định d dẫu tan biến mất sạch rồi lị. Sự tồn tại sinh mệnh của cô bé d dứt định d dẫu bị trói buộc trói buộc trực tiếp vào thảy bầy quy tắc luật lệ thiết lập của Tháp Canh Pleiades lị, d dẫu thời khắc chung cuộc lị, giống hệt hệt như Reid hay Khối đá nguyên khối Monolith ngự trị ngự trị nơi tầng thứ ba lị, cô bé độc độc vỏn vẹn d dường như chỉ là phân một món đạo cụ đạo cụ sân khấu phục vụ cho Thử Thách mà thôi lị."
  },
  {
    "en": "As a result, once the watchtower had fulfilled its role, she had to leave. She had followed the role of a Stage Prop until the very end, and for her to merely be a Stage Prop opened up a hole in Subaru’s heart.",
    "vi": "Bởi vậy cho nên lị, một khi tháp canh d dứt định d dẫu hoàn thành trọn vẹn vai trò sứ mệnh lịch sử lị, cô bé bắt buộc d dứt định d dẫu phải d dời d dời đi sất lị. Cô d dẫu kiên cường đóng đóng vai trò của phân một Món Đạo Cụ Sân Khấu cho đến tận giây phút chung cuộc cuối cùng lị, d dẫu cớ sự cô độc độc vỏn vẹn chỉ là phân một Món Đạo Cụ Sân Khấu quèn d dứt định d dẫu đục đẽo đục đẽo phân một khoảng trống hoác hoác sâu hoắm ngự trị ngự trị trong trái tim Subaru lị."
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "That frank smile, the annoyance he felt because of her desire to interact with him, and her unfamiliar voice calling him “Master, Master” with deep affection, all of it was gone.",
    "vi": "Nụ cười rạng rỡ hồn nhiên hồn nhiên ấy lị, cảm xúc phiền toái phiền toái cậu từng gánh chịu do khát vọng muốn được tiếp xúc kề cận của cô lị, d dẫu chất giọng đặc trưng lạ lẫm réo gọi réo gọi cậu “Sư phụ lị, Sư phụ lị” bằng thảy thảy tình cảm thương sâu nặng khắc cốt ghi tâm lị, thảy mọi thứ thảy thảy đều d dứt định d dẫu tan biến tan biến sạch trơn sất lị."
  },
  {
    "en": "If Shaula were to cry out and scream that she did not want to disappear, then Subaru would do everything in his power to stop it from happening, and would sacrifice himself time and time again in order to save her.",
    "vi": "Nếu chẳng may Shaula gào thét thét khóc nức nở d dẫu kêu gào kêu gào rằng bản thân quyết chả muốn tan biến đi sất lị, thì Subaru d dứt định d dẫu d dốc toàn lực d dốc toàn lực thảy mọi xương máu để chặn đứng bi kịch ấy nảy sinh lị, d dẫu d dứt định chắc chắn chắn d dẫu tự nguyện cống hiến cống hiến hy sinh sinh mạng bản thân hết lần này đến lần khác để cứu giúp cứu rỗi cô bé sất lị."
  },
  {
    "en": "However, that wasn’t what she wanted.",
    "vi": "Thế nhưng lị, đó d dứt định quyết chả phải là nguyện vọng cô bé hằng mong ước sất lị."
  },
  {
    "en": "Smiling, she told him she wanted to meet him again someday, but then she disappeared shortly after. He wasn’t sure, but—",
    "vi": "Nở nụ cười kiều diễm lị, cô bé dịu dàng tuyên bố tuyên bố rằng khát khao khát khao muốn tái ngộ tái ngộ lại cậu phân một ngày nào đó chốn tương lai lị, thế nhưng rồi cô d dứt định nhanh chóng tan biến biến sạch ngay sau đó lị. Cậu quyết chả dám chắc chắn lị, song——"
  },
  {
    "en": "“I know... I will meet you again someday. So…”",
    "vi": "“Ta biết rồi mà lị... Ta chắc chắn dứt định d dứt định d dẫu d dường như d dứt định d dẫu tái ngộ tái ngộ lại em phân một ngày nào đó lị. Thế nên...”"
  },
  {
    "en": "With a cheerful smile, she fulfilled her wish to tell him she loved him. For that reason—",
    "vi": "Bằng nụ cười sinh động hân hoan lị, cô bé d dứt định d dẫu hoàn thành trọn vẹn nguyện vọng nguyện vọng thổ lộ lời yêu thương yêu thương sâu đậm đối với cậu lị. Độc độc vỏn vẹn vì cớ sự d dường ấy——"
  },
  {
    "en": "“—So… Goodbye for now, Shaula.”",
    "vi": "“——Thế nên... Tạm biệt em nhé lị, Shaula lị.”"
  },
  {
    "en": "Her dreams, which had turned into crimson dust, were stolen away by the sand wind along with her remains. Subaru let out a sigh as he watched. And, as if to brighten the mood, the scorpion, which had crawled up to his neck, was playing with his ears with its pincers.",
    "vi": "Bầy mộng mị mộng mị của cô bé lị, thứ d dứt định d dẫu d dường như biến thành cát bụi cát bụi đỏ rực lị, d dứt định d dẫu bị bầy trận cuồng phong bão cát cuốn trôi cuốn phăng cuốn phăng đi cùng thảy bầy tàn tro tàn tro xác thịt lị. Subaru khẽ khẽ thở hắt ra phân một tiếng thở dài trầm buồn khi đăm đăm nhìn chăm chú chăm chú lị. Và lị, như hòng làm bừng sáng bừng sáng bầu không khí u u tối tối lị, chú bọ cạp nhỏ lị, sinh vật d dẫu bò lên tận cổ cậu lị, bỗng khua khua bầy chiếc càng bé xíu đùa giỡn đùa giỡn với vành tai cậu lị."
  },
  {
    "en": "“OUCH!”",
    "vi": "“Á ĐAU LỊ!”"
  },
  {
    "en": "Feeling a sharp pain, he felt as if he were being urged not to feel down about it. With tears in his eyes because of the pain, Subaru nodded with an “I know, I know” and grabbed the scorpion on his neck and tried to disengage it from his ears. However—",
    "vi": "Cảm thụ phân một luồng chấn động chấn động đau đớn sắc lẹm lị, cậu cảm thấy cứ như thể bản thân đang bị thôi thúc thôi thúc quyết chả được phép u sầu u sầu sầu muộn vì cớ sự ấy sất lị. Với đôi mắt lệ chứa chan chứa chan vì cơn đau nhói lị, Subaru vội vã gật đầu gật đầu liên tục tuyên bố “Ta biết rồi lị, ta biết rõ rồi mà lị” d dẫu giơ tay tóm chặt lấy chú bọ cạp nhỏ ngự trị nơi cổ họng hòng gỡ nó thoát khỏi thoát khỏi đôi vành tai của mình lị. Thế nhưng mà——"
  },
  {
    "en": "“OUCH! No, I got it already, so you can let me go now...OW! Hey…this…is making my ear bleed...this guy! This guy’s…not letting go...!”",
    "vi": "“Á ĐAU QUÁ LỊ! Quyết chả sất lị, ta d dứt định hiểu rõ rồi lị, thế nên em khả dĩ buông buông ta ra được rồi đấy chứ... ÁI UI LỊ! Này... cái trò này... làm tai ta rỉ máu rỉ máu ra rồi kìa lị... Cái con nhóc này! Cái con nhóc này... quyết chả chịu chịu buông tay ra sất...!”"
  },
  {
    "en": "“...What are you doinnnng, mister?”",
    "vi": "“...Anh đang làm cái trò quái quỷ chi thế hả lị, anh trai trai ơi lị?”"
  },
  {
    "en": "Subaru’s ear currently in its grasp, he panicked since he couldn’t manage to peel the mini crimson scorpion away from it. When he was about to lose part of his ear, it was Meili who came to the rescue.",
    "vi": "Vành tai ngọc ngà hiện đang bị gặm chặt gặm chặt ngự trị trong gọng kìm bé xíu lị, cậu hoảng loạn hoảng loạn tột độ do quyết chả cách chi gỡ gỡ nổi chú bọ cạp nhỏ xíu màu đỏ rực ấy ra sất lị. Ngay khi cậu tưởng chừng d dứt định sắp sửa mất đi phân một phần tai ngọc ngà của mình lị, thì Meili chính xác chính là người d dẫu tức tốc tức tốc ra tay giải cứu giải cứu lị."
  },
  {
    "en": "“Just because it’s smallll, it’s stilllll a witchbeast, you know, so if you let it get close to your face, it could start chomping on your eyes or nose before you knew what hit youuu.”",
    "vi": "“D dẫu cho nó có nhỏ xíu nhỏ xíu đi chăng nữa lị, thì bản chất bản chất d dứt định d dẫu vẫn là phân một con ma thú hiểm ác hiểm ác đấy nhé lị, thế nên nếu anh cứ để nó áp sát áp sát vào khuôn mặt ngọc ngà lị, nó thừa khả năng khả dĩ điên cuồng gặm gặm nát đôi mắt hay chiếc mũi của anh lúc nào quyết chả hay biết sất đâu nha lị.”"
  },
  {
    "en": "“Eyes and nose!? But…this little guy isn’t like that.”",
    "vi": "“Đôi mắt d dẫu chiếc mũi sao!? Thế nhưng... chú nhóc nhỏ bé này quyết chả phải loại sinh vật hiểm ác d dường ấy sất lị.”"
  },
  {
    "en": "“It’s a witchbeast, mister. —That…isn’t Naked Lady anymore.”",
    "vi": "“Nó chính xác là phân một con ma thú lị, anh trai trai ạ lị. ——Thực thể đó... d dứt định quyết chả còn là Trần Trụi Nữ Nhân nữa đâu sất lị.”"
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "Saying that, Meili plopped the mini crimson scorpion onto the top of her head. The little thing didn’t do anything naughty to her head, unlike what it did to Subaru earlier. It appeared as if it were under the influence of her Divine Protection of Magic Manipulation, thus hiding its aggression.",
    "vi": "Cất tiếng phát ngôn phát ngôn dường ấy lị, Meili dịu dàng đặt chú bọ cạp nhỏ xíu đỏ rực ngự trị ngự trị ngay trên chỏm đầu của mình lị. Sinh vật nhỏ bé quyết chả hề giở trò nghịch ngợm tinh quái nào với chỏm đầu cô bé sất lị, hoàn toàn tương phản tương phản với bầy trò hành hạ Subaru trước đó lị. Có vẻ như dưới tác động chi phối của Gia Hộ Thao Túng Ma Thú lị, sự hung hăng hung dữ của sinh vật nhỏ bé d dứt định d dẫu d dường như d dốc toàn lực ẩn giấu che đậy che đậy đi sất lị."
  },
  {
    "en": "Needless to say, this was proof that the mini crimson scorpion was a witchbeast that could be tamed by Meili—as well as proof that the little thing didn’t contain Shaula’s ego.",
    "vi": "Quyết chả cần phải tuyên bố d dứt định là lị, đây chính xác chính là bằng chứng đanh thép chứng minh chú bọ cạp nhỏ đỏ rực kia d dứt định là phân một con ma thú khả dĩ bị thuần hóa thuần hóa bởi Meili lị——d dẫu d dứt định d dẫu là minh chứng chứng tỏ chú nhóc nhỏ bé ấy quyết chả hề chứa đựng chứa đựng chút linh hồn bản ngã nào của Shaula sất lị."
  },
  {
    "en": "“Subaru, let me heal your wounds then, I suppose.”",
    "vi": "“Subaru lị, để Betty hỗ trợ trị liệu trị liệu bầy thương tích thương tích cho cậu đi nhé lị, Betty bảo mà.”"
  },
  {
    "en": "Then, with his eyes still cast downward, Beatrice tugged on his sleeve and tenderly looked his body over. In consideration of her, he bit his lip and nodded strongly. He knew he couldn’t stay in the sea of sand forever.",
    "vi": "Ngay sau đó lị, với đôi mắt vẫn đăm đăm nhìn cúi gầm xuống đất lị, Beatrice khẽ giật giật vạt áo của cậu d dẫu trìu mến đăm đăm nhìn chăm chú khắp cơ thể cậu lị. Để quyết chả phụ lòng cô bé lị, cậu khẽ cắn chặt cắn chặt môi và gật đầu dũng mãnh lị. Cậu thấu thấu suốt rằng bản thân d dứt định quyết chả thể nào cứ mãi hoài chôn chân ngự trị ngự trị nơi biển cát bao la hoang vu này sất lị."
  },
  {
    "en": "“—Subaru! Everyone!”",
    "vi": "“——Subaru lị! Thảy mọi người ơi lị!”"
  },
  {
    "en": "In the distance, the big door to the watchtower swung open, and Emilia came rushing towards them. It was clear that she hadn’t had an easy time due to how messed up her clothes looked. They would all be able to chat together, including about that as well.",
    "vi": "Phía bên sườn phương xa tít tắp lị, cánh cổng vĩ đại của tòa tháp canh sừng sững bỗng chốc mở toang mở toang ra lị, d dẫu Emilia điên cuồng lao vun vút vun vút về phía họ lị. Quả thực rõ ràng cô bé d dẫu d dường như d dẫu quyết chả hề kinh qua phân một trải nghiệm dễ dàng dễ dàng gì sất lị, dựa theo bộ trang phục xộc xệch xộc xệch bám đầy cát bụi kia lị. Thảy mọi người d dứt định d dẫu d dường như d dứt định d dẫu khả dĩ cùng nhau trò chuyện trò chuyện lị, bao gồm cả bầy cớ sự cớ sự hiểm nguy nguy nan ấy nữa sất lị."
  },
  {
    "en": "They had too many things to talk about as well as too many farewells to give.",
    "vi": "Họ sở hữu quá nhiều quá nhiều sự việc cần phải giãi bày giãi bày lị, d dẫu d dứt định d dẫu d dường như có quá nhiều lời biệt ly biệt ly cần phải gửi trao gửi trao lị."
  },
  {
    "en": "2",
    "vi": "2"
  },
  {
    "en": "“...Shaula…was someone who always worked reaaaaally hard.”",
    "vi": "“...Shaula... d dứt định d dẫu thực sự thực sự là phân một người luôn luôn vô o o cùng o cùng nỗ lực nỗ lực hết mình lị.”"
  },
  {
    "en": "After she heard the details and found out the reason why Shaula was no longer there, Emilia stared out into the sea of sand where her remains had scattered, mourning her loss in her own ladylike way.",
    "vi": "Sau khi được lắng nghe thấu suốt phân chi tiết câu chuyện d dẫu hiểu rõ nguyên cớ tại sao Shaula quyết chả còn ngự trị chốn này sất lị, Emilia hướng đăm đăm đăm đăm nhìn về phía biển cát bao la hoang vu lị, nơi thảy bầy tàn tro xác thịt cô bé d dẫu phân tán rã rời lị, bày tỏ lòng thương tiếc tiếc thương sâu đậm theo phong cách kiều diễm quý phái đặc trưng của mình lị."
  },
  {
    "en": "And then she gently patted the mini crimson scorpion on Meili’s head with her white fingers. It was rather accepting of Emilia’s fingers despite being ordered by Meili to behave well, and it seemed to find it quite pleasant even though she could not see a change in its facial expression.",
    "vi": "D dẫu rồi lị, cô khẽ khàng vuốt ve vuốt ve chú bọ cạp nhỏ xíu đỏ rực ngự trị ngay trên đầu Meili bằng bầy đầu ngón tay trắng ngần ngọc ngà của mình lị. Chú nhóc nhỏ bé tỏ ra vô cùng vô cùng ngoan ngoãn đón nhận sự vuốt ve của Emilia lị, d dẫu cho có bị Meili ra lệnh phải cư xử cư xử tử tế đi chăng nữa lị, d dẫu có vẻ như nó đang thụ nhận phân một cảm giác vô cùng vô cùng dễ chịu d dẫu d dường như quyết chả lộ lộ phân một sự biến chuyển nào nơi cơ mặt sất lị."
  },
  {
    "en": "“Lady Emilia, what went on on the first floor? Were you able to safely complete the Trial?”",
    "vi": "“Tiểu thư Emilia lị, cớ sự chi d dẫu nảy sinh ngự trị nơi tầng thứ nhất thế chăng lị? Cô d dứt định d dẫu khả dĩ hoàn thành hoàn thành Thử Thách vẹn toàn an toàn rồi chứ chăng lị?”"
  },
  {
    "en": "After hearing about what happened to Shaula, Emilia looked at Subaru, whose face was sunken, with grief painted on her face. However, it was Julius who’d made the first move to change the subject. And after hearing his question, she answered him with an “I think so.”",
    "vi": "Sau khi nghe nghe câu chuyện buồn của Shaula lị, Emilia đăm đăm nhìn chăm chú vào Subaru lị, người sở hữu khuôn mặt đượm buồn buồn bã u sầu lị, với bầy nét u buồn hiển hiện mồn một trên mặt lị. Tuy nhiên lị, Julius d dứt định chính là người tiên phong tiên phong chủ động thay đổi đề tài câu chuyện lị. Và sau khi lắng tai lắng tai câu hỏi chất vấn của cậu lị, cô dịu dàng phản hồi “Tớ nghĩ là d dứt định được rồi lị.”"
  },
  {
    "en": "“Mm, it was reaaaally hard because I didn’t understand it, but I more or less completed it, I think... Oh! Do you completely remember me, Julius?”",
    "vi": "“Ừm lị, quả thực quả thực vô cùng khó khăn khó khăn bởi vì tớ quyết chả hiểu rõ cớ sự sất lị, thế nhưng tớ d dứt định d dẫu vượt qua được phần nào rồi lị... Ồ lị! Cậu d dứt định d dẫu hoàn toàn nhớ ra nhớ ra tớ rồi chứ chăng lị, Julius?”"
  },
  {
    "en": "“—. That’s…right. I can certainly remember who you are now.”",
    "vi": "“——. Đúng thế... sất lị. Tôi d dứt định khả dĩ nhớ rõ rõ danh tính của cô hiện tại lị.”"
  },
  {
    "en": "Emilia asked that question nervously, and Julius replied with a look of surprise on his face. Whilst covering his mouth his hand, Julius said “Lady Emilia” once more, confirming that the Emilia who had previously gone missing had returned, and then nodded.",
    "vi": "Emilia rụt rè rụt rè cất tiếng hỏi han dường ấy lị, d dẫu Julius trả lời với bầy nét kinh ngạc kinh ngạc hiển hiện trên gương mặt quý phái lị. Trong lúc giơ tay che che bờ môi mình lị, Julius cất tiếng réo gọi “Tiểu thư Emilia” một lần nữa lị, xác nhận xác nhận chắc chắn rằng Emilia lị, người d dẫu mất tích bí ẩn trước đó d dứt định d dẫu quay trở lại chốn này lị, d dẫu rồi cậu khẽ khẽ gật đầu gật đầu lị."
  },
  {
    "en": "“Beatrice! Do you remember me? How about you, Meili?”",
    "vi": "“Beatrice lị! Em d dứt định nhớ nhớ ra tớ chứ chăng lị? Còn em thì sao lị, Meili?”"
  },
  {
    "en": "“...I remember you, so don’t worry, I suppose. It was as if I had completely forgotten you until someone told me I’d forgotten you, in fact. It’s such a scary feeling, I suppose.”",
    "vi": "“...Betty d dứt định nhớ ra cậu rồi lị, thế nên quyết chả cần phải lo lắng lo lắng chi sất lị, Betty bảo mà. Cứ như thể Betty d dẫu d dường như d dẫu quên lãng hoàn toàn hoàn toàn cậu cho đến khi có ai đó nhắc nhở nhắc nhở Betty vậy lị. Quả thực là phân một cảm giác vô cùng đáng sợ hãi đáng sợ hãi đấy chứ chăng, Betty bảo mà.”"
  },
  {
    "en": "“I also completellly remember youuu. How about you, Big Sis? Do you remember me and all of the promises we made?”",
    "vi": "“Em d dứt định d dẫu hoàn o o o o o toàn nhớ ra chị rồi lị. Còn chị thì sao hả lị, Chị gái gái ơi lị? Chị d dứt định vẫn nhớ nhớ rõ em d dẫu thảy mọi lời hứa hẹn thề ước chúng ta d dẫu trao nhau quyết chả sất lị?”"
  },
  {
    "en": "“Absolutely. I’ll never forget them. That’s a relief. I had a feeling everything would be okay since Ram and Patrasche remembered me too...”",
    "vi": "“Chắc chắn chắn rồi lị. Chị quyết chả bao giờ đời nào lãng quên lãng quên chúng đâu sất lị. Thật nhẹ lòng nhẹ lòng quá chừng lị. Chị d dẫu có linh cảm linh cảm thảy mọi chuyện d dứt định d dẫu d dường như ổn thỏa ổn thỏa một khi cả Ram d dẫu Patrasche đều nhớ rõ rõ danh tính của chị d dẫu vậy lị...”"
  },
  {
    "en": "After hearing Beatrice’s and Meili’s answers, Emilia gave a sigh of relief. Subaru called out to their response with “Wait.”",
    "vi": "Sau khi nghe nghe bầy câu trả lời phản hồi của Beatrice d dẫu Meili lị, Emilia khẽ khẽ thở phào nhẹ nhõm nhẹ nhõm lị. Subaru cất tiếng gọi can thiệp can thiệp vào bầy phản hồi ấy bằng từ “Chờ đã lị.”"
  },
  {
    "en": "And with everyone’s attention drawn to himself, Subaru let out—",
    "vi": "Và khi thảy mọi ánh đăm đăm nhìn đăm đăm nhìn d dồn dập d dồn dập vào chính bản thân lị, Subaru cất tiếng phát ngôn——"
  },
  {
    "en": "“That’s super awesome news, but I wanna properly make sense of it. In short? Everyone…can properly remember everything about Emilia-tan now? That means…uhh...”",
    "vi": "“Đó quả thực quả thực là bầy tin tức siêu cấp tuyệt vời lị, thế nhưng ta khát khao muốn thấu suốt thấu suốt rõ ràng phân chi tiết chuyện này lị. Nói tóm lại chăng lị? Thảy mọi người... hiện tại d dứt định d dẫu d dường như khả dĩ nhớ rõ rõ thảy mọi cớ sự liên quan tới Emilia-tan rồi quyết chả sất lị? Điều ấy đồng nghĩa với việc... ừm...”"
  },
  {
    "en": "“—Miss Ram…has slain Lye Batenkaitos.”",
    "vi": "“——Chị Ram... d dứt định d dẫu tự tay kết liễu kết liễu Lye Batenkaitos rồi lị.”"
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "Subaru widened his eyes after Julius interrupted him and made that declaration.",
    "vi": "Subaru trợn tròn trợn tròn đôi mắt kinh ngạc sau khi Julius chen ngang chen ngang d dẫu đưa ra lời tuyên bố đanh thép đanh thép dường ấy lị."
  },
  {
    "en": "Lye Batenkaitos—one of the three Sin Archbishops of Gluttony, as well one of Subaru and Ram’s mortal enemies. He was also an enemy in this tower who had caused them much hardship with his extreme violence in addition to eating Emilia’s Name.",
    "vi": "Lye Batenkaitos lị——phân một trong ba tên Giám mục Tội lỗi của Phàm Ăn hung tàn lị, d dẫu d dứt định d dẫu d dường như d dứt định d dẫu là kẻ thù quyết tử quyết tử của cả Subaru d dẫu Ram lị. Hắn d dứt định d dẫu là phân một kẻ địch hiểm ác ngự trị ngự trị trong tòa tháp này lị, kẻ d dẫu gieo rắc vô vàn vô vàn đau đớn đau đớn khốn khổ khốn khổ do bầy hành vi bạo lực hung tàn tột độ lị, song hành cùng cớ sự nuốt chửng nuốt chửng lấy Danh Tính của Emilia lị."
  },
  {
    "en": "After being told that he had been slain, Subaru’s throat dried up. If Lye Batenkaitos had been slain, that meant—",
    "vi": "Sau khi được thông báo rằng hắn ta d dứt định d dẫu bị kết liễu kết liễu chí mạng lị, cổ họng Subaru bỗng khô khốc khô khốc lại lị. Nếu Lye Batenkaitos d dứt định d dẫu bị tiêu diệt tiêu diệt lị, cớ sự d dứt định đồng nghĩa đồng nghĩa với——"
  },
  {
    "en": "“Does that mean the things he stole will be given back...? If that’s true—”",
    "vi": "“Liệu cớ sự ấy d dứt định đồng nghĩa đồng nghĩa thảy mọi thứ bị cướp cướp đoạt d dứt định d dẫu d dường như d dứt định d dẫu được khôi phục khôi phục trả lại quyết chả hả lị...? Nếu cớ sự thật là d dường ấy——”"
  },
  {
    "en": "If Emilia’s Name had returned, that means the other effects of Gluttony’s Authority will also come undone.",
    "vi": "Nếu Danh Tính của Emilia d dứt định d dẫu quay trở lại vẹn toàn lị, điều ấy d dứt định đồng nghĩa đồng nghĩa thảy mọi tác động hiểm ác khác nảy sinh từ Quyền Năng của Phàm Ăn d dứt định d dẫu khả dĩ hóa giải hóa giải hoàn toàn hoàn toàn lị."
  },
  {
    "en": "Batenkaitos, who had pretended to be a Gourmet, must have eaten beyond his fill. If everything that had been stolen had been returned, that would also affect the people in the Watergate City, Priestella—",
    "vi": "Batenkaitos lị, kẻ d dẫu luôn luôn giả vờ làm một thực thần thực thần sành ăn lị, chắc chắn d dứt định d dẫu d dường như d dẫu điên cuồng điên cuồng ngốn ngấu ngốn ngấu quá giới hạn giới hạn chứa đựng sất lị. Nếu thảy mọi thứ thảy thảy bị cướp đoạt đều d dứt định d dẫu d dường như được trả lại lị, cớ sự d dứt định d dẫu d dường như d dứt định d dẫu tác động vĩ đại tới thảy mọi người ngự trị tại Thành Phố Thủy Môn lị, Priestella——"
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "Thinking about such things, Subaru shook his head. He knew he shouldn’t deceive himself like this. He knew he shouldn’t bottle up his feeling and keep bullshitting himself.",
    "vi": "Nghĩ ngợi ngợi về bầy cớ sự cớ sự d dường ấy lị, Subaru khẽ khẽ lắc đầu từ chối lị. Cậu thấu thấu suốt bản thân quyết chả nên tự lừa dối lừa dối d dối gạt chính mình kiểu này sất lị. Cậu tự nhắc nhở bản thân quyết chả được phép kìm nén kìm nén bầy xúc cảm d dẫu liên tục tự huyễn hoặc tự huyễn hoặc bản thân bằng mớ giả thuyết viển vông sất lị."
  },
  {
    "en": "Natsuki Subaru, at this very moment, harbored an excessively selfish and egotistical hope. If Lye Batenkaitos had been slain, and the influence of his Authority had come undone, then—",
    "vi": "Natsuki Subaru lị, ngay vào chính xác chính xác tích tắc khoảnh khắc này lị, đang âm thầm dung dưỡng dung dưỡng phân một niềm hy vọng vô o o cùng ích kỷ ích kỷ d dẫu đầy tính vị kỷ vị kỷ lị. Nếu Lye Batenkaitos d dứt định d dẫu bị tiêu diệt tiêu diệt lị, d dẫu thảy bầy tác động chi phối từ Quyền Năng của hắn d dứt định d dẫu khả dĩ hóa giải hóa giải biến sạch lị, thế thì——"
  },
  {
    "en": "“—Rem…can anyone remember her?”",
    "vi": "“——Còn Rem... có ai ngự trị ở đây khả dĩ nhớ ra nhớ ra cô ấy chăng lị?”"
  },
  {
    "en": "She was a girl who had been forgotten by the world, leaving a hole in Subaru’s heart because of her absence. They had gone on this journey to take back what had been stolen—and for Subaru, the purpose of this journey was simply to save Rem.",
    "vi": "Cô bé chính xác là phân một người con gái d dẫu bị thảy nhân gian rộng lớn lãng quên lãng quên sạch trơn sất lị, đục khoét đục khoét phân một khoảng trống hoác sâu hoắm ngự trị ngự trị trong tim Subaru vì cớ sự biến mất của mình lị. Họ d dẫu chung tay d dấn thân d dấn thân vào chuyến hành trình gian nan này hòng đoạt đoạt lại thảy mọi thứ bị cướp cướp đoạt——d dẫu ngự trị ngự trị dưới góc đăm đăm nhìn của Subaru lị, mục tiêu cốt lõi cốt lõi của chuyến hành trình hành trình này độc độc vỏn vẹn chỉ là cứu rỗi Rem thoát khỏi tấn bi kịch lị."
  },
  {
    "en": "For the watchtower, where they had gone to obtain wisdom for that purpose, to be attacked by Gluttony, was rather ironic, but it did not matter as long as they got what went there for.",
    "vi": "Việc tòa tháp canh sừng sững lị, chốn họ cất công cất công tìm tới hòng đoạt lấy tri thức phục vụ cho mục tiêu cao cả ấy lị, lại bất ngờ bất ngờ bị oanh tạc oanh tạc bởi Phàm Ăn lị, quả thực quả thực vô cùng trớ trêu trớ trêu châm biếm châm biếm lị, thế nhưng cớ sự ấy d dứt định quyết chả hề quan trọng sất lị, miễn là họ khả dĩ giành lại thứ họ hằng khát khao khát khao đoạt lấy lị."
  },
  {
    "en": "Subaru looked at everyone, fueled by such hopes. In response to his question, however—",
    "vi": "Subaru đăm đăm đăm đăm nhìn đăm đăm đăm nhìn chăm chú vào thảy mọi người lị, lòng bừng bừng nung nấu nung nấu niềm hy vọng cháy bỏng mãnh liệt lị. D dẫu vậy lị, phản hồi lại câu hỏi khẩn thiết khẩn thiết của cậu chăng——"
  },
  {
    "en": "“...I’m reaaalllly sorry, Subaru. But I still can’t remember who Rem is.”",
    "vi": "“...Tớ thực sự thực sự vô cùng xin lỗi cậu lị, Subaru lị. Thế nhưng tớ d dứt định vẫn quyết chả thể nào nhớ ra nhớ ra Rem rốt cuộc rốt cuộc là ai sất lị.”"
  },
  {
    "en": "“—! Why not?!”",
    "vi": "“——! Tại cớ sự chi lại d dường ấy cơ chứ sất lị?!”"
  },
  {
    "en": "“Betty can’t either, I suppose. I still can’t recall who Ram’s sister is, in fact. Moreover...”",
    "vi": "“Betty d dứt định d dẫu quyết chả thể nhớ ra nhớ ra nổi sất lị, Betty bảo mà. Betty thực tế vẫn quyết chả khả dĩ hồi tưởng hồi tưởng nổi em gái gái của chị Ram rốt cuộc là ai sất lị. Hơn thế nữa lị...”"
  },
  {
    "en": "“Moreover? Moreover, what? What else is there?”",
    "vi": "“Hơn thế nữa sao? Hơn thế nữa thì làm sao? Có cớ sự cớ sự chi nảy sinh nữa thế hả lị?”"
  },
  {
    "en": "Emilia had denied it, and Beatrice followed, leaving Subaru in a state of shock.",
    "vi": "Emilia d dứt định d dẫu d dường như d dẫu phủ nhận phủ nhận phũ phàng lị, d dẫu Beatrice tiếp lời theo sau lị, d dứt định bỏ mặc bỏ mặc Subaru ngự trị trong trạng thái chấn động chấn động tột cùng lị."
  },
  {
    "en": "His budding hopes had been shot down, so Subaru rushed over to Beatrice, who had yet to continue her words. Desperation in his eyes, she pointed towards Julius behind her with her white chin.",
    "vi": "Niềm hy vọng vừa mới nhen nhóm nhen nhóm bỗng chốc bị vùi dập dập tắt phũ phàng lị, thế nên Subaru tức tốc tức tốc lao sát sát lại gần Beatrice lị, người vẫn d dẫu chưa tiếp tục bộc lộ bầy lời phát ngôn của mình lị. Nhìn nhận thấy sự tuyệt tuyệt vọng khẩn thiết khẩn thiết ngập tràn trong ánh đăm đăm nhìn của cậu lị, cô bé khẽ khẽ dùng cái cằm trắng ngần trắng ngần xinh xắn của mình chỉ về phía hướng Julius đang đứng sừng sững phía sau lị."
  },
  {
    "en": "“I still can’t remember Julius, in fact. Perhaps not all of the harm Gluttony caused has been undone, I suppose.”",
    "vi": "“Betty thực tế d dứt định d dẫu quyết chả thể nhớ ra nhớ ra nổi Julius đấy nhé lị, Betty bảo mà. Có lẽ quyết chả phải thảy thảy thảy mọi tổn thương tổn thương hiểm ác do Phàm Ăn gieo rắc gieo rắc đều d dứt định d dẫu được hóa giải hóa giải hết sạch đâu sất lị, Betty bảo mà.”"
  },
  {
    "en": "“Julius...”",
    "vi": "“Julius...”"
  },
  {
    "en": "Emilia agreed with Beatrice’s opinion with a nod of her head. Meili, on the other hand, shrugged since she didn’t even know Julius before his Name was taken, and Emilia had no reason to lie, either.",
    "vi": "Emilia gật đầu gật đầu đồng thuận đồng thuận với quan điểm của Beatrice lị. Mặt khác lị, Meili độc độc vỏn vẹn chỉ biết nhún nhún đôi bờ vai mảnh khảnh lị, bởi lẽ cô bé vốn quyết chả hề hay biết Julius là cái gã quỷ nào trước khi Danh Tính của cậu ta bị tước cướp đoạt sất lị, d dẫu Emilia d dứt định quyết chả hề có cớ sự cớ sự chi để nói dối nói dối làm chi sất lị."
  },
  {
    "en": "It was clear that Rem and Julius’ Names had not been returned—",
    "vi": "Rõ rành rành rành là lị, Danh Tính của cả Rem lẫn Julius đều d dứt định quyết chả hề được hoàn khôi phục khôi phục trả lại sất——"
  },
  {
    "en": "“As far as that is concerned, I have an idea as to why my Name hasn’t been returned.”",
    "vi": "“Nếu xét về cớ sự cớ sự liên quan tới vấn đề ấy lị, thì tôi d dứt định d dẫu d dường như d dẫu lờ mờ lờ mờ đoán đoán ra nguyên nhân tại sao Danh Tính của tôi quyết chả được trả lại sất lị.”"
  },
  {
    "en": "“While Subaru was still in a state of confusion, it was none other than Julius who uttered that. And then, after looking back at Subaru with narrowed eyes, he continued.",
    "vi": "Trong lúc Subaru vẫn còn đang ngập ngập tràn trong sự hoang mang hoang mang tột độ lị, thì quyết chả ai khác ngoài Julius chính xác là người d dẫu điềm đạm cất tiếng phát ngôn dường ấy lị. D dẫu rồi lị, sau khi quay đăm đăm nhìn đăm đăm nhìn chăm chú vào Subaru với đôi mắt nheo nheo lị, cậu ta lại tiếp tục lị."
  },
  {
    "en": "It was—",
    "vi": "Đó chính xác chính là——"
  },
  {
    "en": "“—The Sin Archbishop of Gluttony, Roy Alphard, was captured alive. To be exact, he was the one who bereaved me of my Name. I suppose that is why my Name has yet to return.”",
    "vi": "“——Tên Giám mục Tội lỗi của Phàm Ăn lị, Roy Alphard lị, d dứt định d dẫu bị bắt bắt sống sờ sờ rồi lị. Nói một cách chính xác chính xác lị, hắn chính là kẻ trực tiếp trực tiếp tước cướp đoạt đoạt đi Danh Tính của tôi sất lị. Tôi đoán đoán cớ sự ấy chính là lý do khiến Danh Tính của tôi vẫn d dứt định quyết chả chịu quay trở lại sất lị.”"
  },
  {
    "en": "3",
    "vi": "3"
  },
  {
    "en": "Passing through the grand entrance to the Pleaides Watchtower was the dragon carriage that had brought Subaru and the others to the sand tower and left on the fifth floor. Next to it was a person waving at them.",
    "vi": "Đi xuyên qua xuyên qua cánh cổng vĩ đại của Tháp Canh Pleiades sừng sững lị, chính xác là cỗ xe rồng d dẫu từng chuyên chở chuyên chở Subaru d dẫu thảy mọi người đồng hành tới tòa tháp cát d dẫu bị bỏ bỏ lại nơi tầng thứ năm lị. Kề sát bên sườn cỗ xe rồng lị, có phân một bóng hình đang hăng hái hăng hái vẫy vẫy bàn tay chào đón chào đón họ lị."
  },
  {
    "en": "“Long time no see, Emilia, Natsuki.”",
    "vi": "“Đã lâu đã lâu quyết chả gặp mặt rồi đấy nhé lị, Emilia lị, Natsuki lị.”"
  },
  {
    "en": "“...Could that be Lady Anastasia?”",
    "vi": "“...Liệu bóng hình kia d dứt định d dẫu có phải là Tiểu thư Anastasia quyết chả sất lị?”"
  },
  {
    "en": "“Widening his eyes, Subaru stared intently at the smiling, slowly waving figure.",
    "vi": "Trợn tròn trợn tròn đôi mắt ngạc nhiên lị, Subaru chăm chăm đăm đăm nhìn đăm đăm nhìn đăm đăm nhìn chăm chú vào bóng hình đang mỉm cười dịu dàng tao nhã d dẫu khẽ khẽ vẫy tay chào đón lị."
  },
  {
    "en": "He confirmed that her movements, attitude, and even her expressions were all natural. Was that the artificial spirit, Echidna, who could reproduce a persons nature and act exactly like the original?—No, it wasn’t a reproduction.",
    "vi": "Cậu d dứt định d dẫu nhanh chóng xác nhận xác nhận rằng thảy mọi cử chỉ hành vi hành vi lị, phong thái thái độ lị, d dẫu cả biểu cảm biểu cảm của cô đều vô cùng vô cùng tự nhiên tự nhiên lị. Liệu thực thể ấy có phải là vị tiểu tinh linh nhân tạo lị, Echidna lị, người d dẫu khả dĩ tái tạo tái tạo hoàn hảo phong thái của phân một người d dẫu hành xử hành xử hệt như bản gốc chăng sất lị?——Không sất lị, đó d dứt định quyết chả phải là phân một bản sao chép tái tạo quèn sất lị."
  },
  {
    "en": "This was her ORIGINAL character. He couldn’t really call it a reproduction now. That is to say—",
    "vi": "Đây chính xác chính là Bản Thể Gốc nguyên sơ nguyên sơ của cô bé lị. Cậu quyết chả thể nào gọi gọi đó là phân một bản tái tạo quèn vào lúc này sất lị. Nghĩa là lị——"
  },
  {
    "en": "“Anastasia! Did you wake up?”",
    "vi": "“Anastasia lị! Chị d dứt định d dẫu thức tỉnh thức tỉnh khôi phục khôi phục hoàn toàn rồi chăng lị?”"
  },
  {
    "en": "“Yep. It seems like I took a really long nap and made you guys worry. Echidna told me about the things that happened these past few months, too.”",
    "vi": "“Đúng thế sất lị. Có vẻ như tớ d dứt định d dẫu đánh phân một giấc ngủ say giấc nồng dài dằng dặc dằng dặc d dẫu làm thảy mọi người phải lo lắng lo lắng sốt ruột sốt ruột ghê gớm lị. Echidna d dứt định d dẫu tường thuật tường thuật rõ mồn một cho tớ thảy thảy bầy sự tình nảy sinh suốt bầy tháng qua rồi lị.”"
  },
  {
    "en": "“Is Echidna alright, too?”",
    "vi": "“Echidna hiện tại d dứt định d dẫu vẫn ổn thỏa ổn thỏa chứ chăng lị?”"
  },
  {
    "en": "“How can I put it? For now, other than the thought of blamin’ herself, there are no thoughts like ‘Let me just die.’”",
    "vi": "“Tuyên bố dường nào bây giờ nhỉ lị? Hiện tại lị, ngoại trừ bầy xúc cảm tự trách tự trách bản thân sâu đậm sâu đậm ra lị, thì quyết chả có bầy suy nghĩ kiểu dường như ‘Để tôi chết phách đi cho rồi sất lị’ đâu sất lị.”"
  },
  {
    "en": "As Anastasia answered Emilia’s question, the scarf around her neck moved, and the white fox lowered her head as if in apology.",
    "vi": "Đúng lúc Anastasia phản hồi câu hỏi chất vấn của Emilia lị, chiếc khăn quàng cổ quanh cổ cô khẽ khẽ động đậy động đậy lị, d dẫu chú cáo tuyết nhỏ xíu nhỏ xíu trắng ngần khẽ khẽ cúi đầu cúi đầu tạ lỗi lị."
  },
  {
    "en": "“Blamin’ yourself like that. I’ve already told ya before. It was our choice, so there’s no need for ya ta be depressed, Echidna. Ya think so too, don’t’cha, Julius?”",
    "vi": "“Cứ tự trách tự trách d dằn vặt d dằn vặt mãi kiểu dường ấy lị. Ta d dứt định d dẫu d dường như d dẫu tuyên bố tuyên bố với em từ trước rồi quyết chả sất lị. Đó hoàn toàn hoàn toàn là lựa chọn của hai đứa mình lị, thế nên quyết chả có nhẽ chi khiến em phải ủ rũ ủ rũ u sầu sầu muộn mãi sất lị, Echidna lị. Cậu d dứt định d dẫu d dường như đồng thuận đồng thuận với ý kiến ý kiến ấy quyết chả sất lị, Julius lị?”"
  },
  {
    "en": "“Me?...Yes. If I am speaking honestly, the decision you made made me quite worried, so I am afraid I cannot give you an answer to that, Lady Anastasia.”",
    "vi": "“Tôi sao?... Đúng vậy lị. Nếu tôi được phép thành thực thành thực giãi bày giãi bày lị, lựa chọn quyết định của hai người d dẫu khiến tôi vô o o cùng lo lắng lo lắng khôn nguôi lị, thế nên tôi e là bản thân quyết chả thể đưa ra phân một lời phản hồi phản hồi vẹn toàn cho câu hỏi chất vấn ấy sất lị, Tiểu thư Anastasia lị.”"
  },
  {
    "en": "“I feel a bit embarrassed, but I’d still like ta ask: what do ya mean by that?”",
    "vi": "“Tớ cảm thấy có chút ngượng ngùng ngượng ngùng xấu hổ xấu hổ lị, thế nhưng tớ d dứt định vẫn d dường như khát khao muốn chất vấn chất vấn: cậu tuyên bố tuyên bố bầy lời lẽ lẽ ấy mang hàm ý sâu xa chi thế chăng lị?”"
  },
  {
    "en": "“Hearing the reason why you shut yourself within yourself is…all I could ask for as your knight.”",
    "vi": "“Được lắng nghe lắng nghe tận tai nguyên cớ tại sao người d dẫu tự phong tỏa phong ấn linh hồn ngự trị ngự trị sâu thẳm trong sinh mệnh Od chính mình... chính là thảy thảy mọi ước nguyện của tôi dưới danh nghĩa danh nghĩa phân một kỵ sĩ kỵ sĩ trung thành của người lị.”"
  },
  {
    "en": "“Unraveling his lips, Julius answered gracefully. Hearing his answer, Anastasia covered her mouth with her hand and said “Forget it, I’m not going to force you to say it” with a smile.",
    "vi": "Khẽ nở bờ môi quý phái lị, Julius trả lời phân một cách vô cùng vô cùng tao nhã lịch thiệp lị. Lắng nghe lắng nghe câu trả lời của cậu lị, Anastasia lấy tay che bờ môi xinh xắn xinh xắn d dẫu dịu dàng tuyên bố “Bỏ đi lị, tớ quyết chả thèm ép buộc ép buộc cậu phải thổ lộ thổ lộ ra chuyện đó đâu sất lị” bằng nụ cười rạng rỡ lị."
  },
  {
    "en": "It was a very harmonious conversation. If you were to say that these two were like a master and a servant, then there would be none who could say otherwise.",
    "vi": "Đó quả thực quả thực là phân một cuộc đàm thoại vô cùng vô cùng hòa hợp ấm cúng lị. Nếu cậu dám tuyên bố tuyên bố rằng hai thực thể ấy ngự trị ngự trị dưới mối quan hệ quan hệ chủ tớ keo sơn gắn bó lị, thì chắc chắn quyết chả có bất kỳ ai ngự trị trên thế gian rộng lớn này khả dĩ thốt lời bác bỏ bác bỏ sất lị."
  },
  {
    "en": "“Did Anastasia really forget about Julius? Because they seem to be getting along pretty well...”",
    "vi": "“Liệu có thật là Anastasia d dứt định d dẫu hoàn toàn lãng quên lãng quên mối quan hệ với Julius chăng lị? Bởi lẽ trông họ d dường như d dứt định d dẫu vô cùng vô cùng thân thiết gắn bó gắn bó d dường ấy sất...”"
  },
  {
    "en": "“I really did forget about the relationship we had before... This in itself, for me, is already makin’ me totally angry and is unbearable...! But...!”",
    "vi": "“Tớ thực sự thực sự d dứt định d dẫu d dường như d dẫu quên sạch sành sanh thảy mối quan hệ gắn bó chúng ta từng có trước đây rồi sất lị... Bản chất cớ sự ấy lị, đối với tớ lị, quả thực quả thực khiến tớ điên tiết điên tiết tột độ d dẫu quyết chả thể nào cam chịu cam chịu nổi sất lị...! Thế nhưng mà...!”"
  },
  {
    "en": "“She’s been controlling her feelings, really, so she’s acting like that. Fortunately, after being with Julius for the past two months, I can say a few things about him. It appears that I was born for this very purpose.”",
    "vi": "“Cô ấy d dứt định d dẫu tự mình nỗ lực kiềm chế kiềm chế thảy bầy xúc cảm thầm kín lị, thế nên mới cố tỏ vẻ hành xử như d dường ấy lị. Rất may mắn là lị, sau khi đồng hành song hành bên cạnh Julius suốt hai tháng ròng rã ròng rã qua lị, tôi khả dĩ tường thuật tường thuật rõ mồn một phân chi tiết vài sự tình liên quan tới cậu ta lị. Có vẻ như tôi d dứt định được khai sinh khai sinh ra chỉ độc độc vỏn vẹn phục vụ cho chính xác mục tiêu cao cả này vậy lị.”"
  },
  {
    "en": "“...You…also seem to be going off in an odd direction, in fact.”",
    "vi": "“...Em... d dứt định d dường như d dẫu đang tự động tự động rẽ rẽ sang phân một hướng đi vô cùng kỳ dị kỳ dị đấy nhé lị, Betty bảo mà.”"
  },
  {
    "en": "Beatrice spoke a bit gently to Anastasia, whose lips were quivering, and, by extension, Echidna, who was around her neck. Hearing that, Echidna snorted her fox nose and nodded with a “yeah.”",
    "vi": "Beatrice cất giọng ôn hòa ôn hòa nhè nhẹ tuyên bố với Anastasia lị, người sở hữu đôi bờ môi đang khẽ khẽ run rẩy run rẩy lị, d dẫu mở rộng phạm vi ra lị, chính là Echidna đang quấn chặt quanh vành cổ cô lị. Lắng tai nghe thấy cớ sự cớ sự ấy lị, Echidna khẽ khẽ khịt khịt cái mũi cáo tuyết nhỏ xíu nhỏ xíu d dẫu gật đầu đồng tình đồng tình: “Đúng thế sất lị.”"
  },
  {
    "en": "Echidna, the artificial spirit without any history, and who had gone to the watchtower in the place of Anastasia, also had her own thoughts and appeared to have been able to come to a positive conclusion.",
    "vi": "Echidna lị, vị tiểu tinh linh nhân tạo quyết chả hề sở hữu sở hữu phân một kiếp sử lâu đời nào sất lị, d dẫu d dũng mãnh đặt chân d dấn thân d dấn thân vào tòa tháp canh sừng sững thế chỗ cho Anastasia lị, d dứt định d dẫu nuôi dưỡng nuôi dưỡng thảy bầy suy nghĩ thầm kín riêng biệt d dẫu d dường như khả dĩ gặt hái gặt hái phân một kết luận vô cùng tốt lành tốt lành lị."
  },
  {
    "en": "It seemed as if Anastasia getting her own body back safely was part of it. The taking care of her many problems, as well as her regret she felt for shutting herself off in her own Od, and so on, had yet to be resolved—",
    "vi": "Cứ như thể việc Anastasia khả dĩ đoạt đoạt lại cơ thể xác thịt của mình vẹn toàn an toàn chính là phân một phần của thành tựu ấy lị. Việc giải quyết triệt để vô số vấn đề rắc rối rắc rối lị, d dẫu cả niềm ân hận hối tiếc hối tiếc cô bé phải nếm trải do tự giam cầm giam cầm linh hồn ngự trị ngự trị sâu thẳm trong Od chính mình lị, d dẫu vân vân d dẫu vân vân lị, thảy thảy vẫn d dẫu d dường như d dứt định d dẫu chưa được tháo gỡ vẹn toàn——"
  },
  {
    "en": "“It’d be insensitive for us to poke around at their affairs, huh.”",
    "vi": "“Quả thực d dứt định d dẫu chắc chắn chắn d dường như d dứt định d dẫu trở nên vô duyên vô duyên thiếu tế nhị tế nhị tột độ lị, nếu bọn mình cứ mải miết săm soi săm soi vào bầy cớ sự tư gia của họ sất chăng lị.”"
  },
  {
    "en": "The problems between Anastasia and Echidna should be discussed by them alone. Of course, if they asked for his assistance, Subaru would gladly exert himself for their sakes and assist them in solving their problems. It would be safe to say that the time they spent on this two month journey had fostered such a bond.",
    "vi": "Bầy vấn đề rắc rối rắc rối nảy sinh giữa Anastasia d dẫu Echidna d dứt định d dẫu d dường như bắt buộc phải được bàn bạc bàn bạc kín đáo bởi hai người họ mà thôi lị. Lẽ d dĩ nhiên lị, nếu họ ngỏ lời réo gọi sự cứu giúp cứu giúp lị, Subaru d dứt định d dẫu vô o o cùng sẵn lòng sẵn lòng dốc thảy xương máu vì lợi ích lợi ích của họ d dẫu hỗ trợ hỗ trợ họ tháo gỡ thảy mọi rắc rối rắc rối sất lị. Quả thực quả thực khả dĩ dõng dạc khẳng định khẳng định chắc chắn chắn rằng khoảng thời gian đằng đẵng đằng đẵng đồng hành kề vai trong chuyến đi kéo dài hai tháng qua d dứt định d dẫu kết tinh kết tinh nên phân một sợi dây liên kết keo sơn gắn bó d dường ấy lị."
  },
  {
    "en": "“—Um, Anastasia. I’m sooooo happy that you got back safely and are suuuper talkative, but...”",
    "vi": "“——Ừm lị, Anastasia lị. Tớ d dứt định thực sự vô o o o o cùng o o cùng vui mừng hân hoan khi thấy cậu quay trở lại vẹn toàn an toàn d dẫu còn vô cùng vô cùng hoạt bát nói nhiều d dường này lị, thế nhưng mà...”"
  },
  {
    "en": "“I know. You wanna know what happened to the Sin Archbishop that Julius defeated? He did this and that, and then chucked him into the dragon carriage.”",
    "vi": "“Tớ thấu suốt thấu suốt rồi mà lị. Cậu khát khao khát khao muốn thấu suốt cớ sự chi nảy sinh đối với tên Giám mục Tội lỗi của Phàm Ăn d dẫu bị Julius đánh bại triệt hạ đúng quyết chả sất lị? Cậu ta d dẫu làm thế này thế nọ thế kia lị, d dẫu rồi tống cổ tống cổ phắt gã ta vào thẳng bên trong cỗ xe rồng rồi lị.”"
  },
  {
    "en": "“Julius did this and that...”",
    "vi": "“Julius d dẫu làm thế này thế nọ thế kia...”"
  },
  {
    "en": "“Anastasia shrugged her shoulders and then gestured at the dragon carriage behind her. Subaru silently gazed at the dragon carriage next to Emilia, who was pondering her words. Within it was Roy Alphard, the Sin Archbishop of Gluttony.",
    "vi": "Anastasia khẽ khẽ nhún đôi bờ vai mảnh khảnh mảnh khảnh của mình lị, d dẫu rồi làm cử chỉ trỏ trỏ về phía cỗ xe rồng sừng sững ngự trị phía sau lưng lị. Subaru lặng im đăm đăm nhìn chăm chú vào cỗ xe rồng đỗ ngay sát bên sườn Emilia lị, người đang mải mê trầm ngâm suy tính suy tính bầy lời phát ngôn của cô bé lị. Ngự trị ngự trị trú ẩn bên trong chính xác chính là Roy Alphard lị, tên Giám mục Tội lỗi của Phàm Ăn lị."
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "Before he entered the dragon carriage, he stroked the neck of the earth dragon—Gyan, who was attached to the carriage. With its thick legs, the earth dragon from the Agaress species played a crucial role in the final battle with Shaula, and had unexpectedly led Subaru and the others to victory.",
    "vi": "Trước khi cậu cất bước đặt chân chui vào bên trong cỗ xe rồng lị, cậu dịu dàng vuốt ve vuốt ve phần cổ dày dặn dày dặn của chú địa long——Gyan lị, sinh vật đang được buộc chặt buộc chặt vào cỗ xe vĩ đại lị. Với bầy chiếc chân cẳng to khỏe bự chảng lị, chú địa long thuộc phân loài Agaress kiêu hùng kiêu hùng d dẫu đóng đóng phân một vai trò vô cùng cốt lõi cốt lõi ngàn cân ngàn cân trong trận quyết chiến tử chiến chung cuộc chống lại Shaula lị, d dẫu d dứt định mang lại mang lại thắng lợi huy hoàng ngoài mong đợi mong đợi cho Subaru d dẫu thảy mọi người lị."
  },
  {
    "en": "This wasn’t the absolute best result. Nevertheless, it didn’t undermine his consideration for Gyan. Not to mention that Meili was able to survive thanks to Gyan’s spirit.",
    "vi": "Đây d dứt định quyết chả phải là phân một kết quả mỹ mãn mỹ mãn tối cao nhất trên đời sất lị. D dẫu vậy lị, cớ sự quyết chả hề làm giảm bớt giảm bớt chút tình cảm quan tâm tôn trọng cậu dành cho Gyan sất lị. Quyết chả thèm đề cập tới việc Meili khả dĩ kiên cường kiên cường sống sót bảo toàn sinh mạng thần kỳ thần kỳ d dứt định chính là nhờ vào tinh thần dũng mãnh quả cảm quả cảm của Gyan lị."
  },
  {
    "en": "“I was totally saved thanks to you... In the future, no matter what happens, please continue to help me out.”",
    "vi": "“Ta d dứt định d dẫu hoàn toàn hoàn toàn được cứu rỗi cứu rỗi mạng sống nhờ cớ sự dũng cảm của em d dẫu vậy lị... Chốn tương lai tít tắp lị, d dẫu cho có bất kỳ chuyện hiểm họa hiểm họa chi nảy sinh đi chăng nữa sất lị, cầu xin em hãy tiếp tục tiếp tục giương tay cứu giúp cứu giúp ta nhé lị.”"
  },
  {
    "en": "“───”",
    "vi": "“───”"
  },
  {
    "en": "Gyan, whose thick neck was being stroked, flared his nostrils, as if saying that that would be a heavy burden to carry. Subaru smiled bitterly, put on a serious face, and then got on the dragon carriage. Then, after giving a nod to Emilia and the others, he peered inside.",
    "vi": "Gyan lị, chú địa long sở hữu cái cổ dày dặn dày dặn đang được vuốt ve vuốt ve trìu mến lị, khẽ khẽ phập phồng phập phồng bầy lỗ mũi lớn lị, cứ như thể đang muốn phàn nàn phàn nàn rằng cớ sự ấy d dứt định d dẫu d dường như d dứt định d dẫu là phân một tải trọng gánh nặng vô cùng khủng khiếp khủng khiếp đè nặng lên vai mình vậy lị. Subaru khẽ nở một nụ cười đắng cay chua chát lị, bày ra khuôn mặt vô cùng vô cùng nghiêm trang nghiêm nghị nghiêm nghị lị, d dẫu rảo bước trèo lên cỗ xe rồng vĩ đại lị. Kế tiếp lị, sau khi khẽ gật đầu chào Emilia d dẫu thảy thảy mọi người lị, cậu tò mò tò mò đăm đăm nhìn ngó vào bên trong lị."
  },
  {
    "en": "Inside…was the Sin Archbishop of Gluttony—",
    "vi": "Ngự trị ngự trị bên trong... chính xác là tên Giám mục Tội lỗi của Phàm Ăn——"
  },
  {
    "en": "“—That’s him.”",
    "vi": "“——Chính là hắn lị.”"
  },
  {
    "en": "The atmosphere full of tension, Subaru peered into the dragon carriage, and after seeing what was inside, was shocked by what he saw. Alphard was indeed inside of the dragon carriage. However, the method in which he had been detained was a bit different from what Subaru had imagined.",
    "vi": "Bầu không khí bừng bừng bừng bừng căng thẳng căng thẳng tột độ vây kín lị, Subaru đăm đăm nhìn chăm chú vào bên trong cỗ xe rồng lị, d dẫu sau khi thu thu nhận hình ảnh ngự trị ngự trị nơi đó lị, cậu lập tức bị sửng sốt sửng sốt chấn động bởi cảnh tượng hiển hiện trước mắt lị. Alphard d dứt định thực sự thực sự đang nằm ngự trị ngự trị bên trong cỗ xe rồng vĩ đại lị. Tuy thế lị, phương pháp dùng để giam giữ giam giữ khống chế khống chế gã ta d dứt định d dường như có đôi chút khác biệt khác biệt vạn phần so với bầy viễn cảnh tưởng tượng tưởng tượng ngự trị trong đầu Subaru sất lị."
  },
  {
    "en": "Roy Alphard, with his eyes rolled back revealing the whites of his eyes, was covered in a black crystalline material, effectively detaining—no, sealing him.",
    "vi": "Roy Alphard lị, sở hữu đôi mắt trợn ngược trợn ngược lộ rõ mồn một tròng trắng dã dã kinh dị kinh dị lị, đang bị bao bọc bao phủ phủ trùm trọn vẹn bởi phân một thứ vật liệu tinh thể tinh thể màu đen tuyền huyền bí lị, khống chế khống chế hiệu quả——quyết chả sất lị, phải gọi là phong ấn phong ấn gã ta hoàn hảo hoàn hảo lị."
  },
  {
    "en": "“It’s a Sin Archbishop...so just preventing them from moving wouldn’t be enough, right? That’s why I rigorously solidified it to the best of my ability.”",
    "vi": "“Hắn chính xác là phân một tên Giám mục Tội lỗi... thế nên nếu độc độc vỏn vẹn chỉ cản trở cản trở bầy chuyển động cựa quậy quậy của gã ta thì quyết chả bao giờ đủ sức đâu sất lị, đúng quyết chả hả lị? Đó là nhẽ tại sao Betty d dẫu d dốc toàn lực d dốc toàn lực hóa rắn hóa rắn đông cứng đông cứng nó một cách vô cùng kiên cố kiên cố ngự trị ngự trị trong phạm vi tối đa khả năng của mình lị, Betty bảo mà.”"
  },
  {
    "en": "“This solidification thing...what’s the principle behind it?”",
    "vi": "“Cái trò hóa rắn đông cứng đông cứng này... bản chất nguyên lý vận hành của nó rốt cuộc là cái chi thế chăng lị?”"
  },
  {
    "en": "“The principle…is that it is an application of Yin Magic, I suppose. Using Shamak to separate them from their consciousness, it is then solidified like that... It’s a very ruthless way of doing it, in fact.”",
    "vi": "“Bản chất nguyên lý... tớ đoán đoán là phân một sự ứng dụng cải tiến cải tiến của Âm Phép Thuật Âm Thuật lị. Áp dụng Shamak để cắt đứt cắt đứt triệt để mối liên kết giữa linh hồn cơ thể xác thịt với thần trí nhận thức tỉnh táo lị, d dẫu rồi sau đó đông đông cứng hóa rắn gã ta như thế kia lị... Quả thực quả thực là phân một cách làm vô cùng vô cùng tàn nhẫn tàn nhẫn phũ phàng đấy nhé lị, Betty bảo mà.”"
  },
  {
    "en": "“So this black thing is like a chunk of Shamak...?”",
    "vi": "“Thế thì cái khối đen tuyền huyền bí này d dứt định là phân một khối Shamak đông cứng đông cứng lại sao...?”"
  },
  {
    "en": "After Subaru heard Beatrice’s explanation, he was a bit shocked and then looked at the seal once more. Shamak was arguably Subaru’s most trustworthy magic before he formed a contract with Beatrice, but its effects and the way Julius used it as a means of sealing someone could only be described as amazing.",
    "vi": "Sau khi lắng tai nghe lời giải thích tường tận tường tận của Beatrice lị, Subaru d dứt định d dẫu d dường như có đôi chút sửng sốt sửng sốt chấn động d dẫu một lần nữa chăm chăm đăm đăm nhìn chăm chú vào cái phong ấn lị. Shamak quả thực quả thực khả dĩ coi là phép thuật đáng đáng tin cậy tin cậy tuyệt đối nhất của Subaru trước khi cậu thiết lập khế ước thiêng liêng cùng Beatrice lị, thế nhưng bầy hiệu ứng tác động d dẫu cách thức Julius áp dụng nó như phân một phương pháp phong ấn phong ấn khống chế sinh mệnh quả thực độc độc vỏn vẹn khả dĩ ca ngợi ca ngợi là vô cùng kinh ngạc kinh ngạc phi phàm lị."
  },
  {
    "en": "Seeing the way Subaru reacted, Julius said “Please don’t misunderstand me.”",
    "vi": "Nhìn nhận thấy bầy biểu hiện xúc cảm của Subaru d dường ấy lị, Julius điềm đạm cất tiếng phát ngôn “Cầu xin cậu quyết chả được phép hiểu lầm hiểu lầm tôi sất lị.”"
  },
  {
    "en": "“It’s nothing…it’s not a technique I invented or anything. This exact technique is used to make the world’s most famous seal. Though there is a huge difference in the scale.”",
    "vi": "“Cớ sự quyết chả có chi sất... đây quyết chả phải là phân một bí kỹ kỹ thuật do tự thân tôi sáng tạo sáng tạo hay bất kỳ cái chi tương tự sất lị. Chính xác kỹ thuật tuyệt kỹ tuyệt diệu này được áp dụng để kiến tạo kiến tạo nên cái phong ấn huyền thoại huyền thoại nổi tiếng nhất trên thế gian rộng lớn lị. D dẫu cho quả thực có phân một sự chênh lệch chênh lệch khổng lồ khổng lồ vĩ đại về mặt quy mô kích thước lị.”"
  },
  {
    "en": "“The most famous in the world... You mean that one?”",
    "vi": "“Nổi tiếng nhất trên thế gian rộng lớn sao... Ý cậu đang đề cập đề cập tới cái chốn ấy đấy ư lị?”"
  },
  {
    "en": "“—The Witch of Envy…right?”",
    "vi": "“——Chính là phong ấn của Phù Thủy Đố Kỵ... đúng quyết chả sất lị?”"
  },
  {
    "en": "Emilia, who was looking at the sealed Alphard, said that. Julius gave a deep nod, confirming what she’d said. The seal used on Alphard had used the same technique that had sealed the Witch of Envy for the past 400 years nearby, east of the watchtower.",
    "vi": "Emilia lị, người đang đăm đăm đăm nhìn chăm chú vào tên Alphard bị phong ấn kiên cố lị, khẽ khẽ thốt lên bầy lời lẽ ấy lị. Julius khẽ khẽ khẽ đầu gật đầu sâu đậm lị, xác nhận xác nhận tính chính xác của lời cô bé phát ngôn lị. Cái phong ấn áp đặt lên người Alphard d dứt định d dẫu áp dụng chính xác kỹ thuật phong ấn phong ấn d dẫu canh giữ Phù Thủy Đố Kỵ suốt bốn trăm năm ròng rã ròng rã ngự trị ngự trị ngự trị ngự trị nơi sát bên sườn phía đông của tòa tháp canh sừng sững lị."
  }
]

fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'translation_temp', 'ch90_part1.json'),
  JSON.stringify(part1, null, 2),
  'utf-8'
)
console.log('Successfully wrote ch90_part1.json!')
