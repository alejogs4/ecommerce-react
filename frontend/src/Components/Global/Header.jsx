import React from 'react'
import '../Styles/header.css'
import { Link } from 'react-router-dom'
import Nombre from '../../Images/NombreBLANCO.png';
import Logo from '../../Images/LogoPNG.png';

const Header = () => (
  <nav class="navbar is-black" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src={Nombre} alt="Nombre" width="112" height="28" />
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="/">
         <img src={Logo} alt='Logo' width="34" height="34"/>
        </a>
      </div>
    </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-black">
              <Link to='/signup'>SignUp</Link>
            </a>
            <a class="button is-black">
              <Link to='/login'>LogIn</Link>
            </a>
          </div>
        </div>
      </div>
  </nav>
)
export default Header
