import React, { Component } from 'react';
import Header from "../src/components/Header/Header";
import About from "./components/pages/About";
import Portfolio from "../src/components/pages/Porfolio";
import Footer from "../src/components/Footer/Footer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          
        <Footer/>
      </div>
      
    );
  }
}

export default App;
