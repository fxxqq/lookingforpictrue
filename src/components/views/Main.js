/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Search from './Search';
import Test from './Test';

const Main = () => (
        <Switch>
            <Route exact path ='/' component = {Home} />
            <Route path ='/About'  component = {About} /> 
            <Route path ='/SearchAll/:select/:page' component = {Search} />     
            <Route path ='/Search/:select/:input/:page' component = {Search} />
            <Route path ='/Test' component = {Test} />      
        </Switch>
        
);

export default Main;