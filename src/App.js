import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import Header from './Header';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={message: "Hello world" };
  }
  onClick()
  {
    this.setState({message: "Hi There"});
  }
  render() {
    return (
      <div className="App">
      <Header></Header>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
             {this.state.message}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello
          </a>
          <button onClick={this.onClick.bind(this)}>Click here</button>
        </header>
        <Footer></Footer> 
      </div>
    );
  }
}
export default App;
