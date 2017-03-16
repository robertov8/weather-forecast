import React from 'react'
import Forecast5 from '../services/Forecast5'

/**
 * Component: Executa uma consulta e retorna o valor para App.js
 */
class SearchCity extends React.Component {
   /**
   * Inicia o estado do Component
   * handleSubmit: realizando o auto bind na class
   */
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  /**
   * Atualiza o estado do App quando o form for enviado
   * Chama o serviço Forecast5 passando o campo city e
   * e depois enviado o resultado da consulta para a
   * metodo updateCity que atualiza o estado city
   */
  handleSubmit (e) {
    e.preventDefault()

    Forecast5.getByCity(this.refs.city.value).then((response) => {
      this.props.updateCity(response.data)
    })
  }

  /**
   * Retorna o JSX de SearchCity
   * @type {JSX}
   */
  render () {
    return (
      <div className="jumbotron">
        <h1>Weather Forecast Info</h1>
        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                ref="city"
                className="form-control"
                placeholder="Ex: Campos dos Goytacazes"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary">
            Buscar
            </button>
          </form>
        </div>
      </div>
    )
  }
}

/**
 * Dfine que o updateCity seja obrigadorio
 * para o Component SearchCity
 * @type {Object}
 */
SearchCity.propTypes = {
  updateCity: React.PropTypes.func.isRequired
}

export default SearchCity
