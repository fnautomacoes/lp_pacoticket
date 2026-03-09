// app/admin/layout.tsx
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import AdminShell from '@/components/admin/AdminShell'
import { SessionProvider } from 'next-auth/react'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth()
  if (!session) redirect('/admin/login')

  return (
    <SessionProvider session={session}>
      <AdminShell>{children}</AdminShell>
    </SessionProvider>
  )
}
