import About from '../sections/home/About.jsx';
import Contact from '../sections/home/Contact.jsx';
import Expertise from '../sections/home/Expertise.jsx';
import Hero from '../sections/home/Hero.jsx';
import ProjectShowcase from '../sections/home/ProjectShowcase.jsx';
import RankStats from '../sections/home/RankStats.jsx';
import Research from '../sections/home/Research.jsx';
import SkillStrips from '../sections/home/SkillStrips.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <SkillStrips />
      <RankStats />
      <About />
      <Expertise />
      <ProjectShowcase />
      <Research />
      <Contact />
    </>
  );
}
