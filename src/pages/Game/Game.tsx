import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions, type Question } from './data/questions';
import styles from './Game.module.css';

type GameState = 'GATE_NAME' | 'PLAYING' | 'FEEDBACK' | 'END';

interface RankingEntry {
  name: string;
  score: number;
  timestamp: number;
}

const TOTAL_TIME_MS = 10000;

export const Game = () => {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState<GameState>('GATE_NAME');
  
  const [name, setName] = useState('');
  
  const [currentRunQuestions, setCurrentRunQuestions] = useState<Question[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const totalScoreRef = useRef(0);
  
  const [multiplier, setMultiplier] = useState(1.0);
  const multiplierRef = useRef(1.0);
  
  const [showOptions, setShowOptions] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME_MS);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [feedbackScore, setFeedbackScore] = useState<number | null>(null);
  
  const [ranking, setRanking] = useState<RankingEntry[]>([]);

  const timerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('flow_game_ranking_v2');
    if (saved) {
      setRanking(JSON.parse(saved));
    }
  }, []);

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;
    startGame();
  };

  const startGame = () => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    setCurrentRunQuestions(shuffled.slice(0, 10));
    
    setCurrentQIndex(0);
    setTotalScore(0);
    totalScoreRef.current = 0;
    setMultiplier(1.0);
    multiplierRef.current = 1.0;
    setGameState('PLAYING');
    setupQuestion(0);
  };

  const setupQuestion = (index: number) => {
    setSelectedOption(null);
    setFeedbackScore(null);
    setTimeLeft(TOTAL_TIME_MS);
    
    if (index === 0) {
      setShowOptions(false);
      setTimeout(() => {
        setShowOptions(true);
        startTimer();
      }, 5000);
    } else {
      setShowOptions(true);
      startTimer();
    }
  };

  const startTimer = () => {
    startTimeRef.current = performance.now();
    
    const tick = () => {
      const now = performance.now();
      const elapsed = now - (startTimeRef.current || now);
      const remaining = Math.max(0, TOTAL_TIME_MS - elapsed);
      
      setTimeLeft(remaining);
      
      if (remaining > 0) {
        timerRef.current = requestAnimationFrame(tick);
      } else {
        handleTimeout();
      }
    };
    
    timerRef.current = requestAnimationFrame(tick);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      cancelAnimationFrame(timerRef.current);
    }
  };

  const handleTimeout = () => {
    stopTimer();
    setMultiplier(1.0);
    multiplierRef.current = 1.0;
    setFeedbackScore(0);
    showFeedbackAndAdvance();
  };

  const handleOptionClick = (index: number) => {
    if (selectedOption !== null || gameState !== 'PLAYING') return;
    
    stopTimer();
    setSelectedOption(index);
    
    const elapsed = TOTAL_TIME_MS - timeLeft;
    const isCorrect = index === currentRunQuestions[currentQIndex].correct_index;
    
    if (isCorrect) {
      const basePoints = Math.max(500, 1000 - (0.05 * elapsed));
      const earned = Math.round(basePoints * multiplierRef.current);
      
      const newScore = totalScoreRef.current + earned;
      setTotalScore(newScore);
      totalScoreRef.current = newScore;
      
      setFeedbackScore(earned);
      
      const newMult = Math.min(1.9, multiplierRef.current + 0.1);
      setMultiplier(newMult);
      multiplierRef.current = newMult;
    } else {
      setFeedbackScore(0);
      setMultiplier(1.0);
      multiplierRef.current = 1.0;
    }
    
    showFeedbackAndAdvance();
  };

  const showFeedbackAndAdvance = () => {
    setGameState('FEEDBACK');
    
    setTimeout(() => {
      const nextIndex = currentQIndex + 1;
      if (nextIndex < 10) {
        setCurrentQIndex(nextIndex);
        setGameState('PLAYING');
        setupQuestion(nextIndex);
      } else {
        finishGame();
      }
    }, 2000);
  };

  const finishGame = () => {
    setGameState('END');
    updateRanking(totalScoreRef.current);
  };

  const updateRanking = (finalScore: number) => {
    setRanking(prev => {
      const existingIdx = prev.findIndex(r => r.name.toLowerCase() === name.toLowerCase());
      let newRanking = [...prev];
      
      if (existingIdx >= 0) {
        if (finalScore > newRanking[existingIdx].score) {
          newRanking[existingIdx] = { ...newRanking[existingIdx], score: finalScore, timestamp: Date.now() };
        } else if (finalScore === newRanking[existingIdx].score) {
          newRanking[existingIdx].timestamp = Date.now();
        }
      } else {
        newRanking.push({ name, score: finalScore, timestamp: Date.now() });
      }
      
      newRanking.sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return b.timestamp - a.timestamp;
      });
      
      localStorage.setItem('flow_game_ranking_v2', JSON.stringify(newRanking));
      return newRanking;
    });
  };

  const formatTimer = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `00:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
  };

  const handleBack = () => {
    stopTimer();
    navigate('/');
  };

  if (gameState === 'GATE_NAME') {
    return (
      <div className={styles.container}>
        <button onClick={handleBack} className={styles.btnBack}>
          ← Voltar
        </button>
        <div className={styles.gateContainer}>
          <h1 className={styles.gateTitle}>Desafio Flow</h1>
          <p className={styles.gateSubtitle}>Para começar, como devemos te chamar?</p>
          <form onSubmit={handleNameSubmit}>
            <div className={styles.inputGroup}>
              <input 
                type="text" 
                className={styles.input} 
                placeholder="Seu nome"
                value={name}
                onChange={e => setName(e.target.value)}
                autoFocus
                required
              />
            </div>
            <button type="submit" className={styles.btnPrimary}>Participar da Competição</button>
          </form>
        </div>
      </div>
    );
  }

  if (gameState === 'END') {
    const top5 = ranking.slice(0, 5);
    
    return (
      <div className={styles.container}>
        <button onClick={handleBack} className={styles.btnBack}>
          ← Voltar
        </button>
        <div className={styles.endScreen}>
          <div className={styles.scoreLabel}>Pontuação Total</div>
          <div className={styles.finalScore}>{totalScore}</div>
          
          <div className={styles.rankingContainer}>
            <h3 className={styles.rankingTitle}>Top 5 Global</h3>
            <ul className={styles.rankingList}>
              {top5.map((r, i) => (
                <li key={`${r.name}-${i}`} className={`${styles.rankingItem} ${r.name.toLowerCase() === name.toLowerCase() ? styles.currentUser : ''}`}>
                  <span className={styles.rankingRank}>#{i + 1}</span>
                  <span className={styles.rankingName}>{r.name}</span>
                  <span className={styles.rankingScore}>{r.score}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <button className={styles.btnGigantic} onClick={startGame}>
            JOGAR NOVAMENTE
          </button>
        </div>
      </div>
    );
  }

  const currentQ = currentRunQuestions[currentQIndex];

  const icons = [
    <polygon points="16,2 30,30 2,30" />,
    <circle cx="16" cy="16" r="14" />,
    <rect x="2" y="2" width="28" height="28" />,
    <polygon points="16,2 30,16 16,30 2,16" />
  ];

  return (
    <div className={styles.container}>
      <button onClick={handleBack} className={styles.btnBack}>
        ← Voltar
      </button>
      <div className={styles.gameWrapper}>
        
        <div className={styles.gameTopBar}>
          <div className={styles.timerDigital}>
            {formatTimer(timeLeft)}
          </div>
          
          <div className={styles.multiplierBadge}>
            <span className={styles.multiplierLabel}>Combo</span>
            <span className={styles.multiplierValue}>{multiplier.toFixed(1)}x</span>
          </div>
          
          <div className={styles.scoreBoard}>
            <div className={styles.scoreTotal}>{totalScore}</div>
            {gameState === 'FEEDBACK' && feedbackScore !== null && (
              <div className={styles.scoreAddition} style={{ color: feedbackScore > 0 ? '#33FF66' : '#FF3366' }}>
                {feedbackScore > 0 ? `+${feedbackScore}` : '+0'}
              </div>
            )}
          </div>
        </div>
        
        <div className={styles.questionHeader}>
          <h2 className={styles.questionText}>{currentQ.question}</h2>
        </div>
        
        <div className={styles.optionsGrid}>
          {showOptions && currentQ.options.map((opt, i) => {
            let btnClass = `${styles.optionBtn} ${styles[`option${i}` as keyof typeof styles]}`;
            
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
              <button
                key={`${currentQ.id}-${i}`}
                className={btnClass}
                onClick={() => handleOptionClick(i)}
              >
                <div className={styles.optionIcon}>
                  <svg viewBox="0 0 32 32">{icons[i]}</svg>
                </div>
                <span className={styles.optionText}>{opt}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
