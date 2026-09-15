import { Inbox, Users, PenLine, Wallet, BookOpen, LifeBuoy } from 'lucide-react';
import Reveal from '../ui/Reveal';

const included = [
  {
    icon: Inbox,
    title: 'One place for the week’s requests',
    body: 'Customer asks from email, forms, and phone land in one spot, not in five different heads.',
  },
  {
    icon: Users,
    title: 'Digital helpers for the jobs that eat the week',
    body: 'Follow-ups, scheduling, routine replies, reminders, invoice nudges, light admin. Focused helpers, one job each — not a do-everything black box.',
  },
  {
    icon: PenLine,
    title: 'Approve before anything sends',
    body: 'Every message is prepared for your review first. You stay the final word. Always.',
  },
  {
    icon: Wallet,
    title: 'Clear, capped pricing',
    body: 'Guardrails you set, a ceiling you know. No surprise bills, no runaway usage.',
  },
  {
    icon: BookOpen,
    title: 'A written playbook you own',
    body: 'What runs, when, and why, in plain English. Yours to keep — even if you leave.',
  },
  {
    icon: LifeBuoy,
    title: 'Hands-on setup with you',
    body: 'We build it together and stay close after launch, tuning as your week changes.',
  },
];

export default function Included() {
  return (
    <section id="included" className="scroll-mt-24 bg-ink py-20 text-paper-soft sm:py-28">
      <div className="container-content">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-moss-200">What&apos;s included</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            One clear package. No mystery add-ons.
          </h2>
          <p className="mt-4 text-lg text-paper/70">
            Everything below is in scope from day one. We keep it small on purpose — small is
            faster to trust and easier to run.
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
