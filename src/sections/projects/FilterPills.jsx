import { LayoutGroup, motion } from 'framer-motion';

// Pill buttons; the gradient highlight slides to the active one (shared layoutId).
export default function FilterPills({ filters, active, counts, onChange }) {
  return (
    <LayoutGroup id="project-filters">
      <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2.5">
        {filters.map((filter) => {
          const selected = filter.id === active;
          return (
            <button
              key={filter.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(filter.id)}
              className={`relative isolate inline-flex min-h-12 items-center gap-2 rounded-full border px-5 text-[15px] font-bold transition-[translate,color,border-color] duration-200 hover:-translate-y-0.5 ${
                selected ? 'border-transparent text-on-accent' : 'border-white/14 bg-white/6 text-[#E3E6FA]'
              }`}
            >
              {selected && (
                <motion.span
                  layoutId="active-filter"
                  className="absolute inset-0 -z-10 rounded-full bg-linear-to-br from-violet to-cyan shadow-[0_10px_30px_-10px_rgba(124,92,255,.8)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              {filter.label}
              <span className={`rounded-full px-2 py-0.5 font-mono text-xs ${selected ? 'bg-on-accent/20' : 'bg-white/10'}`}>
                {counts[filter.id]}
              </span>
            </button>
          );
        })}
      </div>
    </LayoutGroup>
  );
}
