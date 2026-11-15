import { motion } from 'framer-motion';
import Icon from '../../components/ui/Icon.jsx';
import { Reveal, RevealGroup, RevealItem } from '../../components/ui/Reveal.jsx';
import { accent } from '../../data/accents.js';
import { ABOUT } from '../../data/profile.js';
import waveLines from '../../assets/wave-lines.webp';

export default function About() {
  const { title, paragraphs, facts, highlight, candidPhoto } = ABOUT;

  return (
    <section className="wrap relative flex flex-wrap items-center gap-16 pt-36">
      <Reveal className="relative min-w-0 flex-[1_1_420px]">
        <div className="gradient-border relative aspect-[4/5] overflow-hidden rounded-[32px]">
          {candidPhoto ? (
            <img src={candidPhoto} alt="Nitish" className="absolute inset-0 size-full object-cover" />
          ) : (
            <>
              <img
                src={waveLines}
                alt=""
                className="absolute inset-0 size-full scale-160 -rotate-12 object-cover opacity-90"
                style={{ filter: 'invert(1) hue-rotate(180deg) saturate(1.4)' }}
              />
              <div className="glass absolute inset-6 flex flex-col items-center justify-center gap-2 rounded-[22px] border-dashed p-5 text-center">
                <Icon name="image" size={40} strokeWidth={1.5} />
                <span className="font-display text-xl font-bold">Candid photo</span>
                <span className="text-sm text-soft">Campus, lab or on stage</span>
              </div>
            </>
          )}
        </div>
        <motion.div
          className="glass absolute -right-3 -bottom-7 flex max-w-[260px] -rotate-3 flex-col gap-1 rounded-[22px] bg-panel/75 px-[22px] py-5"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="gradient-text font-display text-[40px] font-extrabold tracking-[-0.04em]">{highlight.value}</span>
          <span className="text-[15px] leading-snug font-semibold">{highlight.label}</span>
        </motion.div>
      </Reveal>

      <Reveal delay={0.1} className="flex min-w-0 flex-[1_1_520px] flex-col gap-5.5">
        <span className="glass chip self-start">About me</span>
        <h2 className="font-display text-[clamp(36px,4.8vw,62px)] leading-[1.02] font-extrabold tracking-[-0.045em]">
          {title.before} <span className="gradient-text">{title.accent}</span> {title.after}
        </h2>
        {paragraphs.map((text) => (
          <p key={text.slice(0, 24)} className="text-lg leading-[1.75] text-muted">
            {text}
          </p>
        ))}
        <RevealGroup className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 pt-1.5" stagger={0.08}>
          {facts.map((fact) => (
            <RevealItem key={fact.label} className="glass flex items-center gap-3.5 rounded-[18px] p-4">
              <span className="grid size-11 flex-none place-items-center rounded-xl text-on-accent" style={{ background: accent(fact.accent).gradient }}>
                <Icon name={fact.icon} size={22} strokeWidth={2} />
              </span>
              <span className="flex flex-col">
                <span className="text-[13px] text-muted">{fact.label}</span>
                <span className="font-bold">{fact.value}</span>
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </Reveal>
    </section>
  );
}
