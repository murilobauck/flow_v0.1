import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <span className={styles.icon}>F</span>
        <span className={styles.wordmark}>Flow</span>
      </div>
      <Link to="#waitlist" className={styles.cta} onClick={(e) => {
        e.preventDefault();
        document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
      }}>
        Acesso antecipado
      </Link>
    </header>
  );
};
