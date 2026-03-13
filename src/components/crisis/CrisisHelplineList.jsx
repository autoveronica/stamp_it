// ============================================
// STAMP IT. — CrisisHelplineList
// UK helplines. Update for other locales later.
// ============================================

import CrisisHelpline from './CrisisHelpline';

const helplines = [
  {
    name: 'Samaritans',
    number: '116 123',
    description: 'Free, 24/7, confidential. Call any time.',
    href: 'tel:116123',
    website: 'samaritans.org',
  },
  {
    name: 'Shout — Crisis Text Line',
    number: 'Text SHOUT to 85258',
    description: 'Free text service, 24/7.',
    href: 'sms:85258',
    website: 'giveusashout.org',
  },
  {
    name: 'Mind',
    number: '0300 123 3393',
    description: 'Mental health info and support.',
    href: 'tel:03001233393',
    website: 'mind.org.uk',
  },
];

export default function CrisisHelplineList() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
      {helplines.map(h => (
        <CrisisHelpline key={h.name} {...h} />
      ))}
    </div>
  );
}