import Section from '../components/Section.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import InitiativeCard from '../components/InitiativeCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { improvements } from '../data/performanceData.js'

export default function ImprovementsSection() {
  const { id, heading, subtitle, initiatives } = improvements

  return (
    <Section id={id}>
      <SectionHeader heading={heading} subtitle={subtitle} />
      <div className="stack">
        {initiatives.map((initiative, i) => (
          <Reveal key={initiative.title} delay={Math.min(i, 3) * 80}>
            <InitiativeCard {...initiative} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
