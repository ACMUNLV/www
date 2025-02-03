'use client'

import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react'
import { LoginFormData } from '@/types/login'
import { login as loginAuth, resetPass as reset } from '@/server/login'
import { getSession } from '@/server/auth'
import { User } from '@/types/user'

interface AuthContextType {
  user: User | null
  setUser: Dispatch<SetStateAction<User | null>>
  isReset: boolean
  resetEmail: string
  login: (
    data: LoginFormData,
    setError: (
      field: keyof LoginFormData,
      error: {
        type: string
        message: string
      }
    ) => void
  ) => Promise<void>
  resetPass: (
    data: LoginFormData,
    setError: (
      field: keyof LoginFormData,
      error: {
        type: string
        message: string
      }
    ) => void
  ) => Promise<void>
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isReset, setIsReset] = useState<boolean>(false)
  const [resetEmail, setResetEmail] = useState<string>('')

  const fetchUser = async () => {
    try {
      const session = await getSession()
      if (session?.user) {
        console.log(`Logged in as ${session.user.email}`)
        setUser(session.user as User)
      }
    } catch (error) {
      console.error('Error fetching user:', error)
      setUser(null)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  const login = async (
    data: LoginFormData,
    setError: (field: keyof LoginFormData, error: { type: string; message: string }) => void
  ) => {
    try {
      console.log('test')
      const response = await loginAuth(data.email, data.password)

      if (response.success) {
        if (response.user) setUser(response.user)
      } else {
        if (response.message === 'Invalid credentials') {
          setError('email', { type: 'manual', message: 'Invalid email or password' })
          setError('password', { type: 'manual', message: 'Invalid email or password' })
        } else if (response.message === 'Update password') {
          // reset password form
          setResetEmail(response.email!)
          setIsReset(true)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  const resetPass = async (
    data: LoginFormData,
    setError: (field: keyof LoginFormData, error: { type: string; message: string }) => void
  ) => {
    try {
      const response = await reset(data.email, data.password)

      // reset successfull
      if (response.success) {
        // fully login in now
        const res = await loginAuth(data.email, data.password)
        if (res.user) setUser(res.user)
      } else {
        setError('password', { type: 'manual', message: response.message })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{ user, setUser, isReset, resetEmail, login, resetPass }}>
      {children}
    </AuthContext.Provider>
  )
}
