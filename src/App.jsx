import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Update (){
  const filled = document.querySelector('.filled');
  filled.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`
  requestAnimationFrame(Update);
}

function App() {
  const [count, setCount] = useState(0)
  Update();
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
