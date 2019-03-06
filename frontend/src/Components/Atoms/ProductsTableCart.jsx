import React from 'react'

const ProductTableFieldCart = ({ item, handleDelete }) => (
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
      <button className="button is-danger is-fullwidth" onClick={handleDelete}>Remove</button>
    </div>
    <hr/>
  </div>
)


export default ProductTableFieldCart
