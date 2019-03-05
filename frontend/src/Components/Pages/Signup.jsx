import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { add } from "../../Helpers/handleLocalStorage"

class Signup extends Component {

  state = {
    userName: '',
    userPassword: '',
    rePassword: ''
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
    if (this.state.userPassword === this.state.rePassword) {
      const user = {
        name: this.state.userName,
        password: this.state.userPassword
      }

      if (add(user, 'users')) {
        alert("Signed Up!")
        this.props.history.push("/login")
      }
      return
    }
    alert("Passwords must match!")
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h1>Sign Up</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label><strong>Enter name: </strong></label>
            <input
              type="text"
              className="form-control"
              value={this.state.userName}
              onChange={this.handleChange('userName')}
              required
            />
          </div>
          <div className="form-group">
            <label><strong>Enter password: </strong></label>
            <input
              type="password"
              className="form-control"
              value={this.state.userPassword}
              onChange={this.handleChange('userPassword')}
              required
            />
          </div>
          <div className="form-group">
            <label><strong>Re-enter password: </strong></label>
            <input
              type="password"
              className="form-control"
              value={this.state.rePassword}
              onChange={this.handleChange('rePassword')}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Sign Up"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(Signup)