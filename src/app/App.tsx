// Provedor de rotas do React Router
import { RouterProvider } from 'react-router-dom';
// Configuração das rotas da aplicação
import { router } from '@/app/router';

// Componente App: O ponto de entrada principal após a inicialização
// Responsável por englobar a aplicação com o sistema de roteamento
export const App = () => {
  return (
    <RouterProvider router={router} />
  );
};
