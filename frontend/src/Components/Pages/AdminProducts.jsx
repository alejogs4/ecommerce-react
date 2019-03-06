import React, { Component } from 'react'
import { addItem, deleteItem } from "../../Helpers/handleLocalStorage"
import { withRouter } from 'react-router-dom'

class AdminProducts extends Component {

  state = {
    productName: '',
    productType: '',
    productIMG: '',
    productPrice: '',
    products: JSON.parse(localStorage.products)
  }

  handleChange = (field) => {
    return e => {
      this.setState({
        [field]: e.target.value
      })
    }
  }

  // NO SE COMO BORRAR CUANDO LE DE CLICK EN EL BORRAR QUE SE GENERA EN LA TABLA
  handleDelete = (e) => {
    if (deleteItem(e.target.value, 'products')){
      return
    }
    return
  }


  onSubmit = (e) => {
    e.preventDefault()
    const product = {
      name: this.state.productName,
      type: this.state.productType,
      IMG: this.state.productIMG,
      price: this.state.productPrice
    }

    if (addItem(product, 'products')) {
      alert("Registered product!")

      this.setState({
        productName: '',
        productType: '',
        productIMG: '',
        productPrice: '',
        products: JSON.parse(localStorage.products)
      })
    }
  }

  render() {
    return (
      <main>
        <h1>Products Manager</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label><strong>Enter product name: </strong></label>
            <input
              type="text"
              className="form-control"
              value={this.state.productName}
              onChange={this.handleChange('productName')}
              required
            />
          </div>
          <div className="form-group">
            <label><strong>Enter product type: </strong></label>
            <select
              className="form-control"
              onChange={this.handleChange('productType')}
              required
            >
              <option></option>
              <option value="drawings">Drawings</option>
              <option value="tattoos">Tattoos</option>
              <option value="others" >Others</option>
            </select>

          </div>
          <div className="form-group">
            <label><strong>Enter product URL: </strong></label>
            <input
              type="url"
              className="form-control"
              value={this.state.productIMG}
              onChange={this.handleChange('productIMG')}
              required
            />
          </div>
          <div className="form-group">
            <label><strong>Enter product price: </strong></label>
            <input
              type="number"
              className="form-control"
              value={this.state.productPrice}
              onChange={this.handleChange('productPrice')}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Add product"
              className="btn btn-primary"
            />
          </div>
        </form>

        <table>
          <tbody>{this.state.products.map((item, key) => {

            return (
              <tr key={key}>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.IMG}</td>
                <td>{item.price}</td>
                <td><button>Edit</button></td>
                {/*ESTO ES MACHETE PARA ELIMINAR*/}
                <td><button value={item} onClick={this.handleDelete}>Delete</button></td>
              </tr>
            )

          })}</tbody>
        </table>

      </main >
    )
  }
}

export default withRouter(AdminProducts)
