// lib/revalidate.ts
// Called from Server Actions after saves to rebuild static pages.

import { revalidatePath } from 'next/cache'

export type PageKey =
  | 'home' | 'precos' | 'funcionalidades' | 'flowbuilder'
  | 'ia' | 'integracoes' | 'api' | 'sobre' | 'blog'
  | 'parceiros' | 'afiliados' | 'contato' | 'primeiros-passos'
  | 'status' | 'privacidade' | 'termos' | 'docs' | 'all'

const PAGE_PATHS: Record<PageKey, string[]> = {
  home:              ['/'],
  precos:            ['/precos'],
  funcionalidades:   ['/funcionalidades'],
  flowbuilder:       ['/flowbuilder'],
  ia:                ['/ia'],
  integracoes:       ['/integracoes'],
  api:               ['/api-webhooks'],
  sobre:             ['/sobre'],
  blog:              ['/blog'],
  parceiros:         ['/parceiros'],
  afiliados:         ['/afiliados'],
  contato:           ['/contato'],
  'primeiros-passos':['/primeiros-passos'],
  status:            ['/status'],
  privacidade:       ['/privacidade'],
  termos:            ['/termos'],
  docs:              ['/docs'],
  all: [
    '/', '/precos', '/funcionalidades', '/flowbuilder', '/ia',
    '/integracoes', '/api-webhooks', '/sobre', '/blog', '/parceiros',
    '/afiliados', '/contato', '/primeiros-passos', '/status',
    '/privacidade', '/termos', '/docs',
  ],
}

export function revalidatePages(...pages: PageKey[]) {
  for (const key of pages) {
    for (const p of PAGE_PATHS[key] ?? []) {
      revalidatePath(p)
    }
  }
}
