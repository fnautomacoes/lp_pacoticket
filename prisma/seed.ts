// prisma/seed.ts
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import fs from 'fs'
import path from 'path'

const db = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // ── Admin user ──────────────────────────────────────────────────────────────
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@pacoticket.com.br'
  const adminPassword = process.env.ADMIN_PASSWORD || 'changeme123'
  const hash = await bcrypt.hash(adminPassword, 12)

  await db.adminUser.upsert({
    where: { email: adminEmail },
    update: { password: hash },
    create: { email: adminEmail, password: hash },
  })
  console.log(`✓ Admin: ${adminEmail}`)

  // ── Site config ──────────────────────────────────────────────────────────────
  const configs = [
    { key: 'ga_id',           value: '' },
    { key: 'meta_pixel_id',   value: '' },
    { key: 'favicon_url',     value: '/favicon.ico' },
    { key: 'whatsapp_cta',    value: '5535997082991' },
    { key: 'app_url',         value: 'https://app.pacoticket.com.br' },
    { key: 'help_url',        value: 'https://help.pacoticket.com.br' },
    { key: 'demo_url',        value: 'https://link.wpw.app/?link_id=agendamento_pacoticket' },
  ]
  for (const c of configs) {
    await db.siteConfig.upsert({ where: { key: c.key }, update: {}, create: c })
  }
  console.log('✓ Site config')

  // ── Métricas ──────────────────────────────────────────────────────────────
  const metrics = [
    { key: 'companies',      label: '+3.200 empresas',    value: '+3.200', suffix: 'empresas',    order: 0 },
    { key: 'tickets_month',  label: '+1,4M tickets/mês',  value: '+1,4M',  suffix: 'tickets/mês', order: 1 },
    { key: 'setup_minutes',  label: '5 min para configurar', value: '5',   suffix: 'min setup',   order: 2 },
    { key: 'channels',       label: '5 canais',           value: '5',      suffix: 'canais',      order: 3 },
  ]
  for (const m of metrics) {
    await db.siteMetric.upsert({ where: { key: m.key }, update: m, create: m })
  }
  console.log('✓ Metrics')

  // ── Planos ────────────────────────────────────────────────────────────────
  // Clear existing and re-seed plans
  await db.planFeature.deleteMany()
  await db.plan.deleteMany()

  const starter = await db.plan.create({
    data: {
      slug: 'starter', name: 'Starter', price: null, period: null,
      highlighted: false, ctaLabel: 'Falar com comercial',
      ctaUrl: 'https://wa.me/5535997082991', order: 0,
      features: {
        create: [
          { text: 'X conexões WhatsApp',     included: true,  order: 0 },
          { text: 'X atendentes simultâneos', included: true,  order: 1 },
          { text: 'Sistema de tickets',       included: true,  order: 2 },
          { text: 'Filas e departamentos',    included: true,  order: 3 },
          { text: 'Respostas rápidas',        included: true,  order: 4 },
          { text: 'Histórico completo',       included: true,  order: 5 },
          { text: 'FlowBuilder / Chatbot',    included: false, order: 6 },
          { text: 'Campanhas',                included: false, order: 7 },
          { text: 'Inteligência Artificial',  included: false, order: 8 },
        ]
      }
    }
  })

  const pro = await db.plan.create({
    data: {
      slug: 'pro', name: 'Pro', price: null, period: '/mês · cobrado mensalmente',
      highlighted: true, badge: 'Mais popular',
      ctaLabel: 'Começar agora', ctaUrl: 'https://app.pacoticket.com.br', order: 1,
      features: {
        create: [
          { text: 'Tudo do Starter',             included: true,  order: 0 },
          { text: 'X conexões WhatsApp',          included: true,  order: 1 },
          { text: 'X atendentes',                 included: true,  order: 2 },
          { text: 'FlowBuilder (chatbot visual)', included: true,  order: 3 },
          { text: 'Campanhas de mensagens',       included: true,  order: 4 },
          { text: 'Kanban de leads / CRM',        included: true,  order: 5 },
          { text: 'Rodízio de atendimento',       included: true,  order: 6 },
          { text: 'Agendamento de mensagens',     included: true,  order: 7 },
          { text: 'Inteligência Artificial',      included: false, order: 8 },
        ]
      }
    }
  })

  await db.plan.create({
    data: {
      slug: 'enterprise', name: 'Enterprise', price: null, period: 'Volume e personalização',
      highlighted: false, ctaLabel: 'Falar com especialista',
      ctaUrl: 'https://wa.me/5535997082991', order: 2,
      features: {
        create: [
          { text: 'Tudo do Pro',                included: true, order: 0 },
          { text: 'Inteligência Artificial (IA)', included: true, order: 1 },
          { text: 'API Oficial WhatsApp',         included: true, order: 2 },
          { text: 'Atendentes ilimitados',        included: true, order: 3 },
          { text: 'Conexões ilimitadas',          included: true, order: 4 },
          { text: 'SLA de suporte prioritário',   included: true, order: 5 },
          { text: 'Onboarding dedicado',          included: true, order: 6 },
          { text: 'Integrações customizadas',     included: true, order: 7 },
        ]
      }
    }
  })
  console.log('✓ Plans (3)')

  // ── Depoimentos placeholder ────────────────────────────────────────────────
  await db.testimonial.deleteMany()
  await db.testimonial.createMany({
    data: [
      {
        author: 'Ana Costa', role: 'Proprietária · Clínica Odontológica',
        content: 'Antes, perdíamos pacientes porque as mensagens ficavam sem resposta. Hoje, toda a equipe atende pelo mesmo número e conseguimos visualizar tudo em tempo real.',
        avatarBg: '#1A3A4A', avatarInitials: 'AC', published: true, order: 0,
      },
      {
        author: 'Rafael Mendes', role: 'Gerente Comercial · Imobiliária',
        content: 'O FlowBuilder nos economizou 3 horas por dia de atendimento repetitivo. O chatbot qualifica o lead antes mesmo de chegar ao corretor.',
        avatarBg: '#2A1A4A', avatarInitials: 'RM', published: true, order: 1,
      },
      {
        author: 'Fernanda Lima', role: 'Diretora · Escola de Idiomas',
        content: 'A funcionalidade de campanhas é incrível. Conseguimos recuperar 40% dos alunos que não renovaram a matrícula com uma sequência simples de mensagens.',
        avatarBg: '#1A4A2A', avatarInitials: 'FL', published: true, order: 2,
      },
    ]
  })
  console.log('✓ Testimonials (3 placeholder)')

  // ── SEO padrão por página ──────────────────────────────────────────────────
  const seoPages = [
    { page: 'home',           title: 'Pacoticket — Toda a sua equipe. Um só número. Zero caos.',   description: 'Plataforma de atendimento omnichannel para WhatsApp. Múltiplos atendentes, tickets, chatbot, CRM e IA.' },
    { page: 'precos',         title: 'Preços — Pacoticket',    description: 'Planos flexíveis para atendimento profissional pelo WhatsApp. Sem setup, sem contrato mínimo.' },
    { page: 'funcionalidades',title: 'Funcionalidades — Pacoticket', description: 'Tickets, filas, CRM, campanhas, FlowBuilder e muito mais.' },
    { page: 'flowbuilder',    title: 'FlowBuilder — Automação Visual | Pacoticket', description: 'Crie chatbots arrastando e soltando blocos. Sem código.' },
    { page: 'ia',             title: 'Inteligência Artificial — Pacoticket', description: 'Transcrição de áudios, análise de atendimento e GPT Assistant.' },
    { page: 'integracoes',    title: 'Integrações — Pacoticket', description: 'n8n, Zapier, RD Station, Bling, OpenAI e muito mais.' },
    { page: 'api',            title: 'API & Webhooks — Pacoticket', description: 'API REST completa e webhooks em tempo real para integrações customizadas.' },
    { page: 'sobre',          title: 'Sobre — Pacoticket',    description: 'A história e missão do Pacoticket.' },
    { page: 'blog',           title: 'Blog — Pacoticket',     description: 'Estratégias de atendimento, automação e WhatsApp para PMEs.' },
    { page: 'parceiros',      title: 'Parceiros — Pacoticket', description: 'White label, revenda e implementação.' },
    { page: 'afiliados',      title: 'Afiliados — Pacoticket', description: 'Indique o Pacoticket e ganhe comissão recorrente.' },
    { page: 'contato',        title: 'Contato — Pacoticket',  description: 'Fale com o time Pacoticket via WhatsApp ou agende uma demo.' },
    { page: 'primeiros-passos', title: 'Primeiros Passos — Pacoticket', description: 'Configure o Pacoticket em 3 etapas: WhatsApp, filas e equipe.' },
    { page: 'status',         title: 'Status do Sistema — Pacoticket', description: 'Monitoramento em tempo real dos serviços Pacoticket.' },
    { page: 'privacidade',    title: 'Política de Privacidade — Pacoticket', description: 'LGPD — como coletamos, usamos e protegemos seus dados.' },
    { page: 'termos',         title: 'Termos de Uso — Pacoticket', description: 'Termos e condições gerais da plataforma Pacoticket.' },
    { page: 'docs',           title: 'Documentação — Pacoticket', description: 'Guias completos de uso da plataforma Pacoticket.' },
  ]
  for (const s of seoPages) {
    await db.pageSeo.upsert({ where: { page: s.page }, update: s, create: s })
  }
  console.log('✓ SEO defaults')

  // ── Documentação do JSON ──────────────────────────────────────────────────
  const docsPath = path.join(process.cwd(), 'prisma', 'documentacao_pacoticket.json')
  if (fs.existsSync(docsPath)) {
    await db.docSection.deleteMany()
    const docs = JSON.parse(fs.readFileSync(docsPath, 'utf-8'))
    for (const doc of docs) {
      await db.docSection.upsert({
        where: { id: doc.id },
        update: { title: doc.title, link: doc.link, content: doc.content, menuPai: doc.menu_pai, ordem: doc.ordem ?? 0 },
        create: { id: doc.id, title: doc.title, link: doc.link, content: doc.content, menuPai: doc.menu_pai, ordem: doc.ordem ?? 0 },
      })
    }
    console.log(`✓ Documentation (${docs.length} sections)`)
  } else {
    console.log('⚠ documentacao_pacoticket.json not found in prisma/ — skipping docs import')
    console.log('  Copy the file to prisma/documentacao_pacoticket.json and run db:seed again')
  }

  console.log('\n✅ Seed complete!')
}

main()
  .catch(e => { console.error(e); process.exit(1) })
  .finally(() => db.$disconnect())
