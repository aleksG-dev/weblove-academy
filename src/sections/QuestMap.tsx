import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { classrooms, pillars } from '../data/content';
import { Reveal } from '../components/primitives';

const acts: Record<string, string> = { craft: 'ACT I', business: 'ACT II', compound: 'ACT III' };

export function QuestMap() {
  return (
    <section id="map" className="relative mx-auto max-w-shell px-6 py-24 sm:px-12 sm:py-36">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-acid">
            ▍ The world map
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold uppercase tracking-[-0.02em] balance sm:text-6xl">
            Fourteen classrooms.
            <br />
            One run.
          </h2>
        </div>
        <p className="max-w-xs font-mono text-xs leading-relaxed text-mute">
          Every classroom is a stage — levels, quests, a boss battle. Follow the
          line, clear the run.
        </p>
      </div>

      {/* The spine */}
      <div className="relative mt-16 border-l border-line pl-8 sm:pl-12">
        {pillars.map((pillar) => {
          const rooms = classrooms.filter((c) => c.pillar === pillar.id);
          return (
            <div key={pillar.id} id={pillar.id} className="mb-4">
              {/* Act marker */}
              <Reveal>
                <div className="relative py-6">
                  <span className="absolute -left-[37px] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rotate-45 bg-acid sm:-left-[53px]" />
                  <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-acid">
                      {acts[pillar.id]}
                    </span>
                    <h3 className="font-display text-2xl font-bold uppercase tracking-[-0.01em] sm:text-3xl">
                      {pillar.name}
                    </h3>
                    <p className="font-mono text-xs text-faint">{pillar.line}</p>
                  </div>
                </div>
              </Reveal>

              {/* Stations */}
              {rooms.map((c, i) => (
                <Reveal key={c.no} delay={(i % 3) * 0.05}>
                  <a
                    href="#start"
                    data-cursor="grow"
                    className="group relative block"
                  >
                    {/* node on the spine */}
                    <span className="absolute -left-[35px] top-7 h-2.5 w-2.5 -translate-y-1/2 rounded-full border border-acid bg-base transition-colors duration-300 group-hover:bg-acid sm:-left-[51px]" />
                    <span className="absolute -left-[35px] top-7 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-acid/40 opacity-0 blur-[3px] transition-opacity duration-300 group-hover:opacity-100 sm:-left-[51px]" />

                    <motion.div
                      whileHover={{ x: 6 }}
                      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                      className="mb-3 flex flex-col gap-2 rounded-sm border border-line bg-panel/60 p-5 transition-colors duration-300 ease-cinematic group-hover:border-acid/50 sm:flex-row sm:items-center sm:gap-6"
                    >
                      <span className="font-mono text-sm text-faint">{c.no}</span>
                      <div className="min-w-0 flex-1">
                        <h4 className="flex items-center gap-1.5 font-display text-lg font-semibold">
                          {c.title}
                          <ArrowUpRight
                            size={16}
                            className="text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-acid"
                          />
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed text-mute">{c.blurb}</p>
                      </div>
                      <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.12em] text-acid-dim sm:text-right">
                        {c.meta}
                      </span>
                    </motion.div>
                  </a>
                </Reveal>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}
