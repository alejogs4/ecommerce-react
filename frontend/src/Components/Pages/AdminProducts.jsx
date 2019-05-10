import React, { Component } from 'react'
import { deleteItem } from "../../Helpers/handleLocalStorage"
import { withRouter } from 'react-router-dom'
import ProductTableField from '../Atoms/ProductTableField';
import withAdminPermission from '../HOC/withAdminPermission'
import { Mutation, Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import Notification from '../Atoms/Notification';
import { PRODUCTS_QUERY } from './Home';

const ADD_PRODUCT_MUTATION = gql`
  mutation addProduct($product: ProductInput) {
    addProduct(input: $product) {
      name
      price
    }
  }
`

export const PRODUCTS_QUERY_NAME = gql`
  query {
    products {
      id
      name
      description
      price
      image
    }
  }
`

/**
 * This component represents the "Admin Products" screen,
 * to manage the products of the application
 */
class AdminProducts extends Component {
  state = {
    productName: '',
    productType: '',
    productIMG: '',
    productPrice: '',
    products: localStorage.products ? JSON.parse(localStorage.products) : []
  }

  /**
   * This function handles the changes on a field, changing the state
   * of the component simultaneously.
   */
  handleChange = (field) => {
    return e => {
      this.setState({
        [field]: e.target.value
      })
    }
  }

  /**
   * This function handles the deletes of the items, deleting them from the data
   * and from the application's state.
   */
  handleDelete = (name) => {
    return () => {
      deleteItem(name, 'products')
      this.setState({
        products: localStorage.products ? JSON.parse(localStorage.products) : []
      })
    }
  }

  /**
   * onSubmit will control the event of "submit" the form, adding the product
   * to the data and clearing the application's state.
   */
  onSubmit = (addProduct) => {
    return async e => {
      e.preventDefault()
      const { productIMG, productPrice, productName, productType } = this.state
      const product = { name: productName, price: parseFloat(productPrice), image: productIMG, description: productType }

      addProduct({ variables: { product } })
      this.setState({
        productIMG: '',
        productName: '',
        productType: '',
        productPrice: ''
      })
    }
  }

  updateCache(cache, { data: { addProduct } }) {
    const { products } = cache.readQuery({ query: PRODUCTS_QUERY })
    cache.writeQuery({ query: PRODUCTS_QUERY, data: { products: products.concat(addProduct) } })
  }

  render() {
    return (
      <main>
        <section className="hero is-black is-fullheight">
          <div className="hero-body">
            {/*  */}
            <Query query={PRODUCTS_QUERY_NAME}>
              {({ data }) => (
                <div className="container has-text-centered">
                  <div className="column is-4 is-offset-4">
                    <h3 className="title has-text-white">Products Manager</h3>
                    <p className="subtitle has-text-grey">Add products as you like</p>
                    <div className="box">
                      <Mutation mutation={ADD_PRODUCT_MUTATION}
                        refetchQueries={[
                          { query: PRODUCTS_QUERY_NAME }
                        ]}
                        update={this.updateCache}>
                        {(addProduct, { error }) => (
                          <form onSubmit={this.onSubmit(addProduct)}>
                            <div className="field">
                              <div className="control">
                                <input className="input is-large is-warning" type="text" placeholder="Product Name" autoFocus=""
                                  value={this.state.productName}
                                  onChange={this.handleChange('productName')}
                                  required />
                              </div>
                            </div>

                            <div className="field">
                              <div className="control">
                                <input className="input is-large is-warning" type="text" placeholder="Product Description" autoFocus=""
                                  value={this.state.productType}
                                  onChange={this.handleChange('productType')}
                                  required />
                              </div>
                            </div>

                            <div className="field">
                              <div className="control">
                                <input className="input is-large is-warning" type="url" placeholder="Image URL"
                                  value={this.state.productIMG}
                                  onChange={this.handleChange('productIMG')}
                                  required />
                              </div>
                            </div>

                            <div className="field">
                              <div className="control">
                                <input className="input is-large is-warning" type="number" placeholder="Product Price"
                                  value={this.state.productPrice}
                                  onChange={this.handleChange('productPrice')}
                                  required />
                              </div>
                            </div>
                            <input className="button is-block is-warning is-large is-fullwidth" type="submit" value="Add Product" />
                            {error && <Notification type='is-danger' text='Error creating the product' />}
                          </form>
                        )}
                      </Mutation>
                    </div>
                  </div>
                  <div className="container is-fluid">
                    <div className="notification">
                      {data.products && data.products.map(product => (
                        <ProductTableField key={product.id} item={product} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </Query>
          </div>
        </section>
      </main>
    )
  }
}

export default withAdminPermission(withRouter(AdminProducts))
