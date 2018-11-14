import React from 'react';
import './App.css';
class Header extends React.Component{
    render(){
        return(
            <div>
                <ul>
                <li><a class="active" href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
                </ul>
            </div>
        );
    }
}
export default Header;