// ============================================
// STAMP IT. — CardHeader
// Shows user name and decision text on card.
// ============================================

export default function CardHeader({ userName, decisionText }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xs)',
      borderBottom: '1px dashed var(--color-card-border)',
      paddingBottom: 'var(--space-md)',
    }}>
      <span style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--font-size-xs)',
        color: 'var(--color-text-secondary)',
        textTransform: 'uppercase',
        letterSpacing: '1px',
      }}>
        {userName}'s decision card
      </span>
      <p style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--font-size-lg)',
        color: 'var(--color-text-primary)',
        margin: 0,
        lineHeight: '1.4',
      }}>
        "{decisionText}"
      </p>
    </div>
  );
}