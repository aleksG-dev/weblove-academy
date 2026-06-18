import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { Magnetic, RollingNumber, SplitText } from '../components/primitives';

const SNAP = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: SNAP } },
};

const stats = [
  { v: 14, s: '', label: 'Classrooms' },
  { v: 3, s: '', label: 'Pillars' },
  { v: 600, s: '+', label: 'Quests' },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const auroraY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Aurora backdrop — the single hero flourish, zero JS weight */}
      <motion.div style={{ y: auroraY }} className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[10%] top-[8%] h-[44vw] w-[44vw] rounded-full bg-accent/30 blur-[120px] animate-aurora" />
        <div className="absolute right-[2%] top-[24%] h-[36vw] w-[36vw] rounded-full bg-[hsl(280_90%_55%/0.18)] blur-[120px] animate-aurora [animation-delay:-6s]" />
        <div className="absolute bottom-[2%] left-[28%] h-[30vw] w-[30vw] rounded-full bg-[hsl(210_100%_55%/0.14)] blur-[120px] animate-aurora [animation-delay:-11s]" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="relative z-10 mx-auto w-full max-w-shell px-6 pt-28 sm:px-10"
      >
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-mono text-xs uppercase tracking-[0.22em] text-accent-soft"
        >
          Weblove · the Academy
        </motion.p>

        <SplitText
          as="h1"
          text="Fourteen classrooms. One career."
          delay={0.15}
          className="mt-6 max-w-[14ch] font-display text-[clamp(3rem,9vw,7.5rem)] font-bold leading-[0.95] tracking-[-0.03em] balance"
        />

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-mute"
        >
          From your first AI website to a recognised solo brand. Three pillars,
          hundreds of game-shaped quests. You direct the machine — your taste
          wins.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.66 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Magnetic
            as="a"
            href="#paths"
            className="focus-ring rounded-full bg-accent px-7 py-3.5 font-display font-semibold text-base transition-colors duration-300 hover:bg-accent-soft"
          >
            Choose your path
          </Magnetic>
          <Magnetic
            as="a"
            href="#classrooms"
            className="focus-ring rounded-full border border-line px-7 py-3.5 font-display font-semibold text-ink transition-colors duration-300 hover:border-accent"
          >
            See the 14 classrooms
          </Magnetic>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.82 }}
          className="mt-16 flex gap-10 border-t border-line pt-8"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl font-bold text-ink sm:text-4xl">
                <RollingNumber to={s.v} suffix={s.s} />
              </div>
              <div className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-faint">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-mute"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
