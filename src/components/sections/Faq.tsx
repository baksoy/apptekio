import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import Reveal from '../ui/Reveal';

const faqs = [
  {
    q: 'Will this send things to my customers without me seeing them?',
    a: 'No. That’s the whole point of draft-then-approve. Every reply, follow-up, or action is prepared for you and waits for your OK. You can loosen that later for low-risk tasks — but only if and when you want to.',
  },
  {
    q: 'Do I have to replace the tools I already use?',
    a: 'No rip-and-replace. We connect to the email, calendar, forms, and systems you already run. The goal is a quiet layer on top of your work, not a new platform for your team to learn.',
  },
  {
    q: 'How much does it cost?',
    a: 'We start with a small, fixed-scope pilot so you can see value before committing. Pricing is transparent and capped up front — most pilots land in a modest, predictable band. Tell us your scope and we’ll send an exact quote.',
  },
  {
    q: 'What happens if I want to leave?',
    a: 'You keep the runbook — plain-English documentation of everything that runs and why. No lock-in, no black box. Start small, cancel anytime.',
  },
  {
    q: 'How do you keep spend from running away?',
    a: 'Every workflow runs under caps and guardrails you approve. You set the ceiling, we monitor usage, and there are no surprise bills.',
  },
  {
    q: 'What’s the technology behind it?',
    a: 'Under the hood we build on current AI models — including xAI’s Grok — plus proven automation tooling. But you don’t have to think about any of that. We handle the engineering and keep you focused on approving good work and getting your week back.',
  },
];

function FaqItem({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="border-b border-ink/10">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-lg font-medium text-ink">{q}</span>
        <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-paper-deep text-ink">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pr-10 leading-relaxed text-ink-muted">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-content">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              The questions we get most.
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Still wondering something? Ask us directly — we&apos;d rather have a real
              conversation than sell you a mystery.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div>
              {faqs.map((f, i) => (
                <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
