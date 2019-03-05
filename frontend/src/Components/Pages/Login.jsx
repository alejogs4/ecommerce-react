import React, { Component, } from 'react'

class Login extends Component {
  state = {
    userName: '',
    userPassword: ''
  }

  onChangeName = (e) => {
    this.setState({
      userName: e.target.value
    })
  }

  onChangePassword = (e) => {
    this.setState({
      userPassword: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    alert("Logged in!")
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <main>
        <h1>Login</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label><strong>Name: </strong></label>
            <input
              type="text"
              name="name"
              value={this.state.userName}
              onChange={this.onChangeName}
              required
            />
          </div>
          <div className="form-group">
            <label><strong>Password: </strong></label>
            <input
              type="password"
              name="password" 
              value={this.state.userPassword}
              onChange={this.onChangePassword}
              />
          </div>
          <div className="form-group">
            <input 
            type="submit" 
            value="Log In" 
            />
          </div>
        </form>
      </main>
    )
  }
}

export default Login
