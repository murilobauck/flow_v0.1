import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

// Componente de Cabeçalho da aplicação
export const Header = () => {
  // Estado para controlar se a página sofreu scroll (usado para aplicar estilos dinâmicos)
  const [scrolled, setScrolled] = useState(false);

  // Efeito que adiciona o listener de scroll na montagem do componente
  useEffect(() => {
    const handleScroll = () => {
      // Define como 'scrolled' se a rolagem for maior que 20 pixels
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    // Cleanup do evento ao desmontar o componente
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Aplica a classe 'scrolled' condicionalmente
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      {/* Logotipo que contém um símbolo (logotipoImg) e texto (wordmarkImg) */}
      <Link to="/" className={styles.logo}>
        <img src="/logotipo.svg" alt="Flow" className={styles.logotipoImg} />
        <img src="/wordmark.svg" alt="Flow" className={styles.wordmarkImg} />
      </Link>
      {/* Botão de Call To Action que rola suavemente para a seção de waitlist */}
      <Link to="/#waitlist" className={styles.cta} onClick={(e) => {
        if (window.location.pathname === '/') {
          e.preventDefault();
          document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
        }
      }}>
        Acesso antecipado
      </Link>
    </header>
  );
};
