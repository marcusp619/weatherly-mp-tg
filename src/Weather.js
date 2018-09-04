import React, { Component } from 'react';


class Weather extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
        <div>
          {this.props.forecast.current_observation.image.url}
          {console.log(this.props)}
          {console.log(this.props.forecast.current_observation)}
          {}
        </div>
      )
  }
}

export default Weather