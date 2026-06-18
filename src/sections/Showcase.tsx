import { lazy, Suspense } from 'react';
import { Reveal } from '../components/primitives';
import { useInView } from '../lib/hooks';

const CraftScene = lazy(() => import('../scenes/CraftScene'));

export function Showcase() {
  // Only mount the (heavy) Three.js chunk once the section scrolls into view.
  const { ref, inView } = useInView<HTMLDivElement>(0.25);

  return (
    <section className="mx-auto max-w-shell px-6 py-28 sm:px-10 sm:py-40">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              The dividing line
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-[-0.02em] balance sm:text-6xl">
              AI generates the code. Your{' '}
              <span className="text-accent">taste</span> makes it award-grade.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-mute">
              You are not competing with the machine — you are learning to
              direct it. Functional and pretty is the baseline. The signature
              style is what separates pro from intern: one or two moves you
              become known for, repeated until they're recognisably yours.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-ink">
              {[
                'Custom cursor',
                'Magnetic buttons',
                'Split-text reveals',
                'WebGL heroes',
                'Cinematic easing',
                'Lighthouse 90+',
              ].map((m) => (
                <li key={m} className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div
          ref={ref}
          className="relative h-[380px] overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-accent/[0.08] to-transparent sm:h-[460px]"
        >
          {/* CSS fallback layer paints instantly; 3D fades in over it */}
          <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-3xl" />
          {inView && (
            <Suspense fallback={null}>
              <CraftScene />
            </Suspense>
          )}
          <p className="pointer-events-none absolute bottom-4 left-0 right-0 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
            one flourish · drag to orbit
          </p>
        </div>
      </div>
    </section>
  );
}
