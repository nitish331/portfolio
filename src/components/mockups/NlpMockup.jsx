import { motion } from 'framer-motion';
import { pop } from './pop.js';

const SENTENCES = [
  { label: 'BACKGROUND', color: '#A78BFA', widths: ['92%', '70%'] },
  { label: 'OBJECTIVE', color: '#67E8F9', widths: ['85%'] },
  { label: 'METHODS', color: '#22D3EE', widths: ['96%', '88%', '60%'] },
  { label: 'RESULTS', color: '#34D399', widths: ['90%', '78%'] },
  { label: 'CONCLUSIONS', color: '#F472B6', widths: ['82%'] },
];

const METRICS = [
  { label: 'Accuracy', value: '84%', fill: 0.84 },
  { label: 'F1-score', value: '0.82', fill: 0.82 },
];

export default function NlpMockup() {
  return (
    <div aria-hidden="true" className="flex w-full max-w-[500px] flex-col gap-3">
      <div className="glass flex flex-col gap-3 rounded-2xl bg-panel/70 p-5">
        <span className="font-mono text-[11px] text-muted">pubmed_abstract.txt · sentence labels</span>
        {SENTENCES.map((sentence, i) => (
          <div key={sentence.label} className="flex items-start gap-3">
            <motion.span
              className="mt-px w-[92px] flex-none rounded-md px-1.5 py-0.5 text-center font-mono text-[9px] font-bold text-on-accent"
              style={{ background: sentence.color }}
              {...pop(0.25 + i * 0.22)}
            >
              {sentence.label}
            </motion.span>
            <span className="flex flex-1 flex-col gap-1.5 pt-1">
              {sentence.widths.map((width, j) => (
                <span key={j} className="h-[6px] rounded bg-white/18" style={{ width }} />
              ))}
            </span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        {METRICS.map((metric, i) => (
          <motion.div key={metric.label} className="glass flex flex-col gap-2 rounded-2xl bg-panel/70 p-4" {...pop(1.4 + i * 0.2)}>
            <span className="flex items-baseline justify-between">
              <span className="text-xs text-muted">{metric.label}</span>
              <span className="gradient-text font-display text-2xl font-extrabold">{metric.value}</span>
            </span>
            <span className="h-1.5 overflow-hidden rounded-full bg-white/10">
              <motion.span
                className="block h-full origin-left rounded-full bg-linear-to-r from-mint to-cyan"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: metric.fill }}
                transition={{ delay: 1.6 + i * 0.2, duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
              />
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
