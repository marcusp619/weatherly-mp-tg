import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  constructor() {
    super()

    this.state = {
      input: undefined
    }
  }

  render() {
    return (
      <div className="search">
        <form className='search-form'>
          <input
            className="searchField"
            type='text' 
            onChange={(event) => {
              this.setState(
                  {
                    input: event.target.value
                  }
                )
            }}  
            placeholder='Select another location'
            onKeyPress={(event) => {
              if(event.key === 'enter' && this.state.input) {
                event.preventDefault();
                console.log('ya did it');
                this.props.handleSearchChange(this.state.input)
                event.target.value = ''
                }
              }
            }
          />
          </form>   
      </div>
    );
  }
}