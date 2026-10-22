import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Exercise from './Exercise.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Exercise />
  </StrictMode>,
)
