import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Popup from './pages/Popup'
import './popup.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Popup />
  </StrictMode>,
)
