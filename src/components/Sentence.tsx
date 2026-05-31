'use client'

import { useState } from 'react'
import { useReader } from '@/lib/ReaderContext'

interface SentenceProps {
  en: string
  children: React.ReactNode
}

export function Sentence({ en, children }: SentenceProps) {
  const [revealed, setRevealed] = useState(false)
  const { layout } = useReader()

  if (layout === 'parallel') {
    return (
      <div 
        className="group/sentence py-3.5 border-b border-[#e6d9bf] dark:border-[#332920] transition-all duration-150 hover:bg-[#e6d9bf]/20 dark:hover:bg-[#332920]/25 rounded px-3 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 items-start animate-fade-in"
      >
        {/* Left Column: English (Muted slightly for premium visual hierarchy, but clear) */}
        <div className="text-sm md:text-[15px] italic text-[#7a6c5e] dark:text-[#a09180] pr-0 md:pr-4 order-2 md:order-1 select-all font-sans leading-relaxed">
          {en}
        </div>
        {/* Right Column: Vietnamese */}
        <div className="text-base md:text-[17px] text-[#2d2420] dark:text-[#e8dcc8] font-medium order-1 md:order-2 leading-relaxed">
          {children}
        </div>
      </div>
    )
  }

  // Default 'inline' layout
  return (
    <div
      onClick={() => setRevealed((r) => !r)}
      className="cursor-pointer group/sentence hover:bg-amber-50 dark:hover:bg-amber-900/10 rounded transition-colors duration-150 py-1 px-1.5 my-1"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setRevealed((r) => !r)
        }
      }}
      aria-expanded={revealed}
    >
      <span className="text-base md:text-[17px] leading-relaxed font-medium text-[#2d2420] dark:text-[#e8dcc8]">{children}</span>
      {revealed && (
        <span className="block mt-2 mb-3 pl-4 border-l-2 border-amber-500 dark:border-amber-500 text-sm md:text-[15px] italic text-[#7a6c5e] dark:text-[#a09180] animate-fade-in-up font-sans leading-relaxed select-all">
          {en}
        </span>
      )}
    </div>
  )
}

