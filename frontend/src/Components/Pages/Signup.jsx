import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import useNotification from '../CustomHooks/useNotification';
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'
import { GET_ALL_USERS } from './AdminUsers';

const ADD_USER_MUTATION = gql`
  mutation addUser($user: UserInput) {
    addUser(input: $user) {
      name
      lastname
      email
    }
  }
`

function Signup({ history }) {
  const [userName, setUserName] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [rePassword, setRePassword] = useState('')

  const { Notification, updateNotification } = useNotification({ active: true, type: '', text: '' })

  function onSubmit(addUser) {
    return async e => {
      e.preventDefault()
      
      if (userPassword === rePassword) {
        const user = {
          name: userName,
          password: userPassword,
          email,
          lastname
        }
        try {
          await addUser({ variables: { user } })
          updateNotification(true, 'is-success', 'Signed Up!')
          setTimeout(() => history.push('/login'), 1500)
        }
        catch(err) {
          updateNotification(true, 'is-danger', 'Error in sign up')
        }
        return
      }

      updateNotification(true, 'is-danger', 'Passwords must match!')
    }
  }

  return (
    <main>
      <section className="hero is-black is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-white">Sign Up</h3>
              <p className="subtitle has-text-grey">Please register to proceed.</p>
              <div className="box">
                <Mutation mutation={ADD_USER_MUTATION} refetchQueries={[{query: GET_ALL_USERS}]} awaitRefetchQueries>
                  {(addUser) => {
                    return (
                      <form onSubmit={onSubmit(addUser)} style={{ marginBottom: '1em' }}>
                        <div className="field">
                          <div className="control">
                            <input className="input is-large is-primary" type="text" placeholder="Your Name" autoFocus=""
                              value={userName}
                              onChange={e => setUserName(e.target.value)}
                              required />
                          </div>
                        </div>
                        <div className="field">
                          <div className="control">
                            <input className="input is-large is-primary" type="text" placeholder="Your lastname" autoFocus=""
                              value={lastname}
                              onChange={e => setLastname(e.target.value)}
                              required />
                          </div>
                        </div>

                        <div className="field">
                          <div className="control">
                            <input className="input is-large is-primary" type="text" placeholder="Your email" autoFocus=""
                              value={email}
                              onChange={e => setEmail(e.target.value)}
                              required />
                          </div>
                        </div>

                        <div className="field">
                          <div className="control">
                            <input className="input is-large is-primary" type="password" placeholder="Your Password"
                              value={userPassword}
                              onChange={e => setUserPassword(e.target.value)}
                              required />
                          </div>
                        </div>
                        <div className="field">
                          <div className="control">
                            <input className="input is-large is-primary" type="password" placeholder="Re-enter Password"
                              value={rePassword}
                              onChange={e => setRePassword(e.target.value)}
                              required />
                          </div>
                        </div>
                        <input className="button is-block is-primary is-large is-fullwidth" type="submit" value="Sign Up" />
                      </form>
                    )
                  }}
                </Mutation>
                {Notification}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


export default withRouter(Signup)
