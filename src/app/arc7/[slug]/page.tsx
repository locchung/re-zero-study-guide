import { compileMDX } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import { getChaptersByArc, getChapterBySlug } from '@/lib/chapters'
import { ChapterFrontmatter } from '@/lib/types'
import { ChapterLayout } from '@/components/ChapterLayout'
import { Sentence } from '@/components/Sentence'
import { Word } from '@/components/Word'

export function generateStaticParams() {
  return getChaptersByArc(7).map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const meta = getChapterBySlug(7, slug)
  if (!meta) return { title: 'Không tìm thấy' }
  return {
    title: meta.title,
    description: `Bản dịch tiếng Việt Re:Zero Arc 7 — ${meta.title}. Nhấn vào từ hoặc câu để xem bản tiếng Anh.`,
  }
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const meta = getChapterBySlug(7, slug)
  if (!meta) notFound()

  const allChapters = getChaptersByArc(7)

  const filePath = path.join(process.cwd(), 'content/arc7', `${slug}.mdx`)
  if (!fs.existsSync(filePath)) notFound()

  const source = fs.readFileSync(filePath, 'utf-8')

  const { content } = await compileMDX<ChapterFrontmatter>({
    source,
    components: {
      Sentence,
      Word,
    },
    options: { parseFrontmatter: true },
  })

  return (
    <ChapterLayout meta={meta} allChapters={allChapters}>
      {content}
    </ChapterLayout>
  )
}
