import React from 'react'

const sortIndicator = (active, direction) => {
  if (!active) return null
  return direction === 'asc' ? '↑' : '↓'
}

const WatchlistTable = ({
  columns = [],
  assets = [],
  sortState,
  onSort,
  onSelectAsset,
  selectedAssetId,
  emptyState = null,
  renderRowActions,
}) => {
  const handleSort = (column) => {
    if (!column.sortable || !onSort) return

    const isActive = sortState?.key === column.key
    const nextDirection = isActive && sortState.direction === 'asc' ? 'desc' : 'asc'

    onSort({ key: column.key, direction: nextDirection })
  }

  if (!assets?.length) {
    return emptyState || null
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-blue-100">
          <thead className="bg-blue-50/60">
            <tr>
              {columns.map((column) => {
                const isActive = sortState?.key === column.key

                return (
                  <th
                    key={column.key}
                    scope="col"
                    className={`whitespace-nowrap px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-blue-700 ${
                      column.align === 'center'
                        ? 'text-center'
                        : column.align === 'right'
                        ? 'text-right'
                        : 'text-left'
                    } ${column.headerClassName || ''}`}
                  >
                    <button
                      type="button"
                      onClick={() => handleSort(column)}
                      className={`inline-flex items-center gap-1 ${
                        column.sortable ? 'cursor-pointer hover:text-blue-900' : 'cursor-default'
                      }`}
                      disabled={!column.sortable}
                    >
                      <span>{column.label}</span>
                      {column.sortable && (
                        <span className="text-xs text-blue-400">
                          {sortIndicator(isActive, sortState?.direction)}
                        </span>
                      )}
                    </button>
                  </th>
                )
              })}
              {typeof renderRowActions === 'function' && <th className="px-4 py-3" />}
            </tr>
          </thead>
          <tbody className="divide-y divide-blue-50/80">
            {assets.map((asset) => {
              const isSelected = selectedAssetId === asset.id

              return (
                <tr
                  key={asset.id}
                  onClick={onSelectAsset ? () => onSelectAsset(asset) : undefined}
                  className={`transition-colors duration-150 hover:bg-blue-50/40 ${
                    isSelected ? 'bg-blue-50/60' : 'bg-white'
                  }`}
                >
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className={`whitespace-nowrap px-4 py-4 text-sm text-gray-600 ${
                        column.align === 'center'
                          ? 'text-center'
                          : column.align === 'right'
                          ? 'text-right'
                          : 'text-left'
                      } ${column.cellClassName || ''}`}
                    >
                      {column.render ? column.render(asset) : asset[column.key]}
                    </td>
                  ))}
                  {typeof renderRowActions === 'function' && (
                    <td className="px-4 py-4 text-right">
                      {renderRowActions({ asset, isSelected })}
                    </td>
                  )}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default WatchlistTable
