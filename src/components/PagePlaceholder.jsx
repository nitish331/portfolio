import { motion } from 'framer-motion';

// Temporary page body used until each page is built (Steps 4–8).
export default function PagePlaceholder({ eyebrow, title, accent, description, step, children }) {
  return (
    <section className="wrap flex min-h-[70vh] flex-col items-start justify-center gap-6 py-24">
      <motion.span
        className="glass chip"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        {eyebrow}
      </motion.span>
      <h1 className="font-display text-[clamp(52px,9.6vw,140px)] leading-[0.92] font-extrabold tracking-[-0.055em]">
        {title} <span className="gradient-text">{accent}</span>
      </h1>
      <p className="max-w-xl text-lg leading-relaxed text-muted">{description}</p>
      <span className="font-mono text-xs tracking-[0.08em] text-soft uppercase">Full page arrives in Step {step}</span>
      {children}
    </section>
  );
}
