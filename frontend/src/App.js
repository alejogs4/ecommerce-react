import React, { useEffect, Fragment } from 'react'
import './App.css'
import Header from './Components/Global/Header'
import Routes from './Components/Routes'
import { open } from './Helpers/navbar';

function App() {

  useEffect(() => {
    if (localStorage.loggued === undefined) localStorage.setItem('loggued', false)
    open()
  }, [])

  return (
    <Fragment>
      <Header />
      <Routes />
    </Fragment>
  )
}

export default App
