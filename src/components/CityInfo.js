import React from 'react'
import CityListWeather from './CityListWeather'
import CityChart from './CityChart.js'
import CityMap from './CityMap.js'
import CityMedia from './CityMedia.js'

/**
 * Component: Resultado da consulta gerada no component SearchCity
 */
class CityInfo extends React.Component {
  /**
   * Retorna o JSX
   *
   * Components
   *  CityMap - Google Maps
   *    coords - lista de coordenadas
   *
   *  CityMedia - Media de todos os resultados
   *    listMedia - lista com todas as propriedades
   *
   *  CityChart - Grafico
   *    listCharts - lista com todas as propriedades
   *
   *  CityListWeather - Lista de todos
   *    listWeathers - lista com todas as propriedades
   * @type {JSX}
   */
  render () {
    /**
     *  destructuring: desestrutura o objeto e atribuindo
     */
    const {city} = this.props

    /**
     * Retorna JSX, caso contrário retorne null
     * @type {JSX}
     */
    const cityInfo = city ? (
      <div className="row">
        <div className="col-lg-4">
          <p>{city.city.country}</p>
          <h2>{city.city.name}</h2>
          <CityMap coords={city.city.coord} />
          <CityMedia listMedia={city.list} />
        </div>

        <div className="col-lg-8">
          <CityChart listCharts={city.list} />
          <CityListWeather listWeathers={city.list} />
        </div>
      </div>
    ) : null

    return cityInfo
  }
}

export default CityInfo
