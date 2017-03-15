import React from 'react'

class SearchCity extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
  }

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

export default SearchCity
