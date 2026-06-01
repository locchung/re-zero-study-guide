'use client'

import React, { useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { ChapterMeta } from '@/lib/types'
import { useReader } from '@/lib/ReaderContext'
import { PagedReader } from './PagedReader'
import { ReaderSettings } from './ReaderSettings'

interface ChapterLayoutProps {
  meta: ChapterMeta
  allChapters: ChapterMeta[]
  children: React.ReactNode
}

// Height of the sticky SiteHeader (h-14 = 3.5rem = 56px).
const HEADER_H = 56

export function ChapterLayout({ meta, allChapters, children }: ChapterLayoutProps) {
  const {
    layout, setLayout,
    fontScale, lineSpacing,
    saveProgress, progress, progressLoaded,
  } = useReader()

  const currentIndex = allChapters.findIndex(c => c.chapterNumber === meta.chapterNumber)
  const prev = currentIndex > 0 ? allChapters[currentIndex - 1] : null
  const next = currentIndex < allChapters.length - 1 ? allChapters[currentIndex + 1] : null

  // ── Scroll-mode refs (all hooks must be called unconditionally) ──────────────
  const contentRef = useRef<HTMLDivElement>(null)
  // Tracks which slug has been restored to prevent double-restore on subsequent
  // `progress` updates (e.g. save fires right after restore).
  const restoredSlug = useRef<string | null>(null)
  // True while scroll-restore is in progress — suppresses saving so they don't fight.
  const isSaving = useRef(false)
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Reset the saving-guard when navigating to a different chapter.
  useEffect(() => {
    if (restoredSlug.current !== meta.slug) {
      isSaving.current = false
    }
  }, [meta.slug])

  // Restore scroll position once progress has loaded for this slug (scroll modes only).
  useEffect(() => {
    if (layout === 'paged') return
    if (restoredSlug.current === meta.slug) return
    if (!progressLoaded) return

    restoredSlug.current = meta.slug

    const saved = progress[meta.slug]
    if (!saved || saved.blockIndex <= 0) return

    const container = contentRef.current
    if (!container) return

    const clamped = Math.min(saved.blockIndex, container.children.length - 1)
    const el = container.children[clamped] as HTMLElement | undefined
    if (!el) return

    isSaving.current = true
    el.scrollIntoView({ block: 'start', behavior: 'instant' })
    setTimeout(() => { isSaving.current = false }, 600)
  }, [layout, meta.slug, progress, progressLoaded])

  // Track scroll position and save progress (debounced ~400 ms after scroll stops).
  const handleScroll = useCallback(() => {
    if (isSaving.current) return
    if (scrollTimer.current) clearTimeout(scrollTimer.current)
    scrollTimer.current = setTimeout(() => {
      const container = contentRef.current
      if (!container) return
      const kids = Array.from(container.children) as HTMLElement[]
      if (kids.length === 0) return

      // Last block that has scrolled to/above the reading line (header + small margin).
      let topmost = 0
      for (let i = 0; i < kids.length; i++) {
        if (kids[i].getBoundingClientRect().top < HEADER_H + 20) topmost = i
        else break
      }
      saveProgress(meta.slug, meta.arc, topmost, kids.length)
    }, 400)
  }, [meta.slug, meta.arc, saveProgress])

  useEffect(() => {
    if (layout === 'paged') return
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimer.current) clearTimeout(scrollTimer.current)
    }
  }, [layout, handleScroll])

  // ── Paged mode renders its own full-screen overlay ───────────────────────────
  // (All hooks above run unconditionally — this conditional return is safe.)
  if (layout === 'paged') {
    return (
      <PagedReader key={meta.slug} meta={meta} prev={prev} next={next}>
        {children}
      </PagedReader>
    )
  }

  // ── CSS vars for font scale + line spacing ────────────────────────────────
  const readerVars = {
    '--reader-scale': fontScale,
    '--reader-leading': lineSpacing === 'relaxed' ? 2 : 1.7,
  } as React.CSSProperties

  return (
    <article
      style={readerVars}
      className={`${layout === 'parallel' ? 'max-w-6xl' : 'max-w-3xl'} mx-auto px-4 py-8 transition-all duration-300`}
    >
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-sm text-amber-700 dark:text-amber-400 font-medium">
            Arc {meta.arc} · Chương {meta.chapterNumber}
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-[#2d2420] dark:text-[#e8dcc8] mt-2">
            {meta.title}
          </h1>
        </div>

        {/* Layout Switcher + Settings */}
        <div className="flex items-center gap-2 self-start lg:self-end">
          <div className="flex flex-wrap items-center gap-1 bg-[#f0e8dc] dark:bg-[#28221c] p-1 rounded-lg border border-[#e1d5c3] dark:border-[#382f27] shadow-sm">
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
              Đọc cuộn
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

            <button
              onClick={() => setLayout('paged')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all text-[#7a6c5e] dark:text-[#9c8e7e] hover:text-[#2d2420] dark:hover:text-[#e8dcc8]"
              title="Đọc từng trang sách, chuyển trang dễ dàng"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              Trang sách (E-book)
            </button>
          </div>

          {/* Reader settings (font size, spacing, reveal-all) */}
          <ReaderSettings />
        </div>
      </div>

      <nav className="flex justify-between items-center mb-8 pb-4 border-b border-[#ddd3c2] dark:border-[#3a3028]">
        {prev ? (
          <Link href={`/arc${prev.arc}/${prev.slug}`} className="text-sm text-[#7a6c5e] dark:text-[#9c8e7e] hover:text-amber-700 dark:hover:text-amber-400 transition-colors">
            ← {prev.title}
          </Link>
        ) : <span />}
        {next ? (
          <Link href={`/arc${next.arc}/${next.slug}`} className="text-sm text-[#7a6c5e] dark:text-[#9c8e7e] hover:text-amber-700 dark:hover:text-amber-400 transition-colors">
            {next.title} →
          </Link>
        ) : <span />}
      </nav>

      {/* Chapter content — ref'd for scroll tracking */}
      {layout === 'parallel' ? (
        <div ref={contentRef} className="flex flex-col gap-1 border-t border-[#e6d9bf] dark:border-[#332920] pt-2">
          {children}
        </div>
      ) : (
        <div ref={contentRef} className="flex flex-col gap-2">
          {children}
        </div>
      )}

      {/* Bottom navigation */}
      <nav className="flex justify-between items-center mt-12 pt-4 border-t border-[#ddd3c2] dark:border-[#3a3028]">
        {prev ? (
          <Link href={`/arc${prev.arc}/${prev.slug}`} className="text-sm text-[#7a6c5e] dark:text-[#9c8e7e] hover:text-amber-700 dark:hover:text-amber-400 transition-colors">
            ← {prev.title}
          </Link>
        ) : <span />}
        {next ? (
          <Link href={`/arc${next.arc}/${next.slug}`} className="text-sm text-[#7a6c5e] dark:text-[#9c8e7e] hover:text-amber-700 dark:hover:text-amber-400 transition-colors">
            {next.title} →
          </Link>
        ) : <span />}
      </nav>
    </article>
  )
}
