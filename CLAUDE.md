# CLAUDE.md — Pacoticket Site (Next.js)

Guia completo para o Claude Code trabalhar neste projeto.

---

## O que é este projeto

Site institucional do **Pacoticket** em Next.js 14 (App Router) com área administrativa completa.

- **Site público**: páginas estáticas geradas a partir do PostgreSQL, reconstruídas automaticamente quando o admin salva qualquer conteúdo.
- **Área admin** (`/admin`): protegida por senha, permite editar todos os conteúdos dinâmicos.
- **Deploy**: Docker container standalone no Hetzner via Docker Swarm + Traefik.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 14 (App Router) |
| Linguagem | TypeScript |
| ORM | Prisma 5 |
| Banco | PostgreSQL (já rodando no Swarm) |
| Auth | NextAuth v5 (credentials) |
| Styles | CSS vars inline + Tailwind (admin) |
| Deploy | Docker standalone → Swarm |

---

## Estrutura de arquivos

```
pacoticket-site/
├── .env.example              ← Variáveis necessárias
├── Dockerfile                ← Build standalone para produção
├── docker-stack.yml          ← Deploy no Docker Swarm
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── middleware.ts             ← Protege /admin (redirect para /admin/login)
│
├── prisma/
│   ├── schema.prisma         ← Schema completo — NÃO alterar sem rodar db push
│   ├── seed.ts               ← Popula DB com dados iniciais + importa JSON docs
│   └── documentacao_pacoticket.md  ← Copiar aqui para o seed importar
│
├── lib/
│   ├── db.ts                 ← Singleton do Prisma client
│   ├── auth.ts               ← NextAuth config (credentials provider)
│   └── revalidate.ts         ← Mapa de páginas → revalidatePath()
│
├── app/
│   ├── layout.tsx            ← Root layout (fontes + GA/Pixel injetados do DB)
│   ├── globals.css           ← Design system tokens + classes utilitárias
│   │
│   ├── page.tsx              ← Home (index)         → db: metrics, testimonials
│   ├── precos/               ← /precos              → db: plans + features
│   ├── funcionalidades/      ← /funcionalidades     → db: screenshots
│   ├── flowbuilder/          ← /flowbuilder         → db: screenshots
│   ├── ia/                   ← /ia                  → db: screenshots
│   ├── integracoes/          ← /integracoes         → (estático)
│   ├── api-webhooks/         ← /api-webhooks        → (estático)
│   ├── sobre/                ← /sobre               → db: screenshots
│   ├── blog/                 ← /blog                → db: blog_posts
│   │   └── [slug]/           ← /blog/:slug          → db: blog_post by slug
│   ├── parceiros/            ← (estático)
│   ├── afiliados/            ← (estático)
│   ├── contato/              ← db: config (whatsapp_cta, demo_url)
│   ├── primeiros-passos/     ← (estático)
│   ├── status/               ← (estático)
│   ├── privacidade/          ← (texto oficial — NÃO alterar)
│   ├── termos/               ← (texto oficial — NÃO alterar)
│   ├── docs/                 ← /docs                → db: doc_sections
│   │
│   ├── admin/
│   │   ├── layout.tsx        ← Verifica sessão + AdminShell
│   │   ├── login/            ← Formulário de login
│   │   ├── page.tsx          ← Dashboard com resumo e links de preview
│   │   ├── planos/           ← Editar planos e features de preço
│   │   ├── depoimentos/      ← CRUD de depoimentos da home
│   │   ├── blog/             ← Listar posts + criar novo
│   │   │   └── [id]/         ← Editor de post individual
│   │   ├── metricas/         ← Editar barra de números da home
│   │   ├── screenshots/      ← Upload/URL de screenshots por seção
│   │   ├── seo/              ← Title, description, OG por página
│   │   └── analytics/        ← GA ID, Meta Pixel ID, links globais
│   │
│   └── api/
│       ├── auth/[...nextauth]/ ← Handler do NextAuth
│       └── preview/            ← GET: ativa Draft Mode + redirect para a página
│
└── components/
    ├── site/
    │   ├── Nav.tsx           ← Navbar fixa (idêntica em todas as páginas)
    │   └── Footer.tsx        ← Footer (idêntico em todas as páginas)
    └── admin/
        └── AdminShell.tsx    ← Layout do admin (sidebar + main)
```

---

## Design system (site público)

Todas as variáveis CSS estão em `app/globals.css`. **Nunca hardcode cores** — use sempre as variáveis.

### Tokens de cor

```css
--bg:        #080C10   /* fundo principal */
--surface:   #0F1519   /* fundo elevado */
--card:      rgba(255,255,255,0.04)
--border:    rgba(255,255,255,0.07)
--green:     #00D170   /* cor primária — CTAs */
--orange:    #FF6B35   /* problema/alerta */
--blue:      #3B9EFF   /* IA, técnico */
--text:      #EEF1F5
--sub:       #9FAFC0
--muted:     #6B7C93
```

### Tipografia

- `--display: 'Syne'` → headings H1–H4 e números grandes
- `--body: 'DM Sans'` → todo o resto

### Classes prontas (globals.css)

