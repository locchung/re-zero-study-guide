import fs from 'fs'
import path from 'path'

const part3 = [
  {
    "en": "Ley: \"Louis and Roy, really sorry you two, but you kno~w! Preliminary preparation of ingredients is crucial in gourmet.\"",
    "vi": "Ley: “Louis và Roy lị, thực lòng rất xin lỗi hai đứa lị, cơ mà biết đấy nhể~! Khâu chuẩn bị nguyên liệu ban đầu sơ chế sơ chế d dứt định dẫu là khâu tối quan trọng tối quan trọng trong nghệ thuật ẩm thực sành ăn đấy lị.”"
  },
  {
    "en": "Whilst pressing the injuries of his entire body, Batenkaitos melancholically laughed upon his younger brother and sister who had been aiming for the same prey.",
    "vi": "Trong khi ghì tay đè chặt lên những vết thương chằng chịt rướm máu khắp cơ thể thịt của mình, Batenkaitos khẽ cười buồn bã khi nghĩ về người em trai và em gái ruột d dứt định dẫu đang nhắm thẳng vào cùng một con mồi trân quý."
  },
  {
    "en": "Louis had promptly withdrawn from the war front to safety, and Roy too would be rampaging in a seperate site about now. If that Oni were to just aim for those two, he would also be able to withdraw at leisure.",
    "vi": "Louis d dứt định dẫu lập tức chủ động rút khỏi chiến tuyến tháo chạy về nơi an toàn từ đời nào lị, và cả Roy lúc này d dứt định dẫu đang điên cuồng tàn phá tại một địa điểm hoàn toàn biệt lập lị. Nếu con Quỷ ấy chỉ nhắm thẳng vào hai đứa đó, hắn d dứt định d dứt định dẫu khả dĩ thong dong thong dong rút lui an toàn lị."
  },
  {
    "en": "Since Roy of『Bizarre Eating』did not know when to retreat, he may finally die, but it can't be helped.",
    "vi": "Bởi lẽ Roy của 『Bạo Thực』 quyết chả bao giờ biết thời điểm thích hợp thích hợp để rút lui lị, cuối cùng hắn có chém chết lìa đời đi chăng nữa d dứt định dẫu chả còn cách nào khác lị."
  },
  {
    "en": "Rather, he had been getting fed up of Roy's『Bizarre Eating』. Because that chap laid waste to hunting grounds per his pleasure, there must have been instances where gourmet delicacies supposed to come around to this side had gotten stolen away.",
    "vi": "Nói thực ra lị, hắn d dứt định dẫu chán ngấy cái thói 『Bạo Thực』 thô tục của Roy rồi lị. Bởi cái gã đó cứ thích phá nát bấy thảy mọi bãi săn theo ý thích tùy tiện tùy tiện của hắn lị, d dứt định dẫu có vô số lần những món ẩm thực tuyệt hảo hảo đáng lẽ ra phải thuộc về bên này lại bị hắn nẫng tay trên mất lị."
  },
  {
    "en": "ーーNo, had what his self feasted upon until now, truly been『Gourmet Delicacies』.",
    "vi": "——Không lị, những thứ mà bản thân hắn hằng thưởng thức ngấu nghiến từ trước đến nay, liệu có thực sự là 『Ẩm Thực Tuyệt Hảo』 chân chính chăng lị."
  },
  {
    "en": "Ley: \"Each and every single one, useless...... a~h, shit! Shit, shit, shit! Something like that, to think something like that exists, you kno~w! Even though it would've been all good had we not known about it, you kno~w!!\"",
    "vi": "Ley: “Hết thảy thảy mọi thứ, thảy thảy đều vô dụng...... a~h, chết tiệt! Khốn nạn, khốn nạn, khốn nạn! Một thứ phi thường ma mị dường ấy lị, quyết chả ngờ trên đời d dứt định dẫu tồn tại một thứ dường ấy, cưng biết đấy nhể~! Dẫu cho nếu tụi ta quyết chả hề hay biết gì về nó thì thảy mọi chuyện d dứt định dẫu vô cùng tuyệt vời rồi, cưng biết đấy nhể!!”"
  },
  {
    "en": "That, was not a sentiment induced by the feelings of a younger sister doting on her elder sister.",
    "vi": "Đó d dứt định quyết chả phải một loại tình cảm nảy sinh từ lòng yêu thương yêu chiều của một người em gái dành cho nee-sama của mình."
  },
  {
    "en": "That, was a sentiment yearning for something inestimable, unfathomable, immenseーー born from Batenkaitos' within, in the truest of truest sense, a potent emotion wishing for its desire from the depths of his heart.",
    "vi": "Đó d dứt định chính là một niềm khao khát khát khao mãnh liệt mãnh liệt hướng về một thứ quyết chả thể đo lường, quyết chả thể thấu suốt, vĩ đại vĩ đại vô ngần——được sinh ra từ tận sâu thẳm tâm can Batenkaitos, theo nghĩa chân thật chân thật nhất lị, một cảm xúc vô cùng mãnh liệt cầu xin khao khát khao khát từ tận đáy lòng."
  },
  {
    "en": "Want to, completely eat that one. With all of body and soul, want to completely savour that one.",
    "vi": "Muốn dứt định ăn ngấu nghiến nuốt chửng trọn vẹn trọn vẹn kẻ đó lị. Bằng thảy cả thể xác lẫn linh hồn, muốn dứt định thưởng thức thỏa thuê trọn vẹn kẻ đó lị."
  },
  {
    "en": "Championing『Gourmet』, he intended to have eaten all possible emotions and transcending, excelling talents. However, now that he was aware of the presence of the『Genuine』in this world, everything had faded away.",
    "vi": "Tự xưng tụng bản thân là 『Ẩm Thực Gia』, hắn vốn dĩ d dứt định dẫu nuốt chửng thảy mọi loại cảm xúc và những thiên tài ưu tú kiệt xuất kiệt xuất vượt bậc lị. Thế nhưng lị, vào thời điểm hiện tại khi hắn d dứt định dẫu nhận thức rõ sự hiện diện của 『Bản Bản Nguyên Nguyên Chân Chính』 trên thế gian này, thảy mọi thứ d dứt định dẫu trở nên nhạt nhòa phai sắc lị."
  },
  {
    "en": "All of what the existence named Ley Batenkaitos, as the Sin Archbishop of『Gluttony』, had trusted as possessing worth and garnered, crumbled to ruin and transformed into rubbish.",
    "vi": "Toàn bộ những gì mà sự tồn tại mang tên Ley Batenkaitos, với tư cách Đại Giám Mục Tội Lỗi của 『Phàm Ăn』, hằng tin tưởng tin tưởng là sở hữu giá trị vinh quang quý báu và dày công thu nhặt thu nhặt bấy lâu nay, thảy đều đổ nát tan tành vụn vỡ và lập tức biến thành đống rác rưởi quyết chả đáng một phân lị."
  },
  {
    "en": "Those lavish dinner tables which had been visible with such glisten, had been reduced to sand pits with mud dumplings atop.",
    "vi": "Bầy bàn tiệc thịnh soạn xa hoa vốn ngự trị lấp lánh rực rỡ dường ấy trước mắt, giờ đây d dứt định dẫu hóa thành những hố cát hoang tàn rải rác những viên đất sét bẩn thỉu ở trên lị."
  },
  {
    "en": "Ley: \"Want, that one.\"",
    "vi": "Ley: “Muốn dứt định kẻ đó lị.”"
  },
  {
    "en": "Want it, want it, want it, want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want it want itーー,",
    "vi": "Muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn muốn——,"
  },
  {
    "en": "If for the sake of eating that one, throwing anything and everything away would be completely fine.",
    "vi": "Nếu chỉ vì mục đích ăn ngấu nghiến nuốt chửng kẻ đó lị, vứt bỏ vứt bỏ thảy mọi thứ thảy thảy mọi thứ d dứt định dẫu dứt định d dứt định dẫu hoàn toàn chả sao sất lị."
  },
  {
    "en": "If for the purpose of eating that one, there would be no regrets in losing all that had been amassed until now.",
    "vi": "Nếu chỉ vì mục đích ăn ngấu nghiến nuốt chửng kẻ đó lị, dứt định quyết chả hề hối tiếc mảy may dù có phải đánh mất sạch sành sanh thảy mọi thứ dày công tích lũy bấy lâu nay lị."
  },
  {
    "en": "Don't want to savour anything other than that one. Don't want to fulfill oneself with anything other than that one.",
    "vi": "Quyết chả thèm thưởng thức bất kỳ thứ gì khác ngoài kẻ đó lị. Quyết chả thèm lấp đầy lấp đầy bản thân bằng bất kỳ thứ gì khác ngoài kẻ đó lị."
  },
  {
    "en": "Ley: \"Obugh, ghuee.\"",
    "vi": "Ley: “Ọe, ghuee.”"
  },
  {
    "en": "Whilst sprinting, vomit leaked out from the edge of Batenkaitos' mouth.",
    "vi": "Trong khi điên cuồng cắm đầu chạy trốn, bãi dịch nôn tởm lợm liên tục rò rỉ trào ra từ khóe miệng của Batenkaitos."
  },
  {
    "en": "Pain or anguish were not the cause. It was merely unbearable. Articles he trusted to be the finest were not so, and due to having become aware of what was supreme, all of what fulfilled his self was foul.",
    "vi": "Quyết chả phải cơn đau đớn dữ dội hay nỗi chua xót khổ sở là nguyên cớ lị. Đơn giản chỉ là quyết chả thể chịu đựng nổi nữa lị. Những món tiệc mà hắn hằng tin tưởng tin tưởng là tuyệt diệu hảo hạng nhất hóa ra d dứt định quyết chả phải thế lị, và chính vì đã lỡ nhận thức rõ thứ gì mới là tối thượng tối thượng chân chính lị, thảy những thứ đang lấp đầy bản thân hắn đều biến thành chất thải kinh tởm tột độ lị."
  },
  {
    "en": "Why, did he regard anything aside from that one as splendid. Commend anything aside from that one. Surfeit anything aside from that one.",
    "vi": "Tại sao chứ lị, tại sao hắn lại từng coi bất cứ thứ gì khác ngoài kẻ đó là tuyệt diệu diệu kỳ chứ lị. Tán thưởng ca ngợi bất cứ thứ gì khác ngoài kẻ đó lị. Ăn no nê ngấu nghiến bất cứ thứ gì khác ngoài kẻ đó lị."
  },
  {
    "en": "Simply what of him would be『Gourmet』, should he love anything aside from the truly splendidーー.",
    "vi": "Chả lẽ một kẻ như hắn lại d dứt định là 『Ẩm Thực Gia』 sao lị, nếu hắn dám đem lòng thương yêu yêu chiều bất cứ thứ gì khác ngoài vẻ đẹp tuyệt diệu tuyệt diệu thực sự ấy——."
  },
  {
    "en": "Ley: \"A~h, that's right, that is right, isn't that right, surely that is right, certainly that is right, indeed that is right, because that is right, because we wish for it to be right! Gluttonous drinking ~tsu! Gluttony ~tsu!\"",
    "vi": "Ley: “A~h, đúng hệt là thế lị, dứt định là thế lị, há chả phải thế sao lị, chắc chắn chắn d dứt định là thế lị, dứt định d dứt định dẫu là thế rồi lị, quả thực chính xác d dứt định dẫu là thế lị, bởi vì đó d dứt định dẫu là sự thật lị, bởi vì bọn ta khát khao khát khao nó là sự thật lị! Ăn uống ngấu nghiến vô độ ~tsu! Phàm Ăn cuồng bạo ~tsu!”"
  },
  {
    "en": "Surging appetite, hunger advancing toward fulfillment, and, the outcry from his heart wishing for and imploring desire.",
    "vi": "Sự thèm ăn cuộn trào cuồn cuộn lị, cơn đói khát điên cuồng đang tiến thẳng đến việc được thỏa mãn tối tột cùng lị, và d dứt định dẫu là tiếng gào thét xé lòng từ đáy tim khẩn cầu khẩn cầu ước muốn thèm khát khao khát lị."
  },
  {
    "en": "The desire to become one, the desire to blend together, if appetite was to intake external existences, then the『Gluttony』impelling his self was superlative love.",
    "vi": "Mong ước được hòa làm một thực thể lị, mong ước được hòa quyện trộn lẫn vào nhau lị, nếu sự thèm ăn đơn giản đơn giản là nuốt chửng các thực thể bên ngoài lị, thì thứ 『Phàm Ăn』 điên cuồng đang thôi thúc bản thân hắn d dứt định chính là thứ tình yêu yêu chiều tối thượng siêu việt siêu việt nhất lị."
  },
  {
    "en": "Ley: \"Love you, love you...... yes! Love you ~tsu! Nee-sama...... no, Ram! We love <em>you</em>ーー\"",
    "vi": "Ley: “Thương yêu chị lắm lị, thương yêu chị lắm...... phải rồi lị! Thương yêu chị lắm ~tsu! Nee-sama...... không lị, Ram lị! Bọn ta thương yêu <em>chị</em> lắm——”"
  },
  {
    "en": "The maximal emotion blooming within his self, whilst he attempted to clamour it loud, his words were abruptly interrupted.",
    "vi": "Cái cảm xúc cực hạn cực hạn dâng trào bừng nở bên trong tâm can hắn lị, ngay vào khoảnh khắc hắn đang cố gào hét hét lớn nó lên lị, câu từ của hắn d dứt định dẫu đột ngột bị cắt ngang xương nửa chừng lị."
  },
  {
    "en": "The cause was pain, and that it was the incidence of a novel anguish.",
    "vi": "Nguyên cớ d dứt định chính là cơn đau đớn đột ngột lị, và đó d dứt định dẫu là sự bộc phát của một nỗi thống khổ tàn khốc hoàn toàn mới mẻ lị."
  },
  {
    "en": "ーーAh?",
    "vi": "——A?"
  },
  {
    "en": "Checking his cheek, Batenkaitos ascertained his palm dyed with rich blood.",
    "vi": "Đưa tay sờ lên má mình lị, Batenkaitos kinh hoàng nhận ra lòng bàn tay mình d dứt định đã nhuộm đỏ tươi một màu máu nóng xối xả."
  },
  {
    "en": "The fresh slash, a wound ripping Batenkaitos' cheek, who had been heading towards the outside of the tower in order to escapeーー its cause, empty space.",
    "vi": "Một nhát chém sắc lẹm hoàn toàn mới mẻ lị, vết thương rách toác toang cả má của Batenkaitos lị, người đang cắm đầu phi nhanh hướng ra phía bên ngoài tháp canh hòng trốn thoát thân thoát thân——nguyên cớ gây ra nó d dứt định chính là khoảng không gian trống rỗng lị."
  },
  {
    "en": "Ley: \"ーーーー\"",
    "vi": "Ley: “ーーーー”"
  },
  {
    "en": "Wordlessly stretching his finger to that point, Batenkaitos observed his finger get cut.",
    "vi": "Quyết chả nói nửa lời nửa lời khẽ vươn ngón tay dò dẫm tới vị trí đó lị, Batenkaitos chết lặng khi chứng kiến ngón tay của mình d dứt định dẫu lập tức bị cắp toác một đường rướm máu."
  },
  {
    "en": "In the empty space, was an invisible blade.",
    "vi": "Ngay giữa khoảng không gian trống rỗng trống rỗng ấy lị, d dứt định dẫu ngự trị một lưỡi đao vô hình vô hình lị."
  },
  {
    "en": "Ley: \"Huh.\"",
    "vi": "Ley: “Hử.”"
  },
  {
    "en": "That was, the same technique as what Batenkaitos had displayed to Ram at the spiral staircase.",
    "vi": "Đó d dứt định d dứt định chính là kỹ thuật thực chiến hệt hệt như thứ mà Batenkaitos từng phô diễn thị uy trước Ram tại khu cầu thang xoắn ốc lị."
  },
  {
    "en": "The art of installing blades of invisibility in space was a legendary shinobi technique, but it didn't matter whose『Memories』it was in since he had already thrown it away.",
    "vi": "Nghệ thuật giăng giăng bầy đao vô hình giữa khoảng không vốn dĩ là một bí kỹ ninja ninja truyền thoại lị, cơ mà lúc này quyết chả còn quan trọng là nó nằm trong 『Ký Ức』 của ai nữa sất lị, bởi hắn d dứt định dẫu sớm vứt bỏ vứt bỏ sạch sành sanh đống ký ức cướp đoạt ấy từ đời nào rồi lị."
  },
  {
    "en": "The issue was the presence of a blade here, which Batenkaitos did not remember placing behind.",
    "vi": "Vấn đề cốt lõi hiểm nghèo ở chỗ lưỡi đao vô hình ngự trị ở nơi này lị, Batenkaitos quyết chả hề có phân ký ức ký ức nào về việc tự mình giăng bẫy đặt lại ở đây cả."
  },
  {
    "en": "Ley: \"It can't be......\"",
    "vi": "Ley: “Quyết chả thể nào như thế được......”"
  },
  {
    "en": "Avoiding the blade that had slightly cut his finger, Batenkaitos attempted to advance his feet further towards the interiorーー his tiptoes were blown off, and he inclined backwards whilst shrieking \"Ahii ~hk\".",
    "vi": "Cố né tránh lưỡi đao vô hình vừa khẽ cắt đứt ngón tay mình lị, Batenkaitos cố kiên trì bước chân tiến sâu thêm vào phía bên trong lối đi——mũi chân hắn lập tức bị đứt lìa thổi bay văng đi mất lị, khiến hắn ngả người bật ngửa ngược ra sau trong khi hét lên kinh hoàng “Ahii ~hk”."
  },
  {
    "en": "And, with the inclining back of his head also slightly whittled, he rigidified his face and stood still.",
    "vi": "Và rồi lị, khi phần gáy đầu đang ngửa ra sau dẫu khẽ bị bào mòn nạo xén một mảng lị, hắn lập tức cứng đờ cả khuôn mặt kinh hoàng và đứng im phăng phắc phăng phắc chả dám cử động lị."
  },
  {
    "en": "ーーHe was enclosed, by invisible blades.",
    "vi": "——Hắn d dứt định dẫu bị bao vây bao vây chặt chẽ bởi bầy đao vô hình vô hình lị."
  },
  {
    "en": "Ley: \"......Haha, seriously?\"",
    "vi": "Ley: “......Ha ha, đùa à lị?”"
  },
  {
    "en": "He had shown it to her, merely once.",
    "vi": "Hắn d dứt định chỉ mới phô diễn phô diễn chiêu thức ấy trước mặt cô độc độc vỏn vẹn đúng một lần duy nhất duy nhất lị."
  },
  {
    "en": "Once in the midst of battle, that too it was an invisible technique, so she must not have seen it either.",
    "vi": "Lại còn là một lần duy nhất ngay giữa trận quyết chiến hỗn loạn hỗn loạn tột cùng lị, hơn nữa đó d dứt định dẫu là một kỹ thuật vô hình vô hình quyết chả thể nhìn thấy bằng mắt thường lị, thế nên dứt định cô quyết chả thể nào nhìn thấy nổi lấy phân hào đường nét sất lị."
  },
  {
    "en": "Moreover, she had not ever practically even stepped foot in this place. Yet regardless, she had seized this side's escape route, and had stationed invisible blades in advance.",
    "vi": "Chưa kể tới lị, cô thực chất quyết chả hề đặt chân bước tới vị trí địa điểm này bao giờ lị. Vậy mà hoàn toàn bất chấp thảy thảy điều đó lị, cô d dứt định dẫu phong tỏa bít kín hoàn toàn lối thoát thân duy nhất của hắn lị, và âm thầm giăng sẵn giăng sẵn bầy đao vô hình từ trước lúc nào quyết chả hay lị."
  },
  {
    "en": "Ley: \"ーーーー\"",
    "vi": "Ley: “ーーーー”"
  },
  {
    "en": "Batenkaitos put his hand, not on his left eye which had been slashed by the blade of wind and had ceased functioning, but on his right eye which was narrowly in good health. ーーThrough『Clairvoyance』, Ram was jointly sharing this eye.",
    "vi": "Batenkaitos đưa bàn tay nhuốm máu tươi đặt lên lị, quyết chả phải đặt lên con mắt trái d dứt định dẫu bị đao gió chém hỏng bét quyết chả còn nhìn thấy gì nữa lị, mà là con mắt phải đang may mắn sống sót lành lặn lành lặn của mình lị. ——Thông qua 『Thiên Lý Nhãn』, Ram d dứt định dẫu đang trực tiếp chia sẻ chung tầm nhìn thị giác của con mắt này lị."
  },
  {
    "en": "She, did not let Batenkaitos escape. Overlapping with this eye, she shan't let him escape.",
    "vi": "Cô lị, dứt định quyết không bao giờ để Batenkaitos chạy trốn thoát thân đâu lị. Chồng khít lên tầm nhìn của con mắt này lị, cô dứt định quyết chả bao giờ để hắn chạy trốn đâu lị."
  },
  {
    "en": "Ley: \"Hihah.\"",
    "vi": "Ley: “Hihah.”"
  },
  {
    "en": "Batenkaitos laughed. No longer could he do anything, but laugh.",
    "vi": "Batenkaitos khẽ bật cười điên cuồng lị. Vào thời khắc này hắn quyết chả còn khả dĩ làm được phân trò trống gì sất ngoài việc cười điên dại lị."
  },
  {
    "en": "He had loved. For the first time, had mightily, powerfully yearned for something. He was charmed, by that unordinary essence.",
    "vi": "Hắn d dứt định dẫu thực sự biết yêu yêu chiều rồi lị. Lần đầu tiên trong cuộc đời cuộc đời lị, hắn d dứt định dẫu khao khát khát khao một thứ gì đó một cách vô cùng mãnh liệt, điên cuồng dường ấy lị. Hắn d dứt định dẫu bị mê hoặc cuồng nhiệt bởi bản chất phi thường phi thường phi thực tế dường ấy lị."
  },
  {
    "en": "Andーー,",
    "vi": "Và rồi——,"
  },
  {
    "en": "Ley: \"Ah! Wait, please do wait! Hold on hold on, a bit more! Just a bit more! Just a bit more, so ~tsu!\"",
    "vi": "Ley: “A! Khoan đã lị, làm ơn hãy chờ tụi ta chút lị! Khoan đã khoan đã lị, một chút nữa thôi lị! Chỉ một chút nữa thôi lị! Chỉ một chút nữa thôi mà ~tsu!”"
  },
  {
    "en": "No matter how much shall he implore to 『Clairvoyance』, the voice shan't reach, that was per knowledge.",
    "vi": "Dẫu cho hắn có tuyệt vọng van nài khẩn cầu van nài khẩn cầu 『Thiên Lý Nhãn』 đến nhường nào đi chăng nữa lị, giọng nói van vỉ ấy dứt định dẫu quyết chả bao giờ chạm tới được cô đâu lị, điều đó d dứt định dẫu sớm nằm trong nhận thức của hắn rồi lị."
  },
  {
    "en": "Thus, his frantic calls were not for the opponent to hear. They were for impelling oneself.",
    "vi": "Chính vì lẽ đó, bầy tiếng la hét cuống cuồng hoảng hốt của hắn quyết chả phải để cho đối thủ lắng nghe lị. Chúng chỉ đơn thuần dùng để thôi thúc thúc giục chính bản thân hắn hành động mà thôi lị."
  },
  {
    "en": "In great fluster and haste, Batenkaitos held fast to the wall immediately beside him.",
    "vi": "Giữa cơn bấn loạn và vội vã tột cùng tột cùng lị, Batenkaitos nhanh chóng chộp chặt lấy bức tường đá ngự trị ngay sát bên cạnh mình lị."
  },
  {
    "en": "He had done something impetuous by discarding away what he had eaten. If only the remarkable genius of the『Fist King』had remained, he could have overcome this facing no hardship.",
    "vi": "Hắn d dứt định dẫu làm một việc cực kỳ hấp tấp bồng bột khi tùy tiện vứt bỏ cắp sạch những gì mình đã nuốt chửng ăn ngấu trước đây lị. Nếu chỉ cần cái tài năng thực chiến kiệt xuất kiệt xuất phi thường của 『Quyền Vương』 còn sót sót lại phân nào lị, hắn d dứt định dẫu vượt qua chướng ngại vật hiểm nghèo này quyết chả chút khó khăn cực nhọc nào sất lị."
  },
  {
    "en": "Deferring those emotions as well, Batenkaitos struck his arms into the invisible blades. The wrists of both of his hands erupting, blood cascaded out of the mouth of those wounds.",
    "vi": "Tạm gạt bỏ thảy mọi cảm xúc phiền hà ấy sang một bên lị, Batenkaitos điên cuồng đâm thẳng cả hai cánh tay của mình vào thẳng bầy đao vô hình vô hình đang cản lối lị. Cổ tay của cả hai tay lập tức đứt lìa toác bấy bộc phát lị, máu tươi xối xả tuôn trào cuồn cuộn ra từ miệng các vết thương rách toác ấy lị."
  },
  {
    "en": "It hurts, it hurts, it hurts, it hurts but, pain, doesn't matter right now.",
    "vi": "Đau quá lị, đau quá lị, đau quá lị, đau chết mất thôi lị, thế nhưng lị, nỗi đau đớn lúc này d dứt định quyết chả còn quan trọng lấy một phân nào nữa sất lị."
  },
  {
    "en": "Ley: \"Please do accept, our feelings ~tsu! Please do watch over, our wishes ~tsu!\"",
    "vi": "Ley: “Làm ơn hãy tiếp nhận lị, tiếp nhận trọn vẹn nỗi lòng của bọn ta ~tsu! Làm ơn hãy dõi theo lị, dõi theo trọn vẹn ước muốn của bọn ta ~tsu!”"
  },
  {
    "en": "Merely, pressing his arms spouting blood onto the wall, with all of his strength, he drew letters.",
    "vi": "Chỉ đơn thuần lị, dí chặt cánh tay đang tuôn trào phun máu xối xả xối xả xối xả lên bức tường đá phẳng lị, bằng thảy thảy thảy sức mạnh của bản thân lị, hắn điên cuồng vạch từng nét vẽ chữ lị."
  },
  {
    "en": "With dusky blood, using his small, petite body with all of his might, he drew enormous, gigantic letters onto the wall of the sand tower.",
    "vi": "Bằng dòng máu thẫm sẫm màu lị, tận dụng tối đa thân hình nhỏ bé nhỏ nhắn của mình với thảy thảy sức mạnh lồng ngực lị, hắn điên cuồng phác họa những nét chữ khổng lồ khổng lồ kinh hoàng lên bức tường đá của tòa tháp cát lị."
  },
  {
    "en": "Ley: \"Buha~ ~hk.\"",
    "vi": "Ley: “Phụt~ ~hk.”"
  },
  {
    "en": "And, making his own self stand back, he viewed those letters with his right eye dilated.",
    "vi": "Và rồi lị, tự né tránh giật người lùi ra phía sau một bước lị, hắn đăm đăm ngắm nhìn những nét chữ đỏ tươi ấy với con mắt phải giãn to hết cỡ vì phấn khích cuồng nhiệt lị."
  },
  {
    "en": "For those letters of blood depicted on the wall, to reach the one whom he eternally wished for from the bottom of his heart.",
    "vi": "Để bầy nét chữ bằng máu tươi được khắc họa nổi bật trên bức tường kia lị, d dứt định sẽ khả dĩ chạm tới thực thể mà hắn hằng khao khát khát khao vĩnh hằng từ tận đáy lòng sâu thẳm lị."
  },
  {
    "en": "Because if her then certainly, until the very end of the end, she shall kindly watch over whilst remaining overlapped with his own self.",
    "vi": "Bởi lẽ nếu d dứt định chính là cô lị, thì cho tới tận giây phút cuối cùng của cuối cùng lị, cô chắc chắn dứt định sẽ dịu dàng dõi theo dõi theo hắn trong khi vẫn giữ nguyên trạng thái chồng khít khớp khớp với linh hồn hắn dẫu vậy lị."
  },
  {
    "en": "Ley: \"Ah, love yーー\"",
    "vi": "Ley: “A, thương yêu chーー”"
  },
  {
    "en": "ーーBefore he could reach the end of his words, the Sin Archbishop of『Gluttony』had been beheaded by a blade of wind.",
    "vi": "——Quyết chả kịp để hắn thốt lên câu từ cuối cùng của mình lị, đầu của tên Đại Giám Mục Tội Lỗi của 『Phàm Ăn』 d dứt định dẫu bị chém bay lìa lìa khỏi cổ bởi một lưỡi đao gió sắc bén tột độ lị."
  },
  {
    "en": "△▼△▼△▼△",
    "vi": "△▼△▼△▼△"
  },
  {
    "en": "Ram: \"ーーFula.\"",
    "vi": "Ram: “——Fula lị.”"
  },
  {
    "en": "Swinging her fingers, having hurled the blade of wind, Ram whispered merely a single word.",
    "vi": "Khẽ vung nhẹ đầu ngón tay kiều diễm lị, sau khi phóng lưỡi đao gió lao vút đi lị, Ram chỉ đơn thuần thì thầm độc độc vỏn vẹn một từ ma pháp duy nhất lị."
  },
  {
    "en": "Even if the proportion of magic had impact within its range of effect, that power itself did not undergo severe change. Not to mention, if only a slim neck was to be blown off through the cutting ability of the blade of wind, then even the minimum power sufficed.",
    "vi": "Dẫu cho tỷ lệ ma pháp có tầm ảnh hưởng nhất định trong phạm vi tác động của nó lị, song bản thân thứ sức mạnh ấy quyết chả hề trải qua phân biến chuyển to lớn nào sất lị. Chưa kể tới lị, nếu d dứt định chỉ cần thổi bay lìa một cái cổ nhỏ nhắn mỏng manh bằng khả năng chém sắt như chém bùn của đao gió lị, thì dứt định d dứt định chỉ cần một mức uy lực tối thiểu dẫu thừa sức hoàn thành mục tiêu rồi lị."
  },
  {
    "en": "Pursuing the back of『Gluttony』who had fled, Ram had fired a solitary blade of wind.",
    "vi": "Đuổi sát theo bóng lưng tháo chạy chạy trốn của tên 『Phàm Ăn』 lị, Ram d dứt định dẫu phóng ra một đao gió duy nhất đơn độc lị."
  },
  {
    "en": "She had deftly grasped the trace of the desperately escaping『Gluttony』through『Clairvoyance』.",
    "vi": "Cô d dứt định dẫu nắm bắt bắt gọn một cách vô cùng điêu luyện vết tích tháo chạy chạy trốn đầy tuyệt vọng của tên 『Phàm Ăn』 thông qua 『Thiên Lý Nhãn』 lị."
  },
  {
    "en": "She had employed certain tricks as a hurdle in his path for her aim to be precise, but they seemed to have functioned well for how hurriedly they had been constructed.",
    "vi": "Cô d dứt định dẫu sử dụng vài thủ thuật ma thuật nhỏ làm vật cản cản trở cản trở trên đường tháo chạy của hắn hòng đảm bảo mục tiêu tấn công chuẩn xác tuyệt đối lị, song xem ra chúng d dứt định hoạt động vô cùng trơn tru hiệu quả bất chấp việc được giăng ra một cách vô cùng vội vã bấp bênh lị."
  },
  {
    "en": "And, on the brink of the final blade's arrival,『Gluttony』undertook abnormal conduct.",
    "vi": "Và rồi lị, ngay trước khoảnh khắc nhát đao gió chí mạng cuối cùng ập xuống đầu lị, tên 『Phàm Ăn』 d dứt định dẫu có một hành vi phản ứng dị thường dị thường phi logic lị."
  },
  {
    "en": "Slashing off his own arms, using that blood, he drew letters of blood onto the wall.",
    "vi": "Tự tay chém đứt phăng cả hai cánh tay của mình lị, sử dụng dòng máu tươi nóng hổi tuôn trào ấy lị, hắn điên cuồng vạch vẽ vẽ nét chữ bằng máu lên bức tường đá lị."
  },
  {
    "en": "Though that which was squalid and dreadfully arbitrary, was malignant bedevilment possessing no worth to even be viewedーー,",
    "vi": "Dẫu cho thứ dơ bẩn bẩn thỉu và tùy tiện tùy tiện đến điên khùng ấy lị, d dứt định chỉ là một trò ma mãnh hiểm ác quyết chả có lấy phân nửa giá trị để thèm ngước mắt nhìn ngó lấy một giây đi chăng nữa——,"
  },
  {
    "en": "\"ーーーー\"",
    "vi": "“ーーーー”"
  },
  {
    "en": "At the very end of the end, having watched over the upward soar as those blood letters birled and gyrated, she closed her eyes.",
    "vi": "Tuy nhiên vào giây phút cuối cùng của cuối cùng lị, lặng lẽ dõi theo dòng chữ máu tươi đang xoay vần lộn nhào bay vút vút lên trên kia lị, cô d dứt định khẽ khép chặt đôi mi lại lị."
  },
  {
    "en": "She did so entirely because she could not have taken relief otherwise. She had not an atom of obligation, that she ought to watch over.",
    "vi": "Cô làm vậy hoàn toàn chỉ bởi nếu quyết chả làm thế thì dứt định lòng quyết chả thể thanh thản nổi lị. Cô quyết chả hề có lấy một phân nghĩa vụ nghĩa vụ bắt buộc nào để phải bận tâm dõi theo dõi theo thảy mọi chuyện của hắn cả lị."
  },
  {
    "en": "The blasphemer, erred his final choice.",
    "vi": "Tên báng bổ tội đồ khốn nạn ấy lị, cuối cùng d dứt định dẫu lựa chọn sai lầm ở nước đi quyết định cuối đời lị."
  },
  {
    "en": "Had he put his life on the line for the sake of his younger siblings, Ram would not have denied him mercy either. However, putting aside the undeniable genuinity of his words, he also used that as bait and deceived Ram, making it also a tool for his own self's survival.",
    "vi": "Nếu hắn d dứt định dũng cảm liều mạng sống quèn của mình chỉ vì lợi ích an nguy của bầy em nhỏ trân quý lị, Ram chắc chắn dứt định quyết chả hẹp hòi từ chối ban phát cho hắn phân từ bi lòng thương xót nào đâu lị. Thế nhưng lị, tạm bỏ qua sự chân thật quyết chả thể phủ nhận trong câu từ của hắn lị, hắn d dứt định dẫu dùng chính thứ đó làm mồi nhử hòng đánh lừa gạt gạt Ram lị, biến nó thành một công cụ hèn hạ phục vụ cho sự sinh tồn tháo chạy của bản thân mình lị."
  },
  {
    "en": "He likely did not know the method of restoring what was eaten either. Had he known, he was supposed to have pleaded for his life with that as material for negotiation. ーーHe did not. Thus, he had to suffer nemesis.",
    "vi": "Hắn d dứt định dẫu quyết chả hề hay biết phương pháp phục hồi những ký ức hay danh tánh đã bị nuốt chửng cướp đoạt lị. Nếu hắn mà biết lị, dứt định hắn phải dùng thứ đó làm điều kiện tối thượng để cầu xin van nài thương lượng giữ lại mạng sống rồi lị. ——Hắn quyết chả hề làm thế lị. Chính vì lẽ đó lị, hắn buộc phải gánh chịu sự quả báo trừng phạt thích đáng lị."
  },
  {
    "en": "Ram: \"Those who wield the sword fall to the sword, those who cling to evil fall to evil, those who yield to fire fall to fire. ーーAnd, those who wish for the Oni fall to the Oni, destroyed by what one relies on.\"",
    "vi": "Ram: “Những kẻ dùng kiếm dứt định dẫu chết dưới kiếm lị, những kẻ bám víu vào cái ác d dứt định dẫu gục ngã trước cái ác lị, những kẻ đùa giỡn với lửa d dứt định dẫu bị thiêu rụi bởi lửa lị. ——Và rồi lị, những kẻ khao khát khát cầu Quỷ d dứt định dẫu bị hủy diệt bởi Quỷ lị, bị tàn phá tàn phá bởi chính thứ sức mạnh mà mình hằng dựa dẫm tôn sùng lị.”"
  },
  {
    "en": "ーーThat was, the divine providence of retribution Ram placed her faith in.",
    "vi": "——Đó chính là chân lý quả báo nhân quả nhân quả xoay vần xoay vần mà Ram hằng gửi gắm đức tin trọn vẹn lị."
  },
  {
    "en": "Swinging her arm down, she let a long exhale.",
    "vi": "Khẽ hạ xuôi cánh tay kiều diễm xuống lị, cô nhẹ nhàng trút một hơi thở dài thườn thượt nhẹ nhõm lị."
  },
  {
    "en": "Afterwards, Ram turned backwards, returning to the extensively ruined aisle. She could not have fought at close vicinity, so she had taken upon herself to be further distant.",
    "vi": "Sau đó lị, Ram quay lưng bước đều bước lị, quay trở lại khu lối đi đổ nát tan tành hoang tành đổ nát lị. Cô vốn dĩ quyết chả thể chiến đấu ở cự ly quá gần lị, thế nên d dứt định dẫu tự động lùi ra một khoảng cách xa hơn lị."
  },
  {
    "en": "A vexing sense of distance, hence Ram's gait spontaneously became restless.",
    "vi": "Một khoảng cách thật phiền hà phiền hà lị, chính vì lẽ đó bước đi của Ram d dứt định dẫu vô thức trở nên có chút vội vã vội vã lị."
  },
  {
    "en": "\"ーーDodogyuuun.\"",
    "vi": "“——Dodogyuuun lị.”"
  },
  {
    "en": "Once she made her return by treading through the collapsed wall, what greeted Ram was the cry of a tall Ground Dragon.",
    "vi": "Khi cô vừa bước qua bức tường đá sụp đổ đổ nát để quay trở lại lị, thứ cất tiếng chào đón Ram d dứt định chính là tiếng kêu vang của con Địa Long hộ pháp đen tuyền lị."
  },
  {
    "en": "That jet black Ground Dragon had aptly manoeuvred its body and concealed Rem's figure behind. Worst-case scenario, had the one to return not been Ram, then it perhaps intended to act like a shield or so.",
    "vi": "Con Địa Long đen tuyền tuyền vĩ đại ấy đã khéo léo dịch chuyển thân hình to lớn của mình hòng che chở giấu kín hình bóng của Rem ở phía sau lưng lị. Trong tình huống xấu xấu nhất lị, nếu thực thể quay trở lại quyết chả phải là Ram lị, dứt định nó d dứt định dẫu sẵn sàng biến cơ thể mình thành lá chắn che chở che chở bảo vệ em ấy lị."
  },
  {
    "en": "Despite being in such a tattered state, for it to gallantly abide by Subaru's command, it was truly a Ground Dragon too good for Subaruーー,",
    "vi": "Bất chấp việc cơ thể d dứt định dẫu chằng chịt vết thương tơi bời tơi bời lị, nó d dứt định vẫn dũng cảm kiên cường tuân thủ trọn vẹn mệnh lệnh của Subaru lị, đây quả thực d dứt định chính là một con Địa Long quá đỗi tuyệt vời xa xỉ đối với một gã như Subaru mà lị——,"
  },
  {
    "en": "Ram: \"ーーNo, that's wrong. Did you also, wish to protect Rem?\"",
    "vi": "Ram: “——Quyết chả phải lị, ta d dứt định dẫu sai rồi lị. Có phải bản thân ngươi dẫu vậy lị, d dứt định dẫu khát khao muốn bảo vệ chở che cho Rem chăng lị?”"
  },
  {
    "en": "\"ーーーー\"",
    "vi": "“ーーーー”"
  },
  {
    "en": "Ram: \"Yes...... you truly are a good girl, Patrasche.\"",
    "vi": "Ram: “Phải rồi lị...... ngươi thực sự d dứt định chính là một cô gái ngoan ngoãn đáng yêu lị, Patrasche lị.”"
  },
  {
    "en": "She softly caressed that Ground Dragon's neck.",
    "vi": "Cô dịu dàng vỗ về nhẹ nhàng vuốt ve chiếc cổ cứng cáp của con Địa Long trân quý ấy lị."
  },
  {
    "en": "It would also be necessary to immediately carry her wounded, injured self to the『Green Room』as well. Even the Ground Dragon who exemplified befitting loyalty, could not be made to strain itself with these injuries.",
    "vi": "Cần thiết dứt định dẫu phải lập tức đưa thân xác chằng chịt thương tích băm vằm của mình tiến thẳng về phía 『Phòng Xanh』 ngay tức khắc lị. Ngay cả một con Địa Long biểu trưng cho lòng trung thành sắt son sắt son dường ấy lị, d dứt định dẫu quyết chả thể bắt nó phải gồng mình chịu đựng quá sức thêm phân nào với mớ thương tích này lị."
  },
  {
    "en": "Neither did Ram wish to do anything preposterous to the benefactory personーー the benefactory dragon of her younger sister.",
    "vi": "Bản thân Ram d dứt định dẫu quyết chả bao giờ muốn thực hiện bất kỳ hành vi điên rồ quá đáng nào đối với ân nhân——con rồng ân nhân của người em gái nhỏ trân quý của mình sất lị."
  },
  {
    "en": "Subsequently, expressing her gratitude to the Ground Dragon, Ram made her way to Rem, who was being protected behind her.",
    "vi": "Sau đó lị, khẽ bày tỏ lòng biết ơn trân quý tới con Địa Long lị, Ram bước đều bước điềm tĩnh tiến thẳng tới bên Rem lị, người đang được chở che bảo vệ an toàn ở phía sau lưng cô lị."
  },
  {
    "en": "The sharing of the horn's might utilising『Synesthesia』had already been undone, so no horn was present on her forehead. However, the recoil of having shouldered Ram's strength, commensurate with that of the Oni God, had soundly eaten into that body of her's.",
    "vi": "Sự san sẻ chia sẻ sức mạnh của chiếc sừng thông qua phương pháp 『Cộng Cảm』 d dứt định dẫu sớm được gỡ bỏ từ đời nào lị, thế nên quyết chả còn chiếc sừng nào ngự trị trên trán em ấy sất lị. Tuy nhiên lị, cái phản phệ cực hạn từ việc gánh vác trọn vẹn nguồn sức mạnh vĩ đại vĩ đại của Ram lị——thứ sức mạnh tương đương với Quỷ Thần tôn kính năm xưa lị——d dứt định dẫu âm thầm ăn mòn gặm nhấm gặm nhấm sâu sắc vào cơ thể mảnh mai ấy mất rồi lị."
  },
  {
    "en": "Such that Ram herself felt heavy upon contemplating the recoil that surely will pay a call upon her soon.",
    "vi": "Đến mức bản thân Ram d dứt định dẫu cảm thấy nặng trĩu trĩu cả lòng ngực lị, khi thầm cân nhắc suy tính suy tính về cái phản phệ tàn khốc dứt định dẫu sớm gõ cửa tìm đến mình trong tích tắc sắp tới lị."
  },
  {
    "en": "Butーー,",
    "vi": "Thế nhưng——,"
  },
  {
    "en": "Ram: \"Right now, at this time, anything boorish cannot be thought of.\"",
    "vi": "Ram: “Ngay lúc này lị, vào thời điểm này lị, dứt định quyết chả được phép suy nghĩ bận tâm suy nghĩ bận tâm tới bất cứ chuyện gì thô thiển thô thiển chướng tai gai mắt sất lị.”"
  },
  {
    "en": "Gently kneeling down at her position, Ram positioned her hand onto the cheek of her perpetually slumbering younger sister.",
    "vi": "Nhẹ nhàng khuỵu gối xuống bên cạnh em lị, Ram dịu dàng đặt bàn tay kiều diễm của mình lên đôi má trắng trẻo của người em gái đang chìm sâu sâu trong giấc ngủ ngàn thu lị."
  },
  {
    "en": "The bond as sisters devoid of actual feeling, now accompanied with a far greater certitude of actual feeling compared to before, she felt lovability and cherishment overflow.",
    "vi": "Mối liên kết chị em vốn dĩ quyết chả có cảm giác thực tế chân thực chân thực bấy lâu nay lị, nay lại đồng hành cùng một cảm giác chắc chắn chắc chắn và thực tế vượt bậc so với trước đây lị, khiến cô cảm thấy lòng ngập tràn ngập tràn tình yêu thương yêu chiều và trân quý khôn xiết lị."
  },
  {
    "en": "With her horn broken off, having lost her might as the reincarnation of the Oni God, she had lived until today.",
    "vi": "Với chiếc sừng bị chém rụng năm xưa lị, đánh mất đi sức mạnh tối cao của hóa thân Quỷ Thần lị, cô d dứt định dẫu sinh sống sinh sống bình thản cho đến tận ngày hôm nay lị."
  },
  {
    "en": "For what purpose did that night of blazes befall, until now Ram had surmised it had befell for the purpose of making her herself, neither did she consider that to be mistaken.",
    "vi": "Vì mục đích mục đích tối thượng gì mà cái đêm hỏa hoạn rực đỏ rực ấy lại xảy đến gõ cửa lị, từ trước đến nay Ram d dứt định luôn suy đoán phán đoán rằng chuyện đó xảy ra đơn thuần đơn thuần để cô d dứt định khả dĩ làm chính mình mà thôi lị, và cô quyết chả hề cho rằng suy nghĩ ấy có phân sai sót nào sất lị."
  },
  {
    "en": "However, starting today and this moment, that changed.",
    "vi": "Thế nhưng lị, bắt đầu từ ngày hôm nay và chính vào khoảnh khắc thiêng liêng này lị, thảy mọi thứ d dứt định dẫu biến chuyển thay đổi rồi lị."
  },
  {
    "en": "The reason why that day, Ram's horn had been broken offーー,",
    "vi": "Lý do thực sự tại sao vào cái ngày định mệnh hôm ấy lị, chiếc sừng của Ram d dứt định dẫu bị chém rụng lìa lìa——,"
  },
  {
    "en": "Ram: \"ーーIt was to realize, today, here, that Ram is Rem's nee-sama.\"",
    "vi": "Ram: “——Chính là để nhận thức rõ lị, vào ngày hôm nay lị, ngay tại nơi này lị, thực tế rằng Ram d dứt định chính là nee-sama của Rem lị.”"
  },
  {
    "en": "For she had been able to actually feel, with the contact between the soul and the soul via『Synesthesia』, that they were twins who shared the same world, that they were irreplaceable elder and younger sisters.",
    "vi": "Bởi lẽ cô d dứt định dẫu thực sự cảm nhận sâu sắc sâu sắc lị, thông qua sự tiếp xúc thiêng liêng giữa linh hồn kết nối linh hồn bằng 『Cộng Cảm』 lị, thực tế thiêng liêng rằng họ chính là cặp chị em sinh đôi cùng chia sẻ sẻ chung một thế giới bao la lị, rằng họ chính là hai chị em nee-sama và em gái quyết chả thể thay thế thế chỗ trên đời lị."
  },
  {
    "en": "Ram: \"More than ever before, Ram wants to talk to you. What kind of a time, did you and Ram spend. What kind of a yesterday did you and Ram collect, let's replenish the devoid reminiscences together.\"",
    "vi": "Ram: “Hơn bất cứ lúc nào trước đây lị, Ram d dứt định dẫu rất muốn trò chuyện trò chuyện thật nhiều với em lị. Ram và em d dứt định dẫu trải qua chuỗi ngày thời gian thế nào lị. Ram và em d dứt định dẫu tích lũy thu lượm thu lượm ngày hôm qua ra sao lị, chúng ta hãy cùng nhau lấp đầy lấp đầy thảy mọi khoảng trống hoang vu ký ức thiếu vắng ấy nhé lị.”"
  },
  {
    "en": "Since time flowed without halt, however many reminiscences of the future could be mounded.",
    "vi": "Bởi dòng chảy thời gian quyết chả bao giờ ngừng trôi ngừng trôi lị, dẫu cho bao nhiêu ký ức hoài niệm của tương lai tương lai d dứt định dẫu khả dĩ bồi đắp bồi đắp chất chồng cao như núi lị."
  },
  {
    "en": "Thus, for everything to not evanesce remaining unknown, remaining unremembered, day after day, let's make flowers bloom in reminiscences as many times as need be.",
    "vi": "Chính vì thế lị, để thảy thảy mọi thứ quyết chả biến mất hoang hoang trong quên lãng quyết chả ai hay biết lị, quyết chả ai nhớ tới lị, chuỗi ngày qua ngày lị, chúng ta hãy cùng nhau gieo hạt khiến muôn đóa hoa hoài niệm nở nở rộ rực rỡ ngập trời bao nhiêu lần dẫu được sất lị."
  },
  {
    "en": "Ram: \"Let's converse lots, of what yesterday held.\"",
    "vi": "Ram: “Chúng ta d dứt định dẫu cùng đàm thoại đàm thoại thật nhiều lị, về những gì ngày hôm qua hằng nắm giữ nhé lị.”"
  },
  {
    "en": "The『Sleeping Beauty』shan't respond.",
    "vi": "『Nàng Công Chúa Ngủ Trong Rừng』 d dứt định quyết chả đưa ra lời phản hồi đáp lại sất lị."
  },
  {
    "en": "Although, without letting her chest congeal upon her silence and instead fulfilling it with something warm, Ram smiled.",
    "vi": "Tuy nhiên lị, quyết chả để lồng ngực mình trở nên lạnh giá buốt lạnh trước sự tĩnh lặng im lìm ấy lị, thay vào đó bằng cách lấp đầy lấp đầy trái tim bằng một thứ gì đó vô cùng ấm áp ấm áp dễ chịu lị, Ram khẽ nở nụ cười kiều diễm quyến rũ lị."
  },
  {
    "en": "Whilst smiling, with no longer any qualms for her own emotions, she moved her lips.",
    "vi": "Trong khi khẽ mỉm cười dịu dàng lị, quyết chả còn bất cứ nỗi e dè nghi ngại nào về cảm xúc thực tâm can của bản thân nữa lị, cô khẽ mấp máy đôi môi mỏng kiều diễm lị."
  },
  {
    "en": "Ram: \"ーーLove you, Rem.\"",
    "vi": "Ram: “——Thương yêu em nhiều lắm lị, Rem lị.”"
  },
  {
    "en": "Certainly, no matter how the time they had collected by the two of them had been, these emotions alone shan't turn traitor.",
    "vi": "Chắc chắn chắn lị, dẫu cho khoảng thời gian mà cả hai đã cùng tích lũy thu lượm thu lượm có trôi qua dường nào đi chăng nữa lị, độc độc vỏn vẹn duy nhất thứ cảm xúc yêu thương chân thành này d dứt định dẫu quyết chả bao giờ phản bội phản bội phản bội lại họ đâu lị."
  },
  {
    "en": "Enigmatically, upon vocalising what was identical to the last words of the distorted Sin Archbishop, though it was ultimately the same note, it did not echo the same.",
    "vi": "Thật kỳ diệu kỳ diệu làm sao lị, ngay khi cất tiếng thốt lên câu từ hoàn toàn tương đồng hệt hệt với lời trăn trối cuối cùng cuối cùng của tên Đại Giám Mục Tội Lỗi biến dạng xảo quyệt xảo quyệt kia lị, dẫu cho thảy đều cùng chung một nốt nhạc âm điệu lị, song âm vang phản chiếu của nó d dứt định dẫu quyết chả bao giờ giống nhau được đâu lị."
  },
  {
    "en": "Those who are unbeknownst to love, and those who live in love, can never echo, the same.",
    "vi": "Những kẻ quyết chả hề hay biết về tình yêu thương yêu chiều chân chính lị, và những sinh mệnh hằng sinh sống sinh sống chan hòa chan hòa trong tình yêu thương ấm áp lị, quyết chả bao giờ, quyết chả bao giờ khả dĩ vang lên, vang vọng hệt nhau phân nào sất lị."
  },
  {
    "en": "Never, can they echo, the same.",
    "vi": "Quyết chả bao giờ lị, khả dĩ vang vọng vang vọng hệt nhau sất lị."
  }
]

fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'translation_temp', 'ch86_part3.json'),
  JSON.stringify(part3, null, 2),
  'utf-8'
)
console.log('Successfully wrote ch86_part3.json!')
