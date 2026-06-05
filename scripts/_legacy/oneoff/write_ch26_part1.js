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
    "en": "Al: [――Oi, wait? Is anyone listening? I'm in serious trouble here!]",
    "vi": "Al: [――Ơ kìa, khoan đã? Có ai nghe tôi nói không? Tôi đang gặp nguy hiểm thực sự đấy!]"
  },
  {
    "id": 17,
    "en": "The tension in the air was shaken by a foolish voice, but that did not relieve the situation of its tension.",
    "vi": "Bầu không khí căng thẳng bị khuấy động bởi một giọng nói ngớ ngẩn, nhưng điều đó không làm dịu đi sự căng thẳng của tình hình."
  },
  {
    "id": 18,
    "en": "If anything, the pressure between Abel and Priscilla kept escalating, and even Subaru, standing on the fringes, was unable to make a move.",
    "vi": "Trái lại, áp lực giữa Abel và Priscilla tiếp tục leo thang, và ngay cả Subaru khi đứng ngoài rìa cũng không thể cử động nổi."
  },
  {
    "id": 19,
    "en": "Subaru: [――――]",
    "vi": "Subaru: [――――]"
  },
  {
    "id": 20,
    "en": "If he made the wrong move, he would risk the wrath of Priscilla, the one in charge of the now half-destroyed hall.",
    "vi": "Nếu hành động sai sót, cậu sẽ có nguy cơ chọc giận Priscilla, người đang làm chủ sảnh đường giờ đã bị tàn phá một nửa này."
  },
  {
    "id": 21,
    "en": "Out of fear, he was hesitant to point out that Al was on the verge of falling to his death. The only way to break this situation was for Abel or Priscilla to speak――",
    "vi": "Vì sợ hãi, cậu ngập ngừng không dám chỉ ra rằng Al đang mấp mé bên bờ vực rơi xuống và mất mạng. Cách duy nhất để phá vỡ cục diện bế tắc này là Abel hoặc Priscilla lên tiếng――"
  },
  {
    "id": 22,
    "en": "???: [――Don't move.]",
    "vi": "Giọng nói bí ẩn: [――Đứng yên.]"
  },
  {
    "id": 23,
    "en": "However, neither of them were the one to change the predicament.",
    "vi": "Tuy nhiên, người thay đổi tình thế khó khăn này lại không phải là ai trong hai người họ."
  },
  {
    "id": 24,
    "en": "The unexpected voice came from the staircase that connected the hall to the lower floor. He glanced over to see a new figure looking at Priscilla, an arrow notched in their bow, aimed straight at her.",
    "vi": "Giọng nói bất ngờ phát ra từ phía cầu thang nối sảnh đường với tầng dưới. Cậu liếc nhìn sang và thấy một bóng người mới đang nhìn Priscilla, một mũi tên đã đặt sẵn trên dây cung, nhắm thẳng vào cô ta."
  },
  {
    "id": 25,
    "en": "It was Taritta, whose strong eyes were filled with intense hostility.",
    "vi": "Đó là Taritta, đôi mắt mạnh mẽ của cô tràn đầy sự thù địch mãnh liệt."
  },
  {
    "id": 26,
    "en": "Under Abel and Mizelda’s direction, she had left the City Hall before Arakiya’s assault, but had now returned.",
    "vi": "Dưới sự chỉ đạo của Abel và Mizelda, cô đã rời Tòa Thị Chính trước cuộc tấn công của Arakiya, nhưng giờ đã quay trở lại."
  },
  {
    "id": 27,
    "en": "Naturally, seeing the upper floors of the City Hall in pieces, Taritta would have inferred that there had been an enemy attack. The problem was that she had no idea what that specifically entailed.",
    "vi": "Tự nhiên, khi nhìn thấy các tầng trên của Tòa Thị Chính đã tan tành thành từng mảnh, Taritta chắc chắn đã suy đoán rằng có một cuộc tấn công của kẻ địch. Vấn đề là cô không biết cụ thể cuộc tấn công đó bao gồm những gì."
  },
  {
    "id": 28,
    "en": "With the heavy atmosphere, and Priscilla looking down at Subaru and Abel, there was no doubt in her mind that Priscilla was the source of all this destruction that had rained down upon the City Hall.",
    "vi": "Với bầu không khí nặng nề, cùng với việc Priscilla đang nhìn xuống Subaru và Abel, cô không hề nghi ngờ rằng Priscilla chính là cội nguồn của mọi sự hủy diệt đã trút xuống Tòa Thị Chính này."
  },
  {
    "id": 29,
    "en": "Taritta: [Move, and I'll shoot you in the head.]",
    "vi": "Taritta: [Cử động đi, ta sẽ bắn xuyên đầu ngươi.]"
  },
  {
    "id": 30,
    "en": "Priscilla: [Oh, my head? It is already bad enough that you could not even get to your ally in time.]",
    "vi": "Priscilla: [Ồ, đầu của ta ư? Ngươi không thể đến cứu đồng minh của mình kịp lúc đã đủ thảm hại rồi, vậy mà còn dám nói lời ngông cuồng sao.]"
  },
  {
    "id": 31,
    "en": "Taritta: [――Hk.]",
    "vi": "Taritta: [――Hự.]"
  },
  {
    "id": 32,
    "en": "Taritta's cheeks tightened at the unnecessary provocation, and Priscilla turned to her with composure.",
    "vi": "Cơ má của Taritta giật mạnh trước sự khiêu khích vô sự của Priscilla, trong khi Priscilla quay về phía cô đầy ung dung."
  },
  {
    "id": 33,
    "en": "With an overwhelmingly dignified attitude, Priscilla dismissed the threat of being shot. In fact, Priscilla made a point of walking straight up to Taritta.",
    "vi": "Với một thái độ uy nghiêm áp đảo, Priscilla coi thường mối đe dọa bị bắn hạ. Thực tế, Priscilla còn thản nhiên bước thẳng về phía Taritta."
  },
  {
    "id": 34,
    "en": "???: [That is enough.]",
    "vi": "Giọng nói bí ẩn: [Thế là đủ rồi.]"
  },
  {
    "id": 35,
    "en": "However, Abel halted Priscilla from taking any further steps.",
    "vi": "Tuy nhiên, Abel đã ngăn Priscilla tiến thêm bước nào nữa."
  },
  {
    "id": 36,
    "en": "Quietly, Priscilla's crimson gaze turned to Abel again. Abel, down on one knee, met her gaze firmly.",
    "vi": "Lặng lẽ, ánh mắt đỏ rực của Priscilla một lần nữa hướng về Abel. Abel, đang quỳ một gối, kiên định đón nhận ánh nhìn của cô ta."
  },
  {
    "id": 37,
    "en": "Abel: [Taritta can be more resourceful than you think. Do not take her lightly.]",
    "vi": "Abel: [Taritta có thể tháo vát hơn ngươi nghĩ đấy. Đừng coi thường cô ta.]"
  },
  {
    "id": 38,
    "en": "Priscilla: [If you say so, but do you think I shall turn a blind eye to her disrespect?]",
    "vi": "Priscilla: [Nếu ngươi đã nói vậy, nhưng ngươi nghĩ ta sẽ nhắm mắt làm ngơ trước sự bất kính của ả sao?]"
  },
  {
    "id": 39,
    "en": "Abel: [I am sure you cannot. But Priscilla… how many times have you pulled out the Yang Sword?]",
    "vi": "Abel: [Ta biết là ngươi không thể. Nhưng Priscilla… ngươi đã rút Dương Kiếm ra bao nhiêu lần rồi?]"
  },
  {
    "id": 40,
    "en": "Setting aside the unexpected evaluation of Taritta, Abel's question struck Priscilla.",
    "vi": "Gạt đi sự đánh giá bất ngờ về Taritta, câu hỏi của Abel đã đánh động Priscilla."
  },
  {
    "id": 41,
    "en": "Subaru, however, could not understand the question’s intent. She was holding the Yang Sword――  a treasured sword of dazzling crimson, that held an indisputable amount of power.",
    "vi": "Tuy nhiên, Subaru không thể hiểu được ý đồ của câu hỏi đó. Cô ta đang nắm giữ Dương Kiếm―― một thanh bảo kiếm đỏ rực lấp lánh, sở hữu một lượng sức mạnh không thể chối cãi."
  },
  {
    "id": 42,
    "en": "But now that she had defeated Arakiya, she had it sheathed, with the sky as its scabbard. Certainly, she would once again pull it out if required――,",
    "vi": "Nhưng giờ khi cô ta đã đánh bại Arakiya, cô ta đã tra kiếm vào bao, lấy bầu trời làm vỏ kiếm. Chắc chắn, cô ta sẽ một lần nữa rút nó ra nếu cần thiết――,"
  },
  {
    "id": 43,
    "en": "Abel: [Taritta, put the arrow down. She is not your enemy.]",
    "vi": "Abel: [Taritta, hạ tên xuống đi. Cô ta không phải kẻ thù của cô đâu.]"
  },
  {
    "id": 44,
    "en": "Without waiting for Priscilla's response, Abel continued to tell Taritta to drop her weapon. However, she was not convinced.",
    "vi": "Không đợi câu trả lời từ Priscilla, Abel tiếp tục bảo Taritta hạ vũ khí của mình xuống. Tuy nhiên, cô không hề bị thuyết phục."
  },
  {
    "id": 45,
    "en": "With the arrow still drawn, Taritta persisted, prefacing with “And yet… Hk”.",
    "vi": "Với mũi tên vẫn giương lên, Taritta khăng khăng, mở đầu bằng “Nhưng mà… Hự”."
  },
  {
    "id": 46,
    "en": "Taritta: [That woman is clearly dangerous.]",
    "vi": "Taritta: [Người phụ nữ đó rõ ràng rất nguy hiểm.]"
  },
  {
    "id": 47,
    "en": "Abel: [I am aware of that which you are saying. But she is not the one you ought to be paying attention to, currently.]",
    "vi": "Abel: [Ta hiểu những gì cô đang nói. Nhưng cô ta không phải là người cô nên chú ý vào lúc này.]"
  },
  {
    "id": 48,
    "en": "Taritta: [――?]",
    "vi": "Taritta: [――?]"
  },
  {
    "id": 49,
    "en": "Abel's gaze shifted to the side as he conveyed that to Taritta, who had yet to lower her guard. That gesture guided her gaze, and, while keeping Priscilla in sight on the corner of her vision, she turned her attention in that direction, and gasped.",
    "vi": "Ánh mắt của Abel chuyển sang một bên khi truyền đạt điều đó với Taritta, người vẫn chưa buông lỏng cảnh giác. Cử chỉ đó đã hướng ánh mắt cô đi, và trong khi vẫn giữ Priscilla trong tầm nhìn ở góc khuất, cô chuyển sự chú ý của mình về hướng đó, rồi nín thở kinh ngạc."
  },
  {
    "id": 50,
    "en": "Taritta: [S-Sister…!?]",
    "vi": "Taritta: [Ch-Chị hai…!?]"
  },
  {
    "id": 51,
    "en": "As her eyes were ushered, Taritta saw Mizelda undergoing treatment from Rem.",
    "vi": "Khi mắt cô được dẫn lối, Taritta thấy Mizelda đang được Rem trị trị liệu."
  },
  {
    "id": 52,
    "en": "With half of her body having been scorched by flames, and her abdomen pierced by a branch, Mizelda was gravely injured. Although Rem was doing her best to treat her, the pain was unbearable.",
    "vi": "Với một nửa cơ thể bị lửa thiêu rụi, và bụng bị đâm thủng bởi một cành cây, Mizelda đã bị thương cực kỳ nghiêm trọng. Mặc dù Rem đang cố gắng hết sức để chữa trị cho cô, nhưng cơn đau vẫn vượt quá sức chịu đựng."
  },
  {
    "id": 53,
    "en": "Rem: [Taritta-san, please call out to her. Call out…!]",
    "vi": "Rem: [Taritta-san, làm ơn hãy gọi cô ấy đi. Hãy gọi cô ấy…!]"
  },
  {
    "id": 54,
    "en": "Taritta: [Sister, Sister… Hk!!]",
    "vi": "Taritta: [Chị hai, chị hai… Hự!!]"
  },
  {
    "id": 55,
    "en": "Instantly, the atmosphere from before fizzled out and Taritta rushed over to Mizelda. She grabbed her sister's hand and began to call out \"Sister\" over and over again, just as Rem had requested.",
    "vi": "Ngay lập tức, bầu không khí căng thẳng lúc trước biến mất và Taritta lao về phía Mizelda. Cô nắm lấy tay chị mình và bắt đầu gọi \"Chị hai\" liên tục, đúng như Rem đã yêu cầu."
  },
  {
    "id": 56,
    "en": "So once again, there was nothing that could keep Priscilla in check.",
    "vi": "Vì vậy, một lần nữa, không còn ai hay điều gì có thể kìm hãm Priscilla."
  },
  {
    "id": 57,
    "en": "Abel: [――――]",
    "vi": "Abel: [――――]"
  },
  {
    "id": 58,
    "en": "The standoff between Abel and Priscilla resumed. ――Or so it seemed.",
    "vi": "Cục diện đối đầu giữa Abel và Priscilla tiếp diễn. ――Hoặc có vẻ là như vậy."
  },
  {
    "id": 59,
    "en": "Priscilla: [――Foolish commoner. Pull him up, you. He shall spoil the fun with all his noise.]",
    "vi": "Priscilla: [――Tên thường dân ngu ngốc kia. Kéo hắn lên đi. Hắn đang làm hỏng cuộc vui bằng tất cả sự ồn ào của mình đấy.]"
  },
  {
    "id": 60,
    "en": "Subaru: [Eh…]",
    "vi": "Subaru: [Hả…]"
  },
  {
    "id": 61,
    "en": "And with that, Priscilla pointed her chin towards the broken balcony.",
    "vi": "Và nói đoạn, Priscilla hếch cằm về phía ban công đã bị vỡ nát."
  },
  {
    "id": 62,
    "en": "She had ordered Subaru to rescue Al, who was doing his best to hold on for dear life. Subaru gasped as she gave the order without a care in the world.",
    "vi": "Cô ta đã ra lệnh cho Subaru cứu Al, người đang cố gắng hết sức để bấu víu lấy mạng sống. Subaru nín thở khi cô ta đưa ra mệnh lệnh mà không hề bận tâm đến thế sự xung quanh."
  },
  {
    "id": 63,
    "en": "Of course, he could not say anything except yes to her request, unless he wanted to take the risk of ruining Priscilla's mood. Above all――,",
    "vi": "Tất nhiên, cậu không thể nói gì khác ngoài việc đồng ý trước yêu cầu của cô ta, trừ phi cậu muốn mạo hiểm làm hỏng tâm trạng của Priscilla. Hơn hết thảy――,"
  },
  {
    "id": 64,
    "en": "Priscilla: [I shall see to that man myself. What, I am not going to let him die. Do not fret too much.]",
    "vi": "Priscilla: [Ta sẽ tự mình lo liệu cho gã đó. Yên tâm đi, ta sẽ không để hắn chết đâu. Đừng có lo lắng thái quá.]"
  },
  {
    "id": 65,
    "en": "Pointing to Abel, Priscilla's mention of Subaru's concerns also gave some encouragement.",
    "vi": "Chỉ tay về phía Abel, lời Priscilla nhắc đến mối bận tâm của Subaru cũng mang lại chút trấn an."
  },
  {
    "id": 66,
    "en": "It was not because he had enough of a trusting relationship with Priscilla to believe her outright on that statement, but because he knew that she would not back down from what she had declared.",
    "vi": "Không phải vì cậu có đủ sự tin tưởng với Priscilla để tin ngay lời cô ta nói, mà vì cậu biết rằng cô ta sẽ không bao giờ rút lại những gì mình đã tuyên bố."
  },
  {
    "id": 67,
    "en": "Abel: [Staring at each other is not going to get us anywhere. For the time being, you should do what she says.]",
    "vi": "Abel: [Lườm nguýt nhau cũng chẳng giải quyết được gì. Trước mắt, ngươi cứ làm theo lời cô ta đi.]"
  },
  {
    "id": 68,
    "en": "Subaru: […Alright. I'm not your subordinate, though.]",
    "vi": "Subaru: […Được rồi. Nhưng tôi không phải cấp dưới của anh đâu đấy.]"
  },
  {
    "id": 69,
    "en": "Abel added that as Subaru pondered over Priscilla's words.",
    "vi": "Abel bồi thêm một câu khi Subaru vẫn đang đắn đo về lời của Priscilla."
  },
  {
    "id": 70,
    "en": "He did not like the fact that he was being directed by Abel to do something. Leaving that thought for another time, Subaru immediately went to rescue Al, who was stuck hanging off a light fixture at the edge of the building.",
    "vi": "Cậu không thích việc mình bị Abel sai bảo làm việc này việc nọ. Gác lại suy nghĩ đó sau, Subaru lập tức tiến đến cứu Al, người đang bị mắc kẹt lơ lửng trên một chiếc đèn treo ở rìa tòa nhà."
  },
  {
    "id": 71,
    "en": "Subaru: [――――]",
    "vi": "Subaru: [――――]"
  },
  {
    "id": 72,
    "en": "His mind was a jumble of different factors as he did so: the safety of Mizelda and the People of Shudraq, the future of Guaral, and the relationship between Abel and Priscilla.",
    "vi": "Tâm trí cậu là một mớ hỗn độn của nhiều yếu tố khác nhau khi hành động: sự an toàn của Mizelda và người tộc Shudraq, tương lai của Guaral, và mối quan hệ giữa Abel và Priscilla."
  },
  {
    "id": 73,
    "en": "Subaru clenched his teeth and put those thoughts aside for the moment, concentrating on what was in front of him.",
    "vi": "Subaru nghiến chặt răng và tạm thời gạt những suy nghĩ đó sang một bên, tập trung vào những gì ở ngay trước mắt."
  },
  {
    "id": 74,
    "en": "Just as Rem was desperately trying to save the life in front of her, Subaru too, was trying to get as close as possible to the Bloodless Siege that he had envisioned.",
    "vi": "Giống như Rem đang tuyệt vọng cứu vớt sinh mạng trước mắt mình, Subaru cũng đang cố gắng tiếp cận gần nhất có thể với Kế Hoạch Bao Vây Không Bác Huyết mà cậu đã hình dung."
  },
  {
    "id": 75,
    "en": "△▼△▼△▼△",
    "vi": "△▼△▼△▼△"
  },
  {
    "id": 76,
    "en": "Al, who had been bathing in the exterior light of the City Hall, was much harder to rescue than expected.",
    "vi": "Al, người đang tắm mình trong ánh sáng ngoài trời của Tòa Thị Chính, khó cứu hơn dự tính nhiều."
  },
  {
    "id": 77,
    "en": "To begin with, Al only had one arm, the other having been lost in his time in this other world. As his lone arm was currently occupied, busy hanging by a thread, his options were limited.",
    "vi": "Đầu tiên, Al chỉ có một cánh tay, cánh tay kia đã mất trong thời gian hắn ở thế giới bên kia này. Vì cánh tay duy nhất của hắn hiện đang bận bám chặt để giữ mạng, nên các lựa chọn của hắn cực kỳ hạn chế."
  },
  {
    "id": 78,
    "en": "Al: [So this is what it means to have a hand full… No, it’s more like I’m busy as hell at this point. Which one do you think it is, bro?]",
    "vi": "Al: [Hóa ra đây là cảm giác bận rộn ngập đầu… Không, đúng hơn là tôi đang tơi tả hết cả người rồi đây. Cậu nghĩ là vế nào hả, người anh em?]"
  },
  {
    "id": 79,
    "en": "Subaru: [Shut up! If you want to be saved, don't demotivate me!]",
    "vi": "Subaru: [Câm miệng đi! Nếu muốn được cứu thì đừng có làm tôi nản lòng!]"
  },
  {
    "id": 80,
    "en": "Replying to the out-of-place tease, Subaru ripped the curtain Abel had been hanging from before, made a loop at the end, and guided it towards Al.",
    "vi": "Đáp lại lời trêu chọc không đúng chỗ, Subaru giật tấm rèm mà Abel đã bám lúc trước, thắt một chiếc thòng lọng ở đầu rèm, rồi quăng nó về phía Al."
  },
  {
    "id": 81,
    "en": "The loop was then threaded around Al's torso to secure him in place, and he was ready to be pulled up. Then he tugged at the curtain to pull the dangling and swaying middle-aged man out from his predicament,",
    "vi": "Chiếc vòng lọng sau đó được luồn qua thân của Al để giữ hắn cố định, sẵn sàng được kéo lên. Rồi cậu giật mạnh tấm rèm để kéo gã đàn ông trung niên đang đung đưa lơ lửng thoát khỏi tình thế hiểm nghèo,"
  },
  {
    "id": 82,
    "en": "Al: […And up, up I go. Whew, barely escaped death there. You saved me.]",
    "vi": "Al: […Và lên, lên nào. Phù, suýt chút nữa là đi đời nhà ma rồi. Cậu cứu mạng tôi đấy.]"
  },
  {
    "id": 83,
    "en": "There had been a few close calls, but Subaru finally succeeded in pulling Al back up.",
    "vi": "Đã có vài khoảnh khắc hú vía, nhưng cuối cùng Subaru cũng thành công kéo Al lên lại."
  },
  {
    "id": 84,
    "en": "After crawling the rest of the way up with Subaru’s help, Al patted his chest and sat on the floor of the wrecked hall. Looking over at him, Subaru wiped the sweat from his forehead, having completed his task.",
    "vi": "Sau khi bò phần còn lại lên với sự giúp đỡ của Subaru, Al vỗ ngực và ngồi bệt xuống sàn sảnh đường đổ nát. Nhìn qua hắn, Subaru lau mồ hôi trên trán, cuối cùng cũng hoàn thành nhiệm vụ."
  },
  {
    "id": 85,
    "en": "He then turned to the person who had helped him rescue Al―― Medium.",
    "vi": "Cậu liền quay sang nhìn người đã giúp mình giải cứu Al―― Medium."
  },
  {
    "id": 86,
    "en": "Subaru: [Thanks, Medium-san, that would’ve been pretty tough on my own.]",
    "vi": "Subaru: [Cảm ơn chị nha, Medium-san, một mình tôi thì chắc sẽ vất vả lắm đây.]"
  },
  {
    "id": 87,
    "en": "Medium: [It's ok, it's ok! Also, I'm sorry for collapsing at such a critical moment earlier!]",
    "vi": "Medium: [Không sao đâu, không sao đâu! Với lại, em xin lỗi vì đã ngất đi vào thời khắc quan trọng trước đó nha!]"
  },
  {
    "id": 88,
    "en": "Laughing cheerfully despite her battered appearance, Medium apologized for what happened in the prior battle.",
    "vi": "Nở nụ cười vui vẻ bất chấp vẻ ngoài tả tơi của mình, Medium xin lỗi vì những gì đã xảy ra trong trận chiến trước."
  },
  {
    "id": 89,
    "en": "She apologized for not being able to help during the fight with Arakiya, but her apology was far from necessary. In the first place, both Medium and Flop were not in a position in which they needed to be involved in this battle.",
    "vi": "Cô xin lỗi vì đã không thể giúp sức trong cuộc chiến chống lại Arakiya, nhưng lời xin lỗi của cô là hoàn toàn không cần thiết. Ngay từ đầu, cả Medium và Flop đều không ở thế buộc phải tham gia vào trận chiến này."
  },
  {
    "id": 90,
    "en": "Medium: [Both big bro and I haven't been diligent enough! I'm sorry, I'm sorry!]",
    "vi": "Medium: [Cả anh hai và em đều chưa đủ siêng năng cố gắng! Em xin lỗi, em xin lỗi!]"
  },
  {
    "id": 91,
    "en": "Subaru: [No, it's not your fault, Medium-san! You couldn't move because you were protecting Flop, Utakata and... Louis.]",
    "vi": "Subaru: [Không, không phải lỗi của chị đâu, Medium-san! Chị không thể cử động là vì phải bảo vệ Flop, Utakata và... Louis mà.]"
  },
  {
    "id": 92,
    "en": "Stumbling over his words somewhat, Subaru praised Medium's achievement.",
    "vi": "Hơi vấp lời một chút, Subaru khen ngợi chiến tích của Medium."
  },
  {
    "id": 93,
    "en": "At the time the tornado that was Arakiya had blown through the hall, Medium had protected Flop, who had been right beside her, as well as Utakata and Louis, who she had been carrying on both shoulders.",
    "vi": "Vào thời điểm cơn lốc xoáy mang tên Arakiya càn quét qua sảnh đường, Medium đã bảo vệ Flop, người ở ngay bên cạnh cô, cũng như Utakata và Louis, những đứa trẻ cô đang vác trên hai vai."
  },
  {
    "id": 94,
    "en": "As a result, she hit her head and was too stunned to move. But thanks to her efforts, the three of them were safe, and Medium was spared from further damage.",
    "vi": "Kết quả là cô bị đập đầu và quá choáng váng đến mức không thể di chuyển. Nhưng nhờ những nỗ lực của cô, cả ba người bọn họ đều được an toàn, và bản thân Medium cũng tránh được những tổn hại nặng nề hơn."
  },
  {
    "id": 95,
    "en": "Medium: [Hmm, it makes me happy that you say so, Natsumi-chan. But it’s no good. I’m big bro’s bodyguard, so I gotta do my job properly!]",
    "vi": "Medium: [Hì hì, nghe Natsumi-chan nói vậy em vui lắm. Nhưng không được đâu. Em là vệ sĩ của anh hai, nên em phải hoàn thành tốt công việc của mình chứ!]"
  },
  {
    "id": 96,
    "en": "Subaru: [Medium-san…]",
    "vi": "Subaru: [Medium-san…]"
  },
  {
    "id": 97,
    "en": "Medium: [Next time! Next time, I won't be so pathetic! Look forward to seeing that from me and big bro tomorrow, Natsumi-chan!]",
    "vi": "Medium: [Lần tới! Lần tới em sẽ không thảm hại như vậy nữa đâu! Natsumi-chan hãy trông chờ vào màn thể hiện của em và anh hai vào ngày mai nha!]"
  },
  {
    "id": 98,
    "en": "Subaru: [――. Yes. It's reassuring to hear you say that. But I don't think the two of you should…]",
    "vi": "Subaru: [――. Vâng. Nghe chị nói vậy tôi cũng yên tâm phần nào. Nhưng tôi không nghĩ hai người nên…]"
  },
  {
    "id": 99,
    "en": "Subaru tried to continue, saying that they were not required to go along with him.",
    "vi": "Subaru cố gắng nói tiếp, muốn khuyên rằng hai anh em họ không nhất thiết phải đi cùng cậu."
  },
  {
    "id": 100,
    "en": "However, the slurring of his words was easily drowned out by how bright as the sun she was when she exclaimed \"Ah!”, rounding her eyes in amazement.",
    "vi": "Tuy nhiên, những lời ngập ngừng của cậu dễ dàng bị lấn át bởi nụ cười rạng rỡ như ánh mặt trời của cô khi cô thốt lên \"Á!\", đôi mắt tròn xoe đầy kinh ngạc."
  },
  {
    "id": 101,
    "en": "Medium: [I'll go over there and help big bro! It'll be hard for big bro, with how fragile he is, to carry the injured!]",
    "vi": "Medium: [Em phải qua bên kia giúp anh hai đây! Anh hai yếu ớt như vậy, tự mình mang vác người bị thương chắc mệt lắm!]"
  },
  {
    "id": 102,
    "en": "Subaru: [Yeah, right...]",
    "vi": "Subaru: [Ừm, đúng thế thật...]"
  },
  {
    "id": 103,
    "en": "Medium: [Okay, Natsumi-chan, I'll see you later! I'm glad that the masked person didn't fall!]",
    "vi": "Medium: [Vậy nha, Natsumi-chan, gặp lại sau nhé! Thật may là người đeo mặt nạ sắt không bị rơi xuống dưới!]"
  },
  {
    "id": 104,
    "en": "With a big wave of her hand, Medium ran off restlessly.",
    "vi": "Vẫy tay thật mạnh, Medium tất tả chạy đi."
  },
  {
    "id": 105,
    "en": "She began to help Flop, among others, with the injured, and to carry and treat the injured People of Shudraq and Imperial Soldiers alike.",
    "vi": "Cô bắt đầu giúp đỡ Flop cùng những người khác di chuyển người bị thương, chăm sóc và điều trị cho cả người tộc Shudraq lẫn binh lính Đế Quốc."
  },
  {
    "id": 106,
    "en": "The O'Connell siblings did not even receive a word of appreciation, and Subaru felt more and more indebted to them.",
    "vi": "Hai anh em nhà O'Connell thậm chí còn không mưu cầu một lời cảm ơn, điều đó khiến Subaru cảm thấy nợ họ ngày một nhiều hơn."
  },
  {
    "id": 107,
    "en": "He wondered if one day he would be able to repay the favor he had been given.",
    "vi": "Cậu tự hỏi liệu có một ngày mình sẽ trả hết được ân tình to lớn mà họ đã trao hay không."
  },
  {
    "id": 108,
    "en": "Al: [That was a big, cute young girl. As expected of bro, you're living it up across the border, ain’t you?]",
    "vi": "Al: [Một cô bé to lớn và đáng yêu đấy chứ. Quả không hổ danh người anh em, sang bên này biên giới mà vẫn sống phóng khoáng thế nhỉ?]"
  },
  {
    "id": 109,
    "en": "Subaru: [I shudder because I don't have any idea what do you mean with “living it up”, though I agree, Medium-san’s a big, cute person. More importantly….]",
    "vi": "Subaru: [Tôi rùng mình vì chẳng hiểu nổi anh đang ám chỉ cái gì bằng từ \"phóng khoáng\" đâu, cơ mà tôi đồng ý, Medium-san quả thực là một người to lớn và dễ mến. Quan trọng hơn là...]"
  },
  {
    "id": 110,
    "en": "Al: [Hmm? What’s up, bro?]",
    "vi": "Al: [Hửm? Có chuyện gì thế, người anh em?]"
  },
  {
    "id": 111,
    "en": "Subaru glared at Al, who casually cracked his neck and returned the glance with his usual lighthearted demeanor. Subaru then suppressed his anger towards Priscilla, forcing it back down like a rising hunger.",
    "vi": "Subaru lườm Al, kẻ đang thản nhiên bẻ khớp cổ và đáp lại ánh nhìn bằng phong thái nhẹ nhàng thường thấy. Subaru sau đó kìm nén sự tức giận đối với Priscilla, cố đè nó xuống như cơn đói đang cồn cào."
  },
  {
    "id": 112,
    "en": "It was only natural. Subaru's suspicions and questions had been on the back burner for a while now.",
    "vi": "Điều đó cũng dễ hiểu thôi. Những nghi ngờ và câu hỏi của Subaru đã bị gác lại một thời gian dài rồi."
  },
  {
    "id": 113,
    "en": "Al: [Don't look so angry. You're ruining your makeup and wig.]",
    "vi": "Al: [Đừng có trưng ra bộ mặt giận dữ thế chứ. Trông hỏng hết lớp trang điểm với tóc giả bây giờ.]"
  },
  {
    "id": 114,
    "en": "Subaru: [I'm sorry, but my makeup and wig have already been trashed due to a last minute firestorm. Don’t get it wrong, the real Natsumi Schwartz’s much prettier.]",
    "vi": "Subaru: [Xin lỗi nhé, cơ mà lớp trang điểm với bộ tóc giả của tôi vốn đã tả tơi vì cơn bão lửa vừa rồi rồi. Đừng có hiểu lầm, Natsumi Schwartz ngoài đời thực còn xinh đẹp hơn nhiều.]"
  },
  {
    "id": 115,
    "en": "Al: [Natsumi Schwartz, was it?]",
    "vi": "Al: [Natsumi Schwartz à?]"
  },
  {
    "id": 116,
    "en": "When Al heard Subaru's horrible fake name, he cleared his throat with a rumble and gave a laugh pregnant of meaning. With Subaru skeptical of his attitude, he shook his head,",
    "vi": "Khi Al nghe thấy cái tên giả tệ hại của Subaru, gã hắng giọng phát ra một tiếng động trầm đục và nở một nụ cười đầy ẩn ý. Thấy Subaru tỏ vẻ hoài nghi trước thái độ của mình, gã lắc đầu,"
  },
  {
    "id": 117,
    "en": "Al: [No, no. I'm just impressed with your pseudonym. I didn't know you had crossdressing as a hobby, bro.]",
    "vi": "Al: [Không có gì, không có gì. Tôi chỉ ấn tượng với biệt danh của cậu thôi. Không ngờ người anh em lại có sở thích giả gái thế này đấy.]"
  },
  {
    "id": 118,
    "en": "Subaru: [Don't be silly, I'll fill you in on the correct information about Natsumi next time. But more importantly, answer me. ――Why are you and Priscilla here?]",
    "vi": "Subaru: [Đừng có đùa giỡn nữa, lần sau tôi sẽ cho anh biết những thông tin chuẩn xác về Natsumi. Nhưng quan trọng hơn, trả lời tôi đi. ――Tại sao anh và Priscilla lại ở đây?]"
  },
  {
    "id": 119,
    "en": "Al: [――――]",
    "vi": "Al: [――――]"
  },
  {
    "id": 120,
    "en": "Subaru: [It was a big help to us, but there’s something I really don't understand. It's not just the reason as to why you’re in Guaral. It's about why you're in the Empire at all.]",
    "vi": "Subaru: [Sự xuất hiện của hai người quả thực đã giúp chúng tôi rất nhiều, nhưng có một điều tôi thực sự không hiểu. Không chỉ là lý do tại sao các người ở Guaral. Mà là tại sao các người lại có mặt ở Đế Quốc này.]"
  },
  {
    "id": 121,
    "en": "In response to Subaru's serious question, Al closed his mouth softly and fell silent.",
    "vi": "Trước câu hỏi nghiêm túc của Subaru, Al khẽ khép miệng lại rồi im lặng."
  },
  {
    "id": 122,
    "en": "It was an inexplicable intervention, no matter how much he thought about it.",
    "vi": "Đó là một sự can thiệp không thể giải thích nổi, dù cậu có suy nghĩ nhiều thế nào đi chăng nữa."
  },
  {
    "id": 123,
    "en": "It just did not make sense for Priscilla and Al both to be in the Empire with complete impunity. Of course, from their point of view, the same could be said for Subaru, and others too――,",
    "vi": "Việc cả Priscilla và Al ở trong Đế Quốc mà hoàn toàn bình an vô sự thật vô lý. Tất nhiên, từ góc nhìn của họ, điều tương tự cũng có thể nói về Subaru và những người khác――,"
  },
  {
    "id": 124,
    "en": "Subaru: [Let’s put that aside for now. The sooner I learn, the better, though.]",
    "vi": "Subaru: [Tạm thời gác chuyện đó lại đi. Dù sao biết càng sớm càng tốt.]"
  },
  {
    "id": 125,
    "en": "Al: [That's a novel idea, but that's not what you really wanna hear, bro.]",
    "vi": "Al: [Nghe cũng mới mẻ đấy, nhưng đó không phải là điều người anh em thực sự muốn nghe đâu nhỉ.]"
  },
  {
    "id": 126,
    "en": "Subaru: [Cái gì?]",
    "vi": "Subaru: [Cái gì?]"
  },
  {
    "id": 127,
    "en": "Al: [It doesn't matter why me and the Princess are in the Empire. Bro, what you really wanna know, is the way back… from this scary and dangerous country, to the home you know. Ain’t that right?]",
    "vi": "Al: [Việc tôi và Công chúa tại sao ở Đế Quốc không quan trọng. Người anh em à, điều cậu thực sự muốn biết, là đường về… thoát khỏi đất nước đáng sợ và hiểm nguy này để trở về mái nhà quen thuộc của cậu. Có đúng vậy không?]"
  },
  {
    "id": 128,
    "en": "Subaru fell silent this time. The question the other party posed had hit a sore spot.",
    "vi": "Subaru lúc này im bặt. Câu hỏi mà đối phương đặt ra đã đánh trúng vào điểm nhạy cảm của cậu."
  },
  {
    "id": 129,
    "en": "The way to return from the Empire to the Kingdom; that was the information Subaru was seeking the most right now―― Towards that, Subaru possessed zero words of denial.",
    "vi": "Đường trở về từ Đế Quốc tới Vương Quốc; đó là thông tin mà Subaru khao khát có được nhất lúc này―― Đối mặt với chuyện đó, Subaru hoàn toàn không có lời nào để phủ nhận."
  },
  {
    "id": 130,
    "en": "He had his doubts. There were other questions, as well as a nagging sense that he was being treated unreasonably. But wasn't it more important to solve the largest problem right now――,",
    "vi": "Cậu có những hoài nghi của riêng mình. Có những câu hỏi khác, cũng như cảm giác dai dẳng rằng mình đang bị đối xử một cách vô lý. Nhưng chẳng phải giải quyết vấn đề lớn nhất hiện tại mới là quan trọng nhất sao――,"
  },
  {
    "id": 131,
    "en": "Subaru: [Then you have the answer to that question…? A way to get back to the Kingdom of Lugunica, and cross the border of the Empire…?]",
    "vi": "Subaru: [Vậy ra anh đã có câu trả lời cho câu hỏi đó rồi sao…? Một con đường để quay trở lại Vương Quốc Lugunica, và băng qua biên giới Đế Quốc…?]"
  },
  {
    "id": 132,
    "en": "Al: [Nah, I'm sorry. I dunno. I was just trying to get your hopes up.]",
    "vi": "Al: [Không đâu, xin lỗi cậu nhé. Tôi chịu chết. Tôi chỉ đùa chút cho cậu hy vọng thôi.]"
  },
  {
    "id": 133,
    "en": "Subaru: [YOU…!]",
    "vi": "Subaru: [CÁI THẰNG NÀY…!]"
  },
  {
    "id": 134,
    "en": "Al: [Wait, wait, don't be mad! To be precise, I'm talking about how difficult it is to get out of the Empire right now. It's hard enough to get in, let alone trying to escape.]",
    "vi": "Al: [Khoan đã, khoan đã, đừng giận! Chính xác mà nói, tôi đang bàn luận về việc rời khỏi Đế Quốc vào lúc này khó khăn đến nhường nào. Vào được đã khó, chứ đừng nói là trốn ra ngoài.]"
  },
  {
    "id": 135,
    "en": "Subaru was frustrated by the way his emotions were being played with in the palm of Al’s hand.",
    "vi": "Subaru bực bội khi cảm xúc của mình bị xoay như chong chóng trong lòng bàn tay của Al."
  },
  {
    "id": 136,
    "en": "As usual, Al refused to show his true feelings. ――Did Subaru also look like that, from other people’s perspectives? If that's the case, then it would be something for Subaru to reflect on.",
    "vi": "Như thường lệ, Al từ chối để lộ cảm xúc thật của mình. ――Liệu dưới góc nhìn của người khác, trông Subaru cũng có vẻ như vậy chăng? Nếu đúng thế, thì đó là điều Subaru cần tự kiểm điểm."
  },
  {
    "id": 137,
    "en": "In any case――,",
    "vi": "Dẫu sao thì――,"
  },
  {
    "id": 138,
    "en": "Subaru: [You can get in, but you can't get out… And the reason for that is…]",
    "vi": "Subaru: [Vào được nhưng không thể ra… Và lý do cho chuyện đó là…]"
  },
  {
    "id": 139,
    "en": "Al: [Oh, come on, I don't gotta tell you that. It means that there are people who don't want a situation where a certain someone could easily leave the country.]",
    "vi": "Al: [Thôi nào, tôi đâu cần phải huỵch toẹt ra với cậu chứ. Có nghĩa là có những kẻ không muốn một ai đó có thể dễ dàng rời khỏi đất nước này.]"
  },
  {
    "id": 140,
    "en": "Subaru: [――. Does that mean you know Abel's true identity too?]",
    "vi": "Subaru: [――. Điều đó nghĩa là anh cũng đã biết thân phận thực sự của Abel rồi sao?]"
  },
  {
    "id": 141,
    "en": "In response to Al's comment, Subaru naturally arrived at that conclusion.",
    "vi": "Đáp lại lời nhận xét của Al, Subaru tự khắc đi đến kết luận đó."
  },
  {
    "id": 142,
    "en": "He'd heard before that the Vollachian Empire had strict border control, but if the emigration ban was being strengthened under the conditions that Al mentioned, then the reason for that was none other than the existence of Abel―― no, the existence of the Emperor of Vollachia, Vincent Vollachia.",
    "vi": "Cậu từng nghe nói Đế Quốc Vollachia kiểm soát biên giới cực kỳ nghiêm ngặt, nhưng nếu lệnh cấm xuất cảnh đang được siết chặt dưới những điều kiện mà Al đề cập, thì lý do không gì khác ngoài sự tồn tại của Abel―― không, là sự tồn tại của Hoàng đế Vollachia, Vincent Vollachia."
  },
  {
    "id": 143,
    "en": "In order to prevent Abel, who had been ousted from the Emperor’s seat and was now on the run, from escaping to another country, border security was being tightened.",
    "vi": "Để ngăn chặn Abel, người đã bị lật đổ khỏi ngai vàng và đang lẩn trốn, tẩu thoát sang quốc gia khác, an ninh biên giới đang được tăng cường hết mức."
  },
  {
    "id": 144,
    "en": "All that meant was that in order for Subaru and the others to return to the Kingdom of Lugunica, they would need to overcome some major obstacles.",
    "vi": "Tất cả những điều đó đồng nghĩa với việc để Subaru và những người khác quay trở lại Vương Quốc Lugunica, họ sẽ phải vượt qua một số chướng ngại vật khổng lồ."
  },
  {
    "id": 145,
    "en": "Subaru: [Al, if you have more information than we do…]",
    "vi": "Subaru: [Al, nếu anh có nhiều thông tin hơn chúng tôi…]"
  },
  {
    "id": 146,
    "en": "Al: [Oops, I'll have to keep my mouth shut about this. I don't want the Princess to get mad at me for blabbering about unnecessary things. If there's something you wanna talk about, talk to the Princess. However…]",
    "vi": "Al: [Ấy chết, chuyện này tôi phải ngậm chặt miệng thôi. Tôi không muốn Công chúa nổi giận lôi đình vì tôi bép xép những điều thừa thãi đâu. Nếu có chuyện gì cậu muốn bàn bạc, cứ việc nói chuyện với Công chúa. Tuy nhiên...]"
  },
  {
    "id": 147,
    "en": "He put his right hand on the metal clasp of his helmet, and a moment later, it made a gentle click.",
    "vi": "Hắn đặt tay phải lên chiếc khuy kim loại trên mũ bảo hiểm, và một lúc sau, nó phát ra một tiếng cạch nhẹ."
  },
  {
    "id": 148,
    "en": "He then continued,",
    "vi": "Hắn nói tiếp,"
  },
  {
    "id": 149,
    "en": "Al: [I can't guarantee that the Princess’ll be honest about it, though, can I?]",
    "vi": "Al: [Nhưng tôi không dám đảm bảo là Công chúa sẽ thành thật về chuyện đó đâu nhé, đúng không?]"
  },
  {
    "id": 150,
    "en": "△▼△▼△▼△",
    "vi": "△▼△▼△▼△"
  },
  {
    "id": 151,
    "en": "Al: [Princess, I'm back. How's the discussion going over there?]",
    "vi": "Al: [Công chúa, tôi về rồi đây. Cuộc thảo luận bên kia tiến triển thế nào rồi?]"
  },
  {
    "id": 152,
    "en": "Priscilla: [How is it going, you ask? We are not getting anywhere. I have been listening to everyone that has woken up, one-by-one.]",
    "vi": "Priscilla: [Tiến triển thế nào ư? Chẳng đi đến đâu cả. Ta đã lắng nghe từng người một sau khi họ tỉnh dậy rồi.]"
  },
  {
    "id": 153,
    "en": "Al, who waved his hand in an easy-going manner, had only been asking about the progress. Meanwhile, Priscilla replied back to him by resting her chin in her hands.",
    "vi": "Al vẫy tay đầy tùy hứng khi hỏi về tiến độ. Trong khi đó, Priscilla chống cằm đáp lại gã."
  },
  {
    "id": 154,
    "en": "The upper part of the building had been destroyed during Arakiya’s attack, but the foundation remained strong, and fortunately, the contents of the City Hall were still intact.",
    "vi": "Phần trên của tòa nhà đã bị phá hủy trong cuộc tấn công của Arakiya, nhưng nền móng vẫn vững chãi, và may mắn thay, cấu trúc bên trong Tòa Thị Chính vẫn còn nguyên vẹn."
  },
  {
    "id": 155,
    "en": "Thanks to this, they were able to use the conference hall for important discussions with no relocation necessary.",
    "vi": "Nhờ vậy, họ có thể sử dụng phòng hội nghị cho các cuộc thảo luận quan trọng mà không cần phải di chuyển đi nơi khác."
  },
  {
    "id": 156,
    "en": "Abel and Priscilla sat on opposite sides of a large roundtable. In addition, Zikr and his Imperial Soldiers, as well as Kuna and the People of Shudraq, were present.",
    "vi": "Abel và Priscilla ngồi đối diện nhau qua một chiếc bàn tròn lớn. Ngoài ra, Zikr cùng binh lính Đế Quốc của ông, cũng như Kuna và người tộc Shudraq cũng có mặt."
  },
  {
    "id": 157,
    "en": "All of them possessed relatively mild injuries, and if Priscilla's words were true, they had probably already been questioned.",
    "vi": "Tất cả họ đều chỉ bị thương tương đối nhẹ, và nếu lời Priscilla nói là thật, có lẽ họ đều đã được cô ta hỏi qua rồi."
  },
  {
    "id": 158,
    "en": "Kuna: [Yo, you okay, Natsumi?]",
    "vi": "Kuna: [Này, cậu vẫn ổn chứ, Natsumi?]"
  },
  {
    "id": 159,
    "en": "Subaru: [Kuna, I'm glad you're awake. Are you hurt?]",
    "vi": "Subaru: [Kuna, mừng là cô đã tỉnh lại. Có bị thương ở đâu không?]"
  },
  {
    "id": 160,
    "en": "Kuna: [Holly's big frame came in handy. To be honest, I don't feel comfortable in this place, so I want to get the hell out…]",
    "vi": "Kuna: [Thân hình đồ sộ của Holly cũng có ích đấy. Nói thật, tôi không thoải mái khi ở chỗ này chút nào, chỉ muốn biến nhanh khỏi đây thôi…]"
  },
  {
    "id": 161,
    "en": "With a bitter smile, Kuna looked at Priscilla and Abel, who sat on the other side of the room.",
    "vi": "Với một nụ cười cay đắng, Kuna nhìn sang Priscilla và Abel, những người đang ngồi ở phía bên kia căn phòng."
  },
  {
    "id": 162,
    "en": "It was not just the physical threat of being near them, but the overwhelming aura that both of them exuded that made her uncomfortable. Subaru, too, agreed with Kuna's sentiment.",
    "vi": "Không chỉ là mối đe dọa vật lý khi ở gần họ, mà chính khí chất áp đảo mà cả hai tỏa ra mới là thứ khiến cô thấy khó chịu. Subaru cũng hoàn toàn đồng tình với cảm nhận của Kuna."
  },
  {
    "id": 163,
    "en": "Subaru: [I know what you mean. Those two just have a way of taking over the room.]",
    "vi": "Subaru: [Tôi hiểu ý cô mà. Hai người đó luôn có cách chiếm trọn cả căn phòng.]"
  },
  {
    "id": 164,
    "en": "Kuna: [I'm sure Mizelda would've been able to handle them, but since she is still asleep, I have no choice but to stand here and endure it.]",
    "vi": "Kuna: [Tôi chắc chắn là Mizelda thừa sức đối phó với bọn họ, nhưng vì chị ấy vẫn chưa tỉnh lại, tôi chẳng còn cách nào khác ngoài việc đứng đây chịu trận thôi.]"
  },
  {
    "id": 165,
    "en": "Kuna sighed and shook her head, looking at the two of them with a mixture of fear and irritation.",
    "vi": "Kuna thở dài và lắc đầu, nhìn hai người họ với một sự pha trộn giữa e sợ và bực bội."
  }
];

function run() {
  const outPath = path.join(tempDir, 'ch26_part1.json');
  fs.writeFileSync(outPath, JSON.stringify(part1, null, 2), 'utf-8');
  console.log(`Saved ${part1.length} paragraphs to ${outPath}`);
}

run();
