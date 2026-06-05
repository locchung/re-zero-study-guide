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
    "vi": "Nguồn ảnh:"
  },
  {
    "en": "※　※　※　※　※　※　※　※　※　※　※　※",
    "vi": "※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※"
  },
  {
    "en": "ALL RIGHTS BELONG TO TAPPEI NAGATSUKI, THE ORIGINAL AUTHOR OF RE:ZERO STARTING A LIFE IN A DIFFERENT WORLD FROM ZERO, THIS IS A TRANSLATION OF THE FREE JAPANESE WEB NOVEL INTO ENGLISH",
    "vi": "Bản quyền thuộc về Tappei Nagatsuki, tác giả gốc của Re:Zero Starting Life in a Different World from Zero, đây là bản dịch phi thương mại từ bản Web Novel tiếng Nhật sang tiếng Anh."
  },
  {
    "en": "JAPANESE WEB NOVEL SOURCE",
    "vi": "Nguồn Web Novel tiếng Nhật"
  },
  {
    "en": "※　※　※　※　※　※　※　※　※　※　※",
    "vi": "※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※"
  },
  {
    "en": "ーーShe remembered, anything and everything being scorched, engulfed in red, scarlet flames.",
    "vi": "——Cô nhớ rõ, bất kỳ thứ gì và mọi thứ đều bị thiêu rụi, bị nhấn chìm trong những ngọn lửa đỏ rực, đỏ tươi như máu."
  },
  {
    "en": "The decadencing days, calm and stagnant, met an abrupt end.",
    "vi": "Những chuỗi ngày suy tàn, êm đềm và trì trệ, đã đột ngột đi đến hồi kết thúc."
  },
  {
    "en": "Before that insanic violence, even the title of strongest Demi-Humans, even the position of the most feared headman in the village, even the ubiquitous love of parents who protected their child, all held no purport.",
    "vi": "Trước sự bạo lực điên cuồng tột cùng đó, ngay cả danh hiệu Á Nhân mạnh nhất thế gian, ngay cả địa vị của tộc trưởng đáng kính được kính sợ nhất trong làng, ngay cả tình yêu thương vô điều kiện của cha mẹ bảo bọc đứa con yêu thương, thảy đều quyết chả có lấy phân ý nghĩa nào."
  },
  {
    "en": "It was regrettable, that she had been late to take notice of the slaughter's rampancy.",
    "vi": "Thật đáng tiếc làm sao, khi cô đã quá chậm trễ để nhận ra sự cuồng bạo tàn ác của cuộc tàn sát đẫm máu đó."
  },
  {
    "en": "ーーNo, this time, perhaps the tactfulness of the opponent was worthy of praise.",
    "vi": "——Không, lần này, có lẽ sự mưu mẹo quỷ quyệt của đối thủ dẫu xứng đáng nhận được lời khen ngợi."
  },
  {
    "en": "They were detested, shunned, ostracised by the world.",
    "vi": "Chúng vốn là lũ bị ghét bỏ, xa lánh, và bị cả thế giới phũ phàng gạt ra ngoài lề xã hội."
  },
  {
    "en": "Therefore, they lurked in darkness, erased their presence, silenced their noise, and had knowledge of techniques to draw near unnoticed.",
    "vi": "Chính vì lẽ đó, chúng lặng lẽ ẩn mình trong bóng tối, xóa nhòa sự hiện diện, triệt tiêu tiếng động, và nắm giữ kĩ nghệ áp sát chả ai hay biết."
  },
  {
    "en": "It would be correct to say, that at the point of the first ambush, victory and defeat had already been incised.",
    "vi": "Sẽ là chính xác hơn nếu nói rằng, ngay tại thời điểm đợt phục kích hiểm hóc đầu tiên xảy ra, thắng bại thực tế dẫu được khắc ghi rõ ràng mồn một rồi."
  },
  {
    "en": "Faint quiescence was mingled into the atmospheric mana, by the time her horn had sensed that aberration, it had already been far too late.",
    "vi": "Sự tĩnh lặng mong manh nhàn nhạt hòa quyện vào lượng mana trong bầu không khí, vào lúc chiếc sừng của cô cảm nhận được sự dị thường bất thường đó thì dứt định mọi chuyện dẫu đã quá trễ rồi."
  },
  {
    "en": "First, half of the village persons had been retrenched initially, leaving less than half of those capable of battle. Adding to that, further half of those had not come about, due to the exigent nature of pondering whether they had been mistaken.",
    "vi": "Đầu tiên, phân nửa số dân làng đã bị tàn sát cắt giảm ngay từ đầu, chỉ còn sót lại chưa đầy một nửa số người có khả năng chiến đấu. Thêm vào đó, một nửa trong số những người còn lại dẫu chả kịp tập hợp quy tụ, bởi lẽ họ còn đang mải hoang mang băn khoăn chả biết liệu bản thân có đang ngộ nhận hiểu lầm gì chăng."
  },
  {
    "en": "To summarize, their hearts had been putrefied by peace and harmony.",
    "vi": "Nói một cách tóm gọn, tâm can của họ dẫu bị thối rữa hủy hoại bởi chuỗi ngày hòa bình và yên ấm dường ấy."
  },
  {
    "en": "The Oni clan, once named as the strongest Demi-Humans, even said to have been capable of bringing about change in the state of affairs of the Kingdom of Lugnica if they had taken part in the『Demi-Human War』ーー even had the \"If\" of that history occurred for the argument's sake, the Oni clan unmistakably wouldn't have bore great results either.",
    "vi": "Quỷ tộc, vốn từng được xưng tụng là chủng tộc Á Nhân mạnh nhất thế gian, thậm chí còn được đồn đại là dư sức xoay chuyển cục diện của Vương Quốc Lugnica nếu họ chịu tham gia vào 『Bán Nhân Chiến Tranh』——dù cho chữ “Nếu” thần kỳ đó của lịch sử có giả định xảy ra đi chăng nữa, Quỷ tộc chắc chắn dẫu quyết chả gặt hái nổi thành quả to lớn nào đâu lịi."
  },
  {
    "en": "Anyhow, the half that had been abated by the first assault, were further reduced to another half by the following second assault.",
    "vi": "Dù sao thì, phân nửa số người sống sót sau đợt tấn công hiểm hóc đầu tiên dẫu tiếp tục bị giảm đi một nửa nữa bởi đợt tấn công thứ hai liên tiếp dồn dập sau đó."
  },
  {
    "en": "By that point, blazes arose throughout the village, by the time death wails resounded into the night sky illuminated scarlet, all of the Onis in the village had inferred the aberration.",
    "vi": "Đến lúc đó, những ngọn lửa thiêu đốt bùng cháy dữ dội ngợp trời khắp làng, vào thời điểm những tiếng gào rú thảm thiết khóc than vang vọng lên bầu trời đêm rực sắc đỏ tươi, tất thảy tộc nhân Quỷ tộc trong làng dẫu nhận thức ra sự dị thường bất thường đang xảy ra."
  },
  {
    "en": "However, in those moments, only two had perceived so much as the fall of the Oni clanーー,",
    "vi": "Thế nhưng, vào những khoảnh khắc sinh tử hiểm nghèo ấy, chỉ có vỏn vẹn hai người thực sự nhận thức thấu suốt được sự diệt vong sụp đổ cận kề của Quỷ tộc——,"
  },
  {
    "en": "\"ーーRam! Break out of the siege! It's fine as long as you alone stay alive!!\"",
    "vi": "“——Ram! Hãy đột phá vòng vây đi! Chỉ cần một mình con sống sót là được rồi!!”"
  },
  {
    "en": "With two enlarged gigantic horns, her elder cried with all muscles of his body bulked up.",
    "vi": "Với hai chiếc sừng khổng lồ nhô cao vĩ đại, vị trưởng bối gào lên trong khi toàn bộ cơ bắp trên cơ thể cuồn cuộn gồng cứng lên."
  },
  {
    "en": "Her elder, carrying the longsword he specialised in, leapt out of the room, and vented that at Ram, as she slashed the ordinary combatants down using wind. Telling her to stay alive, but that was not because he possessed disquietude regarding Ram.",
    "vi": "Vị trưởng bối của cô, tay lăm lăm thanh trường kiếm sở trường, lao vọt ra ngoài phòng và hét lớn những lời đó về phía Ram, trong khi cô đang dùng đao gió chém gục bầy chiến binh thông thường của đối thủ. Bảo cô hãy sống sót bằng mọi giá, nhưng chuyện đó quyết chả phải vì ông có chút lo lắng băn khoăn nào cho sự an nguy của Ram cả."
  },
  {
    "en": "For it had been her elder who believed with the greatest undiscerning honesty, that Ram herself was the promising, dazzling, gleaming future of the Oni clan.",
    "vi": "Bởi lẽ chính vị trưởng bối đó lại là kẻ tin tưởng một cách mù quáng và trung thực tuyệt đối rằng chính Ram mới chính là tương lai đầy triển vọng, rực rỡ và tỏa sáng lấp lánh nhất của toàn thể Quỷ tộc."
  },
  {
    "en": "The reincarnation of the former glory of the Oni clan, the『Oni God』who had advanced domination and conquest in the era of the『Witch』.",
    "vi": "Hóa thân tái sinh cho vinh quang xưa cũ của Quỷ tộc, vị 『Quỷ Thần』 vĩ đại từng thống trị và chinh phạt khắp cõi bờ trong kỷ nguyên của 『Phù Thủy』."
  },
  {
    "en": "That was the role expected of the prodigy named Ram, and must've been his ardent wish as the final patriarch of the Oni clan, which had all but forgotten battling.",
    "vi": "Đó chính là vai trò tối thượng được kỳ vọng đặt lên vai một thiên tài kiệt xuất mang tên Ram, và dứt định dẫu là tâm nguyện cháy bỏng của vị tộc trưởng cuối cùng của Quỷ tộc vốn đã lãng quên hoàn toàn cách chiến đấu sinh tử."
  },
  {
    "en": "\"Hah ~hk!\"",
    "vi": "“Ha~h!”"
  },
  {
    "en": "She felt like laughing it off with an exhale, finding it to be just ludicrous.",
    "vi": "Cô chỉ muốn cười khẩy phớt lờ chuyện đó bằng một tiếng thở dài nhạt nhẽo, cảm thấy nó thật sự là quá đỗi nực cười."
  },
  {
    "en": "Even in this age, did the wish of the Oni who represented the village refer to entrusting the realization of an impossible dream to the future. He could nimbly consolidate his comrades, attempt to launch a counterattack at the enemy, the options he possessed for taking action were countless.",
    "vi": "Ngay cả trong thời đại này, tâm nguyện của gã tộc nhân Quỷ tộc đại diện cho cả ngôi làng dẫu chỉ là phó mặc sự hiện thực hóa một giấc mơ viển vông chả thể thành cho tương lai sau này mà thôi. Ông dẫu có thể nhanh nhẹn tập hợp các đồng đội, cố gắng phát động một đợt phản công hiểm hóc vào kẻ thù, các lựa chọn khả dĩ hành động của ông thực chất có vô vàn."
  },
  {
    "en": "However, Ram did not intend to offer that as advice to the patriarch.",
    "vi": "Thế nhưng, Ram quyết chả hề có ý định đưa ra lời khuyên bảo đó cho vị tộc trưởng làm gì."
  },
  {
    "en": "This night was not the cause.",
    "vi": "Đêm nay quyết chả phải nguyên nhân gốc rễ."
  },
  {
    "en": "For Ram had already, since a long time in the past, turned her back towards her tribe.",
    "vi": "Bởi lẽ Ram vốn dĩ đã ngoảnh mặt quay lưng lại với bộ tộc của mình từ rất lâu trước đây rồi."
  },
  {
    "en": "\"Something like the glory of the Onis......\"",
    "vi": "“Thứ gọi là vinh quang của Quỷ tộc......”"
  },
  {
    "en": "Worthless. Worthless. Worthless.",
    "vi": "Vô giá trị. Vô giá trị. Vô giá trị."
  },
  {
    "en": "Even the reality that the purest blood of that Oni clan was flowing within her, was repulsive.",
    "vi": "Ngay cả thực tế rằng dòng máu thuần khiết nhất của Quỷ tộc đó đang chảy trong người cô dẫu khiến cô thấy tởm lợm ghê tởm làm sao."
  },
  {
    "en": "Certainly, upon wishing for strength her blood boiled, enhancement reigned over her entire body, a sense of omnipotence as if the entirety of all and everything existed for her sake appeased her.",
    "vi": "Dĩ nhiên, mỗi khi khát khao sức mạnh, dòng máu trong người cô lại sôi sục tăng vọt, trạng thái cường hóa bao trùm khắp toàn thân cô, một cảm giác vạn năng như thể toàn bộ thế giới vạn vật thảy đều xoay quanh tồn tại vì lợi ích của riêng cô dẫu vỗ về xoa dịu cô."
  },
  {
    "en": "The truth was that had Ram grown into adulthood healthily, then that sense of omnipotence might have become genuine.",
    "vi": "Sự thật là nếu Ram có thể lớn lên trưởng thành một cách khỏe mạnh bình thường, thì cảm giác vạn năng điên cuồng đó rất có khả năng dẫu trở thành chân lý thực sự."
  },
  {
    "en": "However, Ram did not wish for that.",
    "vi": "Tuy nhiên, Ram quyết chả thèm khát khao điều đó."
  },
  {
    "en": "Within this confined world, rather than putting on airs as the child of god, Ram had a future she seeked to choose.",
    "vi": "Bên trong thế giới tù túng chật hẹp này, thay vì lên mặt kiêu ngạo tự phụ làm một đứa con của thần thánh phương nào, Ram vốn tự vạch ra một tương lai mà bản thân cô muốn tự mình lựa chọn."
  },
  {
    "en": "It was, instead of being lionised as the reincarnation of the Oni God et cetera, instead of spending her lifetime as a shrine for her blood relatives who resumed to cling to a glory already met by ruin, something possessing far more worth.",
    "vi": "Đó dứt định là một thứ sở hữu giá trị to lớn vượt trội hơn nhiều so với việc được tôn sùng tán dương làm hóa thân của Quỷ Thần này nọ, vượt trội hơn việc chôn vùi cả đời làm một đền thờ cho lũ huyết thống gia tộc vốn cứ mãi bấu víu bám chặt lấy thứ vinh quang đã lụi tàn thành đống đổ nát hoang tàn từ lâu."
  },
  {
    "en": "ーーIt was, to live as the ■ ■, of ■■■.",
    "vi": "——Đó chính là, được sống với tư cách là ■ ■ của ■■■."
  },
  {
    "en": "\"ーーーー\"",
    "vi": "“————”"
  },
  {
    "en": "Centralising her attention to her forehead, she encompassed the mana scintillating with heat into her entire body through her white horn.",
    "vi": "Tập trung toàn bộ sự chú ý của mình vào trước trán, cô hấp thụ lượng mana đang tỏa ra hơi nóng hừng hực truyền vào khắp toàn thân thông qua chiếc sừng trắng ngần của mình."
  },
  {
    "en": "Upon praying for it with might, Ram's perception greatly, immensely magnified, hijacking the field of vision of all that was breathing and living in her environs, she grasped all happenings of the confined village with perfection.",
    "vi": "Khi dốc toàn lực cầu nguyện kích hoạt nó, giác quan nhận thức của Ram được mở rộng khuếch đại một cách phi thường dữ dội, đồng bộ cướp đoạt tầm nhìn của tất thảy mọi sinh vật đang thở và sống trong không gian xung quanh, cô nắm bắt hoàn hảo chả sót lấy một ly mọi diễn biến biến cố đang xảy ra trong ngôi làng tù túng chật hẹp."
  },
  {
    "en": "The number of enemies was large, and they had taken positions encircling the village ensuring escape was improbable.",
    "vi": "Số lượng kẻ địch là vô cùng đông đảo ngợp trời, và chúng đã dàn trận bao vây kín kẽ ngôi làng bảo đảm đường đào tẩu rút lui dường như là quyết chả thể xảy ra nổi."
  },
  {
    "en": "Correspondence at the first instance had been delayed, the only ones who had been able to oppose properly were the half of half, and they too had lost numbers such that the remaining ones could be counted on one hand, indicating the exhaustion of the Oni clan's spirit.",
    "vi": "Đợt ứng phó đầu tiên đã bị chậm trễ mất nhịp, những người duy nhất khả dĩ kháng cự chiến đấu đàng hoàng được dẫu chỉ là một phần nhỏ của phân nửa số dân, và bọn họ dẫu tổn thất quân số nặng nề đến mức số người còn sót lại chỉ đếm trên đầu ngón tay mà thôi, báo hiệu sự lụi tàn hoàn toàn của ý chí Quỷ tộc."
  },
  {
    "en": "One person, the elder seemed to be making strenuous efforts and battling, but the enemies who had assembled there were quite well-trainedーー the traces of the elder, as he fell into disadvantage, were enveloped in rich『Death』.",
    "vi": "Một người trong số đó, vị tộc trưởng có vẻ đang dốc hết sức bình sinh để chiến đấu kịch liệt, nhưng đàn kẻ thù tập trung tại đó lại cực kỳ tinh nhuệ và huấn luyện bài bản——bóng dáng của tộc trưởng khi rơi vào thế hạ phong lép vế dẫu nhanh chóng bị bao phủ nhuốm đậm trong cái 『Chết』 cận kề."
  },
  {
    "en": "\"ーー■■■.\"",
    "vi": "“——■■■.”"
  },
  {
    "en": "Cladding her small body in wind, Ram bolted through the village as if a gale.",
    "vi": "Bao bọc cơ thể nhỏ nhắn của mình trong làn gió lộng, Ram lao nhanh vun vút xuyên qua ngôi làng tựa như một trận cuồng phong sấm sét."
  },
  {
    "en": "What those lips enounced, referred to her one and only ■, whom she loved even within the slightest thought. This was not Ram's heartlessness. She was simply renewing her consciousness.",
    "vi": "Thứ mà khóe môi cô khẽ mấp máy thốt ra, chính là ■ duy nhất và độc nhất vô nhị mà cô yêu thương nâng niu ngay cả trong ý nghĩ thoáng qua nhỏ nhất. Đây quyết chả phải do Ram lãnh khốc vô tình. Cô đơn giản chỉ đang thanh tẩy củng cố lại ý thức của mình mà thôi."
  },
  {
    "en": "For Ram's parents had been within the first half of people assaulted, and no longer had any hope of their lives being saved.",
    "vi": "Bởi lẽ cha mẹ của Ram dẫu nằm trong số phân nửa số người bị tập kích đầu tiên, và đã hoàn toàn quyết chả còn lấy một tia hy vọng cứu sống mạng nào nữa rồi."
  },
  {
    "en": "ーーNever had she detested her parents.",
    "vi": "——Cô quyết chả bao giờ căm ghét hay oán hận cha mẹ mình cả."
  },
  {
    "en": "However, both of them, for better or worse, had been born into this village, had been members of the Oni clan who chose to die within this village, and had unmindfully accepted a rather lenient perish was what she believed.",
    "vi": "Thế nhưng, cả hai người họ, dù tốt hay xấu, dẫu được sinh ra ở ngôi làng này, dẫu là những thành viên Quỷ tộc đã chủ động lựa chọn cái chết tại chính ngôi làng này, và cô tin rằng họ dẫu đã đón nhận một sự diệt vong có phần thanh thản chả chút vướng bận."
  },
  {
    "en": "Hence, for them to lose their lives on this night was a certain kind of inevitability.",
    "vi": "Vì vậy, việc họ bỏ mạng vào đêm nay thực chất dẫu chỉ là một lẽ tất yếu khó tránh khỏi của số phận."
  },
  {
    "en": "Howeverーー,",
    "vi": "Thế nhưng dẫu vậy——,"
  },
  {
    "en": "\"ーーThis does not mean, they will not be avenged.\"",
    "vi": "“——Điều đó quyết chả đồng nghĩa với việc mối thù căm hờn của họ dẫu chả được báo đáp báo thù đích đáng.”"
  },
  {
    "en": "The black shadow obstructing her way, the enemy with its entire frame clad in a robe.",
    "vi": "Bóng đen cản bước tiến của cô, một kẻ địch với toàn bộ cơ thể bọc kín trong lớp áo choàng đen tuyền."
  },
  {
    "en": "Towards the underlings wielding and romping with the cross-shaped daggers, Ram delivered an unfaltering wind.",
    "vi": "Nhắm thẳng vào lũ tay sai đang vung vẩy đùa nghịch kịch liệt với những thanh dao găm hình chữ thập, Ram giáng xuống những lưỡi đao gió quyết chả hề nao nút do dự."
  },
  {
    "en": "Whether they had made light of her as a mere child, or if they simply lacked ability.",
    "vi": "Chả biết là do chúng dám khinh thường coi rẻ cô chỉ là một đứa trẻ ranh vắt mũi chưa sạch, hay chỉ đơn giản là lũ phế vật thiếu thốn thực lực chả có tài cán gì."
  },
  {
    "en": "Failing to accept Ram's wind blades, the black shadows proceeded to be slashed down from one to the next, giving an atrocious rise to dead bodies in great count. Even then, Ram enveloped herself in wind and resumed her slaughter, as if dancing within the flares.",
    "vi": "Quyết chả thể đón đỡ nổi những lưỡi đao gió của Ram, bầy bóng đen lần lượt bị chém rạp hết tên này đến tên khác, gieo rắc nên một số lượng xác chết đẫm máu chất cao như núi đáng sợ. Ngay cả vậy, Ram vẫn tự bao bọc mình trong gió lộng và tiếp tục đợt tàn sát đẫm máu của mình, tựa như đang nhảy múa điêu luyện ngay giữa những quầng lửa bỏng cháy rực trời."
  },
  {
    "en": "Should it be likened to, then perhaps it had indeed appeared as if a glamorous pirouette.",
    "vi": "Nếu phải so sánh liên tưởng, thì có lẽ cảnh tượng đó thực sự trông chả khác nào một điệu nhảy xoay vòng lộng lẫy và kiêu hãnh tuyệt mỹ."
  },
  {
    "en": "However, in reality, with the swing of an arm Ram robbed life, and each time she made what had shape disappear, dark joy cried for exultation through her youthful mind.",
    "vi": "Thế nhưng trên thực tế, chỉ với một cái phất tay nhẹ, Ram dẫu tước đoạt một mạng sống, và mỗi khi cô khiến một thứ có hình hài tan biến biến mất khỏi cõi đời, một niềm hoan hỷ u ám điên cuồng dẫu réo gọi reo vang đắc thắng trong tâm trí non nớt của cô."
  },
  {
    "en": "Kill more, so it howled, vehemently.",
    "vi": "Hãy sát hại nhiều hơn nữa đi, tiếng nói ấy rít gào điên cuồng, kịch liệt."
  },
  {
    "en": "Her inner oneself urged her, to pillage blood, flesh, bones, soul, life.",
    "vi": "Bản ngã sâu thẳm bên trong cô liên tục thúc giục giục giã cô hãy cướp đoạt máu, thịt, xương cốt, linh hồn và cả mạng sống của chúng."
  },
  {
    "en": "This evening was not the first time she had lent her ears to that appeal.",
    "vi": "Đêm nay quyết chả phải lần đầu tiên cô lắng nghe tiếng réo gọi cám dỗ dường ấy."
  },
  {
    "en": "ーーSince in the distant past, since the moment she had taken birth, precisely this voice allured her upon the slightest interlude.",
    "vi": "——Từ thuở xa xưa tít tắp, ngay từ khoảnh khắc cô lọt lòng chào đời, chính chất giọng ma mị đó dẫu liên tục lôi kéo cám dỗ cô vào mỗi khoảnh khắc sơ hở nhỏ nhất."
  },
  {
    "en": "It sought the awakening of her inner oneself, apprising her to entrust her life, to her blood, her flesh, her bones, her soul.",
    "vi": "Nó thèm khát sự thức tỉnh của bản ngã bên trong cô, chỉ bảo cô hãy phó mặc cả mạng sống của mình cho dòng máu sôi sục, da thịt, xương cốt và linh hồn của cô."
  },
  {
    "en": "It appealed to her, that she could kill far more, that she could destroy far more.",
    "vi": "Nó réo gọi dụ dỗ cô rằng cô có khả năng sát hại nhiều hơn thế nữa, có khả năng hủy diệt tàn phá nhiều hơn thế gấp bội."
  },
  {
    "en": "Ram seemingly couldn't comprehend, about simply what was so wonderful about this.",
    "vi": "Ram dường như quyết chả thể hiểu nổi rốt cuộc có cái gì tuyệt diệu hào hứng trong chuyện đó chứ."
  },
  {
    "en": "Neither the elder, nor her parents, no one, could comprehend this. Ram did not even feel inclined towards conveying about this, to those who sought of her a duty which departed from her being Ram.",
    "vi": "Cả vị trưởng bối, cả cha mẹ cô, quyết chả một ai thấu hiểu nổi chuyện này. Ram dẫu chả thèm có chút hứng thú nào để giãi bày tâm sự chuyện đó cho những kẻ vốn chỉ đăm đắm áp đặt lên vai cô một nghĩa vụ nhiệm vụ chả hề liên quan đến việc cô được là chính Ram."
  },
  {
    "en": "It appeared as if she was being controlled by her horn.",
    "vi": "Có cảm giác như thể cô đang bị thao túng khống chế hoàn toàn bởi chiếc sừng trên trán mình vậy."
  },
  {
    "en": "Had she not possessed a firm self, her youthful persona would've gotten easily swallowed, demolished, and precisely then she surely would have become the reincarnation of the Oni God in accordance with the desires of her surroundings.",
    "vi": "Nếu cô quyết chả sở hữu một bản ngã kiên định sắt đá, nhân cách non nớt của cô bé dẫu dễ dàng bị nuốt chửng, bị bóp nát hoàn toàn, và ngay tích tắc ấy cô chắc chắn dẫu biến thành hóa thân của Quỷ Thần đúng như nguyện vọng mong mỏi của những người xung quanh."
  },
  {
    "en": "However, she did not become that way. The reason beingーー,",
    "vi": "Thế nhưng cô quyết chả bao giờ trở nên như vậy. Nguyên nhân thực sự là vì——,"
  },
  {
    "en": "\"ーー■-chan!!\"",
    "vi": "“——■-chan!!”"
  },
  {
    "en": "Called by a shrill voice, upon turning back there she saw ■■■, irradiated by the blaze.",
    "vi": "Được gọi bởi một chất giọng lanh lảnh trong trẻo, khi khẽ ngoái đầu nhìn lại, cô nhìn thấy bóng hình của ■■■ đang được chiếu rọi rực rỡ bởi ngọn lửa cháy rực."
  },
  {
    "en": "During that instant, a surging wind dispelled the obstructive crowd of black shadows away, blowing them away into fragments in one go.",
    "vi": "Ngay tích tắc ấy, một luồng gió lộng cuồn cuộn thổi bay gạt phắt bầy bóng đen đang cản bước tiến xung quanh, nghiền nát băm vằn chúng thành từng mảnh vụn chỉ trong một nốt nhạc."
  },
  {
    "en": "And, making haste, Ram headed to ■■■.",
    "vi": "Và, nhanh chóng chớp thời cơ, Ram vội lao nhanh tiến về phía ■■■."
  },
  {
    "en": "\"■■■......\"",
    "vi": "“■■■......”"
  },
  {
    "en": "Gaze pervaded with fright, with no strength in legs, ■■■ had collapsed at that spot.",
    "vi": "Tầm mắt ngập tràn sự hoảng sợ tột độ, đôi chân dẫu đứng quyết chả vững, ■■■ đã ngã nhào quỳ sụp xuống ngay tại chỗ đó."
  },
  {
    "en": "Extending her hand to her beloved ■, she helped stand up. In accordance with the elder's wish, Ram must survive. However, not by herself, but together with ■■■.",
    "vi": "Chủ động giơ tay ra nắm lấy tay ■ yêu quý của mình, cô đỡ em ấy đứng thẳng dậy. Theo đúng tâm nguyện của trưởng bối, Ram buộc phải sống sót. Thế nhưng, quyết chả phải một mình đơn độc, mà là phải cùng kề vai sát cánh với ■■■."
  },
  {
    "en": "ーーThat, had been the instant.",
    "vi": "——Đó, chính là tích tắc định mệnh."
  },
  {
    "en": "Ascertaining ■■■'s safety, for but a moment, she let her guard down.",
    "vi": "Xác nhận được sự an toàn của ■■■, chỉ trong một tích tắc ngắn ngủi, cô đã lơ là hạ thấp cảnh giác đề phòng."
  },
  {
    "en": "By the time she took notice of the presences, she had been encircled, a situation arduous to make even an escape route through. By herself, it would not be impossible. However, if she alone were to survive, then that would be no different from dying.",
    "vi": "Đến lúc cô sực nhận ra những áp khí xung quanh, cô dẫu bị bao vây kín kẽ chả lối thoát, một hoàn cảnh cực kỳ ngặt nghèo gian nan để có thể tìm kiếm ra nổi lấy một đường đào tẩu. Nếu chỉ có một mình cô, chuyện đó quyết chả phải bất khả thi. Thế nhưng, nếu cô chỉ có thể sống sót cô độc một mình, thì chuyện đó dẫu chả khác gì cái chết là mấy cả."
  },
  {
    "en": "She possessed no choice but to, come what may, break through the situation.",
    "vi": "Cô chả còn lựa chọn nào khác ngoài việc, bất kể chuyện gì xảy ra, buộc phải đột phá càn quét cục diện ngặt nghèo hiểm nghèo này."
  },
  {
    "en": "For that purpose, she shall unfasten all shackles sealing her might, and impel an enraged wind towards the enemyーー,",
    "vi": "Vì mục đích đó, cô dẫu cởi bỏ toàn bộ những xiềng xích phong ấn sức mạnh phi thường của mình, và giáng xuống những cơn cuồng phong lộng gió thịnh nộ càn quét thẳng về phía kẻ thù——,"
  },
  {
    "en": "\"ーーーー\"",
    "vi": "“————”"
  },
  {
    "en": "That must have been an interval within her heart, sired by the sense of omnipotence she abhorred.",
    "vi": "Đó chắc chắn là một khoảnh khắc sơ hở ngắn ngủi trong tâm can cô, được sinh ra từ chính cái cảm giác vạn năng điên cuồng mà cô cực kỳ ghê tởm chối bỏ."
  },
  {
    "en": "The black shadow slipped through the blades of wind, the single burnish it fired tenaciously afflicted her forehead, her field of vision fulminating.",
    "vi": "Tên bóng đen luồn lách lướt qua những lưỡi đao gió sắc lẹm, đòn chém hiểm hóc duy nhất gã tung ra ghim chặt đâm thẳng vào trước trán cô, khiến nhãn quan của cô nổ tung chói lòa đau đớn."
  },
  {
    "en": "Reclining due to the enormous impact, whilst tasting an excruciating sense of loss, Ram gazed.",
    "vi": "Ngã ngửa ra sau vì lực tác động khổng lồ kinh hoàng, trong khi phải hứng chịu nếm trải một cảm giác mất mát trống rỗng đau đớn tột cùng đến tận xương tủy, Ram đăm đắm nhìn ngắm."
  },
  {
    "en": "Steadily, swiveling, towards the scarlet night illuminated by the blaze scorching the village to nowt, gyrating, a white horn soared.",
    "vi": "Lặng lẽ, xoay tròn, hướng về phía bầu trời đêm đỏ tươi rực lửa đang thiêu rụi cả ngôi làng thành tro bụi hoang tàn chả còn gì, xoay tít, một chiếc sừng trắng ngần bay vút lên trời cao."
  },
  {
    "en": "Apprehending that was her own horn, her slim throat gave way to a screech, begotten by agony and sense of loss.",
    "vi": "Nhận thức được rằng đó chính là chiếc sừng của chính bản thân mình, cổ họng thanh mảnh của cô hét lên một tiếng thét xé lòng chói tai, sinh ra bởi sự đau đớn tột cùng và nỗi mất mát trống rỗng chả thể đong đếm nổi."
  },
  {
    "en": "Whilst screeching, however alongside, Ram detected.",
    "vi": "Thế nhưng trong lúc đang gào thét thảm thiết dường ấy, đồng thời, Ram sực phát hiện ra."
  },
  {
    "en": "Ever since she had been born, that voice which continued to eat into Ram, had become inaudible.",
    "vi": "Chất giọng ma mị vốn liên tục réo gọi dụ dỗ ăn mòn ý thức của Ram kể từ khi lọt lòng chào đời, đột ngột tắt lịm đi quyết chả còn nghe thấy nổi nữa."
  },
  {
    "en": "Ah, so it was something that simple, she thought, being amused by her own imbecility.",
    "vi": "À, hóa ra mọi chuyện chỉ đơn giản có thế mà thôi sao, cô thầm nghĩ ngợi, tự thấy buồn cười trước sự ngốc nghếch ngu ngốc của bản thân mình."
  },
  {
    "en": "Whilst watching the horn paint a parabola into the scarlet nightーー,",
    "vi": "Trong khi lặng lẽ nhìn chiếc sừng vẽ nên một đường parabol tuyệt mỹ rực rỡ trên bầu trời đêm rực lửa đỏ tươi kia——,"
  },
  {
    "en": "ーーAh, it finally broke.",
    "vi": "——À, rốt cuộc nó dẫu gãy rồi."
  },
  {
    "en": "So spoke, her mind.",
    "vi": "Tâm trí cô khẽ thì thầm buông lời như thế."
  },
  {
    "en": "△▼△▼△▼△",
    "vi": "△▼△▼△▼△"
  },
  {
    "en": "ーーDevoutly, fervidly, the black earth dragon absconded from the field of vision she shared through『Clairvoyance』.",
    "vi": "——Một cách tận tụy và nhiệt thành phi thường, con địa long đen tuyền đang nhanh chóng tháo chạy trốn chạy ra khỏi tầm nhìn mà cô chia sẻ đồng bộ hóa thông qua 『Thiên Lý Nhãn』."
  },
  {
    "en": "On its back was the young girl, bound to be Ram's cherished other half.",
    "vi": "Trên lưng của nó chính là cô gái trẻ, nửa kia yêu thương trân quý chả thể tách rời của Ram."
  },
  {
    "en": "One of her wings, unremembered, absent, having bequeathed merely a gaping void of lossーー,",
    "vi": "Một trong hai đôi cánh thiên thần của cô, bị lãng quên mất rồi, chả còn hiện diện nữa, để lại duy nhất một khoảng trống rỗng mất mát chao đảo tột cùng——,"
  },
  {
    "en": "Ram: \"ーーRem.\"",
    "vi": "Ram: “——Rem.”"
  },
  {
    "en": "Apprehending what meaning this held, Ram's heart tremoured with rage.",
    "vi": "Nhận thức thấu suốt được ý nghĩa thực tế của cục diện hiểm nghèo đó, trái tim của Ram run rẩy dữ dội kịch liệt vì sự phẫn nộ thịnh nộ căm hờn."
  },
  {
    "en": "Though exasperating to admit, Ram had managed to regain a part of her strength of heyday owing to Subaru's cooperation, and that potency had overpowered the Sin Archbishop of『Gluttony』, Ley Batenkaitos, slowly cornering him into disadvantage.",
    "vi": "Dù thật cực kỳ căm phẫn uất ức khi phải thừa nhận, Ram thực sự đã tạm thời giành lại được một phần sức mạnh phi thường thời hoàng kim nhờ sự hợp tác kề vai gánh vác của Subaru, và uy lực vượt bậc đó dẫu áp đảo hoàn toàn tên Giám Mục Tội Lỗi của 『Phàm Ăn』 Ley Batenkaitos, từ từ dồn gã vào thế hạ phong lép vế hoàn toàn."
  },
  {
    "en": "Ram: \"ーーRem.\"",
    "vi": "Ram: “——Rem.”"
  },
  {
    "en": "Ram herself could affirm that in terms of simply killing him, she had attained a countless amount of opportunities.",
    "vi": "Bản thân Ram khả dĩ tự tin khẳng định rằng nếu chỉ đơn thuần là muốn đoạt mạng hạ gục hắn, cô dẫu nắm giữ chả biết bao nhiêu cơ hội ngàn vàng chí mạng rồi."
  },
  {
    "en": "However, the vexatious Authority he had been endowed with, the existence of the power and ability to eat the『Memories』and『Name』of the opponent made Ram hesitate in imprudently taking the life of that blasphemer.",
    "vi": "Thế nhưng, cái Quyền Năng phiền phức bỉ ổi mà gã được ban tặng, sự tồn tại của quyền hạn khả năng ăn sạch 『Ký Ức』 và 『Tên』 của đối thủ đã khiến Ram phải do dự đắn đo quyết chả dám tùy tiện cướp đi mạng sống của tên báng bổ trơ trẽn đó."
  },
  {
    "en": "A judgement compelled by, not kindliness, but necessity. But, the result remained the way it was, the result.",
    "vi": "Một phán quyết lạnh lùng dứt khoát ép buộc phải đưa ra quyết chả phải do lòng từ bi nhân ái, mà là vì nhu cầu cấp thiết bắt buộc. Thế nhưng, kết quả dẫu cứ mãi là kết quả phũ phàng mà thôi."
  },
  {
    "en": "Resultantly, Batenkaitos freely utilised his Authority and made a safe escape before Ram, and with the same momentum, headed to secure Rem's person, Ram's other half.",
    "vi": "Hệ quả là, Batenkaitos đã thoải mái lợi dụng kĩ nghệ Quyền Năng của hắn để tháo chạy đào tẩu an toàn ngay trước mắt Ram, và với cùng một đà tiến đó, gã lao thẳng về phía Rem nhằm khống chế bắt giữ em ấy——nửa kia yêu quý của cô."
  },
  {
    "en": "His aim was obviousーー because he possessed conviction that he shan't win, even if he were to uprightly battle Ram.",
    "vi": "Mục tiêu hiểm độc ác độc của hắn đã rõ như ban ngày——bởi lẽ hắn tin chắc mười mươi rằng mình dứt định quyết chả thể thắng nổi nếu cứ ngoan cố đọ sức chiến đấu trực diện với Ram."
  },
  {
    "en": "Fighting face to face, and upon the instance of discerning drawback, withdrawing and altering the way of action.",
    "vi": "Chiến đấu trực diện diện đối diện, và ngay khi nhận ra bản thân gặp bất lợi lép vế dẫu lập tức chủ động rút lui đào tẩu và thay đổi hoàn toàn phương thức tác chiến chiêu trò."
  },
  {
    "en": "Sin Archbishops were no warriors. They were existences who acted with avarice for the sole purpose of fulfilling their own desires, possessing not a single reason to be concerned with what path ought to be taken for victory.",
    "vi": "Lũ Giám Mục Tội Lỗi quyết chả phải là những chiến binh dũng cảm anh dũng gì cho cam. Chúng chỉ là những tồn tại hành động hoàn toàn theo lòng tham vô độ ích kỷ vì mục đích duy nhất là lấp đầy thỏa mãn ham muốn dục vọng cá nhân của mình mà thôi, chả sở hữu nổi lấy một lý do để bận tâm xem bản thân phải đi trên con đường đạo đức nào để đạt được chiến thắng cả."
  },
  {
    "en": "Thus, he plotted revenge against Ram who had made him taste humiliation, and to further curtail the time limit placed onto the hornless Ram using Rem's『Memories』which he had stolen as basis.",
    "vi": "Do đó, hắn âm mưu báo thù rửa hận nhắm vào Ram, người đã bắt hắn phải nếm mùi nhục nhã ê chề bại trận, và cố ý thu hẹp hơn nữa giới hạn thời gian sinh tử đè nặng lên một Ram vô sừng yếu ớt bằng cách sử dụng chính mớ 『Ký Ức』 cướp đoạt từ Rem để làm điểm tựa cơ sở triệt hạ cô."
  },
  {
    "en": "Infuriatingly, that strategy was the optimum solution.",
    "vi": "Thật cực kỳ căm phẫn uất ức thay, chiến thuật bỉ ổi hiểm độc đó lại chính là phương án tối ưu tuyệt hảo nhất vào lúc này."
  },
  {
    "en": "Should he seize and gain control of Rem's person, he could incapacitate Ram with ease.",
    "vi": "Một khi hắn khống chế bắt giữ được cơ thể sống của Rem, hắn dẫu dễ dàng vô hiệu hóa triệt hạ Ram chả tốn chút công sức nào cả."
  },
  {
    "en": "Even should that not be, should he buy any more time then this camp's war potential would suffer an immense loss. With the flow of time, her chances of victory diminished.",
    "vi": "Dù cho chả đạt tới mức đó đi chăng nữa, chỉ cần hắn câu giờ kéo dài thời gian thêm chút nữa thôi thì lực lượng chiến đấu của phe ta dẫu dứt định phải gánh chịu tổn thất kinh hoàng nặng nề. Theo dòng chảy thời gian trôi đi, cơ hội chiến thắng của cô dẫu ngày một tiêu biến lụi tàn sạch sẽ."
  },
  {
    "en": "Henceーー,",
    "vi": "Chính vì lẽ đó——,"
  },
  {
    "en": "Ram: \"Must catch up to Patrasche, as soon as possible.\"",
    "vi": "Ram: “Buộc phải đuổi kịp Patrasche nhanh nhất có thể.”"
  },
  {
    "en": "Fortunately, Patrasche, whom Rem had been entrusted to, was a Ground Dragon so intelligent, it could be said that amongst the battle array assembled within this tower, it was second only to Julius.",
    "vi": "Thật may mắn là Patrasche, người được cô tin tưởng giao phó bảo vệ Rem, là một con địa long thông minh kiệt xuất đến mức dẫu có thể khẳng định rằng trong số toàn bộ lực lượng chiến đấu tập hợp tại tòa tháp này, trí tuệ kiệt xuất của nó dứt định chỉ xếp sau duy nhất mỗi mình Julius mà thôi."
  },
  {
    "en": "Subaru and Beatrice had foibles, and Echidna and Meili had far too many unknown aspects to them. Those like Emilia, who brandished an air of being unreliable, were outrageous.",
    "vi": "Subaru và Beatrice dẫu sở hữu quá nhiều điểm yếu chí mạng, còn Echidna và Meili lại chứa đựng quá nhiều góc khuất bí ẩn chả thể thấu suốt nổi. Còn hạng người cứ tỏ ra vẻ vụng về chả đáng tin cậy như Emilia thì đúng là thật hết chỗ nói nổi rồi."
  },
  {
    "en": "And though complicated, Batenkaitos was evidently tormenting Patrasche.",
    "vi": "Và dù tình hình có chút phức tạp rắc rối, Batenkaitos rõ ràng là đang cố ý hành hạ săn đuổi Patrasche."
  },
  {
    "en": "Despite being capable of running it down in an instant at simply the thought of running it down, Batenkaitos had intentionally waned his onslaught, cultivating an interval through his pursuit, and had been taking joy in a hunt emaciating his prey.",
    "vi": "Mặc dù dư sức đuổi kịp hạ gục con địa long chỉ trong tích tắc ngắn ngủi nếu gã thực sự muốn làm thế ngay lập tức, Batenkaitos đã cố tình giảm bớt nhịp độ tàn sát của mình, cố ý kéo dài giãn khoảng cách thông qua đợt săn đuổi dai dẳng này, và đang vô cùng thích thú tận hưởng một cuộc săn bắt hành hạ vắt kiệt sức lực con mồi tội nghiệp."
  },
  {
    "en": "All for the sake of sharing his field of vision, and scorching this spectacle into Ram's memory.",
    "vi": "Tất thảy chỉ vì mục đích chia sẻ đồng bộ hóa nhãn quan trực tiếp của hắn, cố ý khắc sâu cảnh tượng tàn khốc đầy thương tâm này vào tận sâu trong ký ức của Ram."
  },
  {
    "en": "She could no longer allow him to take any further arbitrary action as per he pleasedーー,",
    "vi": "Cô quyết chả thể để gã tiếp tục tự ý giả dạng giở trò mèo theo ý muốn ích kỷ của mình thêm nữa rồi——,"
  },
  {
    "en": "Ram: \"ーーAh.\"",
    "vi": "Ram: “——Á.”"
  },
  {
    "en": "It had been the moment she was enveloping herself in wind, seeking to break into a sprint.",
    "vi": "Đúng vào tích tắc cô đang định bao bọc cơ thể mình trong gió lộng để chuẩn bị tăng tốc phi nhanh vun vút bám đuổi."
  },
  {
    "en": "Her field of vision, aiming for the floor above the spiral staircase obfuscated, and for an instant,『Clairvoyance』came undone. Whilst maintaining the projection of Batenkaitos' field of vision in her right eye, preserving her own field of vision in her left eye, the scenery blurred further.",
    "vi": "Tầm nhìn của cô, vốn đang định vị hướng lên tầng phía trên của cầu thang xoắn ốc đột ngột bị che khuất mờ mịt, và chỉ trong một tích tắc ngắn ngủi, 『Thiên Lý Nhãn』 dẫu bị phá vỡ hoàn toàn. Trong khi cố gắng duy trì nhãn quan đồng bộ hóa của Batenkaitos ở bên mắt phải, bảo vệ tầm nhìn thực tế của riêng mình ở bên mắt trái, cảnh vật xung quanh cô lại càng nhòe đi dữ dội."
  },
  {
    "en": "That was not all. The heavy exhaustion she could not feel till now, and the gyp and affliction as if her organs were being churned by an invisible hand, descended upon Ram herself.",
    "vi": "Mới chuyện quyết chả dừng lại ở đó. Cơn kiệt sức nặng trĩu khủng khiếp vốn chả hề cảm thấy suốt từ nãy đến giờ, cùng nỗi đau đớn đau nhức dằn vặt quằn quại như thể các cơ quan nội tạng đang bị một bàn tay vô hình điên cuồng vặn xoắn nhào nặn, đột ngột ập xuống đè nặng lên chính bản thân Ram."
  },
  {
    "en": "That was, indubitably, the effect of weariness Ram was ordinarily made to taste.",
    "vi": "Đó dứt định, chả nghi ngờ gì nữa, chính là hệ quả của phản phệ kiệt sức dữ dội mà Ram thường xuyên buộc phải nếm trải gánh chịu hàng ngày."
  },
  {
    "en": "What Subaru a bombasted he shall take over through some kind of an Authority, the indemnification bound to eternally eat into the『Hornless』Ramーー it, rebounded towards Ram.",
    "vi": "Thứ mà Subaru từng ngông cuồng tự phụ hứa chắc nịch rằng cậu dẫu gánh vác thay thế hết cho cô thông qua một loại Quyền Năng nào đó, cái giá đắt đỏ đè nặng ăn mòn vĩnh viễn cơ thể Quỷ tộc 『Vô Sừng』 của Ram——giờ đây, dẫu hoàn toàn dội ngược phản phệ thẳng về phía Ram."
  },
  {
    "en": "What dawned upon her forthwith, was the possibility of Subaru having died, vainly and uncouthly.",
    "vi": "Điều đầu tiên xuất hiện thoáng qua trong đầu cô ngay tích tắc ấy, chính là khả năng Subaru dẫu đã bỏ mạng một cách vô ích và vô duyên chả ra làm sao cả rồi."
  },
  {
    "en": "However, she could judge that wasn't the case due to the lightness of the burden rebounding onto Ram. Though merely for a few minutes, taking the might Ram had brought forth into account, its indemnification...",
    "vi": "Tuy nhiên, cô dẫu nhanh chóng phán đoán được tình thế quyết chả phải tồi tệ đến nhường ấy nhờ vào độ nhẹ nhõm nhè nhẹ của gánh nặng phản phệ dội ngược đè lên vai Ram lúc này. Dù chỉ mới vỏn vẹn vài phút trôi qua, nhưng nếu xét đến sức mạnh phi thường khủng kịch liệt mà Ram vừa bộc phát từ nãy đến giờ, cái giá đắt đỏ dội ngược quyết chả thể nào lại nhỏ bé ít ỏi dường này cho cam."
  },
  {
    "en": "It was supposed to be such agony that it should be no peculiarity even if she were to literally vomit blood and oscillate.",
    "vi": "Đáng lý ra nó phải là một cơn đau đớn tột cùng đến mức dù cô có thực sự nôn ra máu tươi xối xả và lảo đảo ngã khuỵu ngay tại chỗ dẫu quyết chả có gì là kỳ lạ bất thường cả."
  },
  {
    "en": "The fact that that had not occurred, though an unforeseen circumstance had taken shape, implied Subaru had not unreservedly withdrawn from the war front.",
    "vi": "Việc chuyện đó quyết chả xảy ra, dù cho một biến cố chả ngờ nào đó dứt định đã thành hình phát sinh, ngầm chứng minh rằng Subaru vẫn chưa hoàn toàn rút lui khỏi chiến tuyến sinh tử."
  },
  {
    "en": "Otherwise, a progression of events entirely contrasting the occured happenings also came to her mind.",
    "vi": "Bằng không, một kịch bản diễn biến hoàn toàn trái ngược với những gì vừa xảy ra dẫu lập tức hiện lên trong suy nghĩ của cô."
  },
  {
    "en": "Namely, a disaster which Subaru was obliged to take up had occurred onto someone else's body, beyond the burden of Ram's body.",
    "vi": "Nghĩa là, một thảm họa tai họa kinh hoàng nào đó mà Subaru buộc phải gánh chịu thay đã đột ngột xảy đến với cơ thể của một người khác ngoài gánh nặng của Ram."
  },
  {
    "en": "Ram: \"Beatrice-sama or Meili, knight Julius......\"",
    "vi": "Ram: “Beatrice-sama hay Meili, hoặc hiệp sĩ Julius......”"
  },
  {
    "en": "Her mind drifted in that direction, but affirming that answer held no significance.",
    "vi": "Tâm trí cô khẽ trôi dạt suy đoán theo hướng đó, nhưng việc cố khẳng định tìm ra câu trả lời đanh thép lúc này quyết chả mang lại phân ý nghĩa giá trị thực tế nào cả."
  },
  {
    "en": "What was momentous was that it had now become onerous for Ram to bring forth the might akin to what she had earlier, which had succeeded in overpowering Batenkaitos. ーーIn terms of shackles, merely one was unfastened.",
    "vi": "Điều tối khẩn thiết thực tế là giờ đây Ram dẫu cực kỳ gian nan chật vật nếu muốn bộc phát ra luồng sức mạnh phi thường vĩ đại tương đương lúc nãy, thứ từng thành công áp đảo hoàn toàn Batenkaitos. ——Xét theo số lượng xiềng xích phong ấn, lúc này cô dẫu chỉ đang cởi bỏ duy nhất vỏn vẹn một chiếc xiềng xích mà thôi."
  }
];

const outDir = path.join(process.cwd(), 'scripts', 'translation_temp');
fs.writeFileSync(
  path.join(outDir, 'ch83_part1.json'),
  JSON.stringify(part1, null, 2),
  'utf-8'
);
console.log('Successfully wrote ch83_part1.json');
