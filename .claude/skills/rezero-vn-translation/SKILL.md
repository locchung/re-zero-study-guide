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

**Arc 1 (Starting Life in Another World / Capital City):** Subaru's arrival in the other world, every loop and its resolution, meeting Emilia, the loot house incident, Reinhard's intervention → always full translation.

**Arc 2 (The Week at the Mansion):** Subaru's deaths and loops at Roswaal's mansion, discovering Rem and Ram, the Witch Beast attacks, the Rem confession scene, Subaru earning trust → always full translation.

**Arc 3 (Return to the Royal Capital / Truth of Zero):** Subaru's social exile ("Witch's Husband"), the Royal Selection ceremony, Petelgeuse Romanée-Conti and the Witch Cult attack (note: WCT canonical spelling is "Petelgeuse", not "Betelgeuse"), Julius's duel with Subaru, Subaru's alliance with the merchants, the White Whale subjugation, the "I love you" / "Rem, from here on let's talk about what's to come" moment → always full translation.

**Arc 4 (Everlasting Contract / Sanctuary):** Emilia's three Trials in the Sanctuary, Subaru's past-life revelation (Trial 2), Roswaal's Gospel and contract, Garfiel's transformation arc, Beatrice's "choose me" scene, the Rabbit Witch Beast annihilation, the Great Rabbit battle, Otto's backstory, Frederica and Petra's escape → always full translation.

**Arc 5 (Stars What Make History / Priestella Water City):** All five Sin Archbishop appearances and battles (Regulus Corneas, Sirius Romanée-Conti, Lye Batenkaitos, Roy Alphard, Capella Emerada Lugunica), Regulus vs Reinhard, the waterway battles, Crusch's condition, Subaru's Cor Leonis awakening → always full translation. Note: Regulus's monologues are intentionally long — do NOT summarize them; their exhausting length is characterisation.

**Arc 6 (Hall of Memories / Pleiades Watchtower):** The 5 obstacles, Subaru's name-loss and recovery, tower conquest finale (Ch. 85–90), identity reveals (Louis Arneb, Shaula, Sage Echidna), Reid Astrea encounters, the Centaurus witch beast horde, Meili's control → always full translation. See [references/arc6-context.md](references/arc6-context.md) for the full structure.

**Arc 7 (The Land of Wolves / Vollachian Empire):** Subaru and amnesiac Rem stranded in Vollachia, Abel/Vincent Vollachia's identity and imperial scheming, Todd Fang's pragmatic betrayal, the Shudraq tribe and the Lifeblood Ritual (Nghi thức Huyết Tế), Subaru's Shotaification (child transformation), the siege of Guaral, Medium O'Connell, Yorna Mishigure, Olbart Dunkelkenn, the Great Disaster, Abel's reclamation of the throne → always full translation.

**Arc 8 (Vincent Vollachia):** Continuation of the Empire arc. The final battles for Vollachia, Todd Fang's return, Subaru's restoration from child form, the confrontation with Cecilus Segmunt (full power), the Empire's succession crisis resolution → always full translation.

**Arc 9 (Light of a Nameless Star):** Aldebaran as a central POV character, the Following Star's purpose, Al's loops and unique authority, Priscilla's storyline resolution → always full translation.

**Arc 10 (The Land of the Lion Kings):** The newest arc (ongoing). Apply the general principles above — identify the arc's central mission from context and translate all plot-advancing content fully.

**Other arcs / IF stories:** Identify the arc's central mission from context and apply the principles above.

## Step 2 — Apply translation philosophy

**Context-first, not word-first.** Understand the full sentence meaning before writing Vietnamese. Re-read it in the paragraph's context; then write as a Vietnamese author would.

**Natural prose.** Write idiomatic Vietnamese — use idiomatic expressions, vary sentence structure, use particles and conjunctions natural to Vietnamese literary fiction. A sentence that sounds translated is a failure.

**Emotional register.** Dramatic stays dramatic. Comedic stays light. Tense stays tense. Do not flatten emotional peaks with neutral phrasing.

