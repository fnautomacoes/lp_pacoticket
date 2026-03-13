// app/api/upload/route.ts
// Accepts an image file (multipart/form-data), uploads to Cloudflare R2,
// and returns the public URL. Requires valid admin session.

import { NextRequest, NextResponse } from 'next/server'
import { PutObjectCommand } from '@aws-sdk/client-s3'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { r2, R2_BUCKET, R2_PUBLIC_URL } from '@/lib/r2'
import { randomUUID } from 'crypto'
import path from 'path'

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/avif']
const MAX_BYTES = 10 * 1024 * 1024 // 10 MB

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (!r2 || !R2_BUCKET || !R2_PUBLIC_URL) {
    return NextResponse.json({ error: 'R2 não configurado. Defina R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET_NAME e R2_PUBLIC_URL.' }, { status: 503 })
  }

  const formData = await req.formData()
  const file = formData.get('file') as File | null

  if (!file) {
    return NextResponse.json({ error: 'Arquivo não enviado.' }, { status: 400 })
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    return NextResponse.json({ error: 'Tipo de arquivo não permitido. Use JPEG, PNG, WebP, GIF ou AVIF.' }, { status: 415 })
  }

  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: 'Arquivo muito grande. Máximo 10 MB.' }, { status: 413 })
  }

  const ext = path.extname(file.name).toLowerCase() || '.jpg'
  const key = `uploads/${randomUUID()}${ext}`

  const buffer = Buffer.from(await file.arrayBuffer())

  await r2.send(new PutObjectCommand({
    Bucket: R2_BUCKET,
    Key:    key,
    Body:   buffer,
    ContentType: file.type,
    CacheControl: 'public, max-age=31536000, immutable',
  }))

  const publicUrl = `${R2_PUBLIC_URL.replace(/\/$/, '')}/${key}`
  return NextResponse.json({ url: publicUrl })
}
