import { CONTACT_EMAIL, NAV_LINKS } from '../../config';
import Wordmark from '../ui/Wordmark';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink/10 bg-paper-deep/50">
      <div className="container-content py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Wordmark />
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Ops automation for small teams. One front door, a few specialists, and a
              draft-then-approve rhythm that keeps you in control.
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
                Explore
              </p>
              <ul className="mt-4 space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm link-quiet">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
                Talk to us
              </p>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm link-quiet">
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li>
                  <a href="#start" className="text-sm link-quiet">
                    Start onboarding
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink/10 pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} APPTEK. All rights reserved.</p>
          <p className="max-w-xl sm:text-right">
            How we build it: modern automation tooling with current AI models, including xAI&apos;s
            Grok. You approve the output; we handle the engineering.
          </p>
        </div>
      </div>
    </footer>
  );
}
