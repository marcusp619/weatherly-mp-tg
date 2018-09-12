import React, { Component } from 'react';
import './App.css';
import Weather from './Weather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import KEY from './KEY';
import Welcome from './Welcome';
import Trie from '@markp619/complete-me/lib';
import data from './largest1000cities';
let trie = new Trie();

trie.populate(data.data);

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      loading: true,
      node: null,
      wordlist: null,
      input: '',
    };
  }

  suggestCity = e => {
    const value = e.target.value;

    let results = this.state.node.suggest(value);
    
    this.setState({
      wordlist: results,
      input: value,
    });
  }
  
  apiFetch = city => {
    fetch(`http://api.wunderground.com/api/${KEY}/conditions/hourly/forecast10day/q/${ city || 'autoip'}.json`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: json,
        });
      });
  }

  handleSearchChange = e => {
    console.log('hey')

    this.apiFetch(this.state.input);
  }

  componentDidMount() {
    let city = this.state.input; 

    fetch(`http://api.wunderground.com/api/${KEY}/conditions/hourly/forecast10day/q/${ city || 'autoip'}.json`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: json,
          loading: false,
          node: trie,
          input: ''
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
          <Welcome 
            handleSearchChange={this.handleSearchChange}
            suggestCity={this.suggestCity} 
            node={this.state.node} 
            wordlist={this.state.wordlist} 
          />
          <Weather forecast={this.state.data} />
          <TenDay forecast={this.state.data} />
        </div>
      );  
    }
  }
}
