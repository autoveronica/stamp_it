// ============================================
// STAMP IT. — PageWrapper
// Root wrapper for every page.
// Controls max width, centering, background.
// ============================================

import '@/styles/tokens.css';

export default function PageWrapper({ children }) {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'var(--color-bg-page)',
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '480px',
        padding: '0 var(--space-md)',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
      }}>
        {children}
      </div>
    </div>
  );
}