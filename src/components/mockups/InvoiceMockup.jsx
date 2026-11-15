import { motion } from 'framer-motion';
import Icon from '../ui/Icon.jsx';
import { pop } from './pop.js';

const LINES = [
  { item: 'Cloud hosting · 12 mo', amount: '6,000.00' },
  { item: 'Support plan', amount: '2,500.00' },
  { item: 'Setup fee', amount: '1,500.00' },
];

const JSON_ROWS = [
  ['invoice_no', '"INV-0427"'],
  ['gstin', '"07AAB…1Z5"'],
  ['subtotal', '10000'],
  ['gst_18', '1800'],
  ['total', '11800'],
];

const CHECKS = ['Line math', 'Tax totals', 'GSTIN checksum', 'Amount in words'];

export default function InvoiceMockup() {
  return (
    <div aria-hidden="true" className="relative min-h-[430px] w-full max-w-[500px]">
      {/* The invoice "photo" */}
      <div className="absolute top-3 left-0 flex w-[56%] -rotate-4 flex-col gap-2.5 rounded-xl bg-[#F7F5EE] p-4 text-panel shadow-[0_30px_50px_-24px_rgba(0,0,0,.6)]">
        <div className="flex items-baseline justify-between">
          <span className="font-display text-sm font-extrabold tracking-[0.06em]">TAX INVOICE</span>
          <span className="font-mono text-[9px] text-[#5E6370]">#0427</span>
        </div>
        <span className="font-mono text-[9px] text-[#5E6370]">GSTIN 07AAB…1Z5</span>
        <div className="flex flex-col gap-1.5 border-y border-[#E2DED3] py-2">
          {LINES.map((line) => (
            <div key={line.item} className="flex justify-between text-[10px]">
              <span>{line.item}</span>
              <span className="font-mono">{line.amount}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between text-[10px] text-[#5E6370]">
          <span>GST 18%</span>
          <span className="font-mono">1,800.00</span>
        </div>
        <div className="flex justify-between text-xs font-extrabold">
          <span>Total</span>
          <span className="font-mono">₹ 11,800.00</span>
        </div>
        <span className="text-[8px] text-[#5E6370] italic">Rupees eleven thousand eight hundred only</span>
        {/* scan line */}
        <motion.span
          className="pointer-events-none absolute inset-x-0 h-10 bg-linear-to-b from-transparent via-amber/40 to-transparent"
          initial={{ top: '0%' }}
          animate={{ top: ['0%', '85%', '0%'] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Extracted JSON + checks */}
      <motion.div className="absolute top-0 right-0 flex w-[54%] flex-col gap-3 rounded-2xl border border-white/12 bg-panel/95 p-4 shadow-[0_24px_50px_-20px_rgba(0,0,0,.7)]" {...pop(0.4)}>
        <span className="flex items-center gap-2 font-mono text-[11px] text-muted">
          <span className="size-2 rounded-full bg-amber" /> gemini → zod schema
        </span>
        <pre className="m-0 font-mono text-[11px] leading-[1.6] whitespace-pre-wrap">
          {'{\n'}
          {JSON_ROWS.map(([key, value], i) => (
            <span key={key}>
              {'  '}
              <span className="text-violet-light">"{key}"</span>: <span className="text-cyan-light">{value}</span>
              {i < JSON_ROWS.length - 1 ? ',' : ''}
              {'\n'}
            </span>
          ))}
          {'}'}
        </pre>
      </motion.div>

      <div className="absolute right-0 bottom-0 flex w-[50%] flex-col gap-1.5">
        {CHECKS.map((check, i) => (
          <motion.span
            key={check}
            className="flex items-center gap-2 rounded-xl border border-white/12 bg-panel px-3 py-2 text-xs font-semibold"
            {...pop(0.9 + i * 0.25)}
          >
            <span className="grid size-[18px] place-items-center rounded-full bg-mint text-on-accent">
              <Icon name="check" size={10} strokeWidth={3.2} />
            </span>
            {check}
          </motion.span>
        ))}
        <motion.span
          className="self-start rounded-full bg-linear-to-r from-amber to-pink px-3 py-1.5 text-xs font-extrabold text-on-accent"
          {...pop(2.1)}
        >
          15 / 15 checks passed
        </motion.span>
      </div>
    </div>
  );
}
