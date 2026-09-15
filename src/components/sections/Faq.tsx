import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import Reveal from '../ui/Reveal';

const faqs = [
  {
    q: 'Will this message my customers without me?',
    a: 'No. Every reply, follow-up, and reminder is prepared for you and waits for your OK. Later, if you want, you can loosen that for low-risk jobs — but only when you choose to, and you can tighten it again any time.',
  },
  {
    q: 'Am I giving up control to “AI”?',
    a: 'The opposite. Helpers take the typing and chasing; you keep every decision and approve every send. You end up seeing more of what leaves your business than before, because it all passes in front of you first — more oversight on what matters, less time on the grind.',
  },
  {
    q: 'Do I have to replace my tools?',
    a: 'No. We connect to the email, calendar, forms, and systems you already use. Think of it as a quiet layer on top of your week, not a new platform for your team to learn.',
  },
  {
    q: 'How much does it cost?',
    a: 'We start with a small, fixed-scope pilot so you see value before committing to more. Pricing is transparent and capped up front — most pilots land in a small, predictable band. Tell us your scope and we’ll send an exact quote.',
  },
  {
    q: 'What if we stop?',
    a: 'You keep the written playbook — plain English on everything that runs and why. No lock-in, no black box. Start small, stop anytime.',
  },
  {
    q: 'How do you keep costs from running away?',
    a: 'Everything runs under caps you set. You know the ceiling, we watch usage, and there are no surprise bills.',
  },
  {
    q: 'Is this AI?',
    a: 'Under the hood, yes — modern automation and current models, including xAI’s Grok. Day to day, what you see is drafts waiting for your approval. We handle the engineering; you handle the yes.',
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
              conversation about your week than sell you a mystery.
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
