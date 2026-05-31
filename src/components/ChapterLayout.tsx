'use client'

import Link from 'next/link'
import { ChapterMeta } from '@/lib/types'
import { useReader } from '@/lib/ReaderContext'

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
  const { layout, setLayout } = useReader()

  const currentIndex = allChapters.findIndex(
    (c) => c.chapterNumber === meta.chapterNumber
  )
  const prev = currentIndex > 0 ? allChapters[currentIndex - 1] : null
  const next =
    currentIndex < allChapters.length - 1
      ? allChapters[currentIndex + 1]
      : null

  return (
    <article className={`${layout === 'parallel' ? 'max-w-6xl' : 'max-w-3xl'} mx-auto px-4 py-8 transition-all duration-300`}>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-sm text-amber-700 dark:text-amber-400 font-medium">
            Arc {meta.arc} · Chương {meta.chapterNumber}
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-[#2d2420] dark:text-[#e8dcc8] mt-2">
            {meta.title}
          </h1>
        </div>

        {/* Premium Layout Switcher Toggle */}
        <div className="flex items-center gap-1 bg-[#f0e8dc] dark:bg-[#28221c] p-1 rounded-lg border border-[#e1d5c3] dark:border-[#382f27] self-start md:self-end shadow-sm">
          <button
            onClick={() => setLayout('inline')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              layout === 'inline'
                ? 'bg-amber-600 dark:bg-amber-700 text-white shadow-sm'
                : 'text-[#7a6c5e] dark:text-[#9c8e7e] hover:text-[#2d2420] dark:hover:text-[#e8dcc8]'
            }`}
            title="Nhấp vào câu để xem dịch tiếng Anh bên dưới"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            Đọc nối dòng
          </button>
          <button
            onClick={() => setLayout('parallel')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              layout === 'parallel'
                ? 'bg-amber-600 dark:bg-amber-700 text-white shadow-sm'
                : 'text-[#7a6c5e] dark:text-[#9c8e7e] hover:text-[#2d2420] dark:hover:text-[#e8dcc8]'
            }`}
            title="Xem song song Tiếng Anh và Tiếng Việt hai cột"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
            </svg>
            Song hành (2 cột)
          </button>
        </div>
      </div>

      <nav className="flex justify-between items-center mb-8 pb-4 border-b border-[#ddd3c2] dark:border-[#3a3028]">
        {prev ? (
          <Link
            href={`/arc${prev.arc}/${prev.slug}`}
            className="text-sm text-[#7a6c5e] dark:text-[#9c8e7e] hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
          >
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/arc${next.arc}/${next.slug}`}
            className="text-sm text-[#7a6c5e] dark:text-[#9c8e7e] hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
          >
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>

      {layout === 'parallel' ? (
        <div className="flex flex-col gap-1 border-t border-[#e6d9bf] dark:border-[#332920] pt-2">
          {children}
        </div>
      ) : (
        <div className="text-lg leading-relaxed flex flex-col gap-2">
          {children}
        </div>
      )}

      <nav className="flex justify-between items-center mt-12 pt-4 border-t border-[#ddd3c2] dark:border-[#3a3028]">
        {prev ? (
          <Link
            href={`/arc${prev.arc}/${prev.slug}`}
            className="text-sm text-[#7a6c5e] dark:text-[#9c8e7e] hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
          >
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/arc${next.arc}/${next.slug}`}
            className="text-sm text-[#7a6c5e] dark:text-[#9c8e7e] hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
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

