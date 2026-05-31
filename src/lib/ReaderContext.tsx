'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export type ReadLayout = 'inline' | 'parallel' | 'paged'

interface ReaderContextProps {
  layout: ReadLayout
  setLayout: (layout: ReadLayout) => void
}

const ReaderContext = createContext<ReaderContextProps | undefined>(undefined)

export function ReaderProvider({ children }: { children: React.ReactNode }) {
  const [layout, setLayoutState] = useState<ReadLayout>('inline')

  useEffect(() => {
    const saved = localStorage.getItem('re-zero-reader-layout') as ReadLayout
    if (saved === 'inline' || saved === 'parallel' || saved === 'paged') {
      setLayoutState(saved)
    }
  }, [])

  const setLayout = (newLayout: ReadLayout) => {
    setLayoutState(newLayout)
    try {
      localStorage.setItem('re-zero-reader-layout', newLayout)
    } catch (e) {
      console.warn('Could not save reader layout to localStorage', e)
    }
  }

  return (
    <ReaderContext.Provider value={{ layout, setLayout }}>
      {children}
    </ReaderContext.Provider>
  )
}

export function useReader() {
  const context = useContext(ReaderContext)
  if (!context) {
    throw new Error('useReader must be used within a ReaderProvider')
  }
  return context
}

