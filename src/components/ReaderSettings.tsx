'use client'

import { useState, useRef, useEffect } from 'react'
import { useReader } from '@/lib/ReaderContext'

/**
 * Gear-icon button that opens a popover with:
 * - Font-size (A− / scale% / A+)
 * - Line-spacing (Thường / Thoáng)
 * - Reveal-all translations toggle
 *
 * All settings are persisted via ReaderContext → localStorage.
 */
export function ReaderSettings() {
  const { fontScale, setFontScale, lineSpacing, setLineSpacing, revealAll, setRevealAll } = useReader()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  // Close popover on outside click/touch
  useEffect(() => {
    if (!open) return
    const close = (e: MouseEvent | TouchEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', close)
    document.addEventListener('touchstart', close)
    return () => {
      document.removeEventListener('mousedown', close)
      document.removeEventListener('touchstart', close)
    }
  }, [open])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const scalePct = Math.round(fontScale * 100)

  return (
    <div ref={rootRef} className="relative">
      {/* Trigger button */}
      <button
        onClick={() => setOpen(o => !o)}
        className={`flex items-center justify-center w-8 h-8 rounded-md transition-all ${
          open
            ? 'bg-amber-600 dark:bg-amber-700 text-white'
            : 'text-[#7a6c5e] dark:text-[#9c8e7e] hover:text-[#2d2420] dark:hover:text-[#e8dcc8] hover:bg-[#ede4d6] dark:hover:bg-[#28221c]'
        }`}
        aria-label="Cài đặt đọc"
        aria-expanded={open}
        title="Cài đặt đọc"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>

      {/* Popover */}
      {open && (
        <div className="absolute right-0 top-full mt-2 w-64 rounded-xl border border-[#e1d5c3] dark:border-[#382f27] bg-[#faf6f0] dark:bg-[#1e1a15] shadow-2xl z-[60] p-4 flex flex-col gap-4 animate-fade-in">

          {/* ── Font size ── */}
          <div>
            <p className="text-[10px] font-semibold text-[#8a7c6e] dark:text-[#9c8e7e] uppercase tracking-wider mb-2.5">
              Cỡ chữ
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFontScale(fontScale - 0.1)}
                disabled={fontScale <= 0.8}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#e1d5c3] dark:border-[#382f27] bg-[#f0e8dc] dark:bg-[#28221c] text-[#2d2420] dark:text-[#e8dcc8] text-xs font-bold hover:bg-amber-100 dark:hover:bg-amber-950/30 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Giảm cỡ chữ"
              >
                A−
              </button>
              <span className="flex-1 text-center text-sm font-semibold text-[#2d2420] dark:text-[#e8dcc8] tabular-nums select-none">
                {scalePct}%
              </span>
              <button
                onClick={() => setFontScale(fontScale + 0.1)}
                disabled={fontScale >= 1.5}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#e1d5c3] dark:border-[#382f27] bg-[#f0e8dc] dark:bg-[#28221c] text-[#2d2420] dark:text-[#e8dcc8] font-bold hover:bg-amber-100 dark:hover:bg-amber-950/30 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Tăng cỡ chữ"
              >
                A+
              </button>
            </div>
          </div>

          {/* ── Line spacing ── */}
          <div>
            <p className="text-[10px] font-semibold text-[#8a7c6e] dark:text-[#9c8e7e] uppercase tracking-wider mb-2.5">
              Giãn dòng
            </p>
            <div className="flex gap-1 p-1 rounded-lg bg-[#f0e8dc] dark:bg-[#28221c] border border-[#e1d5c3] dark:border-[#382f27]">
              {(['normal', 'relaxed'] as const).map(opt => (
                <button
                  key={opt}
                  onClick={() => setLineSpacing(opt)}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all ${
                    lineSpacing === opt
                      ? 'bg-amber-600 dark:bg-amber-700 text-white shadow-sm'
                      : 'text-[#7a6c5e] dark:text-[#9c8e7e] hover:text-[#2d2420] dark:hover:text-[#e8dcc8]'
                  }`}
                >
                  {opt === 'normal' ? 'Thường' : 'Thoáng'}
                </button>
              ))}
            </div>
          </div>

          {/* ── Reveal all translations ── */}
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-xs font-semibold text-[#2d2420] dark:text-[#e8dcc8]">
                Hiện tất cả bản dịch
              </p>
              <p className="text-[11px] text-[#8a7c6e] dark:text-[#9c8e7e] mt-0.5 leading-snug">
                Xem tiếng Anh ngay, không cần nhấn từng câu
              </p>
            </div>
            <button
              role="switch"
              aria-checked={revealAll}
              onClick={() => setRevealAll(!revealAll)}
              className={`relative shrink-0 w-11 h-6 rounded-full transition-colors duration-200 ${
                revealAll ? 'bg-amber-600 dark:bg-amber-700' : 'bg-[#d4c8b4] dark:bg-[#3a3028]'
              }`}
              aria-label="Bật/tắt hiện tất cả bản dịch"
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${
                  revealAll ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

        </div>
      )}
    </div>
  )
}
