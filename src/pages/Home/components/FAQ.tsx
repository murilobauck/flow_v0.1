import React, { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  {
    question: "Quando o Programa Demo vai estar disponível?",
    answer: "Ainda estamos em desenvolvimento. A lista de espera garante que você será avisado assim que o demo abrir — antes de qualquer divulgação pública. Não temos uma data exata, mas você vai ser o primeiro a saber."
  },
  {
    question: "Funciona para quem faz Técnico em Administração, Enfermagem, Mecânica...?",
    answer: "Sim — e esse é exatamente o ponto. O Flow não foi feito só para a área de tecnologia. Qualquer curso técnico que exige processos seletivos está no escopo: saúde, gestão, indústria, logística, design. Se tem entrevista, o Flow treina."
  },
  {
    question: "Posso treinar para uma vaga específica que já encontrei?",
    answer: "Sim. Essa é uma das principais funcionalidades. Você vai inserir os detalhes da vaga — cargo, empresa, área e descrição — e o recrutador IA vai se adaptar àquele contexto. As perguntas, o tom e o nível de pressão mudam de acordo."
  },
  {
    question: "Nunca trabalhei. O Flow consegue me ajudar mesmo assim?",
    answer: "Sim. A maioria dos usuários do Flow está exatamente nessa situação. A plataforma foi desenhada para quem não tem histórico profissional e precisa aprender a apresentar potencial, não experiência."
  },
  {
    question: "O Programa Demo vai ser pago?",
    answer: "Não. O acesso ao Programa Demo será completamente gratuito. Em troca, pedimos feedback honesto que vai moldar o produto. Você treina sem pagar nada — a gente aprende com você."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle(index);
    } else if (e.key === 'Escape') {
      setOpenIndex(null);
    }
  };

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.title}>Dúvidas que você teria vergonha de mandar no direct.</h2>
      
      <div className={styles.faqWrapper}>
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          
          return (
            <div key={i} className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}>
              <button
                id={`faq-trigger-${i}`}
                aria-expanded={isOpen}
                aria-controls={`faq-content-${i}`}
                className={styles.faqTrigger}
                onClick={() => toggle(i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
              >
                {faq.question}
                <span className={styles.faqIcon} aria-hidden="true">+</span>
              </button>
              
              <div
                id={`faq-content-${i}`}
                role="region"
                aria-labelledby={`faq-trigger-${i}`}
                className={`${styles.faqContent} ${isOpen ? styles.open : ''}`}
              >
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
