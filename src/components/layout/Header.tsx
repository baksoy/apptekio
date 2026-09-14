import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, START_ONBOARDING_HREF } from '../../config';
import Wordmark from '../ui/Wordmark';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-paper/85 backdrop-blur-md border-b border-ink/10' : 'bg-transparent'
      }`}
    >
      <div className="container-content">
        <div className="flex items-center justify-between py-4">
          <a href="#top" className="flex items-center" aria-label="APPTEK home">
            <Wordmark />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium link-quiet">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a href={START_ONBOARDING_HREF} className="btn-primary">
              Start onboarding
            </a>
          </div>

          <button
            className="md:hidden -mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-ink"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="mb-4 rounded-xl2 border border-ink/10 bg-paper-soft p-3 shadow-card">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-paper-deep"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={START_ONBOARDING_HREF}
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary mt-2 w-full"
              >
                Start onboarding
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
