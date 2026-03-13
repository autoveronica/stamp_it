'use client';

import { useState, useEffect } from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import AppHeader from '@/components/layout/AppHeader';
import OnboardingScreen from '@/components/onboarding/OnboardingScreen';
import CrisisScreen from '@/components/crisis/CrisisScreen';
import DecisionCard from '@/components/card/DecisionCard';
import OutcomeScreen from '@/components/outcome/OutcomeScreen';

const STORAGE_KEY = 'stampit_card';
const COOLDOWN_SECONDS = 60;

export default function Home() {
  const [screen, setScreen]                   = useState('loading');
  const [userData, setUserData]               = useState(null);
  const [isFirstVisit, setIsFirstVisit]       = useState(false);
  const [initialCooldown, setInitialCooldown] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      setUserData(parsed);

      // if seenFirstVisit is saved, this is a return user
      setIsFirstVisit(!parsed.seenFirstVisit);

      if (parsed.lastStampTime) {
        const elapsed   = Math.floor((Date.now() - parsed.lastStampTime) / 1000);
        const remaining = Math.max(0, COOLDOWN_SECONDS - elapsed);
        setInitialCooldown(remaining);
      }

      setScreen(parsed.stampCount >= 10 ? 'outcome' : 'card');
    } else {
      setScreen('onboarding');
    }
  }, []);

  function handleOnboardingComplete(data) {
    // seenFirstVisit is false — not yet seen
    const newCard = { ...data, stampCount: 1, lastStampTime: Date.now(), seenFirstVisit: false };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newCard));
    setUserData(newCard);
    setIsFirstVisit(true);
    setInitialCooldown(0);
    setScreen('card');
  }

  function handleFirstVisitSeen() {
    // mark first visit as seen in localStorage
    const updated = { ...userData, seenFirstVisit: true, lastStampTime: Date.now() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setUserData(updated);
    setIsFirstVisit(false);
  }

  function handleStamp(newCount) {
    const updated = { ...userData, stampCount: newCount, lastStampTime: Date.now() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setUserData(updated);
  }

  function handleCrisis() { setScreen('crisis'); }
  function handleReturnFromCrisis() { setScreen('onboarding'); }
  function handleCardComplete() { setScreen('outcome'); }

  function handleNewCard() {
    localStorage.removeItem(STORAGE_KEY);
    setUserData(null);
    setIsFirstVisit(false);
    setInitialCooldown(0);
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
          isFirstVisit={isFirstVisit}
          initialCooldown={initialCooldown}
          onFirstVisitSeen={handleFirstVisitSeen}
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