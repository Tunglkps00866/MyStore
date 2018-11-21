import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
class Header extends React.Component{
    render(){
        return(
            <div>
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="#brand">NaviShop</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                    <NavItem eventKey={1} href="https://google.com">
                        Contact
                    </NavItem>
                    <NavItem eventKey={2} href="https://reactjs.net">
                        About
                    </NavItem>
                    <NavDropdown eventKey={3} title="Products" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Item 1</MenuItem>
                        <MenuItem eventKey={3.2}>Item 2</MenuItem>
                        <MenuItem eventKey={3.3}>Item 3</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                    </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        Login
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Sign up
                    </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        );
    }
}
export default Header;