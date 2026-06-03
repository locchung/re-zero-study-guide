---
name: rezero-vn-translation
description: Translates Re:Zero web novel chapters from English into literary Vietnamese, outputting MDX with Sentence and Word components. Applies character-appropriate forms of address (xưng hô), identifies the arc's central storyline for full translation, and concisely summarizes flashbacks and lore tangents. Use when the user provides Re:Zero chapter text to translate into Vietnamese MDX format for the study guide.
---

# Re:Zero — Vietnamese Translation Skill

## Step 0 — Pre-translation setup

### A. Load chapter context (if available)

If translating chapter N and the project's `content/` directory is accessible, skim the MDX of chapters N-1 and N-2 to anchor:
- How each character has been speaking (xưng hô consistency across chapters)
- Which connector words appeared recently — avoid carrying "dẫu", "chợt", "nhất định" over from the previous chapter
- Any terminology decisions already made (e.g., which synonym of "thử thách" was used)

### B. Read the full source passage

Read the **entire passage** before writing a single word. Understand the scene's purpose, emotional arc, and where it sits in the chapter. Translation quality depends entirely on comprehension before composition.

If the arc's central storyline is not obvious from the text, ask the user for a one-sentence summary before proceeding.

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

**Arc 6 (Hall of Memories / Pleiades Watchtower):** The 5 obstacles (Chướng Ngại Thứ Nhất → Thứ Năm), Subaru's name-loss and recovery, tower conquest finale (Ch. 85–90), identity reveals (Louis Arneb, Shaula, Sage Echidna), Reid Astrea encounters → always full translation.

Special chapter handling:
- **Ch. 72** — title is "■■ ■" (deliberately censored/erased). Do not speculate in the translation itself.
- **Ch. 73** — title has "Natsuki Subaru" in quotes; Ch. 74 has it without quotes. The contrast is plot-critical — preserve the typographic difference exactly.
- **Ch. 88** — archaic register ("ta/ngươi") throughout the entire chapter. Maintain it from first sentence to last; do not let it slip into modern register mid-chapter.

**Arc 7 (The Land of Wolves / Vollachian Empire):** Subaru and amnesiac Rem stranded in Vollachia, Abel/Vincent Vollachia's identity and imperial scheming, Todd Fang's pragmatic betrayal, the Shudraq tribe and the Lifeblood Ritual (Nghi thức Huyết Tế), Subaru's Shotaification (child transformation), the siege of Guaral, Medium O'Connell, Yorna Mishigure, Olbart Dunkelkenn, the Great Disaster, Abel's reclamation of the throne → always full translation.

**Arc 8 (Vincent Vollachia):** Continuation of the Empire arc. The final battles for Vollachia, Todd Fang's return, Subaru's restoration from child form, the confrontation with Cecilus Segmunt (full power), the Empire's succession crisis resolution → always full translation.

**Arc 9 (Light of a Nameless Star):** Aldebaran as a central POV character, the Following Star's purpose, Al's loops and unique authority, Priscilla's storyline resolution → always full translation.

**Arc 10 (The Land of the Lion Kings):** The newest arc (ongoing). Apply the general principles above — identify the arc's central mission from context and translate all plot-advancing content fully.

**Other arcs / IF stories:** Identify the arc's central mission from context and apply the principles above.

## Step 2 — Apply translation philosophy

**Context-first, not word-first.** Understand the full sentence meaning before writing Vietnamese. Re-read it in the paragraph's context; then write as a Vietnamese author would.

**Natural prose.** Write idiomatic Vietnamese — use idiomatic expressions, vary sentence structure, use particles and conjunctions natural to Vietnamese literary fiction. A sentence that sounds translated is a failure.

**Emotional register.** Dramatic stays dramatic. Comedic stays light. Tense stays tense. Do not flatten emotional peaks with neutral phrasing.

**Avoid repetition — at BOTH paragraph and chapter level.**

