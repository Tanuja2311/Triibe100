const PersonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4"/>
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
  </svg>
)

export default function FounderCard({ founder }) {
  return (
    <div
      className="rounded-xl overflow-hidden hover:border-[#1B3A2D] transition-all duration-200 cursor-pointer"
      style={{ border: '0.5px solid #e5e7eb', backgroundColor: 'rgba(255,255,255,0.95)' }}
    >
      {/* Banner — swap this div for <img src={founder.photo} alt={founder.name} className="w-full h-full object-cover object-top" /> when photos are ready */}
      <div className="relative h-40 flex items-center justify-center" style={{ backgroundColor: '#E8EFE8' }}>
        <span
          className="absolute top-0 left-0 text-[9px] leading-none"
          style={{ color: 'rgba(27,58,45,0.5)', padding: '6px 8px' }}
        >
          #{String(founder.id).padStart(2, '0')}
        </span>
        <PersonIcon />
      </div>

      {/* Body */}
      <div style={{ padding: '8px 10px', backgroundColor: 'rgba(255,255,255,0.95)' }}>
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
