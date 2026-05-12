import { GrainOverlay, Header, Footer } from '@/components';
import { Hero } from './components/Hero/Hero';
import { Proof } from './components/Proof/Proof';
import { CTA } from './components/CTA/CTA';
import { GameCTA } from './components/GameCTA/GameCTA';
import { FAQ } from './components/FAQ/FAQ';

export const Home = () => {
  return (
    <>
      <GrainOverlay />
      
      <Header />
      
      <main>
        <Hero />
        <Proof />
        <CTA />
        <GameCTA />
        <FAQ />
      </main>
      
      <Footer />
    </>
  );
};
