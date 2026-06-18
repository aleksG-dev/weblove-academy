import { useEffect, useState } from 'react';
import { Magnetic } from './primitives';

const links = [
  { label: 'Pillars', href: '#pillars' },
  { label: 'Classrooms', href: '#classrooms' },
  { label: 'Paths', href: '#paths' },
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
        scrolled
          ? 'border-b border-line bg-base/70 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-shell items-center justify-between px-6 py-4 sm:px-10">
        <a
          href="#top"
          data-cursor="grow"
          className="focus-ring font-display text-lg font-bold tracking-tight"
        >
          weblove<span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-cursor="grow"
              className="focus-ring text-sm text-mute transition-colors duration-300 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <Magnetic
          as="a"
          href="#join"
          className="focus-ring rounded-full bg-ink px-5 py-2 font-display text-sm font-semibold text-base transition-colors duration-300 hover:bg-accent hover:text-base"
        >
          Enter the academy
        </Magnetic>
      </nav>
    </header>
  );
}
