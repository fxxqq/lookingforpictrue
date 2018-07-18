/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




import React from 'react';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupDropdown,
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormGroup,
 } from 'reactstrap';
 import {withRouter} from "react-router-dom";
 
class Example extends React.Component {
  constructor(props) {
    super(props);
   
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.toggleSplit = this.toggleSplit.bind(this);
    this.state = {
      dropdownOpen: false,
      splitButtonOpen: false,
      search : '',
    };
    
    this.updateInput = this.updateInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  toggleDropDown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  toggleSplit() {
    this.setState({
      splitButtonOpen: !this.state.splitButtonOpen
    });
  }
  updateInput(event){
      this.setState({search: event.target.value})
  }
  
  handleSearch(event){
     
      let selectValue=document.getElementById("exampleSelect").value;
      let inputValue=document.getElementById("searchValue").value;
      console.log('Your input value is: ' ,selectValue, inputValue);
      if(inputValue){
        this.props.history.push(`/search/${selectValue}/${inputValue}/1`)
      }else{
        this.props.history.push(`/searchAll/${selectValue}/1`)
      }
      //send state to the server code
  } 
  render() {
    return (
       <div>
        <InputGroup  onSubmit = {this.updateInput} >
          <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.splitButtonOpen} toggle={this.toggleSplit}>
          <Input type="select" name="select" id="exampleSelect"   >
            {/* <option>Photos</option>
            <option divider /> */}
            <option value="Nature">Nature</option>
            <option value="Animal">Animal</option>
            <option value="City">City</option>
            <option value="Food">Food</option>
            <option value="Car">Car</option>
            <option value="Travel">Travel</option>
          </Input>
          </InputGroupButtonDropdown>
          <Input id="searchValue" placeholder="search images" type = "text" onChange = {this.handleSearchTermChange} />
          <InputGroupAddon addonType="append"  >
               <Button color="secondary" href ='javascript:void(0)' onClick ={this.handleSearch} >Search</Button>
           </InputGroupAddon>
        </InputGroup>
      </div>

    );
  }
}

export default withRouter(Example)