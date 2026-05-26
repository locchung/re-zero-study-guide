import Link from 'next/link'

export function SiteHeader() {
  return (
    <header className="border-b border-[#ddd3c2] dark:border-[#3a3028] bg-[#faf6f0]/90 dark:bg-[#1a1612]/90 backdrop-blur-sm sticky top-0 z-40">
      <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold text-[#2d2420] dark:text-[#e8dcc8] hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
        >
          Re:Zero Study Guide
        </Link>
        <span className="text-xs text-[#7a6c5e] dark:text-[#9c8e7e]">
          Arc 6 · Chương 40–50
        </span>
      </div>
    </header>
  )
}
