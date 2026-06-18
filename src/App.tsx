import { Cursor } from './components/Cursor';
import { HUD } from './components/HUD';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Marquee } from './components/primitives';
import { Hero } from './sections/Hero';
import { QuestMap } from './sections/QuestMap';
import { ClassSelect } from './sections/ClassSelect';
import { Boss } from './sections/Boss';
import { CTA } from './sections/CTA';
import { marqueeWords } from './data/content';

export function App() {
  return (
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
  );
}
