import Section from '../components/Section.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import SOPCard from '../components/SOPCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { sops } from '../data/performanceData.js'

export default function SOPSection() {
  const { id, heading, subtitle, items } = sops

  return (
    <Section id={id}>
      <SectionHeader heading={heading} subtitle={subtitle} />
      <div className="stack">
        {items.map((sop, i) => (
          <Reveal key={sop.title} delay={i * 100}>
            <SOPCard {...sop} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
