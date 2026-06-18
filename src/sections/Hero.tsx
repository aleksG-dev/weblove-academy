import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Magnetic, RollingNumber, Scramble, SplitText } from '../components/primitives';

const SNAP = [0.16, 1, 0.3, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: SNAP } },
};

const slots = [
  { v: 14, s: '', label: 'Classrooms' },
  { v: 3, s: '', label: 'Pillars' },
  { v: 600, s: '+', label: 'Quests' },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* dotted HUD field + low acid glow */}
      <div aria-hidden className="dotgrid pointer-events-none absolute inset-0 opacity-50" />
      <div aria-hidden className="pointer-events-none absolute -bottom-1/4 left-1/2 h-[50vw] w-[50vw] -translate-x-1/2 rounded-full bg-acid/10 blur-[140px]" />

      <motion.div style={{ y, opacity: fade }} className="relative z-10 mx-auto w-full max-w-shell px-6 pt-28 sm:px-12">
        {/* boot line */}
        <div className="font-mono text-xs text-acid-dim sm:text-sm">
          <span className="text-faint">&gt;</span>{' '}
          <Scramble text="booting arcademy.exe — 14 classrooms loaded" delay={150} className="text-acid" />
          <span className="ml-1 inline-block w-2 animate-blink text-acid">▌</span>
        </div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="mt-8 font-mono text-xs uppercase tracking-[0.24em] text-mute"
        >
          [ Arcademy · by Aleks Szarycz ]
        </motion.p>

        <SplitText
          as="h1"
          text="Your whole career, shaped like a game."
          delay={0.4}
          className="mt-5 max-w-[16ch] font-display text-[clamp(2.7rem,8.5vw,7rem)] font-bold uppercase leading-[0.92] tracking-[-0.02em] balance"
        />

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-mute"
        >
          From your first AI website to a recognised solo brand. Three pillars,
          hundreds of game-shaped quests, one run. You direct the machine — your
          taste wins.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.84 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Magnetic
            as="a"
            href="#map"
            className="focus-ring rounded-sm bg-acid px-7 py-3.5 font-mono text-sm font-semibold uppercase tracking-[0.12em] text-base transition-colors duration-300 hover:bg-ink"
          >
            ▶ Press start
          </Magnetic>
          <Magnetic
            as="a"
            href="#classes"
            className="focus-ring rounded-sm border border-line px-7 py-3.5 font-mono text-sm font-semibold uppercase tracking-[0.12em] text-ink transition-colors duration-300 hover:border-acid hover:text-acid"
          >
            Select your class
          </Magnetic>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
          className="mt-16 flex gap-px overflow-hidden rounded-sm border border-line bg-line sm:max-w-xl"
        >
          {slots.map((s) => (
            <div key={s.label} className="flex-1 bg-panel px-5 py-4">
              <div className="font-display text-3xl font-bold text-acid sm:text-4xl">
                <RollingNumber to={s.v} suffix={s.s} />
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
