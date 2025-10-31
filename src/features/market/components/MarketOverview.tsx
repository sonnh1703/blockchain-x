import { useEffect, useState } from 'react'
import type { CryptoAsset } from '../../../types'
import { formatCurrency, formatPercentage } from '../../../lib/utils'

/**
 * Market Overview Component
 * Hiển thị danh sách crypto assets và giá
 */
export function MarketOverview() {
  const [assets, setAssets] = useState<CryptoAsset[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO: Fetch from API
    const mockAssets: CryptoAsset[] = [
      {
        id: 'btc',
        symbol: 'BTC',
        name: 'Bitcoin',
        price: 45000,
        change24h: 2.5,
        volume24h: 25000000000,
        marketCap: 850000000000,
      },
      {
        id: 'eth',
        symbol: 'ETH',
        name: 'Ethereum',
        price: 3000,
        change24h: -1.2,
        volume24h: 15000000000,
        marketCap: 350000000000,
      },
    ]
    
    setTimeout(() => {
      setAssets(mockAssets)
      setLoading(false)
    }, 500)
  }, [])

  if (loading) {
    return <div>Loading market data...</div>
  }

  return (
    <div className="market-overview">
      <h2>Market Overview</h2>
      <div className="assets-list">
        {assets.map((asset) => (
          <div key={asset.id} className="asset-card">
            <div className="asset-info">
              <strong>{asset.symbol}</strong>
              <span>{asset.name}</span>
            </div>
            <div className="asset-price">
              <strong>{formatCurrency(asset.price)}</strong>
              <span className={asset.change24h >= 0 ? 'positive' : 'negative'}>
                {formatPercentage(asset.change24h)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
