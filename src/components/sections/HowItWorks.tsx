import { ListChecks, Users, PenLine, BookOpen } from 'lucide-react';
import Reveal from '../ui/Reveal';

const steps = [
  {
    icon: ListChecks,
    title: 'Map the busywork',
    body: 'Where do requests pile up? Which follow-ups go quiet? What keeps getting pushed to Friday? We sit down with you and pick two or three jobs that are quietly costing you real attention.',
  },
  {
    icon: Users,
    title: 'Stand up digital helpers',
    body: 'Each helper owns one clear job — inquiries, follow-ups, appointments, invoice nudges, routine updates. The loose ends get caught by design, so nothing goes quiet just because Tuesday got loud.',
  },
  {
    icon: PenLine,
    title: 'They prepare. You decide.',
    body: 'Drafts land in front of you. You tweak or approve. Nothing reaches a customer until you say so — which means more control over what goes out, not less. Your judgment goes on the decisions, not the typing and chasing.',
  },
  {
    icon: BookOpen,
    title: 'A playbook you can read',
    body: 'Plain English: what’s running, when, and why, with caps on spend you set. You understand every piece of it — and you’re never locked into a mystery.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-content">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Digital helpers do the grunt work. You make the calls.
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            No new app to learn, nothing to migrate. We find where your week leaks time and
            attention, set up digital helpers for exactly those jobs, and keep you as the final
            word on every message that leaves the building.
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
