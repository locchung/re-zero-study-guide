'use client'

import { useReader } from '@/lib/ReaderContext'

interface ChapterProgressProps {
  slug: string
}

/**
 * Per-chapter progress indicator rendered inside ChapterCard.
 * Shows a thin progress bar + label ("Đang đọc · X%" or "Đã đọc ✓").
 * Renders nothing until localStorage is loaded to avoid hydration mismatch.
 */
export function ChapterProgress({ slug }: ChapterProgressProps) {
  const { progress, progressLoaded } = useReader()

  if (!progressLoaded) return null
  const entry = progress[slug]
  if (!entry) return null

  const pct = entry.totalBlocks > 0
    ? Math.min(100, Math.round((entry.blockIndex + 1) / entry.totalBlocks * 100))
    : 0

  const done = pct >= 95

  return (
    <div className="mt-2.5">
      <div className="w-full bg-[#e8dcc8] dark:bg-[#2a221a] h-1 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${
            done ? 'bg-emerald-500 dark:bg-emerald-600' : 'bg-amber-500 dark:bg-amber-600'
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className={`mt-1 text-[11px] font-medium ${
        done
          ? 'text-emerald-600 dark:text-emerald-500'
          : 'text-[#8a7c6e] dark:text-[#9c8e7e]'
      }`}>
        {done ? 'Đã đọc ✓' : `Đang đọc · ${pct}%`}
      </p>
    </div>
  )
}
