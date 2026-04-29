import zones from './data/zones'
import founders from './data/founders'
import { useHorizontalDrift } from './hooks/useHorizontalDrift'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import ZoneSection from './components/ZoneSection'
import FooterCTA from './components/FooterCTA'
import Footer from './components/Footer'

export default function App() {
  const { getDriftX } = useHorizontalDrift()

  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      {zones.map((zone, i) => (
        <ZoneSection
          key={zone.id}
          zone={zone}
          founders={founders.filter(f => f.zone === zone.id)}
          driftX={getDriftX(i)}
        />
      ))}
      <FooterCTA />
      <Footer />
    </>
  )
}
