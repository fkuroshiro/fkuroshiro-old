import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '../src/components/App.jsx';
import '../src/css/index.css';
import ProgressBar from '../src/components/ProgressBar.jsx';
import Navbar from '../src/components/Navbar.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProgressBar />
    <Navbar />
    <App />
  </StrictMode>,
)

