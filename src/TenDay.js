import React, { Component } from 'react';
import Card from './Card';

export default class TenDay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {
          this.props.forecast.forecast.simpleforecast.forecastday.slice(0, 10).map((day, index) => {
            return <Card weekday={day.date.weekday} high={day.high.fahrenheit} low={day.low.fahrenheit} image={day.icon_url} index={'card' + index} key={index}/>
          })
        }
      </div>
    );
  }
}