import React, { Component } from 'react';
import Search from '../Search/Search';

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <Search
          handleSearchChange={this.props.handleSearchChange}
          suggestCity={this.props.suggestCity}
          node={this.props.node}
          wordlist={this.props.wordlist}
        />
      </div>
    );
  }
}
