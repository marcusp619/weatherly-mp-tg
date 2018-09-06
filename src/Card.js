import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {

  render() {
    return (
      <div className="card" id={this.props.index}>
        {
          this.props.weekday &&
          <h2 className="card__time">{this.props.weekday}</h2>
        }
        {
          this.props.high &&
          <h2 className="card__temp">{this.props.high}</h2>
        }
        {
          this.props.low &&
          <h2 className="card__temp">{this.props.low}</h2>
        }
        {
          this.props.time &&
          <h2 className="card__time">{this.props.time}</h2>
        }
        {
          this.props.temp &&
          <h2 className="card__temp">{this.props.temp}</h2>
        }
        <img className="card__icon" src={this.props.image} alt=""/>
      </div>
    );
  }
}