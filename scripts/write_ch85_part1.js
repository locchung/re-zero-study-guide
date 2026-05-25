import fs from 'fs'
import path from 'path'

const part1 = [
  {
    "en": "※　※　※　※　※　※　※　※　※　※　※　※",
    "vi": "※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※"
  },
  {
    "en": "Translated By :",
    "vi": "Dịch bởi:"
  },
  {
    "en": "Art Sources :",
    "vi": "Nguồn minh họa:"
  },
  {
    "en": "※　※　※　※　※　※　※　※　※　※　※　※",
    "vi": "※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※"
  },
  {
    "en": "ALL RIGHTS BELONG TO TAPPEI NAGATSUKI, THE ORIGINAL AUTHOR OF RE:ZERO STARTING A LIFE IN A DIFFERENT WORLD FROM ZERO, THIS IS A TRANSLATION OF THE FREE JAPANESE WEB NOVEL INTO ENGLISH",
    "vi": "MỌI BẢN QUYỀN THUỘC VỀ TAPPEI NAGATSUKI, TÁC GIẢ GỐC CỦA RE:ZERO - BẮT ĐẦU LẠI Ở THẾ GIỚI KHÁC TỪ CON SỐ KHÔNG. ĐÂY LÀ BẢN DỊCH PHI THƯƠNG MẠI TỪ WEB NOVEL TIẾNG NHẬT SANG TIẾNG ANH."
  },
  {
    "en": "JAPANESE WEB NOVEL SOURCE",
    "vi": "NGUỒN WEB NOVEL TIẾNG NHẬT"
  },
  {
    "en": "※　※　※　※　※　※　※　※　※　※　※",
    "vi": "※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※"
  },
  {
    "en": "ーーThe『Greatest Knight』, to name himself so entailed courage.",
    "vi": "——Để tự xưng tụng bản thân là 『Kỵ Sĩ Ưu Tú Nhất』, dứt định đòi hỏi một lòng dũng cảm phi thường vĩ đại."
  },
  {
    "en": "He indeed took pride in being called so, extolled so by others.",
    "vi": "Anh thực sự lấy làm kiêu hãnh tự hào khi được người đời xưng tụng gọi tên, được thảy mọi người tán dương ca tụng dường ấy."
  },
  {
    "en": "However, never had there been even a single instance wherein he had labelled himself as the \"Utmost\" \"Finest\".",
    "vi": "Thế nhưng, quyết chả bao giờ có lấy một lần anh tự gắn cho mình cái danh xưng “Tột Đỉnh” hay “Ưu Tú Nhất”."
  },
  {
    "en": "He possessed the conceit of having lived days of stockpiling unsparing hard work, and diligent devotion to learning.",
    "vi": "Anh sở hữu niềm kiêu hãnh tích lũy qua những ngày tháng không tiếc công sức nỗ lực kiên trì, và sự tận tụy cần mẫn học hỏi."
  },
  {
    "en": "However, in his incompetent and inexperienced destiny, he was naught but surrounded by unending excelling pioneers, comrades commanding respect, and juniors worthy of admiration.",
    "vi": "Tuy nhiên, trong vận mệnh còn non nớt và bất tài của mình, anh vốn chẳng là gì ngoài kẻ được bao quanh bởi vô vàn vị tiền bối kiệt xuất không ngừng đi trước, những chiến hữu đáng kính trọng, và những hậu bối xứng đáng để ngưỡng mộ."
  },
  {
    "en": "Though vexing, he considered that to be bliss.",
    "vi": "Dẫu có chút tủi hổ, anh vẫn coi đó là một niềm hạnh phúc tột cùng."
  },
  {
    "en": "To be acknowledged by someone, ought to be reward for strenuous efforts and diligence.",
    "vi": "Được ai đó công nhận, dứt định phải là phần thưởng xứng đáng cho những nỗ lực phi thường và lòng tận tụy."
  },
  {
    "en": "Much less, in the endeavour to be acknowledged by everyone, the strenuous efforts and diligence must be such devotion that they are regarded as extraordinary, that everybody is amazed by solely those.",
    "vi": "Phương chi, trong nỗ lực để được thảy mọi người công nhận, những cố gắng cật lực và sự siêng năng ấy phải là sự tận hiến đến mức được coi là phi thường, khiến ai nấy đều phải kinh ngạc trầm trồ chỉ bởi điều đó."
  },
  {
    "en": "ーーHad his self, truly worked hard enough to be worthy of that.",
    "vi": "——Liệu bản thân anh, đã thực sự nỗ lực đủ nhiều để xứng đáng với điều ấy chưa."
  },
  {
    "en": "He certainly did possess the conceit of having lived days of stockpiling unsparing hard work, and diligent devotion to learning.",
    "vi": "Anh dứt định sở hữu lòng tự tôn của một kẻ đã sống qua những ngày tháng tích lũy nỗ lực không ngừng nghỉ, và sự tận hiến siêng năng học hỏi."
  },
  {
    "en": "However, did he transcend boundaries? Did he polish and refine oneself every day until he had exhausted all of his strength? Inspired by the strenuous efforts of others, did he pledge further hard work to his ideals?",
    "vi": "Tuy nhiên, liệu anh đã vượt qua những giới hạn? Liệu anh đã mài giũa và hoàn thiện bản thân mỗi ngày cho đến khi kiệt quệ hết thảy sức lực? Được truyền cảm hứng từ những nỗ lực không ngừng của người khác, liệu anh có thề nguyện sẽ nỗ lực hơn nữa vì lý tưởng của mình?"
  },
  {
    "en": "He shall answer his own question, by himself.",
    "vi": "Anh sẽ tự mình trả lời câu hỏi của chính mình."
  },
  {
    "en": "Julius Juukulius, had indeed accomplished that.",
    "vi": "Julius Juukulius, thực sự đã đạt được điều đó."
  },
  {
    "en": "Transcending boundaries, polishing and refining oneself until he exhausted all of his strength, with inspiration from the strenuous efforts of others he pledged further hard work to his ideals.",
    "vi": "Vượt qua mọi giới hạn, mài giũa và rèn luyện bản thân cho đến khi vắt kiệt chút sức tàn cuối cùng, và được truyền cảm hứng từ những nỗ lực phi thường của kẻ khác, anh đã thề nguyện hiến dâng nhiều nỗ lực hơn nữa cho lý tưởng của riêng mình."
  },
  {
    "en": "ーーHence, before the existence who stood as the pinnacle of the『Sword』, he held his head high with confidence.",
    "vi": "——Chính vì lẽ đó, đứng trước sự hiện diện của kẻ tọa lạc tại đỉnh cao tối thượng của 『Kiếm』, anh vẫn tự tin ngẩng cao đầu."
  },
  {
    "en": "Julius: “ーーI am the『Greatest Knight』, Julius Juukulius. The sword of the kingdom, that shall slash you down.”",
    "vi": "Julius: “——Tôi là 『Kỵ Sĩ Ưu Tú Nhất』, Julius Juukulius. Thanh kiếm của vương quốc, kẻ sẽ chém hạ ngài.”"
  },
  {
    "en": "Reid: \"ーーーー\"",
    "vi": "Reid: “————”"
  },
  {
    "en": "Grasping the hem of his mantle, Julius bowed, and ahead of him the『Sword Saint』stood silently.",
    "vi": "Nắm lấy vạt áo choàng, Julius cúi chào cung kính, và ở phía trước anh, 『Kiếm Thánh』 đứng lặng im không một tiếng động."
  },
  {
    "en": "He closed his other eye, which was not concealed by the eye patch, and did not look at Julius. But, silently bracing his bulky, burly arms, he pondered about something.",
    "vi": "Lão nhắm nghiền con mắt còn lại không bị che bởi tấm băng bịt mắt, quyết chẳng thèm nhìn Julius lấy một cái. Nhưng, lặng lẽ khoanh hai cánh tay hộ pháp, to lớn của mình lại, lão dường như đang ngẫm nghĩ điều gì đó."
  },
  {
    "en": "However, his pondering did not last for long. By simply their short fellowship until now, it was clear that he was the one to possess the disposition of being utmost unsuited to ponderation.",
    "vi": "Thế nhưng, sự trầm ngâm của lão không kéo dài được lâu. Chỉ qua khoảng thời gian ngắn ngủi tiếp xúc từ trước đến nay, rõ ràng lão là kẻ sở hữu bản tính hoàn toàn không phù hợp với việc suy tư ngẫm nghĩ."
  },
  {
    "en": "Thusーー,",
    "vi": "Và rồi——,"
  },
  {
    "en": "Reid: \"Ah, ah, a~a~a~a~h, aaaaaaaaaaaaahーー bloody hell!!\"",
    "vi": "Reid: “Ái chà chà, a~a~a~a~h, aaaaaaaaaaaaah—— phiền phức chết đi được!!”"
  },
  {
    "en": "With an intense scratch of his head, the『Sword Saint』Reid potently stomped the floor once.",
    "vi": "Với cú gãi đầu bứt tai đầy thô bạo, 『Kiếm Thánh』 Reid dậm mạnh chân xuống sàn một phát."
  },
  {
    "en": "Upon that singular blow, the clear floor of the second layer quaked as if fissuring. Though Echidna, who was watching over the confrontation of the two, drew her body back, Julius stood firm, unwavering.",
    "vi": "Chỉ với một cú dậm chân duy nhất ấy, mặt sàn trong suốt của tầng thứ hai rung chuyển dữ dội tựa như sắp nứt toác ra. Dù Echidna, người đang quan sát cuộc đối đầu của hai người, khẽ lùi cơ thể lại phía sau, Julius vẫn đứng vững vàng, không hề lung lay."
  },
  {
    "en": "Witnessing that, Reid clicked his tongue with a \"Tch\".",
    "vi": "Chứng kiến điều đó, Reid tặc lưỡi phát ra tiếng “Chậc”."
  },
  {
    "en": "Reid: \"Appearances, appearances, appearances...... yeah, appearances aye. You really do be speakin' shit like my follower. What an insufferable bastard ya're, you.\"",
    "vi": "Reid: “Vẻ bề ngoài, vẻ bề ngoài, vẻ bề ngoài...... ừ, đúng là vẻ bề ngoài rồi lị. Ngươi thực sự toàn nói mấy lời nhảm nhí hệt như kẻ hầu cận của ta vậy đấy. Ngươi quả là một tên khốn chả ưa nổi mà, ngươi ấy.”"
  },
  {
    "en": "Julius: \"Though unfortunately I am not acquainted with him, I must offer my sympathies to the man whom you say is your follower.\"",
    "vi": "Julius: “Dù thật tiếc là tôi không được quen biết người đó, nhưng tôi xin gửi lời chia buồn sâu sắc tới người mà ngài gọi là kẻ hầu cận của mình.”"
  },
  {
    "en": "Reid: \"Hah? Who the hell said my follower's a dude. Takin' bastards 'round ain't gonna be amusin' in the first place. The follower I'm talkin' 'bout's a woman. She's got a nice face, but damn's her reasonin' annoyin'.\"",
    "vi": "Reid: “Hả? Thằng quái nào bảo hầu cận của ta là đàn ông thế. Dẫn theo mấy thằng đực rựa bên mình vốn dĩ chả có gì vui vẻ cả lị. Kẻ hầu cận ta đang nói đến là một nữ nhân kia. Con bé đó có gương mặt khá khẩm đấy, nhưng cái mớ lý lẽ của nó thì phiền toái phát bực.”"
  },
  {
    "en": "Julius: \"A female...... then, what is the similitude between myself and her which you speak of?\"",
    "vi": "Julius: “Một nữ nhân...... Vậy thì, điểm tương đồng giữa tôi và cô ấy mà ngài đang nói tới là gì?”"
  },
  {
    "en": "Reid: \"Ah? Don'tcha make me say it 'gain and 'gain.\"",
    "vi": "Reid: “Hả? Đừng có bắt ta phải nói đi nói lại nhiều lần lị.”"
  },
  {
    "en": "As wrinkles appeared on his snout, Reid expressed a ferocious smile akin to a shark.",
    "vi": "Khi những nếp nhăn hiện lên trên khóe mũi, Reid nở một nụ cười dữ tợn tựa như loài cá mập hung tợn."
  },
  {
    "en": "And, unfastening the locked fold of his arms and knocking his cheeks with his hands,",
    "vi": "Rồi, lão buông hai cánh tay đang khoanh chặt ra và lấy tay vỗ vỗ vào má mình,"
  },
  {
    "en": "Reid: \"Stenchy reasonin', and havin' a good face.\"",
    "vi": "Reid: “Cái mớ lý thuyết thối hoắc, và có một gương mặt ưa nhìn đấy lị.”"
  },
  {
    "en": "Julius: \"ーーーー\"",
    "vi": "Julius: “————”"
  },
  {
    "en": "Reid: \"Hell, so ya won't even get irritated. Damn uncute...... well, 's fine.\"",
    "vi": "Reid: “Khốn kiếp, thế mà ngươi dẫu chả thèm nổi giận chút nào. Thật chả đáng yêu gì cả...... thôi, thế cũng được.”"
  },
  {
    "en": "Snorting his nose in response to Julius' destitute reaction, Reid magnificently crackled the bones of his neck. Afterwards, through his blue eye, he observed Juliusーー no, not merely Julius, but his environs too.",
    "vi": "Khịt mũi trước phản ứng vô cảm của Julius, Reid bẻ cổ kêu răng rắc đầy oai phong. Sau đó, thông qua con mắt màu xanh lam duy nhất của mình, lão quan sát Julius—— không, không chỉ riêng Julius, mà còn cả không gian xung quanh anh nữa."
  },
  {
    "en": "The quivering fleeting lights seemingly encircling Julius, their brilliance had strengthened compared to what it was earlier.",
    "vi": "Những đốm sáng lung linh, dao động đang bao quanh Julius, ánh hào quang của chúng đã trở nên rực rỡ hơn nhiều so với trước kia."
  },
  {
    "en": "Above all, this would be his first time making these girls debut before Reid this way.",
    "vi": "Trên hết, đây dứt định là lần đầu tiên anh để những cô gái này ra mắt trước Reid theo cách này."
  },
  {
    "en": "Julius: \"My buds...... no, my lovely maidens, do you perhaps have anything to object regarding them?\"",
    "vi": "Julius: “Những nụ hoa của tôi...... không, những thiếu nữ khả ái của tôi, liệu ngài có điều gì muốn phản đối về họ chăng?”"
  },
  {
    "en": "Reid: \"Hah, nothin'. Nice women ain't of any regard to their race. Unfortunately, I ain't interested in women I can't sleep with. ーーYou, would've grown stronger had ya broken yer shell, ya know?\"",
    "vi": "Reid: “Hử, chả có gì cả. Nữ nhân xinh đẹp thì chủng tộc nào cũng thế thôi lị. Tiếc thay, ta quyết chả hứng thú với những nữ nhân mà mình không thể ngủ cùng. ——Ngươi ấy, đáng lẽ đã có thể trở nên mạnh mẽ hơn nếu biết phá vỡ cái vỏ bọc của mình rồi đấy lị.”"
  },
  {
    "en": "Julius: \"If you say so, then a path like that certainly may have existed.\"",
    "vi": "Julius: “Nếu ngài đã nói vậy, thì một con đường như thế dứt định đã từng tồn tại.”"
  },
  {
    "en": "Something like offering advice to juniors, was fickleness unimaginable considering Reid's personality.",
    "vi": "Việc đưa ra lời khuyên cho hậu bối thế này vốn là một sự tùy hứng không tưởng nếu xét đến tính cách bộc trực của Reid."
  },
  {
    "en": "For him to have done so, must be due to Reid's own moodiness and him deeming Julius' desperate form, who naught but clung to sword, to be wasteful.",
    "vi": "Lão làm vậy dứt định là do sự hứng chí nhất thời của bản thân và việc lão cảm thấy dáng vẻ tuyệt vọng của Julius, kẻ chẳng biết làm gì ngoài bấu víu vào thanh kiếm, thật là một sự lãng phí vô ích."
  },
  {
    "en": "If you are going to cling to the sword anyways, then take a stance paying no heed to appearances. ーーThat had been the attitude and resolve he sought for Julius, and that too had been a realizable path.",
    "vi": "Nếu đằng nào cũng bấu víu vào kiếm, thì hãy chọn lấy một tư thế chẳng màng đến thể diện hay vẻ ngoài. ——Đó dẫu là thái độ và quyết tâm mà lão tìm kiếm ở Julius, và đó cũng là một con đường hoàn toàn khả thi."
  },
  {
    "en": "Howeverーー,",
    "vi": "Thế nhưng——,"
  },
  {
    "en": "Julius: \"I, decided to walk this path. Or possibly, instead baring what is my true self, as you say, may make me stronger.\"",
    "vi": "Julius: “Tôi đã quyết định bước đi trên con đường này. Hoặc giả, thay vì phơi bày bản ngã thực sự như ngài nói, có lẽ sẽ giúp tôi mạnh mẽ hơn chăng.”"
  },
  {
    "en": "Julius was aware that should he himself not be powerfully conscious of it, he would naturally become that way.",
    "vi": "Julius tự ý thức được rằng nếu bản thân không kiểm soát nó một cách mạnh mẽ, anh sẽ tự nhiên trở nên như thế."
  },
  {
    "en": "A sudden instant, a narrow exchange of blows, should a solitary bit of his rind distinguish between life and death, that the face of the true Julius would come out.",
    "vi": "Trong một khoảnh khắc chớp nhoáng, một cuộc giao tranh sát sao, nếu chỉ một vết rách nhỏ trên lớp vỏ bọc phân định giữa sự sống và cái chết, thì bản mặt thực sự của Julius dứt định sẽ lộ ra."
  },
  {
    "en": "However, that spoke of a scenario wherein he would not be powerfully conscious of it. ーーHe shall, no longer waver.",
    "vi": "Tuy nhiên, đó là kịch bản xảy ra khi anh không hoàn toàn làm chủ được ý thức của mình. ——Anh sẽ không bao giờ lung lay nữa."
  },
  {
    "en": "Julius: \"Hereby I declare. I shall think through my self as a knight. Furthermore, instead of the path you tried to guide me to, I shall become myself who excels in all fronts.\"",
    "vi": "Julius: “Tôi xin tuyên bố tại đây. Tôi sẽ quán triệt bản ngã của mình như một hiệp sĩ thực thụ. Hơn thế nữa, thay vì con đường mà ngài cố gắng dẫn dắt tôi, tôi sẽ trở thành một bản thể ưu tú trên mọi phương diện.”"
  },
  {
    "en": "Reid: \"Huh, the hell kinda reasonin' makes ya say yer gonna be doin' that, you.\"",
    "vi": "Reid: “Hử, cái loại lý lẽ quái quỷ gì khiến ngươi tự tin bảo sẽ làm được điều đó thế hả, ngươi kia.”"
  },
  {
    "en": "Julius: \"It is obvious. ーーThe knight I lay my trust in, is the personification of ideals. He is noble, just, and stronger than any other. Then, it is inevitable that I, who name myself as a knight, must be that way as well.\"",
    "vi": "Julius: “Điều đó thật hiển nhiên. ——Vị hiệp sĩ mà tôi đặt trọn niềm tin chính là hiện thân của những lý tưởng tối cao. Người ấy cao quý, chính trực, và mạnh mẽ hơn bất kỳ ai khác. Vậy thì, lẽ tất nhiên là tôi, kẻ tự xưng là hiệp sĩ, cũng phải trở nên như vậy.”"
  },
  {
    "en": "Reid: \"ーーHah.\"",
    "vi": "Reid: “——Hử.”"
  },
  {
    "en": "Even by his own word, a ludicrous reasoning, an illogical line of argument and claims, high-handed arbitrariness a natural subject of ridicule.",
    "vi": "Ngay cả theo lời tự nhận của anh, đó cũng là một lập luận nực cười, một chuỗi lập luận và tuyên bố vô lý, sự độc đoán kiêu ngạo vốn dĩ là trò cười cho thiên hạ."
  },
  {
    "en": "However, even if Reid overtly expressed his rage upon hearing that, he simply displayed his sharp fangs and laughed, directing no disgust or disdain whatsoever.",
    "vi": "Thế nhưng, dù Reid có bày tỏ sự tức giận rõ ràng khi nghe điều đó, lão cũng chỉ để lộ những chiếc răng nanh sắc nhọn và cười lớn, quyết chẳng hề tỏ ra ghê tởm hay khinh miệt chút nào."
  },
  {
    "en": "Andーー,",
    "vi": "Và rồi——,"
  },
  {
    "en": "Reid: \"Gonna make ya cry.\"",
    "vi": "Reid: “Ta dứt định sẽ khiến ngươi phải khóc lóc thảm hại đấy lị.”"
  },
  {
    "en": "Articulating so, Reid tossed aside the chopstick he held, and before Julius, who was gazing in wonder, took a great leap towards the rear and stood back. Subsequently, he steadily extended his hand towards the side.",
    "vi": "Nói đoạn, Reid vứt phăng đôi đũa đang cầm trên tay đi, và trước sự kinh ngạc của Julius, lão nhảy một bước cực dài về phía sau và đứng vững. Kế đó, lão từ từ duỗi tay sang một bên."
  },
  {
    "en": "What his huge palm was gripping to, was the stipulated sword planted into the white layer.",
    "vi": "Thứ mà lòng bàn tay hộ pháp của lão đang nắm lấy chính là thanh kiếm quy định được cắm sẵn trên mặt sàn trắng toát."
  },
  {
    "en": "Reid Astrea, originally supposed to have merely lent his existence as the trial taker of the watchtower.",
    "vi": "Reid Astrea, kẻ ban đầu vốn dĩ chỉ cho mượn sự hiện diện của mình như một người canh giữ thử thách của tháp canh."
  },
  {
    "en": "By some twist of fate, he detached the arrangement of the tower through intense self-consciousness, and finally, by overwriting the flesh body of the raiding Sin Archbishop of『Gluttony』, had fulfilled even a psuedo-revival.",
    "vi": "Nhờ một trò đùa nào đó của số phận, lão đã tự mình tách khỏi sự sắp đặt của tòa tháp bằng ý thức mạnh mẽ phi thường, và cuối cùng, bằng cách ghi đè lên thể xác của tên Đại Giám Mục Tội Lỗi của 『Phàm Ăn』 đang đột kích, lão thậm chí đã hoàn thành một màn hồi sinh giả tạo."
  },
  {
    "en": "In this condition, in this position whereby he did not need to abide by the tower's『Trial』, only then did Reid draw out the stipulated sword for the first time, abiding by his original role.",
    "vi": "Trong tình cảnh này, tại vị thế mà lão chẳng cần phải tuân theo 『Thử Thách』 của tòa tháp nữa, đây mới là lần đầu tiên Reid thực sự rút thanh kiếm quy định ra, tuân thủ đúng vai trò ban đầu của mình."
  },
  {
    "en": "Namelyーー,",
    "vi": "Nghĩa là——,"
  },
  {
    "en": "Julius: \"ーーGain his forgiveness, by hand of the fool who has reached the heavenly sword.\"",
    "vi": "Julius: “——Hãy nhận lấy sự dung thứ của người, bằng bàn tay của kẻ ngu muội đã chạm tới thiên kiếm.”"
  },
  {
    "en": "Reid: \"That's my line ya know...... well, though I totally forgot 'bout it.\"",
    "vi": "Reid: “Đó vốn là câu thoại của ta mà lị...... cơ mà, dẫu ta đã quên béng nó đi mất rồi.”"
  },
  {
    "en": "Julius: \"I thought so, thus I stated it in your stead. ーーI challenge you.\"",
    "vi": "Julius: “Tôi đã nghĩ vậy, nên tôi mới nói thay cho ngài. ——Tôi xin được thách đấu với ngài.”"
  },
  {
    "en": "Reid: \"Like hell I'd give ya forgiveness, ya dunce. Gonna make ya cry ugly.\"",
    "vi": "Reid: “Dung thứ thế quái nào được mà dung thứ hả, gã ngốc kia. Ta sẽ khiến ngươi phải khóc lóc thảm hại tột cùng.”"
  },
  {
    "en": "Before Julius, who had his knight sword braced in his front, Reid crudely pointed the sword he had drawn out.",
    "vi": "Trước mặt Julius, người đang thủ sẵn thanh kiếm hiệp sĩ trước ngực, Reid thô bạo chỉ thẳng thanh kiếm vừa rút ra về phía anh."
  },
  {
    "en": "No intervals, whatsoever. Assuming a relaxed stance, having reached the extremes, the ultimate swordsmanーー",
    "vi": "Quyết chẳng có lấy một kẽ hở nào. Vào tư thế đầy thư thái, kẻ đã chạm tới cảnh giới tối thượng, vị kiếm sĩ tột đỉnh——"
  },
  {
    "en": "ーーThe pinnacle of all who wielded the sword, the『Sword Saint』Reid Astrea.",
    "vi": "——Đỉnh cao tối thượng của thảy những kẻ múa kiếm, 『Kiếm Thánh』 Reid Astrea."
  },
  {
    "en": "Julius: \"And nowーー\"",
    "vi": "Julius: “Và giờ đây——”"
  },
  {
    "en": "Reid: \"However ya'd like.\"",
    "vi": "Reid: “Thế nào cũng được tuốt lị.”"
  },
  {
    "en": "Julius: \"ーーEn Garde!!\"",
    "vi": "Julius: “——Chuẩn bị!!”"
  },
  {
    "en": "Placing faith in the chivalry shaping oneself, Julius Juukulius tackled the『Sword Saint』with the entirety of his might.",
    "vi": "Đặt niềm tin trọn vẹn vào tinh thần hiệp sĩ định hình nên bản ngã của mình, Julius Juukulius lao vào tấn công 『Kiếm Thánh』 với toàn bộ thực lực."
  },
  {
    "en": "△▼△▼△▼△",
    "vi": "△▼△▼△▼△"
  },
  {
    "en": "Both his body and heart, felt light.",
    "vi": "Cả thể xác lẫn tâm hồn anh, đều cảm thấy nhẹ bẫng."
  },
  {
    "en": "In a non-figurative sense, that was the might of enhancement enveloping Julius, as he swung the knight sword.",
    "vi": "Theo nghĩa đen, đó chính là sức mạnh cường hóa bao bọc lấy Julius khi anh vung thanh kiếm hiệp sĩ."
  },
  {
    "en": "Needless to say, the stability of mind had an immense influence in battle.",
    "vi": "Chẳng cần phải bàn cãi, sự bình ổn trong tâm trí có một tầm ảnh hưởng vô cùng to lớn trong thực chiến."
  },
  {
    "en": "Upon consideration, to state Julius had been in an insecure condition ever since he had arrived at this Pleiades Watchtowerーー no, ever since he had gotten his self's『Name』plundered in the Watergate City, would be unerring.",
    "vi": "Xét cho cùng, nhận định rằng Julius đã luôn ở trong trạng thái bất an dao động kể từ khi đặt chân đến Tháp Canh Pleiades này—— không, kể từ khi anh bị cướp đi 『Danh Tánh』 của bản thân tại Thành Phố Nước Watergate, dứt định là hoàn toàn chính xác."
  },
  {
    "en": "Of course, Julius admonished and restrained his own self as much as possible, forbidding it from showing on his face.",
    "vi": "Lẽ dĩ nhiên, Julius đã tự răn đe và kìm nén bản thân nhiều nhất có thể, quyết chẳng để điều đó lộ ra trên gương mặt."
  },
  {
    "en": "Self-control anyone would appraise as akin to rationality of steelーー however, it was not something that had been praised.",
    "vi": "Sự tự chủ mà bất kỳ ai cũng sẽ đánh giá là tựa như lý trí bằng thép—— tuy nhiên, đó không phải là điều đáng được ca ngợi."
  },
  {
    "en": "Furthermore, forbidding the inferior form of his self from showing on his face, the consequence of having deceived his comrades and even his own self, had led to the unsightly defeat of successive, consecutive losses ever since their arrival at this tower.",
    "vi": "Hơn nữa, việc giấu giếm dáng vẻ hèn kém của bản thân không cho lộ ra ngoài, hậu quả của việc lừa dối các chiến hữu và thậm chí là chính mình, đã dẫn đến những thất bại thảm hại liên tiếp kể từ khi họ đặt chân tới tòa tháp này."
  },
  {
    "en": "Julius ought to have placed his trust in others, to begin with.",
    "vi": "Ngay từ đầu, Julius đáng lẽ phải đặt trọn niềm tin vào người khác."
  },
  {
    "en": "Losing his presence of mind due to the impact of having the existence of his self forgotten, whilst merely pitying his self who had been broken off from the other person's world, he failed to notice what he should have placed faith in the utmost.",
    "vi": "Mất đi sự bình tĩnh do cú sốc khi bị lãng quên sự tồn tại, trong khi chỉ biết tự thương hại bản thân kẻ bị tách biệt khỏi thế giới của người khác, anh đã không nhận ra thứ mà mình nên gửi gắm niềm tin nhiều nhất."
  },
  {
    "en": "Were the people whom Julius cherished, whom he trusted in, whom he had pledged his loyalty to, whom he had entrusted his back to, such humans who would simply disregard Julius Juukulius, who had been broken off from their world without their notice.",
    "vi": "Liệu những người mà Julius trân quý, những người anh tin tưởng, những người anh đã thề nguyện trung thành, những người anh đã phó thác tấm lưng của mình, có phải là những kẻ sẽ dễ dàng gạt bỏ Julius Juukulius, người bị tách rời khỏi thế giới của họ mà họ không hề hay biết."
  },
  {
    "en": "ーーAbsolutely not, he could assert so.",
    "vi": "——Quyết chắc chắn là không, anh có thể khẳng định như thế."
  },
  {
    "en": "Hence, what Julius ought to have done had been simply one thing.",
    "vi": "Chính vì vậy, điều duy nhất mà Julius nên làm vốn dĩ chỉ có một việc."
  },
  {
    "en": "Appealing with sincerity, he should have indicated his affection by his volition. ーーThe way he had done so, with his buds.",
    "vi": "Bày tỏ tấm chân tình của mình, anh đáng lẽ phải biểu đạt tình cảm bằng chính ý chí của bản thân. ——Tựa như cách anh đã làm với những nụ hoa của mình."
  },
  {
    "en": "Julius: \"I should have retied the severed bonds. One who is nobody, can become anybody...... for nobody but I myself, am I living witness to that!\"",
    "vi": "Julius: “Đáng lẽ tôi phải thắt lại những sợi dây liên kết đã đứt gãy. Một kẻ vô danh vô tính dẫu có thể trở thành bất kỳ ai...... bởi lẽ không ai khác ngoài chính tôi, là nhân chứng sống cho điều đó!”"
  },
  {
    "en": "The child of a commoner who was nobody, had become even the utmost attractive and cool knight in this world.",
    "vi": "Đứa con của một kẻ thường dân vốn chẳng là gì, đã trở thành hiệp sĩ bảnh bao và ưu tú bậc nhất thế gian này."
  },
  {
    "en": "Julius, who had become nobody, was supposed to have become somebody once again.",
    "vi": "Julius, kẻ đã biến thành hư vô, dứt định sẽ trở thành một ai đó một lần nữa."
  },
  {
    "en": "Andーー,",
    "vi": "Và rồi——,"
  },
  {
    "en": "Julius: \"No matter how many chances should I be given, I would surely still be charmed by the seemingly blazing young man that day, perceive ideals on the back of one who stood for the knight, and challenge you, the pinnacle of the『Sword』after allーー!\"",
    "vi": "Julius: “Dù cho tôi có được trao bao nhiêu cơ hội đi chăng nữa, tôi chắc chắn vẫn sẽ bị mê hoặc bởi chàng trai rực cháy ngày hôm đó, nhìn thấy lý tưởng trên tấm lưng của một kẻ đại diện cho hiệp sĩ, và sau cùng vẫn sẽ thách thức ngài, đỉnh cao tối thượng của 『Kiếm』 mà thôi——!”"
  },
  {
    "en": "Reid: \"Blabberin' 'bout shit, damn cheeky of ya, you!!\"",
    "vi": "Reid: “Nói mấy lời nhảm nhí thối hoắc, láo xược thật đấy hả, ngươi!!”"
  },
  {
    "en": "Upon Julius' decapitating slash, who had his determination set on the tip of his sword, Reid bellowed whilst matching in with the same sword strikes.",
    "vi": "Trước nhát chém chí mạng của Julius, người đã gửi gắm quyết tâm sắt đá vào mũi kiếm, Reid gầm lên trong khi tung ra những đường kiếm tương ứng để khắc chế."
  },
  {
    "en": "As the entirety of his body lay subject to those sword moves and sword might, Julius straitened his yellow hued eyes and felt wonder.",
    "vi": "Khi toàn bộ cơ thể chìm đắm trong những đường kiếm và uy thế kiếm đạo ấy, Julius nheo đôi mắt mang sắc hoàng kim của mình lại và cảm thấy vô cùng kinh ngạc."
  },
  {
    "en": "Restarts included, this would be the fourth time he was battling Reid this way.",
    "vi": "Nếu tính cả những lần hồi sinh thử lại, đây đã là lần thứ tư anh chiến đấu với Reid theo cách này."
  },
  {
    "en": "The first challenge, and the immediately subsequent defeat. This time, with moreover the confinement of the narrowed watchtower's entirety, and having successfully recontracted with his buds, was the fourth time.",
    "vi": "Cuộc thách thức đầu tiên, và thất bại ngay sau đó. Lần này, cộng thêm sự chật hẹp bao trùm toàn bộ tòa tháp canh, và việc tái ký khế ước thành công với những nụ hoa của mình, là lần thứ tư."
  },
  {
    "en": "Within all of this, Reid using a weapon aside from chopsticksーー though referring to chopsticks as a weapon had exceeding room for doubt, anyhow, him swinging something aside from chopsticks would be for the first time.",
    "vi": "Trong suốt tất cả những chuyện này, việc Reid sử dụng một món vũ khí khác ngoài đôi đũa—— mặc dù việc coi đôi đũa là vũ khí thì cực kỳ đáng nghi ngại, nhưng dù sao đi nữa, việc lão vung một thứ khác ngoài đôi đũa là lần đầu tiên."
  },
  {
    "en": "And in these moments, with the pinnacle of the『Sword』, the『Sword Saint』having wholly gripped the sword, he thought.",
    "vi": "Và trong những khoảnh khắc này, trước đỉnh cao tối thượng của 『Kiếm』, khi 『Kiếm Thánh』 đã hoàn toàn nắm chặt thanh kiếm thực sự, anh thầm nghĩ."
  },
  {
    "en": "Julius: \"Your sword power hasn't changed, compared to the time you were using chopsticks......!\"",
    "vi": "Julius: “Kiếm lực của ngài vẫn quyết không hề thay đổi so với lúc ngài sử dụng đũa......!”"
  },
  {
    "en": "Reid: \"Li~ke I jus' said, damn it. The reason I'm strong ain't 'cause I swing the sword. The only reason I'm strong, is jus' 'cause I'm strong.\"",
    "vi": "Reid: “Như ta đã nói rồi lị, khốn kiếp thật chứ. Lý lý do duy nhất khiến ta mạnh mẽ quyết chả phải vì ta vung kiếm đâu lị. Lý do duy nhất ta mạnh, chỉ đơn giản vì ta mạnh mà thôi lị.”"
  },
  {
    "en": "Defending against the sword strikes being casually swung down overhead, once his knees creaked, a pursuit aimed for him from directly below. Narrowly tiding over the attack he had borne witness to for the first time, Julius flew towards the rear upon the impact.",
    "vi": "Chống đỡ những đường kiếm thản nhiên giáng xuống từ trên đầu, khi đầu gối anh rên rỉ chịu đựng, một đòn truy kích nhắm thẳng vào anh từ ngay phía dưới. Vừa vặn vượt qua được đòn tấn công lần đầu tiên được tận mắt chứng kiến, Julius bay ngược về phía sau do phản lực từ cú va chạm."
  },
  {
    "en": "Reid trailed that, not by breaking into a pursuit, but by simply taking a few long steps.",
    "vi": "Reid bám sát theo sau, không phải bằng cách lao vào truy sát dữ dội, mà chỉ đơn giản bằng cách bước vài bước dài thong thả."
  },
  {
    "en": "Though one would grow to suspect his peculiar gait, there was nothing special about it.",
    "vi": "Dẫu người ta dứt định sẽ nghi ngờ dáng đi kỳ lạ của lão, thực chất chả có điều gì đặc biệt ở nó cả."
  },
  {
    "en": "By merely stepping forth upon the thought of catching up with the drawn back opponent, readily inventing and realizing a new form of gait unlike any of its previously existing schools was simply Reid's ability.",
    "vi": "Chỉ bằng cách bước tới với suy nghĩ muốn bắt kịp đối thủ đang lùi lại, việc tự dưng phát minh và hiện thực hóa một dáng đi mới mẻ khác biệt hoàn toàn với bất kỳ môn phái nào từ trước đến nay đơn giản chính là thực lực thiên tài của Reid."
  },
  {
    "en": "Just as Reid himself had averred it, that was simply a matter of his norm exceeding『Existence』.",
    "vi": "Đúng như chính Reid đã khẳng định, đó chỉ đơn giản là một vấn đề thuộc về 『Sự Hiện Diện』 vượt ngoài mọi quy chuẩn thông thường của lão."
  },
  {
    "en": "Reid: \"Do ya wanna cry now?\"",
    "vi": "Reid: “Giờ thì ngươi đã muốn khóc lóc chưa hả?”"
  },
  {
    "en": "Julius: \"ーー. No, the feeling of challenging a legend is livening up my chest!\"",
    "vi": "Julius: “——. Không, cảm giác được thách thức một huyền thoại đang khiến lồng ngực tôi rạo rực rực cháy!”"
  },
  {
    "en": "Not a bluff, Julius responded with truthfulness whilst being impelled.",
    "vi": "Quyết chẳng phải lời khoác lác, Julius thành thật đáp lại trong khi đang bị dồn ép dữ dội."
  },
  {
    "en": "Yes, that was true. The one before his eyes was Reid Astrea.",
    "vi": "Phải, đó là sự thật. Kẻ trước mắt anh chính là Reid Astrea."
  },
  {
    "en": "By his legends, simply how many times had Julius had gotten his heart throbbing, eyes twinkling, and had admired him, yearned for him.",
    "vi": "Nhờ những truyền thuyết về lão, chả biết đã bao nhiêu lần Julius cảm thấy trái tim mình đập liên hồi, đôi mắt lấp lánh ánh hào quang, và đã ngưỡng mộ lão, khao khát được như lão dường nào."
  },
  {
    "en": "Meeting that person in reality, though he had been precisely astonished by his personality, his strength had been the very ideals he admired and yearned for.",
    "vi": "Khi diện kiến con người ấy ngoài đời thực, dù anh đã vô cùng kinh ngạc bởi tính cách quái đản của lão, sức mạnh của lão lại chính là lý tưởng mà anh hằng ngưỡng mộ và khao khát."
  },
  {
    "en": "Henceforth, simply how wasteful had his self been in what he engaged in.",
    "vi": "Từ nay về sau, bản thân anh đã từng lãng phí biết bao nhiêu cơ hội quý giá trong những chuyện mình làm."
  },
  {
    "en": "All whilst possessing the opportunity to exchange words, exchange swords, exchange beliefs and conviction with himーー,",
    "vi": "Tất cả trong khi có được cơ hội quý báu để đàm đạo, giao đấu kiếm đạo, trao đổi niềm tin và đức tin sắt đá với lão——,"
  },
  {
    "en": "Julius: \"Hah.\"",
    "vi": "Julius: “Ha.”"
  },
  {
    "en": "While crossing swords with the『Genuine One』, Julius exhaled upon the arrival of an unforeseen thought.",
    "vi": "Trong lúc so kiếm với 『Kẻ Đích Thực』, Julius khẽ thở hắt ra khi một suy nghĩ bất ngờ chợt lóe lên trong tâm trí."
  },
  {
    "en": "Exceedingly out-of-place, however, the anticipation made his heart throb, truly delightful and piquant.",
    "vi": "Vô cùng lạc điệu trong hoàn cảnh này, tuy nhiên, sự kỳ vọng ấy lại khiến trái tim anh đập rộn ràng, thực sự thú vị và phấn khích tột cùng."
  },
  {
    "en": "Reid: \"The hell ya smilin' 'bout?\"",
    "vi": "Reid: “Ngươi đang cười cái quái gì thế hả lị?”"
  },
  {
    "en": "Julius: \"Nothing, a thought simply dawned on me. ーーOnce I fulfill my objective here and return to the service of my lord, that I shall challenge my friend, Reinhardt.\"",
    "vi": "Julius: “Không có gì, chỉ là một ý nghĩ vừa chợt nảy ra trong đầu tôi mà thôi. ——Một khi tôi hoàn thành mục tiêu tại đây và trở lại phụng sự chủ nhân của mình, tôi dứt định sẽ thách đấu với người bạn của tôi, Reinhardt.”"
  },
  {
    "en": "Julius pronounced his idea upon Reid's inquiry.",
    "vi": "Julius tuyên bố ý định của mình trước câu hỏi của Reid."
  },
  {
    "en": "Never even once had Julius competed against Reinhardt in their sword skills until now. On the contrary, before it was determined that they would be in differing camps in the Royal Election, the idea of vying with each other over anything at all had never occurred to him.",
    "vi": "Từ trước đến nay, quyết chưa một lần nào Julius đọ sức kiếm thuật với Reinhardt. Trái lại, trước khi chuyện họ sẽ thuộc về các phe cánh đối địch nhau trong cuộc Tuyển Chọn Vương Quyền được quyết định, ý nghĩ tranh đua với nhau về bất kỳ điều gì dẫu chưa bao giờ xuất hiện trong tâm trí anh."
  },
  {
    "en": "ーーThe regret of never having attempted to gain an equal standing.",
    "vi": "——Sự hối tiếc vì chưa bao giờ thử nỗ lực đứng ngang hàng với cậu ấy."
  },
  {
    "en": "That too, had been one of the reasons why Julius served Anastasia, and faced in the Royal Election.",
    "vi": "Đó dẫu cũng là một trong những lý do khiến Julius phụng sự Anastasia, và dũng cảm đối mặt với cuộc Tuyển Chọn Vương Quyền."
  },
  {
    "en": "However, even had he not possessed those sentiments, Julius still would have been enchanted by Anastasia's immense talent, wished to see the same dreams as her, and stood at the same place.",
    "vi": "Thế nhưng, ngay cả khi không có những tình cảm ấy, Julius chắc chắn vẫn sẽ bị mê hoặc bởi tài năng xuất chúng của Anastasia, mong muốn được ngắm nhìn cùng một giấc mơ như cô, và đứng ở cùng một nơi với cô."
  },
  {
    "en": "Thus, from the very beginning, never had he been in need of dull excuses or roundabout stances.",
    "vi": "Chính vì vậy, ngay từ lúc ban đầu, anh quyết chẳng bao giờ cần tới những lý do bao biện tẻ nhạt hay những tư thế vòng vo giả tạo."
  },
  {
    "en": "From the very beginning, he simply should have taken two wooden swords and headed over to Reinhardt.",
    "vi": "Ngay từ đầu, anh chỉ cần cầm lấy hai thanh kiếm gỗ và đi thẳng tới tìm Reinhardt là được rồi."
  },
  {
    "en": "Once in the past, Reinhardt and the strongest swordsman of the Vollachia Empire had crossed swords.",
    "vi": "Một lần trong quá khứ, Reinhardt và vị kiếm sĩ mạnh nhất của Đế Quốc Vollachia đã từng so tài kiếm đạo với nhau."
  },
  {
    "en": "That day, when everyone in the parade ground had possessed wild enthusiasm toward the atmosphere of the sword, Julius too felt warmth in his chest.",
    "vi": "Ngày hôm đó, khi thảy mọi người trên thao trường đều rạo rực sự nhiệt huyết cuồng nhiệt hướng về bầu không khí của kiếm đạo, Julius dẫu cũng cảm thấy lồng ngực mình ấm áp vô cùng."
  },
  {
    "en": "For that had been, the answerーー.",
    "vi": "Bởi lẽ đó chính là, câu trả lời——."
  },
  {
    "en": "Reid: \"Hah, that's a name I ain't ever heard of. Who the hell's this nobody?\"",
    "vi": "Reid: “Hử, đó là cái tên ta quyết chưa từng nghe qua bao giờ lị. Tên vô danh tiểu tốt nào thế hả?”"
  },
  {
    "en": "Julius: \"He is your descendant. And, along with being the present day『Sword Saint』, my friend.\"",
    "vi": "Julius: “Cậu ấy là hậu duệ của ngài. Và, cùng với việc là 『Kiếm Thánh』 của thời đại đương kim, cậu ấy là bạn của tôi.”"
  },
  {
    "en": "Reid: \"Kah! The kid of my kid, jus' an outsider by that point god damn. I ain't gonna notice him even if I see him by some roadside.\"",
    "vi": "Reid: “Khịt! Đứa con của con ta, đến tầm đấy thì dứt định chỉ là người dưng nước lã mà thôi lị, khốn kiếp thật chứ. Ta dẫu chả thèm để mắt đến nó ngay cả khi chạm mặt ở bên đường đâu lị.”"
  },
  {
    "en": "Intertwining sword moves and kicking moves, Reid elucidated his irresponsibility whilst snorting his nose.",
    "vi": "Kết hợp nhuần nhuyễn những đường kiếm và những cú đá, Reid giải bày sự vô trách nhiệm của mình trong khi khịt khịt mũi đầy khinh miệt."
  },
  {
    "en": "Finding faint refutation in that dissertation, Julius attempted to open his mouth whilst exchanging swordsーー,",
    "vi": "Tìm thấy chút lý lẽ phản bác yếu ớt trong cuộc đối thoại ấy, Julius định mở miệng nói trong khi vẫn đang giao kiếm——,"
  },
  {
    "en": "Reid: \"I'm startin' to get fed up of talkin' 'bout outsiders. You, do ya wanna have a damn chat with me?\"",
    "vi": "Reid: “Ta bắt đầu thấy chán ngấy việc bàn tán về mấy kẻ người dưng rồi đấy lị. Ngươi ấy, bộ muốn đàm đạo với ta dữ vậy hả?”"
  },
  {
    "en": "Julius: \"ーー. Though I will not deny that, I shall deny.\"",
    "vi": "Julius: “——. Dù không phủ nhận điều đó, tôi vẫn xin phép từ chối.”"
  },
  {
    "en": "Reid: \"ーーーー\"",
    "vi": "Reid: “————”"
  },
  {
    "en": "Julius: \"If only there was the time, I would have liked to exchange words with you, let it be for two days or for three days. However, at present the time for that purpose, regrettably, does not exist. Telling me to make haste, my back is being pushed. Thusーー\"",
    "vi": "Julius: “Nếu có thời gian, tôi rất muốn được đàm đạo với ngài, dẫu có là hai ngày hay ba ngày đi chăng nữa. Tuy nhiên, đáng tiếc thay vào lúc này, thời gian cho mục đích ấy quyết không hề tồn tại. Có người đang hối thúc tôi nhanh lên, tấm lưng tôi đang được đẩy về phía trước. Chính vì thế——”"
  },
  {
    "en": "With distance opened in between, Reid lifted his cheeks whilst viewing Julius. In Reid's blue eye was Julius' form, augmenting its luminosity.",
    "vi": "Khi khoảng cách giữa two người được mở rộng, Reid nhếch khóe má trong khi quan sát Julius. Trong con mắt màu xanh lam duy nhất của Reid là bóng hình của Julius, ánh hào quang của anh đang ngày càng tăng lên rực rỡ."
  },
  {
    "en": "The swirling six coloured lights intermingled, gently commencing to paint an aurora, a rainbow.",
    "vi": "Sáu đốm sáng lung linh xoay tròn hòa quyện vào nhau, dịu dàng bắt đầu vẽ nên một dải cực quang, một cầu vồng tuyệt mỹ."
  },
  {
    "en": "Andーー,",
    "vi": "Và rồi——,"
  },
  {
    "en": "Julius: \"ーーAl Clauseria!!\"",
    "vi": "Julius: “——Al Clauseria!!”"
  }
]

fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'translation_temp', 'ch85_part1.json'),
  JSON.stringify(part1, null, 2),
  'utf-8'
)
console.log('Successfully wrote ch85_part1.json!')
