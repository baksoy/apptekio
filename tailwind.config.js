/** @type {import('tailwindcss').Config} */

// Colors are driven by CSS variables (see src/index.css) so the whole site can
// be re-themed via [data-theme] without touching component classes. Each var
// holds space-separated RGB channels, enabling Tailwind's /<alpha-value> syntax.
const v = (name) => `rgb(var(${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: v('--c-paper'),
          soft: v('--c-paper-soft'),
          deep: v('--c-paper-deep'),
        },
        ink: {
          DEFAULT: v('--c-ink'),
          soft: v('--c-ink-soft'),
          muted: v('--c-ink-muted'),
        },
        // Primary accent scale
        moss: {
          50: v('--c-moss-50'),
          100: v('--c-moss-100'),
          200: v('--c-moss-200'),
          300: v('--c-moss-300'),
          400: v('--c-moss-400'),
          500: v('--c-moss-500'),
          600: v('--c-moss-600'),
          700: v('--c-moss-700'),
          800: v('--c-moss-800'),
          900: v('--c-moss-900'),
        },
        // Warm secondary accent scale
        clay: {
          100: v('--c-clay-100'),
          200: v('--c-clay-200'),
          300: v('--c-clay-300'),
          400: v('--c-clay-400'),
          500: v('--c-clay-500'),
          600: v('--c-clay-600'),
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'ui-serif', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgb(var(--c-ink) / 0.04), 0 8px 24px -12px rgb(var(--c-ink) / 0.18)',
        lift: '0 2px 4px rgb(var(--c-ink) / 0.06), 0 18px 40px -18px rgb(var(--c-ink) / 0.28)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      maxWidth: {
        content: '72rem',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        rise: 'rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
};
