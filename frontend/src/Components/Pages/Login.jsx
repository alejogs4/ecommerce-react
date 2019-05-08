import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'
import Notification from '../Atoms/Notification';

const LOGIN_MUTATION = gql`
 mutation login($email: String!, $password: String!) {
   login(email: $email, password: $password) {
     token
     user {
       name
       email
       lastname
       admin
       id
     }
   }
 }
`

function Login({ history }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function onSubmit(login) {
    return async e => {
      e.preventDefault()
      login({ variables: { email, password } })
    }
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
                <Mutation mutation={LOGIN_MUTATION}>
                  {(login, { error, data }) => {
                    if (data && data.login) {
                      localStorage.setItem('user', JSON.stringify(data.login.user))
                      localStorage.setItem('token', data.login.token)
                      localStorage.setItem('loggued', true)
                      history.push(data.login.user.admin ? '/admin' : '/')
                      return null
                    }
                    
                    return (
                      <>
                        <form onSubmit={onSubmit(login)} style={{ marginBottom: '1em' }}>
                          <div className="field">
                            <div className="control">
                              <input className="input is-info is-large" type="text" placeholder="Your Email" autoFocus=""
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required />
                            </div>
                          </div>
                          <div className="field">
                            <div className="control">
                              <input className="input is-info is-large" type="password" placeholder="Your Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required />
                            </div>
                          </div>
                          <input className="button is-block is-info is-large is-fullwidth" type="submit" value="Log In" />
                        </form>
                        {error && <Notification type='is-danger' text='This doesnt exists' />}
                      </>
                    )
                  }}
                </Mutation>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default withRouter(Login)
