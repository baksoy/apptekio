/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm "paper" backgrounds — calm, premium, not stark white
        paper: {
          DEFAULT: '#F7F4EC',
          soft: '#FCFAF4',
          deep: '#EFEADD',
        },
        // Deep forest ink — confident, calm, reads as "green week / go"
        ink: {
          DEFAULT: '#14231C',
          soft: '#26382F',
          muted: '#55655C',
        },
        // Primary accent: calm evergreen
        moss: {
          50: '#EEF4EF',
          100: '#D6E6D9',
          200: '#AECCB4',
          300: '#7FAE89',
          400: '#548C62',
          500: '#2F6B44',
          600: '#215433',
          700: '#1A4229',
          800: '#143221',
          900: '#0E241A',
        },
        // Warm secondary accent: clay / terracotta
        clay: {
          100: '#F6E3D6',
          200: '#EEC6AC',
          300: '#E0A17B',
          400: '#D07E4F',
          500: '#B85F32',
          600: '#9A4B26',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'ui-serif', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(20, 35, 28, 0.04), 0 8px 24px -12px rgba(20, 35, 28, 0.18)',
        lift: '0 2px 4px rgba(20, 35, 28, 0.06), 0 18px 40px -18px rgba(20, 35, 28, 0.28)',
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
        rise: 'rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
};
