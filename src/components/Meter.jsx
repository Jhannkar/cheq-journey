import { useInView } from '../hooks/useInView.js'

/**
 * Hairline bar that fills to a percentage. Only ever rendered for figures
 * the source actually states as a percentage — never as decoration.
 */
export default function Meter({ percent, tone = 'green', label }) {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const clamped = Math.max(0, Math.min(100, percent))

  return (
    <div
      ref={ref}
      className={`meter meter--${tone} ${inView ? 'is-visible' : ''}`}
      role="img"
      aria-label={label ?? `${percent}%`}
    >
      <span className="meter__fill" style={{ '--meter-width': `${clamped}%` }} />
    </div>
  )
}
