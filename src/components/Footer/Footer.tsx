import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

// Componente de Rodapé (Footer) global da aplicação
export const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      {/* Elemento visual de fundo (borrão/blob) para estética do footer */}
      <div className={styles.footerBlob} />
      
      <div className={styles.container}>
        {/* Seção superior contendo o slogan e o botão de ação principal */}
        <div className={styles.topContent}>
          <div className={styles.brandWrapper}>
            <h2 className={styles.tagline}>
              Sua vaga começa na primeira{' '}
              <span className={styles.accent}>entrevista</span>{' '}
              que você dominar.
            </h2>
          </div>
          
          <div className={styles.ctaWrapper}>
            {/* Link para acesso antecipado (âncora na Home) */}
            <a href="/#waitlist" className={styles.btnGhost}>
              Garantir acesso antecipado
            </a>
          </div>
        </div>
        
        {/* Linha divisória entre as seções */}
        <div className={styles.divider} />
        
        {/* Seção inferior contendo copyright, nota da marca e links secundários */}
        <div className={styles.bottomContent}>
          <div className={styles.leftInfo}>
            <span className={styles.copyright}>© 2026 Flow</span>
            <span className={styles.brandNote}>Feito por quem já suou frio antes de uma entrevista.</span>
          </div>
          
          {/* Navegação de links de páginas legais e contato */}
          <div className={styles.links}>
            <Link to="/privacidade">Privacidade</Link>
            <Link to="/termos">Termos</Link>
            <a href="mailto:contato@flow.com">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
