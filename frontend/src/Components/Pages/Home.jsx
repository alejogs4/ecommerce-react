import React, { Component } from 'react'
import '../Styles/home.css'
import { Link } from 'react-router-dom'
import Nombre from '../../Images/NombreNEGRO.png';
import Img1 from '../../Images/img1.png';
import Img2 from '../../Images/img2.png';
import Img3 from '../../Images/img3.png';
import Img4 from '../../Images/img4.png';

class Home extends Component {
  render() {
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

        <br/>

        <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
          <ul>
          <li class="is-active"><a href="#" aria-current="page">All</a></li>
            <li><a href="#">Drawings</a></li>
            <li><a href="#">Tattoos</a></li>
            <li><a href="#">Others</a></li>
          </ul>
        </nav>

        <br/>
        <div className="backColor">

          <div class="columns">
            <div class="column">
              <div class="columns is-mobile">
                <div class="column">
                  <figure class="image is-4by3">
                    <img src={Img2} alt="img2"/>
                  </figure>
                </div>
                <div class="column">
                  <figure class="image is-4by3">
                    <img src={Img3} alt="img3"/>
                  </figure>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="columns is-mobile">
                <div class="column">
                  <figure class="image is-4by3">
                    <img src={Img1} alt="img1"/>
                  </figure>
                </div>
                <div class="column">
                  <figure class="image is-4by3">
                    <img src={Img4} alt="img4"/>
                  </figure>
                </div>
              </div>
            </div>

            <div class="modal">
              <div class="modal-background"></div>
              <div class="modal-content">
                <p class="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt=""/>
                </p>
              </div>
              <button class="modal-close is-large" aria-label="close"></button>
            </div>

          </div>
        </div>
      </main>
    )
  }
}

export default Home
