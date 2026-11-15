import { motion } from 'framer-motion';
import MaskedLine from '../../components/ui/MaskedLine.jsx';
import waveLines from '../../assets/wave-lines.webp';

const rise = (delay) => ({
  initial: { opacity: 0, y: 30, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { delay, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] },
});

export default function ProjectsHeader({ count, children }) {
  return (
    <section className="relative overflow-hidden">
      <motion.img
        src={waveLines}
        alt=""
        className="pointer-events-none absolute top-0 left-0 h-full w-[120%] max-w-none object-cover opacity-45 mix-blend-screen"
        style={{ filter: 'invert(1) hue-rotate(180deg) saturate(1.4)' }}
        initial={{ x: '0%', scale: 1.1 }}
        animate={{ x: '-6%', scale: 1.15 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />
      <div className="wrap relative flex flex-col gap-6.5 pt-[clamp(56px,9vw,120px)] pb-[72px]">
        <motion.span className="glass chip self-start" {...rise(0)}>
          {String(count).padStart(2, '0')} projects · 2024 — now
        </motion.span>
        <h1 className="font-display text-[clamp(56px,9.6vw,140px)] leading-[0.92] font-extrabold tracking-[-0.055em]">
          <MaskedLine>Things I've</MaskedLine>
          <MaskedLine delay={0.12}>
            <span className="gradient-text">built.</span>
          </MaskedLine>
        </h1>
        <motion.p className="max-w-[600px] text-[19px] leading-[1.65] text-muted" {...rise(0.25)}>
          Document AI running in production, a digital bank, real-time chat, NLP models and the ML simulator behind my thesis.
          Pick a lane:
        </motion.p>
        <motion.div {...rise(0.4)}>{children}</motion.div>
      </div>
    </section>
  );
}
