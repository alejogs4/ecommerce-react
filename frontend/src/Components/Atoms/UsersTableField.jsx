import React from 'react'

const UsersTableField = ({ item, handleDelete }) => (
  <div className="columns is-desktop has-text-black">
    <div className="column">
      {item.name}
    </div>
    <div className="column">
      <button className="button is-danger" onClick={handleDelete}>Delete</button>
    </div>
  </div>
)

export default UsersTableField