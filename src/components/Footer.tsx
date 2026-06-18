import { classrooms } from '../data/content';

export function Footer() {
  const year = new Date().getFullYear();
  const cols = [
    { title: 'Craft', items: classrooms.filter((c) => c.pillar === 'craft') },
    { title: 'Business', items: classrooms.filter((c) => c.pillar === 'business') },
    { title: 'Compound', items: classrooms.filter((c) => c.pillar === 'compound') },
  ];

  return (
    <footer className="border-t border-line bg-elevated">
      <div className="mx-auto max-w-shell px-6 py-20 sm:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <a
              href="#top"
              className="font-display text-2xl font-bold tracking-tight"
            >
              weblove<span className="text-accent">.</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mute">
              Fourteen classrooms, hundreds of quests, one career — from your
              first AI website to a recognised solo brand.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.items.map((c) => (
                  <li key={c.no}>
                    <a
                      href="#classrooms"
                      data-cursor="grow"
                      className="text-sm text-mute transition-colors duration-300 hover:text-ink"
                    >
                      {c.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-sm text-faint sm:flex-row sm:items-center">
          <p>© {year} Weblove Academy · Rafael. Skool community only.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-ink">Privacy</a>
            <a href="#" className="transition-colors hover:text-ink">Terms</a>
            <a href="#" className="transition-colors hover:text-ink">Community</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
