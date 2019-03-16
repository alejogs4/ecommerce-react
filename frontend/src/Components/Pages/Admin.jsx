import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import withAdminPermission from '../HOC/withAdminPermission'

/**
 * This component represents the Admin's screen, where is shown the
 * "Admin products" and "Admin users" buttons.
 */
class Admin extends Component {
  render() {
    return (
      <main>
        <section className="hero is-black is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="column is-4 is-offset-4">
                <h3 className="title has-text-white">Admin</h3>
                <p className="subtitle has-text-grey">Choose an action</p>
                <div className="box">
                  <Link className="button is-block is-warning is-large is-fullwidth" to='/admin/products'>Admin products</Link>
                  <br/>
                  <Link className="button is-block is-danger is-large is-fullwidth" to='/admin/users'>Admin users</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default withAdminPermission(Admin)