- **Per paragraph:** No single word or particle may appear more than once (e.g., "nhất định", "chắc chắn", "thực sự", "dường như", "cơ thể").
- **Per chapter:** Connector and adverb words accumulate across sentences and become grating even if each paragraph looks clean. A reader who sees "dẫu" six times in one chapter will notice. Track usage mentally across the whole chapter and rotate synonyms.

**High-risk connector words and their rotation alternatives:**

| Overused word | Meaning | Rotate with |
|---------------|---------|-------------|
| dẫu / dẫu cho | even though | dù, mặc dù, cho dù, tuy, dù rằng |
| dù / dù cho | even though | dẫu, mặc dù, cho dù, tuy rằng |
| nhưng | but | tuy nhiên, song, thế mà, vậy mà, ấy vậy |
| tuy nhiên | however | song, nhưng, thế mà, vậy mà |
| chợt / bỗng | suddenly | đột nhiên, bất thình lình, bỗng dưng, chợt nhiên |
| vẫn | still | vẫn còn, cứ, mãi, cứ mãi |
| rồi | then / already | sau đó, tiếp theo, kế đó, rồi thì |
| thậm chí | even | ngay cả, đến cả, cả đến |
| nhất định | certainly | chắc chắn, hẳn là, ắt, tất nhiên |
| dường như | seems like | có vẻ, trông có vẻ, như thể, tựa như |
| thực sự | really/truly | thật sự, quả thật, quả nhiên, thực ra |

**Rule:** If you have used a connector word more than twice in the current chapter, choose a synonym from the rotation list before writing the next sentence.

**Character voice consistency.** Every character must sound like themselves, not like a generic narrator. A Beatrice line that could have been said by Emilia is wrong.

