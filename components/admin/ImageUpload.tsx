'use client'
// components/admin/ImageUpload.tsx
// Dual-mode image input: URL field + optional upload to R2.
// Shows the upload button only when R2 is available (r2Enabled prop).

import { useRef, useState } from 'react'

interface Props {
  name: string
  defaultValue?: string | null
  r2Enabled: boolean
  placeholder?: string
}

export default function ImageUpload({ name, defaultValue, r2Enabled, placeholder }: Props) {
  const [url, setUrl]           = useState(defaultValue ?? '')
  const [uploading, setUploading] = useState(false)
  const [error, setError]       = useState('')
  const fileRef                 = useRef<HTMLInputElement>(null)

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    setError('')
    setUploading(true)
    try {
      const fd = new FormData()
      fd.append('file', file)
      const res = await fetch('/api/upload', { method: 'POST', body: fd })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Erro ao enviar')
      setUrl(data.url)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setUploading(false)
      if (fileRef.current) fileRef.current.value = ''
    }
  }

  return (
    <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
      <div style={{ display:'flex', gap:8 }}>
        <input
          name={name}
          value={url}
          onChange={e => setUrl(e.target.value)}
          placeholder={placeholder ?? 'https://...'}
          className="admin-input"
          style={{ flex:1 }}
        />
        {r2Enabled && (
          <>
            <input
              ref={fileRef}
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif,image/avif"
              onChange={handleFile}
              style={{ display:'none' }}
            />
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              disabled={uploading}
              className="admin-btn"
              style={{ flexShrink:0 }}
            >
              {uploading ? 'Enviando…' : '↑ Upload'}
            </button>
          </>
        )}
      </div>
      {error && <div style={{ fontSize:13, color:'#ff6b6b' }}>{error}</div>}
      {url && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={url}
          alt="preview"
          style={{ maxHeight:80, borderRadius:8, border:'1px solid rgba(255,255,255,.1)', objectFit:'cover', alignSelf:'flex-start' }}
          onError={e => (e.currentTarget.style.display = 'none')}
        />
      )}
    </div>
  )
}
