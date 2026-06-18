import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Reticle cursor: a targeting crosshair that snaps tighter and turns acid-green
 * when locked onto an interactive element ([data-cursor="grow"]).
 * Desktop fine-pointer only; disabled for reduced motion.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [locked, setLocked] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 700, damping: 40, mass: 0.3 });
  const ry = useSpring(y, { stiffness: 700, damping: 40, mass: 0.3 });

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return;

    setEnabled(true);
    document.body.classList.add('reticle-active');

    function move(e: PointerEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as Element | null;
      setLocked(!!t?.closest('[data-cursor="grow"]'));
    }
    window.addEventListener('pointermove', move);
    return () => {
      window.removeEventListener('pointermove', move);
      document.body.classList.remove('reticle-active');
    };
  }, [x, y]);

  if (!enabled) return null;

  const color = locked ? 'hsl(78 92% 56%)' : 'hsl(56 18% 95%)';
  const size = locked ? 40 : 26;

  return (
    <motion.div
      aria-hidden
      style={{ translateX: rx, translateY: ry }}
      className="pointer-events-none fixed left-0 top-0 z-[100]"
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        animate={{ rotate: locked ? 45 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{ x: -size / 2, y: -size / 2 }}
      >
        <circle cx="20" cy="20" r="13" fill="none" stroke={color} strokeWidth="1.4" opacity="0.8" />
        <line x1="20" y1="1" x2="20" y2="9" stroke={color} strokeWidth="1.4" />
        <line x1="20" y1="31" x2="20" y2="39" stroke={color} strokeWidth="1.4" />
        <line x1="1" y1="20" x2="9" y2="20" stroke={color} strokeWidth="1.4" />
        <line x1="31" y1="20" x2="39" y2="20" stroke={color} strokeWidth="1.4" />
        <circle cx="20" cy="20" r="1.6" fill={color} />
      </motion.svg>
    </motion.div>
  );
}
