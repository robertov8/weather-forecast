import React from 'react'
import SearchCity from '../components/SearchCity'
import CityInfo from '../components/CityInfo'

/**
* Component: Carregar todos os demais components
*/
class App extends React.Component {
  /**
  * Inicia o estado do Component, city recebe null
  * updateCity: realizando o auto bind na class
  */
  constructor (props) {
    super(props)
    this.state = {
      city: null
    }
    this.updateCity = this.updateCity.bind(this)
  }

  /**
   * Método responsavel por atualizar o state city
   */
  updateCity (city) {
    this.setState({city: city})
  }

  /**
  * Carrega os components SearchCity e CityInfo
  * Retorna o JSX
  * SearchCity
  *   updateCity: metodo que atualiza o estado components
  * CityInfo
  *   city: Resultado obtido pelo updateCity
  *
  * @type {JSX}
  */
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
