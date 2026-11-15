// Shared entrance for mockup parts: springs in from 70% size after `delay` seconds.
export const pop = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.7 },
  animate: { opacity: 1, scale: 1 },
  transition: { delay, type: 'spring', stiffness: 260, damping: 18 },
});

// Draws an SVG path from start to end.
export const draw = (delay = 0.3) => ({
  initial: { pathLength: 0 },
  animate: { pathLength: 1 },
  transition: { delay, duration: 1.6, ease: [0.6, 0, 0.2, 1] },
});
