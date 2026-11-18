import StatusBadge from './StatusBadge.jsx'
import ImpactList from './ImpactList.jsx'

export default function SOPCard({
  title,
  status,
  description,
  outcomeHeading = 'KEY OUTCOMES',
  outcomes,
  link,
}) {
  const tone = status?.tone ?? 'live'

  return (
    <article className={`card sop-card sop-card--${tone}`}>
      <div className="sop-card__head">
        <h3 className="sop-card__title">{title}</h3>
        {status && <StatusBadge {...status} />}
      </div>
      <p className="sop-card__description">{description}</p>
      <ImpactList heading={outcomeHeading} items={outcomes} />
      {link && (
        <a
          className="sop-card__link"
          href={link.href}
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>{link.label}</span>
          <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <path d="M6 3h7v7" />
            <path d="M13 3 4 12" />
          </svg>
        </a>
      )}
    </article>
  )
}
