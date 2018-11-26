import React from 'react';
import { Navbar,Nav,MenuItem,NavItem,NavDropdown,FormControl,FormGroup,Button,Glyphicon } from 'react-bootstrap';
class Header extends React.Component{
    render(){
        return(
            <div>
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="/">NaviShop</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                    <NavDropdown eventKey={1} title="Products" id="basic-nav-dropdown">
                        <MenuItem eventKey={1.1} href="/laptop">Laptop</MenuItem>
                        <MenuItem eventKey={1.2}>Keyboard&Mouse</MenuItem>
                    </NavDropdown>
                    <NavItem eventKey={2} href="/khuyen-mai">
                        SpecialOffer
                    </NavItem>
                    <NavDropdown eventKey={3} title="Cart" id="basic-nav-dropdown1">
                        <MenuItem eventKey={3.1} href="/gio-hang">My Cart</MenuItem>
                        <MenuItem eventKey={3.2} href="/thanh-toan">Payment</MenuItem>
                    </NavDropdown>
                    <NavItem eventKey={4} href="/gioi-thieu">
                        About Us 
                    </NavItem>
                    <NavItem eventKey={5} href="/lien-he">
                        Contact Us
                    </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem style={{width:'300px'}}>
                            <FormGroup>
                                <FormControl type="text" placeholder="Search" style={{borderRadius:'30px'}}/>
                            </FormGroup>
                                <Button type="submit"><Glyphicon glyph="search"/></Button>
                                <Button type="submit"><Glyphicon glyph="user"/></Button>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        );
    }
}
export default Header;