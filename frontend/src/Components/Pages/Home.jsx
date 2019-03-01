import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <main>
        <h1>Tienda</h1>
        <Link to='/login'>Loguear</Link>
      </main>
    )
  }
}

export default Home