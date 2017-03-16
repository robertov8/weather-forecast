import React from 'react'

class CityListWeatherDescription extends React.Component {
  render () {
    const description = this.props.descriptions.map((description, key) => {
      return (
        <div key={key} className="citydescription">
          <img src={`http://openweathermap.org/img/w/${description.icon}.png`} />
          <p>{description.description}</p>
        </div>
      )
    })

    return (
      <div className="CityListWeatherDescription">
        {description}
      </div>
    )
  }
}
export default CityListWeatherDescription
