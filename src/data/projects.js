// Every project shown on Projects (full rows); `featured` ones also play in the Home showcase.
// links.live / links.source: '#' hides that button; put a real URL to show it.
// theme: background of the mockup panel.

// True for a real link; '#' or empty means "no link yet", so the button is hidden.
export const hasLink = (url) => Boolean(url) && url !== '#';

export const PROJECT_FILTERS = [
  { id: 'all', label: 'All work' },
  { id: 'ai', label: 'Generative AI' },
  { id: 'fullstack', label: 'Full-stack' },
  { id: 'ml', label: 'ML & research' },
];

export const PROJECTS = [
  {
    id: 'invoice-ai',
    featured: true,
    title: 'Invoice AI',
    fullTitle: 'Invoice AI — Gemini-Powered Invoice OCR & Verification',
    category: 'ai',
    kind: 'Document AI · in production',
    date: 'Sep 2026',
    tagline: 'Turns invoice PDFs and photos into verified, schema-validated data, now running in production at Infinite Locus.',
    summary:
      'Document-AI pipeline that turns invoice PDFs and photos into schema-validated JSON with Google Gemini and LangGraph, runs 15 automated checks and routes suspicious invoices to human review.',
    points: [
      'Google Gemini multimodal extraction orchestrated as a LangGraph workflow with LangSmith tracing, output validated against a Zod schema.',
      'Deterministic GST computation and 15 automated validation checks (line math, tax totals, GSTIN checksum, amount in words) with per-field provenance and human-review routing.',
      'Evaluation harness on hand-labelled invoices with adversarial tampering tests and 202 Vitest unit tests; integrated into production at Infinite Locus.',
    ],
    stack: ['TypeScript', 'Node.js', 'Google Gemini', 'LangGraph', 'LangSmith', 'Zod', 'Vitest'],
    links: { live: '#', source: '#' },
    primaryLabel: 'Case study',
    theme: 'radial-gradient(circle at 25% 25%, rgba(251,191,36,.45), transparent 60%), radial-gradient(circle at 80% 85%, rgba(124,92,255,.55), transparent 55%), #0C1029',
    accent: 'amber',
  },
  {
    id: 'finverse',
    featured: true,
    title: 'FinVerse',
    fullTitle: 'FinVerse — Digital Banking Platform',
    category: 'fullstack',
    kind: 'Full-stack',
    date: 'Jul 2025',
    tagline: 'A full-stack banking platform with the everyday features of a real bank.',
    summary:
      'A full-stack digital bank: fund transfers, deposits, fixed deposits, loans and debit cards, secured with Passport.js and tuned for fast APIs.',
    points: [
      'Core banking features: fund transfers, deposits, fixed deposits, loan management and debit card services.',
      'Secure authentication with Passport.js; optimised database queries and API responses for better performance.',
    ],
    stack: ['React.js', 'Redux', 'Express.js', 'MongoDB', 'Passport.js'],
    links: { live: '#', source: '#' },
    primaryLabel: 'Live demo',
    theme: 'radial-gradient(circle at 25% 20%, rgba(124,92,255,.75), transparent 60%), radial-gradient(circle at 85% 90%, rgba(34,211,238,.35), transparent 55%), #0C1029',
    accent: 'violet',
  },
  {
    id: 'chatpulse',
    featured: true,
    title: 'ChatPulse',
    fullTitle: 'ChatPulse — Real-Time MERN Chat',
    category: 'fullstack',
    kind: 'Real-time',
    date: 'Sep 2024',
    tagline: 'A MERN chat platform with instant one-to-one messaging, notifications and media sharing.',
    summary: 'Real-time one-to-one messaging and notifications over Socket.IO, secured with JWT sessions, with Cloudinary media uploads.',
    points: [
      'Real-time one-to-one messaging and notifications with Socket.IO (WebSockets).',
      'JWT-based authentication and session management.',
      'Cloudinary with Multer for efficient media upload, storage and retrieval in chats.',
    ],
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.IO', 'JWT', 'Cloudinary'],
    links: { live: '#', source: '#' },
    primaryLabel: 'Live demo',
    theme: 'radial-gradient(circle at 70% 70%, rgba(244,114,182,.6), transparent 60%), radial-gradient(circle at 20% 20%, rgba(124,92,255,.45), transparent 55%), #0C1029',
    accent: 'pink',
  },
  {
    id: 'medical-nlp',
    featured: true,
    title: 'Medical Abstract Classification',
    fullTitle: 'Medical Abstract Classification — NLP',
    category: 'ml',
    kind: 'NLP · Deep learning',
    date: 'Sep 2024',
    tagline: 'Reads biomedical abstracts and labels every sentence (background, methods, results…) so papers can be skimmed fast.',
    summary:
      'Hybrid token, character and positional embeddings feeding a Conv1D + Bi-LSTM network: 84% accuracy and 0.82 F1, deployed behind a chatbot interface.',
    points: [
      'Engineered hybrid token, character and positional embeddings on biomedical text with a Conv1D + Bi-LSTM network.',
      'Achieved 84% accuracy and 0.82 F1-score, and deployed the model behind a chatbot interface.',
    ],
    stack: ['TensorFlow', 'Keras', 'Conv1D', 'Bi-LSTM', 'NLP'],
    links: { live: '#', source: '#' },
    primaryLabel: 'Try the chatbot',
    theme: 'radial-gradient(circle at 75% 25%, rgba(52,211,153,.45), transparent 60%), radial-gradient(circle at 15% 85%, rgba(34,211,238,.4), transparent 55%), #0C1029',
    accent: 'mint',
  },
  {
    id: 'researchmate',
    featured: true,
    title: 'Smart ResearchMate',
    fullTitle: 'Smart ResearchMate',
    category: 'ai',
    kind: 'Generative AI · RAG',
    date: 'Jun 2025',
    tagline: 'An AI research assistant that reads, summarises and answers questions about PDFs.',
    summary:
      'A RAG pipeline that summarises research PDFs with iterative feedback, embeddings, prompt engineering and browser-integrated querying.',
    points: [
      'RAG pipeline with LangChain, LangGraph and OpenAI for PDF summarisation with iterative feedback.',
      'Preprocessing, embeddings and prompt engineering with browser-integrated querying.',
    ],
    stack: ['LangChain', 'LangGraph', 'OpenAI', 'RAG', 'Embeddings'],
    links: { live: '#', source: '#' },
    primaryLabel: 'Live demo',
    theme: 'radial-gradient(circle at 75% 25%, rgba(34,211,238,.6), transparent 60%), radial-gradient(circle at 15% 85%, rgba(124,92,255,.4), transparent 55%), #0C1029',
    accent: 'cyan',
  },
  {
    id: 'stayease',
    title: 'StayEase',
    fullTitle: 'StayEase — Hotel & Cabin Booking',
    category: 'fullstack',
    kind: 'Full-stack',
    date: 'Feb 2025',
    tagline: 'An internal dashboard for running a boutique hotel: cabins, bookings, guests and stats.',
    summary: 'Booking dashboard on Supabase with real-time bookings, optimistic UI updates, protected routes and charts.',
    points: [
      'Management dashboard with React Query and Context API for global state.',
      'Supabase authentication plus a real-time API for bookings and user sessions.',
      'Optimistic UI updates, protected routes and data visualisation.',
    ],
    stack: ['React', 'Supabase', 'React Query', 'Context API'],
    links: { live: '#', source: '#' },
    primaryLabel: 'Live demo',
    theme: 'radial-gradient(circle at 25% 80%, rgba(251,191,36,.45), transparent 60%), radial-gradient(circle at 80% 20%, rgba(244,114,182,.45), transparent 55%), #0C1029',
    accent: 'amber',
  },
  {
    id: 'cvqkd',
    title: 'CV-QKD Simulator',
    fullTitle: 'CV-QKD Simulator with ML Post-processing',
    category: 'ml',
    kind: 'Research · M.Sc thesis',
    date: '2025 – 2026',
    tagline: 'An end-to-end Continuous-Variable QKD simulator with machine-learning post-processing, built for my IIT Delhi thesis.',
    summary: 'End-to-end simulator with regression and neural models of channel noise, built in Python and TensorFlow.',
    points: [
      'End-to-end CV-QKD simulator in Python; regression and neural-network models for channel-noise estimation.',
      'Improved error-correction parameter estimation and secure key-rate prediction.',
    ],
    stack: ['Python', 'TensorFlow', 'NumPy', 'SciPy', 'pandas'],
    links: { live: '#', source: '#' },
    primaryLabel: 'Read summary',
    theme: 'radial-gradient(circle at 50% 50%, rgba(124,92,255,.35), transparent 65%), #070A1A',
    accent: 'violet',
  },
];

// Smaller experiments, shown as compact cards under the main list.
export const MORE_PROJECTS = [
  {
    id: 'bitpredict',
    title: 'BitPredict',
    description: 'Bitcoin price forecasting with the N-BEATS time-series architecture.',
    stack: ['TensorFlow', 'N-BEATS', 'Time series'],
    link: '#',
    accent: 'amber',
  },
  {
    id: 'food101',
    title: 'Food101',
    description: 'Food image classifier with EfficientNetB3 transfer learning, 83% accuracy on 101 classes.',
    stack: ['TensorFlow', 'EfficientNetB3', 'Computer vision'],
    link: '#',
    accent: 'pink',
  },
];
