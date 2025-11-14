import React from 'react'
import { Link } from 'react-router-dom'

const WatchlistEmptyState = ({ onAddAsset }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-dashed border-blue-200 bg-white/70 p-12 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-2xl">🔍</div>
      <h3 className="text-2xl font-semibold text-gray-900">No assets tracked yet</h3>
      <p className="max-w-md text-sm text-gray-600">
        Start building your watchlist by adding tokens, NFTs, or DeFi pools. You can dive into our discovery
        sections to find trending opportunities and set instant alerts.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="button"
          onClick={onAddAsset}
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
        >
          + Add asset manually
        </button>
        <Link
          to="/tokens"
          className="inline-flex items-center justify-center rounded-lg border border-blue-200 px-6 py-3 text-sm font-semibold text-blue-600 transition-colors duration-200 hover:border-blue-300 hover:text-blue-700"
        >
          Explore tokens
        </Link>
      </div>
    </div>
  )
}

export default WatchlistEmptyState
