import React from 'react'
import Product from '../Atoms/Product';

/**
 * This component represents the Products Grid shown at the homepage.
 */
const ProductsGrid = ({ products, click }) => {
  return (
    <div className='columns is-multiline'>
      {products && products.map(product => (
        <div className="column is-one-quarter">
          <Product img={product.image} click={click(product)} />
        </div>
      ))}
    </div>
  )
}

export default ProductsGrid
