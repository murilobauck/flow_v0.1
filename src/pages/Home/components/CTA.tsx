import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './CTA.module.css';

export const CTA = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setSubmitted(true);
      // Aqui integraria com backend
    }
  };

  return (
    <section id="waitlist" className={styles.ctaSection}>
      <div className={styles.ctaSwirlBg} />
      
      <motion.div 
        className={styles.floatingCard}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <button 
          className={styles.exclusivityBadge} 
          onClick={() => document.getElementById('nameInput')?.focus()}
        >
          Seja um dos primeiros a testar
        </button>
        
        <div className={styles.eyebrow}>Programa Demo · Lista de espera aberta</div>
        <h2 className={styles.title}>Entre na fila. Você vai querer ter feito isso.</h2>
        <p className={styles.body}>
          O Flow está em desenvolvimento. Quando o Programa Demo abrir, os primeiros inscritos serão os primeiros a entrar — e terão voz ativa em como o produto evolui.
        </p>
        
        <div className={styles.benefitsContainer}>
          <div className={styles.label}>O que os primeiros ganham:</div>
          <ul className={styles.benefitList}>
            <li className={styles.benefitItem}>
              <span className={styles.benefitBullet}>✦</span> Acesso VIP antes da plataforma ir a público
            </li>
            <li className={styles.benefitItem}>
              <span className={styles.benefitBullet}>✦</span> Testes ilimitados e 100% gratuitos na fase Demo
            </li>
            <li className={styles.benefitItem}>
              <span className={styles.benefitBullet}>✦</span> Linha direta com nossa equipe para feedbacks
            </li>
            <li className={styles.benefitItem}>
              <span className={styles.benefitBullet}>✦</span> Poder de decisão sobre quais áreas e vagas vamos criar
            </li>
          </ul>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.successState}
          >
            <div className={styles.successIcon}>✓</div>
            <p className={styles.successTitle}>Você está dentro.</p>
            <p className={styles.successDesc}>Vamos te avisar em breve.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <p className={styles.fomoLabel}>Vagas <strong>limitadas.</strong> Garanta já a sua.</p>
            <input 
              id="nameInput"
              className={styles.emailInput} 
              type="text" 
              placeholder="Seu nome" 
              required 
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <input 
              id="emailInput"
              className={styles.emailInput} 
              type="email" 
              placeholder="seu@email.com" 
              required 
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button className={styles.btnWaitlist} type="submit">
              Entrar para a lista de espera
            </button>
          </form>
        )}
        
        <div className={styles.securityLine}>Sem spam. Só o aviso quando o demo abrir.</div>
      </motion.div>
    </section>
  );
};
