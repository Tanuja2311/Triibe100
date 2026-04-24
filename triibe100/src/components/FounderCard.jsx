export default function FounderCard({ founder }) {
  return (
    <div className="relative bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md hover:border-gray-200 transition-all cursor-pointer group">
      <span className="absolute top-3 right-3 text-xs font-bold text-gray-200 group-hover:text-gray-300 transition-colors tabular-nums">
        #{String(founder.id).padStart(3, '0')}
      </span>
      <div className="flex flex-col items-center text-center pt-1">
        <div className="w-14 h-14 rounded-full bg-gray-100 mb-3 flex-shrink-0" />
        <p className="text-sm font-medium text-gray-900 leading-tight">{founder.name}</p>
        <p className="text-xs text-gray-400 mt-1 leading-tight">{founder.org}</p>
      </div>
    </div>
  )
}
