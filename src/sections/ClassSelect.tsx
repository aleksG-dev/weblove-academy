import { paths } from '../data/content';
import { Reveal } from '../components/primitives';

const codename: Record<string, string> = {
  A: 'The Initiate',
  B: 'The Artisan',
  C: 'The Closer',
};

export function ClassSelect() {
  return (
    <section id="classes" className="border-y border-line bg-panel/40">
      <div className="mx-auto max-w-shell px-6 py-24 sm:px-12 sm:py-36">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-acid">
            ▍ Start here
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold uppercase tracking-[-0.02em] balance sm:text-6xl">
            Choose your class
          </h2>
          <p className="mt-4 max-w-md font-mono text-xs text-mute">
            Three loadouts, depending on where you are right now. Pick one and
            run its classrooms in order.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {paths.map((p, i) => (
            <Reveal key={p.letter} delay={i * 0.1}>
              <div
                data-cursor="grow"
                className="group flex h-full flex-col rounded-sm border border-line bg-base p-7 transition-colors duration-300 ease-cinematic hover:border-acid"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-sm border border-acid/50 font-display text-2xl font-bold text-acid transition-colors duration-300 group-hover:bg-acid group-hover:text-base">
                    {p.letter}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                    Class {p.letter}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl font-semibold uppercase tracking-[-0.01em]">
                  {codename[p.letter]}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-mute">{p.title}</p>
                <p className="mt-3 font-mono text-xs leading-relaxed text-faint">{p.line}</p>

                <div className="mt-6 border-t border-line pt-5">
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-acid-dim">
                    Loadout
                  </p>
                  <ol className="space-y-2.5">
                    {p.steps.map((s, si) => (
                      <li key={s} className="flex items-center gap-3 text-sm text-ink">
                        <span className="font-mono text-xs text-faint">
                          {String(si + 1).padStart(2, '0')}
                        </span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <span className="mt-7 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-faint transition-colors duration-300 group-hover:text-acid">
                  ▶ Select
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
