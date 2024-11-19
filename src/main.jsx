import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './Router/Router'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import AuthProvider from './AuthProvider/AuthProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
