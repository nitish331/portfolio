import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Icon from '../../components/ui/Icon.jsx';
import quadrature from '../../assets/quadrature.webp';

// Portrait inside a spinning aurora ring, the phase-space image behind it,
// a rotating text badge and four floating glass stickers.

const STICKER_DOTS = ['#F472B6', '#FBBF24', '#22D3EE', '#A78BFA'];
const STICKER_SPOTS = [
  'top-[3%] -right-4 rotate-6',
  'bottom-[24%] -right-6 -rotate-[5deg]',
  'top-[26%] -left-6 -rotate-[8deg]',
  'top-[52%] -left-8 rotate-[5deg]',
];

export default function PortraitCollage({ photo, badge, stickers }) {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const drift = useTransform(scrollY, [0, 700], [0, -70]);
  const loop = (duration, extra = {}) =>
    reduceMotion ? undefined : { duration, repeat: Infinity, ease: 'linear', ...extra };

  return (
    <motion.div
      className="relative aspect-[4/5] w-full max-w-[470px]"
      style={{ y: reduceMotion ? 0 : drift }}
      initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {/* Phase-space image, tilted behind the portrait */}
      <div className="absolute inset-0 rotate-[5deg] overflow-hidden rounded-[36px] border border-white/12 opacity-85">
        <motion.img
          src={quadrature}
          alt=""
          className="size-full object-cover"
          animate={reduceMotion ? undefined : { scale: [1.05, 1.2], rotate: [0, 10] }}
          transition={reduceMotion ? undefined : { duration: 24, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />
      </div>

      {/* Portrait with spinning gradient ring */}
      <div className="absolute inset-[5%_7%_7%_5%] overflow-hidden rounded-[32px] shadow-[0_40px_90px_-30px_rgba(124,92,255,.85)]">
        <motion.span
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 aspect-square w-[170%] -translate-x-1/2 -translate-y-1/2"
          style={{ background: 'conic-gradient(#7C5CFF, #22D3EE, #F472B6, #FBBF24, #7C5CFF)' }}
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={loop(6)}
        />
        <div className="absolute inset-[5px] overflow-hidden rounded-[28px] bg-panel">
          {photo ? (
            <img src={photo} alt="Portrait of Nitish" className="size-full object-cover" />
          ) : (
            <div className="flex size-full flex-col items-center justify-center gap-3 text-muted">
              <Icon name="user" size={64} strokeWidth={1.2} />
              <span className="font-display text-xl font-bold text-ink">Your portrait</span>
              <span className="font-mono text-xs">3 : 4 · set PROFILE.photo</span>
            </div>
          )}
        </div>
      </div>

      {/* Rotating text badge */}
      <div className="glass absolute bottom-[8%] -left-7 grid size-[136px] place-items-center rounded-full shadow-[0_20px_50px_-20px_rgba(0,0,0,.6)]">
        <motion.svg
          aria-hidden="true"
          viewBox="0 0 200 200"
          className="absolute inset-1.5 size-[calc(100%-12px)]"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={loop(18)}
        >
          <defs>
            <path id="badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
          </defs>
          <text className="font-mono" fontSize="15.5" letterSpacing="3" fontWeight="500" fill="#E3E6FA">
            <textPath href="#badge-circle">{badge}</textPath>
          </text>
        </motion.svg>
        <span className="grid size-[52px] place-items-center rounded-full bg-linear-to-br from-violet to-cyan text-on-accent">
          <Icon name="sparkle" size={24} />
        </span>
      </div>

      {/* Floating stickers */}
      {stickers.map((label, i) => (
        <motion.span
          key={label}
          className={`glass chip absolute text-sm ${STICKER_SPOTS[i % STICKER_SPOTS.length]}`}
          animate={reduceMotion ? undefined : { y: [0, -14, 0] }}
          transition={reduceMotion ? undefined : { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: i * 1.5 }}
        >
          <span className="size-2.5 rounded-full" style={{ background: STICKER_DOTS[i % STICKER_DOTS.length] }} />
          {label}
        </motion.span>
      ))}
    </motion.div>
  );
}
