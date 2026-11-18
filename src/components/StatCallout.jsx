import Metric from './Metric.jsx'
import Meter from './Meter.jsx'

/** Large centred figure with a title and supporting copy (contest rate). */
export default function StatCallout({ value, meter, title, body }) {
  return (
    <section className="card stat-callout">
      <Metric value={value} className="stat-callout__value" />
      {typeof meter === 'number' && (
        <div className="stat-callout__meter">
          <Meter percent={meter} label={`${title}: ${meter}%`} />
        </div>
      )}
      <h3 className="stat-callout__title">{title}</h3>
      <p className="stat-callout__body">{body}</p>
    </section>
  )
}
