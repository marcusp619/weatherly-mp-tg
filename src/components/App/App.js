import React, { Component } from 'react';
import './App.css';
import Weather from '../Weather/Weather';
import TenDay from '../TenDay/TenDay';
import Welcome from '../Welcome/Welcome';
import Trie from '../../utils/@markp619/complete-me/lib';
import data from '../../utils/largest1000cities';
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
      input: ''
    };
  }

  suggestCity = e => {
    const value = e.target.value;

    let results = this.state.node.suggest(value);

    this.setState({
      wordlist: results,
      input: value
    });
  };

  apiFetch = city => {
    fetch(
      `api.openweathermap.org/data/2.5/forecast/daily?q=${city ||
        'autoip'}&mode=xml&units=metric&cnt=7&appid=a902060ee1027a975c4a8ad3537718a2`
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
        if (json.response.error || json.response.results) {
          return alert('Please enter a zip or city (,) state/country');
        }
        localStorage.setItem('input', this.state.input);
        this.setState({
          data: json
        });
      });
  };

  handleSearchChange = e => {
    this.apiFetch(this.state.input);
  };

  componentDidMount() {
    let city = localStorage.getItem('input') || this.state.input;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&APPID=`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        // this.setState({
        //   data: json,
        //   loading: false,
        //   node: trie,
        //   input: ''
        // });
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
