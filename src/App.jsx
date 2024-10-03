import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="progress-bar"><div className="filled"></div></div>

      <div className="navbar">
        <div className="wrapper">
          <div className="content">
            
          </div>
        </div>
      </div>
      <div className="main"></div>
    </>
  )
}

export default App
