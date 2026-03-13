// ============================================
// STAMP IT. — CardStampGrid
// 2x5 grid of 10 CardStamp components.
// ============================================

import CardStamp from './CardStamp';

export default function CardStampGrid({ stampCount }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(5, var(--stamp-size))',
      gap: 'var(--stamp-grid-gap)',
      justifyContent: 'center',
      padding: 'var(--space-md) 0',
    }}>
      {Array.from({ length: 10 }).map((_, i) => (
        <CardStamp key={i} filled={i < stampCount} index={i} />
      ))}
    </div>
  );
}