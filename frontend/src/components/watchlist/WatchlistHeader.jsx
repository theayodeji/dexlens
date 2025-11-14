import React from 'react'

const WatchlistHeader = ({ heading, subheading, groups, activeGroupId, onGroupChange, onAddAsset }) => {
  return (
    <section className="flex flex-col gap-6 rounded-3xl border border-blue-100 bg-white/80 p-8 shadow-sm backdrop-blur">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{heading}</h1>
          <p className="mt-2 max-w-2xl text-sm text-gray-600 sm:text-base">{subheading}</p>
        </div>
        <button
          type="button"
          onClick={onAddAsset}
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
        >
          + Add asset
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {groups.map(({ id, label, count }) => {
          const isActive = id === activeGroupId
          return (
            <button
              key={id}
              type="button"
              onClick={() => onGroupChange(id)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? 'border-blue-600 bg-blue-50 text-blue-700'
                  : 'border-blue-100 bg-white text-gray-600 hover:border-blue-200 hover:text-blue-600'
              }`}
            >
              <span>{label}</span>
              {typeof count === 'number' && (
                <span
                  className={`inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full px-2 text-xs font-semibold ${
                    isActive ? 'bg-blue-100 text-blue-700' : 'bg-blue-50 text-blue-600'
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default WatchlistHeader
