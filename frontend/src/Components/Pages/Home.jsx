import React, { Component } from 'react'
import '../Styles/home.css'
//import { Link } from 'react-router-dom'
import Nombre from '../../Images/NombreNEGRO.png';
import Img1 from '../../Images/img1.png';
import Img2 from '../../Images/img2.png';
import Img3 from '../../Images/img3.png';
import Img4 from '../../Images/img4.png';
import Product from '../Atoms/Product';

class Home extends Component {
  state = {
    img: '',
    active: false
  }

  openModal = (img) => {
    return e => {
      this.setState({
        img,
        active: true
      })
    }
  }

  

  render() {
    const { img, active } = this.state

    return (
      <main>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
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

          <div className="columns">
            <div className="column">
              <div className="columns is-mobile">
                <div className="column">
                  <Product img={Img2} click={this.openModal(Img2)} />
                </div>
                <div className="column">
                  <Product img={Img3} click={this.openModal(Img3)} />
                </div>
              </div>
            </div>

            <div className="column">
              <div className="columns is-mobile">
                <div className="column">
                  <Product img={Img1} click={this.openModal(Img1)} />
                </div>
                <div className="column">
                  <Product img={Img4} click={this.openModal(Img4)} />
                </div>
              </div>
            </div>

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
        </div>
      </main>
    )
  }
}

export default Home
