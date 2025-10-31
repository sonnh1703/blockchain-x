import { AppProvider } from './providers/AppProvider'
import { RootLayout } from './layout/RootLayout'
import '../App.css'

function App() {
  return (
    <AppProvider>
      <RootLayout />
    </AppProvider>
  )
}

export default App
