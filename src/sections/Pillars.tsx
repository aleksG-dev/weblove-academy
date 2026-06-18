import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { pillars } from '../data/content';

gsap.registerPlugin(useGSAP);

export function Pillars() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: 'power3.out', duration: 0.8 },
      });
      tl.from('.pillar-eyebrow', { y: 20, opacity: 0 })
        .from('.pillar-row', { y: 56, opacity: 0, stagger: 0.14 }, '-=0.35')
        .from('.pillar-rule', { scaleX: 0, transformOrigin: 'left', stagger: 0.14 }, '-=0.9');

      if (reduce) {
        tl.progress(1);
        return;
      }

      const obs = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            tl.play();
            obs.disconnect();
          }
        },
        { threshold: 0.25 }
      );
      if (scope.current) obs.observe(scope.current);
      return () => obs.disconnect();
    },
    { scope }
  );

  return (
    <section
      id="pillars"
      ref={scope}
      className="mx-auto max-w-shell px-6 py-28 sm:px-10 sm:py-40"
    >
      <p className="pillar-eyebrow font-mono text-xs uppercase tracking-[0.2em] text-accent">
        The structure
      </p>

      <div className="mt-12">
        {pillars.map((p) => (
          <a
            key={p.id}
            href={`#${p.id === 'craft' ? 'classrooms' : p.id}`}
            data-cursor="grow"
            className="pillar-row group block"
          >
            <div className="flex flex-col gap-3 py-8 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10">
              <div className="flex items-baseline gap-6">
                <span className="font-mono text-sm text-faint">{p.index}</span>
                <h2 className="font-display text-5xl font-bold tracking-[-0.02em] transition-colors duration-300 ease-cinematic group-hover:text-accent sm:text-7xl">
                  {p.name}
                </h2>
              </div>
              <p className="max-w-sm text-base leading-relaxed text-mute sm:text-right">
                {p.line}
              </p>
            </div>
            <div className="pillar-rule h-px w-full bg-line transition-colors duration-300 group-hover:bg-accent/40" />
          </a>
        ))}
      </div>
    </section>
  );
}
