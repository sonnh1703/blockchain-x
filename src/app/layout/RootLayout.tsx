import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'

/**
 * RootLayout - Main layout của ứng dụng
 * Chứa header, sidebar, main content area, footer
 */
export function RootLayout() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      {/* Header/Navigation sẽ được thêm vào đây */}
      
      <main className="main-content">
        <div>
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        
        <h1>Blockchain-X Platform</h1>
        
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/app/layout/RootLayout.tsx</code> để tùy chỉnh layout
          </p>
        </div>
        
        <p className="read-the-docs">
          Feature-based architecture with Vite + React + TypeScript
        </p>
      </main>

      {/* Footer sẽ được thêm vào đây */}
    </div>
  )
}
