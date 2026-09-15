import { Check, X } from 'lucide-react';
import Reveal from '../ui/Reveal';

const forYou = [
  'An owner or ops lead wearing too many hats',
  'A team of roughly 3–50 buried in follow-ups, scheduling, and reminders',
  'A service business — clinic, agency, trade, practice, local operator',
  'Losing goodwill or revenue when things go quiet for too long',
  'Someone who wants help and a firmer grip on what goes out',
];

const notYou = [
  'A year-long enterprise platform project',
  'Messages firing at customers with nobody checking',
  'Flashy “AI” demos with no real workflow behind them',
  'A 40-page RFP before anything starts',
];

export default function WhoFor() {
  return (
    <section id="who-its-for" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-content">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Who it&apos;s for</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Built for busy owners, not boardrooms.
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            We&apos;re honest about fit. If you&apos;re small, busy, and tired of watching the
            week&apos;s busywork eat the day, this was built for you.
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
