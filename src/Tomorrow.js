import React, { Component } from 'react';
import './Tomorrow.css';

export default class Weather extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { forecastday } = this.props.forecast.forecast.txt_forecast;
    const { simpleforecast } = this.props.forecast.forecast;
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
        <h4 className='tomorrow__todayHigh'>
          {fahrenheit}
        </h4>
        <h4 className='tomorrow__todayLow'>
          {lowTemp}
        </h4>
        <p className="tomorrow__fullForecast">{dayForecast}</p>
      </div>
    );
  }
} 