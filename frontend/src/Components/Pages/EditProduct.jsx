import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import withAdminPermission from '../HOC/withAdminPermission'

function EditProduct({ match, history }) {
  
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
      console.log(products[index], newProduct)
      products[index] = newProduct
      localStorage.setItem('products', JSON.stringify(products))
      history.push('/admin/products')
    }
  }

  return (
    <main>
      <section className="hero is-black is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-white">Edit</h3>
              <p className="subtitle has-text-grey">Edit products as you like</p>
              <div className="box">
                <form onSubmit={edit}>
                  <div className="field">
                    <div className="control">
                      <input className="input is-large is-danger" type="text" placeholder="Name" autoFocus=""
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input className="input is-large is-danger" type="url" placeholder="Img URL"
                        value={img}
                        onChange={e => setImg(e.target.value)}
                        required />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input className="input is-large is-danger" type="number" placeholder="Price"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        required />
                    </div>
                  </div>
                  <input className="button is-block is-danger is-large is-fullwidth" type="submit" value="Edit" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default withAdminPermission(withRouter(EditProduct))
// export default withRouter(EditProduct)
