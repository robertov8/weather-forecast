import React from 'react'
import CityListWeatherDescription from './CityListWeatherDescription.js'

class CityListWeather extends React.Component {
  /*
  constructor (props) {
    super(props)
    const {listWeathers} = props

    console.log(Object.keys(listWeathers).reduce((previous, key) => {
      let list = 0
      list += listWeathers[key].main.temp

      return list
    }))

    const cityListWeatherTemp = props.listWeathers.reduce((previous, current) => {
      return previous.main.temp + current.main.temp
    })

    this.state = {
      temp: 0
    }

  }
  */

  render () {
    const {listWeathers} = this.props

    const cityListWeatherTemp = listWeathers.map((listWeather) => {
      return listWeather.main.temp
    }).reduce((previous, current) => (previous + current))

    const cityListWeatherPressure = listWeathers.map((listWeather) => {
      return listWeather.main.pressure
    }).reduce((previous, current) => (previous + current))

    const cityListWeatherHumidity = listWeathers.map((listWeather) => {
      return listWeather.main.humidity
    }).reduce((previous, current) => (previous + current))

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
      <div>
        <h2> Weathers</h2>

        <h3>Media</h3>
        <ul>
          <li>Temperatura: {cityListWeatherTemp / listWeathers.length}°C</li>
          <li>Pressão: {cityListWeatherPressure / listWeathers.length}hPa</li>
          <li>Humidade: {cityListWeatherHumidity / listWeathers.length}%</li>
        </ul>

        <h3>List</h3>
        {cityListWeather}
      </div>
    )
  }
}

export default CityListWeather
