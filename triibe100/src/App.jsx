import { useScrollBlend } from './hooks/useScrollBlend'
import zones from './data/zones'
import founders from './data/founders'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import ZoneSection from './components/ZoneSection'
import FooterCTA from './components/FooterCTA'
import Footer from './components/Footer'

export default function App() {
  const { activeZone, blendOpacity, zoneRefs } = useScrollBlend(zones.length)

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <Hero />
      <Intro />
      {zones.map((zone, i) => (
        <ZoneSection
          key={zone.id}
          zone={zone}
          founders={founders.filter(f => f.zone === zone.id)}
          zoneRef={el => { zoneRefs.current[i] = el }}
          nextImage={zones[Math.min(i + 1, zones.length - 1)].image}
          blendOpacity={activeZone === i ? blendOpacity : 0}
        />
      ))}
      <FooterCTA />
      <Footer />
    </div>
  )
}
