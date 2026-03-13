// ============================================
// STAMP IT. — CrisisMessage
// Warm, human message. Not clinical.
// ============================================

export default function CrisisMessage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
      <div style={{ fontSize: '48px', textAlign: 'center' }}>🤍</div>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--font-size-xl)',
        color: 'var(--color-crisis-accent)',
        margin: 0,
        textAlign: 'center',
      }}>
        Hey — we see you.
      </h2>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--font-size-base)',
        color: 'var(--color-text-primary)',
        lineHeight: '1.6',
        margin: 0,
        textAlign: 'center',
      }}>
        It sounds like things feel really heavy right now.
        You don't have to figure this out alone.
        There are people ready to listen — right now, for free.
      </p>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--font-size-base)',
        color: 'var(--color-text-primary)',
        lineHeight: '1.6',
        margin: 0,
        textAlign: 'center',
      }}>
        Please reach out to one of the services below.
      </p>
    </div>
  );
}