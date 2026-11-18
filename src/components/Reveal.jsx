import { useInView } from '../hooks/useInView.js'

/**
 * Fade-and-rise on first scroll into view. `delay` staggers siblings.
 * Collapses to no motion when the visitor prefers reduced motion (CSS).
 */
export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
