---
name: rezero-vn-translation
description: Translates Re:Zero web novel chapters from English into literary Vietnamese, outputting MDX with Sentence and Word components. Applies character-appropriate forms of address (xưng hô), identifies the arc's central storyline for full translation, and concisely summarizes flashbacks and lore tangents. Use when the user provides Re:Zero chapter text to translate into Vietnamese MDX format for the study guide.
---

# Re:Zero — Vietnamese Translation Skill

## Step 0 — Read the full passage first

Before writing a single word, read the entire passage. Understand the scene's purpose, emotional arc, and where it sits in the chapter. Translation quality depends entirely on comprehension before composition.

If the arc's central storyline is not obvious from the text, ask the user for a one-sentence summary before proceeding. For Arc 6 specifically, consult [references/arc6-context.md](references/arc6-context.md).

## Step 1 — Classify each paragraph

Every paragraph falls into one of two categories. The determining question is: **does this passage directly advance the arc's central conflict or a character's irreversible change?**

**FULL TRANSLATION** — translate sentence by sentence with `<Sentence>` + `<Word>` markup when the passage is:
- Directly part of the arc's stated mission or central conflict
- A scene where a trial, contract, battle, or objective is introduced, attempted, or resolved
- A character death, identity reveal, or power/relationship transformation
- A climactic battle sequence tied to the arc's stakes
- Key emotional confrontations where characters reach an irreversible decision
- Any moment that would cause a reader to lose crucial plot context if summarized

**SUMMARIZE** — 2–4 cohesive Vietnamese sentences, single `<Sentence>` block when the passage is:
- Extended lore or world-building not directly tied to the current scene's stakes
- Flashbacks to events the reader already knows (unless they reveal genuinely new information)
- Repeated internal monologue covering emotional ground already established this chapter
- Tangential comedic exchanges with no plot consequence
- Info-dumps reducible to one essential fact

For summarized passages, the `en` attribute should contain a **bracketed description** `[...]` of the original — not the verbatim source text.

### Arc-specific main plot rules

**Arc 6 (Pleiades Watchtower):** The 5 obstacles, Subaru's name-loss and recovery, tower conquest finale (Ch. 85–90), identity reveals (Louis Arneb, Shaula, Sage Echidna) → always full translation. See [references/arc6-context.md](references/arc6-context.md) for the full structure.

