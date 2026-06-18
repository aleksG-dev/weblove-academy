/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // Course rule: 8-point spacing system + 12-col thinking.
    extend: {
      fontFamily: {
        display: ['"Space Grotesk Variable"', 'system-ui', 'sans-serif'],
        body: ['"Inter Variable"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      // Cinematic-dark HSL palette (3 colours: primary/neutral + one accent).
      colors: {
        base: 'hsl(225 18% 5%)',
        elevated: 'hsl(225 14% 8%)',
        line: 'hsl(225 12% 14%)',
        ink: 'hsl(225 6% 96%)',
        mute: 'hsl(225 9% 62%)',
        faint: 'hsl(225 9% 42%)',
        accent: 'hsl(252 100% 72%)',
        'accent-soft': 'hsl(252 100% 80%)',
      },
      maxWidth: {
        shell: '1280px',
      },
      transitionTimingFunction: {
        // Course easings, verbatim.
        cinematic: 'cubic-bezier(0.16, 1, 0.3, 1)',
        snap: 'cubic-bezier(0.32, 0.72, 0, 1)',
        bounce: 'cubic-bezier(0.5, 1.5, 0.5, 1)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(4%, -3%, 0) scale(1.15)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16,1,0.3,1) both',
        marquee: 'marquee 34s linear infinite',
        aurora: 'aurora 18s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
