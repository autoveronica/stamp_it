// ============================================
// STAMP IT. — AppHeader
// Top bar with app name.
// ============================================

export default function AppHeader() {
  return (
    <header style={{
      width: '100%',
      padding: 'var(--space-lg) 0 var(--space-md)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--font-size-xl)',
        color: 'var(--color-brand-primary)',
        margin: 0,
        letterSpacing: '-0.5px',
      }}>
        🪄 Stamp It.
      </h1>
    </header>
  );
}