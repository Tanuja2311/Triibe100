import { zones } from './data/zones'
import { founders } from './data/founders'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import ZoneSection from './components/ZoneSection'
import FooterCTA from './components/FooterCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ background: '#002C19' }}>
      <Navbar />
      <Hero />
      <Intro />
      {zones.map((zone, i) => (
        <ZoneSection
          key={zone.id}
          zone={zone}
          founders={founders.slice(i * 10, i * 10 + 10)}
          isFirst={i === 0}
        />
      ))}
      <FooterCTA />
      <Footer />
    </div>
  )
}
