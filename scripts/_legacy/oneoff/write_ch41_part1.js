import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tempDir = path.join(__dirname, 'translation_temp');

const part1 = [
  {
    "id": 1,
    "en": "△▼△▼△▼△",
    "vi": "△▼△▼△▼△"
  },
  {
    "id": 2,
    "en": "Machine Translated By :",
    "vi": "Dịch máy bởi:"
  },
  {
    "id": 3,
    "en": "Proofread By:",
    "vi": "Hiệu đính bởi:"
  },
  {
    "id": 4,
    "en": "Japanese to English Checking By:",
    "vi": "Kiểm dịch Nhật-Anh bởi:"
  },
  {
    "id": 5,
    "en": "Art Sources:",
    "vi": "Nguồn ảnh:"
  },
  {
    "id": 6,
    "en": "※　※　※　※　※　※　※　※　※　※　※　※",
    "vi": "※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※"
  },
  {
    "id": 7,
    "en": "This an edited Machine Translation, which has been checked by at least one Japanese-English Human Translator for quality. This is expected to have a quality dip in accuracy, therefore, if you read this chapter you must take into consideration the tradeoffs between speed and quality. A proper, higher-quality translation for this chapter is in the works by our team, so if you would prefer to wait for it, then feel free to check back at a later date, keeping an eye out on our social media for updates.",
    "vi": "Đây là bản dịch máy đã qua biên tập, được kiểm chứng chất lượng bởi ít nhất một dịch giả Nhật-Anh. Bản dịch này có thể có sai sót nhỏ về độ chính xác, do đó độc giả nên cân nhắc sự đánh đổi giữa tốc độ cập nhật và chất lượng bản dịch. Bản dịch chất lượng cao hơn cho chương này đang được đội ngũ thực hiện, nếu muốn bạn có thể chờ đợi thêm một thời gian và theo dõi cập nhật trên trang truyền thông xã hội của chúng tôi."
  },
  {
    "id": 8,
    "en": "※　※　※　※　※　※　※　※　※　※　※　※",
    "vi": "※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※"
  },
  {
    "id": 9,
    "en": "Subaru: [——Strategy meeting!]",
    "vi": "Subaru: [——Họp chiến thuật nào!]"
  },
  {
    "id": 10,
    "en": "In a room so quiet a pin being dropped could be heard, Subaru raised his short arm along with this suggestion.",
    "vi": "Trong căn phòng yên tĩnh đến mức có thể nghe thấy cả tiếng kim rơi, Subaru giơ cánh tay ngắn ngủn của mình lên cùng với đề xuất này."
  },
  {
    "id": 11,
    "en": "There was no rebuttal to that remark. They all felt the need to discuss their situation.",
    "vi": "Không có lời phản bác nào trước nhận xét đó. Tất cả họ đều cảm thấy cần phải thảo luận về tình cảnh hiện tại của mình."
  },
  {
    "id": 12,
    "en": "The topic of discussion was, of course, the matter of making an appearance at the Crimson Lapis Castle.",
    "vi": "Chủ đề thảo luận đương nhiên là về việc trình diện tại Hồng Ngọc Thành."
  },
  {
    "id": 13,
    "en": "Subaru: [Abel, who wrote the letter, and us, who went to the Castle yesterday, are indispensable…]",
    "vi": "Subaru: [Abel, người đã viết thư, và chúng ta, những người đã đến lâu đài hôm qua, là không thể thiếu...]"
  },
  {
    "id": 14,
    "en": "Looking down at his clothes with their sleeves and hems wrinkled, Subaru ruminated on the request from Yorna that had been left behind by Tanza, who had come as an envoy; a frown formed between his brows.",
    "vi": "Cúi xuống nhìn bộ quần áo nhăn nhúm cả tay lẫn gấu áo của mình, Subaru ngẫm nghĩ về yêu cầu của Yorna mà Tanza, người đến với tư cách là sứ giả, đã để lại; một cái nhíu mày hằn lên giữa hai lông mày cậu."
  },
  {
    "id": 15,
    "en": "He was willing to accept the risk of sending Abel directly to the Castle, but his biggest concern was the condition that he should be accompanied by the messengers from the previous day.",
    "vi": "Cậu sẵn sàng chấp nhận rủi ro khi để Abel trực tiếp đến lâu đài, nhưng mối bận tâm lớn nhất của cậu là điều kiện phải đi cùng các sứ giả của ngày hôm trước."
  },
  {
    "id": 16,
    "en": "Would Yorna appreciate it if he took along the shrunken Subaru, Al and Medium, he wondered. Worst-case scenario, there was a good chance that it would be considered a prank.",
    "vi": "Cậu tự hỏi liệu Yorna có đánh giá cao chuyện này không nếu cậu mang theo Subaru, Al và Medium bị thu nhỏ đi cùng. Trong kịch bản tồi tệ nhất, rất có khả năng chuyện này sẽ bị coi là một trò đùa."
  },
  {
    "id": 17,
    "en": "Alternatively, there was the option of telling Yorna all about their situation and appealing to her heart with sincerity, but——,",
    "vi": "Hoặc giả, cũng có phương án kể toàn bộ tình cảnh cho Yorna nghe và chân thành lay động trái tim cô ấy, nhưng——,"
  },
  {
    "id": 18,
    "en": "Abel: [It is completely devoid of reason to show your hand when you do not know the future actions of your opponent.]",
    "vi": "Abel: [Lật bài ngửa khi không biết hành động tiếp theo của đối phương là hoàn toàn ngu ngốc.]"
  },
  {
    "id": 19,
    "en": "Subaru: [I see… I can't say for sure Yorna’d even listen to me either, considering yesterday's exchange…]",
    "vi": "Subaru: [Tôi hiểu rồi... Xem xét cuộc đối thoại hôm qua thì tôi cũng không dám chắc Yorna sẽ chịu lắng nghe mình nữa...]"
  },
  {
    "id": 20,
    "en": "Abel refused to reveal all his cards, and Subaru agreed with him on that point.",
    "vi": "Abel từ chối để lộ tất cả các quân bài của mình, và Subaru cũng đồng tình với gã ở điểm đó."
  },
  {
    "id": 21,
    "en": "Although he had avoided saying so yesterday, if Subaru wished to describe the impression he had of Yorna, the expression \"evil woman\" would be a valid choice. The way she spoke and acted like a courtesan seemed to Subaru to be that of a temptress with excellent skills in toying with men in the palm of her hand.",
    "vi": "Dù hôm qua đã cố né tránh nói ra điều đó, nhưng nếu Subaru muốn mô tả ấn tượng của mình về Yorna, thì cụm từ \"ác nữ\" sẽ là một lựa chọn chuẩn xác. Cách cô nói năng và hành xử như một kỹ nữ trong mắt Subaru giống như một yêu nữ có kỹ nghệ tuyệt vời trong việc đùa giỡn đàn ông trong lòng bàn tay."
  },
  {
    "id": 22,
    "en": "The danger posed by Yorna went without saying, as, in addition to her position as the Lord of the Demon City, she possessed the aptness to be bestowed the title of Divine General.",
    "vi": "Mối hiểm họa từ Yorna là điều không cần bàn cãi, bởi lẽ ngoài vị thế là Chủ nhân của Ma Thành, cô còn sở hữu thực lực đủ để được ban phong tước hiệu Tướng quân Thần thánh."
  },
  {
    "id": 23,
    "en": "She was the one they had first set their sights on as a potential ally among all of the Nine Divine Generals, however, as Abel had warned, she was not the kind of person to whom they could easily disclose their situation to.",
    "vi": "Cô là người đầu tiên họ nhắm tới làm đồng minh tiềm năng trong số chín Tướng quân Thần thánh, thế nhưng, đúng như Abel đã cảnh báo, cô không phải kiểu người mà họ có thể dễ dàng tiết lộ tình cảnh của mình."
  },
  {
    "id": 24,
    "en": "Al: [If we spammed her full with our circumstances and she then asked about you, we’d be screwed. Considering the cross-dressing and all that, what should we do if she asks something like “You dare lie to me?”.]",
    "vi": "Al: [Nếu chúng ta khai hết tình cảnh cho cô ấy rồi cô ấy hỏi về cậu thì toi đời đấy chứ. Tính cả chuyện giả gái này nọ nữa, lỡ cô ấy hỏi kiểu “Ngươi dám lừa ta sao?” thì tính sao đây.]"
  },
  {
    "id": 25,
    "en": "Subaru: [I don't want to think I’ll be blamed like that, but if that's the case, why don't I just pretend to be Natsumi Schwartz in loli form…?]",
    "vi": "Subaru: [Tôi không muốn nghĩ mình sẽ bị đổ lỗi như vậy đâu, nhưng nếu thế thì sao tôi không giả vờ làm Natsumi Schwartz phiên bản loli luôn nhỉ...?]"
  },
  {
    "id": 26,
    "en": "Taritta: [Wait, please wait. I'm afraid I'll get more and more confused too…]",
    "vi": "Taritta: [Khoan đã, xin hãy khoan đã. Tôi e là mình cũng sẽ ngày càng rối trí mất thôi...]"
  },
  {
    "id": 27,
    "en": "The dilemma of making up a lie to cover up another one was a common one, but the dilemma of having to cover up cross-dressing by still crossdressing after being “infantilized” would probably be unprecedented.",
    "vi": "Thế bí khi phải dựng lên lời nói dối này để che đậy lời nói dối khác là chuyện thường tình, nhưng thế bí phải che đậy việc giả gái bằng cách tiếp tục giả gái sau khi bị \"trẻ con hóa\" thì có lẽ là tiền vô cổ nhân."
  },
  {
    "id": 28,
    "en": "Unlike Al's helmet, the size of the wig could be adjusted, so cross-dressing itself was possible, but whether it was necessary to go that far depended on how the story proceeded.",
    "vi": "Không giống chiếc mũ giáp của Al, kích cỡ của bộ tóc giả có thể điều chỉnh được, nên bản thân việc giả gái là khả thi, nhưng liệu có cần thiết phải đi xa đến mức đó hay không thì còn tùy vào diễn biến tiếp theo."
  },
  {
    "id": 29,
    "en": "Medium: [So, what are we gonna do? The bell of Fire Time’s in about three hours, remember?]",
    "vi": "Medium: [Vậy thì chúng ta sẽ làm gì đây nha? Tiếng chuông của Hỏa Giờ sẽ ngân lên trong khoảng ba tiếng nữa đó nha, nhớ không?]"
  },
  {
    "id": 30,
    "en": "Subaru: […Pretty sure we should go to the Crimson Lapis Castle.]",
    "vi": "Subaru: [...Chắc chắn là chúng ta nên đến Hồng Ngọc Thành rồi.]"
  },
  {
    "id": 31,
    "en": "Medium tilted her head and asked, having hold Louis in her arms while listening.",
    "vi": "Medium nghiêng đầu hỏi, cô vừa bế Louis vừa chăm chú lắng nghe."
  },
  {
    "id": 32,
    "en": "While the two of them were the same size, and Louis was tilting her head to match Medium’s, Subaru had to consult with his inner scales.",
    "vi": "Trong khi hai đứa trẻ có cùng kích thước, và Louis cũng nghiêng đầu bắt chước điệu bộ của Medium, Subaru đành phải tự cân nhắc trong lòng."
  },
  {
    "id": 33,
    "en": "Taritta: [First of all, we don't have the option of not accepting Yorna's invitation, do we?]",
    "vi": "Taritta: [Trước hết, chúng ta không có lựa chọn từ chối lời mời của Yorna đúng không?]"
  },
  {
    "id": 34,
    "en": "Al: [Well, we went to a lotta trouble to have the letter read. If we don’t accept it, the meaning of yesterday's hard work and us here having been shrunken would all disappear.]",
    "vi": "Al: [À thì, chúng ta đã tốn bao công sức để bức thư được đọc mà lị. Nếu không chấp nhận, ý nghĩa của những nỗ lực hôm qua cùng việc chúng ta bị thu nhỏ ở đây sẽ tan thành mây khói hết đấy chứ.]"
  },
  {
    "id": 35,
    "en": "Taritta: [If anything, all that’d be left would be the damage incurred…]",
    "vi": "Taritta: [Có chăng, thứ duy nhất còn lại sẽ là những tổn thất phải gánh chịu...]"
  },
  {
    "id": 36,
    "en": "Nodding at Al and Taritta's words, Subaru believed that retreat was not out of the question.",
    "vi": "Gật đầu trước lời của Al và Taritta, Subaru tin rằng việc rút lui không phải là chuyện bất khả thi."
  },
  {
    "id": 37,
    "en": "Not returning home until the money spent was recouped; this kind of mindset was a cliché for people losing everything through gambling. Cutting one’s losses would be important, in some cases.",
    "vi": "Không chịu ra về cho đến khi gỡ gạc lại được số tiền đã mất; kiểu tâm lý này vốn là lối mòn của những kẻ trắng tay vì cờ bạc. Cắt lỗ là điều quan trọng trong một số trường hợp."
  },
  {
    "id": 38,
    "en": "However, what would be lost in this \"loss-cutting\", was Subaru and the others’ statures.",
    "vi": "Tuy nhiên, thứ sẽ bị mất trong phi vụ \"cắt lỗ\" này lại chính là tầm vóc của nhóm Subaru."
  },
  {
    "id": 39,
    "en": "Subaru: [Should we see this as serious or trivial​…?]",
    "vi": "Subaru: [Chúng ta nên coi chuyện này là hệ trọng hay vặt vãnh đây...?]"
  },
  {
    "id": 40,
    "en": "???: [Gettin’ younger’s better than growin’ ol’. Isn’t that like the secret to eternal life?]",
    "vi": "???: [Trẻ lại thì vẫn tốt hơn là già đi chứ nhỉ. Đó chẳng phải là bí quyết trường sinh bất tử sao?]"
  },
  {
    "id": 41,
    "en": "Subaru: [Yeah, for sure——]",
    "vi": "Subaru: [Ừ, chắc chắn thế rồi——]"
  },
  {
    "id": 42,
    "en": "In a sense, \"rejuvenation\" meant an increase in chances, just like Return By Death.",
    "vi": "Theo một nghĩa nào đó, \"sự trẻ hóa\" đồng nghĩa với việc tăng thêm cơ hội, giống như Return by Death vậy."
  },
  {
    "id": 43,
    "en": "If one could return to their childhood holding the knowledge and experience of an adult, they would be capable of training their physique in the most fitting way possible over time, and so, would be able to retry achieving the goals once given up on.",
    "vi": "Nếu một người có thể quay lại thời thơ ấu mà vẫn giữ được kiến thức cùng trải nghiệm của người lớn, họ sẽ có khả năng rèn luyện thể chất theo cách phù hợp nhất theo thời gian, và nhờ đó, có thể thử lại để đạt được những mục tiêu từng phải từ bỏ."
  },
  {
    "id": 44,
    "en": "With those as the circumstances, it seemed like they’d found some situations which could be leveraged as an advantage, however——,",
    "vi": "Với những tình thế như vậy, có vẻ như họ đã tìm thấy một vài hoàn cảnh có thể tận dụng làm lợi thế, thế nhưng——,"
  },
  {
    "id": 45,
    "en": "???: [——That’d be what you'd think, right? But it's not that simple, is it? It's not something that ya can easily use, ya know?]",
    "vi": "???: [——Ngươi sẽ nghĩ như vậy đúng không? Nhưng chuyện đâu có đơn giản thế đâu nhỉ? Đó không phải là thứ có thể dễ dàng sử dụng đâu nha?]"
  },
  {
    "id": 46,
    "en": "At that moment, a third party interrupted the discussion, and Subaru's breath stopped.",
    "vi": "Ngay khoảnh khắc đó, một bên thứ ba xen vào cuộc thảo luận, khiến nhịp thở của Subaru ngưng bặt."
  },
  {
    "id": 47,
    "en": "——No, Subaru’s was not the only to stop. Everyone present in that room went rigid, unable to move at that moment, and froze at the presence of the owner of the voice.",
    "vi": "——Không, không chỉ mình nhịp thở của Subaru dừng lại. Tất cả những người có mặt trong phòng đều cứng đờ người, không thể cử động vào lúc ấy, và chết lặng trước sự hiện diện của chủ nhân giọng nói."
  },
  {
    "id": 48,
    "en": "However, the person in question was unconcerned about the growing tension in the room,",
    "vi": "Thế nhưng, nhân vật chính lại chẳng hề bận tâm đến bầu không khí căng thẳng đang ngày một leo thang trong căn phòng,"
  },
  {
    "id": 49,
    "en": "???: [I've taken the liberty of makin’ tea for myself, does anyone else want some?]",
    "vi": "???: [Ta tự tiện pha trà cho mình rồi, có ai muốn dùng thêm không nhỉ?]"
  },
  {
    "id": 50,
    "en": "With that question made in a casual tone, he lifted his steamy teacup.",
    "vi": "Cùng với câu hỏi cất lên bằng tông giọng tự nhiên, lão nâng tách trà nóng hổi đang bốc khói nghi ngút lên."
  },
  {
    "id": 51,
    "en": "Taritta: [——Hk!]",
    "vi": "Taritta: [——Hự!]"
  },
  {
    "id": 52,
    "en": "Immediately after, Taritta moved with a bouncing motion, like a spring-loaded doll.",
    "vi": "Ngay lập tức, Taritta chuyển động bật lên như một con búp bê có gắn lò xo."
  },
  {
    "id": 53,
    "en": "She drew her bow in an instant and aimed her arrow at the person who had just appeared—— Olbart Dunkelkenn.",
    "vi": "Cô lập tức giương cung trong chớp mắt và hướng mũi tên thẳng vào người vừa xuất hiện—— Olbart Dunkelkenn."
  },
  {
    "id": 54,
    "en": "Her target was extremely close, there was zero chance she would miss or that he could dodge.",
    "vi": "Mục tiêu của cô ở cự ly cực kỳ gần, hoàn toàn không có khả năng cô bắn trượt hay lão có thể né tránh."
  },
  {
    "id": 55,
    "en": "But Olbart shrugged his shoulders with a nonchalant, “Whoa, whoa”.",
    "vi": "Nhưng Olbart nhún vai với vẻ thờ ơ: “Khoan nào, khoan nào”."
  },
  {
    "id": 56,
    "en": "Olbart: [Don't do it, don't do it. I don't like havin’ pointy things aimed at me. Ya know, ol’ people go ta the bathroom more often than not, and ya wanna scare ‘em into pissin’ their pants? I’m shakin’ in my boots here, yeah?]",
    "vi": "Olbart: [Đừng làm thế, đừng làm thế mà. Ta chẳng thích bị mấy thứ nhọn hoắt chĩa vào mình đâu nha. Biết đấy, người già hay đi vệ sinh hơn bình thường, bộ muốn dọa lão già này tè ra quần luôn sao? Ta đang run cầm cập đây này, hả?]"
  },
  {
    "id": 57,
    "en": "Taritta: [You're kidding me…! Who are you…]",
    "vi": "Taritta: [Đùa giỡn gì thế này...! Ông là ai...]"
  },
  {
    "id": 58,
    "en": "Abel: [——Olbart Dunkelkenn.]",
    "vi": "Abel: [——Olbart Dunkelkenn.]"
  },
  {
    "id": 59,
    "en": "Taritta: [————]",
    "vi": "Taritta: [————]"
  },
  {
    "id": 60,
    "en": "The old man's hostile but unconcerned stature made Taritta’s face flush with anger. Yet, in response to her question, the man in the oni mask, the one who had called out Olbart's name, as if to reign her in.",
    "vi": "Vẻ ngoài mang địch ý nhưng lại vô cùng thản nhiên của lão già khiến khuôn mặt Taritta đỏ bừng vì giận dữ. Thế nhưng, đáp lại câu hỏi của cô, người đàn ông đeo mặt nạ quỷ đã gọi tên Olbart, như một lời kiềm chế cô lại."
  },
  {
    "id": 61,
    "en": "The only one who had not moved at all, Abel, sitting on the sofa while donning his oni mask, exchanged glances with the man. To this, Olbart narrowed his eyes hidden by his thick eyebrows.",
    "vi": "Là người duy nhất hoàn toàn bất động, Abel, vẫn ngồi trên ghế sofa khi đeo chiếc mặt nạ quỷ của mình, trao đổi ánh nhìn với đối phương. Trước tình cảnh này, Olbart nheo đôi mắt ẩn sau hàng lông mày rậm rạp."
  },
  {
    "id": 62,
    "en": "Olbart: [Well, I already confirmed yesterday that I'm a celebrity, so I'm not surprised, but ya got a pretty impressive face, ya know. Where’s that souvenir from?]",
    "vi": "Olbart: [Chà, hôm qua ta đã xác nhận mình là người nổi tiếng rồi nên cũng không ngạc nhiên lắm, cơ mà ngươi có khuôn mặt khá ấn tượng đấy nhỉ. Món quà lưu niệm đó từ đâu ra thế?]"
  },
  {
    "id": 63,
    "en": "Abel: [Spare me the nonsense, old tree. What are you here for?]",
    "vi": "Abel: [Bớt nói nhảm đi, lão già khô héo. Ngươi đến đây làm gì?]"
  },
  {
    "id": 64,
    "en": "Olbart: [It's lonely these days ‘cause young people don't wanna listen to ol’ people's idle chatter. The people in my village are gettin’ better and better at ignorin’ me every day… Kakakakka!]",
    "vi": "Olbart: [Dạo này cô đơn lắm vì đám trẻ chẳng thèm nghe người già nói chuyện phiếm nữa. Người trong làng của ta thì ngày càng giỏi phớt lờ ta hơn qua từng ngày... Kakakakka!]"
  },
  {
    "id": 65,
    "en": "As he talked about the lonely circumstances of his old age, Olbart opened his big mouth and smiled cheerfully.",
    "vi": "Khi kể về hoàn cảnh cô đơn lúc tuổi già của mình, Olbart ngoác chiếc miệng rộng ra cười một cách vui vẻ."
  },
  {
    "id": 66,
    "en": "At the dialogue between Abel and Olbart, the confusion of Subaru and the others on the sidelines slowly melted away. However, it was impossible for them to completely let their guard down.",
    "vi": "Trước cuộc đối thoại giữa Abel và Olbart, sự bối rối của nhóm Subaru ở bên rìa cũng dần tan biến. Tuy nhiên, họ không thể nào hoàn toàn lơi lỏng cảnh giác."
  },
  {
    "id": 67,
    "en": "Medium: [But, Gramps, how did you get in here? It’s not like we weren’t keeping watch…]",
    "vi": "Medium: [Nhưng mà, ông lão ơi, sao ông vào được đây thế? Bọn tôi đâu có lơ là cảnh giác đâu nha...]"
  },
  {
    "id": 68,
    "en": "Olbart: [Oh, doesn’t this lil’ thing look just like the dancer from yesterday. So if Gramps has ta answer, that’s just how it is. Ya let the deergirl thro’, right? And I came in with her.]",
    "vi": "Olbart: [Ồ, nhóc con này trông giống hệt cô vũ công hôm qua vậy ta. Nên nếu lão già này phải trả lời thì mọi chuyện là thế đấy. Các nhóc đã cho cô bé người hươu đi qua đúng không? Và ta đã lẻn vào cùng cô bé.]"
  },
  {
    "id": 69,
    "en": "Medium: [Together? With Tanza-chan?]",
    "vi": "Medium: [Đi cùng nhau sao? Với Tanza-chan á?]"
  },
  {
    "id": 70,
    "en": "Olbart: [Kakakakka! How I got in here’s a secret. Shinobi arts are like my tools of the trade.]",
    "vi": "Olbart: [Kakakakka! Làm thế nào ta vào được đây là bí mật nha. Thuật shinobi giống như cần câu cơm của ta mà lị.]"
  },
  {
    "id": 71,
    "en": "Medium’s simple query was laughed off by Olbart with the purpose of confounding them.",
    "vi": "Thắc mắc đơn giản của Medium bị Olbart cười trừ để làm họ rối trí."
  },
  {
    "id": 72,
    "en": "It was uncertain how serious he was about this, but in any case, the word \"shinobi\" had been mentioned by him himself, and he seemed to have no intention of hiding his true identity.",
    "vi": "Không rõ lão nghiêm túc đến mức nào về chuyện này, nhưng dù sao thì chính miệng lão đã nhắc đến từ \"shinobi\", và lão có vẻ không có ý định che giấu thân phận thực sự của mình."
  },
  {
    "id": 73,
    "en": "In that case, asking him directly about his true intentions for coming to their camp alone would be faster compared to probing him.",
    "vi": "Trong trường hợp đó, hỏi trực tiếp lão về ý đồ thực sự khi đơn độc đến doanh trại của họ sẽ nhanh hơn so với việc dò hỏi."
  },
  {
    "id": 74,
    "en": "Subaru: [So…]",
    "vi": "Subaru: [Vậy...]"
  },
  {
    "id": 75,
    "en": "Olbart: [Hmm?]",
    "vi": "Olbart: [Hửm?]"
  },
  {
    "id": 76,
    "en": "Subaru: [So, what are you really doing here?]",
    "vi": "Subaru: [Vậy rốt cuộc ông đến đây làm gì?]"
  },
  {
    "id": 77,
    "en": "Olbart's /gaze turned to Subaru after the latter asked the purpose of his visit. With that, the old man wrinkled his brow as if thinking for a while,",
    "vi": "Ánh mắt của Olbart chuyển hướng về phía Subaru sau khi cậu hỏi mục đích chuyến viếng thăm của lão. Khi ấy, lão già nhíu mày như đang suy nghĩ một lúc,"
  },
  {
    "id": 78,
    "en": "Olbart: [Ah, ya, was that’cha? Were ya the girl in red from yesterday? I couldn't possibly mistake the dancer-like girl and the one-armed man, so I was really worried.]",
    "vi": "Olbart: [À, hóa ra là nhóc sao? Có phải nhóc là cô gái mặc đồ đỏ hôm qua không? Ta không thể nào nhầm lẫn cô bé giống vũ công và gã cụt tay kia được, nên ta đã lo lắng lắm đấy.]"
  },
  {
    "id": 79,
    "en": "So he confessed, he’d had a hard time figuring out who Subaru was.",
    "vi": "Lão thừa nhận mình đã gặp khó khăn trong việc nhận ra Subaru."
  },
  {
    "id": 80,
    "en": "Hearing this, Subaru's eyes widened, and Al, casually repositioning himself, sneered. He cleared his throat through his mask, his voice more hushed than usual,",
    "vi": "Nghe vậy, Subaru trợn tròn mắt, còn Al thì thản nhiên đổi tư thế rồi cười khẩy. Cậu ta đằng hắng giọng qua lớp vải che mặt, giọng trầm hơn thường lệ,"
  },
  {
    "id": 81,
    "en": "Al: […That's my bro. Even the shinobi head honcho didn't know who you were.]",
    "vi": "Al: […Đó là người anh em của tôi mà. Ngay cả thủ lĩnh shinobi cũng không nhận ra cậu là ai đâu đấy chứ.]"
  },
  {
    "id": 82,
    "en": "Olbart: [Oh, how impressive, how impressive! I wish the people in my village could learn from that transformation. How ‘bout bein’ a lecturer? You'd be welcome.]",
    "vi": "Olbart: [Ồ, ấn tượng thật, ấn tượng thật đấy! Ta ước gì người trong làng ta có thể học hỏi thuật cải trang đó. Làm giảng viên thì thế nào hả? Nhóc sẽ được chào đón lắm đấy.]"
  },
  {
    "id": 83,
    "en": "Subaru: [Unfortunately, Natsumi Schwartz's schedule’s quite full… Maybe I could make some time for you, though.]",
    "vi": "Subaru: [Rất tiếc là lịch trình của Natsumi Schwartz khá bận rộn... Cơ mà tôi vẫn có thể thu xếp chút thời gian cho ông đấy.]"
  },
  {
    "id": 84,
    "en": "Olbart: [Hoho, what’cha mean, “maybe”?]",
    "vi": "Olbart: [Hô hô, ý nhóc “có thể” là sao nhỉ?]"
  },
  {
    "id": 85,
    "en": "He moistened his lips at how cross-dressing had unexpectedly landed quite the catch, and then, noticing the sensation of thirst in his throat, Subaru narrowed his eyes.",
    "vi": "Cậu liếm môi trước việc chiêu giả gái bất ngờ thu hoạch được một mẻ lưới lớn, rồi nhận ra cảm giác khát khô nơi cổ họng, Subaru nheo mắt lại."
  },
  {
    "id": 86,
    "en": "Regardless of how much he believed in this nonsense, he had to take full advantage of the opportunity to speak directly with Olbart. For the time being, about the abnormal situation that had befallen Subaru and the others.",
    "vi": "Bất luận cậu có tin vào những lời vô nghĩa này đến mức nào, cậu cũng phải tận dụng triệt để cơ hội nói chuyện trực tiếp với Olbart. Trước mắt là về tình cảnh dị thường đang ập lên nhóm Subaru."
  },
  {
    "id": 87,
    "en": "As per Abel’s guess, the mastermind behind this phenomenon was none other than the old man in front of him.",
    "vi": "Theo suy đoán của Abel, kẻ chủ mưu đứng sau hiện tượng này không ai khác ngoài lão già trước mặt."
  },
  {
    "id": 88,
    "en": "Subaru: [If you got any idea who’s the reason we’re like this, be honest…]",
    "vi": "Subaru: [Nếu ông biết lý do tại sao chúng tôi lại thành ra thế này thì hãy trung thực khai ra...]"
  },
  {
    "id": 90,
    "en": "Subaru: [————]",
    "vi": "Subaru: [————]"
  },
  {
    "id": 89,
    "en": "Olbart: [Oh, that. I've done that myself. They’re interesting, aren’t they, the shinobi arts?]",
    "vi": "Olbart: [Ồ, chuyện đó hả. Chính tay ta làm đấy. Thú vị thật đúng không, thuật shinobi ấy?]"
  },
  {
    "id": 91,
    "en": "Without any bargaining, Olbart admitted that he had been the one to do it.",
    "vi": "Chẳng cần chút thương thảo nào, Olbart thừa nhận chính lão là người đã thực hiện chuyện đó."
  },
  {
    "id": 92,
    "en": "His statement drowning out the rest of his words, Subaru took a small gulp. And the old man laughed viciously as he watched Subaru stiffen,",
    "vi": "Tuyên bố của lão lấn át tất cả những lời còn lại, khiến Subaru khẽ nuốt nước bọt. Và lão già cười một cách hiểm độc khi nhìn Subaru cứng đờ người,"
  },
  {
    "id": 93,
    "en": "Olbart: [If I killed’cha by accident, I wouldn’t be able ta hear anythin’ ya got ta say, and I'd be left with a lotta trouble, ya know? That bein’ the case, there are many ways to squeeze info outta someone without killin’. ——Interestin’, isn't it?]",
    "vi": "Olbart: [Nếu lỡ tay giết các nhóc thì ta sẽ không thể nghe được bất cứ điều gì các nhóc muốn nói, và sẽ gặp rắc rối to đấy nhỉ? Đã vậy thì có rất nhiều cách để moi thông tin từ ai đó mà không cần mạng sống của họ. ——Thú vị mà, phải không?]"
  },
  {
    "id": 94,
    "en": "Olbart bluntly spoke those words, and sipped his warm tea.",
    "vi": "Olbart thản nhiên nói những lời đó và nhấp một ngụm trà ấm."
  },
  {
    "id": 95,
    "en": "△▼△▼△▼△",
    "vi": "△▼△▼△▼△"
  },
  {
    "id": 96,
    "en": "——The “infantilization” that had struck Subaru, Al, and Medium.",
    "vi": "——Sự \"trẻ con hóa\" đã giáng xuống Subaru, Al và Medium."
  },
  {
    "id": 97,
    "en": "From the testimony of the one acquainted with the Nine Divine Generals, Abel, it was almost certain that the offender was Olbart.",
    "vi": "Từ lời chứng thực của Abel, người quen biết với chín Tướng quân Thần thánh, gần như chắc chắn thủ phạm chính là Olbart."
  },
  {
    "id": 98,
    "en": "However, for it to be affirmed directly by the person himself was a different kind of surprise. Especially if the other party was not offended at all and was proud of it.",
    "vi": "Tuy nhiên, việc được xác nhận trực tiếp từ chính thủ phạm lại mang đến một cú sốc khác biệt. Nhất là khi đối phương chẳng hề tỏ ra kiêng dè gì mà trái lại còn lấy làm tự hào."
  },
  {
    "id": 99,
    "en": "Everyone: [————]",
    "vi": "Mọi người: [————]"
  },
  {
    "id": 100,
    "en": "Olbart: [Oioi, we shouldn’t look at each other all scary. Didn't’cha learn that ol’ people are to be cared for, not tortured?]",
    "vi": "Olbart: [Ơ kìa, chúng ta không nên nhìn nhau bằng ánh mắt đáng sợ thế chứ. Các nhóc không được học là phải kính lão đắc thọ chứ không phải hành hạ người già sao?]"
  },
  {
    "id": 101,
    "en": "The tension in the room was rising again, and both Al and Medium, as well as Taritta, who had not lowered her bow from the onset, were gradually changing their positions.",
    "vi": "Căng thẳng trong phòng lại tăng lên, cả Al, Medium lẫn Taritta, người vẫn chưa hạ cung tên ngay từ đầu, đều đang dần dịch chuyển vị trí."
  },
  {
    "id": 102,
    "en": "In particular, Al was prepared to block the entrance door and obstruct Olbart's escape route.",
    "vi": "Đặc biệt là Al đã chuẩn bị sẵn sàng để chặn cửa ra vào nhằm cản đường thoát của Olbart."
  },
  {
    "id": 103,
    "en": "However, Al, with his shrunken body, could not handle his cherished sword at will, and so could not aspire to go far in stopping the shinobi head honcho that was always on the prowl.",
    "vi": "Thế nhưng, Al với cơ thể bị thu nhỏ không thể sử dụng thanh kiếm yêu thích của mình theo ý muốn, nên khó lòng tiến xa trong việc ngăn cản thủ lĩnh shinobi luôn rình rập."
  },
  {
    "id": 104,
    "en": "Louis: [Uu…]",
    "vi": "Louis: [Uu...]"
  },
  {
    "id": 105,
    "en": "Olbart: [You're a lil’ girl who’s got nothin’ ta do with me, aren't’cha? Then ya lookin’ at me like that’s kinda hurtful. Don't’cha like the sweet smell of ol’ men?]",
    "vi": "Olbart: [Nhóc là cô bé chẳng liên quan gì đến ta đúng không nhỉ? Vậy mà nhóc nhìn ta như thế là hơi đau lòng đấy nha. Nhóc không thích mùi hương dễ chịu của người già sao?]"
  },
  {
    "id": 106,
    "en": "Abel: [Do not play games with me, Olbart. I shall ask you once more. What brings you here?]",
    "vi": "Abel: [Đừng đùa giỡn với ta nữa, Olbart. Ta hỏi ngươi lần nữa. Ngươi đến đây làm gì?]"
  },
  {
    "id": 107,
    "en": "Abel hurled a few words at the side of Olbart, who was trying to win over the snarling Louis. Taking a glance at Olbart, the latter looking over his shoulder, Abel expressed a sharp spirit that could be transmitted even through the oni mask,",
    "vi": "Abel ném những lời lạnh lùng về phía Olbart, kẻ đang cố gắng lấy lòng cô bé Louis đang gầm gừ. Liếc nhìn Olbart khi lão ngoảnh lại nhìn qua vai, Abel tỏa ra một nhuệ khí sắc bén có thể truyền qua cả chiếc mặt nạ quỷ,"
  },
  {
    "id": 108,
    "en": "Abel: [You have heard the thoughts of Yorna Mishigure, Lord of this Demon City. She recognized them as envoys. She has made it clear that they shall not be touched.]",
    "vi": "Abel: [Ngươi đã nghe ý định của Yorna Mishigure, Chủ nhân của Ma Thành này rồi. Cô ấy công nhận họ là sứ giả. Cô ấy đã nói rõ rằng không ai được phép đụng đến họ.]"
  },
  {
    "id": 109,
    "en": "Subaru: [T-that's right! Don't touch us, that's what yesterday's game was about! We were risking our lives too! And yet, this treatment’s different from what was promised to us!] [1]",
    "vi": "Subaru: [Đ-Đúng thế! Không được đụng vào chúng tôi, đó là luật chơi của trò chơi ngày hôm qua mà! Chúng tôi cũng đã liều mạng rồi! Ấy thế mà, cách đối đãi này lại khác xa lời hứa hẹn với chúng tôi! [1]]"
  },
  {
    "id": 110,
    "en": "Olbart: [Oioi, you're gettin’ all excited and mixed up, ya know.]",
    "vi": "Olbart: [Ơ kìa, nhóc đang quá khích và nhầm lẫn lung tung rồi đấy nha.]"
  },
  {
    "id": 111,
    "en": "Taking advantage of Abel's aggressive move, Subaru also reiterated Yorna's statement from the previous day. It was as Olbart had said, Subaru had gone as far as to even return to the state of mind of yesterday; regardless, that still did not change the truth.",
    "vi": "Tận dụng thế tiến công của Abel, Subaru cũng lặp lại tuyên bố của Yorna ngày hôm trước. Đúng như lời Olbart nói, Subaru thậm chí đã quay lại trạng thái tinh thần của ngày hôm qua; bất luận thế nào, điều đó vẫn không làm thay đổi sự thật."
  },
  {
    "id": 112,
    "en": "Yorna had recognized Subaru’s group as messengers, and Tanza had made it clear that she would not allow anyone to interfere with them.",
    "vi": "Yorna đã công nhận nhóm của Subaru là sứ giả, và Tanza đã nói rõ rằng cô bé sẽ không để bất kỳ ai can thiệp vào họ."
  },
  {
    "id": 113,
    "en": "To disregard that, was to express hostility toward Yorna.",
    "vi": "Phớt lờ điều đó chẳng khác nào bày tỏ sự thù địch đối với Yorna."
  },
  {
    "id": 114,
    "en": "Abel: [Of course, if your intent is to destroy the Demon City, you shall not give that the slightest consideration.]",
    "vi": "Abel: [Tất nhiên, nếu ý đồ của ngươi là hủy diệt Ma Thành, ngươi sẽ không cần bận tâm đến điều đó dù chỉ một chút.]"
  },
  {
    "id": 115,
    "en": "Subaru: […Now that you mention it​.]",
    "vi": "Subaru: [...Nghe anh nói vậy thì.]"
  },
  {
    "id": 116,
    "en": "With Abel's additional words, Subaru's heated blood ran cold.",
    "vi": "Trước những lời bồi thêm của Abel, dòng máu nóng của Subaru bỗng chốc nguội lạnh."
  },
  {
    "id": 117,
    "en": "In fact, the fake Emperor's faction, to whom Olbart belonged, had given up the right to negotiate with Yorna to Subaru and his party. Should they view it as a bad move, to just flip the table out of anger was also within their possibilities.",
    "vi": "Thực tế, phe Hoàng đế giả mà Olbart đầu quân đã nhường quyền đàm phán với Yorna cho nhóm Subaru. Nếu họ coi đó là một bước đi tồi, thì việc lật bàn trong cơn thịnh nộ cũng là điều hoàn toàn nằm trong khả năng của họ."
  },
  {
    "id": 118,
    "en": "In that case, it would be inevitable that he would clash head-on with Yorna, who was esteemed as one of the Nine Divine Generals, in several senses of the meaning——,",
    "vi": "Trong trường hợp đó, việc đụng độ trực diện với Yorna, người được kính trọng là một trong chín Tướng quân Thần thánh, sẽ là điều không thể tránh khỏi theo nhiều tầng nghĩa——,"
  },
  {
    "id": 119,
    "en": "Abel: [If you are to challenge it with the intent of destroying it, you shall avoid destruction. Of course, you shall come out of it with some damage.]",
    "vi": "Abel: [Nếu ngươi thách thức với ý đồ hủy diệt nó, ngươi sẽ tránh được sự diệt vong. Tất nhiên, ngươi cũng sẽ phải gánh chịu một số tổn hại.]"
  },
  {
    "id": 120,
    "en": "Olbart: […Well, that foxgirl can be tricky ta deal with. However, it's no fun ta have that masked young’un see right through ya.]",
    "vi": "Olbart: […Chà, đối phó với cô nàng cáo đó quả thực khá rắc rối đấy nhỉ. Cơ mà bị cậu nhóc mặt nạ kia đi guốc trong bụng thế này thì chẳng vui chút nào.]"
  }
];

fs.writeFileSync(path.join(tempDir, 'ch41_part1.json'), JSON.stringify(part1, null, 2), 'utf-8');
console.log('Saved ch41_part1.json');
