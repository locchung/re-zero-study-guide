export interface ChapterMeta {
  slug: string
  title: string
  chapterNumber: number
  arc: number
  description?: string
}

export interface ChapterFrontmatter {
  title: string
  chapter: number
  arc: number
}
