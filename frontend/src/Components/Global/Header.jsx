import React from 'react'
import { Link } from 'react-router-dom'
import Nombre from '../../Images/NombreBLANCO.png';
import Logo from '../../Images/LogoPNG.png';

/**
 * This function is to clear the current user data when
 * the user logs out.
 */
const logOut = () => {
  localStorage.setItem('loggued', false)
  localStorage.removeItem('user')
  localStorage.setItem('shopping', '[]')
}

/**
 * This component represents the application's header.
 */
const Header = () => (
  <nav className="navbar is-black is-fixed-top" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link to='/' className="navbar-item">
        <img src={Nombre} alt="Nombre" width="112" height="28" />
      </Link>
    </div>
    <div className="navbar-menu">
      <div className="navbar-start">
        <Link to='/' className="navbar-item"><img src={Logo} alt='Logo' width="28" height="28" /></Link>
      </div>
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
            <Link to={
              (localStorage.user) && JSON.parse(localStorage.user).admin 
                ? '/admin' : '/edit/' + JSON.parse(localStorage.user).id
            } className="button is-black">
              {(localStorage.user) ? (JSON.parse(localStorage.user).name) : 'Usuario'
              }
            </Link>
            <Link to="/" className="navbar-item button is-black" onClick={logOut}>Log Out</Link>
            <Link to='/shopping' className="navbar-item button is-black">Shopping Cart</Link>
          </div>
        </div>
      }
    </div>
  </nav>

)
export default Header
