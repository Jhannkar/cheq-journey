import RotationDial from '../components/RotationDial.jsx'
import HeroRunner from '../components/HeroRunner.jsx'
import Metric from '../components/Metric.jsx'
import { profile, rotation, headlineKpis } from '../data/performanceData.js'

export default function HeroSection({ onNavigate }) {
  const { eyebrow, period, name, role, emailLabel, email, tenure } = profile

  return (
    <section id="top" className="hero">
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__identity">
          <p className="hero__eyebrow">
            <span className="hero__pulse" aria-hidden="true" />
            {eyebrow} · {period}
          </p>

          <h1 className="hero__name">{name}</h1>
          <p className="hero__role">{role}</p>

          <div className="hero__meta">
            <span className="hero__employer">{tenure}</span>
            <span className="hero__field">
              <span className="hero__field-label">{emailLabel}</span>
              <a className="hero__email" href={`mailto:${email}`}>
                {email}
              </a>
            </span>
            <div className="hero__runner">
              <HeroRunner />
            </div>
          </div>
        </div>

        <RotationDial items={rotation} onSelect={onNavigate} />
      </div>

      <div className="container">
        <dl className="hero__readouts">
          {headlineKpis.map((kpi) => (
            <div key={kpi.label} className="hero__readout">
              <dt className="hero__readout-label">{kpi.label}</dt>
              <dd className="hero__readout-value">
                <Metric value={kpi.value} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
