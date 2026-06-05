import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tempDir = path.join(__dirname, 'translation_temp');

const part2 = [
  {
    "id": 101,
    "en": "However, once explained in a solid argument, it was something that Subaru could agree with.",
    "vi": "Dù vậy, khi được lý giải bằng lập luận chặt chẽ, đó là điều Subaru có thể tán đồng."
  },
  {
    "id": 102,
    "en": "Abel and the others were unaware of it, but Olbart had a history of killing Subaru and the others.",
    "vi": "Abel cùng những người khác không hề biết điều đó, nhưng Olbart từng có tiền lệ sát hại Subaru và đồng đội."
  },
  {
    "id": 103,
    "en": "Nervetheless, Olbart’s act was one that was driven by a logical train of thought for him, so Subaru was able to agree with the general argument presented by them. In that place, the only thing that had gone wrong had been the timing.",
    "vi": "Dẫu vậy, hành động của Olbart được dẫn dắt bởi một chuỗi tư duy hợp lý của riêng lão, nên Subaru có thể tán đồng với lập luận chung của họ. Trong trường hợp đó, thứ duy nhất sai lệch chỉ là thời điểm."
  },
  {
    "id": 104,
    "en": "With that as the basis―― that Subaru and the others had been killed as soon as they had left the inn was certainly strange according to the game rules Olbart had agreed to.",
    "vi": "Lấy đó làm cơ sở―― việc Subaru cùng những người khác bị sát hại ngay khi vừa bước ra khỏi quán trọ chắc chắn là điều kỳ lạ so với luật chơi mà Olbart đã đồng thuận."
  },
  {
    "id": 105,
    "en": "According to Al, if Olbart intended to kill them no matter what, it would have been better to murder them before they even left the inn, so that it would not be seen. Maybe he had a desire to kill them in a public place, but that would not make sense either.",
    "vi": "Theo lời Al, nếu Olbart chủ định giết họ bằng mọi giá, thà lão ra tay hạ sát từ trước khi họ rời quán trọ để không bị ai nhìn thấy thì hơn. Có lẽ lão có sở thích giết người ở nơi công cộng, song điều đó cũng chẳng hề hợp lý."
  },
  {
    "id": 106,
    "en": "Perhaps, though, he thought Subaru’s group would be in for a more painful surprise were he to kill them once they obtained some peace of mind due to his intent to not kill them.",
    "vi": "Mặc dù vậy, có lẽ lão nghĩ nhóm Subaru sẽ phải nhận một bất ngờ đau đớn hơn nếu lão ra tay sát hại ngay khi họ vừa có được sự an tâm nhờ thỏa thuận không giết chóc kia."
  },
  {
    "id": 107,
    "en": "Subaru: [If that was the case, then he'd make more of an appearance, right?]",
    "vi": "Subaru: [Nếu quả thực như thế, lão ta sẽ lộ diện rõ ràng hơn chứ đúng không?]"
  },
  {
    "id": 108,
    "en": "If Olbart was aiming to disrupt Subaru and the others’ moods because of the badness of his character, would not he want to see their disappointment and despair with his own eyes?",
    "vi": "Nếu Olbart nhắm vào việc phá hỏng tâm trạng của Subaru cùng những người khác vì tính khí xấu xa của lão, chẳng nhẽ lão lại không muốn tận mắt nhìn thấy sự thất vọng và tuyệt vọng của họ sao?"
  },
  {
    "id": 109,
    "en": "Aside from that, he could not think of any reason for Olbart to kill everyone outside the inn.",
    "vi": "Ngoại trừ khả năng đó, cậu không thể nghĩ ra lý do nào để Olbart sát hại tất cả mọi người ở bên ngoài quán trọ."
  },
  {
    "id": 110,
    "en": "Meaning――,",
    "vi": "Nghĩa là――,"
  },
  {
    "id": 111,
    "en": "Subaru: [What's this supposed to mean…?]",
    "vi": "Subaru: [Thế này nghĩa là sao chứ...]"
  },
  {
    "id": 112,
    "en": "Medium: [Hey, hey, Subaru-chin, what are you worried about? Are you worried about going outside?]",
    "vi": "Medium: [Này này, Subaru-chin đang lo lắng chuyện gì vậy nha? Cậu lo chuyện đi ra ngoài đường sao?]"
  },
  {
    "id": 113,
    "en": "Subaru: [Huh?]",
    "vi": "Subaru: [Hả?]"
  },
  {
    "id": 114,
    "en": "Then, Medium peered into Subaru's face, who had fallen silent in his haste to sort out the situation.",
    "vi": "Kế đó, Medium ghé sát mặt quan sát Subaru, người vừa im lặng vì mải vội vàng sắp xếp lại tình hình."
  },
  {
    "id": 115,
    "en": "Right in front of him was a pair of round blue eyes, and Subaru involuntarily turned away with a \"Whoa!”. As an immediate reaction to his own, Medium let out a “Wow!”, and quickly grabbed his hand.",
    "vi": "Ngay trước mặt cậu là một đôi mắt xanh tròn xoe, Subaru vô thức ngoảnh mặt đi kèm theo tiếng kêu “Oái!”. Phản ứng lập tức trước hành động của cậu, Medium thốt lên “Ồ!” rồi nhanh chóng nắm lấy tay cậu."
  },
  {
    "id": 116,
    "en": "And so――,",
    "vi": "Và thế là――,"
  },
  {
    "id": 117,
    "en": "Medium: [There there, Subaru-chin, calm down, calm down.]",
    "vi": "Medium: [Nào nào, Subaru-chin, bình tĩnh lại đi nha, bình tĩnh nào.]"
  },
  {
    "id": 118,
    "en": "Subaru: [――Ah.]",
    "vi": "Subaru: [――A.]"
  },
  {
    "id": 119,
    "en": "Medium then pulled his hand, and held Subaru's head to her chest.",
    "vi": "Medium liền kéo tay cậu, rồi ôm đầu Subaru vào lồng ngực mình."
  },
  {
    "id": 120,
    "en": "As she slowly stroked his back, he could feel the beating of her heart on his forehead and cheeks. Her heart beat in a steady rhythm, tenderly smashing Subaru’s frozen consciousness.",
    "vi": "Khi cô khẽ vuốt ve tấm lưng cậu, cậu có thể cảm nhận rõ nhịp tim đập nơi trán và má mình. Trái tim cô đập theo một nhịp điệu đều đặn, dịu dàng đập tan ý thức đang đóng băng của Subaru."
  },
  {
    "id": 121,
    "en": "Medium: [When my head gets all messed up, I ask big bro to do this for me too~. Big bro also used to have people do this for him.]",
    "vi": "Medium: [Mỗi lần đầu óc tớ rối bời, tớ cũng hay bảo anh hai làm thế này cho đấy nha~. Anh hai hồi xưa cũng thường được người ta ôm như vậy á.]"
  },
  {
    "id": 122,
    "en": "Subaru: […It calms me down, I can feel it.]",
    "vi": "Subaru: [...Tôi bình tĩnh lại rồi, cảm nhận được rồi.]"
  },
  {
    "id": 123,
    "en": "Medium: [Yeahyeah, good! So, we can stay like this and you can tell me what’s going on, ok? What's Subaru-chin worried about outside?]",
    "vi": "Medium: [Đúng rồi nha, tốt lắm! Vậy chúng ta cứ giữ nguyên thế này rồi cậu kể cho tớ nghe chuyện gì đang xảy ra nhé? Subaru-chin đang lo lắng điều gì ở bên ngoài thế nha?]"
  },
  {
    "id": 124,
    "en": "Medium's voice, coming down from directly above him, did not rush Subaru to answer.",
    "vi": "Giọng nói của Medium vang lên từ ngay phía trên đầu, không hề hối thúc Subaru trả lời."
  },
  {
    "id": 125,
    "en": "Subaru wished to be spoiled by Medium's generosity and kindness that did not change even though she had been made younger. But he knew that the current time would not allow that.",
    "vi": "Subaru mong muốn được nuông chiều bởi sự bao dung và tử tế không hề đổi thay của Medium dẫu cô đã bị thu nhỏ. Tuy nhiên, cậu thừa biết thời gian hiện tại không cho phép làm vậy."
  },
  {
    "id": 126,
    "en": "So, as a trade-off, while having his head held by Medium like that, with difficulty he developed a thought.",
    "vi": "Vì thế, để đánh đổi, trong lúc được Medium ôm đầu như vậy, cậu gượng dậy tập trung suy nghĩ."
  },
  {
    "id": 127,
    "en": "Subaru: [It's just that… I feel, like there's a dangerous situation, outside the inn…]",
    "vi": "Subaru: [Chỉ là... tôi cảm giác, bên ngoài quán trọ có một tình huống nguy hiểm...]"
  },
  {
    "id": 128,
    "en": "Medium: [Is it dangerous out there?]",
    "vi": "Medium: [Bên ngoài nguy hiểm lắm sao nha?]"
  },
  {
    "id": 129,
    "en": "Subaru: [Yeah, that’s right. I think, someone's trying, to kill us…]",
    "vi": "Subaru: [Ừ, đúng thế. Tôi nghĩ có kẻ đang tìm cách sát hại chúng ta...]"
  },
  {
    "id": 130,
    "en": "Nodding her head, Medium listened to Subaru's overly vague idea. To be honest, even he could notice that the statement was too unconvincing and unfounded.",
    "vi": "Medium gật đầu, chăm chú lắng nghe ý kiến quá đỗi mơ hồ của Subaru. Thành thật mà nói, ngay cả cậu cũng nhận ra lời nói đó quá thiếu thuyết phục và không có căn cứ."
  },
  {
    "id": 131,
    "en": "Without being able to better word himself, he would never be able to convince Abel and Al, Medium regardless. Like, as an example――,",
    "vi": "Nếu không thể diễn đạt rõ ràng hơn, cậu sẽ không đời nào thuyết phục được Abel và Al, chứ chưa nói đến Medium. Chẳng hạn như thế này――,"
  },
  {
    "id": 132,
    "en": "Subaru: [Actually, if we go outside the inn, that's where we die――]",
    "vi": "Subaru: [Thật ra, nếu chúng ta bước ra khỏi quán trọ, đó sẽ là lúc chúng ta mất mạng――]"
  },
  {
    "id": 133,
    "en": "――At that moment, the world stood still.",
    "vi": "――Ngay khoảnh khắc đó, thế giới bỗng ngưng đọng."
  },
  {
    "id": 134,
    "en": "Subaru: [――――]",
    "vi": "Subaru: [————]"
  },
  {
    "id": 135,
    "en": "The clear, audible pulse of Medium faded into eternity, and her face and breathing, which were right in front of him, went out of reach.",
    "vi": "Nhịp mạch rõ ràng, có thể nghe thấy của Medium tan biến vào cõi vĩnh hằng, gương mặt cùng hơi thở của cô ngay sát bên bỗng trở nên xa vời vợi."
  },
  {
    "id": 136,
    "en": "Anything and everything, was faraway.",
    "vi": "Bất cứ thứ gì và mọi điều đều hóa xa xăm."
  },
  {
    "id": 137,
    "en": "Color was lost, sound was lost, the flow of time was lost, the freedom to move was lost.",
    "vi": "Sắc màu biến mất, âm thanh tiêu tán, dòng chảy thời gian ngừng trôi, và quyền tự do cử động cũng không còn."
  },
  {
    "id": 138,
    "en": "He could not move. He did not move. He was not moved. He was not allowed to move.",
    "vi": "Cậu không thể cử động. Cậu không cử động. Cậu không được phép cử động."
  },
  {
    "id": 139,
    "en": "And then, with his voice, his breathing and even his eyes prohibited of freewill, something repulsive, terrifying, frightening slowly loomed towards the edge of Subaru's consciousness.",
    "vi": "Và rồi, khi giọng nói, hơi thở và cả đôi mắt đều bị tước đoạt tự do, một thứ gì đó ghê tởm, đáng sợ, kinh hoàng từ từ hiện lên ở rìa ý thức của Subaru."
  },
  {
    "id": 140,
    "en": "Why, was he violating the Taboo; as if it were lamenting that, the sable shadow crept closer towards him.",
    "vi": "Tại sao lại vi phạm Điều Cấm; như thể đang oán than điều đó, bóng đen u ám lướt lại gần cậu."
  },
  {
    "id": 141,
    "en": "Why, did he forget this; slender dark-pigmented fingers slid into his chest without effort.",
    "vi": "Tại sao lại quên đi chuyện này; những ngón tay đen đúa gầy guộc luồn vào lồng ngực cậu một cách dễ dàng."
  },
  {
    "id": 142,
    "en": "Why, would he repeat this so many times; the voice of the Witch arrived, blotting out anything and everything.",
    "vi": "Tại sao lại lặp lại chuyện này nhiều lần đến thế; giọng nói của Phù Thủy vang lên, che lấp bất cứ thứ gì và tất cả mọi điều."
  },
  {
    "id": 143,
    "en": "???: [I love you.]",
    "vi": "???: [Ta yêu cậu.]"
  },
  {
    "id": 144,
    "en": "A voice that had not been heard in a very, very long time, dragged Subaru to hell.",
    "vi": "Giọng nói đã rất, rất lâu rồi mới lại nghe thấy ấy kéo tuột Subaru xuống địa ngục."
  },
  {
    "id": 145,
    "en": "His heart was gripped, and a tremendous pain tore Subaru's motionless body to shreds. It tormented him. It violated him. Humiliated him. ――Marked him, so he would never forget it again.",
    "vi": "Trái tim cậu bị bóp nghẹt, một cơn đau dữ dội xé xác thân hình bất động của Subaru ra thành trăm mảnh. Nó hành hạ cậu. Nó chà đạp cậu. Sỉ nhục cậu. ――Khắc ghi dấu ấn lên cậu, để cậu không bao giờ quên đi lần nữa."
  },
  {
    "id": 146,
    "en": "And then――,",
    "vi": "Và rồi――,"
  },
  {
    "id": 147,
    "en": "Subaru: [――Hk.]",
    "vi": "Subaru: [――Hộc.]"
  },
  {
    "id": 148,
    "en": "Medium: [Subaru-chin?]",
    "vi": "Medium: [Subaru-chin?]"
  },
  {
    "id": 149,
    "en": "Suddenly, sound, color, the flow of time returned, and he felt the fierce flow of blood throughout his body.",
    "vi": "Đột ngột, âm thanh, sắc màu, dòng chảy thời gian quay trở lại, và cậu cảm nhận được dòng máu cuộn chảy mãnh liệt khắp cơ thể."
  },
  {
    "id": 150,
    "en": "His head remained pressed against Medium's chest, but what he picked up was not her tender heartbeat, but the resumption of his own blood flow and his own unusual, frightened, racing heartbeat.",
    "vi": "Đầu cậu vẫn đang tựa vào lồng ngực Medium, song thứ cậu nhận ra không phải nhịp đập dịu dàng từ cô, mà là sự tuần hoàn trở lại của dòng máu và nhịp tim đập loạn xạ, hoảng loạn, bất thường của chính mình."
  },
  {
    "id": 151,
    "en": "The Witch's anger at having broken the Taboo was immense, to the point of losing his voice, to the point of breaking his understanding, to the point of violating his soul. Subaru cursed himself.",
    "vi": "Cơn thịnh nộ của Phù Thủy khi cậu vi phạm Điều Cấm lớn đến mức cướp đi giọng nói của cậu, đánh sập sự thấu hiểu của cậu, và chà đạp lên linh hồn cậu. Subaru tự nguyền rủa bản thân."
  },
  {
    "id": 152,
    "en": "Why, had he put himself through so much pain and suffering, he wondered.",
    "vi": "Tại sao cậu lại tự đẩy mình vào nỗi đau đớn và khổ sở tột cùng như thế chứ."
  },
  {
    "id": 153,
    "en": "By no means, could he confide in others about Return by Death.",
    "vi": "Tuyệt đối không có cách nào để cậu có thể thổ lộ với người khác về Return by Death."
  },
  {
    "id": 154,
    "en": "He could not even inadvertently speak of it in something like an analogy.",
    "vi": "Cậu thậm chí không được phép vô tình nhắc tới nó thông qua một phép ẩn dụ nào."
  },
  {
    "id": 155,
    "en": "If he attempted to convey those intentions of his to anyone, that dark-colored evil hand―― that of the Witch of Envy, would overcome any obstacle and reach for Subaru's heart.",
    "vi": "Nếu cậu có ý đồ truyền đạt ý muốn đó cho bất cứ ai, bàn tay hắc ám tà ác ấy―― của Witch of Envy, sẽ vượt qua mọi chướng ngại vật để bóp nghẹt trái tim Subaru."
  },
  {
    "id": 156,
    "en": "Not to mention――,",
    "vi": "Chưa kể đến――,"
  },
  {
    "id": 157,
    "en": "Subaru: [That was a close one…]",
    "vi": "Subaru: [Suýt nữa thì xong đời...]"
  },
  {
    "id": 158,
    "en": "Muttering so, Subaru checked the presence of the one holding him, Medium, and that of the ones surrounding him, Abel, Al, Taritta and Louis.",
    "vi": "Lẩm bẩm như thế, Subaru kiểm tra sự hiện diện của Medium đang ôm mình, cùng những người đang vây quanh cậu là Abel, Al, Taritta và Louis."
  },
  {
    "id": 159,
    "en": "The feeling of heat rising in the corner of his eyes was one of relief that they had not been harmed. ――The confession of Return by Death carried alongside a risk utmost feared by Subaru.",
    "vi": "Cảm giác nóng rát dâng lên nơi khóe mắt là sự nhẹ nhõm vì họ chưa bị tổn hại. ――Việc thú nhận về Return by Death luôn đi kèm với rủi ro đáng sợ nhất đối với Subaru."
  },
  {
    "id": 160,
    "en": "That was, the possibility that the evil hand would lay harm on someone other than Subaru and that, unlike the threat Subaru faced, it would not dispel its power until it severed their thread of life.",
    "vi": "Đó chính là khả năng bàn tay tà ác kia sẽ gây hại cho ai đó ngoài Subaru, và khác với mối đe dọa cậu phải đối mặt, nó sẽ không buông tha cho đến khi cắt đứt sợi chỉ sinh mệnh của họ."
  },
  {
    "id": 161,
    "en": "If that possibility were not actualized, and the only one to suffer were Subaru, that would be the next best outcome.",
    "vi": "If that possibility were not actualized, and the only one to suffer were Subaru, that would be the next best outcome."
  },
  {
    "id": 162,
    "en": "Of course, it was undeniable that the optimal would have been if Subaru had not been subjected to any pain.",
    "vi": "Dĩ nhiên, không thể phủ nhận rằng điều tối ưu nhất vẫn là Subaru chẳng phải chịu đựng bất kỳ đau đớn nào."
  },
  {
    "id": 163,
    "en": "Subaru: [Medium, san… Thank you, I’m okay now.]",
    "vi": "Subaru: [Medium-san... Cảm ơn cô, giờ tôi ổn rồi.]"
  },
  {
    "id": 164,
    "en": "Medium: [Really? Like, you look even more pained than before…]",
    "vi": "Medium: [Thật không nha? Trông cậu còn đau đớn hơn lúc nãy nữa kìa...]"
  },
  {
    "id": 165,
    "en": "Subaru: [If I’m the only one feeling miserable, that’d seriously be the best thing in this situation.]",
    "vi": "Subaru: [Nếu chỉ mình tôi cảm thấy tồi tệ, thì đó thực sự là điều tốt nhất trong hoàn cảnh này rồi.]"
  },
  {
    "id": 166,
    "en": "Raising his face towards her, Subaru was released from Medium's embrace. Although Medium looked somewhat hesitant about it, she was unable to say anything more at Subaru's insistence.",
    "vi": "Ngẩng mặt nhìn cô, Subaru được giải phóng khỏi cái ôm của Medium. Dù Medium trông có vẻ ngần ngại, cô cũng không thể nói gì thêm trước sự kiên quyết của Subaru."
  },
  {
    "id": 167,
    "en": "As much as her concern was appreciated, the situation did not allow for it. And without exaggeration, the fact remained that Medium had helped a lot.",
    "vi": "Dù rất trân trọng sự quan tâm của cô, song tình thế không cho phép cậu lãng phí thời gian. Và không hề quá lời khi nói rằng Medium đã giúp ích rất nhiều."
  },
  {
    "id": 168,
    "en": "Subaru: [I'm sorry if I sound weird and unsettling. But I really feel it's… dangerous outside. So.]",
    "vi": "Subaru: [Xin lỗi vì những lời kỳ quặc và đáng ngại của tôi. Nhưng tôi thực sự cảm thấy... bên ngoài rất nguy hiểm. Vì thế.]"
  },
  {
    "id": 169,
    "en": "Al: [Don't go out there, you say? But then we wouldn't play the game with Olbart. Of course, there’s always the option of not playing the game with him.]",
    "vi": "Al: [Không ra ngoài sao? Nhưng thế thì bọn mình không thể chơi trò chơi với Olbart. Tất nhiên, luôn có phương án là không chơi với lão.]"
  },
  {
    "id": 170,
    "en": "Subaru: [――――]",
    "vi": "Subaru: [————]"
  },
  {
    "id": 171,
    "en": "Abel: [In that case, we shall have no choice but to cancel our negotiations with Yorna Mishigure. This trip has been a long one, and you, the clown, and Medium have all shrunk as a result.]",
    "vi": "Abel: [Trong trường hợp đó, chúng ta sẽ không còn lựa chọn nào ngoài việc hủy bỏ cuộc đàm phán với Yorna Mishigure. Hành trình này đã quá dông dài, và kết quả là ngươi, tên hề cùng Medium đều bị thu nhỏ.]"
  },
  {
    "id": 172,
    "en": "Al: [Well, some people might desire the result of being rejuvenated for the rest of their lives, you know?]",
    "vi": "Al: [Chà, biết đâu có người lại muốn được trẻ lại suốt đời thì sao chứ hả?]"
  },
  {
    "id": 173,
    "en": "He followed up Abel's cold-hearted statement with an impotent tease; Al's point, however, was squarely contradicted by Olbart's statement.",
    "vi": "Cậu ta bồi thêm một lời bông đùa vô thưởng vô phạt sau phát ngôn lạnh lùng của Abel; tuy nhiên, lập luận của Al đã bị bác bỏ trực diện bởi lời nói của Olbart."
  },
  {
    "id": 174,
    "en": "Albeit the details were unknown, it seemed that the “infantilization” that had befallen Subaru and the others had some disadvantages. It was not just simple rejuvenation, it seemed.",
    "vi": "Dù chi tiết chưa rõ, có vẻ như sự “trẻ con hóa” ập xuống đầu Subaru cùng những người khác đi kèm with một vài bất lợi. Trông thế nhưng không đơn giản chỉ là trẻ hóa thông thường."
  },
  {
    "id": 175,
    "en": "In other words, this “infantilization” was, without a doubt, a bomb.",
    "vi": "Nói cách khác, sự “trẻ con hóa” này chắc chắn là một quả bom nổ chậm."
  },
  {
    "id": 176,
    "en": "Al: [In any case, I can't stay small. Since we chose not to surround the old man and beat him, we gotta win the game of hide-and-seek.]",
    "vi": "Al: [Dù thế nào thì tôi cũng không muốn kẹt trong hình dạng nhỏ thó này mãi đâu. Đã chọn không vây ráp đập lão già kia một trận, thì bọn mình phải thắng trò trốn tìm thôi.]"
  },
  {
    "id": 177,
    "en": "Subaru: [I know. I'm not going to forfeit the game. It's just that it's really dangerous out there. So…]",
    "vi": "Subaru: [Tôi biết. Tôi không định bỏ cuộc đâu. Chỉ là bên ngoài thực sự rất nguy hiểm. Vì thế...]"
  },
  {
    "id": 178,
    "en": "Abel: [And so?]",
    "vi": "Abel: [Thế rồi sao?]"
  },
  {
    "id": 179,
    "en": "Subaru: [Well, I want to be careful if we go out there. Also, I want you to believe me when I say very strange things.]",
    "vi": "Subaru: [Tôi muốn chúng ta phải hết sức cẩn thận khi ra ngoài. Ngoài ra, tôi muốn các anh tin tôi khi tôi nói những điều có vẻ kỳ lạ.]"
  },
  {
    "id": 180,
    "en": "Abel: [――――]",
    "vi": "Abel: [————]"
  },
  {
    "id": 181,
    "en": "Subaru: [If you don't accept it, well then, I'll show you some proof.]",
    "vi": "Subaru: [Nếu anh không chấp nhận, được thôi, tôi sẽ đưa ra bằng chứng.]"
  },
  {
    "id": 182,
    "en": "Abel: [Proof, is it?]",
    "vi": "Abel: [Bằng chứng sao?]"
  },
  {
    "id": 183,
    "en": "Subaru: [Proof that my ideas shouldn't be ignored. I'll tell you where Olbart-san is. I’ll tell you where he’s hiding, where that “behind the eyelids” is.]",
    "vi": "Subaru: [Bằng chứng cho thấy không nên phớt lờ ý kiến của tôi. Tôi sẽ chỉ cho anh chỗ của Olbart-san. Tôi sẽ nói cho anh biết lão đang trốn ở đâu, cái “phía sau mí mắt” kia nghĩa là gì.]"
  },
  {
    "id": 184,
    "en": "Abel: [Do you believe that to be enough of a bargaining chip? One way or another, you must reveal it. It is you who shall suffer the disadvantage of concealing it.]",
    "vi": "Abel: [Ngươi tin thế là đủ làm quân bài mặc cả sao? Đằng nào ngươi cũng phải tiết lộ thôi. Kẻ chịu bất lợi nếu che giấu chuyện đó chính là ngươi.]"
  },
  {
    "id": 185,
    "en": "Subaru: [Ugh…]",
    "vi": "Subaru: [Ư...]"
  },
  {
    "id": 186,
    "en": "However, stubborn as he was, Abel refuted Subaru's opinion, which provoked a spontaneous groan from the latter, lost for words. Before he could say anything else, Al interrupted with \"Now now\",",
    "vi": "Tuy nhiên, với bản tính bướng bỉnh của mình, Abel bác bỏ ý kiến của Subaru, khiến cậu chỉ biết rên rỉ bất lực vì đuối lý. Trước khi cậu kịp nói thêm điều gì, Al đã xen vào bằng câu “Thôi nào, thôi nào”,"
  },
  {
    "id": 187,
    "en": "Al: [Abel-chan, bro said he’s gonna give us something to base a decision out of. In fact, what he said was so outta nowhere, that I can't get rid of the question mark over my head. But it's not the first time he's said something outrageous. Right?]",
    "vi": "Al: [Abel-chan, người anh em đã nói là sẽ đưa ra cơ sở để đưa ra quyết định mà. Thực ra, lời cậu ấy nói đường đột quá khiến đầu tôi cũng đầy dấu hỏi chấm đây này. Nhưng đây có phải lần đầu cậu ấy nói mấy lời kỳ quặc đâu. Đúng chứ?]"
  },
  {
    "id": 188,
    "en": "Abel: [――――]",
    "vi": "Abel: [————]"
  },
  {
    "id": 189,
    "en": "Al: [If you ain’t listening to bro's opinion here, there's no point in bringing him along. And if you're still gonna say you’ll disrespect him, well, then you’re just gonna ruin my mood too.]",
    "vi": "Al: [Nếu anh không nghe ý kiến của người anh em ở đây, đem cậu ấy theo cũng vô ích thôi. Và nếu anh vẫn cứ muốn coi thường cậu ấy, chà, thế thì tôi cũng tụt hết cả hứng đấy.]"
  },
  {
    "id": 190,
    "en": "Abel: [Ho.]",
    "vi": "Abel: [Ồ.]"
  },
  {
    "id": 191,
    "en": "As Al tried to cover Subaru with his back they changed positions, Al's voice, as he confronted Abel, dropped in tone.",
    "vi": "Khi Al cố ý lấy tấm lưng che chắn cho Subaru và thay đổi vị trí đứng, giọng nói của Al khi đối diện với Abel cũng trầm xuống rõ rệt."
  },
  {
    "id": 192,
    "en": "Abel: [Ho. An impudent statement. You are the one who is lacking a hand here, and yet you believe you have the capability to speak of my decisions?]",
    "vi": "Abel: [Ồ. Lời nói láo xược đấy. Ngươi là kẻ đang thiếu đi một cánh tay ở đây, vậy mà lại tự phụ có đủ tư cách can thiệp vào quyết định của ta sao?]"
  },
  {
    "id": 193,
    "en": "Al: [――Ah, yeah, I do. If I wanted to act like a loyal watchdog, I would’ve stayed in Guaral and not accompanied you. I’m here because I wanted to go along with bro.]",
    "vi": "Al: [――À, ừ, có đấy. Nếu tôi muốn cư xử như một con chó săn trung thành, tôi đã ở lại Guaral chứ chẳng thèm đi theo anh làm gì. Tôi ở đây là vì muốn đi cùng với người anh em.]"
  },
  {
    "id": 194,
    "en": "Al answered back without hesitation, and a sharp tension arose between the two of them.",
    "vi": "Al đáp trả không chút đắn đo, và một bầu không khí căng thẳng tột độ bao trùm giữa hai người."
  },
  {
    "id": 195,
    "en": "Watching their silent confrontation, Taritta swallowed her breath, while Medium and Louis looked on in concern.",
    "vi": "Chứng kiến cuộc đối đầu thầm lặng của họ, Taritta nín thở, trong khi Medium và Louis lo lắng dõi theo."
  },
  {
    "id": 196,
    "en": "And then, as a result of that silence, it was Abel who broke the eye contact first.",
    "vi": "Và rồi, kết thúc sự im lặng ấy, chính Abel lại là người chủ động dời đi ánh mắt trước."
  },
  {
    "id": 197,
    "en": "Abel: [Foolishness. There is no time to waste on such a triviality. As you wish, we shall raise our guard. In spite of this, Natsuki Subaru.]",
    "vi": "Abel: [Vớ vẩn. Không có thời gian để lãng phí vào chuyện vụn vặt thế này. Theo ý các ngươi, chúng ta sẽ tăng cường cảnh giác. Mặc dù vậy, Natsuki Subaru.]"
  },
  {
    "id": 198,
    "en": "Subaru: [――Yes.]",
    "vi": "Subaru: [――Vâng.]"
  },
  {
    "id": 199,
    "en": "Abel: [If your prediction is off, I shall demote you from a clown to something lower. Be prepared for that.]",
    "vi": "Abel: [Nếu phán đoán của ngươi sai lệch, ta sẽ hạ cấp ngươi từ tên hề xuống thứ thấp kém hơn nữa. Chuẩn bị tinh thần đi.]"
  },
  {
    "id": 200,
    "en": "Subaru: [What's lower than a clown anyway…! No, whatever. Let's get moving!]",
    "vi": "Subaru: [Thế rốt cuộc thứ gì còn thấp kém hơn cả tên hề chứ...! Mà thôi kệ đi. Chúng ta mau di chuyển thôi!]"
  }
];

fs.writeFileSync(path.join(tempDir, 'ch44_part2.json'), JSON.stringify(part2, null, 2), 'utf-8');
console.log('Saved ch44_part2.json');
