import { ArrowRight } from 'lucide-react';
import { paths } from '../data/content';
import { Reveal } from '../components/primitives';

export function Paths() {
  return (
    <section id="paths" className="border-y border-line bg-elevated/40">
      <div className="mx-auto max-w-shell px-6 py-28 sm:px-10 sm:py-40">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Start here
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-[-0.02em] balance sm:text-6xl">
            Which path is yours?
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {paths.map((p, i) => (
            <Reveal key={p.letter} delay={i * 0.1}>
              <div
                data-cursor="grow"
                className="group flex h-full flex-col rounded-2xl border border-line bg-base p-7 transition-colors duration-300 ease-cinematic hover:border-accent/50"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/40 font-display text-lg font-bold text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-base">
                    {p.letter}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-faint">
                    Path {p.letter}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.01em]">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{p.line}</p>

                <ol className="mt-6 space-y-2.5 border-t border-line pt-5">
                  {p.steps.map((s, si) => (
                    <li
                      key={s}
                      className="flex items-center gap-3 text-sm text-ink"
                    >
                      <span className="font-mono text-xs text-faint">
                        {String(si + 1).padStart(2, '0')}
                      </span>
                      <span>{s}</span>
                      {si < p.steps.length - 1 && (
                        <ArrowRight
                          size={13}
                          className="ml-auto text-faint/60"
                        />
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
