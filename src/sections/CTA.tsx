import { Magnetic, Reveal, SplitText } from '../components/primitives';

export function CTA() {
  return (
    <section id="join" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[40vw] w-[40vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[130px] animate-aurora" />
      </div>

      <div className="relative z-10 mx-auto max-w-shell px-6 py-32 text-center sm:px-10 sm:py-48">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent-soft">
            One career
          </p>
        </Reveal>

        <SplitText
          as="h2"
          text="Pick where you are. Start the first quest."
          className="mx-auto mt-6 max-w-[18ch] font-display text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[0.98] tracking-[-0.03em] balance"
        />

        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-mute">
            Fourteen classrooms, hundreds of game-shaped quests, and a community
            of builders going from first AI website to recognised solo brand.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Magnetic
              as="a"
              href="#paths"
              className="focus-ring rounded-full bg-accent px-9 py-4 font-display text-lg font-semibold text-base transition-colors duration-300 hover:bg-accent-soft"
            >
              Enter the academy
            </Magnetic>
            <Magnetic
              as="a"
              href="#classrooms"
              className="focus-ring rounded-full border border-line px-9 py-4 font-display text-lg font-semibold text-ink transition-colors duration-300 hover:border-accent"
            >
              Browse classrooms
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
