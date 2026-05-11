import { motion } from 'framer-motion';
import styles from './Proof.module.css';

const timelineSteps = [
  {
    id: 1,
    title: "Insira os detalhes da vaga",
    description: "Você cola a descrição da vaga, o setor e o perfil da empresa. A IA entende as competências exigidas e o que o recrutador vai buscar."
  },
  {
    id: 2,
    title: "A IA assume o papel do recrutador",
    description: "O sistema ajusta o tom de voz, nível de pressão e elabora perguntas técnicas e comportamentais específicas para aquele cargo. Não é genérico."
  },
  {
    id: 3,
    title: "Simule a entrevista em tempo real",
    description: "Treine suas respostas sob pressão como se estivesse valendo. Desenvolva seu raciocínio rápido e sua capacidade de argumentação em ambiente seguro."
  },
  {
    id: 4,
    title: "Receba um diagnóstico completo",
    description: "Ao finalizar, o Flow avalia sua clareza, postura, tempo de resposta e coerência. Você descobre o que te sabota antes da hora real."
  }
];

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
          Treinamento de entrevista. Em 4 passos.
        </motion.h2>
      </div>

      <div className={styles.timeline}>
        {timelineSteps.map((step, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div 
              key={step.id}
              className={`${styles.timelineStep} ${isLeft ? styles.left : styles.right}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className={styles.stepContent}>
                {isLeft ? (
                  <>
                    <h3 className={styles.stepTitle}>
                      {step.title} <span className={styles.stepNumber}>{step.id}</span>
                    </h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </>
                ) : (
                  <>
                    <span className={styles.stepNumber}>{step.id}</span>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </>
                )}
              </div>
            </motion.div>
          );
        })}
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
        <cite>— Murilo Bauck · Técnico em Desenvolvimento de Sistemas</cite>
      </motion.div>
    </section>
  );
};
