import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './CTA.module.css';
import { supabase } from '@/lib/supabase';

// Componente Call to Action (CTA) para captura de leads (Lista de Espera)
export const CTA = () => {
  // Controle do formulário
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('');
  const [otherCourse, setOtherCourse] = useState('');
  const [grade, setGrade] = useState('');
  
  // Consentimentos (obrigatório e opcional)
  const [consentPrivacyTerms, setConsentPrivacyTerms] = useState(true);
  const [consentMarketing, setConsentMarketing] = useState(false);
  
  // Estados de envio e controle de UI
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Máscara para telefone brasileiro: (XX) XXXXX-XXXX
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é número
    if (value.length > 11) value = value.slice(0, 11); // Limita a 11 números
    
    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    setPhone(value);
  };

  // Submissão do formulário de Waitlist para o Supabase
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    if (!consentPrivacyTerms) {
      setErrorMsg('Você deve concordar com os Termos de Uso e Política de Privacidade.');
      return;
    }

    setSubmitting(true);
    setErrorMsg(null);

    const finalCourse = course === 'Outro' ? otherCourse : course;

    try {
      // Realiza a inserção/atualização de forma segura usando a RPC register_lead
      const { error } = await supabase.rpc('register_lead', {
        lead_name: name,
        lead_email: email.trim().toLowerCase(),
        lead_phone: phone.replace(/\D/g, ''), // Salva apenas os números no banco
        lead_course: finalCourse,
        lead_grade: grade,
        lead_consent_privacy_terms: consentPrivacyTerms,
        lead_consent_marketing: consentMarketing,
      });

      if (error) {
        throw error;
      }

      setSubmitted(true);
    } catch (err: unknown) {
      console.error('Erro ao salvar lead no Supabase:', err);
      const message = err instanceof Error ? err.message : 'Erro ao registrar sua inscrição. Verifique os dados e tente novamente.';
      setErrorMsg(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className={styles.ctaSection}>
      {/* Background estilizado com efeito de espiral/swirl */}
      <div className={styles.ctaSwirlBg} />
      
      {/* Card principal flutuante que anima ao aparecer na tela */}
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
              <span className={styles.benefitBullet}>✦</span> Testes simples e 100% gratuitos na fase Demo
            </li>
            <li className={styles.benefitItem}>
              <span className={styles.benefitBullet}>✦</span> Linha direta com nossa equipe para feedbacks
            </li>
            <li className={styles.benefitItem}>
              <span className={styles.benefitBullet}>✦</span> Poder de decisão sobre os rumos do produto
            </li>
          </ul>
        </div>

        {/* Renderização condicional: Exibe feedback de sucesso se o formulário for enviado */}
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.successState}
          >
            <div className={styles.successIcon}>✓</div>
            <p className={styles.successTitle}>Você está dentro.</p>
            <p className={styles.successDesc}>Sua vaga no Programa Demo foi reservada com sucesso. Agora você já pode participar do Game!</p>
            <button 
              className={styles.btnSecondary}
              onClick={() => {
                // Rola suavemente até o CTA do game ou redireciona
                const gameCta = document.getElementById('game-cta');
                if (gameCta) {
                  gameCta.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/game';
                }
              }}
            >
              Ir Jogar o Desafio Flow
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <p className={styles.fomoLabel}>Vagas <strong>limitadas.</strong> Garanta já a sua.</p>
            
            {errorMsg && (
              <div className={styles.errorMessage}>
                ⚠️ {errorMsg}
              </div>
            )}

            <div className={styles.formGroup}>
              <input 
                id="nameInput"
                className={styles.formInput} 
                type="text" 
                placeholder="Nome completo" 
                required 
                value={name}
                onChange={e => setName(e.target.value)}
                disabled={submitting}
              />
            </div>

            <div className={styles.formGroup}>
              <input 
                id="emailInput"
                className={styles.formInput} 
                type="email" 
                placeholder="seu@email.com" 
                required 
                value={email}
                onChange={e => setEmail(e.target.value)}
                disabled={submitting}
              />
            </div>

            <div className={styles.formGroup}>
              <input 
                className={styles.formInput} 
                type="tel" 
                placeholder="Telefone: (DD) XXXXX-XXXX" 
                required 
                value={phone}
                onChange={handlePhoneChange}
                disabled={submitting}
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroupHalf}>
                <select
                  className={styles.selectInput}
                  required
                  value={course}
                  onChange={e => setCourse(e.target.value)}
                  disabled={submitting}
                >
                  <option value="" disabled hidden>Selecione seu Curso</option>
                  <option value="Engenharia de Computação / Software">Engenharia de Computação / Software</option>
                  <option value="Ciência da Computação / TI">Ciência da Computação / TI</option>
                  <option value="Administração / Negócios">Administração / Negócios</option>
                  <option value="Design / UX / UI">Design / UX / UI</option>
                  <option value="Marketing / Comunicação">Marketing / Comunicação</option>
                  <option value="Outro">Outro...</option>
                </select>
              </div>

              <div className={styles.formGroupHalf}>
                <select
                  className={styles.selectInput}
                  required
                  value={grade}
                  onChange={e => setGrade(e.target.value)}
                  disabled={submitting}
                >
                  <option value="" disabled hidden>Período / Ano atual</option>
                  <option value="1º - 2º Período (1º Ano)">1º - 2º Período (1º Ano)</option>
                  <option value="3º - 4º Período (2º Ano)">3º - 4º Período (2º Ano)</option>
                  <option value="5º - 6º Período (3º Ano)">5º - 6º Período (3º Ano)</option>
                  <option value="7º - 8º Período (4º Ano)">7º - 8º Período (4º Ano)</option>
                  <option value="9º - 10º Período (5º Ano)">9º - 10º Período (5º Ano)</option>
                  <option value="Pós-Graduação / Especialização">Pós-Graduação / Especialização</option>
                  <option value="Concluído / Formado">Concluído / Formado</option>
                </select>
              </div>
            </div>

            {course === 'Outro' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className={styles.formGroup}
              >
                <input 
                  className={styles.formInput} 
                  type="text" 
                  placeholder="Especifique qual o seu curso" 
                  required 
                  value={otherCourse}
                  onChange={e => setOtherCourse(e.target.value)}
                  disabled={submitting}
                />
              </motion.div>
            )}

            <div className={styles.checkboxesContainer}>
              <label className={styles.checkboxLabel}>
                <input 
                  type="checkbox" 
                  className={styles.checkboxInput}
                  checked={consentPrivacyTerms}
                  onChange={e => setConsentPrivacyTerms(e.target.checked)}
                  disabled={submitting}
                  required
                />
                <span className={styles.checkboxText}>
                  Li e aceito os <a href="/termos" target="_blank" rel="noopener noreferrer" className={styles.link}>Termos de Uso</a> e a <a href="/privacidade" target="_blank" rel="noopener noreferrer" className={styles.link}>Política de Privacidade</a>.
                </span>
              </label>

              <label className={styles.checkboxLabel}>
                <input 
                  type="checkbox" 
                  className={styles.checkboxInput}
                  checked={consentMarketing}
                  onChange={e => setConsentMarketing(e.target.checked)}
                  disabled={submitting}
                />
                <span className={styles.checkboxText}>
                  Aceito receber novidades, atualizações e comunicações sobre o Flow.
                </span>
              </label>
            </div>

            <button className={styles.btnWaitlist} type="submit" disabled={submitting}>
              {submitting ? 'Inscrevendo...' : 'Entrar para o Programa Demo'}
            </button>
          </form>
        )}
        
        <div className={styles.securityLine}>Inscrições seguras. Cumprimos os termos da LGPD.</div>
      </motion.div>
    </section>
  );
};
