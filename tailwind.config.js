/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk Variable"', 'system-ui', 'sans-serif'],
        body: ['"Inter Variable"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      // Arcade palette: near-black + warm paper ink + electric lime, with a
      // hot magenta reserved strictly for "boss / danger" moments.
      colors: {
        base: 'hsl(240 7% 4%)',
        panel: 'hsl(240 7% 7%)',
        raised: 'hsl(240 6% 10%)',
        line: 'hsl(240 6% 16%)',
        ink: 'hsl(56 18% 95%)',
        mute: 'hsl(52 7% 64%)',
        faint: 'hsl(48 8% 56%)',
        acid: 'hsl(78 92% 56%)',
        'acid-dim': 'hsl(78 60% 40%)',
        boss: 'hsl(330 95% 62%)',
      },
      maxWidth: { shell: '1320px' },
      transitionTimingFunction: {
        cinematic: 'cubic-bezier(0.16, 1, 0.3, 1)',
        snap: 'cubic-bezier(0.32, 0.72, 0, 1)',
        bounce: 'cubic-bezier(0.5, 1.5, 0.5, 1)',
      },
      keyframes: {
        blink: { '0%,49%': { opacity: '1' }, '50%,100%': { opacity: '0' } },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'pulse-ring': {
          '0%,100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.12)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        blink: 'blink 1.1s step-end infinite',
        marquee: 'marquee 32s linear infinite',
        'pulse-ring': 'pulse-ring 2.4s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
