import React, { Component } from 'react';

import Card from './Card';


export default class SevenHour extends Component {
  constructor() {
    super()
  }

  render() {
    return (
        {forecast.map((hour, index) => {
         return <Card image={hour.icon_url} time={hour.FCTTIME.civil} temp={hour.temp.english} key={index}/>
        })
      }
    )
  }
}