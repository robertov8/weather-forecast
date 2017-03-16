import React from 'react'

class CityListWeather extends React.Component {
  render () {
    const {listWeathers} = this.props
    const cityListWeather = listWeathers.map((listWeather, key) => {
      return (
        <div key={key} className="thumbnail">
        <div className="caption">
          <ul>
            {/** <img src={`http://openweathermap.org/img/w/${listWeather.weather}.png`} /> **/}
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
        {cityListWeather}
      </div>
    )
  }
}

export default CityListWeather
