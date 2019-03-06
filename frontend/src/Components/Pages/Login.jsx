import React, { Component, } from 'react'
import { verifyUser } from '../../Helpers/handleLocalStorage'
import { withRouter } from 'react-router-dom'
// import useNotification from '../CustomHooks/useNotification';

class Login extends Component {
  state = {
    userName: '',
    userPassword: ''
  }

  handleChange = (field) => {
    return e => {
      this.setState({
        [field]: e.target.value
      })
    }
  }

  onSubmit = (e) => {
    e.preventDefault()

    const user = {
      name: this.state.userName,
      password: this.state.userPassword
    }

    if (verifyUser(user, 'users')) {
      localStorage.setItem('currentUser', JSON.stringify(user))
      localStorage.setItem('loggued', true)
      this.props.history.push("/")
      return
    }
    if (user.name === 'admin' && user.password === 'admin') {
      localStorage.setItem('currentUser', JSON.stringify(user))
      localStorage.setItem('loggued', true)
      this.props.history.push("/admin")
      return
    }
    alert('User does´n exists')
  }

  render() {
    return (
      <main>
        <h1>Login</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label><strong>Name: </strong></label>
            <input type="text"
              value={this.state.userName}
              onChange={this.handleChange('userName')}
              required />
          </div>
          <div className="form-group">
            <label><strong>Password: </strong></label>
            <input type="password"
              value={this.state.userPassword}
              onChange={this.handleChange('userPassword')}
              required />
          </div>
          <div className="form-group">
            <input type="submit"
              value="Log In" />
          </div>
        </form>
      </main>
    )
  }
}

export default withRouter(Login)
