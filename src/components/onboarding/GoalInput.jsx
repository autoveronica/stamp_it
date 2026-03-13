// ============================================
// STAMP IT. — GoalInput (Onboarding Step 3)
// ============================================

import TextArea from '@/components/ui/TextArea';

export default function GoalInput({ value, onChange }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
      <div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--font-size-xl)',
          color: 'var(--color-text-primary)',
          margin: '0 0 var(--space-xs)',
        }}>
          Dream a little ✨
        </h2>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--font-size-base)',
          color: 'var(--color-text-secondary)',
          margin: 0,
        }}>
          What does the ideal outcome look like? (optional)
        </p>
      </div>
      <TextArea
        label="Your ideal outcome"
        placeholder="e.g. I want to feel free and excited about Mondays again"
        value={value}
        onChange={onChange}
        maxLength={200}
        rows={4}
      />
    </div>
  );
}