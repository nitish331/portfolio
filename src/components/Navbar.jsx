import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { NAV_LINKS } from '../data/site.js';

const desktopLinkClass = ({ isActive }) =>
  `inline-flex min-h-11 items-center rounded-full px-3.5 text-[15px] font-semibold transition-colors ${
    isActive ? 'bg-white/12 text-white' : 'text-soft hover:bg-white/8 hover:text-white'
  }`;

const mobileLinkClass = ({ isActive }) =>
  `flex min-h-12 items-center justify-between rounded-2xl px-4 text-base font-semibold transition-colors ${
    isActive ? 'bg-white/12 text-white' : 'text-soft hover:bg-white/8 hover:text-white'
  }`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Close the phone menu whenever the page changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Deepen the navbar shadow once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Esc closes the phone menu.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3.5 sm:px-6 lg:px-8">
      <nav
        aria-label="Primary"
        className={`glass mx-auto flex max-w-[1240px] items-center justify-between gap-4 rounded-[28px] py-2 pr-2 pl-3 transition-shadow duration-300 ${
          scrolled ? 'shadow-[0_20px_60px_-25px_rgba(0,0,0,.85)]' : ''
        }`}
      >
        <Link to="/" className="inline-flex min-h-11 items-center gap-2.5" aria-label="Nitish, home">
          <span className="grid size-10 place-items-center rounded-xl bg-linear-to-br from-violet to-cyan font-display text-[19px] font-extrabold text-on-accent">
            N
          </span>
          <span className="font-display text-[19px] font-bold">Nitish</span>
        </Link>

        <div className="hidden items-center gap-0.5 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={desktopLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link to="/#contact" className="btn btn-grad hidden min-h-11 px-5 text-sm sm:inline-flex">
            Let's talk
          </Link>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full bg-white/8 transition-colors hover:bg-white/14 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <motion.path
                initial={false}
                animate={{ d: menuOpen ? 'M6 6L18 18' : 'M4 8H20' }}
                transition={{ duration: 0.25 }}
              />
              <motion.path
                initial={false}
                animate={{ d: menuOpen ? 'M6 18L18 6' : 'M4 16H20' }}
                transition={{ duration: 0.25 }}
              />
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
            className="glass mx-auto mt-2 max-w-[1240px] rounded-3xl bg-panel/90 p-3 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link, index) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.25 }}
                >
                  <NavLink to={link.to} end={link.end} className={mobileLinkClass}>
                    {link.label}
                    <span aria-hidden="true" className="text-muted">→</span>
                  </NavLink>
                </motion.li>
              ))}
            </ul>
            <Link to="/#contact" className="btn btn-grad mt-2 w-full justify-center">
              Let's talk
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
