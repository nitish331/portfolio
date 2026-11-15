import { motion } from 'framer-motion';
import quadrature from '../../assets/quadrature.webp';
import { draw, pop } from './pop.js';

export default function QkdMockup() {
  return (
    <div className="relative w-full max-w-[520px]">
      <div className="aspect-[1.4/1] overflow-hidden rounded-3xl border border-white/14">
        <motion.img
          src={quadrature}
          alt="Gaussian-modulated coherent states in phase space"
          className="size-full object-cover"
          animate={{ scale: [1.05, 1.2], rotate: [0, 10] }}
          transition={{ duration: 24, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />
      </div>
      <motion.div
        aria-hidden="true"
        className="glass absolute -right-3 -bottom-6 flex w-[220px] flex-col gap-1.5 rounded-[18px] bg-panel/80 p-4"
        {...pop(0.5)}
      >
        <span className="font-mono text-[11px] text-muted">Secure key rate vs distance</span>
        <svg viewBox="0 0 200 70" className="h-16 w-full">
          <motion.path d="M4 10 C 50 14, 90 26, 120 40 S 180 62, 196 66" fill="none" stroke="#22D3EE" strokeWidth="3" strokeLinecap="round" {...draw(0.7)} />
          <path d="M4 10 C 50 18, 80 36, 110 52 S 160 66, 176 68" fill="none" stroke="#6B7194" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
        <span className="text-xs font-bold">
          <span className="text-cyan">━</span> ML-assisted <span className="text-[#6B7194]">┅</span> baseline
        </span>
      </motion.div>
    </div>
  );
}
