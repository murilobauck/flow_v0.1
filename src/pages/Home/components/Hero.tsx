import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const vagas = [
  "Estágio em TI — Suporte Técnico, empresa de médio porte",
  "Estágio em Enfermagem — UBS, foco em acolhimento",
  "Estágio em Administração — Empresa Júnior, atendimento ao cliente"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export const Hero = () => {
  const [vagaIndex, setVagaIndex] = useState(0);
  const [typewriterText, setTypewriterText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentVaga = vagas[vagaIndex];
      
      if (!isDeleting) {
        setTypewriterText(currentVaga.substring(0, typewriterText.length + 1));
        if (typewriterText === currentVaga) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTypewriterText(currentVaga.substring(0, typewriterText.length - 1));
        if (typewriterText === "") {
          setIsDeleting(false);
          setVagaIndex((prev) => (prev + 1) % vagas.length);
        }
      }
    }, isDeleting ? 30 : 60);

    return () => clearTimeout(timeout);
  }, [typewriterText, isDeleting, vagaIndex]);

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBlob} />
      
      <motion.div 
        className={styles.heroContent}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants} className={styles.eyebrow}>
          Flow · AI Interview Coach · <span className={styles.badgeSoon}>Em breve</span>
        </motion.div>
        
        <motion.h1 variants={itemVariants} className={styles.title}>
          Você sabe o que fazer.<br />
          Mas nunca treinou para a{' '}
          <span className={styles.heroAccent}>entrevista</span>.
        </motion.h1>
        
        <motion.p variants={itemVariants} className={styles.subtitle}>
          O Flow simula entrevistas de estágio com IA — para qualquer curso técnico. Você coloca os detalhes da vaga, e o recrutador se adapta. Feedback real. Pressão real. Antes da hora real.
        </motion.p>
        
        <motion.div variants={itemVariants} className={styles.ctaGroup}>
          <a href="#waitlist" className={styles.btnPrimary}>
            Garantir meu acesso antecipado
          </a>
          <a href="#proof" className={styles.btnSecondary}>
            Entender como vai funcionar ↓
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        className={styles.mockupGhost}
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className={styles.mockupHeader}>
          <div className={styles.dots}>
            <span /> <span /> <span />
          </div>
          <div className={styles.mockupTitle}>Flow · Recrutador IA</div>
        </div>
        
        <div className={styles.mockupVaga}>
          <span className={styles.vagaLabel}>Vaga ›</span>
          <span className={styles.vagaText}>{typewriterText}</span>
          <span className={styles.vagaCursor}>|</span>
        </div>
        
        <div className={styles.mockupBody}>
          <div className={styles.recruiterMessage}>
            "Me conta sobre um momento em que você precisou resolver um problema sem ajuda. O que você fez?"
          </div>
          <div className={styles.userCursor}>▋</div>
        </div>
      </motion.div>
    </section>
  );
};
