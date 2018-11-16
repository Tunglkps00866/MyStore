import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Page from './Page';

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
        <Page></Page>
      </div>
    );
  }
}
export default App;
