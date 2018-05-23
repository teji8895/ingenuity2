import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header/Header';
import Carousel from './Middle/Home/Carousel';
import Icons from './Middle/Home/Icons';
import Footer from './Footer/Footer';



class App extends Component {
  render() {
    return (
   <div>
      <div >
      <Header/>
      </div>

        <div style={{marginTop:"60px"}}>
        <Carousel/>
        <Icons/>
      </div>
      
         <div>
      <Footer/>
           </div>
   </div>
 
      
    );
  }
}

export default App;
