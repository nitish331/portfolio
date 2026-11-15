import { motion, useReducedMotion } from 'framer-motion';
import Button from '../../components/ui/Button.jsx';
import Icon from '../../components/ui/Icon.jsx';
import { PROFILE } from '../../data/profile.js';
import { SITE } from '../../data/site.js';
import PortraitCollage from './PortraitCollage.jsx';
import RoleTicker from './RoleTicker.jsx';

const EASE = [0.2, 0.8, 0.2, 1];

const SOCIALS = [
  { label: 'GitHub', icon: 'github', href: SITE.github },
  { label: 'LinkedIn', icon: 'linkedin', href: SITE.linkedin },
  { label: 'Email', icon: 'mail', href: `mailto:${SITE.email}` },
];

// One headline line that slides up out of a mask.
function HeadlineLine({ delay, children }) {
  const reduceMotion = useReducedMotion();
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className="inline-block"
        initial={reduceMotion ? false : { y: '110%' }}
        animate={{ y: '0%' }}
        transition={{ delay, duration: 1, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const rise = (delay) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 30, filter: 'blur(8px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { delay, duration: 0.9, ease: EASE },
  });
  const { headline } = PROFILE;

  return (
    <section className="wrap relative flex flex-wrap items-center gap-16 pt-[clamp(48px,8vw,100px)] pb-[clamp(72px,9vw,120px)]">
      <div className="flex min-w-0 flex-[1_1_560px] flex-col gap-6.5">
        <motion.span className="glass chip self-start" {...rise(0)}>
          <span className="size-2.5 animate-ping-soft rounded-full bg-mint" />
          {PROFILE.status}
        </motion.span>

        <h1 className="font-display text-[clamp(54px,8vw,108px)] leading-[0.95] font-extrabold tracking-[-0.05em]">
          <HeadlineLine delay={0.05}>{headline.before}</HeadlineLine>
          <HeadlineLine delay={0.17}>
            <span className="relative inline-block">
              <span className="gradient-text pr-[0.04em]">{headline.accent}</span>
              <svg aria-hidden="true" viewBox="0 0 300 30" preserveAspectRatio="none" className="absolute bottom-0 left-0 h-[0.2em] w-full">
                <defs>
                  <linearGradient id="squiggle-gradient" x1="0" x2="1">
                    <stop offset="0" stopColor="#7C5CFF" />
                    <stop offset=".5" stopColor="#22D3EE" />
                    <stop offset="1" stopColor="#F472B6" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M4 20 C 60 4, 110 28, 160 14 S 260 6, 296 18"
                  stroke="url(#squiggle-gradient)"
                  strokeWidth="7"
                  fill="none"
                  strokeLinecap="round"
                  initial={reduceMotion ? false : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1, duration: 1.4, ease: [0.6, 0, 0.2, 1] }}
                />
              </svg>
            </span>
          </HeadlineLine>
          <HeadlineLine delay={0.29}>{headline.after}</HeadlineLine>
        </h1>

        <motion.p className="text-[clamp(20px,2.2vw,26px)] leading-snug font-bold" {...rise(0.35)}>
          Hi, I'm {PROFILE.name} — <RoleTicker roles={PROFILE.roles} />
        </motion.p>

        <motion.p className="max-w-[580px] text-lg leading-[1.75] text-muted" {...rise(0.5)}>
          {PROFILE.intro}
        </motion.p>

        <motion.div className="flex flex-wrap gap-3" {...rise(0.65)}>
          <Button to="/projects" icon="arrowRight">Explore my work</Button>
          <Button href={SITE.resume} variant="glass" icon="download">Download résumé</Button>
        </motion.div>

        <motion.div className="flex flex-wrap items-center gap-2.5" {...rise(0.8)}>
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="glass grid size-12 place-items-center rounded-full text-[#E3E6FA] transition-[translate,rotate,background-color] duration-250 hover:-translate-y-1 hover:-rotate-8 hover:bg-white/14"
            >
              <Icon name={social.icon} size={20} />
            </a>
          ))}
          <span className="pl-1.5 text-sm text-muted">{SITE.email}</span>
        </motion.div>
      </div>

      <div className="flex min-w-0 flex-[0_1_470px] justify-center">
        <PortraitCollage photo={PROFILE.photo} badge={PROFILE.badge} stickers={PROFILE.stickers} />
      </div>
    </section>
  );
}
