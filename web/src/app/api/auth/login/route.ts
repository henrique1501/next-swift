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

  const { token, refreshToken } = res.data

  const cookieExpiresTime = 60 * 60 * 24 * 30 // 30 days

  const tokenHeader = Cookie.serialize('token', token, {
    httpOnly: false,
    path: '/',
    maxAge: cookieExpiresTime,
  })

  const refreshTokenHeader = Cookie.serialize('refreshToken', refreshToken, {
    httpOnly: false,
    path: '/',
    maxAge: cookieExpiresTime,
  })

  const headers = new Headers()
  headers.append('Set-Cookie', tokenHeader)
  headers.append('Set-Cookie', refreshTokenHeader)

  return new Response(JSON.stringify({ message: 'success' }), {
    headers,
    status: 200,
  })
}
