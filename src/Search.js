import React, { Component } from 'react';
// import './Search.css';

export default class Search extends Component {


  render() {
    return (
      <div>
        <input type='text'
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
      </div>
    );
  }
}