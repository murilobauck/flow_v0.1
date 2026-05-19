import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from './GameCTA.module.css';

// Componente "Call to Action" que redireciona o usuário para o Mini-Game
export const GameCTA = () => {
  // Hook de navegação do React Router para redirecionar entre páginas
  const navigate = useNavigate();

  return (
    <section className={styles.gameCtaSection}>
      <motion.div 
        className={styles.card}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.eyebrow}>Desafio Flow</div>
        <h2 className={styles.title}>Ainda não temos o sistema, mas...</h2>
        <p className={styles.description}>
          Você pode participar de uma competição exclusiva e concorrer a um <strong>SUPER prêmio</strong>. Mostre seu conhecimento, bata o recorde e garanta seu lugar no topo do ranking!
        </p>
        
        <button 
          onClick={() => navigate('/game')}
          className={styles.btnPlay}
        >
          Participar da Competição
        </button>
      </motion.div>
    </section>
  );
};
