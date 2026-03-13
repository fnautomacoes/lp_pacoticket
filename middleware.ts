// middleware.ts
import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req) {
    const isLoginPage = req.nextUrl.pathname === '/admin/login'
    const isLoggedIn  = !!req.nextauth.token

    if (isLoginPage && isLoggedIn) {
      return NextResponse.redirect(new URL('/admin', req.url))
    }
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const isLoginPage = req.nextUrl.pathname === '/admin/login'
        if (isLoginPage) return true
        return !!token
      },
    },
  }
)

export const config = {
  matcher: ['/admin/:path*'],
}
