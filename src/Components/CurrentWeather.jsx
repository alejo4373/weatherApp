import React, { Component } from 'react';

class CurrentWeather extends Component {
  render() {
    const { weather, scale, neighborhood } = this.props;
    let temp = scale === 'f' ? weather.avgTempF : weather.avgTempC
    let feelsLike = scale === 'f' ? weather.avgFeelslikeF : weather.avgFeelslikeC
    return (
      <div>
        <h1>{neighborhood}</h1>
        <div>
          <img src={`/icons/${weather.icon}`} />
        </div>
        <div>
          <h2 >{temp + scale}</h2>
        </div>
        <div>
          <p><label>Sunrise:{' '} <span>{new Date(weather.sunriseISO).toLocaleTimeString()}</span></label></p>
          <p><label>Sunset:{' '} <span>{new Date(weather.sunsetISO).toLocaleTimeString()}</span></label></p>
          <p><label>Humidity:{' '} <span>{weather.humidity}%</span></label></p>
          <p><label>Wind:{' '} <span>{weather.windDir} {weather.windSpeedMPH} mph</span></label></p>
          <p><label>Feels Like:{' '} <span>{feelsLike + scale}</span></label></p>
        </div>
      </div>
    );
  }
}

export default CurrentWeather;