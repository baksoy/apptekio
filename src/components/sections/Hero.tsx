import { ArrowRight, Check, ShieldCheck, Wallet, BookOpen } from 'lucide-react';
import { GET_QUOTE_HREF, START_ONBOARDING_HREF } from '../../config';
import Reveal from '../ui/Reveal';
import WeekCard from '../ui/WeekCard';

const trust = [
  { icon: Check, label: 'You approve before anything goes out' },
  { icon: Wallet, label: 'Spend stays capped' },
  { icon: BookOpen, label: 'A runbook you actually own' },
  { icon: ShieldCheck, label: 'Start small, cancel anytime' },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40">
      {/* Soft, warm background — no purple gradients */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-paper-soft via-paper to-paper" />
        <div className="absolute -top-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-moss-100/60 blur-3xl" />
        <div className="absolute top-40 -left-32 h-96 w-96 rounded-full bg-clay-100/50 blur-3xl" />
      </div>

      <div className="container-content">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-moss-500" />
                Ops automation for small teams
              </span>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="mt-5 font-display text-[2.65rem] font-semibold leading-[1.03] tracking-tight text-ink sm:text-6xl lg:text-[4.1rem]">
                Automation that
                <br className="hidden sm:block" /> actually runs{' '}
                <span className="relative whitespace-nowrap text-moss-600">
                  the week
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 320 24"
                    className="absolute -bottom-2 left-0 w-full text-clay-300"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M4 16 C 90 4, 230 4, 316 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                .
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-muted">
                We set up the quiet operations layer for your business: one front door for
                requests, a few specialists that handle the busywork, and a{' '}
                <span className="font-semibold text-ink">draft-then-approve</span> rhythm so
                nothing goes out without you. Fewer dropped balls. A calmer week.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href={START_ONBOARDING_HREF} className="btn-primary group">
                  Start onboarding
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a href={GET_QUOTE_HREF} className="btn-secondary">
                  Get a quote
                </a>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <ul className="mt-10 grid max-w-xl grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {trust.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-2.5 text-sm text-ink-soft">
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-moss-100 text-moss-600">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={160} className="lg:pl-4">
            <WeekCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
