import React from 'react'
import CityListWeather from './CityListWeather'

class CityInfo extends React.Component {
  render () {
    const {city} = this.props

    const cityInfo = city ? (
      <div className="row">
        <div className="col-lg-4">
          <p>{city.city.country}</p>
          <h2>{city.city.name}</h2>
        </div>
        <div className="col-lg-8">
          <CityListWeather listWeathers={city.list} />
        </div>
      </div>
    ) : null

    return cityInfo
  }
}

export default CityInfo
