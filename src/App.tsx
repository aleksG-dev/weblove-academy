import { lazy, Suspense } from 'react';
import { Cursor } from './components/Cursor';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Marquee, ScrollProgress } from './components/primitives';
import { Hero } from './sections/Hero';
import { Classrooms } from './sections/Classrooms';
import { Paths } from './sections/Paths';
import { Showcase } from './sections/Showcase';
import { CTA } from './sections/CTA';
import { useLenis } from './lib/hooks';
import { marqueeWords } from './data/content';

// Below-the-fold; carries GSAP — split it out of the initial bundle.
const Pillars = lazy(() =>
  import('./sections/Pillars').then((m) => ({ default: m.Pillars }))
);

export function App() {
  useLenis();

  return (
    <div className="grain relative">
      <Cursor />
      <ScrollProgress />
      <Nav />

      <main>
        <Hero />
        <Marquee items={marqueeWords} />
        <Suspense fallback={<div className="min-h-[40vh]" />}>
          <Pillars />
        </Suspense>
        <Classrooms />
        <Paths />
        <Showcase />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
