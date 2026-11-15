// Who you are: hero, About, expertise and research text.
// Contact links live in site.js.
import portrait from '../assets/portrait.webp';

export const PROFILE = {
  name: 'Nitish',
  status: 'SDE-1 @ Infinite Locus',
  headline: { before: 'I build', accent: 'intelligent', after: 'products.' },
  roles: ['Software Engineer', 'Full-Stack Developer', 'Generative AI Engineer', 'ML & Deep Learning Dev'],
  intro:
    'Software Development Engineer at Infinite Locus. I build full-stack products with React, Node.js and Python, ship Generative AI features with Google Gemini, LangGraph and RAG, and train deep-learning models in TensorFlow. M.Sc, IIT Delhi.',
  badge: 'FULL-STACK • GEN AI • DEEP LEARNING • ',
  stickers: ['IIT Delhi', 'Gemini · LangGraph', 'React + Node', 'TensorFlow'],
  location: '[YOUR CITY], India',
  // Hero portrait (src/assets/portrait.webp). Set to null to show the placeholder.
  photo: portrait,
};

export const ABOUT = {
  title: { before: 'An engineer with a', accent: "problem-solver's", after: 'mind.' },
  paragraphs: [
    "I'm a Software Development Engineer at Infinite Locus, building production web apps end to end in Python and JavaScript and bringing generative AI into them with Google Gemini, including my own invoice OCR and verification engine.",
    'I hold an M.Sc from IIT Delhi (CGPA 9.35, Department Rank 3), where my thesis applied machine learning to secure quantum communication. Along the way I taught DSA and React to 200+ learners and solved 300+ LeetCode problems.',
  ],
  facts: [
    { label: 'Working at', value: 'Infinite Locus · SDE-1', icon: 'code', accent: 'violet' },
    { label: 'Education', value: 'M.Sc, IIT Delhi', icon: 'cap', accent: 'cyan' },
    { label: 'Focus', value: 'GenAI, ML & deep learning', icon: 'sparkle', accent: 'pink' },
    { label: 'Based in', value: PROFILE.location, icon: 'pin', accent: 'amber' },
  ],
  highlight: { value: '200+', label: 'learners mentored in DSA & React at Coding Ninjas' },
  // Photo in the About frame (same portrait as the hero for now). Null shows a placeholder.
  candidPhoto: portrait,
};

export const EXPERTISE = [
  {
    title: 'Full-stack web',
    description: 'Production web apps end to end: REST APIs and backend services, responsive React interfaces, real-time features.',
    stack: ['React', 'TypeScript', 'Node', 'Express', 'Python', 'MongoDB'],
    icon: 'code',
    accent: 'violet',
  },
  {
    title: 'Generative AI',
    description: 'LLM features in real products: multimodal document AI, RAG pipelines and agent graphs with tracing and evals.',
    stack: ['Gemini', 'OpenAI', 'LangChain', 'LangGraph', 'LangSmith'],
    icon: 'sparkle',
    accent: 'cyan',
  },
  {
    title: 'ML & Deep Learning',
    description: 'NLP, time-series and vision models, from feature engineering to deployed predictions.',
    stack: ['TensorFlow', 'Keras', 'Scikit-learn', 'NLP', 'Pandas'],
    icon: 'network',
    accent: 'pink',
  },
];

export const RESEARCH = {
  eyebrow: 'M.Sc thesis · IIT Delhi · 2025 – 2026',
  title: { before: 'Teaching machines to guard', accent: 'secret keys.' },
  description:
    'Machine-learning based post-processing for Continuous-Variable QKD, under Prof. Neel Kanth Kundu (co-supervisor Prof. Bhasker Kanseri). I built an end-to-end simulator in Python and applied regression and neural-network models to channel-noise estimation, improving error-correction parameter estimation and secure key-rate prediction.',
  pipeline: ['Quantum channel', 'ML parameter estimation', 'Error correction', 'Secure key'],
  caption: 'Gaussian-modulated coherent states in (x, p) phase space, rendered for this site.',
};
