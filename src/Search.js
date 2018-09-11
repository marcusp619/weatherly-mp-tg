import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      input: '',
    }
  }

  render() {
    return (
      <div>
        <div className="search">
          <form className='search-form'>
            <input 
              className="searchField"
              placeholder='Select another location'
              type='text'
              onChange={this.props.suggestCity} 
              list='data'
            />
            <datalist id='data'>
              {
                this.props.wordlist &&
                  this.props.wordlist.map((item, index) => {
                    return <option value={item} key={index} />;
                  })
              }
            </datalist>      
          </form> 
        </div>   
      </div>
    );
  }
}