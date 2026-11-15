import { motion } from 'framer-motion';
import Button from '../../components/ui/Button.jsx';
import { Reveal } from '../../components/ui/Reveal.jsx';
import { RESEARCH } from '../../data/profile.js';
import quadrature from '../../assets/quadrature.webp';

export default function Research() {
  const { eyebrow, title, description, pipeline, caption } = RESEARCH;

  return (
    <section className="wrap relative pt-36">
      <Reveal className="glass flex flex-wrap items-center gap-12 overflow-hidden rounded-[36px] bg-panel/60 p-[clamp(28px,5vw,64px)]">
        <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-5.5">
          <span className="chip self-start bg-amber/14 text-amber-light">{eyebrow}</span>
          <h2 className="font-display text-[clamp(36px,4.8vw,62px)] leading-[1.02] font-extrabold tracking-[-0.045em]">
            {title.before} <span className="gradient-text">{title.accent}</span>
          </h2>
          <p className="text-[17px] leading-[1.75] text-muted">{description}</p>
          <ol className="flex flex-wrap items-center gap-2" aria-label="Post-processing pipeline">
            {pipeline.map((step, i) => {
              const last = i === pipeline.length - 1;
              return (
                <li key={step} className="flex items-center gap-2">
                  <span className={last ? 'chip bg-linear-to-br from-violet to-cyan text-on-accent' : 'glass chip'}>{step}</span>
                  {!last && <span aria-hidden="true" className="text-cyan">→</span>}
                </li>
              );
            })}
          </ol>
          <Button to="/journey" variant="glass" icon="arrowRight" className="self-start">Read the research story</Button>
        </div>
        <figure className="m-0 min-w-0 flex-[1_1_420px]">
          <div className="aspect-[1.4/1] overflow-hidden rounded-[28px] border border-white/14">
            <motion.img
              src={quadrature}
              alt="Scatter of Gaussian-modulated coherent states in phase space, coloured by angle"
              className="size-full object-cover"
              animate={{ scale: [1.05, 1.2], rotate: [0, 10] }}
              transition={{ duration: 24, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            />
          </div>
          <figcaption className="mt-3 font-mono text-xs text-muted">{caption}</figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
