import { useEffect, useState } from 'react';
import { Magnetic } from './primitives';

const links = [
  { label: 'Map', href: '#map' },
  { label: 'Classes', href: '#classes' },
  { label: 'Boss', href: '#boss' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-cinematic ${
        scrolled ? 'border-b border-line bg-base/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-shell items-center justify-between px-6 py-4 sm:px-12">
        <a href="#top" data-cursor="grow" className="focus-ring font-mono text-sm font-medium tracking-[0.1em]">
          <span className="text-ink">ARCADE</span>
          <span className="text-acid">MY</span>
        </a>

        <div className="hidden items-center gap-7 font-mono text-xs uppercase tracking-[0.16em] sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-cursor="grow"
              className="focus-ring inline-flex min-h-[44px] items-center text-mute transition-colors duration-300 hover:text-acid"
            >
              {l.label}
            </a>
          ))}
        </div>

        <Magnetic
          as="a"
          href="#start"
          className="focus-ring inline-flex min-h-[44px] items-center rounded-sm border border-acid bg-acid px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-base transition-colors duration-300 hover:bg-transparent hover:text-acid"
        >
          Press Start
        </Magnetic>
      </nav>
    </header>
  );
}
