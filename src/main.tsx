import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Toaster } from './components/ui/sonner.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
<Toaster 
  position="top-center"
  toastOptions={{
    unstyled: false,
    classNames: {
      toast: 'rounded-lg shadow-lg p-4',
      title: 'font-semibold',
      description: 'text-sm',
      error: '!bg-red-500 !text-white !border-red-600',
      success: '!bg-green-500 !text-white !border-green-600',
      warning: '!bg-amber-500 !text-white !border-amber-600',
      info: '!bg-blue-500 !text-white !border-blue-600',
    }
  }}
/>
    <App />
  </StrictMode>,
)
