import React from 'react'
import {Gmaps, Marker} from 'react-gmaps'
/**
 * params: dados para consulta da api
 * @type {Object}
 */
const params = {v: '3.exp', key: 'AIzaSyCvxigLlhYoFQW0XghFb1w9Wpw9yWE3jUQ'}

/**
 * Component: Map gerado com a lib react-gmaps
 */
const CityMap = React.createClass({

  onMapCreated (map) {
    map.setOptions({
      disableDefaultUI: true
    })
  },

  onDragEnd (e) {
    console.log('onDragEnd', e)
  },

  /**
   * Retorna o mapa com um marcador
   * CityListWeatherDescription concatenados com a função map
   * @type {JSX}
   */
  render () {
    /**
     *  destructuring: desestrutura o objeto e atribuindo
     */
    const {coords} = this.props

    return (
      <Gmaps
        width={'350px'}
        height={'250px'}
        lat={coords.lat}
        lng={coords.lon}
        zoom={12}
        params={params}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lon}
          draggable={true}
          onDragEnd={this.onDragEnd} />
      </Gmaps>
    )
  }
})

export default CityMap
