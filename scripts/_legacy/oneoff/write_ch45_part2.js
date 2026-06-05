import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tempDir = path.join(__dirname, 'translation_temp');

const part2 = [
  {
    "id": 121,
    "en": "That would be natural. Considering they had suddenly been told that the people of the city had turned against them.",
    "vi": "Điều đó cũng là tự nhiên thôi. Nhất là khi họ đột ngột bị thông báo rằng cư dân của cả thành phố đã quay lưng lại với mình."
  },
  {
    "id": 122,
    "en": "Al: [Are you sure, that can’t be right. What gave you that idea?]",
    "vi": "Al: [Chắc chắn chứ, không thể như thế được. Cái gì khiến anh nghĩ vậy?]"
  },
  {
    "id": 123,
    "en": "Abel: [It is quite the natural thought. In the first place, there are only a limited number of people capable of mobilizing a force of a hundred men to surround the inn. At this point, there are only two choices… The Emperor's group, and the Demon City's forces. However, Chisha is disguised as me. Furthermore, he does not possess the leeway to do what I would not do.]",
    "vi": "Abel: [Đó là lối suy nghĩ cực kỳ tự nhiên. Ngay từ đầu, chỉ có một số lượng người có hạn đủ khả năng huy động lực lượng trăm người bao vây quán trọ này. Tại thời điểm này, chỉ có hai lựa chọn... Phe Hoàng đế, và lực lượng của Ma Thành. Thế nhưng, Chisha đang cải trang thành ta. Hơn nữa, hắn không có sự thư thả để làm những việc mà ta sẽ không làm.]"
  },
  {
    "id": 124,
    "en": "Al: [So that others won't find out he’s not Abel-chan. So, what wouldn’t you do?]",
    "vi": "Al: [Để người khác không phát hiện ra gã không phải Abel-chan chứ gì. Thế việc anh sẽ không làm là gì?]"
  },
  {
    "id": 125,
    "en": "Abel: [Brazenly sending my forces to the Demon City.]",
    "vi": "Abel: [Ngang nhiên phái quân của ta vào Ma Thành.]"
  },
  {
    "id": 126,
    "en": "Subaru nearly nodded at the conclusive statement, but he couldn't decide if it was definitive information or not. If a hundred soldiers accompanied the king, would that be too many or too few?",
    "vi": "Subaru suýt nữa đã gật đầu trước lời khẳng định chắc nịch đó, song cậu không thể quyết định xem đó có phải là thông tin chính xác hay không. Nếu có một trăm binh lính hộ tống nhà vua, liệu số lượng đó là quá nhiều hay quá ít?"
  },
  {
    "id": 127,
    "en": "He did not believe it strange at all, if that many were present.",
    "vi": "Cậu hoàn toàn không thấy có gì lạ nếu có ngần ấy người xuất hiện."
  },
  {
    "id": 128,
    "en": "Medium: [I dunno much about it, but how many soldiers are there at Abel-chin's castle?]",
    "vi": "Medium: [Tớ không biết nhiều về chuyện đó, nhưng có bao nhiêu binh lính ở lâu đài của Abel-chin vậy nha?]"
  },
  {
    "id": 129,
    "en": "Abel: [Are you inquiring about the number of troops at the Imperial Capital? If so…]",
    "vi": "Abel: [Ngươi đang hỏi về số lượng quân nhu tại Hoàng Đô sao? Nếu thế...]"
  },
  {
    "id": 130,
    "en": "When Medium raised her hand to ask a question, Abel glanced at Subaru. He was unable to understand the meaning of his gaze; Abel touched the forehead of his oni mask, and after a moment of contemplation said,",
    "vi": "Khi Medium giơ tay đặt câu hỏi, Abel liếc mắt nhìn Subaru. Cậu không tài nào hiểu nổi ý nghĩa của ánh mắt đó; Abel chạm tay lên trán chiếc mặt nạ quỷ, rồi sau một khoảnh khắc suy tư liền nói:"
  },
  {
    "id": 131,
    "en": "Abel: [Some insignificant thirty-thousand. But this talk is not about the forces at his command. Whether or not the Emperor would allow them to accompany him, is the topic of this conversation. And――]",
    "vi": "Abel: [Chỉ khoảng ba mươi vạn ít ỏi mà thôi. Nhưng cuộc trò chuyện này không phải về lực lượng dưới quyền chỉ huy của hắn. Liệu Hoàng đế có cho phép bọn chúng đi theo hay không mới là chủ đề của cuộc đối thoại này. Và――]"
  },
  {
    "id": 132,
    "en": "Taritta: [The real Emperor would never do such a thing.]",
    "vi": "Taritta: [Hoàng đế thật sự sẽ không bao giờ làm điều như vậy.]"
  },
  {
    "id": 133,
    "en": "Abel: [That is what I meant.]",
    "vi": "Abel: [Ý ta chính là như thế.]"
  },
  {
    "id": 134,
    "en": "Abel nodded his head. He denied the possibility of the false Emperor making such a careless decision.",
    "vi": "Abel gật đầu. Gã phủ nhận khả năng Hoàng đế giả đưa ra một quyết định bất cẩn như vậy."
  },
  {
    "id": 135,
    "en": "Subaru felt that there was a possibility that the other party could have been careless, but he kept his mouth shut. He would not be listened to, even if he had said it.",
    "vi": "Subaru cảm thấy bên kia vẫn có khả năng sơ hở, song cậu ngậm chặt miệng. Cậu có nói ra thì gã cũng chẳng thèm nghe."
  },
  {
    "id": 136,
    "en": "In any case――,",
    "vi": "Dù sao thì――,"
  },
  {
    "id": 137,
    "en": "Abel: [The Emperor declared it forbidden to touch us, and Olbart displayed an approach that adhered to that order. With that case as valid, dispatching a force at us would make no sense.]",
    "vi": "Abel: [Hoàng đế đã tuyên bố cấm đụng vào chúng ta, và Olbart đã thể hiện một phương thức tuân thủ mệnh lệnh đó. Nếu trường hợp đó là đúng, việc phái một lực lượng tấn công chúng ta là vô lý.]"
  },
  {
    "id": 138,
    "en": "Al: […What about a theory like, he didn't do it himself, or something like that?]",
    "vi": "Al: [...Thế còn giả thuyết kiểu như gã không tự tay làm, hay đại loại thế thì sao?]"
  },
  {
    "id": 139,
    "en": "Abel: [Now, I shall ask you, do you believe I would ever allow that line of reasoning?]",
    "vi": "Abel: [Giờ ta hỏi ngươi, ngươi tin ta sẽ chấp nhận lối lập luận đó sao?]"
  },
  {
    "id": 140,
    "en": "Taritta: [I don’t think so.]",
    "vi": "Taritta: [Em nghĩ là không đâu ạ.]"
  },
  {
    "id": 141,
    "en": "Synchronized with Taritta's answer, Al similarly denied it with a shake of his masked head.",
    "vi": "Đồng bộ với câu trả lời của Taritta, Al cũng lắc chiếc đầu đang quấn vải che mặt phủ nhận."
  },
  {
    "id": 142,
    "en": "As long as the fake Emperor was disguised as Abel, his lines of thought must be the same as Abel's as an Emperor. In other words, what Abel would not allow, the fake Emperor could not allow.",
    "vi": "Chừng nào Hoàng đế giả còn cải trang thành Abel, lối suy nghĩ của hắn phải tương đồng với tư duy làm Hoàng đế của Abel. Nói cách khác, những gì Abel không cho phép thì Hoàng đế giả cũng không thể chấp nhận."
  },
  {
    "id": 143,
    "en": "And so, the false Emperor would have to continue a pretense of being very narrow-minded.",
    "vi": "Do đó, Hoàng đế giả phải tiếp tục giả vờ là một kẻ cực kỳ hẹp hòi."
  },
  {
    "id": 144,
    "en": "Abel: [Kafma Irulux would not permit it, even if an attempt was made to reason with him. He is inflexible. And therefore, he is a valuable asset, but I am certain General Second-Class Kafma would not condone this crooked interpretation.]",
    "vi": "Abel: [Kafma Irulux sẽ không cho phép điều đó, ngay cả khi người ta cố gắng thương thuyết với hắn. Hắn rất cứng nhắc. Vì thế, hắn là một phụ tá đắc lực, nhưng ta dám chắc Tướng quân Hạng hai Kafma sẽ không chấp nhận lối diễn giải quanh co này.]"
  },
  {
    "id": 145,
    "en": "Subaru: [Kafma… Would that be the straight-laced guy we saw yesterday?]",
    "vi": "Subaru: [Kafma... Có phải là gã nghiêm túc cứng nhắc chúng ta thấy hôm qua không?]"
  },
  {
    "id": 146,
    "en": "Abel: [He might be meek towards the Emperor, but he shall opine without hesitation even against a General First-Class. Even Olbart’s cunning shall be unable to bend Kafma's principles.]",
    "vi": "Abel: [Hắn có thể phục tùng Hoàng đế, nhưng hắn sẽ phát biểu ý kiến không chút do dự ngay cả khi đối đầu với Tướng quân Hạng nhất. Đến cả sự xảo quyệt của Olbart cũng không thể bẻ cong các nguyên tắc của Kafma.]"
  },
  {
    "id": 147,
    "en": "Al: [That lil’ bro’s got that much power?]",
    "vi": "Al: [Cậu em đó có thực lực lớn đến thế sao?]"
  },
  {
    "id": 148,
    "en": "Abel: [At one time, he was approached for a promotion to Divine General. For a variety of reasons, he passed up on it.]",
    "vi": "Abel: [Đã có lúc hắn được đề bạt thăng cấp lên Divine General. Vì nhiều lý do khác nhau, hắn đã từ chối cơ hội đó.]"
  },
  {
    "id": 149,
    "en": "As a response to Abel's answer, Al let out a frustrated \"Ugh”.",
    "vi": "Đáp lại câu trả lời của Abel, Al phát ra tiếng thở dài bất lực “Ư”."
  },
  {
    "id": 150,
    "en": "If this was true, then two Divine General-class people had been present in the Castle yesterday―― Nay, three, since the fake Emperor was one of them.",
    "vi": "Nếu điều này là thật, thì hôm qua đã có hai người tầm cỡ Divine General hiện diện trong Thành trì―― không, phải là ba, vì Hoàng đế giả cũng là một trong số họ."
  },
  {
    "id": 151,
    "en": "That may indeed be more reliable manpower compared to bringing in unskilled troops.",
    "vi": "Đó thực sự là nguồn nhân lực đáng tin cậy hơn hẳn việc kéo theo đám binh lính thiếu kinh nghiệm."
  },
  {
    "id": 152,
    "en": "Subaru: [But if the false Emperor’s not the enemy, then …]",
    "vi": "Subaru: [Nhưng nếu Hoàng đế giả không phải kẻ địch, thì...]"
  },
  {
    "id": 153,
    "en": "Naturally, the conjecture that Abel had proposed became more and more realistic.",
    "vi": "Lẽ tự nhiên, giả thuyết mà Abel đưa ra ngày càng trở nên thực tế."
  },
  {
    "id": 154,
    "en": "In other words, the inhabitants of the Demon City of Chaosflame were the ones waiting for them outside, and the leader who had made them move was――",
    "vi": "Nói cách khác, cư dân của Ma Thành Chaosflame chính là những kẻ đang phục kích họ bên ngoài, và thủ lĩnh điều động chúng chính là――"
  },
  {
    "id": 155,
    "en": "Medium: [Are you saying Yorna-chan’s making them attack us?]",
    "vi": "Medium: [Ý anh là Yorna-chan đang bảo họ tấn công bọn tôi sao nha?]"
  },
  {
    "id": 156,
    "en": "Al: […It's hard to think of anyone else, isn't it? There's no one else who knows about us and has a good reason to target us to begin with.]",
    "vi": "Al: [...Khó nghĩ ra ai khác lắm đúng không? Ngay từ đầu đã chẳng có ai biết về sự hiện diện của chúng ta và có lý do chính đáng để nhắm mục tiêu vào bọn mình cả.]"
  },
  {
    "id": 157,
    "en": "Subaru: [――. What does Abel think?]",
    "vi": "Subaru: [――. Abel nghĩ thế nào?]"
  },
  {
    "id": 158,
    "en": "Someone within the Demon City of Chaosflame who could move its inhabitants as pawns; naturally, the first person that came to mind was Yorna Mishigure, the ruler of the Demon City.",
    "vi": "Một người trong Ma Thành Chaosflame có thể điều động cư dân ở đây như quân cờ; lẽ tự nhiên, cái tên đầu tiên xuất hiện trong đầu chính là Yorna Mishigure, người cai trị Ma Thành."
  },
  {
    "id": 159,
    "en": "However, was it possible that she, being as unpredictable as Olbart―― No, perhaps even harder to predict, was the mastermind behind the whole situation?",
    "vi": "Tuy nhiên, liệu có khả năng cô ta, một kẻ khó lường như Olbart―― không, thậm chí còn khó đoán hơn, lại là kẻ chủ mưu đứng sau toàn bộ cục diện này chăng?"
  },
  {
    "id": 160,
    "en": "In response to Subaru's suspicion, Abel tapped his finger on the forehead of his oni mask,",
    "vi": "Trước sự nghi hoặc của Subaru, Abel dùng ngón tay gõ nhẹ lên phần trán của chiếc mặt nạ quỷ:"
  },
  {
    "id": 161,
    "en": "Abel: [That is asinine.]",
    "vi": "Abel: [Ngu ngốc.]"
  },
  {
    "id": 162,
    "en": "And his reply was brief.",
    "vi": "Và câu trả lời của gã rất ngắn gọn."
  },
  {
    "id": 163,
    "en": "Subaru: [Asinine? Errr, does that mean you don’t agree? Why?]",
    "vi": "Subaru: [Ngu ngốc sao? Ý anh là anh không đồng tình à? Tại sao chứ?]"
  },
  {
    "id": 164,
    "en": "Abel: [It would be pride to believe that if you ask, you shall receive an answer for everything. ――The missive.]",
    "vi": "Abel: [Thật kiêu ngạo khi nghĩ rằng cứ hỏi là sẽ nhận được câu trả lời cho mọi thứ. ――Bức thư mật.]"
  },
  {
    "id": 165,
    "en": "Subaru: [The missive?]",
    "vi": "Subaru: [Bức thư mật sao?]"
  },
  {
    "id": 166,
    "en": "Abel replied to Subaru's question while adding an unnecessary sentence.",
    "vi": "Abel trả lời câu hỏi của Subaru đồng thời bồi thêm một câu không cần thiết."
  },
  {
    "id": 167,
    "en": "The missive was the letter they had delivered to Yorna the previous day. Delivering that letter had been the purpose of the previous day's visit and was bound to be the reason for the current day’s summons.",
    "vi": "Bức thư mật là lá thư họ đã chuyển cho Yorna ngày hôm trước. Việc chuyển giao lá thư đó là mục đích của chuyến ghé thăm hôm qua và chắc chắn là lý do cho cuộc triệu kiến hôm nay."
  },
  {
    "id": 168,
    "en": "Abel had not told them in detail what he had written in the letter, though.",
    "vi": "Mặc dù vậy, Abel vẫn chưa cho họ biết chi tiết những gì gã đã viết trong bức thư."
  },
  {
    "id": 169,
    "en": "Abel: [In the missive, I wrote that I would reward her with that which she desires.]",
    "vi": "Abel: [Trong bức thư mật, ta đã viết rằng sẽ ban thưởng cho cô ta thứ mà cô ta khao khát.]"
  },
  {
    "id": 170,
    "en": "Al: [The thing that lady wants… In other words, the position of Empress?]",
    "vi": "Al: [Thứ người phụ nữ đó muốn... Nói cách khác, là vị trí Hoàng hậu sao?]"
  },
  {
    "id": 171,
    "en": "Medium: [To be your wife?]",
    "vi": "Medium: [Làm vợ anh sao nha?]"
  },
  {
    "id": 172,
    "en": "Once Abel mentioned the contents of the missive, Al and Medium spoke in quick succession.",
    "vi": "Ngay khi Abel nhắc đến nội dung bức thư mật, Al và Medium lên tiếng nối tiếp nhau."
  },
  {
    "id": 173,
    "en": "As they had been told the prior day, Yorna wanted the Emperor. Not necessarily Abel, but the Emperor’s status.",
    "vi": "Như những gì họ được nghe ngày hôm trước, Yorna muốn có Hoàng đế. Không nhất thiết phải là Abel, mà là thân phận của Hoàng đế."
  },
  {
    "id": 174,
    "en": "So if it were true that he had written that he would give Yorna what she coveted, it should be like that.",
    "vi": "Vì vậy, nếu quả thực gã viết rằng sẽ ban cho Yorna thứ cô thèm khát, thì chắc chắn là chuyện đó rồi."
  },
  {
    "id": 175,
    "en": "Subaru: [How the heck did you decide to convey something like that in a letter?]",
    "vi": "Subaru: [Làm sao anh lại quyết định truyền đạt chuyện như thế qua một bức thư hả?]"
  },
  {
    "id": 176,
    "en": "Abel: [Do not trivialize the problem using your own standards. Whatever it is, she shall achieve what she desires. Hence why we were summoned to the Castle. It is illogical for her to send her forces against us in spite of that.]",
    "vi": "Abel: [Đừng có tầm thường hóa vấn đề bằng quy chuẩn của riêng ngươi. Dù thế nào, cô ta cũng sẽ đạt được thứ mình muốn. Đó là lý do chúng ta được triệu kiến đến Lâu đài. Bất chấp điều đó, việc cô ta phái lực lượng tấn công chúng ta là phi lý.]"
  },
  {
    "id": 177,
    "en": "Al: [Ahhh~, what if she hates being Abel-chan's wife so much that she wants to kill him…]",
    "vi": "Al: [Ài~, nhỡ đâu người phụ nữ đó ghét việc làm vợ của Abel-chan đến mức muốn lấy mạng anh thì sao...]"
  },
  {
    "id": 178,
    "en": "Or perhaps, the letter was so rude that she wanted to kill them.",
    "vi": "Hoặc giả, bức thư thô lỗ đến độ khiến cô ta muốn sát hại họ."
  },
  {
    "id": 179,
    "en": "Subaru thought that there was a very good chance that he would be treating the person he was going to marry in a pompous manner, because he behaved that way in person.",
    "vi": "Subaru nghĩ rất có khả năng gã đối xử với người mình sắp kết hôn một cách ngạo mạn, bởi ngoài đời gã vốn hành xử như vậy."
  },
  {
    "id": 180,
    "en": "But Abel scoffed at the idea Subaru and the rest had.",
    "vi": "But Abel cười nhạo ý tưởng của Subaru cùng những người khác."
  },
  {
    "id": 181,
    "en": "Abel: [What she must do, she shall. Emotions are secondary. She is not like Priscilla.]",
    "vi": "Abel: [Việc cô ta phải làm, cô ta sẽ làm. Cảm xúc chỉ là thứ yếu. Cô ta không giống Priscilla.]"
  },
  {
    "id": 182,
    "en": "Al: [I did think that lady was just as troublesome as the Princess!]",
    "vi": "Al: [Tôi lại nghĩ người phụ nữ đó cũng phiền phức hệt như Công chúa vậy!]"
  },
  {
    "id": 183,
    "en": "Subaru agreed to that. Priscilla and Yorna were both scary.",
    "vi": "Subaru đồng tình với điều đó. Cả Priscilla và Yorna đều đáng sợ."
  },
  {
    "id": 184,
    "en": "He was afraid of Priscilla and Yorna both, but he felt that Abel had a point because it had been stated with such conviction. ――Also, he recalled his memories of Yorna from the previous day.",
    "vi": "Cậu sợ cả Priscilla lẫn Yorna, song cậu cảm thấy Abel nói có lý vì gã khẳng định đầy chắc nịch. ――Hơn nữa, cậu cũng nhớ lại ký ức về Yorna ngày hôm trước."
  },
  {
    "id": 185,
    "en": "Yorna: [As the Lord of the Demon City, I won’t speak lies in front of my attendants.]",
    "vi": "Yorna: [Với tư cách là Lãnh chúa Ma Thành, ta sẽ không nói dối trước mặt các hầu cận của mình.]"
  },
  {
    "id": 186,
    "en": "So Yorna had said, her words spoken with a bewitching smile regarding the matter of the letter that Subaru and the others had present her with, a promise that she would not throw it away without reading it.",
    "vi": "Yorna đã nói như vậy với một nụ cười mê hoặc liên quan đến lá thư mà Subaru cùng những người khác trình lên cô, một lời hứa rằng cô sẽ không vứt nó đi mà chưa đọc."
  },
  {
    "id": 187,
    "en": "Subaru and the others fell into the stables afterwards, and then, Tanza, Yorna's attendant, had declared that Yorna had recognized Subaru and his companions.",
    "vi": "Subaru và những người khác rơi xuống chuồng ngựa sau đó, rồi Tanza, hầu cận của Yorna, tuyên bố rằng Yorna đã công nhận Subaru cùng các đồng hành."
  },
  {
    "id": 188,
    "en": "At the very least, Subaru did not take her as a woman who would change her previous statements at will.",
    "vi": "Ít nhất, Subaru không coi cô là kiểu phụ nữ sẽ tùy ý thay đổi lời nói trước đó của mình."
  },
  {
    "id": 189,
    "en": "He did not, so he wished to believe what Abel had said.",
    "vi": "Cậu không nghĩ thế, nên muốn tin vào lời Abel nói."
  },
  {
    "id": 190,
    "en": "Taritta: [In any case, those outside should be getting impatient right about now. What should we do?]",
    "vi": "Taritta: [Dù sao đi nữa, những kẻ bên ngoài chắc hẳn sắp mất kiên nhẫn rồi ạ. Chúng ta nên làm gì đây?]"
  },
  {
    "id": 191,
    "en": "Keeping an eye on the outside, Taritta questioned them about their next move.",
    "vi": "Mắt canh chừng bên ngoài, Taritta hỏi họ về nước đi tiếp theo."
  },
  {
    "id": 192,
    "en": "Abel had spoken of a trigger for an assault―― as in, the conditions that would make the other party attack them, but, so far, they could only guess that it would be them going outside. But with the other side prepared to attack them, they did not know when they may force their way in.",
    "vi": "Abel đã nói về tác nhân gây ra cuộc tấn công―― tức là các điều kiện khiến đối phương ra tay, nhưng hiện tại, họ chỉ có thể đoán là do việc họ bước ra ngoài. Song với việc bên kia đã sẵn sàng tấn công, họ không biết khi nào chúng có thể tràn vào."
  },
  {
    "id": 193,
    "en": "In addition, Subaru and the rest were in the middle of a game of hide-and-seek.",
    "vi": "Hơn nữa, Subaru cùng những người khác đang ở giữa trò trốn tìm."
  },
  {
    "id": 194,
    "en": "Subaru: [Even if we know the people outside are coming in, we can't just not leave, right?]",
    "vi": "Subaru: [Kể cả biết bọn bên ngoài sắp tràn vào, chúng ta cũng không thể cứ ở lì trong này mãi đúng không?]"
  },
  {
    "id": 195,
    "en": "Al: [Well, unless the old man outplayed our outplaying, and hid in the inn for a second time… Just in case, should we take another look at the room?]",
    "vi": "Al: [Chà, trừ phi lão già kia đi trước cả dự tính của chúng ta, trốn lại trong quán trọ lần thứ hai... Để phòng hờ, bọn mình có nên lục soát căn phòng lần nữa không?]"
  },
  {
    "id": 196,
    "en": "Abel: [I would have considered that if we did not have the clue, “an abyss with a great view”.]",
    "vi": "Abel: [Ta sẽ cân nhắc điều đó nếu chúng ta không có gợi ý “vực sâu với góc nhìn tuyệt hảo”.]"
  },
  {
    "id": 197,
    "en": "So Abel dismissed him, and Al hung his head in disappointment.",
    "vi": "Abel gạt phắt ý kiến đó đi, khiến Al xụi lơ cúi đầu thất vọng."
  },
  {
    "id": 198,
    "en": "In fact, Subaru’d had the thought that Olbart would be hiding in the first room once more as well. But no matter how much he thought about it, he could not connect it to \"an abyss with a great view\". So he had not touched on it.",
    "vi": "Thực tế, Subaru cũng từng nghĩ đến chuyện Olbart sẽ trốn ở căn phòng đầu tiên một lần nữa. Thế nhưng dù suy nghĩ thế nào, cậu cũng không thể liên kết nó với “vực sâu với góc nhìn tuyệt hảo”. Vì vậy cậu đã không đề cập đến."
  },
  {
    "id": 199,
    "en": "In the meantime, their group’s course of action was being finalized.",
    "vi": "Trong lúc đó, phương án hành động của cả nhóm đang được chốt lại."
  },
  {
    "id": 200,
    "en": "Of course, there was no other choice for them but to make their debut. The question was, what kind of strategy should they use to make that option work?",
    "vi": "Tất nhiên, họ không có lựa chọn nào khác ngoài việc lộ diện. Câu hỏi là, họ nên sử dụng chiến thuật gì để phương án đó đạt hiệu quả?"
  }
];

fs.writeFileSync(path.join(tempDir, 'ch45_part2.json'), JSON.stringify(part2, null, 2), 'utf-8');
console.log('Saved ch45_part2.json');
