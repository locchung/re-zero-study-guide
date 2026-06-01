'use client'

import React, {
  createContext, useContext, useState, useEffect,
  useCallback, useRef, useMemo,
} from 'react'

export type ReadLayout = 'inline' | 'parallel' | 'paged'
export type LineSpacing = 'normal' | 'relaxed'

export interface ProgressEntry {
  arc: number
  blockIndex: number
  totalBlocks: number
  updatedAt: number
}

export interface LastReadEntry extends ProgressEntry {
  slug: string
}

interface ReaderContextProps {
  // ── Layout ──────────────────────────────────────────────
  layout: ReadLayout
  setLayout: (layout: ReadLayout) => void
  // ── Reader preferences ──────────────────────────────────
  fontScale: number
  setFontScale: (s: number) => void
  lineSpacing: LineSpacing
  setLineSpacing: (s: LineSpacing) => void
  revealAll: boolean
  setRevealAll: (v: boolean) => void
  // ── Reading progress ────────────────────────────────────
  progress: Record<string, ProgressEntry>
  progressLoaded: boolean
  saveProgress: (slug: string, arc: number, blockIndex: number, totalBlocks: number) => void
  lastRead: LastReadEntry | null
}

const ReaderContext = createContext<ReaderContextProps | undefined>(undefined)

function persist(key: string, value: unknown): void {
  try { localStorage.setItem(key, JSON.stringify(value)) } catch { /* unavailable or full */ }
}

export function ReaderProvider({ children }: { children: React.ReactNode }) {
  const [layout, setLayoutState] = useState<ReadLayout>('inline')
  const [fontScale, setFontScaleState] = useState(1.0)
  const [lineSpacing, setLineSpacingState] = useState<LineSpacing>('normal')
  const [revealAll, setRevealAllState] = useState(false)
  const [progress, setProgress] = useState<Record<string, ProgressEntry>>({})
  const [progressLoaded, setProgressLoaded] = useState(false)

  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Load all persisted values after hydration (SSR-safe: useEffect is client-only).
  // Each setState here is intentional — this is the standard hydration-safe pattern
  // for client-only localStorage reads; not a cascading render.
  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    const savedLayout = localStorage.getItem('re-zero-reader-layout') as ReadLayout
    if (savedLayout === 'inline' || savedLayout === 'parallel' || savedLayout === 'paged') {
      setLayoutState(savedLayout)
    }

    const rawScale = parseFloat(localStorage.getItem('re-zero-font-scale') ?? '')
    if (!isNaN(rawScale) && rawScale >= 0.8 && rawScale <= 1.5) setFontScaleState(rawScale)

    const rawSpacing = localStorage.getItem('re-zero-line-spacing')
    if (rawSpacing === 'normal' || rawSpacing === 'relaxed') setLineSpacingState(rawSpacing)

    if (localStorage.getItem('re-zero-reveal-all') === 'true') setRevealAllState(true)

    try {
      const raw = JSON.parse(localStorage.getItem('re-zero-progress') ?? 'null')
      if (raw && typeof raw === 'object') setProgress(raw as Record<string, ProgressEntry>)
    } catch { /* corrupt — start fresh */ }

    setProgressLoaded(true)
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [])

  const setLayout = useCallback((l: ReadLayout) => {
    setLayoutState(l)
    persist('re-zero-reader-layout', l)
  }, [])

  const setFontScale = useCallback((s: number) => {
    const v = Math.round(Math.min(1.5, Math.max(0.8, s)) * 10) / 10
    setFontScaleState(v)
    persist('re-zero-font-scale', v)
  }, [])

  const setLineSpacing = useCallback((s: LineSpacing) => {
    setLineSpacingState(s)
    persist('re-zero-line-spacing', s)
  }, [])

  const setRevealAll = useCallback((v: boolean) => {
    setRevealAllState(v)
    persist('re-zero-reveal-all', v)
  }, [])

  // Debounced progress save — coalesces rapid updates (page turns, scroll events)
  const saveProgress = useCallback((
    slug: string, arc: number, blockIndex: number, totalBlocks: number
  ) => {
    if (saveTimer.current) clearTimeout(saveTimer.current)
    saveTimer.current = setTimeout(() => {
      const entry: ProgressEntry = { arc, blockIndex, totalBlocks, updatedAt: Date.now() }
      setProgress(prev => {
        const next = { ...prev, [slug]: entry }
        persist('re-zero-progress', next)
        return next
      })
    }, 400)
  }, [])

  // Derived: most recently read chapter that isn't finished (< 95 %)
  const lastRead = useMemo((): LastReadEntry | null => {
    let best: LastReadEntry | null = null
    for (const [slug, e] of Object.entries(progress)) {
      if (e.totalBlocks > 0 && (e.blockIndex + 1) / e.totalBlocks >= 0.95) continue
      if (!best || e.updatedAt > best.updatedAt) best = { slug, ...e }
    }
    return best
  }, [progress])

  return (
    <ReaderContext.Provider value={{
      layout, setLayout,
      fontScale, setFontScale,
      lineSpacing, setLineSpacing,
      revealAll, setRevealAll,
      progress, progressLoaded, saveProgress,
      lastRead,
    }}>
      {children}
    </ReaderContext.Provider>
  )
}

export function useReader() {
  const ctx = useContext(ReaderContext)
  if (!ctx) throw new Error('useReader must be used within a ReaderProvider')
  return ctx
}
