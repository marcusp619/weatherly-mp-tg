import React, { Component } from 'react';
// import './Search.css';

export default class Search extends Component {
  constructor() {
    super()

    this.state = {
      input: undefined
    }
  }

  render() {
    return (
      <div>
        <input
          className="searchField"
          type='text' 
          onChange={(event) => {
            this.setState(
                {
                  input:   event.target.value
                }
              )
          }} 
          value={this.props.input} 
          placeholder='search some shit'
        />
        <button>MyLocation</button>
        <button
          className="searchButton"
          onClick={(e) => {
            console.log(this.state.input)
            e.preventDefault();
            if(this.state.input) {
              this.props.handleSearchChange(this.state.input)
              }
            }
          }
          >Search</button>    
      </div>
    );
  }
}