**Proper noun preservation — absolute rule.** All character names, place names, ability/skill names, aliases, and faction/organization names must be kept in their original WCT English form. This rule has no exceptions.
- ✓ Keep: Subaru, Emilia, Beatrice, Julius, Garfiel, Todd, Priestella, Vollachia, Cor Leonis, EMT, EMM, Unseen Hand, Witch Cult, Pleiades Watchtower, Augria Sand Dunes, Shudraq, Lifeblood Ritual, Witch Factor, Divine Protection, Return by Death
- ✗ Never: phonetically transcribe a name into Vietnamese script ("Su-ba-ru"), invent a Vietnamese equivalent, or silently swap one proper name for another
- Refer to the [Canonical name source](#canonical-name-source) section for WCT spellings when uncertain

**Before starting:** Scan [references/mistakes.md](references/mistakes.md) — specifically the Quick Reference table and Category 1 (overused words). These are the patterns most likely to appear without noticing.

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

## PASS 1 — Translate (accuracy focus)

Work through every paragraph following Steps 1–4 in order. For each paragraph:
1. Classify it (full translation or summarize)
2. Apply correct xưng hô for every speaker
3. Write the Vietnamese text inside the correct MDX structure
4. Run the English leakage check (Step 2.5) before moving to the next paragraph

**Pass 1 focus:** meaning accuracy only. Get every sentence right. Do not stop to polish flow or prose rhythm — that is Pass 2's exclusive job. Mixing the two passes degrades both.

---

## PASS 2 — Naturalness audit

When all paragraphs are drafted, **stop writing**. Read the complete Vietnamese output from the first sentence to the last as a continuous prose reader would — not as the translator who wrote it. Do not edit as you go; complete the full read first, then fix.

After reading, fix any of the following:
- Sentences that sound translated rather than written in Vietnamese
- Connector words used too many times — rotate using the table in Step 2
- Character voice that drifted mid-chapter (any character starting to sound like the narrator)
- Emotional register that flattened (dramatic scenes that became neutral, tense scenes that became calm)
- Unnatural word order inherited from English syntax
- Any line where a more vivid or precise Vietnamese expression exists

**For unnatural sentences, apply the diagnostic from [references/naturalness.md](references/naturalness.md):**
Run through the 12 construction traps — passive voice, existential "có một", nominalization ("sự+noun"), "bắt đầu" overuse, subject repetition, weak-verb+adverb, body-language calques. If a sentence triggers any of them, rewrite before moving on.

**Benchmark:** See [references/examples.md](references/examples.md) for target-quality excerpt pairs to calibrate against.

After fixing, run the checklist below.

---

## Step 5 — Completeness checklist (after Pass 2)

### Translation completeness:
- [ ] Every paragraph has a `<Sentence>` block — no skipped paragraphs
- [ ] No English words in the Vietnamese text (except proper nouns)
- [ ] No English conjunctions leaked: "and", "but", "or", "if", "the", etc.
- [ ] All descriptive speaker labels are in Vietnamese (e.g., "Thanh niên tóc cam:", not "Orange Haired Youth:")
- [ ] No raw English sentence fragments survive

### Quality:
- [ ] Does it read like a Vietnamese author wrote it?
- [ ] Every character's xưng hô consistent throughout the chapter?
- [ ] Emotional peaks preserved at their original intensity?
- [ ] **Paragraph-level repetition:** any word repeated within the same paragraph?
- [ ] **Chapter-level connectors:** "dẫu", "dù", "chợt", "bỗng", "nhất định", "dường như", "thực sự", "tuy nhiên" — any appearing 3+ times? Rotate excess with synonyms from Step 2.
- [ ] Machine translation relics? ("lị", "sất", "quèn", "d dứt", "độc độc", "phân một")
- [ ] Any sentence that is a word-for-word substitution from English?

> **Tip:** Run `python scripts/check_terms.py <file.mdx>` to automatically scan for terminology errors, proper noun violations, duplicated consecutive words, and connector overuse.
> Run `python scripts/check_terms.py --all --cross-check` to see cross-chapter consistency (which chapters use wrong term variants).

---

## Step 6 — Adversarial review

After the checklist, read the output one final time as a skeptic whose only job is to find something wrong. Use these targeted tests:

**1. Possessive pronoun check** — for every character who uses "ta/ngươi" (Priscilla, Beatrice, Abel, Mizelda, Roswaal), scan their lines for possessive phrases. Ask: does "của ta / của ngươi / của cô ấy" match who actually *owns* the thing in the English source? "Của ta" = mine (the speaker's). "Của ngươi" = yours (the listener's). These are the most common mix-up.

❌ Priscilla telling Abel: "ngai vàng **của ta**" when English says "**your** throne" → should be "của **ngươi**"

**3. Beatrice test** — for every Beatrice line, ask: *"Could Emilia have said this?"* If yes, the line has lost Beatrice's voice. Add her sentence-final markers ("…nhỉ", "…đấy chứ") and restore the archaic/haughty register.

**2. Subaru voice test** — for every Subaru line, ask: *"Does this sound like a teenager from modern Japan, or like a generic fantasy protagonist?"* If the latter, inject personality: sarcasm, self-deprecation, a pop-culture aside, rougher phrasing.

**4. Naturalness test** — pick 3 random sentences from the output and run the Quick Diagnostic from [references/naturalness.md](references/naturalness.md). If any trigger a trap (passive, existential, nominalization, subject repetition, weak verb), fix the entire passage they came from — other sentences nearby likely have the same issue.

**5. Intensity test** — for every dramatic or battle sentence, find the most intense Vietnamese word used. Does it match the intensity of the English source? Emotional peaks must not be softened. If the source says "screamed at the top of his lungs," the Vietnamese must match that energy — not "nói lớn" or "hét lên" but the most visceral equivalent.

**6. Phrase fragment check** — read each long sentence and look for any 2+ word sequence appearing twice within the same sentence. The second occurrence is almost always a leaked fragment from an earlier clause. Example: "trên hết tất cả, là điều **hết tất cả** khó tin" — "hết tất cả" leaked from "trên hết tất cả" into the next clause. Fix: remove the intruder. (Automated detection is unreliable for this — human eye only.)

**7. Dead-word sweep** — scan for: "thực sự", "cũng", "vẫn", "rồi", "lại" appearing in every sentence. These padding words drain prose energy. Cut or replace where the sentence stands without them.

**8. Opening / closing test** — read the first and last sentence of the chapter output. Does the first sentence set the right tone? Does the last sentence land with the appropriate weight? These two are the reader's strongest impressions.

**9. Connector count** — do one final count of "dẫu / dù / chợt / bỗng". If any appears 3+ times, you missed it in Pass 2. Fix now.

> Full error catalogue with bad/good examples for every category: [references/mistakes.md](references/mistakes.md)

If the adversarial review finds issues: fix them, then output. If it finds nothing: output immediately. Do not over-refine after a clean adversarial pass.

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

### TABLE A — Keep in original English form (do NOT translate)

These are proper names. They appear in the Vietnamese text exactly as shown.

| Term | Notes |
|------|-------|
| Return by Death | Subaru's ability — proper name, keep in English |
| Divine Protection | Proper name for the blessing system |
| Witch Factor | Proper name for the ability vessel |
| Authority | Proper name for Archbishop abilities |
| Authority of [Sin] | e.g., Authority of Gluttony, Authority of Sloth |
| Unseen Hand | Petelgeuse's ability — proper name |
| Cor Leonis | Julius's Divine Protection — constellation name |
| Invisible Providence | Subaru's Divine Protection — proper name |
| EMT / EMM | Beatrice–Subaru joint magic acronyms |
| Witch Cult | Faction name |
| Witch of [Sin] | e.g., Witch of Greed, Witch of Envy |
| Sin Archbishop of [Sin] | e.g., Sin Archbishop of Sloth |
| Lifeblood Ritual | Arc 7 ritual name |
| Sand Time | Arc 6 tower mechanic |
| Cor Leonis | Julius's Divine Protection |
| Pleiades Watchtower | Tower name (Arc 6) |
| Augria Sand Dunes | Location name |
| Priestella | Watergate City (Arc 5) |
| Vollachia / Vollachian Empire | Nation name |
| Lugunica / Kingdom of Lugunica | Nation name |
| Kararagi | Nation name |
| Gusteko / Holy Kingdom of Gusteko | Nation name |
| Sanctuary | Location name (Arc 4) |
| Shudraq | Tribe name (Arc 7) |
| Buddheim | Location name (Arc 7) |
| Guaral | Location name (Arc 7) |
| Flugel | The Sage's proper name — never translate |
| Minya | Julius's spirit — proper name |

**Rule:** When a proper name appears in the Vietnamese sentence, write it exactly as it appears in the English source (WCT spelling). If unsure of the WCT spelling, consult the [Canonical name source](#canonical-name-source) section.

---

### TABLE B — Established Vietnamese translations (use these, not the English)

These descriptive or role-based terms have established Vietnamese equivalents used throughout the project. Do not revert these to English.

| English | Vietnamese |
|---------|-----------|
| Witch Beasts | Ma Thú |
| Spirit | Tinh Linh |
| Magic | Ma Pháp |
| Mana | Mana (keep as-is) |
| Ground Dragon | Địa Long (NOT "Long Đất" or "Rồng Đất") |
| Quasi-Spirit | Bán Tinh Linh |
| Yin Magic / Yang Magic | Ma Pháp Âm / Ma Pháp Dương |
| Trial / Obstacle | Thử Thách / Chướng Ngại |
| Sage | Hiền Nhân |
| Oni | Quỷ Ăn Thịt Người (full) / Quỷ (short) |
| Demi-human | Á Nhân |
| Witch's Scent | Mùi Hương Phù Thủy |
| Royal Selection | Cuộc Tuyển Chọn Vương Nữ |
| Gospel | Phúc Âm |
| Knight | Kỵ Sĩ |
| Spirit Knight | Kỵ Sĩ Tinh Linh |
| Sword Saint | Kiếm Thánh |
| Half-elf | Nửa Tiên |

All arc-specific terms are covered in Table A and Table B above.

After finishing the translation, response with "Xong rùi nha ck iu" at the end.
