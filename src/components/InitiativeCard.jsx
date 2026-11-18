import StatusBadge from './StatusBadge.jsx'
import ImpactList from './ImpactList.jsx'

/**
 * Status is the structural device here, not a sequence number — these
 * initiatives are a portfolio, and what a reader needs to know first is
 * whether each one has shipped.
 */
export default function InitiativeCard({
  title,
  status,
  description,
  impactHeading = 'IMPACT',
  impact,
}) {
  const tone = status?.tone ?? 'shipped'

  return (
    <article className={`card initiative-card initiative-card--${tone}`}>
      <div className="initiative-card__head">
        <h3 className="initiative-card__title">{title}</h3>
        {status && <StatusBadge {...status} />}
      </div>
      <p className="initiative-card__description">{description}</p>
      <ImpactList heading={impactHeading} items={impact} />
    </article>
  )
}
