import { SITE } from '../data/site.js';

const SOCIALS = [
  { label: 'GitHub', href: SITE.github },
  { label: 'LinkedIn', href: SITE.linkedin },
  { label: 'Email', href: `mailto:${SITE.email}` },
];

export default function Footer() {
  return (
    <footer className="wrap relative mt-32 flex flex-col gap-2 pb-8">
      <span
        aria-hidden="true"
        className="outline-text select-none text-center font-display text-[clamp(80px,20vw,290px)] leading-[0.85] font-extrabold tracking-[-0.06em]"
      >
        NITISH
      </span>
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5 text-sm text-muted">
        <span>© {new Date().getFullYear()} Nitish · Built with React &amp; Framer Motion</span>
        <nav aria-label="Social links" className="flex gap-5">
          {SOCIALS.map((social) => (
            <a key={social.label} href={social.href} className="inline-flex min-h-6 items-center transition-colors hover:text-white">
              {social.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
