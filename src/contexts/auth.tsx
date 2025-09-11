'use client'

import { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react'

type LoginResult =
  | { ok: true }
  | {
      ok: false
      status: 401 | 429
      error?: string
      triesLeft?: number
      retryAfterSec?: number
    }

type AuthContextValue = {
  user: { role: 'admin' } | null
  loading: boolean
  login: (username: string, password: string) => Promise<LoginResult>
  logout: () => Promise<void>
  refresh: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{ role: 'admin' } | null>(null)
  const [loading, setLoading] = useState(true)
  const mounted = useRef(false)

  // hydrate from server cookie
  const refresh = useCallback(async () => {
    try {
      const res = await fetch('/api/auth/session', { cache: 'no-store' })
      const data = await res.json().catch(() => ({}))
      if (res.ok && data?.ok && data?.user?.role === 'admin') {
        setUser({ role: 'admin' })
      } else {
        setUser(null)
      }
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      void refresh()
    }
  }, [refresh])

  const login = useCallback(async (username: string, password: string): Promise<LoginResult> => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })

    const data = await res.json().catch(() => ({}))
    if (res.ok && data?.ok) {
      setUser({ role: 'admin' })
      return { ok: true }
    }
    const status = (res.status as 401 | 429) ?? 401
    return {
      ok: false,
      status,
      error: data?.error,
      triesLeft: data?.triesLeft,
      retryAfterSec: data?.retryAfterSec,
    }
  }, [])

  const logout = useCallback(async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    setUser(null)
  }, [])

  return <AuthContext.Provider value={{ user, loading, login, logout, refresh }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be inside AuthProvider')
  return ctx
}
