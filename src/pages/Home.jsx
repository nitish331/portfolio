import { Link } from 'react-router-dom';
import PagePlaceholder from '../components/PagePlaceholder.jsx';

export default function Home() {
  return (
    <>
      <PagePlaceholder
        eyebrow="Home"
        title="I build"
        accent="intelligent products."
        description="Hero, skill marquees, rank counters, About, expertise cards and the auto-playing project showcase will live here."
        step="4 & 5"
      >
        <div className="flex flex-wrap gap-3 pt-2">
          <Link to="/projects" className="btn btn-grad">Explore my work →</Link>
          <Link to="/styleguide" className="btn btn-glass">Design system</Link>
        </div>
      </PagePlaceholder>

      <section id="contact" className="wrap">
        <div className="gradient-border flex flex-col gap-4 rounded-[36px] p-[clamp(32px,6vw,72px)]">
          <span className="glass chip self-start">Contact</span>
          <h2 className="font-display text-[clamp(36px,5vw,64px)] leading-none font-extrabold tracking-[-0.045em]">
            Let's build something <span className="gradient-text">brilliant.</span>
          </h2>
          <p className="text-muted">The "Let's talk" button scrolls here. Full contact section arrives in Step 5.</p>
        </div>
      </section>
    </>
  );
}
