import { GrainOverlay } from './components/GrainOverlay';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Proof } from './components/Proof';
import { CTA } from './components/CTA';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export const Home = () => {
  return (
    <>
      <GrainOverlay />
      
      <Header />
      
      <main>
        <Hero />
        <Proof />
        <CTA />
        <FAQ />
      </main>
      
      <Footer />
    </>
  );
};
