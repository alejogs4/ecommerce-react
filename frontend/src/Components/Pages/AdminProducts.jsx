import React, { Component } from 'react'

class AdminProducts extends Component {

  state = {
    productName: '',
    productIMG: '',
    productPrice: ''
  }

  handleChange = (field) => {
    return e => {
      this.setState({
        [field]: e.target.value
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
            <label><strong>Enter product URL: </strong></label>
            <input
              type="text"
              className="form-control"
              value={this.state.productIMG}
              onChange={this.handleChange('productIMG')}
              required
            />
          </div>
          <div className="form-group">
            <label><strong>Enter product price: </strong></label>
            <input
              type="text"
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
      </main >
    )
  }
}

export default AdminProducts
