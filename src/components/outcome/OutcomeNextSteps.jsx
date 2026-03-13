// ============================================
// STAMP IT. — OutcomeNextSteps
// Suggested next actions.
// Generic in V1, LLM-personalised in V2.
// ============================================

const defaultSteps = [
  { emoji: '💬', text: 'Talk to someone you trust about this decision' },
  { emoji: '📝', text: 'Write down the pros and cons — get it out of your head' },
  { emoji: '📅', text: 'Set a deadline — give yourself 48 hours to decide' },
];

export default function OutcomeNextSteps() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)',
    }}>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--font-size-sm)',
        fontWeight: 'var(--font-weight-bold)',
        color: 'var(--color-text-secondary)',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        margin: 0,
        textAlign: 'center',
      }}>
        What to do next
      </p>
      {defaultSteps.map((step, i) => (
        <div key={i} style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-md)',
          backgroundColor: 'var(--color-brand-secondary)',
          borderRadius: 'var(--radius-input)',
          padding: 'var(--space-md)',
        }}>
          <span style={{ fontSize: '24px' }}>{step.emoji}</span>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            color: 'var(--color-text-primary)',
            lineHeight: '1.4',
          }}>
            {step.text}
          </span>
        </div>
      ))}
    </div>
  );
}