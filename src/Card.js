import React, { Component } from 'react';


export default class Card extends Component {

  render() {
    return (
      <div key={this.props.key}>
        <img src={this.props.image} alt=""/>
        <h2>{this.props.time}</h2>
        <h2>{this.props.temp}</h2>
      </div>
      )
  }
}