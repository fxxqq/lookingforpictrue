/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React from 'react';
import ocean from './Pictures/ocean.png';


export default ()=>{
        var logo = (
                <img style = {{resizeMode: 'stretch'}} src = {ocean} alt = 'logo' />
        );
        return (
                <header>  
                    <div id ="logo">
                        <a>{logo}</a>
                    </div>
                    
                </header>
               
                );
               
               
}