```
.site-body    → background + color + font
.grad-text    → gradiente verde→azul→roxo no texto
.site-tag     → pill de label (verde por padrão)
.site-card    → card com fundo e borda
.btn-primary  → CTA verde
.btn-ghost    → botão outline
.noise-overlay → textura de ruído (adicionar ao wrapper principal)
```

---

## Como funciona o "deploy automático ao salvar"

Cada page pública tem `export const revalidate = false` — são **páginas estáticas** (SSG).

Quando um Server Action salva no banco, ele chama `revalidatePages(...)` de `lib/revalidate.ts`, que por sua vez chama `revalidatePath()` do Next.js. Isso marca as páginas como stale — na próxima request, o Next.js as reconstrói a partir do banco.

```typescript
// Exemplo em qualquer Server Action:
import { revalidatePages } from '@/lib/revalidate'

async function myAction(formData: FormData) {
  'use server'
  // ... save to DB ...
  revalidatePages('home', 'precos')  // reconstrói / e /precos
  // ou: revalidatePages('all')       // reconstrói tudo
}
```

---

## Como funciona o Preview

O botão "Preview ↗" no admin aponta para `/api/preview?page=/caminho-da-pagina`.

Esse endpoint:
1. Verifica a sessão (só admin pode ativar)
2. Chama `draftMode().enable()` (seta cookie `__prerender_bypass`)
3. Redireciona para a página

Com Draft Mode ativo, as páginas ignoram o cache e fazem fetch fresco do banco.

Para desativar o draft mode, faça `DELETE /api/preview` ou feche a aba.

---

## Banco de dados — modelos principais

| Modelo | Usado em | Editado em |
|---|---|---|
| `SiteMetric` | Home (barra de números) | `/admin/metricas` |
| `Plan` + `PlanFeature` | /precos | `/admin/planos` |
| `Testimonial` | Home (depoimentos) | `/admin/depoimentos` |
| `BlogPost` | /blog, /blog/[slug] | `/admin/blog` |
| `Screenshot` | Várias páginas | `/admin/screenshots` |
| `PageSeo` | Metadata de cada página | `/admin/seo` |
| `SiteConfig` | GA, Pixel, links globais | `/admin/analytics` |
| `DocSection` | /docs | Importado via seed |
| `AdminUser` | Auth | Seed / `prisma studio` |

---

## Setup inicial

```bash
# 1. Instalar dependências
npm install

# 2. Configurar variáveis de ambiente
cp .env.example .env.local
# edite: DATABASE_URL, NEXTAUTH_SECRET, ADMIN_EMAIL, ADMIN_PASSWORD

# 3. Aplicar o schema no banco
npm run db:push

# 4. Copiar o JSON de documentação (para o seed importar)
cp /caminho/documentacao_pacoticket.md prisma/documentacao_pacoticket.md

# 5. Popular o banco com dados iniciais
npm run db:seed

# 6. Iniciar em desenvolvimento
npm run dev

# Admin disponível em: http://localhost:3000/admin
```

---

## Build e deploy no Swarm

```bash
# Build da imagem
docker build -t pacoticket-site:latest .

# Ou com push para registry:
docker buildx build --platform linux/amd64 -t ghcr.io/SEU_USUARIO/pacoticket-site:latest --push .

# Deploy no Swarm (na VPS Hetzner)
docker stack deploy -c docker-stack.yml pacoticket-site

# Rodar seed no container em produção (uma vez)
docker exec -it $(docker ps --filter name=pacoticket-site_web -q) sh -c "npx tsx prisma/seed.ts"
```

---

## Convenções de código

- **Server Actions**: toda mutação de banco usa `'use server'` diretamente na função, dentro do arquivo de página. Não criar arquivos de action separados — keep colocado.
- **Revalidação**: sempre chamar `revalidatePages(...)` ao final de qualquer Server Action que muta conteúdo público.
- **Páginas públicas**: `export const revalidate = false` em todas. Não usar `fetch` diretamente — usar `db.*` (Prisma).
- **Estilos no admin**: inline styles com as variáveis do design system (`#080C10`, `#00D170`, etc.). Não usar classes Tailwind no site público.
- **Privacidade e Termos**: os textos em `/app/privacidade/page.tsx` e `/app/termos/page.tsx` são juridicamente vinculantes — não alterar sem validação legal.

---

## Adicionar uma nova seção de screenshot

1. Adicionar o slot em `app/admin/screenshots/page.tsx` (array `SLOTS`)
2. No componente da página pública, buscar do banco:
   ```typescript
   const shot = await db.screenshot.findUnique({ where: { page_section: { page:'flowbuilder', section:'novo-slot' } } })
   ```
3. Renderizar com fallback para o placeholder original

---

## Senhas e segredos — nunca no código

Todos os segredos ficam em `.env.local` (dev) ou como Docker Secrets / variáveis de ambiente no Swarm (produção). O `.env.example` mostra quais são necessários.

Para alterar a senha do admin em produção:
```bash
# No container ou localmente com DATABASE_URL apontado para produção:
ADMIN_PASSWORD="nova-senha" npx tsx prisma/seed.ts
```
