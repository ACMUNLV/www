'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/auth'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

const loginSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
})
type LoginFormData = z.infer<typeof loginSchema>

export default function LoginPage() {
  const { user, login, logout } = useAuth()
  const [error, setError] = useState<string | null>(null)
  const [info, setInfo] = useState<string | null>(null)

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: '', password: '' },
  })

  async function onSubmit(data: LoginFormData) {
    setError(null)
    setInfo(null)

    const res = await login(data.username, data.password)

    if (res.ok) {
      form.reset()
      return
    }

    if (res.status === 429) {
      const secs = res.retryAfterSec ?? 60
      setError(res.error ?? 'Too many attempts. Try again later.')
      setInfo(`Locked. Try again in ~${Math.max(1, Math.ceil(secs))}s.`)
      form.setValue('password', '')
      return
    }

    if (res.status === 401) {
      setError(res.error ?? 'Invalid credentials.')
      form.setValue('password', '')
      return
    }

    setError('Login failed.')
    form.setValue('password', '')
  }

  return (
    <section className="flex items-center justify-center">
      {user ? (
        <div className="container my-24 flex max-w-96 flex-col items-center justify-center rounded-xl bg-primary/50 py-10 shadow-xl">
          <h3 className="mb-4 text-xl font-semibold">Logged in as Admin</h3>
          <div className="flex flex-col items-center justify-center gap-3">
            <Button asChild variant="outline" className="w-full">
              <Link href="/events">Edit Events</Link>
            </Button>
            <Button onClick={() => logout()} className="w-full bg-red-600 hover:bg-red-700">
              Logout
            </Button>
          </div>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-md space-y-6 pb-32">
            <h2 className="mb-4 text-center text-2xl font-semibold">Login</h2>

            <FormField
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Username" className="bg-white/50" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="Password" className="bg-white/50" />
                  </FormControl>
                  {error && <FormMessage>{error}</FormMessage>}
                  {info && <p className="text-sm text-muted-foreground">{info}</p>}
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Log In
            </Button>
          </form>
        </Form>
      )}
    </section>
  )
}
