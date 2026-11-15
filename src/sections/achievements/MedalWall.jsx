import CountUp from '../../components/ui/CountUp.jsx';
import { cardHover } from '../../components/ui/GlassCard.jsx';
import Icon from '../../components/ui/Icon.jsx';
import { RevealGroup, RevealItem } from '../../components/ui/Reveal.jsx';
import SectionHeading from '../../components/ui/SectionHeading.jsx';
import { accent } from '../../data/accents.js';

const GOLD = new Set(['amber', 'rainbow']);

function Seal({ rank }) {
  const tone = accent(rank.accent);
  const base =
    'grid size-16 place-items-center rounded-full transition-[rotate,scale] duration-500 ease-[cubic-bezier(.3,1.6,.5,1)] group-hover:-rotate-14 group-hover:scale-108';

  if (rank.accent === 'rainbow') {
    return (
      <span aria-hidden="true" className={base} style={{ background: tone.gradient }}>
        <span className="grid size-[52px] place-items-center rounded-full bg-panel font-display text-[26px] font-extrabold">3</span>
      </span>
    );
  }
  return (
    <span aria-hidden="true" className={`${base} text-on-accent`} style={{ background: tone.gradient, boxShadow: `0 0 30px -4px ${tone.solid}` }}>
      <Icon name={rank.icon} size={28} strokeWidth={2} />
    </span>
  );
}

export default function MedalWall({ ranks }) {
  return (
    <section className="wrap relative flex flex-col gap-10 pt-10">
      <SectionHeading
        title="The"
        accent="medal"
        after="wall"
        gold
        description="Six national results, from undergraduate to fellowship level."
      />
      <RevealGroup className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-[18px]" stagger={0.08}>
        {ranks.map((rank) => {
          const gold = GOLD.has(rank.accent);
          const valueClass = `${gold ? 'gold-text' : 'gradient-text'} font-display text-7xl leading-[0.85] font-extrabold tracking-[-0.05em]`;
          return (
            <RevealItem
              as="article"
              key={rank.id}
              className={`group ${rank.accent === 'rainbow' ? 'gradient-border' : 'glass'} flex flex-col gap-[18px] rounded-[28px] p-7 ${cardHover}`}
            >
              <div className="flex items-start justify-between">
                <Seal rank={rank} />
                <span className="font-mono text-xs text-muted">{rank.meta}</span>
              </div>
              {typeof rank.value === 'number' ? (
                <CountUp to={rank.value} prefix={rank.prefix} className={valueClass} />
              ) : (
                <span className={valueClass}>{rank.text}</span>
              )}
              <div className="flex flex-col gap-1">
                <h3 className="font-display text-[22px] font-bold">{rank.exam}</h3>
                <p className="text-[15px] leading-relaxed text-muted">{rank.description}</p>
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </section>
  );
}
