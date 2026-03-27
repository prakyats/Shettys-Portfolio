/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'surface':               '#05070A',
        'surface-container':     '#0a0d14',
        'surface-container-low': '#080b12',
        'on-surface':            '#dfe4ff',
        'on-surface-variant':    '#64748b',
        'tertiary':              '#94a3b8',
        'outline':               '#1e293b',
        'outline-variant':       '#0f172a',
      },
      fontFamily: {
        headline: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        body:     ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter:  '-0.02em',
      },
    },
  },
  plugins: [],
}
