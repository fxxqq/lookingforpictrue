/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React, { Component } from 'react';
import Card from './parts/Card';

class About extends Component {
    render() {
        return (
                <div>
          
                <h1 className = "text-center"> About our team </h1> 
                    <p></p>       
                    <div>
                        <Card />
                    </div>               
                </div>
                );
    }
};

export default About;