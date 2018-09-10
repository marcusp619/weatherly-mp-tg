import React, { Component } from 'react';
// import './Search.css';

export default function Search (props) {
    return (
      <div>
        <input 
          type='text' 
          onChange={props.handleSearchChange} 
          value={props.input} 
          placeholder='search some shit'
        />        
      </div>
    );
}