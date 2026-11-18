import { useCallback, useMemo } from 'react'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import HeroSection from './sections/HeroSection.jsx'
import OperationalSummary from './sections/OperationalSummary.jsx'
import FraudSection from './sections/FraudSection.jsx'
import ChargebackSection from './sections/ChargebackSection.jsx'
import CXSection from './sections/CXSection.jsx'
import SRSection from './sections/SRSection.jsx'
import ImprovementsSection from './sections/ImprovementsSection.jsx'
import SOPSection from './sections/SOPSection.jsx'
import OverallSummary from './sections/OverallSummary.jsx'

import { useActiveSection } from './hooks/useActiveSection.js'
import { useScrollState } from './hooks/useScrollState.js'
import { navItems, footerText } from './data/performanceData.js'

export default function App() {
  const sectionIds = useMemo(() => navItems.map((item) => item.id), [])
  const activeId = useActiveSection(sectionIds)
  const { progress, scrolled } = useScrollState()

  // Smooth scroll without leaving a hash behind in the URL bar.
  // Also called by the hero dial, where there is no click event to cancel.
  const scrollTo = useCallback((eventOrId, maybeId) => {
    const id = maybeId ?? eventOrId
    const event = maybeId ? eventOrId : null
    const target = document.getElementById(id)
    if (!target) return
    event?.preventDefault()
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <div className="app">
      <Header
        navItems={navItems}
        activeId={activeId}
        onNavigate={scrollTo}
        scrolled={scrolled}
        progress={progress}
      />

      <main>
        <HeroSection onNavigate={scrollTo} />
        <OperationalSummary />
        <FraudSection />
        <ChargebackSection />
        <CXSection />
        <SRSection />
        <ImprovementsSection />
        <SOPSection />
        <OverallSummary />
      </main>

      <Footer text={footerText} />
    </div>
  )
}
