import React, { Component } from 'react'
import '../Styles/home.css'
import { Link } from 'react-router-dom'
import Nombre from '../../Images/NombreBLANCO.png';
import ProductsGrid from '../Molecules/ProductsGrid';
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

export const PRODUCTS_QUERY = gql`
  query {
    products {
      name
      price
      image
      description
    }
  }
`

class Home extends Component {
  state = {
    product: {},
    active: false,
  }

  openModal = (product) => {
    return () => {
      this.setState({
        product,
        active: true
      })
    }
  }

  render() {
    const { product, active } = this.state

    return (
      <main>
        <br />
        <section className="hero">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">
                <img src={Nombre} alt="Nombre" width="300" height="80" />
              </h1>
            </div>
          </div>
        </section>
        {/* <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
          <ul>
            <li className="is-active"><Link to='/'>All</Link></li>
            <li><Link to='/'>Drawings</Link></li>
            <li><Link to='/'>Tattoos</Link></li>
            <li><Link to='/'>Others</Link></li>
          </ul>
        </nav> */}
        <section className="hero is-black">
          <div className="hero-body">
            <div className="container is-fluid">
              <Query query={PRODUCTS_QUERY}>
                {({ data, loading }) => {
                  if (loading) return <p>Loading...</p>
                  return (
                    <ProductsGrid products={data.products} click={this.openModal} />
                  )
                }}
              </Query>
              <div className={`modal ${active && 'is-active'}`}>
                <div className="modal-background" onClick={() => this.setState({ active: false })}></div>
                <div className="modal-card">
                  <header className="modal-card-head">
                    <p className="modal-card-title">{product.name}</p>
                    <span className="tag is-large">{product.price}</span>
                  </header>
                  <section className="modal-card-body">
                    <p className="image is-4by3">
                      <img src={product.image} alt="" />
                    </p>
                  </section>
                  <footer className="modal-card-foot">
                    <span className="tag is-large">{product.description}</span>
                    <button className="button is-success"><Link to='/shopping'>Comprar</Link></button>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    )
  }
}

export default Home
