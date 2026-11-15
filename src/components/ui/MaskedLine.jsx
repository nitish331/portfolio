import { motion } from 'framer-motion';

// One headline line that slides up out of an invisible mask.
// <h1><MaskedLine>I build</MaskedLine><MaskedLine delay={0.12}>…</MaskedLine></h1>
export default function MaskedLine({ delay = 0, children }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className="inline-block"
        initial={{ y: '110%' }}
        animate={{ y: '0%' }}
        transition={{ delay, duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}
