import { motion } from 'framer-motion';
import { draw } from './pop.js';

const ROWS = [
  { cabin: '001', status: 'Checked in', className: 'bg-mint/18 text-[#6EE7B7]' },
  { cabin: '004', status: 'Unconfirmed', className: 'bg-violet-light/20 text-[#C4B5FD]' },
  { cabin: '007', status: 'Checked out', className: 'bg-white/10 text-soft' },
];

export default function StayEaseMockup() {
  return (
    <div aria-hidden="true" className="glass flex w-full max-w-[500px] overflow-hidden rounded-[18px] bg-panel/60">
      <div className="flex w-[60px] flex-none flex-col items-center gap-3.5 bg-black/30 py-[18px]">
        <span className="size-[26px] rounded-lg bg-linear-to-br from-amber to-pink" />
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-1.5 w-[22px] rounded-sm bg-white/20" />
        ))}
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap gap-2.5">
          <span className="flex-[1_1_100px] rounded-xl bg-amber/18 p-3 text-xs font-bold">Check-ins today</span>
          <span className="flex-[1_1_100px] rounded-xl bg-cyan/18 p-3 text-xs font-bold">Occupancy</span>
          <span className="flex-[1_1_100px] rounded-xl bg-violet/22 p-3 text-xs font-bold">Sales</span>
        </div>
        <svg viewBox="0 0 300 80" className="h-[72px] w-full">
          <motion.path
            d="M0 60 C 30 50, 50 20, 80 30 S 130 70, 160 45 S 220 10, 250 25 S 290 30, 300 15"
            fill="none"
            stroke="#F472B6"
            strokeWidth="3"
            strokeLinecap="round"
            {...draw(0.3)}
          />
        </svg>
        {ROWS.map((row, i) => (
          <div key={row.cabin} className={`flex items-center gap-2.5 py-[9px] text-[13px] ${i < ROWS.length - 1 ? 'border-b border-white/8' : ''}`}>
            <span className="w-[42px] font-mono">{row.cabin}</span>
            <span className="h-2 flex-1 rounded bg-white/12" />
            <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${row.className}`}>{row.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
