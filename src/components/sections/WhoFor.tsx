import { Check, X } from 'lucide-react';
import Reveal from '../ui/Reveal';

const forYou = [
  'Owners and ops leads wearing too many hats',
  'Teams of roughly 3–50 drowning in follow-ups',
  'Service businesses: clinics, agencies, trades, local operators',
  'Anyone losing revenue to slow replies and dropped balls',
  'People who want help, but still want the final say',
];

const notYou = [
  'Enterprises shopping for a year-long platform rollout',
  'Anyone who wants a bot firing off messages unsupervised',
  'Teams looking for “AI theater” with no real workflow behind it',
  'Projects that need a 40-page RFP before anything ships',
];

export default function WhoFor() {
  return (
    <section id="who-its-for" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-content">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Who it&apos;s for</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Right-sized for small and mid-sized teams.
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            We&apos;re honest about fit. If you&apos;re small, busy, and tired of things falling
            through the cracks — this is built for you.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <Reveal className="rounded-xl2 border border-moss-200 bg-moss-50/60 p-7 sm:p-8">
            <h3 className="text-lg font-semibold text-moss-700">A great fit if you&apos;re…</h3>
            <ul className="mt-5 space-y-3.5">
              {forYou.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-soft">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-moss-500 text-paper-soft">
                    <Check className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={80}
            className="rounded-xl2 border border-ink/10 bg-paper-soft p-7 sm:p-8"
          >
            <h3 className="text-lg font-semibold text-ink">Probably not us if you want…</h3>
            <ul className="mt-5 space-y-3.5">
              {notYou.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-muted">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-paper-deep text-ink-muted">
                    <X className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
