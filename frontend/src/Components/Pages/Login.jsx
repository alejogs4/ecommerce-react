import React, { useState } from 'react'
import { verifyUser } from '../../Helpers/handleLocalStorage'
import { withRouter } from 'react-router-dom'
import useNotification from '../CustomHooks/useNotification';

function Login({ history }) {
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const { Notification, updateNotification } = useNotification({ text: '', active: false, type: '' })

  function onSubmit(e) {
    e.preventDefault()

    const user = { name: userName, password: userPassword }

    if (verifyUser(user, 'users')) {
      localStorage.setItem('currentUser', JSON.stringify(user))
      localStorage.setItem('loggued', true)
      history.push("/")
      return
    }
    if (user.name === 'admin' && user.password === 'admin') {
      localStorage.setItem('currentUser', JSON.stringify(user))
      localStorage.setItem('loggued', true)
      history.push("/admin")
      return
    }
    updateNotification(true, 'is-danger', `This user doesn't exist`)
  }

  return (
    <main>
      <section className="hero is-black is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-white">Login</h3>
              <p className="subtitle has-text-grey">Please login to proceed.</p>
              <div className="box">
                <form onSubmit={onSubmit} style={{ marginBottom: '1em' }}>
                  <div className="field">
                    <div className="control">
                      <input className="input is-info is-large" type="text" placeholder="Your Name" autoFocus=""
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                        required />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input className="input is-info is-large" type="password" placeholder="Your Password"
                        value={userPassword}
                        onChange={e => setUserPassword(e.target.value)}
                        required />
                    </div>
                  </div>
                  <input className="button is-block is-info is-large is-fullwidth" type="submit" value="Log In" />
                </form>
                {Notification}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default withRouter(Login)
