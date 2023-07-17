import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const redirectUrl = new URL(process.env.NEXT_PUBLIC_BASE_URL ?? '', req.url)

  return NextResponse.redirect(redirectUrl, {
    headers: {
      'Set-Cookie': `@ns:token=; Path=/; max-age=0;`,
    },
  })
}
