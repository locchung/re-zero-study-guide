import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
        404
      </h1>
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        Không tìm thấy trang — có thể chương này chưa có bản dịch.
      </p>
      <Link
        href="/"
        className="inline-block mt-6 text-amber-600 dark:text-amber-400 hover:underline font-medium"
      >
        ← Về trang chủ
      </Link>
    </div>
  )
}
