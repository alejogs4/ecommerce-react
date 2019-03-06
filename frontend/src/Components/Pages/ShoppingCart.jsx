import React, { Component } from 'react'
import { addToCart, deleteItem } from "../../Helpers/handleLocalStorage"

import ProductTableFieldShopping from '../Atoms/ProductsTableShopping'
import ProductTableFieldCart from '../Atoms/ProductsTableCart'

class ShoppingCart extends Component {

	state = {
		products: localStorage.products ? JSON.parse(localStorage.products) : [],
		shopping: localStorage.shopping ? JSON.parse(localStorage.shopping) : [],
		totalPrice: 0
	}

	handleAdd = (item) => {
		return () => {
			addToCart(item, 'shopping')
			this.setState({
				shopping: localStorage.shopping ? JSON.parse(localStorage.shopping) : [],
				totalPrice: this.state.totalPrice + parseInt(item.price)
			})
		}
	}

	handleDelete = (item) => {
		return () => {
			deleteItem(item, 'shopping')
			this.setState({
				shopping: localStorage.shopping ? JSON.parse(localStorage.shopping) : [],
				totalPrice: this.state.totalPrice - parseInt(item.price)
			})
		}
	}


	render() {
		return (
			<main>
				<h1>Shopping Cart</h1>

				<div className="container">
					<div className="notification">
						{this.state.shopping.map((item, key) => (
							<ProductTableFieldCart key={key}
								item={item}
								handleDelete={this.handleDelete(item)} />
						))}
					</div>
				</div>

				<h2>Total price: {this.state.totalPrice}
				</h2>

				<hr />

				<div className="container">
					<div className="notification">
						{this.state.products.map((item, key) => (
							<ProductTableFieldShopping key={key}
								item={item}
								handleAdd={this.handleAdd(item)}
							/>
						))}
					</div>
				</div>

			</main>
		)
	}
}

export default ShoppingCart
