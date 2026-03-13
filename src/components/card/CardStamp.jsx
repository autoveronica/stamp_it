// ============================================
// STAMP IT. — CardStamp
// Single stamp slot.
// state: empty | filled
// ============================================

export default function CardStamp({ filled, index }) {
  return (
    <div
      style={{
        width: 'var(--stamp-size)',
        height: 'var(--stamp-size)',
        borderRadius: 'var(--radius-stamp)',
        backgroundColor: filled
          ? 'var(--color-stamp-filled)'
          : 'var(--color-stamp-empty)',
        border: filled
          ? 'none'
          : '2px dashed var(--color-brand-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'var(--transition-stamp)',
        transform: filled ? 'scale(1)' : 'scale(0.95)',
        boxShadow: filled ? 'var(--shadow-stamp)' : 'none',
      }}
    >
      {filled && (
        <span style={{ fontSize: '28px', lineHeight: 1 }}>🪄</span>
      )}
    </div>
  );
}