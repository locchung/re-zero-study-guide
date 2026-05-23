import Link from 'next/link'

export function SiteHeader() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold text-gray-900 dark:text-gray-100 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
        >
          Re:Zero Study Guide
        </Link>
        <span className="text-xs text-gray-500 dark:text-gray-500">
          Arc 6 · Chương 40–50
        </span>
      </div>
    </header>
  )
}
