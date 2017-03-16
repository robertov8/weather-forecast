import axios from 'axios'

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
