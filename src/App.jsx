import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout.jsx';
import PageTransition from './components/PageTransition.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Journey from './pages/Journey.jsx';
import Achievements from './pages/Achievements.jsx';
import StyleGuide from './pages/StyleGuide.jsx';
import NotFound from './pages/NotFound.jsx';

const ROUTES = [
  { path: '/', element: <Home /> },
  { path: '/projects', element: <Projects /> },
  { path: '/journey', element: <Journey /> },
  { path: '/achievements', element: <Achievements /> },
  { path: '/styleguide', element: <StyleGuide /> },
  { path: '*', element: <NotFound /> },
];

function AnimatedRoutes() {
  const location = useLocation();

  return (
    // mode="wait": the old page finishes leaving before the new one enters.
    // Jump to the top in between, unless the link points at a #section.
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        if (!window.location.hash) window.scrollTo({ top: 0, behavior: 'instant' });
      }}
    >
      <Routes location={location} key={location.pathname}>
        {ROUTES.map((route) => (
          <Route key={route.path} path={route.path} element={<PageTransition>{route.element}</PageTransition>} />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </BrowserRouter>
  );
}
