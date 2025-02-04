import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './bootstrap.min .css'
import { BrowserRouter } from 'react-router-dom'
import ContextsAPI from '../contexts/ContextsAPI.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ContextsAPI>
     <BrowserRouter>
      <App />
      </BrowserRouter>
   </ContextsAPI>
  
  </StrictMode>,
)
