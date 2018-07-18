/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';

import Nature from './Pictures/Nature.jpg';
import City from './Pictures/City.jpg';
import Animal from './Pictures/Animal.jpg';
import Food from './Pictures/Food.jpg';
import Car from './Pictures/Car.jpg';
import Travel from './Pictures/Travel.jpg';


class Cateogory extends Component {
    render() {
        return (
                <Container>
                    <Row>
                        <Col className = "text-center">
                
                        <img src = {Nature} />
                        <p></p>
                        <h3 className = "text-center">Nature</h3>
                        </Col>
                
                        <Col className = "text-center">
                
                        <img src = {Animal} />
                        <p></p>
                        <h3 className = "text-center">Animal</h3>
                        </Col>
                
                        <Col className = "text-center">
                
                        <img src = {City} />
                        <p></p>
                        <h3 className = "text-center">City</h3>
                        </Col>
                
                    </Row>   
                    <p></p>
                    <Row>
                        <Col className = "text-center">
                
                        <img src = {Food} />
                        <p></p>
                        <h3 className = "text-center">Food</h3>
                        </Col>
                
                        <Col className = "text-center">
                
                        <img src = {Car} />
                        <p></p>
                        <h3 className = "text-center">Car</h3>
                        </Col>
                
                        <Col className = "text-center">
                
                        <img src = {Travel} />
                        <p></p>
                        <h3 className = "text-center">Travel</h3>
                        </Col>
                
                    </Row>  
                </Container>

                                );
                    }
                }
        ;

        export default Cateogory;