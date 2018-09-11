import React, { Component } from 'react';
// import './Welcome.css';
import Search from './Search';

export default class Welcome extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="welcome">
        <Search input={this.props.input} handleSearchChange={this.props.handleSearchChange} />
      </div>
    );
  }
}