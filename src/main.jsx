import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '../src/css/index.css'
import ProgressBar from '../src/components/ProgressBar.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProgressBar />
    <App />
  </StrictMode>,
)

