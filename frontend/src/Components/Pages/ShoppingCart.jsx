import React, { Component } from 'react'
import { deleteItem, addItem } from "../../Helpers/handleLocalStorage"

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


  render() {
    const { shopping, totalPrice, products } = this.state

    return (
      <main>
        <h1>Shopping Cart</h1>
        <div className="container">
          <div className="notification">
            {shopping.map((item, key) => (
              <ProductTableFieldCart key={key}
                item={item}
                handleDelete={this.handleDelete(item)} />
            ))}
          </div>
        </div>
        <h2>Total price: {totalPrice}</h2>
        <hr />
        <div className="container">
          <div className="notification">
            {products.map((item, key) => (
              <ProductTableFieldShopping key={key}
                item={item}
                handleAdd={this.handleAdd(item)} />
            ))}
          </div>
        </div>
      </main>
    )
  }
}

export default ShoppingCart
