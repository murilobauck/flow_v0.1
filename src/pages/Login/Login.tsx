import { LoginForm } from '../../features/auth';

export const Login = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <LoginForm />
    </div>
  );
};
