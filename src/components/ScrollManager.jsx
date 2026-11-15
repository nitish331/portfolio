import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Handles links with a #hash (e.g. "Let's talk" → /#contact).
// Scrolling back to the top on a normal page change is done in App.jsx,
// once the old page has finished its exit animation.
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  const previousPath = useRef(pathname);

  useEffect(() => {
    const samePage = previousPath.current === pathname;
    previousPath.current = pathname;
    if (!hash) return undefined;

    // Wait for the page transition when arriving from another page.
    const timer = setTimeout(
      () => {
        document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      },
      samePage ? 0 : 550,
    );
    return () => clearTimeout(timer);
  }, [pathname, hash, key]);

  return null;
}
