import { motion } from 'framer-motion';
import { accent } from '../../data/accents.js';
import quadrature from '../../assets/quadrature.webp';

const TYPE_LABEL = { education: 'Education', research: 'Research', experience: 'Experience' };
const CHIP_ACCENTS = ['amber', 'cyan', 'violet'];
const COURSE_ACCENTS = ['violet', 'cyan', 'pink', 'amber'];

const cardBase =
  'rounded-[28px] transition-[translate,box-shadow] duration-400 ease-out-soft hover:-translate-y-1.5 hover:shadow-[0_30px_80px_-30px_rgba(124,92,255,.65)]';

function Points({ items, color }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((point) => (
        <li key={point.slice(0, 32)} className="flex gap-3 text-[15px] leading-relaxed text-muted">
          <span aria-hidden="true" className="flex-none font-extrabold" style={{ color }}>→</span>
          {point}
        </li>
      ))}
    </ul>
  );
}

function Chips({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((chip, i) => {
        const tone = accent(CHIP_ACCENTS[i % CHIP_ACCENTS.length]);
        return (
          <span key={chip} className="chip" style={{ background: tone.tint, color: tone.light }}>
            {chip}
          </span>
        );
      })}
    </div>
  );
}

function Eyebrow({ entry, color }) {
  return (
    <span className="font-mono text-xs tracking-[0.08em] uppercase" style={{ color }}>
      {TYPE_LABEL[entry.type]}
      {entry.org && entry.stats ? ` · ${entry.org}` : ''}
    </span>
  );
}

// Research: image banner on top.
function ResearchCard({ entry }) {
  const tone = accent(entry.accent);
  return (
    <article className={`glass overflow-hidden bg-panel/60 ${cardBase}`}>
      <div className="relative h-[170px] overflow-hidden">
        <motion.img
          src={quadrature}
          alt=""
          className="size-full object-cover"
          animate={{ scale: [1.05, 1.25], rotate: [0, 6] }}
          transition={{ duration: 24, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />
        <span className="chip absolute bottom-4 left-5 text-on-accent" style={{ background: tone.solid }}>
          Research · M.Sc thesis
        </span>
      </div>
      <div className="flex flex-col gap-3.5 p-[24px_28px]">
        <h2 className="font-display text-[clamp(22px,2.3vw,28px)] leading-[1.15] font-extrabold tracking-[-0.025em]">{entry.title}</h2>
        <p className="text-[15px] text-soft">{entry.supervisors}</p>
        <Points items={entry.points} color={tone.solid} />
      </div>
    </article>
  );
}

// Class X / XII: title on the left, big gradient score on the right.
function ScoreCard({ entry }) {
  const tone = accent(entry.accent);
  return (
    <article className={`glass flex flex-wrap items-center justify-between gap-4 p-7 ${cardBase}`}>
      <div className="flex flex-col gap-1.5">
        <span className="font-mono text-xs tracking-[0.08em] uppercase" style={{ color: tone.light }}>
          Education · CBSE
        </span>
        <h2 className="font-display text-[clamp(22px,2.4vw,28px)] font-extrabold tracking-[-0.03em]">{entry.title.replace(' · CBSE', '')}</h2>
        <p className="text-[15px] text-muted">{entry.org}</p>
      </div>
      <span className="gradient-text font-display text-[clamp(44px,5vw,64px)] font-extrabold tracking-[-0.05em]">{entry.score}</span>
    </article>
  );
}

// M.Sc, B.Sc, Coding Ninjas: optional coloured header band, badge, chips, coursework, stats, points.
function StandardCard({ entry }) {
  const tone = accent(entry.accent);
  const banded = Boolean(entry.coursework || entry.stats);

  const header = (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-col gap-1">
        <Eyebrow entry={entry} color={banded ? '#E3E6FA' : tone.light} />
        <h2 className="font-display text-[clamp(22px,2.6vw,32px)] leading-[1.15] font-extrabold tracking-[-0.03em]">{entry.title}</h2>
      </div>
      {entry.badge && (
        <span
          className={`rounded-2xl px-4 py-2.5 font-display text-[22px] font-extrabold ${banded ? 'glass' : 'text-on-accent'}`}
          style={banded ? undefined : { background: tone.gradient }}
        >
          {entry.badge.value}{' '}
          <span className={`text-[13px] font-semibold ${banded ? 'text-soft' : ''}`}>{entry.badge.label}</span>
        </span>
      )}
    </div>
  );

  return (
    <article className={`${entry.current ? 'gradient-border' : 'glass bg-panel/60'} overflow-hidden ${cardBase}`}>
      {banded ? (
        <div
          className="p-[24px_28px]"
          style={{ background: `linear-gradient(135deg, ${tone.glow}, rgba(34,211,238,.18))` }}
        >
          {header}
        </div>
      ) : (
        <div className="p-[28px_28px_0]">{header}</div>
      )}

      <div className="flex flex-col gap-4 p-[24px_28px]">
        {!entry.stats && <p className="text-[17px] font-semibold">{entry.org}</p>}
        {entry.chips && <Chips items={entry.chips} />}

        {entry.coursework && (
          <>
            <span className="pt-1 font-mono text-xs tracking-[0.08em] text-muted uppercase">Coursework</span>
            <div className="flex flex-wrap gap-1.5">
              {entry.coursework.map((course, i) => (
                <span
                  key={course}
                  className="inline-flex items-center rounded-[10px] px-3 py-[7px] text-[13px] font-semibold transition-[translate,rotate] duration-200 hover:-translate-y-0.5 hover:-rotate-2"
                  style={{ background: accent(COURSE_ACCENTS[i % COURSE_ACCENTS.length]).tint }}
                >
                  {course}
                </span>
              ))}
            </div>
          </>
        )}

        {entry.stats && (
          <div className="grid grid-cols-3 gap-2.5">
            {entry.stats.map((stat) => (
              <div key={stat.label} className="glass flex flex-col gap-0.5 rounded-2xl p-3.5">
                <span className="gradient-text font-display text-[clamp(22px,2.6vw,32px)] font-extrabold">{stat.value}</span>
                <span className="text-[13px] text-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        )}

        {entry.points && <Points items={entry.points} color={tone.solid} />}
      </div>
    </article>
  );
}

export default function TimelineCard({ entry }) {
  if (entry.type === 'research') return <ResearchCard entry={entry} />;
  if (entry.score) return <ScoreCard entry={entry} />;
  return <StandardCard entry={entry} />;
}
