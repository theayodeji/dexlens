import React from 'react'

const WatchlistSummary = ({ metrics }) => {
  if (!metrics?.length) return null

  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map(({ id, label, value, trend, trendLabel, icon: Icon }) => {
        const isPositive = trend >= 0
        return (
          <article
            key={id}
            className="flex flex-col gap-3 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{label}</p>
              {Icon && <Icon className="h-6 w-6 text-blue-500" aria-hidden />}
            </div>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            {typeof trend === 'number' && (
              <div className="flex items-center gap-2 text-sm font-medium">
                <span
                  className={`${
                    isPositive ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {isPositive ? '+' : ''}
                  {trendLabel || `${trend}%`}
                </span>
                <span className="text-gray-400">vs. last 24h</span>
              </div>
            )}
          </article>
        )
      })}
    </section>
  )
}

export default WatchlistSummary
