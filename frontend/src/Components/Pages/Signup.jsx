import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { addItem } from "../../Helpers/handleLocalStorage"

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

      if (addItem(user, 'users')) {
        alert("Signed Up!")
        this.props.history.push("/login")
      }
      return
    }
    alert("Passwords must match!")
  }

  render() {
    return (
      <main>
      <section className="hero is-black is-fullheight">
          <div className="hero-body">
              <div className="container has-text-centered">
                  <div className="column is-4 is-offset-4">
                      <h3 className="title has-text-white">Sign Up</h3>
                      <p className="subtitle has-text-grey">Please register to proceed.</p>
                      <div className="box">
                          <form onSubmit={this.onSubmit}> 
                              <div className="field">
                                  <div className="control">
                                      <input className="input is-large is-primary" type="text" placeholder="Your Name" autoFocus=""
                                      value={this.state.userName}
                                      onChange={this.handleChange('userName')}
                                      required />
                                  </div>
                              </div>

                              <div className="field">
                                  <div className="control">
                                      <input className="input is-large is-primary" type="password" placeholder="Your Password"
                                      value={this.state.userPassword}
                                      onChange={this.handleChange('userPassword')}
                                      required />
                                  </div>
                              </div>

                              <div className="field">
                                  <div className="control">
                                      <input className="input is-large is-primary" type="password" placeholder="Re-enter Password"
                                      value={this.state.rePassword}
                                      onChange={this.handleChange('rePassword')}
                                      required />
                                  </div>
                              </div>
                              <input className="button is-block is-primary is-large is-fullwidth" type="submit" value="Sign Up" />
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      </main>
    )
  }
}

export default withRouter(Signup)