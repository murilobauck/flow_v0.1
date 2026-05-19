import styles from './GrainOverlay.module.css';

// Componente visual que adiciona um efeito de ruído (grain) por cima de toda a tela
// Serve para dar uma textura "premium/cinemática" ao fundo da aplicação
export const GrainOverlay = () => {
  return <div className={styles.grainOverlay} />;
};
