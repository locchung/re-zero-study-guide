import { ChapterMeta } from './types'

export const chapters: ChapterMeta[] = [
  { slug: 'chuong-40', title: 'Chương 40: Bị Ngôi Sao Ruồng Bỏ | Abandoned by the Stars', chapterNumber: 40, arc: 6 },
  { slug: 'chuong-41', title: 'Chương 41 | The Scent of Peace', chapterNumber: 41, arc: 6 },
  { slug: 'chuong-42', title: 'Chương 42 | The Tower of the Dead', chapterNumber: 42, arc: 6 },
  { slug: 'chuong-43', title: 'Chương 43: Tòa Tháp Của Người Sống | The Tower of the Living', chapterNumber: 43, arc: 6 },
  { slug: 'chuong-44', title: 'Chương 44: Huy Chương Máu | Medal of Blood', chapterNumber: 44, arc: 6 },
  { slug: 'chuong-45', title: 'Chương 45: Vòng Tay Của Kẻ Có Tội | Embrace of The Guilty', chapterNumber: 45, arc: 6 },
  { slug: 'chuong-46', title: 'Chương 46: Meili Portroute', chapterNumber: 46, arc: 6 },
  { slug: 'chuong-47', title: 'Chương 47: Ta Sẽ Không Tha Thứ | I Won\'t Forgive', chapterNumber: 47, arc: 6 },
  { slug: 'chuong-48', title: 'Chương 48: Giết Người Trở Thành Thói Quen | Murder Becomes a Habit', chapterNumber: 48, arc: 6 },
  { slug: 'chuong-49', title: 'Chương 49: Gửi Người, Lời Bào Chữa Vô Giá Trị | To You, The Worthless Excuse', chapterNumber: 49, arc: 6 },
  { slug: 'chuong-50', title: 'Chương 50: Gửi Người, Lời Bào Chữa Tuyệt Đối Vô Giá Trị | To You, The Absolutely Worthless Excuse', chapterNumber: 50, arc: 6 },
  { slug: 'chuong-51', title: 'Chương 51: Tòa Tháp Của Người Sống (Phần 2) | Tower of The Living PART 2', chapterNumber: 51, arc: 6 },
  { slug: 'chuong-52', title: 'Chương 52: Xin Chúa Hãy Tha Thứ Cho Con | God, Please Forgive Me', chapterNumber: 52, arc: 6 },
  { slug: 'chuong-53', title: 'Chương 53: ーーMột Giọng Nói Vang Lên | ーーA Voice, Chimed', chapterNumber: 53, arc: 6 },
  { slug: 'chuong-54', title: 'Chương 54: Re: Bắt Đầu Lại Bản Thân Từ Con Số Không Ở Thế Giới Khác | Re: Starting Life in a Different World from Zero', chapterNumber: 54, arc: 6 },
  { slug: 'chuong-55', title: 'Chương 55: Gửi Người Đang Chờ Tuyết Tan | You Who Awaits The Snowmelt', chapterNumber: 55, arc: 6 },
  { slug: 'chuong-56', title: 'Chương 56: Bàn Về Những Gì Đang Chờ Đợi Phía Trước | Talking About What Awaits', chapterNumber: 56, arc: 6 },
  { slug: 'chuong-57', title: 'Chương 57: Tạm Thời Hãy Gác Nó Sang Một Bên | Let\'s Disregard It For Now', chapterNumber: 57, arc: 6 },
  { slug: 'chuong-58', title: 'Chương 58: Chuyện Nào Ra Chuyện Đó | That is That, This is This', chapterNumber: 58, arc: 6 },
  { slug: 'chuong-59', title: 'Chương 59: Thứ Mỉm Cười Trong Thế Giới Trắng Xóa | What Smiles in the White World', chapterNumber: 59, arc: 6 },
  { slug: 'chuong-60', title: 'Chương 60: Một Vệt Nắng Duy Nhất | A Single Spot of Sunshine', chapterNumber: 60, arc: 6 },
  { slug: 'chuong-61', title: 'Chương 61: ーーHãy Đứng Dậy | ーーStand Up', chapterNumber: 61, arc: 6 },
  { slug: 'chuong-62', title: 'Chương 62: Những Chấn Động Của Sự Sụp Đổ | Tremors of Collapse', chapterNumber: 62, arc: 6 },
  { slug: 'chuong-63', title: 'Chương 63: Năm Chướng Ngại | Five Obstacles', chapterNumber: 63, arc: 6 },
  { slug: 'chuong-64', title: 'Chương 64: Chướng Ngại Thứ Hai | The Second Obstacle', chapterNumber: 64, arc: 6 },
  { slug: 'chuong-65', title: 'Chương 65: Thứ Hai, Thứ Năm, Và Sau Đó | The Second, The Fifth, Followed By', chapterNumber: 65, arc: 6 },
  { slug: 'chuong-66', title: 'Chương 66: Cơ Hội Thứ Hai Hướng Về Đoạn Kết | Second Chance toward the Denouement', chapterNumber: 66, arc: 6 },
  { slug: 'chuong-67', title: 'Chương 67: Vị Vua Nhỏ | Little King', chapterNumber: 67, arc: 6 },
  { slug: 'chuong-68', title: 'Chương 68: Người Phụ Nữ Của Scorpius | The Woman of Scorpius', chapterNumber: 68, arc: 6 },
  { slug: 'chuong-69', title: 'Chương 69: Chiếc Búa Sắt Phi Lý Của Kiếm | The Absurd Iron Hammer of the Sword', chapterNumber: 69, arc: 6 },
  { slug: 'chuong-70', title: 'Chương 70: Ngôi Sao Tha Thiết | The Earnest Star', chapterNumber: 70, arc: 6 },
]

export function getChaptersByArc(arc: number): ChapterMeta[] {
  return chapters
    .filter((c) => c.arc === arc)
    .sort((a, b) => a.chapterNumber - b.chapterNumber)
}

export function getChapterBySlug(
  arc: number,
  slug: string
): ChapterMeta | undefined {
  return chapters.find((c) => c.arc === arc && c.slug === slug)
}
