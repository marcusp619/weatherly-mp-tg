import React, { Component } from 'react';
// import './Welcome.css';

export default class Welcome extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <input type='search' placeholder='search some shit'/>
      </div>
    );
  }
}