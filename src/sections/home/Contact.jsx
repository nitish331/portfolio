import { motion } from 'framer-motion';
import Button from '../../components/ui/Button.jsx';
import { Reveal } from '../../components/ui/Reveal.jsx';
import { SITE } from '../../data/site.js';

export default function Contact() {
  return (
    <section id="contact" className="wrap relative pt-36">
      <Reveal className="gradient-border relative flex flex-col gap-6.5 overflow-hidden rounded-[40px] p-[clamp(36px,7vw,96px)]">
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute -top-[220px] -right-[180px] size-[560px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(124,92,255,.5), transparent 65%)' }}
          animate={{ x: [0, -100, 0], y: [0, 80, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[220px] -left-[160px] size-[460px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(34,211,238,.35), transparent 65%)' }}
          animate={{ x: [0, 60, 0], y: [0, -80, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Spinning "SAY HELLO" badge */}
        <div aria-hidden="true" className="absolute right-[clamp(20px,6vw,80px)] bottom-[clamp(20px,5vw,64px)] size-[150px] max-md:hidden">
          <motion.svg
            viewBox="0 0 200 200"
            className="size-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          >
            <defs>
              <path id="hello-circle" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
            </defs>
            <text className="font-mono" fontSize="16" letterSpacing="4" fontWeight="500" fill="#E3E6FA">
              <textPath href="#hello-circle">SAY HELLO • SAY HELLO • SAY HELLO • </textPath>
            </text>
          </motion.svg>
          <span className="absolute inset-[50px] rounded-full" style={{ background: 'conic-gradient(#7C5CFF, #22D3EE, #F472B6, #7C5CFF)' }} />
        </div>

        <span className="glass chip relative self-start">Contact</span>
        <h2 className="relative max-w-[900px] font-display text-[clamp(44px,7.4vw,104px)] leading-[0.95] font-extrabold tracking-[-0.05em]">
          Let's build something <span className="gradient-text">brilliant.</span>
        </h2>
        <p className="relative max-w-[520px] text-lg leading-relaxed text-muted">
          Hiring for software, GenAI or ML, or just want to talk tech? My inbox is open.
        </p>
        <div className="relative flex flex-wrap gap-3">
          <Button href={`mailto:${SITE.email}`} icon="mail" iconPosition="left">{SITE.email}</Button>
          <Button href={SITE.linkedin} variant="glass" icon="linkedin" iconPosition="left">LinkedIn</Button>
          <Button href={SITE.github} variant="glass" icon="github" iconPosition="left">GitHub</Button>
        </div>
      </Reveal>
    </section>
  );
}
