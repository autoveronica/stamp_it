// ============================================
// STAMP IT. — CrisisScreen
// Shown immediately when crisis keyword detected.
// Warm, non-alarming. No stamp card shown.
// ============================================

import CrisisMessage from './CrisisMessage';
import CrisisHelplineList from './CrisisHelplineList';
import CrisisReturnLink from './CrisisReturnLink';

export default function CrisisScreen({ onReturn }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-lg)',
      paddingTop: 'var(--space-xl)',
      backgroundColor: 'var(--color-crisis-bg)',
      minHeight: '100vh',
      padding: 'var(--space-xl) var(--space-md)',
    }}>
      <CrisisMessage />
      <CrisisHelplineList />
      <CrisisReturnLink onReturn={onReturn} />
    </div>
  );
}