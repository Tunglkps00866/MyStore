import React from 'react';
import { Navbar,Nav,MenuItem,NavItem,NavDropdown} from 'react-bootstrap';
class Header extends React.Component{
    render(){
        return(
            <div>
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="/">NaviShop</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                    <NavDropdown eventKey={1} title="Products" id="basic-nav-dropdown">
                        <MenuItem eventKey={1.1} href="">Latop</MenuItem>
                        <MenuItem eventKey={1.2} href="">Keyboard&Mouse</MenuItem>
                        <MenuItem eventKey={1.3} href="">PC</MenuItem>
                    </NavDropdown>
                    <NavItem eventKey={2} href="/khuyen-mai">
                        SpecialOffer
                    </NavItem>
                    <NavDropdown eventKey={3} title="Cart" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1} href="/gio-hang">MyCart</MenuItem>
                        <MenuItem eventKey={3.2} href="/thanh-toan">MyPayment</MenuItem>
                    </NavDropdown>
                    <NavItem eventKey={4} href="/gioi-thieu">
                        AboutUs
                    </NavItem>
                    <NavItem eventKey={5} href="/lien-he">
                        ContactUs
                    </NavItem>
                    </Nav>
                    <Nav pullRight>
                    <NavItem eventKey={6} href="/dang-nhap">
                        Login 
                    </NavItem>
                    <NavItem eventKey={7} href="/dang-ky">
                        SignUp
                    </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>;
            </div>
        );
    }
}
export default Header;