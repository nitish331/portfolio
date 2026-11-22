import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import Layout from './components/Layout.jsx';
import PageTransition from './components/PageTransition.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';

// Home loads with the site; the other pages download only when first opened.
const Projects = lazy(() => import('./pages/Projects.jsx'));
const Journey = lazy(() => import('./pages/Journey.jsx'));
const Achievements = lazy(() => import('./pages/Achievements.jsx'));
const StyleGuide = lazy(() => import('./pages/StyleGuide.jsx'));

// Shown for the split second a page's code is downloading.
function PageLoading() {
  return <div className="min-h-screen" aria-busy="true" />;
}

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
          <Route
            key={route.path}
            path={route.path}
            element={
              <Suspense fallback={<PageLoading />}>
                <PageTransition>{route.element}</PageTransition>
              </Suspense>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    // reducedMotion="user": people with "reduce motion" switched on in their OS
    // get fades instead of movement, everywhere, automatically.
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </BrowserRouter>
    </MotionConfig>
  );
}
