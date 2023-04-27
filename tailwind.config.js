/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      "heading": "var(--font-plex-mono)",
      "display": "var(--font-plex-sans)",
      "silkscreen": "var(--font-silkscreen)",
    },
    extend: {
      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
  safelist: [
    'rotate-[0deg]',
    'rotate-[45deg]',
    'rotate-[90deg]',
    'rotate-[135deg]',
    'rotate-[180deg]',
    'rotate-[225deg]',
    'rotate-[270deg]',
    'rotate-[315deg]',
    'rotate-[360deg]',
  ],
  plugins: [require('@tailwindcss/typography')],
}
