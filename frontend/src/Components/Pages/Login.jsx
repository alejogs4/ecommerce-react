import React, { Component, } from 'react'

class Login extends Component {
  state = {
    value: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    alert("Logged in!")
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <main>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label><strong>Name: </strong></label>
            <input type="text"
              name="name" />
          </div>
          <div className="form-group">
            <label><strong>Password: </strong></label>
            <input
              type="password"
              name="password" />
          </div>
          <div className="form-group">
            <input type="submit" value="Log In" />
          </div>
        </form>
      </main>
    )
  }
}

export default Login
