import ChatPulseMockup from './ChatPulseMockup.jsx';
import FinVerseMockup from './FinVerseMockup.jsx';
import InvoiceMockup from './InvoiceMockup.jsx';
import NlpMockup from './NlpMockup.jsx';
import QkdMockup from './QkdMockup.jsx';
import ResearchMateMockup from './ResearchMateMockup.jsx';
import StayEaseMockup from './StayEaseMockup.jsx';

// Drawn app previews, keyed by project id (see data/projects.js).
// When a project gets a real screenshot, render <img> here instead.
const MOCKUPS = {
  'invoice-ai': InvoiceMockup,
  finverse: FinVerseMockup,
  chatpulse: ChatPulseMockup,
  'medical-nlp': NlpMockup,
  researchmate: ResearchMateMockup,
  stayease: StayEaseMockup,
  cvqkd: QkdMockup,
};

export default function ProjectMockup({ id }) {
  const Mockup = MOCKUPS[id];
  return Mockup ? <Mockup /> : null;
}
