import React, { Component } from 'react'
import { deleteItem, addItem } from "../../Helpers/handleLocalStorage"
import { withRouter } from 'react-router-dom'

import ProductTableFieldShopping from '../Atoms/ProductsTableShopping'
import ProductTableFieldCart from '../Atoms/ProductsTableCart'

class ShoppingCart extends Component {

  state = {
    products: localStorage.products ? JSON.parse(localStorage.products) : [],
    shopping: localStorage.shopping ? JSON.parse(localStorage.shopping) : [],
    totalPrice:
      localStorage.shopping
        ? JSON.parse(localStorage.shopping).map(shopping => parseInt(shopping.price)).reduce((a, b) => a + b, 0)
        : 0
  }

  handleAdd = (item) => {
    return () => {
      addItem(item, 'shopping', false)
      this.setState(prev => ({
        shopping: localStorage.shopping ? JSON.parse(localStorage.shopping) : [],
        totalPrice: prev.totalPrice + parseInt(item.price)
      }))
    }
  }

  handleDelete = (item) => {
    return () => {
      deleteItem(item, 'shopping')
      this.setState(prev => ({
        shopping: localStorage.shopping ? JSON.parse(localStorage.shopping) : [],
        totalPrice: prev.totalPrice - parseInt(item.price)
      }))
    }
  }

  handleBuy = () => {
    return () => {
      localStorage.setItem('shopping', '[]')
      this.setState(prev => ({
        shopping: [],
        totalPrice: 0
      }))
      this.history.props.push("/")
    }
    



  }


  render() {
    const { shopping, totalPrice, products } = this.state

    return (
      <main>
        <br />
        <section className="hero is-black is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h3 className="title has-text-white">Shopping Cart</h3>
              <div className="container">
                <div className="notification">
                  {shopping.map((item, key) => (
                    <ProductTableFieldCart key={key}
                      item={item}
                      handleDelete={this.handleDelete(item)} />
                  ))}
                </div>
              </div>
              <br />
              <h2 className="title has-text-grey">Total price: {totalPrice}</h2  >
              <button onClick={this.handleBuy} className="button is-success is-fullwidth">Buy</button>
              <br />
              <h3 className="title has-text-white">Products List</h3>
              <div className="container">
                <div className="notification">
                  {products.map((item, key) => (
                    <ProductTableFieldShopping key={key}
                      item={item}
                      handleAdd={this.handleAdd(item)} />
                  ))}
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
