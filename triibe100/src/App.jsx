import { useState } from 'react'
import { CATEGORIES, founders } from './data/founders'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import CategorySection from './components/CategorySection'
import Footer, { FooterCTA } from './components/Footer'

export default function App() {
  const [activeCategory, setActiveCategory] = useState(null)

  function toggleCategory(name) {
    setActiveCategory(prev => (prev === name ? null : name))
  }

  const visibleCategories = activeCategory
    ? CATEGORIES.filter(c => c.name === activeCategory)
    : CATEGORIES

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <Hero activeCategory={activeCategory} onCategoryToggle={toggleCategory} />
      <Intro />
      {visibleCategories.map(cat => {
        const catIndex = CATEGORIES.findIndex(c => c.name === cat.name)
        return (
          <CategorySection
            key={cat.name}
            category={cat}
            founders={founders.filter(f => f.category === cat.name)}
            flip={catIndex % 2 !== 0}
            index={catIndex}
          />
        )
      })}
      <FooterCTA />
      <Footer />
    </div>
  )
}
