import { TIMELINE } from '../data/timeline.js';
import JourneyCta from '../sections/journey/JourneyCta.jsx';
import JourneyHeader from '../sections/journey/JourneyHeader.jsx';
import Timeline from '../sections/journey/Timeline.jsx';

export default function Journey() {
  return (
    <>
      <JourneyHeader />
      <Timeline entries={TIMELINE} />
      <JourneyCta />
    </>
  );
}
