/** Label/value ledger used for the final performance summary. */
export default function SummaryTable({ rows }) {
  return (
    <section className="summary-table">
      <dl className="summary-table__list">
        {rows.map((row) => (
          <div key={row.label} className="summary-table__row">
            <dt className="summary-table__label">{row.label}</dt>
            <dd className="summary-table__value">{row.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
