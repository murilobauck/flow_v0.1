import { GrainOverlay, Header, Footer } from '@/components';
import styles from './Legal.module.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Componente estático para a página de Política de Privacidade
export const Privacy = () => {
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
        <h1 className={styles.title}>Política de Privacidade</h1>
        <p className={styles.lastUpdated}>Última atualização: Maio de 2026</p>
        
        <div className={styles.content}>
          <p>
            Sua privacidade é importante para nós. É política do Flow respeitar a sua privacidade em relação a qualquer informação que possamos coletar no site Flow e em outros sites que possuímos e operamos.
          </p>

          <h2>1. Coleta de Informações</h2>
          <p>
            Solicitamos informações pessoais, como seu nome e email, apenas quando realmente precisamos delas para fornecer nosso serviço (por exemplo, ao se inscrever na nossa lista de espera). Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.
          </p>
          <p>
            Durante as simulações, coletamos dados de interação para melhorar nosso modelo de Inteligência Artificial e fornecer feedbacks mais precisos. Suas transcrições são anonimizadas antes de serem usadas para qualquer fim de melhoria do sistema.
          </p>

          <h2>2. Uso das Informações</h2>
          <p>
            As informações coletadas são utilizadas exclusivamente para:
          </p>
          <ul>
            <li>Fornecer e operar nossos serviços de simulação.</li>
            <li>Melhorar, personalizar e expandir nossa plataforma.</li>
            <li>Entender e analisar como você usa nosso site.</li>
            <li>Comunicar-se com você sobre novidades, atualizações e Programa Demo.</li>
          </ul>

          <h2>3. Proteção e Retenção</h2>
          <p>
            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
          </p>

          <h2>4. Compartilhamento de Dados</h2>
          <p>
            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei. Nosso site pode ter links para sites externos que não são operados por nós; não temos controle sobre as políticas de privacidade desses sites.
          </p>

          <h2>5. Seus Direitos</h2>
          <p>
            Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados. Você também tem o direito de solicitar a exclusão de todos os seus dados dos nossos servidores a qualquer momento.
          </p>

          <h2>6. Contato</h2>
          <p>
            Para exercer seus direitos de privacidade ou tirar dúvidas sobre como lidamos com seus dados, entre em contato em: murilobauck2@gmail.com.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};
