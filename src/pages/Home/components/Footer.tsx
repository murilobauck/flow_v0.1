import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerBlob} />
      
      <div className={styles.container}>
        <div className={styles.topContent}>
          <div className={styles.taglineWrapper}>
            <h2 className={styles.tagline}>
              Sua primeira vaga começa com a primeira{' '}
              <span className={styles.accent}>entrevista</span>{' '}
              que você não vai travar.
            </h2>
            <p className={styles.subline}>O Flow está chegando.</p>
          </div>
          
          <div className={styles.ctaWrapper}>
            <a href="#waitlist" className={styles.btnGhost}>
              Entrar para a lista de espera
            </a>
          </div>
        </div>
        
        <div className={styles.divider} />
        
        <div className={styles.bottomContent}>
          <div className={styles.leftInfo}>
            <span className={styles.copyright}>© 2025 Flow</span>
            <span className={styles.brandNote}>Feito por pessoas que também travaram em entrevistas importantes.</span>
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
