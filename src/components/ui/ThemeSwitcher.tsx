import { useEffect, useState } from 'react';
import { Palette } from 'lucide-react';

type ThemeId = 'a' | 'b' | 'c';

// Preview control for comparing brand palettes. Each option shows a tri-color
// chip: [ink, primary, warm accent]. Safe to remove once a palette is chosen.
const THEMES: { id: ThemeId; name: string; swatch: [string, string, string] }[] = [
  { id: 'a', name: 'Evergreen', swatch: ['#14231C', '#2F6B44', '#D07E4F'] },
  { id: 'b', name: 'Turquoise', swatch: ['#0C1D22', '#0C877D', '#E86F52'] },
  { id: 'c', name: 'Azure (warm)', swatch: ['#1B2A43', '#3064AC', '#E3A033'] },
];

function readTheme(): ThemeId {
  const current = document.documentElement.getAttribute('data-theme');
  return current === 'a' || current === 'b' ? current : 'c';
}

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<ThemeId>('c');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTheme(readTheme());
  }, []);

  const apply = (id: ThemeId) => {
    document.documentElement.setAttribute('data-theme', id);
    try {
      localStorage.setItem('apptek-theme', id);
      const url = new URL(window.location.href);
      url.searchParams.set('theme', id);
      window.history.replaceState({}, '', url);
    } catch {
      /* ignore storage/history failures */
    }
    setTheme(id);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[60] print:hidden">
      <div className="flex items-center gap-1.5 rounded-full border border-ink/15 bg-paper-soft/90 p-1.5 shadow-lift backdrop-blur">
        <span
          className="flex h-8 w-8 items-center justify-center rounded-full text-ink-muted"
          aria-hidden="true"
          title="Preview brand palettes"
        >
          <Palette className="h-4 w-4" />
        </span>

        <div className={`items-center gap-1 ${open ? 'flex' : 'hidden sm:flex'}`}>
          {THEMES.map((t) => {
            const active = theme === t.id;
            return (
              <button
                key={t.id}
                onClick={() => apply(t.id)}
                aria-pressed={active}
                aria-label={`Palette ${t.id.toUpperCase()} — ${t.name}`}
                title={`Palette ${t.id.toUpperCase()} — ${t.name}`}
                className={`flex items-center gap-2 rounded-full py-1 pl-1.5 pr-2.5 text-xs font-semibold transition ${
                  active
                    ? 'bg-ink text-paper-soft'
                    : 'text-ink-muted hover:bg-paper-deep hover:text-ink'
                }`}
              >
                <span className="flex overflow-hidden rounded-full ring-1 ring-black/10">
                  {t.swatch.map((c) => (
                    <span key={c} style={{ backgroundColor: c }} className="h-4 w-2" />
                  ))}
                </span>
                <span className="hidden sm:inline">{t.id.toUpperCase()}</span>
              </button>
            );
          })}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Hide palette options' : 'Show palette options'}
          className="flex h-8 items-center rounded-full px-2 text-xs font-semibold text-ink-muted hover:text-ink sm:hidden"
        >
          {open ? 'Close' : 'Theme'}
        </button>
      </div>
    </div>
  );
}
