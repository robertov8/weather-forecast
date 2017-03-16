import React from 'react'

class CityMedia extends React.Component {
  render () {
    const {listMedia} = this.props

    const cityMediaWeatherTemp = listMedia.map((listWeather) => {
      return listWeather.main.temp
    }).reduce((previous, current) => (previous + current))

    const cityMediaWeatherPressure = listMedia.map((listWeather) => {
      return listWeather.main.pressure
    }).reduce((previous, current) => (previous + current))

    const cityMediaWeatherHumidity = listMedia.map((listWeather) => {
      return listWeather.main.humidity
    }).reduce((previous, current) => (previous + current))

    return (
      <div className="cityMedia">
        <h3>Media</h3>
        <ul>
          <li>Temperatura: {cityMediaWeatherTemp / listMedia.length}°C</li>
          <li>Pressão: {cityMediaWeatherPressure / listMedia.length}hPa</li>
          <li>Humidade: {cityMediaWeatherHumidity / listMedia.length}%</li>
        </ul>
      </div>
    )
  }
}

export default CityMedia
