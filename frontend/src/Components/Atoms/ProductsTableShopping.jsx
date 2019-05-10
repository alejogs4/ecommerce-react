import React from 'react'

/**
 * This component represents the products table for shopping, 
 * which shows product names, product types, product images, 
 * product prices, and a button to add the product to the shopping cart.
 */
const ProductTableFieldShopping = ({ item, handleAdd}) => (
  <div className="columns is-desktop has-text-black">
    <div className="column">
      <figure className="image is-48x48">
        <img className="is-rounded" src={item.image} alt=""/>
      </figure>
    </div>
    <div className="column">
      {item.name}
    </div>
    <div className="column">
      {item.description}
    </div>
    <div className="column">
      {item.price}
    </div>
    <div className="column">
    <button className="button is-success is-fullwidth" onClick={handleAdd}>Add to cart</button>
    </div>
  </div>
)


export default ProductTableFieldShopping
