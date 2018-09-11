import React, { Component } from 'react';
// import './Search.css';

export default class Search extends Component {


  render() {
    return (
      <div>
        <input type='text' onChange={this.props.suggestCity} placeholder='search some shit'/>        
      </div>
    );
  }
}