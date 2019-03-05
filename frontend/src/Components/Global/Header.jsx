import React from 'react'
import '../Styles/header.css'
import { Link } from 'react-router-dom'
import Nombre from '../../Images/NombreBLANCO.png';
import Logo from '../../Images/LogoPNG.png';


const logOut = () => {
  localStorage.setItem('loggued', false)
  localStorage.setItem('currentUser', "")
  
}

const Header = () => (
  <nav className="navbar is-black" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link to='/' className="navbar-item"><img src={Nombre} alt="Nombre" width="112" height="28" /></Link>

      <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="End">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div className="navbar-menu">
      <div className="navbar-start">
        <Link to='/' className="navbar-item"><img src={Logo} alt='Logo' width="28" height="28" /></Link>
      </div>
      <div id="End" className="navbar-end">
        {(localStorage.loggued && !JSON.parse(localStorage.loggued)) &&
          <div className="navbar-item">
            <div className="buttons">
              <Link to='/signup' className="button is-black">Sign Up</Link>
              <Link to='/login' className="button is-black">Log In</Link>
            </div>
          </div>
        }
        {(localStorage.loggued && JSON.parse(localStorage.loggued)) &&
          <div className="navbar-item">
            <div className="buttons">
              <button className="button is-black">
                {localStorage.currentUser ? JSON.parse(localStorage.currentUser).name : 'Usuario'}
              </button>
              <button className="button is-black" onClick={logOut}>Log Out</button>
              <Link to='/' className="button is-black">Shopping Cart</Link>
            </div>
          </div>
        }
      </div>
    </div>
  </nav>
)
export default Header
