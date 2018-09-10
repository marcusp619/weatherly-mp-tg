import React, { Component } from 'react';
// import './Search.css';

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: 'hey',
    }
  }

  handleChange = e => {
    const value = e.target.value;
    
    this.setState(
    {
      input: value,
    });
  }

  render() {
    return (
      <div>
        <input type='text' onChange={this.handleChange} value={this.state.input} placeholder='search some shit'/>        
      </div>
    );
  }
}