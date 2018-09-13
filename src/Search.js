import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  render() {
    return (
      <div className='search-form'>
        <input 
          className="searchField"
          placeholder='Select another location'
          type='text'
          onChange={this.props.suggestCity} 
          onKeyUp={(event) => {
          if(event.key === 'Enter') {
            this.props.handleSearchChange();
            event.target.value = ''
            }
          }
        }
          list='data'
        /> 
        <datalist id='data'>
          {
            this.props.wordlist &&
            this.props.wordlist.slice(0, 10).map((item, index) => {
              return <option value={item} key={index} />;
            })
          }
        </datalist>      
      </div> 
    );
  }
}