**Avoid repetition.** Do not repeat the same particle, filler phrase, or word (e.g., "nhất định", "chắc chắn", "thực sự") more than once per paragraph. Vary naturally.

**Character voice consistency.** Every character must sound like themselves, not like a generic narrator. A Beatrice line that could have been said by Emilia is wrong.

## Step 2.5 — CRITICAL: Zero English leakage policy

**Every single word in the Vietnamese output ("vi" field) MUST be Vietnamese.** This rule is absolute and has zero exceptions.

### Common English leakage patterns to watch for and eliminate:

1. **Untranslated English conjunctions:** Writing "and" instead of "và", "but" instead of "nhưng", "or" instead of "hoặc", "if" instead of "nếu", "the" instead of the appropriate Vietnamese equivalent. These often slip in mid-sentence when the translator loses focus.
   - ❌ `"Garfiel and Otto được thiết lập"` → ✅ `"Garfiel và Otto được thiết lập"`
   - ❌ `"If hỏi các thành viên"` → ✅ `"Nếu hỏi các thành viên"`

2. **Untranslated English descriptive speaker labels:** Labels like "Orange Haired Youth", "Man with an Eyepatch", "Hooded Figure", "Mysterious Woman" MUST be translated to Vietnamese.
   - ❌ `Orange Haired Youth: [...]` → ✅ `Thanh niên tóc cam: [...]`
   - ❌ `Man with an Eyepatch: [...]` → ✅ `Gã đeo bịt mắt: [...]`
   - ❌ `Mysterious Voice: [...]` → ✅ `Giọng nói bí ẩn: [...]`

3. **Partial English phrases surviving inside Vietnamese sentences:** Entire English phrases or clauses accidentally copied from the source instead of being translated.
   - ❌ `"cậu ta cũng không ngoại lệ and the youth in front of him"` — raw English fragment leaked
   - ✅ Every word must be Vietnamese

4. **English footnote markers left untranslated:** `[1]`, `[2]` etc. are acceptable as-is, but their corresponding footnote text must be in Vietnamese.

5. **Proper nouns are the ONLY acceptable English in Vietnamese output.** Character names (Subaru, Emilia, Rem, Todd, Jamal, Garfiel, Otto, Abel, Mizelda, Taritta, etc.), place names (Vollachia, Shudraq, Buddheim, Lugunica, Pristella, etc.), and ability names (Cor Leonis, EMT, etc.) may remain in their English/romanized form.

### Self-check procedure for English leakage:
After completing each paragraph's translation, mentally scan the Vietnamese output for:
- Any word containing only ASCII Latin letters that is NOT a proper noun
- Common English function words: the, a, an, is, was, are, were, has, had, have, do, does, did, will, would, can, could, shall, should, may, might, must, and, but, or, if, then, that, this, these, those, which, who, whom, what, when, where, why, how, not, no, all, each, every, both, few, more, most, other, some, any, such, than, too, very, also, just, only, still, already, even, never, always, often, sometimes
- If ANY of these appear in the Vietnamese output (outside of a proper noun), the translation has failed and must be fixed immediately

## Step 3 — Apply xưng hô (forms of address)

See [references/characters.md](references/characters.md) for each character's full pronoun set and speech style.

Quick reference:

