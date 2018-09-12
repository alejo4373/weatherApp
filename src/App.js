import React, { Component } from 'react';
import './App.css';
import cloudy from './icons/clear.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={cloudy} />
      </div>
    );
  }
}

export default App;
