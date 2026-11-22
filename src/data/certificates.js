// Certificate wall. `image` is the scanned page with personal details
// (date of birth, parents' names, registration/roll numbers, photo, signature,
// QR codes) blurred out. Null shows a drawn placeholder certificate.
import cnCollage from '../assets/certificates/cn-collage.webp';
import csirNet from '../assets/certificates/csir-net.webp';
import gate2025 from '../assets/certificates/gate-2025.webp';
import gate2026 from '../assets/certificates/gate-2026.webp';
import jam from '../assets/certificates/jam.webp';
import jest from '../assets/certificates/jest.webp';
import ngpe from '../assets/certificates/ngpe.webp';

export const CERTIFICATES = [
  { id: 'gate-2026', title: 'GATE 2026 Scorecard', short: 'GATE 2026', meta: 'AIR 5 · 2026', accent: 'amber', image: gate2026 },
  { id: 'gate-2025', title: 'GATE 2025 Scorecard', short: 'GATE 2025', meta: 'AIR 36 · 2025', accent: 'violet', image: gate2025 },
  { id: 'csir-net', title: 'CSIR-UGC NET with JRF', short: 'CSIR-UGC NET', meta: 'AIR 86 · Dec 2024', accent: 'cyan', image: csirNet },
  { id: 'jam', title: 'IIT JAM 2024 Scorecard', short: 'IIT JAM 2024', meta: 'AIR 90 · 2024', accent: 'pink', image: jam },
  { id: 'ngpe', title: 'NGPE 2024 · National Top 1%', short: 'NGPE 2024', meta: 'IAPT · 2024', accent: 'mint', image: ngpe },
  { id: 'jest', title: 'JEST 2023 Scorecard', short: 'JEST 2023', meta: 'Rank 387 · 2023', accent: 'amber', image: jest },
  {
    id: 'coding-ninjas',
    title: 'Coding Ninjas · Certificates of Excellence',
    short: 'Coding Ninjas',
    meta: 'Top Performer · DSA in Java, Full Stack, React · 2022–23',
    accent: 'violet',
    image: cnCollage,
  },
];
