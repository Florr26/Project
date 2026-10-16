import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Note.css'
import Note from './Note.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Note />
  </StrictMode>,
)
