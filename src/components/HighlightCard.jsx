/**
 * Tinted card with a green accent rail — used for KEY CONTRIBUTION,
 * TAT MANAGEMENT APPROACH and similar callouts.
 */
export default function HighlightCard({ heading, body, children }) {
  return (
    <section className="card highlight-card">
      {heading && <h3 className="highlight-card__heading">{heading}</h3>}
      {body && <p className="highlight-card__body">{body}</p>}
      {children}
    </section>
  )
}
