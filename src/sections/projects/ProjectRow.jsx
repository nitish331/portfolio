import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import ProjectMockup from '../../components/mockups/ProjectMockup.jsx';
import Button from '../../components/ui/Button.jsx';
import Icon from '../../components/ui/Icon.jsx';
import { accent } from '../../data/accents.js';

const EASE = [0.2, 0.8, 0.2, 1];

// One big glass row: mockup on one side, details on the other.
// `layout` + exit let rows glide/fade when the filter changes (see Projects.jsx).
const ProjectRow = forwardRef(function ProjectRow({ project, number, flipped }, ref) {
  const tint = accent(project.accent).tint;

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 56, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.3 } }}
      transition={{ duration: 0.8, ease: EASE }}
      aria-labelledby={`project-${project.id}`}
      className={`group glass flex flex-wrap overflow-hidden rounded-[36px] bg-panel/55 transition-shadow duration-400 hover:shadow-[0_40px_100px_-40px_rgba(124,92,255,.7)] ${
        flipped ? 'flex-row-reverse' : ''
      }`}
    >
      <div
        className="relative flex min-h-[440px] min-w-0 flex-[1_1_520px] items-center justify-center overflow-hidden p-[clamp(24px,4vw,48px)]"
        style={{ background: project.theme }}
      >
        <div className="flex w-full justify-center transition-[scale,rotate] duration-500 ease-out-soft group-hover:scale-[1.03] group-hover:-rotate-1">
          <ProjectMockup id={project.id} />
        </div>
      </div>

      <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-[18px] p-[clamp(28px,4vw,56px)]">
        <div className="flex items-start justify-between gap-4">
          <span className="outline-text font-display text-[88px] leading-[0.8] font-extrabold tracking-[-0.04em]">{number}</span>
          <div className="flex flex-col items-end gap-1.5 text-right">
            <span className="chip" style={{ background: tint }}>{project.kind}</span>
            <span className="font-mono text-[13px] text-muted">{project.date}</span>
          </div>
        </div>
        <h2 id={`project-${project.id}`} className="font-display text-[clamp(30px,3.4vw,44px)] leading-[1.04] font-extrabold tracking-[-0.04em]">
          {project.fullTitle}
        </h2>
        <p className="text-lg leading-relaxed text-soft">{project.tagline}</p>
        <ul className="flex flex-col gap-3">
          {project.points.map((point) => (
            <li key={point.slice(0, 32)} className="flex gap-3 text-[15px] leading-relaxed text-muted">
              <span className="mt-px grid size-6 flex-none place-items-center rounded-full bg-linear-to-br from-violet to-cyan text-on-accent">
                <Icon name="check" size={12} strokeWidth={3} />
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span key={tech} className="stack-tag">{tech}</span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-2.5 pt-2.5">
          <Button href={project.links.live} icon="arrowUpRight">{project.primaryLabel}</Button>
          <Button href={project.links.source} variant="glass" icon="github" iconPosition="left">Source code</Button>
        </div>
      </div>
    </motion.article>
  );
});

export default ProjectRow;
