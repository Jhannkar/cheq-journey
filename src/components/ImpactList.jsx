/** Uppercase heading + green-ticked bullet list (IMPACT / KEY OUTCOMES). */
export default function ImpactList({ heading, items }) {
  return (
    <div className="impact">
      {heading && <h4 className="impact__heading">{heading}</h4>}
      <ul className="impact__list">
        {items.map((item) => (
          <li key={item} className="impact__item">
            <svg className="impact__tick" viewBox="0 0 16 16" aria-hidden="true">
              <path
                d="M3.5 8.5 L6.5 11.5 L12.5 4.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
