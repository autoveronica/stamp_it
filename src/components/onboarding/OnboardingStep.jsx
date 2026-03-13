// ============================================
// STAMP IT. — OnboardingStep
// Single step wrapper.
// ============================================

export default function OnboardingStep({ children }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)',
      width: '100%',
    }}>
      {children}
    </div>
  );
}