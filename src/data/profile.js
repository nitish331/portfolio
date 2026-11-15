// Who you are: hero, About, expertise and research text.
// Contact links live in site.js.

export const PROFILE = {
  name: 'Nitish',
  status: 'Open to SDE · GenAI · ML roles',
  headline: { before: 'I build', accent: 'intelligent', after: 'products.' },
  roles: ['Full-Stack Developer', 'Generative AI Engineer', 'ML & Deep Learning Dev', 'Problem Solver'],
  intro:
    'I design and ship full-stack products with React, Node.js and MongoDB, build Generative AI tools with LangChain, LangGraph and RAG, and train machine-learning and deep-learning models in TensorFlow. Currently an M.Sc student at IIT Delhi.',
  badge: 'FULL-STACK • GEN AI • DEEP LEARNING • ',
  stickers: ['IIT Delhi', 'GenAI · LangGraph', 'React + Node', 'TensorFlow'],
  location: '[YOUR CITY], India',
  // Hero portrait: put the file in src/assets/ and import it here, e.g.
  //   import portrait from '../assets/portrait.webp';  …  photo: portrait,
  // Until then the hero shows a labelled placeholder.
  photo: null,
};

export const ABOUT = {
  title: { before: 'An engineer with a', accent: "problem-solver's", after: 'mind.' },
  paragraphs: [
    "I'm a full-stack and Generative AI developer who loves turning hard problems into clean, working products: MERN apps, RAG pipelines and deep-learning models.",
    "I'm completing my M.Sc at IIT Delhi (CGPA 9.35, Department Rank 3), where my thesis applies machine learning to secure communication. I've also taught DSA and React to 200+ learners as a Teaching Assistant.",
  ],
  facts: [
    { label: 'Studying', value: 'M.Sc, IIT Delhi', icon: 'cap', accent: 'violet' },
    { label: 'Focus', value: 'GenAI, ML & deep learning', icon: 'sparkle', accent: 'cyan' },
    { label: 'Building', value: 'MERN & GenAI products', icon: 'code', accent: 'pink' },
    { label: 'Based in', value: PROFILE.location, icon: 'pin', accent: 'amber' },
  ],
  highlight: { value: '200+', label: 'learners mentored in DSA & React at Coding Ninjas' },
};

export const EXPERTISE = [
  {
    title: 'Full-stack web',
    description: 'Production-style apps with secure auth, real-time data and clean state management.',
    stack: ['React', 'Redux', 'Node', 'Express', 'MongoDB', 'Supabase'],
    icon: 'code',
    accent: 'violet',
  },
  {
    title: 'Generative AI',
    description: 'RAG pipelines, agent graphs and LLM tooling wired into real products.',
    stack: ['LangChain', 'LangGraph', 'LangSmith', 'OpenAI', 'FastAPI'],
    icon: 'sparkle',
    accent: 'cyan',
  },
  {
    title: 'ML & Deep Learning',
    description: 'Regression and neural-network models, data analysis and deep-learning pipelines.',
    stack: ['Python', 'TensorFlow', 'NumPy', 'Pandas', 'Matplotlib'],
    icon: 'network',
    accent: 'pink',
  },
];

export const RESEARCH = {
  eyebrow: 'Currently researching · IIT Delhi thesis',
  title: { before: 'Teaching machines to guard', accent: 'secret keys.' },
  description:
    "Machine-learning based post-processing for Continuous-Variable QKD, under Prof. Neel Kanth Kundu (co-supervisor Prof. Bhasker Kanseri). I'm building an end-to-end simulator and training neural models to sharpen parameter estimation, error correction and secure key rates.",
  pipeline: ['Quantum channel', 'ML parameter estimation', 'Error correction', 'Secure key'],
  caption: 'Gaussian-modulated coherent states in (x, p) phase space, rendered for this site.',
};
