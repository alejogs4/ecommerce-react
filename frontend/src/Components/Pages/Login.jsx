import React, { Component, } from 'react'
import { verify } from '../../Helpers/handleLocalStorage'

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

    let user = {
      name: this.state.userName,
      password: this.state.userPassword
    }

    if(verify(user, 'users')){
      alert("Logged in!")
    }

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
              value={this.state.userName}
              onChange={this.onChangeName}
              required
            />
          </div>
          <div className="form-group">
            <label><strong>Password: </strong></label>
            <input
              type="password"
              value={this.state.userPassword}
              onChange={this.onChangePassword}
              required
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
