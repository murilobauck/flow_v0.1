// Importações fundamentais do React para renderizar a interface
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importação do componente raiz da aplicação
import { App } from '@/app/App';

// Importação dos estilos globais e variáveis CSS
import '@/styles/global.css';

// Inicializa o React na div com id 'root' presente no index.html
// O StrictMode ajuda a encontrar potenciais problemas na aplicação durante o desenvolvimento
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
