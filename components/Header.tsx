'use client'
import Link from 'next/link'
import { useTheme } from './ThemeProvider'

export function Header() {
  const { theme, toggle } = useTheme()

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      height: 'var(--header-height)',
      background: 'var(--color-bg)',
      borderBottom: '1px solid var(--color-border)',
      display: 'flex', alignItems: 'center',
      padding: '0 1.5rem',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
    }}>
      {/* Logo */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none', flexShrink: 0 }}>
        <svg width="28" height="28" viewBox="0 0 40 40" fill="none" aria-label="TenantSage" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="10" fill="#0F172A"/>
          <path d="M20 8 L32 14 L32 22 C32 28.627 26.627 34 20 34 C13.373 34 8 28.627 8 22 L8 14 Z" fill="none" stroke="#2563EB" strokeWidth="2"/>
          <path d="M14 20 L18 24 L26 16" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="20" cy="20" r="2" fill="#2563EB"/>
        </svg>
        <span style={{ fontFamily: 'var(--font-geist)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--color-text)', letterSpacing: '-0.01em' }}>TenantSage</span>
        <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.6875rem', color: 'var(--color-text-faint)', background: 'var(--color-surface-2)', padding: '0.1rem 0.4rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>docs</span>
      </Link>

      <div style={{ flex: 1 }} />

      {/* Nav links */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
        {[
          { label: 'Platform', href: '/platform/' },
          { label: 'Governance', href: '/governance/' },
          { label: 'Technology', href: '/technology/' },
          { label: 'Developers', href: '/developers/' },
          { label: 'Resources', href: '/resources/' },
        ].map(item => (
          <Link key={item.href} href={item.href} style={{
            padding: '0.375rem 0.75rem',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.875rem',
            fontWeight: 500,
            color: 'var(--color-text-muted)',
            textDecoration: 'none',
            transition: 'background var(--transition), color var(--transition)',
          }}
          onMouseEnter={e => { (e.target as HTMLElement).style.background = 'var(--color-surface-2)'; (e.target as HTMLElement).style.color = 'var(--color-text)' }}
          onMouseLeave={e => { (e.target as HTMLElement).style.background = 'transparent'; (e.target as HTMLElement).style.color = 'var(--color-text-muted)' }}
          >
            {item.label}
          </Link>
        ))}

        {/* GitHub */}
        <a href="https://github.com/tenant-sage/tenantsage-doc" target="_blank" rel="noopener noreferrer"
          style={{ padding: '0.375rem', borderRadius: 'var(--radius-md)', color: 'var(--color-text-muted)', display: 'flex', marginLeft: '0.5rem' }}
          aria-label="GitHub repository">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
        </a>

        {/* Theme toggle */}
        <button onClick={toggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          style={{ padding: '0.375rem', borderRadius: 'var(--radius-md)', color: 'var(--color-text-muted)', display: 'flex', background: 'none', border: 'none', cursor: 'pointer', marginLeft: '0.25rem' }}>
          {theme === 'dark' ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          )}
        </button>
      </nav>
    </header>
  )
}
