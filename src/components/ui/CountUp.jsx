import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

// Counts from `from` to `to` the first time it scrolls into view.
// <CountUp to={36} prefix="#" />   <CountUp to={9.35} decimals={2} />
export default function CountUp({ to, from = 0, decimals = 0, prefix = '', suffix = '', duration = 1.8, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const reduceMotion = useReducedMotion();
  const [current, setCurrent] = useState(from);

  useEffect(() => {
    if (!inView) return undefined;
    if (reduceMotion) {
      setCurrent(to);
      return undefined;
    }
    const controls = animate(from, to, {
      duration,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate: setCurrent,
    });
    return () => controls.stop();
  }, [inView, reduceMotion, from, to, duration]);

  const format = (n) => `${prefix}${n.toFixed(decimals)}${suffix}`;

  return (
    <span ref={ref} className={className}>
      {/* Screen readers hear the final number, not every frame of the count. */}
      <span className="sr-only">{format(to)}</span>
      <span aria-hidden="true">{format(current)}</span>
    </span>
  );
}
