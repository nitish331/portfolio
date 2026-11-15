import Hero from '../sections/home/Hero.jsx';
import RankStats from '../sections/home/RankStats.jsx';
import SkillStrips from '../sections/home/SkillStrips.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <SkillStrips />
      <RankStats />

      {/* Step 5 adds About, What I do, the project showcase and the research section here. */}

      <section id="contact" className="wrap pt-36">
        <div className="gradient-border flex flex-col gap-4 rounded-[36px] p-[clamp(32px,6vw,72px)]">
          <span className="glass chip self-start">Contact</span>
          <h2 className="font-display text-[clamp(36px,5vw,64px)] leading-none font-extrabold tracking-[-0.045em]">
            Let's build something <span className="gradient-text">brilliant.</span>
          </h2>
          <p className="text-muted">Full contact section arrives in Step 5.</p>
        </div>
      </section>
    </>
  );
}
