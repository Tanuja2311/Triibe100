function getInitials(name) {
  const parts = name.trim().split(' ')
  return parts.length === 1
    ? parts[0][0].toUpperCase()
    : (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export default function FounderCard({ founder }) {
  return (
    <div
      className="rounded-xl overflow-hidden hover:border-[#1B3A2D] transition-all duration-200 cursor-pointer"
      style={{ border: '0.5px solid #e5e7eb' }}
    >
      {/* Banner — swap this div for <img src={founder.photo} alt={founder.name} className="w-full h-full object-cover object-top" /> when photos are ready */}
      <div className="relative h-40 flex items-center justify-center" style={{ backgroundColor: '#E8EFE8' }}>
        <span
          className="absolute top-0 left-0 text-[9px] leading-none"
          style={{ color: 'rgba(27,58,45,0.5)', padding: '6px 8px' }}
        >
          #{String(founder.id).padStart(2, '0')}
        </span>
        <span className="text-[32px] font-medium" style={{ color: '#1B3A2D' }}>
          {getInitials(founder.name)}
        </span>
      </div>

      {/* Body */}
      <div className="bg-white" style={{ padding: '8px 10px' }}>
        <p className="text-[11px] font-medium text-gray-900 leading-tight truncate">
          {founder.name}
        </p>
        <p className="text-[10px] text-gray-400 leading-tight truncate" style={{ marginTop: '2px' }}>
          {founder.org}
        </p>
      </div>
    </div>
  )
}
