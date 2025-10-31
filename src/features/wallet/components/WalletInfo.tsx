import { useWalletStore } from '../../../store'
import { formatCurrency, shortenAddress } from '../../../lib/utils'

/**
 * Wallet Component
 * Hiển thị thông tin ví và số dư
 */
export function WalletInfo() {
  const { wallets, selectedWallet, selectWallet, fetchWallets } = useWalletStore()

  const handleRefresh = () => {
    fetchWallets()
  }

  return (
    <div className="wallet-info">
      <h2>My Wallets</h2>
      <button onClick={handleRefresh}>Refresh</button>
      
      <div className="wallets-list">
        {wallets.map((wallet) => (
          <div 
            key={wallet.id} 
            className={`wallet-card ${selectedWallet?.id === wallet.id ? 'selected' : ''}`}
            onClick={() => selectWallet(wallet)}
          >
            <div className="wallet-address">
              {shortenAddress(wallet.address)}
            </div>
            <div className="wallet-balance">
              <strong>{wallet.balance} {wallet.currency}</strong>
              <span>{formatCurrency(wallet.balance * 3000)}</span>
            </div>
          </div>
        ))}
      </div>
      
      {wallets.length === 0 && (
        <p>No wallets found. Click refresh to load wallets.</p>
      )}
    </div>
  )
}