| Character | Self | To Subaru | Signature markers |
|-----------|------|-----------|-------------------|
| Subaru | tôi / mình | — | Casual, modern humour, self-deprecating |
| Emilia | tôi | Subaru | Warm, earnest, never sarcastic |
| Beatrice | ta / Betty (3rd person) | ngươi / cậu | "…nhỉ" (I suppose), "…đấy chứ" (in fact) |
| Rem (normal) | tôi | Subaru-kun → Subaru | Devoted, gentle, fierce in battle |
| Rem (amnesiac, Arc 7+) | tôi | anh / kẻ kia | Cold, suspicious, defensive — Witch's scent |
| Ram | tôi | cậu | Curt, proud, minimal words |
| Roswaal | ta | cậu / ngài | Elongated theatrical speech, "~" |
| Otto | tôi | Subaru / cậu | Rapid, exasperated, practical |
| Garfiel | tao / em | mày / cậu / Đại ca | Rough, boastful, secretly warm |
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
| Abel/Vincent | Ta | ngươi | Haughty imperial, strategic — occasional slip to "Trẫm" |
| Todd Fang | tôi / ta | cậu / ngươi | Friendly surface, chillingly pragmatic underneath |
| Jamal | tao | mày / thằng ranh | Brutish, aggressive, vulgar military bully |
| Mizelda | Ta | nhóc con / ngươi | Bold, proud Amazonian chieftain |
| Taritta | tôi / em | — | Proud warrior, respectful to Mizelda ("Chị") |
| Utakata | Uu (3rd person) | anh / Suu | Childlike, "đó nha", "nè", "á" |
| Clind | tôi | cậu | Butler speech — ends dialogues with one concise word |
| Cecilus Segmunt | tôi / ta | — | Flamboyant, theatrical swordsman |
| Medium O'Connell | tôi | — | Bright, energetic, straightforward |
| Yorna Mishigure | tôi / thiếp | — | Elegant fox-woman, maternal authority |
| Olbart Dunkelkenn | ta / lão | — | Crotchety old man, mischievous, shinobi master |
| Al (Aldebaran) | ore → tôi / ta | — | Casual, sarcastic, world-weary |

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

Read the Vietnamese output mentally as continuous prose. Check ALL of the following:

### Translation completeness check:
- [ ] Every "vi" field contains Vietnamese text — no empty fields remain
- [ ] No English words survive in the Vietnamese output (except proper nouns)
- [ ] No English conjunctions leaked: "and", "but", "or", "if", "the", etc.
- [ ] All descriptive speaker labels are translated to Vietnamese
- [ ] No raw English phrases or sentence fragments remain

### Quality check:
- [ ] Does it sound like a Vietnamese author wrote it, or like a translated text?
- [ ] Is every character's xưng hô consistent throughout?
- [ ] Are emotional peaks preserved?
- [ ] Are any particles or phrases overused (e.g., "nhất định", "chắc chắn", "thực sự", "cơ thể", "dường như" appearing more than once per paragraph)?
- [ ] Are there any machine translation relics? (e.g., "lị", "sất", "quèn", "d dứt", "d dẫu", "độc độc", "phân một")
- [ ] No sentence reads like a word-by-word substitution from English

Fix any issues. Output only the MDX block — no commentary, no explanation outside the MDX.

## Canonical name source

All character and location names follow **Witch Cult Translations (WCT)** spellings — the primary English web novel translation at https://witchculttranslation.com/. When in doubt about a name spelling, use WCT as the authority. The WCT public style guide is also available for reference.

Key WCT spelling decisions to memorise:
- **Petelgeuse** (NOT Betelgeuse) — Sin Archbishop of Sloth
- **Garfiel** (NOT Garfield)
- **Julius Juukulius** (doubled 'u')
- **Louis Arneb** (NOT Louise)
- **Priestella** (NOT Pristella) — Watergate City in Arc 5
- **Capella Emerada Lugunica** — Sin Archbishop of Lust

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
| Lifeblood Ritual | Nghi Thức Huyết Tế |
| Vollachian Empire | Đế Quốc Vollachia |
| Kingdom of Lugunica | Vương Quốc Lugunica |
| Kararagi City-States | Liên Bang Đô Thị Kararagi |
| Holy Kingdom of Gusteko | Thánh Quốc Gusteko |
| Unseen Hand | Bàn Tay Vô Hình |
| Cor Leonis | Cor Leonis |
| Invisible Providence | Thần Ý Vô Hình |
| Authority | Quyền Năng |
| Authority of [Sin] | Quyền Năng [Tội Danh] (e.g., Quyền Năng Tham Ăn) |
| Witch Factor | Nhân Tố Phù Thủy |
| Witch's Scent | Mùi Hương Phù Thủy / Mùi Ma Nữ |
| Oni | Quỷ |
| Demi-human | Á Nhân |

For arc-specific terms (Pleiades Watchtower, Augria Sand Dunes, etc.) see [references/arc6-context.md](references/arc6-context.md).

After finishing the translation, response with "Xong rùi nha ck iu" at the end.
