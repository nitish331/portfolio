// Skill groups (Achievements → Toolbox) and the scrolling marquees.

export const SKILL_GROUPS = [
  { title: 'Languages', accent: 'violet', items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'SQL', 'HTML', 'CSS'] },
  { title: 'Frontend', accent: 'cyan', items: ['React.js', 'Redux', 'React Query', 'React Router', 'Tailwind CSS', 'Bootstrap', 'Chart.js', 'Axios'] },
  { title: 'Backend', accent: 'pink', items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'Socket.IO', 'JWT', 'Passport.js'] },
  {
    title: 'Generative AI',
    accent: 'amber',
    items: ['Google Gemini', 'OpenAI', 'Multimodal document AI / OCR', 'RAG pipelines', 'LangChain', 'LangGraph', 'LangSmith', 'Prompt engineering', 'Embeddings'],
  },
  { title: 'ML & data', accent: 'mint', items: ['TensorFlow', 'Keras', 'Scikit-learn', 'NLP', 'Deep learning', 'NumPy', 'Pandas', 'Matplotlib', 'Plotly', 'Power BI', 'Streamlit'] },
  { title: 'Databases & tools', accent: null, items: ['MongoDB', 'MySQL', 'Supabase', 'Git', 'GitHub', 'Docker', 'Postman', 'Heroku', 'VS Code', 'Jupyter'] },
];

// Home: glass chips row + big gradient words row.
export const MARQUEE_TECH = ['React', 'TypeScript', 'Node.js', 'Python', 'Google Gemini', 'LangGraph', 'MongoDB', 'TensorFlow', 'Socket.IO', 'FastAPI'];
export const MARQUEE_THEMES = ['Full-stack apps', 'Generative AI', 'Document AI', 'Deep learning', 'RAG pipelines', 'Real-time systems'];

// Achievements: solid gradient pills + outlined pills.
export const TOOLBOX_PRIMARY = ['React', 'Python', 'Gemini', 'TypeScript', 'TensorFlow', 'Node.js', 'LangGraph'];
export const TOOLBOX_SECONDARY = ['Redux', 'LangChain', 'Socket.IO', 'Supabase', 'Docker', 'FastAPI', 'Keras', 'Scikit-learn'];
