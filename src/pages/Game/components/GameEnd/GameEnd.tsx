import React from 'react';
import { motion } from 'framer-motion';
import styles from './GameEnd.module.css';

interface RankingEntry {
  player_name: string;
  score: number;
}

interface GameEndProps {
  ranking: RankingEntry[];
  totalScore: number;
  playerName: string;
  onPlayAgain: () => void;
}

export const GameEnd: React.FC<GameEndProps> = ({ ranking, totalScore, playerName, onPlayAgain }) => {
  const top10 = ranking.slice(0, 10);

  return (
    <motion.div 
      className={styles.endContainer}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className={styles.scoreLabel}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Pontuação Total
      </motion.div>
      <motion.div 
        className={styles.finalScore}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, delay: 0.4 }}
      >
        {totalScore}
      </motion.div>

      <motion.div 
        className={styles.rankingContainer}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h3 className={styles.rankingTitle}>Top 10 Global</h3>
        <ul className={styles.rankingList}>
          {top10.map((r, i) => {
            const isCurrent = r.player_name.toLowerCase() === playerName.toLowerCase();
            return (
              <motion.li 
                key={`${r.player_name}-${i}`} 
                className={`${styles.rankingItem} ${isCurrent ? styles.currentUser : ''}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + (i * 0.05) }}
              >
                <span className={styles.rankingRank}>#{i + 1}</span>
                <span className={styles.rankingName}>{r.player_name}</span>
                <span className={styles.rankingScore}>{r.score}</span>
              </motion.li>
            );
          })}
          {top10.length === 0 && (
            <li className={styles.rankingItem} style={{ justifyContent: 'center', color: 'var(--text-secondary)' }}>
              Nenhum registro no placar ainda.
            </li>
          )}
        </ul>
      </motion.div>

      <motion.button 
        className={styles.btnGigantic} 
        onClick={onPlayAgain}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        JOGAR NOVAMENTE
      </motion.button>
    </motion.div>
  );
};
