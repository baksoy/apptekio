import { ArrowRight, Sparkles } from 'lucide-react';
import { GET_QUOTE_HREF, PRIMARY_CTA, SECONDARY_CTA, TALK_HREF } from '../../config';
import Reveal from '../ui/Reveal';

const timeline = [
  {
    when: 'Week 1',
    what: 'We map your week together and pick the two or three busywork jobs worth fixing first.',
  },
  {
    when: 'Week 2',
    what: 'Your helpers go live in draft-you-approve mode. The week starts arriving prepared.',
  },
  {
    when: 'From there',
    what: 'We tune, hand you the playbook, and expand only where it earns its keep.',
  },
];

export default function Pilot() {
  return (
    <section id="pilot" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-content">
        <div className="overflow-hidden rounded-[1.6rem] border border-ink/10 bg-paper-soft shadow-card">
          <div className="grid lg:grid-cols-[1fr_0.9fr]">
            <div className="p-8 sm:p-12">
              <Reveal>
                <span className="eyebrow">
                  <Sparkles className="h-3.5 w-3.5" />
                  Start with a pilot
                </span>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  Prove it on your real busywork first.
                </h2>
                <p className="mt-4 max-w-lg text-lg text-ink-muted">
                  We start with a small, fixed-scope pilot on a couple of your actual weekly
                  headaches — only where there&apos;s real grunt work to take off your plate,
                  never automation for its own sake. You see the drafts, feel your attention
                  coming back, and decide what to expand.
                </p>
              </Reveal>

              <Reveal delay={100}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a href={TALK_HREF} className="btn-primary group">
                    {PRIMARY_CTA}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a href={GET_QUOTE_HREF} className="btn-secondary">
                    {SECONDARY_CTA}
                  </a>
                </div>
                <p className="mt-4 text-sm text-ink-muted">
                  Transparent, capped pricing shared up front. Most pilots land in a small,
                  predictable band — ask and we&apos;ll quote your exact scope.
                </p>
              </Reveal>
            </div>

            <div className="border-t border-ink/10 bg-paper-deep/60 p-8 sm:p-12 lg:border-l lg:border-t-0">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink-muted">
                What setup looks like
              </p>
              <ol className="mt-6 space-y-6">
                {timeline.map((t, i) => (
                  <Reveal as="li" key={t.when} delay={i * 90} className="flex gap-4">
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-ink text-sm font-semibold text-paper-soft">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-ink">{t.when}</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-muted">{t.what}</p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
