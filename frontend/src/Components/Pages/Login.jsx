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
    alert('Login Error')
  }

  render() {
    return (
      <main>
        <section className="hero is-black is-fullheight">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="column is-4 is-offset-4">
                        <h3 className="title has-text-white">Login</h3>
                        <p className="subtitle has-text-grey">Please login to proceed.</p>
                        <div className="box">
                            <form onSubmit={this.onSubmit}> 
                                <div className="field">
                                    <div className="control">
                                        <input className="input is-info is-large" type="text" placeholder="Your Name" autoFocus=""
                                        value={this.state.userName}
                                        onChange={this.handleChange('userName')}
                                        required />
                                    </div>
                                </div>

                                <div className="field">
                                    <div className="control">
                                        <input className="input is-info is-large" type="password" placeholder="Your Password"
                                        value={this.state.userPassword}
                                        onChange={this.handleChange('userPassword')}
                                        required />
                                    </div>
                                </div>
                                <input className="button is-block is-info is-large is-fullwidth" type="submit" value="Log In" />
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

export default withRouter(Login)
