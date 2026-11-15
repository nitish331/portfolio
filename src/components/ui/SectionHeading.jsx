import { Reveal } from './Reveal.jsx';

// The big section title with a gradient (or gold) word.
// align="split": title left, description/action right.  align="center": stacked, centred.
export default function SectionHeading({
  eyebrow,
  title,
  accent,
  after,
  description,
  action,
  align = 'split',
  gold = false,
  as: Tag = 'h2',
  className = '',
}) {
  const heading = (
    <Tag className="max-w-3xl font-display text-[clamp(38px,5.2vw,68px)] leading-none font-extrabold tracking-[-0.045em]">
      {title}
      {accent && (
        <>
          {' '}
          <span className={gold ? 'gold-text' : 'gradient-text'}>{accent}</span>
        </>
      )}
      {after && <> {after}</>}
    </Tag>
  );

  const eyebrowChip = eyebrow && <span className="glass chip self-start">{eyebrow}</span>;

  if (align === 'center') {
    return (
      <Reveal className={`flex flex-col items-center gap-4 text-center ${className}`}>
        {eyebrow && <span className="glass chip">{eyebrow}</span>}
        {heading}
        {description && <p className="max-w-xl text-base leading-relaxed text-muted">{description}</p>}
        {action}
      </Reveal>
    );
  }

  return (
    <Reveal className={`flex flex-wrap items-end justify-between gap-5 ${className}`}>
      <div className="flex flex-col gap-4">
        {eyebrowChip}
        {heading}
      </div>
      {description && <p className="max-w-[360px] text-base leading-relaxed text-muted">{description}</p>}
      {action}
    </Reveal>
  );
}
