import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/primitives';
import { useInView } from '../lib/hooks';

const CraftScene = lazy(() => import('../scenes/CraftScene'));

const miniBosses = [
  { tag: 'CRAFT', name: 'The Halo Coffee build', note: 'Ship a full client site, start to finish.' },
  { tag: 'BUSINESS', name: 'The 90-day hunt', note: '100 dials a day. One vertical, one city.' },
];

export function Boss() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);

  return (
    <section id="boss" className="mx-auto max-w-shell px-6 py-24 sm:px-12 sm:py-36">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
        {/* Arena */}
        <div
          ref={ref}
          className="relative order-2 h-[340px] overflow-hidden rounded-sm border border-boss/30 bg-gradient-to-b from-boss/[0.08] to-transparent sm:h-[440px] lg:order-1"
        >
          <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-boss/25 blur-3xl" />
          {inView && (
            <Suspense fallback={null}>
              <CraftScene />
            </Suspense>
          )}
          <p className="pointer-events-none absolute bottom-4 left-0 right-0 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
            roll for it · drag to spin
          </p>
        </div>

        {/* Boss card */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-boss">
              ⚠ Boss battle
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-5xl font-bold uppercase leading-[0.95] tracking-[-0.02em] balance sm:text-7xl">
              €10K in <span className="text-boss">30 days</span>
            </h2>
          </Reveal>

          {/* HP bar flavour */}
          <Reveal delay={0.16}>
            <div className="mt-7 max-w-md">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                <span>Difficulty</span>
                <span className="text-boss">Brutal</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-line">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 0.92 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="h-full origin-left bg-boss"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-mute">
              The capstone of the Business pillar: cold calls to first clients,
              discovery to deposit, a real build delivered. Beat it and you have
              a business — not a hobby.
            </p>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {miniBosses.map((m) => (
                <div key={m.name} className="rounded-sm border border-line bg-panel/60 p-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-acid-dim">
                    Mini-boss · {m.tag}
                  </span>
                  <p className="mt-1.5 font-display text-sm font-semibold">{m.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-faint">{m.note}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
