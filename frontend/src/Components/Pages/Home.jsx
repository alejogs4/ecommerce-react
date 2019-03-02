import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <main>
        <h1>Tienda</h1>
        <Link to='/login'>LogIn</Link>
        <br/>
        <br/>
        <Link to='/signup'>SignUp</Link>
      </main>
    )
  }
}

export default Home