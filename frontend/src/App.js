/**
 * VantaBlack - e-commerce React Application - Web Software Development
 * 
 * @version 1.0.1
 * @license MIT
 * 
 * @author [Alejandro Garcia](https://github.com/alejogs4)
 * @author [Mauricio Garzon](https://github.com/maugarbru)
 * @author [Miguel Angel Velez](https://github.com/mvelezg99)
 */

import React, { useEffect, Fragment } from 'react'
import './App.css'
import Header from './Components/Global/Header'
import Routes from './Components/Routes'
import { open } from './Helpers/navbar';
import Footer from './Components/Global/Footer'

function App() {

  useEffect(() => {
    if (localStorage.token === undefined) localStorage.setItem('loggued', false)
    open()
  }, [])

  return (
    <Fragment>
      <Header />
      <Routes />
      <Footer />
    </Fragment>
  )
}

export default App
