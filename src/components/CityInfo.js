import React from 'react'
import CityListWeather from './CityListWeather'
import CityChart from './CityChart.js'
import CityMap from './CityMap.js'
import CityMedia from './CityMedia.js'

class CityInfo extends React.Component {
  render () {
    const {city} = this.props

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
