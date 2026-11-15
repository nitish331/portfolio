import { motion, useReducedMotion } from 'framer-motion';

// Scroll-reveal helpers. They animate once, when the element enters the screen.
//
//   <Reveal>…</Reveal>                       one block fades + slides up
//   <RevealGroup stagger={0.1}>              children appear one after another
//     <RevealItem>…</RevealItem>
//   </RevealGroup>

const EASE = [0.2, 0.8, 0.2, 1];
const VIEWPORT = { once: true, margin: '0px 0px -12% 0px' };

export function Reveal({ as = 'div', delay = 0, y = 48, className, children, ...rest }) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.9, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export function RevealGroup({ as = 'div', stagger = 0.1, delay = 0, className, children, ...rest }) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={reduceMotion ? false : 'hidden'}
      whileInView="show"
      viewport={VIEWPORT}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({ as = 'div', y = 40, className, children, ...rest }) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, y, scale: 0.96 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: EASE } },
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
