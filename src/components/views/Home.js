/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React, { Component } from 'react';
import Carousel from './parts/Carousel';
import Category from './parts/Category';
import Footer from './parts/Footer';
import '../stylesheets/Home.css';

class Home extends Component {
    render() {
        return (
                <div>                         
                    <Carousel />
                    <p className = "pad"> </p>
                    
                    <Category />  
                    
                <p> </p>
                <h3></h3>
                <Footer />
                </div>
               
        );
    }
};

export default Home;