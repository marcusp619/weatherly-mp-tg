import React from 'react';
import './Card.css';

export default function Card(props) {
  return (
    <div className="card" id={props.index}>
      {
        props.weekday &&
        <h2 className="card__time">{props.weekday}</h2>
      }
      {
        props.high &&
        <h2 className="card__temp">{props.high}</h2>
      }
      {
        props.low &&
        <h2 className="card__temp">{props.low}</h2>
      }
      {
        props.time &&
        <h2 className="card__time">{props.time}</h2>
      }
      {
        props.temp &&
        <h2 className="card__temp">{props.temp}</h2>
      }
      <img className="card__icon" src={props.image} alt=""/>
    </div>
  );
}