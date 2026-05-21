import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './GameHUD.module.css';

interface GameHUDProps {
  timeLeft: number;
  totalTime: number;
  multiplier: number;
  totalScore: number;
  feedbackScore: number | null;
}

export const GameHUD: React.FC<GameHUDProps> = ({ 
  timeLeft, 
  totalTime, 
  multiplier, 
  totalScore, 
  feedbackScore 
}) => {
  const percentage = (timeLeft / totalTime) * 100;
  
  const seconds = Math.floor(timeLeft / 1000);
  const milliseconds = Math.floor((timeLeft % 1000) / 10);
  const timeString = `00:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;

  const barColor = timeLeft < 3000 ? '#FF3366' : (timeLeft < 6000 ? '#FE8F2A' : '#33FF66');

  return (
    <div className={styles.hudContainer}>
      <div className={styles.timerContainer}>
        <div className={styles.timerBarBg}>
          <div 
            className={styles.timerBarFill} 
            style={{ width: `${percentage}%`, backgroundColor: barColor }} 
          />
        </div>
        <div className={styles.timerText}>{timeString}</div>
      </div>

      <motion.div 
        className={styles.multiplierBadge}
        key={multiplier} 
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 10 }}
      >
        <span className={styles.multiplierLabel}>Combo</span>
        <span className={styles.multiplierValue}>{multiplier.toFixed(1)}x</span>
      </motion.div>

      <div className={styles.scoreBoard}>
        <div className={styles.scoreTotal}>{totalScore}</div>
        <AnimatePresence>
          {feedbackScore !== null && (
            <motion.div 
              className={styles.scoreAddition}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 10 }}
              exit={{ opacity: 0, y: 20 }}
              style={{ color: feedbackScore > 0 ? '#33FF66' : '#FF3366' }}
            >
              {feedbackScore > 0 ? `+${feedbackScore}` : '+0'}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
