import React, { Component } from 'react';

class CurrentWeather extends Component {
  render() {
    let location = 'Long Island City';
    const { weather, scale } = this.props;
    return (
      <div>
        <h1>{location}</h1>
        <div>
          <img src={`/icons/${weather.icon}`} />
        </div>
        <div>
          <h2 >{weather.avgTempF} <span>{scale.toUpperCase()}</span></h2>
        </div>
        <div>
          <p><label>Sunrise:{' '} <span>{new Date(weather.sunriseISO).toLocaleTimeString()}</span></label></p>
          <p><label>Sunset:{' '} <span>{new Date(weather.sunsetISO).toLocaleTimeString()}</span></label></p>
          <p><label>Humidity:{' '} <span>{weather.humidity}%</span></label></p>
          <p><label>Wind:{' '} <span>{weather.windDir} {weather.windSpeedMPH} mph</span></label></p>
          <p><label>Feels Like:{' '} <span>{weather.avgFeelslikeF} {scale.toUpperCase()}</span></label></p>
        </div>
      </div>
    );
  }
}

export default CurrentWeather;