'use client'

import React, {
  createContext, useContext, useState, useEffect,
  useCallback, useRef, useMemo,
} from 'react'
import { useAuth } from './AuthContext'
import { getSupabaseBrowserClient } from './supabase/client'
import {
  pullRemote, mergeProgress, mergePrefs,
  pushProgress, pushPrefs,
  type ReaderPrefs,
} from './progressSync'

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

const PREFS_UPDATED_KEY = 're-zero-prefs-updated-at'

function readPrefsUpdatedAt(): number {
  try {
    const v = Number(localStorage.getItem(PREFS_UPDATED_KEY))
    return Number.isFinite(v) ? v : 0
  } catch { return 0 }
}

function writePrefsUpdatedAt(ts: number): void {
  try { localStorage.setItem(PREFS_UPDATED_KEY, String(ts)) } catch { /* ignore */ }
}

export function ReaderProvider({ children }: { children: React.ReactNode }) {
  const { user, configured } = useAuth()
  const [layout, setLayoutState] = useState<ReadLayout>('inline')
  const [fontScale, setFontScaleState] = useState(1.0)
  const [lineSpacing, setLineSpacingState] = useState<LineSpacing>('normal')
  const [revealAll, setRevealAllState] = useState(false)
  const [progress, setProgress] = useState<Record<string, ProgressEntry>>({})
  const [progressLoaded, setProgressLoaded] = useState(false)

  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const prefsPushTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const reconciledUserId = useRef<string | null>(null)
  // Latest values for use inside debounced callbacks without retriggering effects
  const latest = useRef({ layout, fontScale, lineSpacing, revealAll })
  useEffect(() => {
    latest.current = { layout, fontScale, lineSpacing, revealAll }
  }, [layout, fontScale, lineSpacing, revealAll])

  // Load all persisted values after hydration (SSR-safe: useEffect is client-only).
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

  // One-shot reconcile on login / user change.
  useEffect(() => {
    if (!user) {
      reconciledUserId.current = null
      return
    }
    if (!configured || !progressLoaded) return
    if (reconciledUserId.current === user.id) return
    reconciledUserId.current = user.id

    let cancelled = false
    const supabase = getSupabaseBrowserClient()
    const uid = user.id

    void (async () => {
      try {
        const remote = await pullRemote(supabase, uid)
        if (cancelled) return

        // Progress merge
        const localProgress = JSON.parse(
          localStorage.getItem('re-zero-progress') ?? 'null',
        ) as Record<string, ProgressEntry> | null
        const { merged, toPush } = mergeProgress(localProgress ?? {}, remote.progress)
        setProgress(merged)
        persist('re-zero-progress', merged)
        if (Object.keys(toPush).length > 0) {
          await pushProgress(supabase, uid, toPush)
        }

        // Prefs merge
        const localPrefs: ReaderPrefs = {
          layout: latest.current.layout,
          fontScale: latest.current.fontScale,
          lineSpacing: latest.current.lineSpacing,
          revealAll: latest.current.revealAll,
          updatedAt: readPrefsUpdatedAt(),
        }
        const { merged: mergedPrefs, pushLocal } = mergePrefs(localPrefs, remote.prefs)
        if (cancelled) return
        if (mergedPrefs !== localPrefs) {
          setLayoutState(mergedPrefs.layout)
          setFontScaleState(mergedPrefs.fontScale)
          setLineSpacingState(mergedPrefs.lineSpacing)
          setRevealAllState(mergedPrefs.revealAll)
          persist('re-zero-reader-layout', mergedPrefs.layout)
          persist('re-zero-font-scale', mergedPrefs.fontScale)
          persist('re-zero-line-spacing', mergedPrefs.lineSpacing)
          persist('re-zero-reveal-all', mergedPrefs.revealAll)
          writePrefsUpdatedAt(mergedPrefs.updatedAt)
        }
        if (pushLocal && localPrefs.updatedAt > 0) {
          await pushPrefs(supabase, uid, localPrefs)
        }
      } catch (err) {
        console.error('[ReaderContext] sync on login failed', err)
      }
    })()

    return () => { cancelled = true }
  }, [user, configured, progressLoaded])

  const schedulePrefsPush = useCallback(() => {
    const now = Date.now()
    writePrefsUpdatedAt(now)
    const uid = reconciledUserId.current
    if (!configured || !uid) return
    if (prefsPushTimer.current) clearTimeout(prefsPushTimer.current)
    prefsPushTimer.current = setTimeout(() => {
      const supabase = getSupabaseBrowserClient()
      const prefs: ReaderPrefs = {
        layout: latest.current.layout,
        fontScale: latest.current.fontScale,
        lineSpacing: latest.current.lineSpacing,
        revealAll: latest.current.revealAll,
        updatedAt: now,
      }
      pushPrefs(supabase, uid, prefs).catch(err => {
        console.error('[ReaderContext] pushPrefs failed', err)
      })
    }, 400)
  }, [configured])

  const setLayout = useCallback((l: ReadLayout) => {
    setLayoutState(l)
    persist('re-zero-reader-layout', l)
    schedulePrefsPush()
  }, [schedulePrefsPush])

  const setFontScale = useCallback((s: number) => {
    const v = Math.round(Math.min(1.5, Math.max(0.8, s)) * 10) / 10
    setFontScaleState(v)
    persist('re-zero-font-scale', v)
    schedulePrefsPush()
  }, [schedulePrefsPush])

  const setLineSpacing = useCallback((s: LineSpacing) => {
    setLineSpacingState(s)
    persist('re-zero-line-spacing', s)
    schedulePrefsPush()
  }, [schedulePrefsPush])

  const setRevealAll = useCallback((v: boolean) => {
    setRevealAllState(v)
    persist('re-zero-reveal-all', v)
    schedulePrefsPush()
  }, [schedulePrefsPush])

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
      const uid = reconciledUserId.current
      if (configured && uid) {
        const supabase = getSupabaseBrowserClient()
        pushProgress(supabase, uid, { [slug]: entry }).catch(err => {
          console.error('[ReaderContext] pushProgress failed', err)
        })
      }
    }, 400)
  }, [configured])

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
