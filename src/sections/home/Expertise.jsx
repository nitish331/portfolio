import { cardHover } from '../../components/ui/GlassCard.jsx';
import Icon from '../../components/ui/Icon.jsx';
import { RevealGroup, RevealItem } from '../../components/ui/Reveal.jsx';
import SectionHeading from '../../components/ui/SectionHeading.jsx';
import { accent } from '../../data/accents.js';
import { EXPERTISE } from '../../data/profile.js';

export default function Expertise() {
  return (
    <section className="wrap relative flex flex-col gap-11 pt-36">
      <SectionHeading title="Three disciplines," accent="one toolkit." description="Hover a card to see it glow." />
      <RevealGroup className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-[18px]">
        {EXPERTISE.map((item, i) => {
          const colors = accent(item.accent);
          return (
            <RevealItem as="article" key={item.title} className={`glass flex min-h-[340px] flex-col gap-[18px] rounded-[26px] p-8 ${cardHover}`}>
              <div className="flex items-start justify-between">
                <span className="outline-text font-display text-7xl leading-[0.8] font-extrabold">{String(i + 1).padStart(2, '0')}</span>
                <span
                  className="grid size-14 place-items-center rounded-2xl text-on-accent"
                  style={{ background: colors.gradient, boxShadow: `0 10px 30px -8px ${colors.solid}` }}
                >
                  <Icon name={item.icon} size={26} strokeWidth={2} />
                </span>
              </div>
              <h3 className="mt-auto font-display text-[28px] font-bold tracking-[-0.02em]">{item.title}</h3>
              <p className="leading-relaxed text-muted">{item.description}</p>
              <p className="font-mono text-xs text-soft">{item.stack.join(' · ')}</p>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </section>
  );
}
