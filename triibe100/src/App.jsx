import { CATEGORIES, founders } from './data/founders'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import CategorySection from './components/CategorySection'
import Footer, { FooterCTA } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <Hero />
      <Intro />
      {CATEGORIES.map(cat => (
        <CategorySection
          key={cat.name}
          category={cat}
          founders={founders.filter(f => f.category === cat.name)}
        />
      ))}
      <FooterCTA />
      <Footer />
    </div>
  )
}
