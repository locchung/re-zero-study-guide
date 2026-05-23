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
