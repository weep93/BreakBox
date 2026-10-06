import './App.css'
import email from './media/email.png'
import x from './media/x.png'
import linkedin from './media/linkedin.png'
import github from './media/github.png'
import telegram from './media/telegram.png'



function App() {
  return (
    <div className="app">
      <nav className="navbar">

        <div className="logo">
          Amari
        </div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#featured">Featured</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#blog">Blog</a>
        </div>

        {/* social links change from href to onClick handlers */}
        <div className="social-links">
          <img src={email} alt="Email" />
          <img src={x} alt="X" />
          <img src={linkedin} alt="LinkedIn" />
          <img src={github} alt="GitHub" />
          <img src={telegram} alt="Telegram" />
        </div>

      </nav>


    {/*  ILL DO THIS LATER
      <main>
        <h1>Amari Bohlman</h1>
        <p>IT & CS Student | Developer | Cybersecurity</p>
      </main>
      */}
    </div>
  )
}

export default App