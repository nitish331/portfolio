import { motion } from 'framer-motion';
import MaskedLine from '../../components/ui/MaskedLine.jsx';
import waveLines from '../../assets/wave-lines.webp';

const LEGEND = [
  { label: 'Education', color: '#7C5CFF', shape: 'rounded-full' },
  { label: 'Research', color: '#FBBF24', shape: 'rounded-full' },
  { label: 'Experience', color: '#F472B6', shape: 'rounded-[3px]' },
];

const rise = (delay) => ({
  initial: { opacity: 0, y: 30, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { delay, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] },
});

export default function JourneyHeader() {
  return (
    <section className="relative overflow-hidden">
      <motion.img
        src={waveLines}
        alt=""
        className="pointer-events-none absolute top-0 left-0 h-full w-[120%] max-w-none object-cover opacity-55 mix-blend-screen"
        style={{ filter: 'invert(1) hue-rotate(180deg) saturate(1.4)' }}
        initial={{ x: '0%', scale: 1.1 }}
        animate={{ x: '-6%', scale: 1.15 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />
      <div className="wrap relative flex flex-col items-center gap-6 pt-[clamp(56px,9vw,120px)] pb-24 text-center">
        <motion.span className="glass chip" {...rise(0)}>Education · Research · Experience</motion.span>
        <h1 className="font-display text-[clamp(56px,9.6vw,140px)] leading-[0.92] font-extrabold tracking-[-0.055em]">
          <MaskedLine>The journey</MaskedLine>
          <MaskedLine delay={0.12}>
            so <span className="gradient-text">far.</span>
          </MaskedLine>
        </h1>
        <motion.p className="max-w-[620px] text-[19px] leading-[1.65] text-muted" {...rise(0.25)}>
          From a classroom in Hisar to machine-learning research at IIT Delhi, with a lot of code along the way.
        </motion.p>
        <motion.ul className="flex flex-wrap justify-center gap-2.5" aria-label="Legend" {...rise(0.4)}>
          {LEGEND.map((item) => (
            <li key={item.label} className="glass chip">
              <span className={`size-2.5 ${item.shape}`} style={{ background: item.color, boxShadow: `0 0 10px ${item.color}` }} />
              {item.label}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
