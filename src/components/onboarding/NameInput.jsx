// ============================================
// STAMP IT. — NameInput (Onboarding Step 1)
// ============================================

import InputField from '@/components/ui/InputField';

export default function NameInput({ value, onChange, error }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
      <div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--font-size-xl)',
          color: 'var(--color-text-primary)',
          margin: '0 0 var(--space-xs)',
        }}>
          Hey! 👋
        </h2>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--font-size-base)',
          color: 'var(--color-text-secondary)',
          margin: 0,
        }}>
          What should we call you?
        </p>
      </div>
      <InputField
        label="Your first name"
        placeholder="e.g. Veronica"
        value={value}
        onChange={onChange}
        error={error}
      />
    </div>
  );
}