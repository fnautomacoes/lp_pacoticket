// app/api/health/route.ts
// Endpoint de healthcheck usado pelo Docker Swarm para verificar se a app está pronta.
// Também testa a conexão com o banco de dados.

import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    // Ping simples no banco
    await db.$queryRaw`SELECT 1`
    return NextResponse.json({ status: 'ok', db: 'connected' }, { status: 200 })
  } catch {
    return NextResponse.json({ status: 'error', db: 'disconnected' }, { status: 503 })
  }
}
