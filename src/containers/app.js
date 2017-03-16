import React from 'react'
import SearchCity from '../components/SearchCity'
import City from '../components/CityInfo'

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
    console.log(this.state.city)
    return (
      <div className="container">
        <SearchCity updateCity={this.updateCity} />
        <CityInfo />
      </div>
    )
  }
}
export default App
