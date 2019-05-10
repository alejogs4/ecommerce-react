import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import UsersTableField from '../Atoms/UsersTableField';
import withAdminPermission from '../HOC/withAdminPermission'
import gql from 'graphql-tag';
import { Mutation, Query } from 'react-apollo';

const BECOME_ADMIN = gql`
  mutation becomeAdmin($id: Int!) {
    becomeAdmin(id: $id) {
      name
    }
  }
`

const DELETE_USER = gql`
  mutation deleteUser($id: Int!) {
    deleteUser(id: $id) {
      name
    }
  }
`

export const GET_ALL_USERS = gql`
  query {
    users {
      id
      name
      admin
      email
    }
  }
`

/**
 * This component represents the "Admin Users" screen,
 * to manage the users of the application
 */
const AdminUsers = () => (
  <main>
    <section className="hero is-black is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
            <h3 className="title has-text-white">Users Manager</h3>
            <p className="subtitle has-text-grey">Delete users as you like</p>
          </div>
          <div className="container is-fluid">
            <div className="notification">
              <Mutation mutation={BECOME_ADMIN}
                refetchQueries={[{ query: GET_ALL_USERS }]}
                awaitRefetchQueries>
                {(becomeAdmin) => (
                  <Mutation mutation={DELETE_USER}
                    refetchQueries={[{ query: GET_ALL_USERS }]}
                    awaitRefetchQueries>
                    {(deleteUser) => (
                      <Query query={GET_ALL_USERS}>
                        {({ data }) => (
                          <>
                            {data && data.users && data.users.map((user) => (
                              <UsersTableField key={user.id}
                                item={user}
                                handleDelete={() => deleteUser({ variables: { id: user.id } })}
                                becomeAdmin={() => becomeAdmin({ variables: { id: user.id } })} />
                            ))}
                          </>
                        )}
                      </Query>
                    )}
                  </Mutation>
                )}
              </Mutation>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
)


export default withAdminPermission(withRouter(AdminUsers))
