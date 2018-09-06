import React, { Component } from 'react';


export default class Card extends Component {

  render() {
    return (
      <div className="card" id={this.props.index}>
        <img className="card__icon" src={this.props.image} alt=""/>
        <h2 className="card__time">{this.props.time}</h2>
        <h2 className="card__temp">{this.props.temp}</h2>
      </div>
      )
  }
}