import React, { Suspense, useMemo, useState } from 'react'

const WatchlistHeader = React.lazy(() => import('../components/watchlist/WatchlistHeader'))
const WatchlistSummary = React.lazy(() => import('../components/watchlist/WatchlistSummary'))
const WatchlistTable = React.lazy(() => import('../components/watchlist/WatchlistTable'))
const WatchlistEmptyState = React.lazy(() => import('../components/watchlist/WatchlistEmptyState'))
const WatchlistAssetPanel = React.lazy(() => import('../components/watchlist/WatchlistAssetPanel'))

const Watchlist = () => {
  const [activeGroupId, setActiveGroupId] = useState('all')
  const [sortState, setSortState] = useState({ key: 'change', direction: 'desc' })
  const [selectedAssetId, setSelectedAssetId] = useState(undefined)

  const placeholderAssets = useMemo(
    () => [
      {
        id: 'btc',
        name: 'Bitcoin',
        symbol: 'BTC',
        segment: 'layer1',
        price: '$64,210.32',
        priceValue: 64210.32,
        change: 2.4,
        marketCap: '$1.26T',
        marketCapValue: 1260000000000,
        volume: '$28.6B',
        volumeValue: 28600000000,
        alerts: '3 alerts',
        notes: 'Watching ETF inflows and mining hash rates post-halving.',
      },
      {
        id: 'eth',
        name: 'Ethereum',
        symbol: 'ETH',
        segment: 'layer1',
        price: '$3,120.88',
        priceValue: 3120.88,
        change: 1.1,
        marketCap: '$374B',
        marketCapValue: 374000000000,
        volume: '$16.4B',
        volumeValue: 16400000000,
        alerts: '1 alert',
        notes: 'Track staking outflows and L2 TVL growth.',
      },
      {
        id: 'sol',
        name: 'Solana',
        symbol: 'SOL',
        segment: 'high-beta',
        price: '$168.05',
        priceValue: 168.05,
        change: -3.7,
        marketCap: '$74B',
        marketCapValue: 74000000000,
        volume: '$8.2B',
        volumeValue: 8200000000,
        alerts: '2 alerts',
        notes: 'Monitoring liquidation cascades and meme coin volumes.',
      },
      {
        id: 'ena',
        name: 'Ethena',
        symbol: 'ENA',
        segment: 'defi',
        price: '$0.93',
        priceValue: 0.93,
        change: 5.6,
        marketCap: '$1.4B',
        marketCapValue: 1400000000,
        volume: '$410M',
        volumeValue: 410000000,
        alerts: 'Automation paused',
        notes: 'Yield strategies paused pending governance vote.',
      },
    ],
    []
  )

  const groups = useMemo(() => {
    const baseGroups = [
      { id: 'all', label: 'All assets' },
      { id: 'layer1', label: 'Layer 1' },
      { id: 'defi', label: 'DeFi' },
      { id: 'high-beta', label: 'High beta' },
    ]

    return baseGroups.map((group) => ({
      ...group,
      count:
        group.id === 'all'
          ? placeholderAssets.length
          : placeholderAssets.filter((asset) => asset.segment === group.id).length,
    }))
  }, [placeholderAssets])

  const metrics = useMemo(
    () => [
      {
        id: 'total-value',
        label: 'Total tracked value',
        value: '$1.7T',
        trend: 1.9,
        trendLabel: '+1.9%',
      },
      {
        id: 'avg-change',
        label: 'Avg. 24h change',
        value: '+1.35%',
        trend: 1.35,
      },
      {
        id: 'active-alerts',
        label: 'Active alerts',
        value: '12',
        trend: -2,
        trendLabel: '-2 resolved',
      },
      {
        id: 'narratives',
        label: 'Narratives tracked',
        value: '5 focus themes',
      },
    ],
    []
  )

  const filteredAssets = useMemo(() => {
    if (activeGroupId === 'all') return placeholderAssets
    return placeholderAssets.filter((asset) => asset.segment === activeGroupId)
  }, [activeGroupId, placeholderAssets])

  const sortedAssets = useMemo(() => {
    if (!sortState?.key) return filteredAssets

    const key = sortState.key
    const direction = sortState.direction === 'asc' ? 1 : -1

    const getComparableValue = (asset) => {
      switch (key) {
        case 'price':
          return asset.priceValue
        case 'change':
          return asset.change
        case 'marketCap':
          return asset.marketCapValue
        case 'volume':
          return asset.volumeValue
        default:
          return asset[key]
      }
    }

    return [...filteredAssets].sort((a, b) => {
      const aValue = getComparableValue(a)
      const bValue = getComparableValue(b)

      if (aValue === undefined || aValue === null) return 1
      if (bValue === undefined || bValue === null) return -1

      if (aValue === bValue) return 0

      return aValue > bValue ? direction : -direction
    })
  }, [filteredAssets, sortState])

  const selectedAsset = useMemo(
    () => sortedAssets.find((asset) => asset.id === selectedAssetId),
    [selectedAssetId, sortedAssets]
  )

  const columns = useMemo(
    () => [
      {
        key: 'asset',
        label: 'Asset',
        sortable: false,
        render: (asset) => (
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-600">
              {asset.symbol.slice(0, 3)}
            </div>
            <div>
              <p className="font-semibold text-gray-900">{asset.name}</p>
              <p className="text-xs uppercase tracking-wide text-gray-500">{asset.symbol}</p>
            </div>
          </div>
        ),
      },
      {
        key: 'price',
        label: 'Price',
        align: 'right',
        sortable: true,
        render: (asset) => <span className="font-semibold text-gray-900">{asset.price}</span>,
      },
      {
        key: 'change',
        label: '24h change',
        align: 'right',
        sortable: true,
        render: (asset) => (
          <span className={asset.change >= 0 ? 'font-semibold text-green-600' : 'font-semibold text-red-600'}>
            {asset.change >= 0 ? '+' : ''}
            {asset.change}%
          </span>
        ),
      },
      {
        key: 'marketCap',
        label: 'Market cap',
        align: 'right',
        sortable: true,
        render: (asset) => <span className="text-sm text-gray-600">{asset.marketCap}</span>,
      },
      {
        key: 'volume',
        label: 'Volume 24h',
        align: 'right',
        sortable: true,
        render: (asset) => <span className="text-sm text-gray-600">{asset.volume}</span>,
      },
      {
        key: 'alerts',
        label: 'Alerts',
        align: 'center',
        sortable: false,
        render: (asset) => <span className="text-xs font-medium text-blue-600">{asset.alerts}</span>,
      },
    ],
    []
  )

  const handleSort = (nextSort) => {
    setSortState(nextSort)
  }

  const handleSelectAsset = (asset) => {
    setSelectedAssetId((prev) => (prev === asset.id ? undefined : asset.id))
  }

  const handleAddAsset = () => {
    // Hook into modal or flow when backend wiring is ready
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <Suspense fallback={<div className="h-32 rounded-3xl bg-blue-50/60" aria-hidden />}>
          <WatchlistHeader
            heading="Command your digital asset watchlists"
            subheading="Organize tokens, narratives, and risk signals in a shared workspace. Layer on your own alerts and share insights with the desks that need to act."
            groups={groups}
            activeGroupId={activeGroupId}
            onGroupChange={setActiveGroupId}
            onAddAsset={handleAddAsset}
          />
        </Suspense>

        <Suspense fallback={<div className="h-40 rounded-3xl bg-blue-50/60" aria-hidden />}>
          <WatchlistSummary metrics={metrics} />
        </Suspense>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <Suspense fallback={<div className="h-96 rounded-3xl bg-blue-50/60" aria-hidden />}>
            <WatchlistTable
              columns={columns}
              assets={sortedAssets}
              sortState={sortState}
              onSort={handleSort}
              onSelectAsset={handleSelectAsset}
              selectedAssetId={selectedAssetId}
              emptyState={<WatchlistEmptyState onAddAsset={handleAddAsset} />}
              renderRowActions={() => (
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-lg border border-blue-200 px-3 py-2 text-xs font-semibold text-blue-600 transition-colors duration-200 hover:border-blue-300 hover:text-blue-700"
                >
                  Manage
                </button>
              )}
            />
          </Suspense>

          <Suspense fallback={<div className="h-96 rounded-3xl bg-blue-50/60" aria-hidden />}>
            <WatchlistAssetPanel asset={selectedAsset} onClose={() => setSelectedAssetId(undefined)} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Watchlist