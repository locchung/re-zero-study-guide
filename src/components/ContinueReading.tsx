'use client'

import Link from 'next/link'
import { useReader } from '@/lib/ReaderContext'
import { chapters } from '@/lib/chapters'

/**
 * Displayed at the top of the home page when the user has in-progress reading.
 * Reads `lastRead` from ReaderContext (localStorage-backed) and renders nothing
 * until hydrated — no SSR mismatch.
 */
export function ContinueReading() {
  const { lastRead, progressLoaded } = useReader()

  // Render nothing until localStorage has been read (avoids hydration mismatch)
  if (!progressLoaded || !lastRead) return null

  const chapter = chapters.find(c => c.slug === lastRead.slug && c.arc === lastRead.arc)
  if (!chapter) return null

  const pct = lastRead.totalBlocks > 0
    ? Math.min(99, Math.round((lastRead.blockIndex + 1) / lastRead.totalBlocks * 100))
    : 0

  return (
    <Link
      href={`/arc${chapter.arc}/${chapter.slug}`}
      className="group block mb-10 rounded-xl border border-amber-300/60 dark:border-amber-700/40 bg-amber-50/60 dark:bg-amber-950/20 hover:bg-amber-50 dark:hover:bg-amber-950/30 hover:border-amber-400 dark:hover:border-amber-600 transition-all px-5 py-4 shadow-sm"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wide mb-1">
            Đọc tiếp
          </p>
          <p className="text-base font-semibold text-[#2d2420] dark:text-[#e8dcc8] truncate group-hover:text-amber-800 dark:group-hover:text-amber-300 transition-colors">
            {chapter.title}
          </p>
          <p className="text-xs text-[#7a6c5e] dark:text-[#9c8e7e] mt-0.5">
            Arc {chapter.arc} · đã đọc {pct}%
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 shrink-0 mt-0.5 text-amber-600 dark:text-amber-500 group-hover:translate-x-0.5 transition-transform"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>

      {/* Progress bar */}
      <div className="mt-3 w-full bg-amber-200/60 dark:bg-amber-900/30 h-1 rounded-full overflow-hidden">
        <div
          className="h-full bg-amber-600 dark:bg-amber-500 rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </Link>
  )
}
