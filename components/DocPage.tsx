import type { ReactNode } from 'react'

interface DocPageProps {
  title: string
  description?: string
  version?: string
  status?: 'stable' | 'review' | 'draft' | 'deprecated'
  docId?: string
  children: ReactNode
}

export function DocPage({ title, description, version = 'v1.0', status = 'stable', docId, children }: DocPageProps) {
  const statusMap = {
    stable: 'badge-stable',
    review: 'badge-review',
    draft: 'badge-draft',
    deprecated: 'badge-deprecated',
  }

  return (
    <article style={{ maxWidth: '800px' }}>
      {/* Document metadata */}
      <div style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
          <span className={`badge ${statusMap[status]}`}>{status}</span>
          <span className="badge badge-version">{version}</span>
          {docId && <span className="badge badge-draft">{docId}</span>}
        </div>
        <h1 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontFamily: 'var(--font-geist)', fontWeight: 700, marginBottom: '0.75rem', lineHeight: 1.15, color: 'var(--color-text)' }}>
          {title}
        </h1>
        {description && (
          <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-muted)', maxWidth: '65ch', lineHeight: 1.6 }}>
            {description}
          </p>
        )}
      </div>

      {/* Content */}
      <div className="prose prose-slate dark:prose-invert" style={{ color: 'var(--color-text)' }}>
        {children}
      </div>

      {/* Footer */}
      <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-faint)', fontFamily: 'var(--font-jetbrains)' }}>
          TenantSage Documentation · {version}
        </div>
        <button
          onClick={() => window.print()}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.4rem 0.875rem', borderRadius: 'var(--radius-md)',
            fontSize: '0.8125rem', fontWeight: 500,
            background: 'var(--color-surface-2)', color: 'var(--color-text-muted)',
            border: '1px solid var(--color-border)', cursor: 'pointer',
          }}
          aria-label="Download as PDF"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
          PDF
        </button>
      </div>
    </article>
  )
}
