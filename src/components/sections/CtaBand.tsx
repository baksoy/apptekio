import { ArrowRight } from 'lucide-react';
import { CONTACT_EMAIL, GET_QUOTE_HREF, START_ONBOARDING_HREF } from '../../config';
import Reveal from '../ui/Reveal';

export default function CtaBand() {
  return (
    <section id="start" className="scroll-mt-24 pb-24 pt-4 sm:pb-28">
      <div className="container-content">
        <Reveal className="relative overflow-hidden rounded-[1.6rem] bg-ink px-6 py-14 text-center text-paper-soft sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 opacity-70"
          >
            <div className="absolute -top-16 left-1/4 h-64 w-64 rounded-full bg-moss-500/25 blur-3xl" />
            <div className="absolute -bottom-20 right-1/4 h-64 w-64 rounded-full bg-clay-400/20 blur-3xl" />
          </div>

          <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-[2.6rem] sm:leading-[1.1]">
            Get your week back.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-paper/70">
            Tell us where the week gets stuck. We&apos;ll show you exactly what we&apos;d
            automate first — and what it would cost.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={START_ONBOARDING_HREF} className="btn group bg-paper-soft text-ink hover:bg-paper">
              Start onboarding
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={GET_QUOTE_HREF}
              className="btn border border-paper/25 text-paper-soft hover:bg-paper/10"
            >
              Get a quote
            </a>
          </div>

          <p className="mt-6 text-sm text-paper/50">
            Prefer email? Reach us at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-moss-200 underline-offset-4 hover:underline">
              {CONTACT_EMAIL}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
