import { motion } from 'framer-motion';
import Icon from '../ui/Icon.jsx';
import { pop } from './pop.js';

const BARS = [
  { h: 40 },
  { h: 65 },
  { h: 50 },
  { h: 85, fill: 'linear-gradient(#22D3EE,#7C5CFF)' },
  { h: 60 },
  { h: 72 },
  { h: 95, fill: 'linear-gradient(#F472B6,#7C5CFF)' },
];

export default function FinVerseMockup() {
  return (
    <div aria-hidden="true" className="relative w-full max-w-[480px]">
      <div className="glass overflow-hidden rounded-[18px] bg-panel/60">
        <div className="flex gap-1.5 border-b border-white/10 px-3.5 py-3">
          <span className="size-2.5 rounded-full bg-pink" />
          <span className="size-2.5 rounded-full bg-amber" />
          <span className="size-2.5 rounded-full bg-mint" />
        </div>
        <div className="flex flex-col gap-3.5 p-[22px]">
          <span className="text-[13px] text-muted">Total balance</span>
          <span className="font-display text-[34px] font-extrabold tracking-[-0.03em]">
            ₹ 2,48,560<span className="text-[#6B7194]">.00</span>
          </span>
          <div className="flex h-[100px] items-end gap-2">
            {BARS.map((bar, i) => (
              <motion.span
                key={i}
                className="flex-1 origin-bottom rounded-md"
                style={{ height: `${bar.h}%`, background: bar.fill ?? 'rgba(255,255,255,.14)' }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.2 + i * 0.07, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {['Transfer', 'Deposit', 'Fixed deposit', 'Loan'].map((label) => (
              <span key={label} className="tag">{label}</span>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        className="absolute -right-3.5 -bottom-8 flex aspect-[1.586/1] w-[220px] -rotate-6 flex-col justify-between rounded-2xl p-4 text-on-accent shadow-[0_30px_50px_-20px_rgba(0,0,0,.7)]"
        style={{ background: 'linear-gradient(135deg,#7C5CFF,#22D3EE 60%,#F472B6)' }}
        {...pop(0.6)}
      >
        <span className="font-display text-[15px] font-extrabold tracking-[0.04em]">FINVERSE</span>
        <span className="h-6 w-[34px] rounded-[5px] bg-amber" />
        <span className="font-mono text-[13px] tracking-[0.12em]">•••• 4821</span>
      </motion.div>

      <motion.div
        className="glass absolute -top-6 -left-4 flex items-center gap-2 rounded-[14px] bg-panel/85 px-3.5 py-2.5 text-[13px] font-bold"
        {...pop(1)}
      >
        <span className="grid size-[22px] place-items-center rounded-full bg-mint text-on-accent">
          <Icon name="check" size={12} strokeWidth={3} />
        </span>
        Transfer successful
      </motion.div>
    </div>
  );
}
