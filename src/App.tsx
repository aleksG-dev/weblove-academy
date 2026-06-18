import { MotionConfig } from 'framer-motion';
import { Cursor } from './components/Cursor';
import { HUD } from './components/HUD';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Marquee } from './components/primitives';
import { Hero } from './sections/Hero';
import { QuestMap } from './sections/QuestMap';
import { ClassSelect } from './sections/ClassSelect';
import { Boss } from './sections/Boss';
import { useEffect } from 'react';
import { CTA } from './sections/CTA';
import { marqueeWords } from './data/content';

export function App() {
  // CSR: re-apply a deep-link hash once sections have rendered.
  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 250);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="crt relative">
        <Cursor />
        <HUD />
        <Nav />

        <main>
          <Hero />
          <Marquee items={marqueeWords} />
          <QuestMap />
          <ClassSelect />
          <Boss />
          <CTA />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}
