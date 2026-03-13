// lib/r2.ts
// Cloudflare R2 client (S3-compatible).
// Requires env vars: R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY,
//                    R2_BUCKET_NAME, R2_PUBLIC_URL

import { S3Client } from '@aws-sdk/client-s3'

function getR2Client(): S3Client | null {
  const accountId  = process.env.R2_ACCOUNT_ID
  const accessKey  = process.env.R2_ACCESS_KEY_ID
  const secretKey  = process.env.R2_SECRET_ACCESS_KEY

  if (!accountId || !accessKey || !secretKey) return null

  return new S3Client({
    region: 'auto',
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId: accessKey, secretAccessKey: secretKey },
  })
}

export const r2 = getR2Client()
export const R2_BUCKET  = process.env.R2_BUCKET_NAME ?? ''
export const R2_PUBLIC_URL = process.env.R2_PUBLIC_URL ?? ''
