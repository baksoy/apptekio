// Central place to tweak contact routing + primary calls to action.
// Swap CONTACT_EMAIL / booking link once the real intake path is live.
export const CONTACT_EMAIL = 'hello@apptek.io';

export const TALK_HREF = `mailto:${CONTACT_EMAIL}?subject=Let%E2%80%99s%20talk%20about%20my%20week`;
export const GET_QUOTE_HREF = `mailto:${CONTACT_EMAIL}?subject=APPTEK%20quote%20request`;

// CTA labels are locked (Bera, copy v3). Change here, not in components.
export const PRIMARY_CTA = 'Talk about my week';
export const SECONDARY_CTA = 'Get a quote';

export const NAV_LINKS = [
  { label: 'How it works', href: '#how-it-works' },
  { label: "What's included", href: '#included' },
  { label: "Who it's for", href: '#who-its-for' },
  { label: 'FAQ', href: '#faq' },
];
