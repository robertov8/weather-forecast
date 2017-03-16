import React from 'react'
import CityListWeatherDescription from './CityListWeatherDescription.js'

class CityListWeather extends React.Component {

  render () {
    const {listWeathers} = this.props

    const cityListWeather = listWeathers.map((listWeather, key) => {
      return (
        <div key={key} className="thumbnail">
        <div className="caption">
          <ul>
            <CityListWeatherDescription descriptions={listWeather.weather} />
            <li>Temperatura: {listWeather.main.temp}°C</li>
            <li>Pressão: {listWeather.main.pressure}hPa</li>
            <li>Humidade: {listWeather.main.humidity}%</li>
          </ul>
        </div>
      </div>
      )
    })

    return (
      <div class="cityListWeather">
        <h2> Weathers</h2>

        <h3>List</h3>
        {cityListWeather}
      </div>
    )
  }
}

export default CityListWeather
