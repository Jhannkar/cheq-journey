import Section from '../components/Section.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import KPIGrid from '../components/KPIGrid.jsx'
import StatCallout from '../components/StatCallout.jsx'
import Reveal from '../components/Reveal.jsx'
import { chargeback } from '../data/performanceData.js'

export default function ChargebackSection() {
  const { id, heading, subtitle, description, kpis, contestRate } = chargeback

  return (
    <Section id={id}>
      <SectionHeader heading={heading} subtitle={subtitle} description={description} />
      <KPIGrid items={kpis} columns={4} />
      <Reveal delay={120}>
        <StatCallout {...contestRate} />
      </Reveal>
    </Section>
  )
}
