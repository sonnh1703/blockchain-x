import type { ReactNode } from 'react'

interface AppProviderProps {
  children: ReactNode
}

/**
 * AppProvider - Global providers wrapper
 * Đặt các context providers, theme providers, router, v.v. ở đây
 */
export function AppProvider({ children }: AppProviderProps) {
  return (
    <>
      {/* Thêm các providers như: */}
      {/* <ThemeProvider> */}
      {/* <RouterProvider> */}
      {/* <QueryClientProvider> */}
      {children}
      {/* </QueryClientProvider> */}
      {/* </RouterProvider> */}
      {/* </ThemeProvider> */}
    </>
  )
}
