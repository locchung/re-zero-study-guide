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
    "en": "Since long before, she had harboured misgivings.",
    "vi": "Từ rất lâu trước đây, cô dẫu ôm giữ những mối nghi hoặc trong lòng."
  },
  {
    "en": "Her lord whom she devoted her allegiance to, Roswaal L. Mathers, for the purpose of achieving his ultimate goal, killing the『Dragon』who safeguarded the Kingdom of Lugnica was necessary.",
    "vi": "Để vị chủ nhân mà cô dâng hiến lòng trung thành tuyệt đối, Roswaal L. Mathers, hoàn thành mục tiêu tối thượng của mình, việc chém hạ vị 『Thần Long』 hộ quốc của Vương Quốc Lugnica là điều bắt buộc dứt định phải làm."
  },
  {
    "en": "She was a vital and indispensable piece for that plan of Roswaal's, for Ram to have heard that from none other than himself would be an event that occurred close to ten years in the past.",
    "vi": "Bản thân cô chính là một quân cờ cốt lõi và quyết chả thể thiếu trong đại kế hoạch ấy của Roswaal, sự thật ấy được chính miệng ngài thổ lộ với Ram dẫu là chuyện của gần mười năm về trước rồi lị."
  },
  {
    "en": "The village of the Oni clan blazing scarlet, having saved Ram and ■■■ from there, Roswaal sought recompense.",
    "vi": "Giữa ngôi làng của Quỷ tộc chìm trong ngọn lửa đỏ rực thiêu rụi thảy mọi thứ, sau khi cứu vớt Ram và ■■■ ra khỏi đó, Roswaal dẫu đòi hỏi một sự đền đáp xứng đáng."
  },
  {
    "en": "And, in exchange for retribution for the Oni clan, Ram decided to pay that compensation.",
    "vi": "Và, để đổi lấy sự báo thù cho Quỷ tộc, Ram đã quyết định tự mình trả món nợ bù đắp ấy."
  },
  {
    "en": "That she shall thus cooperate, let it be for the plan to kill the『Dragon』or whatever else.",
    "vi": "Rằng cô dứt định sẽ hợp tác hết mình, dẫu cho đó là kế hoạch chém hạ 『Thần Long』 hay bất kỳ chuyện gì đi chăng nữa."
  },
  {
    "en": "But merely for a singular point was Ram unable to find the answer within herself, that being the essential way of killing the『Dragon』.",
    "vi": "Tuy nhiên, chỉ duy nhất ở một điểm mà Ram quyết chả thể tự tìm ra lời giải cho bản thân, đó chính là phương pháp thiết yếu để chém hạ 『Thần Long』."
  },
  {
    "en": "It was not easy. Even if plans were to be meddled around with and measures were to be taken, that was not easy. Should that moment arrive, simply what would Ram be able to do.",
    "vi": "Chuyện đó quyết chả hề dễ dàng. Dẫu cho các kế hoạch có được chuẩn bị kỹ lưỡng hay các biện pháp có được thực thi sát sao, thảy đều chả hề dễ dàng. Một khi khoảnh khắc ấy thực sự gõ cửa, Ram rốt cuộc dứt định có thể làm được những gì chứ."
  },
  {
    "en": "\"You will know when the time comes. ーーYour role, which only you two elder sister and ■ ■ can fulfill.\"",
    "vi": "“Đến lúc rồi ngươi sẽ tự khắc biết mà thôi. ——Vai trò của ngươi, thứ chỉ có hai chị em người làm chị và ■ ■ mới có thể hoàn thành trọn vẹn được chăng.”"
  },
  {
    "en": "She felt she had once heard such words, which had been chipped off.",
    "vi": "Cô cảm thấy mình dường như đã từng nghe qua những lời nói ấy, những ký ức nay đã bị sứt mẻ vụn vỡ."
  },
  {
    "en": "Curiously, she had never given deep thought to what that meant until today, butーー,",
    "vi": "Thật kỳ lạ, cô dẫu chưa từng bao giờ suy nghĩ sâu sắc về ý nghĩa thực sự của những lời ấy cho đến tận ngày hôm nay, thế nhưng——,"
  },
  {
    "en": "\"It is finally understood. What Roswaal-sama was aiming for.\"",
    "vi": "“Cuối cùng thì ta dẫu đã hiểu rõ rồi lị. Mục tiêu thực sự mà Roswaal-sama hướng tới.”"
  },
  {
    "en": "All of Roswaal's actions were for the purpose of the ultimate goal he had clasped throughout his long lifetime.",
    "vi": "Thảy mọi hành động của Roswaal đều hướng về mục tiêu tối thượng mà ngài đã ôm giữ suốt cuộc đời đằng đẵng của mình."
  },
  {
    "en": "For that purpose he had concealed himself deep within the Kingdom of Lugnica, for that purpose he had saved Ram and ■■■, for that purpose he had put a check on『Sanctuary』as a touchstone, for that purpose he had tested Natsuki Subaru.",
    "vi": "Vì mục đích ấy, ngài đã ẩn mình thật sâu trong Vương Quốc Lugnica, vì mục đích ấy ngài cứu vớt Ram và ■■■, vì mục đích ấy ngài biến 『Thánh Địa』 thành một phép thử đá thử vàng, và dẫu vì mục đích ấy ngài ra sức thử thách Natsuki Subaru."
  },
  {
    "en": "Even if he inevitably had to alter his original scheme, all of the preparation until that point had not been futile. ーーNo, he would not let it be rendered futile, that was who he was.",
    "vi": "Dẫu cho ngài có buộc phải thay đổi kế hoạch ban đầu đi chăng nữa, thảy mọi sự chuẩn bị cho tới thời điểm đó quyết chả hề uổng phí vô ích. ——Không, ngài chắc chắn quyết không bao giờ để nó trở nên uổng phí, bởi ngài chính là con người như thế."
  },
  {
    "en": "Hence, the answer came forth within Ram as well.",
    "vi": "Chính vì vậy, câu trả lời dẫu sớm hiện hữu bên trong tâm trí của Ram."
  },
  {
    "en": "The reason why Roswaal took custody of a pair of young Oni elder sister and ■ ■.",
    "vi": "Lý do thực sự khiến Roswaal thu nhận cặp chị em Quỷ tộc người làm chị và ■ ■ khi ấy."
  },
  {
    "en": "The ■ ■, had been taken in as substitute for Ram's lost horn.",
    "vi": "■ ■ ấy, vốn được nhận về để thay thế thế chỗ cho chiếc sừng đã mất của Ram."
  },
  {
    "en": "The elder sister and ■ ■ that were Ram and ■■■, with the two of them acting as a single Oni, he had taken them in his hand for killing the『Dragon』.",
    "vi": "Người làm chị và ■ ■ chính là Ram và ■■■, khi cả hai cùng hòa làm một thực thể Quỷ duy nhất, ngài dẫu nắm giữ hai người họ trong tay nhằm phục vụ cho mục tiêu chém hạ 『Thần Long』."
  },
  {
    "en": "Naturally, not even Roswaal could escape from the effects of the Authority of『Gluttony』.",
    "vi": "Lẽ dĩ nhiên, ngay cả Roswaal dẫu quyết chả thể thoát khỏi tầm ảnh hưởng của Quyền Năng của 『Phàm Ăn』."
  },
  {
    "en": "As a matter of consequence, he too must have forgotten why ■■■ had been taken into his mansion. However, even if he had forgotten, he must have immediately discerned his own self's aim.",
    "vi": "Hệ quả tất yếu là ngài chắc chắn dẫu quên sạch lý do tại sao ■■■ lại được đưa vào dinh thự của mình. Thế nhưng, dẫu cho ngài có quên đi, ngài chắc chắn dứt định lập tiếp nhận ra ý đồ thực sự của bản thân."
  },
  {
    "en": "And, whilst observing Ram and the others make strenuous efforts to recover ■■■ from the damage of『Gluttony』, he did not disclose that truth. Honestly, he is soーー,",
    "vi": "Và rồi, khi lặng lẽ quan sát Ram cùng những người khác dốc hết sức lực để cứu vớt ■■■ khỏi sự tàn phá của 『Phàm Ăn』, ngài quyết chả thèm hé răng nửa lời về sự thật ấy. Thật tình, ngài quả dẫu là kẻ——,"
  },
  {
    "en": "\"His scrupulous nature won't change, isn't it.\"",
    "vi": "“Cái bản tính kỹ lưỡng tỉ mỉ cẩn trọng ấy quyết chả bao giờ thay đổi được nhỉ.”"
  },
  {
    "en": "Though his plans had once suffered a setback due to Subaru's actions, he yet resumed his handiworks for fulfilling his goal behind the scenes and whilst remaining vigilant for a chance to strike.",
    "vi": "Dẫu cho kế hoạch của ngài từng phải chịu một vấp ngã lớn do những hành động của Subaru, ngài dẫu âm thầm bắt tay vào hành động để hoàn thành mục tiêu của mình ở phía sau hậu trường, đồng thời luôn cảnh giác cao độ rình rập một cơ hội chín muồi để ra tay."
  },
  {
    "en": "A nuisance of a nature. Wonder what he must be doing about now, when Ram was not there to watch him.",
    "vi": "Thật là một bản tính phiền toái vô cùng. Chả biết lúc này ngài đang bày ra trò gì nữa, khi Ram quyết chả có mặt ở bên để mắt canh chừng ngài."
  },
  {
    "en": "However, so she thought as well.",
    "vi": "Thế nhưng, cô dẫu suy nghĩ như thế."
  },
  {
    "en": "ーーThat, in this journey, by the point of having allowed Ram to accompany Subaru and the others as they tried to save ■■■, could Roswaal have perchance foreseen the possibility of things turning out this way.",
    "vi": "——Rằng, trong chuyến hành trình này, vào khoảnh khắc ngài cho phép Ram đồng hành cùng nhóm Subaru để giải cứu ■■■, liệu Roswaal có phải dẫu sớm tiên liệu trước khả năng mọi chuyện rồi sẽ chuyển biến đến nông nỗi này chăng."
  },
  {
    "en": "She may be overthinking.",
    "vi": "Cô có lẽ đang suy nghĩ quá nhiều."
  },
  {
    "en": "To begin with, the appearance of the Sin Archbishop of『Gluttony』in Pleiades Watchtower was an unforeseen circumstance, and there was no way he could have possessed confidence in Ram and ■■■ being placed into a hazardous situation.",
    "vi": "Ngay từ đầu, việc tên Đại Giám Mục Tội Lỗi của 『Phàm Ăn』 đột ngột xuất hiện tại Tháp Canh Pleiades vốn là một tình huống quyết chả thể ngờ tới, và ngài dứt định quyết chả thể nào nắm chắc phần thắng khi đẩy Ram và ■■■ vào một tình thế hiểm nghèo dường ấy."
  },
  {
    "en": "This may have been an excessive misapprehension on Ram's part, an overestimation of the man she dearly loved.",
    "vi": "Đây dẫu chỉ là sự ngộ nhận thái quá từ phía Ram, một sự đánh giá quá cao đối với người đàn ông cô hết mực yêu thương mà thôi lị."
  },
  {
    "en": "Howeverーー,",
    "vi": "Thế nhưng——,"
  },
  {
    "en": "\"ーーIt feels far better to believe that the man you love placed trust in you anyways.\"",
    "vi": "“——Dù sao đi nữa, tin tưởng rằng người đàn ông mình yêu đã gửi gắm trọn vẹn niềm tin vào mình dẫu vẫn đem lại cảm giác dễ chịu hơn nhiều lị.”"
  },
  {
    "en": "That he thought, should Ram be there, ■■■ and the other members will remain safe and protected.",
    "vi": "Rằng ngài dứt định nghĩ rằng, chỉ cần có Ram ở đó, ■■■ cùng các thành viên khác chắc chắn dẫu được an toàn bảo vệ."
  },
  {
    "en": "That he thought, if need be, Ram would take notice of the supposition Roswaal had concealed, and by her volition would turn over the trump card for the purpose of killing the『Dragon』, that he bore such faith.",
    "vi": "Rằng ngài tin chắc rằng nếu tình thế đòi hỏi, Ram chắc chắn dứt định sẽ nhận ra ý đồ mà Roswaal đã che giấu bấy lâu nay, và bằng chính ý chí của mình, cô sẽ lật ngược thế cờ tung ra quân bài tẩy nhằm mục đích chém hạ 『Thần Long』, ngài dẫu sở hữu đức tin mạnh mẽ dường ấy."
  },
  {
    "en": "That the man named Roswaal L. Mathers had acknowledged the ten years of the woman named Ram, to believe so felt far, far better.",
    "vi": "Tin tưởng rằng người đàn ông mang tên Roswaal L. Mathers ấy đã công nhận quãng thời gian mười năm ròng rã của người phụ nữ mang tên Ram, dứt định đem lại cảm giác tốt hơn rất nhiều."
  },
  {
    "en": "That is whyーー,",
    "vi": "Chính vì lẽ đó——,"
  },
  {
    "en": "Ram: \"ーーRight now, Ram truly feels the greatest she ever has. Kindly get knocked down.\"",
    "vi": "Ram: “——Ngay lúc này, Ram thực sự cảm thấy bản thân đang ở trong trạng thái tuyệt vời nhất từ trước đến nay đấy lị. Xin mời ngươi nằm xuống giùm cho.”"
  },
  {
    "en": "△▼△▼△▼△",
    "vi": "△▼△▼△▼△"
  },
  {
    "en": "The accomplishments established by the『Fist King』Neiji Rockhardt, is a noteworthy narrative in the『Gladiator Island』Ginunhive of the Sacred Vollachia Empire. ーーNo, once had been a narrative.",
    "vi": "Những chiến tích hiển hách do 『Quyền Vương』 Neiji Rockhardt thiết lập, vốn là một câu chuyện truyền kỳ đáng chú ý tại 『Đảo Giác Đấu』 Ginunhive thuộc Đế Quốc Thần Thánh Vollachia. ——Không, đã từng là một câu chuyện truyền kỳ."
  },
  {
    "en": "Having been met by the tragedy of the Authority of『Gluttony』, now with both sides of『Name』and『Memories』plundered, there existed not anyone anywhere who knew of the achievements established by him as a gladiator.",
    "vi": "Khi phải gánh chịu thảm kịch từ Quyền Năng của 『Phàm Ăn』, lúc này khi cả hai phương diện 『Danh Tánh』 và 『Ký Ức』 đều bị cướp đoạt tàn nhẫn, quyết chả còn lấy một ai ở bất cứ nơi đâu hay biết về những thành tựu vinh quang mà hắn từng lập nên với tư cách một đấu sĩ."
  },
  {
    "en": "On the Gladiator Island, wherein strength was used for exhibition, Neiji, solitarily, using his empty hands as weapons survived hundreds of death duels, and finally attained the right of liberation from slavery.",
    "vi": "Trên Đảo Giác Đấu, nơi sức mạnh chỉ được dùng làm trò tiêu khiển trưng bày, một mình Neiji, chỉ sử dụng đôi bàn tay trần làm vũ khí chiến đấu, đã sinh tồn kiên cường qua hàng trăm trận quyết đấu sinh tử hiểm nghèo, và cuối cùng dứt định giành lấy quyền tự do giải phóng khỏi kiếp nô lệ."
  },
  {
    "en": "Conceiving the refined fighting spirit in his fists, intercepting swords and daggers, before his fists which shattered steel whatsoever obstacle was equivalent to a maiden's soft skin, he likely could have been termed as the one to have beaten the most humans to death in history.",
    "vi": "Tích tụ đấu chí tinh anh sắc bén vào đôi nắm đấm thép, gạt phăng mọi đường gươm mũi kiếm, trước đôi nắm đấm có thể đập tan cả thép ròng ấy, bất kỳ trở ngại nào dẫu chỉ mềm yếu tựa làn da thiếu nữ, hắn dứt định có thể được mệnh danh là kẻ đã đánh chết nhiều người nhất trong lịch sử nhân loại."
  },
  {
    "en": "With his inordinately brutal nefarious techniques, the『Carnivorous Beast』Beli Heinelga is a rare serial killer who made the Holy Kingdom of Gusteko shudder. ーーNo, once had made it shudder.",
    "vi": "Với những kỹ thuật tàn ác, hung bạo phi thường, 『Thú Ăn Thịt』 Beli Heinelga là một tên sát nhân hàng loạt hiếm hoi từng khiến Thánh Quốc Gusteko phải run rẩy kinh hoàng. ——Không, dẫu từng khiến vương quốc ấy phải run rẩy."
  },
  {
    "en": "Having been met by the tragedy of the Authority of『Gluttony』, now with both sides of『Name』and『Memories』plundered, the vast counts of misfortune and precepts he yielded as a murderer remained not in anyone's memories.",
    "vi": "Khi phải gánh chịu thảm kịch từ Quyền Năng của 『Phàm Ăn』, lúc này khi cả hai phương diện 『Danh Tánh』 và 『Ký Ức』 đều bị cướp đoạt tàn nhẫn, vô vàn tội ác tày trời và những giáo huấn hung bạo mà hắn tạo ra với tư cách một kẻ sát nhân quyết chả còn lưu lại trong ký ức của bất kỳ ai."
  },
  {
    "en": "By birth, Beli displayed abnormal growth, and acquired strength of physical body impossible to be realized in average humans. And, embracing the men of his liking to death, he piled up copious atrocious crimes.",
    "vi": "Ngay từ khi sinh ra, Beli đã biểu hiện sự phát triển dị thường phi thực tế, sở hữu một sức mạnh thể chất vượt trội quyết chả thể tìm thấy ở người thường. Và rồi, bằng cách ôm chặt siết chết những nam nhân lọt vào mắt xanh của mình cho đến chết, hắn đã chồng chất vô số tội ác man rợ tột cùng."
  },
  {
    "en": "Superhuman strength which his enormous build materialised, and sturdy skin which sustained not a single scratch from swords and daggers. This murderer, who sought touch and warmth, was one of the most dreadful criminals feared along with the『Bowel Hunter』. <a id=\"onelb\" href=\"#one\">[1]</a>",
    "vi": "Sức mạnh phi thường do thân hình hộ pháp to lớn ấy hiện thực hóa, cùng làn da cứng cáp dẫu quyết chả chịu một vết trầy xước nhỏ từ đao kiếm. Kẻ sát nhân luôn khao khát sự đụng chạm và hơi ấm này, chính là một trong những tội phạm đáng sợ nhất bị khiếp sợ ngang hàng với 『Thợ Săn Ruột』. <a id=\"onelb\" href=\"#one\">[1]</a>"
  },
  {
    "en": "The career history of the『Leaper』Dorkell is eccentric. Formerly a merchant living in Kararagi City States, Dorkell is a deviant who disengaged from his path upon hearing the voice of something not humanーー so he had once been.",
    "vi": "Cuộc đời hành trình của 『Kẻ Nhảy Vọt』 Dorkell vô cùng kỳ quặc kỳ dị. Vốn là một thương nhân sinh sống tại Các Bang Thành Phố Kararagi, Dorkell là một kẻ lệch lạc đã rời bỏ con đường chính đạo sau khi nghe thấy giọng nói của một thứ quyết chả phải con người—— hắn dẫu từng là kẻ như thế."
  },
  {
    "en": "Met by the tragedy of the Authority of『Gluttony』, now with both sides of『Name』and『Memories』plundered, the truth of him having become a laughingstock for many as a deviant vanished, with there no longer being anyone remembering that.",
    "vi": "Gánh chịu thảm kịch từ Quyền Năng của 『Phàm Ăn』, lúc này khi cả hai phương diện 『Danh Tánh』 và 『Ký Ức』 đều bị cướp đoạt tàn nhẫn, sự thật về việc hắn từng biến thành trò cười cho thiên hạ như một kẻ lệch lạc dẫu biến mất hoàn toàn, quyết chả còn lấy một ai nhớ đến chuyện ấy nữa."
  },
  {
    "en": "One certain day, Dorkell discarded away his life including his wife and children. And, opting for the path espousing that which did not exist, he became a freak who chose to have contact with the Witch Cult.",
    "vi": "Vào một ngày nọ, Dorkell quyết định vứt bỏ cuộc sống của mình, bao gồm cả vợ con ruột thịt. Và rồi, lựa chọn con đường ủng hộ thứ quyết chả hề tồn tại, hắn biến thành một kẻ lập dị chọn cách tiếp xúc liên lạc với Giáo Phái Phù Thủy."
  },
  {
    "en": "Though Dorkell manifested a paramount power differing from magic, it deviated from the doctrine of the Witch Cult, a heresy within heresy vanished even from the Witch Cult.",
    "vi": "Dẫu cho Dorkell thể hiện một sức mạnh tối cao khác biệt hoàn toàn với ma pháp thông thường, nó lại đi chệch khỏi giáo lý của Giáo Phái Phù Thủy, một loại dị giáo nằm trong số những dị giáo bị trục xuất xua đuổi ngay cả bởi Giáo Phái Phù Thủy."
  },
  {
    "en": "In other words, they were transcendental beings from the kinds of enigmatic persons, eccentric persons, and deranged persons.",
    "vi": "Nói cách khác, họ chính là những thực thể siêu việt được tạo nên từ những kẻ bí ẩn, những kẻ lập dị, và những kẻ điên cuồng mất trí trên đời."
  },
  {
    "en": "Impossible to be competed against by ordinary humans, furthermore, they remained unfinished by the mere virtue of being themselves, and blended together with all possible kinds of『Memories』within『Gluttony』, had been finished into articles of greater superlativeness.",
    "vi": "Quyết chả thể nào đối đầu cạnh tranh bởi những con người bình thường, hơn thế nữa, họ quyết chả dừng lại ở giới hạn của riêng bản thân mình, mà được hòa quyện trộn lẫn với thảy mọi loại 『Ký Ức』 bên trong 『Phàm Ăn』, để rồi được hoàn thiện biến thành những kiệt tác siêu việt và hoàn mỹ bậc nhất thế gian."
  },
  {
    "en": "What would be the consequence should Neiji Rockhardt obtain Beli Heinelga's endurance and Dorkell's ability of phantom teleportation.",
    "vi": "Hệ quả sẽ khủng khiếp đến nhường nào nếu Neiji Rockhardt sở hữu thêm sức chịu đựng bền bỉ phi thường của Beli Heinelga cùng khả năng dịch chuyển tức thời ảo ảnh của Dorkell chứ."
  },
  {
    "en": "It will be, the fruition of a singular brutal, fiendish, atrocious existence seldom seen throughout time.",
    "vi": "Đó dứt định sẽ là sự khai hoa kết trái của một thực thể tàn bạo, độc ác, hung bạo độc nhất vô nhị hiếm thấy trong suốt dòng chảy lịch sử."
  },
  {
    "en": "Until now and amongst all of what yesterday held, the Sin Archbishop of『Gluttony』, Ley Batenkaitos had not achieved that.",
    "vi": "Từ trước đến nay và giữa thảy mọi thứ mà ngày hôm qua nắm giữ, tên Đại Giám Mục Tội Lỗi của 『Phàm Ăn』, Ley Batenkaitos dẫu chưa bao giờ đạt tới cảnh giới tột cùng dường ấy."
  },
  {
    "en": "For within the grand hotpot named his self, by blending all probable kinds of『Memories』together, he feared the very existence named himself being taken into the hotpot.",
    "vi": "Bởi lẽ bên trong nồi lẩu khổng lồ mang tên chính bản thân mình, bằng cách trộn lẫn thảy mọi loại 『Ký Ức』 lại với nhau, hắn lo sợ rằng chính sự tồn tại mang tên mình dẫu sẽ bị hòa tan nuốt chửng vào nồi lẩu ấy."
  },
  {
    "en": "However, even if he were to drink up the contents of the mixed hotpot, he shan't be taken inーー at the very least, that was what Batenkaitos' notion came to be.",
    "vi": "Tuy nhiên, dẫu cho hắn có uống cạn sạch mớ hỗn độn bên trong nồi lẩu ấy đi chăng nữa, hắn chắc chắn dứt định quyết chả bị nuốt chửng đâu—— ít nhất, đó dẫu là nhận thức mãnh liệt vừa nảy sinh của Batenkaitos."
  },
  {
    "en": "And since it had come to be so, he experimented what all he had never ventured to do until now, possessing not the slightest of qualms or hesitance for breaking through the established bounds of his own self.",
    "vi": "Và một khi chuyện đã đến nước này, hắn bắt đầu thử nghiệm thảy những gì mình quyết chả bao giờ dám mạo hiểm làm từ trước đến nay, quyết chả hề mảy may e ngại hay do dự khi đập tan mọi xiềng xích giới hạn đã định hình của bản thân."
  },
  {
    "en": "For the『Gourmet』who utterly ate every possible kind of excelling, transcending talent, history, potentiality in this worldーー all until the very horizons of『Gourmet Delicacies』, and persisted in amassing it all within oneself, is precisely whom Ley Batenkaitos was.",
    "vi": "Bởi lẽ một kẻ 『Ẩm Thực Gia』 chuyên ăn ngấu nghiến thảy mọi loại tài năng kiệt xuất, thiên phú siêu việt, lịch sử hào hùng, tiềm năng vô tận trên thế gian này—— thảy cho đến tận chân trời tối thượng của 『Món Ngon Ẩm Thực』, và kiên trì tích lũy thảy mọi thứ vào trong chính mình, chính xác là con người của Ley Batenkaitos."
  },
  {
    "en": "Thus on this day, what was born in the tower situated at the eastern edge of the world, was a warlock agglutinated with every technique and odd talent, regardless of heredity and posteriori.",
    "vi": "Chính vì lẽ đó vào ngày hôm nay, thứ được sinh ra đời tại tòa tháp canh tọa lạc ở rìa phía đông thế giới, chính là một ma nhân được liên kết hòa quyện bởi mọi kỹ thuật thực chiến và thiên tài kỳ dị, hoàn toàn bất kể là bẩm sinh hay tự rèn luyện về sau."
  },
  {
    "en": "The warlock possessed arms which destroyed all, possessed a flesh body which did not accept any type of attacks, possessed magical arts which rejected and countered back any possible technique, and was endowed with even the wisdom, genius and intellect grasping everything that existed.",
    "vi": "Tên ma nhân ấy sở hữu đôi cánh tay có thể phá hủy nghiền nát thảy mọi thứ, sở hữu một thể xác quyết chả nhận bất kỳ đòn công kích nào, sở hữu những ma thuật bác bỏ và phản ngược lại thảy mọi kỹ thuật tấn công, và dẫu được ban tặng cả trí tuệ, sự thiên tài cùng trí lực siêu việt nắm bắt trọn vẹn vạn vật tồn tại."
  },
  {
    "en": "No matter how extensive a survey should be taken of history, never had there been a being who excelled in every single kind of ability to this extent, and neither will any other take birth hereafter, for thousands of years to come.",
    "vi": "Dẫu cho có khảo sát kỹ lưỡng toàn bộ lịch sử nhân loại đến đâu đi chăng nữa, quyết chưa từng bao giờ xuất hiện một thực thể ưu tú vượt trội trên mọi phương diện năng lực đến mức phi lý dường này, và dứt định dẫu quyết chả có kẻ thứ hai được sinh ra sau này, trong suốt hàng ngàn năm sắp tới."
  },
  {
    "en": "This was, a selection of the world's possibilities, brought forth by the abominable calamity referred to as a Witch Factor.",
    "vi": "Đây chính là một sự lựa chọn chọn lọc từ những khả năng vô tận của thế gian, được mang lại bởi tai ương kinh tởm tột độ được gọi là Yếu Tố Phù Thủy."
  },
  {
    "en": "Born from the grand hotpot which condensed solely excelling articles, the supreme『Gourmet Delicacy』itselfーー,",
    "vi": "Được sinh ra từ nồi lẩu khổng lồ cô đặc duy nhất những thành phần kiệt xuất, chính là 『Món Ngon Tối Thượng』 chân chính nhất——,"
  },
  {
    "en": "Ram: \"ーーYou shall be given, three chances.\"",
    "vi": "Ram: “——Ngươi dứt định sẽ được trao cho ba cơ hội đấy lị.”"
  },
  {
    "en": "With that rare existence before her, the young girl with peach-coloured hair uttered with three fingers raised.",
    "vi": "Đứng trước thực thể hiếm hoi phi thường ấy, cô gái trẻ với mái tóc màu hồng đào khẽ cất lời trong khi giơ cao ba ngón tay."
  },
  {
    "en": "The young girl, bleeding from her forehead, with an icy gleam in her light crimson eyes. She was in a condition wherein wounds covered her entire body, and multiple spots of her slim build had sustained tremendous injuries which would impede in movement.",
    "vi": "Cô gái trẻ ấy, máu tươi chảy dài từ vầng trán rộng, với ánh nhìn lạnh giá rực cháy trong đôi mắt màu đỏ thẫm. Cô đang ở trong tình trạng vết thương chằng chịt bao phủ khắp cơ thể, và vô số vị trí trên vóc dáng mảnh mai của cô dẫu phải gánh chịu những chấn thương nghiêm trọng cản trở cử động."
  },
  {
    "en": "Even aside from those, there existed a mountain's worth of reasons why she should not be able to stand up. He was aware of that.",
    "vi": "Ngay cả khi bỏ qua những vết thương ấy, dẫu có cả núi lý do tại sao cô quyết chả thể nào đứng vững nổi. Hắn tự ý thức sâu sắc được điều đó."
  },
  {
    "en": "The prime cause not being wounds or blood loss, but that her petite body failed to function as a vessel for accepting the existence named herself. ーーTruly heartrending, he ruminated so.",
    "vi": "Nguyên nhân cốt lõi quyết chả phải do vết thương hay mất máu, mà là vì cơ thể nhỏ nhắn mảnh mai ấy quyết chả thể hoạt động như một chiếc bình chứa để tiếp nhận trọn vẹn sự tồn tại mang tên chính bản thân cô. ——Thật là đau lòng tột cùng, hắn thầm suy xét dường ấy."
  },
  {
    "en": "Ram: \"Three times, you shall be allowed to strike first. There is something Ram would like to test. Exceptional, is it not?\"",
    "vi": "Ram: “Ba lần, ngươi dứt định sẽ được phép ra tay trước lị. Có chuyện Ram rất muốn thử nghiệm một chút. Thật là một ưu đãi đặc biệt phi thường, há chả phải sao?”"
  },
  {
    "en": "However, such deep emotions concerning her not in the slightest, the young girl asserted so whilst three of her fingers remained raised, as though to instigate this side.",
    "vi": "Tuy nhiên, quyết chả hề bận tâm mảy may đến những cảm xúc sâu sắc ấy của hắn, cô gái trẻ thản nhiên khẳng định trong khi vẫn giơ cao ba ngón tay, tựa như đang khiêu khích đối thủ."
  },
  {
    "en": "Thrice, a deathly verdict. To begin with, even once would be implausible for her to endure.",
    "vi": "Ba lần, một bản án tử hình chắc chắn. Ngay từ đầu, ngay cả một lần duy nhất dẫu dứt định là điều không tưởng để cô có thể chịu đựng nổi."
  },
  {
    "en": "And, neither did he possess any particular reason to disregard that avouch.",
    "vi": "Và, hắn dẫu quyết chả có lấy bất kỳ lý do đặc biệt nào để từ chối lời đề nghị khẳng định ấy."
  },
  {
    "en": "He not at all contemplated whether this was a trap, either.",
    "vi": "Hắn dẫu quyết chả thèm bận tâm suy nghĩ liệu đây có phải là một cái bẫy hay không."
  },
  {
    "en": "For the young girl was not one who would meaninglessly proffer such negotiation. He merely thought he must earnestly impart to her, that unbridled confidence brought about the destruction of oneself on instances as well.",
    "vi": "Bởi lẽ cô gái trẻ quyết chả phải là kẻ sẽ đưa ra một cuộc thương lượng vô nghĩa dường ấy. Hắn chỉ nghĩ rằng mình dứt định phải dạy cho cô một bài học nhớ đời, rằng sự tự tin thái quá chả màng đến giới hạn dẫu dứt định sẽ mang lại sự hủy diệt tàn khốc cho chính bản thân mình mà thôi."
  },
  {
    "en": "That upon being taken into the same grand hotpot, there shall also be things understoodーー,",
    "vi": "Rằng một khi được hòa quyện vào cùng một nồi lẩu khổng lồ ấy, dứt định dẫu có những thứ sẽ được thấu hiểu sâu sắc——,"
  },
  {
    "en": "Ley: \"ーーNee-sama, stand by.\"",
    "vi": "Ley: “——Nee-sama, chuẩn bị đi thôi nào lị.”"
  },
  {
    "en": "Vehemently, making his hind legs amassing strength erupt, he hammered a blow as per wish.",
    "vi": "Đầy hung hãn, dồn thảy sức mạnh rực cháy bộc phát vào đôi chân sau, hắn lập tức tung ra một đòn chém sấm sét như ý nguyện."
  },
  {
    "en": "That was a strike crammed with the Fist King's technique and finesse of destructive force, possessing far too excessive might for the destruction of a solitary young girl, and it was absorbed by well-featured visage of the young girlーー,",
    "vi": "Đó dẫu là một đòn chém được nhồi nhét trọn vẹn kỹ thuật thực chiến và sự tinh xảo về lực phá hủy của Quyền Vương, sở hữu một uy lực vượt xa mức cần thiết để phá nát một cô gái trẻ đơn độc, và nó lập tức lao thẳng về phía gương mặt kiều diễm của cô——,"
  },
  {
    "en": "Ram: \"Now, first.\"",
    "vi": "Ram: “Giờ thì, lần thứ nhất lị.”"
  },
  {
    "en": "Ley: \"ーー~hk!?\"",
    "vi": "Ley: “——~hk!?”"
  },
  {
    "en": "During the moment he conceived he had captured her with certainty, the face of the young girl evaded the fist from a vicinity seemingly close enough for lanugo to graze past. And positioning her hand on the stretching arm, her fired knee strike smashed the right arm from the elbow.",
    "vi": "Ngay vào khoảnh khắc hắn tin chắc rằng mình dứt định đã bắt gọn được cô, gương mặt của cô gái trẻ khẽ nghiêng né tránh nắm đấm từ một cự ly cận kề tưởng như chỉ sượt qua sợi tóc tơ. Rồi nhanh như chớp đặt tay lên cánh tay đang duỗi dài ra của hắn, cú lên gối sấm sét bộc phát của cô lập tức đập nát bấy cánh tay phải ngay từ khớp cùi chỏ."
  },
  {
    "en": "An improbable happening. The tenacious flesh body even the slashes of the heavenly sword could not penetrate into, its stretched arm and the joint of the elbowーー by kneeing into the fixed point that existed solely at this locus, were destroyed by the young girl.",
    "vi": "Một sự việc quyết chả thể tin nổi. Thể xác cứng cáp dẻo dai phi thường ngay cả những nhát chém của thiên kiếm dẫu quyết chả thể đâm xuyên nổi, vậy mà cánh tay duỗi dài cùng khớp cùi chỏ ấy—— bằng cách lên gối nhắm thẳng vào điểm cố định duy nhất tồn tại ở vị trí này, dẫu bị phá hủy hoàn toàn bởi cô gái trẻ."
  },
  {
    "en": "Howeverーー,",
    "vi": "Thế nhưng——,"
  },
  {
    "en": "With the impact of the fractured right arm as is, he fired his left foot up towards the young girl's visage.",
    "vi": "Bất chấp lực tác động từ cánh tay phải vừa bị gãy nát bấy, hắn lập tức vung chân trái đá thẳng vào gương mặt của cô gái trẻ."
  },
  {
    "en": "Though not reprisal for the arm, this side's own fired knee aimed for her face as well. The lengthy, slender leg, the fair knee smashed and crushed the young girl's tender snout, ruining her gorgeous visageーー,",
    "vi": "Quyết chả phải đòn trả đũa cho cánh tay phải, cú lên gối bộc phát của hắn dẫu nhắm thẳng vào gương mặt cô. Cánh chân dài, mảnh mai, cái đầu gối trắng trẻo đập mạnh nghiền nát chiếc mũi xinh xắn của cô gái trẻ, hủy hoại hoàn toàn gương mặt kiều diễm ấy——,"
  },
  {
    "en": "Ram: \"Second.\"",
    "vi": "Ram: “Lần thứ hai lị.”"
  },
  {
    "en": "Upon hearing the utterance vocalised by those slim lips, he doubted his ears.",
    "vi": "Khi nghe thấy lời tuyên bố thốt ra từ đôi môi mỏng manh ấy, hắn dứt định chả thể tin vào tai mình."
  },
  {
    "en": "He had executed it such that her mouth would be rendered defunct. However, responding to the knee strike approaching from the side, the young girl moved her hand as though nimbly tracing it, and gently averted its trajectory upward.",
    "vi": "Hắn dứt định đã ra đòn nhằm khiến cái miệng của cô quyết chả thể cất tiếng được nữa. Thế nhưng, đáp trả lại cú lên gối đang lao tới từ bên hông, cô gái trẻ khẽ di chuyển bàn tay như thể đang lướt nhẹ theo nó, và dịu dàng gạt lệch đường đi của nó bay vút lên trên."
  },
  {
    "en": "The fired knee smoothly transited overhead of the young girl as though it had been fired to trace the empty skies from the very beginning.",
    "vi": "Cú lên gối bộc phát lướt qua phía trên đầu cô gái trẻ một cách vô cùng mượt mà tựa như nó vốn dĩ đã được nhắm bắn vào khoảng không vô định ngay từ đầu."
  },
  {
    "en": "Andーー,",
    "vi": "Và rồi——,"
  },
  {
    "en": "Ram: \"Third.\"",
    "vi": "Ram: “Lần thứ ba lị.”"
  },
  {
    "en": "With his right arm and left knee's strike dodged, using the impetus of his gyrating body he fired a rebuff from his left elbow, sharp and solid, upon making a direct hit it shall crush the young girl's cranium like a berry, and expel its contents out onto the floor of the tower.",
    "vi": "Khi cánh tay phải cùng cú gối trái bị né tránh hoàn toàn, tận dụng phản lực từ cơ thể đang xoay tròn kịch liệt, hắn tung ra một đòn phản kích bằng cùi chỏ trái, sắc bén và cứng cáp, nếu đòn này găm trúng đích dứt định sẽ nghiền nát sọ đầu cô gái trẻ như quả mọng, và quăng sạch mớ hỗn độn bên trong ra mặt sàn tòa tháp."
  },
  {
    "en": "So itーー should have done.",
    "vi": "Đáng lẽ ra—— mọi chuyện phải như thế mới đúng lị."
  },
  {
    "en": "The rebuff aiming for the young girl's temple of the forehead, was halted merely by a number of swivels of her body.",
    "vi": "Đòn phản kích bằng cùi chỏ nhắm thẳng vào thái dương trên trán của cô gái trẻ, dẫu bị chặn đứng chỉ bằng vài cú xoay người nhẹ nhàng của cô."
  },
  {
    "en": "And, the young girl, dodging the elbow as if informed of its arrival, grasped this side's face once again with her extended hands,",
    "vi": "Và rồi, cô gái trẻ, né tránh đòn cùi chỏ tựa như đã sớm biết trước đường đi nước bước của nó từ trước, dùng đôi bàn tay duỗi dài chộp lấy gương mặt của hắn một lần nữa,"
  },
  {
    "en": "Ram: \"Truly a fool.\"",
    "vi": "Ram: “Quả là một tên đại ngu muội lị.”"
  },
  {
    "en": "And, voicing with maximum coldheartedness, vigorously knocked this side's cranium onto the floor.",
    "vi": "Và, cất tiếng bằng sự lạnh lùng tột cùng, cô dập mạnh sọ đầu của hắn xuống mặt sàn."
  },
  {
    "en": "△▼△▼△▼△",
    "vi": "△▼△▼△▼△"
  },
  {
    "en": "Twisting, turning, winding, meandering, Batenkaitos changed his form before her eyes and charged, advancing towards her, and upon knocking him to the ground, Ram pointed three fingers towards his face.",
    "vi": "Xoắn vặn, uốn lượn, luồn lách, trườn bò, Batenkaitos liên tục biến đổi hình dạng ngay trước mắt cô và lao tới tấn công dữ dội. Và khi đập mạnh hắn xuống nền đất, Ram chĩa thẳng ba ngón tay về phía gương mặt hắn."
  },
  {
    "en": "Ram: \"One who spars thinking he has three chances, gets defeated in all three of those chances. Should you spar with not even the serious intent to win, then you shall be abandoned even by fortune.\"",
    "vi": "Ram: “Một kẻ thực chiến chiến đấu mà cứ ngỡ mình có ba cơ hội, dứt định sẽ bại trận thảm hại trong cả ba lần ấy lị. Nếu ngươi thực chiến mà quyết chả mảy may có ý định nghiêm túc muốn giành chiến thắng, thì dứt định ngươi dẫu bị bỏ rơi ngay cả bởi vận may mà thôi lị.”"
  },
  {
    "en": "Ley: \"Bhu, gah...... ~hk.\"",
    "vi": "Ley: “Phụt, ặc...... ~hk.”"
  },
  {
    "en": "Ram: \"Thank you. It has been proven. ーーNot even the serendipity of time, is now an enemy of Ram.\"",
    "vi": "Ram: “Cảm ơn ngươi lị. Mọi chuyện dẫu được chứng minh trọn vẹn rồi lị. ——Nguyên cả sự may mắn ngẫu nhiên của thời gian, lúc này dứt định quyết chả phải là đối thủ của Ram đâu lị.”"
  },
  {
    "en": "For Ram, the utmost appalling enemy was absurd fortune itself.",
    "vi": "Đối với Ram, kẻ thù đáng sợ nhất bấy lâu nay dứt định chính là sự may rủi phi lý điên rồ."
  },
  {
    "en": "However, Ram had exorcised that by her own hand, and had made even that prostrate before herself.",
    "vi": "Tuy nhiên, Ram đã tự mình hóa giải xua đuổi điều đó bằng chính bàn tay mình, và bắt ngay cả sự may rủi ấy dẫu phải quỳ phục đầu hàng trước cô."
  },
  {
    "en": "No longer, was there anything to be fearful of.",
    "vi": "Lúc này, quyết chả còn bất cứ thứ gì có thể khiến cô phải sợ hãi nữa."
  },
  {
    "en": "Ley: \"ーー~tsu.\"",
    "vi": "Ley: “——~tsu.”"
  },
  {
    "en": "Sprawled on the ground, Batenkaitos swung both of his legs up, and stood up with the impetus of swinging them down. And towards the approaching enemy seeking to hammer his fractured arm in, Ram stepped ahead, wielding no vacillation.",
    "vi": "Nằm đo sàn trên đất, Batenkaitos vung mạnh cả hai chân lên, lấy đà bật người đứng dậy đầy hung hãn. Và hướng về phía kẻ thù đang lao tới hòng đóng chiếc đinh gãy vào cánh tay phải bị dập nát của hắn, Ram bước đều bước điềm tĩnh tiến lên phía trước, quyết chả hề do dự lấy một giây."
  },
  {
    "en": "Blood streamed down from her forehead. However, that ache and sense of loss boiled Ram's blood from the innermost depths.",
    "vi": "Máu tươi chảy ròng ròng từ vầng trán cô. Tuy nhiên, nỗi đau đớn cùng cảm giác mất mát ấy lại càng đun sôi dòng máu nóng của Ram từ tận sâu trong lồng ngực."
  },
  {
    "en": "Ah, how truly infuriating. This sensation, this enchantment, always had she thought of it as vexatious.",
    "vi": "A, thật là căm phẫn bực dọc biết bao. Cái cảm giác này, sự mê hoặc cuồng nhiệt này, lúc nào cô dẫu nghĩ đó là một chuyện phiền phức phiền hà vô cùng."
  },
  {
    "en": "The odious Oni instincts, warmly welcoming battling, exalting the brandishing of strength, the craving which boiled blood for the purpose of killing enemies who ought to be killed, had Ram always detested.",
    "vi": "Cái bản năng Quỷ tộc kinh tởm tột độ ấy, luôn hồ hởi chào đón các trận quyết chiến kịch liệt, tôn sùng sự phô diễn sức mạnh bạo lực, khao khát cuộn trào dòng máu nóng chỉ vì mục đích chém chết những kẻ thù buộc phải chém chết, Ram bấy lâu nay luôn ghét cay ghét đắng."
  },
  {
    "en": "That is why, that night, when the horn sprouting from her forehead had been broken off, she thought she had been liberated, and yet.",
    "vi": "Chính vì lẽ đó vào cái đêm hôm ấy, khi chiếc sừng mọc trên trán bị chém rụng mất, cô đã ngỡ rằng mình dứt định được giải phóng hoàn toàn rồi lị, thế mà."
  },
  {
    "en": "Ram: \"How truly ironic.\"",
    "vi": "Ram: “Thật là mỉa mai làm sao lị.”"
  },
  {
    "en": "Grousing so, Ram caught the hammer arm, and shoulder threw the opponent with identical momentum. Casting him onto the floor, she kicked his head, propelling him further towards the interior of the aisle.",
    "vi": "Càu nhàu như thế, Ram túm chặt cánh tay đang giáng xuống như búa bổ ấy, thực hiện một cú quật vai ném bay đối thủ với lực tác động tương đương. Quăng hắn xuống sàn, cô bồi thêm một cú đá cực mạnh vào đầu hắn, thổi bay hắn văng xa hơn vào phía bên trong lối đi."
  },
  {
    "en": "She could not allow him to draw close to her rear, wherein was the mutilated ground dragon, along with the young girl leaning on the wall.",
    "vi": "Cô quyết không thể cho phép hắn tiếp cận cự ly gần với phía sau lưng mình, nơi có con địa long đang thương tích đầy mình, cùng với cô gái trẻ đang tựa lưng vào bức tường."
  },
  {
    "en": "Rem: \"ーーーー\"",
    "vi": "Rem: “————”"
  },
  {
    "en": "The young girl who resumed her slumber without change, the horn fleetingly glimmering on her forehead asserted being.",
    "vi": "Cô gái trẻ ấy vẫn chìm vào giấc ngủ sâu quyết chả hề đổi thay, chiếc sừng khẽ lấp ló rực cháy trên trán cô bé chứng minh sự tồn tại của nó."
  },
  {
    "en": "Originally, the young girl who remained asleep possessing no will of her own could not have made her horn function, regardless of being a member of the Oni clan.",
    "vi": "Vốn dĩ, một cô gái trẻ vẫn chìm sâu trong giấc ngủ quyết chả có ý chí của riêng mình thì quyết chả thể nào kích hoạt chiếc sừng hoạt động được, bất kể cô bé có là một thành viên của Quỷ tộc đi chăng nữa."
  },
  {
    "en": "However, even with the actual feeling of that remaining vanished, Ram was twin sisters with the young girlーー that which is referred to as『Synthesia』, was a substanceless link oft tied between blood-related beings.",
    "vi": "Thế nhưng, ngay cả khi cảm giác thực tế về mối dây liên kết ấy đã biến mất hoàn toàn, Ram vẫn là chị em sinh đôi với cô gái trẻ ấy—— thứ được gọi là 『Cộng Cảm』, chính là sợi dây liên kết vô hình thường gắn kết chặt chẽ những sinh mệnh được sinh ra từ cùng một tử cung."
  },
  {
    "en": "Having attended to the perpetually slumbering Rem during the past year, Ram too had sensed that existence itself.",
    "vi": "Suốt một năm ròng rã tự mình chăm sóc cho một Rem ngủ say không tỉnh bấy lâu nay, Ram dẫu tự cảm nhận sâu sắc sự tồn tại ấy."
  },
  {
    "en": "Not by merely the similitude of outward appearance, but precisely due to the presence of that sensation, Ram had succeeded in objectively accepting the truth of that girl being her younger sister without dissent.",
    "vi": "Quyết chả phải chỉ dựa vào sự tương đồng về vẻ ngoài, mà chính xác là nhờ sự hiện diện của cảm giác tâm linh ấy, Ram mới có thể chấp nhận sự thật một cách khách quan rằng cô gái đó chính là em gái ruột của mình quyết chả chút phản đối."
  },
  {
    "en": "However, between herself and Rem, even the『Synesthesia』remained otiose.",
    "vi": "Thế nhưng, giữa bản thân cô và Rem, ngay cả 『Cộng Cảm』 dẫu quyết chả đem lại tác dụng gì sất."
  },
  {
    "en": "Had Rem gotten even a single nightmare, her fright may have gotten transmitted to Ram, however, during this past year, not even once had anything akin gotten transmitted to her.",
    "vi": "Nếu Rem phải gánh chịu dù chỉ một cơn ác mộng đơn độc, nỗi sợ hãi tột cùng của cô bé dứt định dẫu được truyền sang cho Ram, tuy nhiên, trong suốt một năm qua, quyết chưa từng bao giờ có bất kỳ thứ gì tương tự truyền tới cô cả."
  }
]

fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'translation_temp', 'ch86_part1.json'),
  JSON.stringify(part1, null, 2),
  'utf-8'
)
console.log('Successfully wrote ch86_part1.json!')
