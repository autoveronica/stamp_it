// ============================================
// STAMP IT. — OutcomeActions
// CTA buttons: new card or start over.
// ============================================

import Button from '@/components/ui/Button';

export default function OutcomeActions({ onNewCard }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)',
    }}>
      <Button
        label="Start a new decision 🪄"
        onClick={onNewCard}
        variant="primary"
        size="lg"
      />
      <Button
        label="I've made my decision ✅"
        onClick={onNewCard}
        variant="secondary"
        size="md"
      />
    </div>
  );
}