// Endless horizontal strip. Children are rendered twice and the track slides by
// exactly one copy, so the loop is seamless. Pauses while hovered.
// <Marquee reverse duration={36}>{items}</Marquee>
export default function Marquee({ children, reverse = false, duration = 30, gap = 14, className = '' }) {
  return (
    <div className={`marquee ${className}`} style={{ '--marquee-gap': `${gap}px` }}>
      <div
        className="marquee-track"
        style={{ animationDuration: `${duration}s`, animationDirection: reverse ? 'reverse' : 'normal' }}
      >
        <div className="marquee-group">{children}</div>
        <div className="marquee-group" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
