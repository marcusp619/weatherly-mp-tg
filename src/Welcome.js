import React, { Component } from 'react';
// import './Welcome.css';
import Search from './Search';

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <Search suggestCity={this.props.suggestCity} node={this.props.node} />
      </div>
    );
  }
}