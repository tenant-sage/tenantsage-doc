'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const nav = [
  {
    section: 'Platform',
    base: '/platform',
    items: [
      { label: 'Overview', href: '/platform/' },
      { label: 'Core Architecture', href: '/platform/core-architecture/' },
      { label: 'Execution Model', href: '/platform/execution-model/' },
    ],
  },
  {
    section: 'Governance',
    base: '/governance',
    items: [
      { label: 'Governance Engine', href: '/governance/' },
      { label: 'Policy Framework', href: '/governance/policy-framework/' },
      { label: 'Governance Decisions', href: '/governance/decisions/' },
    ],
  },
  {
    section: 'Technology',
    base: '/technology',
    items: [
      { label: 'Service Contracts', href: '/technology/' },
      { label: 'Data Definitions', href: '/technology/data-definitions/' },
      { label: 'Messaging Definitions', href: '/technology/messaging/' },
      { label: 'API Catalog', href: '/technology/api-catalog/' },
      { label: 'API Specification', href: '/technology/api-spec/' },
    ],
  },
  {
    section: 'Developers',
    base: '/developers',
    items: [
      { label: 'Developer Guide', href: '/developers/' },
      { label: 'Implementation Pattern', href: '/developers/implementation-pattern/' },
      { label: 'Client SDKs', href: '/developers/sdks/' },
    ],
  },
  {
    section: 'Resources',
    base: '/resources',
    items: [
      { label: 'Documentation', href: '/resources/' },
      { label: 'White Papers', href: '/resources/white-papers/' },
      { label: 'Downloads', href: '/resources/downloads/' },
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside style={{
      width: 'var(--sidebar-width)',
      flexShrink: 0,
      position: 'sticky',
      top: 'var(--header-height)',
      height: 'calc(100dvh - var(--header-height))',
      overflowY: 'auto',
      borderRight: '1px solid var(--color-border)',
      padding: '1.5rem 0.75rem',
    }}>
      {nav.map(group => (
        <div key={group.section} style={{ marginBottom: '1.5rem' }}>
          <div style={{
            fontSize: '0.6875rem',
            fontFamily: 'var(--font-jetbrains)',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--color-text-faint)',
            padding: '0 0.75rem',
            marginBottom: '0.375rem',
          }}>
            {group.section}
          </div>
          {group.items.map(item => {
            const isActive = pathname === item.href || pathname === item.href.replace(/\/$/, '')
            return (
              <Link key={item.href} href={item.href} style={{
                display: 'block',
                padding: '0.375rem 0.75rem',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.875rem',
                fontWeight: isActive ? 500 : 400,
                color: isActive ? 'var(--color-accent)' : 'var(--color-text-muted)',
                background: isActive ? 'var(--color-accent-subtle)' : 'transparent',
                textDecoration: 'none',
                transition: 'background var(--transition), color var(--transition)',
                borderLeft: isActive ? '2px solid var(--color-accent)' : '2px solid transparent',
              }}>
                {item.label}
              </Link>
            )
          })}
        </div>
      ))}

      {/* Version info */}
      <div style={{ padding: '0.75rem', borderTop: '1px solid var(--color-border)', marginTop: '1rem' }}>
        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-faint)', fontFamily: 'var(--font-jetbrains)' }}>
          <span className="badge badge-version" style={{ marginBottom: '0.5rem', display: 'inline-flex' }}>v1.0.0</span>
          <div>Milestone 1 · Foundation</div>
        </div>
      </div>
    </aside>
  )
}
