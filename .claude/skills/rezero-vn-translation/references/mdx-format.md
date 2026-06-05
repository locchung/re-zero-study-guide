# MDX Format Reference

## File structure

Every chapter file lives at `content/arcN/chuong-NN.mdx` (e.g. `content/arc7/chuong-45.mdx`) and begins with YAML frontmatter:

```mdx
---
title: 'Chương NN: Tựa đề tiếng Việt | English Title'
chapter: NN
arc: N
---
```

Use the arc number of the chapter being translated (`arc: 7` for Arc 7, etc.).

Everything after the frontmatter is the chapter body — a sequence of `<Sentence>` blocks.

---

## Sentence component

```mdx
<Sentence en="English text here.">
  Vietnamese text here.
</Sentence>
```

- `en` attribute = English original (or English source translation)
- Children = Vietnamese translation
- Clicking the Vietnamese reveals the English — keep both accurate
- One paragraph of source = one `<Sentence>` block (or one dialogue line = one `<Sentence>`)

---

## Word component (vocabulary highlighting)

```mdx
<Sentence en="The cold stone floor stretched endlessly.">
  <Word en="The cold stone floor">Sàn đá lạnh lẽo</Word> <Word en="stretched endlessly">trải dài vô tận</Word>.
</Sentence>
```

**Rules:**
- Group words into meaningful phrases — `<Word en="cold stone floor">` not three separate `<Word>` tags
- Only use `<Word>` inside fully-translated `<Sentence>` blocks
- Do NOT use `<Word>` inside dialogue lines
- Do NOT use `<Word>` inside summarized passages

**When to use Word tags:**
- Vocabulary that a Vietnamese learner studying the parallel English/Vietnamese text would benefit from seeing isolated
- Descriptive phrases and key action verbs
- Character-specific expressions worth noting

**When NOT to use Word tags:**
- Simple common words with obvious translations
- Proper nouns that appear constantly (Subaru, Beatrice, etc.) — only wrap on first meaningful occurrence
- Dialogue content

---

## Dialogue format

Wrap the entire dialogue line in `<Sentence>`. No `<Word>` tags inside.

```mdx
<Sentence en='Julius: "Although it is quite pathetic, it&apos;s just as you say. I want to borrow your strength."'>
  Julius: "Dù có hơi thảm hại, nhưng đúng như em nói. Tôi muốn mượn sức mạnh của em."
</Sentence>
```

Format: `Speaker: "spoken line"` — both in the `en` attribute and in the Vietnamese children.

---

## Summarized passage format

For flashbacks, lore dumps, and side exposition:

```mdx
<Sentence en="[Julius explained the history of failed expeditions into the Augria Sand Dunes — multiple military contingents had been sent to clear the witch beasts over the centuries, but none succeeded, and the sands seemed to reject permanent human habitation.]">
  Julius kể về lịch sử những đoàn quân viễn chinh vào Cồn Cát Augria — qua nhiều thế kỷ, không ít đội quân được cử đến để tiêu diệt bầy Ma Thú, nhưng tất cả đều thất bại, và bản thân sa mạc dường như luôn từ chối sự hiện diện lâu dài của con người.
</Sentence>
```

**Note:** The `en` attribute for a summarized passage uses a **bracketed description** `[...]` of the source material — not a verbatim copy of the source text. This signals to readers that the Vietnamese is a condensed rendering.

---

## HTML entity escaping in the `en` attribute

The `en` attribute is a standard HTML attribute — special characters must be escaped:

| Character | Escaped form |
|-----------|-------------|
| `"` (double quote) | `&quot;` |
| `'` (apostrophe) | `&apos;` |
| `&` (ampersand) | `&amp;` |
| `<` (less than) | `&lt;` |
| `>` (greater than) | `&gt;` |

Example with dialogue containing apostrophes:
```mdx
<Sentence en="Subaru: &quot;I don&apos;t know what&apos;s going on.&quot;">
  Subaru: "Tôi thực sự không hiểu chuyện gì đang xảy ra."
</Sentence>
```

---

## Section dividers

Use the ※ character sequence for chapter section breaks:

```mdx
<Sentence en="※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※">
  ※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※
</Sentence>
```

---

## Dash conventions

- `ーー` — Japanese-style long dash (used for dramatic pauses and sentence-leading dashes in the source): keep as `ーー` in both `en` and Vietnamese
- `—` — standard em dash for narrative pauses

Example:
```mdx
<Sentence en="ーーThe witch beasts had arrived at the watchtower.">
  ーーBầy Ma Thú đã tìm tới tháp canh.
</Sentence>
```

---

## Copyright / metadata header block

Chapters translated from English web novel sources often begin with a header block. Translate it simply:

```mdx
<Sentence en="※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※">
  ※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※
</Sentence>

<Sentence en="Translated By :">
  Người dịch:
</Sentence>

<Sentence en="Art Source :">
  Nguồn ảnh:
</Sentence>

<Sentence en="※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※">
  ※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※ ※
</Sentence>
```

---

## Complete example — mixed full translation and summary

```mdx
---
title: 'Chương 63: Năm Chướng Ngại'
chapter: 63
arc: 6
---

<Sentence en="ーーThe arrival of the Witch Beasts to the watchtower.">
  ーーBầy Ma Thú đã tìm tới tháp canh.
</Sentence>

<Sentence en="Upon Julius' report of the Witch Beasts making a collective charge inside, Subaru and the rest's cheeks stiffened and seriousness dyed everyone's eyes.">
  Nghe Julius báo cáo rằng bầy Ma Thú đang ồ ạt xông vào trong, cơ mặt Subaru và những người còn lại cứng đờ, đôi mắt ai nấy đều nhuốm màu nghiêm trọng.
</Sentence>

<Sentence en='Julius: "Augria Sand Dunes is a place where Witch Beasts live en masse."'>
  Julius: "Cồn cát Augria là nơi Ma Thú sống bầy đàn."
</Sentence>

<Sentence en="[Julius and Echidna explained that past military expeditions to clear the sand dunes had all failed, and the scale of the incoming witch beast horde was comparable to an entire savanna — enough to cause despair.]">
  Julius và Echidna giải thích rằng mọi đoàn quân viễn chinh từng cố tiêu diệt bầy Ma Thú đều thất bại thảm hại, và quy mô của đợt tấn công lần này tương đương cả một vùng thảo nguyên hoang dã — đủ để khiến người ta tuyệt vọng.
</Sentence>

<Sentence en='Meili: "ーーSo, you realised that you should call me~?"'>
  Meili: "ーーThế nên, mọi người mới nhận ra là nên gọi em đúng không nè~?"
</Sentence>
```
