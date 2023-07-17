import { api } from '@/libs/api'
import Cookie from 'cookie'

interface SessionResponse {
  token: string
  refreshToken: string
  employeeData: {
    name: string
    email: string
    avatar: string
  }
}

export async function POST(req: Request) {
  const { email, password } = await req.json()

  const res = await api.post<SessionResponse>('/session', {
    email,
    password,
  })

  const { token } = res.data

  const cookieExpiresTime = 60 * 60 * 24 * 30 // 30 days

  const header = Cookie.serialize('@ns:token', token, {
    httpOnly: false,
    path: '/',
    maxAge: cookieExpiresTime,
  })

  return new Response(null, {
    headers: {
      'Set-Cookie': header,
    },
    status: 200,
  })
}
