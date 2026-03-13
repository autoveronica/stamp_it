// ============================================
// STAMP IT. — OnboardingProgress
// Step dots indicator.
// ============================================

export default function OnboardingProgress({ currentStep, totalSteps }) {
  return (
    <div style={{ display: 'flex', gap: 'var(--space-sm)', justifyContent: 'center' }}>
      {Array.from({ length: totalSteps }).map((_, i) => (
        <div
          key={i}
          style={{
            width: i + 1 === currentStep ? '24px' : '8px',
            height: '8px',
            borderRadius: '4px',
            backgroundColor: i + 1 <= currentStep
              ? 'var(--color-brand-primary)'
              : 'var(--color-stamp-empty)',
            transition: 'all var(--transition-default)',
          }}
        />
      ))}
    </div>
  );
}