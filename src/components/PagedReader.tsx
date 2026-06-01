'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { ChapterMeta } from '@/lib/types'
import { useReader } from '@/lib/ReaderContext'

// Matches `gap-3` (0.75rem = 12px at 16px root)
const FLEX_GAP = 12
// Matches `py-6` both sides (1.5rem * 2 = 48px)
const CONTENT_PADDING_V = 48

interface PagedReaderProps {
  meta: ChapterMeta
  prev: ChapterMeta | null
  next: ChapterMeta | null
  children: React.ReactNode
}

export function PagedReader({ meta, prev, next, children }: PagedReaderProps) {
  const { setLayout } = useReader()
  const router = useRouter()

  const [currentPage, setCurrentPage] = useState(1)
  const [pageRanges, setPageRanges] = useState<Array<[number, number]>>([])
  const [measured, setMeasured] = useState(false)
  const [pageKey, setPageKey] = useState(0)
  // PagedReader only ever renders client-side (behind a localStorage-gated layout state),
  // so reading window.matchMedia in the lazy initializer is safe — no hydration mismatch.
  const [reduceMotion, setReduceMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  const contentRef = useRef<HTMLDivElement>(null)
  const measuringRef = useRef<HTMLDivElement>(null)
  const touchStart = useRef<{ x: number; y: number } | null>(null)

  // Same whitespace-filter logic as the old ChapterLayout
  const childrenArray = React.Children.toArray(children).filter((child) => {
    if (typeof child === 'string') return child.trim() !== ''
    return child !== null && child !== undefined
  })

  const totalPages = Math.max(pageRanges.length, 1)
  const progressPercent = pageRanges.length > 0 ? (currentPage / totalPages) * 100 : 0

  // Subscribe to prefers-reduced-motion changes (listener only — initial value handled by lazy init)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // Lock body scroll while the overlay is open
  useEffect(() => {
    const saved = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = saved
    }
  }, [])

  // Compute page break ranges from measured item heights
  const measure = useCallback(() => {
    const content = contentRef.current
    const measuring = measuringRef.current
    if (!content || !measuring) return

    // Subtract vertical padding (py-6 top+bottom) plus a small safety buffer
    const budget = content.clientHeight - CONTENT_PADDING_V - 4
    if (budget <= 0) return

    const items = Array.from(measuring.children) as HTMLElement[]
    if (items.length === 0) return

    const ranges: Array<[number, number]> = []
    let pageStart = 0
    let accumulated = 0

    for (let i = 0; i < items.length; i++) {
      const h = items[i].offsetHeight
      if (i === pageStart) {
        accumulated = h
      } else if (accumulated + FLEX_GAP + h > budget) {
        // Item doesn't fit — close current page, start a new one
        ranges.push([pageStart, i - 1])
        pageStart = i
        accumulated = h
      } else {
        accumulated += FLEX_GAP + h
      }
    }
    // Final page
    ranges.push([pageStart, items.length - 1])

    setPageRanges(ranges)
    setMeasured(true)
    setCurrentPage((p) => Math.min(p, ranges.length))
  }, [])

  // First measurement — wait one frame for the DOM to paint
  useEffect(() => {
    const t = setTimeout(measure, 60)
    return () => clearTimeout(t)
  }, [measure])

  // Re-measure on resize (debounced 200 ms)
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    const onResize = () => {
      setMeasured(false)
      clearTimeout(timer)
      timer = setTimeout(measure, 200)
    }
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      clearTimeout(timer)
    }
  }, [measure])

  // Chapter slug changes are handled by the `key={meta.slug}` prop on this component
  // (set in ChapterLayout), which causes React to unmount + remount — resetting all state.

  const goNext = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage((p) => p + 1)
      setPageKey((k) => k + 1)
      if (contentRef.current) contentRef.current.scrollTop = 0
    } else if (next) {
      router.push(`/arc${next.arc}/${next.slug}`)
    }
  }, [currentPage, totalPages, next, router])

  const goPrev = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage((p) => p - 1)
      setPageKey((k) => k + 1)
      if (contentRef.current) contentRef.current.scrollTop = 0
    } else if (prev) {
      router.push(`/arc${prev.arc}/${prev.slug}`)
    }
  }, [currentPage, prev, router])

  const exitReader = useCallback(() => setLayout('inline'), [setLayout])

  // Keyboard: ← → to flip, Esc to exit
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable) return
      if (e.key === 'ArrowRight') { e.preventDefault(); goNext() }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); goPrev() }
      else if (e.key === 'Escape') exitReader()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goNext, goPrev, exitReader])

  // Swipe: horizontal swipe flips page; vertical scroll passes through untouched
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    const t = e.touches[0]
    touchStart.current = { x: t.clientX, y: t.clientY }
  }, [])

  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!touchStart.current) return
    const t = e.changedTouches[0]
    const dx = t.clientX - touchStart.current.x
    const dy = t.clientY - touchStart.current.y
    touchStart.current = null
    // Require ≥50 px horizontal AND horizontal must dominate vertical
    if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return
    if (dx < 0) goNext()
    else goPrev()
  }, [goNext, goPrev])

  const range = pageRanges[currentPage - 1]
  const pageChildren = measured && range
    ? childrenArray.slice(range[0], range[1] + 1)
    : null

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#faf6f0] dark:bg-[#1a1612]">

      {/* ── Top bar ─────────────────────────────────── */}
      <div className="shrink-0 flex items-center justify-between gap-3 px-4 h-12 border-b border-[#ddd3c2] dark:border-[#3a3028] bg-[#faf6f0]/95 dark:bg-[#1a1612]/95 backdrop-blur-sm">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold text-amber-700 dark:text-amber-400 leading-none">
            Arc {meta.arc} · Chương {meta.chapterNumber}
          </p>
          <p className="mt-0.5 text-xs leading-tight text-[#7a6c5e] dark:text-[#9c8e7e] truncate max-w-[56vw]">
            {meta.title}
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          {measured && (
            <span className="tabular-nums text-[11px] font-semibold text-[#8a7c6e] dark:text-[#a89988] bg-[#f0e8dc]/70 dark:bg-[#28221c]/70 px-2.5 py-0.5 rounded-full select-none">
              {currentPage}&thinsp;/&thinsp;{totalPages}
            </span>
          )}
          <button
            onClick={exitReader}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#e8dcc8] dark:hover:bg-[#2a221a] text-[#7a6c5e] dark:text-[#9c8e7e] hover:text-[#2d2420] dark:hover:text-[#e8dcc8] transition-colors"
            aria-label="Thoát chế độ đọc sách"
            title="Thoát (Esc)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Content area ────────────────────────────── */}
      <div
        ref={contentRef}
        className="relative flex-1 overflow-y-auto"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/*
          Hidden measuring container.
          Must share the same max-width + padding as the visible container so
          item heights are accurate. `absolute top-0 left-0 right-0 mx-auto` with
          `max-w-2xl` matches the centered, padded visible container exactly.
        */}
        <div
          ref={measuringRef}
          className="absolute top-0 left-0 right-0 max-w-2xl mx-auto px-6 md:px-12 py-6 flex flex-col gap-3 pointer-events-none"
          aria-hidden="true"
          style={{ visibility: 'hidden' }}
        >
          {childrenArray}
        </div>

        {/* Left edge tap-zone — 15 % of width, max 80 px */}
        <button
          onClick={goPrev}
          className="absolute inset-y-0 left-0 z-10 w-[15%] max-w-[80px] select-none focus:outline-none group"
          aria-label="Trang trước"
          tabIndex={-1}
        >
          <span className="flex h-full items-center justify-start pl-1.5 opacity-0 group-hover:opacity-20 transition-opacity duration-200 text-[#7a6c5e] dark:text-[#9c8e7e]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </span>
        </button>

        {/* Right edge tap-zone — 15 % of width, max 80 px */}
        <button
          onClick={goNext}
          className="absolute inset-y-0 right-0 z-10 w-[15%] max-w-[80px] select-none focus:outline-none group"
          aria-label="Trang sau"
          tabIndex={-1}
        >
          <span className="flex h-full items-center justify-end pr-1.5 opacity-0 group-hover:opacity-20 transition-opacity duration-200 text-[#7a6c5e] dark:text-[#9c8e7e]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </button>

        {/* Visible content */}
        <div className="max-w-2xl mx-auto px-6 md:px-12 py-6">
          {!measured ? (
            <div className="flex items-center justify-center min-h-[50vh] text-sm text-[#9c8e7e] dark:text-[#7a6c5e] select-none">
              <span className="animate-pulse">Đang tải trang…</span>
            </div>
          ) : (
            <div
              key={reduceMotion ? 'static' : pageKey}
              className={`flex flex-col gap-3${reduceMotion ? '' : ' animate-fade-in'}`}
            >
              {pageChildren}
            </div>
          )}
        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────────── */}
      <div className="shrink-0 px-4 pt-2 pb-3 border-t border-[#ddd3c2] dark:border-[#3a3028] bg-[#faf6f0]/95 dark:bg-[#1a1612]/95 backdrop-blur-sm">
        {/* Progress bar */}
        <div className="w-full h-1 rounded-full overflow-hidden mb-2.5 bg-[#ebdcb9] dark:bg-[#332920]">
          <div
            className="h-full rounded-full bg-amber-600 dark:bg-amber-700 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="flex items-center justify-between gap-2">
          <button
            onClick={goPrev}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg shadow-sm transition-all bg-[#f0e8dc] dark:bg-[#28221c] border border-[#e1d5c3] dark:border-[#382f27] hover:bg-amber-50 dark:hover:bg-amber-950/20 text-[#2d2420] dark:text-[#e8dcc8]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            {currentPage === 1 && prev ? 'Chương trước' : 'Trang trước'}
          </button>

          <p className="hidden sm:block text-[11px] italic select-none text-[#9a8c7e] dark:text-[#6a5e52]">
            ← → lật trang · Esc thoát
          </p>

          <button
            onClick={goNext}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg shadow-sm transition-all bg-[#f0e8dc] dark:bg-[#28221c] border border-[#e1d5c3] dark:border-[#382f27] hover:bg-amber-50 dark:hover:bg-amber-950/20 text-[#2d2420] dark:text-[#e8dcc8]"
          >
            {currentPage === totalPages && next ? 'Chương sau' : 'Trang sau'}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
