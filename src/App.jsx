import './css/App.css'
import Logo from "./assets/logo.png";
import Pencil_Icon from "./assets/pencil_create_icon.png";

function App() {

  return (
    <>
      <div id='home' className='header'>
        <div className="inner">
          <div><b>Dominik Bobruška</b></div>
          <div><code>Web developer.</code></div>
        </div>
      </div>

      <section id='skills'>
        <div className="inner">
          <div className="grid">
            <div className="i">
              <h1><code>01.</code> About me</h1>
              <p>Wassup! My name is Dominik. I'm <code>18</code> years old student. I'm studying high school SOŠGAI Weilova aimed to Informatic Technolgy, currenntly being in third grade. And my hobby is making websites.</p>
            </div>
            <div className="i">
              <h1><code>02.</code> $kill$</h1>
              <div className='html5'>HTML5<div className="bar"><div className="filled"><code>100%</code></div></div></div>

              <div className='css3'>CSS3<div className="bar"><div className="filled"><code>69%</code></div></div></div>
              
              <div className='js'>JAVASCRIPT<div className="bar"><div className="filled"><code>30%</code></div></div></div>

              <div className='vite'><a href="http://vite.dev" target="_blank" rel="noopener noreferrer">Vite.js</a><div className="bar"><div className="filled"><code>20%</code></div></div></div>
            </div>
          </div>
        </div>
      </section>

      <section id='projects'>
        <div className="inner">
          <h1><code>03.</code> Project$</h1>
          <div className="projects-grid">
            <div className="card">Coming soon...</div>
          </div>
        </div>
      </section>
      
      <section id='contact'>
        <div className="inner">
          <div className="create-web">
            <img src={Pencil_Icon} alt="logo" width="200px"/>
            <div>
              <h2>Do you want website?</h2>
              <p>Do you want create a website?</p>
              <div>
                <b>Write me email: </b>
                <a href="mailto:help@weizzx.xyz">help@weizzx.xyz</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="inner">
          <div className='body'>
            <div className='creator'>Website created by:<b><a href="">Dominik Bobruška</a></b></div>
            <div className="f-logo">
              <img src={Logo} alt="logo" width="40px"/>
              <div>weizzx</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
