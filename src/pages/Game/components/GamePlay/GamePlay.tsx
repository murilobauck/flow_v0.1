import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
export interface Question {
  id: number;
  question: string;
  options: string[];
  correct_index: number;
}

import styles from './GamePlay.module.css';

interface GamePlayProps {
  currentQ: Question;
  showOptions: boolean;
  gameState: 'PLAYING' | 'FEEDBACK';
  selectedOption: number | null;
  onOptionClick: (index: number) => void;
}

const icons = [
  <polygon points="16,2 30,30 2,30" />,
  <circle cx="16" cy="16" r="14" />,
  <rect x="2" y="2" width="28" height="28" />,
  <polygon points="16,2 30,16 16,30 2,16" />
];

export const GamePlay: React.FC<GamePlayProps> = ({ 
  currentQ, 
  showOptions, 
  gameState, 
  selectedOption, 
  onOptionClick 
}) => {
  return (
    <div className={styles.playContainer}>
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentQ.id}
          className={styles.questionHeader}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className={styles.questionText}>{currentQ.question}</h2>
        </motion.div>
      </AnimatePresence>
      
      <div className={styles.optionsGrid}>
        <AnimatePresence>
          {showOptions && currentQ.options.map((opt, i) => {
            let btnClass = `${styles.optionBtn} ${styles[`optionBtn${i}`]}`;
            
            if (gameState === 'FEEDBACK') {
              if (i === currentQ.correct_index) {
                btnClass += ` ${styles.optionCorrect}`;
              } else {
                btnClass += ` ${styles.optionWrong}`;
              }
              btnClass += ` ${styles.optionDisabled}`;
            } else if (selectedOption !== null) {
              btnClass += ` ${styles.optionDisabled}`;
            }
            
            return (
              <motion.button
                key={`${currentQ.id}-opt-${i}`}
                className={btnClass}
                onClick={() => onOptionClick(i)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`${styles.optionIcon} ${styles[`icon${i}`]}`}>
                  <svg viewBox="0 0 32 32">{icons[i]}</svg>
                </div>
                <span className={styles.optionText}>{opt}</span>
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};
