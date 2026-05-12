import { createBrowserRouter } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { Game } from '@/pages/Game';
import { Terms, Privacy } from '@/pages/Legal';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/game',
    element: <Game />,
  },
  {
    path: '/termos',
    element: <Terms />,
  },
  {
    path: '/privacidade',
    element: <Privacy />,
  },
]);

