/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, { Component } from 'react';
import fs1 from 'fs'


class Search extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        select: '',
                        input: '',
                         List:[],
                         pageList:[],
                         pageArr:[],
                          all:{
                                Animal:['cat','cattle','dog','eagle','fish','giraffe','hippo','leopard','lion','parrot','sheep','wapiti'],
                                Car:['autotruck','black bmw','bmw','bmw2','Cadillac','car','Ferrari','Red truck','super car','yellow car'],
                                City:['beijing','Egypt','London1','London2','New Delhi','New York','Paris'],
                                Food:['bread','cake','drumstick','fish and meat','hamburger','meat','milk','nut'],
                                Nature:['grass','maple','peachblossom','red autumnal leaves','sea','settingSun','snow','tide','water-drop','windmill'],
                                Travel:['Antarctica','arch of triumph','Bali','Eiffel Tower','Sanya','Taj Mahal','the Great Wall','the Sahara','Xishuangbanna']
                        }
                      };
              }
              
              searchFiles(){   
        }  
              componentDidMount () {
                       const {select,input,page}=this.props.match.params;
                       document.getElementById("exampleSelect").value=select;
                        this.fetchData(select,input,page);  
                         
                        
              }
              fetchData(select,input,page){
                let list = this.state.all[select]     
                let List=[];
              if(list.length){ 
                    for (let i=0;i<list.length;i++)
                    {
                         if(input){
                                if(list[i].indexOf(input)>=0){
                                        List.push(`./parts/${select}/${list[i]}.jpg`)  ;
                                       
                                    }
                         }else{
                                List.push(`./parts/${select}/${list[i]}.jpg`)  
                         }
                      
                               
                    }
                    let pageArr=   this.sliceArray(List,8);
              let pageList;
                 if(pageArr.length){
                         pageList=pageArr[parseInt(page)-1] 
                 }else{
                        pageList=[]
                 }
                   this.setState({
                    List  :List,
                    pageList:pageList,
                    pageArr:pageArr,
                   })
              }
              }
              sliceArray(array, size){
                var result = [];
                for (var x = 0; x < Math.ceil(array.length / size); x++) {
                    var start = x * size;
                    var end = start + size;
                    result.push(array.slice(start, end));
                }
                return result;
              }
              goPage(select,input,page){
                if(input){
                        this.props.history.push(`/search/${select}/${input}/${page+1}`)
                      }else{
                        this.props.history.push(`/searchAll/${select}/${page+1}`)
                      }
                   
              }
              componentWillReceiveProps(nextProps) {
                if (nextProps.location.pathname != this.props.location.pathname) {
                        console.log(nextProps);
                        const {select,input,page}=nextProps.match.params;
                     
                        this. fetchData( select,input,page)   ;  
                } 
             }
    render() {

        let {List,pageList,pageArr}=this.state;
      
        const {select,input,page}=this.props.match.params;
              
               
        return (

<div className="container">


  <div className>
        <hgroup>
  <h1>Search result</h1>
  <h2 className="lead"><strong className="text-danger">{List.length}</strong> results were found for the search for 
     <strong className="text-danger"> {input} </strong>of<b className="text-danger"> {select} </b>
     
  </h2>
  <p> </p> 
  </hgroup>
  
                <div className>
		<article className="search-result row">
                 { 
                       pageList.map((item,i) => (
                        <div key={i} className="col-sm-6 col-md-3">
                            <img src={require(''+pageList[i]+'')} alt="" />
                            {/* <img src={require('./parts/Animal/cat.jpg')} alt="" /> */}
                            
                        </div>
                    ))
                }
                        </article>
                        
                     
             

        
	</div>
        </div>
        
        
 <div className="container"> 
 <h1></h1>

 <ul className="pagination justify-content-center">
   
                { 
                       pageArr.map((item,i) => (
                        <li  key={i} className={['page-item', page-1 == i && 'active'].join(' ')} onClick ={()=>this.goPage(select,input,i)} >
                            <a className="page-link" href="javascript:;">{i+1}</a>
                        </li>
                    ))
                }
    {/* <li className="page-item active"><a className="page-link" href="javascript:;">1</a></li>
    <li className="page-item"><a className="page-link" href="javascript:;">2</a></li>
    <li className="page-item"><a className="page-link" href="javascript:;">3</a></li> */}
   
  </ul>

 
 </div>
 
</div>

        );
    }
    
};

export default Search;
  
  
