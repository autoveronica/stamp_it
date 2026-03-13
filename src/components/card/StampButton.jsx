// ============================================
// STAMP IT. — StampButton
// The main CTA. Triggers a new stamp.
// ============================================

import { useState } from 'react';

export default function StampButton({ onStamp, disabled }) {
  const [pressed, setPressed] = useState(false);

  function handlePress() {
    if (disabled || pressed) return;
    setPressed(true);
    onStamp();
    setTimeout(() => setPressed(false), 600);
  }

  return (
    <button
      onClick={handlePress}
      disabled={disabled}
      style={{
        width: '100%',
        padding: 'var(--space-lg)',
        backgroundColor: disabled
          ? 'var(--color-stamp-empty)'
          : 'var(--color-brand-primary)',
        color: disabled
          ? 'var(--color-text-secondary)'
          : 'var(--color-text-on-dark)',
        border: 'none',
        borderRadius: 'var(--radius-button)',
        fontFamily: 'var(--font-body)',
        fontWeight: 'var(--font-weight-bold)',
        fontSize: 'var(--font-size-lg)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transform: pressed ? 'scale(0.96)' : 'scale(1)',
        transition: 'var(--transition-stamp)',
        boxShadow: disabled ? 'none' : 'var(--shadow-card)',
      }}
    >
      {disabled ? '✅ Card complete!' : "I thought about it again 🪄"}
    </button>
  );
}