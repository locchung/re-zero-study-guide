import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tempDir = path.join(__dirname, 'translation_temp');

const part1 = [
  {
    "id": 1,
    "en": "※　※　※　※　※　※　※　※　※　※　※　※",
    "vi": "※　※　※　※　※　※　※　※　※　※　※　※"
  },
  {
    "id": 2,
    "en": "Translated By :",
    "vi": "Dịch bởi:"
  },
  {
    "id": 3,
    "en": "Art Sources :",
    "vi": "Nguồn ảnh:"
  },
  {
    "id": 4,
    "en": "※　※　※　※　※　※　※　※　※　※　※　※",
    "vi": "※　※　※　※　※　※　※　※　※　※　※　※"
  },
  {
    "id": 5,
    "en": "ALL RIGHTS BELONG TO TAPPEI NAGATSUKI, THE ORIGINAL AUTHOR OF RE:ZERO STARTING A LIFE IN A DIFFERENT WORLD FROM ZERO, THIS IS A TRANSLATION OF THE FREE JAPANESE WEB NOVEL INTO ENGLISH",
    "vi": "BẢN QUYỀN THUỘC VỀ TAPPEI NAGATSUKI, TÁC GIẢ GỐC CỦA RE:ZERO STARTING LIFE IN A DIFFERENT WORLD FROM ZERO, ĐÂY LÀ BẢN DỊCH PHI THƯƠNG MẠI TỪ BẢN WEB NOVEL TIẾNG NHẬT SANG TIẾNG ANH"
  },
  {
    "id": 6,
    "en": "JAPANESE WEB NOVEL SOURCE",
    "vi": "NGUỒN WEB NOVEL TIẾNG NHẬT"
  },
  {
    "id": 7,
    "en": "※　※　※　※　※　※　※　※　※　※　※",
    "vi": "※　※　※　※　※　※　※　※　※　※　※"
  },
  {
    "id": 8,
    "en": "▼△▼△▼△",
    "vi": "▼△▼△▼△"
  },
  {
    "id": 9,
    "en": "Machine Translated By :",
    "vi": "Dịch máy bởi:"
  },
  {
    "id": 10,
    "en": "Proofread By:",
    "vi": "Hiệu đính bởi:"
  },
  {
    "id": 11,
    "en": "Japanese to English Checking By:",
    "vi": "Kiểm dịch Nhật-Anh bởi:"
  },
  {
    "id": 12,
    "en": "Art Sources:",
    "vi": "Nguồn ảnh:"
  },
  {
    "id": 13,
    "en": "※　※　※　※　※　※　※　※　※　※　※　※",
    "vi": "※　※　※　※　※　※　※　※　※　※　※　※"
  },
  {
    "id": 14,
    "en": "This an edited Machine Translation, which has been checked by at least one Japanese-English Human Translator for quality. This is expected to have a quality dip in accuracy, therefore, if you read this chapter you must take into consideration the tradeoffs between speed and quality. A proper, higher-quality translation for this chapter is in the works by our team, so if you would prefer to wait for it, then feel free to check back at a later date, keeping an eye out on our social media for updates.",
    "vi": "Đây là bản dịch máy đã qua biên tập, được kiểm chứng chất lượng bởi ít nhất một dịch giả Nhật-Anh. Bản dịch này có thể có sai sót nhỏ về độ chính xác, do đó độc giả nên cân nhắc sự đánh đổi giữa tốc độ cập nhật và chất lượng bản dịch. Bản dịch chất lượng cao hơn cho chương này đang được đội ngũ thực hiện, nếu muốn bạn có thể chờ đợi thêm một thời gian và theo dõi cập nhật trên trang truyền thông xã hội của chúng tôi."
  },
  {
    "id": 15,
    "en": "※　※　※　※　※　※　※　※　※　※　※　※",
    "vi": "※　※　※　※　※　※　※　※　※　※　※　※"
  },
  {
    "id": 16,
    "en": "――Securing the Nine Divine Generals; that was the victory condition for reclaiming the Imperial throne.",
    "vi": "――Quy tụ được Cửu Thần Tướng; đó chính là điều kiện tiên quyết để đoạt lại ngai vàng Đế Vương Đế Quốc."
  },
  {
    "id": 17,
    "en": "With the condition for victory presented, along with the names and titles of those necessary, the Nine Divine Generals, Subaru could tell from experience that the air in the room had become tense.",
    "vi": "Với điều kiện chiến thắng được vạch ra cùng với danh xưng và tước hiệu của những người cần thiết, tức Cửu Thần Tướng, Subaru dựa vào kinh nghiệm có thể cảm nhận rõ bầu không khí trong phòng họp bỗng trở nên căng như dây đàn."
  },
  {
    "id": 18,
    "en": "Of course, the names of the Nine Divine Generals, which would be familiar to people in the Empire, were all novel to Subaru.",
    "vi": "Tất nhiên, danh tính của Cửu Thần Tướng vốn đã quá đỗi quen thuộc với người dân Đế Quốc, nhưng đối với Subaru thì hoàn toàn xa lạ mới mẻ."
  },
  {
    "id": 19,
    "en": "Subaru: […If this were a manga or an anime, it would have been an exciting development to see all the names of the Generals revealed at once.]",
    "vi": "Subaru: […Nếu đây là một bộ manga hay anime, thì cảnh tượng tất cả danh xưng của các Thần Tướng đồng loạt lộ diện thế này chắc chắn sẽ là một tình tiết cực kỳ phấn khích rồi.]"
  },
  {
    "id": 20,
    "en": "However, as this was something that was actually happening to him, the development was one he could not be openly pleased about.",
    "vi": "Thế nhưng, vì đây lại là hiện thực trần trụi đang trực tiếp xảy đến với mình, cậu không tài nào vui mừng ra mặt trước diễn biến này được."
  },
  {
    "id": 21,
    "en": "As Abel mentioned the name and corresponding title of each of the Nine Divine Generals, Subaru could imagine how troublesome each one of them would be, with each of them sounding effective in how they were talked up.",
    "vi": "Khi Abel liệt kê danh tính cùng tước hiệu tương ứng của từng người trong Cửu Thần Tướng, Subaru có thể mường tượng ra mức độ phiền toái khôn lường của mỗi kẻ trong bọn họ, khi người nào nghe qua danh hào cũng có vẻ vô cùng sừng sỏ."
  },
  {
    "id": 22,
    "en": "As Arakiya's nickname, Spirit Eater, corresponded with a special trait of hers, Subaru could imagine that the others' aliases were somewhat related to their abilities or fighting methods.",
    "vi": "Khi biệt danh Kẻ Nuốt Tinh Linh của Arakiya tương ứng mật thiết với năng lực đặc thù của cô ta, Subaru đoán định rằng ngoại hiệu của những kẻ khác chắc chắn cũng có liên quan trực tiếp đến khả năng hoặc phương thức chiến đấu của bọn họ."
  },
  {
    "id": 23,
    "en": "Subaru: [The only ones whose names give me a clear image of their abilities would be the Master of Curse Tools and the Flying Dragon General?]",
    "vi": "Subaru: [Những kẻ duy nhất có danh hào phác họa rõ ràng hình ảnh năng lực của mình chắc chỉ có Nguyền Cụ Sư và Phi Long Tướng quân thôi nhỉ?]"
  },
  {
    "id": 24,
    "en": "The two names he pointed out were probably both derived from the way they fought and the tools they used.",
    "vi": "Hai cái tên cậu chỉ ra có lẽ đều xuất phát từ phong cách tác chiến cùng trang bị khí giới mà bọn họ sử dụng."
  },
  {
    "id": 25,
    "en": "The other nicknames were probably inspired by their appearance or anecdotes of their exploits. In China's Romance of the Three Kingdoms and the Water Margin both, characters would often take on aliases for such reasons. [1]",
    "vi": "Những ngoại hiệu khác có lẽ được khơi nguồn cảm hứng từ ngoại hình diện mạo hoặc các giai thoại chiến tích lừng lẫy của họ. Trong cả tác phẩm Tam Quốc Diễn Nghĩa lẫn Thủy Hử của Trung Quốc, các nhân vật cũng thường sở hữu danh hào vì những lý do tương tự như thế. [1]"
  },
  {
    "id": 26,
    "en": "Come to think of it, one could say that those stories were also about taking a country. Unfortunately, Subaru was not very familiar with them, having only a cursory knowledge of their contents.",
    "vi": "Suy ngẫm kỹ lại, có thể nói những tác phẩm cổ điển đó cũng xoay quanh đề tài tranh đoạt giành giang sơn quốc gia. Thật không may, Subaru lại không quá am hiểu chúng, cậu chỉ sở hữu vốn hiểu biết sơ sài nông cạn về nội dung của chúng mà thôi."
  },
  {
    "id": 27,
    "en": "Subaru: [This is no time to be spacing out. Well, I've heard that securing the Nine Divine Generals is the condition for victory, but there are some things I want to ask you.]",
    "vi": "Subaru: [Không phải lúc để ngồi thẫn thờ ngẩn ngơ nữa rồi. Được rồi, tôi đã nghe rõ việc quy tụ Cửu Thần Tướng là điều kiện để giành chiến thắng tối hậu, nhưng tôi có vài câu hỏi muốn chất vấn anh.]"
  },
  {
    "id": 28,
    "en": "Abel: [What. Is there any room for doubt?]",
    "vi": "Abel: [Cái gì. Ngươi vẫn còn điều gì hoài nghi sao?]"
  },
  {
    "id": 29,
    "en": "Abel raised one eyebrow and placed his hand on top of the map on the table as Subaru recovered from his initial shock.",
    "vi": "Abel khẽ nhướng một bên lông mày và đặt bàn tay lên trên tấm bản đồ trải rộng trên bàn khi Subaru dần lấy lại bình tĩnh sau cơn sửng sốt ban đầu."
  },
  {
    "id": 30,
    "en": "If he thought that he had explained everything with that, he would be the ultimate example of a clever man short of words. Compared to the other people here―― Zikr and the others, not to mention the People of Shudraq, Subaru had far less information about the Vollachian Empire.",
    "vi": "Nếu gã cứ ngỡ chỉ bằng ngần ấy giải thích là đã làm sáng tỏ mọi chuyện, thì gã đúng là ví dụ điển hình nhất của một kẻ thông minh kiêu ngạo nhưng lại quá kiệm lời. So với tất cả những người túc trực xung quanh nơi đây―― từ Zikr cùng binh lính, cho đến tộc nhân Shudraq dũng mãnh, Subaru sở hữu lượng thông tin ít ỏi nghèo nàn nhất về Đế Quốc Vollachia."
  },
  {
    "id": 31,
    "en": "Subaru: [So there’s clearly room for me to doubt. If you keep skipping explanations because you yourself know what you're talking about, the people around you won’t know what you’re thinking about exactly.]",
    "vi": "Subaru: [Tất nhiên là có quá nhiều chỗ nghi ngờ rồi. Nếu anh cứ liên tục lược bỏ bớt các lời giải thích chỉ vì bản thân anh đã hiểu rõ mười mươi, thì những người xung quanh sẽ không tài nào nắm bắt nổi anh đang toan tính mưu đồ gì đâu.]"
  },
  {
    "id": 32,
    "en": "Abel: [I shall take that as advice and ignore it. State your question.]",
    "vi": "Abel: [Ta sẽ ghi nhận lời khuyên đó và bỏ ngoài tai. Cứ việc đưa ra câu hỏi chất vấn của ngươi đi.]"
  },
  {
    "id": 33,
    "en": "Subaru: [Keep that “ignoring” bit to yourself…]",
    "vi": "Subaru: [Cái vế \"bỏ ngoài tai\" đó anh cứ giữ lại cho riêng mình giùm đi…]"
  },
  {
    "id": 34,
    "en": "Subaru sighed as Abel crossed his arms and responded arrogantly. Then, having resigned himself to the attention gathering around him, he said, \"Ready?”, as he held up four fingers on one hand and five fingers on the other.",
    "vi": "Subaru thở dài ngao ngán khi thấy Abel khoanh tay đáp lại một cách kiêu ngạo ngạo nghễ. Sau đó, chấp nhận những ánh mắt tò mò đang đổ dồn về phía mình, cậu khẽ thốt lên \"Chuẩn bị nhé?\", trong khi giơ bốn ngón tay ở một bên tay và năm ngón tay ở bên tay còn lại lên."
  },
  {
    "id": 35,
    "en": "Subaru: [There are Nine Divine Generals, but thankfully that's an odd number, so it’s easy to understand that it comes down to a battle of numbers. But the ones who favor us are unaccounted for, and, right now, Arakiya and this Chisha guy are most definitely enemies. We're already way outnumbered.]",
    "vi": "Subaru: [Có tất cả Cửu Thần Tướng, thật may mắn đó là một số lẻ nên rất dễ hiểu khi đây thực chất là một cuộc chiến tranh đoạt quân số. Thế nhưng những người ủng hộ chúng ta hiện tại đều không rõ tung tích ra sao, và trước mắt, Arakiya cùng tên Chisha này chắc chắn 100% đã biến thành kẻ thù rồi. Chúng ta đang bị áp đảo hoàn toàn về quân số.]"
  },
  {
    "id": 36,
    "en": "They supposedly needed to secure no less than five, but their enemy already held two of the Nine Divine Generals under them.",
    "vi": "Bọn họ theo lý thuyết cần phải quy tụ thu phục được ít nhất năm người, thế nhưng kẻ địch bên kia hiện tại đã nắm giữ tới hai vị Thần Tướng dưới quyền của bọn chúng rồi."
  },
  {
    "id": 37,
    "en": "In addition, it was unclear whether the person who had aided Abel, Goz, was alive or dead. So there was a high chance that one of the cards they could play had been permanently removed from play.",
    "vi": "Hơn thế nữa, số phận sống chết của ngài Goz dũng cảm phò tá Abel đào thoát hiện vẫn mờ mịt chưa rõ. Do đó, có tỷ lệ cực kỳ cao là một quân bài quan trọng hộ thân của bọn họ đã bị loại bỏ vĩnh viễn khỏi bàn cờ."
  },
  {
    "id": 38,
    "en": "Subaru: [The situation becomes bleaker by the minute. It's good that the victory conditions clear, but is it actually realistic to persuade five of the Nine Divine Generals?]",
    "vi": "Subaru: [Tình thế đang ngày một trở nên tăm tối hiểm nghèo hơn rồi đấy. Việc điều kiện chiến thắng được vạch ra rõ ràng là tốt thật, nhưng liệu việc thuyết phục năm người trong Cửu Thần Tướng có thực sự khả thi ngoài thực tế trần trụi không?]"
  },
  {
    "id": 39,
    "en": "Al: [Hey hey, bro, I think you’re still underestimating the Emperor too much. I said it earlier, but he's already won the Imperial Selection Ceremony. They can't just flat out refuse his request to talk. As long as they don't turn him away at the front door…]",
    "vi": "Al: [Ơ kìa người anh em, tôi nghĩ cậu vẫn còn đánh giá quá thấp ngài Hoàng đế vĩ đại này đấy. Tôi đã nói trước đó rồi, ngài ấy chính là người chiến thắng tối hậu trong Nghi Lễ Tuyển Chọn Đế Vương mà. Bọn họ làm sao dám thẳng thừng từ chối yêu cầu diện kiến đàm đạo của ngài ấy chứ. Chỉ cần bọn họ không nhẫn tâm đuổi thẳng cổ ngài ấy ngay từ cổng chính…]"
  },
  {
    "id": 40,
    "en": "Priscilla: [――Then we shall get the opportunity to behead those who oppose us at the same time.]",
    "vi": "Priscilla: [――Thì đó đồng thời cũng chính là thời cơ ngàn năm có một để ta tự tay chém bay đầu lũ phản nghịch dám chống đối.]"
  },
  {
    "id": 41,
    "en": "Subaru: [We need to get them on our side!]",
    "vi": "Subaru: [Mục tiêu là phải thu phục bọn họ về phe mình cơ mà!]"
  },
  {
    "id": 42,
    "en": "Al's remarks, posing as an attempt to dissolve Subaru's doubts, were incinerated by the extreme comment of his mistress, of all people. They were talking about how to get the Nine Divine Generals on their side, but devising a way to kill the Nine Divine Generals who would not be on their side would be putting carriage before the ground dragon.",
    "vi": "Lời nhận xét của Al, vốn định xoa dịu những mối hoài nghi dằn vặt của Subaru, đã bị thiêu rụi hoàn toàn bởi câu bình luận cực đoan đẫm máu của chủ nhân hắn. Bọn họ đang bàn luận mưu tính phương án lôi kéo Cửu Thần Tướng về phe mình, vậy mà cô ta lại đòi tiêu diệt những Thần Tướng không chịu quy thuận, thế thì chẳng khác nào đặt cỗ xe lên trước long đất cả."
  },
  {
    "id": 43,
    "en": "Abel: [But the clown in the iron helmet there is correct. In fact, if I state I want to meet them, there would be no General who would refuse. The problem is what happens after we meet.]",
    "vi": "Abel: [Nhưng tên hề đội mũ sắt kia nói không sai đâu. Trên thực tế, nếu ta tuyên bố muốn gặp mặt bọn họ, sẽ không có bất kỳ vị Thần Tướng nào dám cự tuyệt. Vấn đề nan giải thực sự nằm ở những gì xảy ra sau khi đàm đạo.]"
  },
  {
    "id": 44,
    "en": "Al: [Is the clown in the iron helmet me?]",
    "vi": "Al: [Tên hề đội mũ sắt là đang ám chỉ tôi đó hả?]"
  },
  {
    "id": 45,
    "en": "Subaru: [Không có ai khác đội cái mũ sắt lập dị đó ở đây đâu. Nếu anh có ý kiến gì về việc gã coi anh là tên hề, thì cứ việc làm đơn khiếu nại nộp lên Priscilla đi.]",
    "vi": "Subaru: [Không có ai khác đội cái mũ sắt lập dị đó ở đây đâu. Nếu anh có ý kiến gì về việc gã coi anh là tên hề, thì cứ việc làm đơn khiếu nại nộp lên Priscilla đi.]"
  },
  {
    "id": 46,
    "en": "After silencing Al’s teasing, Subaru returned to the topic at hand.",
    "vi": "Sau khi dập tắt lời trêu chọc đùa cợt của Al, Subaru nhanh chóng đưa cuộc thảo luận quay lại chủ đề chính."
  },
  {
    "id": 47,
    "en": "Subaru: [In the first place, I don't understand the system of the Nine Divine Generals. I've always imagined them as nine Generals who report directly to the Emperor, but doesn’t that mean they’re all in the Imperial Capital?]",
    "vi": "Subaru: [Ngay từ đầu, tôi vẫn chưa hiểu rõ cơ chế hoạt động của Cửu Thần Tướng. Tôi cứ luôn mường tượng bọn họ là chín vị đại tướng quân túc trực báo cáo trực tiếp cho Hoàng đế, nhưng nếu như vậy thì chẳng phải tất cả bọn họ đều đang đóng quân tại Hoàng Đô sao?]"
  },
  {
    "id": 48,
    "en": "Priscilla: [Generals of the First-Class are the cornerstone of this nation. Consider how uselessly vast the Empire is. Even though the Imperial Capital lies in the center of the country, how can they move quickly in an emergency if they all sojourn in the Imperial Capital?]",
    "vi": "Priscilla: [Các đại tướng quân đệ nhất đẳng chính là nền móng cốt lõi của giang sơn quốc gia này. Ngươi hãy nhìn xem lãnh thổ Đế Quốc này rộng lớn bao la đến nhường nào đi. Dẫu cho Hoàng Đô tọa lạc ngay tại vị trí trung tâm tâm điểm quốc gia, làm sao bọn họ có thể ứng biến chi viện kịp thời trong các tình huống khẩn cấp nếu tất cả cứ mãi túc trực ru rú ở Hoàng Đô chứ?]"
  },
  {
    "id": 49,
    "en": "Zikr: [Yes. Although it has been dramatically reduced during His Excellency’s reign, there is still no end to the fires of civil unrest that smolder in the Empire. Having a firm foothold in the Imperial Capital is not enough to guarantee the safeguarding of the Empire.]",
    "vi": "Zikr: [Dạ phải. Mặc dù tình trạng này đã được giảm thiểu đáng kể trong thời gian trị vì của Bệ hạ, ngọn lửa âm ỉ của những cuộc nội loạn bạo loạn vẫn chưa bao giờ chấm dứt hoàn toàn tại Đế Quốc. Việc chỉ củng cố lực lượng phòng thủ vững chắc tại Hoàng Đô là hoàn toàn không đủ để đảm bảo an ninh bảo an cho cả Đế Quốc rộng lớn.]"
  },
  {
    "id": 50,
    "en": "Subaru: […In other words, the Nine Divine Generals in question are scattered all over, outside the Imperial Capital?]",
    "vi": "Subaru: […Nói cách khác, những vị Thần Tướng trong Cửu Thần Tướng mà chúng ta đang bàn tới thực chất đang đóng quân rải rác khắp nơi ngoài Hoàng Đô sao?]"
  },
  {
    "id": 51,
    "en": "As Priscilla and Zikr supplemented information, Subaru put his hand on his chin in understanding.",
    "vi": "Khi nghe Priscilla cùng Zikr bổ sung thêm những thông tin hữu ích, Subaru khẽ đưa tay lên cằm tỏ ý đã thấu hiểu sự tình."
  },
  {
    "id": 52,
    "en": "Following a familiar example, Roswaal had also been bestowed with the grandiose title of Margrave of the Western Lands in the Kingdom of Lugunica, and was obligated to act quickly in the Kingdom's time of need.",
    "vi": "Liên tưởng đến một ví dụ quen thuộc bên tai, Roswaal yêu quý cũng từng được ban tặng danh hào lẫy lừng là Lãnh chúa Vùng biên giới phía Tây của Vương Quốc Lugunica, và có nghĩa vụ phải lập tức ứng biến chi viện mỗi khi Vương Quốc lâm nguy."
  },
  {
    "id": 53,
    "en": "Of course, he had the permission to set up a private army in his territory for that purpose. ――However, in Roswaal's case, it seemed that his individual strength was greater than that a poorly-organized army.",
    "vi": "Tất nhiên, lão ta sở hữu quyền hạn được phép xây dựng một đội quân tư nhân riêng biệt tại lãnh địa của mình để phục vụ cho mục đích đó. ――Tuy nhiên, ở trường hợp của Roswaal, dường như thực lực cá nhân của lão ta còn khủng khiếp áp đảo hơn cả một đội quân ô hợp thiếu tổ chức."
  },
  {
    "id": 54,
    "en": "Just by raining down fireballs while flying in the sky, he would be able to completely defeat most opponents.",
    "vi": "Chỉ riêng việc lão bay lượn trên bầu trời và trút xuống những cơn mưa quả cầu lửa cuồng bạo đã đủ để quét sạch hoàn toàn hầu hết mọi đối thủ cản đường."
  },
  {
    "id": 55,
    "en": "Subaru: [When you think about it, that guy is also quite the cheat unit… I'm a little curious to see where he stands compared to the Nine Divine Generals.]",
    "vi": "Subaru: [Nghĩ kỹ lại, gã đó quả thực là một thực thể sở hữu sức mạnh phi lý như trò gian lận vậy… Tôi cũng hơi tò mò không biết thực lực của lão ta khi đặt lên bàn cân so sánh với Cửu Thần Tướng thì sẽ thế nào nhỉ.]"
  },
  {
    "id": 56,
    "en": "Kuna: [I don't know, but I think we're getting off track here, Natsumi.]",
    "vi": "Kuna: [Ta không biết rõ chuyện đó lắm, nhưng ta nghĩ em đang bàn chuyện đi hơi chệch hướng quá rồi đấy, Natsumi.]"
  },
  {
    "id": 57,
    "en": "Subaru: [My bad. Anyway, I know now that the Nine Divine Generals are scattered across the country. If that's the case, am I correct in understanding that not all of them were involved in the coup d’état in the Imperial Capital?]",
    "vi": "Subaru: [Tôi xin lỗi. Dẫu sao thì, hiện tại tôi đã biết rõ việc Cửu Thần Tướng đang đóng quân rải rác khắp giang sơn quốc gia. Nếu đúng là như vậy, liệu tôi có thể hiểu rằng không phải tất cả bọn họ đều tham gia vào cuộc đảo chính tại Hoàng Đô không?]"
  },
  {
    "id": 58,
    "en": "Abel: [From what I have seen, and from a practical standpoint, I would say so.]",
    "vi": "Abel: [Dựa trên những gì ta chứng kiến và từ góc nhìn thực tiễn khách quan, ta khẳng định điều đó là chính xác.]"
  },
  {
    "id": 59,
    "en": "Abel nodded his head to Subaru in confirmation.",
    "vi": "Abel gật đầu nhẹ nhàng hướng về phía Subaru để xác nhận sự tình."
  },
  {
    "id": 60,
    "en": "To be honest, Subaru was unsure about Abel's assessment, as he had just been found to be quite unpopular, but the fact that no one around him had pointed it out suggested that it was something that could be accepted for the time being.",
    "vi": "Thành thật mà nói, Subaru có phần hoài nghi về phán đoán đánh giá của Abel, bởi uy tín nhân tâm của gã vừa mới lộ ra là vô cùng thảm hại, dẫu thế việc những người túc trực xung quanh không một ai lên tiếng phản đối cho thấy đây là một thông tin hoàn toàn có thể tạm chấp nhận được."
  },
  {
    "id": 61,
    "en": "Anyway, the good news was, that not all the Nine Divine Generals had become enemies.",
    "vi": "Dẫu sao thì, tin mừng lớn nhất chính là việc không phải toàn bộ Cửu Thần Tướng đều đã đứng về phía chiến tuyến kẻ thù."
  },
  {
    "id": 62,
    "en": "The victory condition that the more Nine Divine Generals they secured, the more likely they were to win this battle, made sense. Other than that, if there was one thing that Subaru had doubts about, it was――,",
    "vi": "Điều kiện chiến thắng được vạch ra rằng thu phục được càng nhiều Thần Tướng trong Cửu Thần Tướng về phe mình thì cơ hội thắng lợi càng lớn hoàn toàn hợp lý. Ngoại trừ điều đó ra, nếu còn một việc gì khiến Subaru dằn vặt thắc mắc, thì đó chính là――,"
  },
  {
    "id": 63,
    "en": "Subaru: [Sorry for asking so many questions, but I got an additional question. If the Nine Divine Generals are simply ordered by strength, then priority should be given to the ones of the highest rank, correct?]",
    "vi": "Subaru: [Tôi xin lỗi vì đã hỏi quá nhiều, nhưng tôi muốn thắc mắc thêm một câu nữa. Nếu thứ tự cấp bậc xếp hạng của Cửu Thần Tướng được phân định thuần túy dựa trên thực lực mạnh yếu, thì chúng ta nên ưu tiên lôi kéo những kẻ đứng ở thứ hạng cao nhất trước tiên đúng chứ?]"
  },
  {
    "id": 64,
    "en": "Abel: [Yes, that perception is correct.]",
    "vi": "Abel: [Phải, nhận thức đó của ngươi là chuẩn xác.]"
  },
  {
    "id": 65,
    "en": "Subaru: [Then the one strong enough to be on par with Reinhardt, is Cecilus, right? It’s common sense that we go for that person… wouldn't he be enough?]",
    "vi": "Subaru: [Vậy thì kẻ đủ mạnh mẽ để được đặt lên bàn cân so tài ngang ngửa với Reinhardt chính là Cecilus đúng không? Theo lẽ thường tình thì chúng ta chỉ cần tiếp cận thu phục duy nhất nhân vật tầm cỡ đó thôi… là đã quá đủ để định đoạt cục diện rồi đúng chứ?]"
  },
  {
    "id": 66,
    "en": "One among the four strongest human beings, those who had made a name for themselves in the Four Great Countries.",
    "vi": "Một thực thể kiêu hãnh đứng trong hàng ngũ bốn con người mạnh nhất thế gian, những người đã gầy dựng danh tiếng lẫy lừng khắp Bốn Đại Quốc."
  },
  {
    "id": 67,
    "en": "If Cecilus, who had been mentioned to be amongst these four, was a person considered to be on par with Reinhard, then it would be very much as if the outcome of the battle would be decided by that person alone.",
    "vi": "Nếu Cecilus, nhân vật kiêu hãnh được liệt kê trong số bốn thực thể tối cao đó, thực sự sở hữu sức mạnh ngang ngửa kỳ phùng địch thủ Reinhard vĩ đại, thì kết quả của cuộc chiến tranh đoạt vương quyền này hoàn toàn có thể được định đoạt chỉ bằng sự hiện diện duy nhất của ngài ấy."
  },
  {
    "id": 68,
    "en": "In fact, that Reinhard could win even if he fought everyone in the Kingdom, was an extraordinary expectation and view that had sprouted in Subaru.",
    "vi": "Trên thực tế, niềm tin mãnh liệt rằng Reinhardt hoàn toàn có thể tự mình giành chiến thắng dẫu phải đơn độc chống chọi lại toàn bộ quân đội Vương Quốc chính là một sự kỳ vọng phi thường đã ăn sâu vào tâm trí Subaru."
  },
  {
    "id": 69,
    "en": "So, naturally, he held such sort of presupposition for Cecilus, who was Reinhard’s equal.",
    "vi": "Vì thế, lẽ tự nhiên cậu cũng áp đặt một sự giả định tuyệt đối tương tự đối với Cecilus, kỳ phùng địch thủ ngang tầm của Reinhardt."
  },
  {
    "id": 70,
    "en": "However――,",
    "vi": "Thế nhưng――,"
  },
  {
    "id": 71,
    "en": "Abel: […It is true that if we secure that person, all the problems of our strength shall be solved in one move.]",
    "vi": "Abel: […Đúng là nếu chúng ta thu phục quy tụ được thực thể đó về dưới trướng, mọi vấn đề thiếu hụt quân sự chiến lực của chúng ta sẽ được giải quyết triệt để chỉ bằng một nước cờ duy nhất.]"
  },
  {
    "id": 72,
    "en": "Subaru: [If that’s the case, why do you look so bitter?]",
    "vi": "Subaru: [Nếu đã như vậy, sao trông gương mặt anh lại có vẻ đắng cay cay đắng thế kia?]"
  },
  {
    "id": 73,
    "en": "Frowning, Abel's expression was poor as he answered Subaru's question.",
    "vi": "Cau mày ủ dột, sắc mặt của Abel vô cùng tồi tệ khi trả lời câu hỏi chất vấn của Subaru."
  },
  {
    "id": 74,
    "en": "While Subaru’s expectations did not appear seem to be far off, there was no improvement on his gloomy expression. Abel revealed the reason for this with a small exhale.",
    "vi": "Mặc dù những suy đoán giả định của Subaru có vẻ hoàn toàn trùng khớp chuẩn xác, sắc mặt u ám u uẩn của gã vẫn không hề khá lên chút nào. Abel khẽ thở dài một tiếng tiết lộ nguồn cơn sự tình."
  },
  {
    "id": 75,
    "en": "Abel: [The reason why securing the Nine Divine Generals is a condition for victory, is because Generals and Soldiers alike shall follow their military orders. The more Nine Divine Generals one possesses under their banner, the more troops shall join your forces. Do you understand?]",
    "vi": "Abel: [Lý do vì sao việc thu phục Cửu Thần Tướng lại là điều kiện quyết định thắng bại, chính là bởi vì các tướng sĩ tướng lĩnh và binh lính cấp dưới dưới quyền sẽ tự khắc tuân theo quân lệnh chỉ thị của bọn họ. Ngươi quy tụ được càng nhiều Thần Tướng dưới trướng kì hiệu của mình, lực lượng chư hầu binh lính đồng minh gia nhập sẽ càng đông đảo áp đảo. Ngươi đã thấu hiểu chưa?]"
  },
  {
    "id": 76,
    "en": "Subaru: [――? Yes, I understand. That's why I’m saying we should aim to have the strongest guy on our side. Or is it that him being called the Empire’s strongest is not true?]",
    "vi": "Subaru: [――? Rồi, tôi hiểu rõ chuyện đó. Chính vì thế tôi mới bảo chúng ta nên tập trung lôi kéo kẻ mạnh nhất về phe mình. Hay là cái danh xưng đệ nhất võ nghệ Đế Quốc của ngài ấy chỉ là hữu danh vô thực hư danh thôi sao?]"
  },
  {
    "id": 77,
    "en": "Abel: [No, there is no question that he is the strongest in the Empire. However, there is a problem.]",
    "vi": "Abel: [Không, thực lực vô song đệ nhất Đế Quốc của ngài ấy là điều tuyệt đối không cần bàn cãi. Tuy nhiên, có một rắc rối cực lớn.]"
  },
  {
    "id": 78,
    "en": "Subaru: [A problem?]",
    "vi": "Subaru: [Rắc rối gì cơ?]"
  },
  {
    "id": 79,
    "en": "Abel: [――He is not very popular.]",
    "vi": "Abel: [――Ngài ấy hoàn toàn không có uy tín nhân tâm gì cả.]"
  },
  {
    "id": 80,
    "en": "Subaru stopped thinking for a while, due to the words that had been uttered in pent-up frustration.",
    "vi": "Subaru bỗng đứng hình, não bộ ngừng hoạt động trong chốc lát trước câu trả lời đầy vẻ bất lực kìm nén dồn nén của gã."
  },
  {
    "id": 81,
    "en": "The words he was told slowly penetrated his brain, as he wondered what the problem was. “Lack of popularity”, that information was digested correctly.",
    "vi": "Những câu chữ gã thốt ra chậm rãi thâm nhập vào trí óc cậu, khi cậu vẫn đang ngơ ngác tự hỏi rắc rối đó là gì. “Thiếu hụt uy tín nhân tâm”, thông tin đó cuối cùng đã được tiếp thu một cách chuẩn xác."
  },
  {
    "id": 82,
    "en": "Subaru: [Should you be saying that?]",
    "vi": "Subaru: [Anh lấy tư cách gì mà đi nhận xét người khác như thế chứ?]"
  },
  {
    "id": 83,
    "en": "Abel: [It is factual. His rank is that of the First, amongst the Generals of the First-Class of the Empire, but he holds no authority. Even if I were to give him the power, he would be incapable of doing anything with it. The only thing he can do, is to cut people down.]",
    "vi": "Abel: [Đó là sự thật khách quan. Cấp bậc võ nghệ xếp hạng của ngài ấy tuy đứng đệ nhất trong số các đại tướng quân đệ nhất đẳng của Đế Quốc, nhưng ngài ấy không hề nắm giữ thực quyền gì cả. Ngay cả khi ta có ban phát thực quyền cho ngài ấy, ngài ấy cũng không biết cách quản lý điều hành nó. Thứ duy nhất ngài ấy có thể làm thành thạo chỉ là chém giết người khác mà thôi.]"
  },
  {
    "id": 84,
    "en": "Subaru: [You can't put someone like that in the position of army general!]",
    "vi": "Subaru: [Ai lại đi bổ nhiệm một người lập dị như thế vào vị trí thống lĩnh quân đội bao giờ cơ chứ!]"
  },
  {
    "id": 85,
    "en": "Al: [Easy, easy, calm down, bro! That's just the way of the Empire, you know!]",
    "vi": "Al: [Bình tĩnh, bình tĩnh nào người anh em! Đó chính là phong cách đặc thù đặc trưng của Đế Quốc này mà cậu biết đấy!]"
  },
  {
    "id": 86,
    "en": "With that criticism of Cecilus being spoken by Abel, Subaru was held back by Al. With his one arm around Subaru, Al tilted his head to look at Abel, and said,",
    "vi": "Trước lời chỉ trích đanh thép nhắm thẳng vào Cecilus của Abel, Subaru được Al vội vàng giữ lại. Dùng một cánh tay duy nhất của mình ôm lấy Subaru, Al nghiêng đầu nhìn Abel rồi lên tiếng bảo,"
  },
  {
    "id": 87,
    "en": "Al: [Actually, you've given him nothing but the title of First. Maybe you should’ve tried giving him the authority he deserves for his position. Maybe he's been taken advantage of by someone who was sweet-talking him, you know?]",
    "vi": "Al: [Nói thực ra, ngài chẳng ban phát cho ngài ấy cái gì ngoài cái danh xưng Đệ Nhất cả. Đáng ra ngài nên thử trao cho ngài ấy thực quyền xứng đáng với vị thế của mình chứ. Nhỡ đâu ngài ấy đã bị kẻ nào đó dùng lời ngon tiếng ngọt dụ dỗ lợi dụng mất rồi thì sao?]"
  },
  {
    "id": 88,
    "en": "Abel: [Of course, that person being utilised by anyone other than me is not within my wishes. If there were such a danger, I would have disposed of him earlier.]",
    "vi": "Abel: [Lẽ tự nhiên, việc thực thể đó bị bất kỳ kẻ nào khác ngoài ta lợi dụng dắt mũi là điều tuyệt đối nằm ngoài mong muốn ý nguyện của ta. Nếu thực sự tồn tại mối hiểm họa nguy hại như thế, ta đã tự tay thanh trừng giải quyết ngài ấy từ lâu rồi.]"
  },
  {
    "id": 89,
    "en": "Subaru: [But you were in the forest, alone and helpless…!]",
    "vi": "Subaru: [Thế mà rốt cuộc anh lại phải trốn chui trốn lủi trong rừng có một mình bất lực kia kìa…!]"
  },
  {
    "id": 90,
    "en": "Even if he said that he was holding the reins, if the actual circumstances differed, then he was just bragging.",
    "vi": "Dẫu gã có tự tin tuyên bố rằng mình vẫn đang nắm giữ dây cương điều khiển điều hành mọi thứ, nếu hiện thực trần trụi lại hoàn toàn trái ngược, thì đó chẳng qua cũng chỉ là lời huênh hoang khoác lác gượng ép thôi."
  },
  {
    "id": 91,
    "en": "In the first place, could the idea that the person labelled as the strongest in the Empire was unable to gather popularity in the Vollachian Empire, dedicated to this strength as it was, be taken seriously?",
    "vi": "Ngay từ đầu, liệu quan điểm cho rằng một mãnh tướng oai phong lẫm liệt được mệnh danh là mạnh nhất Đế Quốc lại hoàn toàn thất bại trong việc quy tụ nhân tâm thu phục tình cảm ở một nơi sùng bái thực lực như Đế Quốc Vollachia có thực sự đáng tin cậy không?"
  },
  {
    "id": 92,
    "en": "Subaru: [What about that part, Zikr-san!]",
    "vi": "Subaru: [Còn về khía cạnh đó thì sao, Zikr-san!]"
  },
  {
    "id": 93,
    "en": "Zikr: [Ta sao?]",
    "vi": "Zikr: [Ta sao?]"
  },
  {
    "id": 94,
    "en": "Subaru: [Eh, yeah. As a General of the Empire, I’d like to hear your honest opinion. What do you think of General First-Class Cecilus?]",
    "vi": "Subaru: [Dạ phải. Với tư cách là một tướng lĩnh oai phong của Đế Quốc, tôi rất muốn nghe những lời nhận xét đánh giá khách quan chân thực nhất của anh. Anh nghĩ thế nào về Thần Tướng nhất đẳng Cecilus?]"
  },
  {
    "id": 95,
    "en": "Being probed for information, Zikr spoken \"Right then,\" and crossed his arms briefly in thought.",
    "vi": "Bị gặng hỏi dò xét thông tin, Zikr khẽ thốt lên \"Được rồi,\" và khoanh hai tay trước ngực trầm ngâm suy nghĩ trong chốc lát."
  },
  {
    "id": 96,
    "en": "Then, nodding several times at the expectant gaze in Subaru's eyes.",
    "vi": "Sau đó, anh gật đầu liên tục vài cái trước ánh mắt ngập tràn sự kỳ vọng mong mỏi của Subaru."
  },
  {
    "id": 97,
    "en": "Zikr: [First of all, there is no doubt that Cecilus-dono is the cornerstone of our national defense and the symbol of the strength of the Vollachian Empire. \"The people of the empire must be strong\", he is the embodiment of that way of life.]",
    "vi": "Zikr: [Trước tiên, tuyệt đối không cần bàn cãi việc Cecilus-dono chính là bức tường thành cốt lõi bảo vệ an ninh quốc phòng của giang sơn và là biểu tượng tối cao cho sức mạnh vô song của Đế Quốc Vollachia. Quy luật \"thần dân Đế Quốc bắt buộc phải dũng mãnh kiên cường\" hoàn toàn được ngài ấy hiện thân một cách trọn vẹn nhất.]"
  },
  {
    "id": 98,
    "en": "Subaru: [Oh, that sounds good? So, what is it, then?]",
    "vi": "Subaru: [Ồ, nghe có vẻ vô cùng tốt đẹp đấy chứ? Thế thì vấn đề ở đây là gì vậy?]"
  },
  {
    "id": 99,
    "en": "Zikr: [As a person he is carefree, friendly, and has a sunny and pleasant demeanor towards anyone. Overall…]",
    "vi": "Zikr: [Xét về mặt tính cách cá nhân, ngài ấy là một người vô cùng phóng khoáng tự do, thân thiện dễ gần, và luôn đối xử ôn hòa cởi mở dễ mến với bất kỳ ai. Dẫu thế nhìn chung thì…]"
  },
  {
    "id": 100,
    "en": "Subaru: [Nhìn chung thì sao cơ…?]",
    "vi": "Subaru: [Nhìn chung thì sao cơ…?]"
  },
  {
    "id": 101,
    "en": "Zikr: [Many of the troops fear Cecilus-dono to be an incomprehensible monster and impossible to communicate with on a deeper level. I believe His Excellency is correct in his assessment.]",
    "vi": "Zikr: [Hầu hết binh lính tướng sĩ cấp dưới đều vô cùng khiếp sợ Cecilus-dono, coi ngài ấy như một con quái vật kỳ dị không thể thấu hiểu nổi và hoàn toàn bất khả thi để có thể giao tiếp thấu hiểu ở một tầng mức sâu sắc hơn. Ta tin rằng đánh giá của Bệ hạ là hoàn toàn chuẩn xác không sai lệch.]"
  },
  {
    "id": 102,
    "en": "Subaru: [Đang nhận xét tốt đẹp bỗng nhiên quay ngoắt 180 độ thế kia hả trời!?]",
    "vi": "Subaru: [Đang nhận xét tốt đẹp bỗng nhiên quay ngoắt 180 độ thế kia hả trời!?]"
  },
  {
    "id": 103,
    "en": "Zikr, who had only painted the picture of a good person up to this point, chose his words quite carefully in his evaluation.",
    "vi": "Zikr, người nãy giờ chỉ vẽ nên bức tranh về một đấng nam nhi trượng nghĩa dễ mến, đã phải cân nhắc lựa chọn câu chữ cực kỳ cẩn thận tỉ mỉ trong phần đánh giá tồi tệ phía sau."
  },
  {
    "id": 104,
    "en": "Some people would think that he was just trying to be considerate of Abel, the Emperor, but the wrinkles between his eyebrows showed that he was putting in a lot of effort, so he probably told the truth.",
    "vi": "Có lẽ vài người sẽ nghĩ anh chỉ đang cố tình hùa theo vuốt ve phán đoán của Hoàng đế Abel, dẫu thế những nếp nhăn nhíu lại trên trán cho thấy anh đã phải vắt óc suy nghĩ nỗ lực rất nhiều, nên đây chắc chắn là những lời nhận xét chân thực nhất lòng anh."
  },
  {
    "id": 105,
    "en": "In other words――,",
    "vi": "Nói cách khác thì――,"
  },
  {
    "id": 106,
    "en": "Priscilla: [It would be unacceptably reckless to even attempt to suppress the First of the Nine Divine Generals with the intent to tip the scales in a single swoop. I cannot comprehend how you would come up with a suitable idea, even if your head was not filled with foolish ruminations.]",
    "vi": "Priscilla: [Sẽ là một sự liều lĩnh ngu xuẩn không thể dung thứ nếu ngươi dám có ý đồ tiếp cận thanh trừng chém hạ vị Thần Tướng đứng đầu Cửu Thần Tướng với mong muốn lật ngược thế cờ chỉ bằng một nước đi duy nhất. Ta không tài nào hiểu nổi làm sao ngươi lại có thể nghĩ ra một ý tưởng ngớ ngẩn điên rồ như vậy, dẫu cho đầu óc ngươi không chứa đầy những suy nghĩ nông cạn hão huyền đi nữa.]"
  },
  {
    "id": 107,
    "en": "Subaru: [Shut up! Don't blame me for his lack of popularity! If the Emperor and the Generals aren't popular, it's no wonder a coup d'etat was called!]",
    "vi": "Subaru: [Câm miệng giùm tôi đi! Đừng có đổ hết trách nhiệm tội lỗi lên đầu tôi chỉ vì việc ngài ấy thiếu hụt uy tín nhân tâm chứ! Nếu cả Hoàng đế trị vì lẫn các Đại Tướng quân quân đội đều thảm hại không có lòng dân như thế, thì cuộc đảo chính nổ ra cũng là điều hiển nhiên thôi!]"
  },
  {
    "id": 108,
    "en": "Abel: [How many times are you going to repeat this? Do not think that your disrespect shall be overlooked forever.]",
    "vi": "Abel: [Ngươi định lặp đi lặp lại những lời đại nghịch bất đạo này bao nhiêu lần nữa hả? Đừng hoang tưởng nghĩ rằng sự bất kính vô lễ của ngươi sẽ mãi được ta nhắm mắt làm ngơ dung thứ đâu.]"
  },
  {
    "id": 109,
    "en": "Receiving sharp glares from Priscilla and Abel respectively, Subaru stuck out his tongue at them.",
    "vi": "Nhận lấy những ánh mắt lườm nguýt sắc lẹm đầy thù địch từ cả Priscilla lẫn Abel trút xuống, Subaru khẽ lè lưỡi trêu chọc hai người bọn họ."
  },
  {
    "id": 110,
    "en": "However, it was true that his plan had been shattered with ease. If securing the Nine Divine Generals was equivalent to securing battle numbers, then securing those who were not popular possessed no merit whatsoever.",
    "vi": "Tuy nhiên, sự thật phũ phàng là kế hoạch mưu lược của cậu đã bị nghiền nát tan tành một cách dễ dàng. Nếu mục tiêu quy tụ Cửu Thần Tướng là để tranh đoạt quân số binh lực ủng hộ phò tá, thì việc chiêu mộ một kẻ lập dị dẫu mạnh mẽ vô song nhưng hoàn toàn không có lòng dân quả thực chẳng mang lại chút lợi lộc giá trị nào."
  },
  {
    "id": 111,
    "en": "Subaru: [In fact, if they’re not popular can we leave them alone…?]",
    "vi": "Subaru: [Thực tế thì, nếu ngài ấy không có uy tín nhân tâm gì cả, chúng ta có thể mặc kệ bỏ mặc ngài ấy được không…?]"
  },
  {
    "id": 112,
    "en": "Abel: [That is also a problem. That person has the ability to change the course of the war all by his lonesome, depending on the situation. Even if we are capable of securing all of the remaining Divine Generals, there is a good chance that he alone could take my head.]",
    "vi": "Abel: [Đó cũng là một rắc rối cực kỳ nan giải đấy. Thực thể đó sở hữu năng lực phi lý đủ để tự mình đảo ngược hoàn toàn cục diện chiến sự chỉ trong một cái chớp mắt tùy thuộc vào hoàn cảnh tình hình. Dẫu cho chúng ta có xuất sắc thu phục được toàn bộ các Thần Tướng còn lại đi chăng nữa, thì có tỷ lệ rất cao là một mình ngài ấy vẫn thừa sức lấy đầu ta dễ như trở bàn tay.]"
  },
  {
    "id": 113,
    "en": "Subaru: [That’s a hard guy to handle! He's an absurd hindrance, isn’t he?!]",
    "vi": "Subaru: [Quả thực là một gã lập dị vô cùng khó nhằn và phiền phức! Một chướng ngại vật cực kỳ vô lý đúng không hả?!]"
  },
  {
    "id": 114,
    "en": "Rushing to secure him was not warranted, but he was too dangerous of a bomb to leave unattended.",
    "vi": "Việc vội vã lôi kéo quy tụ ngài ấy về phe mình thì không khả thi, nhưng ngài ấy lại giống như một quả bom hẹn giờ di động quá đỗi nguy hiểm để có thể bỏ mặc phớt lờ."
  },
  {
    "id": 115,
    "en": "It was only now, in a foreign land far away from home, that Subaru realized how much of a good asset Reinhard was, whose ability and humanity were guaranteed.",
    "vi": "Chỉ đến tận lúc này, khi đang lưu lạc nơi đất khách quê người xa xôi hiểm nguy cách biệt thế giới cũ, Subaru mới thấm thía thấu hiểu sâu sắc rằng Reinhardt vĩ đại của cậu là một quân bài hộ thân vô giá trị đến nhường nào, một thực thể tối cao mà cả thực lực lẫn phẩm hạnh đạo đức đều được bảo chứng tuyệt đối."
  }
];

const outPath = path.join(tempDir, 'ch29_part1.json');
fs.writeFileSync(outPath, JSON.stringify(part1, null, 2), 'utf-8');
console.log(`Saved ${part1.length} paragraphs to ${outPath}`);
