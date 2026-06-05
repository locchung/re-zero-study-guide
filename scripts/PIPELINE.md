# Chapter Pipeline

One unified tool — `scripts/pipeline.mjs` — drives every chapter from crawl to published MDX,
replacing the old per-chapter `scrape_*/split_*/merge_*/write_*/compile_*/translate_*` scripts.

## Config

`scripts/chapters.config.json` is the single source of truth. Add one entry per chapter:

```json
{ "num": 66, "arc": 7, "url": "https://witchculttranslation.com/.../arc-7-chapter-66-hiain-yatz/", "title": "Chương 66: Hiain Yatz | Hiain Yatz" }
```

## Stages

Run with `pnpm chapter <stage> <num>` (or `node scripts/pipeline.mjs <stage> <num>`):

| Stage | What it does | Output |
|-------|--------------|--------|
| `crawl <num>` | Fetch the WCT page, extract story paragraphs, print the page's real title | `raw/chapter_<num>.txt` + `translation_temp/arc<A>_ch<num>_raw.json` |
| `scaffold <num>` | Make a translation worksheet (en copied, vi blank) | `translation_temp/arc<A>_ch<num>_translated.json` |
| *(translate)* | **Human/skill step** — fill the `vi` fields per [the translation skill](../.claude/skills/rezero-vn-translation/SKILL.md) | — |
| `compile <num>` | Assemble en+vi into the chapter page (**aborts if the title fails the slug check**) | `content/arc<A>/chuong-<num>.mdx` |
| `validate <num>` | Assert title integrity: URL slug ↔ config title ↔ MDX frontmatter | report (exit 1 on mismatch) |
| `retitle <num>` | Re-sync the MDX frontmatter + `chapters.ts` row title from the config | — |
| `qa <num>` | `validate` + `check_terms.py` + `check_completeness.py` | report |
| `register <num>` | Add the entry to `src/lib/chapters.ts` (idempotent) | — |
| `status` | Show every configured chapter's progress | table |
| `all <num>` | `crawl` → `scaffold` (stops at the translate step) | — |

## Title integrity — why a wrong title can no longer slip through

The chuong-66 bug ("The Star that Earnestly Wishes" stamped onto Hiain Yatz content) happened because an old compile script had a **hardcoded Arc-6 title list**. That class of error is now structurally prevented:

- **Single source of truth** — titles live only in `chapters.config.json`, never hardcoded in a script.
- **Slug assertion** — the WCT URL slug (`.../chapter-66-hiain-yatz/` → "hiain yatz") is authoritative. `compile` and `validate` require the title to overlap the slug; `compile` **refuses to run** otherwise (override only with `--force`).
- **Three-way check** — `validate` confirms slug ↔ config ↔ compiled MDX frontmatter all agree, and it runs automatically inside `qa`.
- **`crawl` prints the page's real `<h1>` title**, so a wrong config entry is obvious immediately.

If you ever see a title mismatch again, fix `chapters.config.json` and run `pnpm chapter retitle <num>`.

## Typical flow for a new chapter

```bash
pnpm chapter all 71          # crawl + scaffold
#  → translate translation_temp/arc7_ch71_translated.json (fill vi) using the skill
pnpm chapter compile 71
pnpm chapter qa 71           # fix anything it flags, recompile
pnpm chapter register 71
pnpm chapter status          # confirm ✓ across the row
```

## Notes

- The actual translation is intentionally **not** automated — it's the human/skill step. The pipeline scaffolds it, then validates the result.
- `qa` reuses the skill's checkers (`.claude/skills/rezero-vn-translation/scripts/`). The completeness checker auto-locates the raw source (`raw/` → `scratch/` → `translation_temp/`).
- Known data issue (pre-existing, not from the pipeline): `src/lib/chapters.ts` mixes arc-6 and arc-7 numbering, so some `chuong-NN` slugs appear twice and a few frontmatter titles don't match their content (e.g. chuong-66). Resolve titles/numbering before relying on `register` for arc-7 entries.
