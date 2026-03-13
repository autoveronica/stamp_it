// ============================================
// STAMP IT. — InputField
// Single line text input. Used for name field.
// ============================================

export default function InputField({ label, placeholder, value, onChange, error }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)', width: '100%' }}>
      {label && (
        <label style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--font-size-sm)',
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--color-text-primary)',
        }}>
          {label}
        </label>
      )}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: 'var(--space-md)',
          borderRadius: 'var(--radius-input)',
          border: error
            ? '2px solid var(--color-crisis-accent)'
            : '2px solid var(--color-card-border)',
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--font-size-base)',
          color: 'var(--color-text-primary)',
          backgroundColor: 'var(--color-card-bg)',
          outline: 'none',
          transition: 'border var(--transition-default)',
          boxSizing: 'border-box',
        }}
        onFocus={e => e.target.style.borderColor = 'var(--color-brand-primary)'}
        onBlur={e => e.target.style.borderColor = error ? 'var(--color-crisis-accent)' : 'var(--color-card-border)'}
      />
      {error && (
        <span style={{
          fontSize: 'var(--font-size-xs)',
          color: 'var(--color-crisis-accent)',
        }}>
          {error}
        </span>
      )}
    </div>
  );
}