import axios from 'axios'
/**
 * HTTP client for the browser
 * Forecast5: obtem os dados da api forecast
 * @param {string} city cidade digitada no formulario
 * @param {string} units unidade de medidas
 * @param {string} pt idioma
 * @param {string} appid key da api forecast
 * @type {Object}
 */
const Forecast5 = {
  getByCity (city) {
    return axios.get(`http://api.openweathermap.org/data/2.5/forecast`, {
      params: {
        q: city,
        units: 'metric',
        cnt: 5,
        lang: 'pt',
        appid: '2add9915cbc49d89c4cd1edb775cf362'
      }
    })
  }
}

export default Forecast5
