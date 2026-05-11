import type { FormEvent } from 'react';
import { Button } from '../../../shared/components/Button';
import styles from './LoginForm.module.css';

export const LoginForm = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Login submetido');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Bem-vindo de volta</h2>
      <div className={styles.inputGroup}>
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" placeholder="seu@email.com" required />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" placeholder="••••••••" required />
      </div>
      <Button type="submit" fullWidth>Entrar</Button>
      <Button type="button" variant="secondary" fullWidth>Criar Conta</Button>
    </form>
  );
};
