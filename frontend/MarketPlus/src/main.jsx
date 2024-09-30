import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './components/LogIn.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < Login />
  </StrictMode>,
)
