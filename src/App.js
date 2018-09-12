import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import WeekWeatherList from './Components/WeekWeatherList'
import CurrentWeather from './Components/CurrentWeather'

import keys from './keys'

class App extends Component {
  state = {
    weather: null,
    scale: 'f',
  }

  getUserLocation = () => {
    const onSuccess = (position) => {
      const { latitude, longitude } = position.coords;
      let formatedCoords = latitude + ', ' + longitude;
      this.getWeather(formatedCoords)
      console.log(position)
    }
    const onFailure = (err) => {
      this.getWeather('')
      console.log(err)
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onFailure);
  }

  getWeather = (formatedCoords) => {
    let place = formatedCoords;
    if (!formatedCoords) { place = ":auto" }
    axios.get(`http://api.aerisapi.com/forecasts/?p=${place}&client_id=${keys.clientId}&client_secret=${keys.clientSecret}`)
      .then(data => {
        this.setState({
          weather: data.data.response[0]
        })
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })

  }

  componentDidMount() {
    this.getUserLocation();
  }

  render() {
    const { scale, weather } = this.state
    if (weather) {
      return (
        <div className="App">
          <CurrentWeather weather={weather.periods[0]} scale={scale} />
          <WeekWeatherList weatherDays={weather.periods} scale={scale} />
        </div>
      );
    } else {
      return (<div>Loading....</div>)
    }
  }
}

export default App;
