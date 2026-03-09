// app/layout.tsx
import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'
import { db } from '@/lib/db'
import AnalyticsScripts from '@/components/site/AnalyticsScripts'

const syne   = Syne({ subsets: ['latin'], weight: ['700','800'], variable: '--font-syne' })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300','400','500','600'], variable: '--font-dm' })

export const metadata: Metadata = {
  title: 'Pacoticket — Atendimento Omnichannel',
  description: 'Plataforma de atendimento via WhatsApp para equipes.',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Fetch analytics IDs (served from DB, injected globally)
  const configs = await db.siteConfig.findMany({
    where: { key: { in: ['ga_id', 'meta_pixel_id'] } }
  }).catch(() => [])

  const gaId      = configs.find(c => c.key === 'ga_id')?.value      || ''
  const pixelId   = configs.find(c => c.key === 'meta_pixel_id')?.value || ''

  return (
    <html lang="pt-BR" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        {gaId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <script dangerouslySetInnerHTML={{ __html: `
              window.dataLayer=window.dataLayer||[];
              function gtag(){dataLayer.push(arguments);}
              gtag('js',new Date());gtag('config','${gaId}');
            `}} />
          </>
        )}
        {pixelId && (
          <script dangerouslySetInnerHTML={{ __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init','${pixelId}');fbq('track','PageView');
          `}} />
        )}
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
