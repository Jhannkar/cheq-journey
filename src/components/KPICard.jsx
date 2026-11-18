import Metric from './Metric.jsx'
import Meter from './Meter.jsx'

export default function KPICard({ value, label, note, meter, meterTone }) {
  return (
    <article className="card kpi-card">
      <Metric value={value} className="kpi-card__value" />
      <p className="kpi-card__label">{label}</p>
      {typeof meter === 'number' && (
        <Meter percent={meter} tone={meterTone} label={`${label}: ${meter}%`} />
      )}
      {note && <p className="kpi-card__note">{note}</p>}
    </article>
  )
}
