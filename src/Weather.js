import React from 'react';
import './Weather.css';
import SevenHour from './SevenHour'

export default function Weather(props) {
  let temperature = props.forecast.current_observation.temperature_string;
  let icon = props.forecast.current_observation.icon_url;
  let weatherCondition = props.forecast.current_observation.weather;
  let city = props.forecast.current_observation.display_location.full;
  let fahrenheit = props.forecast.forecast.simpleforecast.forecastday[0].high.fahrenheit;
  let lowTemp = props.forecast.forecast.simpleforecast.forecastday[0].low.fahrenheit;
  let dayForecast = props.forecast.forecast.txt_forecast.forecastday[0].fcttext_metric;
  let nightForecast = props.forecast.forecast.txt_forecast.forecastday[1].fcttext_metric;

  return (
    <div className='weather'>
      <h1 className='weather__city'> {city}</h1>
      <img className="weather__icon" src={icon} />
      <h2 className='weather__todayHigh'>
        {fahrenheit}°F
      </h2>
      <h2 className='weather__todayLow'>
        {lowTemp}°F
      </h2>
      <h2 className="weather__fullForecast">{dayForecast} and tonight {nightForecast} </h2>
      <SevenHour forecast={props.forecast} />
    </div>
  );
} 