import React from 'react'
import { Mutation } from 'react-apollo';
import { GET_USER_CART } from '../Pages/ShoppingCart';
import {gql} from 'apollo-boost';

const DELETE_PRODUCT_CART = gql`
  mutation deleteProductCart($id: Int!) {
    deleteProductCart(id: $id) {
      id
    }
  }
`
/**
 * This component represents the products table for shopping, 
 * which shows product names, product types, product images, 
 * product prices, and a button to remove the product from the shopping cart.
 */
const ProductTableFieldCart = ({ item, userId }) => (
  <div className="columns is-desktop has-text-black">
    <div className="column">
      {item.product.name}
    </div>
    <div className="column">
      {item.product.price}
    </div>
    <div className="column">
      <Mutation mutation={DELETE_PRODUCT_CART}
        refetchQueries={[
          { query: GET_USER_CART, variables: { id: userId } }
        ]}
        awaitRefetchQueries={true}>
        {(deleteProductCart, { loading }) => (
          <button className="button is-danger is-fullwidth" onClick={() => {
            deleteProductCart({ variables: { id: item.id} })
          }}>{loading ? 'Removing' : 'Remove'}</button>
        )}
      </Mutation>
    </div>
    <hr/>
  </div>
)


export default ProductTableFieldCart
