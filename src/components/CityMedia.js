import React from 'react'

/**
 * Component: Retorna o media de todas as respostas da api
 */
class CityMedia extends React.Component {
  render () {
    /**
     *  destructuring: desestrutura o objeto e atribuindo
     */
    const {listMedia} = this.props

    /**
     * cityMediaWeatherTemp
     *  Gera uma a media de todas a temperaturas
     *  map - lista todos objetos
     *  reduce - recebe o objeto de map e retorna o valor anterior + atual(soma)
     * @type {[array}
     */
    const cityMediaWeatherTemp = listMedia.map((listWeather) => {
      return listWeather.main.temp
    }).reduce((previous, current) => (previous + current))

    /**
     * cityMediaWeatherTemp
     *  Gera uma a media de todas a pressões
     *  map - lista todos objetos
     *  reduce - recebe o objeto de map e retorna o valor anterior + atual(soma)
     * @type {[array}
     */
    const cityMediaWeatherPressure = listMedia.map((listWeather) => {
      return listWeather.main.pressure
    }).reduce((previous, current) => (previous + current))

    /**
     * cityMediaWeatherTemp
     *  Gera uma a media de todas a humidades
     *  map - lista todos objetos
     *  reduce - recebe o objeto de map e retorna o valor anterior + atual(soma)
     * @type {[array}
     */
    const cityMediaWeatherHumidity = listMedia.map((listWeather) => {
      return listWeather.main.humidity
    }).reduce((previous, current) => (previous + current))

    /**
     * Retorna o JSX da media
     * @type {JSX}
     */
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
