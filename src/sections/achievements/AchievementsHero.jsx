import { motion } from 'framer-motion';
import CountUp from '../../components/ui/CountUp.jsx';
import Icon from '../../components/ui/Icon.jsx';
import MaskedLine from '../../components/ui/MaskedLine.jsx';
import airyRings from '../../assets/airy-rings.webp';

const STARS = [
  { className: 'left-[8%] top-[150px] text-amber', size: 24, delay: 0 },
  { className: 'left-[46%] top-[90px] text-white', size: 16, delay: 1 },
  { className: 'left-[38%] bottom-[60px] text-cyan', size: 20, delay: 2 },
];

const rise = (delay) => ({
  initial: { opacity: 0, y: 30, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { delay, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] },
});

export default function AchievementsHero({ topRank }) {
  return (
    <section className="relative overflow-hidden pb-[clamp(64px,9vw,120px)]">
      <motion.img
        src={airyRings}
        alt=""
        className="pointer-events-none absolute top-1/2 -right-[14%] size-[880px] max-w-none -translate-y-1/2 rounded-full object-cover opacity-85 mix-blend-screen [mask-image:radial-gradient(circle,#000_40%,transparent_70%)]"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      {STARS.map((star) => (
        <motion.span
          key={star.className}
          aria-hidden="true"
          className={`absolute ${star.className}`}
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: star.delay }}
        >
          <Icon name="sparkle" size={star.size} />
        </motion.span>
      ))}

      <div className="wrap relative flex flex-col gap-7 pt-[clamp(56px,9vw,120px)]">
        <motion.span className="glass chip self-start" {...rise(0)}>Ranks · Skills · Certificates</motion.span>
        <h1 className="font-display text-[clamp(56px,9.6vw,140px)] leading-[0.92] font-extrabold tracking-[-0.055em]">
          <MaskedLine>Proof of</MaskedLine>
          <MaskedLine delay={0.12}>
            <span className="gold-text">work.</span>
          </MaskedLine>
        </h1>
        <motion.div className="flex flex-wrap items-end gap-x-10 gap-y-5 pt-2" {...rise(0.3)}>
          <div className="flex flex-col gap-1.5">
            <CountUp
              to={topRank.value}
              prefix={topRank.prefix}
              duration={2}
              className="font-display text-[clamp(88px,13vw,180px)] leading-[0.82] font-extrabold tracking-[-0.06em]"
            />
            <span className="text-lg font-semibold text-soft">
              {topRank.label} · {topRank.exam}
            </span>
          </div>
          <p className="max-w-[380px] text-[17px] leading-relaxed text-muted">
            Plus AIR 36 in GATE 2025, a JRF in CSIR-UGC NET, AIR 90 in IIT JAM and a national top-1% finish in NGPE.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
