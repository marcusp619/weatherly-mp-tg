import React from 'react';
import './Tomorrow.css';

export default function Weather(props) {
  const { forecastday } = props.forecast.forecast.txt_forecast;
  const { simpleforecast } = props.forecast.forecast;
  const icon = forecastday[2].icon_url;
  const weatherCondition = forecastday[2].icon;
  const fahrenheit = simpleforecast.forecastday[1].high.fahrenheit;
  const lowTemp = simpleforecast.forecastday[1].low.fahrenheit;
  const dayForecast = forecastday[2].fcttext;

  return (
    <div className='tomorrow'>
      <h1 className='tomorrow__title'> Tomorrow</h1>
      <h2 className='tomorrow__subtitle'>
        {weatherCondition}
      </h2>
      <span className="tomorrow__icon"><img src={icon} /></span>
      <h2 className='tomorrow__todayHigh'>
        {fahrenheit}
      </h2>
      <h2 className='tomorrow__todayLow'>
        {lowTemp}
      </h2>
      <p className="tomorrow__fullForecast">{dayForecast}</p>
    </div>
  );
} 