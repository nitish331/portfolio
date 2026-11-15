import { motion } from 'framer-motion';
import Button from '../../components/ui/Button.jsx';
import { Reveal } from '../../components/ui/Reveal.jsx';

export default function AchievementsCta() {
  return (
    <section className="wrap relative">
      <Reveal className="gradient-border relative flex flex-wrap items-center justify-between gap-7 overflow-hidden rounded-[36px] p-[clamp(32px,6vw,72px)]">
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute -top-[240px] -right-[180px] size-[520px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(124,92,255,.5), transparent 65%)' }}
          animate={{ x: [0, -100, 0], y: [0, 80, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <h2 className="relative max-w-[680px] font-display text-[clamp(34px,4.6vw,60px)] leading-[1.02] font-extrabold tracking-[-0.045em]">
          Let's add <span className="gradient-text">your project</span> to this page.
        </h2>
        <Button to="/#contact" icon="arrowRight" className="relative min-h-[60px] px-[30px] text-[17px]">
          Get in touch
        </Button>
      </Reveal>
    </section>
  );
}
