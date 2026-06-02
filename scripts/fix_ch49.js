import fs from 'fs';

const filePath = './scripts/translation_temp/arc7_ch49_translated.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

const updates = {
  56: {
    from: "Nói cách khác, Olbart and Tanza là đồng phạm, và tin tức họ nắm giữ cũng đã được chuyển giao cho nhóm truy sát――___ những người thuộc chủng tộc có sừng.",
    to: "Nói cách khác, Olbart và Tanza là đồng phạm, và tin tức họ nắm giữ cũng đã được chuyển giao cho nhóm truy sát――___ những người thuộc chủng tộc có sừng."
  },
  65: {
    from: "Đôi chân huơ huơ lên, Louis ngoan ngoãn dịu lại sau khi nghe lời cảnh cáo của Subaru.",
    to: "Đôi chân khẽ huơ lên, Louis ngoan ngoãn dịu lại sau khi nghe lời cảnh cáo của Subaru."
  },
  117: {
    from: "Subaru: [Louis! Đừng đánh nữa! Chạy, chạy, chạy mau!]",
    to: "Subaru: [Louis! Đừng đánh nữa! Mau chạy trốn thôi!]"
  },
  131: {
    from: "Cõng Subaru trên lưng, dẫm lên bậu cửa sổ của các tòa nhà và những giàn giáo chìa ra ngoài, Louis có vẻ không hài lòng với cuộc trốn chạy do một mình Subaru quyết định, khi cô bé cứ nhảy tưng tưng khắp thành phố.",
    to: "Cõng Subaru trên lưng, dẫm lên bậu cửa sổ của các tòa nhà và những giàn giáo chìa ra ngoài, Louis có vẻ không hài lòng với cuộc trốn chạy do một mình Subaru quyết định, khi cô bé cứ nhún nhảy khắp thành phố."
  },
  173: {
    from: "Một nhóm đàn ông đằng đằng sát khí xuất hiện, ráo riết tìm kiếm tung tích của những kẻ chạy trốn. Đang đi tuần, họ bắt gặp một thanh niên đứng cạnh xe kéo, lưng tựa vào tường.",
    to: "Một nhóm đàn ông đầy sát khí xuất hiện, ráo riết tìm kiếm tung tích của những kẻ chạy trốn. Đang đi tuần, họ bắt gặp một thanh niên đứng cạnh xe kéo, lưng tựa vào tường."
  },
  232: {
    from: "If đối phương là kẻ xấu, Subaru có lẽ không cản nổi Louis đánh anh ta nhừ tử. Đối mặt với những kẻ lớn tuổi nguy hiểm là việc quá tầm đối với trẻ con.",
    to: "Nếu đối phương là kẻ xấu, Subaru có lẽ không cản nổi Louis đánh anh ta nhừ tử. Đối mặt với những kẻ lớn tuổi nguy hiểm là việc quá tầm đối với trẻ con."
  },
  264: {
    from: "Subaru ngơ ngác thấy rõ trước hành vi lập dị của anh ta, còn Ubilk nụ cười càng sâu hơn, vẫy vẫy ngón tay vừa búng từ bên này sang bên kia.",
    to: "Subaru ngơ ngác thấy rõ trước hành vi lập dị của anh ta, còn Ubilk nụ cười càng sâu hơn, khẽ vẫy ngón tay vừa búng từ bên này sang bên kia."
  },
  273: {
    from: "Subaru: [Sự chỉ lối của các vì sao…… vận mệnh, hay kiểu kiểu thế sao……]",
    to: "Subaru: [Sự chỉ lối của các vì sao…… vận mệnh, hay kiểu như thế sao……]"
  },
  309: {
    from: "May thay, Louis không nóng nảy tới mức đột ngột tấn công Ubilk, mặc dù con bé vẫn đang chăm chú quan sát mọi động thái của anh ta.",
    to: "Thật tốt là, Louis không nóng nảy tới mức đột ngột tấn công Ubilk, mặc dù con bé vẫn đang chăm chú quan sát mọi động thái của anh ta."
  },
  314: {
    from: "Trong lúc đang lo sợ trước ánh nhìn của Louis chằm chằm vào chiếc cổ thanh mảnh của Ubilk, ngay sau khi cậu thúc giục anh ta, cánh tay Subaru đã được thả ra.",
    to: "Trong lúc đang lo sợ trước ánh nhìn của Louis dán chặt vào chiếc cổ thanh mảnh của Ubilk, ngay sau khi cậu thúc giục anh ta, cánh tay Subaru đã được thả ra."
  },
  349: {
    from: "Subaru vẫy vẫy tay với anh ta, và,",
    to: "Subaru khẽ vẫy tay với anh ta, và,"
  },
  355: {
    from: "Chàng thanh niên bị bỏ lại cô độc trên phố―― Ubilk, nở nụ cười rồi dùng ngón tay gãi gãi má.",
    to: "Chàng thanh niên bị bỏ lại cô độc trên phố―― Ubilk, nở nụ cười rồi dùng ngón tay khẽ gãi má."
  }
};

let modified = 0;
for (const item of data) {
  if (updates[item.id]) {
    const update = updates[item.id];
    if (item.vi.trim() === update.from.trim()) {
      console.log(`Updating ID ${item.id}:`);
      console.log(`  OLD: ${item.vi}`);
      item.vi = update.to;
      console.log(`  NEW: ${item.vi}`);
      modified++;
    } else {
      console.warn(`WARNING: ID ${item.id} content mismatch!`);
      console.warn(`  Expected: ${update.from}`);
      console.warn(`  Found:    ${item.vi}`);
    }
  }
}

if (modified > 0) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`Successfully updated ${modified} items in ${filePath}`);
} else {
  console.log("No items were updated.");
}
