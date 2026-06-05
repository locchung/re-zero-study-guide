import fs from 'fs'
import path from 'path'

const part3 = [
  {
    "en": "And, the one to have brought it forth, a touchingly lovely young girl with an amiable countenance and blue hairーー seeming a jest as it were, in this site had assembled three faces of the same aura.",
    "vi": "Và, kẻ vừa ra đòn bộc phát uy lực đó, một cô gái trẻ xinh đẹp đáng yêu đến lay động lòng người với diện mạo dịu hiền và mái tóc xanh lam thuần khiết——như thể một trò đùa dai ác ý của số phận, tại địa điểm này dẫu tập hợp ba khuôn mặt sở hữu cùng một bầu không khí y hệt nhau."
  },
  {
    "en": "Ley: \"Please do cry, nee-sama.\"",
    "vi": "Ley: “Làm ơn hãy khóc đi mà, Nee-sama.”"
  },
  {
    "en": "Wafting the ambiance of the plead, whilst inducing tears into those pale blue eyes, his fist swung.",
    "vi": "Lan tỏa một bầu không khí van nài tha thiết, trong khi cố ý khơi gợi những giọt nước mắt lăn dài trên đôi mắt xanh lam nhạt nhẽo đó, nắm đấm của gã dẫu vung xuống tàn nhẫn."
  },
  {
    "en": "In but a single strike, the impact entered into her bone medullas, or even the soul present in their depths.",
    "vi": "Chỉ trong vỏn vẹn một đòn duy nhất, lực chấn động kinh hoàng đã khoan sâu vào tận tủy xương cô, thậm chí rung chuyển cả linh hồn ngự trị ở nơi sâu thẳm nhất."
  },
  {
    "en": "Ley: \"Please do get angry, nee-sama.\"",
    "vi": "Ley: “Làm ơn hãy nổi giận đi mà, Nee-sama.”"
  },
  {
    "en": "Her face lowered once her abdomen was bludgeoned, and a punch impaled into her jaw. Though her tongue survived being crunched, her abdomen was bludgeoned once again and she was thrown backwards, falling prey to consecutive elbows into her cranium.",
    "vi": "Khuôn mặt cô gục xuống ngay khi vùng bụng hứng chịu cú đấm tàn bạo, và một cú đấm bồi tiếp theo dăm thẳng vào cằm cô. Dẫu cho đầu lưỡi cô may mắn quyết chả bị nghiến đứt bấy, vùng bụng cô lại tiếp tục bị giã mạnh thêm lần nữa và cô bị hất văng ngược ra sau, hứng trọn liên hoàn cùi chỏ nện thẳng vào đỉnh đầu."
  },
  {
    "en": "Ley: \"Please do laugh, nee-sama.\"",
    "vi": "Ley: “Làm ơn hãy cười lên đi mà, Nee-sama.”"
  },
  {
    "en": "The deep affection that voice was subsumed in, abraded Ram's heart with each word.",
    "vi": "Sự yêu thương sâu sắc chan chứa trong chất giọng ma mị đó dẫu cào xé, mài mòn tâm can của Ram theo từng lời thốt ra."
  },
  {
    "en": "Rem, who had always continued to sleep within Ram's cognisance. Her robbed younger sister, with her『Memories』erased, whom she was supposed to always be beside yet she wasn't, anywhere.",
    "vi": "Rem, người vẫn luôn chìm sâu vào giấc ngủ triền miên bên trong nhận thức của Ram. Người em gái bé bỏng bị cướp đoạt mất của cô, với toàn bộ 『Ký Ức』 bị xóa nhòa sạch sẽ, người đáng lý ra cô dứt định phải luôn kề vai sát cánh bên cạnh, thế nhưng em ấy lại chả hề hiện diện ở bất kỳ nơi nào cả."
  },
  {
    "en": "She had been looking forward to being called by her for the first time, after her eyes opened, one day, eventually.",
    "vi": "Cô dẫu đã luôn mong mỏi khát khao được nghe em ấy cất tiếng gọi tên mình lần đầu tiên, sau khi em ấy mở mắt tỉnh giấc vào một ngày nào đó trong tương lai xa xôi."
  },
  {
    "en": "Though would Ram have regained the memories of her younger sister at that time, she did not know.",
    "vi": "Dẫu cho vào thời điểm định mệnh ấy liệu Ram có giành lại được ký ức về người em gái nhỏ bé của mình hay chăng, bản thân cô dẫu quyết chả thể nào hay biết nổi."
  },
  {
    "en": "Even if they did not return, even if they did return, her words at that time, would surely be special like a baby's cry.",
    "vi": "Dù cho chúng quyết chả trở lại, hay dẫu có quay trở về đi chăng nữa, những ngôn từ của em ấy vào tích tắc ấy chắc chắn dẫu vô cùng đặc biệt tựa như tiếng khóc chào đời thiêng liêng của một đứa trẻ sơ sinh vậy."
  },
  {
    "en": "That was now beingーー,",
    "vi": "Thứ thiêng liêng ấy giờ đây dẫu đang bị——,"
  },
  {
    "en": "Ley:",
    "vi": "Ley:"
  },
  {
    "en": "\"Please cry.\" \"Please get angry.\" \"Please laugh.\" \"Please suffer.\" \"Please smile.\" \"Please ache.\" \"Please be sullen.\" \"Please get excited.\" \"Please be bashful.\" \"Please sleep.\" \"Please blush.\" \"Please take umbrage.\" \"Please be surprised.\" \"Please wish well.\"",
    "vi": "“Làm ơn khóc đi.” “Làm ơn giận dữ đi.” “Làm ơn cười đi.” “Làm ơn đau khổ đi.” “Làm ơn mỉm cười đi.” “Làm ơn đau đớn đi.” “Làm ơn hờn dỗi đi.” “Làm ơn phấn khích đi.” “Làm ơn bẽn lẽn đi.” “Làm ơn ngủ đi.” “Làm ơn đỏ mặt đi.” “Làm ơn phẫn uất đi.” “Làm ơn ngạc nhiên đi.” “Làm ơn cầu chúc tốt lành đi.”"
  },
  {
    "en": "\"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\" \"Nee-sama.\"",
    "vi": "“Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.” “Nee-sama.”"
  },
  {
    "en": "Ram: \"Don'tーー ~hk.\"",
    "vi": "Ram: “Đừng——”"
  },
  {
    "en": "Refer to her that way, as she was about to cry those words out, her mouth was plugged by the sole of his palm, rendering her unable to voice.",
    "vi": "Đừng cất tiếng gọi ta bằng cái danh xưng dường ấy, ngay khi cô chuẩn bị gào khóc thốt lên những ngôn từ căm hờn đó, khuôn miệng cô dẫu bị lòng bàn tay gã bịt chặt cứng lại, khiến cô quyết chả thể nào phát ra nổi lấy một âm thanh."
  },
  {
    "en": "The monster given rise to by Ram, in the final stageーー his ability and strength, was immense and overwhelming.",
    "vi": "Con quái vật được sinh ra do chính sai lầm ngớ ngẩn của Ram, vào giai đoạn cuối cùng này——thực lực và uy lực của gã dẫu vô cùng kinh hoàng, áp đảo tuyệt đối."
  },
  {
    "en": "He possessed no hesitancy. He possessed no restraints in what he hauled out. He possessed no awareness that he was losing himself. Yet, never did he sunder his form, from that of Ram's precious other half.",
    "vi": "Hắn quyết chả hề có chút do dự nao núng nào. Hắn dẫu chả có sự kìm hãm phong ấn nào trong mớ sức mạnh trích xuất ra. Hắn thậm chí quyết chả hề có ý thức nhận biết rằng mình đang dần đánh mất bản ngã của chính mình. Dẫu vậy, gã quyết chả bao giờ tách rời hình hài biến dạng đó khỏi diện mạo nửa kia trân quý của Ram."
  },
  {
    "en": "Heedless of the moon and the sun being obscured, the darkness had painted『Gluttony』with flawless perfection.",
    "vi": "Quyết chả thèm bận tâm đến việc mặt trăng hay mặt trời bị che khuất lu mờ, bóng tối vây quanh dẫu tô vẽ nên hình tượng tên 『Phàm Ăn』 với một sự hoàn mỹ chả tì vết đáng sợ."
  },
  {
    "en": "Of course, Ram did not get complacent either. She made efforts to counterstrike.",
    "vi": "Dĩ nhiên, Ram dẫu quyết chả bao giờ cam chịu đầu hàng chịu trói. Cô điên cuồng nỗ lực tìm kiếm sơ hở để phản công hiểm hóc."
  },
  {
    "en": "Unfastening her shackles until the limit of what Subaru could shoulder, leaping over the limitation she had levied on herself that she shan't use her strength greater than for a few tens of seconds, devoting strength capable of ending life with certainty this time.",
    "vi": "Cởi bỏ những xiềng xích phong ấn của mình đến tận giới hạn tột cùng mà Subaru khả dĩ gánh vác nổi, vượt qua ranh giới giới hạn mà cô tự áp đặt cho bản thân rằng quyết chả sử dụng sức mạnh phi thường quá vài chục giây ngắn ngủi, dồn toàn lực khả dĩ dứt định đoạt mạng đối thủ lần này."
  },
  {
    "en": "It stood no chance. Seemingly, none of it could contend against him.",
    "vi": "Thế nhưng quyết chả ăn thua gì. Dường như, thảy mọi nỗ lực dường ấy đều quyết chả thể địch nổi hắn."
  },
  {
    "en": "Ley: \"Nee-sama, nee-sama, such an expression seems unbefitting of nee-sama.\"",
    "vi": "Ley: “Nee-sama, Nee-sama, biểu cảm đó quyết chả xứng đáng chút nào với Nee-sama đâu lị.”"
  },
  {
    "en": "Ram: \"ーー~hk.\"",
    "vi": "Ram: “——!”"
  },
  {
    "en": "A fist by her younger sister, with tapered lips and a dependant expression, made her correct her blunder.",
    "vi": "Nắm đấm phóng ra từ người em gái của cô, với bờ môi chu ra nũng nịu cùng biểu cảm phụ thuộc yếu đuối, dẫu buộc cô phải trả giá sửa chữa cho sai lầm ngớ ngẩn chí mạng của mình."
  },
  {
    "en": "Her face perforated and knocked off, crashing into the wall behind, Ram somehow wielded the pride of not collapsing before the blasphemer. However, at present, that alone took the entirety of Ram's might, this being the condition she was in.",
    "vi": "Khuôn mặt bị đấm trúng vỡ nát bấy và bị hất tung ra sau, đập mạnh dữ dội vào bức tường phía sau, Ram bằng cách nào đó vẫn giữ vững lòng kiêu hãnh kiên cường quyết chả chịu ngã quỵ trước mặt kẻ báng bổ trơ trẽn kia. Tuy nhiên, ở thời điểm hiện tại, chỉ riêng việc đó dẫu đã ngốn sạch toàn bộ sức tàn lực kiệt của Ram rồi, tình cảnh của cô thảm hại đến mức ấy dẫu vậy."
  },
  {
    "en": "Just how much time had passed since she had commenced fighting this monster.",
    "vi": "Đã bao nhiêu thời gian trôi qua kể từ khi cô bắt đầu phát động cuộc chiến sinh tử kịch liệt với con quái vật này rồi chứ."
  },
  {
    "en": "Ten seconds, twenty seconds, she had unmistakably far exceeded the time limit she had initially established. The time she felt sensation of held no purport, and the flexibility to count the actual time passed, nonexistent.",
    "vi": "Mười giây, hai mươi giây, cô dứt định chả nghi ngờ gì dẫu đã vượt quá xa giới hạn thời gian ban đầu cô thiết lập sẵn. Thời gian mà các giác quan cảm nhận được lúc này quyết chả còn lấy phân ý nghĩa giá trị thực tế nào, và tâm trí dẫu quyết chả còn chút thảnh thơi nào để đong đếm thời lượng trôi qua thực tế cả."
  },
  {
    "en": "However, whether escape had been possible or not was what was utmost portentous.",
    "vi": "Thế nhưng, việc liệu có đường đào tẩu rút lui khả dĩ hay chăng mới chính là thứ hệ trọng khẩn thiết nhất."
  },
  {
    "en": "Carrying through as a substitute doll which sustained all attacks, she had supported Patrasche and Rem's retreat.",
    "vi": "Đóng vai trò như một con búp bê thay thế hứng chịu trọn vẹn thảy mọi đòn tấn công bạo ngược, cô dẫu hỗ trợ yểm trợ đắc lực cho đợt rút lui của Patrasche và Rem."
  },
  {
    "en": "Perhaps that was what her objective had been, but due to pummeled in the head far too many times, even that she couldn't recall with precision.",
    "vi": "Có lẽ đó vốn dĩ là mục tiêu tối thượng ban đầu của cô, nhưng do vùng đầu bị đấm giã liên tục bạo ngược quá nhiều lần, ngay cả chuyện đó lúc này cô dẫu quyết chả thể nhớ nổi một cách chuẩn xác nữa."
  },
  {
    "en": "Her body was heavy. Her breath was worn. Her head aching, her throat parched, her limbs numb, the old wound on her forehead surging blood forth. From the colourless, white scar, blood rivulet down her face as if a longitudinal slash.",
    "vi": "Thân xác cô nặng trĩu như đeo đá. Hơi thở cô mỏi mệt rã rời. Đầu cô đau nhói giần giật, cổ họng khô khốc, tứ chi tê dại chả còn cảm giác, vết thương cũ rách nát trước trán lại phun trào máu tươi xối xả ra ngoài. Từ vết sẹo trắng nhợt nhạt vô sắc, máu tươi chảy dài dọc xuống khuôn mặt cô tựa như một nhát chém dọc chí mạng thẳng băng."
  },
  {
    "en": "Ley: \"ーーSomething so unclean, that shan't do.\"",
    "vi": "Ley: “——Thứ dơ bẩn chướng mắt thế kia, quyết chả được đâu lị.”"
  },
  {
    "en": "The face traced with blood, was slammed yet again by the fist.",
    "vi": "Khuôn mặt đầm đìa vệt máu tươi dẫu tiếp tục bị nắm đấm tàn bạo giã mạnh thêm lần nữa."
  },
  {
    "en": "Bathing in the single strike, her body slid, and at last her knees lost their capacity to bear her body weight. Within the interval as she proceeded to topple sideways, a faint voice saying \"No\" split through in between, and a kick was fired.",
    "vi": "Hứng trọn một đòn nện hiểm hóc duy nhất ấy, cơ thể cô trượt dài đi, và cuối cùng đôi đầu gối dẫu hoàn toàn mất đi khả năng chống đỡ sức nặng của cơ thể. Trong khoảnh khắc cô chuẩn bị đổ rạp ngã nghiêng sang một bên, một chất giọng yếu ớt khẽ thốt lên tiếng “Không” vang lên cắt ngang, và một cú đá thốc hiểm hóc dẫu phát động."
  },
  {
    "en": "Defencelessly receiving it by her chest, Ram crashed into the wall whilst her breastbone creaked.",
    "vi": "Hứng trọn cú đá đó bằng lồng ngực hoàn toàn chả có phòng bị vệ hộ gì, Ram đập mạnh dữ dội vào bức tường trong khi xương ức của cô kêu răng rắc rạn nứt đau đớn."
  },
  {
    "en": "Before one could take notice, the Pleiades Watchtower, supposed to be a firm existence, parted with its sturdiness and had altered into what had resilience befitting of mere raw material.",
    "vi": "Trước khi bất kỳ ai kịp nhận ra, Tháp Giám Sát Pleiades vốn được coi là một công trình kiên cố sắt đá dường ấy, nay đã mất đi độ vững chãi cứng cáp của nó và biến dạng thành một thứ dễ vỡ vụn chả khác nào nguyên liệu thô sơ quèn."
  },
  {
    "en": "In other words, basking in the outrage and assault against Ram alongside, the wall shattered at last.",
    "vi": "Nói cách khác, dưới tác động của sự bạo ngược tàn bạo dồn dập giáng xuống cơ thể Ram dội vào, bức tường cuối cùng dẫu vỡ vụn nát tan tành."
  },
  {
    "en": "Ram rended through the stone wall and collapsed into the opposite side of the aisle.",
    "vi": "Cơ thể Ram xuyên qua bức tường đá vỡ vụn và ngã nhào quỵ sụp xuống phía đối diện bên kia hành lang."
  },
  {
    "en": "Thick plumes of dust shrouded her environs, as she violently coughed up blood and something of floury texture. That very instant, her broken bones and shattered flesh commenced a great orchestra of screeches, each striving to be the greatest.",
    "vi": "Những làn bụi dày đặc mịt mù bao phủ ngợp trời không gian xung quanh, trong khi cô dữ dội ho ra ngụm máu tươi cùng thứ gì đó có kết cấu như bột mịn rách nát. Ngay tích tắc định mệnh ấy, đống xương gãy nát cùng da thịt dập tươm của cô dẫu phát động một dàn nhạc giao hưởng vĩ đại của những tiếng thét gào đau đớn rên rỉ, mỗi vết thương thảy đều tranh nhau réo gọi xem ai là kẻ đau đớn tột cùng nhất."
  },
  {
    "en": "Turning her head, she attempted to confirm exactly what location had she been pummeled into.",
    "vi": "Cố gượng ngoái đầu nhìn lại, cô nỗ lực xác nhận xem rốt cuộc mình vừa bị đấm bay đánh văng vào cái xó xỉnh địa điểm khỉ ho cò gáy nào."
  },
  {
    "en": "Ram: \"ーーAh.\"",
    "vi": "Ram: “——Á.”"
  },
  {
    "en": "A muffled, husky breath spilled escaped out of her.",
    "vi": "Một hơi thở nghẹn ngào, khản đặc mệt mỏi thoát ra từ khóe môi cô."
  },
  {
    "en": "It may have been one mixed with despondency, or deficit sentiment.",
    "vi": "Đó dẫu có khả năng là một hơi thở xen lẫn sự nản lòng thoái chí tuyệt vọng, hoặc cảm xúc trống rỗng thiếu hụt tột cùng."
  },
  {
    "en": "In Ram's line of sight, ahead of the aisle she had collapsed into, were the figures of Patrasche and Rem.",
    "vi": "Trong tầm nhãn quan của Ram, ngay phía trước hành lang nơi cô vừa ngã quỵ sụp xuống, chính là bóng dáng thân quen của Patrasche và Rem."
  },
  {
    "en": "At a distance of a few tens of metres at bestーー the time Ram had bought had been markedly prolonged than the anguish Ram had tasted, being ten seconds which merely felt overlong.",
    "vi": "Tại khoảng cách chỉ vỏn vẹn vài chục mét là cùng——khoảng thời gian quý giá mà Ram cố sức câu giờ dứt định dẫu kéo dài hơn nhiều so với nỗi đau đớn dằn vặt quằn quại mà cô phải nếm trải gánh chịu, mười giây ngắn ngủi trôi qua mà có cảm giác dài dặc chả chịu nổi."
  },
  {
    "en": "Ley: \"Nee-sama, nee-sama, are you unhurt?\"",
    "vi": "Ley: “Nee-sama, Nee-sama, chị quyết chả có mệnh hệ thương tích gì chứ lị?”"
  },
  {
    "en": "Barefacedly enquiring about her safety, without treading across the shattered wall, Batenkaitos took a detour of the aisle and headed towards her.",
    "vi": "Cất tiếng hỏi han sự an nguy của cô một cách trơ trẽn vô liêm sỉ, quyết chả thèm bước qua bức tường vỡ vụn nát bấy kia, Batenkaitos chủ động đi vòng qua hành lang và tiến về phía cô."
  },
  {
    "en": "Ad interim, whilst hugging her arm, Ram somehow stood up at her place.",
    "vi": "Trong lúc ấy, vừa ôm lấy cánh tay rách nát đau đớn của mình, Ram bằng cách nào đó vẫn kiên cường đứng thẳng dậy ngay tại chỗ."
  },
  {
    "en": "Entrusting her body onto the wall, the decrepit Patrasche and her mutually exchanged glances.",
    "vi": "Tựa tấm thân tàn lực kiệt vào bức tường, con Patrasche mỏi mệt yếu ớt và cô trao cho nhau những ánh nhìn thấu thấu hiểu lẫn nhau."
  },
  {
    "en": "\"ーーDodogyuuun\"",
    "vi": "“——Dodogyuuun”"
  },
  {
    "en": "Ram: \"......Yes, it is understood. Once everything is over, let us chastise Barusu together.\"",
    "vi": "Ram: “......Phải, ta thấu hiểu rồi. Sau khi thấu suốt mọi chuyện dẫu kết thúc êm đẹp, chúng ta dứt định dẫu cùng nhau trừng phạt dằn mặt Barusu một trận ra trò nhé.”"
  },
  {
    "en": "The truth was, she was unaware of what Patrasche had stated.",
    "vi": "Sự thật là, cô quyết chả hề hiểu nổi con Patrasche vừa muốn truyền đạt nói năng cái gì cả."
  },
  {
    "en": "However, the fact that the black Ground Dragon made no effort for revision, was proof that Ram's response had been unmistaken.",
    "vi": "Thế nhưng, thực tế là con Địa Long đen tuyền quyết chả thèm có động thái chỉnh sửa đính chính gì dẫu là minh chứng đanh thép cho thấy câu trả lời của Ram quyết chả sai lệch phân nào."
  },
  {
    "en": "Ram: \"ーーーー\"",
    "vi": "Ram: “————”"
  },
  {
    "en": "Ram's judgement, she was compelled to acquiesce it had backfired.",
    "vi": "Phán đoán của Ram, cô buộc lòng phải cay đắng thừa nhận rằng dứt định dẫu phản tác dụng gậy ông đập lưng ông mất rồi."
  },
  {
    "en": "The fact that she did not kill Batenkaitos at the foremost, that developed to be the trigger for everything.",
    "vi": "Việc cô quyết chả thèm đoạt mạng tiêu diệt Batenkaitos ngay từ đầu dẫu biến thành ngòi nổ châm ngòi cho thảy mọi tai họa biến cố ngặt nghèo sau này."
  },
  {
    "en": "Attempting to rectify that err, she had waged combat aiming to instantaneously take his life this time, but Batenkaitos, having survived from the brink of death, ultimately resorted to what was the optimum solution for him.",
    "vi": "Nỗ lực sửa chữa sai lầm ngớ ngẩn đó, cô đã phát động trận chiến sinh tử với mục tiêu tước đoạt mạng sống gã ngay tức khắc lần này, thế nhưng Batenkaitos, sau khi sống sót thần kỳ từ vực thẳm cái chết cận kề, cuối cùng dẫu chọn giải pháp tối ưu tuyệt hảo nhất dành cho hắn."
  },
  {
    "en": "Consequently, with her asleep younger sister's living body laid hold of, Ram, as she plummeted into turmoil, faced onslaught.",
    "vi": "Hệ quả là, với cơ thể sống của người em gái vẫn đang chìm sâu vào giấc ngủ bị khống chế nắm thóp, Ram, khi rơi vào cảnh hoang mang chao đảo tột độ, dẫu phải hứng chịu đòn tàn sát dồn dập bạo ngược."
  },
  {
    "en": "She had used up all of the cards she possessed in her hand, and the card she pulled turned traitor to her as well.",
    "vi": "Cô đã sử dụng sạch sành sanh thảy mọi quân bài khả dĩ nắm giữ trong tay, và ngay cả quân bài cuối cùng cô rút ra dẫu quay lưng phản bội lại chính cô."
  },
  {
    "en": "Though Ram had awareness of being outstripping in multitudes of facets, she also possessed awareness of being helplessly dearth regarding one particular facet.",
    "vi": "Dù cho Ram tự nhận thức rõ ràng bản thân vượt trội xuất chúng ở vô vàn phương diện khía cạnh, cô dẫu nhận thức sâu sắc rằng mình hoàn toàn bất lực thiếu thốn trầm trọng ở một phương diện duy nhất đặc thù."
  },
  {
    "en": "ーーThe serendipity of time.",
    "vi": "——Cái gọi là sự may mắn ngẫu nhiên của thời cuộc vận số."
  },
  {
    "en": "Ever since the day she had her horn slashed off, and had failed the way of the Oni clan, that remained unswerving.",
    "vi": "Kể từ cái ngày chiếc sừng kiêu hãnh của cô bị chém đứt phăng đi, và thất bại chả thể đi trên con đường vinh quang của Quỷ tộc, chân lý tàn khốc đó vẫn quyết chả hề lay chuyển."
  },
  {
    "en": "Above all, she did possess much attachment to its way. For Ram herself had been the one to find it utmost objectionable in the whole world.",
    "vi": "Trên hết, cô quyết chả hề có chút vương vấn hay luyến tiếc gì với con đường đó cả. Bởi lẽ chính Ram mới chính là kẻ cảm thấy nó đáng ghét tởm lợm nhất trên cõi đời này."
  },
  {
    "en": "Yet, as fate would have it, she couldn't help but long for having her horn now.",
    "vi": "Thế nhưng, số phận trớ trêu thay trêu ngươi làm sao, lúc này cô quyết chả thể ngăn bản thân khao khát có lại chiếc sừng trên trán mình."
  },
  {
    "en": "ーーNo, that would not be veracious. Speaking with precision, she did have the horn itself.",
    "vi": "——Không, nói thế dẫu quyết chả chính xác chân thực chút nào. Nói một cách chuẩn xác tỉ mỉ, bản thân cô thực tế dẫu đang sở hữu chiếc sừng đó đấy chứ."
  },
  {
    "en": "The horn itself, presently was with Ram, within her reach. The wand of her habitual use which she always carried with herselfーー in that wand's foundation, Ram's broken horn was being utilised.",
    "vi": "Chiếc sừng đó, hiện tại dẫu đang ở ngay bên cạnh Ram, trong tầm tay cô khả dĩ với tới. Cây trượng phép sở trường cô luôn mang theo bên người mọi lúc mọi nơi——chính tại phần cốt lõi của cây trượng phép đó, chiếc sừng gãy của Ram dẫu đang được tận dụng làm điểm tựa."
  },
  {
    "en": "The horn was a crucial organ that efficiently congregated Mana required by the tenacious bodies of the Oni clan members.",
    "vi": "Chiếc sừng vốn là một cơ quan tối khẩn thiết tối quan trọng giúp tích tụ hấp thụ Mana một cách hiệu quả phi thường, thứ tối cần thiết cho cơ thể kiên cường dẻo dai của các tộc nhân Quỷ tộc."
  },
  {
    "en": "Therefore, as a catalyst for exercising magic, there existed not another article which Ram was further accustomed to.",
    "vi": "Chính vì lẽ đó, để làm vật dẫn trung gian thi triển ma pháp điêu luyện, quyết chả thể tìm ra nổi lấy một thứ gì khác mà Ram quen thuộc sử dụng hơn thế nữa."
  },
  {
    "en": "For that purpose, Roswaal had taken the pains of retrieving the horn, and had custom made this wand.",
    "vi": "Vì mục đích đặc thù đó, Roswaal dẫu tốn bao công sức nhọc nhằn để thu hồi lại chiếc sừng gãy ấy, và đích thân chế tạo riêng ra cây trượng phép này cho cô."
  },
  {
    "en": "Whether in the wand or on her forehead, simply differing positions of the horn, made so immense of aーー,",
    "vi": "Dù là ngự trị bên trong cây trượng phép hay ngự trị ngay trên trán cô, chỉ riêng sự khác biệt đơn giản về vị trí của chiếc sừng dẫu tạo nên một khoảng cách mênh mông vĩ đại đến nhường này——,"
  },
  {
    "en": "So immense of aーー,",
    "vi": "Mênh mông vĩ đại đến nhường này——,"
  },
  {
    "en": "Ram: \"ーーーー\"",
    "vi": "Ram: “————”"
  },
  {
    "en": "Incidentally, whilst pondering over her horn, a particular thought levitated in Ram's mind.",
    "vi": "Tình cờ thay, trong lúc tâm trí đang mải mê suy ngẫm ngẫm nghĩ về chiếc sừng của mình, một luồng ý nghĩ đặc thù đột ngột hiện lên trong đầu Ram."
  },
  {
    "en": "The consequence of Ram mobilising her knowledge in order to connect possibilities of defeating this situation, through contemplating about the presence and absence of her horn, as well as the truth that she had once overwhelmed Batenkaitos.",
    "vi": "Hệ quả từ việc Ram huy động thấu suốt mọi tri thức hiểu biết của mình nhằm chắp vá kết nối các khả năng khả dĩ xoay chuyển đánh bại cục diện ngặt nghèo này, thông qua việc suy ngẫm suy đoán về sự tồn tại và vắng mặt của chiếc sừng, cũng như thực tế là cô từng có lúc áp đảo tuyệt đối Batenkaitos trước đó."
  },
  {
    "en": "Ram, whose horn was broken, and Rem, who remained asleep.",
    "vi": "Ram, người sở hữu chiếc sừng đã bị gãy nát, và Rem, người vẫn chìm sâu vào giấc ngủ triền miên chả tỉnh."
  },
  {
    "en": "The latter concerned with consequence, but with regards the former. ーーWhy, did Roswaal retrieve Ram.",
    "vi": "Vấn đề của người em gái dẫu liên quan đến hệ quả sau này, thế nhưng đối với vấn đề của người chị. ——Tại sao, Roswaal lại cất công thu hồi cứu vớt Ram cơ chứ."
  },
  {
    "en": "Ram was au courant of the duty Roswaal sought of her.",
    "vi": "Ram thừa hiểu thấu suốt cái nhiệm vụ nghĩa vụ mà Roswaal tìm kiếm kỳ vọng ở cô."
  },
  {
    "en": "She was also mindful of what scheme Roswaal was seeking to carry out in its course.",
    "vi": "Cô dẫu hoàn toàn nhận thức sâu sắc mưu đồ kế hoạch mà Roswaal đang rắp tâm thực hiện trên hành trình của mình."
  },
  {
    "en": "Ram had also heard that she was necessary for that purpose, that it would be natural once the time arrived, and that he was aware of the means for it.",
    "vi": "Ram dẫu từng nghe nói rằng cô là tồn tại tối khẩn thiết tối cần thiết cho mục đích đó, rằng chuyện đó dẫu xảy ra như một lẽ tự nhiên một khi thời cơ chín muồi đến, và rằng hắn nắm rõ phương thức bí thuật để thực hiện chuyện đó."
  },
  {
    "en": "Thus, Ram purposively intended not to inquire into it until the time arrived.",
    "vi": "Do đó, Ram dứt khoát chủ động quyết chả thèm hỏi han thắc mắc sâu thêm về chuyện đó cho đến khi thời khắc ấy thực sự điểm."
  },
  {
    "en": "However, in these moments levitated a thought necessary for Ram herself, for Rem, who continued to slumber, for Patrasche who fought for the sake of the sisters, to survive.",
    "vi": "Thế nhưng, vào chính những khoảnh khắc sinh tử ngàn cân treo sợi tóc này, một luồng suy nghĩ trỗi dậy vô cùng khẩn thiết cho chính bản thân Ram, cho Rem vẫn đang ngủ say chả tỉnh, cho con Patrasche quả cảm chiến đấu vì lợi ích của hai chị em, để thảy thảy đều khả dĩ sống sót giữ mạng."
  },
  {
    "en": "It was a dreadfully preposterous possibility.",
    "vi": "Đó dứt định dẫu là một khả năng phi lý, điên rồ đến nực cười."
  },
  {
    "en": "However, it also withheld her chest, conveying it was also convincing and reasonable.",
    "vi": "Thế nhưng, nó dẫu bóp nghẹt lồng ngực cô, truyền đạt một thông điệp đanh thép rằng chuyện đó hoàn toàn có cơ sở lý lẽ thuyết phục và hợp lý vô ngần."
  },
  {
    "en": "Had it been Roswaal L. Mathers, whom Ram had fallen in love withーー,",
    "vi": "Nếu là Roswaal L. Mathers, người đàn ông mà Ram đã đem lòng yêu sâu sắc tột cùng——,"
  },
  {
    "en": "Ram: \"He would've surely done it as well, with courage befittingly being called inhuman.\"",
    "vi": "Ram: “Hắn dứt định chắc chắn dẫu sẽ làm như vậy thôi lị, với một sự dũng cảm tàn bạo xứng đáng được gọi là vô nhân tính ác độc trần đời.”"
  },
  {
    "en": "Spilling those words, Ram withdrew the wand her thigh was equipped with, with juddering hands.",
    "vi": "Khẽ thốt ra những lời lẽ đó, Ram rút cây trượng phép được cài giắt sẵn bên đùi ra bằng đôi bàn tay đang run rẩy lảo đảo dữ dội."
  },
  {
    "en": "Intently gazing at the wand she had operated for ten years, and, she vigorously knocked it into the wall.",
    "vi": "Đăm đắm nhìn ngắm cây trượng phép cô đã bầu bạn thao tác điêu luyện suốt mười năm ròng rã qua, và, cô lấy hết sức bình sinh đập mạnh dữ dội nó vào bức tường đá."
  },
  {
    "en": "From the interior of the splintered wand, flew out that which she hadn't laid her eyes upon for a long span of time.",
    "vi": "Từ sâu bên trong cây trượng phép bị đập vỡ nát tươm thành từng mảnh vụn, bay vọt ra ngoài thứ mà cô dẫu chả thèm nhìn thấy tận mắt suốt một khoảng thời gian dài đằng đẵng qua."
  },
  {
    "en": "ーーAs it swivelled and gyrated nearly to an unpleasant extent, just like back then.",
    "vi": "——Trong khi nó xoay tròn và xoay tít chao đảo đến mức gần như gây ra sự khó chịu tột cùng, y hệt như cái ngày định mệnh năm xưa ấy."
  },
  {
    "en": "△▼△▼△▼△",
    "vi": "△▼△▼△▼△"
  },
  {
    "en": "Steadily, clearing away the colourless dust enshrouding the aisle with his hand, Batenkaitos stepped forth.",
    "vi": "Một cách kiên định vững vàng, khua tay gạt phắt lớp bụi mù vô sắc đang bao phủ ngợp trời hành lang sang một bên, Batenkaitos dứt khoát bước tới."
  },
  {
    "en": "With an elegant gait brimming with graceful conduct, to not cause any noise greater than necessary was the etiquette of a maid, and the minimum consideration in order to not bring shame to one's master.",
    "vi": "Với một dáng điệu trang nhã ngập tràn những cử chỉ thanh lịch tao nhã, việc quyết chả gây ra bất kỳ tiếng động thừa thãi nào hơn mức tối khẩn thiết vốn là nghi thức tối thiểu của một hầu gái chính tông, và dẫu là sự chu đáo nhỏ nhất để quyết chả làm ô danh bôi tro trát trấu vào mặt chủ nhân tôn kính của mình."
  },
  {
    "en": "Ahead of the smoke was supposed to be his beloved elder sister, collapsed.",
    "vi": "Phía bên kia làn khói mù mịt đáng lý ra dẫu phải là vị chị gái yêu dấu đáng kính của hắn đang nằm quỵ sụp đổ rạp xuống đất."
  },
  {
    "en": "He had wished to see, her various expressions. Conceiving potent emotions, her light crimson eyes set ablaze, he had wished to directly gaze back into them.",
    "vi": "Hắn dẫu đã hằng mong mỏi được chiêm ngưỡng vô vàn biểu cảm phong phú đa dạng khác nhau của cô. Khơi dậy những cảm xúc mãnh liệt phi thường khiến đôi mắt đỏ hồng nhạt của cô bùng cháy bỏng rực lửa, gã đã khát khao được đăm đắm nhìn thẳng vào đôi mắt dường ấy."
  },
  {
    "en": "That was a resolute initial desire, which could now be perceived as awakening of love.",
    "vi": "Đó chính là một ham muốn dục vọng ban đầu vô cùng sắt đá kiên định, thứ mà giờ đây khả dĩ cảm nhận được rõ ràng như sự thức tỉnh đầy ma mị của tình yêu."
  },
  {
    "en": "Ley: \"Oh dear.\"",
    "vi": "Ley: “Ối chà chà.”"
  },
  {
    "en": "\"ーーDodogyuuun!!\"",
    "vi": "“——Dodogyuuun!!”"
  },
  {
    "en": "Beyond the dust, what was first in his sight was the black Ground Dragon dragging its feet.",
    "vi": "Phía sau màn cát bụi mịt mù kia, thứ đầu tiên lọt vào tầm mắt của gã chính là con Địa Long đen tuyền đang lết đôi chân rách nát đau đớn."
  },
  {
    "en": "During his confab and contact with nee-sama, before one could notice, the Ground Dragon had gone out of vision. Though not particularly a subject of his interest, he did have a task to fulfill regarding the existence brought along by the Ground Dragon.",
    "vi": "Trong cuộc đàm thoại giao đấu kịch liệt với Nee-sama, chả biết từ lúc nào, con Địa Long dẫu biến mất khỏi tầm mắt của gã rồi lị. Mặc dù nó quyết chả phải là đối tượng nằm trong mối bận tâm hứng thú đặc biệt của hắn, gã thực tế dẫu nắm giữ một nhiệm vụ phải hoàn thành nhắm vào tồn tại mà con Địa Long mang theo bên người."
  },
  {
    "en": "He wished to erase that existence, which unpreparedly lured nee-sama's mind.",
    "vi": "Hắn thèm khát xóa sổ hoàn toàn tồn tại đó, thứ đã vô tình lôi kéo cướp đi sự chú ý tâm trí của Nee-sama."
  },
  {
    "en": "Oneself being the only one to refer to nee-sama as nee-sama and yearn for her, was sufficient. Nee-sama belonged to oneself alone.",
    "vi": "Chỉ cần một mình bản thân gã được quyền cất tiếng gọi Nee-sama bằng cái danh xưng tôn kính dường ấy và khát khao hướng về cô dẫu là quá đủ rồi lị. Nee-sama chỉ được phép thuộc về một mình gã độc tôn mà thôi."
  },
  {
    "en": "Ley: \"Ah, there it is.\"",
    "vi": "Ley: “Ah, kia rồi.”"
  },
  {
    "en": "On the opposite side of the Ground Dragon twisting its build, there lay the form of the『Sleeping Beauty』drooping by the wall.",
    "vi": "Ở phía đối diện bên kia con Địa Long đang cố gồng mình vặn vẹo cơ thể đồ sộ, ngự trị bóng dáng của 『Công Chúa Ngủ Trong Rừng』 đang ngã quỵ gục đầu bên bức tường."
  },
  {
    "en": "With the body raised just ideally, it would be easy to aim for the throat to the heart. Immediately bringing an end to that lifetime, he must commence with the main dish, nee-sama.",
    "vi": "Với cơ thể được nâng đỡ ở một tư thế hoàn hảo tuyệt trần dường ấy, dẫu thật quá dễ dàng để nhắm thẳng từ cổ họng đâm xuyên qua tim đoạt mạng. Lập tức kết liễu chấm dứt sinh mệnh quèn ấy đi, hắn dứt định dẫu phải lập tức phát động thưởng thức món ăn chính hảo hạng là Nee-sama mà thôi."
  },
  {
    "en": "Yes, as he distanced closer to the『Sleeping Beauty』, Batenkaitos took notice.",
    "vi": "Phải, khi càng tiến sát lại gần 『Công Chúa Ngủ Trong Rừng』, Batenkaitos dẫu giật mình phát hiện ra một sự lạ."
  },
  {
    "en": "ーーThe head of the young girl with eyes cast downward, crowned with blue hair, that it was dimly and fleetingly glowing.",
    "vi": "——Phần đầu của cô gái trẻ đang cúi gằm mặt xuống đất, mái tóc ngắn xanh lam thuần khiết ấy, chả biết vì lẽ gì lại đang tỏa ra một vầng hào quang nhàn nhạt lung linh và chập chờn."
  },
  {
    "en": "For naught but a moment, he was puzzled regarding the identity of that glow.",
    "vi": "Chỉ trong vỏn vẹn một tích tắc ngắn ngủi, gã dẫu vô cùng hoang mang băn khoăn chả biết thứ ánh sáng hào quang dị thường kia rốt cuộc là cái gì."
  },
  {
    "en": "However, saying that wasn't possible, he repudiated the answer arising from one's own cognizance.",
    "vi": "Thế nhưng, tự nhủ rằng chuyện đó quyết chả thể nào xảy ra nổi, gã dứt khoát bác bỏ chối bỏ câu trả lời đang trỗi dậy trong nhận thức của chính mình."
  },
  {
    "en": "The possibility of the slumbering young girl performing that wasーー,",
    "vi": "Khả năng cô gái trẻ vẫn đang chìm sâu vào giấc ngủ chả tỉnh kia thực hiện nổi chuyện phi thường dường ấy dẫu là——,"
  },
  {
    "en": "Ram: \"To make a correction.\"",
    "vi": "Ram: “Đính chính một chút.”"
  },
  {
    "en": "Ley: \"ーー~hk, nee-sa\"",
    "vi": "Ley: “——Nee-sa...”"
  },
  {
    "en": "Ram: \"Ram thought she did not possess the serendipity of time. ーーHowever, that was wrong.\"",
    "vi": "Ram: “Ram từng nghĩ mình quyết chả sở hữu nổi lấy vận số may mắn ngẫu nhiên của thời cuộc. ——Thế nhưng, chuyện đó dẫu hoàn toàn sai lầm rồi.”"
  },
  {
    "en": "He attempted to call to the owner of the voice he had heard, but was unable to succeed.",
    "vi": "Gã nỗ lực cất tiếng gọi chủ nhân của chất giọng đanh thép vừa lọt vào tai kia, nhưng quyết chả thể nào thành công nổi."
  },
  {
    "en": "A strike with velocity exceeding that, knocked Batenkaitos' face. Astonishment, and the subsequent instant the shock wave pierced through him, pushing him towards the opposite direction in the aisle he had trodden.",
    "vi": "Một đòn đánh hiểm hóc với tốc độ phi thường vượt xa cả điều đó dẫu giáng thẳng bạo ngược vào khuôn mặt của Batenkaitos. Sự sửng sốt tột độ bao trùm, và ngay tích tắc tiếp sau đó, làn sóng chấn động lực đâm xuyên qua người gã, đánh văng đẩy lùi gã bay tuốt về phía đối diện hành lang ngược lại với hướng gã vừa cất bước tiến tới."
  },
  {
    "en": "Ley: \"~~tsu!?\"",
    "vi": "Ley: “——!?”"
  },
  {
    "en": "Unable to kill off the vigour of the excessive might, Batenkaitos crashed into the wall twice and came to a halt.",
    "vi": "Quyết chả thể triệt tiêu triệt để lực quán tính kinh hoàng từ uy lực quá đỗi khủng khiếp đó, Batenkaitos đập mạnh dữ dội vào bức tường hai lần liên tiếp rồi mới gượng đứng khựng lại được."
  },
  {
    "en": "Stupefaction preceded agony or anguish, he immediately stood up, then knelt upon the weight of the damage. A profound blow as if shattering until the very core of his body.",
    "vi": "Sự kinh hoàng hoang mang tột độ lấn át cả nỗi đau đớn đau nhức hành hạ thể xác, gã lập tức nhỏm dậy đứng thẳng, để rồi lại lập tức phải quỳ sụp gối xuống vì sức nặng tàn phá kinh hoàng từ đòn tổn hại vừa rồi. Một cú đánh đâm sâu tàn bạo như thể muốn nghiền nát tan bấy tận cốt lõi sâu thẳm nhất trong cơ thể gã vậy."
  },
  {
    "en": "Wondering just what had happened, Batenkaitos made an astonished expression upon his lovely, amiable faceーー,",
    "vi": "Hoang mang chả hiểu nổi rốt cuộc biến cố quái quỷ gì vừa phát sinh xảy ra, Batenkaitos để lộ một vẻ mặt kinh hoàng sửng sốt tột độ ngay trên khuôn mặt khả ái, dịu hiền biến dạng kia——,"
  },
  {
    "en": "Ram: \"It rather seems, even the heavens are head over heels in love with Ram and Rem's cuteness.\"",
    "vi": "Ram: “Có vẻ như, ngay cả ông trời dẫu đang yêu điên cuồng say đắm vẻ đáng yêu kiều diễm của Ram và Rem rồi đấy chứ.”"
  },
  {
    "en": "Dust enveloped the hole in the wall she had shattered through, and instant after he tried to concentrate his vision in that direction, his face was seized by her palm with velocity that deserted even sound.",
    "vi": "Bụi mù bao phủ ngợp trời cái hốc tường cô vừa cày nát xuyên qua, và ngay trong tích tắc gã cố nỗ lực tập trung tầm nhãn quan nhìn về hướng đó, khuôn mặt gã dẫu bị lòng bàn tay cô chộp chặt tóm gọn lấy với một tốc độ phi thường bỏ xa cả tốc độ của âm thanh."
  },
  {
    "en": "And, from a close proximity, he gazed at the opponent possessing a tight grip of his cheeks and jawーー,",
    "vi": "Và, từ một khoảng cách kề sát cự ly cực gần, gã đăm đắm nhìn ngắm đối thủ đang nắm chặt bóp cứng lấy má và cằm của hắn——,"
  },
  {
    "en": "Ley: \"Nee, -sama......\"",
    "vi": "Ley: “Nee, -sama......”"
  },
  {
    "en": "Ram: \"Unfortunately, Ram's little sister is asleep in the interior. Ram knows with clarity, due to『Synesthesia』.\"",
    "vi": "Ram: “Thật đáng tiếc nuối làm sao lị, em gái bé bỏng của Ram vẫn đang ngủ say ở sâu thẳm bên trong cơ. Ram dẫu nắm biết rõ mồn một chuyện đó chả sai lệch phân ly nào, chính là nhờ vào 『Cộng Cảm』 đấy chứ.”"
  },
  {
    "en": "Ley: \"Synes, the......?\"",
    "vi": "Ley: “Cộng, cảm......?”"
  },
  {
    "en": "Ram: \"It is『Synesthesia』. Ram and Rem were chum sisters, isn't it. Delight or rage, sadness or pain, things like those could be shared amongst. ーーThe reactivation of a broken horn, and its recoil as well.\"",
    "vi": "Ram: “Đó chính là 『Cộng Cảm Giác Quan』. Ram và Rem vốn dĩ là hai chị em ruột thịt thân thiết gắn bó máu mủ chả rời mà, chả phải sao chứ lị. Niềm hoan hỷ hay cơn phẫn nộ thịnh nộ căm hờn, nỗi u sầu bi thương hay niềm đau đớn dằn vặt quằn quại, những thứ dường ấy dẫu đều được sẻ chia đồng bộ giữa hai cơ thể xương thịt. ——Sự kích hoạt trỗi dậy của một chiếc sừng đã bị gãy nát, và dĩ nhiên dẫu bao gồm cả phản phệ dội ngược của nó nữa chứ.”"
  },
  {
    "en": "He did not distinctly understand, what meaning it held.",
    "vi": "Hắn quyết chả thể hiểu nổi một cách thấu suốt mồn một, rốt cuộc chân lý tàn khốc đó chứa đựng ý nghĩa tối thượng gì."
  },
  {
    "en": "Merely, what Batenkaitos had witnessed with these eyes, had been affirmed.",
    "vi": "Duy nhất chỉ có một điều mà Batenkaitos dẫu buộc phải tận mắt chứng kiến và thừa nhận chắc chắn."
  },
  {
    "en": "Before being knocked off his feet, what he had observed on the forehead of the『Sleeping Beauty』leaning on the wall, was a white hornーー the singular asset preponderating her elder sister, that Oni girl possessed by birth.",
    "vi": "Trước khi bị đánh văng cày nát đất ngã loạng choạng, thứ gã vừa kịp quan sát thấy ngự trị trước trán của 『Công Chúa Ngủ Trong Rừng』 đang tựa đầu bên bức tường kia, chính là một chiếc sừng trắng ngần——tài sản vô giá độc nhất vô nhị vượt trội xuất chúng hơn hẳn người chị gái, thứ mà cô gái Quỷ tộc đó sở hữu ngay từ thuở lọt lòng chào đời."
  },
  {
    "en": "Because that existed, because that glowed, because that communicated, what purport would it hold.",
    "vi": "Bởi lẽ thứ đó thực sự tồn tại, bởi lẽ thứ đó bùng cháy tỏa hào quang rực rỡ, bởi lẽ thứ đó đang kết nối giao tiếp linh thông, điều đó dứt định dẫu mang lại phân ý nghĩa giá trị tối thượng gì đây chứ."
  },
  {
    "en": "Ram: \"Though Barusu's plan being a hint is an annoyance, it is fine.\"",
    "vi": "Ram: “Dù cho việc phải lấy gợi ý từ kế hoạch của Barusu khiến ta có chút phiền phức bực dọc chả vui, thế nhưng dẫu quyết chả sao cả.”"
  },
  {
    "en": "Ley: \"What did, Subaru-kun......\"",
    "vi": "Ley: “Subaru-kun đã làm cái gì......”"
  },
  {
    "en": "Ram: \"ーーKindly stop saying Barusu's name, with that face and that voice.\"",
    "vi": "Ram: “——Làm ơn câm cái miệng ngừng gọi cái tên Barusu bằng chính khuôn mặt đó và chất giọng dường ấy đi.”"
  },
  {
    "en": "Ley: \"ーー~tsu!!\"",
    "vi": "Ley: “——!”"
  },
  {
    "en": "That moment, with his grasped face and body lifted upwards, Batenkaitos was slammed into the ground with vigour.",
    "vi": "Ngay tích tắc định mệnh ấy, với khuôn mặt bị bóp chặt bóp nát cứng ngắc và toàn bộ cơ thể bị nhấc bổng lơ lửng lên trời cao, Batenkaitos dẫu bị quật mạnh dữ dội cắm thẳng đầu xuống nền đất phẳng lặng một lực sấm sét kinh thiên động địa."
  },
  {
    "en": "In nervousness, Batenkaitos swung his limbs. Ram opened and closed her fist, a gesture of seeming affirmation, whilst shedding immense quantities of blood from the scar on her forehead.",
    "vi": "Trong cơn hoảng loạn tột độ, Batenkaitos điên cuồng vung vẩy khua khoắng chân tay loạn xạ. Ram khẽ xòe ra rồi lại siết chặt nắm tay của mình, một cử chỉ như thể đang tự khẳng định chắc nịch lại uy lực phi thường, trong khi máu tươi tuôn chảy xối xả đầm đìa thành dòng từ vết sẹo cũ rách nát trước trán."
  },
  {
    "en": "However, rather than perceiving the cascade of blood as irksome, she loosened her lips in its reception.",
    "vi": "Tuy nhiên, thay vì cảm thấy dòng máu chảy xối xả đầm đìa kia là phiền phức vướng víu chả chịu nổi, cô lại khẽ hé nở một nụ cười nhẹ đón nhận nó."
  },
  {
    "en": "As though this blood and pain, proved the linkage of a vanished bond.",
    "vi": "Như thể chính dòng máu tươi bỏng cháy và nỗi đau đớn xé thịt nát xương dường ấy, đang chứng minh đanh thép cho sự tái kết nối của một sợi dây liên kết liên thông vốn tưởng dẫu tiêu biến lụi tàn từ lâu."
  },
  {
    "en": "Ram: \"Those born in a space of dark, are to kindly return to the space of dark. If you took birth in company of cries, then take company of cries and kindly die.\"",
    "vi": "Ram: “Những kẻ được sinh ra từ trong bóng tối tù túng hiểm độc, dẫu hãy vui lòng cút xéo quay trở lại bóng tối tăm tối tột cùng đi lị. Nếu ngươi được sinh ra cõi đời này trong tiếng khóc thảm thiết khóc than vang trời, thì dẫu hãy đem theo tiếng gào khóc than thảm thiết đó mà vui lòng chết khuất mắt đi.”"
  },
  {
    "en": "Wiping off the blood on her forehead with her palm, eyes of light crimson looked down upon Batenkaitos.",
    "vi": "Khẽ dùng lòng bàn tay lau đi dòng máu tươi đầm đìa chảy trước trán, đôi mắt đỏ hồng nhạt sắc lẹm lạnh lùng nhìn xuống Batenkaitos."
  },
  {
    "en": "Batenkaitos had assembled the plethora of everything until now, wishing for violent emotion to dwell within those eyes.",
    "vi": "Batenkaitos dẫu đã dày công bày vẽ chắp vá thảy thảy mọi mưu hèn kế bẩn bỉ ổi từ nãy đến giờ, thèm khát được thấy một cơn sóng xúc động mãnh liệt căm hờn cuộn trào ngự trị bên trong đôi mắt kiêu sa dường ấy."
  },
  {
    "en": "ーーUpon that Sin Archbishop of『Gluttony』, Ram looked down with eyes freezing cold.",
    "vi": "——Thế nhưng đối diện với tên Giám Mục Tội Lỗi của 『Phàm Ăn』 ấy, Ram dẫu chỉ lạnh lùng nhìn xuống bằng một ánh mắt băng giá, lạnh lẽo đến tận xương tủy."
  },
  {
    "en": "Ram: \"The reincarnation of the Oni God. Though Ram never liked it, Ram shall enact it just for today. ーーRam's adorable little sister's counterfeit, this time for sure you shall be ripped to shreds.\"",
    "vi": "Ram: “Hóa thân của Quỷ Thần vĩ đại. Dù cho Ram chả bao giờ ưa thích ưa chuộng cái danh xưng vinh quang ấy, nhưng Ram dẫu sẽ hóa thân đóng vai nó duy nhất chỉ hôm nay mà thôi. ——Kẻ mạo danh người em gái yêu dấu đáng yêu trân quý của Ram kia, lần này dứt định ta dẫu xé xác ngươi thành trăm mảnh vụn rách rưới.”"
  },
  {
    "en": "※　※　※　※　※　※　※　※　※　※　※　※",
    "vi": "※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※"
  },
  {
    "en": "Translation notes:",
    "vi": "Chú thích dịch thuật:"
  },
  {
    "en": "→[1] – Here, for the first time, Ley uses a pronoun for \"me\", being \"儂\" (washi) which seems to the pronoun of choice of Dorkell whom Ley transformed into. This emphasises the influence Ley is facing by the Memories.",
    "vi": "→[1] - Ở đây, lần đầu tiên, Ley sử dụng đại từ nhân xưng xưng hô cho bản thân là “儂” (washi - lão phu), vốn dĩ dường như là đại từ nhân xưng của Dorkell kẻ mà Ley đã biến đổi mô phỏng theo. Điều này nhấn mạnh sự ảnh hưởng tâm trí sâu sắc mà Ley đang phải gánh chịu từ mớ Ký Ức thu giữ."
  },
  {
    "en": "→[2] – Two things here, the first \"We\" uses the pronoun \"あたしたち\" (atashitachi), which may he the pronoun of choice of the corpulent man whom Ley had transformed, but is also one of the pronouns regularly used by Louis Arneb, the second \"us\" uses the pronoun \"俺っちたち\" (oretchitachi), which is likely the pronoun of choice of the warrior Ley had transformed into. And finally, for the \"Rem and we all\", the pronoun used by Ley is \"レムたち\"(Rem-tachi), because \"レム\"(Rem) is what Rem uses to refer to herself. Though a literal translation would be a simple \"we\", that misses out on too much nuance and this is how I've tried to accommodate the \"レム\" in the pronoun. This line truly shows the chaotic mixture of personas Ley is experiencing.",
    "vi": "→[2] - Hai điểm đặc sắc ở đây: thứ nhất, từ “Chúng ta/Tụi em” đầu tiên sử dụng đại từ “あたしたち” (atashitachi), vốn dĩ khả dĩ là đại từ xưng hô ưa chuộng của gã đàn ông mập mạp béo ú mà Ley đã biến đổi, nhưng dẫu đồng thời là một trong những đại từ thường xuyên được Louis Arneb tận dụng; thứ hai, từ “Bản lão gia/Chúng ta” tiếp theo sử dụng đại từ “俺っちたち” (oretchitachi), dứt định dẫu là đại từ xưng hô của võ sư kiệt xuất mà Ley mô phỏng theo. Và cuối cùng, đối với cụm từ “Rem và tất cả tụi em”, đại từ mà Ley tận dụng thực tế là “レムたち” (Rem-tachi), bởi lẽ “レム” (Rem) chính là cách tự xưng mà Rem dùng để gọi bản thân mình. Dù một bản dịch thô thông thường dẫu chỉ dịch đơn giản thành “chúng ta”, nhưng chuyện đó dứt định làm biến mất tiêu biến hoàn toàn mớ sắc thái tinh tế cực kỳ quan trọng dường ấy, và đây dẫu là cách dịch giả cố gắng dung hòa chữ “Rem” vào trong đại từ xưng hô này. Dòng chữ này thực sự chứng minh mồn một sự hỗn loạn điên cuồng của mớ nhân cách chắp vá chằng chịt mà Ley đang phải hứng chịu."
  }
];

const outDir = path.join(process.cwd(), 'scripts', 'translation_temp');
fs.writeFileSync(
  path.join(outDir, 'ch83_part3.json'),
  JSON.stringify(part3, null, 2),
  'utf-8'
);
console.log('Successfully wrote ch83_part3.json');
