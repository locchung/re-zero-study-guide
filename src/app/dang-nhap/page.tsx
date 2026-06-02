'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useAuth } from '@/lib/AuthContext'

export default function LoginPage() {
  const router = useRouter()
  const { user, loading, configured, signIn, signUp } = useAuth()
  const [mode, setMode] = useState<'signin' | 'signup'>('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (user && !loading) router.replace('/')
  }, [user, loading, router])

  if (!configured) {
    return (
      <div className="max-w-md mx-auto px-4 py-12">
        <h1 className="text-2xl font-semibold mb-2">Đăng nhập</h1>
        <p className="text-sm text-[#7a6c5e] dark:text-[#9c8e7e]">
          Tính năng đăng nhập chưa được cấu hình. Vui lòng đặt biến môi trường{' '}
          <code className="mx-1">NEXT_PUBLIC_SUPABASE_URL</code> và{' '}
          <code className="mx-1">NEXT_PUBLIC_SUPABASE_ANON_KEY</code>.
        </p>
      </div>
    )
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setSubmitting(true)
    try {
      const result = mode === 'signin'
        ? await signIn(email, password)
        : await signUp(email, password)
      if (result.error) {
        setError(result.error)
        return
      }
      if (mode === 'signup') {
        const { error: e2 } = await signIn(email, password)
        if (e2) {
          setError('Đã tạo tài khoản. Vui lòng đăng nhập.')
          setMode('signin')
          return
        }
      }
      router.replace('/')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold mb-2">
        {mode === 'signin' ? 'Đăng nhập' : 'Tạo tài khoản'}
      </h1>
      <p className="text-sm text-[#7a6c5e] dark:text-[#9c8e7e] mb-6">
        Lưu tiến độ đọc và đồng bộ giữa các thiết bị.
      </p>

      <form onSubmit={onSubmit} className="space-y-4">
        <label className="block">
          <span className="block text-sm font-medium mb-1">Email</span>
          <input
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full rounded-md border border-[#ddd3c2] dark:border-[#3a3028] bg-white dark:bg-[#221c17] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </label>
        <label className="block">
          <span className="block text-sm font-medium mb-1">Mật khẩu</span>
          <input
            type="password"
            required
            minLength={6}
            autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full rounded-md border border-[#ddd3c2] dark:border-[#3a3028] bg-white dark:bg-[#221c17] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </label>

        {error && (
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-md bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold py-2.5 transition-colors disabled:opacity-50"
        >
          {submitting
            ? 'Đang xử lý…'
            : mode === 'signin' ? 'Đăng nhập' : 'Tạo tài khoản'}
        </button>
      </form>

      <p className="mt-6 text-sm text-[#7a6c5e] dark:text-[#9c8e7e]">
        {mode === 'signin' ? 'Chưa có tài khoản?' : 'Đã có tài khoản?'}{' '}
        <button
          type="button"
          onClick={() => { setMode(mode === 'signin' ? 'signup' : 'signin'); setError(null) }}
          className="text-amber-700 dark:text-amber-400 hover:underline font-medium"
        >
          {mode === 'signin' ? 'Tạo tài khoản' : 'Đăng nhập'}
        </button>
      </p>
    </div>
  )
}
