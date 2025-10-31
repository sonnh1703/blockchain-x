/**
 * Global type definitions for Blockchain-X
 */

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

// User types
export interface User {
  id: string
  email: string
  username: string
  avatar?: string
  createdAt: string
}

// Wallet types
export interface Wallet {
  id: string
  address: string
  balance: number
  currency: string
  userId: string
}

// Transaction types
export interface Transaction {
  id: string
  type: 'buy' | 'sell' | 'transfer'
  amount: number
  currency: string
  status: 'pending' | 'completed' | 'failed'
  timestamp: string
}

// Market types
export interface CryptoAsset {
  id: string
  symbol: string
  name: string
  price: number
  change24h: number
  volume24h: number
  marketCap: number
}

// Trade types
export interface Order {
  id: string
  type: 'buy' | 'sell'
  price: number
  amount: number
  total: number
  status: 'open' | 'filled' | 'cancelled'
  timestamp: string
}
