import Link from 'next/link'
import { ChapterMeta } from '@/lib/types'

export function ChapterCard({ chapter }: { chapter: ChapterMeta }) {
  return (
    <Link
      href={`/arc${chapter.arc}/${chapter.slug}`}
      className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-amber-400 dark:hover:border-amber-500 hover:shadow-md transition-all"
    >
      <span className="text-sm text-amber-600 dark:text-amber-400 font-medium">
        Arc {chapter.arc}
      </span>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-1">
        {chapter.title}
      </h2>
      {chapter.description && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
          {chapter.description}
        </p>
      )}
    </Link>
  )
}
