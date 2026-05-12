import { GrainOverlay, Header, Footer } from '@/components';
import styles from './Legal.module.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <GrainOverlay />
      <Header />
      <main className={styles.legalSection}>
        <Link to="/" className={styles.backButton} title="Voltar para Home">
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
        <h1 className={styles.title}>Termos de Uso</h1>
        <p className={styles.lastUpdated}>Última atualização: Maio de 2026</p>
        
        <div className={styles.content}>
          <p>
            Bem-vindo ao Flow. Ao acessar ou usar nosso simulador de entrevistas e serviços associados, você concorda em cumprir e ficar vinculado a estes Termos de Uso.
          </p>

          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao acessar o site do Flow, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site.
          </p>

          <h2>2. Uso da Plataforma</h2>
          <p>
            O Flow concede a você uma licença pessoal, não exclusiva, intransferível e revogável para usar nossa plataforma estritamente para fins de treinamento e preparação para entrevistas.
          </p>
          <ul>
            <li>Você concorda em não usar a plataforma para qualquer finalidade ilegal ou não autorizada.</li>
            <li>Você não deve tentar burlar, desativar ou interferir em recursos relacionados à segurança da plataforma.</li>
            <li>O uso de bots, scrapers ou qualquer meio automatizado para extrair dados é estritamente proibido.</li>
          </ul>

          <h2>3. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo presente na plataforma, incluindo textos, gráficos, logotipos, ícones, imagens e software, é propriedade exclusiva do Flow ou de seus licenciadores, e é protegido pelas leis de direitos autorais e marcas comerciais.
          </p>

          <h2>4. Limitação de Responsabilidade</h2>
          <p>
            O Flow não garante o sucesso em entrevistas de emprego reais. A plataforma é uma ferramenta de simulação e treinamento. Em nenhuma circunstância o Flow será responsável por quaisquer danos diretos, indiretos, incidentais ou consequentes resultantes do uso ou da incapacidade de usar nossos serviços.
          </p>

          <h2>5. Modificações dos Termos</h2>
          <p>
            O Flow pode revisar estes termos de serviço a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
          </p>

          <h2>6. Contato</h2>
          <p>
            Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco através do email: murilobauck2@gmail.com.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};
