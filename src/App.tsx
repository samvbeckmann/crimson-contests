import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BuilderPage from './pages/army-builder/BuilderPage';
import LandingPage from './pages/landing/LandingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/builder',
    element: <BuilderPage />,
  },
]);

export default function App(): JSX.Element {
  return <RouterProvider router={router} />;
}
