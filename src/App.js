import React, { Component } from 'react';
import './App.css';

import data from './Data';
import Weather from './Weather';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="App-header">
          <h1>Weatherly</h1>
        </header>
        <Weather forecast={data}/>
      </div>
    );
  }
}

export default App;
