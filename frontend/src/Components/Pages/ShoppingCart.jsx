import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import ProductTableFieldShopping from '../Atoms/ProductsTableShopping'
import ProductTableFieldCart from '../Atoms/ProductsTableCart'
import { Mutation, Query } from 'react-apollo'
import gql from 'graphql-tag'

export const GET_USER_CART = gql`
  query getUserCart($id: Int!) {
    user(id: $id) {
      cart {
        id
        product {
          name
          price
        }
      }
    }
  }
`

const GET_PRODUCTS_TO_SALE = gql`
  query {
    products {
      id
      name
      price
      description
      image
    }
  }
`

const ADD_PRODUCT_TO_CART = gql`
  mutation addProductToCart($userId: Int!, $item: String!) {
    addProductCart(id: $userId, productId: $item) {
      id_user
    }
  }
`

const FINISH_BUY_MUTATION = gql`
  mutation finishBuy($user_id: Int!) {
    finishBuy(userId: $user_id) {
      id
    }
  }
`

class ShoppingCart extends Component {

  handleAdd = ({ item, addProductToCart }) => {
    return () => {
      const userId = localStorage.user ? JSON.parse(localStorage.user).id : -1
      addProductToCart({ variables: { userId, item: `${item}` } })
    }
  }

  handleBuy = async (finishBuy) => {
    const { history } = this.props
    await finishBuy()
    history.push('/')
  }

  calculateTotalPrice(data) {
    if (!data || !data.user || data.user.cart.length === 0) return 0

    return data.user.cart.map(product => product.product).map(product => product.price).reduce((a, b) => a + b)
  }

  render() {
    const userId = localStorage.user ? JSON.parse(localStorage.user).id : -1

    return (
      <main>
        <br />
        <section className="hero is-black is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h3 className="title has-text-white">Shopping Cart</h3>
              <Query query={GET_USER_CART} variables={{ id: userId }} fetchPolicy='network-only'>
                {({ data }) => (
                  <>
                    <div className="container is-fluid">
                      <div className="notification">
                        {data && data.user && data.user.cart.map((item) => (
                          <ProductTableFieldCart key={item.id}
                            item={item}
                            userId={userId} />
                        ))}
                      </div>
                    </div>
                    <br />
                    <span className="tag is-large">
                      Total price: {this.calculateTotalPrice(data)}
                    </span>
                    <br/>
                    <br/>
                  </>
                )}
              </Query>
              <Mutation mutation={FINISH_BUY_MUTATION}
                variables={{ user_id: userId }}
                refetchQueries={[
                  { query: GET_USER_CART, variables: { id: userId } }
                ]}
                awaitRefetchQueries={true}>
                {(finishBuy, { loading }) => (
                  <button onClick={ () =>  this.handleBuy(finishBuy)} className="button is-large is-primary">{loading ? 'Buying' : 'Buy'}</button>
                )}
              </Mutation>
              <br />
              <h3 className="title has-text-white">Products List</h3>
              <div className="container is-fluid">
                <div className="notification">
                  <Mutation mutation={ADD_PRODUCT_TO_CART}
                    refetchQueries={['getUserCart']}
                    awaitRefetchQueries={true}>
                    {(addProductToCart) => (
                      <Query query={GET_PRODUCTS_TO_SALE}>
                        {({ data }) => (
                          <>
                            {data && data.products && data.products.map((item, key) => (
                              <ProductTableFieldShopping key={key}
                                item={item}
                                userId={userId}
                                handleAdd={this.handleAdd({ item: item.id, addProductToCart })} />
                            ))}
                          </>
                        )}
                      </Query>
                    )}
                  </Mutation>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default withRouter(ShoppingCart)
