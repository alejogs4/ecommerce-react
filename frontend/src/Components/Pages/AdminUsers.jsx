import React, { Component } from 'react'
import { deleteItem } from "../../Helpers/handleLocalStorage"
import { withRouter } from 'react-router-dom'
import UsersTableField from '../Atoms/UsersTableField';
import withAdminPermission from '../HOC/withAdminPermission'

class AdminUsers extends Component {

  state = {
    userName: '',
    users: localStorage.users ? JSON.parse(localStorage.users) : []
  }

  handleChange = (field) => {
    return e => {
      this.setState({
        [field]: e.target.value
      })
    }
  }

  handleDelete = (name) => {
    return () => {
      deleteItem(name, 'users')
      this.setState({
        users: localStorage.users ? JSON.parse(localStorage.users) : []
      })
    }
  }

  render() {
    return (
      <main>
        <section className="hero is-black is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="column is-4 is-offset-4">
                <h3 className="title has-text-white">Users Manager</h3>
                <p className="subtitle has-text-grey">Delete users as you like</p>
              </div>
              <div className="container">
                <div className="notification">
                  {this.state.users.map((item, key) => (
                    <UsersTableField key={key}
                      item={item}
                      handleDelete={this.handleDelete(item)} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default withAdminPermission(withRouter(AdminUsers))