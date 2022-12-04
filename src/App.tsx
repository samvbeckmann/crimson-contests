import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ArenaPage from './pages/arenas/ArenaPage';
import BuilderPage from './pages/army-builder/BuilderPage';
import LandingPage from './pages/landing/LandingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/monster-mania',
    children: [{
      path: 'builder',
      element: <BuilderPage />, 
    },   {
      path: 'arenas',
      element: <ArenaPage />
    }]
  }
]);

export default function App(): JSX.Element {
  return <RouterProvider router={router} />;
}
