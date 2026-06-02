'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useAuth } from '@/lib/AuthContext'

export function AuthMenu() {
  const { user, loading, configured, signOut } = useAuth()
  const [busy, setBusy] = useState(false)

  if (!configured) return null
  if (loading) {
    return <span className="text-xs text-[#7a6c5e] dark:text-[#9c8e7e]">…</span>
  }

  if (!user) {
    return (
      <Link
        href="/dang-nhap"
        className="text-xs font-medium text-[#2d2420] dark:text-[#e8dcc8] hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
      >
        Đăng nhập
      </Link>
    )
  }

  const label = user.email ?? 'Tài khoản'

  return (
    <div className="flex items-center gap-3">
      <span
        className="text-xs text-[#7a6c5e] dark:text-[#9c8e7e] max-w-[140px] truncate hidden sm:inline"
        title={label}
      >
        {label}
      </span>
      <button
        type="button"
        disabled={busy}
        onClick={async () => {
          setBusy(true)
          try { await signOut() } finally { setBusy(false) }
        }}
        className="text-xs font-medium text-[#2d2420] dark:text-[#e8dcc8] hover:text-amber-700 dark:hover:text-amber-400 transition-colors disabled:opacity-50"
      >
        Đăng xuất
      </button>
    </div>
  )
}
