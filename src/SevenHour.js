import React, { Component } from 'react';

import Card from './Card';
import './Card.css'

export default class SevenHour extends Component {
  constructor() {
    super()
  }

  

  render() {
      
    return (
      <div>
        {
          this.props.forecast.slice(0, 7).map((hour, index) => {
          return <Card image={hour.icon_url} time={hour.FCTTIME.civil} temp={hour.temp.english} index={'card' + index}/>
        })
        }
      </div>
    )
  }
}