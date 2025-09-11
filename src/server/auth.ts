import { NextResponse } from 'next/server'
import { jwtVerify, type JWTPayload } from 'jose'

const key = new TextEncoder().encode(process.env.JWT_SECRET!)

type CookieCapableReq = Request & { cookies?: { get: (name: string) => { value?: string } | undefined } }

export function getSessionTokenFromRequest(req: CookieCapableReq): string | null {
  const nextCookie = (req as any).cookies?.get?.('acm_session')?.value
  if (nextCookie) return nextCookie
  const match = req.headers.get('cookie')?.match(/(?:^|;)\s*acm_session=([^;]+)/)
  return match?.[1] ?? null
}

export async function verifyJwt(token: string): Promise<{ ok: true; payload: JWTPayload } | { ok: false }> {
  try {
    const { payload } = await jwtVerify(token, key, { algorithms: ['HS256'] })
    return { ok: true, payload }
  } catch {
    return { ok: false }
  }
}

export async function isAdminRequest(req: CookieCapableReq): Promise<boolean> {
  const token = getSessionTokenFromRequest(req)
  if (!token) return false
  const result = await verifyJwt(token)
  if (!result.ok) return false
  const role = (result.payload?.role as string | undefined) ?? ''
  return role === 'admin'
}

export function unauthorizedJson() {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
}


