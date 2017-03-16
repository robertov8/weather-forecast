import React from 'react'
import SearchCity from '../components/SearchCity'
import CityInfo from '../components/CityInfo'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      city: null
    }
    this.updateCity = this.updateCity.bind(this)
  }

  updateCity (city) {
    this.setState({city: city})
  }

  render () {
    return (
      <div className="container">
        <SearchCity updateCity={this.updateCity} />
        <CityInfo city={this.state.city} />
      </div>
    )
  }
}

export default App
