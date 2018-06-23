import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/Header';
import { Welcome } from './components/welcome/Welcome';
import { LogoBin } from './components/logo-bin/LogoBin';
import { Carousel } from './components/carousel/Carousel';
import { Footer } from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Welcome />
        <LogoBin />
        <Carousel />
        <Footer />
      </div>
    );
  }
}

export default App; 
