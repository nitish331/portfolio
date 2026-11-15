import { useRef, useState } from 'react';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import ProjectMockup from '../../components/mockups/ProjectMockup.jsx';
import Button from '../../components/ui/Button.jsx';
import Icon from '../../components/ui/Icon.jsx';
import { Reveal } from '../../components/ui/Reveal.jsx';
import SectionHeading from '../../components/ui/SectionHeading.jsx';
import { PROJECTS } from '../../data/projects.js';

const SHOWCASE = PROJECTS.filter((project) => project.featured);
const SLIDE_SECONDS = 6;
const pad = (n) => String(n).padStart(2, '0');

// Auto-playing accordion: the open project shows its details + a timer bar;
// when the bar fills, the next project opens. Pauses while hovered, focused
// or off-screen. No autoplay for "reduce motion" users.
export default function ProjectShowcase() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const boxRef = useRef(null);
  const inView = useInView(boxRef, { amount: 0.35 });
  const reduceMotion = useReducedMotion();

  const autoplay = !reduceMotion;
  const paused = hovered || focused || !inView;
  const project = SHOWCASE[index];
  const go = (i) => setIndex((i + SHOWCASE.length) % SHOWCASE.length);

  return (
    <section aria-roledescription="carousel" aria-label="Selected projects" className="wrap relative flex flex-col gap-8 pt-36">
      <SectionHeading
        title="Selected"
        accent="work"
        action={<Button to="/projects" variant="glass" icon="arrowRight">See all projects</Button>}
      />

      <Reveal>
        <div
          ref={boxRef}
          className="gradient-border flex flex-wrap overflow-hidden rounded-[36px] shadow-[0_50px_100px_-50px_rgba(124,92,255,.6)]"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setFocused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
          }}
        >
          {/* Accordion */}
          <div className="flex min-w-0 flex-[1_1_420px] flex-col p-[clamp(20px,3vw,36px)]">
            {SHOWCASE.map((item, i) => {
              const open = i === index;
              return (
                <div key={item.id} className="border-b border-white/10">
                  <h3>
                    <button
                      type="button"
                      id={`showcase-tab-${item.id}`}
                      aria-expanded={open}
                      aria-controls={`showcase-panel-${item.id}`}
                      onClick={() => go(i)}
                      className="group flex min-h-[76px] w-full items-center gap-3.5 py-3 text-left"
                    >
                      <span className={`w-[30px] font-mono text-[13px] transition-colors ${open ? 'text-cyan' : 'text-muted'}`}>{pad(i + 1)}</span>
                      <span
                        className={`min-w-0 flex-1 font-display text-[clamp(22px,2.3vw,30px)] font-extrabold tracking-[-0.03em] transition-colors duration-300 ${
                          open ? 'text-white' : 'text-muted group-hover:text-white'
                        }`}
                      >
                        {item.title}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`grid size-[38px] flex-none place-items-center rounded-full transition-[rotate,background-color,color] duration-450 ease-[cubic-bezier(.3,1.4,.5,1)] ${
                          open ? 'rotate-45 bg-linear-to-br from-violet to-cyan text-on-accent' : 'bg-white/8 text-ink'
                        }`}
                      >
                        <Icon name="plus" size={16} strokeWidth={2.6} />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`showcase-panel-${item.id}`}
                    role="region"
                    aria-labelledby={`showcase-tab-${item.id}`}
                    inert={!open}
                    className={`grid transition-[grid-template-rows] duration-600 ease-out-soft ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className={`flex flex-col gap-3.5 pb-6 pl-11 transition-opacity duration-500 ${open ? 'opacity-100 delay-100' : 'opacity-0'}`}>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="tag">{item.kind}</span>
                          <span className="font-mono text-xs text-muted">{item.date}</span>
                        </div>
                        <p className="leading-[1.65] text-muted">{item.summary}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {item.stack.map((tech) => (
                            <span key={tech} className="stack-tag">{tech}</span>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2.5 pt-1">
                          <Button href={item.links.live} size="sm" icon="arrowUpRight">{item.primaryLabel}</Button>
                          <Button href={item.links.source} variant="glass" size="sm" icon="github" iconPosition="left">Source code</Button>
                        </div>
                        {open && autoplay && (
                          <span aria-hidden="true" className="mt-1 block h-1 overflow-hidden rounded bg-white/10">
                            <span
                              key={index}
                              className="progress-fill block h-full rounded bg-linear-to-r from-violet to-cyan"
                              style={{ animationDuration: `${SLIDE_SECONDS}s`, animationPlayState: paused ? 'paused' : 'running' }}
                              onAnimationEnd={() => go(index + 1)}
                            />
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mockup stage */}
          <div className="relative min-h-[560px] min-w-0 flex-[1.25_1_520px] overflow-hidden bg-panel">
            <AnimatePresence initial={false}>
              <motion.div
                key={project.id}
                className="absolute inset-0 flex items-center justify-center p-[clamp(28px,4vw,56px)]"
                style={{ background: project.theme }}
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <ProjectMockup id={project.id} />
              </motion.div>
            </AnimatePresence>
            <span className="glass absolute top-[22px] left-6 rounded-full px-3 py-1.5 font-mono text-xs">
              {pad(index + 1)} / {pad(SHOWCASE.length)}
            </span>
          </div>
        </div>
      </Reveal>

      <div role="group" aria-label="Choose a project" className="flex justify-center gap-3">
        {SHOWCASE.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => go(i)}
            aria-label={`Show ${item.title}`}
            aria-current={i === index}
            className="flex h-11 items-center"
          >
            <span
              className={`block h-3 rounded-full transition-[width,background-color] duration-450 ease-out-soft ${
                i === index ? 'w-11 bg-linear-to-r from-violet to-cyan' : 'w-3 bg-white/25 hover:bg-white/45'
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
