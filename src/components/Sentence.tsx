'use client'

import { useState } from 'react'

interface SentenceProps {
  en: string
  children: React.ReactNode
}

export function Sentence({ en, children }: SentenceProps) {
  const [revealed, setRevealed] = useState(false)

  return (
    <span
      onClick={() => setRevealed((r) => !r)}
      className="cursor-pointer group/sentence hover:bg-amber-50 dark:hover:bg-amber-900/10 rounded transition-colors duration-150"
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
      <span>{children}</span>
      {revealed && (
        <span className="block mt-2 mb-3 pl-4 border-l-2 border-amber-400 text-sm italic text-gray-600 dark:text-gray-400 animate-fade-in-up">
          {en}
        </span>
      )}
    </span>
  )
}
