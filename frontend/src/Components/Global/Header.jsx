import React from 'react'
import '../Styles/header.css'
import { Link } from 'react-router-dom'
import Nombre from '../../Images/NombreBLANCO.png';
import Logo from '../../Images/LogoPNG.png';

const Header = () => (
  <nav className="navbar is-black" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
      <Link to='/'><img src={Nombre} alt="Nombre" width="112" height="28" /></Link>
      </a>

      <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="End">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item">
          <Link to='/'><img src={Logo} alt='Logo' width="28" height="28"/></Link>
        </a>
      </div>
      
    
      <div id="End" className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-black">
              <Link to='/signup'>SignUp</Link>
            </a>
            <a className="button is-black">
              <Link to='/login'>LogIn</Link>
            </a>
            <a className="button is-black">
              <Link to='/login'>ShoppingCart</Link>
            </a>
          </div>
        </div>
      </div>

    </div>
  </nav>
)
export default Header
