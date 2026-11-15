import { motion } from 'framer-motion';
import { pop } from './pop.js';

const LINES = [
  { w: '100%' },
  { w: '92%' },
  { w: '96%', hl: true },
  { w: '74%', hl: true },
  { w: '88%' },
  { w: '94%' },
];

export default function ResearchMateMockup() {
  return (
    <div aria-hidden="true" className="relative min-h-[340px] w-full max-w-[480px]">
      <div className="glass absolute top-2.5 left-0 flex h-[320px] w-[58%] -rotate-5 flex-col gap-[9px] rounded-2xl bg-panel/60 p-5">
        <span className="font-mono text-[11px] text-muted">research-paper.pdf · p.3</span>
        <span className="h-3 w-4/5 rounded bg-ink" />
        {LINES.map((line, i) => (
          <span
            key={i}
            className="h-[7px] rounded"
            style={{ width: line.w, background: line.hl ? 'rgba(34,211,238,.6)' : 'rgba(255,255,255,.18)' }}
          />
        ))}
      </div>

      <div className="absolute top-10 right-0 flex w-[60%] flex-col gap-2.5">
        <motion.span
          className="self-end rounded-[18px_18px_4px_18px] bg-linear-to-br from-violet to-cyan px-[15px] py-[11px] text-sm font-bold text-on-accent"
          {...pop(0.3)}
        >
          Summarise section 3
        </motion.span>
        <motion.span className="glass rounded-[18px_18px_18px_4px] bg-panel/70 px-4 py-3.5 text-sm leading-normal" {...pop(0.8)}>
          Here are the three key findings, with sources{' '}
          <span className="rounded-md bg-cyan/20 px-1.5 py-0.5 font-mono text-[11px]">p.3</span>{' '}
          <span className="rounded-md bg-cyan/20 px-1.5 py-0.5 font-mono text-[11px]">p.7</span>
        </motion.span>
        <motion.span
          className="self-end rounded-[18px_18px_4px_18px] bg-linear-to-br from-violet to-cyan px-[15px] py-[11px] text-sm font-bold text-on-accent"
          {...pop(1.3)}
        >
          Explain it simply
        </motion.span>
        <motion.span className="glass flex gap-[5px] self-start rounded-[18px] px-4 py-3.5 text-ink" {...pop(1.8)}>
          <span className="typing-dot" />
          <span className="typing-dot" style={{ animationDelay: '.2s' }} />
          <span className="typing-dot" style={{ animationDelay: '.4s' }} />
        </motion.span>
      </div>
    </div>
  );
}
