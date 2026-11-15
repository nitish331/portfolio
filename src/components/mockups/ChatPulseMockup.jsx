import { motion } from 'framer-motion';
import airyRings from '../../assets/airy-rings.webp';
import { pop } from './pop.js';

export default function ChatPulseMockup() {
  return (
    <div aria-hidden="true" className="flex items-end gap-5">
      <div className="w-[250px] max-w-full -rotate-4 rounded-[34px] border border-white/14 bg-[#05070F] p-2.5 shadow-[0_30px_60px_-30px_rgba(0,0,0,.7)]">
        <div className="flex min-h-[340px] flex-col gap-[9px] rounded-[26px] bg-panel p-4">
          <div className="flex items-center gap-2 border-b border-white/10 pb-2.5">
            <span className="size-[30px] rounded-full bg-linear-to-br from-amber to-pink" />
            <span className="flex flex-col">
              <span className="text-[13px] font-bold">Team chat</span>
              <span className="text-[11px] text-[#6EE7B7]">● online</span>
            </span>
          </div>
          <motion.span className="self-start rounded-[14px_14px_14px_4px] bg-white/8 px-3 py-[9px] text-xs" {...pop(0.3)}>
            Deployed the new build
          </motion.span>
          <motion.span
            className="self-end rounded-[14px_14px_4px_14px] bg-linear-to-br from-pink to-violet px-3 py-[9px] text-xs font-semibold text-white"
            {...pop(0.8)}
          >
            Nice! Sending screenshots
          </motion.span>
          <motion.span className="h-20 w-[130px] self-end overflow-hidden rounded-xl" {...pop(1.3)}>
            <img src={airyRings} alt="" className="size-full object-cover" />
          </motion.span>
          <motion.span className="flex gap-1 self-start rounded-[14px] bg-white/8 px-[13px] py-[11px] text-ink" {...pop(1.8)}>
            <span className="typing-dot size-1.5" />
            <span className="typing-dot size-1.5" style={{ animationDelay: '.2s' }} />
            <span className="typing-dot size-1.5" style={{ animationDelay: '.4s' }} />
          </motion.span>
        </div>
      </div>
      <motion.div className="glass mb-10 flex rotate-5 flex-col gap-1.5 rounded-[18px] px-4 py-3.5 max-sm:hidden" {...pop(1.1)}>
        <span className="font-mono text-[11px] text-muted">socket.io</span>
        <span className="text-sm font-bold">message:new</span>
        <span className="text-xs font-bold text-[#6EE7B7]">delivered</span>
      </motion.div>
    </div>
  );
}
