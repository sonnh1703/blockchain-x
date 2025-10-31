import { useState } from 'react'
import type { Order } from '../../../types'

/**
 * Trade Component
 * Giao diện mua/bán crypto
 */
export function TradeForm() {
  const [orderType, setOrderType] = useState<'buy' | 'sell'>('buy')
  const [amount, setAmount] = useState('')
  const [price, setPrice] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const order: Partial<Order> = {
      type: orderType,
      amount: parseFloat(amount),
      price: parseFloat(price),
      total: parseFloat(amount) * parseFloat(price),
      status: 'open',
    }
    
    console.log('Submitting order:', order)
    // TODO: Submit to API
  }

  return (
    <div className="trade-form">
      <h2>Trade</h2>
      
      <div className="order-type-selector">
        <button 
          className={orderType === 'buy' ? 'active' : ''}
          onClick={() => setOrderType('buy')}
        >
          Buy
        </button>
        <button 
          className={orderType === 'sell' ? 'active' : ''}
          onClick={() => setOrderType('sell')}
        >
          Sell
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="0.00"
            step="0.01"
            required
          />
        </div>

        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            step="0.01"
            required
          />
        </div>

        <div className="form-group">
          <label>Total</label>
          <input
            type="text"
            value={amount && price ? (parseFloat(amount) * parseFloat(price)).toFixed(2) : '0.00'}
            disabled
          />
        </div>

        <button type="submit" className={`submit-btn ${orderType}`}>
          {orderType === 'buy' ? 'Buy' : 'Sell'}
        </button>
      </form>
    </div>
  )
}
