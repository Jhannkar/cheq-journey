/** Generic white card. `title` renders as a small uppercase eyebrow. */
export default function ContentCard({ title, children, className = '' }) {
  return (
    <section className={`card content-card ${className}`}>
      {title && <h3 className="content-card__title">{title}</h3>}
      {children}
    </section>
  )
}
