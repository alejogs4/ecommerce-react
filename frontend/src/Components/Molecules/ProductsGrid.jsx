import React from 'react'
import Product from '../Atoms/Product';

const ProductsGrid = ({ products, click }) => {
  return (
    <div className='columns is-multiline'>
      {products && products.map(product => (
        <div className="column is-one-quarter">
          <Product img={product.IMG} click={click(product.IMG)} />
        </div>
      ))}
    </div>
  )
}

export default ProductsGrid
