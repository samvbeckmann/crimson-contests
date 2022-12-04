import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Redirect from './components/Redirect';
import ArenaPage from './pages/arenas/ArenaPage';
import BuilderPage from './pages/army-builder/BuilderPage';
import LandingPage from './pages/landing/LandingPage';
import AboutPage from './pages/about/AboutPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/monster-mania',
    children: [
      {
        path: 'builder',
        element: <BuilderPage />,
      },
      {
        path: 'arenas',
        element: <ArenaPage />,
      },
      {
        path: 'rules',
        element: (
          <Redirect destination="https://gmscreen.notion.site/Monster-Mania-Official-Rules-8df3dcc27fb34a2d804820a1c58b5aa2" />
        ),
      },
    ],
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
]);

export default function App(): JSX.Element {
  return <RouterProvider router={router} />;
}
