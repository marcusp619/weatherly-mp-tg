import React from 'react';
import Card from '../Card/Card';

export default function TenDay(props) {
  return (
    <div className="ten-day-container">
      {props.forecast.forecast.simpleforecast.forecastday
        .slice(0, 10)
        .map((day, index) => {
          return (
            <Card
              weekday={day.date.weekday}
              className="ten-day"
              image={day.icon_url}
              high={day.high.fahrenheit}
              low={day.low.fahrenheit}
              index={'card' + index}
              key={index}
            />
          );
        })}
    </div>
  );
}
