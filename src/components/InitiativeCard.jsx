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
  image,
}) {
  const tone = status?.tone ?? 'shipped'
  const imageSrc = image && `${import.meta.env.BASE_URL}${image.src}`

  return (
    <article className={`card initiative-card initiative-card--${tone}`}>
      <div className="initiative-card__head">
        <h3 className="initiative-card__title">{title}</h3>
        {status && <StatusBadge {...status} />}
      </div>
      <p className="initiative-card__description">{description}</p>
      {image && (
        <figure className="initiative-card__figure">
          <a href={imageSrc} target="_blank" rel="noreferrer" title="Open full size">
            <img
              src={imageSrc}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
            />
          </a>
          {image.caption && <figcaption>{image.caption}</figcaption>}
        </figure>
      )}
      <ImpactList heading={impactHeading} items={impact} />
    </article>
  )
}
