// Skill groups (Achievements → Toolbox) and the scrolling marquees.

export const SKILL_GROUPS = [
  { title: 'Languages', accent: 'violet', items: ['C++', 'Python', 'Java', 'JavaScript', 'SQL', 'HTML', 'CSS', 'Data structures & algorithms'] },
  { title: 'Frontend', accent: 'cyan', items: ['React.js', 'Redux', 'React Query', 'React Router', 'TailwindCSS', 'Bootstrap', 'Chart.js', 'Axios'] },
  { title: 'Backend & data stores', accent: 'pink', items: ['Node.js', 'Express.js', 'REST APIs', 'Socket.IO', 'FastAPI', 'MongoDB', 'MySQL', 'Supabase'] },
  { title: 'Generative AI', accent: 'amber', items: ['LangChain', 'LangGraph', 'LangSmith', 'RAG pipelines', 'LLM tooling', 'Streamlit'] },
  { title: 'ML, DL & data', accent: 'mint', items: ['TensorFlow', 'Deep learning', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Plotly', 'Power BI'] },
  { title: 'Tools & platforms', accent: null, items: ['Git', 'GitHub', 'Docker', 'Heroku', 'Postman', 'VS Code', 'Jupyter', 'Google Colab'] },
];

// Home: glass chips row + big gradient words row.
export const MARQUEE_TECH = ['React', 'Node.js', 'LangGraph', 'MongoDB', 'TensorFlow', 'Socket.IO', 'Python', 'C++', 'Redux', 'LangChain'];
export const MARQUEE_THEMES = ['Full-stack apps', 'Generative AI', 'Deep learning', 'RAG pipelines', 'Real-time systems'];

// Achievements: solid gradient pills + outlined pills.
export const TOOLBOX_PRIMARY = ['React', 'Python', 'LangChain', 'Node.js', 'TensorFlow', 'C++', 'MongoDB'];
export const TOOLBOX_SECONDARY = ['Redux', 'LangGraph', 'Socket.IO', 'Supabase', 'Docker', 'FastAPI', 'NumPy'];
