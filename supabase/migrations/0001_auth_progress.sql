-- Per-chapter reading progress
create table if not exists public.reading_progress (
  user_id      uuid not null references auth.users(id) on delete cascade,
  slug         text not null,
  arc          text not null,
  block_index  int  not null default 0,
  total_blocks int  not null default 0,
  updated_at   timestamptz not null default now(),
  primary key (user_id, slug)
);

alter table public.reading_progress enable row level security;

drop policy if exists "rp_select_own" on public.reading_progress;
drop policy if exists "rp_insert_own" on public.reading_progress;
drop policy if exists "rp_update_own" on public.reading_progress;
drop policy if exists "rp_delete_own" on public.reading_progress;

create policy "rp_select_own" on public.reading_progress
  for select using (auth.uid() = user_id);
create policy "rp_insert_own" on public.reading_progress
  for insert with check (auth.uid() = user_id);
create policy "rp_update_own" on public.reading_progress
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "rp_delete_own" on public.reading_progress
  for delete using (auth.uid() = user_id);

create index if not exists reading_progress_user_updated_idx
  on public.reading_progress (user_id, updated_at desc);

-- Reader UI preferences (one row per user)
create table if not exists public.reader_prefs (
  user_id      uuid primary key references auth.users(id) on delete cascade,
  layout       text not null default 'inline'
                 check (layout in ('inline','parallel','paged')),
  font_scale   numeric(3,2) not null default 1.00
                 check (font_scale between 0.80 and 1.50),
  line_spacing text not null default 'normal'
                 check (line_spacing in ('normal','relaxed')),
  reveal_all   boolean not null default false,
  updated_at   timestamptz not null default now()
);

alter table public.reader_prefs enable row level security;

drop policy if exists "rprefs_select_own" on public.reader_prefs;
drop policy if exists "rprefs_insert_own" on public.reader_prefs;
drop policy if exists "rprefs_update_own" on public.reader_prefs;

create policy "rprefs_select_own" on public.reader_prefs
  for select using (auth.uid() = user_id);
create policy "rprefs_insert_own" on public.reader_prefs
  for insert with check (auth.uid() = user_id);
create policy "rprefs_update_own" on public.reader_prefs
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
