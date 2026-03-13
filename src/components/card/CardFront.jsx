'use client';

import '@/styles/animations.css';

export default function CardFront({
  userName,
  stampCount,
  maxStamps = 10,
  onFlip,
  timeLeft,
  isFirstVisit,
}) {
  const isReady = timeLeft <= 0;

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  return (
    <div
      className="card-face"
      style={{
        backgroundColor: 'var(--color-brand-primary)',
        border: '2px solid var(--color-card-border)',
        borderRadius: 'var(--radius-card)',
        padding: 'var(--space-xl) var(--space-lg)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-lg)',
        minHeight: '320px',
        boxShadow: 'var(--shadow-card)',
      }}
    >
      {/* Logo */}
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '48px', marginBottom: 'var(--space-sm)' }}>🪄</div>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--font-size-xl)',
          color: 'var(--color-text-on-dark)',
          margin: 0,
          letterSpacing: '-0.5px',
        }}>
          Stamp It.
        </h1>
      </div>

      {/* Name */}
      <div style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--font-size-lg)',
        color: 'var(--color-text-on-dark)',
        opacity: 0.9,
        textAlign: 'center',
      }}>
        {userName}'s Card
      </div>

      {/* Flip button + support text */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--space-sm)',
        width: '100%',
      }}>
        <button
          onClick={isReady ? onFlip : undefined}
          className={isReady ? 'pulse-ready' : ''}
          style={{
            width: '100%',
            padding: 'var(--space-md)',
            backgroundColor: isReady
              ? 'var(--color-text-on-dark)'
              : 'rgba(255,255,255,0.15)',
            color: isReady
              ? 'var(--color-brand-primary)'
              : 'rgba(255,255,255,0.4)',
            border: 'none',
            borderRadius: 'var(--radius-button)',
            fontFamily: 'var(--font-body)',
            fontWeight: 'var(--font-weight-bold)',
            fontSize: 'var(--font-size-base)',
            cursor: isReady ? 'pointer' : 'not-allowed',
            transition: 'all var(--transition-default)',
          }}
        >
          {isReady ? 'tap to flip and stamp ↩' : `↩ locked for ${formatTime(timeLeft)}`}
        </button>

        {/* Support text */}
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--font-size-xs)',
          color: 'rgba(255,255,255,0.6)',
          textAlign: 'center',
          lineHeight: '1.5',
          padding: '0 var(--space-sm)',
        }}>
          {isReady && !isFirstVisit && 'Ready to stamp again — only tap when it genuinely crosses your mind 🪄'}
          {isReady && isFirstVisit && 'Come back when this thought crosses your mind again 🌱'}
          {!isReady && 'One stamp per visit keeps it honest — this is intentional 💜'}
        </span>
      </div>
    </div>
  );
}