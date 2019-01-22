import React, { Component } from 'react';
import './App.css';
import Weather from './Weather';
import TenDay from './TenDay';
import KEY from './KEY';
import Welcome from './Welcome';
import Trie from './@markp619/complete-me/lib';
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
    fetch(`https://api.wunderground.com/api/${KEY}/conditions/hourly/forecast10day/q/${city || 'autoip'}.json`)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        if (json.response.error || json.response.results) {
          return alert('Please enter a zip or city (,) state/country')
        }
        localStorage.setItem('input', this.state.input);
        this.setState({
          data: json,
        });
      });
  }

  handleSearchChange = e => {
    this.apiFetch(this.state.input);
  }

  componentDidMount() {
    let city = localStorage.getItem('input') || this.state.input;
    fetch(`https://api.wunderground.com/api/${KEY}/conditions/hourly/forecast10day/q/${city || 'autoip'}.json`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: json,
          loading: false,
          node: trie,
          input: ''
        });
      })
      .catch(err => console.log(err));
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
