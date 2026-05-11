import { Link } from 'react-router-dom';
import { Button } from '../../shared/components/Button';
import styles from './Home.module.css';

export const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Feature-Driven Premium</h1>
      <p className={styles.subtitle}>
        Uma base sólida, escalável e extremamente minimalista para produtos que
        exigem excelência desde o dia zero.
      </p>
      <Link to="/login">
        <Button>Acessar Plataforma</Button>
      </Link>
    </div>
  );
};
