import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import WeekWeatherList from './Components/WeekWeatherList'
import CurrentWeather from './Components/CurrentWeather'

import keys from './keys'

class App extends Component {
  state = {
    neighborhood: 'Long Island City',
    weather: null,
    scale: '℉',
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

  handleToggle = (e) => {
    console.log(e.target.checked)
    let newScale;
    if (e.target.checked) {
      newScale = '℃'
    } else {
      newScale = '℉'
    }
    this.setState({
      scale: newScale
    })
  }

  componentDidMount() {
    this.getUserLocation();
  }

  render() {
    const { scale, weather, neighborhood } = this.state
    if (weather) {
      return (
        <div className="App">
          <CurrentWeather weather={weather.periods[0]} neighborhood={neighborhood} scale={scale} />
          <hr/>
          <div>
            <label>℃ <input type='checkbox' onChange={this.handleToggle} value={true} checked={scale === '℃'} /></label>
          </div>
          <hr/>
          <WeekWeatherList weatherDays={weather.periods} scale={scale} />
        </div>
      );
    } else {
      return (<div>Loading....</div>)
    }
  }
}

export default App;
