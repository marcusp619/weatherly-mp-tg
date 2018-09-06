import React, { Component } from 'react';
import './Weather.css'

export default class Weather extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    let temperature = this.props.forecast.current_observation.temperature_string;
    let icon = this.props.forecast.current_observation.icon_url;
    let weatherCondition = this.props.forecast.current_observation.weather;
    let city = this.props.forecast.current_observation.display_location.city;
    let fahrenheit = this.props.forecast.forecast.simpleforecast.forecastday[0].high.fahrenheit;
    let lowTemp = this.props.forecast.forecast.simpleforecast.forecastday[0].low.fahrenheit;
    let dayForecast = this.props.forecast.forecast.txt_forecast.forecastday[0].fcttext_metric;
    let nightForecast = this.props.forecast.forecast.txt_forecast.forecastday[1].fcttext_metric;

    return (
      <div className='weather'>
        {/* <h1 className='weather__city'> {city}</h1> */}
        <h1 className='weather__city'> Today</h1>
        <h2 className='weather__subtitle'>
          {weatherCondition}
        </h2>
        <img className="weather__icon" src={icon} />
        <h2 className='weather__temp'>{temperature}</h2>
        <h2 className='weather__todayHigh'>
          {fahrenheit}
        </h2>
        <h2 className='weather__todayLow'>
          {lowTemp}
        </h2>
        <h2 className="weather__fullForecast">{dayForecast} and tonight {nightForecast} </h2>
      </div>
    );
  }
} 