import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import useNotification from '../CustomHooks/useNotification';

function EditUser({ match, history }) {
  
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const { Notification, updateNotification } = useNotification({ active: false, type: '', text: '' })

  useEffect(() => {
    const user = localStorage.users
      ? JSON.parse(localStorage.currentUser)
      : null

    if (user) {
      setName(user.name)
      
    }
  }, [])

  function edit(e) {
    e.preventDefault()
    if (password === rePassword) {
      const newUser = {
        password,
        name,
      }

      const index = localStorage.users
        ? JSON.parse(localStorage.users).map(user => user.name).indexOf(match.params.name)
        : -1
        
      if (index !== -1) {
        const users = JSON.parse(localStorage.users)
        console.log(users[index], newUser)
        users[index] = newUser
        localStorage.setItem('users', JSON.stringify(users))
        localStorage.setItem('loggued', false)
        localStorage.setItem('currentUser', "")
        updateNotification(true, 'is-success', 'Password changed!')
        setTimeout(() => history.push("/login"), 1000)
      }
    }
    else updateNotification(true, 'is-danger', 'Passwords must match!')
    return
  }

  return (
    <main>
      <section className="hero is-black is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-white">Change Password</h3>
              <p className="subtitle has-text-grey">Change your password and login again</p>
              <div className="box">
                <form onSubmit={edit} style={{ marginBottom: '1em' }}>
                  <div className="field">
                    <div className="control">
                      <input className="input is-large is-warning" type="text" placeholder="Name" disabled autoFocus=""
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input className="input is-large is-warning" type="password" placeholder="New Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input className="input is-large is-warning" type="password" placeholder="Re-enter password"
                        value={rePassword}
                        onChange={e => setRePassword(e.target.value)}
                        required />
                    </div>
                  </div>
                  <input className="button is-block is-warning is-large is-fullwidth" type="submit" value="Edit" />
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

export default (withRouter(EditUser))