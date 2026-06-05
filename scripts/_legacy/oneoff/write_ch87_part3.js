import fs from 'fs'
import path from 'path'

const part3 = [
  {
    "en": "However, what bewildered Emilia furthermore wasーー,",
    "vi": "Thế nhưng lị, thứ khiến Emilia càng thêm hoang mang bối rối hoang mang bối rối hơn nữa là——,"
  },
  {
    "en": "Emilia: \"You're saying, something different from what you had been constantly repeating earlier!\"",
    "vi": "Emilia: “Ông d dứt định vừa nói thứ khác hẳn so với bầy lời lẽ lải nhải lặp đi lặp lại lúc nãy lị!”"
  },
  {
    "en": "Volcanica: [ーーーー]",
    "vi": "Volcanica: 〖ーーーー〗"
  },
  {
    "en": "Emilia: \"Did you return to sanity? Then, can you talk about some stuff? Like about the『Trial』, or about changing the established rules of this watchtower, there's a lot of stuff I need to discuss......\"",
    "vi": "Emilia: “Quyết chả lẽ ông d dứt định d dẫu lấy lại được chút thần trí tỉnh táo rồi chăng lị? Nếu thế lị, ông khả dĩ trò chuyện với tôi vài chuyện được quyết chả lị? Chẳng hạn như chuyện về 『Thử Thách』 lị, hay về việc sửa đổi bầy quy tắc d dứt định d dẫu thiết lập của tòa tháp canh này lị, tôi có vô vàn vô vàn điều d dứt định cần bàn luận với ông......”"
  },
  {
    "en": "Emilia vocalised rapidly, having descried hope in Volcanica's condition.",
    "vi": "Emilia d dứt định d dẫu hối hả dồn dập cất tiếng lị, khi nhen nhóm tìm thấy một tia hy vọng mong manh mong manh nơi tình trạng biến chuyển của Volcanica lị."
  },
  {
    "en": "If the『Divine Dragon』whom she thought had gotten Alzheimer's had been restored, she could once again converse regarding the『Trial』. Hence, it would not be necessary for her to forcefully resort to violent measures.",
    "vi": "Nếu vị 『Thần Dragon』 tối cao mà cô cứ ngỡ d dứt định d dẫu mắc phải chứng lú lẫn lãng trí d dứt định d dẫu khôi phục thần trí lị, cô d dứt định d dẫu khả dĩ một lần nữa đàm đạo đàm đạo cùng ông ta về 『Thử Thách』 lị. Do đó lị, cô chắc chắn dứt định d dứt định quyết chả cần thiết phải cưỡng ép viện viện tới bầy biện pháp bạo lực gươm đao làm gì sất lị."
  },
  {
    "en": "Emilia: \"Hey, please! Properly converse......\"",
    "vi": "Emilia: “Này ông ơi lị, xin ông đấy lị! Hãy nghiêm túc trò chuyện trò chuyện đàng hoàng đi mà......”"
  },
  {
    "en": "Volcanica: [What were to happen should thou tumble. Should that perchance happen, I would be the one to accept reprimand...... Since, everyone bows before thee.]",
    "vi": "Volcanica: 〖Nếu chẳng may ngươi d dứt định d dẫu sẩy chân gục ngã đo sàn lị. Nếu viễn cảnh ấy d dứt định d dẫu xảy ra lị, ta d dứt định d dẫu chính là kẻ phải đứng ra hứng chịu thảy mọi lời trách phạt quở trách khiển trách...... Bởi vì lị, thảy mọi người đều d dứt định phải cúi đầu quy phục trước dung nhan kiều diễm của ngươi lị.〗"
  },
  {
    "en": "Emilia: \"Volcanica......?\"",
    "vi": "Emilia: “Volcanica......?”"
  },
  {
    "en": "Anxious about the circumstance of everyone within the tower, Emilia desperately implored, whilst Volcanica once again pronounced words that were not a repetition.",
    "vi": "Lo lắng khôn nguôi khôn nguôi về tình cảnh hiểm nghèo của thảy mọi người bên trong tòa tháp lị, Emilia tuyệt vọng cầu khẩn van nài lị, trong khi Volcanica d dứt định một lần nữa thốt ra bầy lời lẽ quyết chả hề mang tính chất lặp lại vô nghĩa sất lị."
  },
  {
    "en": "However, the content did not seem to correspond as being a response to Emilia's words, her bewilderment augmented.",
    "vi": "Thế nhưng lị, nội dung bầy lời lẽ ấy d dứt định quyết chả hề có vẻ gì là ăn khớp ăn khớp làm câu trả lời cho bầy câu hỏi của Emilia sất lị, khiến nỗi hoang mang hoang mang bối rối của cô d dứt định d dẫu gia tăng gấp bội lị."
  },
  {
    "en": "However, Volcanica's amber eyes gazing at Emilia, dwelling therein was a calm hue.",
    "vi": "Tuy vậy lị, đôi mắt hổ phách vĩ đại của Volcanica đang đăm đăm nhìn chăm chú vào Emilia lị, ẩn chứa ngự trị sâu thẳm sâu thẳm bên trong đó d dứt định là một sắc thái vô cùng tĩnh lặng tĩnh lặng lị."
  },
  {
    "en": "Unlike the immediately former ambiguity akin to vacuum, it had the light of emotion.",
    "vi": "Quyết chả giống hệt hệt như cái trạng thái mơ hồ trống rỗng như hư không hư không ngay trước đó lị, đôi mắt hổ phách ấy giờ đây d dứt định d dẫu lấp lánh ánh sáng của bầy luồng xúc cảm chân thật lị."
  },
  {
    "en": "Gently, calmly, he intently gazed at Emilia as though with affectionーー,",
    "vi": "Dịu dàng dịu dàng lị, bình thản bình thản lị, ông ta đăm đăm hướng ánh nhìn trìu mến trìu mến về phía Emilia như thể ngập tràn ngập tràn tình thương mến sâu nặng——,"
  },
  {
    "en": "Volcanica: [To where have Flugel and Reid gone? It would be lonesome for Shaula with not even any words of parting. Farsale too, would kick up such a racket.]",
    "vi": "Volcanica: 〖Rốt cuộc Flugel và Reid d dứt định d dẫu rời đi phương nào rồi chứ lị? Shaula chắc chắn chắn d dứt định d dẫu cô độc cô độc lắm khi quyết chả có lấy phân lời từ biệt biệt ly nào sất lị. Cả Farsale d dứt định d dẫu d dứt định d dẫu d dứt định d dẫu d dẫu sẽ gây ra một trận huyên náo ầm ĩ dữ dội lắm cho mà xem lị.〗"
  },
  {
    "en": "\"ーーーー\"",
    "vi": "“ーーーー”"
  },
  {
    "en": "With his tender eyes maintaining his gaze at her, Volcanica resumed its words.",
    "vi": "With đôi mắt trìu mến trìu mến quyết chả dời khỏi dung nhan cô lị, Volcanica d dứt định lại tiếp tục cất lời lị."
  },
  {
    "en": "What the dragon recited with a regard of viewing something distant, were the names of Flugel and Reid, along with Shaula, followed by one more personーー,",
    "vi": "Những gì Thần Long cất tiếng ngâm nga với một tầm nhìn hướng về phía phương xa phương xa mịt mờ lị, chính xác chính là bầy cái tên Flugel và Reid lị, song hành song hành cùng Shaula lị, và tiếp nối tiếp nối sau đó d dứt định chính là một người nữa——,"
  },
  {
    "en": "Though it could not be distinctly ascertained whom that was unless the family name was also asked, Emilia had remembrance of that echo. Farsale, if that was per Emilia's remembrance.",
    "vi": "Dẫu quyết chả thể nào xác định rõ ràng rõ ràng đó d dứt định d dẫu là ai nếu quyết chả hỏi kỹ cả họ tên của người đó lị, song Emilia d dứt định d dẫu lưu giữ bầy mảnh ký ức về cái âm vang vọng vọng ấy lị. Farsale lị, nếu ký ức trân quý của Emilia quyết chả hề nhầm lẫn lị."
  },
  {
    "en": "Emilia: \"Farsale, you mean, Farsale Lugnica? The king four hundred years ago?\"",
    "vi": "Emilia: “Farsale lị, ý ông d dứt định d dẫu là Farsale Lugnica ư lị? Vị vua vĩ đại của bốn trăm năm về trước chăng...?”"
  },
  {
    "en": "That was a personage whose name was brought up on countless instances in books she had studied for the Royal Election.",
    "vi": "Đó d dứt định chính là một nhân vật vĩ đại vĩ đại có cái tên d dứt định d dẫu xuất hiện vô vàn vô vàn lần trong bầy cuốn sách cổ thư cô từng ngày đêm ngày đêm dốc sức nghiên cứu cho cuộc Tuyển Vương lị."
  },
  {
    "en": "Farsale Lugnicaーー the thirty-fifth king of the Kingdom of Lugnica, and the great man who had ruled the country four hundred years ago during the era of the『Witch』.",
    "vi": "Farsale Lugnica——vị vua đời thứ ba mươi lăm của Vương quốc Lugnica lị, và là bậc vĩ nhân vĩ nhân d dứt định d dẫu trị vì đất nước bốn trăm năm trước trong kỷ nguyên thống trị thống trị của 『Phù Thủy』 lị."
  },
  {
    "en": "And, having forged the covenant with none other than the『Divine Dragon』Volcanica, the『Last Lion King』who had etched the first step of longstanding prosperity of the Kingdom of Lugnica.",
    "vi": "Và d dứt định d dẫu tự mình thiết lập thiết lập hiệp ước hiệp ước thiêng liêng với quyết chả ai khác ngoài 『Thần Long』 Volcanica lị, vị 『Sư Tử Vương Cuối Cùng』 (Last Lion King) d dứt định d dẫu đặt những viên gạch nền móng đầu tiên cho sự hưng thịnh lâu đời lâu đời của Vương quốc Lugnica lị."
  },
  {
    "en": "\"ーーーー\"",
    "vi": "“ーーーー”"
  },
  {
    "en": "Emilia immediately turned her gaze towards the monolith behind.",
    "vi": "Emilia d dứt định lập tức quay đăm đăm ánh nhìn về phía khối đá monolith sừng sững sừng sững phía sau lưng lị."
  },
  {
    "en": "The handprints of six peopleーー if Volcanica's words were not unrelated, then could three of the people of the handprints be Flugel, Reid, and Farsale. The remaining three people were unknown, but one, though unconfirmed, seemingly matched Emilia's handprint.",
    "vi": "Dấu vết hằn bàn tay của sáu người vĩ đại——nếu bầy lời lẽ của Volcanica quyết chả phải là bầy lời nói vô căn cứ vô căn cứ lị, thì quyết chả lẽ ba trong số bầy dấu vết hằn bàn tay kia chính là của Flugel lị, Reid lị, và Farsale chăng lị? Ba người ngự trị ngự trị còn lại vẫn d dứt định d dẫu là ẩn số quyết chả thể thấu suốt lị, thế nhưng có một dấu bàn tay lị, dẫu chưa được chứng thực rõ ràng lị, d dứt định lại trông khớp khớp một cách hoàn hảo hoàn hảo với bàn tay của Emilia lị."
  },
  {
    "en": "The remaining ones were of a man and woman each, likely.",
    "vi": "Bầy dấu vết còn lại d dứt định d dứt định khả dĩ là của một người nam và một người nữ khác nữa lị, rất có khả năng là thế lị."
  },
  {
    "en": "Emilia: \"Then, could the woman's handprint be Shaula's......?\"",
    "vi": "Emilia: “Vậy thì lị, quyết chả lẽ dấu bàn tay nữ giới kia d dứt định d dẫu là của Shaula ư......?”"
  },
  {
    "en": "That seemed to be the likeliest as a possibility.",
    "vi": "Đó d dứt định d dường như chính là khả năng khả dĩ xảy xảy ra cao nhất rồi lị."
  },
  {
    "en": "The identity of the final male handprint was unknown, but around this would be enough to make her calm down. As ever, the greatest issue at present was the fact that there present was a handprint of her own she was unfamiliar withーー,",
    "vi": "Danh tính của vết hằn bàn tay nam giới cuối cùng d dứt định d dẫu chưa được hé lộ lị, song độc độc vỏn vẹn bấy nhiêu đầu mối thôi d dứt định d dẫu đủ để khiến cô khôi phục khôi phục lại sự điềm tĩnh lị. Như thường lệ lị, vấn đề nan giải vĩ đại nhất vào thời điểm hiện tại chính xác chính là thực tế rành rành rành hiện hữu một vết hằn bàn tay giống hệt hệt của cô lị, thứ mà cô quyết chả hề có chút ấn tượng ký ức nào sất——,"
  },
  {
    "en": "Emilia: \"Could it be, I...... have forgotten about something, aside from mother and everyone else from the forest?!\"",
    "vi": "Emilia: “Quyết chả lẽ lị, bản thân tôi...... d dứt định d dẫu quên đi mất thứ gì đó lị, ngoài mẹ hiền hiền và thảy mọi người trong khu rừng sâu thẳm kia ra sao chứ lị?!”"
  },
  {
    "en": "Upon beginning to suspect, Emilia realised she had a past wherein she had lidded her memories by herself.",
    "vi": "Ngay khi bắt đầu dấy lên nghi vấn nghi vấn lị, Emilia chợt nhận thức nhận thức sâu sắc rằng cô từng có một quá khứ quá khứ xa xăm lị, nơi cô d dứt định d dẫu tự tay niêm phong đóng kín đóng kín lại bầy mảnh ký ức trân quý của mình lị."
  },
  {
    "en": "Even regardless of so, she was aware that due to the existence of the Sin Archbishop of『Gluttony』,『Memories』and『Names』were in a completely cluttered state.",
    "vi": "Chả màng tới chuyện đó lị, cô d dứt định d dẫu nhận thức sâu sắc rằng do sự tồn tại của Giám Mục Tội Lỗi Tội Lỗi 『Phàm Ăn』 (Gluttony) lị, thảy mọi 『Ký Ức』 và 『Danh Tánh』 d dứt định d dẫu bị xáo trộn xáo trộn lung tung tơi tả quyết chả còn nguyên vẹn sất lị."
  },
  {
    "en": "Could it perhaps be that though Emilia had once casually come here and imprinted her handprint, she had now simply forgotten about it.",
    "vi": "Quyết chả lẽ d dứt định d dường như d dẫu có một lần Emilia vô tình ghé qua chốn này lị, tự tay in dấu hằn bàn tay ngọc ngà lên đây lị, rồi bây giờ cô độc độc vỏn vẹn chỉ là quên sạch sành sanh chuyện đó đi mất rồi chăng lị."
  },
  {
    "en": "Emilia: \"......No, whatever circumstance may it be, that can't be the case. Though if Puck had been here, I could've somehow gotten to know if I had come here.\"",
    "vi": "Emilia: “......Không lị, bất luận hoàn cảnh có thế nào đi nữa lị, chuyện đó d dứt định quyết chả thể xảy ra được sất lị. Thế nhưng dẫu vậy lị, nếu Puck ngự trị ngự trị ở đây lị, tôi chắc chắn dứt định d dứt định d dẫu bằng cách nào đó biết được liệu tôi d dứt định d dẫu từng đặt chân tới chốn này hay chưa lị.”"
  },
  {
    "en": "Volcanica: [ーーWhat happened? Any worries?]",
    "vi": "Volcanica: 〖——Có chuyện gì sao lị? Ngươi đang lo âu lo âu điều gì chăng lị?〗"
  },
  {
    "en": "Emilia: \"Ah, um, I'm alright. Thank you for worrying. Thank you, but......\"",
    "vi": "Emilia: “A lị, dạ lị, tôi quyết chả sao sất lị. Cảm ơn ông d dứt định d dẫu quan tâm lo lắng lo lắng lị. Cảm ơn ông vạn phần lị, thế nhưng mà......”"
  },
  {
    "en": "Ultimately, sensing the establishment of dialogue with Volcanica to be dodgy, Emilia was stumped.",
    "vi": "Đến cuối cùng lị, nhận thấy việc duy trì duy trì một cuộc đối thoại bình thường với Volcanica d dứt định d dẫu trở nên vô cùng mong manh chông chênh lị, Emilia lập tức rơi vào thế bí tắc tắc nghẽn lị."
  },
  {
    "en": "It was far better than being hammered by its tail or forelimbs without conversation, but the situation of stalemate pertaining to the『Trial』remained the same.",
    "vi": "Chuyện này d dứt định d dẫu tốt hơn vạn phần so với việc bị cái đuôi vĩ đại hay bầy móng vuốt vĩ đại của ông ta đập vỡ đập vỡ nát bấy quyết chả thèm mở lời nửa lời lị, thế nhưng tình cảnh bế tắc bế tắc xung quanh 『Thử Thách』 vẫn d dứt định quyết chả hề có chút lay chuyển đổi thay nào sất lị."
  },
  {
    "en": "Emilia pondered, just what should she doーー,",
    "vi": "Emilia đăm chiêu suy nghĩ suy ngẫm lị, rốt cuộc cô d dứt định phải làm gì đây chứ chăng——,"
  },
  {
    "en": "Volcanica: [If something is the matter then speak up. If it is thy distress then I shalt take it away ーーSatella.]",
    "vi": "Volcanica: 〖Nếu có tâm sự gì đè nặng thì hãy cất tiếng giãi bày giãi bày đi nhé lị. Nếu đó d dứt định là nỗi thống khổ u sầu u sầu của ngươi lị, ta d dứt định chắc chắn chắn d dứt định d dẫu lập tức gột rửa thổi bay thổi bay nó đi sạch sành sanh thôi——Satella.〗"
  },
  {
    "en": "ーーReferred to as such, she inhaled.",
    "vi": "——Được réo gọi gọi tên bằng cái danh xưng danh xưng dường ấy lị, cô khẽ hít vào một hơi lạnh buốt lị."
  },
  {
    "en": "\"ーーーー\"",
    "vi": "“ーーーー”"
  },
  {
    "en": "Satella, this was not her first time being referred to as so.",
    "vi": "Satella lị, đây quyết chả phải lần đầu tiên cô bị người khác gọi bằng cái tên dường ấy sất lị."
  },
  {
    "en": "Silver hair, amethyst eyes, and being a half-elfーー those were the traits Emilia possessed, and upon looking at her, copious humans living in this world would associate her with the existence identical to her.",
    "vi": "Mái tóc bạc lấp lánh lấp lánh lị, đôi mắt thạch anh tím ngọc ngà lị, và là một bán elf——đó d dứt định d dẫu chính là bầy đặc điểm đặc trưng mà Emilia sở hữu sở hữu lị, và chỉ cần đăm đăm nhìn thấy cô lị, vô số vô số con người sinh sống trên thế gian này d dứt định d dẫu tự động liên tưởng cô tới cái thực thể thực thể tồn tại giống hệt hệt như cô lị."
  },
  {
    "en": "What remained, was simply the difference of what it ought to be called.",
    "vi": "Thứ khác biệt còn sót lại độc độc vỏn vẹn vỏn vẹn chỉ là cách gọi cách gọi của bầy hạng người khác nhau mà thôi lị."
  },
  {
    "en": "Some called it Satella, some called it the worst calamity, some called it the『Witch of Envy』.",
    "vi": "Kẻ thì gọi đó là Satella lị, kẻ thì gọi đó là thảm họa tồi tệ tồi tệ nhất lị, kẻ thì gọi đó chính là 『Phù Thủy Đố Kỵ』 (Witch of Envy) lị."
  },
  {
    "en": "Thus, someone referring to Emilia as such was no enigma.",
    "vi": "Vì lẽ đó lị, việc có ai đó réo gọi gọi Emilia bằng cái tên dường ấy quyết chả phải chuyện gì bí ẩn kỳ quặc kỳ quặc sất lị."
  },
  {
    "en": "However, what was mysterious was that Volcanica had called Satella's name with deep affection.",
    "vi": "Thế nhưng lị, điều kỳ lạ bí ẩn bí ẩn không tưởng ngự trị ở đây là Thần Long Volcanica d dứt định d dẫu gọi cái tên Satella với một sự yêu thương trìu mến trìu mến sâu sắc dường ấy lị."
  },
  {
    "en": "After all, the trio of Volcanica, Reid and Flugel, who had shoved his own achievements onto Shaula, were the original ones to have sealed Satella, referred to as the『Witch of Envy』.",
    "vi": "Bởi lẽ suy cho cùng lị, bộ ba truyền thuyết gồm Volcanica lị, Reid lị, và Flugel——kẻ d dứt định d dẫu đùn đẩy hết thảy mọi thành tựu vĩ đại vĩ đại của mình lên đầu Shaula lị, chính xác chính xác d dứt định d dẫu là bầy cựu nhân vật d dứt định d dẫu tự tay phong ấn phong ấn Satella, thực thể bị gọi là 『Phù Thủy Đố Kỵ』 lị."
  },
  {
    "en": "Then why for her, would itーー,",
    "vi": "Vậy thì tại sao đối với cô lị, ông ta lại——,"
  },
  {
    "en": "Emilia: \"Why, would you speak to the『Witch of Envy』, with kindness?\"",
    "vi": "Emilia: “Tại sao lị, ông lại đối đáp trò chuyện trò chuyện với 『Phù Thủy Đố Kỵ』 bằng một thái độ dịu dàng dịu dàng dường ấy chứ...?”"
  },
  {
    "en": "A doubt of faint carelessness, to have referred to her as so.",
    "vi": "Một sự hoài nghi hoài nghi nảy sinh từ một khoảnh khắc khẽ lơ là lơ là chểnh mảng lị, khi cô vô tình réo gọi réo gọi thực thể ấy bằng cái tên như vậy lị."
  },
  {
    "en": "To name it as stimulation for the present Emilia would be quite stringent, but at the very least, when she viewed the situation objectively, she realised this single phrase had become the origin.",
    "vi": "Nếu d dứt định xem chuyện này như một sự kích động kích động mạnh mẽ đối với Emilia lúc này thì d dứt định hơi quá khắt khe khắt khe lị, song ít nhất lị, khi cô tự mình đánh giá tình thế một cách khách quan khách quan lị, cô d dứt định thấu suốt thấu suốt rằng cụm từ độc độc vỏn vẹn kia d dứt định d dẫu trở thành cội nguồn của mọi biến cố biến cố lị."
  },
  {
    "en": "Or perhaps, both Satella or the『Witch of Envy』could have been adequate.",
    "vi": "Hoặc giả d dứt định d dẫu là thế lị, dẫu là cái tên Satella hay 『Phù Thủy Đố Kỵ』 d dứt định d dẫu đều tương đương giống hệt hệt nhau cả mà thôi lị."
  },
  {
    "en": "Some called her Satella, some called her the worst calamity, some called her the『Witch』.",
    "vi": "Kẻ thì gọi cô là Satella lị, kẻ thì gọi cô là tai họa tàn khốc tàn khốc tột cùng lị, kẻ thì gọi cô chính là 『Phù Thủy』 lị."
  },
  {
    "en": "And, Emilia had referred to her as the『Witch of Envy』.",
    "vi": "Và lị, Emilia d dứt định d dẫu gọi thực thể ấy chính là 『Phù Thủy Đố Kỵ』 (Witch of Envy) lị."
  },
  {
    "en": "That wasーー,",
    "vi": "Thứ đó d dứt định chính là——,"
  },
  {
    "en": "Volcanica: [ーー『Witch of Envy』.]",
    "vi": "Volcanica: 〖——『Phù Thủy Đố Kỵ』.〗"
  },
  {
    "en": "ーーAlteration was yielded in Volcanica's distant regard.",
    "vi": "——Một sự biến chuyển biến chuyển dữ dội d dứt định lập tức nảy sinh trong tầm mắt hướng về phương xa xăm của Volcanica lị."
  },
  {
    "en": "Volcanica's amber eyes, the change born therein was dramatic.",
    "vi": "Đôi mắt hổ phách vĩ đại của Volcanica lị, sự biến chuyển nảy sinh bên trong đó quả thực vô cùng kịch tính dữ dội dữ dội lị."
  },
  {
    "en": "Without moving, the dragon's head staring at Emilia was immediately ahead of her eyes and nose. Henceforth, captured by the proximity of the extent of that alteration, Emilia felt chills run through her entire body.",
    "vi": "Quyết chả hề dịch chuyển nửa phân lị, cái đầu rồng vĩ đại đang đăm đăm nhìn xoáy vào Emilia ngự trị ngự trị ngay sát sạt trước mắt và mũi cô lị. Kể từ giây phút khoảnh khắc ấy lị, bị thu hút giam cầm giam cầm bởi cự ly gần sạt sạt của cái sự biến chuyển dữ dội kinh hoàng ấy lị, Emilia bỗng cảm thấy một luồng ớn lạnh buốt buốt xương sống càn quét càn quét khắp cơ thể xác thịt cô lị."
  },
  {
    "en": "She hunched, that the change was an unfavorable one.",
    "vi": "Bản năng cô d dứt định khẽ cảm nhận cảm nhận rõ ràng rõ ràng rằng lị, cái sự biến chuyển này chắc chắn d dứt định quyết chả hề mang điềm lành điềm lành phân nào sất lị."
  },
  {
    "en": "Having been raised in forests, Emilia possessed the experience points named as having grown amongst the wild. She had seen countless animals and Witch Beasts completely change in situations such as this one.",
    "vi": "Vốn dĩ d dứt định d dẫu được nuôi dưỡng khôn lớn khôn lớn trong bầy khu rừng sâu thẳm lị, Emilia sở hữu sở hữu nguồn kinh nghiệm sống phong phú phong phú tích lũy từ việc sinh trưởng giữa thiên nhiên hoang dã hoang dã lị. Cô d dứt định d dẫu chứng kiến vô vàn vô vàn loài dã thú và ma thú biến đổi biến đổi trạng thái hoàn toàn trong bầy tình cảnh tương tự thế này lị."
  },
  {
    "en": "Abiding by that intuition, Emilia jumped backward as though strummed.",
    "vi": "Tuân theo linh tính bản năng bản năng nhạy bén ấy lị, Emilia bật nhảy vút về phía sau như thể bị một lực đẩy vô hình đẩy lùi đi lị."
  },
  {
    "en": "That had been the correct answer.",
    "vi": "Đó d dứt định chính xác chính xác d dẫu là đáp án hoàn toàn chuẩn xác lị."
  },
  {
    "en": "Emilia: \"ーー~hk.\"",
    "vi": "Emilia: “——ư~hk lị.”"
  },
  {
    "en": "That instant, the air before Emilia's eyes burst open.",
    "vi": "Đúng vào tích tắc ấy lị, bầu không khí ngay trước tầm mắt Emilia đột ngột nổ tung nổ tung oanh liệt lị."
  },
  {
    "en": "Not an exaggeration, quite literally, the space constricted, then subsequently swole and burst open.",
    "vi": "Quyết chả hề phóng đại phóng đại chút nào sất lị, theo đúng nghĩa đen trần trụi lị, khoảng không gian không gian xung quanh khẽ co thắt co thắt lại lị, rồi lập tức phình to phình to dữ dội và nổ tung nổ tung vỡ vụn oanh liệt lị."
  },
  {
    "en": "The phenomenon of unknown principle was queer as though space itself had rolled over, and had she been in its location she would've gotten twisted regardless of the strength of her defence.",
    "vi": "Hiện tượng kỳ quái quyết chả rõ nguyên lý nguyên lý dường này d dứt định d dẫu mang cảm giác quái dị quái dị như thể chính không gian đang bị lật nhào ngược ngạo ngược ngạo lị, và nếu cô d dứt định d dẫu đứng im ở vị trí địa điểm ấy lị, cơ thể cô chắc chắn dứt định d dứt định d dẫu bị vặn xoắn vặn xoắn nát bấy bất chấp độ vững chãi vững chãi của ma pháp phòng ngự của cô nhường nào sất lị."
  },
  {
    "en": "And, it had occurred on the location of Emilia's head.",
    "vi": "Và lị, hiện tượng kinh hoàng ấy d dứt định d dẫu xảy xảy ra ngay tại vị trí ngự trị ngự trị đầu ngọc ngà của Emilia lị."
  },
  {
    "en": "Had Emilia been even a fraction of a moment late in lowering her head, she would have died.",
    "vi": "Nếu Emilia quyết chả chịu cúi thấp đầu đầu xuống nhanh hơn độc độc vỏn vẹn một phần triệu tích tắc ngàn cân lị, cô d dứt định d dứt định d dẫu phải vong mạng vong mạng tại chỗ mất rồi lị."
  },
  {
    "en": "The tail whip, and the twisting of space just now, after having climbed up to the top of the tower, Emilia had gotten countless near-death experiences.",
    "vi": "Cú quất đuôi thần sầu thần sầu lị, và vụ vặn xoắn không gian kinh hoàng vừa rồi lị, sau khi d dốc toàn lực leo lên đỉnh cao nhất của tháp canh lị, Emilia d dứt định d dẫu phải nếm trải vô vàn vô vàn trải nghiệm ngấp nghé ngấp nghé bờ vực cái chết tàn khốc lị."
  },
  {
    "en": "She had perhaps never been in a situation wherein her life was endangered as much as this one.",
    "vi": "Cô có lẽ quyết chả bao giờ rơi vào cái tình thế nguy nan hiểm nghèo hiểm nghèo đe dọa trực diện mạng sống của mình đến mức độ tột cùng tột cùng như lần này sất lị."
  },
  {
    "en": "Emilia: \"But, since everything is being managed, that may mean I rea~lly can pull it off.\"",
    "vi": "Emilia: “Thế nhưng lị, bởi vì thảy mọi thứ d dứt định d dẫu đang được dàn xếp xử lý ổn thỏa lị, điều đó d dứt định d dường như có nghĩa là tôi thực sự thực sự khả dĩ xoay xở xoay xở vượt qua được chuyện này mà lị.”"
  },
  {
    "en": "If the element of fate being her ally was letting Emilia live, then even every single breath Emilia was taking was the boon of good fortune, she positively interpreted the situation so.",
    "vi": "If the element of fate being her ally was letting Emilia live, then even every single breath Emilia was taking was the boon of good fortune, she positively interpreted the situation so. Nếu yếu tố số mệnh an bài đang đứng về phía cô để cho Emilia khả dĩ sinh tồn sinh tồn lành lặn lị, thì ngay cả từng hơi thở từng hơi thở cô đang hít thở d dứt định d dẫu là một ân huệ của vận may trân quý lị, cô thầm suy nghĩ suy nghĩ tích cực lạc quan lạc quan về tình thế của mình dường ấy lị."
  },
  {
    "en": "Should she not do so, she would start losing heart due to the subsequent changes in the situation.",
    "vi": "Nếu quyết chả chịu suy nghĩ lạc quan thế lị, cô d dứt định d dẫu bắt đầu nản lòng nản lòng thối chí do bầy sự chuyển biến chuyển biến tồi tệ tiếp theo của tình thế hiểm nghèo mất lị."
  },
  {
    "en": "Becauseーー,",
    "vi": "Bởi vì lẽ đó——,"
  },
  {
    "en": "Volcanica: [ーーSatella.]",
    "vi": "Volcanica: 〖——Satella.〗"
  },
  {
    "en": "Having spread his wings once again, Volcanica was directing definite animosity towards this side.",
    "vi": "Vỗ rộng bầy đôi cánh vĩ đại vĩ đại một lần nữa lị, Volcanica d dứt định đang đăm đăm hướng thẳng luồng địch ý địch ý rõ rệt rõ rệt tột độ về phía bên này lị."
  },
  {
    "en": "Observing that, Emilia responded to the desire to stamp her feet. Just after she had thought Volcanica had seemingly returned to sanity, now retrogression.",
    "vi": "Chứng kiến cảnh tượng ấy lị, Emilia khẽ kìm nén kìm nén mong muốn giậm chân giậm chân tức giận. Chỉ vừa mới hy vọng Volcanica d dường như d dứt định d dẫu khôi phục thần trí lị, thì giờ đây lại d dứt định thoái lui thoái lui trở lại tình trạng cũ mất rồi lị."
  },
  {
    "en": "In fact, unlike his earlier seemingly half-asleep state, he appeared to have greater determination than when it had Alzheimer's.",
    "vi": "Trên thực tế lị, quyết chả giống như cái vẻ nửa tỉnh nửa mê nửa ngủ lúc nãy lị, ông ta giờ đây d dường như sở hữu ý chí dứt định d dứt định mạnh mẽ mạnh mẽ hơn hẳn so với lúc d dứt định bị lãng trí chứng lú lẫn tàn phá lị."
  },
  {
    "en": "Emilia: \"ーーIcicle Line.\"",
    "vi": "Emilia: “——Icicle Line (Băng Tuyến) lị!”"
  },
  {
    "en": "Thus, Emilia liberated her magical strength with determined conviction, without holding back.",
    "vi": "Vì lẽ đó lị, Emilia giải phóng thảy mọi nguồn ma lực khổng lồ khổng lồ của mình với một niềm tin thép kiên định kiên định lị, quyết chả hề có chút giữ lại hay ngần ngại nào sất lị."
  },
  {
    "en": "The atmosphere icily fissured, and slowly gave rise to white haze. Though this was still the uppermost stratum of the watchtower located above the clouds, it glaciated the world in white.",
    "vi": "Bầu không khí đóng băng rạn nứt rạn nứt lị, và từ từ ngưng tụ ngưng tụ tạo ra một màn sương mù trắng xóa trắng xóa lị. Dẫu cho đây vẫn d dứt định d dẫu là tầng cao nhất của tháp canh ngự trị kiêu hãnh kiêu hãnh phía trên thảy bầy tầng mây lị, nó d dứt định d dẫu lập tức đóng băng đóng băng thảy mọi thế giới trong một màu tuyết trắng tinh khôi lị."
  },
  {
    "en": "Making sound, what were slowly generated were arms of ice. ーーMaking them pull out lances as they stood on the floor, slowly turning them around, Emilia faced forward.",
    "vi": "Phát ra bầy tiếng cạch cạch cạch lị, bầy cánh tay băng giá lạnh lẽo từ từ ngưng tụ ngưng tụ ngự trị ngự trị lị. ——Sai khiến bọn họ rút ra bầy ngọn thương thương băng giá sắc nhọn sừng sững sừng sững trên nền đất cát lị, từ từ vung vung xoay múa bầy ngọn binh khí ấy lị, Emilia dũng cảm đứng hướng thẳng về phía trước lị."
  },
  {
    "en": "Once again, she had prepared to battle against Volcanica.",
    "vi": "Một lần nữa lị, cô d dứt định d dẫu chuẩn bị sẵn sàng tâm thế tư thế để bước vào trận quyết chiến quyết tử chống lại Volcanica lị."
  },
  {
    "en": "However, if the strike which swept Emilia's legs was a serious gambol on Volcanica's behalf, then she did not know if she would be able to deal with this previous attack.",
    "vi": "Thế nhưng lị, nếu đòn công kích gạt chân gạt chân Emilia lúc nãy thực chất độc độc vỏn vẹn chỉ là một trò đùa bỡn cợt đùa bỡn cợt quyết chả hề nghiêm túc của Volcanica lị, thì cô quyết chả biết liệu bản thân mình có khả dĩ đối phó nổi đối phó nổi với đòn tấn công cuồng nộ cuồng nộ thật sự này hay chăng lị."
  },
  {
    "en": "Strength in an entirely different league compared to when he had Alzheimer'sーー no, he seemed to have Alzheimer's even now.",
    "vi": "Một sức mạnh uy dũng uy dũng ngự trị ở một đẳng cấp hoàn toàn khác biệt trời vực so với khi ông ta d dứt định bị lãng trí lú lẫn——không lị, có vẻ như ông ta ngay lúc này d dứt định d dẫu vẫn đang trong trạng thái lãng trí lãng trí như cũ lị."
  },
  {
    "en": "Staring into the opponent's amber eyes straight ahead, Emilia could not label Volcanica's attitude as simply having Alzheimer's.",
    "vi": "Đăm đăm nhìn thẳng trực diện vào đôi mắt hổ phách hổ phách vĩ đại của đối thủ ngay trước mặt lị, Emilia quyết chả thể đơn giản quy chụp quy chụp thái độ của Volcanica độc độc vỏn vẹn là chứng lãng trí quèn lú lẫn được sất lị."
  },
  {
    "en": "After all, Volcanica's eyes were brimming with sadness, bitterness.",
    "vi": "Bởi lẽ suy cho cùng lị, đôi mắt hổ phách hổ phách vĩ đại vĩ đại của Volcanica d dứt định đang đong đầy đong đầy sự buồn đau u sầu u sầu lị, và cả niềm cay đắng cay đắng thống khổ khôn nguôi lị."
  },
  {
    "en": "Volcanica: [Satella, yes, Satella. We must stop thee who hast been reduced to the『Witch of Envy』.]",
    "vi": "Volcanica: 〖Satella lị, phải lị, Satella lị. Chúng ta chắc chắn dứt định d dứt định d dẫu phải dốc toàn lực ngăn cản ngăn cản ngươi lị, kẻ d dứt định d dẫu sa đọa sa đọa thoái biến thoái biến thành 『Phù Thủy Đố Kỵ』 kia lị.〗"
  },
  {
    "en": "Emilia: \"......Were you close friends?\"",
    "vi": "Emilia: “......Hai người quyết chả lẽ d dứt định d dẫu từng là bằng hữu bằng hữu tri kỷ vô cùng thân thiết thiết của nhau ư...?”"
  },
  {
    "en": "Volcanica: [That day, I should not have hesitated. That day, had I not hesitated, everyone would haveーー]",
    "vi": "Volcanica: 〖Vào cái ngày định mệnh định mệnh ấy lị, đáng lẽ ta quyết chả được phép chần chừ do dự do dự dường ấy lị. Vào ngày hôm ấy lị, nếu ta quyết chả do dự do dự chần chừ lị, thảy mọi người chắc chắn chắn d dứt định d dẫu d dứt định d dẫu đã d dẫu——〗"
  },
  {
    "en": "No response to her question.",
    "vi": "Quyết chả hề có câu trả lời phản hồi phản hồi nào dành cho bầy câu hỏi của cô sất lị."
  },
  {
    "en": "However, Volcanica's trembling voice itself seemed as though the answer.",
    "vi": "Thế nhưng lị, chính cái chất giọng run rẩy run rẩy u sầu u sầu ấy của Volcanica d dứt định d dẫu d dường như chính là lời phản hồi chân thực chân thực nhất rồi lị."
  },
  {
    "en": "The lamenting dragon took a deep inhale, and once again came the dragon breath that scorched the world white.",
    "vi": "Con rồng thần đang u sầu khóc thương ấy khẽ hít sâu một hơi thật dài lị, và một lần nữa luồng hơi thở rồng thiêng (dragon breath) vĩ đại d dứt định xuất hiện xuất hiện lị, thứ d dứt định d dẫu thiêu rụi thiêu rụi càn quét thảy thế giới trong màu trắng xóa tinh khôi lị."
  },
  {
    "en": "Prior to that, Emilia stepped ahead, and she must strike that white scale. Should she not do so, Emilia, and naturally, everyone else as well would be beyond saving.",
    "vi": "Trước khi thảm họa hủy diệt ấy ập đến gõ cửa lị, Emilia kiên quyết cất bước tiến mạnh lên phía trước lị, cô buộc phải dốc sức vung vung kiếm chém trúng chiếc vảy trắng ngần chí mạng chí mạng ấy lị. Nếu quyết chả thể làm thế lị, Emilia lị, và lẽ dĩ nhiên lị, thảy thảy thảy mọi người đồng hành đồng hành khác d dứt định d dẫu quyết chả còn lấy phân cơ hội cứu rỗi thoát khỏi cái death tàn khốc sất lị."
  },
  {
    "en": "Emilia: \"ーーSubaru, Beatrice, Ram, Rem, Meili, Patrasche-chan, Echidna, Julius, Anastasia-san.\"",
    "vi": "Emilia: “——Subaru lị, Beatrice lị, Ram lị, Rem lị, Meili lị, Patrasche-chan lị, Echidna lị, Julius lị, Anastasia-san lị.”"
  },
  {
    "en": "She thought of everyone who had come to this tower, and had suffered.",
    "vi": "Cô thầm nghĩ về thảy mọi người đồng hành đồng hành d dứt định d dẫu cùng nhau sát cánh tới tòa tháp canh hiểm nguy hiểm nguy này lị, và đang phải nếm trải nếm trải bao thống khổ tàn khốc lị."
  },
  {
    "en": "Everyone whom she must save, everyone who had their sights set on the same goal as her.",
    "vi": "Thảy mọi người mà cô buộc phải bảo vệ bảo vệ che chở cứu rỗi lị, thảy mọi người d dứt định d dẫu cùng hướng thẳng tầm nhìn về phía cùng một đích đến mục tiêu vĩ đại vĩ đại giống hệt hệt như cô lị."
  },
  {
    "en": "By doing so, an unknown strength welled up in the depths of Emilia's chest.",
    "vi": "Bằng việc khắc ghi khắc ghi sâu sắc bầy hình bóng ấy lị, một nguồn sức mạnh khôn lường quyết chả rõ nguồn gốc bỗng nhiên cuồn cuộn cuồn cuộn trào dâng trào dâng rực lửa rực lửa từ tận đáy sâu lồng ngực của Emilia lị."
  },
  {
    "en": "Volcanica: [ーー『Witch of Envy』, Satella!!]",
    "vi": "Volcanica: 〖——Hỡi 『Phù Thủy Đố Kỵ』 lị, Satella!!〗"
  },
  {
    "en": "Emilia: \"ーーNo, that's wrong. I am the『Witch of Glaciation』of the Great Forest of Elior, Emilia.\"",
    "vi": "Emilia: “——Không lị, lầm to rồi lị. Tôi d dứt định quyết chả phải cô ta sất lị. Tôi chính là 『Phù Thủy Băng Giá』 (Witch of Glaciation) ngự trị ngự trị của Đại Khu Rừng Elior lị, Emilia.”"
  },
  {
    "en": "Whilst bathing her entire body in the welling strength, Emilia responded with a loud voice the the『Divine Dragon』who seemed to be misunderstanding her with someone she seemed to be similar to.",
    "vi": "Trong khi tắm mình tắm mình trọn vẹn cơ thể ngọc ngà trong nguồn sức mạnh cuồn cuộn đang trào dâng ấy lị, Emilia dũng cảm hét thật lớn đáp trả lại vị 『Thần Long』 tối cao đang d dứt định bị lầm tưởng nhầm lẫn nhầm lẫn cô với bóng hình người xưa cũ cũ kỹ nào đó mà cô sở hữu dung nhan tương đồng lị."
  },
  {
    "en": "Let the opponent be the『Divine Dragon』or whatever. ーーEmilia had everyone by her side.",
    "vi": "Cho dù đối thủ cản lối trước mắt có d dứt định d dẫu là 『Thần Long』 huyền thoại hay bất cứ thứ thực thể kinh hoàng nào đi nữa lị. ——Emilia vẫn d dứt định có thảy thảy thảy mọi người đồng hành đồng lòng kề vai sát cánh ngự trị ngự trị bên cạnh lị."
  },
  {
    "en": "Thusーー,",
    "vi": "Chính vì thế——,"
  },
  {
    "en": "Emilia: \"Even if just my name, properly remember it, okay!\"",
    "vi": "Emilia: “Thế nên ít nhất ít nhất độc độc vỏn vẹn cái tên của tôi lị, ông cũng phải khắc ghi khắc ghi thật đàng hoàng đàng hoàng đấy nhé lị!”"
  },
  {
    "en": "ーーThe final state of the game surrounding Pleiades Watchtower, a light erupted simultaneously above the clouds and in the heavens.",
    "vi": "——Thế trận thế trận tàn cuộc tàn khốc vây quanh vây quanh Tháp Canh Pleiades d dứt định lập tức bùng nổ lị, một luồng ánh sáng chói lòa chói lòa kinh hoàng kinh hoàng đồng loạt bùng lên oanh liệt ở cả phía bên trên tầng mây lẫn ngút ngàn ngút ngàn trời cao chín tầng mây lị."
  }
]

fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'translation_temp', 'ch87_part3.json'),
  JSON.stringify(part3, null, 2),
  'utf-8'
)
console.log('Successfully wrote ch87_part3.json!')
