import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tempDir = path.join(__dirname, 'translation_temp');

const part3 = [
  {
    "id": 281,
    "en": "Al was surprised to see Olbart in the room, who was about to refill his cup with cold tea.",
    "vi": "Al ngạc nhiên nhìn Olbart vẫn ở trong phòng, lão ta đang chuẩn bị rót thêm trà nguội vào cốc."
  },
  {
    "id": 282,
    "en": "Much to his surprise, Medium and Louis followed suit, with an \"Oh, it's Gramps!” and an \"Aa!”, respectively. Taritta widened her eyes, having peeked into the room as well.",
    "vi": "Medium và Louis cũng ngạc nhiên không kém, lần lượt kêu lên “Ồ, ông cụ kìa!” và “Aa!”. Taritta ghé mắt nhìn vào trong phòng cũng trợn tròn hai mắt."
  },
  {
    "id": 283,
    "en": "Delayed by those reactions, Abel narrowed his eyes once Olbart's figure finally came into view.",
    "vi": "Chậm hơn trước các phản ứng ấy một nhịp, Abel khẽ nheo mắt khi bóng hình Olbart cuối cùng cũng lọt vào tầm nhìn."
  },
  {
    "id": 284,
    "en": "Abel: [“Behind the eyelids”, I see.]",
    "vi": "Abel: [“Phía sau mí mắt”, ra thế.]"
  },
  {
    "id": 285,
    "en": "He looked down at Subaru's young profile and muttered.",
    "vi": "Gã cúi xuống nhìn góc nghiêng non nớt của Subaru rồi lẩm bẩm."
  },
  {
    "id": 286,
    "en": "Abel: [Did you know from the start that this was the place?]",
    "vi": "Abel: [Ngay từ đầu ngươi đã biết đây chính là nơi đó sao?]"
  },
  {
    "id": 287,
    "en": "Subaru: [The expression \"behind the eyelids\" and the surroundings of the inn made this the first place I thought of. The type of person who offers you this kind of game’s definitely going to try to do this at least once.]",
    "vi": "Subaru: [Cụm từ “phía sau mí mắt” cùng với khu vực quanh quán trọ khiến đây là địa điểm đầu tiên tôi nghĩ đến. Kiểu người đề xuất trò chơi này chắc chắn sẽ cố làm vậy ít nhất một lần.]"
  },
  {
    "id": 288,
    "en": "A distant, nostalgic memory came to Subaru’s mind with that answer―― the memory of his first meeting with Beatrice, at the old Roswaal Mansion.",
    "vi": "Một ký ức xa xăm, hoài niệm hiện lên trong tâm trí Subaru cùng với câu trả lời đó―― ký ức về lần đầu tiên gặp gỡ Beatrice tại Dinh Thự Roswaal cũ."
  },
  {
    "id": 289,
    "en": "Beatrice had attempted to have Subaru endlessly walk in the same space by creating a looping corridor using her magical ability. Unfortunately for Beatrice, Subaru had seen through her scheme at a glance and quickly figured out that the starting point was also the goal.",
    "vi": "Beatrice khi ấy đã cố bắt Subaru đi bộ vô tận trong cùng một không gian bằng cách tạo ra hành lang lặp lại nhờ ma pháp của mình. Tiếc cho Beatrice, Subaru đã nhìn thấu mưu đồ ấy chỉ trong nháy mắt và nhanh chóng nhận ra điểm khởi đầu cũng chính là đích đến."
  },
  {
    "id": 290,
    "en": "Now that Subaru thought about it, he was sorry that he had not gone along with the cute Beatrice's ruse. But his opponent now was not the mischievous Beatrice, he was a monstrous old man, now wasn’t the time for holding back.",
    "vi": "Giờ nghĩ lại, Subaru thấy hơi có lỗi vì đã không hùa theo trò tinh quái của Beatrice đáng yêu. Có điều, đối thủ hiện tại không phải Beatrice nghịch ngợm mà là một lão già quái vật, lúc này không phải lúc để nương tay."
  },
  {
    "id": 291,
    "en": "Therefore, he would distort his young face into a big grin and boast of his victory mercilessly.",
    "vi": "Vì vậy, cậu nhe răng cười toe toét trên gương mặt non nớt của mình và hả hê khoe chiến thắng một cách không thương tiếc."
  },
  {
    "id": 292,
    "en": "Subaru: [Honestly, I saw right through you, Vicious Old Man.]",
    "vi": "Subaru: [Thật tình, tôi nhìn thấu ông rồi nhé, Lão Già Hiểm Độc.]"
  },
  {
    "id": 293,
    "en": "Olbart: [Oioi, don't kick me while I’m down. This is an embarrassment I can't let the young people of my village see at all. Why don't’cha call yerself the Vicious Lil’ Boy?]",
    "vi": "Olbart: [Kìa nhóc, đừng xát muối vào lòng ta thế chứ nha. Đây là nỗi nhục mà ta tuyệt đối không thể để đám trẻ trong làng nhìn thấy được đâu nha. Hay nhóc tự gọi mình là Cậu Nhóc Hiểm Độc đi chứ nhỉ?]"
  },
  {
    "id": 294,
    "en": "Subaru: [I'll pass on that. I haven't done anything to be called vicious, after all.]",
    "vi": "Subaru: [Thôi xin kiếu. Tôi đã làm gì đâu mà gọi là hiểm độc chứ.]"
  },
  {
    "id": 295,
    "en": "Olbart: [Well, that's just bein’ humble. ――Ya even went ta the trouble of speakin’ in a loud voice for me ta hear as ya left the inn. It was some great actin’.]",
    "vi": "Olbart: [Chà, nhóc chỉ khiêm tốn thế thôi nha. ――Lúc rời quán trọ, nhóc còn cất công nói lớn tiếng cho ta nghe nữa chứ lị. Đúng là diễn xuất đỉnh cao nha.]"
  },
  {
    "id": 296,
    "en": "Subaru scratched his cheek at Olbart, who raised one eyebrow and sneered at him.",
    "vi": "Subaru gãi má trước cái nhếch mày cười khẩy của Olbart."
  },
  {
    "id": 297,
    "en": "As expected, his intentions could be seen through after such an exaggerated act. However, even if he had been able to notice Subaru's true intentions, Olbart had no way to change his hiding place.",
    "vi": "Đúng như dự đoán, ý đồ của cậu đã bị lộ tẩy sau màn diễn xuất cường điệu như thế. Tuy nhiên, dù có nhận ra ý định thực sự của Subaru, Olbart cũng chẳng có cách nào đổi chỗ trốn."
  },
  {
    "id": 298,
    "en": "That was because this game was played by determining the hiding place they used first, and then giving clues accordingly.",
    "vi": "Bởi lẽ trò chơi này diễn ra theo quy trình xác định nơi trốn trước rồi mới đưa ra gợi ý tương ứng."
  },
  {
    "id": 299,
    "en": "Subaru: [I know it's really early in the first round to be discovered, but you're going to count it as one, right? You're not going to be in a bad mood just because I refused to take on the name “Vicious”, are you?]",
    "vi": "Subaru: [Tôi biết bị phát hiện ngay hiệp đầu tiên và sớm thế này thì hơi hụt hẫng, nhưng ông vẫn tính là một lần đúng chứ? Ông sẽ không tụt hứng chỉ vì tôi từ chối cái biệt hiệu “Hiểm Độc” đấy chứ?]"
  },
  {
    "id": 300,
    "en": "He wanted to avoid being dismissed “because these were anticlimactic results”, or something like that.",
    "vi": "Cậu muốn tránh việc bị lão bác bỏ vì “kết quả nhạt nhẽo quá” hay đại loại thế."
  },
  {
    "id": 301,
    "en": "To Subaru's request for confirmation born out of concern, Olbart closed one eye and said, \"Of course”,",
    "vi": "Trước lời yêu cầu xác nhận vì lo lắng của Subaru, Olbart nheo một mắt lại đáp:"
  },
  {
    "id": 302,
    "en": "Olbart: [My fault that the results were brought in so quickly. It's a bit unreasonable ta expect ya folks ta mop up my mess. Twice more, as agreed.]",
    "vi": "Olbart: [Kết quả ngã ngũ nhanh thế này là do lỗi của ta nha. Bắt các nhóc phải dọn dẹp đống lộn xộn của ta thì hơi vô lý thật. Còn hai lần nữa, như đã thỏa thuận nha.]"
  },
  {
    "id": 303,
    "en": "Medium: [Oh~! You did it, Subaru-chin! We got the first win in about ten seconds!]",
    "vi": "Medium: [Ồ~! Subaru-chin làm được rồi nha! Chúng ta thắng hiệp đầu tiên chỉ trong khoảng mười giây thôi á!]"
  },
  {
    "id": 304,
    "en": "Subaru: [Yeah, it’s good news.]",
    "vi": "Subaru: [Ừ, đúng là tin tốt.]"
  },
  {
    "id": 305,
    "en": "With Medium to his side overjoyed, Subaru patted his chest in relief.",
    "vi": "Nhìn Medium đứng bên cạnh reo mừng hớn hở, Subaru thở phào nhẹ nhõm vỗ ngực."
  },
  {
    "id": 306,
    "en": "For now, this concluded the first riddle from Olbart―― indeed, it was a trial of sorts, borrowing the name \"hide-and-seek\". It could be said that they were being asked to solve a problem on a test.",
    "vi": "Tạm thời, câu đố đầu tiên của Olbart đã kết thúc―― quả thực, đây là một dạng thử thách núp bóng trò chơi “trốn tìm”. Có thể coi như họ vừa phải giải quyết một bài kiểm tra."
  },
  {
    "id": 307,
    "en": "They were being tested to see if they were worthy of Olbart's attention.",
    "vi": "Họ đang bị thử thách xem có xứng đáng để Olbart để tâm hay không."
  },
  {
    "id": 308,
    "en": "Subaru: [All of it is because of Beako’s…]",
    "vi": "Subaru: [Tất cả là nhờ Beako...]"
  },
  {
    "id": 309,
    "en": "Help, he was about to say, as Subaru attempted to picture the adorable girl in his mind.",
    "vi": "Sự giúp đỡ, cậu định nói vậy khi cố gắng hình dung cô bé đáng yêu trong đầu."
  },
  {
    "id": 310,
    "en": "However, for a moment, that thought was bleached white, coming to a full stop.",
    "vi": "Thế nhưng, trong thoáng chốc, dòng suy nghĩ ấy bỗng trắng xóa rồi dừng hẳn lại."
  },
  {
    "id": 311,
    "en": "Subaru: [――――]",
    "vi": "Subaru: [————]"
  },
  {
    "id": 312,
    "en": "A feeling of slight discomfort and a slight tugging created a ripple in his heart.",
    "vi": "Cảm giác khó chịu mơ hồ cùng một sự níu kéo nhẹ nhàng tạo nên gợn sóng nơi đáy lòng."
  },
  {
    "id": 313,
    "en": "Before he could pursue a definitive answer to what it was――,",
    "vi": "Trước khi cậu kịp truy tìm lời giải đáp rõ ràng cho cảm giác đó――,"
  },
  {
    "id": 314,
    "en": "Olbart: [Well, I gotta redeem myself, so I’ll hurry ta the second hidin’ place.]",
    "vi": "Olbart: [Chà, ta phải gỡ gạc lại danh dự thôi nha, nên ta sẽ nhanh chóng tới chỗ trốn thứ hai đây nha.]"
  },
  {
    "id": 315,
    "en": "Subaru: [Oh, yeah, you're right. So, what's the next hint?]",
    "vi": "Subaru: [Ồ, vâng, ông nói phải. Vậy gợi ý tiếp theo là gì?]"
  },
  {
    "id": 316,
    "en": "Olbart: [Hmm… The next hidin’ place’s gonna be somethin’ like…]",
    "vi": "Olbart: [Hửm... Chỗ trốn tiếp theo sẽ là một nơi kiểu như...]"
  },
  {
    "id": 317,
    "en": "Folding his hands behind his back, Olbart leaned his head and body in thought. However, he did not spend much time pondering, and so the old man contorted his cheeks.",
    "vi": "Khoanh tay sau lưng, Olbart nghiêng đầu và vẹo người suy nghĩ. Dẫu vậy, lão không tốn quá nhiều thời gian đắn đo, rồi cơ má lão già lại nhăn lại."
  },
  {
    "id": 318,
    "en": "Olbart: [――“An abyss with a great view”, ya might say.]",
    "vi": "Olbart: [――Có thể gọi là “vực sâu với góc nhìn tuyệt hảo” nha.]"
  },
  {
    "id": 319,
    "en": "Al: [An abyss…]",
    "vi": "Al: [Vực sâu...]"
  },
  {
    "id": 320,
    "en": "Taritta: [With a great view?]",
    "vi": "Taritta: [Với góc nhìn tuyệt hảo sao?]"
  },
  {
    "id": 321,
    "en": "The words of Taritta and Al completed each other, as they ruminated on the bizarre hint left regarding the next hiding place.",
    "vi": "Lời của Taritta và Al tiếp nối nhau khi họ ngẫm nghĩ về gợi ý kỳ quặc liên quan đến nơi ẩn nấp tiếp theo."
  },
  {
    "id": 322,
    "en": "But Olbart had no intention of leaving any further hints.",
    "vi": "But Olbart không có ý định đưa thêm bất kỳ gợi ý nào khác."
  },
  {
    "id": 323,
    "en": "Olbart: [Ya were better than expected the first time ‘round, but the real game’s ‘bout ta begin.]",
    "vi": "Olbart: [Lần đầu tiên các nhóc làm tốt hơn ta tưởng đấy nha, nhưng trò chơi thực sự giờ mới bắt đầu đây nha.]"
  },
  {
    "id": 324,
    "en": "The old man smiled, his white teeth in full view, and then leapt backwards nimbly and gallantly. With that, Olbart opened the room’s window and put his foot on the windowsill without a care in the world.",
    "vi": "Lão già cười rộ lộ hàm răng trắng, rồi thoăn thoắt nhảy lùi lại một cách nhẹ nhàng. Kế đó, Olbart đẩy cửa sổ phòng ra rồi đặt một chân lên bậu cửa một cách thản nhiên."
  },
  {
    "id": 325,
    "en": "Then, right before Subaru and the others looking on with eyes open wide, he jumped outside.",
    "vi": "Rồi ngay trước mắt Subaru cùng những người khác đang trợn tròn mắt nhìn, lão nhảy tót ra ngoài."
  },
  {
    "id": 326,
    "en": "Olbart: [Next time, I'll be sure ta hide a lil’ better!]",
    "vi": "Olbart: [Lần tới ta chắc chắn sẽ trốn kỹ hơn một chút đấy nha!]"
  },
  {
    "id": 327,
    "en": "Al: [Wait, old man…! Shit, he's gone!]",
    "vi": "Al: [Khoan đã, lão già...! Chết tiệt, biến mất rồi!]"
  },
  {
    "id": 328,
    "en": "With haste and a yell, Al rushed to the window and looked around outside as he held his covered head.",
    "vi": "Vội vã kêu lên, Al lao đến bên cửa sổ ngó nghiêng ra ngoài trong khi tay ôm cái đầu đang quấn vải."
  },
  {
    "id": 329,
    "en": "In fact, it would be difficult to catch Olbart when he was dedicated to escape. His overwhelming ability to run away convinced Subaru that changing the game from “tag” to “hide-and-seek” had been the right call.",
    "vi": "Thực tế, sẽ vô cùng khó khăn để bắt được Olbart khi lão đã chủ định trốn chạy. Năng lực đào tẩu áp đảo của lão càng khiến Subaru tin rằng việc đổi trò chơi từ “đuổi bắt” sang “trốn tìm” là quyết định sáng suốt."
  },
  {
    "id": 330,
    "en": "Anyway――,",
    "vi": "Dù sao thì――,"
  },
  {
    "id": 331,
    "en": "Taritta: [Subaru, that man's next hiding place…]",
    "vi": "Taritta: [Subaru, nơi ẩn nấp tiếp theo của người đàn ông đó...]"
  },
  {
    "id": 332,
    "en": "Medium: [Hmhm, Subaru-chin, did you understand? Do you know what it is?]",
    "vi": "Medium: [Hửm hửm, Subaru-chin có hiểu không nha? Cậu biết đó là nơi nào không?]"
  },
  {
    "id": 333,
    "en": "Subaru: [Uhh… That’s…]",
    "vi": "Subaru: [Ưm... Chuyện đó...]"
  },
  {
    "id": 334,
    "en": "Taritta and Medium turned to look at him expectantly, yet Subaru was at a loss for words.",
    "vi": "Taritta và Medium quay sang nhìn cậu với ánh mắt đầy mong đợi, thế nhưng Subaru lại á khẩu."
  },
  {
    "id": 335,
    "en": "As for the second hiding place’s hint, \"an abyss with a great view\", Subaru honestly found no clue that could lead to an answer.",
    "vi": "Về gợi ý nơi trốn thứ hai, “vực sâu với góc nhìn tuyệt hảo”, Subaru thành thật không tìm thấy bất kỳ manh mối nào có thể dẫn đến câu trả lời."
  },
  {
    "id": 336,
    "en": "Subaru: [Sorry. Can’t think of anything right away. It's not like I can read minds or anything, I just can read the situation.]",
    "vi": "Subaru: [Xin lỗi nhé. Hiện tại tôi chưa nghĩ ra gì cả. Có phải tôi đọc được suy nghĩ người khác đâu, chỉ là phán đoán tình hình thôi mà.]"
  },
  {
    "id": 337,
    "en": "Medium: [I see~, I'm sorry! We can't keep just relying on you! We'll figure it out together!]",
    "vi": "Medium: [Ra vậy nha~, tớ xin lỗi! Không thể cứ dựa dẫm mãi vào cậu được! Chúng ta cùng nhau nghĩ cách thôi nha!]"
  },
  {
    "id": 338,
    "en": "Taritta: [Yes, you're right. I'm not very good at using my head, but I'll keep thinking about it.]",
    "vi": "Taritta: [Vâng, đúng vậy ạ. Em không giỏi dùng đầu óc lắm, nhưng em cũng sẽ cố gắng suy nghĩ.]"
  },
  {
    "id": 339,
    "en": "Subaru bowed due to his uselessness, to which Medium and Taritta responded.",
    "vi": "Subaru cúi đầu xin lỗi vì sự vô dụng của mình, thấy thế Medium và Taritta vội đáp lời."
  },
  {
    "id": 340,
    "en": "The initial hiding place could also be called the starting point, a typical development of sorts that had been realized.",
    "vi": "Nơi trốn đầu tiên cũng có thể gọi là điểm xuất phát, một kiểu diễn tiến kinh điển đã được thực hiện."
  },
  {
    "id": 341,
    "en": "Even if that had been off the mark, they could have easily tried it out in part because it was a location so close that there was almost no time loss. However, from here on――,",
    "vi": "Cho dù phán đoán đó có sai lệch đi chăng nữa, họ cũng dễ dàng thử nghiệm vì địa điểm quá gần nên hầu như không mất thời gian. Song kể từ đây trở đi――,"
  },
  {
    "id": 342,
    "en": "Subaru: [It's simply going to be a race against time.]",
    "vi": "Subaru: [Nó chỉ đơn thuần là cuộc chạy đua với thời gian thôi.]"
  },
  {
    "id": 343,
    "en": "Al: [――. Bro also doesn’t have an idea of where he’s gonna hide next. Well, it isn’t anything surprising though.]",
    "vi": "Al: [――. Người anh em cũng chịu chết không đoán ra lão định trốn ở đâu tiếp theo à. Chà, mà cũng chẳng có gì lạ.]"
  },
  {
    "id": 344,
    "en": "Subaru: [That's right… Maybe I can’t be depended on, but it's depressing to be told that in such a clear way.]",
    "vi": "Subaru: [Đúng thế thật... Dù biết mình không đáng tin cậy, nhưng nghe cậu phán thẳng thừng thế cũng hơi nản lòng đấy.]"
  },
  {
    "id": 345,
    "en": "At the start of the real game of \"hide-and-seek\", his allies stabbed him in the back.",
    "vi": "Ngay khi trò trốn tìm thực sự bắt đầu, đồng minh lại dội một gáo nước lạnh vào lưng cậu."
  },
  {
    "id": 346,
    "en": "Of course, Subaru took that as a fair assessment, but he really wished he would have been a bit less direct. Even close friends have some sense of consideration.",
    "vi": "Tất nhiên, Subaru coi đó là lời đánh giá khách quan, nhưng cậu vẫn ước đối phương nói giảm nói tránh đi một chút. Ngay cả bạn bè thân thiết cũng nên biết ý tứ chứ."
  },
  {
    "id": 347,
    "en": "However, in response to Subaru's words, Al waved his hand and said, \"Oh, that's not it”,",
    "vi": "Thế nhưng trước lời nói của Subaru, Al phẩy tay bảo “Ồ, không phải thế đâu”,"
  },
  {
    "id": 348,
    "en": "Al: [Well it isn’t unreasonable for you to not get it, bro. After all, I'm here with you.]",
    "vi": "Al: [Chà, cậu không đoán ra cũng là lẽ thường thôi mà, người anh em. Vì dẫu sao, tôi đang ở đây cạnh cậu.]"
  },
  {
    "id": 349,
    "en": "Subaru: [Hmm? I really don’t know what you're talking about. Is it something like, my IQ goes down when you’re around, Al? What kind of system is that?]",
    "vi": "Subaru: [Hửm? Tôi thực sự không hiểu cậu đang nói gì cả. Kiểu như chỉ số thông minh của tôi bị tụt khi ở gần cậu đấy à, Al? Cơ chế quái gì vậy?]"
  },
  {
    "id": 350,
    "en": "Al: [That ain’t what I'm talking about, but it's hard to explain… right?]",
    "vi": "Al: [Không phải chuyện đó đâu, nhưng khó giải thích lắm... nhỉ?]"
  },
  {
    "id": 351,
    "en": "Subaru: [Even if you ask me to agree, I still won’t get it.]",
    "vi": "Subaru: [Cậu có hỏi thế tôi cũng chịu chết.]"
  },
  {
    "id": 352,
    "en": "As he spoke, Al’s way of speaking, holding neither confidence nor certainty, was curious.",
    "vi": "Lối nói chuyện thiếu tự tin và không chút chắc chắn của Al khiến cậu tò mò."
  },
  {
    "id": 353,
    "en": "He put Al aside, who was tilting his head, as he did not see how this topic could go any further in a constructive direction. The highest priority right now, was to figure out the \"abyss with a great view\" clue Olbart had left them with.",
    "vi": "Cậu tạm gác chuyện của Al đang nghiêng đầu qua một bên, vì không thấy chủ đề này có thể tiến triển theo hướng xây dựng nào. Mối bận tâm hàng đầu lúc này là giải mã gợi ý “vực sâu với góc nhìn tuyệt hảo” mà Olbart để lại."
  },
  {
    "id": 354,
    "en": "Subaru: [“Behind the eyelids” was the room where we started. \"An abyss with a great view\", another way to phrase it would be…]",
    "vi": "Subaru: [“Phía sau mí mắt” là căn phòng chúng ta xuất phát. Còn “vực sâu với góc nhìn tuyệt hảo”, diễn đạt theo cách khác thì sẽ là...]"
  },
  {
    "id": 355,
    "en": "Taritta: [“With a great view” means it's probably considered a high place, no?]",
    "vi": "Taritta: [“Với góc nhìn tuyệt hảo” thì chắc hẳn đó phải là một nơi trên cao đúng không ạ?]"
  },
  {
    "id": 356,
    "en": "Medium: [But an abyss is a hole, right? If it's a hole, wouldn't it be in the ground?]",
    "vi": "Medium: [Nhưng vực sâu là một cái hố đúng không nha? Nếu là hố thì chẳng phải nó phải ở dưới đất sao?]"
  },
  {
    "id": 357,
    "en": "Alternatively, it was possible that there was a spot in Chaosflame described as such.",
    "vi": "Hoặc cũng có khả năng ở Chaosflame có một nơi được miêu tả như vậy."
  },
  {
    "id": 358,
    "en": "In any case, it was unlikely that they would be able to reach the answer with the amount of information they could get from their room at the inn. At last, they would have to go into the city.",
    "vi": "Dù thế nào đi nữa, họ khó lòng tìm ra đáp án nếu chỉ quanh quẩn thu thập thông tin trong phòng trọ. Cuối cùng, họ vẫn phải bước ra ngoài phố."
  },
  {
    "id": 359,
    "en": "Al: […I can't get my head around this. Which reminds me, what's Abel-chan’s plan?]",
    "vi": "Al: [...Tôi cũng chịu không nghĩ thông được. Mà nhắc mới nhớ, kế hoạch của Abel-chan là gì thế?]"
  },
  {
    "id": 360,
    "en": "Abel: [It is not something that can proceed here, as I have told you. It would be convenient to have as many people as possible… And in addition to that, a place where outsiders come and go.]",
    "vi": "Abel: [Ta đã nói rồi, đó không phải chuyện có thể tiến hành ở đây. Có càng nhiều người thì càng thuận tiện... Thêm vào đó, phải là một nơi mà người ngoài thường xuyên ra vào.]"
  },
  {
    "id": 361,
    "en": "Al: [You mean a place where strangers come and go? I wonder where in this city…]",
    "vi": "Al: [Nơi người lạ thường xuyên ra vào sao? Không biết ở thành phố này thì là chỗ nào...]"
  },
  {
    "id": 362,
    "en": "The implementation of Abel’s plan caused Al to tilt his head.",
    "vi": "Việc thực thi kế hoạch của Abel khiến Al không khỏi nghiêng đầu suy ngẫm."
  },
  {
    "id": 363,
    "en": "The true meaning behind the idea of looking for a place where outsiders entered and exited was unknown to Subaru, but there was a good chance that Abel would not tell him even if he asked him to until they actually reached the execution phase. It could not be called an act that benefited their opponent, but it was difficult to deal with.",
    "vi": "Subaru không rõ ý đồ thực sự sau việc tìm kiếm địa điểm người ngoài ra vào tấp nập là gì, nhưng nhiều khả năng Abel có hỏi cũng chẳng hé răng nửa lời cho đến khi bước vào giai đoạn thực thi. Hành động này không hẳn là có lợi cho đối thủ của họ, song quả thực rất khó chịu."
  },
  {
    "id": 364,
    "en": "Of course, he was a man who would even discard the cards in his hand without a second thought for the sake of winning.",
    "vi": "Lẽ đương nhiên, gã là kiểu người sẵn sàng vứt bỏ những quân bài trong tay không chút đắn đo miễn là giành được chiến thắng."
  },
  {
    "id": 365,
    "en": "Subaru: [If it's a place with a lot of people coming and going, that should be… a place to drink.]",
    "vi": "Subaru: [Nếu là nơi đông người qua lại thì hẳn phải là... tửu quán.]"
  },
  {
    "id": 366,
    "en": "Taritta: [A tavern?]",
    "vi": "Taritta: [Tửu quán sao ạ?]"
  },
  {
    "id": 367,
    "en": "Subaru: [Yeah, there. I think we should try to go there or somewhere similar.]",
    "vi": "Subaru: [Ừ, đúng thế. Tôi nghĩ chúng ta nên thử đến đó hoặc nơi nào tương tự xem sao.]"
  },
  {
    "id": 368,
    "en": "It was debatable whether it was more beneficial to search for Olbart without taking any detours or to help Abel's plan come to fruition, but for now, it seemed like a good idea to prioritize Abel first.",
    "vi": "Vẫn còn phải bàn cãi xem việc tìm kiếm Olbart không đi đường vòng hay hỗ trợ kế hoạch của Abel thành hình sẽ có lợi hơn, nhưng hiện tại, có vẻ ưu tiên cho Abel trước mắt là ý kiến không tồi."
  },
  {
    "id": 369,
    "en": "With that in mind, Subaru and the others headed out of the inn with a renewed spirit.",
    "vi": "Nghĩ vậy, Subaru cùng những người khác bước ra ngoài quán trọ với tinh thần phấn chấn trở lại."
  },
  {
    "id": 370,
    "en": "Abel: [Attracting the attention of the public with this crowd of children is not ideal.]",
    "vi": "Abel: [Gây sự chú ý của dư luận với một lũ trẻ con rồng rắn thế này không phải ý hay đâu.]"
  },
  {
    "id": 371,
    "en": "Subaru: [Don't complain because four-sixths of us are children. In the first place, you’re not one to talk about public perception because of that oni mask you’re wearing. Or maybe, the perception… Uhh, does the effect of the mask make it look like it has a different face?]",
    "vi": "Subaru: [Đừng có phàn nàn chuyện bốn phần sáu quân số ở đây là trẻ con chứ. Mà ngay từ đầu, anh lấy tư cách gì nói chuyện gây chú ý khi bản thân đang đeo chiếc mặt nạ quỷ kia hả. Hay là, cái nhận thức... Ưm, hiệu ứng của mặt nạ có làm nó trông giống gương mặt khác không?]"
  },
  {
    "id": 372,
    "en": "Abel: [The mask does not alter its appearance from an oni’s face, it merely hides my identity.]",
    "vi": "Abel: [Mặt nạ không thay đổi diện mạo quỷ của nó, chỉ đơn thuần che giấu danh tính của ta mà thôi.]"
  },
  {
    "id": 373,
    "en": "Subaru: [Then you'll definitely stand out…]",
    "vi": "Subaru: [Thế thì anh chắc chắn sẽ nổi bần bật cho xem...]"
  },
  {
    "id": 374,
    "en": "With a small shrug of his shoulders, Subaru sighed, parrying aside Abel's misguided frustration.",
    "vi": "Khẽ nhún vai, Subaru thở dài, gạt đi sự bực bội vô lý của Abel."
  },
  {
    "id": 375,
    "en": "After greeting the shopkeeper at the entrance of the inn and asking them about the locations of some taverns, they went into the street. With that, they all walked towards a tavern to accomplish Abel's aim.",
    "vi": "Sau khi chào hỏi người quản lý ở lối vào quán trọ và hỏi thăm vị trí của vài tửu quán, họ bước xuống đường. Kế đó, cả nhóm cùng rảo bước về phía một tửu quán để thực hiện mục đích của Abel."
  },
  {
    "id": 376,
    "en": "And suddenly, in the middle of it all,",
    "vi": "Và đột nhiên, ngay giữa chừng,"
  },
  {
    "id": 377,
    "en": "Subaru: [Instead of having all of us going to the tavern, wouldn’t it be better if we split up? One group goes to look for Olbart-san, and the other goes to the tavern with Abel――]",
    "vi": "Subaru: [Thay vì tất cả cùng kéo nhau đến tửu quán, chia nhau ra không tốt hơn sao? Một nhóm đi tìm Olbart-san, nhóm còn lại đi đến tửu quán với Abel――]"
  },
  {
    "id": 378,
    "en": "It happened just as he was about to suggest that they split up.",
    "vi": "Sự việc xảy ra ngay lúc cậu định đề xuất chia nhóm."
  },
  {
    "id": 379,
    "en": "Subaru: [――Huh?]",
    "vi": "Subaru: [――Hả?]"
  },
  {
    "id": 380,
    "en": "Suddenly, a scarlet light scattered at the edge of his field of vision, dazzling Subaru’s eyes.",
    "vi": "Bất thình lình, một vệt sáng đỏ rực loe lên ở rìa tầm mắt, làm Subaru chói mắt."
  },
  {
    "id": 381,
    "en": "And then――,",
    "vi": "Và rồi――,"
  },
  {
    "id": 382,
    "en": "△▼△▼△▼△",
    "vi": "△▼△▼△▼△"
  },
  {
    "id": 383,
    "en": "???: [Oh yeah, that's a good name. We’ll just use that.]",
    "vi": "???: [Ồ phải rồi, cái tên hay đấy nha. Chúng ta cứ dùng cái tên đó đi.]"
  },
  {
    "id": 384,
    "en": "Subaru: [Ueh?]",
    "vi": "Subaru: [Uể?]"
  },
  {
    "id": 385,
    "en": "An unexpected voice struck Subaru's eardrums as he blinked, his eyes simmering from the vermilion light.",
    "vi": "Một giọng nói bất ngờ đập vào màng nhĩ Subaru khi cậu chớp mắt, đôi mắt vẫn còn hơi cay vì luồng sáng đỏ rực."
  },
  {
    "id": 386,
    "en": "The sound and its suddenness made a silly voice leak out, and a giggle broke out right in front of Subaru. A low chuckle it was, causing Subaru's eyes to widen at its sound.",
    "vi": "Âm thanh đột ngột ấy khiến cậu phát ra tiếng kêu ngớ ngẩn, rồi một tiếng cười khúc khích vang lên ngay trước mặt Subaru. Đó là một tiếng cười khẽ, khiến mắt Subaru mở to khi nghe thấy."
  },
  {
    "id": 387,
    "en": "???: [Kakakakka! What's with the dumb voice? I was just complimentin’ ya on the good name.]",
    "vi": "???: [Kakakakka! Kêu ngớ ngẩn thế là sao hả nhóc? Ta chỉ đang khen nhóc đặt cái tên hay thôi mà lị.]"
  },
  {
    "id": 388,
    "en": "Subaru: […Olbart, san?]",
    "vi": "Subaru: [...Olbart-san?]"
  },
  {
    "id": 389,
    "en": "An old man stood in front of him, clearing his throat and shaking his thin shoulders as he laughed.",
    "vi": "Một lão già đứng trước mặt cậu, tằng hắng một tiếng và rung đôi vai gầy guộc khi cười."
  },
  {
    "id": 390,
    "en": "It had happened so suddenly that Subaru had to blink his eyes a few times, unable to understand it. Then, he swallowed his saliva, and said what he had to declare,",
    "vi": "Mọi chuyện diễn ra quá đột ngột khiến Subaru phải chớp mắt vài lần, không tài nào hiểu nổi. Kế đó, cậu nuốt nước bọt, thốt lên lời cần tuyên bố:"
  },
  {
    "id": 391,
    "en": "Subaru: [Oh, found you, Olbart-san.]",
    "vi": "Subaru: [Ồ, tìm thấy ông rồi, Olbart-san.]"
  },
  {
    "id": 392,
    "en": "Olbart: [――? Why’s that? Ya already feelin’ like you're playin’ the game?]",
    "vi": "Olbart: [――? Thế là sao nha? Nhóc đã có cảm giác bắt đầu trò chơi rồi à?]"
  },
  {
    "id": 393,
    "en": "Subaru: [Huh…?]",
    "vi": "Subaru: [Hả...?]"
  },
  {
    "id": 394,
    "en": "He noticed a sense of incongruity upon taking that chance at the unexpected second discovery.",
    "vi": "Cậu nhận ra một cảm giác bất thường khi bắt lấy cơ hội phát hiện ra lão lần thứ hai đầy bất ngờ này."
  },
  {
    "id": 395,
    "en": "Olbart’s attitude as he tilted his head and spoke that, coupled most of all with the discomfort regarding the scene around him―― he was supposed to be out in the streets of the Demon City, but Subaru was in a room somewhere else.",
    "vi": "Thái độ nghiêng đầu nói chuyện của Olbart, cộng thêm sự bất thường lớn nhất là khung cảnh xung quanh―― đáng lẽ cậu phải ở ngoài đường phố Ma Thành, nhưng Subaru lại đang ở trong một căn phòng nào đó."
  },
  {
    "id": 396,
    "en": "――No, not in some room.",
    "vi": "――Không, chẳng phải trong một căn phòng nào đó."
  },
  {
    "id": 397,
    "en": "Subaru: […No way.]",
    "vi": "Subaru: [...Không thể nào.]"
  },
  {
    "id": 398,
    "en": "Subaru was in a room at an inn. ――The same lodgings they had just come out of.",
    "vi": "Subaru đang ở trong một phòng trọ. ――Chính là nơi ở mà họ vừa mới bước ra."
  },
  {
    "id": 399,
    "en": "And finally, there was the fact that Subaru was there, facing Olbart and talking to him.",
    "vi": "Và cuối cùng, thực tế là Subaru đang ở đó, đối mặt và trò chuyện với Olbart."
  },
  {
    "id": 400,
    "en": "Subaru: [――――]",
    "vi": "Subaru: [————]"
  },
  {
    "id": 401,
    "en": "He had no choice but to accept that he had Returned by Death in contradiction to the rule that should have prevented that.",
    "vi": "Cậu không còn cách nào khác ngoài việc chấp nhận rằng mình đã Returned by Death, trái ngược hoàn toàn với quy luật đáng lẽ phải ngăn cản chuyện đó."
  }
];

fs.writeFileSync(path.join(tempDir, 'ch43_part3.json'), JSON.stringify(part3, null, 2), 'utf-8');
console.log('Saved ch43_part3.json');
