import fs from 'fs'
import path from 'path'

const part3 = [
  {
    "en": "The girl, who declaimed her greed, who boasted her desire to attain all kinds of everything.",
    "vi": "Cô gái ấy, người luôn tuyên bố sự tham lam của mình, kẻ luôn tự hào về khao khát đoạt lấy đủ mọi thứ trên đời."
  },
  {
    "en": "Never letting go of what she had once put in purse come what may, since she utmost loathed having to let go, having to part ways with anything, there was only one sole reason which she could reckon.",
    "vi": "Quyết chả bao giờ chịu buông bỏ những gì đã một khi cất vào ví dù có xảy ra chuyện gì đi chăng nữa, bởi cô ghét cay ghét đắng việc phải buông tay, phải chia lìa với bất cứ thứ gì, chỉ có một lý do duy nhất mà cô có thể tự suy xét."
  },
  {
    "en": "\"Having ceded the body over to me, and temporarily lying dormant in your Od, you are in a state wherein you won't receive any interference from the outside world. ーーBecause the Od, is a certain kind of eigen-world.\"",
    "vi": "“Bằng cách nhường lại thể xác cho tôi, và tạm thời chìm vào giấc ngủ sâu trong Od của chính mình, cô đang ở trong trạng thái quyết chả nhận bất kỳ sự can thiệp nào từ thế giới bên ngoài. ——Bởi lẽ Od, chính là một loại thế giới riêng biệt độc nhất.”"
  },
  {
    "en": "And by her own volition, she had secluded herself away in that place.",
    "vi": "Và bằng chính ý chí của mình, cô đã tự giam mình trong không gian biệt lập đó."
  },
  {
    "en": "The reason being obvious. ーーShould she come outside, she would incur the effects. The abhorrent Authority of the Sin Archbishop of『Gluttony』, she would incur its effects.",
    "vi": "Lý do thật hiển nhiên. ——Nếu cô bước ra ngoài, cô dứt định sẽ chịu ảnh hưởng. Quyền Năng kinh tởm của Đại Giám Mục Tội Lỗi của 『Phàm Ăn』, cô dứt định sẽ chịu tác động từ nó."
  },
  {
    "en": "She would forget what she wished to never forget, relinquish what she wished to never relinquish.",
    "vi": "Cô sẽ quên đi những gì mình quyết chả bao giờ muốn quên, từ bỏ những gì mình quyết chả muốn từ bỏ."
  },
  {
    "en": "Anastasia Hoshin, would forget Julius Juukulius.",
    "vi": "Anastasia Hoshin, dứt định sẽ lãng quên Julius Juukulius."
  },
  {
    "en": "So was her purpose. Howeverーー,",
    "vi": "Mục đích của cô dẫu là như thế. Thế nhưng——,"
  },
  {
    "en": "\"It seems, everybody who came to this tower are all staunch boneheads. ーーAll of them, appear to be uncute to the point of dying dwelling over losing something.\"",
    "vi": "“Xem ra, thảy mọi người đặt chân tới tòa tháp này đều là những kẻ cứng đầu bướng bỉnh cứng cổ lị. ——Ai nấy dường như đều chả đáng yêu chút nào, thà chết chứ quyết chả chịu chấp nhận mất đi thứ gì cả.”"
  },
  {
    "en": "In this duration of nearly two months, she had attempted to imitate her way by herself, but now was the right time.",
    "vi": "Trong suốt khoảng thời gian gần hai tháng qua, cô đã cố gắng tự mình bắt chước cách sống của cô gái ấy, nhưng giờ dẫu là thời điểm thích hợp rồi lị."
  },
  {
    "en": "Besides, since she had observed his positives and negatives, his flurrying self as a nameless knight from close vicinity, even if that girl was to forget, she could apprise her.",
    "vi": "Hơn nữa, vì cô đã tận mắt chứng kiến những điểm tốt và xấu của anh, dáng vẻ loay hoay xoay xở của anh như một vị hiệp sĩ vô danh từ cự ly cực gần, nên dẫu cô gái ấy có quên đi, cô vẫn có thể kể lại cho cô bé nghe."
  },
  {
    "en": "\"Ah, is that so.\"",
    "vi": "“Ồ, ra là thế lị.”"
  },
  {
    "en": "Wielding no purpose, the Artificial Spirit who had fulfilled its duty upon the point of taking birth.",
    "vi": "Quyết chả mang mục đích gì cả, một Tinh Linh Nhân Tạo vốn đã hoàn thành trọn vẹn nghĩa vụ của mình ngay vào khoảnh khắc được sinh ra đời."
  },
  {
    "en": "Though she adjudged she wielded solely that unpleasant duty, contrary to expectations, that was not where it came to an end.",
    "vi": "Dẫu cô từng phán đoán rằng mình chỉ gánh vác duy nhất nghĩa vụ tẻ nhạt phiền phức ấy, nhưng trái với mong đợi, mọi chuyện dứt định chả hề kết thúc ở đó."
  },
  {
    "en": "The young girl she cherished, the knight she cherished, and acting as the intermediating bridge between the chipped two.",
    "vi": "Cô gái trẻ cô trân quý, vị hiệp sĩ cô trân quý, và việc đóng vai trò làm cây cầu kết nối giữa hai mảnh ghép bị rạn nứt."
  },
  {
    "en": "Was that onus not a task of vital significance.",
    "vi": "Trách nhiệm nặng nề ấy há chẳng phải là một nhiệm vụ có tầm ảnh hưởng vô cùng quan trọng hay sao."
  },
  {
    "en": "Was that not of such vital significance, that she could smile musing this had been the purpose of her birth.",
    "vi": "Há chẳng phải nó có tầm quan trọng đến mức cô có thể mỉm cười và tự nhủ rằng đây chính là mục đích thực sự của sự ra đời của mình hay sao."
  },
  {
    "en": "Thusーー,",
    "vi": "Chính vì lẽ đó——,"
  },
  {
    "en": "Echidna: \"ーーTo not even see your knight be at his coolest, a deed so wasteful, is it not unbecoming of your miserly self.\"",
    "vi": "Echidna: “——Ngay cả việc ngắm nhìn vị hiệp sĩ của mình vào lúc bảnh bao và ngầu nhất dẫu quyết chả thèm xem, một hành động lãng phí dường ấy, há chẳng phải quyết không tương xứng với bản tính kiệt sỉ thu gom của cô sao.”"
  },
  {
    "en": "△▼△▼△▼△",
    "vi": "△▼△▼△▼△"
  },
  {
    "en": "ーーThe white light, hunted the aurora down as though to paint it out.",
    "vi": "——Ánh sáng trắng xóa, săn đuổi dải cực quang như thể muốn nhuộm trắng xóa hoàn toàn nó."
  },
  {
    "en": "Furthermore he pressed, with the entirety of his soul, and having borrowed the might of the six Spirits he had reforged his contract with.",
    "vi": "Hơn thế nữa, anh dốc toàn lực dồn ép bằng cả linh hồn, và mượn lấy sức mạnh vĩ đại của sáu Tinh linh mà anh đã tái lập khế ước thành công."
  },
  {
    "en": "He had gambled upon and unveiled a secret amongst secrets, whilst the opponent had merely swung the sword earnestly, solemnly. ーーIndeed, he was utterly astounded by that absurd exceeding of norms.",
    "vi": "Anh đã đánh cược và giải phóng một bí thuật tối thượng nằm trong số những bí thuật của mình, trong khi đối thủ chỉ đơn giản là vung thanh kiếm một cách nghiêm túc, trang nghiêm. ——Quả thực, anh hoàn toàn bị kinh ngạc sững sờ trước sự vượt trội quy chuẩn một cách vô lý ấy."
  },
  {
    "en": "Simultaneously, since he also possessed the emotions enunciating this is how it must be overflowing within his chest, he found his own self to be irredeemable as well.",
    "vi": "Đồng thời, vì anh dẫu sở hữu những cảm xúc dâng trào trong lồng ngực tự nhủ rằng mọi chuyện dứt định phải thế này, anh tự thấy bản ngã của mình dẫu thật hết thuốc chữa."
  },
  {
    "en": "With a swing of the sword, the world fissured.",
    "vi": "Chỉ bằng một cú vung kiếm duy nhất, cả thế giới như bị xé toạc ra."
  },
  {
    "en": "That was, the special move of the『Sword Saint』which transpired when Reinhardt swung the sword as well.",
    "vi": "Đó chính là tuyệt kỹ kiếm đạo của 『Kiếm Thánh』, thứ dứt định sẽ xảy ra khi Reinhardt vung thanh kiếm của mình lên."
  },
  {
    "en": "Suddenly, in the midst of a rivalry between a life and a life, Julius contemplated.",
    "vi": "Đột nhiên, ngay giữa cuộc giao tranh sinh tử giữa mạng sống và mạng sống, Julius chợt suy tư."
  },
  {
    "en": "Reinhardt and Reid, should they battle each other, simply who would prevail as more powerful.",
    "vi": "Nếu Reinhardt và Reid quyết đấu kịch liệt với nhau, rốt cuộc ai sẽ là người mạnh mẽ vượt trội hơn."
  },
  {
    "en": "A legend and a legend, a『Sword Saint』and a『Sword Saint』, in the unattainable battle, who would be declared victorious.",
    "vi": "Một huyền thoại và một huyền thoại, một 『Kiếm Thánh』 và một 『Kiếm Thánh』, trong trận quyết đấu không tưởng ấy, ai sẽ là người được tuyên bố chiến thắng vinh quang."
  },
  {
    "en": "Unfortunately, the opportunity to make certain of that shan't pay a call.",
    "vi": "Đáng tiếc thay, cơ hội để kiểm chứng điều đó quyết sẽ không bao giờ gõ cửa."
  },
  {
    "en": "Julius: \"Then I have no choice, but to confirm it with this body of mine.\"",
    "vi": "Julius: “Vậy thì tôi quyết chả còn lựa chọn nào khác ngoài việc tự mình kiểm chứng nó bằng chính thân xác này.”"
  },
  {
    "en": "The opportunity to exchange swords with Reinhardt van Astrea withal Reid Astrea, befell only upon ones who reached this tower.",
    "vi": "Cơ hội được so tài kiếm đạo với Reinhardt van Astrea cũng như Reid Astrea, chỉ đến với những kẻ đặt chân tới tòa tháp canh này."
  },
  {
    "en": "Moreover, the possibility existed solely for Julius, and the young girl named Emilia, who had headed towards the upper stratum. ーーHe bore no intention to concede that duty to anyone else.",
    "vi": "Hơn nữa, khả năng ấy chỉ tồn tại duy nhất dành cho Julius, và cô gái trẻ tên Emilia, người đã hướng lên các tầng trên. ——Anh quyết chả hề có ý định nhường lại nghĩa vụ thiêng liêng đó cho bất kỳ ai khác."
  },
  {
    "en": "Thus, what remained for him was to simply triumph.",
    "vi": "Vì vậy, việc còn lại đối với anh chỉ đơn giản là giành chiến thắng."
  },
  {
    "en": "To jostle this white light, and slay Reid Astrea with the radiance of rainbow.",
    "vi": "Đẩy lùi luồng sáng trắng này, và chém hạ Reid Astrea bằng ánh hào quang rực rỡ của cầu vồng."
  },
  {
    "en": "For that purpose, the entirety of his soul, and his sword power, requiring a single step furtherーー,",
    "vi": "Vì mục tiêu ấy, toàn bộ linh hồn anh, và kiếm lực của anh, dứt định đòi hỏi một bước tiến xa hơn nữa——,"
  },
  {
    "en": "Should a scintilla of pride and might, dwell upon the tip of the『Greatest Knight's』swordーー,",
    "vi": "Nếu chỉ một chút kiêu hãnh và sức mạnh rực cháy ngự trị trên mũi kiếm của 『Kỵ Sĩ Ưu Tú Nhất』——,"
  },
  {
    "en": "Echidna: \"ーーJulius.\"",
    "vi": "Echidna: “——Julius.”"
  },
  {
    "en": "A call improbable to reach.",
    "vi": "Một tiếng gọi tưởng chừng quyết chả thể nào chạm tới được."
  },
  {
    "en": "Within impact rendering the passage of time indistinct, however, the time necessary for each convergence of swords was less than a fraction of a second. This was, the offence and defence of this momentary world.",
    "vi": "Dưới sức va chạm khiến dòng thời gian trôi qua trở nên mơ hồ, tuy nhiên, thời gian cần thiết cho mỗi lần va chạm kiếm dẫu chưa đầy một phần nhỏ của giây. Đây chính là cuộc công thủ của thế giới chớp nhoáng trong tích tắc này."
  },
  {
    "en": "In that space, much less, in the midst of a battle being fought at the risk of life and death, nobody's voice could possibly reach.",
    "vi": "Trong không gian ấy, phương chi giữa trận chiến sinh tử đang được đánh cược bằng cả tính mạng thế này, quyết chả có giọng nói của ai có thể chạm tới."
  },
  {
    "en": "Julius: \"ーーーー\"",
    "vi": "Julius: “————”"
  },
  {
    "en": "However, the voice certainly swinged Julius.",
    "vi": "Thế nhưng, giọng nói ấy chắc chắn đã làm Julius lay động mãnh liệt."
  },
  {
    "en": "Perhaps not his eardrums, but it instead had reached something far deeper within, the innermost depths of his chest.",
    "vi": "Có lẽ quyết chả phải là màng nhĩ của anh, mà nó đã thực sự chạm đến một thứ sâu thẳm hơn thế nhiều, tận sâu trong lồng ngực anh."
  },
  {
    "en": "Given he had resolved in his heart to wear the shell named knight, he must respond to it without fail.",
    "vi": "Một khi đã hạ quyết tâm khoác lên mình vỏ bọc mang tên hiệp sĩ, anh dứt định phải đáp lại tiếng gọi ấy quyết không sai sót."
  },
  {
    "en": "That is why, hearing the voice he could not possibly have heard, Julius turned towards the one whom could not possibly have viewed, and exchanged gazes with those pale cerulean eyes.",
    "vi": "Chính vì vậy, khi nghe thấy giọng nói mà mình quyết chả thể nào nghe thấy được, Julius quay đầu nhìn về phía người mà anh dứt định chả thể nào nhìn thấy, và chạm mắt với đôi mắt màu xanh lam nhạt tròn xoe ấy."
  },
  {
    "en": "The luminescence dwelling in those large, spherical eyes, had distinctly changed from what it had been just beforeーー,",
    "vi": "Ánh sáng ngự trị trong đôi mắt tròn to, lấp lánh ấy, rõ ràng đã thay đổi hoàn toàn so với ngay trước đó——,"
  },
  {
    "en": "\"ーーGo get 'em, my knight.\"",
    "vi": "“——Lên đi nào, hiệp sĩ của tôi lị.”"
  },
  {
    "en": "ーーIn that singular sentence, dwelled the one final push of sword power he required.",
    "vi": "——Chỉ trong một câu nói duy nhất ấy, dẫu ngự trị sức mạnh kiếm đạo cuối cùng mà anh dứt định cần để bứt phá."
  },
  {
    "en": "Julius: \"Ia! Kua! Aro! Ik! In! Ness!\"",
    "vi": "Julius: “Ia! Kua! Aro! Ik! In! Ness!”"
  },
  {
    "en": "Requesting for one final push, he called to the Spirits with whom he had become a part of the aurora with.",
    "vi": "Khẩn cầu lực đẩy cuối cùng, anh cất tiếng gọi sáu Tinh linh, những người đã cùng anh hóa thành một phần của cực quang cầu vồng."
  },
  {
    "en": "In order to surmount the white light, beyond which present was the form of the enemy he ought to defeat, directly before him.",
    "vi": "Để vượt qua ánh sáng trắng xóa rực cháy, phía sau nó chính là dáng hình của kẻ thù anh buộc phải đánh bại đang ở ngay trước mặt."
  },
  {
    "en": "In order to make the tip of the sword, reach beyond the white lightーー,",
    "vi": "Để khiến mũi kiếm sắc bén có thể chạm tới vượt qua ánh sáng trắng xóa ấy——,"
  },
  {
    "en": "Julius: \"O~o~o~o~o~o~o~o~hーー ~hk!!\"",
    "vi": "Julius: “O~o~o~o~o~o~o~o~h—— ~hk!!”"
  },
  {
    "en": "Opening his mouth to an extent unbefitting of him, he raised his voice to the extent of vomiting blood.",
    "vi": "Há miệng to đến mức quyết chả tương xứng với phong thái thanh lịch của mình, anh gầm lên vang dội đến mức như sắp nôn ra máu."
  },
  {
    "en": "With an expression possessing the preparedness to die, discarding elegance into the wind, merely ensuring the bones supporting his self did not fracture, with his paramount dedication towards it, Julius stepped forth.",
    "vi": "Với một biểu cảm thể hiện sự sẵn sàng đón nhận cái chết, quăng sạch sự thanh lịch tao nhã vào hư không, chỉ cốt giữ cho những khúc xương nâng đỡ cơ thể không bị gãy vụn, bằng sự tận hiến tột cùng của mình, Julius bước những bước chân sắt đá tiến lên."
  },
  {
    "en": "Reid: \"ーーーー\"",
    "vi": "Reid: “————”"
  },
  {
    "en": "And, receiving the rainbow's aurora intensifying its brilliance, the ambushing white light too escalated its vigour.",
    "vi": "Và, khi đón nhận dải cực quang cầu vồng đang tăng cường ánh hào quang lộng lẫy, luồng sáng trắng đang phục kích dẫu tăng cường uy thế kịch liệt của nó."
  },
  {
    "en": "Furthermore, furthermore, strengthening their might, the radiance of rainbow and the white light collided vehementlyーー,",
    "vi": "Hơn nữa, hơn nữa, củng cố thực lực phi thường của họ, ánh hào quang cầu vồng và luồng sáng trắng đâm sầm kịch liệt vào nhau dữ dội——,"
  },
  {
    "en": "Julius: \"ーーAh.\"",
    "vi": "Julius: “——Ah.”"
  },
  {
    "en": "That which seemed as though it would subsist for eternity, was met by an unforeseen fall of curtains.",
    "vi": "Thứ tưởng chừng như sẽ tồn tại vĩnh hằng ấy, bất ngờ phải đón nhận một màn hạ màn quyết chả thể ngờ tới."
  },
  {
    "en": "△▼△▼△▼△",
    "vi": "△▼△▼△▼△"
  },
  {
    "en": "Julius: \"ーーAh.\"",
    "vi": "Julius: “——Ah.”"
  },
  {
    "en": "Dumbfounded, Julius noticed the feeble voice spill from his throat.",
    "vi": "Sững sờ đến ngây dại, Julius nhận ra một giọng nói yếu ớt vừa thốt ra khỏi cổ họng mình."
  },
  {
    "en": "The mutual clash of their maximal powers, its abrupt fall of curtains. However, without halting its vigour, his sword, embellished with the aurora, had directly stabbed through the opponent's vitals.",
    "vi": "Sự va chạm dữ dội giữa những sức mạnh tối thượng của cả hai, dải cực quang kết thúc đột ngột đầy bất ngờ. Tuy nhiên, quyết chả hề suy giảm uy lực, thanh kiếm hiệp sĩ lộng lẫy cực quang của anh đã trực tiếp đâm xuyên qua tử huyệt của đối thủ."
  },
  {
    "en": "Julius: \"Why......\"",
    "vi": "Julius: “Tại sao ngài lại......”"
  },
  {
    "en": "Reid: \"Tch, ah, shit, if this ain't a borin' endin'.\"",
    "vi": "Reid: “Chậc, phiền phức khốn kiếp thật lị, cái kết cục tẻ nhạt phiền phức này là thế nào chứ.”"
  },
  {
    "en": "Julius plunged into turmoil, being the one to be blamed for the stab, whilst on the other hand Reid, who had been stabbed, remained calm.",
    "vi": "Julius rơi vào trạng thái hỗn loạn tột độ, khi chính anh là kẻ tung nhát đâm chí mạng ấy, trong khi ngược lại Reid, kẻ bị đâm xuyên ngực, lại tỏ ra bình thản vô cùng."
  },
  {
    "en": "Heedless of the stab in his chest, he did not even express a frown.",
    "vi": "Quyết chả thèm để tâm đến nhát kiếm cắm ngập trong lồng ngực, lão thậm chí còn chả hề nhíu mày lấy một cái."
  },
  {
    "en": "Was that a deed of his tenacious force of will, and if not so, was the anomaly which transpired on the flesh body of that great man the cause.",
    "vi": "Đó là do ý chí kiên định phi thường sắt đá của lão, hay là do sự dị thường phát sinh trên thể xác của vĩ nhân hộ pháp ấy gây ra."
  },
  {
    "en": "Disparate from the penetration of Julius' sword, a woundーー no, a crevice had been yielded in the chest of Reid Astrea.",
    "vi": "Khác biệt hoàn toàn với vết đâm từ thanh kiếm của Julius, một vết thương—— không, một khe nứt lớn đã xuất hiện ngay trên ngực của Reid Astrea."
  },
  {
    "en": "And, that was not confined to merely his chest. His arms and legs, neck and cheeks, throughout profuse sections of his body stretched wounds akin to cracked glass.",
    "vi": "Và điều đó quyết chả giới hạn ở lồng ngực của lão. Cả tay chân, cổ và má, khắp các bộ phận trên cơ thể lão đều loang lổ những vết nứt tựa như thủy tinh bị rạn vỡ."
  },
  {
    "en": "Intuitively, Julius comprehended what it was.",
    "vi": "Theo trực giác sắc bén, Julius lập tức hiểu rõ điều gì đang diễn ra."
  },
  {
    "en": "Originally inconceivable distortion stood corrected. This was, a phenomenon of that mechanism.",
    "vi": "Sự vặn vẹo vốn chả thể tưởng tượng nổi ban đầu nay đang được sửa chữa tự nhiên. Đây chính là hiện tượng đào thải của cơ chế đó."
  },
  {
    "en": "Reid: \"Ultimately, it's 'bout that. The human named me ain't fittin' in any vessel other than myself.\"",
    "vi": "Reid: “Sau cùng dẫu là như thế thôi lị. Kẻ mang danh là ta đây quyết chả thể nhét vừa bất kỳ cái bình chứa nào khác ngoài chính bản thân ta lị.”"
  },
  {
    "en": "Whilst gazing at the palm of his fissuring self, the insight Reid grumbled was correct.",
    "vi": "Trong khi đăm đăm nhìn vào lòng bàn tay đang nứt toác ra của mình, lời càu nhàu sắc bén của Reid dứt định là hoàn toàn chính xác."
  },
  {
    "en": "Captured due to the Authority of『Gluttony』, in the form of pillaging the right of control over that flesh body, Reid Astrea had acquired substanceーー however, the truth that until the bitter end, this body belonged to the Sin Archbishop of『Gluttony』, Roy Alphard, who had become the foundation, shan't change.",
    "vi": "Bị giam cầm do Quyền Năng của 『Phàm Ăn』, dưới hình thức cướp đoạt quyền kiểm soát thể xác ấy, Reid Astrea dẫu đã có được thực thể tồn tại—— tuy nhiên, sự thật là cho đến phút cuối cùng, cơ thể này vẫn thuộc về Đại Giám Mục Tội Lỗi của 『Phàm Ăn』, Roy Alphard, kẻ vốn là nền tảng, quyết chả thể nào thay đổi."
  },
  {
    "en": "In other words, the receptacle named Roy Alphard was unable to endure the workings of the norm exceeding soul named Reid Astrea.",
    "vi": "Nói cách khác, chiếc bình chứa mang tên Roy Alphard quyết chả thể nào chịu đựng nổi sự vận hành từ linh hồn vượt ngoài quy chuẩn thông thường mang tên Reid Astrea."
  },
  {
    "en": "Its failure materialised in the final phase of the battle against Julius.",
    "vi": "Sự đổ vỡ của nó đã hiện hữu rõ ràng ngay trong giai đoạn quyết định cuối cùng của trận chiến chống lại Julius."
  },
  {
    "en": "Julius: \"Then, I'd much rather if you might as well!\"",
    "vi": "Julius: “Nếu vậy, thà rằng ngài hãy dùng toàn bộ sức mạnh để chiến đấu đi chứ!”"
  },
  {
    "en": "Reid: \"Well, if I didn't get eaten by this guy, I may've punctually gone at it till the end. In that case, it would've ended at the point you felled the eye patch after all, ya know?\"",
    "vi": "Reid: “Ồ, nếu ta chả bị cái thằng nhóc này ăn thịt, thì dứt định ta đã có thể tiếp tục chiến đấu sòng phẳng đến tận phút cuối cùng rồi lị. Trong trường hợp đó, trận đấu dẫu đã kết thúc ngay vào thời điểm ngươi chém rụng tấm băng bịt mắt của ta rồi lị, biết chưa hả?”"
  },
  {
    "en": "Julius: \"Kh......\"",
    "vi": "Julius: “Ư......”"
  },
  {
    "en": "Reid: \"Kahaha. Everythin' ain't gonna go the way ya want, for weak folks. Do ya wanna cry now?\"",
    "vi": "Reid: “Kahaha. Mọi chuyện quyết chả bao giờ diễn ra theo ý muốn của mấy kẻ yếu đuối đâu lị. Giờ thì ngươi đã muốn khóc lóc chưa hả?”"
  },
  {
    "en": "Tossing the stipulated sword aside, Reid mean-spiritedly laughed whilst revealing his teeth.",
    "vi": "Vứt phăng thanh kiếm quy định sang một bên, Reid nở nụ cười đầy ác ý trong khi để lộ những chiếc răng nanh."
  },
  {
    "en": "How come, could he laugh that way. As is, his disappearance now was a future set in stone.",
    "vi": "Tại sao lão lại có thể cười một cách thoải mái như vậy được chứ. Trong tình cảnh này, sự tan biến của lão lúc này dẫu là một tương lai đã được định sẵn trên đá."
  },
  {
    "en": "Instead, had he defeated Julius, he may have possibly been able once again walk his lifeline which had terminated once. Even though he had let that possibility slip through his hands.",
    "vi": "Trái lại, nếu lão đánh bại Julius, lão có lẽ dứt định đã có thể một lần nữa bước đi trên dòng đời vốn dĩ đã chấm dứt một lần của mình. Mặc dù lão đã để cơ hội ngàn năm có một ấy tuột khỏi tay."
  },
  {
    "en": "Reid: \"Are ya a fool, you. Somethin' like livin' once 'gain, who the hell's gonna do somethin' that troublesome. First of all, the hell's gonna happen if I run into me somewhere, aye.\"",
    "vi": "Reid: “Bộ ngươi bị ngốc hả, ngươi kia. Cái chuyện hồi sinh sống lại một lần nữa ấy, thằng quái nào thèm làm cái việc phiền phức phiền hà dường ấy chứ lị. Trước hết, chuyện gì sẽ xảy ra nếu ta đột nhiên chạm mặt chính mình ở xó xỉnh nào đó hả lị.”"
  },
  {
    "en": "......I'm sorry to say, but you have already passed away due to old age multiple centuries ago. Even if your present self were to walk around, for your former self that would be.",
    "vi": "Julius: “......Tôi xin lỗi vì phải nói điều này, nhưng ngài vốn dĩ đã qua đời vì tuổi già từ nhiều thế kỷ trước rồi. Ngay cả khi bản ngã hiện tại của ngài có đi lại xung quanh, thì đối với bản ngã trong quá khứ của ngài dẫu là...”"
  },
  {
    "en": "Reid: \"Hah! Then, are ya worshippin' the mug of my kid's kid who's like an outsider or somethin'? Bullshit.\"",
    "vi": "Reid: “Hử! Thế thì, bộ ngươi đang thờ phụng cái bản mặt của đứa cháu chắt chút chít vốn chẳng khác nào người dưng nước lã của ta đấy hả? Nhảm nhí thối hoắc lị.”"
  },
  {
    "en": "Treating his own descendants as outsiders, his recent remark seemed to be his true sentiments.",
    "vi": "Coi chính hậu duệ ruột thịt của mình như người dưng nước lã, lời nhận xét vừa rồi dường như chính là tâm tình thành thật của lão."
  },
  {
    "en": "Appearing to earnestly not possess any interest in a second lifeline, Reid crackled the bones of his neck.",
    "vi": "Tỏ ra thực sự quyết chả màng chút hứng thú nào đối với cuộc sống thứ hai, Reid bẻ cổ kêu răng rắc."
  },
  {
    "en": "Reid: \"First of all, the hell're ya tellin' me to do after comin' back to life, hey you. Like, playin' 'round with the fiercely frizzlin' who passed by earlier, though the hottie over there's pretty nice too. Then there's also that woman with an erotic look......\"",
    "vi": "Reid: “Trước hết, ngươi bảo ta phải làm cái quái gì sau khi sống lại hả, tên nhóc kia. Chẳng hạn như, đùa giỡn với con bé nóng nảy xù lông vừa đi ngang qua lúc nãy, dù mỹ nhân đằng kia dẫu khá là tuyệt đấy lị. Rồi còn cả người phụ nữ có vẻ ngoài gợi cảm quyến rũ kia nữa......”"
  },
  {
    "en": "Julius: \"Oh, so do you truly possess no lingering attachment......?\"",
    "vi": "Julius: “Ồ, vậy là ngài thực sự quyết chả còn chút luyến tiếc hay vương vấn nào sao......?”"
  },
  {
    "en": "Reid: \"Nah damn it. Doin' what I wanna do when I think I wanna do it 's my style. You too, would've it much easier should ya do that.\"",
    "vi": "Reid: “Chả có vương vấn gì sất lị, khốn kiếp thật chứ. Thích làm gì thì làm ngay khi nảy ra ý nghĩ đó mới chính là phong cách của ta lị. Ngươi dẫu thế, đáng lẽ mọi chuyện đã dễ dàng hơn nhiều nếu biết sống như vậy rồi lị.”"
  },
  {
    "en": "Julius: \"......My gratitude for the advice. However, that would instead be much more of a thorny path for me.\"",
    "vi": "Julius: “......Tôi vô cùng biết ơn lời khuyên chân thành của ngài. Tuy nhiên, con đường ấy trái lại dứt định sẽ là một lối đi đầy chông gai đối với tôi.”"
  },
  {
    "en": "His self, chose to willingly wear the shell.",
    "vi": "Bản thân anh, đã tự nguyện lựa chọn khoác lên mình lớp vỏ bọc này."
  },
  {
    "en": "Deceiving himself, or acting as though a part of his foundation was a separate article, would also be apt labels.",
    "vi": "Tự lừa dối bản thân, hay hành xử như thể một phần nền tảng của mình là một thứ hoàn toàn tách biệt, dẫu là những cách gọi phù hợp."
  },
  {
    "en": "Having realised that choice was befitting of his self, that it aligned with his wishes, even if Julius perceived Reid's extravagance to be dazzling, he shan't opt for it.",
    "vi": "Nhận ra rằng lựa chọn ấy hoàn toàn phù hợp với bản ngã của mình, rằng nó đồng điệu với mong muốn sâu thẳm của anh, ngay cả khi Julius cảm thấy phong cách sống phóng khoáng ngông cuồng của Reid thật lộng lẫy chói mắt, anh vẫn quyết không lựa chọn nó."
  },
  {
    "en": "Hearing that response of Julius', Reid snorted his nose in annoyance.",
    "vi": "Ngề thấy câu trả lời kiên định ấy của Julius, Reid khịt mũi đầy vẻ bực dọc tức tối."
  },
  {
    "en": "Subsequently, the wound on his chestーー the crevices born as a result of transcending bounds, the solitary wound differing from those, he touched with his fingers,",
    "vi": "Sau đó, vết thương trên ngực lão—— những khe nứt sinh ra do việc vượt quá giới hạn thể xác, vết thương duy nhất khác biệt hoàn toàn với những vết nứt kia, lão khẽ chạm ngón tay vào nó,"
  },
  {
    "en": "Reid: \"You, don'tcha misunderstand 'kay? Yer sword reachin' was a fluke. Had this been my body, somethin' like you wouldn't even be left able to rub snot onto others.\"",
    "vi": "Reid: “Ngươi ấy, đừng có mà hiểu lầm đấy lị biết chưa hả? Nhát kiếm của ngươi chạm tới ta dứt định chỉ là ăn may mà thôi lị. Nếu đây vốn là thể xác thực sự của ta, loại như ngươi quyết chả còn cửa để mà lau mũi cho người khác đâu lị.”"
  },
  {
    "en": "Julius: \"I would not do such a thing in the first place, though......\"",
    "vi": "Julius: “Dù sao thì ngay từ đầu tôi quyết chả làm cái việc kỳ quặc đó đâu......”"
  },
  {
    "en": "Reid: \"Hah! How borin'!\"",
    "vi": "Reid: “Hả! Thật là tẻ nhạt phiền phức quá đi lị!”"
  },
  {
    "en": "Spitting out, Reid knocked Julius' shoulder with the hand he had touched his chest with.",
    "vi": "Khạc một phát, Reid dùng bàn tay vừa chạm vào ngực đập mạnh lên vai Julius."
  },
  {
    "en": "Whilst stiffening his body upon that impact, Julius took in a deep inhale.",
    "vi": "Trong khi cơ thể cứng đờ ra vì cú đập mạnh mẽ ấy, Julius khẽ hít một hơi thật sâu."
  },
  {
    "en": "Not yet, had he accepted or reacted to everything.",
    "vi": "Quyết chả phải anh đã hoàn toàn chấp nhận hay phản ứng kịp trước thảy mọi việc vừa xảy ra."
  },
  {
    "en": "However, he deemed letting these moments free by merely losing his presence of mind upon the occurrences before his eyes and experiencing turmoil, to be far more unendurable.",
    "vi": "Thế nhưng, anh cho rằng việc để những khoảnh khắc quý giá này trôi qua lãng phí chỉ vì mất bình tĩnh trước những sự việc trước mắt và rơi vào trạng thái hỗn loạn, dứt định là điều khó dung thứ hơn nhiều."
  },
  {
    "en": "The crevices dilated, the end was already visible.",
    "vi": "Những vết rạn nứt ngày càng mở rộng ra kịch liệt, hồi kết dứt định đã hiện hữu trước mắt."
  },
  {
    "en": "Hence, Julius hoisted his own knight sword he had unsheathed, before his visageーー,",
    "vi": "Chính vì vậy, Julius nâng cao thanh kiếm hiệp sĩ đã tuốt vỏ của mình lên ngay trước mặt——,"
  },
  {
    "en": "From the bottom of my heart, I revere your sword power.",
    "vi": "Julius: “Từ tận đáy lòng mình, tôi vô cùng tôn kính kiếm đạo vĩ đại của ngài.”"
  },
  {
    "en": "Reid: \"I ain't needin' a bastard's admiration. ーーI take my leave with my victory, Julius.\"",
    "vi": "Reid: “Ta quyết chả cần sự ngưỡng mộ của một tên khốn như ngươi lị. ——Ta sẽ ra đi cùng với chiến thắng của riêng ta, Julius.”"
  },
  {
    "en": "Julius: \"ーーーー\"",
    "vi": "Julius: “————”"
  },
  {
    "en": "With his name vocalised in his final pronouncements, Julius gazed in wonder.",
    "vi": "Trước cái tên của mình được cất lên trong những lời tuyên bố cuối cùng của lão, Julius trừng mắt kinh ngạc sững sờ."
  },
  {
    "en": "However, as per the resolve in his heart to not be flustered, he concealed that astonishment behind a smile, and bowed.",
    "vi": "Thế nhưng, tuân theo quyết tâm sắt đá trong lòng quyết không được dao động, anh khéo léo che giấu sự kinh ngạc ấy sau một nụ cười nhã nhặn, và cúi chào cung kính."
  },
  {
    "en": "Just as he had confidently named himself, before this legendary being, as the utmost finest knight.",
    "vi": "Đúng như dáng vẻ anh đã tự tin xưng tên trước thực thể huyền thoại kiếm đạo này, tự xưng tụng bản thân như vị hiệp sĩ ưu tú nhất."
  },
  {
    "en": "Just as the ideals of Julius Juukulius, were moulded to not bring shame to his admiration.",
    "vi": "Đúng như những lý tưởng của Julius Juukulius, được mài giũa tỉ mỉ để quyết không đem lại nỗi xấu hổ cho sự ngưỡng mộ của chính mình."
  },
  {
    "en": "Julius: \"Yes, until the very end. ーーIt is your victory, Reid Astrea.\"",
    "vi": "Julius: “Phải, cho đến phút cuối cùng. ——Đó dứt định là chiến thắng của ngài, Reid Astrea.”"
  },
  {
    "en": "Reid: \"Hah, now that's a nice face, damn dejected loser.\"",
    "vi": "Reid: “Hả, giờ thì dải cực quang ấy có cái bản mặt được đấy lị, gã thất bại thảm hại đáng thương kia.”"
  },
  {
    "en": "With those words marking the end, the crevices of Reid Astrea dilatedーー,",
    "vi": "Với những từ ngữ đánh dấu hồi kết ấy, những vết rạn nứt trên người Reid Astrea vỡ toác ra dữ dội——,"
  },
  {
    "en": "△▼△▼△▼△",
    "vi": "△▼△▼△▼△"
  },
  {
    "en": "???: \"ーーーー\"",
    "vi": "???: “————”"
  },
  {
    "en": "Unlike their visual impression, the crevices which dilated until the very end, were not accompanied by sound.",
    "vi": "Khác hoàn toàn với ấn tượng thị giác sống động, những vết rạn nứt mở rộng ra kịch liệt cho đến phút cuối cùng quyết chả hề kèm theo bất kỳ âm thanh nào sất."
  },
  {
    "en": "Unlike the shattering of glass, the great man of red hair was extirpated like diminishing lightーー in his stead, collapsed onto the clear floor was a young boy of a petite build, with distended cold eyes.",
    "vi": "Quyết chả phải sự đổ vỡ tan tành của thủy tinh, vĩ nhân hộ pháp với mái tóc đỏ rực rỡ đã hoàn toàn biến mất như một ánh sáng lịm dần—— thay thế vào vị trí đó, ngã gục xuống mặt sàn trong suốt chính là một cậu nhóc với vóc dáng nhỏ nhắn, đôi mắt lạnh lùng trợn trừng."
  },
  {
    "en": "One who ate the『Memories』and『Names』of others and handled them per his will,『Bizarre Eating』and a blasphemer.",
    "vi": "Kẻ chuyên ăn ngấu nghiến 『Ký Ức』 và 『Danh Tánh』 của người khác rồi thao túng chúng theo ý muốn của bản thân, 『Bạo Thực』 và là kẻ báng bổ đức tin thiêng liêng."
  },
  {
    "en": "The Sin Archbishop of『Gluttony』, Roy Alphard had collapsed, scuppered.",
    "vi": "Đại Giám Mục Tội Lỗi của 『Phàm Ăn』, Roy Alphard đã hoàn toàn sụp đổ, bại trận thảm hại."
  },
  {
    "en": "Roy: \"ーーーー\"",
    "vi": "Roy: “————”"
  },
  {
    "en": "Indistinct whether he was alive or dead,『Gluttony』remained immobile with not a single twitch.",
    "vi": "Chả rõ liệu hắn còn sống hay đã chết, tên 『Phàm Ăn』 vẫn nằm im bất động quyết chả hề co giật lấy một cái."
  },
  {
    "en": "However, identical to Reid, he merely had the deep gash on the left side of his chest, its fatality incontestable.",
    "vi": "Tuy nhiên, giống hệt với Reid trước đó, hắn chỉ sở hữu một vết thương sâu hoắm ở bên ngực trái, tính mạng nguy kịch quyết chả thể bàn cãi."
  },
  {
    "en": "Ascertaining merely so with his eyes, Julius lowered the knight sword he had hoisted as a demonstration of honour, sheathing it into the scabbard he wielded, and turned backward.",
    "vi": "Chỉ kiểm chứng sơ bộ bằng mắt như thế, Julius từ từ hạ thanh kiếm hiệp sĩ mà anh đã giơ cao như biểu tượng tôn kính danh dự xuống, tra nó vào bao kiếm bên hông, rồi quay người lại phía sau."
  },
  {
    "en": "The aurora unfettered, in Julius' environs were six Spirits with augmented brilliance.",
    "vi": "Dải cực quang được giải phóng hoàn toàn, xung quanh Julius là sáu Tinh linh đang tỏa ra ánh hào quang rực rỡ phi thường."
  },
  {
    "en": "Without the strength of these girls, who had bloomed into maidens from buds, the one to be lying on the clear floor this way surely would have been his self, rather than the opponent.",
    "vi": "Nếu chả nhờ sức mạnh vĩ đại của những cô gái này, những người đã bung nở thành thiếu nữ kiều diễm từ những nụ hoa ban đầu, kẻ đang phải nằm đo sàn trên mặt sàn trong suốt này chắc chắn dứt định phải là bản thân anh, chứ quyết không phải là đối thủ."
  },
  {
    "en": "For that, he must convey his gratitude and appreciation conscientiously.",
    "vi": "Vì lẽ đó, anh dứt định phải gửi lời cảm ơn và trân trọng sâu sắc tới họ một cách thật chân thành."
  },
  {
    "en": "However, with apologies to those girls, he must defer that demonstration of gratitude.",
    "vi": "Tuy nhiên, thầm xin lỗi các cô gái ấy, anh buộc phải hoãn lại việc bày tỏ lòng biết ơn vào lúc này."
  },
  {
    "en": "Steadily, Julius advanced.",
    "vi": "Julius vững bước điềm tĩnh tiến lên phía trước."
  },
  {
    "en": "Ahead in the direction he was headed, intently watching Julius was a gorgeous, slender, petite female with pale cerulean eyes. Undulating light purple hair, the personage adorned with a white outfit unfitting for the sand dunes.",
    "vi": "Phía trước hướng anh đang đi tới, đang đăm đăm nhìn theo Julius chính là một cô gái kiều diễm, mảnh mai, nhỏ nhắn với đôi mắt màu xanh lam nhạt tròn xoe. Mái tóc màu tím nhạt bồng bềnh, dải lụa trắng khoác lên mình bộ trang phục màu trắng tinh khôi quyết chả hề phù hợp với cồn cát sa mạc hoang vu."
  },
  {
    "en": "By her feet, was a white fox, with the pupils of its eyes wavering in suspense.",
    "vi": "Ngay dưới chân cô, là một con cáo trắng tuyết, với đồng tử mắt đang dao động trong sự lo lắng ngập ngừng."
  },
  {
    "en": "The form of her, who had always been miming as a scarf, the significance of its presence there.",
    "vi": "Dáng hình của cô ấy, người bấy lâu nay vẫn luôn đóng vai như một chiếc khăn quàng cổ ấm áp, ý nghĩa của sự hiện diện của cô ấy tại nơi này."
  },
  {
    "en": "Once again letting himself be aware of that, Julius closed his eyes.",
    "vi": "Một lần nữa tự ý thức sâu sắc về điều đó, Julius khẽ nhắm hai mắt lại."
  },
  {
    "en": "Andーー,",
    "vi": "Và rồi——,"
  },
  {
    "en": "Julius: \"ーーPleased to meet you.\"",
    "vi": "Julius: “——Rất vui được gặp tiểu thư.”"
  },
  {
    "en": "The statement he had conveyed to the『Sword Saint』as a challenger heretofore, he expressed once again.",
    "vi": "Lời tuyên bố anh đã gửi tới 『Kiếm Thánh』 với tư cách là một kẻ thách đấu trước đó, lúc này anh lại cất lên một lần nữa."
  },
  {
    "en": "But, the sensation deep within his chest in these moments, differed from the enhancement preceding battling.",
    "vi": "Thế nhưng, cảm giác dâng trào tận sâu trong lồng ngực anh vào những khoảnh khắc này, khác biệt hoàn toàn với sự hưng phấn cường hóa trước trận quyết chiến."
  },
  {
    "en": "However, there also existed something, which remained the same.",
    "vi": "Tuy nhiên, dẫu có một thứ quyết chả hề đổi thay."
  },
  {
    "en": "As though the opening of a new page in a tale of adventure, the adventurous heart of a youth yearning for the knight.",
    "vi": "Tựa như việc lật mở một trang mới trong cuốn truyện kỳ ảo phiêu lưu, trái tim khao khát khám phá của một thiếu niên hằng mơ ước trở thành hiệp sĩ."
  },
  {
    "en": "???: \"I am.\"",
    "vi": "???: “Tôi dẫu là...”"
  },
  {
    "en": "Kneeling at that spot, Julius articulated the first words and the other person responded.",
    "vi": "Quỳ rạp xuống vị trí đó, Julius cất lên những lời nói đầu tiên và người đối diện đã cất tiếng phản hồi."
  },
  {
    "en": "His stance remaining lowered, Julius awaited the upcoming words. He reckoned, he could wait for however long a duration.",
    "vi": "Tư thế vẫn giữ quỳ phục cung kính, Julius lặng lẽ chờ đợi những từ ngữ tiếp theo. Anh tự nhủ, mình dứt định có thể chờ đợi cho dù có bao lâu đi chăng nữa."
  },
  {
    "en": "What felicity this was, to have faith that should he wait, he would assuredly hear her words.",
    "vi": "Một niềm hạnh phúc tột cùng biết bao, khi có một niềm tin sắt đá rằng chỉ cần mình kiên nhẫn chờ đợi, anh dứt định sẽ nghe thấy những lời nói thiêng liêng từ cô."
  },
  {
    "en": "Anastasia: \"ーーI am, Anastasia Hoshin.\"",
    "vi": "Anastasia: “——Tôi dẫu là, Anastasia Hoshin đấy lị.”"
  },
  {
    "en": "Julius: \"ーーーー\"",
    "vi": "Julius: “————”"
  },
  {
    "en": "Anastasia: \"I, want everythin' in this world...... So, great n' cool onii-san, what's yer name?\"",
    "vi": "Anastasia: “Tôi dẫu muốn có thảy mọi thứ trên thế gian này...... Thế nên, vị kỵ sĩ ưu tú và ngầu lòi này ơi, tên anh là gì thế lị?”"
  },
  {
    "en": "With elegance, she smiled, and he could perceive exactly how she must have tilted her head afterwards.",
    "vi": "Bằng phong thái tao nhã, cô mỉm cười, và anh dẫu có thể cảm nhận chuẩn xác cách cô nghiêng đầu sau đó."
  },
  {
    "en": "Remaining knelt down and his face lowered and concealed, saying \"Ha\" Julius took a short inhale, and,",
    "vi": "Vẫn quỳ rạp dưới sàn và gương mặt cúi thấp che giấu biểu cảm, Julius thốt lên tiếng “Ha” và khẽ hít vào một hơi ngắn, rồi,"
  },
  {
    "en": "Julius: \"I am Julius Juukulius. ーーYour, one and only knight.\"",
    "vi": "Julius: “Tôi là Julius Juukulius. ——Kỵ sĩ duy nhất và độc nhất của tiểu thư.”"
  },
  {
    "en": "Anastasia: \"ーーーー\"",
    "vi": "Anastasia: “————”"
  },
  {
    "en": "Julius: \"You may have forgotten. However, I am one who has devoted the sword to you. One who dedicates the entirety of his strength for you, and aids your will.\"",
    "vi": "Julius: “Có thể tiểu thư đã lãng quên. Tuy nhiên, tôi chính là kẻ đã dâng hiến trọn vẹn thanh kiếm hiệp sĩ này cho người. Một kẻ nguyện tận hiến toàn bộ thực lực vì người, và phò tá ý chí cao quý của người.”"
  },
  {
    "en": "A respectful bow with the knight sword placed on the floor, forbye, Julius at last raised his countenance.",
    "vi": "Một cái cúi chào đầy tôn kính với thanh kiếm hiệp sĩ được đặt ngay ngắn trên mặt sàn, hơn thế nữa, Julius cuối cùng dẫu ngẩng cao gương mặt của mình lên."
  },
  {
    "en": "Before him, no matter what gaze should his lord have, he shan't regret.",
    "vi": "Đứng trước mặt anh, dẫu cho vị chủ nhân của anh có ánh mắt thế nào đi chăng nữa, anh quyết chả bao giờ hối hận."
  },
  {
    "en": "It is unbefitting of a knight, to lose his presence of mind, be confounded, face downward.",
    "vi": "Thật quyết không phù hợp với tư cách của một vị hiệp sĩ nếu lại đánh mất sự bình tĩnh điềm đạm, rồi cúi gầm mặt xuống."
  },
  {
    "en": "For the very existence who put up appearances the utmost, and sought to possess a cool and charming air, was whom Julius admired and yearned for.",
    "vi": "Bởi lẽ chính sự hiện diện của một kẻ cố gắng chăm chút cho vẻ ngoài nhất, và tìm kiếm một phong thái ngầu và kiều diễm nhất, mới là người mà Julius hằng ngưỡng mộ và khao khát."
  },
  {
    "en": "And looking down upon that Julius, the young girl narrowed her spherical eyes,",
    "vi": "Nhìn xuống một Julius đang quỳ rạp kính cẩn dường ấy, cô gái trẻ khẽ nheo đôi mắt tròn xoe của mình lại,"
  },
  {
    "en": "Anastasia: \"Really? I don't remember though...... but.\"",
    "vi": "Anastasia: “Thật ư? Tôi dẫu quyết chả nhớ gì cả...... thế nhưng.”"
  },
  {
    "en": "Julius: \"ーーーー\"",
    "vi": "Julius: “————”"
  },
  {
    "en": "Anastasia: \"At the first glance, I thought. ーーThat I gotta make this onii-san mine.\"",
    "vi": "Anastasia: “Ngay từ cái nhìn đầu tiên, tôi đã thầm nghĩ. ——Rằng tôi dứt định dẫu phải thu phục biến vị kỵ sĩ này thành của riêng tôi mà thôi lị.”"
  },
  {
    "en": "At such proximity, were the blazing, sparkling eyes of his eternally craving lord, revealing the intent to not relinquish anything and everything.",
    "vi": "Tại khoảng cách cự ly cực gần dường ấy, chính là đôi mắt lấp lánh rực cháy của vị chủ nhân vĩnh hằng đầy tham vọng, để lộ rõ mưu đồ quyết chả bao giờ chịu buông bỏ bất kỳ thứ gì và mọi thứ trên đời."
  },
  {
    "en": "To the『Greed』seeking to obtain everything, Julius Juukulius devoted his sword once again.",
    "vi": "Hướng về phía vị 『Tham Lam』 đang khao khát đoạt lấy thảy mọi thứ trên thế gian, Julius Juukulius dứt khoát hiến dâng thanh kiếm kỵ sĩ của mình một lần nữa."
  },
  {
    "en": "A sublime play, like the tale of a lord and knight in fictionーー,",
    "vi": "Một vở kịch lộng lẫy tuyệt mỹ, tựa như câu chuyện truyền kỳ về minh quân và trung thần trong bầy tiểu tưởng viễn tưởng——,"
  },
  {
    "en": "The restoration of the plundered bond of『Lord and Retainer』, was realized in the second layer of『Electra』.",
    "vi": "Sự khôi phục tái sinh của sợi dây liên kết quân thần vốn bị cướp đoạt tàn nhẫn, dẫu được hiện thực hóa trọn vẹn tại tầng thứ hai 『Electra』."
  },
  {
    "en": "That was, the accomplishment of eliminating one of the five obstacles set forth by Natsuki Subaru.",
    "vi": "Đó chính là thành tựu vinh quang xóa sổ hoàn toàn một trong số năm trở ngại hiểm nghèo do Natsuki Subaru đề ra."
  },
  {
    "en": "Great Library Pleiádes, the second『Trial』ーー hereby concludes.",
    "vi": "Thư Viện Vĩ Đại Pleiades, 『Thử Thách』 thứ hai——chính thức kết thúc tại đây."
  }
]

fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'translation_temp', 'ch85_part3.json'),
  JSON.stringify(part3, null, 2),
  'utf-8'
)
console.log('Successfully wrote ch85_part3.json!')
