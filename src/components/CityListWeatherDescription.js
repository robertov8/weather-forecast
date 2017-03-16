import React from 'react'

/**
 * Component: Lista de todos os resultados de descriptions
 */
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
    /**
     * Lista com todos Components
     * CityListWeatherDescription concatenados com a função map
     * @type {JSX}
     */
    return (
      <div className="CityListWeatherDescription">
        {description}
      </div>
    )
  }
}
export default CityListWeatherDescription
