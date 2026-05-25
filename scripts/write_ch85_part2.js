import fs from 'fs'
import path from 'path'

const part2 = [
  {
    "en": "The radiance of the emitted rainbow, sweeped a conquering white world towards Reid.",
    "vi": "Ánh sáng lộng lẫy của cầu vồng được phóng ra, quét qua một thế giới trắng xóa đầy uy lực về phía Reid."
  },
  {
    "en": "△▼△▼△▼△",
    "vi": "△▼△▼△▼△"
  },
  {
    "en": "Julius himself widened his eyes as well, upon the emitted aurora's span and might.",
    "vi": "Chính Julius dẫu cũng phải mở to mắt kinh ngạc trước quy mô và uy lực phi thường của dải cực quang vừa phát ra."
  },
  {
    "en": "As of now, that was maximal spirit arts transformed to a magic of extraordinary scope, with it being treated the same as before now inviting discourtesyーー,",
    "vi": "Cho đến thời điểm hiện tại, đó là tinh linh thuật tối thượng được chuyển hóa thành một ma pháp có phạm vi phi thường, việc đối xử với nó như trước đây chẳng khác nào một sự bất kính tột cùng——,"
  },
  {
    "en": "'ーーーー'",
    "vi": "“————”"
  },
  {
    "en": "Budsーー no, he shall not refer to those girls, who had verbatim made their occluded gift and talent bloom, as buds.",
    "vi": "Những nụ hoa—— không, anh sẽ quyết không gọi những cô gái ấy, những người đã thực sự làm bung nở tài năng và thiên phú bị che giấu của họ, là những nụ hoa nữa."
  },
  {
    "en": "Those girls, who had achieved growth capable of being perceived as sublime, with beauty, with charm, with heroism, with dignity, vividly, were not buds but maidens.",
    "vi": "Những cô gái ấy, những người đã đạt đến sự trưởng thành có thể coi là cao quý tuyệt vời, với vẻ đẹp, sự kiều diễm, lòng quả cảm, sự tôn nghiêm đầy sống động, quyết không phải là những nụ hoa mà là những thiếu nữ thực thụ."
  },
  {
    "en": "To monopolize those girls entirely to himself, as all six of them exhibited their respective glamour, may have made him a sinner greater than the Sin Archbishops.",
    "vi": "Việc độc chiếm hoàn toàn những thiếu nữ ấy cho riêng mình, khi cả sáu người họ đều phô diễn vẻ quyến rũ riêng biệt của bản thân, có lẽ đã biến anh thành một kẻ tội đồ lớn hơn cả những Đại Giám Mục Tội Lỗi."
  },
  {
    "en": "Howeverーー,",
    "vi": "Thế nhưng——,"
  },
  {
    "en": "Julius: \"Even if you all forget me, I love you all.\"",
    "vi": "Julius: “Dẫu cho tất cả các em có lãng quên tôi đi chăng nữa, tôi vẫn yêu các em vô cùng.”"
  },
  {
    "en": "As though to catch up with the emitted aurora, Julius stepped ahead.",
    "vi": "Như thể muốn bắt kịp dải cực quang vừa được phóng ra, Julius bước những bước dài về phía trước."
  },
  {
    "en": "The radiance of rainbow clad in six elements, broke through all shields and shattered the target. Hence, before the rainbow-coloured light, the options left for the opponent were merely twoーー to take up the gauntlet, or to evade.",
    "vi": "Ánh hào quang của cầu vồng khoác lên mình sáu nguyên tố, phá tan mọi tấm khiên bảo vệ và nghiền nát mục tiêu hoàn toàn. Vì vậy, trước ánh sáng ngũ sắc ấy, sự lựa chọn còn lại cho đối thủ chỉ có hai—— hoặc là đối đầu trực diện, hoặc là né tránh."
  },
  {
    "en": "Reid: \"ーーHah.\"",
    "vi": "Reid: “——Hừ.”"
  },
  {
    "en": "And in accordance with his personality, Reid Astrea shan't dodge the radiance of rainbow.",
    "vi": "Và đúng như tính cách của lão, Reid Astrea quyết không thèm né tránh ánh hào quang cầu vồng."
  },
  {
    "en": "Responding to the radiance of rainbow surging forward in front, Reid raised his burly arms and slashed down the sharp edge of the imperial stipulated sword he was gripping to.",
    "vi": "Đáp lại ánh hào quang cầu vồng đang cuồn cuộn dâng trào trước mặt, Reid giơ đôi cánh tay vạm vỡ của mình lên và chém mạnh lưỡi kiếm sắc bén của thanh kiếm quy định mà lão đang nắm chặt."
  },
  {
    "en": "With no reliance on special magic or Divine Protections, a『Sword Move』named as pure violenceーー in a sole swing, that was what expunged the maximal magic Julius had fired with all of his might.",
    "vi": "Quyết chẳng cần cậy dựa vào ma pháp đặc biệt hay Gia Hộ nào, một 『Kiếm Chiêu』 được mệnh danh là bạo lực thuần túy—— chỉ trong một cú vung duy nhất, đó dẫu là thứ đã xóa sạch ma pháp tối thượng mà Julius đã dốc toàn lực bắn ra."
  },
  {
    "en": "However, that too had been factored in by Julius, as he paced ahead.",
    "vi": "Thế nhưng, điều đó dẫu cũng đã được Julius tính toán trước khi anh tiến lên phía trước."
  },
  {
    "en": "Vaulting ahead from the rear of the expunged aurora, Julius borrowed the strength of his sword, and his maidens.",
    "vi": "Lao vút ra từ phía sau dải cực quang vừa bị dập tắt, Julius mượn lấy sức mạnh của thanh kiếm hiệp sĩ, và cả những thiếu nữ của mình nữa."
  },
  {
    "en": "Julius: \"Ia! Aro!\"",
    "vi": "Julius: “Ia! Aro!”"
  },
  {
    "en": "Upon that instant, the red and green Spirits responded to the call and unified their strength, the wind formed a whirlpool around the blazing flame, generating a tornado of incandescence at Reid's feet.",
    "vi": "Ngay khoảnh khắc ấy, Tinh linh sắc đỏ và sắc lục lập tức đáp lại lời gọi và hợp nhất sức mạnh của họ, gió tạo thành một vũng xoáy dữ dội bao quanh ngọn lửa rực cháy, tạo nên một cơn bão lửa rực hồng ngay dưới chân Reid."
  },
  {
    "en": "Sensing the coil of the heat wave underneath, Reid nimbly escaped upwards before being scorched.",
    "vi": "Cảm nhận được làn sóng nhiệt cuộn trào bên dưới, Reid nhanh nhẹn phóng người lên trên trước khi bị thiêu rụi."
  },
  {
    "en": "However, only now did the linkage of the Spirit Knight, of the『Greatest Knight』, commence.",
    "vi": "Tuy nhiên, chỉ đến lúc này, chuỗi phối hợp của Tinh Linh Hiệp Sĩ, của 『Kỵ Sĩ Ưu Tú Nhất』, mới thực sự bắt đầu."
  },
  {
    "en": "Julius: \"Kua! Ik!\"",
    "vi": "Julius: “Kua! Ik!”"
  },
  {
    "en": "The yellow Spirit yielded a protuberance on the clear floor, propelling Julius' frame further upward. Simultaneously, the glow of the blue Spirit glaciated the moisture in the air, hindering Reid's ascent, who had jumped upwards.",
    "vi": "Tinh linh sắc vàng tạo ra một khối nhô lên trên mặt sàn trong suốt, đẩy cơ thể Julius bay cao hơn nữa. Đồng thời, ánh hào quang của Tinh linh sắc lam lập tức đóng băng hơi ẩm trong không khí, cản trở bước nhảy vút lên của Reid."
  },
  {
    "en": "Clicking his tongue, Reid inverted his stance through an evidently beyond human deed of stomping the air, and stationed his legs onto the ceiling of ice generated midair, scowling at Julius whilst upside down.",
    "vi": "Chặc lưỡi một cái, Reid lật ngược tư thế của mình thông qua một hành động phi thường vượt trội cả con người bằng cách dậm mạnh chân vào không trung, lão đặt chân lên trần băng vừa được tạo ra giữa không trung, trừng mắt nhìn Julius trong tư thế lộn ngược đầu xuống."
  },
  {
    "en": "Firm strength poured into Reid's arm, and an interception aimed for the ascending Juliusーー,",
    "vi": "Sức mạnh vững chãi dồn vào cánh tay Reid, một đòn chặn đứng nhắm thẳng vào Julius đang bay lên——,"
  },
  {
    "en": "Julius: \"In! Ness!\"",
    "vi": "Julius: “In! Ness!”"
  },
  {
    "en": "In the juncture wherein the『Sword Saint's』counterattack drew near him, the white and black Spirits intermeddled with the world with their respective powers.",
    "vi": "Tại thời điểm đòn phản công của 『Kiếm Thánh』 ập sát gần anh, Tinh linh sắc bạch và sắc hắc lập tức can thiệp vào thế giới bằng sức mạnh tương ứng của họ."
  },
  {
    "en": "The white light bestowed strength upon the entirety of Julius' build, the black light weakened the might of Julius' enemy however meagrely. The paltry differentiation born in those moments, was a central figure in the immediately following outcome.",
    "vi": "Ánh sáng trắng ban tặng sức mạnh cho toàn bộ cơ thể Julius, ánh sáng đen làm suy giảm uy lực của đối thủ dù chỉ là một chút ít ỏi. Sự khác biệt vô cùng nhỏ bé được sinh ra trong những khoảnh khắc ấy, chính là nhân tố cốt lõi quyết định kết quả ngay sau đó."
  },
  {
    "en": "Reid: \"ーーーー\"",
    "vi": "Reid: “————”"
  },
  {
    "en": "With the ice ceiling turned foothold shattering to fragments, Reid's hurled form blurred due to his velocity.",
    "vi": "Với trần băng vốn là điểm tựa vỡ tan thành từng mảnh vụn, cơ thể Reid phóng đi mờ ảo do tốc độ kinh hoàng."
  },
  {
    "en": "The artless stance of the stipulated sword, launched a certain type of a lengthwise and crosswise stab of the ultimate kindーー sensing it not as a menace, Julius held his chest steady and confronted it.",
    "vi": "Tư thế mộc mạc của thanh kiếm quy định, phóng ra một đường đâm dọc ngang tối thượng tuyệt luân—— quyết chả cảm thấy đó là mối đe dọa, Julius giữ vững lồng ngực và dũng cảm đối mặt."
  },
  {
    "en": "The withstanding truth was that upon the crossing of a sword slash and a sword slash, the stronger side repelled the other.",
    "vi": "Sự thật không thể chối cãi là khi hai nhát chém va chạm kịch liệt, bên nào mạnh hơn sẽ đẩy lùi bên còn lại."
  },
  {
    "en": "Thus, Julius opened his eyes. ーーThe eyes which had continually, perpetually watched that which proceeded upwards, proceeded forwards.",
    "vi": "Chính vì lẽ đó, Julius mở to mắt. ——Đôi mắt đã liên tục, vĩnh viễn quan sát kẻ luôn hướng lên cao, hướng về phía trước."
  },
  {
    "en": "Julius: \"ーーーー\"",
    "vi": "Julius: “————”"
  },
  {
    "en": "Killing the very concept of sound and light, Reid's flash cleaved space.",
    "vi": "Triệt tiêu hoàn toàn khái niệm về âm thanh và ánh sáng, tia sáng chớp nhoáng của Reid xé toạc không gian."
  },
  {
    "en": "He shall affirm. Should it be the stipulated sword or the chopsticks, regardless, come what may in that flash's path, it shall be slashed down.",
    "vi": "Anh dứt định khẳng định. Dù đó có là thanh kiếm quy định hay đôi đũa đi chăng nữa, quyết không quan trọng, bất cứ thứ gì nằm trên đường đi của tia sáng chớp nhoáng ấy đều sẽ bị chém đứt."
  },
  {
    "en": "For that was, the very manifestation of the notion of the『Sword』.",
    "vi": "Bởi lẽ đó chính là hiện thân thực sự của khái niệm 『Kiếm』."
  },
  {
    "en": "The『Sword』, is that which is brought forth for the purpose of slashing objects down.",
    "vi": "『Kiếm』, là thứ được sinh ra vì mục đích chém đứt vạn vật trên đời."
  },
  {
    "en": "And sword moves, was the term denoting the techniques for slashing objects down with that sword.",
    "vi": "Và kiếm chiêu, là thuật ngữ biểu thị những kỹ thuật để chém đứt vạn vật bằng thanh kiếm đó."
  },
  {
    "en": "Henceforth, the flash which slashed down all of objects in the world, was the culmination, and the long-cherished original desire, of the『Sword』and『Sword Moves』.",
    "vi": "Chính vì lẽ đó, tia sáng chớp nhoáng chém đứt thảy mọi vật trên thế gian, chính là đỉnh cao tối thượng và là ước nguyện ban đầu bấy lâu nay của 『Kiếm』 và 『Kiếm Chiêu』."
  },
  {
    "en": "Those slashed by it, shan't forget the truth of having been slashed down for eternity.",
    "vi": "Những kẻ bị chém bởi đường kiếm ấy, quyết không thể lãng quên sự thật rằng mình đã bị chém gục cho đến vĩnh hằng."
  },
  {
    "en": "Thus, the scar Julius Juukulius sustained beneath his left eye, shall not fade away for eternity.",
    "vi": "Chính vì vậy, vết sẹo mà Julius Juukulius gánh chịu bên dưới mắt trái, dứt định sẽ không bao giờ mờ đi cho đến vĩnh hằng."
  },
  {
    "en": "That was the indemnification for having dodged the『Sword Saint's』flash, from a distance near enough to graze past.",
    "vi": "Đó chính là cái giá phải trả cho việc né tránh tia sáng chớp nhoáng của 『Kiếm Thánh』, từ một khoảng cách siêu cận kề tưởng như chỉ sượt qua."
  },
  {
    "en": "Julius: \"ーーーー\"",
    "vi": "Julius: “————”"
  },
  {
    "en": "Renouncing his receiving stance, he perceived through the opponent's sword with momentary offence and defence.",
    "vi": "Từ bỏ tư thế phòng thủ, anh thấu suốt đường kiếm của đối thủ bằng sự công thủ chớp nhoáng trong tích tắc."
  },
  {
    "en": "The slashed fundus of his eye spouted blood. However, he shall not close his eyes. Maintaining his focus on the opponent, he swung his arm.",
    "vi": "Khóe mắt bị chém rách phun máu tươi ròng ròng. Tuy nhiên, anh quyết không nhắm mắt. Giữ chặt sự tập trung vào đối thủ, anh vung mạnh cánh tay."
  },
  {
    "en": "Reception renounced, he rained a hundred flashes with offenceーー,",
    "vi": "Từ bỏ thế thủ hoàn toàn, anh trút xuống một trăm tia chớp công kích kịch liệt——,"
  },
  {
    "en": "Julius: \"ーーAl Clarista.\"",
    "vi": "Julius: “——Al Clarista.”"
  },
  {
    "en": "The greatest ever sword strike of Julius Juukulius painted the colours of a rainbow.",
    "vi": "Nhát kiếm mạnh mẽ nhất từ trước đến nay của Julius Juukulius vẽ nên những sắc màu lộng lẫy của cầu vồng."
  },
  {
    "en": "It captured the smile of Reid Astrea, ferocious like that of a sharkーー,",
    "vi": "Nó nắm bắt nụ cười dữ tợn tựa cá mập của Reid Astrea——,"
  },
  {
    "en": "ーーThe eye patch concealing the left eye of the『Sword Saint』, was pierced by the knight's strike, as it swayed into the air.",
    "vi": "——Tấm băng bịt mắt che giấu con mắt trái của 『Kiếm Thánh』, đã bị nhát đâm hiệp sĩ của anh đâm xuyên qua, bay lơ lửng giữa không trung."
  },
  {
    "en": "△▼△▼△▼△",
    "vi": "△▼△▼△▼△"
  },
  {
    "en": "Julius: \"ーーーー\"",
    "vi": "Julius: “————”"
  },
  {
    "en": "The instant he descended upon the clear floor with his toes, he sensed the echo of footsteps to be frightfully blaring.",
    "vi": "Ngay khoảnh khắc ngón chân anh chạm xuống mặt sàn trong suốt, anh cảm nhận tiếng bước chân vọng lại vang lên rõ mồn một đầy đáng sợ."
  },
  {
    "en": "The moment he became conscious of that, Julius' heart, in the depths of his chest, having forgotten to beat, commenced movement in panic.",
    "vi": "Khoảnh khắc nhận thức được điều đó, trái tim Julius nằm sâu trong lồng ngực vốn đã quên mất cách đập, nay bắt đầu đập loạn nhịp trong sự hoảng hốt dồn dập."
  },
  {
    "en": "Subsequently turning towards the rear, he gazed at the burly spine facing towards him.",
    "vi": "Kế đó quay đầu nhìn về phía sau, anh đăm đăm nhìn vào tấm lưng to lớn, vạm vỡ đang quay về phía mình."
  },
  {
    "en": "Reid: \"ーーーー\"",
    "vi": "Reid: “————”"
  },
  {
    "en": "His red long hair jolting, the back stood firm and still.",
    "vi": "Mái tóc dài màu đỏ rực rung nhẹ, tấm lưng ấy đứng vững vàng và bất động."
  },
  {
    "en": "The great man gripped to the stipulated sword in his right hand, and his left hand was positioned at his face. The spot which that left hand was touching, therein originally was supposed to be an eye patch, but currently it was absent.",
    "vi": "Vĩ nhân hộ pháp nắm chặt thanh kiếm quy định bằng tay phải, và đặt tay trái lên mặt của lão. Vị trí mà tay trái lão đang chạm vào, đáng lẽ ban đầu phải là một tấm băng bịt mắt, nhưng hiện tại nó dứt định đã không còn ở đó nữa."
  },
  {
    "en": "The eye patch that concealed the left eye of the『Sword Saint』, at present, had fallen at Julius' feet.",
    "vi": "Tấm băng che mắt từng che giấu con mắt trái của 『Kiếm Thánh』, lúc này, đã rơi xuống ngay dưới chân Julius."
  },
  {
    "en": "Julius: \"......So it connected, huh.\"",
    "vi": "Julius: “......Vậy là đòn kiếm đã chạm tới được rồi ư.”"
  },
  {
    "en": "His voice quivered, as he looked down upon the eye patch fallen on the clear floor, and the knight sword in his own hand.",
    "vi": "Giọng anh run rẩy, khi cú nhìn tấm băng che mắt rơi trên mặt sàn trong suốt, và thanh kiếm hiệp sĩ trên tay mình."
  },
  {
    "en": "Though his whisper sought to affirm the occured happenings, it possessed an excessive lack of connection to reality. To him, this seemed as though a transient dream, that this all would slip away and vanish through his fingers.",
    "vi": "Dẫu lời thì thầm của anh cố gắng khẳng định những sự kiện vừa diễn ra, nó lại mang một sự mơ hồ vô cùng so với thực tại. Đối với anh, chuyện này tựa như một giấc chiêm bao thoáng qua, rằng thảy mọi thứ rồi sẽ trôi tuột và biến mất qua kẽ tay."
  },
  {
    "en": "Howeverーー,",
    "vi": "Thế nhưng——,"
  },
  {
    "en": "'ーーーー'",
    "vi": "“————”"
  },
  {
    "en": "Through not the notion of words, the six lights extolled Julius' established achievement.",
    "vi": "Quyết chả phải bằng những ngôn từ sáo rỗng, sáu đốm sáng lung linh không ngừng ca ngợi chiến tích phi thường mà Julius vừa lập được."
  },
  {
    "en": "The warm flowers named his beloved, sought to fill the void born in Julius' heart.",
    "vi": "Những bông hoa ấm áp mang tên những người anh yêu mến, cố gắng lấp đầy khoảng trống sâu thẳm sinh ra trong trái tim Julius."
  },
  {
    "en": "And accompanying the commend of his blooming maidensーー,",
    "vi": "Và cùng với lời ngợi ca của những thiếu nữ đang bung nở rực rỡ ấy——,"
  },
  {
    "en": "Echidna: \"ーーJulius.\"",
    "vi": "Echidna: “——Julius.”"
  },
  {
    "en": "Hearing the soft voice, Julius turned his gaze towards its direction.",
    "vi": "Nghe thấy giọng nói dịu dàng ôn hòa ấy, Julius lập tức quay nhìn về hướng đó."
  },
  {
    "en": "The great man with his spine turned towards him, the maidens transmitting commend, overlooking the battle from a locus disparate from either of them, having called to Julius was a female with light purple hair.",
    "vi": "Vĩ nhân hộ pháp đang quay lưng về phía anh, những thiếu nữ đang truyền đi những lời tán dương, và người đang dõi theo trận chiến từ một vị trí hoàn toàn biệt lập với cả hai người, kẻ vừa cất tiếng gọi Julius chính là một cô gái với mái tóc màu tím nhạt."
  },
  {
    "en": "With a face identical to that of his lord, whom he cherished, whom he pledged to dedicate his sword to, the Artificial Spirit who shall live for eternity, with whom he had a relationship of unknowingly mutually wounding each otherーー,",
    "vi": "Với một gương mặt giống hệt vị chủ nhân mà anh hết lòng trân quý, người anh thề nguyện dâng hiến cả thanh kiếm, Tinh Linh Nhân Tạo sẽ sống cho đến vĩnh hằng, người mà anh đã vô tình có mối quan hệ làm tổn thương lẫn nhau mà chả hề hay biết——,"
  },
  {
    "en": "Whether the reason for her solicitude for Julius was because she cherished Anastasia, or due to the functioning of his『Divine Protection of Gathering Spirits』, the answer remained veiled.",
    "vi": "Liệu lý do cô quan tâm sâu sắc tới Julius là vì cô yêu quý Anastasia, hay do sự vận hành của 『Gia Hộ Tụ Tập Tinh Linh』 của anh, câu trả lời dứt định vẫn bị che phủ trong màn sương."
  },
  {
    "en": "However, the being of someone who watched over the resolution of Julius Juukulius eased his heart to such an extent, he thus hauled up his knight sword in gratitude.",
    "vi": "Thế nhưng, sự hiện diện của một người dõi theo quyết tâm sắt đá của Julius Juukulius đã xoa dịu tâm hồn anh đến nhường ấy, anh nâng cao thanh kiếm hiệp sĩ của mình lên để bày tỏ lòng biết ơn tột cùng."
  },
  {
    "en": "Julius: \"ーーーー\"",
    "vi": "Julius: “————”"
  },
  {
    "en": "Wordlessly, he hoisted his knight sword up towards the heavens.",
    "vi": "Không một lời nói, anh giơ cao thanh kiếm hiệp sĩ của mình hướng về phía bầu trời xanh."
  },
  {
    "en": "Remnants embellished with the aurora glistened, the path of the sword verbatim delineated a rainbow.",
    "vi": "Những tàn dư được trang hoàng bởi dải cực quang lấp lánh rực rỡ, đường kiếm đã thực sự vẽ nên một dải cầu vồng tuyệt mỹ."
  },
  {
    "en": "That was surely, akin to blessings showered upon the knight named Julius Juukuliusーー,",
    "vi": "Đò chắc chắn tựa như những lời chúc phúc thiêng liêng tuôn đổ xuống vị hiệp sĩ mang tên Julius Juukulius——,"
  },
  {
    "en": "Reid: \"ーーHad this been the shitty bloody『Trial』, this would've made for your victory.\"",
    "vi": "Reid: “——Nếu đây vốn là cái 『Thử Thách』 phiền phức khốn kiếp kia, thì đòn này dứt định đã mang lại chiến thắng cho ngươi rồi lị.”"
  },
  {
    "en": "Articulating so, the great man steadily stomped on the floor in a tangent.",
    "vi": "Nói đoạn, vĩ nhân hộ pháp chầm chậm dậm chân xuống mặt sàn theo một hướng khác."
  },
  {
    "en": "Once he turned around, no wound lay visible on Reid's face. What the tip of Julius' sword had reached, had evidently been merely his eye patch. However, neither was even Reid shameless enough to exaggerate so and say it did not reach him.",
    "vi": "Khi lão quay người lại, quyết chẳng có vết thương nào lộ ra trên gương mặt của Reid. Thứ mà mũi kiếm của Julius chạm tới rõ ràng chỉ là tấm băng che mắt của lão mà thôi. Tuy nhiên, ngay cả Reid dẫu quyết chả trơ trẽn tới mức nói khoác rằng đòn kiếm đó chưa chạm tới mình."
  },
  {
    "en": "Above all, his prior remark had not been his unwillingness to admit defeat, but the truth.",
    "vi": "Trên hết, lời nhận xét trước đó của lão không phải là sự không chịu thừa nhận thất bại, mà dứt định chính là sự thật hiển nhiên."
  },
  {
    "en": "Had this indeed been the continuance of the『Trial』of Pleiades Watchtower's second layer『Electra』, at the point of having a single blow connect successfully, Julius would have passed it and gained the right to challenge the upper stratum.",
    "vi": "Nếu đây thực sự là sự tiếp diễn của 『Thử Thách』 tại tầng thứ hai 『Electra』 của Tháp Canh Pleiades, vào thời điểm có một đòn kiếm duy nhất chạm tới đối phương thành công, Julius dẫu đã vượt qua nó và giành quyền thách thức tầng trên."
  },
  {
    "en": "However, the battle between Julius and Reid was no longer a question of the tower's『Trials』.",
    "vi": "Thế nhưng, trận chiến giữa Julius và Reid lúc này quyết chả còn là vấn đề về những 『Thử Thách』 của tòa tháp nữa."
  },
  {
    "en": "They were battling in order to settle this between a sole knight and a sole swordsman, a man and a man.",
    "vi": "Họ đang chiến đấu để định đoạt kết cục giữa một vị hiệp sĩ duy nhất và một vị kiếm sĩ duy nhất, giữa một đấng nam nhi và một đấng nam nhi."
  },
  {
    "en": "Reid: \"ーーーー\"",
    "vi": "Reid: “————”"
  },
  {
    "en": "Having lost his eye patch, Reid, with both of his eyes awakened, gripped the stipulated sword with both of his hands.",
    "vi": "Mất đi tấm băng che mắt, Reid, với cả hai con mắt đã bừng tỉnh, nắm chặt thanh kiếm quy định bằng cả hai tay."
  },
  {
    "en": "Clutching the sword's grip, he braced the sword with the eye at its aim. ーーYes, so braced the『Sword Saint』.",
    "vi": "Nắm chặt chuôi kiếm, lão thủ sẵn thanh kiếm nhắm thẳng con mắt duy nhất vào mục tiêu. ——Phải, chính 『Kiếm Thánh』 đã thủ thế như vậy."
  },
  {
    "en": "Not for artlessly swinging sticks, but braced the sword in order to slash the enemy down, with certainty.",
    "vi": "Không phải để vung vẩy mấy khúc gỗ một cách vụng về, mà lão thủ kiếm để chém gục kẻ thù trước mắt một cách dứt khoát, chắc chắn nhất."
  },
  {
    "en": "Reid: \"Don't be complainin' even if ya vanish to nothin'.\"",
    "vi": "Reid: “Đừng có oán thán ngay cả khi ngươi bị biến thành tro bụi hư vô đấy lị.”"
  },
  {
    "en": "Julius: \"Even if I were to wish to complain, it would be difficult to find a way to do so when I would possess no mouth to complain from.\"",
    "vi": "Julius: “Dù tôi có muốn oán thán đi chăng nữa, thì cũng thật khó để tìm ra cách làm vậy khi bản thân dứt định chẳng còn cái miệng nào để mà oán thán.”"
  },
  {
    "en": "Reid: \"Hah! Rascal, ain't even gonna laugh at jokes, god damn. You, what's yer name 'gain?\"",
    "vi": "Reid: “Hả! Cái thằng nhóc này, quyết chả thèm cười trước mấy câu đùa chút nào, khốn kiếp thật chứ. Ngươi ấy, tên ngươi là gì ấy nhỉ lị?”"
  },
  {
    "en": "Julius lifted his eyebrows, upon being enquired for his name by the legend.",
    "vi": "Julius khẽ nhướng lông mày, khi được huyền thoại kiếm đạo đích thân hỏi tên."
  },
  {
    "en": "Though he had assuredly named himself on countless instances before him by now, he did not possess recollection of that. However, him not having recollection of that was now insignificant.",
    "vi": "Dẫu anh chắc chắn đã tự xưng tên mình vô số lần trước mặt lão từ trước đến nay, lão lại quyết chả giữ lại chút hồi ức nào về điều đó. Tuy nhiên, việc lão không có ký ức về chuyện ấy lúc này dẫu chẳng còn quan trọng nữa."
  },
  {
    "en": "For he apprehended that with this question, Reid had indisputably, for the first time, acknowledged Julius.",
    "vi": "Bởi anh hiểu sâu sắc rằng với câu hỏi này, Reid đã không thể bàn cãi, lần đầu tiên thực sự công nhận Julius."
  },
  {
    "en": "Julius: \"Julius Juukulius. Since it is a name easy to forget, I request of you to remember it.\"",
    "vi": "Julius: “Tôi là Julius Juukulius. Vì đó là một cái tên rất dễ bị lãng quên, tôi xin ngài hãy ghi nhớ lấy nó.”"
  },
  {
    "en": "Pronouncing a redundant remark he would not have perceived as humour simply a short duration ago, Julius pointed the vanguard of his knight sword towards Reid as well.",
    "vi": "Thốt ra một lời nói thừa thãi mà cách đây không lâu anh quyết chả bao giờ coi là chuyện đùa, Julius dứt khoát chỉ mũi kiếm hiệp sĩ của mình về phía Reid."
  },
  {
    "en": "And once again, he implored for the aid of the six Spirits, who had naught but laboured for him immediately previously.",
    "vi": "Vài một lần nữa, anh khẩn cầu sự trợ giúp đắc lực của sáu Tinh linh, những người vừa dốc lòng chiến đấu vì anh ngay trước đó."
  },
  {
    "en": "Should it be his present self and these girls, then he shall surely reach to farther heights of the rainbow's aurora.",
    "vi": "Nếu là bản thân anh của hiện tại và những cô gái này, anh dứt định sẽ chạm tới những tầm cao xa hơn nữa của dải cực quang cầu vồng."
  },
  {
    "en": "Al Clauseria and Al Clarista.",
    "vi": "Al Clauseria và Al Clarista."
  },
  {
    "en": "Borrowing the might of the six Spirits, the rainbow's aurora furling the power of the six elements. ーーClauseria, which fired that maximal magic, and Clarista, which made it dwell upon the knight sword.",
    "vi": "Mượn sức mạnh của sáu Tinh linh, dải cực quang cầu vồng bao bọc lấy uy lực của sáu nguyên tố. ——Clauseria, thứ giải phóng ma pháp tối thượng ấy, và Clarista, thứ khiến nó ngự trị ngay trên thanh kiếm hiệp sĩ."
  },
  {
    "en": "A secret ritual further beyond, which he had not once succeeded in due to his inexperienceーー,",
    "vi": "Một bí thuật tối cao xa hơn thế nữa, thứ mà anh chưa từng một lần thành công do bản thân còn non nớt——,"
  },
  {
    "en": "Julius: \"ーーHereby I vanquish.\"",
    "vi": "Julius: “——Tôi xin được đánh bại ngài tại đây.”"
  },
  {
    "en": "Reid: \"ーーCome.\"",
    "vi": "Reid: “——Nhào vô lị.”"
  },
  {
    "en": "In that juncture, an aurora submerged the white space, the bands of rainbow tackled the great man of crimson.",
    "vi": "Tại thời điểm ấy, một dải cực quang nhấn chìm không gian trắng xóa, những dải cầu vồng lao vào tấn công vĩ nhân hộ pháp khoác sắc đỏ rực."
  },
  {
    "en": "The original rainbow spirit arts devised by Julius Juukulius, a secret amongst its secrets.",
    "vi": "Tinh linh thuật cầu vồng độc quyền do chính Julius Juukulius sáng tạo, một bí thuật tối thượng nằm trong số những bí thuật của anh."
  },
  {
    "en": "Neither launching the light of rainbow furling the six elements, nor making it dwell upon the sword, but cladding oneself in it, and exterminating the opponent by becoming the aurora itself.",
    "vi": "Không phải phóng ra ánh sáng cầu vồng bao bọc sáu nguyên tố, dẫu quyết không phải để nó ngự trị trên thanh kiếm, mà là khoác lên mình ánh sáng ấy, và tiêu diệt đối thủ bằng cách tự biến mình thành chính dải cực quang cầu vồng."
  },
  {
    "en": "Julius: \"ーーAl Clanveir.\"",
    "vi": "Julius: “——Al Clanveir.”"
  },
  {
    "en": "That superlative strike of the Spirit Knight, was directly assailed upon by a clear white flash.",
    "vi": "Đòn chém tột đỉnh của Tinh Linh Hiệp Sĩ, lập tức va chạm trực diện với một tia sáng chớp nhoáng trắng xóa thanh khiết."
  },
  {
    "en": "△▼△▼△▼△",
    "vi": "△▼△▼△▼△"
  },
  {
    "en": "From the very beginning until the very end, the transcendent dimension of offence and defence far surpassed the ability of an untrained eye to keep pace with it.",
    "vi": "Từ lúc bắt đầu cho đến khi kết thúc trận đấu, chiều kích siêu việt của những đòn công thủ đã hoàn toàn vượt xa khả năng bám đuổi của một đôi mắt không được rèn luyện."
  },
  {
    "en": "Needless to speak of the colliding sword strikes, but the bewildering interchange of positions and footwork, which side was dominating and which side lay inferior, even that alone could not the pale cerulean eyes capture.",
    "vi": "Chẳng cần nói đến những đường kiếm va chạm kịch liệt, ngay cả sự hoán đổi vị trí và bộ pháp đầy chóng mặt, bên nào đang áp đảo và bên nào đang yếu thế, chỉ riêng điều đó thôi đôi mắt màu xanh lam nhạt dẫu quyết chả thể nào nắm bắt nổi."
  },
  {
    "en": "That was, entirely regardless of this flesh body not being her original belonging.",
    "vi": "Điều đó dứt định là sự thật, hoàn toàn bất kể thực tế là thể xác này vốn chả phải là của riêng cô."
  },
  {
    "en": "Merely, there present were those who were vying for a matter of life and death within that dimension, and compared to them, the world she lived in simply was an exceedingly lesser dimension, that being withstanding truth.",
    "vi": "Chỉ đơn giản là có những kẻ đang tranh đoạt sự sống và cái chết trong chiều kích ấy, và so với họ, thế giới cô đang sống chỉ là một chiều kích thấp kém hơn nhiều, đó chính là sự thật hiển nhiên."
  },
  {
    "en": "If the sense of worth and values of living beings reposed in their might as living creatures, then her self was frail pertinent to worthlessness.",
    "vi": "Nếu giá trị và ý nghĩa sống của các sinh vật nằm ở sức mạnh sinh tồn của họ, thì bản thân cô dứt định là kẻ yếu ớt đến mức gần như vô giá trị."
  },
  {
    "en": "Moreover, that was also the evidence of her self having lived for a time equating multiple centuries in indolence, with her back turned towards the path of enhancing, uplifting oneself.",
    "vi": "Hơn nữa, đó dẫu cũng là minh chứng cho thấy bản thân cô đã sống suốt nhiều thế kỷ trong sự lười biếng nhàn nhã, quay lưng lại với con đường rèn luyện và nâng tầm bản thân."
  },
  {
    "en": "Ever since she first became cognizant of her self, she had the hunch.",
    "vi": "Kể từ lần đầu tiên có ý thức về bản ngã của mình, cô đã có một linh cảm mơ hồ."
  },
  {
    "en": "That the purpose of the unnatural existence named herself, had been fulfilled the very moment she had taken birth.",
    "vi": "Rằng mục đích tồn tại của một thực thể phi tự nhiên như cô, đã hoàn thành ngay khoảnh khắc cô được sinh ra đời."
  },
  {
    "en": "If anything, taking birth itself had been her purpose, and the purpose had been fulfilled at that point of occurrence. Henceforth left as is, she purposelessly wandered the world, unable to evade the void of multiple centuries.",
    "vi": "If có thể nói, việc được sinh ra chính là mục đích của cô, và mục tiêu ấy đã trọn vẹn ngay tại thời điểm đó. Kể từ đó trở đi, cô lang thang vô định khắp thế gian, quyết chẳng thể trốn tránh khoảng trống rỗng vô tận của nhiều thế kỷ."
  },
  {
    "en": "She did not mind even if she died. However, she merely possessed no reason to die.",
    "vi": "Cô dẫu chả bận tâm ngay cả khi mình phải chết. Tuy nhiên, cô đơn giản là quyết không có lấy một lý do nào để chết cả."
  },
  {
    "en": "Thus, delaying her demise in inactivity, for much too long, she indulged in sloth.",
    "vi": "Vì vậy, trì hoãn cái chết của mình trong sự vô vọng, suốt một thời gian quá dài, cô đã chìm đắm trong sự lười biếng Sloth."
  },
  {
    "en": "And during her course of prolongation, she had happened upon the young girl.",
    "vi": "Và trong hành trình kéo dài sự sống ấy, cô đã tình cờ gặp gỡ cô gái trẻ đó."
  },
  {
    "en": "Enchanted by the way of the young girl leading a vivid way of life, her glaciated life attained warmth.",
    "vi": "Bị mê hoặc bởi cách cô gái trẻ ấy sống một cuộc đời đầy sống động, cuộc đời băng giá bấy lâu nay của cô đã tìm lại được hơi ấm."
  },
  {
    "en": "The young girl who possessed a diminutive frame and spoke implausible big talk, whom would she turn out to be, or would she be unable to become whomsoever, she yearned to bear witness to that with her own eyes.",
    "vi": "Cô gái trẻ sở hữu vóc dáng nhỏ nhắn và hay nói những lời khoác lác không tưởng, liệu cô bé rồi sẽ trở thành ai, hay sẽ chả thể trở thành bất kỳ ai, cô khao khát được tận mắt chứng kiến điều đó bằng đôi mắt của mình."
  },
  {
    "en": "And before one could take notice, such intrigue and interest of her's became insignificantーー,",
    "vi": "Và trước khi ai đó kịp nhận ra, sự tò mò và hứng thú ấy của cô dẫu chẳng còn quan trọng nữa——,"
  },
  {
    "en": "\"ーーI don't want to lose you, or the children you cherish.\"",
    "vi": "“——Ta quyết chả muốn mất đi anh, hay những đứa trẻ mà anh trân quý.”"
  },
  {
    "en": "She was aware, that what was termed as flowing time was kind yet cruel.",
    "vi": "Cô nhận thức được rằng thứ được gọi là dòng thời gian trôi chảy vừa dịu dàng nhưng dẫu vô cùng tàn nhẫn."
  },
  {
    "en": "Though time healed wounds, it also rendered emotions obsolete.",
    "vi": "Dẫu thời gian xoa dịu những vết thương, nó dẫu khiến những cảm xúc trở nên phai nhạt và lỗi thời."
  },
  {
    "en": "Having lived for a long, lasting period of time, she newly mused. ーーThat she, did not want to forfeit this to the past.",
    "vi": "Sống suốt một khoảng thời gian dài đằng đẵng bấy lâu nay, cô lại suy nghĩ. ——Rằng cô, quyết không muốn dâng hiến khoảnh khắc này cho quá khứ."
  },
  {
    "en": "\"Though that too, is an impossible wish.\"",
    "vi": "“Dẫu cho điều đó, dứt định cũng chỉ là một mong ước bất khả thi mà thôi.”"
  },
  {
    "en": "Even if she implored for it to stop, time evanesced all without halt.",
    "vi": "Ngay cả khi cô cầu xin nó dừng lại, thời gian dẫu biến mọi thứ thành hư vô không một giây ngừng nghỉ."
  },
  {
    "en": "Lives, bound to possess miniscule and feeble lifetimes, displayed all kinds of changes within their time.",
    "vi": "Những sinh mệnh, bị ràng buộc bởi một khoảng đời nhỏ bé và yếu ớt, lại phô diễn đủ mọi loại đổi thay trong giới hạn thời gian của họ."
  },
  {
    "en": "Just as the nameless knight, who had his『Name』plundered, who remained in the memories of no one, proved that he was a singular human named Julius Juukulius.",
    "vi": "Tựa như vị hiệp sĩ vô danh, kẻ bị cướp đoạt mất 『Danh Tánh』, người quyết chả còn tồn tại trong ký ức của bất kỳ ai, đã tự mình chứng minh rằng anh là một con người độc nhất mang tên Julius Juukulius."
  },
  {
    "en": "ーーThe knight clad in the radiance of rainbow, plunged directly into the white light.",
    "vi": "——Vị hiệp sĩ khoác lên mình ánh hào quang cầu vồng rực rỡ, đâm thẳng vào ánh sáng trắng xóa thanh khiết."
  },
  {
    "en": "Against Julius, who gambled upon and unveiled the secret ritual, Reid Astrea's actions were terribly simple.",
    "vi": "Chống lại Julius, người đã đánh cược và giải phóng bí thuật tối thượng, những hành động của Reid Astrea lại vô cùng đơn giản đến đáng sợ."
  },
  {
    "en": "To swing down the sword he had swung up, a deed of sword strikes likely repeated the most in this worldーー it obliquely bisected the world, becoming a light which wrecked all in its path to ruin.",
    "vi": "Chém mạnh thanh kiếm xuống sau khi đã vung nó lên cao, một hành động kiếm đạo có lẽ được lặp đi lặp lại nhiều nhất trên thế gian này—— nó chém xéo đôi cả thế giới, biến thành một luồng sáng hủy diệt thảy mọi thứ trên đường đi của nó."
  },
  {
    "en": "Neither a special magic, nor a special move.",
    "vi": "Quyết chẳng phải ma pháp đặc biệt, dẫu chẳng phải kiếm chiêu đặc dị."
  },
  {
    "en": "With a mere swing of the sword, the world was scorched with the light. Unintelligible.",
    "vi": "Chỉ với một cú vung kiếm duy nhất, cả thế giới dẫu bị thiêu rụi bởi luồng sáng rực cháy. Thật chả thể nào hiểu nổi."
  },
  {
    "en": "Whether Reid Astrea exceeded norms, or if all『Sword Saints』were such.",
    "vi": "Liệu Reid Astrea đã vượt quá mọi quy chuẩn thông thường, hay thảy mọi 『Kiếm Thánh』 đều đáng sợ như thế cả."
  },
  {
    "en": "Though what was certain wasーー,",
    "vi": "Dẫu vậy điều chắc chắn là——,"
  },
  {
    "en": "\"ーーJulius.\"",
    "vi": "“——Julius.”"
  },
  {
    "en": "That she wished to devote her strength, such that the aurora would not be outpushed by the absurd white light.",
    "vi": "Rằng cô mong ước được hiến dâng sức mạnh của mình, sao cho dải cực quang cầu vồng quyết chả bị lấn át bởi luồng sáng trắng vô lý phi thường ấy."
  },
  {
    "en": "That was indubitably her genuine motive, however, an act like directly interfering into that battle, prior to being suicidal, would be uncouth and that sin would not bequeath her even the right to complain should even her soul be shattered in repentance.",
    "vi": "Đó chắc chắn là động cơ chân thành của cô, tuy nhiên, một hành động như can thiệp trực tiếp vào trận chiến ấy, trước cả khi là tự sát, dứt định sẽ là một hành vi vô lễ tột cùng, và tội lỗi ấy dẫu quyết chả ban cho cô lấy một quyền oán thán ngay cả khi linh hồn cô có bị nghiền nát trong sự hối hận muộn màng."
  },
  {
    "en": "And, the young girlーー Echidna, was aware that her self could not do anything.",
    "vi": "Và, cô gái trẻ ấy—— Echidna, nhận thức sâu sắc rằng bản thân mình quyết chả thể làm được gì cả."
  },
  {
    "en": "In this place, if there was anything she could do for Julius Juukulius, who had transformed into the aurora.",
    "vi": "Tại nơi này, nếu có bất kỳ điều gì cô có thể làm cho Julius Juukulius, người đã hóa thân thành dải cực quang rực rỡ."
  },
  {
    "en": "\"ーーーー\"",
    "vi": "“————”"
  },
  {
    "en": "Her hand on her slim chest, she sensed the existence slumbering in its depths.",
    "vi": "Đặt bàn tay lên lồng ngực mảnh mai của mình, cô cảm nhận rõ ràng sự hiện diện đang ngủ say trong sâu thẳm."
  },
  {
    "en": "The original possessor of this flesh body, the reason why she would not awaken from her deep slumber, in its search Echidna had arrived at this tower of the sand sea. ーーHowever, that had been deceit.",
    "vi": "Chủ nhân ban đầu của thể xác này, lý do tại sao cô bé lại quyết chả chịu tỉnh giấc sau giấc ngủ sâu đằng đẵng, để tìm kiếm câu trả lời ấy Echidna đã lặn lội đặt chân tới tòa tháp giữa sa mạc cát này. ——Thế nhưng, đó dứt định là một sự lừa dối."
  },
  {
    "en": "Echidna was already aware of the reason, why she would not wake up.",
    "vi": "Echidna vốn dĩ đã sớm nhận ra lý do tại sao cô bé quyết chả chịu tỉnh lại rồi."
  }
]

fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'translation_temp', 'ch85_part2.json'),
  JSON.stringify(part2, null, 2),
  'utf-8'
)
console.log('Successfully wrote ch85_part2.json!')
