import React, { Component } from 'react';
import './App.css';

import data from './Data';
import Weather from './Weather';
import SevenHour from './SevenHour';
import Tomorrow from './Tomorrow';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="app__title">Weatherly</h1>
        </header>
        <Weather forecast={data}/>
        <SevenHour forecast={data.hourly_forecast}/>
        <Tomorrow forecast={data}/>
      </div>
    );
  }
}
