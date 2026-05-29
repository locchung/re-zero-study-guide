---
name: rezero-vn-translation
description: Translates Re:Zero Arc 6 web novel chapters from English into literary Vietnamese, outputting MDX with Sentence and Word components. Applies character-appropriate forms of address (xưng hô), preserves main plot (the 5 obstacles / Pleiades Watchtower conquest), and concisely summarizes flashbacks and lore tangents. Use when the user provides Re:Zero Arc 6 chapter text to translate into Vietnamese MDX format for the study guide.
---

# Re:Zero Arc 6 — Vietnamese Translation Skill

## Step 0 — Read the full passage first

Before writing a single word, read the entire passage. Understand the scene's purpose, emotional arc, and where it sits in the chapter. Translation quality depends entirely on comprehension before composition.

## Step 1 — Classify each paragraph

Every paragraph falls into one of two categories:

**FULL TRANSLATION** — translate sentence by sentence with `<Sentence>` + `<Word>` markup:
- Any scene where a numbered obstacle/trial is introduced, attempted, or concluded
- Subaru losing or regaining his name — every instance, no exceptions
- Beatrice and Subaru's joint magic (EMT, EMM)
- Identity reveals (Louis Arneb, Sage Echidna, Shaula's true nature)
- Battle sequences directly part of the tower capture
- Key emotional confrontations and decisions
- Any dialogue where characters commit to an irreversible action

**SUMMARIZE** — 2–4 cohesive Vietnamese sentences, wrapped in a single `<Sentence>`:
- Extended lore dumps about Augria Sand Dunes history or ecology
- Flashbacks to Subaru's Japan life (unless directly relevant to his current identity crisis)
- Repeated internal monologue covering the same emotional ground already established
- World-building tangents (magic theory, witch beast biology, expedition history) not tied to the immediate scene
- Comedic tangents that don't affect the plot

For summarized passages, the `en` attribute should contain a **bracketed summary** of the source, not the verbatim source text.

## Step 2 — Apply translation philosophy

**Context-first, not word-first.** Understand the full sentence meaning before writing Vietnamese. Re-read the sentence in context of the paragraph; then write Vietnamese as a Vietnamese author would.

**Natural prose.** Write idiomatic Vietnamese, not calques. A sentence that "sounds translated" is a failure. Vary sentence structure. Use particles, conjunctions, and rhythm natural to Vietnamese literary fiction.

**Emotional register.** Dramatic stays dramatic. Comedic stays light. Tense stays tense. Do not flatten emotional peaks with neutral phrasing.

**Avoid repetition.** Do not repeat the same particle, filler phrase, or word (e.g., "nhất định", "chắc chắn", "thực sự") more than once per paragraph. Vary naturally.

## Step 3 — Apply xưng hô (forms of address)

See [references/characters.md](references/characters.md) for each character's pronoun set and speech style.

Quick reference:

| Character | Self | To Subaru | Signature markers |
|-----------|------|-----------|-------------------|
| Subaru | tôi / mình | — | Casual, modern humour, self-deprecating |
| Emilia | tôi | Subaru | Warm, earnest, never sarcastic |
| Beatrice | ta / Betty (3rd person) | ngươi / cậu | "…nhỉ" (I suppose), "…đấy chứ" (in fact) |
| Julius | tôi | cậu | Formal, eloquent, never colloquial |
| Meili | em | anh/chị | Childlike, "~", "nè", "đó nha" |
| Echidna (sage) | tôi | — | Analytical, dry, concise |
| Ram | tôi | cậu | Curt, proud, short sentences |
| Shaula | ta / tôi | — | Loud, passionate, exclamatory |

**Beatrice's speech markers are non-negotiable.** They define her character. Do not smooth them into normal modern Vietnamese.
- "I suppose" → "…nhỉ?" at sentence end
- "in fact" → "…đấy chứ" at sentence end
- She refers to herself as "Betty" in third person — keep "Betty"

## Step 4 — MDX output format

See [references/mdx-format.md](references/mdx-format.md) for exact rules, examples, and HTML-escaping reference.

Key rules:
- Every paragraph/sentence → `<Sentence en="English">Vietnamese</Sentence>`
- Vocabulary worth studying → `<Word en="English">Vietnamese</Word>` inside Sentence, phrase-level (not single-word splits)
- Dialogue lines → `<Sentence>` only, no `<Word>` tags inside
- Summarized passages → single `<Sentence>`, no `<Word>` tags
- HTML-escape `en` attributes: `"` → `&quot;`, `'` → `&apos;`, `&` → `&amp;`

## Step 5 — Self-review before outputting

Read the Vietnamese output mentally as continuous prose:
- Does it sound like a Vietnamese author wrote it, or like a translated text?
- Are all characters' xưng hô consistent?
- Are emotional peaks preserved?
- Are any phrases overused?

Fix any issues, then output the complete MDX block. Output only MDX — no commentary, no explanation.

## Key terminology

See [references/arc6-context.md](references/arc6-context.md) for the full term glossary, the 5-obstacle structure, and chapters requiring special handling.

Quick terms:

| English | Vietnamese |
|---------|-----------|
| Pleiades Watchtower | Tháp Canh Pleiades |
| Witch Beasts | Ma Thú |
| Augria Sand Dunes | Cồn Cát Augria |
| Return by Death | Quay Về Từ Cái Chết |
| The 5 Obstacles | Năm Chướng Ngại |
| Sage | Hiền Nhân |
| Archbishop of Sin | Tổng Giám Mục Tội Lỗi |
| Spirit | Tinh Linh |
| Trial / Obstacle | Thử Thách / Chướng Ngại |
