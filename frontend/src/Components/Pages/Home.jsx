import React, { Component } from 'react'
import '../Styles/home.css'
import { Link } from 'react-router-dom'
import Nombre from '../../Images/NombreNEGRO.png';

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
      </main>
    )
  }
}

export default Home
