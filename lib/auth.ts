// lib/auth.ts
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { db } from './db'

// ── In-memory rate limiter (per-process; adequate for single-node deployment) ──
// Allows MAX_ATTEMPTS failed logins per email within WINDOW_MS before blocking.
const loginAttempts = new Map<string, { count: number; resetAt: number }>()
const MAX_ATTEMPTS = 5
const WINDOW_MS = 15 * 60 * 1000 // 15 minutes

function isRateLimited(email: string): boolean {
  const now = Date.now()
  const entry = loginAttempts.get(email)
  if (!entry || now > entry.resetAt) return false
  return entry.count >= MAX_ATTEMPTS
}

function recordFailedAttempt(email: string): void {
  const now = Date.now()
  const entry = loginAttempts.get(email)
  if (!entry || now > entry.resetAt) {
    loginAttempts.set(email, { count: 1, resetAt: now + WINDOW_MS })
  } else {
    entry.count++
  }
}

function clearAttempts(email: string): void {
  loginAttempts.delete(email)
}

// ── NextAuth config ────────────────────────────────────────────────────────────
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email:    { label: 'Email',    type: 'email' },
        password: { label: 'Senha',    type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        const email = credentials.email as string

        if (isRateLimited(email)) {
          console.warn(`[auth] login bloqueado por rate limit: ${email}`)
          return null
        }

        const user = await db.adminUser.findUnique({ where: { email } })
        if (!user) {
          recordFailedAttempt(email)
          return null
        }

        const valid = await bcrypt.compare(credentials.password as string, user.password)
        if (!valid) {
          recordFailedAttempt(email)
          return null
        }

        clearAttempts(email)
        return { id: user.id, email: user.email }
      },
    }),
  ],
  pages: {
    signIn: '/admin/login',
  },
  session: { strategy: 'jwt' },
  callbacks: {
    jwt({ token, user }) {
      if (user) token.id = user.id
      return token
    },
    session({ session, token }) {
      if (session.user && token.id) session.user.id = token.id as string
      return session
    },
  },
})
