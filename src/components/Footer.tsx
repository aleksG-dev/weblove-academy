import { classrooms } from '../data/content';

export function Footer() {
  const year = new Date().getFullYear();
  const cols = [
    { title: 'ACT I · Craft', items: classrooms.filter((c) => c.pillar === 'craft') },
    { title: 'ACT II · Business', items: classrooms.filter((c) => c.pillar === 'business') },
    { title: 'ACT III · Compound', items: classrooms.filter((c) => c.pillar === 'compound') },
  ];

  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto max-w-shell px-6 py-20 sm:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="font-mono text-sm font-medium tracking-[0.1em]">
              <span className="text-ink">WEBLOVE</span>
              <span className="text-acid">.EXE</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mute">
              A career, shaped like a game. Fourteen classrooms, hundreds of
              quests — from first AI website to recognised solo brand.
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
              No continues. New game+ only.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.16em] text-acid-dim">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.items.map((c) => (
                  <li key={c.no}>
                    <a
                      href="#map"
                      data-cursor="grow"
                      className="text-sm text-mute transition-colors duration-300 hover:text-acid"
                    >
                      {c.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 font-mono text-[11px] uppercase tracking-[0.12em] text-faint sm:flex-row sm:items-center">
          <p>© {year} Weblove Academy · Rafael — Skool community only</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-acid">Privacy</a>
            <a href="#" className="transition-colors hover:text-acid">Terms</a>
            <a href="#" className="transition-colors hover:text-acid">Community</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
