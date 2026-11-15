// Frosted card that lifts and glows violet on hover.
// variant="gradient" swaps the frosted look for the dark gradient-border panel.
export const cardHover =
  'transition-[translate,box-shadow,border-color] duration-400 ease-out-soft hover:-translate-y-2 hover:border-violet-light/50 hover:shadow-[0_30px_80px_-30px_rgba(124,92,255,.65)]';

export default function GlassCard({ as: Tag = 'div', variant = 'glass', hover = true, className = '', children, ...rest }) {
  const surface = variant === 'gradient' ? 'gradient-border' : 'glass';
  return (
    <Tag className={`${surface} rounded-[26px] ${hover ? cardHover : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
