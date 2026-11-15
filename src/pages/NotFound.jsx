import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="wrap flex min-h-[70vh] flex-col items-start justify-center gap-6 py-24">
      <span className="outline-text font-display text-[clamp(120px,22vw,280px)] leading-[0.8] font-extrabold tracking-[-0.06em]">404</span>
      <h1 className="font-display text-[clamp(32px,4.6vw,56px)] leading-tight font-extrabold tracking-[-0.04em]">
        This page <span className="gradient-text">doesn't exist.</span>
      </h1>
      <Link to="/" className="btn btn-grad">Back to home</Link>
    </section>
  );
}
