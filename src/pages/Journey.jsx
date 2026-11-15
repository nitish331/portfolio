import usePageMeta from '../components/usePageMeta.js';
import { TIMELINE } from '../data/timeline.js';
import JourneyCta from '../sections/journey/JourneyCta.jsx';
import JourneyHeader from '../sections/journey/JourneyHeader.jsx';
import Timeline from '../sections/journey/Timeline.jsx';

export default function Journey() {
  usePageMeta({
    title: 'Journey',
    description:
      "Nitish's journey: M.Sc at IIT Delhi (CGPA 9.35, Dept. Rank 3), ML research on CV-QKD, Teaching Assistant at Coding Ninjas, B.Sc at GJUST Hisar.",
  });
  return (
    <>
      <JourneyHeader />
      <Timeline entries={TIMELINE} />
      <JourneyCta />
    </>
  );
}
