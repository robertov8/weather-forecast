import React from 'react'
import {Gmaps, Marker} from 'react-gmaps'

const params = {v: '3.exp', key: 'AIzaSyCvxigLlhYoFQW0XghFb1w9Wpw9yWE3jUQ'}

const CityMap = React.createClass({

  onMapCreated (map) {
    map.setOptions({
      disableDefaultUI: true
    })
  },

  onDragEnd (e) {
    console.log('onDragEnd', e)
  },

  render () {
    const {coords} = this.props

    console.log()

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
