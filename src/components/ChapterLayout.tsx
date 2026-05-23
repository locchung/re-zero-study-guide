import Link from 'next/link'
import { ChapterMeta } from '@/lib/types'

interface ChapterLayoutProps {
  meta: ChapterMeta
  allChapters: ChapterMeta[]
  children: React.ReactNode
}

export function ChapterLayout({
  meta,
  allChapters,
  children,
}: ChapterLayoutProps) {
  const currentIndex = allChapters.findIndex(
    (c) => c.chapterNumber === meta.chapterNumber
  )
  const prev = currentIndex > 0 ? allChapters[currentIndex - 1] : null
  const next =
    currentIndex < allChapters.length - 1
      ? allChapters[currentIndex + 1]
      : null

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-8">
        <span className="text-sm text-amber-600 dark:text-amber-400 font-medium">
          Arc {meta.arc} · Chương {meta.chapterNumber}
        </span>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-2">
          {meta.title}
        </h1>
      </div>

      <nav className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200 dark:border-gray-800">
        {prev ? (
          <Link
            href={`/arc${prev.arc}/${prev.slug}`}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/arc${next.arc}/${next.slug}`}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>

      <div className="text-lg leading-relaxed">{children}</div>

      <nav className="flex justify-between items-center mt-12 pt-4 border-t border-gray-200 dark:border-gray-800">
        {prev ? (
          <Link
            href={`/arc${prev.arc}/${prev.slug}`}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/arc${next.arc}/${next.slug}`}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  )
}
