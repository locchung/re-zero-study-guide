import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { SiteHeader } from '@/components/SiteHeader'
import { ReaderProvider } from '@/lib/ReaderContext'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Re:Zero Study Guide',
    template: '%s | Re:Zero Study Guide',
  },
  description:
    'Bản dịch tiếng Việt Re:Zero Arc 6 — đọc và học tiếng Anh cùng lúc với tính năng click để xem bản tiếng Anh.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#faf6f0] dark:bg-[#1a1612] text-[#2d2420] dark:text-[#e8dcc8]">
        <ReaderProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
        </ReaderProvider>
      </body>
    </html>
  )
}

