import { GrainOverlay, Header, Footer } from '@/components';
import { Hero } from './components/Hero/Hero';
import { Proof } from './components/Proof/Proof';
import { CTA } from './components/CTA/CTA';
import { GameCTA } from './components/GameCTA/GameCTA';
import { FAQ } from './components/FAQ/FAQ';

// Componente principal da Landing Page
// Orquestra a exibição de todas as seções (Hero, Social Proof, CTAs, FAQ)
export const Home = () => {
  return (
    <>
      {/* Camada de textura de fundo */}
      <GrainOverlay />
      
      {/* Navegação superior */}
      <Header />
      
      {/* Conteúdo principal empilhado na ordem de leitura (funil) */}
      <main>
        <Hero />
        <Proof />
        <CTA />
        <GameCTA />
        <FAQ />
      </main>
      
      {/* Rodapé da página */}
      <Footer />
    </>
  );
};
