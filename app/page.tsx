import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TenantSage Documentation',
  description: 'Governance-First AI Infrastructure — official documentation portal.',
}

const sections = [
  {
    title: 'Platform',
    description: 'Core architecture, execution model, and system overview.',
    href: '/platform/',
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    color: 'var(--color-accent)',
    pages: ['Overview', 'Core Architecture', 'Execution Model'],
  },
  {
    title: 'Governance',
    description: 'Policy engine, authority hierarchy, and governance decisions.',
    href: '/governance/',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    color: 'var(--color-success)',
    pages: ['Governance Engine', 'Policy Framework', 'Governance Decisions'],
  },
  {
    title: 'Technology',
    description: 'Service contracts, data definitions, APIs, and messaging.',
    href: '/technology/',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    color: 'var(--color-warning)',
    pages: ['Service Contracts', 'Data Definitions', 'API Catalog'],
  },
  {
    title: 'Developers',
    description: 'Integration guides, SDK references, and implementation patterns.',
    href: '/developers/',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    color: '#8B5CF6',
    pages: ['Developer Guide', 'Implementation Pattern', 'Client SDKs'],
  },
  {
    title: 'Resources',
    description: 'White papers, downloads, and reference documentation.',
    href: '/resources/',
    icon: 'M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    color: '#EC4899',
    pages: ['Documentation', 'White Papers', 'Downloads'],
  },
]

export default function HomePage() {
  return (
    <div style={{ maxWidth: '960px' }}>
      {/* Hero */}
      <div style={{ marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <TenantSageLogo />
          <div>
            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-jetbrains)', color: 'var(--color-text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Documentation Portal</div>
            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-jetbrains)', color: 'var(--color-accent)' }}>v1.0 · Milestone 1</div>
          </div>
        </div>
        <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontFamily: 'var(--font-geist)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1rem', lineHeight: 1.15 }}>
          Governance-First AI Infrastructure
        </h1>
        <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', maxWidth: '60ch', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          TenantSage enforces authority hierarchies, governed retrieval pipelines, and multi-tenant data isolation — so every AI query is auditable, policy-compliant, and contextually scoped.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link href="/platform/" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.625rem 1.25rem', borderRadius: 'var(--radius-md)',
            background: 'var(--color-accent)', color: '#fff',
            fontSize: '0.9375rem', fontWeight: 600,
            transition: 'background var(--transition)',
          }}>Get Started →</Link>
          <Link href="/governance/" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.625rem 1.25rem', borderRadius: 'var(--radius-md)',
            background: 'var(--color-surface-2)', color: 'var(--color-text)',
            fontSize: '0.9375rem', fontWeight: 500,
            border: '1px solid var(--color-border)',
            transition: 'background var(--transition)',
          }}>Governance Engine</Link>
        </div>
      </div>

      {/* Badges row */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
        {[
          { label: 'v1.0.0', cls: 'badge badge-version' },
          { label: 'Stable', cls: 'badge badge-stable' },
          { label: 'Next.js 15', cls: 'badge badge-draft' },
          { label: 'TypeScript', cls: 'badge badge-draft' },
          { label: 'Multi-Tenant', cls: 'badge badge-version' },
          { label: 'Governance-First', cls: 'badge badge-stable' },
        ].map(b => <span key={b.label} className={b.cls}>{b.label}</span>)}
      </div>

      {/* Section cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))', gap: '1rem', marginBottom: '3rem' }}>
        {sections.map(s => (
          <Link key={s.title} href={s.href} style={{ textDecoration: 'none' }}>
            <div className="arch-card" style={{ height: '100%', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div style={{ width: 36, height: 36, borderRadius: 'var(--radius-md)', background: `${s.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.icon} />
                  </svg>
                </div>
                <span style={{ fontSize: '1rem', fontWeight: 600, fontFamily: 'var(--font-geist)', color: 'var(--color-text)' }}>{s.title}</span>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '1rem', lineHeight: 1.5 }}>{s.description}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {s.pages.map(p => (
                  <li key={p} style={{ fontSize: '0.8125rem', color: 'var(--color-text-faint)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <span style={{ color: s.color, fontSize: '0.6rem' }}>▶</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>

      {/* Callout */}
      <div className="callout callout-note">
        <div style={{ flexShrink: 0, marginTop: '0.125rem' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        </div>
        <div>
          <strong>Milestone 1 — Foundation</strong> is live. Documentation content for Platform, Governance, Technology, Developers, and Resources sections is being populated in Milestone 2.
        </div>
      </div>
    </div>
  )
}

function TenantSageLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-label="TenantSage" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill="#0F172A"/>
      <path d="M20 8 L32 14 L32 22 C32 28.627 26.627 34 20 34 C13.373 34 8 28.627 8 22 L8 14 Z" fill="none" stroke="#2563EB" strokeWidth="2"/>
      <path d="M14 20 L18 24 L26 16" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="20" cy="20" r="2" fill="#2563EB"/>
    </svg>
  )
}
