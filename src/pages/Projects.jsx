import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import usePageMeta from '../components/usePageMeta.js';
import { MORE_PROJECTS, PROJECT_FILTERS, PROJECTS } from '../data/projects.js';
import FilterPills from '../sections/projects/FilterPills.jsx';
import MoreProjects from '../sections/projects/MoreProjects.jsx';
import ProjectRow from '../sections/projects/ProjectRow.jsx';
import ProjectsCta from '../sections/projects/ProjectsCta.jsx';
import ProjectsHeader from '../sections/projects/ProjectsHeader.jsx';

const VALID = new Set(PROJECT_FILTERS.map((f) => f.id));

export default function Projects() {
  usePageMeta({
    title: 'Projects',
    description:
      'Projects by Nitish: Invoice AI (Gemini document OCR in production), FinVerse digital bank, ChatPulse real-time chat, medical-abstract NLP, Smart ResearchMate RAG assistant and more.',
  });
  // The active filter lives in the URL (/projects?filter=ai) so a filtered view can be shared.
  const [params, setParams] = useSearchParams();
  const requested = params.get('filter');
  const active = VALID.has(requested) ? requested : 'all';

  const counts = useMemo(
    () =>
      Object.fromEntries(
        PROJECT_FILTERS.map((f) => [f.id, f.id === 'all' ? PROJECTS.length : PROJECTS.filter((p) => p.category === f.id).length]),
      ),
    [],
  );
  const shown = active === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  const changeFilter = (id) => {
    setParams(id === 'all' ? {} : { filter: id }, { replace: true, preventScrollReset: true });
  };

  return (
    <>
      <ProjectsHeader count={PROJECTS.length}>
        <FilterPills filters={PROJECT_FILTERS} active={active} counts={counts} onChange={changeFilter} />
      </ProjectsHeader>

      <section aria-label="Project list" aria-live="polite" className="wrap relative flex flex-col gap-7 pt-8 pb-24">
        <AnimatePresence mode="popLayout" initial={false}>
          {shown.map((project, i) => (
            <ProjectRow key={project.id} project={project} number={String(i + 1).padStart(2, '0')} flipped={i % 2 === 1} />
          ))}
        </AnimatePresence>
      </section>

      <MoreProjects projects={MORE_PROJECTS} />
      <ProjectsCta />
    </>
  );
}
