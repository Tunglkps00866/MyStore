import React from 'react';
import { Navbar,Nav,MenuItem,NavItem,NavDropdown } from 'react-bootstrap';
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
                    <NavItem eventKey={1} href="/trang-chu">
                        Home
                    </NavItem>
                    <NavDropdown eventKey={2} title="Products" id="basic-nav-dropdown">
                        <MenuItem eventKey={2.1}>Item 1</MenuItem>
                        <MenuItem eventKey={2.2}>Item 2</MenuItem>
                        <MenuItem eventKey={2.3}>Item 3</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={2.3}>Separated link</MenuItem>
                    </NavDropdown>
                    <NavItem eventKey={3} href="/gioi-thieu">
                        Intro
                    </NavItem>
                    </Nav>
                    <Nav pullRight>
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