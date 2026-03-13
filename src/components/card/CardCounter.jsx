// ============================================
// STAMP IT. — CardCounter
// ============================================

export default function CardCounter({ count, maxStamps = 10 }) {
  const remaining = maxStamps - count;

  return (
    <div style={{ textAlign: 'center' }}>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--font-size-sm)',
        color: 'var(--color-text-secondary)',
        margin: 0,
        lineHeight: '1.6',
      }}>
        {count === 1 && "First thought logged. Come back next time it crosses your mind 🌱"}
        {count > 1 && count < maxStamps && (
          <>
            This has crossed your mind <strong>{count} times</strong>. {remaining} more and we'll have something to say.
          </>
        )}
        {count >= maxStamps && "You've filled your card! 🎉"}
      </p>
    </div>
  );
}