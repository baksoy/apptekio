// Central place to tweak contact routing + primary calls to action.
// Swap CONTACT_EMAIL / booking link once the real intake path is live.
export const CONTACT_EMAIL = 'hello@apptek.io';

export const START_ONBOARDING_HREF = `mailto:${CONTACT_EMAIL}?subject=Start%20onboarding%20with%20APPTEK`;
export const GET_QUOTE_HREF = `mailto:${CONTACT_EMAIL}?subject=APPTEK%20quote%20request`;

export const NAV_LINKS = [
  { label: 'How it works', href: '#how-it-works' },
  { label: "What's included", href: '#included' },
  { label: "Who it's for", href: '#who-its-for' },
  { label: 'FAQ', href: '#faq' },
];
