// ============================================
// STAMP IT. — OutcomeMessage
// Personalised message using user's own words.
// ============================================

export default function OutcomeMessage({ userName, decisionText, goalText }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)',
      textAlign: 'center',
    }}>
      <div style={{ fontSize: '64px', lineHeight: 1 }}>🎉</div>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--font-size-xl)',
        color: 'var(--color-text-primary)',
        margin: 0,
      }}>
        {userName}, your card is full.
      </h2>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--font-size-base)',
        color: 'var(--color-text-primary)',
        lineHeight: '1.6',
        margin: 0,
      }}>
        You've thought about{' '}
        <strong>"{decisionText}"</strong>{' '}
        10 times now. That's not a coincidence — that's your gut trying to tell you something.
      </p>
      {goalText && (
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--font-size-base)',
          color: 'var(--color-text-primary)',
          lineHeight: '1.6',
          margin: 0,
        }}>
          You said you wanted{' '}
          <strong>"{goalText}"</strong>.
          Maybe it's time to take that seriously.
        </p>
      )}
      <p style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--font-size-lg)',
        color: 'var(--color-brand-primary)',
        margin: 0,
      }}>
        It's time to act. 🪄
      </p>
    </div>
  );
}