import React from 'react';
import { Navbar,Nav,MenuItem,NavItem,NavDropdown,FormControl,FormGroup,Button } from 'react-bootstrap';
class Header extends React.Component{
    render(){
        return(
            <div>
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="/trang-chu">NaviShop</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                    <NavDropdown eventKey={2} title="Products" id="basic-nav-dropdown">
                        <MenuItem eventKey={2.1}>Laptop</MenuItem>
                        <MenuItem eventKey={2.2}>Item 2</MenuItem>
                        <MenuItem eventKey={2.3}>Item 3</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={2.3}>Separated link</MenuItem>
                    </NavDropdown>
                    <NavItem eventKey={1} href="/khuyen-mai">
                        SpecialOffer
                    </NavItem>
                    <NavDropdown eventKey={2} title="Cart" id="basic-nav-dropdown">
                        <MenuItem eventKey={2.1} href="/gio-hang">My Cart</MenuItem>
                        <MenuItem eventKey={2.2} href="/thanh-toan">Payment</MenuItem>
                    </NavDropdown>
                    <NavItem eventKey={3} href="/gioi-thieu">
                        About Us 
                    </NavItem>
                    <NavItem eventKey={3} href="/lien-he">
                        Contact Us
                    </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <FormGroup>
                            <FormControl type="text" placeholder="Search" />
                        </FormGroup>{' '}
                        <Button type="submit>"><Glyphicon glyph="search"/></Button>
                        <Button type="submit>" href="/gio-hang"><Glyphicon glyph="shopping-cart"/></Button>
                        <Button type="submit>" href="/dang-nhap"><Glyphicon glyph="user"/></Button>
                        <NavItem eventKey={1} href="/dang-nhap">
                            Login
                        </NavItem>
                        <NavItem eventKey={2} href="/dang-ky">
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