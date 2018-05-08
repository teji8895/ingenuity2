import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header/Header';
import Carousel from './Middle/Home/Carousel';
import Icons from './Middle/Home/Icons';



class App extends Component {
  render() {
    return (
      <div >
        <Header/>
        <Carousel/>
        <Icons/>
      </div>
    );
  }
}

export default App;
