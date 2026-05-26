'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

interface WordProps {
  en: string
  children: React.ReactNode
}

export function Word({ en, children }: WordProps) {
  const [show, setShow] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      setShow((s) => !s)
    },
    []
  )

  useEffect(() => {
    if (!show) return
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setShow(false)
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [show])

  return (
    <span
      ref={ref}
      onClick={handleClick}
      className="relative cursor-pointer border-b border-dotted border-amber-600 dark:border-amber-500 hover:bg-amber-100/70 dark:hover:bg-amber-900/30 transition-colors rounded-sm"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setShow((s) => !s)
        }
      }}
    >
      {children}
      {show && (
        <>
          <span className="hidden sm:inline-block absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2.5 py-1 bg-[#2a1f14] text-[#e8dcc8] text-sm rounded-lg shadow-lg whitespace-nowrap z-50 animate-fade-in">
            {en}
            <span className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-[#2a1f14]" />
          </span>
          <span className="sm:hidden fixed bottom-4 left-4 right-4 px-4 py-3 bg-[#2a1f14] text-[#e8dcc8] text-base rounded-xl shadow-2xl z-50 text-center animate-fade-in-up">
            {en}
          </span>
        </>
      )}
    </span>
  )
}
