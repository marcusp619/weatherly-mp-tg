import React, { Component } from 'react';
import './Weather.css'


class Weather extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className='weather'>

         <h1 className='weather__city'> {this.props.forecast.current_observation.display_location.city}</h1>
          <h2 className='weather__subtitle'>
            {this.props.forecast.current_observation.weather}
          </h2>
          <span className="weather__icon"><img src={this.props.forecast.current_observation.icon_url} /></span>
          <h4>{this.props.forecast.current_observation.temperature_string}</h4>
          <h2>
          {this.props.forecast.forecast.simpleforecast.forecastday[0].high.fahrenheit}
          </h2>
          <h2>
          {this.props.forecast.forecast.simpleforecast.forecastday[0].low.fahrenheit}
          </h2>
          <p className="weather__fullForecast">{this.props.forecast.forecast.txt_forecast.forecastday[0].fcttext_metric} and tonight {this.props.forecast.forecast.txt_forecast.forecastday[1].fcttext_metric} </p>
        </div>
      )
  }
}

export default Weather