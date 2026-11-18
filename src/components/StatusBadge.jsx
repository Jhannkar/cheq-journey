/**
 * Status pill. `tone` drives the colour:
 *   live    → green  (LIVE, REVAMPED, SOP)
 *   ongoing → amber  (ONGOING)
 */
export default function StatusBadge({ label, tone = 'live' }) {
  return (
    <span className={`status-badge status-badge--${tone}`}>
      <span className="status-badge__dot" aria-hidden="true" />
      {label}
    </span>
  )
}
