/** Page section wrapper: provides the anchor id and vertical rhythm. */
export default function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">{children}</div>
    </section>
  )
}
