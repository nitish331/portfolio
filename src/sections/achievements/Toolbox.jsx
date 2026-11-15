import Marquee from '../../components/ui/Marquee.jsx';
import { Reveal, RevealGroup, RevealItem } from '../../components/ui/Reveal.jsx';
import SectionHeading from '../../components/ui/SectionHeading.jsx';
import { accent } from '../../data/accents.js';
import { SKILL_GROUPS, TOOLBOX_PRIMARY, TOOLBOX_SECONDARY } from '../../data/skills.js';

const PILL_ACCENTS = ['violet', null, 'cyan', null, 'pink', null, 'amber'];

export default function Toolbox() {
  return (
    <section className="relative flex flex-col gap-10 pt-36">
      <SectionHeading className="wrap w-full" title="My" accent="toolbox" description="Languages, frameworks and tools I use to ship." />

      <Reveal aria-hidden="true" className="flex flex-col gap-3.5 font-display text-2xl font-bold">
        <Marquee duration={32}>
          {TOOLBOX_PRIMARY.map((tool, i) => {
            const tone = PILL_ACCENTS[i % PILL_ACCENTS.length];
            return tone ? (
              <span key={tool} className="rounded-full px-[26px] py-4 text-on-accent" style={{ background: accent(tone).gradient }}>
                {tool}
              </span>
            ) : (
              <span key={tool} className="glass rounded-full px-[26px] py-4">{tool}</span>
            );
          })}
        </Marquee>
        <Marquee reverse duration={36}>
          {TOOLBOX_SECONDARY.map((tool) => (
            <span key={tool} className="rounded-full border border-white/25 px-6 py-3.5">{tool}</span>
          ))}
        </Marquee>
      </Reveal>

      <RevealGroup className="wrap grid w-full grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-4" stagger={0.08}>
        {SKILL_GROUPS.map((group) => (
          <RevealItem
            key={group.title}
            className="glass flex flex-col gap-4 rounded-[28px] p-7"
            style={group.accent ? { background: `linear-gradient(160deg, ${accent(group.accent).tint}, rgba(255,255,255,.04))` } : undefined}
          >
            <h3 className="font-display text-[22px] font-extrabold">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/8 px-3.5 py-2 text-sm font-semibold transition-[translate,rotate,background-color] duration-200 hover:-translate-y-[3px] hover:-rotate-3 hover:bg-white/16"
                >
                  {item}
                </li>
              ))}
            </ul>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
