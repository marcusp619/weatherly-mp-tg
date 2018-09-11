import React from 'react';
import Card from './Card';

export default function TenDay(props) {
  return (
    <div className="ten-day">
      {
        props.forecast.forecast.simpleforecast.forecastday.slice(0, 10).map((day, index) => {
          return <Card weekday={day.date.weekday} high={day.high.fahrenheit} low={day.low.fahrenheit} image={day.icon_url} index={'card' + index} key={index}/>
        })
      }
    </div>
  );
}