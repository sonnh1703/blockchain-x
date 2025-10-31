import { create } from 'zustand'
import type { Wallet, Transaction } from '../types'

interface WalletState {
  wallets: Wallet[]
  selectedWallet: Wallet | null
  transactions: Transaction[]
  isLoading: boolean
  fetchWallets: () => Promise<void>
  selectWallet: (wallet: Wallet) => void
  fetchTransactions: (walletId: string) => Promise<void>
}

/**
 * Wallet store using Zustand
 */
export const useWalletStore = create<WalletState>((set) => ({
  wallets: [],
  selectedWallet: null,
  transactions: [],
  isLoading: false,

  fetchWallets: async () => {
    set({ isLoading: true })
    try {
      // TODO: Implement actual API call
      await new Promise((resolve) => setTimeout(resolve, 500))
      
      const mockWallets: Wallet[] = [
        {
          id: '1',
          address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
          balance: 1.5,
          currency: 'ETH',
          userId: '1',
        },
      ]
      
      set({ wallets: mockWallets, isLoading: false })
    } catch (error) {
      set({ isLoading: false })
      throw error
    }
  },

  selectWallet: (wallet: Wallet) => {
    set({ selectedWallet: wallet })
  },

  fetchTransactions: async (walletId: string) => {
    set({ isLoading: true })
    try {
      // TODO: Implement actual API call
      console.log('Fetching transactions for wallet:', walletId)
      await new Promise((resolve) => setTimeout(resolve, 500))
      
      set({ transactions: [], isLoading: false })
    } catch (error) {
      set({ isLoading: false })
      throw error
    }
  },
}))
