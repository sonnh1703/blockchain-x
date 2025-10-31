import { create } from 'zustand'
import type { User } from '../types'

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  setUser: (user: User | null) => void
}

/**
 * Authentication store using Zustand
 */
export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,

  login: async (email: string, password: string) => {
    set({ isLoading: true })
    try {
      // TODO: Implement actual login API call
      console.log('Login:', email, password)
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      const mockUser: User = {
        id: '1',
        email,
        username: email.split('@')[0],
        createdAt: new Date().toISOString(),
      }
      
      set({ user: mockUser, isAuthenticated: true, isLoading: false })
      localStorage.setItem('auth_token', 'mock_token')
    } catch (error) {
      set({ isLoading: false })
      throw error
    }
  },

  logout: () => {
    set({ user: null, isAuthenticated: false })
    localStorage.removeItem('auth_token')
  },

  setUser: (user: User | null) => {
    set({ user, isAuthenticated: !!user })
  },
}))
