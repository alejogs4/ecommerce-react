import React from 'react'
import { withRouter } from 'react-router-dom'
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Notification from '../Atoms/Notification';

const EDIT_USER = gql`
  mutation editUser($id: Int!, $password: String!) {
    editUser(id: $id, password: $password) {
      id
    }
  }
`

function EditUser({ match, history }) {
  function edit(editUser) {
    return (e) => {
      e.preventDefault()
      const data = {
        id: parseInt(match.params.name),
        password: e.target.password.value,
      }
      editUser({ variables: { ...data } })
      setTimeout(() => history.push('/login'), 500)
    }
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
                <Mutation mutation={EDIT_USER}>
                  {(editUser, { data, error }) => {                 
                    if (data && data.editUser) {
                      localStorage.setItem('loggued', false)
                      localStorage.removeItem('user')
                      return null
                    }
                    return (
                      <form onSubmit={edit(editUser)} style={{ marginBottom: '1em' }} >
                        <div className="field">
                          <div className="control">
                            <input className="input is-large is-warning" type="password" placeholder="Password"
                              name='password'
                              required />
                          </div>
                        </div>
                        <input className="button is-block is-warning is-large is-fullwidth" type="submit" value="Edit" />
                        {error && <Notification type='is-danger' text='Error updating your password' />}
                      </form>
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

export default (withRouter(EditUser))
