import React from 'react';
import Card from '../Card/Card';
import './SevenHour.css';

export default function SevenHour(props) {
  // console.log(props)
  return (
    <div className="seven-hour">
      {props.forecast.hourly_forecast.slice(0, 7).map((hour, index) => {
        return (
          <Card
            className="seven-hour-card"
            time={hour.FCTTIME.civil}
            temp={hour.temp.english}
            index={'card' + index}
            key={index}
            image={hour.icon_url}
          />
        );
      })}
    </div>
  );
}
