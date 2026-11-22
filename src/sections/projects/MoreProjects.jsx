import { cardHover } from '../../components/ui/GlassCard.jsx';
import Icon from '../../components/ui/Icon.jsx';
import { RevealGroup, RevealItem } from '../../components/ui/Reveal.jsx';
import SectionHeading from '../../components/ui/SectionHeading.jsx';
import { accent } from '../../data/accents.js';
import { hasLink } from '../../data/projects.js';

// Compact cards for smaller experiments (BitPredict, Food101…).
export default function MoreProjects({ projects }) {
  return (
    <section className="wrap relative flex flex-col gap-8 pb-28">
      <SectionHeading title="More" accent="experiments" description="Smaller deep-learning projects worth a look." />
      <RevealGroup className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-4">
        {projects.map((project) => {
          const tone = accent(project.accent);
          return (
            <RevealItem key={project.id} className={`glass flex flex-col gap-4 rounded-[26px] p-7 ${cardHover}`}>
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl font-extrabold tracking-[-0.02em]">{project.title}</h3>
                {hasLink(project.link) && (
                  <a
                    href={project.link}
                    aria-label={`${project.title} source code`}
                    className="grid size-10 flex-none place-items-center rounded-full text-on-accent transition-[rotate] duration-300 hover:-rotate-45"
                    style={{ background: tone.gradient }}
                  >
                    <Icon name="arrowUpRight" size={16} strokeWidth={2.2} />
                  </a>
                )}
              </div>
              <p className="leading-relaxed text-muted">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span key={tech} className="stack-tag">{tech}</span>
                ))}
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </section>
  );
}
