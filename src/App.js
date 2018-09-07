import React, { Component } from 'react';
import './App.css';

import Weather from './Weather';
import SevenHour from './SevenHour';
import Tomorrow from './Tomorrow';
import TenDay from './TenDay';
import KEY from './KEY';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      loading: true
    }
  }

  componentDidMount() {
    fetch(`http://api.wunderground.com/api/${KEY}/geolookup/conditions/forecast/q/CA/San_Francisco.json`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: json,
          loading: false 
       });
      });
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <p>this is loading....</p>
        </div>
      )
    } else {
      return (
      <div className="app">
        <header className="app__header">
          <h1 className="app__title">Weatherly</h1>
        </header>
        <Weather data={this.state.data} />
      </div>
    );  
    }
  }
}
