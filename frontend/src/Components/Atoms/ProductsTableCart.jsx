import React from 'react'

/**
 * This component represents the products table for shopping, 
 * which shows product names, product types, product images, 
 * product prices, and a button to remove the product from the shopping cart.
 */
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
