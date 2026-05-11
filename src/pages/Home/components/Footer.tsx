import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerBlob} />
      
      <div className={styles.container}>
        <div className={styles.topContent}>
          <div className={styles.brandWrapper}>
            <h2 className={styles.tagline}>
              Sua vaga começa na primeira{' '}
              <span className={styles.accent}>entrevista</span>{' '}
              que você dominar.
            </h2>
          </div>
          
          <div className={styles.ctaWrapper}>
            <a href="#waitlist" className={styles.btnGhost}>
              Garantir acesso antecipado
            </a>
          </div>
        </div>
        
        <div className={styles.divider} />
        
        <div className={styles.bottomContent}>
          <div className={styles.leftInfo}>
            <span className={styles.copyright}>© 2026 Flow</span>
            <span className={styles.brandNote}>Feito por quem já suou frio antes de uma entrevista.</span>
          </div>
          
          <div className={styles.links}>
            <a href="#">Privacidade</a>
            <a href="#">Termos</a>
            <a href="#">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
