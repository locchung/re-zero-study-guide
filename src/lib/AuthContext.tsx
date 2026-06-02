'use client'

import React, {
  createContext, useContext, useEffect, useState, useCallback, useMemo,
} from 'react'
import type { Session, User } from '@supabase/supabase-js'
import { getSupabaseBrowserClient, isSupabaseConfigured } from './supabase/client'

interface AuthContextValue {
  user: User | null
  session: Session | null
  loading: boolean
  configured: boolean
  signIn: (email: string, password: string) => Promise<{ error: string | null }>
  signUp: (email: string, password: string) => Promise<{ error: string | null }>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const configured = isSupabaseConfigured()
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(configured)

  useEffect(() => {
    if (!configured) return
    const supabase = getSupabaseBrowserClient()
    let active = true

    supabase.auth.getSession().then(({ data }) => {
      if (!active) return
      setSession(data.session)
      setUser(data.session?.user ?? null)
      setLoading(false)
    })

    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s)
      setUser(s?.user ?? null)
    })

    return () => {
      active = false
      sub.subscription.unsubscribe()
    }
  }, [configured])

  const signIn = useCallback(async (email: string, password: string) => {
    if (!configured) return { error: 'Đăng nhập chưa được cấu hình.' }
    const supabase = getSupabaseBrowserClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    return { error: error?.message ?? null }
  }, [configured])

  const signUp = useCallback(async (email: string, password: string) => {
    if (!configured) return { error: 'Đăng ký chưa được cấu hình.' }
    const supabase = getSupabaseBrowserClient()
    const { error } = await supabase.auth.signUp({ email, password })
    return { error: error?.message ?? null }
  }, [configured])

  const signOut = useCallback(async () => {
    if (!configured) return
    const supabase = getSupabaseBrowserClient()
    await supabase.auth.signOut()
  }, [configured])

  const value = useMemo<AuthContextValue>(() => ({
    user, session, loading, configured, signIn, signUp, signOut,
  }), [user, session, loading, configured, signIn, signUp, signOut])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider')
  return ctx
}
