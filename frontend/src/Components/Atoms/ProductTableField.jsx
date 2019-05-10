import React from 'react'
import { Link } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'
import { PRODUCTS_QUERY_NAME } from '../Pages/AdminProducts';

const DELETE_PRODUCT_MUTATION = gql`
  mutation deleteProduct($id: Int) {
    deleteProduct(id: $id) {
      id
    }
  }
`
/**
 * This component represents the products table for admin, 
 * which shows product names, product types, product images, 
 * product prices, a button to edit the product, and a button
 * to remove the product from the data.
 */
const ProductTableField = ({ item }) => (
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
      {item.price}
    </div>
    <div className="column">
      <Link to={`/admin/edit/${item.id}`} className='button is-warning is-fullwidth'>Edit</Link>
    </div>
    <div className="column">
      <Mutation mutation={DELETE_PRODUCT_MUTATION}
        refetchQueries={[
          {query: PRODUCTS_QUERY_NAME}
        ]}>
        {(deleteProduct) => (
          <button className="button is-danger is-fullwidth" 
            onClick={() => deleteProduct({variables: {id: item.id}}) }>
              Delete
          </button>
        )}
      </Mutation>
    </div>
  </div>
)


export default ProductTableField
