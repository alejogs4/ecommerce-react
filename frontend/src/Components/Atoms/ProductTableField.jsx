import React from 'react'
import { Link } from 'react-router-dom'

const ProductTableField = ({ item, handleDelete }) => (
  <div className="columns is-desktop has-text-black">
    <div className="column">
      {item.name}
    </div>
    <div className="column">
      {item.type}
    </div>
    <div className="column">
      {item.IMG}
    </div>
    <div className="column">
      {item.price}
    </div>
    <div className="column">
      <Link to={`/admin/edit/${item.name}`}>Edit</Link>
    </div>
    <div className="column">
      <button className="button is-warning is-fullwidth" onClick={handleDelete}>Delete</button>
    </div>
  </div>
)


export default ProductTableField
