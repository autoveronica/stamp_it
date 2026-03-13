// ============================================
// STAMP IT. — Button
// variant: primary | secondary | ghost | danger
// size: sm | md | lg
// ============================================

export default function Button({ label, onClick, variant = 'primary', size = 'md', disabled = false }) {
  const sizes = {
    sm: { padding: '8px 16px', fontSize: 'var(--font-size-sm)' },
    md: { padding: '12px 24px', fontSize: 'var(--font-size-base)' },
    lg: { padding: '16px 32px', fontSize: 'var(--font-size-lg)' },
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--color-brand-primary)',
      color: 'var(--color-text-on-dark)',
      border: 'none',
    },
    secondary: {
      backgroundColor: 'var(--color-brand-secondary)',
      color: 'var(--color-brand-primary)',
      border: '2px solid var(--color-brand-primary)',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--color-brand-primary)',
      border: '2px solid transparent',
    },
    danger: {
      backgroundColor: 'var(--color-crisis-accent)',
      color: 'var(--color-text-on-dark)',
      border: 'none',
    },
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...sizes[size],
        ...variants[variant],
        borderRadius: 'var(--radius-button)',
        fontFamily: 'var(--font-body)',
        fontWeight: 'var(--font-weight-bold)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        transition: 'all var(--transition-default)',
        width: '100%',
      }}
    >
      {label}
    </button>
  );
}