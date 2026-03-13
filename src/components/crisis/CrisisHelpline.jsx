// ============================================
// STAMP IT. — CrisisHelpline
// Single helpline card.
// ============================================

export default function CrisisHelpline({ name, number, description, href, website }) {
  return (
    <div style={{
      backgroundColor: 'var(--color-card-bg)',
      border: '2px solid var(--color-crisis-accent)',
      borderRadius: 'var(--radius-card)',
      padding: 'var(--space-md)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xs)',
    }}>
      <span style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 'var(--font-weight-bold)',
        fontSize: 'var(--font-size-base)',
        color: 'var(--color-crisis-accent)',
      }}>
        {name}
      </span>
      <a href={href} style={{
        fontFamily: 'var(--font-stamp)',
        fontSize: 'var(--font-size-lg)',
        fontWeight: 'var(--font-weight-bold)',
        color: 'var(--color-text-primary)',
        textDecoration: 'none',
      }}>
        {number}
      </a>
      <span style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--font-size-sm)',
        color: 'var(--color-text-secondary)',
      }}>
        {description}
      </span>
      <a href={`https://${website}`} target="_blank" rel="noreferrer" style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--font-size-sm)',
        color: 'var(--color-brand-primary)',
      }}>
        {website} ↗
      </a>
    </div>
  );
}