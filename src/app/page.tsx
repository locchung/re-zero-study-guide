import { getChaptersByArc } from '@/lib/chapters'
import { ChapterCard } from '@/components/ChapterCard'

export default function Home() {
  const arc6Chapters = getChaptersByArc(6)

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Re:Zero Study Guide
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
          Bản dịch tiếng Việt Re:Zero Arc 6. Nhấn vào từ hoặc câu để xem bản
          tiếng Anh tương ứng — đọc truyện và học tiếng Anh cùng lúc.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Arc 6
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {arc6Chapters.map((ch) => (
            <ChapterCard key={ch.slug} chapter={ch} />
          ))}
        </div>
      </section>
    </div>
  )
}
