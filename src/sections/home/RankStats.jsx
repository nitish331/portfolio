import CountUp from '../../components/ui/CountUp.jsx';
import { cardHover } from '../../components/ui/GlassCard.jsx';
import { RevealGroup, RevealItem } from '../../components/ui/Reveal.jsx';
import SectionHeading from '../../components/ui/SectionHeading.jsx';
import { accent } from '../../data/accents.js';
import { HOME_STATS } from '../../data/achievements.js';
import airyRings from '../../assets/airy-rings.webp';

// "Ranked among India's best." with four tiles that count up on scroll.
export default function RankStats() {
  return (
    <section className="wrap relative flex flex-col gap-10 pt-28">
      <SectionHeading
        title="Ranked among India's"
        accent="best."
        description="National entrance and fellowship exams, each written against thousands of candidates."
      />
      <RevealGroup className="grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-4">
        {HOME_STATS.map((stat) => (
          <RevealItem
            key={stat.id}
            className={`${stat.featured ? 'gradient-border' : 'glass'} relative flex min-h-[220px] flex-col justify-between gap-5 overflow-hidden rounded-[26px] p-7 ${cardHover}`}
          >
            {stat.featured ? (
              <img
                src={airyRings}
                alt=""
                className="absolute -right-[70px] -bottom-[70px] size-[240px] animate-[spin_40s_linear_infinite] rounded-full object-cover opacity-75"
              />
            ) : (
              <span
                aria-hidden="true"
                className="absolute -top-10 -right-10 size-40 rounded-full"
                style={{ background: `radial-gradient(circle, ${accent(stat.accent).glow}, transparent 70%)` }}
              />
            )}
            <span className={`relative font-mono text-xs tracking-[0.08em] uppercase ${stat.featured ? 'text-amber' : 'text-soft'}`}>
              {stat.eyebrow}
            </span>
            <div className="relative flex flex-col gap-1">
              <CountUp
                to={stat.value}
                prefix={stat.prefix}
                decimals={stat.decimals}
                className={`${stat.featured ? '' : 'gradient-text'} font-display text-[76px] leading-[0.9] font-extrabold tracking-[-0.05em]`}
              />
              <span className="text-[15px] font-semibold text-muted">{stat.label}</span>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
