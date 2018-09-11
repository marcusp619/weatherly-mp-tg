import React, { Component } from 'react';
import './App.css';
import Weather from './Weather';
import SevenHour from './SevenHour';
import Tomorrow from './Tomorrow';
import TenDay from './TenDay';
import KEY from './KEY';
import Welcome from './Welcome';
import Trie from '@markp619/complete-me/lib';
import data from './largest1000cities';
let trie = new Trie()
trie.populate(data.data);

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      loading: true,
      node: null,
      wordlist: null,
    }
  }

  suggestCity = e => {
    const value = e.target.value;
    let results = this.state.node.suggest(value);
    console.log(results.length);
    this.setState({
      wordlist: results,
    });
  }


  componentDidMount() {
    fetch(`http://api.wunderground.com/api/${KEY}/conditions/hourly/forecast10day/q/CA/San_Francisco.json`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: json,
          loading: false,
          node: trie,
        });
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
          <Welcome suggestCity={this.suggestCity} node={this.state.node} />
        </div>
      );  
    }
  }
}
