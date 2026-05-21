import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import styles from './GameGate.module.css';

interface GameGateProps {
  leadId: string | null;
  name: string;
  onValidLead: (id: string, name: string) => void;
  onStartGame: () => void;
  onReset: () => void;
}

export const GameGate: React.FC<GameGateProps> = ({ 
  leadId, 
  name, 
  onValidLead, 
  onStartGame, 
  onReset 
}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [gateError, setGateError] = useState<string | null>(null);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isValidating) return;

    setIsValidating(true);
    setGateError(null);

    try {
      const { data, error } = await supabase.rpc('verify_lead_by_email', {
        email_to_check: email.trim().toLowerCase()
      });

      if (error) throw error;

      if (data && data.length > 0) {
        onValidLead(data[0].id, data[0].name);
      } else {
        setGateError('Este e-mail não está cadastrado. Por favor, inscreva-se primeiro na landing page!');
      }
    } catch (err: unknown) {
      console.error('Erro ao verificar e-mail do lead:', err);
      const message = err instanceof Error ? err.message : 'Não foi possível verificar seu e-mail.';
      setGateError(message);
    } finally {
      setIsValidating(false);
    }
  };

  return (
    <motion.div 
      className={styles.gateContainer}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className={styles.gateTitle}>Desafio Flow</h1>
      
      {leadId === null ? (
        <>
          <p className={styles.gateSubtitle}>
            Para participar da competição, confirme o mesmo e-mail cadastrado na lista de espera.
          </p>
          
          {gateError && (
            <motion.div 
              className={styles.gateError}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p>⚠️ {gateError}</p>
              <button 
                type="button" 
                className={styles.btnLink}
                onClick={() => navigate('/#waitlist')}
              >
                Inscrever-se no Programa Demo
              </button>
            </motion.div>
          )}
          
          <form onSubmit={handleEmailSubmit}>
            <div className={styles.inputGroup}>
              <input 
                type="email" 
                className={styles.input} 
                placeholder="Digite seu e-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoFocus
                required
                disabled={isValidating}
              />
            </div>
            <button type="submit" className={styles.btnPrimary} disabled={isValidating}>
              {isValidating ? 'Validando...' : 'Confirmar e-mail'}
            </button>
          </form>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className={styles.gateSubtitleWelcome}>
            Olá, <strong>{name}</strong>!<br />Seu cadastro foi validado. Pronto para bater o recorde?
          </p>
          <button onClick={onStartGame} className={styles.btnPrimary}>
            Iniciar Partida
          </button>
          <button 
            onClick={() => {
              setEmail('');
              setGateError(null);
              onReset();
            }} 
            className={styles.btnResetGate}
          >
            Usar outro e-mail
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};
