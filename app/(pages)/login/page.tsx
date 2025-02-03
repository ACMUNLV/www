'use client'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { getSession } from '@/server/auth'
import { useAuth } from '@/hooks/use-auth'

import { LoginFormData, loginSchema } from '@/types/login'

// components
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

export default function LoginPage() {
  const { user, setUser, login, isReset, resetPass } = useAuth()

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (data: LoginFormData) => {
    if (isReset) {
      form.setValue('password', '')
      resetPass(data, form.setError)
    } else login(data, form.setError)
  }

  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession()
      if (!session?.user) setUser(null)
    }

    checkSession()
  }, [user, setUser])

  return (
    <section className="flex items-center justify-center">
      {user ? (
        <div className="container my-24 flex max-w-96 items-center justify-center rounded-xl bg-primary/50 py-10 shadow-xl">
          <h3 className="mb-4 text-xl font-semibold">{`Logged in as ${user.name} `}</h3>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-md space-y-8 pb-32">
            <h2 className="mb-4 text-center text-2xl font-semibold">Login</h2>

            <>
              {/* Email Field */}
              <FormField
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Email" className="bg-white/50" />
                    </FormControl>
                    <FormDescription>Enter your email to access your account.</FormDescription>
                    <FormMessage>{form.formState.errors.email?.message}</FormMessage>
                  </FormItem>
                )}
              />

              {/* Password Field */}
              <FormField
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" placeholder="Password" className="bg-white/50" />
                    </FormControl>
                    {isReset ? (
                      <FormDescription>Enter your new password.</FormDescription>
                    ) : (
                      <FormDescription>Enter your password to log in.</FormDescription>
                    )}
                    <FormMessage>{form.formState.errors.password?.message}</FormMessage>
                  </FormItem>
                )}
              />

              {isReset && (
                <>
                  {/* Confirm Password Field */}
                  <FormField
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input {...field} type="password" placeholder="Confirm Password" className="bg-white/50" />
                        </FormControl>
                        <FormDescription>Confirm your password to reset.</FormDescription>
                        <FormMessage>{form.formState.errors.confirmPassword?.message}</FormMessage>
                      </FormItem>
                    )}
                  />
                </>
              )}
            </>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full"
              // disabled={user ? true : false}
            >
              Log In
            </Button>
          </form>
        </Form>
      )}
    </section>
  )
}
