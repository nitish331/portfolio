import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { accent } from '../../data/accents.js';
import TimelineCard from './TimelineCard.jsx';

const EASE = [0.2, 0.8, 0.2, 1];

// Each row: card on one side of the line, year on the other (desktop);
// on phones the line sits at the left and everything stacks to its right.
function TimelineRow({ entry, left }) {
  const tone = accent(entry.accent);
  const diamond = entry.type === 'experience';

  return (
    <motion.li
      className="grid grid-cols-[44px_minmax(0,1fr)] items-start gap-y-3 md:grid-cols-[minmax(0,1fr)_88px_minmax(0,1fr)] md:gap-y-0"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
    >
      {/* Card */}
      <motion.div
        className={`col-start-2 row-start-2 md:row-start-1 ${left ? 'md:col-start-1' : 'md:col-start-3'}`}
        variants={{
          hidden: { opacity: 0, x: left ? -80 : 80 },
          show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: EASE } },
        }}
      >
        <TimelineCard entry={entry} />
      </motion.div>

      {/* Dot on the line */}
      <motion.span
        aria-hidden="true"
        className={`col-start-1 row-start-1 mt-1.5 size-[26px] justify-self-center border-[5px] border-night md:col-start-2 md:mt-5 ${
          diamond ? 'rotate-45 rounded-lg' : 'rounded-full'
        }`}
        style={{ background: entry.current ? 'linear-gradient(135deg,#7C5CFF,#22D3EE)' : tone.solid, boxShadow: `0 0 16px ${tone.solid}` }}
        variants={{
          hidden: { scale: 0 },
          show: { scale: 1, transition: { type: 'spring', stiffness: 320, damping: 14, delay: 0.1 } },
        }}
      >
        {/* The current milestone pulses (CSS, so it doesn't interfere with the reveal). */}
        {entry.current && <span className="ping-violet block size-full rounded-full" />}
      </motion.span>

      {/* Year */}
      <motion.div
        className={`col-start-2 row-start-1 flex flex-col gap-1.5 justify-self-start text-left md:pt-2 ${
          left ? 'md:col-start-3' : 'md:col-start-1 md:justify-self-end md:text-right'
        }`}
        variants={{
          hidden: { opacity: 0, y: 30 },
          show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE, delay: 0.15 } },
        }}
      >
        <span
          className={`font-display text-[clamp(40px,5vw,72px)] leading-[0.9] font-extrabold tracking-[-0.05em] ${entry.current ? 'gradient-text' : ''}`}
          style={entry.current ? undefined : { color: tone.light }}
        >
          {entry.when}
        </span>
        <span className="font-display text-lg font-bold md:text-[22px]">{entry.whenSub}</span>
      </motion.div>
    </motion.li>
  );
}

export default function Timeline({ entries }) {
  const listRef = useRef(null);
  // 0 → 1 as the list scrolls from "top at 75% of the screen" to "bottom at 60%".
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 75%', 'end 60%'] });
  const lineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <section aria-label="Timeline" className="wrap relative pt-6 pb-28">
      <div ref={listRef} className="relative">
        <span aria-hidden="true" className="absolute inset-y-0 left-[22px] w-[3px] -translate-x-1/2 rounded-full bg-white/8 md:left-1/2" />
        <motion.span
          aria-hidden="true"
          className="absolute inset-y-0 left-[22px] w-[3px] origin-top -translate-x-1/2 rounded-full bg-linear-to-b from-violet via-cyan to-amber shadow-[0_0_18px_rgba(124,92,255,.7)] md:left-1/2"
          style={{ scaleY: lineScale }}
        />
        <ol className="relative flex flex-col gap-14">
          {entries.map((entry, i) => (
            <TimelineRow key={entry.id} entry={entry} left={i % 2 === 0} />
          ))}
        </ol>
      </div>
    </section>
  );
}
