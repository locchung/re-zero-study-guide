# Pipeline Guide — from web page to published chapter

Translation is **one stage** of a larger pipeline. The unified tool `scripts/pipeline.mjs`
(run as `pnpm chapter <stage> <num>`) handles crawl, compile, QA, and registration; the
actual Vietnamese translation — the work this skill describes — happens in the gap between
`scaffold` and `compile`.

```
crawl ─▶ scaffold ─▶ [TRANSLATE ← this skill] ─▶ compile ─▶ qa ─▶ register
```

## Where this skill fits

1. **`pnpm chapter all <num>`** crawls the WCT page and scaffolds a worksheet at
   `scripts/translation_temp/arc<A>_ch<num>_translated.json` — a list of `{ id, en, vi }`
   with `en` filled and `vi` empty.
2. **You translate** by filling every `vi` field, applying this skill's full workflow:
   Step 1 (classify) → Steps 2–4 (philosophy, xưng hô, format) → PASS 1 → PASS 2 →
   Step 5/6 (checklist + adversarial review). The raw English is also in
   `raw/chapter_<num>.txt` if you prefer to read it as continuous prose first.
3. **`pnpm chapter compile <num>`** assembles your `en`+`vi` into
   `content/arc<A>/chuong-<num>.mdx` (the same `<Sentence>` format described in
   [mdx-format.md](mdx-format.md)). It **aborts if the title doesn't match the URL slug**.
4. **`pnpm chapter qa <num>`** runs the title check plus this skill's two checkers —
   `check_terms.py` and `check_completeness.py` — automatically. Fix what it flags, recompile.
5. **`pnpm chapter register <num>`** adds the chapter to `src/lib/chapters.ts`.

## The commands (run from the repo root)

| Command | Purpose |
|---------|---------|
| `pnpm chapter all <num>` | Crawl + scaffold a new chapter (then translate the worksheet) |
| `pnpm chapter compile <num>` | Worksheet → MDX chapter page |
| `pnpm chapter qa <num>` | Title + terminology + completeness checks (this skill's QA gate) |
| `pnpm chapter validate <num>` | Title integrity only (slug ↔ config ↔ MDX) |
| `pnpm chapter retitle <num>` | Re-sync the title from `chapters.config.json` |
| `pnpm chapter status` | Progress table for all configured chapters |

Adding a new chapter = one entry in `scripts/chapters.config.json`
(`{ num, arc, url, title }`). The title's English half must match the URL slug.

## QA maps directly to this skill's checks

`pnpm chapter qa` is the automated half of **Step 5 (Completeness checklist)** and parts of
**Step 6 (Adversarial review)**:

- `check_terms.py` → terminology, đã-as-và (Cat 6), MT artifacts (Cat 8), pleonasm (Cat 15),
  slang (Cat 18), doubled-sẽ (Cat 19), dialect (Cat 21), connector overuse.
- `check_completeness.py` → dropped paragraphs/dialogue (Cat 10.2), against the raw source.

A clean `qa` does **not** replace the human passes — naturalness (PASS 2) and voice/register
(Step 6 tests 1–5, 10) still need your eye. Run `qa`, fix the mechanical issues, then do the
adversarial read.

## Full pipeline reference

Project-level details, the title-integrity guard, and the directory layout live in
[`scripts/PIPELINE.md`](../../../../scripts/PIPELINE.md).
