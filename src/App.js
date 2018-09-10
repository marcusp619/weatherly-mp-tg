import React, { Component } from 'react';
import './App.css';

import Weather from './Weather';
import SevenHour from './SevenHour';
import Tomorrow from './Tomorrow';
import TenDay from './TenDay';
import KEY from './KEY';
import Welcome from './Welcome';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      loading: true,
      input: null,
    }
  }

  componentDidMount() {
    fetch(`http://api.wunderground.com/api/${KEY}/conditions/hourly/forecast10day/q/France/Paris.json`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: json,
          loading: false 
        });
      });
  }

  handleSearchChange = e => {
    const value = e.target.value;
    
    this.setState(
    {
      input: value,
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <p>this is loading....</p>
        </div>
      );
    } else {
      return (
        <div className="app">
          <header className="app__header">
            <h1 className="app__title">Weatherly</h1>
          </header>
          <Weather forecast={this.state.data} />
          <Tomorrow forecast={this.state.data} />
          <SevenHour forecast={this.state.data} />
          <TenDay forecast={this.state.data} />
          <Welcome handleSearchChange={this.handleSearchChange} input={this.state.input}/>
        </div>
      );  
    }
  }
}
