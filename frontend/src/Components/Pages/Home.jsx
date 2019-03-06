import React, { Component } from 'react'
import '../Styles/home.css'

import Nombre from '../../Images/NombreBLANCO.png';
import Product from '../Atoms/Product';
import ProductsGrid from '../Molecules/ProductsGrid';

class Home extends Component {
  state = {
    img: '',
    active: false,
    products: localStorage.products ? JSON.parse(localStorage.products) : []
  }

  openModal = (img) => {
    return () => {
      this.setState({
        img,
        active: true
      })
    }
  }

  render() {
    const { img, active, products } = this.state

    return (
      <main>
        <br/>
        <section className="hero">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">
                <img src={Nombre} alt="Nombre" width="300" height="80" />
              </h1>
            </div>
          </div>
        </section>

        <br />

        <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
          <ul>
            <li className="is-active"><a href="#" aria-current="page">All</a></li>
            <li><a href="#">Drawings</a></li>
            <li><a href="#">Tattoos</a></li>
            <li><a href="#">Others</a></li>
          </ul>
        </nav>

        <br />
        <div className="backColor">
          <ProductsGrid products={products} click={this.openModal} />
          <div className={`modal ${active && 'is-active'}`}>
            <div className="modal-background"></div>
            <div className="modal-content">
              <p className="image is-4by3">
                <img src={img} alt="" />
              </p>
            </div>
            <button className="modal-close is-large"
              aria-label="close"
              onClick={() => this.setState({ active: false })}></button>
          </div>
        </div>

        <footer class="footer">
          <div class="content has-text-centered">
            <p>
              VANTABLACK by <a href="https://github.com/alejogs4">Alejandro Garcia</a>, 
              <a href="https://github.com/maugarbru"> Mauricio Garzon</a> and  
              <a href="https://github.com/mvelezg99"> Miguel Velez</a>. The source code is licensed
              <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>.
            </p>
          </div>
        </footer>
      </main>
    )
  }
}

export default Home
