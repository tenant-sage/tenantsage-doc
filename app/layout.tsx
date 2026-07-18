import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: {
    default: 'TenantSage Docs',
    template: '%s — TenantSage Docs',
  },
  description: 'Official documentation for TenantSage — Governance-First AI Infrastructure with multi-tenant authority hierarchy and governed retrieval pipelines.',
  keywords: ['TenantSage', 'AI Governance', 'Multi-tenant', 'RAG', 'Property Management', 'LLM'],
  authors: [{ name: 'TenantSage', url: 'https://tenantsage.io' }],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://docs.tenantsage.io',
    siteName: 'TenantSage Docs',
    title: 'TenantSage Documentation',
    description: 'Governance-First AI Infrastructure — official documentation portal.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TenantSage Documentation',
    description: 'Governance-First AI Infrastructure.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <ThemeProvider>
          <div className="layout-shell">
            <Header />
            <div className="layout-body">
              <Sidebar />
              <main id="main-content" className="layout-main">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
        <style>{`
          .layout-shell {
            display: flex;
            flex-direction: column;
            min-height: 100dvh;
          }
          .layout-body {
            display: flex;
            flex: 1;
            padding-top: var(--header-height);
          }
          .layout-main {
            flex: 1;
            min-width: 0;
            padding: 2.5rem 2rem;
            max-width: 860px;
          }
          @media (max-width: 1023px) {
            .layout-main { padding: 1.5rem 1rem; }
          }
        `}</style>
      </body>
    </html>
  )
}
