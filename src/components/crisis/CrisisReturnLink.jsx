// ============================================
// STAMP IT. — CrisisReturnLink
// Subtle return link. Not prominent.
// ============================================

export default function CrisisReturnLink({ onReturn }) {
  return (
    <div style={{ textAlign: 'center', paddingTop: 'var(--space-md)' }}>
      <button
        onClick={onReturn}
        style={{
          background: 'none',
          border: 'none',
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--font-size-sm)',
          color: 'var(--color-text-secondary)',
          cursor: 'pointer',
          textDecoration: 'underline',
        }}
      >
        When you're ready, come back and use the app.
      </button>
    </div>
  );
}