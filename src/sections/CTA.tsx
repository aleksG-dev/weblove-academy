import { Magnetic, Reveal, Scramble } from '../components/primitives';

export function CTA() {
  return (
    <section id="start" className="relative overflow-hidden border-t border-line">
      <div aria-hidden className="dotgrid pointer-events-none absolute inset-0 opacity-40" />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[42vw] w-[42vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-acid/12 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-shell px-6 py-32 text-center sm:px-12 sm:py-48">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-acid">
            ◇ Insert coin
          </p>
        </Reveal>

        <Scramble
          as="h2"
          text="READY PLAYER ONE?"
          className="mx-auto mt-6 block font-display text-[clamp(2.6rem,9vw,7rem)] font-bold uppercase leading-[0.95] tracking-[-0.02em]"
        />

        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-mute">
            Fourteen classrooms, hundreds of quests, a community of builders
            going from first AI website to recognised solo brand. Your run
            starts now.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Magnetic
              as="a"
              href="#map"
              className="focus-ring rounded-sm bg-acid px-9 py-4 font-mono text-base font-semibold uppercase tracking-[0.12em] text-base transition-colors duration-300 hover:bg-ink"
            >
              ▶ Press start
            </Magnetic>
            <Magnetic
              as="a"
              href="#classes"
              className="focus-ring rounded-sm border border-line px-9 py-4 font-mono text-base font-semibold uppercase tracking-[0.12em] text-ink transition-colors duration-300 hover:border-acid hover:text-acid"
            >
              Pick a class
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
