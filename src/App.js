import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
      </div>
    );
    // this code below get compiled to this code
    /*return React.createElement(
      'div',
      null,
      React.createElement('h1', { className: 'App' }, "Hi, I'm a React App!!!")
    );*/
  }
}

export default App;
