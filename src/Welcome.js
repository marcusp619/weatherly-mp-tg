import React, { Component } from 'react';
import Search from './Search';

export default function Welcome(props) {
  return (
    <div>
      <Search 
        handleSearchChange={props.handleSearchChange}
        suggestCity={props.suggestCity} 
        node={props.node} 
        wordlist={props.wordlist} 
      />
    </div>
  );
}