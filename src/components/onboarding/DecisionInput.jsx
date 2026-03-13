// ============================================
// STAMP IT. — DecisionInput (Onboarding Step 2)
// Crisis keyword detection fires here.
// ============================================

import TextArea from '@/components/ui/TextArea';

export default function DecisionInput({ value, onChange, error }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
      <div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--font-size-xl)',
          color: 'var(--color-text-primary)',
          margin: '0 0 var(--space-xs)',
        }}>
          What's on your mind? 🤔
        </h2>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--font-size-base)',
          color: 'var(--color-text-secondary)',
          margin: 0,
        }}>
          What decision keeps coming back to you?
        </p>
      </div>
      <TextArea
        label="Your decision"
        placeholder="e.g. Should I quit my job? Should I buy that Hermès bag?"
        value={value}
        onChange={onChange}
        error={error}
        maxLength={200}
        rows={4}
      />
    </div>
  );
}