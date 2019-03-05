import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Admin extends Component {

  render() {
    if (!(localStorage.currentUser && JSON.parse(localStorage.currentUser).name === 'admin')) {
      return (
        <h1>Acceso denegado</h1>
      )
    }

    return  (
      <main>
        <h1>Admin</h1>
        <Link to='/admin/products'>Add products</Link>
      </main>
    )
  }
}

export default Admin
