import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { classrooms } from '../data/content';
import { Reveal } from '../components/primitives';

const SNAP = [0.16, 1, 0.3, 1] as const;

const pillarLabel: Record<string, string> = {
  craft: 'Craft',
  business: 'Business',
  compound: 'Compound',
};

// Featured classrooms span two columns for an asymmetric bento rhythm.
const featured = new Set(['01', '03', '09']);

export function Classrooms() {
  return (
    <section id="classrooms" className="mx-auto max-w-shell px-6 py-28 sm:px-10 sm:py-40">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            The curriculum
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-[-0.02em] balance sm:text-6xl">
            Fourteen classrooms. Each one a path.
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-mute">
          Every classroom is video-game-shaped — levels, quests, and a boss
          battle. Pick where you are right now.
        </p>
      </div>

      <div className="mt-14 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {classrooms.map((c, i) => (
          <Reveal
            key={c.no}
            delay={(i % 4) * 0.06}
            className={featured.has(c.no) ? 'lg:col-span-2' : ''}
          >
            <motion.a
              href="#join"
              data-cursor="grow"
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-line bg-elevated p-6 transition-colors duration-300 ease-cinematic hover:border-accent/50"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-sm text-faint">{c.no}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-soft">
                  {pillarLabel[c.pillar]}
                </span>
              </div>

              <div className="mt-10">
                <h3 className="flex items-center gap-1.5 font-display text-xl font-semibold tracking-[-0.01em]">
                  {c.title}
                  <ArrowUpRight
                    size={18}
                    className="text-faint transition-all duration-300 ease-cinematic group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{c.blurb}</p>
                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
                  {c.meta}
                </p>
              </div>

              <motion.span
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-accent/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                transition={{ ease: SNAP }}
              />
            </motion.a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
