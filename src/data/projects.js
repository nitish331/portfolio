// Every project shown on Home (showcase) and Projects (full rows).
// links.live / links.source: replace '#' with real URLs.
// theme: background of the mockup panel.

export const PROJECT_FILTERS = [
  { id: 'all', label: 'All work' },
  { id: 'fullstack', label: 'Full-stack' },
  { id: 'ai', label: 'Generative AI' },
  { id: 'research', label: 'ML research' },
];

export const PROJECTS = [
  {
    id: 'finverse',
    title: 'FinVerse',
    fullTitle: 'FinVerse — Digital Banking Platform',
    category: 'fullstack',
    kind: 'Full-stack',
    date: 'Jul 2025',
    tagline: 'A full-stack banking platform with the everyday features of a real bank.',
    summary:
      'A full-stack digital bank: fund transfers, deposits, FD creation, loans and debit cards, secured with Passport.js and tuned for fast APIs.',
    points: [
      'Core banking features: fund transfers, deposits, FD creation, loan management and debit card services.',
      'Secure authentication with Passport.js, protecting the integrity of financial transactions.',
      'Optimised database queries and API responses for a faster experience.',
    ],
    stack: ['React.js', 'Redux', 'Express', 'MongoDB', 'Passport.js'],
    links: { live: '#', source: '#' },
    primaryLabel: 'Live demo',
    theme: 'radial-gradient(circle at 25% 20%, rgba(124,92,255,.75), transparent 60%), radial-gradient(circle at 85% 90%, rgba(34,211,238,.35), transparent 55%), #0C1029',
    accent: 'violet',
  },
  {
    id: 'researchmate',
    title: 'Smart ResearchMate',
    fullTitle: 'Smart ResearchMate',
    category: 'ai',
    kind: 'Generative AI',
    date: 'Jun 2025',
    tagline: 'An AI research assistant that reads, summarises and answers questions about PDFs.',
    summary:
      'A RAG pipeline that summarises research PDFs with iterative feedback, embeddings, prompt engineering and browser-integrated querying.',
    points: [
      'RAG pipeline with LangChain, LangGraph and OpenAI for PDF summarisation with iterative feedback.',
      'Advanced preprocessing, embeddings and prompt engineering with browser-integrated querying.',
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
    summary:
      'Hotel & cabin booking dashboard on Supabase with real-time bookings, optimistic UI updates, protected routes and charts.',
    points: [
      'Scalable management dashboard with React Query and Context API for global state.',
      'Supabase for authentication plus a real-time API for bookings and user sessions.',
      'Optimistic UI updates, protected routes and data visualisation.',
    ],
    stack: ['React', 'Supabase', 'React Query', 'Context API'],
    links: { live: '#', source: '#' },
    primaryLabel: 'Live demo',
    theme: 'radial-gradient(circle at 25% 80%, rgba(251,191,36,.45), transparent 60%), radial-gradient(circle at 80% 20%, rgba(244,114,182,.45), transparent 55%), #0C1029',
    accent: 'amber',
  },
  {
    id: 'chatpulse',
    title: 'ChatPulse',
    fullTitle: 'ChatPulse — Real-Time Chat',
    category: 'fullstack',
    kind: 'Real-time',
    date: 'Sep 2024',
    tagline: 'A MERN chat platform with instant one-to-one messaging and media sharing.',
    summary: 'MERN chat platform with Socket.IO messaging and notifications, JWT sessions and Cloudinary media uploads.',
    points: [
      'Real-time messaging and notifications with Socket.IO.',
      'JWT-based authentication for secure login and session management.',
      'Cloudinary with Multer for efficient image uploads in chats.',
    ],
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.IO', 'Cloudinary'],
    links: { live: '#', source: '#' },
    primaryLabel: 'Live demo',
    theme: 'radial-gradient(circle at 70% 70%, rgba(244,114,182,.6), transparent 60%), radial-gradient(circle at 20% 20%, rgba(124,92,255,.45), transparent 55%), #0C1029',
    accent: 'pink',
  },
  {
    id: 'cvqkd',
    title: 'CV-QKD Simulator',
    fullTitle: 'CV-QKD Simulator with Deep Learning',
    category: 'research',
    kind: 'ML research',
    date: 'Ongoing',
    tagline: 'An end-to-end Continuous-Variable QKD simulator with neural post-processing, built for my IIT Delhi thesis.',
    summary:
      'End-to-end simulator with regression and neural models of channel noise, built in Python and TensorFlow for my IIT Delhi thesis.',
    points: [
      'Regression and neural models of channel noise for better parameter estimation and key-rate prediction.',
      'Simulated eavesdropper attacks; ML outputs validated against theoretical secure-key-rate bounds.',
    ],
    stack: ['Python', 'TensorFlow', 'NumPy', 'SciPy', 'pandas'],
    links: { live: '#', source: '#' },
    primaryLabel: 'Read summary',
    theme: 'radial-gradient(circle at 50% 50%, rgba(124,92,255,.35), transparent 65%), #070A1A',
    accent: 'amber',
  },
];
