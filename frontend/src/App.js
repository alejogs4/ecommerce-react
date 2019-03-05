import React from 'react'
import './App.css'
import Header from './Components/Global/Header'
import Routes from './Components/Routes'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    if (localStorage.loggued === undefined) localStorage.setItem('loggued', false)
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  )
}

export default App
