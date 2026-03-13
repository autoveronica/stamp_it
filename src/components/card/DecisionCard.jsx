'use client';

import CardHeader from './CardHeader';
import CardStampGrid from './CardStampGrid';
import CardCounter from './CardCounter';
import StampButton from './StampButton';

const MAX_STAMPS = 10;

export default function DecisionCard({
  userName,
  decisionText,
  goalText,
  stampCount,
  onStamp,
  onComplete,
}) {
  function handleStamp() {
    if (stampCount >= MAX_STAMPS) return;
    const newCount = stampCount + 1;
    onStamp(newCount);
    if (newCount === MAX_STAMPS) {
      setTimeout(() => onComplete(), 800);
    }
  }

  const urgency = stampCount / MAX_STAMPS;
  const cardBg = urgency > 0.7
    ? '#FFF0E8'
    : urgency > 0.4
    ? '#FFF4EE'
    : 'var(--color-card-bg)';

  return (
    <div style={{
      backgroundColor: cardBg,
      border: '2px solid var(--color-card-border)',
      borderRadius: 'var(--radius-card)',
      padding: 'var(--space-lg)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)',
      boxShadow: 'var(--shadow-card)',
      transition: 'background-color 0.5s ease',
      marginTop: 'var(--space-md)',
    }}>
      <CardHeader userName={userName} decisionText={decisionText} />
      <CardStampGrid stampCount={stampCount} />
      <CardCounter count={stampCount} maxStamps={MAX_STAMPS} />
      <StampButton onStamp={handleStamp} disabled={stampCount >= MAX_STAMPS} />
    </div>
  );
}