export default function ChannelPills({ heading, items }) {
  return (
    <section className="card channels">
      {heading && <h3 className="channels__heading">{heading}</h3>}
      <ul className="channels__list">
        {items.map((item) => (
          <li key={item} className="channels__pill">
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
