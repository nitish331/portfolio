import { motion, useReducedMotion } from 'framer-motion';

// Three blurred colour blobs that slowly drift, plus a few twinkling stars.
// Sits behind the top of every page (absolute, so the parent needs `relative`).
const BLOBS = [
  {
    position: 'left-[-220px] top-[-220px] size-[760px]',
    color: 'rgba(124,92,255,.55)',
    animate: { x: [0, 120, 0], y: [0, 60, 0], scale: [1, 1.2, 1] },
    duration: 18,
  },
  {
    position: 'right-[-200px] top-[40px] size-[680px]',
    color: 'rgba(34,211,238,.38)',
    animate: { x: [0, -100, 0], y: [0, 80, 0], scale: [1, 1.15, 1] },
    duration: 22,
  },
  {
    position: 'left-[32%] top-[520px] size-[620px]',
    color: 'rgba(244,114,182,.32)',
    animate: { x: [0, 60, 0], y: [0, -80, 0], scale: [1.1, 0.95, 1.1] },
    duration: 26,
  },
];

const STARS = [
  { left: '10%', top: 320, size: 3, delay: 0 },
  { left: '52%', top: 140, size: 2, delay: -1 },
  { left: '70%', top: 700, size: 3, delay: -2 },
  { left: '28%', top: 860, size: 2, delay: -0.5 },
  { left: '86%', top: 380, size: 2, delay: -1.5 },
];

export default function AuroraBackground({ height = 1500 }) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 overflow-hidden"
      style={{ height }}
    >
      {BLOBS.map((blob) => (
        <motion.span
          key={blob.position}
          className={`absolute rounded-full blur-[30px] ${blob.position}`}
          style={{ background: `radial-gradient(circle, ${blob.color}, transparent 65%)` }}
          animate={reduceMotion ? undefined : blob.animate}
          transition={{ duration: blob.duration, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      {STARS.map((star) => (
        <span
          key={`${star.left}-${star.top}`}
          className="absolute animate-twinkle rounded-full bg-white"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
