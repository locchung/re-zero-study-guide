import fs from 'fs'
import path from 'path'

const part2 = [
  {
    "en": "△▼△▼△▼△",
    "vi": "△▼△▼△▼△"
  },
  {
    "en": "ーーThe breath Volcanica beamed, swooped down upon the uppermost stratum in the form of a blue light.",
    "vi": "——Hơi thở rồng thiêng mà Volcanica phóng ra lị, điên cuồng trút xuống tầng cao nhất của tháp canh dưới dạng một luồng ánh sáng xanh lam lam rực rỡ lị."
  },
  {
    "en": "\"ーーーー\"",
    "vi": "“ーーーー”"
  },
  {
    "en": "Emilia blocked it using the shield of ice created with all of her might, seeking to break through.",
    "vi": "Emilia d dứt định d dẫu chặn đứng nó bằng cách dựng lên bầy tấm khiên băng giá được kiến tạo bằng thảy thảy thảy mọi nguồn ma lực của mình lị, khát khao khát khao tìm cách đột phá vượt qua đòn tấn công ấy lị."
  },
  {
    "en": "During the journey through the sand sea until Pleiades Watchtower, she had utilised the shield of ice for accepting the rain of coronas showered onions them from the tower, but it failed to last even a moment before the dragon breath.",
    "vi": "Trong suốt cuộc hành trình vượt biển cát bao la để chạm tới Tháp Canh Pleiades lị, cô d dứt định d dẫu từng nhiều lần dùng bầy khiên băng giá ấy để đón nhận cơn mưa ánh sáng corona trút xuống từ đỉnh tháp lị, thế nhưng trước luồng hơi thở rồng thiêng tối cao này lị, bầy khiên băng ấy quyết chả thể trụ vững nổi độc độc vỏn vẹn một tích tắc ngắn ngủi lị."
  },
  {
    "en": "The multiple overlapped ice shields instantly melted, and the attack, which Emilia was hoping would just be weakened however slightly and she'd be golden, rained upon her.",
    "vi": "Vô số vô số bầy lớp khiên băng giá xếp chồng chồng lên nhau d dứt định lập tức tan chảy chảy hóa thành nước trong nháy mắt lị, và đòn công kích oanh tạc lị, thứ mà Emilia từng thầm hy vọng hy vọng d dứt định d dẫu d dứt định được giảm thiểu giảm thiểu đi phần nào sức công phá lị, d dứt định d dẫu xối xả trút thẳng xuống đầu cô lị."
  },
  {
    "en": "\"ーーーー\"",
    "vi": "“ーーーー”"
  },
  {
    "en": "For but a moment, the black monolith at the back of Emilia's mind dawned upon her.",
    "vi": "Chỉ độc độc vỏn vẹn trong một tích tắc ngắn ngủi lị, hình bóng khối đá nguyên khối monolith đen tuyền phía sau lưng bỗng hiện lên ngự trị ngự trị trong tâm trí nhận thức của Emilia lị."
  },
  {
    "en": "It may be firm enough to remain unaffected by the dragon breath. However, on the other hand, she was concerned that the『Trial』may be ruined should it get broken.",
    "vi": "Nó khả dĩ d dứt định đủ kiên cố vững chãi để quyết chả hề hấn gì trước luồng hơi thở rồng thiêng lị. Thế nhưng lị, trái lại lị, cô d dứt định d dẫu cảm thấy lo lắng khôn nguôi rằng 『Thử Thách』 thiêng liêng thiêng liêng khả dĩ d dứt định d dẫu bị hủy hoại hoàn toàn hoàn toàn nếu chẳng may khối đá ấy bị đập phá vỡ vụn mất sất lị."
  },
  {
    "en": "On top of that, this was a thought unrelated to breaking through the『Trial』, but,",
    "vi": "Hơn thế nữa lị, đây d dứt định d dẫu d dẫu là một suy nghĩ quyết chả hề liên quan trực tiếp tới việc vượt qua 『Thử Thách』 sất lị, song d dứt định là,"
  },
  {
    "en": "Emilia: \"If it gets broken, that'd be rea~lly lonely......\"",
    "vi": "Emilia: “Nếu nó d dứt định d dẫu bị vỡ vụn tan tành lị, thì d dứt định d dẫu cô đơn cô đơn lắm lị......”"
  },
  {
    "en": "The handprints which had a queer sense of déjà vu, had been left behind on the monolith.",
    "vi": "Bầy dấu hằn bàn tay đem lại một cảm giác quen thuộc quen thuộc kỳ lạ kỳ lạ như thể d dứt định d dẫu từng gặp qua lị, d dứt định d dẫu được để lại ngự trị sâu hoắm trên khối đá monolith lị."
  },
  {
    "en": "Just what connection did it have to herself, or she may simply be overthinking. However, she wished to ascertain the identity of that sensation.",
    "vi": "Rốt cuộc rốt cuộc mối liên kết giữa cô và bầy dấu vết ấy là gì đây chứ lị, hay khả dĩ độc độc vỏn vẹn chỉ là do cô đang tự suy diễn suy diễn quá xa chăng lị. Tuy nhiên lị, cô vô cùng khát khao muốn làm sáng tỏ bản chất thực sự của cảm giác kỳ lạ ấy lị."
  },
  {
    "en": "That is why, it shan't disappear. For the sake of it to not disappear.",
    "vi": "Chính vì lẽ đó lị, nó quyết chả được phép tiêu biến đi mất sất lị. Vì lẽ dĩ nhiên quyết chả được để nó tiêu biến tiêu biến lị."
  },
  {
    "en": "\"ーーーー\"",
    "vi": "“ーーーー”"
  },
  {
    "en": "She converged as much mana as miraculously possible and evolved it into Icicle Line.",
    "vi": "Cô điên cuồng hội tụ hội tụ thảy mọi nguồn ma lực khổng lồ khổng lồ ở mức phi thường phi thường nhất khả dĩ lị, và điên cuồng biến đổi phát triển nó thành Icicle Line (Băng Tuyến) lị."
  },
  {
    "en": "Though Emilia possessed mana enough to surprise even her own self, she could not manipulate those vast amounts of mana all at once.",
    "vi": "Dẫu cho Emilia sở hữu sở hữu nguồn ma lực d dứt định d dẫu đủ vĩ đại vĩ đại để khiến chính bản thân cô d dứt định d dẫu kinh ngạc sửng sốt lị, cô vẫn d dứt định quyết chả thể nào dễ dàng điều khiển điều khiển cùng lúc một lượng ma lực khổng lồ khổng lồ đến nhường ấy sất lị."
  },
  {
    "en": "Regardless of how much mana there was within her, the quantity she could bring forth at once solely amounted to the capacity of her gate.",
    "vi": "Bất luận có bao nhiêu ma lực ngự trị ngự trị sâu thẳm trong cơ thể xác thịt đi chăng nữa lị, lượng ma lực cô khả dĩ giải phóng giải phóng ra ngoài trong cùng một thời điểm d dứt định d dứt định độc độc vỏn vẹn chỉ tương đương giống như sức chứa hữu hạn hữu hạn của 『Cổng』 (gate) trong cô mà thôi lị."
  },
  {
    "en": "Yet Emilia boasted output more than ten times that of an ordinary magician, but the forte of having lived many years as a spirit arts user further expanded her potential.",
    "vi": "Mặc dù sức công phá công phá của Emilia d dứt định d dẫu vượt trội vượt trội gấp hơn mười lần so với một pháp sư bình thường quèn lị, song cái điểm mạnh điểm mạnh của một kẻ d dẫu trải qua vô vàn vô vàn năm sinh sống dưới danh phận một Tinh Linh Thuật Sĩ d dứt định d dẫu giúp khai mở khai mở thêm tiềm năng khôn lường của cô lị."
  },
  {
    "en": "Magicians communicated with their gate, utilised the mana stockpiled within themselves and meddled with the world.",
    "vi": "Bầy pháp sư thường giao tiếp kết nối kết nối sâu sắc với cổng của họ lị, tiêu tốn tiêu tốn lượng ma lực tích trữ ẩn giấu trong cơ thể xác thịt và tác động càn quét càn quét lên thế giới lị."
  },
  {
    "en": "Spirit arts users borrowed the strength of Spirits, utilised the mana in the atmosphere and meddled with the world.",
    "vi": "Bầy Tinh Linh Thuật Sĩ d dứt định lại mượn cậy sức mạnh sức mạnh của bầy Tinh Linh lị, tận dụng tận dụng tối đa lượng ma lực dồi dào dồi dào ngự trị trong bầu khí quyển và tác động càn quét càn quét lên thế giới lị."
  },
  {
    "en": "And, possessing groundings in both of these, Emilia was capable of doing both.",
    "vi": "Và lị, nhờ sở hữu sở hữu kiến thức nền tảng vững chãi vững chãi của cả hai phương pháp ấy lị, Emilia hoàn toàn khả dĩ song hành song hành thực hiện thực hiện trơn tru cả hai lị."
  },
  {
    "en": "Though the amount of water capable of coming out of a tap was fixed, should that water be stored in a bucket, even greater quantities of water could be used. Emilia executed this using her own flesh body and the world.",
    "vi": "Dẫu cho lượng nước chảy ra chảy ra từ một chiếc vòi nước quèn luôn là cố định lị, song nếu lượng nước ấy được tích trữ đong đầy đong đầy trong một chiếc xô vĩ đại lị, thì lượng nước khả dĩ đem ra sử dụng chắc chắn dứt định d dứt định d dẫu vĩ đại vĩ đại hơn vạn phần lị. Emilia d dứt định d dẫu thực thi trơn tru trơn tru nguyên lý ấy bằng cách dùng chính cơ thể xác thịt kiều diễm của mình kết hợp kết hợp với thế giới xung quanh lị."
  },
  {
    "en": "Halting the mana overflowing from her within in the outside world, and utilising maximal magic heedless of her gateーー,",
    "vi": "Kìm giữ kìm giữ lượng ma lực đang điên cuồng tràn ngập tràn ngập từ bên trong cô ra thế giới bên ngoài lị, và thi triển ma pháp ma pháp tối cao bất chấp thảy mọi giới hạn của 『Cổng』——,"
  },
  {
    "en": "Emilia: \"ーーAbsolute Zero.\"",
    "vi": "Emilia: “——Absolute Zero (Tuyệt Đối Không Độ) lị!”"
  },
  {
    "en": "That was what Subaru had named it, and had spoken of the empty theory that its materialisation may be arduous.",
    "vi": "Đó chính xác chính xác d dứt định d dẫu là cái tên mà Subaru d dứt định d dẫu đặt cho chiêu thức ấy lị, và cậu từng giải thích giải thích thuyết giáo rằng việc hiện thực hóa nó trên thực tế d dứt định d dẫu vô cùng gian khổ gian khổ gian nan lị."
  },
  {
    "en": "It was enough to end a real battle with a single blow, and that was around the same timing as Subaru had exclaimed it to be miraculously unbelievable, that point onwards Emilia had entered into a contest she had never once succeeded in.",
    "vi": "Chiêu thức ấy d dứt định thừa sức chấm dứt chấm dứt trọn vẹn một trận quyết chiến sinh tử thực tế độc độc vỏn vẹn bằng một đòn đánh chớp nhoáng duy nhất lị, và đó d dứt định d dẫu d dường như chính là khoảnh khắc Subaru thốt thốt lên lời cảm thán cảm thán thảng thốt sửng sốt sửng sốt quyết chả thể tin nổi lị, kể từ giây phút khoảnh khắc ấy trở đi lị, Emilia d dứt định d dẫu chính thức bước vào một cuộc quyết đấu quyết đấu quyết tử mà cô chưa từng một lần thành công mỹ mãn trước đây lị."
  },
  {
    "en": "And, she shall make it succeed.",
    "vi": "Và lị, cô d dứt định chắc chắn chắn d dứt định d dẫu d dứt định d dẫu làm cho nó thành công bằng thảy thảy mọi giá lị."
  },
  {
    "en": "If Emilia's ordinary magical power was to be taken as the value of 1, then the potency of this magic which utilised the overflown power and materialised, would be close to 10 or even possibly 100.",
    "vi": "Nếu lượng ma lực ma lực thông thường quèn của Emilia được quy ước tính là giá trị một lị, thì sức tàn phá tàn phá tột cùng của ma pháp tối cao tối cao này lị, thứ tận dụng tận dụng triệt để nguồn sức mạnh tràn ngập tràn ngập và được hiện thực hóa lị, chắc chắn dứt định d dứt định d dẫu chạm tới ngưỡng ngưỡng mười hay thậm chí là một trăm vạn phần dẫu vậy lị."
  },
  {
    "en": "A white vacuum instantly sweeped conquest over the world, accompanied with such strength that even the impossible to halt flow of time would be stopped, impossible of being described as meagrely as the atmosphere being frozen.",
    "vi": "Một luồng chân không trắng xóa trắng xóa lập tức càn quét càn quét chinh phục thảy thảy mọi ngóc ngách trên thế giới lị, song hành song hành cùng nguồn sức mạnh vĩ đại vĩ đại tới mức d dường như ngay cả dòng chảy thời gian bất kham bất kham d dứt định d dẫu bị cưỡng ép đóng băng đóng băng lị, quyết chả thể nào độc độc vỏn vẹn mô tả đơn giản đơn giản là sự đóng băng của bầu không khí được sất lị."
  },
  {
    "en": "Even the breath of the dragon who was supposed to have been met by inevitable『Death』, was no exception.",
    "vi": "Ngay cả luồng hơi thở rồng thiêng (dragon breath) của Thần Long lị, thứ đáng lẽ đáng lẽ d dứt định d dẫu gieo rắc 『Cái Chết』 tàn khốc tàn khốc quyết chả thể tránh khỏi sất lị, d dứt định d dẫu quyết chả phải ngoại lệ ngoại lệ phân nào lị."
  },
  {
    "en": "The blue light clashing from the front and an absolute null, their collision yielded a vacuum in the world.",
    "vi": "Luồng ánh sáng xanh lam lam rực rỡ oanh tạc oanh tạc oanh liệt trực diện trực diện va chạm kịch liệt kịch liệt với khoảng hư vô vô cực vô cực lị, cú va chạm va chạm chấn động chấn động ấy lập tức sinh ra một vùng chân không bao la bao la ngự trị ngự trị giữa thế gian lị."
  },
  {
    "en": "\"ーーーー\"",
    "vi": "“ーーーー”"
  },
  {
    "en": "That moment, the two maximal potencies, with not the slightest delay, opposed and extinguished each other.",
    "vi": "Đúng vào khoảnh khắc khoảnh khắc tích tắc ấy lị, hai nguồn sức mạnh sức mạnh đạt ngưỡng tối cao tối cao tột đỉnh lị, quyết chả hề có lấy phân phần triệu giây giây chậm trễ trễ nải lị, điên cuồng triệt tiêu triệt tiêu lẫn nhau và đồng loạt tiêu biến tiêu biến hoàn toàn lị."
  },
  {
    "en": "A truly astounding extinguishment accompanied with no sound or impact, and once the time that had supposedly been halted began to flow again, Emilia readied an ice lance and flew towards the front.",
    "vi": "Một sự tiêu biến tiêu biến thực sự kinh ngạc kinh ngạc sửng sốt quyết chả hề phát ra bất kỳ bầy tiếng động hay dư chấn chấn động nào sất lị, và ngay khi dòng thời gian ngỡ ngỡ như bị đóng băng đóng băng d dứt định bắt đầu cuồn cuộn trôi trở lại lị, Emilia lập tức siết chặt một ngọn thương băng thương băng giá tinh khiết tinh khiết và dũng mãnh lao vút vút thẳng về phía trước lị."
  },
  {
    "en": "Emilia: \"Hi, ya~a~a~aーー!!\"",
    "vi": "Emilia: “Hây~a~a~a~hーー!!”"
  },
  {
    "en": "With her slender throat trembling, Emilia charged at Volcanica.",
    "vi": "Với chiếc cổ họng thon dài ngọc ngà khẽ run rẩy run rẩy lị, Emilia dũng cảm dũng cảm xông thẳng vào áp sát Thần Long Volcanica lị."
  },
  {
    "en": "Wielding strength from the entirety of her frame, her body felt incredibly heavy. Though the used mana itself had been what she had exited out of her body, the burden put onto Emilia upon its utilisation was tremendous.",
    "vi": "Vận dụng vận dụng thảy mọi sức lực từ toàn bộ cơ thể xác thịt ngọc ngà lị, cô bỗng cảm thấy cảm thấy toàn thân nặng trĩu trĩu chả tả nổi lị. Dẫu cho lượng ma lực tiêu tốn tiêu tốn thực chất chính xác chính là thứ được cô giải phóng giải phóng giải phóng ra ngoài lị, song gánh nặng phản phệ đè nặng đè nặng lên Emilia khi cưỡng ép thi triển thi triển nó là vô cùng kinh hoàng kinh hoàng vĩ đại lị."
  },
  {
    "en": "Turning over a bucket with water stored in it, naturally, called for adequate strength as well.",
    "vi": "Việc lật úp lật úp một chiếc xô đong đầy nước tích trữ lị, lẽ dĩ nhiên lị, d dứt định d dẫu đòi hỏi đòi hỏi một nguồn sức lực tương ứng tương ứng rồi lị."
  },
  {
    "en": "Since she had used power akin to turning over a fountain instead of a bucket, it would only be a matter of course should Emilia feel totally exhausted. However, she voiced.",
    "vi": "Bởi lẽ cô d dứt định d dẫu huy động huy động nguồn sức mạnh sức mạnh khổng lồ tương đương giống hệt hệt như việc lật úp cả một đài phun nước vĩ đại vĩ đại chứ quyết chả phải một chiếc xô quèn sất lị, thế nên việc Emilia cảm thấy cảm thấy kiệt quệ rã rời rã rời hoàn toàn d dứt định d dẫu là lẽ đương nhiên đương nhiên rồi lị. Thế nhưng lị, cô vẫn d dứt định cất tiếng thét quyết tâm lị."
  },
  {
    "en": "Emilia: \"I can't, lose heart!!\"",
    "vi": "Emilia: “Mình d dứt định quyết chả được phép nản lòng nản lòng thối chí đâu sất lị!!”"
  },
  {
    "en": "Shouting like that, Emilia poured life into herself.",
    "vi": "Cất tiếng hét lớn lớn giọng như thế lị, Emilia d dứt định tự truyền thêm sinh khí dũng khí dũng khí sắt đá cho bản thân lị."
  },
  {
    "en": "Though stamina and mana were different things, yet by making herself hear those words with all of her might, she felt the rise of a strength that had previously been asleep. Though it may be a misapprehension, if the one being deceived was her own self, then sometimes lying wasn't all bad.",
    "vi": "Dẫu cho thể lực sinh mệnh sinh mệnh và ma lực ma lực là hai thực thể thực thể hoàn toàn khác biệt nhau sất lị, song bằng việc bắt ép bản thân phải lắng nghe bầy lời lẽ đanh thép đanh thép ấy bằng thảy thảy thảy mọi nhuệ khí sắt đá lị, cô cảm nhận được sâu sắc nguồn sức mạnh sức mạnh khôn lường vốn dĩ d dứt định ngủ say bấy lâu nay bỗng bừng bừng thức giấc cuồn cuộn cuồn cuộn lị. Dẫu chuyện đó khả dĩ chỉ là một sự ngộ nhận ngộ nhận quèn đi chăng nữa lị, nếu kẻ bị đánh lừa đánh lừa lại chính là bản thân cô lị, thì đôi khi bầy lời nói dối dối lòng quyết chả hề tệ chút nào sất lị."
  },
  {
    "en": "Volcanica: [Satella~a~a~aーー!!]",
    "vi": "Volcanica: 〖Satella~a~a~a~hーー!!〗"
  },
  {
    "en": "With its breath defended against, Volcanica swung its forelimbs and tail whilst roaring.",
    "vi": "Bị hóa giải hóa giải mất luồng hơi thở rồng thiêng tối cao lị, Volcanica điên cuồng vung vung bầy móng vuốt vuốt vĩ đại và cái đuôi sấm sét trong khi điên cuồng gầm thét gầm thét cuồng loạn lị."
  },
  {
    "en": "The impact charged from the close exterior, and Emilia defended against it by relying on the sensation of the icicles deployed in her surroundingsーー as the generated seven ice warriors got shattered, they assisted Emilia's body.",
    "vi": "Cú va chạm va chạm kinh hoàng kinh hoàng mang sức mạnh tàn phá tàn phá trút xuống từ cự ly gần sạt sạt phía bên ngoài lị, và Emilia xoay xở phòng thủ phòng thủ chống đỡ chống đỡ nó bằng cách tin tưởng tin tưởng hoàn toàn vào cảm giác của bầy cột băng nhọn deployed xung quanh mình lị——khi bảy chiến binh băng giá được kiến tạo kiến tạo đồng loạt đồng loạt bị vỡ vụn vụn vỡ tan tành lị, họ d dứt định d dẫu hết lòng nâng đỡ nâng đỡ bảo vệ cho cơ thể ngọc ngà của Emilia lị."
  },
  {
    "en": "Evading the impact being swung down onions them by leaping sideways, the ice warriors halted the following up forelimbs with their bodies, and borrowing their shoulders, Emilia leapt greatly, as the tail whip swung onions the mid-air Emilia reached the height of the two ice warriors who were supporting her on their back, and devoured their bodies as sacrifice.",
    "vi": "Né tránh né tránh cú va chạm va chạm kinh hoàng đang vung xuống vung xuống đầu bằng cách nhảy vút sang bên hông lị, bầy chiến binh băng giá dũng cảm dũng cảm dùng chính thân thể băng giá của mình để chặn đứng đứng bầy chiêu thức móng vuốt bám đuổi tiếp theo lị. Và nương nương nương nhờ vào đôi vai vai vững chãi của họ lị, Emilia bật nhảy vút lên cao tột đỉnh lị. Đúng lúc ấy lị, cú quất đuôi sấm sét nhắm thẳng vào Emilia đang lơ lửng lơ lửng giữa không trung lị, quét qua vị trí ngự trị ngự trị của hai chiến binh băng giá đang dốc sức dốc sức nâng đỡ cô trên tấm lưng của họ lị, nuốt chửng nuốt chửng nghiền nát thân thể của họ làm vật hy sinh hy sinh cao cả lị."
  },
  {
    "en": "Emilia: \"Shah! Hiyah! Yah!!\"",
    "vi": "Emilia: “Chát lị! Hây lị! Ya!!”"
  },
  {
    "en": "Borrowing strength by way of their noble sacrifice, Emilia hammered in the ice lance whilst rotating her body. Though it was not sufficient enough to pare the『Divine Dragon's』hull, but enough to catch its attention.",
    "vi": "Nương nhờ nương nhờ nguồn sức mạnh to lớn từ sự hy sinh hy sinh cao cả kiêu hãnh kiêu hãnh của họ lị, Emilia điên cuồng đâm mạnh ngọn thương thương băng giá vào trong khi điên cuồng xoay chuyển xoay chuyển xoay chuyển xoay chuyển xoay chuyển xoay chuyển xoay chuyển xoay chuyển xoay chuyển cơ thể ngọc ngà lị. Dẫu cho đòn đánh ấy d dứt định quyết chả hề đủ sức để khả dĩ xuyên thủng xuyên thủng lớp vảy vảy kiên cố kiên cố vững chãi của 『Thần Long』 tối cao lị, song d dứt định d dẫu đủ để thu hút thu hút triệt để triệt để sự chú ý nhận thức của ông ta lị."
  },
  {
    "en": "Evading the forelimbs swung in annoyance as some of her silver hair got sliced off, Emilia successfully charged into Volcanica's bosom whilst risking her life. ーーFrom that position,",
    "vi": "Né tránh né tránh bầy móng vuốt vĩ đại vung xuống trong cơn thịnh nộ bực dọc bực dọc lị, dẫu cho một vài vài sợi tóc bạc lấp lánh lấp lánh của cô bị cắt đứt lìa đi mất lị, Emilia d dứt định d dẫu thành công thành công mỹ mãn áp sát lao thẳng lao thẳng vào trong vòm ngực vĩ đại vĩ đại của Volcanica trong khi đem cả sinh mạng sinh mạng trân quý ra đặt cược lị. ——Từ vị trí ngự trị ngự trị hiểm hóc ấy lị,"
  },
  {
    "en": "Emilia: \"That, white scaleーー\"",
    "vi": "Emilia: “Chiếc vảy trắng ngần kia——”"
  },
  {
    "en": "If only it could be touched, if only it could be successfully attacked, pondering so Emilia looked overhead.",
    "vi": "Chỉ cần khả dĩ khẽ chạm chạm vào nó lị, chỉ cần khả dĩ thành công thành công oanh kích oanh kích vào nó lị, thầm suy ngẫm suy ngẫm suy đoán phán đoán dường ấy lị, Emilia đăm đăm ngước nhìn lên ngay phía trên đầu lị."
  },
  {
    "en": "The『Divine Dragon』once again close enough to touch, its white scale which was difficult to directly look at, with her immediate gaze set on it Emilia widened her eyes.",
    "vi": "Thần Long vĩ đại vĩ đại một lần nữa ngự trị ngự trị ở cự ly gần sạt sạt sát sạt tầm tay khả dĩ khẽ chạm chạm lị, chiếc vảy trắng ngần chói lòa chói lòa của ông ta vốn dĩ vô cùng khó khăn để khả dĩ đăm đăm nhìn trực diện trực diện lị. Đúng lúc tầm nhìn của cô d dứt định d dẫu khóa chặt chặt vào nó lị, Emilia bỗng nhiên trợn tròn đôi mắt thạch anh tím thảng thốt sửng sốt lị."
  },
  {
    "en": "The reason being astonishment. It had not been a scale that had turned white. It was not.",
    "vi": "Nguyên cớ nguyên cớ chính xác chính xác chính là sự sửng sốt sửng sốt chấn động dữ dội lị. Đó d dứt định quyết chả phải là một chiếc vảy vảy d dứt định d dẫu biến biến đổi thành màu trắng ngần sất lị. Quyết chả phải thế sất lị."
  },
  {
    "en": "Present there was a white scar large enough to be mistaken for a scale.",
    "vi": "Hiện hữu ngự trị ngự trị ở nơi đó lị, chính xác chính xác chính là một vết sẹo sẹo trắng ngần vĩ đại vĩ đại tới mức khả dĩ dễ dàng bị lầm tưởng lầm tưởng nhầm lẫn nhầm lẫn thành một chiếc vảy rồng lị."
  },
  {
    "en": "Emilia: \"An old, wound......\"",
    "vi": "Emilia: “Một vết thương...... vết thương xưa cũ......”"
  },
  {
    "en": "The wound had already been closed, and would surely not ache upon being touched.",
    "vi": "Vết thương xưa cũ ấy thực tế d dứt định d dẫu khép miệng lành lặn từ đời nào rồi lị, chắc chắn dứt định d dứt định d dẫu quyết chả còn đau đớn thống khổ thống khổ gì sất khi bị đụng chạm khẽ vào lị."
  },
  {
    "en": "However, the『Divine Dragon』disliked the wound simply being touched and had agonized that much. Comprehending that it was involved with Volcanica's unerasable old memories, Emilia paused her breath.",
    "vi": "Tuy nhiên lị, 『Thần Long』 tối cao lại vô cùng chán ghét chán ghét căm ghét việc vết thương xưa cũ ấy độc độc vỏn vẹn bị người khác khẽ chạm chạm vào lị, và d dứt định d dẫu quằn quại thống khổ thống khổ dữ dội dường ấy lị. Thấu suốt thấu suốt thấu thấu suốt rằng chuyện đó chắc chắn dứt định liên quan sâu sắc sâu sắc tới bầy mảnh ký ức ký ức xưa cũ quyết chả thể xóa nhòa xóa nhòa của Volcanica lị, Emilia khẽ nín nín thở lị."
  },
  {
    "en": "Taking advantage of her hesitancy of that singular moment, Volcanica flapped its wings.",
    "vi": "Tận dụng tận dụng triệt để khoảnh khắc khẽ chần chừ chần chừ do dự do dự độc độc vỏn vẹn trong một tích tắc tích tắc ấy của cô lị, Volcanica điên cuồng vỗ rộng bầy đôi cánh vĩ đại vĩ đại lị."
  },
  {
    "en": "Emilia: \"Ahーー ~hk!\"",
    "vi": "Emilia: “A——ư~hk lị!”"
  },
  {
    "en": "Volcanica's ginormous frame ascended above at once, leaving Emilia behind as she stretched her hands.",
    "vi": "Thân hình khổng lồ khổng lồ khổng lồ của Volcanica lập tức bay vút vút thẳng lên trời cao chín tầng mây lị, bỏ lại Emilia ngự trị ngự trị phía sau lưng dẫu cho cô d dứt định d dẫu cố rướn rướn đôi tay tay ra để với tới lị."
  },
  {
    "en": "Emilia greatly lamented her own failure.",
    "vi": "Emilia thầm cảm thấy vô cùng tiếc nuối oán trách oán trách cho sự thất bại thất bại sơ suất sơ suất của bản thân mình lị."
  },
  {
    "en": "This was the utmost unfavorable situation, of crossing lances with an existence possessing wings.",
    "vi": "Đây d dứt định chính là thế trận thế trận hiểm nghèo hiểm nghèo bất lợi bất lợi tột cùng nhất lị, khi buộc phải vung vung gươm giáo quyết chiến quyết chiến với một thực thể thực thể tồn tại sở hữu sở hữu bầy đôi cánh vĩ đại khả dĩ tự do bay lượn lị."
  },
  {
    "en": "Should she be arbitrarily attacked from a location beyond her reach, the liabilities put on her would accumulate in the blink of an eye.",
    "vi": "Nếu chẳng may cô bị oanh tạc oanh tạc một cách vô cớ vô cớ từ một vị trí vị trí ngút ngàn vượt ngoài tầm với của bản thân lị, thảy mọi gánh nặng thương tích thương tích đè nặng đè nặng lên cô d dứt định d dẫu d dứt định chắc chắn chắn tích lũy chồng chất dồn dập dồn dập trong chớp mắt chớp mắt lị."
  },
  {
    "en": "Emilia: \"Noーー!!\"",
    "vi": "Emilia: “Không đời nào——!!”"
  },
  {
    "en": "Emilia instantly put her hands on the floor, and from her feet arose ice.",
    "vi": "Emilia nhanh như cắt cắt áp chặt đôi bàn tay bàn tay ngọc ngà xuống nền đất cát lị, và từ ngay dưới bàn chân ngọc ngà lập tức điên cuồng điên cuồng ngưng tụ dựng lên bầy khối băng tuyết băng tuyết lị."
  },
  {
    "en": "Extending the foothold of ice she had improvised and produced toward the sky, Emilia pursued and desperately reached for Volcanica who was attempting to fly upward.",
    "vi": "Điên cuồng kéo dài kéo dài bầy điểm tựa tựa bằng băng giá được cô ứng biến kiến tạo kiến tạo hướng thẳng hướng thẳng lên bầu trời ngút ngàn lị, Emilia điên cuồng truy đuổi truy đuổi và tuyệt vọng tuyệt vọng cố vươn tay với tới Volcanica lị, kẻ đang điên cuồng khát khao khát khao bay vút vút thẳng lên trời cao chín tầng mây lị."
  },
  {
    "en": "However, even that foothold of ice hit its limit by ten metres, twenty metres, and the distance beyond that point was outside of her reachーー,",
    "vi": "Thế nhưng lị, ngay cả bầy điểm tựa tựa bằng băng giá kiên cố ấy d dứt định d dẫu chạm tới giới hạn giới hạn tột cùng của nó sau mười mét lị, rồi hai mươi mét lị, và khoảng cách cự ly vượt ngoài điểm giới hạn ấy d dứt định d dẫu nằm hoàn toàn ngoài tầm với khả dĩ của cô sất——,"
  },
  {
    "en": "Emilia: \"ーーEveryone! Please!\"",
    "vi": "Emilia: “——Thảy mọi người ơi lị! Làm ơn trị giúp tôi với!”"
  },
  {
    "en": "Ice warriors responded to Emilia's call and further raised the foothold of ice.",
    "vi": "Bầy chiến binh băng giá d dứt định lập tức đáp lại lời réo gọi cầu cứu của Emilia lị, và tiếp tục điên cuồng kiến tạo gia cố điểm tựa tựa bằng băng giá vươn vươn cao tột đỉnh lị."
  },
  {
    "en": "The soldiers of ice climbed up to the tip of the foothold, which had met its end, then sprung from there at once, then jumping further by stepping on the back of the sprung soldiers, repeating this six times, Emilia stepped into the back of the final one soldierーー,",
    "vi": "Bầy chiến binh băng giá nhanh nhẹn trèo leo lên tận đỉnh ngọn của điểm tựa tựa vốn dĩ d dứt định d dẫu chạm tới giới hạn tột cùng kia lị, rồi đồng loạt đồng loạt bật nhảy vút lên cao từ nơi đó lị. Tiếp tục tiếp tục dùng bước nhảy đạp mạnh đạp mạnh lên tấm lưng của bầy chiến binh băng giá vừa nhảy vút lên lị, lặp đi lặp lại động tác ấy kiêu hãnh kiêu hãnh tổng cộng sáu lần lị, Emilia d dứt định đặt chân đạp đạp mạnh lên tấm lưng của người chiến binh cuối cùng cuối cùng ấy——,"
  },
  {
    "en": "Emilia: \"Sorry!\"",
    "vi": "Emilia: “Tôi vô cùng xin lỗi thảy mọi người nhiều lắm lị!”"
  },
  {
    "en": "The ice warriors she had powerfully stepped on fractured by their backs.",
    "vi": "Bầy chiến binh băng giá mà cô d dứt định d dẫu đạp mạnh đạp mạnh một lực cực lớn lên người lị, lập tức bị vỡ vụn rạn nứt rạn nứt ngay sau lưng lị."
  },
  {
    "en": "However, all of the falling seven ice warriors upped their thumbs and smiled, as they crashed. Accepting such encouragement of theirs, Emilia's hand, having jumped the final time, reached for Volcanica's tailーー,",
    "vi": "Tuy nhiên lị, thảy mọi bảy chiến binh băng giá đang rơi tự do tự do rơi xuống d dứt định d dẫu đồng loạt đồng loạt giơ ngón tay cái cái tán thưởng tán thưởng kiêu hãnh và nở nụ cười rạng rỡ rạng rỡ lị, ngay khi họ chuẩn bị lao thẳng gục đo sàn lị. Tiếp nhận nguồn cổ vũ cổ vũ sắt đá sắt đá quý báu vô ngần dường ấy từ họ lị, bàn tay ngọc ngà của Emilia lị, người d dứt định d dẫu thực hiện thực hiện cú nhảy vút tột cùng tột cùng lị, d dứt định d dẫu khả dĩ vươn tay tới chạm khẽ chạm khẽ vào cái đuôi vĩ đại của Volcanica——,"
  },
  {
    "en": "Volcanica: [ーーFoolish.]",
    "vi": "Volcanica: 〖——Thật ngu muội muội ngốc nghếch.〗"
  },
  {
    "en": "He drew back its tail along with that single word and Emilia's fingers grazed the air.",
    "vi": "Ông ta khéo léo co giật cái đuôi vĩ đại trở lại song hành cùng độc độc vỏn vẹn một lời lẽ phán xét lạnh lùng ấy lị, và thảy mọi bầy ngón tay ngọc ngà của Emilia d dứt định chỉ khả dĩ sượt sượt nhẹ qua khoảng không gian trống rỗng trống rỗng lị."
  },
  {
    "en": "And, the drawn tail energetically rebounded towards the dumbfounded Emilia.",
    "vi": "Và lị, cái đuôi vĩ đại vĩ đại vừa được thu hồi thu hồi d dứt định lập tức phản kích phản kích quất mạnh trở lại hướng thẳng về phía một Emilia đang sửng sốt kinh ngạc kinh ngạc sửng sốt lị."
  },
  {
    "en": "Mid-air, nowhere for her to run. Even if she were to quickly produce a shield of ice, strength that could shatter it and reach her alone would be sufficiently lethally destructive for Emilia.",
    "vi": "Lơ lửng lơ lửng giữa chừng chừng không lị, quyết chả hề có bất kỳ điểm tựa tựa nào để cô khả dĩ tránh né né tránh tháo chạy sất lị. Dẫu cho cô có khả dĩ lập tức nhanh như chớp ngưng tụ ra một tấm khiên băng khiên băng đi chăng nữa lị, nguồn sức mạnh uy dũng uy dũng dư sức đập vỡ vụn vụn nát bấy tấm khiên ấy và lao trực diện trực diện vào cơ thể xác thịt cô d dứt định d dẫu d dứt định chắc chắn chắn là đòn sát thương chí mạng chí mạng vong mạng vong mạng tàn khốc dành cho Emilia rồi lị."
  },
  {
    "en": "Emilia: \"ーーAh.\"",
    "vi": "Emilia: “——A lị.”"
  },
  {
    "en": "Failure, difficulty, what should she do, all kinds of thoughts entangled within Emilia's mind.",
    "vi": "Thất bại thảm hại lị, nguy nan hiểm nghèo lị, rốt cuộc rốt cuộc cô d dứt định phải làm gì đây chứ chăng lị, vô số vô số vô vàn bầy dòng suy ngẫm ngẫm nghĩ rối bời điên cuồng điên cuồng đan xen đan xen ngự trị trong tâm trí nhận thức của Emilia lị."
  },
  {
    "en": "Amidst the sensation of deceleration of the flow of time, she desperately searched for a breakthrough solution and mobilised every nook and cranny of her body and mind to see if she could do something. She merely did not possess the option named giving up.",
    "vi": "Ngay giữa cái cảm giác dòng chảy thời gian d dường như d dứt định d dẫu khẽ chậm chậm chậm chạp trôi trôi đi lị, cô vẫn quyết chả ngừng tuyệt vọng tìm kiếm kiếm một phương án phương án đột phá sinh lộ sinh lộ lị, và điên cuồng huy động thảy mọi ngóc ngách ngóc ngách trên cơ thể xác thịt lẫn tâm trí nhận thức để xem bản thân có khả dĩ xoay xở xoay xở được chuyện gì hay quyết chả lị. Độc độc vỏn vẹn độc độc vỏn vẹn duy nhất một chuyện là cô quyết chả hề sở hữu sở hữu cái quyền phương án mang tên đầu hàng đầu hàng từ bỏ số phận sất lị."
  },
  {
    "en": "Because none of the people Emilia dearly loved, not a single one of them, chose to give up.",
    "vi": "Bởi lẽ quyết chả có bất kỳ ai trong số bầy con người đồng hành đồng hành trân quý mà Emilia yêu thương sâu đậm sâu đậm lị, quyết chả có độc độc vỏn vẹn một người nào trong số họ lị, từng chọn lựa chọn lựa cách đầu hàng buông bỏ buông bỏ sất lị."
  },
  {
    "en": "That is whyーー,",
    "vi": "Chính vì lẽ đó——,"
  },
  {
    "en": "Emilia: \"I won't, give up either!\"",
    "vi": "Emilia: “Mình d dứt định d dứt định d dứt định d dứt định d dứt định quyết chả đời nào chịu bỏ cuộc đầu hàng đâu sất lị!”"
  },
  {
    "en": "However, mere mighty words could save no one.",
    "vi": "Thế nhưng lị, dẫu bầy lời lẽ lẽ đanh thép đanh thép oai hùng dường ấy quyết chả thể nào tự cứu rỗi cứu rỗi được bất kỳ ai sất lị."
  },
  {
    "en": "As though to teach her of that transiency, the tail whip of the『Divine Dragon』cognizant of a long length of time, drew near Emiliaーー,",
    "vi": "Tựa như muốn răn dạy dạy dỗ cho cô thấu suốt thấu suốt sâu sắc sâu sắc cái sự phù du phù du ngắn ngủi ấy lị, cú quất đuôi thần sầu thần sầu của vị 『Thần Long』 tối cao tối cao lị, đấng sở hữu sở hữu sự tích lũy của dòng lịch sử lịch sử đằng đẵng lâu đời lị, đang điên cuồng lao thẳng lao thẳng trực diện sạt sạt tới sát sạt người Emilia——,"
  },
  {
    "en": "???: \"ーーEmilia-sama!!\"",
    "vi": "???: “——Emilia-sama!!”"
  },
  {
    "en": "At that instant, stormy wind coming from directly below faintly assisted Emilia's ascend.",
    "vi": "Đúng vào tích tắc khoảnh khắc tích tắc ngàn cân ấy lị, một luồng gió bão cuồng phong cuồng phong dữ dội nổi lên nổi lên từ ngay bên dưới chân cô lị, khẽ nâng đỡ nâng đỡ đẩy nhẹ cơ thể ngọc ngà của Emilia bay vút vút lên cao thêm phân nào lị."
  },
  {
    "en": "△▼△▼△▼△",
    "vi": "△▼△▼△▼△"
  },
  {
    "en": "Her body uplifted by the upward wind, Emilia's situation faintly changed.",
    "vi": "Cơ thể ngọc ngà được nâng đỡ nâng đỡ nâng vút lên bởi luồng cuồng phong cuồng phong hướng thẳng hướng thẳng lên bầu trời lị, tình cảnh hiểm nghèo của Emilia d dứt định d dẫu khẽ khàng biến chuyển biến chuyển đôi chút lị."
  },
  {
    "en": "From a situation where『Death』had a probability of 100%, to a situation where『Death』had a probability of 90%.",
    "vi": "Chuyển dời chuyển dời từ một kịch bản kịch bản hiểm nghèo hiểm nghèo nơi 『Cái Chết』 tàn khốc tàn khốc chiếm giữ xác suất xác suất tuyệt đối một trăm phần trăm phần trăm lị, sang một thế trận thế trận nơi 『Cái Chết』 độc độc vỏn vẹn chiếm giữ chín mươi phần trăm phần trăm xác suất mà thôi lị."
  },
  {
    "en": "And that 10% probability of survival was perfectly utilised by Emilia, who was ignorant to giving up.",
    "vi": "Và lị, độc độc vỏn vẹn mười phần trăm phần trăm cơ hội sinh tồn sinh tồn chông chênh quý báu ấy lị, d dứt định d dẫu được tận dụng tận dụng một cách hoàn hảo hoàn hảo tuyệt vời bởi một Emilia quyết chả bao giờ biết tới khái niệm đầu hàng đầu hàng bỏ cuộc lị."
  },
  {
    "en": "Emilia: \"ーー~hk.\"",
    "vi": "Emilia: “——ư~hk lị.”"
  },
  {
    "en": "The whipping tail of the『Divine Dragon』, aiming for Emilia's head.",
    "vi": "Cú quất đuôi sấm sét sấm sét của 『Thần Long』 tối cao lị, đang điên cuồng nhắm thẳng vào đầu ngọc ngà của Emilia lị."
  },
  {
    "en": "Gathered with ascend's vigour, that tail whip's aim slipped from Emilia's head to her torso. Comprehending this from her instinct rather than close distance, Emilia folded in her knees with all of her strength.",
    "vi": "Cộng cộng hưởng với nguồn dũng khí sinh lực từ cú bay vút vút lên cao lị, cái hồng tâm hướng thẳng của cú quất đuôi sấm sét ấy d dứt định khẽ chệch chệch hướng từ đầu ngọc ngà trượt thẳng xuống phần thân người của Emilia lị. Thấu suốt thấu suốt thấu thấu suốt điều kỳ diệu ấy nhờ linh tính bản năng bản năng nhạy bén lanh lợi chứ quyết chả phải cự ly gần sạt sạt quan sát lị, Emilia lập tức co rụt co rụt gập chặt bầy đầu gối ngọc ngà lại bằng thảy thảy thảy mọi sức lực xác thịt lị."
  },
  {
    "en": "Seeking to evade its striking range by making her body smallerーー Emilia's tiptoes grazed past the swung tail whip, and the fearsome impact made Emilia's body twirl at an incredible speed.",
    "vi": "Khát khao khát khao muốn thu nhỏ thu nhỏ kích thước cơ thể xác thịt lại để khả dĩ né tránh né tránh né tránh tầm càn quét càn quét tàn khốc của đòn đánh——bầy đầu ngón chân ngọc ngà của Emilia d dứt định độc độc vỏn vẹn chỉ khẽ sượt sượt nhẹ qua cái đuôi vĩ đại vừa quất vút qua lị, và luồng dư chấn tàn phá tàn phá kinh hoàng dường ấy d dứt định khiến cơ thể ngọc ngà của Emilia liên tục xoay tròn xoay tròn mòng mòng mòng mòng với một tốc độ kinh hoàng kinh hoàng chóng mặt lị."
  },
  {
    "en": "\"ーーーー\"",
    "vi": "“ーーーー”"
  },
  {
    "en": "With her knees in her hold, Emilia's body was blown overhead.",
    "vi": "Với đôi bàn tay ngọc ngà ôm chặt lấy hai đầu gối lị, thân người Emilia d dứt định d dẫu bị oanh tạc oanh tạc hất văng tót lên bầu trời ngút ngàn ngút ngàn lị."
  },
  {
    "en": "Whilst engulfed in impact such that it felt as if her internal organs would burst out from her head, Emilia gnashed her teeth, generated a foothold of ice in the sky and forcefully halted her body.",
    "vi": "Trong lúc bị cuốn chặt cuốn chặt hoàn toàn hoàn toàn trong cái dư chấn tàn phá tàn phá tột cùng tới mức cô cảm thấy cảm thấy như thể lục phủ ngũ tạng ngũ tạng sắp sửa điên cuồng văng ra ngoài theo đường đầu mất sất lị, Emilia điên cuồng nghiến chặt răng răng lị, điên cuồng ngưng tụ dựng lên một điểm tựa tựa bằng băng giá ngự trị ngự trị kiêu hãnh kiêu hãnh giữa không trung lị, cưỡng ép hãm phanh hãm phanh giữ chặt cơ thể xác thịt lại lị."
  },
  {
    "en": "An explosive sound echoed, and Emilia, having accepted impact with her entire body, looked downward with tears in her eyes.",
    "vi": "Một bầy tiếng nổ oanh oanh oanh oanh vang vọng dữ dội d dứt định d dẫu lập tức vang rền rền rĩ lị, và Emilia lị, người d dứt định d dẫu tự mình tiếp nhận hứng chịu trọn vẹn trọn vẹn luồng dư chấn tàn phá bằng thảy cơ thể xác thịt lị, khẽ đăm đăm nhìn xuống bên dưới với đôi hàng nước mắt mắt khẽ rưng rưng rưng rưng lệ lị."
  },
  {
    "en": "Emilia's field of vision, for whom the ground and the heavens had been turned around due to using the ceiling of ice created in the skies as her foothold, visible was Volcanica's head and the distant shadow of a person who had appeared from the staircase of the first layer.",
    "vi": "Tầm mắt nhận thức của Emilia lị, người d dứt định d dẫu bị đảo lộn đảo lộn hoàn toàn không gian đất trời do sử dụng sử dụng cái trần băng tuyết băng tuyết kiến tạo kiến tạo ngự trị ngự trị trên bầu trời làm điểm tựa tựa đứng sừng sững lị, d dứt định d dẫu nhìn thấy rõ ràng rõ ràng cái đầu rồng vĩ đại của Volcanica lị, song hành song hành cùng cái bóng lưng xa xăm xa xăm của một người vĩ đại vĩ đại vừa mới xuất hiện xuất hiện từ phía cầu thang đá của tầng thứ nhất lị."
  },
  {
    "en": "To be precise, it was not a shadow of a person. It was the shadow of a person and a Ground Dragon.",
    "vi": "Nói một cách chính xác tuyệt đối lị, đó quyết chả phải độc độc vỏn vẹn chỉ là cái bóng lưng của một người đâu sất lị. Đó d dứt định chính xác chính là bóng hình kề vai sát cánh của một người và một Địa Long (Ground Dragon) dũng mãnh lị."
  },
  {
    "en": "Emilia: \"Ram and......!\"",
    "vi": "Emilia: “Ram và......!”"
  },
  {
    "en": "It was Ram who had barged in and had reached out to Emilia, assisting her ascend.",
    "vi": "Đó chính xác chính xác d dứt định d dẫu là Ram lị, người d dứt định d dẫu đột ngột xông pha xông pha vào chiến trường hiểm nghèo hiểm nghèo và kịp thời dang rộng tay cứu giúp cứu giúp nâng đỡ cho cú bay vút lên cao của Emilia lị."
  },
  {
    "en": "Visible from afar, Ram had wounds and blood covering all of her body and Emilia was unable to hide her astonishment to see her come running to this place in that condition.",
    "vi": "Dẫu đăm đăm nhìn từ khoảng cách xa lị, Ram d dứt định đang bị bao phủ bao phủ chằng chịt chằng chịt bởi bầy vết thương chí mạng chí mạng và dòng máu tươi vấy bẩn toàn bộ cơ thể xác thịt lị, khiến Emilia quyết chả thể nào che giấu che giấu nổi sự kinh ngạc sửng sốt sửng sốt vô ngần khi đăm đăm nhìn thấy cô kiên cường kiên cường chạy bứt tốc bứt tốc tới chốn này trong tình cảnh tơi tả tơi tả dường ấy lị."
  },
  {
    "en": "But, it was thanks to her assistance that Emilia managed to survive without getting her head hammered.",
    "vi": "Thế nhưng lị, độc độc vỏn vẹn nhờ vào sự cứu trợ cứu trợ thiêng liêng thiêng liêng kịp thời ấy của cô lị, Emilia mới khả dĩ xoay xở sinh tồn sinh tồn lành lặn quyết chả bị cú quất đuôi đập vỡ đập vỡ nát bấy đầu ngọc ngà lị."
  },
  {
    "en": "Borrowing her assistance, Emilia, now for once, poured strength into her knees.",
    "vi": "Nương nhờ nương nhờ vào nguồn sự trợ giúp trân quý ấy lị, Emilia lị, ngay trong tích tắc khoảnh khắc này lị, điên cuồng điên cuồng dồn nén dồn nén toàn bộ sinh lực sinh lực vào bầy đầu gối ngọc ngà lị."
  },
  {
    "en": "In order to wage assault on Volcanica at once, using this ceiling of ice as foothold. Before Emilia, now, Volcanica had been acting strange.",
    "vi": "Nhằm mục đích để ngay lập tức ngay lập tức phát động đòn oanh tạc oanh tạc oanh liệt giáng thẳng xuống Volcanica lị, dùng chiếc trần băng giá giá này làm điểm tựa tựa bứt tốc đạp mạnh lị. Ngay trước mắt Emilia lị, giờ đây lị, Volcanica bỗng nhiên có thái độ thái độ vô cùng kỳ quặc kỳ quặc bất thường lị."
  },
  {
    "en": "With its tail remaining in the swung stance, without glancing towards Emilia, it was looking below.",
    "vi": "Với cái đuôi vĩ đại vẫn ngự trị nguyên ngự trị nguyên ở tư thế quất mạnh vung ra lị, quyết chả thèm mảy may nhìn ngó nhìn ngó về phía Emilia lấy một cái sất lị, ông ta d dứt định lại đang đăm đăm hướng hướng thẳng cái nhìn xuống bên dưới tháp canh lị."
  },
  {
    "en": "It seemed as if it had set Ram, who had assisted Emilia, as its next prey. However, that was not the case. The ancient『Divine Dragon』, what its amber eyes were viewing was not Ram.",
    "vi": "Trông d dường như d dường như thể ông ta d dứt định d dẫu d dứt định thiết lập thiết lập Ram lị, người d dứt định d dẫu cứu giúp cứu giúp Emilia lị, làm mục tiêu săn mồi tàn sát tàn sát tiếp theo của mình vậy lị. Thế nhưng lị, thực tế rành rành rành lại quyết chả phải thế sất lị. Vị 『Thần Long』 tối cao cổ xưa truyền thuyết ấy lị, thứ mà đôi mắt hổ phách hổ phách vĩ đại của ông ta đang đăm đăm nhìn chăm chú quyết chả phải là Ram sất lị."
  },
  {
    "en": "It wasーー,",
    "vi": "Thứ đó chính là——,"
  },
  {
    "en": "Volcanica: [ーーPatrasche?]",
    "vi": "Volcanica: 〖——Patrasche sao?〗"
  },
  {
    "en": "Emilia: \"Hiya~a~a~a~ーー ~hk!!\"",
    "vi": "Emilia: “Hya~a~a~a~hーーư~hk!!”"
  },
  {
    "en": "With energy that erased Volcanica's mumbling, Emilia's body shot itself downwards.",
    "vi": "Với nguồn dũng khí khí lực dũng mãnh dũng mãnh dư sức tẩy xóa xóa sạch sành sanh bầy lời thì thầm lầm bầm của Volcanica lị, cơ thể ngọc ngà của Emilia lập tức tựa một mũi tên bắn bắn thẳng giáng thẳng xuống phía dưới lị."
  },
  {
    "en": "Late by half a moment, Volcanica's tail as it glanced upward shattered the ceiling of ice. Too late. Emilia's form was already gone from there, and wasn't even ahead of him, aiming for its throat.",
    "vi": "Chậm trễ trễ nải độc độc vỏn vẹn nửa tích tắc lị, cái đuôi vĩ đại của Volcanica quất vút ngược lên cao đập vỡ vụn vụn nát bấy cái trần băng giá giá kia lị. Quá muộn rồi lị. Bóng hình kiều diễm của Emilia d dứt định d dẫu quyết chả còn ngự trị ngự trị ở chốn ấy nữa sất lị, và cô quyết chả hề ngự trị ngay trước mặt ông ta sất lị, mà đang nhắm thẳng nhắm thẳng trực diện vào vùng cổ họng của Thần Long lị."
  },
  {
    "en": "Emilia's fired form created a different foothold of iceーー no, a \"sloape\" of ice.",
    "vi": "Bóng hình lao đi như tên bắn của Emilia lập tức ngưng tụ dựng lên một điểm tựa tựa bằng băng giá hoàn toàn khác biệt lị——không lị, d dứt định chính là một đường trượt băng giá (slope of ice) trơn tru lị."
  },
  {
    "en": "In Priestella, when she had been running away from Regulus together with Subaru, this was the article she had created in order to not decrease their speed, rather, accelerate itーー creating it mid-air, she glided with footwear of ice.",
    "vi": "Tại thành thị Priestella cổ kính cổ kính lị, khi cô d dứt định cùng song hành song hành sát cánh chạy trốn chạy trốn khỏi tên Regulus hiểm ác cùng với Subaru lị, đây chính xác chính là thứ cô d dứt định d dẫu kiến tạo kiến tạo nhằm mục đích quyết chả để tốc độ bứt tốc bị thuyên giảm thuyên giảm đi phân nào lị, trái lại lị, điên cuồng gia tốc gia tốc bứt tốc mạnh mẽ hơn——ngưng tụ dựng lên nó ngay giữa chừng chừng không lị, cô điên cuồng trượt trượt vun vút vun vút bằng bầy đôi giày băng giá tinh khiết lị."
  },
  {
    "en": "Emilia's velocity accelerated mid-air, out of the pursuing tail whip's reach.",
    "vi": "Tốc độ bứt tốc của Emilia điên cuồng gia tốc gia tốc mạnh mẽ giữa không trung lị, hoàn toàn thoát ly thoát ly khỏi tầm càn quét càn quét của cái đuôi sấm sét đang điên cuồng bám đuổi bám đuổi lị."
  },
  {
    "en": "The runway of ice produced mid-air accelerated Emilia's fluttering silver hair, which were being followed by the tail merely an instant behind, andーー,",
    "vi": "Đường trượt trượt bằng băng giá được cô kiến tạo giữa không trung điên cuồng bứt tốc bứt tốc lị, làm tung bay mái tóc bạc lấp lánh lấp lánh của Emilia lị, thứ d dứt định đang bị bám đuổi bám đuổi gắt gao bởi cái đuôi gai góc ngay sát sạt phía sau lưng độc độc vỏn vẹn trong tíc tắc lị, và——,"
  },
  {
    "en": "Emilia: \"Heya~a~aーー ~hk!!\"",
    "vi": "Emilia: “Hê~a~a~a~hーーư~hk!!”"
  }
]

fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'translation_temp', 'ch88_part2.json'),
  JSON.stringify(part2, null, 2),
  'utf-8'
)
console.log('Successfully wrote ch88_part2.json!')
