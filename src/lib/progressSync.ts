import type { SupabaseClient } from '@supabase/supabase-js'
import type { ProgressEntry, ReadLayout, LineSpacing } from './ReaderContext'

export interface ReaderPrefs {
  layout: ReadLayout
  fontScale: number
  lineSpacing: LineSpacing
  revealAll: boolean
  updatedAt: number
}

export interface RemoteState {
  progress: Record<string, ProgressEntry>
  prefs: ReaderPrefs | null
}

interface ProgressRow {
  slug: string
  arc: string
  block_index: number
  total_blocks: number
  updated_at: string
}

interface PrefsRow {
  layout: ReadLayout
  font_scale: number | string
  line_spacing: LineSpacing
  reveal_all: boolean
  updated_at: string
}

export async function pullRemote(
  supabase: SupabaseClient,
  userId: string,
): Promise<RemoteState> {
  const [progressRes, prefsRes] = await Promise.all([
    supabase
      .from('reading_progress')
      .select('slug, arc, block_index, total_blocks, updated_at')
      .eq('user_id', userId),
    supabase
      .from('reader_prefs')
      .select('layout, font_scale, line_spacing, reveal_all, updated_at')
      .eq('user_id', userId)
      .maybeSingle(),
  ])

  if (progressRes.error) throw progressRes.error
  if (prefsRes.error) throw prefsRes.error

  const progress: Record<string, ProgressEntry> = {}
  for (const row of (progressRes.data ?? []) as ProgressRow[]) {
    progress[row.slug] = {
      arc: Number(row.arc),
      blockIndex: row.block_index,
      totalBlocks: row.total_blocks,
      updatedAt: new Date(row.updated_at).getTime(),
    }
  }

  const p = prefsRes.data as PrefsRow | null
  const prefs: ReaderPrefs | null = p
    ? {
        layout: p.layout,
        fontScale: Number(p.font_scale),
        lineSpacing: p.line_spacing,
        revealAll: p.reveal_all,
        updatedAt: new Date(p.updated_at).getTime(),
      }
    : null

  return { progress, prefs }
}

export interface MergeResult {
  merged: Record<string, ProgressEntry>
  toPush: Record<string, ProgressEntry>
}

export function mergeProgress(
  local: Record<string, ProgressEntry>,
  remote: Record<string, ProgressEntry>,
): MergeResult {
  const merged: Record<string, ProgressEntry> = { ...remote }
  const toPush: Record<string, ProgressEntry> = {}
  for (const [slug, lEntry] of Object.entries(local)) {
    const rEntry = remote[slug]
    if (!rEntry || lEntry.updatedAt > rEntry.updatedAt) {
      merged[slug] = lEntry
      toPush[slug] = lEntry
    }
  }
  return { merged, toPush }
}

export function mergePrefs(
  local: ReaderPrefs,
  remote: ReaderPrefs | null,
): { merged: ReaderPrefs; pushLocal: boolean } {
  if (!remote || local.updatedAt > remote.updatedAt) {
    return { merged: local, pushLocal: true }
  }
  return { merged: remote, pushLocal: false }
}

export async function pushProgress(
  supabase: SupabaseClient,
  userId: string,
  entries: Record<string, ProgressEntry>,
): Promise<void> {
  const rows = Object.entries(entries).map(([slug, e]) => ({
    user_id: userId,
    slug,
    arc: String(e.arc),
    block_index: e.blockIndex,
    total_blocks: e.totalBlocks,
    updated_at: new Date(e.updatedAt).toISOString(),
  }))
  if (rows.length === 0) return
  const { error } = await supabase
    .from('reading_progress')
    .upsert(rows, { onConflict: 'user_id,slug' })
  if (error) throw error
}

export async function pushPrefs(
  supabase: SupabaseClient,
  userId: string,
  prefs: ReaderPrefs,
): Promise<void> {
  const { error } = await supabase.from('reader_prefs').upsert(
    {
      user_id: userId,
      layout: prefs.layout,
      font_scale: prefs.fontScale,
      line_spacing: prefs.lineSpacing,
      reveal_all: prefs.revealAll,
      updated_at: new Date(prefs.updatedAt).toISOString(),
    },
    { onConflict: 'user_id' },
  )
  if (error) throw error
}
