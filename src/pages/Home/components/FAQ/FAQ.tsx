import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FAQ.module.css';

// Lista estática de perguntas frequentes para popular o componente de acordeão (Accordion)
const faqs = [
  {
    question: "Em quanto tempo vejo resultados?",
    answer: "A evolução é imediata. Após a primeira simulação, você já recebe um diagnóstico apontando onde falhou e como melhorar. Com 3 a 5 treinos focados na sua vaga, sua confiança e familiaridade sob pressão aumentam drasticamente."
  },
  {
    question: "Qualquer pessoa pode usar?",
    answer: "Sim, mas nosso foco principal são alunos e profissionais em início de carreira. O Flow foi desenhado especialmente para quem está buscando o primeiro estágio ou vaga júnior. Ele te ajuda a compensar a falta de experiência profissional mostrando preparo, atitude e capacidade de organização."
  },
  {
    question: "Qual a diferença de vocês para o ChatGPT?",
    answer: "O ChatGPT é uma ferramenta genérica. O Flow é um ambiente imersivo de treinamento. Ele simula a pressão real de uma entrevista, adapta o comportamento do recrutador e avalia sua postura — ensinando você a se virar, e não a decorar roteiros."
  },
  {
    question: "Como a IA avalia o meu desempenho?",
    answer: "A nossa inteligência analisa fatores como a clareza da sua fala, objetividade, linguagem adequada para a área e tempo de resposta. No final de cada simulação, você recebe um placar destacando seus pontos fortes e as áreas onde sua argumentação pode melhorar."
  },
  {
    question: "Preciso instalar algum aplicativo?",
    answer: "Não. O Flow funciona 100% direto no seu navegador, tanto no celular quanto no computador. Basta fazer login, colar a descrição da sua vaga e começar a simular a entrevista na hora."
  },
  {
    question: "Quando o programa demo estará disponível?",
    answer: "Ainda estamos em desenvolvimento intensivo. Entrando na nossa lista de espera hoje, você garante acesso prioritário, gratuito e em primeira mão assim que abrirmos a plataforma."
  }
];

// Componente FAQ (Frequently Asked Questions) usando padrão Accordion
export const FAQ = () => {
  // Guarda o índice da pergunta atualmente aberta (apenas uma por vez)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Alterna o estado da pergunta: se clicar na aberta, fecha; se clicar em outra, abre
  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <p className={styles.subheader}>Perguntas frequentes</p>
          <h2 className={styles.title}>Tire suas dúvidas</h2>
        </motion.div>

        <div className={styles.faqList}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className={styles.faqItem}
              >
                <button
                  onClick={() => toggle(i)}
                  className={`${styles.faqTrigger} ${isOpen ? styles.open : ''}`}
                >
                  <span className={styles.question}>{faq.question}</span>
                  <div className={styles.iconWrapper}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}
                    >
                      <line x1="7" y1="1" x2="7" y2="13" />
                      <line x1="1" y1="7" x2="13" y2="7" />
                    </svg>
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={styles.faqContentWrapper}
                    >
                      <p className={styles.faqAnswer}>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
