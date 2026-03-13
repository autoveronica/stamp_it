// ============================================
// STAMP IT. — OnboardingScreen
// Handles all 3 steps + crisis detection.
// ============================================

'use client';

import { useState } from 'react';
import OnboardingStep from './OnboardingStep';
import NameInput from './NameInput';
import DecisionInput from './DecisionInput';
import GoalInput from './GoalInput';
import OnboardingProgress from './OnboardingProgress';
import Button from '@/components/ui/Button';
import { containsCrisisKeyword } from '@/lib/crisisKeywords';

export default function OnboardingScreen({ onComplete, onCrisis }) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [decision, setDecision] = useState('');
  const [goal, setGoal] = useState('');
  const [errors, setErrors] = useState({});

  function handleDecisionChange(value) {
    setDecision(value);
    if (containsCrisisKeyword(value)) {
      onCrisis();
    }
  }

  function handleNext() {
    if (step === 1 && !name.trim()) {
      setErrors({ name: 'Please enter your name' });
      return;
    }
    if (step === 2 && !decision.trim()) {
      setErrors({ decision: 'Please describe your decision' });
      return;
    }
    setErrors({});
    if (step < 3) {
      setStep(step + 1);
    } else {
      onComplete({ name, decision, goal });
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', paddingTop: 'var(--space-xl)' }}>
      <OnboardingProgress currentStep={step} totalSteps={3} />
      {step === 1 && <NameInput value={name} onChange={e => setName(e.target.value)} error={errors.name} />}
      {step === 2 && <DecisionInput value={decision} onChange={e => handleDecisionChange(e.target.value)} error={errors.decision} />}
      {step === 3 && <GoalInput value={goal} onChange={e => setGoal(e.target.value)} />}
      <Button
        label={step < 3 ? 'Next →' : "Let's go! 🪄"}
        onClick={handleNext}
        size="lg"
      />
      {step > 1 && (
        <Button label="← Back" onClick={() => setStep(step - 1)} variant="ghost" size="sm" />
      )}
    </div>
  );
}