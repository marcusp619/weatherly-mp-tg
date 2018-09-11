import React from 'react';
import Card from './Card';

export default function SevenHour(props) {    
  return (
    <div className="seven-hour">
      {
        props.forecast.hourly_forecast.slice(0, 7).map((hour, index) => {
          return <Card image={hour.icon_url} time={hour.FCTTIME.civil} temp={hour.temp.english} index={'card' + index} key={index}/>
        })
      }
    </div>
  );
}