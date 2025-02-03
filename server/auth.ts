'use server'

import { decodeJwt, JWTPayload, jwtVerify, SignJWT } from 'jose'
import { cookies } from 'next/headers'
import { type NextRequest, NextResponse } from 'next/server'
import { User } from '@/types/user'

const secret = process.env.JWT_SECRET || 'defaultsecret'
const key = new TextEncoder().encode(secret)

interface Session {
  user: User
  expires: Date
}

export async function authenticate(user: User) {
  const expires = new Date()
  expires.setTime(expires.getTime() + 60 * 60 * 1000)
  const session = await encrypt({ user, expires })

  cookies().set('session', session, { expires, httpOnly: true })
}

export async function encrypt(payload: JWTPayload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1 hour from now')
    .sign(key)
}

export async function decrypt(input: string): Promise<Session | null> {
  try {
    const decoded = decodeJwt(input)
    if (decoded.exp && Date.now() >= decoded.exp * 1000) {
      console.error('JWT token has expired.')
      return null
    }

    const { payload } = await jwtVerify(input, key, { algorithms: ['HS256'] })
    return payload as unknown as Session
  } catch (error) {
    console.error('JWT decryption failed:', error)
    return null
  }
}

export async function updateSession(req: NextRequest) {
  const session = req.cookies.get('session')?.value
  if (!session) return

  const parsed = await decrypt(session)
  parsed!.expires = new Date(Date.now() + 60 * 60 * 1000)
  const res = NextResponse.next()
  res.cookies.set({
    name: 'session',
    value: await encrypt(parsed as unknown as JWTPayload),
    httpOnly: true,
    expires: parsed!.expires,
  })
}

export async function getSession() {
  const session = cookies().get('session')?.value
  if (!session) return
  return await decrypt(session)
}
