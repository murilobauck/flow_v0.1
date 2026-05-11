import { motion } from 'framer-motion';
import styles from './Proof.module.css';



export const Proof = () => {
  return (
    <section id="proof" className={styles.proofSection}>
      <div className={styles.header}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.title}
        >
          Treinamento de entrevista sob medida. Para qualquer estágio.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={styles.subtitle}
        >
          Não importa se você está buscando estágio em TI, saúde, administração ou qualquer área técnica. O Flow adapta o recrutador e as perguntas para a vaga que você quer.
        </motion.p>
      </div>

      <div className={styles.grid}>
        <motion.div 
          className={`${styles.card} ${styles.featured}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className={styles.ordinal}>01</span>
          <h3>Você não treina para "uma entrevista". Treina para aquela vaga.</h3>
          <p>Cole a descrição da vaga, o setor e o perfil da empresa. O Flow ajusta o tom do recrutador, o nível de pressão e as perguntas específicas. É a diferença entre ensaio geral e ensaio da peça certa.</p>
        </motion.div>

        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <span className={styles.ordinal}>02</span>
          <h3>Sabe aquela resposta que parecia boa? Ela tem três problemas.</h3>
          <p>O diagnóstico do Flow aponta clareza, postura, tempo de resposta e uso de linguagem. Você descobre o que está sabotando você antes de descobrir na vaga real.</p>
        </motion.div>

        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <span className={styles.ordinal}>03</span>
          <h3>Sem experiência prévia, o que você vende é potencial.</h3>
          <p>O Flow foi desenhado para quem está começando do zero. Ele te ajuda a estruturar respostas mesmo sem histórico profissional — e a apresentar o que você tem de verdade.</p>
        </motion.div>
      </div>



      <motion.div 
        className={styles.testimonial}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <blockquote>
          "Finalmente algo pensado pra quem tá começando do zero, não pra quem já tem 3 anos de experiência."
        </blockquote>
        <cite>— Beta tester · Técnico em Administração</cite>
      </motion.div>
    </section>
  );
};
