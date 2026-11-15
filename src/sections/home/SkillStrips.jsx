import Icon from '../../components/ui/Icon.jsx';
import Marquee from '../../components/ui/Marquee.jsx';
import { Reveal } from '../../components/ui/Reveal.jsx';
import { MARQUEE_TECH, MARQUEE_THEMES } from '../../data/skills.js';

const SPARKLE_COLOURS = ['#7C5CFF', '#22D3EE', '#F472B6', '#FBBF24'];

// Two strips under the hero: glass tech chips, then big gradient/outlined words.
export default function SkillStrips() {
  return (
    <Reveal as="section" aria-label="Skills I work with" className="relative flex flex-col gap-3.5 pb-6">
      <Marquee duration={30}>
        {MARQUEE_TECH.map((tech) => (
          <span key={tech} className="glass chip px-[22px] py-3 text-base">
            {tech}
          </span>
        ))}
      </Marquee>
      <Marquee reverse duration={36} gap={28}>
        {MARQUEE_THEMES.map((theme, i) => (
          <span
            key={theme}
            className="flex items-center gap-7 font-display text-[clamp(28px,3.6vw,44px)] font-extrabold tracking-[-0.03em]"
          >
            <span className={i % 2 ? 'outline-text' : 'gradient-text'}>{theme}</span>
            <span className="shrink-0" style={{ color: SPARKLE_COLOURS[i % SPARKLE_COLOURS.length] }}>
              <Icon name="sparkle" size={22} />
            </span>
          </span>
        ))}
      </Marquee>
    </Reveal>
  );
}
