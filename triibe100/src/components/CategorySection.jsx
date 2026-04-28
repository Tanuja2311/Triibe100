import FounderCard from './FounderCard'

const CATEGORY_IMAGES = {
  Food: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1600',
  Water: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1600',
  Shelter: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=1600',
  Health: 'https://images.unsplash.com/photo-1652787545245-5e39748cdf97?w=1600',
  Education: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1600',
}

export default function CategorySection({ category, founders }) {
  const bgPosition = category.name === 'Health' ? 'right center' : 'center'

  return (
    <div
      id={category.name.toLowerCase()}
      className="relative parallax-section"
      style={{
        backgroundImage: `url('${CATEGORY_IMAGES[category.name]}')`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: bgPosition,
      }}
    >
      <div className="absolute inset-0" style={{ background: 'rgba(27,58,45,0.55)', zIndex: 0 }} />

      <div
        className="max-w-6xl mx-auto px-8 relative"
        style={{
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '10px',
          paddingTop: '20px',
          paddingBottom: '48px',
        }}
      >
        {founders.map(founder => (
          <FounderCard key={founder.id} founder={founder} />
        ))}
      </div>
    </div>
  )
}
