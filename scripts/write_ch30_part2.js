import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tempDir = path.join(__dirname, 'translation_temp');

const part2 = [
  {
    "id": 141,
    "en": "Naturally, Subaru's inner thoughts were mixed, though.",
    "vi": "Mặc dù vậy, lẽ tự nhiên tâm trí của Subaru vẫn vô cùng hỗn độn ngổn ngang trăm mối."
  },
  {
    "id": 142,
    "en": "Rem: [It throws me off when you make a grim face in that appearance.]",
    "vi": "Rem: [Nhìn cái gương mặt cau có cau có ủ dột của anh trong hình dạng trang phục giả gái đó làm tôi thấy vô cùng mất tự nhiên đấy.]"
  },
  {
    "id": 143,
    "en": "Subaru: [Oh, yeah, my bad. My makeup’s messed up, it’s rather unsightly.]",
    "vi": "Subaru: [À, ừ, là lỗi của tôi. Lớp trang điểm của tôi vốn đã tả tơi cả rồi, trông quả thực có hơi mất thẩm mỹ thật.]"
  },
  {
    "id": 144,
    "en": "Rem: [It looked unsightly even when you had it on properly.]",
    "vi": "Rem: [Ngay cả khi anh có trang điểm đàng hoàng tử tế thì trông nó vẫn vô cùng mất thẩm mỹ mà.]"
  },
  {
    "id": 145,
    "en": "Subaru: [Tohoho...]",
    "vi": "Subaru: [Hic hic...]"
  },
  {
    "id": 146,
    "en": "Subaru's shoulders slumped in depression at Rem's remark, which was as harsh as ever. Subaru then slowly sat side-by-side with Rem, at her right, opposite of Louis.",
    "vi": "Đôi bờ vai Subaru sụp xuống đầy chán nản trước lời nhận xét phũ phàng xỏ xiên gay gắt như thường lệ của Rem. Sau đó Subaru chậm rãi ngồi xuống bệt ngay bên cạnh Rem, ở phía bên phải cô, đối diện với vị trí của Louis."
  },
  {
    "id": 147,
    "en": "He peeked at Rem's protesting gaze, but consciously ignored it.",
    "vi": "Cậu hé mắt liếc nhìn biểu cảm phản đối kịch liệt phản đối của Rem, dẫu thế chủ động tảng lờ phớt lờ nó đi."
  },
  {
    "id": 148,
    "en": "Subaru: [Rem, you did great. Everyone survived thanks to you.]",
    "vi": "Subaru: [Rem à, cô đã làm vô cùng xuất sắc rồi. Nhờ có sự hy sinh của cô mà toàn bộ mạng sống của mọi người mới được bảo toàn đấy.]"
  },
  {
    "id": 149,
    "en": "Rem: [...I’m keenly aware of my lack of power. To tell you the truth, I'm useless.]",
    "vi": "Rem: [...Tôi tự ý thức được sâu sắc sự thiếu hụt sức mạnh pháp lực của bản thân mình. Thành thật mà nói, tôi quả thực là một kẻ vô dụng vô tích sự.]"
  },
  {
    "id": 150,
    "en": "Subaru: [Rem...]",
    "vi": "Subaru: [Rem...]"
  },
  {
    "id": 151,
    "en": "In response to the words of gratitude, Rem looked down at her hands in frustration. As she regarded those pale fingers, Rem was biting her lip weakly.",
    "vi": "Đáp lại những lời tri ân biết ơn sâu sắc của cậu, Rem lẳng lặng cúi đầu nhìn chăm chăm vào đôi bàn tay đầy bất lực u uất. Quan sát những ngón tay trắng bệch yếu ớt đó, Rem khẽ cắn chặt bờ môi khóc không thành tiếng."
  },
  {
    "id": 152,
    "en": "Subaru: [You’re definitely not useless. Even though your memories are fuzzy, you were able to use your healing magic splendidly and saved a lot of people. But...]",
    "vi": "Subaru: [Cô tuyệt đối không phải là kẻ vô dụng đâu. Dẫu cho ký ức hiện tại vẫn còn vô cùng mờ mịt chưa phục hồi, cô vẫn thi triển trị liệu ma pháp một cách vô cùng xuất chúng để cứu sống bao nhiêu mạng người cơ mà. Thế nhưng...]"
  },
  {
    "id": 153,
    "en": "Rem: [I know. If I were whole, this magic wouldn't have been like this.]",
    "vi": "Rem: [Ta hiểu rõ mà. Nếu bản thân ta hoàn toàn vẹn toàn không bị khiếm khuyết, ma pháp của tôi chắc chắn sẽ không thảm hại thế này đâu.]"
  },
  {
    "id": 154,
    "en": "Subaru: [Like this?]",
    "vi": "Subaru: [Thảm hại thế này sao?]"
  },
  {
    "id": 155,
    "en": "Rem: [My healing magic. The magic I'm using right now is by intuition, in other words, self-taught. Though with Louis-chan's assistance, I've managed to get it into shape. Even then...]",
    "vi": "Rem: [Trị liệu ma pháp của tôi. Lượng ma pháp ta đang cố thi triển lúc này hoàn toàn dựa vào bản năng trực giác, hay nói cách khác là tự học tự ngộ ra mà thôi. Dẫu biết rằng nhờ có sự trợ giúp đắc lực phò tá của Louis-chan mà tôi mới có thể định hình được nó trơn tru. Thế nhưng dẫu vậy...]"
  },
  {
    "id": 156,
    "en": "Rem’s words did not continue beyond that point.",
    "vi": "Lời phát biểu của Rem ngắt quãng tại đó và không thể nói thêm được lời nào nữa."
  },
  {
    "id": 157,
    "en": "The reason why she did not continue after that, was because it was something that went without saying. She knew that, if she put it into words, it would become a blade that she would hurt herself with, and that the pain would console her, albeit slightly.",
    "vi": "Lý do vì sao cô chọn cách im lặng u uất chính là bởi đây là sự thật hiển nhiên ai cũng thấu hiểu. Cô biết quá rõ rằng nếu cứ cố tình thốt ra thành lời phát biểu, câu chữ sẽ lập tức biến thành lưỡi dao chí mạng cứa sâu gây tổn thương cho chính tâm can cô, dẫu biết rằng nỗi đau đớn nhức nhối đó có thể giúp an ủi vỗ về cô phần nào, dẫu cho vô cùng ít ỏi."
  },
  {
    "id": 158,
    "en": "Complaints, when spoken, would hurt oneself and others. In compensation however, it would lighten one’s heart merely a little bit. And Rem disliked the idea of lightening her heart.",
    "vi": "Những lời than vãn ca cẩm một khi thốt ra sẽ chỉ gây tổn thương sâu sắc cho cả bản thân lẫn những người xung quanh. Nhưng đổi lại bù lại, nó sẽ giúp trút bỏ gánh nặng lồng ngực nhẹ lòng đi chút ít. Và Rem thì cực kỳ căm ghét ý nghĩ muốn buông lơi bản thân để được nhẹ lòng."
  },
  {
    "id": 159,
    "en": "It was proof that she truly blamed herself for her inability to save others, because of her lack of power.",
    "vi": "Đó chính là minh chứng hùng hồn nhất cho thấy cô đang thực sự dằn vặt tự trách móc bản thân một cách sâu sắc vì đã bất lực không thể bảo toàn vẹn toàn vết thương cho người khác chỉ vì sự thiếu hụt thực lực của mình."
  },
  {
    "id": 160,
    "en": "Subaru: [――――]",
    "vi": "Subaru: [――――]"
  },
  {
    "id": 161,
    "en": "Once again, Subaru painfully understood Rem’s feelings.",
    "vi": "Một lần nữa, Subaru lại thấu hiểu sâu sắc nỗi lòng dằn vặt đầy đau đớn xót xa của Rem."
  },
  {
    "id": 162,
    "en": "To rue that one could have done more, was more painful than an unreachable wall. It would be even worse when it regarded someone else's future, someone other than one’s own.",
    "vi": "Nỗi ân hận dằn vặt vì bản thân đáng ra đã có thể làm tốt hơn nữa còn nhức nhối và tàn nhẫn hơn cả việc phải đối đầu với một bức tường cao vời vợi bất khả thi để vượt qua. Và mọi chuyện sẽ còn tồi tệ hơn gấp bội khi nó trực tiếp định đoạt số phận tương lai của một sinh mạng khác, một người ngoài chứ không phải bản thân mình."
  },
  {
    "id": 163,
    "en": "――The loss of Mizelda's leg had left something weighty in the recesses of Subaru's heart.",
    "vi": "――Vết thương thương tật cụt chân của Mizelda đã lẳng lặng gieo rắc một tảng đá đè nặng ngột ngạt vào sâu thẳm tâm can Subaru."
  },
  {
    "id": 164,
    "en": "It was not a life. But it was not hard to imagine the magnitude of losing one of your four limbs.",
    "vi": "Dẫu đó không phải là một mạng sống nằm xuống. Thế nhưng không khó để bất kỳ ai mường tượng ra mức độ kinh hoàng khủng khiếp của việc vĩnh viễn mất đi một phần tứ chi trên cơ thể."
  },
  {
    "id": 165,
    "en": "The closest example was certainly Al, a one-armed man who had lost his left arm. Additionally, there was the Watergate City of Pristella; during that battle, Ricardo had lost one of his arms in a confrontation against Gluttony.",
    "vi": "Ví dụ điển hình kề cận nhất chắc chắn chính là Al, gã nam nhân độc cánh tay đã vĩnh viễn mất đi cánh tay trái từ lâu. Thêm vào đó, tại cuộc chiến khốc liệt bảo vệ Đô Thị Nước Pristella trước đây, Ricardo dũng mãnh cũng từng bị chém cụt mất một bên cánh tay trong trận đối đầu trực diện chống lại Tổng Giám Mục Phàm Ăn."
  },
  {
    "id": 166,
    "en": "It had been an extremely shocking event, but it was not a tragedy so remote that it could not happen. In fact, for those who put themselves in harm's way, it may be more appropriate to call it a familiar tragedy.",
    "vi": "Đó quả thực là một biến cố vô cùng kinh hoàng gây chấn động tâm lý nặng nề, dẫu thế tuyệt đối không phải là một thảm kịch quá đỗi xa vời không thể xảy ra ngoài thực tế trần trụi. Thực tế, đối với những chiến binh quả cảm luôn chủ động dấn thân vào chốn hiểm nguy nguy hại sa trường, chuyện đó có lẽ nên gọi là một thảm kịch quen thuộc thì đúng hơn."
  },
  {
    "id": 167,
    "en": "Still――,",
    "vi": "Dẫu thế――,"
  },
  {
    "id": 168,
    "en": "Subaru: [That's harsh.]",
    "vi": "Subaru: [Chuyện này tàn nhẫn thật đấy.]"
  },
  {
    "id": 169,
    "en": "Rem: [...Yes.]",
    "vi": "Rem: [...Đúng vậy.]"
  },
  {
    "id": 170,
    "en": "Subaru's parched murmur was met with a small nod from Rem right beside him.",
    "vi": "Lời thì thầm khô khốc đầy bất lực của Subaru được đáp lại bằng một cái gật đầu nhẹ nhàng khẽ khàng từ Rem đang ngồi túc trực sát bên cạnh."
  },
  {
    "id": 171,
    "en": "This was the first time he had ever gotten a straightforward nod without repercussions, yet he was unfortunately not in the right frame of mind to appreciate it. Rem glanced at Subaru, the latter holding a lump deep in his chest.",
    "vi": "Đây là lần đầu tiên cậu nhận được một cái gật đầu ôn hòa và dứt khoát không chút phản kháng hay xỏ xiên gay gắt từ cô, dẫu thế thật không may hoàn cảnh lúc bấy giờ lại không cho phép cậu có đủ tâm trí để tận hưởng niềm vui sướng sướng khoái đó. Rem khẽ liếc nhìn Subaru, người vẫn đang ôm giữ một tảng đá đè nặng ngột ngạt sâu trong thâm tâm."
  },
  {
    "id": 172,
    "en": "Rem: [The previous… If it was the previous me, I wonder how it would've gone…]",
    "vi": "Rem: [Bản thân ta trước đây… Nếu là tôi của ngày xưa khi chưa bị khiếm khuyết ký ức, ta tự hỏi mọi chuyện đáng ra đã thế nào nhỉ…]"
  },
  {
    "id": 173,
    "en": "Subaru: […If it was the you when you still had memories?]",
    "vi": "Subaru: […Ý cô là nếu là cô của ngày xưa khi vẫn còn nắm giữ trọn vẹn ký ức sao?]"
  },
  {
    "id": 174,
    "en": "Rem: [Yes. If it was the past me’s healing magic, Mizelda-san's leg could’ve been...]",
    "vi": "Rem: [Phải. Nếu là trị liệu ma pháp của tôi ngày xưa, phần chân của Mizelda-san đáng ra đã có thể được...]"
  },
  {
    "id": 175,
    "en": "\"Could’ve been saved\", Subaru closed his eyes at the words that would have followed.",
    "vi": "“Đáng ra đã có thể cứu vãn được”, Subaru khẽ nhắm nghiền đôi mắt lại trước những câu chữ đáng ra sẽ nối tiếp phía sau."
  },
  {
    "id": 176,
    "en": "It was not that he could not comprehend what Rem was thinking. But it was difficult for Subaru, being on the outside, to judge the extent to which the presence or absence of memory had affected Rem's healing magic.",
    "vi": "Không phải cậu không thấu hiểu thấu hiểu sâu sắc nỗi lòng suy tư dằn vặt của Rem. Thế nhưng đối với một kẻ ngoại lai đứng ngoài như Subaru, thật vô cùng bất khả thi để đưa ra phán quyết đánh giá xem việc có hay không có ký ức thực chất đã gây ảnh hưởng tiêu cực thế nào đến trị liệu ma pháp của cô."
  },
  {
    "id": 177,
    "en": "Even if it were possible to quantify the healing power, it would be difficult for Subaru to assess it.",
    "vi": "Dẫu cho có phương thức để định lượng đong đếm cụ thể năng lực pháp lực trị liệu đi chăng nữa, bản thân Subaru cũng chịu chết, không có đủ kiến thức chuyên môn để phân tích đánh giá được."
  },
  {
    "id": 178,
    "en": "However――,",
    "vi": "Thế nhưng――,"
  },
  {
    "id": 179,
    "en": "Rem: [――――]",
    "vi": "Rem: [――――]"
  },
  {
    "id": 180,
    "en": "Rem, her pale-blue eyes filled with earnest emotion, were directed at Subaru.",
    "vi": "Rem, đôi mắt màu xanh lam nhạt tuyệt mỹ ngập tràn những cung bậc cảm xúc ưu tư tha thiết hướng thẳng về phía Subaru."
  },
  {
    "id": 181,
    "en": "If the answer she was looking for was something that Subaru could provide he did not know, but there were only two choices in front of him: \"The previous Rem could\" or \"The previous Rem couldn’t\".",
    "vi": "Cậu không biết liệu câu trả lời mà cô đang mưu cầu tìm kiếm có phải là thứ Subaru có thể ban phát ban phát cho cô hay không, dẫu thế trước mắt cậu lúc này rõ rệt chỉ có hai phương án lựa chọn duy nhất: \"Rem của ngày xưa thừa sức làm được\" hoặc \"Rem của ngày xưa cũng chịu chết bó tay\"."
  },
  {
    "id": 182,
    "en": "Which of the two would turn out to be the salvation for Rem?",
    "vi": "Trong hai phương án đó, đâu mới thực sự là chiếc phao cứu sinh cứu rỗi tâm hồn dằn vặt của Rem lúc này?"
  },
  {
    "id": 183,
    "en": "――Or rather, which of the two would save Rem from being hurt even more?",
    "vi": "――Hay nói chính xác hơn, đâu mới là câu trả lời giúp Rem tránh khỏi việc phải gánh chịu thêm những tổn thương nhức nhối sâu sắc hơn nữa?"
  },
  {
    "id": 184,
    "en": "Subaru: [...Even with your memories, I think it would be helpless.]",
    "vi": "Subaru: [...Dù cô có giữ được ký ức đi chăng nữa, tôi tin rằng chuyện đó vẫn hoàn toàn bất khả thi thôi.]"
  },
  {
    "id": 185,
    "en": "Rem: [――――]",
    "vi": "Rem: [――――]"
  },
  {
    "id": 186,
    "en": "Subaru: [Even healing magic isn't all-powerful. In that case, Rem would have done the best she could.]",
    "vi": "Subaru: [Ngay cả trị liệu ma pháp cũng không phải là vạn năng vạn năng đâu. Trong tình cảnh hiểm nghèo sa trường lúc bấy giờ, Rem chắc chắn đã dốc hết bình sinh nỗ lực tốt nhất của mình rồi.]"
  },
  {
    "id": 187,
    "en": "He replied after a few seconds of agonizing thought, which felt much longer in Subaru's mind.",
    "vi": "Cậu cất tiếng trả lời sau vài giây vắt óc suy nghĩ đắn đo suy nghĩ đầy đau đớn, vài giây ngắn ngủi mà cảm giác như kéo dài hàng thế kỷ trong tâm trí Subaru."
  },
  {
    "id": 188,
    "en": "Even if Rem had her memories, even if her healing magic had been in perfect condition, she would not have been able to save Mizelda’s leg.",
    "vi": "Dù Rem có giữ được trọn vẹn ký ức, dù ma pháp pháp lực trị liệu của cô có ở trạng thái sung mãn tối ưu nhất đi chăng nữa, cô cũng không đời nào cứu vãn lại được phần chân đã mất của Mizelda."
  },
  {
    "id": 189,
    "en": "The truth was that it was not about \"ifs\".",
    "vi": "Sự thật khách quan phũ phàng là cuộc đời không bao giờ có chỗ đứng cho hai từ \"giá như\"."
  },
  {
    "id": 190,
    "en": "If they started talking about \"ifs\", there would be no end to it. It was true that Rem had not been able to salvage Mizelda's leg. But beyond Mizelda, she had saved the lives of many other injured people.",
    "vi": "Nếu chúng ta cứ mãi chìm đắm dằn vặt trong triết lý hão huyền của hai từ \"giá như\", câu chuyện sẽ không bao giờ có điểm dừng kết thúc. Thực tế phũ phàng là Rem đã không thể cứu vãn lại được phần chân cụt của Mizelda. Nhưng bù lại, cô đã xuất sắc giành giật lại sinh mạng cho biết bao binh sĩ bị thương khác."
  },
  {
    "id": 191,
    "en": "She should be praised for her achievements, and there was no reason for her to blame herself.",
    "vi": "Cô xứng đáng nhận được sự tán dương sùng kính tuyệt đối vì những chiến tích vĩ đại đó, và hoàn toàn không có bất kỳ lý do hay tư cách gì bắt buộc cô phải tự dằn vặt dằn vặt tự trách mình cả."
  },
  {
    "id": 192,
    "en": "In fact, if someone should be blamed, it should be――,",
    "vi": "Thực tế, nếu bắt buộc phải có một kẻ đứng ra gánh chịu mọi tội lỗi trách nhiệm, thì kẻ đó không ai khác ngoài――,"
  },
  {
    "id": 193,
    "en": "Subaru: [I wasn't strong enough.]",
    "vi": "Subaru: [Chính tôi mới là kẻ không đủ thực lực mạnh mẽ.]"
  },
  {
    "id": 194,
    "en": "Rem: [Hả...]",
    "vi": "Rem: [Hả...]"
  },
  {
    "id": 195,
    "en": "Subaru: [I didn't think enough. I should’ve examined things more seriously.]",
    "vi": "Subaru: [Tôi đã không suy nghĩ mưu lược đủ thấu đáo. Tôi đáng ra phải nghiên cứu khảo sát tình hình một cách nghiêm túc cẩn trọng hơn gấp bội.]"
  },
  {
    "id": 196,
    "en": "Upon hearing this answer spat out by Subaru, Rem's round eyes went wide.",
    "vi": "Nghe thấy những câu chữ tự trách đầy chua chát đắng cay thốt ra từ miệng Subaru, đôi mắt tròn xoe của Rem không khỏi trợn tròn ra đầy ngạc nhiên."
  },
  {
    "id": 197,
    "en": "In front of Rem, Subaru clenched his molars with force, and covered his face with both of his hands.",
    "vi": "Ngay trước mặt Rem, Subaru nghiến chặt răng phát ra tiếng ken két đầy đau đớn, và lấy cả hai bàn tay che kín gương mặt u uất của mình."
  },
  {
    "id": 198,
    "en": "If anyone were to curse the lack of strength, the blame should fall on Subaru.",
    "vi": "Nếu có bất kỳ ai có tư cách được phép nguyền rủa nguyền rủa thực lực yếu kém của mình, kẻ gánh chịu mọi trách nhiệm đó bắt buộc phải là Subaru."
  },
  {
    "id": 199,
    "en": "Subaru: [All of it. It’s my fault.]",
    "vi": "Subaru: [Tất thảy mọi chuyện. Đều là lỗi của tôi cả.]"
  },
  {
    "id": 200,
    "en": "Despite the pompous claims of a \"bloodless siege\", reality was far from such results.",
    "vi": "Bất chấp những lời huênh hoang khoác lác tuyên bố hùng hồn về một “kế hoạch vây thành không đổ máu”, hiện thực trần trụi lại mang lại kết quả hoàn toàn trái ngược."
  },
  {
    "id": 201,
    "en": "Arakiya's intrusion had caused many injuries, and her recovery had brought death to multiple guards. There had been no casualties within their own ranks, but taking into account Mizelda's missing leg, how could it be called \"bloodless\"?",
    "vi": "Sự xâm nhập đột kích bất ngờ của Arakiya đã gây ra biết bao thương tích nghiêm trọng, và cuộc tẩu thoát cướp ngục của cô ta đã tước đi sinh mạng của vô số lính gác ngục. Dẫu biết rằng trong lực lượng phiến quân của họ không có ca tử vong nào nằm xuống, nhưng khi đặt lên bàn cân so sánh với phần chân bị cụt mất của Mizelda, làm sao có thể trơ trẽn gọi đây là cuộc vây hãm “không đổ máu” cho được?"
  },
  {
    "id": 202,
    "en": "He had failed. It was a pile of failures, and the chance for recovery had been lost.",
    "vi": "Cậu đã hoàn toàn bại trận thất bại. Đây thuần túy chỉ là một mớ hỗn độn tích tụ của những sai lầm thất bại liên tiếp, và cơ hội để cứu vãn phục hồi đã hoàn toàn tuột khỏi tầm tay."
  },
  {
    "id": 203,
    "en": "All he wanted was the best possible happy ending, and what Subaru had obtained was either a so-so happy ending or what should be called a so-so bad ending.",
    "vi": "Tất cả những gì cậu khao khát mưu cầu chỉ là một cái kết viên mãn hạnh phúc nhất có thể, dẫu thế thứ duy nhất Subaru giành giật lại được chỉ là một cái kết tương đối có hậu hoặc nói đúng ra là một cái kết dở dở ương ương tồi tệ."
  },
  {
    "id": 204,
    "en": "To paraphrase Abel's words from earlier, definite punishment or reward―― castigation ought to follow.",
    "vi": "Liên tưởng đến triết lý sống thưởng phạt thích đáng phân minh của Abel lúc nãy―― hình phạt nghiêm khắc trừng phạt chắc chắn sẽ phải trút xuống đầu cậu."
  },
  {
    "id": 205,
    "en": "Had Subaru been one of Abel's men, it would not be strange for him to have his head chopped off.",
    "vi": "Nếu Subaru thực sự là thuộc hạ cấp dưới phò tá gã, chuyện gã lạnh lùng ra lệnh chém bay đầu cậu tại chỗ cũng là điều hiển nhiên dễ hiểu."
  },
  {
    "id": 206,
    "en": "――Worst-case scenario, he would have to Return by Death.",
    "vi": "――Trong tình huống tồi tệ hiểm nghèo nhất, cậu sẽ bắt buộc phải kích hoạt Quay Về Từ Cái Chết."
  },
  {
    "id": 207,
    "en": "Thoughts like these crossed his mind.",
    "vi": "Những dòng suy nghĩ dằn vặt dằn vặt đầy u ám đó liên tục chạy qua trí óc cậu."
  },
  {
    "id": 208,
    "en": "In that case, he would most likely go back to the most recent point of return, to the time of the bloody battle against Todd in Guaral. ――The fear caused by the recollection of that time made his entire body tremble.",
    "vi": "Trong hoàn cảnh đó, điểm hồi sinh quay về của cậu nhiều khả năng sẽ rơi vào mốc thời gian kề cận nhất, tức là ngay giữa cuộc quyết chiến đẫm máu chống lại gã Todd tàn bạo ở Guaral. ――Nỗi kinh hoàng khủng khiếp trỗi dậy khi hồi tưởng lại ký ức kinh hoàng lúc bấy giờ khiến toàn thân cậu run rẩy bần bật."
  },
  {
    "id": 209,
    "en": "Still, even if he returned to that moment of terror, if he could recover what they had lost――,",
    "vi": "Dẫu thế, ngay cả khi bắt buộc phải quay lại khoảnh khắc kinh hoàng ngập tràn nỗi sợ hãi đó, chỉ cần có cơ hội cứu vãn đòi lại những gì họ đã đánh mất――,"
  },
  {
    "id": 210,
    "en": "Rem: [...Why?]",
    "vi": "Rem: [...Tại sao chứ?]"
  },
  {
    "id": 211,
    "en": "Suddenly, that word struck the brooding Subaru's eardrums.",
    "vi": "Đột ngột, câu từ ngắn ngủi đó vang lên đập thẳng vào màng nhĩ của một Subaru đang chìm đắm trong dằn vặt ưu tư."
  },
  {
    "id": 212,
    "en": "Raising his face immediately, he was met head-on by Rem's eyes staring right toward him.",
    "vi": "Ngay lập tức ngẩng mặt lên, cậu bắt gặp trực diện đôi mắt sắc sảo của Rem đang nhìn đăm đăm đăm đăm nhắm thẳng vào mình."
  },
  {
    "id": 213,
    "en": "Rem's eyes, which had been moist with remorse until just before, were now staring straight at Subaru, holding even stronger remorse within.",
    "vi": "Đôi mắt của Rem, vốn dĩ vừa mới đẫm nước mắt vì nỗi ân hận tội lỗi lúc nãy, giờ đây lại chăm chú nhìn thẳng vào Subaru với một sự dằn vặt tự trách còn mãnh liệt hơn gấp bội ẩn chứa bên trong."
  },
  {
    "id": 214,
    "en": "Rem: [Why did it turn into your fault?]",
    "vi": "Rem: [Tại sao mọi tội lỗi lỗi lầm lại tự dưng biến thành của anh hết thế hả?]"
  },
  {
    "id": 215,
    "en": "Agitated by Rem’s gaze, more words were piled up upon Subaru, rendered unable to move.",
    "vi": "Bị chấn động bởi ánh nhìn sắc sảo của Rem, vô số câu hỏi dồn dập trút xuống đầu Subaru, khiến cậu đứng hình hoàn toàn bất lực không thể di chuyển."
  },
  {
    "id": 216,
    "en": "She extended her hand, her eyes damp, and while indicating the devastated City Hall she said,",
    "vi": "Cô khẽ đưa bàn tay ra, đôi mắt vẫn còn hơi ướt lệ, và trong khi chỉ tay hướng về phía tòa Tòa Thị Chính đã đổ nát tàn phá hoang tàn, cô nói,"
  },
  {
    "id": 217,
    "en": "Rem: [So Mizelda-san's leg, Louis-chan's and Utakata-chan's injuries, Medium-san's and Flop-san's wounds, all of it is your fault?]",
    "vi": "Rem: [Vậy hóa ra phần chân bị cụt của Mizelda-san, những thương tích của Louis-chan và Utakata-chan, vết thương của Medium-san và Flop-san, tất thảy mọi chuyện tồi tệ đó đều là lỗi của anh hết sao?]"
  },
  {
    "id": 218,
    "en": "Subaru: [They are, yes. It wouldn't have turned out like this if I'd been more careful about my preparations.]",
    "vi": "Subaru: [Đúng vậy, là lỗi của tôi cả đấy. Mọi chuyện chắc chắn đã không tồi tệ thế này nếu tôi biết chú ý chuẩn bị cẩn thận chu đáo hơn từ trước.]"
  },
  {
    "id": 219,
    "en": "Rem: [You thought of a plan, and your seemingly reckless plan had a proper pay off. You were able to hold the General Second-Class in place, and get them into the city without letting anyone fight. Just like we planned.]",
    "vi": "Rem: [Anh đã vạch ra một kế hoạch mưu lược, và cái kế hoạch tưởng chừng như điên rồ liều lĩnh đó đã mang lại thành quả chiến tích thực tế vô cùng mỹ mãn. Anh đã xuất sắc cầm chân giữ chân vị Tướng nhị đẳng đó tại chỗ, và dẫn quân thâm nhập vào thành phố thành công mà không để bất kỳ ai phải động thủ đổ máu. Hoàn toàn trùng khớp chuẩn xác với những gì chúng ta đã mưu tính vạch ra.]"
  },
  {
    "id": 220,
    "en": "Subaru: [But then after that...]",
    "vi": "Subaru: [Nhưng rồi sau đó mọi chuyện lại...]"
  },
  {
    "id": 221,
    "en": "Rem: [――Who cares about what happened after!?]",
    "vi": "Rem: [――Ai thèm quan tâm đến những gì diễn ra sau đó chứ!?]"
  },
  {
    "id": 222,
    "en": "At Subaru’s persistence, Rem raised her eyebrows and made her voice louder. Rem quickly turned her face, and because of this, Louis, who was leaning against her, fell into her lap.",
    "vi": "Trước sự khăng khăng cố chấp của Subaru, Rem nhướng lông mày thanh tú lên và lớn giọng quát lên quát lớn. Rem nhanh chóng quay ngoắt mặt đi, và chính vì cử chỉ đột ngột đó, Louis đang tựa đầu trên vai cô khẽ trượt xuống ngã nhào vào lòng cô."
  },
  {
    "id": 223,
    "en": "Louis jerked slightly and groaned softly, without waking up. While supporting Louis's shoulder, Rem puffed slightly and looked at Subaru again.",
    "vi": "Louis khẽ giật mình nhẹ nhàng và rên rỉ khẽ khàng một tiếng nhỏ, dẫu thế không hề bị thức giấc vẫn ngủ say nồng. Trong khi đưa tay đỡ lấy vai nâng niu bả vai Louis, Rem khẽ thở dài một hơi nhẹ rồi quay lại trừng mắt lườm Subaru."
  },
  {
    "id": 224,
    "en": "Rem: [No one could’ve foreseen what would happen after that. The appearance of that half-naked woman and her rampage were all unpredictable. So…]",
    "vi": "Rem: [Không một ai trên đời có thể tiên liệu trước được những biến cố xảy ra sau đó cả. Sự xuất hiện đột ngột của mụ đàn bà bán khỏa thân tàn bạo đó cùng cuộc càn quét cuồng bạo của cô ta là điều hoàn toàn bất khả thi để dự đoán dự báo. Thế nên…]"
  },
  {
    "id": 225,
    "en": "Subaru: [――――]",
    "vi": "Subaru: [――――]"
  },
  {
    "id": 226,
    "en": "Rem: [So why are you responsible for all of that?]",
    "vi": "Rem: [Thế thì tại sao anh lại phải đứng ra gánh chịu mọi tội lỗi trách nhiệm cho tất cả những chuyện đó hả?]"
  },
  {
    "id": 227,
    "en": "Subaru gulped as the question of “why” was once again asked toward him.",
    "vi": "Subaru khẽ nuốt nước bọt ực một cái khi câu hỏi chất vấn “tại sao” một lần nữa đập thẳng vào mặt cậu."
  },
  {
    "id": 228,
    "en": "If you asked him why, he would think it was the responsibility of one that had power.",
    "vi": "Nếu cô hỏi cậu lý do tại sao, cậu sẽ trả lời rằng đó chính là trách nhiệm nghĩa vụ tối thượng của kẻ nắm giữ quyền lực thực lực tối cao."
  },
  {
    "id": 229,
    "en": "In the same way that Rem lamented the lack of power in her own healing magic, Subaru sometimes regretted and lamented the fact that his own Authority could not make up for it. The scope of Return by Death was greater.",
    "vi": "Tương tự như cách Rem luôn đau đớn dằn vặt vì sự yếu kém bất lực của trị liệu ma pháp của mình, Subaru cũng không ngừng dằn vặt hối hận vì Quyền Năng Quay Về Từ Cái Chết của mình đã không thể bù đắp vẹn toàn cho những mất mát. Tầm ảnh hưởng của Quay Về Từ Cái Chết còn vĩ đại khủng khiếp hơn thế rất nhiều."
  },
  {
    "id": 230,
    "en": "The future could improve or worsen, depending on whether Subaru exercised his power.",
    "vi": "Tương lai thế sự có thể trở nên tốt đẹp viên mãn hơn hoặc tồi tệ hiểm nghèo đi hoàn toàn phụ thuộc vào việc Subaru có quyết định thi triển thi triển quyền năng tối cao đó hay không."
  },
  {
    "id": 231,
    "en": "However――,",
    "vi": "Tuy nhiên――,"
  },
  {
    "id": 232,
    "en": "Subaru: [It's...]",
    "vi": "Subaru: [Chuyện này...]"
  },
  {
    "id": 233,
    "en": "――It was a truth that could not be told to another, even if the person was Rem.",
    "vi": "――Đó chính là sự thật cấm kỵ tuyệt đối không được phép tiết lộ ra cho bất kỳ ai khác, dẫu cho đối phương có là Rem yêu dấu đi chăng nữa."
  },
  {
    "id": 234,
    "en": "It was not restricted to merely Rem.",
    "vi": "Và điều cấm kỵ đó không chỉ giới hạn riêng mỗi mình Rem."
  },
  {
    "id": 235,
    "en": "The authority Subaru wielded, this alone he could not propagate to anyone, no matter how open-minded the other party was. ――No, he was unable to speak of it even to someone he had established an emotional bond with.",
    "vi": "Quyền năng tối cao mà Subaru đang nắm giữ, đây chính là bí mật duy nhất cậu tuyệt đối không thể chia sẻ chia sẻ với bất kỳ ai, bất kể đối phương có cởi mở rộng lượng đến đâu đi nữa. ――Không, cậu hoàn toàn bất lực không thể thốt ra ngay cả với người cậu đã thiết lập sợi dây liên kết liên kết tình cảm sâu sắc nhất đời mình."
  },
  {
    "id": 236,
    "en": "If he told them, there was no way he could disclose the truth without possibly causing the death of that person.",
    "vi": "Bởi vì một khi cậu hé môi tiết lộ sự thật cấm kỵ đó, không đời nào cậu có thể bảo toàn được tính mạng mạng sống của đối phương khỏi cái chết trừng phạt tàn bạo trút xuống đầu họ."
  },
  {
    "id": 237,
    "en": "He was afraid of pain. The pain brought about from trying to tell someone about Return by Death was terrifying.",
    "vi": "Cậu vô cùng khiếp sợ nỗi đau đớn. Cơn đau co thắt thắt nghẹt con tim trút xuống mỗi khi cậu cố tình hé môi kể cho ai đó nghe về Quay Về Từ Cái Chết quả thực vô cùng kinh hoàng kinh sợ."
  },
  {
    "id": 238,
    "en": "Who could get used to that intense pain that gripped one's heart no matter how many times they experienced it?",
    "vi": "Có ai trên đời có thể quen nổi với cơn đau co thắt bóp nghẹt lấy lồng ngực dẫu cho có phải trải qua bao nhiêu lần đi chăng nữa?"
  },
  {
    "id": 239,
    "en": "But what was truly frightening was not the pain, but the loss.",
    "vi": "Thế nhưng thứ thực sự khiến cậu khiếp sợ tột cùng tuyệt đối không phải là cơn đau thể xác, mà là sự mất mát chia ly."
  },
  {
    "id": 240,
    "en": "Was there anything in this world that was more terrifying than loss?",
    "vi": "Liệu còn thứ gì trên cõi đời này đáng sợ hơn việc phải chứng kiến những người yêu thương vĩnh viễn ra đi chia ly?"
  },
  {
    "id": 241,
    "en": "Was it not because of this extreme fear precisely, that this Authority had been granted to Natsuki Subaru?",
    "vi": "Chẳng phải chính vì nỗi khiếp sợ tột cùng tột độ đó mà Quyền Năng tối cao này mới được ban phát trao cho Natsuki Subaru sao?"
  },
  {
    "id": 242,
    "en": "Rem: [...Why did you protect me?]",
    "vi": "Rem: [...Tại sao lúc đó anh lại liều mình bảo vệ che chở cho tôi chứ?]"
  },
  {
    "id": 243,
    "en": "Subaru: [Huh...?]",
    "vi": "Subaru: [Hả...?]"
  },
  {
    "id": 244,
    "en": "Rem continued to speak as if she had given up on Subaru, the latter silent and unable to answer.",
    "vi": "Rem tiếp tục cất tiếng hỏi hỏi han như thể đã hoàn toàn bó tay bất lực trước một Subaru đang im lặng không thể đưa ra câu trả lời."
  },
  {
    "id": 245,
    "en": "For a moment, Subaru blinked, unsure of what she was talking about.",
    "vi": "Trong một khoảnh khắc ngắn ngủi, Subaru khẽ chớp mắt ngơ ngác, không hiểu rõ cô đang ám chỉ chuyện gì."
  },
  {
    "id": 246,
    "en": "Rem: [When that half-naked woman attacked me. I knocked down a pillar, and when that didn't work... That woman came at me, and you stood in front of me.]",
    "vi": "Rem: [Vào thời khắc mụ đàn bà bán khỏa thân tàn bạo đó tấn công ta. Ta đã cố đánh sập cây cột đá để cản đường cô ta, và khi chiêu thức đó thất bại hoàn toàn... Mụ ta điên cuồng lao thẳng về phía tôi, và chính anh đã dũng cảm đứng ra chắn trước mặt tôi.]"
  },
  {
    "id": 247,
    "en": "In a selfless attempt to save her from being attacked by Arakiya, Subaru had stood in front of Rem.",
    "vi": "Trong một nỗ lực quên mình quên mình cứu mạng cô khỏi cuộc tàn sát cuồng bạo của Arakiya, Subaru đã không ngần ngại đứng ra che chắn trước mặt Rem."
  },
  {
    "id": 248,
    "en": "His hands outstretched, he had been desperate to keep any threat away from Rem. At that moment, Subaru did not care if Arakiya were to take his life.",
    "vi": "Giang rộng hai cánh tay bảo vệ, cậu đã tuyệt vọng dốc hết sức bình sinh để ngăn cản mọi hiểm họa nguy hại tiếp cận Rem. Vào thời khắc sinh tử đó, Subaru hoàn toàn không mảy may bận tâm bận lòng đến việc liệu Arakiya có tước đi sinh mạng của mình hay không."
  },
  {
    "id": 249,
    "en": "He wanted Rem to outlive him, for even a second longer.",
    "vi": "Cậu chỉ khao khát duy nhất một điều là Rem có thể sống sót thọ mạng lâu hơn cậu, dẫu chỉ là một giây ngắn ngủi."
  },
  {
    "id": 250,
    "en": "That was――,",
    "vi": "Điều đó chính là――,"
  },
  {
    "id": 251,
    "en": "Rem: [The result of your bloodless siege, the fact that you covered for me at that moment, and even the fact that Mizelda-san lost her leg, you’re trying to take on everything on your own...]",
    "vi": "Rem: [Thành quả từ cuộc vây thành không đổ máu của anh, việc anh dũng cảm đứng ra che chắn cứu mạng tôi vào thời khắc đó, và thậm chí cả sự việc Mizelda-san bị thương tật cụt chân, anh đang cố tình tự ôm đồm gánh vác gánh vác tất thảy mọi tội lỗi trách nhiệm lên đôi vai mảnh khảnh của một mình mình sao...]"
  },
  {
    "id": 252,
    "en": "Subaru: [――――]",
    "vi": "Subaru: [――――]"
  },
  {
    "id": 253,
    "en": "Rem: [You're not strong enough to do all those things... At first, I was wary of you because of that horrible smell.]",
    "vi": "Rem: [Anh hoàn toàn không đủ thực lực dũng mãnh để tự mình hoàn thành gánh vác ngần ấy đại sự đâu... Ban đầu, tôi thực sự vô cùng cảnh giác đề phòng đề phòng anh chính là vì cái mùi hương kinh tởm nồng nặc kia phát ra từ người anh đấy.]"
  },
  {
    "id": 254,
    "en": "That was where Rem broke off her words, and once she did, she looked down at Louis on her lap.",
    "vi": "Đến đó Rem khẽ ngắt lời dừng lại giữa chừng, cô chậm rãi cúi đầu nhìn xuống cô bé Louis đang nằm ngủ say trong lòng mình."
  },
  {
    "id": 255,
    "en": "Gently stroking her golden hair, Rem choked and calmly turned her gaze back to Subaru, saying",
    "vi": "Nhẹ nhàng vuốt ve mái tóc vàng óng của cô bé, Rem nghẹn ngào khẽ nấc lên một tiếng rồi điềm tĩnh hướng đôi mắt nhìn thẳng về phía Subaru bảo,"
  },
  {
    "id": 256,
    "en": "Rem: [I, Louis-chan, Abel-san, Mizelda-san and the others, Medium-san and Flop-san are all human beings with a will, and you don't have to get worked up to protect them.]",
    "vi": "Rem: [Tôi, Louis-chan, Abel-san, Mizelda-san và toàn thể mọi người ở đây, cả Medium-san và Flop-san đều là những con người bằng xương bằng thịt sở hữu ý chí và tự do của riêng mình, anh tuyệt đối không việc gì phải gồng mình gắng gượng chịu khổ để bảo vệ tất cả đâu.]"
  },
  {
    "id": 257,
    "en": "Subaru: [Ồ...]",
    "vi": "Subaru: [Ồ...]"
  },
  {
    "id": 258,
    "en": "Rem: [Please don't try to do anything like that all by yourself. You don't have to take responsibility for our actions.]",
    "vi": "Rem: [Làm ơn xin anh đừng bao giờ cố tình tự mình gánh vác mọi chuyện hoạn nạn cô độc một mình như thế nữa. Anh hoàn toàn không có nghĩa vụ hay trách nhiệm gì bắt buộc phải đứng ra tự chịu trách nhiệm cho mọi hành động hành vi của chúng tôi đâu.]"
  },
  {
    "id": 259,
    "en": "Subaru's mouth opened and closed repeatedly, overwhelmed by the shower of words.",
    "vi": "Miệng Subaru khẽ há hốc ra rồi lại ngậm lại liên tục nhiều lần, hoàn toàn bị câm lặng đè bẹp trước cơn mưa những lời khuyên giải dịu dàng đầy thuyết phục trút xuống đầu."
  },
  {
    "id": 260,
    "en": "His brain refused to comprehend what was being said, in a prompt fashion. However, an unidentified sense of urgency scorched Subaru’s heart, forcing him to listen no further.",
    "vi": "Não bộ của cậu lúc này hoàn toàn bất lực không thể tiếp thu thấu hiểu kịp thời ý nghĩa sâu xa của những lời cô nói một cách nhanh chóng. Dẫu thế, một cảm giác cấp bách thắt nghẹt thắt chặt ngột ngạt không tên bỗng thiêu đốt tâm can Subaru, thôi thúc cậu không được phép tiếp tục lắng nghe thêm nữa."
  },
  {
    "id": 261,
    "en": "With earnest emotion, directed at a Subaru cursing his own lack of power, Rem bit back.",
    "vi": "Với những cung bậc cảm xúc vô cùng chân thành tha thiết nhắm thẳng vào một Subaru đang nguyền rủa thực lực yếu kém bất lực của mình, Rem đã dứt khoát đáp trả phản kháng."
  },
  {
    "id": 262,
    "en": "He had to stop her from saying anything beyond that――,",
    "vi": "Cậu bắt buộc phải ngăn cản ngăn chặn cô không được phép thốt ra bất kỳ câu chữ nào vượt quá giới hạn đó nữa――,"
  },
  {
    "id": 263,
    "en": "Rem: [You aren’t a special person――]",
    "vi": "Rem: [Anh hoàn toàn không phải là một thực thể đặc biệt phi thường gì đâu――]"
  },
  {
    "id": 264,
    "en": "He knew he should not have allowed her to say it.",
    "vi": "Cậu biết quá rõ trong thâm tâm thâm tâm rằng mình tuyệt đối không được phép để cô thốt ra câu nói tàn nhẫn đó."
  },
  {
    "id": 265,
    "en": "Rem: [――Because, you're not a hero.]",
    "vi": "Rem: [――Bởi vì, anh đâu phải là một vị anh hùng vĩ đại gì cho cam.]"
  },
  {
    "id": 266,
    "en": "△▼△▼△▼△",
    "vi": "△▼△▼△▼△"
  },
  {
    "id": 267,
    "en": "Staggering, Subaru walked through the City Hall as if wandering.",
    "vi": "Lảo đảo bước đi vững, Subaru vô định bước đi thẩn thờ thẩn thờ khắp các dãy hành lang Tòa Thị Chính như một kẻ mất hồn đang đi lang thang."
  },
  {
    "id": 268,
    "en": "He had no destination in mind. It was not even clear when he had started walking, to begin with. When he had come to, he was walking, and if anything, his consciousness still remained in a state of vagueness.",
    "vi": "Cậu không hề có một đích đến cụ thể nào trong đầu cả. Thậm chí chính cậu cũng chẳng rõ bản thân đã bắt đầu bước đi lang thang từ thời khắc nào nữa. Đến khi sực tỉnh tỉnh táo lại, cậu đã thấy mình đang bước đi, và nếu có gì rõ ràng thì chính là ý thức của cậu hiện vẫn đang chìm đắm trong trạng thái mờ mịt mơ hồ."
  },
  {
    "id": 269,
    "en": "Subaru: [――Hk.]",
    "vi": "Subaru: [――Hự.]"
  },
  {
    "id": 270,
    "en": "Suddenly, he was hit head-on by a hard impact.",
    "vi": "Đột ngột, trán cậu va phải một chấn động dữ dội dội trực diện ngay trước mặt."
  },
  {
    "id": 271,
    "en": "Taking a look at it, it seemed that he had hit a wall. He was walking while only staring at his feet, that was the reason. Slamming his forehead against the bare wall, Subaru held his aching forehead and exhaled.",
    "vi": "Nhìn kỹ lại, hóa ra cậu vừa mới vô ý nện mạnh đầu va thẳng vào vách tường đá bare. Lý do là bởi cậu cứ liên tục cắm cúi bước đi mà chỉ chăm chú nhìn chăm chăm xuống bàn chân dưới đất của mình. Nện mạnh trán vào vách tường đá trần trụi, Subaru đưa tay lên ôm lấy vầng trán đang đau nhức nhức nhối và khẽ thở dài ra một hơi."
  },
  {
    "id": 272,
    "en": "Then, without thinking, he slammed his forehead against the solid wall again.",
    "vi": "Và rồi, hoàn toàn vô thức theo bản năng, cậu lại tiếp tục nện mạnh nện trán bổ mạnh vào bức tường vững chãi vững chãi thêm lần nữa."
  },
  {
    "id": 273,
    "en": "A firm impact and a dull sound, and Subaru felt a stinging pain in his brain.",
    "vi": "Một lực chấn động mạnh mẽ dội lại cùng một âm thanh trầm đục vang lên, và Subaru cảm nhận rõ rệt một cơn đau nhức nhối thấu tận đại não."
  },
  {
    "id": 274,
    "en": "As he shook his brain from the outside, he felt as if the stagnation that permeated his whole body was slowly receding.",
    "vi": "Trong khi những chấn động kích thích trực tiếp lên não bộ từ bên ngoài, cậu lờ mờ cảm giác như sự trì trệ bế tắc u tối đang bao trùm khắp cơ thể mình đang có dấu hiệu chậm rãi tiêu tan."
  },
  {
    "id": 275,
    "en": "In the same manner, Subaru slammed his forehead against the wall again and again.",
    "vi": "Bằng phương thức điên cuồng điên khùng tương tự, Subaru liên tiếp nện mạnh trán bổ mạnh vầng trán tội nghiệp của mình vào vách tường đá hết lần này đến lần khác."
  },
  {
    "id": 276,
    "en": "Slam, slam, slam――",
    "vi": "Cốp, cốp, cốp――"
  },
  {
    "id": 277,
    "en": "???: [Hey, hey, stop that, bro.]",
    "vi": "Al: [Này, này, ngưng cái trò điên khùng đó lại đi chứ, người anh em.]"
  },
  {
    "id": 278,
    "en": "As he pulled back to strike again, his shoulder was grabbed from behind. He had been called out.",
    "vi": "Đang định lấy đà để bổ mạnh trán thêm phát nữa, bả vai cậu bỗng bị một cánh tay từ phía sau túm chặt giữ lại. Ai đó đã cất tiếng gọi can ngăn cậu."
  },
  {
    "id": 279,
    "en": "What came into view when Subaru turned around, was a gaze that met his own from behind a steel helmet directed his way. Still grasping Subaru by the shoulder, the other party cracked the bones in his own neck and spoke,",
    "vi": "Thứ đập vào mắt Subaru khi quay đầu lại chính là một ánh mắt đang đăm đăm nhìn thẳng về phía cậu từ phía sau chiếc mũ bảo hiểm sắt thép lạnh lùng. Vẫn nắm chặt giữ lấy bả vai của Subaru, đối phương khẽ bẻ khớp cổ phát ra tiếng rôm rốp và cất giọng bảo,"
  },
  {
    "id": 280,
    "en": "Al: [I understand the feeling of wanting to die. But no matter how many times you do that, there’s gonna be no end to that sorta thing.]",
    "vi": "Al: [Tôi hoàn toàn thấu hiểu cảm giác chán nản muốn chết quách đi cho rảnh nợ của cậu lúc này. Thế nhưng dẫu vậy, có tự hành hạ bản thân bao nhiêu lần đi chăng nữa, thì ba cái chuyện phiền phức rắc rối kiểu đó cũng sẽ không bao giờ có điểm dừng kết thúc đâu.]"
  }
];

const outPath = path.join(tempDir, 'ch30_part2.json');
fs.writeFileSync(outPath, JSON.stringify(part2, null, 2), 'utf-8');
console.log(`Saved ${part2.length} paragraphs to ${outPath}`);
