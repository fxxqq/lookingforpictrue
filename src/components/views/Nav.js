/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React from 'react';
import {
Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavItem,
        NavLink,
        UncontrolledDropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem,Button } from 'reactstrap';
import {Link} from 'react-router-dom';


export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
<div>
    <Navbar color="dark" className  ="navbar-dark navbar-expand-sm" light expand="md" size= "ml">
        <NavbarBrand href="/">HatBoxPhoto</NavbarBrand>
        <NavbarBrand >
            <UncontrolledDropdown navBar>
                <DropdownToggle color = "dark" caret >
                    Categories
                </DropdownToggle >
                    <DropdownMenu right>
                        <DropdownItem href ='/'> Nature </DropdownItem>
                        <DropdownItem href ='/'> Animal </DropdownItem>
                        <DropdownItem href ='/'> City</DropdownItem>
                        <DropdownItem href ='/'> Food </DropdownItem>
                        <DropdownItem href ='/'> Car </DropdownItem>
                        <DropdownItem href ='/'> Travel </DropdownItem>
                        
                    </DropdownMenu>
            </UncontrolledDropdown>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

                <NavItem>
                    <NavLink href="/"><Button color = "dark " size = "sm" light>Sign In</Button></NavLink>
                </NavItem>
                <NavItem>               
                    <NavLink href="/"><Button color = "success" size ="sm">Join Us</Button></NavLink>
                </NavItem>
                
                <UncontrolledDropdown nav inNavbar>

                    <DropdownToggle nav caret>
                    <Button color = "dark" size = "sm" >More</Button>
                    </DropdownToggle>
                    <DropdownMenu  right>
                        <DropdownItem href ='/About ' > About </DropdownItem>
                        <DropdownItem href ='/More '> More </DropdownItem>
                    </DropdownMenu>

                </UncontrolledDropdown>
            </Nav>
        </Collapse>
    </Navbar>
</div>
        );
    }
}
