import { DoorOpen, Users, PenLine, Wallet, BookOpen, LifeBuoy } from 'lucide-react';
import Reveal from '../ui/Reveal';

const included = [
  {
    icon: DoorOpen,
    title: 'One front door',
    body: 'A single intake for requests across your channels, so your team stops juggling five inboxes.',
  },
  {
    icon: Users,
    title: 'A handful of specialists',
    body: 'Focused helpers for the jobs that eat your week — follow-ups, scheduling, routine replies, data entry.',
  },
  {
    icon: PenLine,
    title: 'Draft-then-approve',
    body: 'Every message and action is prepared for your review first. You stay the final word, always.',
  },
  {
    icon: Wallet,
    title: 'Spend governance',
    body: 'Clear, capped costs with guardrails. No surprise bills, no runaway usage — you set the ceiling.',
  },
  {
    icon: BookOpen,
    title: 'A runbook you own',
    body: 'Plain-English documentation of what runs, when, and why — yours to keep even if you leave.',
  },
  {
    icon: LifeBuoy,
    title: 'Hands-on onboarding',
    body: 'We do the setup with you and stay close after launch to tune things as your week changes.',
  },
];

export default function Included() {
  return (
    <section id="included" className="scroll-mt-24 bg-ink py-20 text-paper-soft sm:py-28">
      <div className="container-content">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-moss-200">What&apos;s included</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            One tidy offer. No mystery add-ons.
          </h2>
          <p className="mt-4 text-lg text-paper/70">
            Everything below comes in the box. We keep the scope small on purpose — it&apos;s
            faster to launch and easier to trust.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl2 border border-paper/10 bg-paper/10 sm:grid-cols-2 lg:grid-cols-3">
          {included.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.title}
                delay={i * 60}
                className="bg-ink-soft p-7 transition-colors duration-300 hover:bg-ink-soft/70"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-paper/10 text-moss-200">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/65">{item.body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
