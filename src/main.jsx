import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import English from './English.jsx'
import './English.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <English />
  </StrictMode>,
)
