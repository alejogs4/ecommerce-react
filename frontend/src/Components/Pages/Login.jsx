import React, { Component, } from 'react'
import { verify } from '../../Helpers/handleLocalStorage'
import { withRouter } from 'react-router-dom'

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

    const user = {
      name: this.state.userName,
      password: this.state.userPassword
    }

    if (verify(user, 'users')) {
      localStorage.setItem('currentUser', JSON.stringify(user))
      localStorage.setItem('loggued', true)
      alert("Logged in!")
      this.props.history.push("/")
    }
    if(user.name === 'admin' && user.password === 'admin'){
      localStorage.setItem('currentUser', JSON.stringify(user))
      localStorage.setItem('loggued', true)
      alert("Logged in as ADMIN!")
      this.props.history.push("/admin")
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

export default withRouter(Login)
