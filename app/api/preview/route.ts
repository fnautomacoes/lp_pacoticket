// app/api/preview/route.ts
// Enables Next.js Draft Mode so pages re-render from DB without cache.
// Only accessible when authenticated (middleware doesn't cover /api routes,
// so we validate the session here).

import { draftMode } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'

export async function GET(req: NextRequest) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const page = req.nextUrl.searchParams.get('page') ?? '/'

  draftMode().enable()

  // Redirect to the actual page in draft mode
  const url = new URL(page, req.nextUrl.origin)
  return NextResponse.redirect(url)
}

export async function DELETE(req: NextRequest) {
  draftMode().disable()
  return NextResponse.json({ ok: true })
}
