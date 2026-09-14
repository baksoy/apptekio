import { DoorOpen, Users, PenLine, LineChart } from 'lucide-react';
import Reveal from '../ui/Reveal';

const steps = [
  {
    icon: DoorOpen,
    title: 'One front door',
    body: 'Requests from email, forms, chat and phone land in a single place — so nothing slips through the cracks or lives in someone’s head.',
  },
  {
    icon: Users,
    title: 'A few specialists',
    body: 'Not one do-everything bot. A small set of focused helpers — replies, scheduling, billing follow-ups — each good at one job.',
  },
  {
    icon: PenLine,
    title: 'Draft, then you approve',
    body: 'Everything comes to you as a ready-to-send draft. You skim, tweak if needed, and approve. Nothing goes out on its own.',
  },
  {
    icon: LineChart,
    title: 'A runbook you own',
    body: 'We document how it all works and keep spend capped. You get a calmer week and a system you understand — not a black box.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-content">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            A quiet system that keeps the week moving.
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            No rip-and-replace. No big platform to learn. We wire up the boring, repetitive
            parts of your operations and keep you in control of every send.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal
                key={step.title}
                delay={i * 80}
                className="group relative rounded-xl2 border border-ink/10 bg-paper-soft p-7 transition-shadow duration-300 hover:shadow-card"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-moss-100 text-moss-600 transition-colors group-hover:bg-moss-500 group-hover:text-paper-soft">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-ink-muted">
                    Step {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-2.5 leading-relaxed text-ink-muted">{step.body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
