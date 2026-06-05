import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tempDir = path.join(__dirname, 'translation_temp');

const part2 = [
  {
    "id": 141,
    "en": "Abel: [Taritta, lower your bow. There is no one to point it at anymore.]",
    "vi": "Abel: [Taritta, hạ cung xuống đi. Không còn ai để chĩa vào nữa đâu.]"
  },
  {
    "id": 142,
    "en": "Taritta: […Okay.]",
    "vi": "Taritta: [...Vâng ạ.]"
  },
  {
    "id": 143,
    "en": "After the enemy had left the room, Abel had Taritta lower her bow.",
    "vi": "Sau khi kẻ địch rời khỏi phòng, Abel bảo Taritta hạ cung xuống."
  },
  {
    "id": 144,
    "en": "Taritta's face, as she followed the instructions, was filled with shame. Naturally so. Olbart had kept a cool face as she pointed her bow at him.",
    "vi": "Gương mặt Taritta khi làm theo chỉ dẫn ngập tràn vẻ xấu hổ. Lẽ tự nhiên là vậy. Olbart vẫn giữ nét mặt thản nhiên như không dù bị cô chĩa cung vào."
  },
  {
    "id": 145,
    "en": "As one of the Shudraq―― No, as someone who had already been entrusted with the role of being the next Chieftain, for Taritta, the old man's attitude was a mockery of the power of the Shudraqians.",
    "vi": "Với tư cách là một người Shudraq―― không, là một người đã được ủy thác vai trò tộc trưởng tiếp theo, đối với Taritta, thái độ của lão già kia chẳng khác nào một sự nhạo báng nhắm vào sức mạnh của tộc Shudraq."
  },
  {
    "id": 146,
    "en": "Subaru had allowed Olbart to underestimate the People of Shudraq.",
    "vi": "Subaru đã để Olbart coi thường tộc nhân Shudraq."
  },
  {
    "id": 147,
    "en": "This too, was due to his own lack of strength.",
    "vi": "Điều này cũng là do cậu thiếu năng lực."
  },
  {
    "id": 148,
    "en": "Originally, Taritta had accompanied Subaru to the Demon City to seek a pillar of support for her resolve to take over as Chieftain.",
    "vi": "Ban đầu, Taritta đi cùng Subaru tới Ma Thành để tìm kiếm một chỗ dựa vững chắc cho quyết tâm kế nhiệm chức tộc trưởng."
  },
  {
    "id": 149,
    "en": "――This would only have the opposite effect, rather than her gaining the needed confidence.",
    "vi": "――Thế nhưng việc này chỉ mang lại tác dụng ngược, thay vì giúp cô có được sự tự tin cần thiết."
  },
  {
    "id": 150,
    "en": "Al: [Are you seriously gonna play along with that old man's games, bro?]",
    "vi": "Al: [Cậu định nghiêm túc chơi trò chơi của lão già đó sao, người anh em?]"
  },
  {
    "id": 151,
    "en": "And so, Al spoke up towards Subaru, who could not find any words to say to Taritta.",
    "vi": "Thấy vậy, Al liền lên tiếng hỏi Subaru, người vẫn chưa tìm ra lời lẽ nào để nói với Taritta."
  },
  {
    "id": 152,
    "en": "Al was wearing a face covering that did not quite fit, and his tone was filled with frustration and disapproval at this interaction with Olbart. He always had the impression of accepting everything rather easily, and of letting things go, so it was surprising to see him react that way.",
    "vi": "Al đang quấn một mảnh vải che mặt không mấy vừa vặn, giọng điệu đầy vẻ bực dọc và bất mãn trước cuộc đối thoại với Olbart. Cậu ta vốn luôn tạo cảm giác dễ dàng chấp nhận và bỏ qua mọi chuyện, nên phản ứng thế này quả là đáng ngạc nhiên."
  },
  {
    "id": 153,
    "en": "However, since Olbart keeps outmaneuvering them, it was understandable as to why he would be frustrated.",
    "vi": "Mặc dù vậy, trước việc Olbart liên tục đi trước họ một bước, sự ức chế của cậu ta cũng là điều dễ hiểu."
  },
  {
    "id": 154,
    "en": "Subaru: [I don't feel good about being put through the wringer like that either. But we left some possibilities open at the last minute, right?]",
    "vi": "Subaru: [Tôi cũng chẳng dễ chịu gì khi bị xoay như chong chóng thế này đâu. Nhưng chúng ta vẫn chừa lại vài khả năng vào phút chót đúng không?]"
  },
  {
    "id": 155,
    "en": "Al: [Possibilities, you mean…]",
    "vi": "Al: [Ý cậu là khả năng...]"
  },
  {
    "id": 156,
    "en": "Medium: [There's a chance our original bodies can be restored, right? Subaru-chin.]",
    "vi": "Medium: [Có cơ hội để cơ thể chúng ta trở lại bình thường đúng không nha, Subaru-chin.]"
  },
  {
    "id": 157,
    "en": "Medium was sitting on the floor, holding Louis down as she struggled. She was restraining Louis, the latter’s size now almost the same as hers, with her skills, not her arm strength.",
    "vi": "Medium đang ngồi trên sàn, giữ chặt Louis đang vùng vẫy. Cô khống chế Louis, người hiện tại có kích thước gần như tương đương cô, bằng kỹ năng chứ không phải bằng sức mạnh cơ bắp."
  },
  {
    "id": 158,
    "en": "Perhaps it was a skill she had developed at the orphanage where she had grown up.",
    "vi": "Có lẽ đây là kỹ năng cô tự đúc kết được ở cô nhi viện nơi mình lớn lên."
  },
  {
    "id": 159,
    "en": "As she calmed Louis, Subaru looked into her blue eyes and nodded, \"Yes”,",
    "vi": "Khi cô dỗ dành Louis, Subaru nhìn vào đôi mắt xanh của cô rồi gật đầu đồng tình:"
  },
  {
    "id": 160,
    "en": "Subaru: [If we got him in a bad mood, our bodies would stay small… And that isn’t something we can afford considering future plans, and our current course. It's a must that we return to normal.]",
    "vi": "Subaru: [Nếu để lão phật ý, chúng ta sẽ kẹt trong hình dạng này mãi... Mà điều đó thì không thể chấp nhận được nếu tính đến kế hoạch tương lai và hành trình hiện tại. Bắt buộc chúng ta phải trở lại bình thường.]"
  },
  {
    "id": 161,
    "en": "Al: […Well, that's exactly what we could’ve done, we could’ve surrounded the old man and beaten him.]",
    "vi": "Al: [...Chà, thực ra đó chính là những gì chúng ta nên làm, vây ráp lão già kia rồi tẩn một trận.]"
  },
  {
    "id": 162,
    "en": "Subaru: [Don't be stupid. The only reason we didn't die is because Olbart-san was intending to follow the Emperor's orders. We wouldn't be able to do anything about it if he felt like it.]",
    "vi": "Subaru: [Đừng ngốc thế. Lý do duy nhất chúng ta chưa mất mạng là vì Olbart-san có ý định tuân theo mệnh lệnh của Hoàng đế. Nếu lão thực sự nổi sát tâm, chúng ta chẳng làm gì được đâu.]"
  },
  {
    "id": 163,
    "en": "Al: [――. You say that like you've seen it before.]",
    "vi": "Al: [――. Cậu nói như thể đã tận mắt chứng kiến chuyện đó rồi vậy.]"
  },
  {
    "id": 164,
    "en": "Looking away from Subaru, Al sounded like he wanted to say that that should be impossible.",
    "vi": "Ngoảnh mặt đi khỏi Subaru, Al nói bằng giọng điệu như muốn ám chỉ điều đó là bất khả thi."
  },
  {
    "id": 165,
    "en": "Al’s remark was not off the mark, since Subaru’s insight was because of a cheat transcending worlds. He had indeed seen it with his own eyes.",
    "vi": "Nhận xét của Al không sai, bởi sự thấu suốt của Subaru đến từ một khả năng gian lận vượt qua cả thế giới này. Cậu quả thực đã tận mắt chứng kiến nó."
  },
  {
    "id": 166,
    "en": "Events that he had thought to be impossible had happened, even if he wished not to admit it.",
    "vi": "Những sự kiện cậu từng nghĩ là không thể xảy ra đã hiển hiện, dù cậu không muốn thừa nhận."
  },
  {
    "id": 167,
    "en": "Nevertheless――,",
    "vi": "Mặc dù vậy――,"
  },
  {
    "id": 168,
    "en": "Al: [――――]",
    "vi": "Al: [————]"
  },
  {
    "id": 169,
    "en": "Averting his gaze, Al did not argue further.",
    "vi": "Tránh đi ánh nhìn, Al không tranh cãi thêm."
  },
  {
    "id": 170,
    "en": "Due to the previous day’s visit to the castle keep, Al had also grasped a part of Olbart's strength. Naturally, he would know that the old man had not been serious back then, and that the odds of victory would be slim were he to demonstrate his true ability.",
    "vi": "Nhờ chuyến thăm lâu đài ngày hôm trước, Al cũng đã nắm được một phần thực lực của Olbart. Lẽ dĩ nhiên, cậu ta hiểu rằng lão già đó lúc ấy chưa hề nghiêm túc, và cơ hội chiến thắng sẽ cực kỳ mong manh nếu lão phô diễn toàn bộ bản lĩnh."
  },
  {
    "id": 171,
    "en": "That was why Al had made the decision to keep watching Olbart's back as he left.",
    "vi": "Đó là lý do Al quyết định đứng yên nhìn bóng lưng Olbart rời đi."
  },
  {
    "id": 172,
    "en": "Subaru: [Whatever, we don't have much time. If we're going to meet with Yorna, I need time to do my makeup. I need thirty minutes for everything, so… the grace period’s a little over two hours.]",
    "vi": "Subaru: [Dù sao thì chúng ta cũng không có nhiều thời gian. Nếu muốn diện kiến Yorna, tôi cần thời gian trang điểm. Mất khoảng ba mươi phút cho việc đó, vậy nên... thời gian thư thả chỉ có hơn hai tiếng một chút.]"
  },
  {
    "id": 173,
    "en": "Taritta: [Is it really necessary to wear women's clothes…]",
    "vi": "Taritta: [Liệu có thực sự cần thiết phải mặc đồ nữ không...]"
  },
  {
    "id": 174,
    "en": "Subaru: [It is, because the three of us from yesterday are being requested, too. And…]",
    "vi": "Subaru: [Cần chứ, vì ba người chúng ta hôm qua đã bị yêu cầu rồi mà. Với lại...]"
  },
  {
    "id": 175,
    "en": "As he said this, Subaru looked at Abel, who was silent.",
    "vi": "Nói đoạn, Subaru hướng mắt về phía Abel đang im lặng."
  },
  {
    "id": 176,
    "en": "As long as he did not interfere, Subaru guessed that he had the same basic policy as himself. Subaru did not believe he was getting lost in the emotions of having gone through a deadly situation.",
    "vi": "Chừng nào gã không can thiệp, Subaru đoán gã cũng có chung chủ trương cơ bản với mình. Cậu không tin Abel lại là kẻ bị cuốn vào cảm xúc sau khi vừa trải qua một tình huống sinh tử."
  },
  {
    "id": 177,
    "en": "Or maybe――,",
    "vi": "Hoặc giả là――,"
  },
  {
    "id": 178,
    "en": "Subaru: [Shocked that Olbart-san’s trying to kill the Emperor, huh?]",
    "vi": "Subaru: [Ngạc nhiên vì Olbart-san muốn lấy mạng Hoàng đế sao?]"
  },
  {
    "id": 179,
    "en": "Abel: [Nonsense. I knew he had ambitions beyond his size. Albeit, I did not think it would be the Emperor's head. I thought there was nothing to be gained by such an attempt. But what he really seeks is a final sense of accomplishment and the posthumous notoriety.]",
    "vi": "Abel: [Vớ vẩn. Ta biết lão có dã tâm vượt quá tầm vóc của mình. Dẫu vậy, ta chưa từng nghĩ mục tiêu của lão lại là cái đầu của Hoàng đế. Ta cho rằng việc đó chẳng mang lại lợi lộc gì. Song thứ lão thực sự mưu cầu chỉ là cảm giác thành tựu cuối cùng cùng tiếng xấu muôn đời sau khi chết.]"
  },
  {
    "id": 180,
    "en": "Abel shrugged his thin shoulders as if to say he couldn’t fully grasp it.",
    "vi": "Abel nhún đôi vai gầy guộc như muốn nói gã không tài nào hiểu nổi điều đó."
  },
  {
    "id": 181,
    "en": "Regardless of even having been forced out of his position as Emperor and being driven into the most unfavorable situation, Abel never knew when to give up.",
    "vi": "Dù bị phế truất khỏi ngai vàng và rơi vào tình cảnh bất lợi nhất, Abel chưa bao giờ biết đến hai chữ từ bỏ."
  },
  {
    "id": 182,
    "en": "From his point of view, it was incomprehensible to give up his own life and seek posthumous fame, as it would be best for him to return to the throne alive.",
    "vi": "Dưới góc nhìn của gã, việc hy sinh tính mạng để tìm kiếm danh tiếng hão huyền sau khi chết thật phi lý, bởi điều tốt nhất vẫn là sống sót giành lại ngai vị."
  },
  {
    "id": 183,
    "en": "On this point, Subaru agreed with him, though it was a very mixed bag of feelings. He did not want to be praised after death.",
    "vi": "Ở điểm này, Subaru đồng tình với gã, dù cảm xúc trong lòng vô cùng hỗn độn. Cậu không muốn được ca tụng sau khi qua đời."
  },
  {
    "id": 184,
    "en": "Subaru wishes to be forgotten by his remaining loved ones after he passed away.",
    "vi": "Subaru mong muốn những người thân yêu còn lại sẽ quên mình đi sau khi cậu nhắm mắt xuôi tay."
  },
  {
    "id": 185,
    "en": "It was in Subaru's nature that he would rather be made a memory of and forgotten about in the moment of his death, than for everyone to grieve or suffer for it.",
    "vi": "Bản tính của Subaru là thà để bản thân trôi vào dĩ vãng ngay khoảnh khắc tử vong, còn hơn là chứng kiến mọi người phải đau khổ, dằn vặt vì mình."
  },
  {
    "id": 186,
    "en": "However, he had no intent to share that feeling with Abel.",
    "vi": "Thế nhưng cậu không có ý định chia sẻ tâm tư đó với Abel."
  },
  {
    "id": 187,
    "en": "Subaru: […But Olbart-san’s a bit of an outcast, isn't he? He's got all that ambition, but he doesn't even realize who you are in front of him.]",
    "vi": "Subaru: [...Mà Olbart-san cũng hơi kỳ quặc nhỉ? Ôm dã tâm lớn như thế, vậy mà lại chẳng nhận ra người đang ở ngay trước mặt mình là ai.]"
  },
  {
    "id": 188,
    "en": "Therefore, Subaru deceptively changed the subject.",
    "vi": "Vì vậy, Subaru chủ động đổi chủ đề."
  },
  {
    "id": 189,
    "en": "But as soon as he heard that, however, Abel's eyes showed a suspicion that was clearly visible even through the oni mask.",
    "vi": "Ấy vậy mà ngay khi nghe thấy câu đó, ánh mắt Abel lộ rõ vẻ nghi hoặc vốn có thể nhìn thấy qua chiếc mặt nạ quỷ."
  },
  {
    "id": 190,
    "en": "Abel: [――. What in the world are you talking about?]",
    "vi": "Abel: [――. Ngươi đang nói cái quái gì thế?]"
  },
  {
    "id": 191,
    "en": "Subaru: [Huh?]",
    "vi": "Subaru: [Hả?]"
  },
  {
    "id": 192,
    "en": "Abel: [I am wearing this mask. Hence why Olbart's reaction is justified.]",
    "vi": "Abel: [Ta đang đeo chiếc mặt nạ này. Đó là lý do phản ứng của Olbart hoàn toàn bình thường.]"
  },
  {
    "id": 193,
    "en": "Tracing the oni mask's cheek with his finger, Abel made that declaration nonchalantly.",
    "vi": "Dùng ngón tay miết nhẹ lên phần má của chiếc mặt nạ quỷ, Abel thản nhiên tuyên bố."
  },
  {
    "id": 194,
    "en": "Subaru raised an eyebrow at his words, his expression showing that he did not understand. Promptly, Abel's puzzlement turned into disappointment visible through his oni mask.",
    "vi": "Subaru nhướng mày trước lời gã nói, vẻ mặt lộ rõ sự khó hiểu. Ngay lập tức, sự ngơ ngác của Subaru biến thành nỗi thất vọng hiện lên sau chiếc mặt nạ quỷ của Abel."
  },
  {
    "id": 195,
    "en": "With that look in his eyes, Abel sighed deeply, and,",
    "vi": "Với ánh mắt đó, Abel thở dài thườn thượt:"
  },
  {
    "id": 196,
    "en": "Abel: [This mask has the effect of distorting the perceptions of others. It is an effect that conceals the true identity of the wearer.]",
    "vi": "Abel: [Chiếc mặt nạ này có tác dụng bóp méo nhận thức của người khác. Một hiệu ứng giúp che giấu danh tính thực sự của người đeo.]"
  },
  {
    "id": 197,
    "en": "Subaru: [――! Is that really “cognitive disruption”? But that mask was originally supposed to be from the Shudraqian's village…]",
    "vi": "Subaru: [――! Đó thực sự là “gây nhiễu nhận thức” sao? Nhưng chẳng phải chiếc mặt nạ đó vốn là đồ của làng tộc Shudraq à...]"
  },
  {
    "id": 198,
    "en": "Taritta: [Yes yes, that's right. It’s said that in the past, when the Emperor and Shudraq formed friendly ties, the Emperor used it to visit the Jungle without being recognized.]",
    "vi": "Taritta: [Vâng đúng thế ạ. Nghe kể lại rằng ngày xưa, khi Hoàng đế và tộc Shudraq thiết lập mối bang giao thân thiện, vị Hoàng đế ấy đã dùng nó để ghé thăm Khu Rừng mà không bị nhận diện.]"
  },
  {
    "id": 199,
    "en": "Subaru: [That mask has actual history…?]",
    "vi": "Subaru: [Chiếc mặt nạ đó có lịch sử lâu đời vậy sao...?]"
  },
  {
    "id": 200,
    "en": "With the revelation of that surprising fact, Subaru’s mouth was left agape. To that shocked Subaru, Abel’s disappointment still lasted,",
    "vi": "Trước sự thật đáng ngạc nhiên vừa hé lộ, Subaru há hốc mồm kinh ngạc. Đối mặt với một Subaru ngỡ ngàng, vẻ thất vọng của Abel vẫn chưa hề vơi bớt:"
  },
  {
    "id": 201,
    "en": "Abel: [You, did you really believe that I have been wearing this mask all this time for show, or due to madness?]",
    "vi": "Abel: [Ngươi thực sự nghĩ ta đeo chiếc mặt nạ này suốt thời gian qua chỉ để làm màu, hay là do điên khùng sao?]"
  },
  {
    "id": 202,
    "en": "Subaru: [――――]",
    "vi": "Subaru: [————]"
  },
  {
    "id": 203,
    "en": "Abel: [At last, your stupidity has reached its pinnacle. In the first place, there is plenty good reason to conceal my face. I believe we did not come to the Demon City for tourism.]",
    "vi": "Abel: [Sự ngu xuẩn của ngươi rốt cuộc đã đạt đến đỉnh điểm rồi. Ngay từ đầu, có vô vàn lý do chính đáng để ta che giấu dung mạo. Ta tin chúng ta tới Ma Thành không phải để du lịch.]"
  },
  {
    "id": 204,
    "en": "Subaru: [You didn't have to say it like that, you could have just explained that at the start…!]",
    "vi": "Subaru: [Không cần phải nói giọng điệu đó đâu, giải thích ngay từ đầu là được mà...!]"
  },
  {
    "id": 205,
    "en": "Certainly, it was Subaru's fault for thinking it was part of Abel's odd behavior and not asking anything, but Abel was also at fault for thinking it would be understood without explaining anything.",
    "vi": "Quả thực, lỗi của Subaru là đã nghĩ đó chỉ là hành vi kỳ quặc của Abel nên không thèm hỏi, thế nhưng Abel cũng có lỗi khi mặc định đối phương sẽ tự hiểu mà chẳng cần giải thích lời nào."
  },
  {
    "id": 206,
    "en": "Thanks to that, he had to unnecessarily embarrass himself, and to worry himself without it being needed.",
    "vi": "Nhờ vậy, cậu đã phải chịu một vố xấu hổ không đáng có, và tự lo lắng những chuyện không đâu."
  },
  {
    "id": 207,
    "en": "Anyway, he was now aware of the mechanism as to why Olbart had not realized Abel’s true identity.",
    "vi": "Dù sao thì bây giờ cậu đã hiểu rõ cơ chế vì sao Olbart không nhận ra thân phận thực sự của Abel."
  },
  {
    "id": 208,
    "en": "Abel had no intention of covering up his pompous speech and arrogant attitude, so Subaru’s fears that he would reveal himself were unfounded.",
    "vi": "Abel vốn không hề có ý định giấu giếm giọng điệu bề trên và thái độ ngạo mạn của mình, nên nỗi sợ gã tự bại lộ của Subaru hóa ra chỉ là lo bò trắng răng."
  },
  {
    "id": 209,
    "en": "Medium: [Heyhey, Al-chin, Al-chin. That’s what Abel-chin’s reason is, but is there a reason why Al-chin’s hiding his face?]",
    "vi": "Medium: [Này này, Al-chin, Al-chin. Lý do của Abel-chin là vậy, thế còn Al-chin thì sao, có lý do gì khiến Al-chin phải giấu mặt không nha?]"
  },
  {
    "id": 210,
    "en": "Al: [In my case, I have a complex about my facial scars… But let's not talk about me. Hide-and-seek’s already begun. We gotta get a move on.]",
    "vi": "Al: [Về phần tôi, tôi có mặc cảm với những vết sẹo trên mặt... Nhưng thôi đừng nói chuyện của tôi nữa. Trò trốn tìm bắt đầu rồi. Chúng ta phải khẩn trương lên.]"
  },
  {
    "id": 211,
    "en": "As he said this, Al pointed out the window to the streets of the Demon City.",
    "vi": "Nói rồi, Al chỉ tay qua cửa sổ hướng về những con phố của Ma Thành."
  },
  {
    "id": 212,
    "en": "Chaosflame was one of the largest cities in the Empire, amounting to probably five times the size of the Fortress City of Guaral.",
    "vi": "Chaosflame là một trong những thành phố lớn nhất Đế quốc, có quy mô có lẽ gấp năm lần Thành Lũy Guaral."
  },
  {
    "id": 213,
    "en": "To find the shinobi head honcho hidden among all that was no easy task.",
    "vi": "Để tìm ra gã thủ lĩnh shinobi ẩn náu trong chốn rộng lớn ấy quả thực không phải chuyện dễ dàng."
  },
  {
    "id": 214,
    "en": "Find him three times, in just two hours and with only six people.",
    "vi": "Tìm thấy lão ba lần, chỉ trong vỏn vẹn hai giờ đồng hồ và với nhân lực vẻn vẹn sáu người."
  },
  {
    "id": 215,
    "en": "Al: [I know he said he was gonna do a tryout first, but there are a lotta possible hiding places just around the inn, man. Bro, do you or Abel-chan have some kind of plan?]",
    "vi": "Al: [Biết là lão nói sẽ cho chơi thử trước, nhưng quanh quán trọ này cũng có cả tá chỗ trốn khả nghi đấy, người anh em. Cậu hoặc Abel-chan có kế hoạch gì không?]"
  },
  {
    "id": 216,
    "en": "Subaru: [It's not much of a plan, but…]",
    "vi": "Subaru: [Cũng chưa hẳn là kế hoạch gì lớn, nhưng...]"
  },
  {
    "id": 217,
    "en": "At least, there were some things Subaru had thought of that he wanted to try.",
    "vi": "Ít nhất, cũng có vài ý tưởng Subaru muốn thử nghiệm."
  },
  {
    "id": 218,
    "en": "A \"hide-and-seek\" tryout―― unsurprisingly, he’d had the same idea Olbart did. An idea that should be tried at least once to gauge the mindset of their opponent, the old man.",
    "vi": "Màn chơi thử “trốn tìm”―― không ngoài dự đoán, cậu có chung suy nghĩ với Olbart. Một ý tưởng cần được kiểm chứng ít nhất một lần để nắm bắt tâm lý đối thủ."
  },
  {
    "id": 219,
    "en": "Just as Subaru thought that, Abel crossed his arms and nodded, \"Of course\",",
    "vi": "Đúng lúc Subaru vừa nảy ra ý nghĩ đó, Abel khoanh tay gật đầu đầy vẻ hiển nhiên:"
  },
  {
    "id": 220,
    "en": "Abel: [There are a few possible moves. Although, my idea is probably different from that of the clown here.]",
    "vi": "Abel: [Có một vài nước đi khả dĩ. Có điều, ý tưởng của ta hẳn là khác biệt so với tên hề ở đây rồi.]"
  },
  {
    "id": 221,
    "en": "Subaru: [You're demoting me from a military strategist to clown, you're too uptight about that mask thing from earlier… No, it's not like I cared about being your military strategist or anything.]",
    "vi": "Subaru: [Anh hạ cấp tôi từ quân sư xuống làm tên hề luôn đấy hả, anh đang chấp nhặt chuyện chiếc mặt nạ lúc nãy quá đấy... Không, mà tôi cũng chẳng thiết tha gì cái danh quân sư của anh đâu.]"
  },
  {
    "id": 222,
    "en": "Subaru could only curve his lips in a snarl at the sound of Abel's cold voice. It was as if the fact that Subaru had treated the oni mask's disguise as an oddity was really upsetting the latter.",
    "vi": "Subaru chỉ biết bĩu môi trước giọng điệu lạnh lùng của Abel. Có vẻ như việc Subaru coi lớp cải trang của chiếc mặt nạ quỷ là một trò kỳ quặc đã thực sự khiến gã phật ý."
  },
  {
    "id": 223,
    "en": "Anyway, throughout that discussion here, time was being wasted.",
    "vi": "Dù thế nào đi nữa, cứ tiếp tục tranh luận ở đây chỉ tổ lãng phí thời gian."
  },
  {
    "id": 224,
    "en": "Subaru: [I've got to get moving before I forget what having long limbs felt like.]",
    "vi": "Subaru: [Tôi phải di chuyển trước khi quên mất cảm giác chân tay dài ra sao thôi.]"
  },
  {
    "id": 225,
    "en": "Al: [Well, dunno if there was ever a time when me and you had long legs, bro…]",
    "vi": "Al: [Chà, tôi cũng chẳng biết trước đây chân tôi với cậu có bao giờ dài không nữa, người anh em...]"
  },
  {
    "id": 226,
    "en": "Subaru: [I meant compared to the current situation.]",
    "vi": "Subaru: [Ý tôi là so với tình trạng hiện tại này này.]"
  },
  {
    "id": 227,
    "en": "The group pushed aside Al as he teased that they were all short-legged, and prepared the minimum amount of gear.",
    "vi": "Cả nhóm gạt phắt Al qua một bên khi cậu ta trêu chọc rằng chân ai nấy đều ngắn ngủn, rồi chuẩn bị trang bị tối thiểu."
  },
  {
    "id": 228,
    "en": "Al carried his dao in its sheath on his back, Medium carried only one of her twin swords on her hip. For now, Subaru would also carry his whip. However, he was not confident he could handle it in all honesty.",
    "vi": "Al đeo thanh đao trong bao sau lưng, Medium chỉ giắt một thanh trong cặp song kiếm bên hông. Lúc này, Subaru cũng sẽ mang theo chiếc roi da. Dẫu vậy, thành thật mà nói cậu không mấy tự tin rằng mình có thể sử dụng nó."
  },
  {
    "id": 229,
    "en": "All that was left was Abel and Taritta, who were in top condition, plus――,",
    "vi": "Những người còn lại là Abel và Taritta, vốn đang ở trong trạng thái tốt nhất, cộng thêm――,"
  },
  {
    "id": 230,
    "en": "???: [Aa, uu!]",
    "vi": "???: [Aa, uu!]"
  },
  {
    "id": 231,
    "en": "Medium: [Oh, Louis-chan, you're so motivated! Alright, let's work hard and find Gramps!]",
    "vi": "Medium: [Ồ, Louis-chan tràn trề động lực quá nha! Được rồi, chúng ta hãy cố gắng tìm ra ông lão thôi nào!]"
  },
  {
    "id": 232,
    "en": "Louis: [Uu!]",
    "vi": "Louis: [Uu!]"
  },
  {
    "id": 233,
    "en": "Medium raised a small fist at the sound of Louis's voice, not wanting to leave her behind.",
    "vi": "Medium giơ nắm tay nhỏ nhắn lên trước tiếng kêu của Louis, không muốn bỏ cô bé lại phía sau."
  },
  {
    "id": 234,
    "en": "In the end, Louis was likely to slow everyone down. Olbart had been forbidden to change his hiding place in the meantime, so they would like to believe that, even if he sensed the approach of the noisy Louis, he probably would not do anything of the sort.",
    "vi": "Suy cùng, Louis rất có khả năng sẽ làm chậm bước chân của cả nhóm. Trong khoảng thời gian này, Olbart đã bị cấm thay đổi nơi ẩn nấp, vì thế họ muốn tin rằng dù lão có đánh hơi thấy sự tiếp cận của một Louis ồn ào, lão cũng không làm trò gian lận."
  },
  {
    "id": 235,
    "en": "Al: [Isn't it possible that he’ll change his hiding places from time to time and claim that he’s been hiding in one place the whole time?]",
    "vi": "Al: [Không loại trừ khả năng lão sẽ liên tục đổi chỗ trốn rồi khăng khăng bảo mình chỉ trốn ở một nơi duy nhất từ đầu chứ?]"
  },
  {
    "id": 236,
    "en": "Abel: [I already corrected you on that, but Olbart's goal is not his own victory. The reason he is performing such a roundabout move is to measure our capabilities through this game.]",
    "vi": "Abel: [Ta đã chấn chỉnh ngươi về việc đó rồi, mục tiêu của Olbart không phải là chiến thắng của bản thân lão. Lý do lão bày ra nước đi rườm rà này là để đo lường năng lực của chúng ta thông qua trò chơi.]"
  },
  {
    "id": 237,
    "en": "Al: [Measuring our capabilities? That means…]",
    "vi": "Al: [Đo lường năng lực của chúng ta? Nghĩa là...]"
  },
  {
    "id": 238,
    "en": "Abel: [He wishes to know if I am capable of making such a big claim to the Emperor’s throne.]",
    "vi": "Abel: [Lão muốn biết liệu ta có đủ tư cách để đòi lại ngai vị Hoàng đế hay không.]"
  },
  {
    "id": 239,
    "en": "Abel made it clear to Al, who doubted Olbart's true intentions.",
    "vi": "Abel khẳng định chắc nịch với Al, người vẫn hoài nghi ý đồ thực sự của Olbart."
  },
  {
    "id": 240,
    "en": "Subaru also saw no falsehood there. It was hard to believe Olbart's own words, but since his goal was the Emperor's life, being able to believe the aim of Subaru’s group, and the information in their hands being the real deal would be convenient.",
    "vi": "Subaru cũng không nhận thấy sự giả dối nào ở đó. Tuy khó lòng tin tưởng lời nói của Olbart, nhưng vì mục tiêu của lão là mạng sống của Hoàng đế, việc lão tin tưởng mục đích của nhóm Subaru cũng như thông tin họ nắm giữ là thật sẽ đem lại nhiều thuận lợi."
  },
  {
    "id": 241,
    "en": "Olbart wanted to be convinced by their party’s demonstration of capabilities.",
    "vi": "Olbart muốn bị thuyết phục qua màn thể hiện bản lĩnh của bọn họ."
  },
  {
    "id": 242,
    "en": "And for that reason――,",
    "vi": "Và vì lẽ đó――,"
  },
  {
    "id": 243,
    "en": "Subaru: [I didn't ask before, but what was that about the Flame of the Yang Sword…?]",
    "vi": "Subaru: [Lúc nãy tôi chưa hỏi, chuyện về ngọn lửa của Dương Kiếm là thế nào vậy...]"
  },
  {
    "id": 244,
    "en": "Abel: [I am afraid I do not have the leisure to give a lengthy lecture on the history of the Emperors of Vollachia. Your shallow wisdom notwithstanding, my plan is not something that can be set in motion in a room at an inn.]",
    "vi": "Abel: [Ta không rảnh rỗi để giảng giải dông dài về lịch sử của các Hoàng đế Vollachia. Bất chấp vốn hiểu biết nông cạn của ngươi, kế hoạch của ta không phải thứ có thể tiến hành trong một căn phòng trọ.]"
  },
  {
    "id": 245,
    "en": "Subaru: [Tch, okay.]",
    "vi": "Subaru: [Tch, được rồi.]"
  },
  {
    "id": 246,
    "en": "Subaru clucked his tongue at this manner of saying that he did not want to reveal anything.",
    "vi": "Subaru tặc lưỡi trước thái độ không muốn tiết lộ bất cứ điều gì của đối phương."
  },
  {
    "id": 247,
    "en": "Nevertheless, if the exchange with Olbart were indeed true, it seemed to him that the Emperor of Vollachia, or rather Abel, had some kind of protection. As long as he did, no harm would befall him.",
    "vi": "Dẫu sao, nếu cuộc trò chuyện với Olbart thực sự là thật, có vẻ như Hoàng đế Vollachia, hay đúng hơn là Abel, sở hữu một loại bảo hộ nào đó. Chừng nào sự bảo hộ đó còn tồn tại, gã sẽ không gặp nguy hiểm."
  },
  {
    "id": 248,
    "en": "Subaru: [On second thought…]",
    "vi": "Subaru: [Nghĩ lại thì...]"
  },
  {
    "id": 249,
    "en": "So far, Subaru had never seen Abel lose his life with his own eyes.",
    "vi": "Từ trước đến nay, Subaru chưa từng tận mắt thấy Abel mất mạng."
  },
  {
    "id": 250,
    "en": "Since arriving in the Vollachian Empire, Subaru’s life had been threatened quite frequently, having actually lost his life and Returned by Death. However, Abel’s death was an event that had never occurred. ――Although Subaru had been in situations which seemed like they should have resulted in Abel’s death.",
    "vi": "Kể từ khi đặt chân tới Đế quốc Vollachia, tính mạng của Subaru thường xuyên bị đe dọa, thậm chí đã thực sự tử vong và kích hoạt Return by Death. Thế nhưng, cái chết của Abel là điều chưa từng xảy ra. ――Dù Subaru từng rơi vào những hoàn cảnh tưởng như chắc chắn Abel sẽ phải bỏ mạng."
  },
  {
    "id": 251,
    "en": "When Olbart revealed his true nature the very previous loop, or when Todd had the Buddheim Jungle burnt down, Shudraqian village included, the life of the imprisoned Abel should have been lost.",
    "vi": "Như khi Olbart lộ rõ bộ mặt thật ở vòng lặp ngay trước đó, hay lúc Todd thiêu rụi Khu Rừng Buddheim bao gồm cả làng Shudraq, Abel đang bị giam cầm đáng lẽ phải mất mạng."
  },
  {
    "id": 252,
    "en": "But that was only because of the circumstances, not because Subaru had directly confirmed his death. ――So, he wanted to confirm one thing.",
    "vi": "Nhưng đó chỉ là suy đoán dựa trên tình hình thực tế chứ Subaru không trực tiếp xác nhận cái chết của gã. ――Vì vậy, cậu muốn kiểm chứng một chuyện."
  },
  {
    "id": 253,
    "en": "Subaru: [That thing called the Flame of the Yang Sword, is it still protecting you?]",
    "vi": "Subaru: [Thứ gọi là ngọn lửa của Dương Kiếm kia vẫn đang bảo vệ anh chứ?]"
  },
  {
    "id": 254,
    "en": "Abel: [How insistent. Will you perhaps turn against me as well, if you do not hear it?]",
    "vi": "Abel: [Dai dẳng thật đấy. Liệu ngươi sẽ quay lưng lại với ta nếu không có được câu trả lời chăng?]"
  },
  {
    "id": 255,
    "en": "Subaru: […There's no merit in me doing that.]",
    "vi": "Subaru: [...Tôi làm vậy thì được ích lợi gì chứ.]"
  },
  {
    "id": 256,
    "en": "His cheeks contorting due to that mocking remark, Subaru gave up the pursuit this time.",
    "vi": "Mặt mày méo xệch trước lời châm chọc của gã, Subaru đành từ bỏ việc gặng hỏi lần này."
  },
  {
    "id": 257,
    "en": "Then, Subaru looked around at the faces of his companions as they prepared to leave the inn,",
    "vi": "Sau đó, Subaru liếc nhìn gương mặt các đồng hành khi chuẩn bị rời quán trọ,"
  },
  {
    "id": 258,
    "en": "Subaru: [Unexpectedly, we have to play a game. But if the condition is that we just need to find a person, then we should be able to compete even in a situation where half of our members have shrunk. In fact, since it’s a game of hide-and-seek, that we’ve returned to our childlike minds and bodies might even be better for us in this game.]",
    "vi": "Subaru: [Dù ngoài dự đoán là chúng ta phải chơi một trò chơi. Nhưng nếu điều kiện chỉ là tìm người, chúng ta vẫn có thể cạnh tranh ngay cả khi một nửa thành viên bị thu nhỏ. Thực ra, vì đây là trò trốn tìm, việc chúng ta trở lại tâm trí và thể xác trẻ con biết đâu lại là lợi thế đấy.]"
  },
  {
    "id": 259,
    "en": "Taritta: [W-what's the logic behind that…]",
    "vi": "Taritta: [L-logic kiểu gì vậy ạ...]"
  },
  {
    "id": 260,
    "en": "Abel: [Ignore him. It is nonsense, meaningless to listen to.]",
    "vi": "Abel: [Kệ xác hắn đi. Toàn lời vớ vẩn, nghe chỉ phí tai.]"
  },
  {
    "id": 261,
    "en": "In fact, that was right, since it was nothing more than banter, but he just expressed his regret with a wrinkle between his eyebrows.",
    "vi": "Thực chất nhận định đó là đúng, vì đây chẳng qua là lời nói đùa tán gẫu, song cậu chỉ bày tỏ sự tiếc nuối bằng một cái nhíu mày."
  },
  {
    "id": 262,
    "en": "After doing that, Subaru shouted \"Anyway!”, louder than he should have.",
    "vi": "Dứt lời, Subaru hét lớn “Dù sao thì!”, âm lượng to hơn mức cần thiết."
  },
  {
    "id": 263,
    "en": "Subaru: [I want everyone to pay maximum attention to their surroundings. ――Ok then, let's go!]",
    "vi": "Subaru: [Tôi muốn mọi người chú ý tối đa đến xung quanh. ――Được rồi, xuất phát thôi!]"
  },
  {
    "id": 264,
    "en": "Medium: [Oh!]",
    "vi": "Medium: [Ồ!]"
  },
  {
    "id": 265,
    "en": "Louis: [Auu!]",
    "vi": "Louis: [Auu!]"
  },
  {
    "id": 266,
    "en": "Al: […You're really into this, bro.]",
    "vi": "Al: [...Cậu hăng hái quá đấy, người anh em.]"
  },
  {
    "id": 267,
    "en": "The enthusiastic Subaru was dressed in the clothes he had on hand, his figure looking quite unsightly. Al sighed as Medium and Louis followed Subaru’s lead, pumping their fists in the air.",
    "vi": "Subaru hăng hái khoác lên mình bộ quần áo có sẵn, trông dáng vẻ cậu lúc này khá là nhếch nhác. Al thở dài khi thấy Medium và Louis làm theo Subaru, giơ nắm đấm lên không trung đồng thanh."
  },
  {
    "id": 268,
    "en": "On the other hand, Taritta, who had become the strongest fighter, had nervousness and anxiety in her eyes, while Abel was as irreverent as ever, with no expression behind his oni mask and nothing in his hands.",
    "vi": "Trái lại, Taritta, người giờ đây trở thành chiến lực mạnh nhất, lộ vẻ bồn chồn lo lắng trong ánh mắt, trong khi Abel vẫn bất cần như mọi khi, sau chiếc mặt nạ quỷ không biểu lộ cảm xúc gì và hai tay trống trơn."
  },
  {
    "id": 269,
    "en": "All of their members left the inn together.",
    "vi": "Tất cả các thành viên cùng nhau bước ra khỏi quán trọ."
  },
  {
    "id": 270,
    "en": "First item of order, was to locate Olbart's first hiding place. Full of eagerness, Subaru slammed the door with a loud bang and stepped out with great vigor――,",
    "vi": "Nhiệm vụ đầu tiên là xác định nơi ẩn nấp thứ nhất của Olbart. Đầy hào hứng, Subaru đóng sầm cửa lại một tiếng rầm rồi bước ra ngoài với phong thái vô cùng hăm hở――,"
  },
  {
    "id": 271,
    "en": "Subaru: [――Then, we’ll return right away.]",
    "vi": "Subaru: [――Thế thì, chúng ta quay lại ngay thôi.]"
  },
  {
    "id": 272,
    "en": "Al: [Huh?]",
    "vi": "Al: [Hả?]"
  },
  {
    "id": 273,
    "en": "With a hard step, he kicked the floor directly with his foot, and Subaru's body made a half-turn. Al let out a dumb-sounding voice upon seeing the other side of door he had just gone out of.",
    "vi": "Giậm chân mạnh một cái xuống sàn, cơ thể Subaru xoay nửa vòng. Al thốt lên một tiếng ngớ ngẩn khi thấy phía bên kia của cánh cửa họ vừa bước qua."
  },
  {
    "id": 274,
    "en": "With this in mind, Subaru pushed open the door of the room with force.",
    "vi": "Nghĩ vậy, Subaru dùng sức đẩy toang cánh cửa phòng."
  },
  {
    "id": 275,
    "en": "Then Subaru pointed into the room from which he and the others had just left――,",
    "vi": "Rồi cậu chỉ tay vào trong căn phòng mà cả nhóm vừa mới rời khỏi――,"
  },
  {
    "id": 276,
    "en": "Subaru: [――Found yooou~, Olbart-san.]",
    "vi": "Subaru: [――Tìm thấy ông rồiii nha~, Olbart-san.]"
  },
  {
    "id": 277,
    "en": "???: [Kakakakka! Oioi, com’on, don’t’cha have a bad personality, for ya ta notice this right away? I’m blushin’ here, bein’ spotted this right outta the blue, it’s so embarrassin’!]",
    "vi": "???: [Kakakakka! Kìa nhóc, nhóc không thấy mình hơi xấu tính khi nhận ra chuyện này ngay lập tức sao hả? Ta đang đỏ mặt đây này, bị phát hiện đột ngột thế này thật là ngại ngùng quá đi mà lị!]"
  },
  {
    "id": 278,
    "en": "And Olbart, who had snuck into the room in Subaru and the others’ stead, laughed heartily at Subaru's first declaration, as the latter pointed at himself.",
    "vi": "Và Olbart, kẻ đã lẻn vào phòng thế chỗ Subaru cùng những người khác, cười lớn một cách khoái chí trước lời tuyên bố đầu tiên của Subaru khi cậu đang chỉ tay vào lão."
  },
  {
    "id": 279,
    "en": "△▼△▼△▼△",
    "vi": "△▼△▼△▼△"
  },
  {
    "id": 280,
    "en": "Al: [Seriously, bro…!]",
    "vi": "Al: [Nghiêm túc chứ, người anh em...!]"
  }
];

fs.writeFileSync(path.join(tempDir, 'ch43_part2.json'), JSON.stringify(part2, null, 2), 'utf-8');
console.log('Saved ch43_part2.json');
