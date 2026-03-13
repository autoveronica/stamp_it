// ============================================
// STAMP IT. — TextArea
// Multi-line input. Used for decision + goal.
// ============================================

export default function TextArea({ label, placeholder, value, onChange, error, maxLength, rows = 3 }) {
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
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        rows={rows}
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
          resize: 'vertical',
          transition: 'border var(--transition-default)',
          boxSizing: 'border-box',
        }}
        onFocus={e => e.target.style.borderColor = 'var(--color-brand-primary)'}
        onBlur={e => e.target.style.borderColor = error ? 'var(--color-crisis-accent)' : 'var(--color-card-border)'}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {error && (
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-crisis-accent)' }}>
            {error}
          </span>
        )}
        {maxLength && (
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', marginLeft: 'auto' }}>
            {value.length}/{maxLength}
          </span>
        )}
      </div>
    </div>
  );
}