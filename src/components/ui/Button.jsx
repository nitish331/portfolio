import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';

// <Button to="/projects" icon="arrowRight">Explore</Button>      internal page
// <Button href="https://…" variant="glass">GitHub</Button>        external (opens new tab)
export default function Button({
  to,
  href,
  variant = 'grad',
  size = 'md',
  icon,
  iconPosition = 'right',
  className = '',
  children,
  ...rest
}) {
  const classes = [
    'btn group',
    variant === 'grad' ? 'btn-grad' : 'btn-glass',
    size === 'sm' ? 'min-h-11 px-5 text-sm' : '',
    className,
  ].join(' ');

  const content = (
    <>
      {icon && iconPosition === 'left' && <Icon name={icon} size={18} />}
      {children}
      {icon && iconPosition === 'right' && (
        <Icon name={icon} size={18} className="transition-[translate] duration-200 group-hover:translate-x-1" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  const external = typeof href === 'string' && /^https?:\/\//.test(href);
  return (
    <a href={href} className={classes} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})} {...rest}>
      {content}
    </a>
  );
}
