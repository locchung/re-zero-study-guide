import fs from 'fs'
import path from 'path'

const part2 = [
  {
    "en": "Should she strain herself, it would be feasible for her to unfasten the second one, though that too couldn't be persevered for more than a few tenfold of seconds.",
    "vi": "Nếu có dốc toàn lực gượng ép bản thân, việc cô cởi bỏ chiếc xiềng xích thứ hai dẫu hoàn toàn khả thi, thế nhưng chuyện đó quyết chả thể nào cầm cự lâu quá vài chục giây ngắn ngủi."
  },
  {
    "en": "Thus, in this plight, would she truly even be able to win against Ley Batenkaitosーー,",
    "vi": "Vì lẽ đó, trong tình cảnh ngặt nghèo hiểm nghèo thế này, liệu cô có thực sự giành nổi lấy chiến thắng trước Ley Batenkaitos——,"
  },
  {
    "en": "Ram: \"Why become so weak-kneed. ーーThere is no choice, but to follow the plan for winning.\"",
    "vi": "Ram: “Việc gì phải yếu lòng hèn nhát dường ấy chứ. ——Chả còn cách nào khác ngoài việc tiến lên thực thi kế hoạch để đoạt lấy chiến thắng.”"
  },
  {
    "en": "Even whilst she was spending her time this way, the possibility of her camp's victory continued to be diminished.",
    "vi": "Ngay cả khi cô đang tiêu tốn thời gian quý giá theo cách này, khả năng chiến thắng của phe ta dẫu cứ tiếp tục tiêu biến hao hụt đi."
  },
  {
    "en": "Now for once, nearly missing her step, Ram stepped on the steps and darted upwards of the spiral staircase.",
    "vi": "Lần này, dù suýt chút nữa dẫu trượt chân hụt bước, Ram vẫn kiên quyết giẫm mạnh lên các bậc thang và lao vụt lên phía trên của cầu thang xoắn ốc."
  },
  {
    "en": "ーーWhilst feeling the void of absence throb, sensing as if she had also, in the past, whilst panting, chased after her younger sister being pursued, just like this.",
    "vi": "——Trong khi cảm nhận rõ ràng từng nhịp đập đau nhói trống rỗng từ nỗi mất mát, cô có cảm giác cứ như thể trong quá khứ xa xăm, cô dẫu từng vừa thở dốc dồn dập vừa điên cuồng bám đuổi theo người em gái bé bỏng đang bị săn lùng ráo riết, y hệt như thế này."
  },
  {
    "en": "△▼△▼△▼△",
    "vi": "△▼△▼△▼△"
  },
  {
    "en": "\"ーーDodogyuuun!\"",
    "vi": "“——Dodogyuuun!”"
  },
  {
    "en": "???: \"Haha~! Truly, it sure is ni~ce! You sure are doing your best holding out, despite being just a Ground Dragon, hu~h!\"",
    "vi": "???: “Haha~! Thực sự, tuyệt vời~ quá đi chứ! Đúng là cưng dẫu đang dốc hết bình sinh chịu đựng nhỉ, dẫu chỉ là một con Địa Long quèn mà thôi, ha~!”"
  },
  {
    "en": "Whilst continuing to lacerate its scales through the casted daggers, he commended the black Ground Dragon scampering through the narrow aisle.",
    "vi": "Trong khi liên tiếp phóng dao găm cào xé nát tươm những lớp vảy cứng cáp của nó, gã cất tiếng tán dương con Địa Long đen tuyền đang điên cuồng phi nhanh xuyên qua hành lang chật hẹp."
  },
  {
    "en": "It was bleeding through the slashed and gouged wounds, painful to even look at, however, the Ground Dragon decisively made a prudent escape, completely discarding its own conditions for victory.",
    "vi": "Máu tươi không ngừng tuôn xối xả ra từ những vết chém găm rách da nát thịt đau đớn đến mức quyết chả dám nhìn thẳng vào, thế nhưng, con Địa Long dứt khoát đưa ra một lựa chọn tháo chạy đào tẩu khôn ngoan, gạt phắt hoàn toàn mọi điều kiện chiến thắng cho riêng bản thân mình."
  },
  {
    "en": "The『Divine Protection of Wind Evasion』was a hallmark belonging to all species of Ground Dragons.",
    "vi": "『Gia Trì của Tị Phong』 là đặc trưng tối thượng thuộc về tất thảy mọi chủng loài Địa Long trên thế gian."
  },
  {
    "en": "As long as the Ground Dragon resumed running, a large part of the adversity of external factors such as wind or footholding was nullified, affirming the deed of \"Running\" in order to achieve an objective.",
    "vi": "Chỉ cần Địa Long còn tiếp tục lao nhanh vun vút, phần lớn những trở ngại cản trở từ yếu tố ngoại cảnh như gió lộng hay điểm tựa bước chân thảy đều bị vô hiệu hóa tiêu biến, bảo toàn tuyệt đối hành vi “Lao Chạy” để đạt được mục tiêu."
  },
  {
    "en": "Its grace also subsumed the carriage fastened to the ground dragon, or its rider.",
    "vi": "Ân huệ phi thường của nó dẫu bao trùm lên cả cỗ xe được kết nối buộc chặt với Địa Long, hoặc người cưỡi trên lưng nó."
  },
  {
    "en": "In other words, the reason why the『Sleeping Beauty』, in an unconscious state, bound and fastened to its saddle had not been ejected off yet, mostly owed to the influence of the『Divine Protection of Wind Evasion』.",
    "vi": "Nói cách khác, nguyên cớ khiến cho vị 『Công Chúa Ngủ Trong Rừng』 dù đang ở trong trạng thái bất tỉnh nhân sự, bị buộc chặt cứng vào chiếc yên ngựa mà vẫn chưa bị hất văng ra ngoài, phần lớn là nhờ vào tầm ảnh hưởng kỳ diệu của 『Gia Trì của Tị Phong』."
  },
  {
    "en": "Had it been absent, the『Sleeping Beauty』surely would have already fallen into the hands of Batenkaitos.",
    "vi": "Nếu chả có nó bảo hộ, 『Công Chúa Ngủ Trong Rừng』 chắc chắn dẫu đã rơi vào tay của Batenkaitos từ tám kiếp rồi lị."
  },
  {
    "en": "Ley: \"Amazing amazing, gallant gallant ~tsu! Despite all the hindrances done here and there in your dash so far, you sure have the nerve to still not halt your feet and keep holding out. Well, if you halt your feet then the『Divine Protection of Wind Evasion』will be rescinded, and we get the reason why you'd be so desperate, but you kno~w!\"",
    "vi": "Ley: “Đáng nể đáng nể, quả cảm quả cảm quá~ tsu! Bất chấp mọi chướng ngại vật cản lối rải rác khắp nơi trên đường lao vun vút từ nãy đến giờ, cưng dẫu có gan góc ghê hồn khi quyết chả dừng bước mà cứ tiếp tục trụ lại dẫu vậy lị. Cơ mà, nếu cưng dừng bước thì 『Gia Trì của Tị Phong』 dẫu lập tức tiêu biến thôi lị, và tụi ta thừa hiểu cái nguyên cớ vì sao cưng lại tuyệt vọng khốn cùng dường ấy rồi, cơ mà cưng biết đấy nhể~!”"
  },
  {
    "en": "\"ーーDodogyuuun!\"",
    "vi": "“——Dodogyuuun!”"
  },
  {
    "en": "Ley: \"Ground Dragons, aren't they nice, they're indefatigable, and are devoted to their masters. Surely, had you been a human, we think you would've certainly made for one mouth-watering platter for us of『Gourmet』~tsu! But, but but, butbutbutbutbutbutbut! Though lamentable, our stomach can't get filled by a Ground Dragon ~tsu!\"",
    "vi": "Ley: “Địa Long ấy à, chả phải chúng tuyệt vời sao, quyết chả biết mệt mỏi là gì, lại còn tận tụy trung thành hết mực với chủ nhân nữa chứ. Thật sự ấy lị, nếu cưng là con người, tụi ta nghĩ cưng dứt định dẫu trở thành một món ngon hảo hạng chảy cả nước miếng dành cho những kẻ 『Sành Ăn』 tụi ta rồi~ tsu! Nhưng, nhưng nhưng, nhưngnhưngnhưngnhưngnhưngnhưngnhưng! Dẫu thật đáng tiếc nuối tột cùng, cái bụng của tụi ta quyết chả thể nào được lấp đầy thỏa mãn bởi một con Địa Long quèn đâu~ tsu!”"
  },
  {
    "en": "In possession of will, in possession of a soul, in possession of『Memories』, in possession of a『Name』.",
    "vi": "Nắm giữ ý chí kiên định, sở hữu một linh hồn, nắm giữ 『Ký Ức』, sở hữu một 『Cái Tên』."
  },
  {
    "en": "Nevertheless, the Authority of『Gluttony』couldn't eat『That』, belonging to all which nowise was human.",
    "vi": "Thế nhưng dẫu vậy, Quyền Năng của 『Phàm Ăn』 quyết chả thể nuốt chửng lấy 『Thứ Đó』 vốn thuộc về những sinh vật chả phải con người."
  },
  {
    "en": "Thus, Batenkaitos could not adore and cherish the Ground Dragon directly confronting an enemy onerous to oppose with such desperation and earnestness, through what was the greatest medium of doing so for himself.",
    "vi": "Do đó, Batenkaitos quyết chả thể yêu thương trân trọng con Địa Long đang đối đầu trực diện đầy tuyệt vọng và quả cảm với một kẻ địch gian nan tột cùng như hắn, thông qua cái phương thức tuyệt hảo nhất mà bản thân gã sở hữu."
  },
  {
    "en": "Despite him drooling over simply how delicious it seemed, he could not eat it.",
    "vi": "Mặc dù gã thèm nhỏ dãi chảy cả nước miếng trước vẻ ngon lành hấp dẫn dường ấy của nó, gã quyết chả thể nào ăn nổi."
  },
  {
    "en": "That was, as though a meal illustrated onto a painting with the utmost supreme paintbrush. ーーRice cakes illustrated onto a picture couldn't be eaten, though a phraseology like that did seem as if something he had come across.",
    "vi": "Cảnh tượng đó chả khác nào một bữa yến tiệc thịnh soạn được vẽ lên tranh bằng nét bút thần sầu nhất thế gian. ——Bánh giầy vẽ trên tranh thì quyết chả thể ăn được, một cách nói ví von đại loại thế có vẻ như gã từng tình cờ bắt gặp ở đâu đó rồi."
  },
  {
    "en": "Ley: \"A~h, that's it that's it! That's completely it! When the stomach is feeling so hungry and hungry and hungry and hungry and hungry and nothing can be done ~tsu! Something like the drawing of food this delicious looking is just letting live and then killing. Isn't this completely what's called child abuse ~tsu!?\"",
    "vi": "Ley: “A~h, đúng rồi đúng rồi! Hoàn toàn chính xác là thế rồi! Khi mà cái bụng đang réo gào đói đói đói đói đói ngấu đói nghiến đến mức quyết chả thể làm gì được khác nữa~ tsu! Một bức vẽ món ăn trông ngon lành hảo hạng đến dường này chả khác nào cho người ta hy vọng rồi lại nhẫn tâm bóp nghẹt sát hại vậy lị. Đây chả phải hoàn toàn là thứ gọi là ngược đãi trẻ em hay sao~ tsu!?”"
  },
  {
    "en": "Whilst resuming his pursuit of the sprinting Ground Dragon, he spouted the clod of blood clogged within his nose.",
    "vi": "Trong khi tiếp tục bám đuổi gắt gao con Địa Long đang phi nước đại, gã khịt mạnh phun ra cục máu đông nghẹt cứng bên trong mũi."
  },
  {
    "en": "In the immediately previous battle, his face had suffered damage, and his left eye ball was gurgling as if its retina had been shattered. His fangs marred, his tongue torn, blood ceaselessly cascaded down to his jaw, but, none of it mattered.",
    "vi": "Trong trận chiến kịch liệt vừa diễn ra trước đó, khuôn mặt của hắn đã hứng chịu tổn hại nặng nề, và nhãn cầu bên trái của hắn đang giần giật đau nhói như thể võng mạc đã bị nghiền nát bấy. Răng nanh sứt mẻ, đầu lưỡi rách rưới, máu liên tục tuôn chảy ròng ròng xuống cằm, thế nhưng, thảy những thứ đó quyết chả mảy my hệ trọng gì với hắn cả."
  },
  {
    "en": "ーーContemplating that Ram, at present, was viewing this spectacle, his deepermost heart pulsated.",
    "vi": "——Cứ tưởng tượng đến cảnh Ram vào thời điểm hiện tại đang đăm đắm chứng kiến cảnh tượng tàn khốc này, sâu thẳm tâm can gã dẫu điên cuồng loạn nhịp kích động."
  },
  {
    "en": "Ley: \"Nee-sama isーー\"",
    "vi": "Ley: “Nee-sama thì——”"
  },
  {
    "en": "Pure, noble, perfect, an impeccable being concocted devoid of flaws.",
    "vi": "Tinh khiết, cao quý, hoàn hảo, một tồn tại tuyệt mỹ chả tì vết được tạo nên quyết chả có lấy phân khuyết điểm."
  },
  {
    "en": "That was what the『Memories』slumbering within Batenkaitos implored, and also believably his rational appraisal after having being half-killed, unable to undertake any resistance.",
    "vi": "Đó chính là những gì mớ 『Ký Ức』 đang ngủ vùi bên trong Batenkaitos tha thiết réo gọi, và dẫu là nhận định lý trí chắc chắn của hắn sau khi bị cô hành hạ đánh cho thừa sống thiếu chết, quyết chả thể thực hiện nổi lấy một đòn kháng cự nào."
  },
  {
    "en": "Against a serious Ram, Batenkaitos shan't be able to compete. ーーNo, plausibly, whichever Sin Archbishop may it be, they would all get easily killed with a twist of serious Ram's finger.",
    "vi": "Đối mặt với một Ram nghiêm túc dốc toàn lực, Batenkaitos quyết chả có cửa cạnh tranh nổi. ——Không, có lẽ, dù cho có là bất kỳ tên Giám Mục Tội Lỗi nào đi chăng nữa, tất thảy bọn chúng dẫu đều dễ dàng bị bóp chết chỉ bằng một cái búng tay nhẹ của một Ram khi thực sự nghiêm túc."
  },
  {
    "en": "Though possibly Regulus, he might have been able to put up a fight due to the absolute nature of his Authorityーー,",
    "vi": "Dẫu cho có khả năng là Regulus, gã đó có thể trụ vững kháng cự đôi chút nhờ vào tính chất tuyệt đối từ Quyền Năng của hắn đi chăng nữa——,"
  },
  {
    "en": "Ley: \"We~ll, there's no way that idiot could kill nee-sama anyway, you kno~w. At most, if she couldn't kill him then she wouldn't have killed him, but ended it by just dropping him down the Great Waterfall or something, isn't it.\"",
    "vi": "Ley: “Mà~a, dẫu sao thì quyết chả đời nào gã ngu ngốc đó giết nổi Nee-sama đâu lị, cưng biết đấy. Cùng lắm thì, nếu chị quyết chả thèm đoạt mạng hắn thì dẫu chả giết hắn đâu, mà chỉ kết liễu bằng cách ném phăng gã xuống Thác Nước Lớn hay đại loại thế thôi, đúng chăng.”"
  },
  {
    "en": "Even without having to kill, there existed countless ways of confinement.",
    "vi": "Dẫu quyết chả cần phải đoạt mạng, vẫn luôn tồn tại vô vàn phương thức giam cầm phong ấn khác nhau."
  },
  {
    "en": "Precisely how the『Witch of Envy』failed to die even to the hands of the Three Heroes, and was imprisoned in the Evil Sealing Stone Shrine at present as well.",
    "vi": "Chính xác như cái cách mà 『Phù Thủy Đố Kỵ』 quyết chả thể chết nổi dẫu dưới tay của Tam Đại Anh Hùng vĩ đại, và đang bị giam giữ giam cầm tại Đền Thờ Đá Phong Ấn Tà Ác vào thời điểm hiện tại dẫu vậy."
  },
  {
    "en": "In other words, no matter whatーー,",
    "vi": "Nói cách khác, bất luận thế nào đi chăng nữa——,"
  },
  {
    "en": "Ley: \"For providing hospitality to the greatest, perfect nee-sama, we must arrange for suitable preparation as well or it'll be quite rude is what it's about you kno~w!\"",
    "vi": "Ley: “Để nghênh đón tiếp đãi vị Nee-sama hoàn hảo, vĩ đại nhất trần đời, tụi ta dứt định dẫu phải chuẩn bị tươm tất chu đáo, bằng không thì dẫu thật thô lỗ vô lễ chả chịu nổi đâu lị!”"
  },
  {
    "en": "Dilating his unsteady left eye, Batenkaitos expressed a melancholic smile dripping blood.",
    "vi": "Trợn to con mắt trái đang run rẩy loạng choạng của mình, Batenkaitos để lộ một nụ cười u ám thê lương đẫm máu tươi ròng ròng."
  },
  {
    "en": "Though the Ground Dragon's velocity was considerable, indoors it was merely inutile treasure. Much less, since Batenkaitos was capable of chauffeuring across space through a method of traipsing making practical use of『Memories』throughout times, even entirely nullifying the distance opened in between.",
    "vi": "Mặc dù tốc độ của Địa Long là cực kỳ đáng nể, thế nhưng ở trong không gian kín thế này thì chuyện đó dẫu chỉ là của cải vô dụng chả dùng được vào việc gì. Huống hồ, vì Batenkaitos sở hữu khả năng di chuyển xuyên không gian thông qua một kĩ nghệ dịch chuyển tức thời tận dụng triệt để mớ 『Ký Ức』 tích lũy qua năm tháng, thậm chí vô hiệu hóa triệt để mọi khoảng cách được mở ra giữa hai bên."
  },
  {
    "en": "Ley: \"As nee-sama's little sister, must grow up without any embarrassment.\"",
    "vi": "Ley: “Với tư cách là em gái của Nee-sama, quyết chả được lớn lên trong sự xấu hổ tủi nhục nào hết lị.”"
  },
  {
    "en": "With a rising sense of purpose seated in his chest, Batenkaitos hauled the『Memories』in the depths of oneself.",
    "vi": "Với một cảm giác sứ mệnh dâng trào mạnh mẽ ngực mình, Batenkaitos trích xuất lấy mớ 『Ký Ức』 ẩn sâu trong bản ngã của chính mình."
  },
  {
    "en": "The Authority of『Gluttony』, in its types existed an ability called『Eclipse』. It could concisely be classified into two parts,『Solar Eclipse』and『Lunar Eclipse』, but its use was extraordinarily difficult.",
    "vi": "Quyền Năng của 『Phàm Ăn』 sở hữu một chiêu thức bí thuật gọi là 『Thực』. Về cơ bản nó khả dĩ được phân chia thành hai loại, gồm 『Nhật Thực』 và 『Nguyệt Thực』, thế nhưng việc sử dụng nó lại vô cùng gian nan hiểm hóc."
  },
  {
    "en": "『Lunar Eclipse』was a phenomenon wherein the moon was visible as waned. ーーOn one hand, it referred to hauling out the『Memories』of the eaten opponents, and recreating them in Batenkaitos' own flesh body.",
    "vi": "『Nguyệt Thực』 vốn dĩ là hiện tượng trăng khuyết biến dạng. ——Một mặt, nó ám chỉ việc trích xuất mớ 『Ký Ức』 của những đối thủ đã bị nuốt chửng, rồi tái hiện lại chúng ngay trên chính cơ thể xương thịt của Batenkaitos."
  },
  {
    "en": "Normally, Batenkaitos browsing multifarious『Memories』, combining them, and practically utilising them as a hyper-level synthesis, could be stated as this『Lunar Eclipse's』specialty.",
    "vi": "Bình thường, việc Batenkaitos duyệt tìm qua vô vàn mớ 『Ký Ức』 phong phú khác nhau, kết hợp chúng lại và tận dụng chúng một cách thực tế thành một dạng tổng hợp siêu cấp, khả dĩ được coi là sở trường đặc trưng của bí thuật 『Nguyệt Thực』 này."
  },
  {
    "en": "On the other hand,『Solar Eclipse』was a phenomenon wherein the sun was visible as waned. ーーDenoting here, a technique wherein not simply the『Memories』of eaten opponents, but to cover oneself with their existence itself, utilising them in accordance with their original specs.",
    "vi": "Mặt khác, 『Nhật Thực』 vốn dĩ là hiện tượng mặt trời khuyết biến dạng. ——Ở đây, nó biểu thị một kĩ nghệ mà quyết chả phải chỉ đơn thuần là trích xuất mớ 『Ký Ức』 của đối thủ bị nuốt chửng, mà là phủ lên bản thân chính sự tồn tại của kẻ đó, tận dụng triệt để năng lực của họ theo đúng thông số kỹ thuật gốc."
  },
  {
    "en": "Naturally, the primal bodies of the techniques' masters served with greater might for having a good command on those techniques.",
    "vi": "Dĩ nhiên, cơ thể gốc của những bậc thầy kĩ nghệ sẽ phát huy uy lực vĩ đại hơn nhiều trong việc làm chủ điêu luyện những chiêu thức kĩ thuật đó."
  },
  {
    "en": "However, upon transforming the flesh body into that of the opponent, there lied the fear of sustaining far too mighty influence of the opponent's mind, having the possibility of it resonating on a sizeable scale in the future. Hence, unless a rigorous state of affairs, Batenkaitos or Alphard did not make heavy use of these.",
    "vi": "Tuy nhiên, khi biến đổi cơ thể xương thịt thành của đối thủ, gã dẫu phải đối mặt với nỗi sợ hãi gánh chịu ảnh hưởng quá đỗi sâu sắc từ tâm trí của đối phương, có khả năng cộng hưởng chấn động trên một quy mô cực lớn trong tương lai. Do đó, trừ phi rơi vào hoàn cảnh ngặt nghèo cực kỳ ngặt nghèo, Batenkaitos hay Alphard quyết chả dám lạm dụng chiêu trò này."
  },
  {
    "en": "What Ley Batenkaitos and Roy Alphard principally excercised was『Lunar Eclipse』.",
    "vi": "Thứ mà Ley Batenkaitos và Roy Alphard chủ yếu vận dụng điêu luyện chính là 『Nguyệt Thực』."
  },
  {
    "en": "What Louis Arneb principally exercised was『Solar Eclipse』. ーーIt remained as a last resort which Louis could buoyantly utilise for she owned no flesh body of her own, and possessed no firm self.",
    "vi": "Thứ mà Louis Arneb chủ yếu thi triển chính là 『Nhật Thực』. ——Nó vẫn là chiêu bài tối thượng cuối cùng mà Louis khả dĩ thản nhiên thoải mái tận dụng, bởi lẽ cô quyết chả sở hữu cơ thể xương thịt của riêng mình và chả có lấy một bản ngã kiên định sắt đá."
  },
  {
    "en": "However, half-killed in his battle with Ram, the moment he reconstructed『Leaper』Dorkell in order to survive, Batenkaitos shattered the shell.",
    "vi": "Thế nhưng, sau khi bị đánh cho thừa sống thiếu chết trong trận chiến kịch liệt với Ram, ngay tại tích tắc hắn tái tạo lại 『Kẻ Nhảy Vọt』 Dorkell để giữ mạng, Batenkaitos dẫu đập tan lớp vỏ bọc phong ấn."
  },
  {
    "en": "Acquiring a command of『Solar Eclipse』, which he had not utilised until now due to being apprehensive of losing his self, he had discovered a technique of maintaining a firm oneself.",
    "vi": "Làm chủ điêu luyện bí thuật 『Nhật Thực』, thứ mà từ trước đến nay gã quyết chả dám đụng tới vì lo sợ lo ngại dẫu đánh mất bản ngã của chính mình, hắn đã khai phá ra một kĩ nghệ để duy trì một bản ngã kiên định sắt đá cho bản thân."
  },
  {
    "en": "He could now, better than before, with perfection and devoid of waste, enjoy the main dish named the『Life』of the opponent.",
    "vi": "Giờ đây gã khả dĩ thưởng thức hoàn hảo chả chút lãng phí món ăn chính mang tên 『Sinh Mệnh』 của đối thủ, tuyệt vời hảo hạng hơn hẳn trước kia."
  },
  {
    "en": "Ley: \"To grow in the midst of battle, is something which originally wouldn't have ever happened to a senile old fool like me, yeah. Haha ~tsu! This sure as heck's a masterpiece! Ain't that right, nee-sama!\" [1]",
    "vi": "Ley: “Trưởng thành ngay giữa chiến trường sinh tử thế này, vốn dĩ quyết chả bao giờ xảy đến với một lão già lẩm cẩm gần đất xa trời như lão phu đâu lị. Hahaha~ tsu! Đây quả thực dứt định là một kiệt tác tuyệt hảo rồi! Chả phải thế sao, Nee-sama!”"
  },
  {
    "en": "Thanks to having established a tenacious self, he felt abundantly refreshed.",
    "vi": "Nhờ vào việc đã thiết lập được một bản ngã kiên định sắt đá vững chắc, gã cảm thấy sảng khoái dễ chịu vô ngần."
  },
  {
    "en": "He wanted to properly show this awakened condition of himself to the wonderful nee-sama. For that purpose as well, he must opt for a method which exhorts her hatred even further.",
    "vi": "Hắn muốn khoe khéo trạng thái thức tỉnh hoàn mỹ này của mình cho Nee-sama tuyệt vời chiêm ngưỡng. Vì mục đích đó dẫu vậy, hắn buộc phải lựa chọn một phương thức khơi dậy căm phẫn oán hận của cô hơn nữa."
  },
  {
    "en": "Scent of rage, flavour of rage, texture of rage, full course of rage.",
    "vi": "Mùi hương của sự thịnh nộ, hương vị của sự phẫn nộ, kết cấu của sự thịnh nộ, một bữa tiệc thịnh soạn ngập tràn thịnh nộ."
  },
  {
    "en": "Should he not, with all of his might, surfeit the entirety of what he could experience through someone beloved, just what of him would be『Gourmet』.",
    "vi": "Nếu hắn quyết chả dùng hết sức bình sinh để tận hưởng thỏa thuê trọn vẹn mọi trải nghiệm cảm nhận được thông qua một người yêu dấu, thì tư cách gì gã tự xưng là kẻ 『Sành Ăn』 chứ."
  },
  {
    "en": "Henceforth, to『His Self』atop of the Ground Dragon's spine before his eyes, he shallーー,",
    "vi": "Chính vì lẽ đó, đối với 『Bản Ngã Của Hắn』 trên lưng con Địa Long trước mắt, hắn dẫu——,"
  },
  {
    "en": "Ley: \"Speaking of, it's something that's never been done before, unexpectedly. Killing oneself by oneself, wonder if this would also make for discovery of new sense of values, you know.\"",
    "vi": "Ley: “Nhắc mới nhớ, đây dẫu là chuyện chưa từng xảy ra bao giờ, thật chả ngờ nổi lị. Tự mình đoạt mạng chính mình, chả biết liệu chuyện này có giúp ta khai phá ra một hệ giá trị quan mới mẻ nào chăng lị.”"
  },
  {
    "en": "\"ーーDodogyuuun!!\"",
    "vi": "“——Dodogyuuun!!”"
  },
  {
    "en": "The instant he winked the world altered, due to the short distance spacial leap.",
    "vi": "Ngay tích tắc gã chớp mắt, thế giới dẫu thay đổi xoay vần, do đòn dịch chuyển tức thời cự ly ngắn xuyên không gian."
  },
  {
    "en": "The Ground Dragon, erupting a screech from the depths of its throat, was flabbergasted by Batenkaitos' arrival, who was supposed to be in the rear, and attempted to run past him directly horizontally without halting its legs.",
    "vi": "Con Địa Long rú lên một tiếng thét từ tận sâu trong cổ họng, nó kinh hoàng sửng sốt tột độ trước sự xuất hiện đột ngột của Batenkaitos vốn dĩ đáng lẽ phải ở phía sau, và cố gắng phi nước đại phóng vượt qua gã theo chiều ngang trực diện quyết chả dừng bước chân."
  },
  {
    "en": "Gallant, truly gallant. However, gallantness served to be nothing but a spice of the tragedies in future.",
    "vi": "Dũng mãnh, thực sự dũng mãnh quả cảm làm sao. Tuy nhiên, sự dũng mãnh dường ấy dẫu chỉ là chút gia vị điểm tô thêm cho tấn bi kịch tàn khốc trong tương lai mà thôi."
  },
  {
    "en": "Ley: \"ーーPalm of the Fist King.\"",
    "vi": "Ley: “——Quyền Chưởng của Quyền Vương.”"
  },
  {
    "en": "The oscillating strike of the fist, vigorously stabbed into the Ground Dragon's flank.",
    "vi": "Cú đấm chấn động xoay vần phóng ra từ nắm đấm, đâm thẳng cực kỳ tàn bạo vào sườn con Địa Long."
  },
  {
    "en": "Ordinarily, the strike would be fired by Batenkaitos' petite stature, but that wasn't how it was for Batenkaitos who had been awakened by witnessing the abyss of death, and had acquired novel strength by shattering the shell.",
    "vi": "Bình thường, đòn chém hiểm hóc dường ấy sẽ được tung ra bởi vóc dáng nhỏ bé của Batenkaitos, thế nhưng tình thế giờ đây dẫu quyết chả phải như vậy nữa đối với một Batenkaitos đã được thức tỉnh nhờ chứng kiến vực thẳm cái chết cận kề, và giành lấy sức mạnh mới mẻ bằng cách đập tan lớp vỏ bọc phong ấn."
  },
  {
    "en": "Neiji Rockhardt's original body, drilled and penetrated the impact through the Ground Dragon's torso.",
    "vi": "Sức mạnh từ cơ thể gốc của Neiji Rockhardt đã khoan sâu và truyền thẳng lực tác động chấn động kinh hoàng qua cơ thể con Địa Long."
  },
  {
    "en": "The fist of the Fist King which had vanquished even enormous full-body armours in countless fights to the death, in the Gladiator Island.",
    "vi": "Cú đấm vĩ đại của Quyền Vương, thứ từng nghiền nát bóp vụn cả những bộ giáp toàn thân khổng lồ trong vô vàn trận chiến sinh tử kịch liệt tại Đấu Sĩ Đảo."
  },
  {
    "en": "Basking its potency, the Ground Dragon exuded a voice suggesting fatality, and was vehemently bashed into the aisle's wall. However, the Ground Dragon continued to shield the young girl atop itself, from the fist, from the wall, from the floor, and from its own build as well.",
    "vi": "Hứng trọn uy lực kinh hoàng đó, con Địa Long rên rỉ một tiếng đau đớn thê lương như báo hiệu cái chết cận kề, và bị đánh văng đập mạnh dữ dội vào bức tường hành lang. Dẫu vậy, con Địa Long vẫn kiên quyết cố gắng bảo vệ cô gái trẻ trên lưng nó, bảo hộ em ấy khỏi cú đấm, khỏi bức tường tàn nhẫn, khỏi nền nhà lạnh lẽo, và cả khỏi chính sức nặng từ cơ thể đồ sộ của nó nữa."
  },
  {
    "en": "Tenderly catching the body of the plummeting young girl with its extended tail, it gently dropped her off on the floor of the aisle.",
    "vi": "Khéo léo đỡ lấy cơ thể đang rơi tự do của cô gái trẻ bằng chiếc đuôi dài duỗi ra, nó nhẹ nhàng đặt em ấy xuống nền hành lang một cách êm ái."
  },
  {
    "en": "Though supposed to be a female animal, its handling was with such smartness, all gentlemen could follow it as an example.",
    "vi": "Dẫu chỉ là một con thú cái quèn, hành vi xử lý của nó lại tinh tế lịch thiệp vô ngần, đến mức tất thảy đấng nam nhi đại trượng phu dẫu đều phải noi theo làm gương."
  },
  {
    "en": "Involuntarily, even Batenkaitos couldn't help but applaud.",
    "vi": "Quyết chả kìm lòng nổi, ngay cả Batenkaitos dẫu phải vỗ tay tán dương nhiệt liệt."
  },
  {
    "en": "Ley: \"How~eve~r~ ~tsu! Even if you're to gently lay down on the floor and everything, hereafter the head will courteously be chopped off, and it will become a present for nee-sama, hopefully you do understand.\"",
    "vi": "Ley: “Tuy~ nhiê~n~ tsu! Dù cho cưng có nhẹ nhàng đặt em ấy xuống sàn nhà đi chăng nữa, thì lát nữa cái đầu cưng dẫu được cung kính chặt phăng đi, để biến thành một món quà tặng đầy ý nghĩa cho Nee-sama mà thôi, hy vọng cưng thấu hiểu cho lị.”"
  },
  {
    "en": "\"ーーDodogyuuun!!\"",
    "vi": "“——Dodogyuuun!!”"
  },
  {
    "en": "Ley: \"Alright alright, no violence no violence, it's praise for doing your best.\"",
    "vi": "Ley: “Được rồi được rồi, quyết chả bạo lực quyết chả bạo lực đâu lị, đây là phần thưởng khen ngợi cho sự dốc sức tuyệt vời của cưng mà thôi.”"
  },
  {
    "en": "Even whilst toppling sideways, the Ground Dragon attempted to crunch him, whom he kicked into the jaws upwards.",
    "vi": "Dù đang ngã nhào nghiêng ngả sang một bên, con Địa Long vẫn cố nghiến răng cắn mạnh vào người hắn, nhưng gã chỉ lạnh lùng tung cú đá thốc ngược lên hàm nó."
  },
  {
    "en": "Though he seemed to nearly tear up upon its will and maximal of efforts, regrettably, Batenkaitos and the Ground Dragon were mutual enemies. Even if he could extol its heroic endeavours, they could never look up toward the same sky of triumph.",
    "vi": "Dù gã có vẻ suýt chút nữa dẫu rơi lệ xúc động trước ý chí sắt đá kiên định và sự dốc hết sức bình sinh của nó, thế nhưng thật đáng tiếc nuối, Batenkaitos và con Địa Long vốn là kẻ thù một mất một còn của nhau. Dù cho hắn có tán dương nỗ lực anh hùng quả cảm của nó đến nhường nào đi chăng nữa, cả hai quyết chả bao giờ có thể cùng ngẩng đầu nhìn chung một bầu trời chiến thắng."
  },
  {
    "en": "Should one side be victorious, another side shall be defeated. Though lamentable, that was what is called reality.",
    "vi": "Nếu một bên giành chiến thắng, bên còn lại dứt định dẫu phải chuốc lấy thất bại thảm hại. Dẫu thật đáng buồn tủi tiếc nuối, đó mới chính là thứ gọi là hiện thực phũ phàng."
  },
  {
    "en": "Ley: \"Let's! Firmly ~tsu! Bear! That! In! Mind! Okay!\"",
    "vi": "Ley: “Phải! Khắc! Ghi! Thật! Sâu! Sắc! Vào! Tâm! Trí! Đấy! Nhá!”"
  },
  {
    "en": "A pause per word, a scrupulous clamour, he knocked that into the black Ground Dragon.",
    "vi": "Nhấn mạnh từng chữ một, hét lên đầy tỉ mỉ kỹ lưỡng, gã giáng đòn dằn mặt đó thẳng vào con Địa Long đen tuyền đang quằn quại."
  },
  {
    "en": "He must've now etched, alongside agony, a lesson into the crouched Ground Dragon, with shattered cheekbones and forelegs. Fortunately, Batenkaitos could not eat the『Memories』of the Ground Dragon.",
    "vi": "Giờ đây, cùng với nỗi đau đớn tột cùng hành hạ xé da nát thịt, gã dứt định dẫu khắc ghi một bài học xương máu vào con Địa Long đang phục rạp dưới đất với xương gò má và hai chân trước bị dập nát bấy. Thật may mắn thay, Batenkaitos quyết chả thể nuốt nổi mớ 『Ký Ức』 của Địa Long."
  },
  {
    "en": "Thus, nor did he hold any reason to rob its life. He wished for them to both remember this day, together.",
    "vi": "Do đó, gã dẫu chả nắm giữ bất kỳ lý do nào để cướp đi mạng sống của nó. Hắn chỉ mong mỏi cả hai bên dẫu cùng nhau khắc ghi sâu sắc ngày hôm nay mà thôi."
  },
  {
    "en": "What remained wasーー,",
    "vi": "Thứ duy nhất còn sót lại lúc này chính là——,"
  },
  {
    "en": "Ley: \"For nee-sama's sake, by Rem's hand, nee-sama's precious Rem shall be......\"",
    "vi": "Ley: “Vì lợi ích của Nee-sama, chính tay Rem dẫu tự mình khiến cho Rem yêu quý của Nee-sama phải chịu cảnh......”"
  },
  {
    "en": "???: \"ーーStop pronouncing such eerie things.\"",
    "vi": "???: “——Hãy im cái miệng thốt ra những lời ma mị ghê tởm dường ấy đi.”"
  },
  {
    "en": "The moment immediately following the echo of the unyielding voice, his face, dangling above and towards Rem, was potently repelled.",
    "vi": "Ngay tích tắc liền sau tiếng vang của chất giọng đanh thép cứng cỏi dội lại, khuôn mặt của hắn, vốn đang kề sát lơ lửng phía trên Rem, dẫu bị đẩy lùi cản phá một lực cực mạnh."
  },
  {
    "en": "The face raised upon the reverberating voice, it had accepted the direct hit of two heels approaching from the immediate front. Subsequently repelled to the rear, Batenkaitos glided through the floor on his back.",
    "vi": "Khuôn mặt ngẩng lên theo tiếng vang dội lại dẫu hứng trọn cú đâm trực diện của hai gót chân áp sát lao tới ngay trước mắt. Hệ quả là bị đẩy lùi mạnh mẽ về phía sau, Batenkaitos trượt dài nằm ngửa trên nền nhà."
  },
  {
    "en": "Andーー,",
    "vi": "Và——,"
  },
  {
    "en": "Ley: \"A~hahahahaha~...... so you finally were kind enough to catch up, nee-sama. We...... huh? We...... Us......? ーーRem and we all, had been awaiti~ng.\"",
    "vi": "Ley: “A~hahahahaha~...... cuối cùng thì chị dẫu đã có lòng tốt đuổi kịp tới tận đây rồi, Nee-sama. Tụi ta...... hử? Tụi ta...... Lão phu......? ——Rem và tất cả bọn em, dẫu đã đợi chờ từ lâu lắm rồi~.”"
  },
  {
    "en": "Steadily, he got up from a sprawled posture through merely the strength of his feet.",
    "vi": "Một cách kiên định vững vàng, gã nhỏm dậy đứng thẳng từ tư thế nằm sõng soài chỉ bằng sức mạnh của đôi chân."
  },
  {
    "en": "And upon gazing at the facade of his beloved other half, he observed Ram making an expression as if her first instance of witnessing something.",
    "vi": "Và khi đăm đắm nhìn ngắm khuôn mặt của nửa kia yêu dấu trân quý, gã quan sát thấy Ram đang để lộ một vẻ mặt như thể đây là lần đầu tiên cô được tận mắt chứng kiến một thứ gì đó."
  },
  {
    "en": "Ram: \"......In this short while, you certainly became considerably ugly.\"",
    "vi": "Ram: “......Trong khoảng thời gian ngắn ngủi vừa rồi, ngươi dứt định thực sự dẫu trở nên vô cùng xấu xí ghê tởm đấy.”"
  },
  {
    "en": "△▼△▼△▼△",
    "vi": "△▼△▼△▼△"
  },
  {
    "en": "Ram: \"......In this short while, you certainly became considerably ugly.\"",
    "vi": "Ram: “......Trong khoảng thời gian ngắn ngủi vừa rồi, ngươi dứt định thực sự dẫu trở nên vô cùng xấu xí ghê tởm đấy.”"
  },
  {
    "en": "That had been Ram's candid impression, having caught up to a terribly foul and malevolent game of tag.",
    "vi": "Đó chính là cảm xúc ấn tượng thẳng thắn chân thực của Ram, sau khi đuổi kịp trò chơi đuổi bắt trốn tìm cực kỳ hèn hạ và hiểm ác dường ấy."
  },
  {
    "en": "Batenkaitos' field of vision remaining in her grasp, Ram had headed to the locus dragging her flesh body in a state of incomplete liberation, placing her trust in Patrasche's tremendous efforts.",
    "vi": "Với nhãn quan của Batenkaitos vẫn nằm trong sự khống chế của mình, Ram dẫu điên cuồng tiến về địa điểm ấy trong khi phải kéo lê thân xác xương thịt đang ở trong trạng thái giải phóng dang dở chả hoàn chỉnh, đặt trọn niềm tin vào nỗ lực phi thường dốc hết sức bình sinh của Patrasche."
  },
  {
    "en": "In that aisle shorty distant from the spiral staircase in the fourth layer, she had discovered the form of the Ground Dragon which had been tormented to the point of triturating, and Rem who had been put to sleep by its side.",
    "vi": "Tại hành lang cách cầu thang xoắn ốc tầng thứ tư quyết chả xa mấy, cô dẫu phát hiện ra bóng dáng của con Địa Long đang bị hành hạ dằn vặt đến mức dập nát bấy, và cả Rem vẫn đang chìm sâu vào giấc ngủ bên cạnh nó."
  },
  {
    "en": "And, the one who had been playing tag with Remーー,",
    "vi": "Và, kẻ đang say sưa chơi trò đuổi bắt với Rem kia——,"
  },
  {
    "en": "Ley: \"Ugly you say, nee-sama is crue~l...... we, so much, so much, so much you kno~w! Cherish nee-sama so much ~tsu so much somuchmuchmuchmuchmuch.\"",
    "vi": "Ley: “U xấu xí á, Nee-sama thật tàn nhẫn độc ác quá~...... bọn em thương Nee-sama nhiều nhiều nhiều lắm đấy chị biết chăng! Trân quý trân trọng Nee-sama nhiều vô kể~ tsu nhiều nhiều lắm vô kể vô kể kể chả xiết.”"
  },
  {
    "en": "Unascertained, his articulation revolved, speech and conduct of reason disarrayed into fragments.",
    "vi": "Quyết chả thể xác định nổi, cách phát âm của gã cứ xoay mòng mòng, ngôn từ hành vi và lý trí thảy đều bị chia cắt xáo trộn thành từng mảnh vụn rách rưới."
  },
  {
    "en": "The cause surely being it inducing abnormality onto his mind, Ram couldーー no, perhaps anyone could comprehend that with a single glimpse.",
    "vi": "Nguyên cớ dứt định dẫu là do chuyện này đã gây ra sự dị thường bất thường cực độ tác động lên tâm trí gã, Ram khả dĩ—— không, có lẽ bất kỳ ai dẫu đều khả dĩ thấu hiểu rõ chuyện đó chỉ qua một cái nhìn thoáng qua."
  },
  {
    "en": "For Batenkaitos' form, was in an equally distorted condition.",
    "vi": "Bởi lẽ hình hài của Batenkaitos lúc này dẫu đang ở trong một trạng thái biến dạng méo mó cực kỳ tồi tệ tương tự."
  },
  {
    "en": "Ley: \"ーーーー\"",
    "vi": "Ley: “————”"
  },
  {
    "en": "Reconstructing the hauled『Memories』in his flesh body, and facsimiling the shape and form of that opponent was supposed to be Batenkaitos' ace in the hole, as she had priorly witnessed.",
    "vi": "Tái tạo mớ 『Ký Ức』 đã thu giữ ngay trên cơ thể xương thịt của mình, và mô phỏng sao chép hoàn hảo hình dáng diện mạo của đối thủ đó vốn được cho là con át chủ bài tối thượng của Batenkaitos, như cô từng được chứng kiến trước đây."
  },
  {
    "en": "However, it seemed to be a forbidden card for Batenkaitos as well, and the form of『Gluttony』before Ram's eyes, was any amongst all of the hauled『Memories』, yet none.",
    "vi": "Tuy nhiên, đó dường như dẫu là một quân bài cấm kỵ đối với chính bản thân Batenkaitos, và hình hài của tên 『Phàm Ăn』 trước mắt Ram lúc này dẫu là bất kỳ ai trong số tất thảy mớ 『Ký Ức』 thu giữ kia, nhưng dẫu quyết chả phải là bất kỳ một ai cụ thể cả."
  },
  {
    "en": "They were blended together, flabbily.",
    "vi": "Chúng bị pha trộn nhào nặn lẫn lộn vào nhau một cách nhão nhoét dị dạng."
  },
  {
    "en": "With a part of the bald old man who had leaped through space, with a part of the corpulent giant who had taken no damage from Ram's blade of wind, with a part of the martial artist endowed with combat ability reaching holy precincts, as well as the physical features of variegated and profuse other humans, composed the ghastly, ominous appearance of his body.",
    "vi": "Với một phần của lão già hói từng dịch chuyển tức thời xuyên không gian, kết hợp với một phần của gã khổng lồ mập mạp béo ú quyết chả hề hấn hớn gì trước những lưỡi đao gió của Ram, hòa lẫn một phần của võ sư kiệt xuất nắm giữ thực lực chiến đấu đạt tới thánh cảnh phi thường, cùng với vô vàn đặc điểm thể chất đa dạng rườm rà của nhiều người khác nữa, thảy tạo nên một diện mạo cơ thể vô cùng rùng rợn, ghê tởm tột cùng của gã."
  },
  {
    "en": "The length of his right hand and left hand, the size of his hands was dissimilar, tactlessly, even parts of his face were disparate and appeared as if referring to that of someone else.",
    "vi": "Chiều dài của tay phải và tay trái, kích thước đôi bàn tay của gã quyết chả tương xứng cân đối, một cách vụng về mất thẩm mỹ, thậm chí các bộ phận trên khuôn mặt gã dẫu rời rạc bất nhất và có cảm giác như thể thuộc về của một ai đó khác vậy."
  },
  {
    "en": "The remaining traits of the former Batenkaitos, if anything, was the expression of his eyes but even that may have become a borrowed article by now.",
    "vi": "Những nét đặc trưng còn sót lại của một Batenkaitos trước kia, họa hoằn lắm thì dẫu chỉ còn lại thần thái ánh mắt của hắn, thế nhưng ngay cả thứ đó dường như dẫu trở thành đồ mượn tạm chắp vá vào thời điểm này rồi."
  },
  {
    "en": "And, it rather seemed that Batenkaitos himself remained ignorant to this distorted circumstance.",
    "vi": "Và, dường như chính bản thân Batenkaitos dẫu hoàn toàn chả hay biết gì về cái tình cảnh méo mó biến dạng điên rồ này của mình cả."
  },
  {
    "en": "Ley: \"ーー?\"",
    "vi": "Ley: “——?”"
  },
  {
    "en": "Batenkaitos had now come to be something, that was nobody.",
    "vi": "Batenkaitos giờ đây dẫu đã trở thành một thứ gì đó, vốn chả là bất kỳ một ai cả."
  },
  {
    "en": "Before all else, an existence who resumed to specialise ransacking the『Memories』of others, may have been deficient in having a firm foundation of what is called self. That being the cause of origin, he broke.",
    "vi": "Trước hết, một tồn tại vốn chỉ chuyên tâm đi rình rập cướp đoạt mớ 『Ký Ức』 của người khác dứt định dẫu thiếu thốn trầm trọng một nền tảng vững chắc của thứ gọi là bản ngã. Đó chính là nguyên nhân gốc rễ khiến gã bị sụp đổ hoàn toàn."
  },
  {
    "en": "And what had taken birth in lieu was aーー,",
    "vi": "Và thứ được sinh ra để thay thế dẫu là một——,"
  },
  {
    "en": "Ram: \"ーーMonster posing as Rem. To be truthful, never has Ram been this infuriated.\"",
    "vi": "Ram: “——Một con quái vật mạo danh Rem. Nói thật lòng, chưa bao giờ Ram lại căm phẫn thịnh nộ tột cùng đến nhường này.”"
  },
  {
    "en": "Whilst glancing down onto the face of younger sister, whom she knew as fragments burying the damaged place of belonging, Ram embraced revulsion for Batenkaitos who had appended her traits in a part of his face as well.",
    "vi": "Trong khi liếc nhìn xuống khuôn mặt của người em gái nhỏ bé, người mà cô chỉ biết qua những mảnh vỡ chắp vá lấp đầy khoảng trống ký ức bị tổn hại, Ram trào dâng một nỗi ghê tởm tột cùng dành cho Batenkaitos kẻ đã dám ghép cả những nét đặc trưng của em ấy vào một phần khuôn mặt của gã."
  },
  {
    "en": "Impressive how he could provoke someone with such precision.",
    "vi": "Thật đáng nể làm sao cái cách gã khả dĩ khiêu khích chọc giận người khác một cách chuẩn xác đến từng milimet dường ấy."
  },
  {
    "en": "Subaru and him would have made for a good competition of who could irritate more.",
    "vi": "Subaru và gã dẫu dứt định sẽ tạo nên một cặp đấu cân tài cân sức xem ai khả dĩ chọc điên khiêu khích người khác tài tình xuất chúng hơn đấy."
  },
  {
    "en": "Ram: \"You did wonderfully, Patrasche. Take Rem, and stand back.\"",
    "vi": "Ram: “Cưng làm tốt tuyệt vời lắm, Patrasche. Hãy đưa Rem lùi lại phía sau đi.”"
  },
  {
    "en": "\"Dodogyuuun\"",
    "vi": "“Dodogyuuun”"
  },
  {
    "en": "With even its responding voice frail, she covered for a bleeding Patrasche to the rear.",
    "vi": "Với cả tiếng phản hồi dẫu vô cùng yếu ớt mỏi mệt, cô chủ động che chắn bảo hộ cho con Patrasche đang máu chảy đầm đìa rút về phía sau."
  },
  {
    "en": "Whilst dragging its large build, Patrasche held Rem's nape in its mouth and withdrew. Seeking to keep distance from the battlefield hereon, butーー,",
    "vi": "Trong khi kéo lê cơ thể đồ sộ của mình, Patrasche ngậm chặt gáy của Rem trong miệng và từ từ rút lui. Cố gắng giữ khoảng cách an toàn với bãi chiến trường sinh tử sắp tới, thế nhưng——,"
  },
  {
    "en": "Ley: \"That shan't do~, nee-sama. That is a valuable hors d'oeuvre...... because before surfeiting the main dish, garnishing is indispensable, you seーー\"",
    "vi": "Ley: “Quyết chả được đâu nha~, Nee-sama. Đó là món khai vị cực kỳ đắt giá đấy lị...... bởi lẽ trước khi được thưởng thức thỏa thuê món chính, thì phần trang trí đĩa ăn dẫu là tối khẩn thiết chả thể thiếu, chị thấy đấーー”"
  },
  {
    "en": "Ram: \"ーーKindly die.\"",
    "vi": "Ram: “——Làm ơn chết đi.”"
  },
  {
    "en": "Lifting her leg up to her head, she commenced her sprint with her palm turned towards the face seeking to state an irrational line of argument.",
    "vi": "Nhấc cao chân lên tận đầu, cô phát động cú bứt tốc phi nhanh với lòng bàn tay hướng thẳng về phía khuôn mặt đang cố thốt ra những lời lẽ ngớ ngẩn điên khùng kia."
  },
  {
    "en": "The blade of wind swirling therein, was a minute storm concealing the potency to tear up everything atop of the opponent's neck into shreds. ーーWith the matter having come this far, Ram abdicated holding back.",
    "vi": "Lưỡi đao gió cuồn cuộn xoáy vần tại đó là một cơn bão nhỏ bé ẩn chứa uy lực nghiền nát xé toạc mọi thứ phía trên cổ đối phương thành từng mảnh vụn rách rưới. ——Mọi chuyện dẫu đã đi đến bước đường này, Ram quyết chả thèm nương tay giữ sức làm gì nữa."
  },
  {
    "en": "As a result of having tormented him without killing him, searching for a way to restore『Memories』, she had endangered Rem's person, and as a matter of fact had invited a situation wherein Patrasche sustained immense injuries.",
    "vi": "Hệ quả của việc cố tình hành hạ gã mà quyết chả chịu đoạt mạng ngay, chỉ để ráo riết tìm kiếm phương thức khôi phục lại 『Ký Ức』, cô dẫu đẩy Rem vào thế ngàn cân treo sợi tóc nguy hiểm tột cùng, và thực tế dẫu đẩy Patrasche vào cảnh gánh chịu vết thương kinh hoàng nặng nề dường ấy."
  },
  {
    "en": "Ram shall accept the weight of that truth. ーーShe must offer her heaviest apologies, to Subaru.",
    "vi": "Ram dẫu tự mình gánh chịu sức nặng của sự thật tàn khốc đó. ——Cô dứt định buộc phải gửi lời xin lỗi chân thành, sâu sắc nặng nề nhất của mình tới Subaru."
  },
  {
    "en": "And, in order to never repeat that err, she realized her intent to kill.",
    "vi": "Và, để quyết chả bao giờ lặp lại sai lầm ngớ ngẩn đó thêm một lần nào nữa, cô dứt khoát hạ quyết tâm đoạt mạng bằng được đối thủ."
  },
  {
    "en": "Even if she were to take the earlier utterance of a destroyed mind into account, the possibility of gaining a decent answer from Batenkaitos was slim. Putting two and two together, this opt seemed correct.",
    "vi": "Ngay cả khi có xem xét đến mớ ngôn từ hành vi hỗn loạn của một tâm trí đã bị hủy hoại điên loạn kia, khả năng moi được một câu trả lời tử tế đàng hoàng từ Batenkaitos dẫu cực kỳ mong manh nhạt nhẽo. Cân đo đong đếm mọi lẽ, lựa chọn này dứt định dẫu là chính xác nhất."
  },
  {
    "en": "Crushing Batenkaitos, and taking the burden of her flesh body back from Subaru.",
    "vi": "Nghiền nát Batenkaitos, và giành lại gánh nặng thể xác xương thịt của mình từ tay Subaru."
  },
  {
    "en": "On top of that, returning Patrasche and Rem to the Green Room, and Ram should likely head to back someone else.",
    "vi": "Sau đó, đưa Patrasche và Rem quay trở lại Phòng Xanh, rồi Ram dẫu nhanh chóng đi trợ chiến hỗ trợ cho một ai đó khác."
  },
  {
    "en": "That was how far her plans went.",
    "vi": "Kế hoạch của cô dẫu vạch sẵn rõ ràng đến tận nước đi ấy rồi."
  },
  {
    "en": "Ram: \"ーーーー\"",
    "vi": "Ram: “————”"
  },
  {
    "en": "On the brink of tearing his face apart with the storm, Ram gazed at the yielded alteration, in awe.",
    "vi": "Ngay trước khoảnh khắc lưỡi đao gió bão tố xé toạc khuôn mặt gã, Ram đăm đắm nhìn ngắm sự biến đổi vừa diễn ra trước mắt, trong nỗi kinh hoàng sửng sốt."
  },
  {
    "en": "It was not anything else. Once again, change had been generated in Batenkaitos' outward appearance, that was all.",
    "vi": "Quyết chả phải thứ gì khác. Một lần nữa, sự biến đổi dẫu lại phát sinh ngay trên diện mạo bên ngoài của Batenkaitos, chỉ có thế mà thôi."
  },
  {
    "en": "However, for nobody but Ram, that had been an alteration difficult to let pass.",
    "vi": "Thế nhưng, đối với quyết chả một ai khác ngoài Ram, đó dứt định dẫu là một sự biến đổi cực kỳ gian nan để có thể nhắm mắt làm ngơ phớt lờ cho qua."
  },
  {
    "en": "ーーOn the forehead, of that face wherein a plurality of features had assembled, a single white horn was summoned.",
    "vi": "——Ngay trước trán, trên khuôn mặt chắp vá lắp ghép từ vô vàn diện mạo kia, một chiếc sừng trắng ngần duy nhất dẫu được triệu gọi hiển hiện."
  },
  {
    "en": "Ram: \"That is......\"",
    "vi": "Ram: “Đó là......”"
  },
  {
    "en": "Truly, from the bottom of her heart, had she been moving by her instincts, she shall vail before him.",
    "vi": "Thực sự, từ tận sâu thẳm tâm can cô, nếu cứ phó mặc hành động theo bản năng thuần túy của mình, cô dẫu phải quỳ rạp phủ phục trước mặt gã mất."
  },
  {
    "en": "For in their entirety, Batenkaitos' deeds had been nothing but exasperating Ram.",
    "vi": "Bởi lẽ thảy mọi hành vi chiêu trò bỉ ổi của Batenkaitos, thấu suốt thảy thảy đều chả nhằm mục đích gì khác ngoài việc chọc điên cào xé tâm can Ram cả."
  },
  {
    "en": "Ley: \"ーーNee-sama.\"",
    "vi": "Ley: “——Nee-sama.”"
  },
  {
    "en": "That moment in time, with certainty, by a face the same as that of Rem's, by a voice which seemingly nobody Rem would vocalise, she was called.",
    "vi": "Vào đúng tích tắc định mệnh ấy, chả chút nghi ngại gì nữa, bằng một khuôn mặt y hệt khuôn mặt của Rem, bằng một chất giọng mà cô chi tin chắc chả ai khác ngoài Rem khả dĩ cất lời, cô dẫu được gọi tên."
  },
  {
    "en": "Subsequently, Batenkaitos' behemoth arm hammered a strike, into Ram's petrified face.",
    "vi": "Ngay lập tức sau đó, cánh tay khổng lồ vĩ đại của Batenkaitos giáng xuống một cú nện sấm sét, thẳng vào khuôn mặt đang hóa đá chết trân của Ram."
  },
  {
    "en": "It was not, fatal.",
    "vi": "Cú đấm quyết chả phải đòn chí mạng đoạt mạng."
  },
  {
    "en": "However, neither was it a hit light enough to be optimistic about.",
    "vi": "Tuy nhiên, nó dẫu quyết chả phải là một đòn đánh đủ nhẹ nhàng để có thể lạc quan nổi."
  },
  {
    "en": "Her skull and brain undulating, blood cascaded down her nose.",
    "vi": "Hộp sọ và đại não chấn động xoay vần dữ dội, máu tươi từ mũi tuôn chảy ròng ròng xuống."
  },
  {
    "en": "Her underfoot becoming unsteady regardless of the floor, was the proof of her having sustained enormous damage and injury.",
    "vi": "Đôi chân cô đứng quyết chả vững loạng choạng bất kể nền nhà phẳng lặng, dẫu là bằng chứng rõ ràng mồn một cho thấy cô vừa gánh chịu tổn hại thương tích nặng nề phi thường kinh hoàng."
  }
];

const outDir = path.join(process.cwd(), 'scripts', 'translation_temp');
fs.writeFileSync(
  path.join(outDir, 'ch83_part2.json'),
  JSON.stringify(part2, null, 2),
  'utf-8'
);
console.log('Successfully wrote ch83_part2.json');
