import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

// "Full-Stack Developer → Generative AI Engineer → …", one role at a time.
// Every role is also rendered invisibly in the same grid cell, so the ticker
// always takes the width of the longest role and the line never jumps.
export default function RoleTicker({ roles, interval = 2600 }) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const timer = setInterval(() => setIndex((i) => (i + 1) % roles.length), interval);
    return () => clearInterval(timer);
  }, [roles.length, interval, reduceMotion]);

  return (
    <>
      <span className="sr-only">{roles.join(', ')}</span>
      <span aria-hidden="true" className="inline-grid h-[1.3em] overflow-hidden align-bottom">
        {roles.map((role) => (
          <span key={role} className="invisible col-start-1 row-start-1 whitespace-nowrap">
            {role}
          </span>
        ))}
        <AnimatePresence initial={false}>
          <motion.span
            key={roles[index]}
            className="col-start-1 row-start-1 whitespace-nowrap text-cyan-light"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.7, 0, 0.3, 1] }}
          >
            {roles[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </>
  );
}
