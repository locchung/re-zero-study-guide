import { getChaptersByArc } from '@/lib/chapters'
import { ChapterCard } from '@/components/ChapterCard'
import { ContinueReading } from '@/components/ContinueReading'

export default function Home() {
  const arc6Chapters = getChaptersByArc(6)
  const arc7Chapters = getChaptersByArc(7)

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Re:Zero Study Guide
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
          Bản dịch tiếng Việt Re:Zero Arc 6 và Arc 7. Nhấn vào từ hoặc câu để xem bản
          tiếng Anh tương ứng — đọc truyện và học tiếng Anh cùng lúc.
        </p>
      </div>

      {/* Resume card — renders only when in-progress reading exists (client-only) */}
      <ContinueReading />

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Arc 6 — Tháp Canh Pleiades | Pleiades Watchtower
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {arc6Chapters.map((ch) => (
            <ChapterCard key={ch.slug} chapter={ch} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Arc 7 — Vùng Đất Của Lũ Sói | The Land of Wolves
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {arc7Chapters.map((ch) => (
            <ChapterCard key={ch.slug} chapter={ch} />
          ))}
        </div>
      </section>
    </div>
  )
}
