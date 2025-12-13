import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Toaster } from './components/ui/toaster.tsx'
import { TeamProvider } from './context/TeamContext.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster  />
    <TeamProvider>
    <App />
    </TeamProvider>
  </StrictMode>,
)
