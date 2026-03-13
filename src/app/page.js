'use client';

import { useState, useEffect } from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import AppHeader from '@/components/layout/AppHeader';
import OnboardingScreen from '@/components/onboarding/OnboardingScreen';
import CrisisScreen from '@/components/crisis/CrisisScreen';
import DecisionCard from '@/components/card/DecisionCard';
import OutcomeScreen from '@/components/outcome/OutcomeScreen';

const STORAGE_KEY = 'stampit_card';

export default function Home() {
  const [screen, setScreen] = useState('loading');
  const [userData, setUserData] = useState(null);

  // on first load, check if user has a saved card
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      setUserData(parsed);
      if (parsed.stampCount >= 10) {
        setScreen('outcome');
      } else {
        setScreen('card');
      }
    } else {
      setScreen('onboarding');
    }
  }, []);

  function handleOnboardingComplete(data) {
    // first stamp is added automatically on card creation
    const newCard = { ...data, stampCount: 1 };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newCard));
    setUserData(newCard);
    setScreen('card');
  }

  function handleStamp(newCount) {
    const updated = { ...userData, stampCount: newCount };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setUserData(updated);
  }

  function handleCrisis() {
    setScreen('crisis');
  }

  function handleReturnFromCrisis() {
    setScreen('onboarding');
  }

  function handleCardComplete() {
    setScreen('outcome');
  }

  function handleNewCard() {
    localStorage.removeItem(STORAGE_KEY);
    setUserData(null);
    setScreen('onboarding');
  }

  if (screen === 'loading') return null;

  return (
    <PageWrapper>
      {screen !== 'crisis' && <AppHeader />}

      {screen === 'onboarding' && (
        <OnboardingScreen
          onComplete={handleOnboardingComplete}
          onCrisis={handleCrisis}
        />
      )}

      {screen === 'crisis' && (
        <CrisisScreen onReturn={handleReturnFromCrisis} />
      )}

      {screen === 'card' && (
        <DecisionCard
          userName={userData?.name}
          decisionText={userData?.decision}
          goalText={userData?.goal}
          stampCount={userData?.stampCount || 1}
          onStamp={handleStamp}
          onComplete={handleCardComplete}
        />
      )}

      {screen === 'outcome' && (
        <OutcomeScreen
          userName={userData?.name}
          decisionText={userData?.decision}
          goalText={userData?.goal}
          onNewCard={handleNewCard}
        />
      )}
    </PageWrapper>
  );
}