// ============================================
// STAMP IT. — CRISIS KEYWORD DETECTION
// Add new phrases here without touching
// any component code.
// ============================================

export const crisisKeywords = [
  "kill myself",
  "killing myself",
  "suicide",
  "suicidal",
  "end my life",
  "ending my life",
  "don't want to be here",
  "dont want to be here",
  "want to die",
  "self-harm",
  "self harm",
  "hurt myself",
  "no reason to live",
  "not worth living",
];

// ── helper function ──────────────────────────
// Call this on any user input string.
// Returns true if a crisis keyword is found.

export function containsCrisisKeyword(text) {
  if (!text) return false;

  // normalise: lowercase, strip apostrophes and hyphens
  const normalised = text
    .toLowerCase()
    .replace(/'/g, "")
    .replace(/-/g, " ");

  return crisisKeywords.some(keyword => {
    const normalisedKeyword = keyword
      .toLowerCase()
      .replace(/'/g, "")
      .replace(/-/g, " ");
    return normalised.includes(normalisedKeyword);
  });
}