**Arc 4 (Sanctuary / Emilia's Trials):** Emilia's three trials, Subaru's past-life revelation, Roswaal's contract, Garfiel's arc → always full translation.

**Arc 5 (Pristella Water City):** Sin Archbishop appearances and battles, the five Archbishops' objectives, Regulus scenes → always full translation. Note: Regulus's monologues are intentionally long — do NOT summarize them; their exhausting length is characterisation.

**Arc 3 (Royal Capital):** Subaru's social exile ("Witch's Husband"), Betelgeuse/Petelgeuse scenes, the "I love you" moment → always full translation.

**Arc 1–2:** Every moment of Subaru's loop and its resolution, the Rem confession scene → always full translation.

**Other arcs:** Identify the arc's central mission from context and apply the principles above.

## Step 2 — Apply translation philosophy

**Context-first, not word-first.** Understand the full sentence meaning before writing Vietnamese. Re-read it in the paragraph's context; then write as a Vietnamese author would.

**Natural prose.** Write idiomatic Vietnamese — use idiomatic expressions, vary sentence structure, use particles and conjunctions natural to Vietnamese literary fiction. A sentence that sounds translated is a failure.

**Emotional register.** Dramatic stays dramatic. Comedic stays light. Tense stays tense. Do not flatten emotional peaks with neutral phrasing.

**Avoid repetition.** Do not repeat the same particle, filler phrase, or word (e.g., "nhất định", "chắc chắn", "thực sự") more than once per paragraph. Vary naturally.

**Character voice consistency.** Every character must sound like themselves, not like a generic narrator. A Beatrice line that could have been said by Emilia is wrong.

## Step 3 — Apply xưng hô (forms of address)

See [references/characters.md](references/characters.md) for each character's full pronoun set and speech style.

Quick reference:

| Character | Self | To Subaru | Signature markers |
|-----------|------|-----------|-------------------|
| Subaru | tôi / mình | — | Casual, modern humour, self-deprecating |
| Emilia | tôi | Subaru | Warm, earnest, never sarcastic |
| Beatrice | ta / Betty (3rd person) | ngươi / cậu | "…nhỉ" (I suppose), "…đấy chứ" (in fact) |
| Rem | tôi | Subaru-kun → Subaru | Devoted, gentle, fierce in battle |
| Ram | tôi | cậu | Curt, proud, minimal words |
| Roswaal | ta | cậu / ngài | Elongated theatrical speech, "~" |
| Otto | tôi | Subaru / cậu | Rapid, exasperated, practical |
| Garfiel | tao | mày / cậu | Rough, boastful, secretly warm |
| Priscilla | ta | — | Extreme haughtiness, everything serves her |
| Anastasia | tôi | — | Merchant warmth, cunning undertone |
| Julius | tôi | cậu | Formal, eloquent, knightly |
| Ferris | Ferri (3rd person) | — | Feminine register, "-nya" → "nha~" |
| Reinhard | tôi | Subaru | Polite, earnest, unintentionally imposing |
| Felt | tao / tớ | — | Street rough, no-nonsense |
| Meili | em | anh/chị | Childlike, "~", "nè", "đó nha" |
| Regulus | tôi | — | Endless calm monologues, self-righteous |
| Echidna (sage) | tôi | — | Analytical, dry, concise |
| Shaula | ta / tôi | — | Loud, passionate, reverent toward Sage |

**Beatrice's markers are non-negotiable** — "…nhỉ" and "…đấy chứ" define her voice. Do not normalise them.

## Step 4 — MDX output format

See [references/mdx-format.md](references/mdx-format.md) for exact rules, examples, and HTML-escaping reference.

Key rules:
- Every paragraph/sentence → `<Sentence en="English">Vietnamese</Sentence>`
- Vocabulary worth studying → `<Word en="English">Vietnamese</Word>` inside Sentence, phrase-level groups
- Dialogue lines → `<Sentence>` only, no `<Word>` tags inside
- Summarized passages → single `<Sentence>`, no `<Word>` tags
- HTML-escape `en` attributes: `"` → `&quot;`, `'` → `&apos;`, `&` → `&amp;`

## Step 5 — Self-review before outputting

Read the Vietnamese output mentally as continuous prose:
- Does it sound like a Vietnamese author wrote it, or like a translated text?
- Is every character's xưng hô consistent throughout?
- Are emotional peaks preserved?
- Are any particles or phrases overused?

Fix any issues. Output only the MDX block — no commentary, no explanation outside the MDX.

## Universal Re:Zero terminology

| English | Vietnamese |
|---------|-----------|
| Return by Death | Quay Về Từ Cái Chết |
| Witch Beasts | Ma Thú |
| Spirit | Tinh Linh |
| Divine Protection | Phúc Lành |
| Magic / Mana | Ma Pháp / Mana |
| Archbishop of Sin | Tổng Giám Mục Tội Lỗi |
| Sin Archbishop (specific) | Tổng Giám Mục [Tội Danh] |
| Royal Selection | Cuộc Tuyển Chọn Vương Nữ |
| Ground Dragon | Long Đất |
| Yin / Yang Magic | Ma Pháp Âm / Ma Pháp Dương |
| Quasi-Spirit | Bán Tinh Linh |
| Trial | Thử Thách |
| Sanctuary | Thánh Địa |
| Sage | Hiền Nhân |
| Witch of [Sin] | Phù Thủy [Tội Danh] |

For arc-specific terms (Pleiades Watchtower, Augria Sand Dunes, etc.) see [references/arc6-context.md](references/arc6-context.md).
