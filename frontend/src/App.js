import React, { Component } from 'react';

//import logo from './logo.svg';
import './App.css';
import Header from './Components/Global/Header'
import Routes from './Components/Routes'

import { suma } from './Helpers/suma';


class App extends Component {
  render() {
    console.log(suma(1,2))
    return (
      <div className="App">
        <Header/>
        <Routes/>
      </div>
    );
  }
}

export default App;
