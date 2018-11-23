import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="static-timer">
          <span className="timer" >00:00:00</span>
          <span className="type-timer" >Hour Minute Second</span>

        </div>
 </div>
    );
  }
}

export default App;
