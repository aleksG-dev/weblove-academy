import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Signature custom cursor: a 6px dot that tracks instantly and a 28px ring
 * that lags behind on a spring. The ring grows over anything marked
 * [data-cursor="grow"]. Desktop fine-pointer only; respects reduced motion.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [grown, setGrown] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 220, damping: 24, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 220, damping: 24, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return;

    setEnabled(true);
    document.body.classList.add('custom-cursor-active');

    function move(e: PointerEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as Element | null;
      setGrown(!!target?.closest('[data-cursor="grow"]'));
    }
    window.addEventListener('pointermove', move);
    return () => {
      window.removeEventListener('pointermove', move);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ translateX: x, translateY: y }}
        className="pointer-events-none fixed left-0 top-0 z-[100] -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-accent"
      />
      <motion.div
        aria-hidden
        style={{ translateX: ringX, translateY: ringY }}
        animate={{ scale: grown ? 2.4 : 1, opacity: grown ? 0.7 : 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        className="pointer-events-none fixed left-0 top-0 z-[100] -ml-3.5 -mt-3.5 h-7 w-7 rounded-full border border-accent/70"
      />
    </>
  );
}
