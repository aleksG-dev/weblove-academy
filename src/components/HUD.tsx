import { useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useSpring } from 'framer-motion';

const zones = [
  { at: 0, lv: 1, name: 'BOOT' },
  { at: 0.16, lv: 2, name: 'CRAFT' },
  { at: 0.46, lv: 3, name: 'BUSINESS' },
  { at: 0.72, lv: 4, name: 'COMPOUND' },
  { at: 0.95, lv: 5, name: 'READY' },
];

export function HUD() {
  const { scrollYProgress } = useScroll();
  const xp = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const [zone, setZone] = useState(zones[0]);
  const [pct, setPct] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setPct(Math.round(v * 100));
    let z = zones[0];
    for (const candidate of zones) if (v >= candidate.at) z = candidate;
    setZone(z);
  });

  return (
    <>
      {/* Corner brackets */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-40 hidden sm:block">
        {[
          'left-4 top-4 border-l border-t',
          'right-4 top-4 border-r border-t',
          'left-4 bottom-4 border-b border-l',
          'right-4 bottom-4 border-b border-r',
        ].map((c) => (
          <span key={c} className={`absolute h-6 w-6 border-acid/50 ${c}`} />
        ))}
      </div>

      {/* Bottom HUD strip */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-3 sm:pb-5">
        <div className="flex w-full max-w-shell items-center gap-4 font-mono text-[11px] uppercase tracking-[0.14em] text-mute">
          <span className="shrink-0 text-acid">LV.{zone.lv}</span>
          <span className="hidden shrink-0 text-faint sm:inline">{zone.name}</span>
          <span className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-line/70">
            <motion.span
              style={{ scaleX: xp }}
              className="absolute inset-0 origin-left rounded-full bg-acid"
            />
          </span>
          <span className="shrink-0 tabular-nums text-faint">{pct}% XP</span>
        </div>
      </div>
    </>
  );
}
