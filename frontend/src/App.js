import React, { Component } from 'react';

//import logo from './logo.svg';
import './App.css';
import Header from './Components/Global/Header'
import Routes from './Components/Routes'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Routes/>
      </div>
    );
  }
}

export default App;
