'use client';

import { useState, useEffect } from 'react';
import CardFront from './CardFront';
import CardHeader from './CardHeader';
import CardStampGrid from './CardStampGrid';
import '@/styles/animations.css';

const MAX_STAMPS = 10;
const COOLDOWN_SECONDS = 60;

export default function DecisionCard({
  userName,
  decisionText,
  stampCount,
  onStamp,
  onComplete,
  isFirstVisit,
  initialCooldown,
}) {
  const [isFlipped, setIsFlipped]     = useState(isFirstVisit ? false : true);
  const [newestStamp, setNewestStamp] = useState(null);
  const [localCount, setLocalCount]   = useState(stampCount);
  const [timeLeft, setTimeLeft]       = useState(isFirstVisit ? 0 : initialCooldown || 0);
  const [justStamped, setJustStamped] = useState(false);

  // countdown ticker
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) { clearInterval(timer); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  function handleFlipToBack() {
    setIsFlipped(false);
  }

  function handleStampPress() {
    if (localCount >= MAX_STAMPS) return;
    const newCount = localCount + 1;
    setLocalCount(newCount);
    setNewestStamp(newCount - 1);
    setJustStamped(true);
    onStamp(newCount);
    setTimeout(() => setNewestStamp(null), 500);
    if (newCount >= MAX_STAMPS) {
      setTimeout(() => onComplete(), 1200);
    }
  }

  function handleGotIt() {
    setIsFlipped(true);
    setJustStamped(false);
    // only start cooldown if they actually stamped
    if (justStamped) {
      setTimeLeft(COOLDOWN_SECONDS);
    }
  }

  function handleFirstVisitGotIt() {
    setIsFlipped(true);
    setTimeLeft(COOLDOWN_SECONDS);
  }

  function handleFlipBackOnly() {
    setIsFlipped(true);
  }

  const urgency = localCount / MAX_STAMPS;
  const cardBg = urgency > 0.7
    ? '#FFF0E8'
    : urgency > 0.4
    ? '#FFF4EE'
    : 'var(--color-card-bg)';

  // what to show on the back face
  function renderBackContent() {

    // ── FIRST VISIT ──────────────────────────────
    // 1 stamp already there, just instructions + got it
    if (isFirstVisit) {
      return (
        <div className="fade-in" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-md)',
          alignItems: 'center',
        }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            color: 'var(--color-text-secondary)',
            textAlign: 'center',
            margin: 0,
            lineHeight: '1.6',
          }}>
            Your first stamp is in 🌱<br />
            Come back and stamp again the next time this thought crosses your mind.
          </p>
          <button
            onClick={handleFirstVisitGotIt}
            style={{
              width: '100%',
              padding: 'var(--space-md) var(--space-lg)',
              backgroundColor: 'var(--color-brand-primary)',
              color: 'var(--color-text-on-dark)',
              border: 'none',
              borderRadius: 'var(--radius-button)',
              fontFamily: 'var(--font-body)',
              fontWeight: 'var(--font-weight-bold)',
              fontSize: 'var(--font-size-base)',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            Got it 🪄
          </button>
        </div>
      );
    }

    // ── RETURN VISIT — after stamping ─────────────
    if (justStamped) {
      return (
        <div className="fade-in" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-md)',
          alignItems: 'center',
        }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            color: 'var(--color-text-secondary)',
            textAlign: 'center',
            margin: 0,
            lineHeight: '1.6',
          }}>
            Stamp {localCount} logged 🪄<br />
            Come back when it crosses your mind again.
          </p>
          <button
            onClick={handleGotIt}
            style={{
              width: '100%',
              padding: 'var(--space-md) var(--space-lg)',
              backgroundColor: 'var(--color-brand-primary)',
              color: 'var(--color-text-on-dark)',
              border: 'none',
              borderRadius: 'var(--radius-button)',
              fontFamily: 'var(--font-body)',
              fontWeight: 'var(--font-weight-bold)',
              fontSize: 'var(--font-size-base)',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            Ok, I understand 🪄
          </button>
        </div>
      );
    }

    // ── RETURN VISIT — before stamping ────────────
    return (
      <div className="fade-in" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-md)',
      }}>
        <button
          onClick={handleStampPress}
          style={{
            width: '100%',
            padding: 'var(--space-lg)',
            backgroundColor: 'var(--color-brand-primary)',
            color: 'var(--color-text-on-dark)',
            border: 'none',
            borderRadius: 'var(--radius-button)',
            fontFamily: 'var(--font-body)',
            fontWeight: 'var(--font-weight-bold)',
            fontSize: 'var(--font-size-lg)',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          I thought about it again 🪄
        </button>
        <button
          onClick={handleFlipBackOnly}
          style={{
            background: 'none',
            border: 'none',
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-xs)',
            color: 'var(--color-text-secondary)',
            cursor: 'pointer',
            textAlign: 'center',
            padding: 0,
          }}
        >
          ↩ flip back without stamping
        </button>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', paddingBottom: 'var(--space-xl)' }}>
      <div className="card-scene">
        <div
          className={`card-flipper ${isFlipped ? '' : 'is-flipped'}`}
          style={{ minHeight: '320px' }}
        >
          {/* FRONT */}
          <CardFront
            userName={userName}
            stampCount={localCount}
            maxStamps={MAX_STAMPS}
            onFlip={handleFlipToBack}
            timeLeft={timeLeft}
            isFirstVisit={isFirstVisit}
          />

          {/* BACK */}
          <div
            className="card-face card-face--back"
            style={{
              backgroundColor: cardBg,
              border: '2px solid var(--color-card-border)',
              borderRadius: 'var(--radius-card)',
              padding: 'var(--space-lg)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-md)',
              boxShadow: 'var(--shadow-card)',
              transition: 'background-color 0.5s ease',
            }}
          >
            <CardHeader userName={userName} decisionText={decisionText} />
            <CardStampGrid stampCount={localCount} newestStamp={newestStamp} />
            {renderBackContent()}
          </div>
        </div>
      </div>
    </div>
  );
}