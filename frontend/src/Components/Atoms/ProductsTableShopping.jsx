import React from 'react'

const ProductTableFieldShopping = ({ item, handleAdd}) => (
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
    <button className="button is-success is-fullwidth" onClick={handleAdd}>Add to cart</button>
    </div>
  </div>
)


export default ProductTableFieldShopping
