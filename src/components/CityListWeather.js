import React from 'react'
import CityListWeatherDescription from './CityListWeatherDescription.js'

/**
 * Component: Lista de todos os resultados de listWeathers
 */
class CityListWeather extends React.Component {
  /**
   * Retona JSX
   *  Components
   *    CityListWeather - lista com todos os resultados
   *
   *    CityListWeatherDescription - lista com imagens e descrições
   *      descriptions - lista de objectos
   * @type {JSX}
   */
  render () {
    /**
     *  destructuring: desestrutura o objeto e atribuindo
     */
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

    /**
     * Lista com todos Components concatenados com a função map
     * @type {JSX}
     */
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
