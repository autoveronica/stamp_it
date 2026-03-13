// ============================================
// STAMP IT. — CardStamp
// ============================================

export default function CardStamp({ filled, index, isNew }) {
  return (
    <div
      className={filled ? (isNew ? 'stamp-filled' : '') : ''}
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
        boxShadow: filled ? 'var(--shadow-stamp)' : 'none',
      }}
    >
      {filled && (
        <span style={{ fontSize: '28px', lineHeight: 1 }}>🪄</span>
      )}
    </div>
  );
}