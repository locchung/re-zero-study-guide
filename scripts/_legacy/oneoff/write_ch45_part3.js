import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tempDir = path.join(__dirname, 'translation_temp');

const part3 = [
  {
    "id": 241,
    "en": "Tasting it on her brown skin, Taritta's narrowed eyes scanned left to right over the entire area in one go.",
    "vi": "Cảm nhận điều đó trên làn da ngăm của mình, đôi mắt nheo lại của Taritta lập tức quét qua toàn bộ khu vực từ trái sang phải chỉ trong một lượt."
  },
  {
    "id": 242,
    "en": "For the People of Shudraq, who lived as hunters in the jungle, understanding the terrain and situation at a moment's notice was an essential skill. Taritta was no exception.",
    "vi": "Đối với người Shudraq, những thợ săn sinh sống giữa rừng sâu, việc nắm bắt địa hình và tình hình trong chớp mắt là một kỹ năng thiết yếu. Taritta cũng không phải ngoại lệ."
  },
  {
    "id": 243,
    "en": "――No, Mizelda, her sister, had entrusted Taritta with the role of chieftain.",
    "vi": "――Không, Mizelda, chị gái cô, đã tin tưởng giao phó vai trò tộc trưởng cho Taritta."
  },
  {
    "id": 244,
    "en": "Therefore, Taritta must excel in these skills, more so than her fellow Shudraqians. And indeed, she did.",
    "vi": "Chính vì vậy, Taritta phải vượt trội hơn các đồng bào Shudraq của mình trong những kỹ năng này. Và quả thực, cô đã làm được."
  },
  {
    "id": 245,
    "en": "Taritta: [――Ah.]",
    "vi": "Taritta: [――A.]"
  },
  {
    "id": 246,
    "en": "With a light gasp born at the back of her throat, Taritta assessed the number of hostile forces directed at her.",
    "vi": "Khẽ nấc nhẹ nơi cuống họng, Taritta ước lượng quân số địch đang hướng mũi nhọn về phía mình."
  },
  {
    "id": 247,
    "en": "Around her, there were about a hundred people with the will to fight, but less than twenty of them had seized their hostility onto Taritta, who had rushed out the back door.",
    "vi": "Xung quanh cô có khoảng một trăm kẻ có ý chí chiến đấu, song chưa đầy hai mươi tên trong số đó kịp khóa chặt sự thù địch lên Taritta khi cô lao ra từ cửa sau."
  },
  {
    "id": 248,
    "en": "In addition, the number of those able to move quickly among them would be even smaller.",
    "vi": "Ngoài ra, số lượng kẻ có thể di chuyển nhanh nhẹn trong nhóm đó thậm chí còn ít hơn nữa."
  },
  {
    "id": 249,
    "en": "First thing would be to get the feet of those who turned around to――,",
    "vi": "Việc đầu tiên là phải chặn chân những kẻ đã quay lại――,"
  },
  {
    "id": 250,
    "en": "Taritta: [――No good.]",
    "vi": "Taritta: [――Không ổn rồi.]"
  },
  {
    "id": 251,
    "en": "Her mind flashed back to the advice given by Abel just before she had taken off, to spare no quarter.",
    "vi": "Đầu óc cô chợt thoáng hiện về lời khuyên của Abel ngay trước lúc cô xuất phát, rằng không được nương tay."
  },
  {
    "id": 252,
    "en": "Abel was a prideful, good-looking man. He met all the requirements of Mizelda's taste in men, and Taritta was not good at dealing with him. She was weak to pressure and went along with the flow without resistance. Plus, when confronted with someone with a nature like that of her sister or Abel, she would be rendered unable to express any of her opinions.",
    "vi": "Abel là một người đàn ông kiêu ngạo và tuấn tú. Gã đáp ứng mọi tiêu chuẩn chọn đàn ông của Mizelda, và Taritta thì không giỏi đối phó với hạng người như gã. Cô vốn yếu đuối trước áp lực và thường xuôi theo dòng chảy mà không chút kháng cự. Hơn nữa, khi phải đối mặt với người mang tính cách giống chị mình hay Abel, cô sẽ hoàn toàn không thể bày tỏ bất kỳ ý kiến nào của bản thân."
  },
  {
    "id": 253,
    "en": "That was why Taritta preferred someone who would listen to her. Particularly because she would take time to settle on an opinion, and would reel at being rushed.",
    "vi": "Đỏ là lý do Taritta thích một người chịu lắng nghe mình hơn. Đặc biệt là vì cô cần thời gian để định hình một ý kiến, và sẽ lúng túng nếu bị thúc ép."
  },
  {
    "id": 254,
    "en": "From that perspective, Flop, who had stayed behind at Guaral, was quite――,",
    "vi": "Xét từ góc độ đó, Flop, người đã ở lại Guaral, quả thực khá――,"
  },
  {
    "id": 255,
    "en": "Taritta: [――Hk, what am I thinking?]",
    "vi": "Taritta: [――Hự, mình đang nghĩ cái gì thế này?]"
  },
  {
    "id": 256,
    "en": "Blushing red with momentary shame, Taritta drew her bowstring as if to vent.",
    "vi": "Đỏ mặt vì sự ngượng ngùng nhất thời, Taritta kéo căng dây cung như để giải tỏa."
  },
  {
    "id": 257,
    "en": "A moment later, arrows were released from the bow―― three, at the same time. Taritta's archery skills manifested, with each arrow aiming at a different prey.",
    "vi": "Ngay sau đó, những mũi tên được bắn ra từ cánh cung―― ba mũi cùng lúc. Tài cung thủ của Taritta được phô diễn, mỗi mũi tên nhắm thẳng vào một con mồi khác nhau."
  },
  {
    "id": 258,
    "en": "One flew straight and two flew in a curve, as they cut the wind along the alleyway outside the inn, and pierced their targets.",
    "vi": "Một mũi bay thẳng, hai mũi bay vòng, xé gió dọc theo con hẻm bên ngoài quán trọ và găm thẳng vào mục tiêu."
  },
  {
    "id": 259,
    "en": "Three men who had turned to face the rushing Taritta and made an attempt to step towards her, were shot in the neck and chest respectively, instantly robbing them of their fighting power.",
    "vi": "Ba gã đàn ông quay lại đối mặt với Taritta đang lao tới và toan tiến về phía cô đều lần lượt trúng tiễn vào cổ và ngực, ngay lập tức bị tước đoạt sức chiến đấu."
  },
  {
    "id": 260,
    "en": "Taritta: [Hunting is comfortable.]",
    "vi": "Taritta: [Đi săn thật dễ chịu.]"
  },
  {
    "id": 261,
    "en": "It suited Taritta, because she was not required to talk to anyone.",
    "vi": "Việc này rất hợp với Taritta, vì cô không cần phải nói chuyện với bất cứ ai."
  },
  {
    "id": 262,
    "en": "The prey did not expect Taritta to speak, nor did she want to communicate with them. The only dialogue that occurred was that of her arrows and their meeting the enemy.",
    "vi": "Con mồi không trông mong Taritta cất lời, và cô cũng chẳng muốn giao thiệp với chúng. Cuộc đối thoại duy nhất diễn ra chỉ là sự tiếp xúc giữa những mũi tên của cô và kẻ thù."
  },
  {
    "id": 263,
    "en": "Even so, the result dubbed life and death need not be produced at the end of a conversation.",
    "vi": "Dù vậy, kết cục được định đoạt bằng sự sống và cái chết thì không cần phải được tạo ra sau một cuộc đàm thoại."
  },
  {
    "id": 264,
    "en": "???: [――ROHH!]",
    "vi": "???: [――HÚUUU!]"
  },
  {
    "id": 265,
    "en": "With a roar, several shadows rushed into the alley, replacing the men who had been shot through.",
    "vi": "Cùng tiếng gầm lớn, vài chiếc bóng lao vào con hẻm, thế chỗ cho những gã vừa bị bắn gục."
  },
  {
    "id": 266,
    "en": "The first thing that entered Taritta's field of vision was an oxman; his body so massive that, to gaze upon it all, she had to look up. A man with short, thick horns at the top of his head was ferociously using his frame to charge, all while unleashing a battle cry.",
    "vi": "Thứ đầu tiên lọt vào tầm mắt Taritta là một ngưu nhân; thân hình gã đồ sộ tới mức cô phải ngước nhìn mới thấy hết. Gã đàn ông với cặp sừng ngắn và dày trên đỉnh đầu đang hung hãn dùng thể hình của mình lao tới, đồng thời thét lên tiếng gào lâm trận."
  },
  {
    "id": 267,
    "en": "A direct frontal hit would pulverize every bone in Taritta's thin body.",
    "vi": "Một cú tông trực diện sẽ nghiền nát mọi khúc xương trong cơ thể mảnh khảnh của Taritta."
  },
  {
    "id": 268,
    "en": "However, there was no way to escape to her back, or to her side. Even if she jumped upwards, there was a good chance she would be grabbed by the legs.",
    "vi": "Tuy nhiên, không có đường lui phía sau hay né tránh sang hai bên. Kể cả có nhảy lên cao, khả năng cao là cô vẫn sẽ bị túm lấy chân."
  },
  {
    "id": 269,
    "en": "With that in mind, Taritta lowered herself and darted forward.",
    "vi": "Nghĩ đoạn, Taritta hạ thấp người và phóng thẳng về phía trước."
  },
  {
    "id": 270,
    "en": "Oxman: [Wha――!?]",
    "vi": "Ngưu nhân: [Cái――!?]"
  },
  {
    "id": 271,
    "en": "Perhaps because those actions were unexpected, the oxman's eyes widened and his throat tightened. Taritta extended her legs towards the oxman's face and used it as a foothold, punting him in the snout.",
    "vi": "Có lẽ vì hành động đó quá bất ngờ, đôi mắt gã ngưu nhân trợn tròn và cổ họng gã nghẹn lại. Taritta duỗi chân hướng thẳng vào mặt gã ngưu nhân, dùng nó làm điểm tựa rồi đá mạnh vào mũi gã."
  },
  {
    "id": 272,
    "en": "Bending her knees to stifle her momentum, Taritta's body revolved with ease in midair, using the face of the oxman, spewing blood from his nose, as a foothold. Then performing a half-turn, she adopted an upside-down position while airborne.",
    "vi": "Khụy gối để triệt tiêu đà quán tính, cơ thể Taritta xoay chuyển dễ dàng giữa không trung, lấy khuôn mặt đang phụt máu mũi của gã ngưu nhân làm điểm tựa. Rồi thực hiện một cú nửa vòng xoay, cô lộn ngược người trên không trung."
  },
  {
    "id": 273,
    "en": "Taritta: [――――]",
    "vi": "Taritta: [――――]"
  },
  {
    "id": 274,
    "en": "As she spun around, she secured a three-sixty-degree view, including the area behind her, which she had not been able to see previously. She was able to assess the shadows of buildings, the rooftops and scaffolding present in the city, and even those attempting to attack her from these positions.",
    "vi": "Khi xoay người, cô thu được tầm nhìn ba trăm sáu mươi độ, bao gồm cả khu vực phía sau mà trước đó không thể quan sát. Cô có thể ước lượng các bóng râm của tòa nhà, mái nhà cùng giàn giáo trong thành phố, và cả những kẻ đang toan tấn công cô từ các vị trí đó."
  },
  {
    "id": 275,
    "en": "Taritta: [These won’t be enough arrows.]",
    "vi": "Taritta: [Ngần này tên sẽ không đủ mất.]"
  },
  {
    "id": 276,
    "en": "As she said this, she pulled out the arrows from the quiver on her back, put them on her bow at a dizzying pace, and repeatedly fired three shots in rapid succession to reduce her enemies.",
    "vi": "Dứt lời, cô rút những mũi tên từ bao đựng sau lưng, đặt lên cung với tốc độ chóng mặt, liên tục bắn ba phát liên tiếp để tiêu hao quân địch."
  },
  {
    "id": 277,
    "en": "The number of arrows was disproportionate to the number of enemies she had assessed. With no choice but to cut down the enemies with the highest priority, Taritta used her intuition of many years to target the ones with the most ability.",
    "vi": "Số lượng mũi tên quá chênh lệch so với lượng kẻ thù cô vừa ước tính. Không còn cách nào khác ngoài việc triệt hạ những kẻ có mức độ ưu tiên cao nhất, Taritta sử dụng trực giác tích lũy nhiều năm để nhắm vào những tên có năng lực mạnh nhất."
  },
  {
    "id": 278,
    "en": "Ignoring the uncomfortable feeling she felt at the sight of those who entered her field of vision――,",
    "vi": "Phớt lờ cảm giác khó chịu dấy lên khi nhìn thấy những kẻ lọt vào tầm mắt――,"
  },
  {
    "id": 279,
    "en": "???: [Woaaa――?!]",
    "vi": "???: [Úi chao――?!]"
  },
  {
    "id": 280,
    "en": "The raging arrows glided through the air akin to a tempest, and those pierced through were blown away by the impact.",
    "vi": "Những mũi tên cuồng loạn lướt qua không trung tựa như một trận cuồng phong, và những kẻ bị bắn trúng đều bị thổi bay bởi lực va đập."
  },
  {
    "id": 281,
    "en": "Following Abel's advice, Taritta attacked about thirty enemies with merciless attacks to the vitals, aiming for everyone’s chest and neck, and the eyes and mouth of those she could, hoping to inflict a fatal wound.",
    "vi": "Tuân theo lời khuyên của Abel, Taritta tấn công khoảng ba mươi kẻ thù bằng những đòn tàn nhẫn vào tử huyệt, nhắm thẳng vào ngực và cổ của tất cả bọn chúng, cùng mắt và miệng của những kẻ cô có thể nhắm tới, nhằm gây ra vết thương chí mạng."
  },
  {
    "id": 282,
    "en": "After this first engagement, however, she had already run out of arrows.",
    "vi": "Thế nhưng sau đợt đụng độ đầu tiên này, cô đã dùng hết sạch tên."
  },
  {
    "id": 283,
    "en": "The only thing she could do now, to retrieve the arrows that had been utilized, and to continue serving as a decoy as long as possible――,",
    "vi": "Điều duy nhất cô có thể làm lúc này là thu hồi những mũi tên đã sử dụng, và tiếp tục làm mồi nhử lâu nhất có thể――,"
  },
  {
    "id": 284,
    "en": "Taritta: […Well this is, a bit unexpected.]",
    "vi": "Taritta: […Chuyện này, hơi ngoài dự tính một chút.]"
  },
  {
    "id": 285,
    "en": "As she moved to retrieve the arrow from the downed enemy, Taritta stopped in her tracks.",
    "vi": "Khi tiến tới để rút mũi tên từ kẻ thù đã gục ngã, Taritta khựng lại."
  },
  {
    "id": 286,
    "en": "Taritta, as a warrior of Shudraq, had killed countless beasts in her life. Even if the beast’s shape was slightly different, the creature’s feedback to having its vital point pierced could be witnessed at the moment of her bow firing.",
    "vi": "Taritta, với tư cách là một chiến binh Shudraq, đã hạ gục vô số dã thú trong đời. Cho dù hình dáng của thú săn có đôi chút khác biệt, phản hồi của sinh vật khi bị đâm trúng tử huyệt vẫn có thể được nhận biết ngay thời điểm cô thả dây cung."
  },
  {
    "id": 287,
    "en": "And based on that experience, she was confident that she had sowed the lives of those she had shot through.",
    "vi": "Và dựa trên kinh nghiệm đó, cô tự tin rằng mình đã cướp đi mạng sống của những kẻ bị cô bắn trúng."
  },
  {
    "id": 288,
    "en": "???: [Guhgu…]",
    "vi": "???: [Hự hự...]"
  },
  {
    "id": 289,
    "en": "And yet, none of those who groaned and rose to their feet had lost their lives.",
    "vi": "Ấy thế mà, không một ai trong số những kẻ đang rên rỉ và lồm cồm bò dậy chịu mất mạng."
  },
  {
    "id": 290,
    "en": "Even if they had not flat-out perished, they should have been on the verge of death. However, those that stood up stared at Taritta with eyes that were not bereft of the will to fight, let alone on the verge of death.",
    "vi": "Ngay cả khi không bỏ mạng ngay tức khắc, lẽ ra bọn chúng cũng phải đang cận kề cái chết. Thế nhưng, những kẻ đứng dậy lại chằm chằm nhìn Taritta bằng đôi mắt không hề mất đi ý chí chiến đấu, chứ đừng nói là thoi thóp."
  },
  {
    "id": 291,
    "en": "In those eyes that gazed at Taritta, a change occurred.",
    "vi": "Trong những đôi mắt đang hướng về Taritta kia, một sự thay đổi đã diễn ra."
  },
  {
    "id": 292,
    "en": "Taritta: [What, in the world is that?]",
    "vi": "Taritta: [Cái quái gì thế kia?]"
  },
  {
    "id": 293,
    "en": "Taritta frowned and questioned the oxman as he stood up. The man did not reply, but the change that had occurred to him was so alien that it seized her attention.",
    "vi": "Taritta nhíu mày hỏi gã ngưu nhân khi gã đứng thẳng dậy. Gã không đáp lời, nhưng sự thay đổi đang diễn ra trên cơ thể gã kỳ dị đến mức thu hút toàn bộ sự chú ý của cô."
  },
  {
    "id": 294,
    "en": "――A scarlet flame was covering his right eye.",
    "vi": "――Một ngọn lửa đỏ tươi đang che phủ mắt phải của gã."
  },
  {
    "id": 295,
    "en": "Oxman: [――――]",
    "vi": "Ngưu nhân: [――――]"
  },
  {
    "id": 296,
    "en": "Those whose pupils were ablaze were not restricted to just the oxman.",
    "vi": "Những kẻ có con ngươi rực cháy không chỉ giới hạn ở mỗi gã ngưu nhân."
  },
  {
    "id": 297,
    "en": "All those who had fallen after being shot by Taritta regarded her with a scarlet flame in one of their eyes, be it the right or the left one.",
    "vi": "Mọi kẻ ngã xuống sau khi trúng tiễn của Taritta đều nhìn cô với một ngọn lửa đỏ rực cháy ở một bên mắt, dù là bên phải hay bên trái."
  },
  {
    "id": 298,
    "en": "Those whose eyes were burning were not restricted to just those who had been shot by Taritta.",
    "vi": "Những kẻ có đôi mắt bập bùng lửa đỏ không chỉ có những tên bị Taritta bắn trúng."
  },
  {
    "id": 299,
    "en": "Those who had come to the scene later to surround Taritta had scarlet flames in their eyes as well. Flickering flames that burnt, all the while scattering sparks.",
    "vi": "Những kẻ đến sau để bao vây Taritta cũng mang những ngọn lửa đỏ tươi trong mắt. Ngọn lửa lập lòe cháy sáng, liên tục bắn ra những tia lửa."
  },
  {
    "id": 300,
    "en": "And amazingly, flames similar to those burned away and healed the wounds of the oxman.",
    "vi": "And đáng ngạc nhiên thay, những ngọn lửa tương tự đã thiêu rụi và chữa lành vết thương của gã ngưu nhân."
  },
  {
    "id": 301,
    "en": "The kicked and smashed nose of the oxman, and the arrow wounds of those who had been shot through, had all been undone, completely.",
    "vi": "Chiếc mũi bị đá dập nát của gã ngưu nhân, cùng các vết thương do trúng tiễn của những kẻ bị bắn xuyên qua đều đã hoàn toàn lành lặn như cũ."
  },
  {
    "id": 302,
    "en": "Taritta: […A few words were not enough, Abel.]",
    "vi": "Taritta: […Vài lời khuyên đó là không đủ đâu, Abel.]"
  },
  {
    "id": 303,
    "en": "The scene and Abel's earlier advice came together, and Taritta let out a sigh.",
    "vi": "Cảnh tượng trước mắt và lời khuyên ban nãy của Abel khớp lại với nhau, khiến Taritta khẽ thở dài."
  },
  {
    "id": 304,
    "en": "Although she did not know for certain, her belief was that Abel had thoroughly anticipated this situation. If that were the case, he should have endeavored to make his words more understandable.",
    "vi": "Dù cô không chắc chắn, cô tin rằng Abel đã hoàn toàn lường trước được tình huống này. Nếu đã vậy, gã nên cố gắng giải thích rõ ràng hơn mới phải."
  },
  {
    "id": 305,
    "en": "And beyond that, her head pounded with the desire for purely convenient thoughts, as she was not good with someone who hurried the conversation forward.",
    "vi": "Hơn thế nữa, đầu óc cô ong lên bởi khát khao có được những suy nghĩ thuận tiện đơn thuần, vì cô vốn không giỏi đối phó với kẻ cứ thích đẩy nhanh cuộc hội thoại."
  },
  {
    "id": 306,
    "en": "However——,",
    "vi": "Tuy nhiên――,"
  },
  {
    "id": 307,
    "en": "Taritta: [My role is to be a decoy, not to annihilate the enemy.]",
    "vi": "Taritta: [Vai trò của mình là làm mồi nhử, chứ không phải tiêu diệt kẻ địch.]"
  },
  {
    "id": 308,
    "en": "Hence, in terms of focusing on her role, it was safe to say that it was working well.",
    "vi": "Thế nên, xét về khía cạnh tập trung vào vai trò của mình, có thể nói kế hoạch đang tiến triển rất tốt."
  },
  {
    "id": 309,
    "en": "And then——,",
    "vi": "Và rồi――,"
  },
  {
    "id": 310,
    "en": "Taritta: […They’re breaking the arrows, it seems.]",
    "vi": "Taritta: […Có vẻ như bọn chúng đang bẻ gãy các mũi tên.]"
  },
  {
    "id": 311,
    "en": "The arrows that had shot through them were breaking one after another, as they slipped out of their bodies. The arrowheads that she was supposed to retrieve were lost, and Taritta became unable to use her archery skills.",
    "vi": "Những mũi tên găm trên người bọn chúng lần lượt gãy đôi khi tuột ra khỏi cơ thể. Những đầu mũi tên lẽ ra cô phải thu hồi đã mất, và Taritta không thể sử dụng kỹ năng bắn cung của mình được nữa."
  },
  {
    "id": 312,
    "en": "However, it would be a mistake to think that this would leave her with no options.",
    "vi": "Mặc dù vậy, sẽ là sai lầm nếu nghĩ rằng cô sẽ rơi vào đường cùng."
  },
  {
    "id": 313,
    "en": "Taritta: [Both daggers and throwing stones can be used for hunting.]",
    "vi": "Taritta: [Cả dao găm lẫn đá ném đều có thể dùng để đi săn.]"
  },
  {
    "id": 314,
    "en": "As she said this, she dropped low and held the dagger she had tucked inside her formal dress and the bow she had lost the arrows to shoot with together.",
    "vi": "Vừa dứt lời, cô hạ thấp trọng tâm, một tay cầm chiếc dao găm giấu sẵn trong trang phục lễ hội, tay kia nắm chặt cây cung đã hết sạch tên bắn."
  },
  {
    "id": 315,
    "en": "Taritta's battle to fulfil her role had only now begun.",
    "vi": "Trận chiến thực hiện vai trò của Taritta giờ mới thực sự bắt đầu."
  },
  {
    "id": 316,
    "en": "△▼△▼△▼△",
    "vi": "△▼△▼△▼△"
  },
  {
    "id": 317,
    "en": "Subaru: [――Hk, Taritta-san, awesome…!]",
    "vi": "Subaru: [――Hự, Taritta-san cừ thật đấy...!]"
  },
  {
    "id": 318,
    "en": "Subaru's voice trembled as he ran, at the sight of the people whose eyes and wounds were ablaze.",
    "vi": "Giọng Subaru run lên khi đang chạy trước cảnh tượng đôi mắt và vết thương của những kẻ kia bừng cháy lửa đỏ."
  },
  {
    "id": 319,
    "en": "Taritta had been sent out for a fierce struggle, but her skill was far beyond Subaru's imagination.",
    "vi": "Taritta đã được cử đi làm nhiệm vụ đầy gian khổ, song kỹ năng của cô vượt xa trí tưởng tượng của Subaru."
  },
  {
    "id": 320,
    "en": "In all honesty, it was safe to say that Subaru had underestimated Taritta's ability to be an effective member of Shudraq, given her reserved and quiet nature as a late bloomer.",
    "vi": "Thành thật mà nói, có thể thấy Subaru đã đánh giá thấp thực lực chiến đấu của Taritta trong bộ tộc Shudraq, bởi tính cách dè dặt và lặng lẽ của một người chậm tiến bộ như cô."
  },
  {
    "id": 321,
    "en": "Just before, he had also seen how helpless she had been against Olbart.",
    "vi": "Ngay trước đó, cậu cũng đã tận mắt chứng kiến cô bất lực thế nào trước Olbart."
  },
  {
    "id": 322,
    "en": "Of course, because Mizelda had nominated her to be the next Chieftain, he knew there would be no gap in ability between her and Kuna or Holly.",
    "vi": "Lẽ dĩ nhiên, vì Mizelda đã đề cử cô làm Tộc trưởng tiếp theo, cậu biết thực lực của cô không hề thua kém Kuna hay Holly."
  },
  {
    "id": 323,
    "en": "But the precision of her aim, the speed of her shots, and the way she was able to take on an overwhelmingly large number of people made it seem like she could be as good as, or even better than, Mizelda.",
    "vi": "But độ chính xác trong phát bắn, tốc độ ra tiễn, cùng cách cô đương đầu với số lượng kẻ địch áp đảo khiến cô trông có vẻ ngang ngửa, hoặc thậm chí là xuất chúng hơn cả Mizelda."
  },
  {
    "id": 324,
    "en": "Subaru: [But still…]",
    "vi": "Subaru: [Nhưng mà...]"
  },
  {
    "id": 325,
    "en": "Even evaluating Taritta to have a high level of skill, it was hard to shake off the strangeness of those attackers.",
    "vi": "Dù đánh giá Taritta sở hữu kỹ năng thượng thừa, thật khó để rũ bỏ cảm giác kỳ lạ về những kẻ tấn công kia."
  },
  {
    "id": 326,
    "en": "In the first place, their appearance was strange. After all, none of them wore armor, nor did they have any sort of weapons. They were unarmed.",
    "vi": "Ngay từ đầu, ngoại hình của bọn chúng đã rất kỳ lạ. Xét cho cùng, không một ai trong số chúng mặc giáp binh, và cũng không mang theo bất kỳ loại vũ khí nào. Chúng hoàn toàn tay không tấc sắt."
  },
  {
    "id": 327,
    "en": "From the looks of it, they were pretty much the same as many of the people they had been passing by since the previous day, in Chaosflame―― they were just another citizen of the Demon City with an appearance that stood out somewhat.",
    "vi": "Nhìn qua thì bọn họ hầu như giống hệt những người mà cả nhóm đi qua từ ngày hôm qua ở Chaosflame―― họ chỉ là những cư dân bình thường của Ma Thành với vẻ ngoài có phần nổi bật."
  },
  {
    "id": 328,
    "en": "These citizens had surrounded Subaru and the others, and after being on the other end of Taritta’s transcendental bow-and-arrow technique, they stood up without a hitch despite being mortally wounded.",
    "vi": "Những cư dân này đã bao vây Subaru cùng mọi người, và sau khi lãnh trọn kỹ năng bắn cung siêu phàm của Taritta, họ vẫn đứng dậy bình yên vô sự bất chấp việc bị trúng vết thương chí mạng."
  },
  {
    "id": 329,
    "en": "From a distance, it could be seen that the attackers included women and children, and Taritta must have been disturbed that they were not actually a group of strong warriors.",
    "vi": "Từ đằng xa, có thể nhận thấy trong đám tấn công có cả phụ nữ và trẻ em, chắc hẳn Taritta đã cảm thấy bối rối khi đối đầu với những kẻ vốn không phải là một nhóm chiến binh thực thụ."
  },
  {
    "id": 330,
    "en": "She had done a great job of attracting attention, and at Medium's signal, Subaru and the others ran out into the city. But should they really escape, and not back up Taritta?",
    "vi": "Cô ấy đã làm rất tốt việc thu hút sự chú ý, và nhận tín hiệu của Medium, Subaru cùng những người khác đã lao ra phố. Nhưng liệu họ có nên thực sự chạy trốn mà không hỗ trợ cho Taritta?"
  },
  {
    "id": 331,
    "en": "Unsure of what was the right thing to do, those options kept spinning around and around in Subaru's mind.",
    "vi": "Phân vân không biết đâu mới là lựa chọn đúng đắn, những phương án đó cứ xoay mòng mòng trong tâm trí Subaru."
  },
  {
    "id": 332,
    "en": "Next to Subaru, Abel, carrying a bag on his back, witnessed the same scene.",
    "vi": "Bên cạnh Subaru, Abel, người đang vác chiếc túi trên lưng, cũng chứng kiến cảnh tượng tương tự."
  },
  {
    "id": 333,
    "en": "Abel: [So indeed, the entire city is covered by the Soul Marriage Technique.]",
    "vi": "Abel: [Quả nhiên, toàn bộ thành phố này đều được bao phủ bởi Soul Marriage Technique.]"
  },
  {
    "id": 334,
    "en": "Al: [Konkon…? Oioi, Abel-chan, the hell’s that?] [2]",
    "vi": "Al: [Konkon...? Này này, Abel-chan, cái quái gì thế hả?] [2]"
  },
  {
    "id": 335,
    "en": "Abel: [It is the mechanism of the collective that faces Taritta without backing down.]",
    "vi": "Abel: [Đó là cơ chế của tập thể đang đối đầu với Taritta mà không hề chùn bước.]"
  },
  {
    "id": 336,
    "en": "Al, who was running in a daze, asked a question to which Abel gave an inadequate answer.",
    "vi": "Al, người đang chạy trong trạng thái ngơ ngác, đặt câu hỏi song chỉ nhận được câu trả lời không thỏa đáng từ Abel."
  },
  {
    "id": 337,
    "en": "Although Subaru couldn't quite wrap his head around what was going on, one thing was clear. ――Abel had a clue about the relationship between those burning eyes and the attackers.",
    "vi": "Mặc dù Subaru không thể hoàn toàn hiểu rõ chuyện gì đang xảy ra, có một điều chắc chắn. ――Abel biết manh mối về mối liên hệ giữa những đôi mắt bừng cháy kia và đám người tấn công."
  },
  {
    "id": 338,
    "en": "Subaru: [Abel! Don't keep secrets from us! Tell us everything!]",
    "vi": "Subaru: [Abel! Đừng có giấu giếm nữa! Nói hết cho bọn tôi nghe đi!]"
  },
  {
    "id": 339,
    "en": "Abel: [――. It is one of the supposedly lost secret arts spoken of in ancient literature. It is called the Soul Marriage Technique; by sharing a part of one’s soul with others, value is added to it.]",
    "vi": "Abel: [――. Đó là một trong những bí thuật được cho là đã thất truyền trong thư tịch cổ. Nó được gọi là Soul Marriage Technique; bằng cách chia sẻ một phần linh hồn của mình cho người khác, giá trị của nó sẽ được gia tăng.]"
  },
  {
    "id": 340,
    "en": "Al: [I don't get it! The fuck’s that supposed to mean?]",
    "vi": "Al: [Tôi không hiểu! Thế quái nào lại như vậy chứ?]"
  },
  {
    "id": 341,
    "en": "Abel: [To put it another way, souls united via the Soul Marriage Technique share a fraction of their power. And in this city, there is merely a single wielder of the Soul Marriage Technique――]",
    "vi": "Abel: [Nói cách khác, những linh hồn liên kết qua Soul Marriage Technique sẽ chia sẻ một phần sức mạnh của họ. Và tại thành phố này, chỉ có duy nhất một người sử dụng Soul Marriage Technique――]"
  },
  {
    "id": 342,
    "en": "Urged on from both sides by Subaru and Al, Abel gave them the most abridged answer possible.",
    "vi": "Bị hối thúc từ cả hai phía bởi Subaru và Al, Abel đưa ra câu trả lời ngắn gọn nhất có thể."
  },
  {
    "id": 343,
    "en": "Despite that, the content was still difficult for Subaru to understand, but, somehow, he managed to pick up its nuance.",
    "vi": "Dù vậy, nội dung đó vẫn rất khó hiểu đối với Subaru, nhưng bằng cách nào đó, cậu vẫn nắm được đại ý."
  },
  {
    "id": 344,
    "en": "In other words――,",
    "vi": "Nói cách khác――,"
  },
  {
    "id": 345,
    "en": "Abel: [――It means that everything that composes this Demon City shares the power of Yorna Mishigure. Therefore, this city is a land that shall not fall easily, no matter how many armies you dispatch against it.]",
    "vi": "Abel: [――Điều đó nghĩa là mọi thứ cấu thành nên Ma Thành này đều chia sẻ sức mạnh của Yorna Mishigure. Bởi vậy, thành phố này là vùng đất sẽ không dễ dàng thất thủ, bất kể ngươi có phái bao nhiêu quân đội đến đi chăng nữa.]"
  },
  {
    "id": 346,
    "en": "Translation notes:",
    "vi": "Chú thích dịch thuật:"
  },
  {
    "id": 347,
    "en": "[1] A Japanese idiom for a situation in which it is obvious that even if one difficult problem or disaster is solved or avoided, another difficult problem or disaster will be faced, henceforth making it extremely difficult to escape danger.",
    "vi": "[1] Một thành ngữ Nhật Bản chỉ tình huống mà rõ ràng ngay cả khi giải quyết hoặc tránh được một vấn đề khó khăn hay thảm họa, người ta vẫn sẽ đối mặt với một vấn đề khó khăn hoặc thảm họa khác, từ đó khiến việc thoát khỏi nguy hiểm trở nên vô cùng khó khăn."
  },
  {
    "id": 348,
    "en": "[2] Konkon is usually an onomatopoeic word used to refer to the cry of a fox, in this case, however, this word is used in the chapter for the technique that Yorna uses to make the citizens of Chaosflame stronger, “Soul Marriage Technique”, read in Japanese as \"Konkon Jutsu.\" Seeing how Yorna is a fox demi-human, the pun should be obvious. Abel uses the Kanji in writing (魂婚) for Soul Marriage, which is pronounced “konkon”. However, Al doesn’t really get what he’s referring to, hence his reaction, and saying the pronunciation out loud.",
    "vi": "[2] Konkon thường là từ tượng thanh dùng để chỉ tiếng kêu của loài cáo, tuy nhiên trong trường hợp này, từ này được dùng trong chương cho kỹ thuật mà Yorna sử dụng để giúp các cư dân của Chaosflame mạnh mẽ hơn, “Soul Marriage Technique”, trong tiếng Nhật đọc là \"Konkon Jutsu\" (Hồn Hôn Thuật). Xét đến việc Yorna là một bán nhân loài cáo thì phép chơi chữ này là quá rõ ràng. Abel sử dụng chữ Hán (魂婚) cho Soul Marriage, có cách phát âm là “konkon”. Dẫu vậy, Al không thực sự hiểu gã đang ám chỉ điều gì, do đó mới có phản ứng và phát âm thành tiếng như vậy."
  }
];

fs.writeFileSync(path.join(tempDir, 'ch45_part3.json'), JSON.stringify(part3, null, 2), 'utf-8');
console.log('Saved ch45_part3.json');
