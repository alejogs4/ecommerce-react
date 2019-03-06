import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'

function EditProduct({ match, history }) {
  // console.log(match)
  const [name, setName] = useState('')
  const [img, setImg] = useState('')
  const [price, setPrice] = useState('')
  const [type, setType] = useState('')

  useEffect(() => {
    const product = localStorage.products 
      ? JSON.parse(localStorage.products).find(_product => _product.name === match.params.name) 
      : null

    if (product) {
      setName(product.name)
      setImg(product.IMG)
      setPrice(product.price)
      setType(product.type)
    }
  }, [])

  function edit(e) {
    e.preventDefault()
    const newProduct = {
      IMG: img,
      name,
      price,
      type
    }

    const index = localStorage.products 
      ? JSON.parse(localStorage.products).map(product => product.name).indexOf(match.params.name) 
      : -1
    if (index !== -1) {
      const products = JSON.parse(localStorage.products)
      products[index] = newProduct
      localStorage.setItem('products', JSON.stringify(products))
      history.push('/admin/products')
    }
  }

  return (
    <main>
      <h1>Products Manager</h1>
      <form onSubmit={edit}>
        <div className="form-group">
          <label><strong>Enter product name: </strong></label>
          <input type="text"
            className="form-control"
            value={name}
            onChange={e => setName(e.target.value)}
            required />
        </div>
        <div className="form-group">
          <label><strong>Enter product URL: </strong></label>
          <input type="url"
            className="form-control"
            value={img}
            onChange={e => setImg(e.target.img)}
            required />
        </div>
        <div className="form-group">
          <label><strong>Enter product price: </strong></label>
          <input type="number"
            className="form-control"
            value={price}
            onChange={e => setPrice(e.target.value)}
            required />
        </div>
        <div className="form-group">
          <input type="submit"
            value="Edit product"
            className="btn btn-primary" />
        </div>
      </form>
    </main >
  )
}

export default withRouter(EditProduct)
