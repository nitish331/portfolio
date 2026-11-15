import { motion } from 'framer-motion';
import Button from '../../components/ui/Button.jsx';
import { Reveal } from '../../components/ui/Reveal.jsx';

export default function JourneyCta() {
  return (
    <section className="wrap relative">
      <Reveal className="gradient-border relative flex flex-wrap items-center justify-between gap-7 overflow-hidden rounded-[36px] p-[clamp(32px,6vw,72px)]">
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[240px] -left-[160px] size-[480px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(124,92,255,.5), transparent 65%)' }}
          animate={{ x: [0, 120, 0], y: [0, -60, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <h2 className="relative max-w-[680px] font-display text-[clamp(34px,4.6vw,60px)] leading-[1.02] font-extrabold tracking-[-0.045em]">
          The next chapter could be <span className="gradient-text">at your team.</span>
        </h2>
        <div className="relative flex flex-wrap gap-2.5">
          <Button to="/#contact">Get in touch</Button>
          <Button to="/achievements" variant="glass" icon="arrowRight">See achievements</Button>
        </div>
      </Reveal>
    </section>
  );
}
