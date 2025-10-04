import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/css/templatemo-chain-app-dev.css'
import './assets/css/owl.css'
import './assets/css/fontawesome.css'
import './assets/css/animated.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
