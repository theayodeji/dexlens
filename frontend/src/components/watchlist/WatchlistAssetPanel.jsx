import React from 'react'

const WatchlistAssetPanel = ({ asset, onClose }) => {
  if (!asset) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-blue-100 bg-white/70 p-10 text-center text-gray-500">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-xl">📊</div>
        <p className="text-sm">
          Select an asset from your watchlist to surface key metrics, notes, and alerts in one place.
        </p>
      </div>
    )
  }

  return (
    <aside className="flex flex-col gap-6 rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">{asset.name}</h2>
          <p className="text-sm uppercase tracking-wide text-blue-600">{asset.symbol}</p>
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="text-sm font-medium text-blue-600 transition-colors duration-200 hover:text-blue-700"
          >
            Close
          </button>
        )}
      </div>

      <div className="grid gap-4 text-sm text-gray-600">
        <div className="flex justify-between">
          <span className="text-gray-500">Last price</span>
          <span className="font-medium text-gray-900">{asset.price}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">24h change</span>
          <span className={asset.change >= 0 ? 'font-medium text-green-600' : 'font-medium text-red-600'}>
            {asset.change >= 0 ? '+' : ''}
            {asset.change}%
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Market cap</span>
          <span className="font-medium text-gray-900">{asset.marketCap}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Alerts</span>
          <span className="font-medium text-gray-900">{asset.alerts}</span>
        </div>
      </div>

      {asset.notes && (
        <div className="rounded-2xl bg-blue-50/60 p-4 text-sm text-gray-700">
          <p className="font-semibold text-blue-700">Desk notes</p>
          <p className="mt-2 leading-relaxed text-gray-600">{asset.notes}</p>
        </div>
      )}

      <button
        type="button"
        className="inline-flex items-center justify-center rounded-lg border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-600 transition-colors duration-200 hover:border-blue-300 hover:text-blue-700"
      >
        View full asset page
      </button>
    </aside>
  )
}

export default WatchlistAssetPanel
