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
         <h1 className='weather__city'> {city}</h1>
          <h2 className='weather__subtitle'>
            {weatherCondition}
          </h2>
          <span className="weather__icon"><img src={icon} /></span>
          <h4>{temperature}</h4>
          <h4 className='weather__todayHigh'>
          {fahrenheit}
          </h4>
          <h4 className='weather__todayLow'>
          {lowTemp}
          </h4>
          <p className="weather__fullForecast">{dayForecast} and tonight {nightForecast} </p>
        </div>
      )
  }
} 