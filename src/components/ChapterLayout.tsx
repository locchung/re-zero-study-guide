'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
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
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)

  const currentIndex = allChapters.findIndex(
    (c) => c.chapterNumber === meta.chapterNumber
  )
  const prev = currentIndex > 0 ? allChapters[currentIndex - 1] : null
  const next =
    currentIndex < allChapters.length - 1
      ? allChapters[currentIndex + 1]
      : null

  // Reset page when chapter changes
  useEffect(() => {
    setCurrentPage(1)
  }, [meta.slug])

  // Filter and chunk children
  const childrenArray = React.Children.toArray(children).filter((child) => {
    if (typeof child === 'string') {
      return child.trim() !== ''
    }
    return child !== null && child !== undefined
  })

  const ITEMS_PER_PAGE = 15
  const totalPages = Math.ceil(childrenArray.length / ITEMS_PER_PAGE)

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((p) => p + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (next) {
      router.push(`/arc${next.arc}/${next.slug}`)
    }
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((p) => p - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (prev) {
      router.push(`/arc${prev.arc}/${prev.slug}`)
    }
  }

  // Keyboard navigation
  useEffect(() => {
    if (layout !== 'paged') return

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore keypresses inside input elements
      const target = e.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        return
      }

      if (e.key === 'ArrowRight') {
        handleNext()
      } else if (e.key === 'ArrowLeft') {
        handlePrev()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentPage, totalPages, layout, next, prev])

  const pagedChildren = childrenArray.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const progressPercent = totalPages > 0 ? (currentPage / totalPages) * 100 : 0

  return (
    <article className={`${layout === 'parallel' ? 'max-w-6xl' : 'max-w-3xl'} mx-auto px-4 py-8 transition-all duration-300`}>
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-sm text-amber-700 dark:text-amber-400 font-medium">
            Arc {meta.arc} · Chương {meta.chapterNumber}
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-[#2d2420] dark:text-[#e8dcc8] mt-2">
            {meta.title}
          </h1>
        </div>

        {/* Premium Layout Switcher Toggle (3-way selector) */}
        <div className="flex flex-wrap items-center gap-1 bg-[#f0e8dc] dark:bg-[#28221c] p-1 rounded-lg border border-[#e1d5c3] dark:border-[#382f27] self-start lg:self-end shadow-sm">
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
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              layout === 'paged'
                ? 'bg-amber-600 dark:bg-amber-700 text-white shadow-sm'
                : 'text-[#7a6c5e] dark:text-[#9c8e7e] hover:text-[#2d2420] dark:hover:text-[#e8dcc8]'
            }`}
            title="Đọc từng trang sách, chuyển trang dễ dàng"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" className="hidden" />
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
            Trang sách (E-book)
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
        
        {layout === 'paged' && (
          <span className="text-xs font-semibold text-[#8a7c6e] dark:text-[#a89988] bg-[#f0e8dc]/60 dark:bg-[#28221c]/60 px-2.5 py-1 rounded-full">
            Trang {currentPage} / {totalPages}
          </span>
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

      {/* Chapter Text Renderer */}
      {layout === 'paged' ? (
        <div className="flex flex-col gap-3 min-h-[400px]">
          {pagedChildren}
          
          {/* Ebook Pagination controls */}
          <div className="mt-8 pt-6 border-t border-[#ddd3c2] dark:border-[#3a3028] flex flex-col items-center gap-4">
            {/* Progress bar */}
            <div className="w-full bg-[#ebdcb9] dark:bg-[#332920] h-1.5 rounded-full overflow-hidden shadow-inner">
              <div 
                className="bg-amber-600 dark:bg-amber-700 h-full transition-all duration-300 rounded-full" 
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            
            <div className="flex items-center justify-between w-full">
              <button
                onClick={handlePrev}
                className="flex items-center gap-2 px-4 py-2 bg-[#f0e8dc] dark:bg-[#28221c] border border-[#e1d5c3] dark:border-[#382f27] hover:bg-amber-50 dark:hover:bg-amber-950/20 text-[#2d2420] dark:text-[#e8dcc8] text-sm font-semibold rounded-lg shadow-sm transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {currentPage === 1 && prev ? 'Chương trước' : 'Trang trước'}
              </button>

              <span className="text-sm font-medium text-[#7a6c5e] dark:text-[#9c8e7e] select-none">
                Trang {currentPage} / {totalPages}
              </span>

              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-4 py-2 bg-[#f0e8dc] dark:bg-[#28221c] border border-[#e1d5c3] dark:border-[#382f27] hover:bg-amber-50 dark:hover:bg-amber-950/20 text-[#2d2420] dark:text-[#e8dcc8] text-sm font-semibold rounded-lg shadow-sm transition-all"
              >
                {currentPage === totalPages && next ? 'Chương sau' : 'Trang sau'}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <p className="text-[11px] text-[#8a7d70] dark:text-[#9c8e7e] italic select-none">
              Gợi ý: Bạn có thể nhấn phím mũi tên Trái (←) hoặc Phải (→) để lật trang nhanh
            </p>
          </div>
        </div>
      ) : layout === 'parallel' ? (
        <div className="flex flex-col gap-1 border-t border-[#e6d9bf] dark:border-[#332920] pt-2">
          {children}
        </div>
      ) : (
        <div className="text-lg leading-relaxed flex flex-col gap-2">
          {children}
        </div>
      )}

      {/* Global Bottom Navigation (Hide in paged reader as it has its own pagination controllers) */}
      {layout !== 'paged' && (
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
      )}
    </article>
  )
}


