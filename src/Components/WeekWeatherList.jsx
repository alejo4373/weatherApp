import React, { Component } from 'react';

class WeekWeatherList extends Component {

  render() {
    const { weatherDays, scale } = this.props;
    return (
      <div >
        <table>{weatherDays.map((day, index) => {
          let maxTemp = day.maxTempF;
          let minTemp = day.minTempF;
          let date = new Date(day.dateTimeISO)
          let dayOfWeekLong = date.toLocaleDateString('en-US', { weekday: 'long' });

          if (scale !== 'c') {
            maxTemp = day.maxTempC;
            minTemp = day.minTempC;
          }

          if (index !== 0) {
            return (
              <tr>
                <td>{dayOfWeekLong}</td>
                <td><img src={`icons/${day.icon}`} alt={day.icon} /></td>
                <td></td>
                <td>{maxTemp}</td>
                <td>{minTemp}</td>
              </tr>
            )
          }
        })
        }</table>
      </div>
    );
  }
}

export default WeekWeatherList;