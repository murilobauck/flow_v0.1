import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const vagas = [
  "Estágio em TI — Suporte Técnico, empresa de médio porte",
  "Estágio em Enfermagem — UBS, foco em acolhimento",
  "Estágio Administrativo — Rotinas gerais, escritório de RH",
  "Estágio em Segurança do Trabalho — Inspeção, construtora",
  "Estágio em Eletrotécnica — Manutenção de painéis, fábrica"
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

const CHARACTERS = "ABZCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*!^~";

const DecoderText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    let timeout: ReturnType<typeof setTimeout>;

    const animate = () => {
      let iteration = 0;
      clearInterval(interval);

      interval = setInterval(() => {
        setDisplayText(() =>
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return letter;
              }
              if (letter === " ") {
                return " ";
              }
              return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
          timeout = setTimeout(animate, 5000);
        }

        iteration += 1 / 3;
      }, 30);
    };

    animate();

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text]);

  return <>{displayText}</>;
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
        <motion.h1 variants={itemVariants} className={styles.title}>
          A vaga exige preparo.<br />
          Nós te damos{' '}
          <span className={styles.heroAccent}>
            <DecoderText text="clareza nas ideias." />
          </span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className={styles.subtitle}>
          Simule o recrutador com Inteligência Artificial. Ganhe confiança sob pressão e aprenda a se virar na hora da entrevista.
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
        drag
        dragSnapToOrigin={true}
        dragElastic={0.6}
        whileDrag={{ scale: 1.02, cursor: "grabbing", boxShadow: "0 24px 60px rgba(0,0,0,0.6)" }}
        style={{ cursor: "grab" }}
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
        </div>
      </motion.div>
    </section>
  );
};
