// ============================================
// STAMP IT. — CardStampGrid
// ============================================

import CardStamp from './CardStamp';

export default function CardStampGrid({ stampCount, newestStamp }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(5, var(--stamp-size))',
      gap: 'var(--stamp-grid-gap)',
      justifyContent: 'center',
      padding: 'var(--space-md) 0',
    }}>
      {Array.from({ length: 10 }).map((_, i) => (
        <CardStamp
          key={i}
          filled={i < stampCount}
          index={i}
          isNew={i === newestStamp}
        />
      ))}
    </div>
  );
}