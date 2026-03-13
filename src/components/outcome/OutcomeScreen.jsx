// ============================================
// STAMP IT. — OutcomeScreen
// Full screen shown when 10th stamp lands.
// ============================================

import OutcomeMessage from './OutcomeMessage';
import OutcomeNextSteps from './OutcomeNextSteps';
import OutcomeActions from './OutcomeActions';

export default function OutcomeScreen({ userName, decisionText, goalText, onNewCard }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xl)',
      paddingTop: 'var(--space-lg)',
      paddingBottom: 'var(--space-xl)',
    }}>
      <OutcomeMessage
        userName={userName}
        decisionText={decisionText}
        goalText={goalText}
      />
      <OutcomeNextSteps />
      <OutcomeActions onNewCard={onNewCard} />
    </div>
  );
}