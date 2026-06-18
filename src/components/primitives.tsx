import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
} from 'framer-motion';

const SNAP = [0.16, 1, 0.3, 1] as const;

/* ---------------------------------------------------------------- Magnetic */
export function Magnetic({
  children,
  className,
  pull = 0.3,
  max = 14,
  as = 'button',
  href,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  pull?: number;
  max?: number;
  as?: 'button' | 'a';
  href?: string;
  onClick?: () => void;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 18 });
  const sy = useSpring(y, { stiffness: 260, damping: 18 });

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    x.set(Math.max(-max, Math.min(max, dx * pull)));
    y.set(Math.max(-max, Math.min(max, dy * pull)));
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Comp: any = as === 'a' ? motion.a : motion.button;
  return (
    <Comp
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.96 }}
      style={{ x: sx, y: sy }}
      data-cursor="grow"
      className={className}
    >
      {children}
    </Comp>
  );
}

/* ------------------------------------------------------------- Split text */
export function SplitText({
  text,
  as = 'span',
  className,
  delay = 0,
}: {
  text: string;
  as?: 'h1' | 'h2' | 'span';
  className?: string;
  delay?: number;
}) {
  const words = text.split(' ');
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05, delayChildren: delay } },
  };
  const word = {
    hidden: { opacity: 0, y: '0.5em' },
    visible: {
      opacity: 1,
      y: '0em',
      transition: { duration: 0.7, ease: SNAP },
    },
  };
  const Tag = (
    as === 'h1' ? motion.h1 : as === 'h2' ? motion.h2 : motion.span
  ) as typeof motion.span;
  return (
    <Tag
      variants={container}
      initial="hidden"
      animate="visible"
      aria-label={text}
      className={className}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block whitespace-nowrap">
          <motion.span variants={word} aria-hidden className="inline-block">
            {w}
          </motion.span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  );
}

/* --------------------------------------------------------------- Scramble */
export function Scramble({
  text,
  className,
  as = 'span',
  delay = 0,
}: {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'span' | 'div';
  delay?: number;
}) {
  const [out, setOut] = useState(text.replace(/[^ ]/g, ' '));

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setOut(text);
      return;
    }
    const glyphs = '!<>-_\\/[]{}=+*^?#ABCDEFGHJKLMNPQRSTUVWXYZ0123456789';
    const chars = Array.from(text);
    const settle = chars.map((_, i) => delay / 16 + i * 1.7 + Math.random() * 9);
    let tick = 0;
    let raf = 0;

    const run = () => {
      let done = true;
      const s = chars
        .map((ch, i) => {
          if (ch === ' ') return ' ';
          if (tick >= settle[i]) return ch;
          done = false;
          return glyphs[Math.floor(Math.random() * glyphs.length)];
        })
        .join('');
      setOut(s);
      tick += 1;
      if (!done) raf = requestAnimationFrame(run);
    };
    raf = requestAnimationFrame(run);
    return () => cancelAnimationFrame(raf);
  }, [text, delay]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag = as as any;
  return (
    <Tag className={className} aria-label={text}>
      <span aria-hidden>{out}</span>
    </Tag>
  );
}

/* ----------------------------------------------------------------- Reveal */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: SNAP, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------------------------------------------------- RollingNumber */
export function RollingNumber({
  to,
  suffix = '',
  duration = 1.6,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        if (reduce) {
          setVal(to);
        } else {
          const controls = animate(0, to, {
            duration,
            ease: SNAP,
            onUpdate: (v) => setVal(Math.round(v)),
          });
          return () => controls.stop();
        }
      }
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

/* -------------------------------------------------------- ScrollProgress */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-0.5 origin-left bg-accent"
    />
  );
}

/* ---------------------------------------------------------------- Marquee */
export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="group relative flex overflow-hidden border-y border-line py-5">
      <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10 group-hover:[animation-play-state:paused]">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-mono text-sm uppercase tracking-[0.15em] text-mute">
              {w}
            </span>
            <span className="h-1 w-1 rounded-full bg-accent/60" />
          </span>
        ))}
      </div>
    </div>
  );
}

export { AnimatePresence };
