import { api } from '@/libs/api'
import { NextRequest, NextResponse } from 'next/server'

interface SessionResponse {
  token: string
  refreshToken: string
  employeeData: {
    name: string
    email: string
    avatar: string
  }
}

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()

  const res = await api.post<SessionResponse>('/session', {
    email,
    password,
  })

  const { token } = res.data

  const redirectUrl = new URL(
    `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard`,
    req.url,
  )

  const cookieExpiresInSeconds = 60 * 15 // 15 minutes

  return NextResponse.redirect(redirectUrl, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; max-age=${cookieExpiresInSeconds};`,
    },
  })
}
