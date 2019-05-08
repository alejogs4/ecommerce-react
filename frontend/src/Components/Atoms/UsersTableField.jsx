import React from 'react'

/**
 * This component represents the users table for admin, 
 * which shows user names and a button to remove the user
 * from the data.
 */
const UsersTableField = ({ item, handleDelete, becomeAdmin }) => (
  <div className="columns is-desktop has-text-black">
    <div className="column">
      {item.name}
    </div>
    <div className="column">
      {item.email}
    </div>
    <div className="column">
      {item.admin ? 'Its Admin' : 'Its a simple user'}
    </div>
    {item.id !== (localStorage.user ?  JSON.parse(localStorage.user).id : 1) &&
      <div className="column">
        <button className="button is-danger" onClick={handleDelete}>Delete</button>
      </div>
    }
    <div className='column'>
      <button className="button is-warning" onClick={becomeAdmin}>Become Admin</button>
    </div>
  </div>
)

export default UsersTableField
