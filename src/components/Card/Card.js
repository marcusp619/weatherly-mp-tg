import React from 'react';
import './Card.css';
import '../TenDay/TenDay.css';

export default function Card(props) {
  return (
    <div className={props.className} id={props.index}>
      {props.weekday && <h2 className="card__time">{props.weekday}</h2>}
      <img className="card__icon" src={props.image} alt="" />
      {props.high && <h2 className="card__temp">{props.high}°F</h2>}
      {props.low && <h2 className="card__temp">{props.low}°F</h2>}
      {props.time && <h2 className="card__time">{props.time}</h2>}
      {props.temp && <h2 className="card__temp">{props.temp}°F</h2>}
    </div>
  );
}
