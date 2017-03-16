import React from 'react'
import { Line } from 'react-chartjs'

/**
 * Component: Desenhar o grafico na tela com package react-chartjs
 */
class CityChart extends React.Component {
  /**
   * Render: renderiza o JSX gerando o grafico
   *
   */
  render () {
    /**
     *  destructuring: desestrutura o objeto e atribuindo
     */
    const {listCharts} = this.props

    /**
     * listTemp: gera uma lista de temperaturas (°C)
     * @type {array}
     */
    const listTemp = listCharts.map((listChart) => {
      return listChart.main.temp
    })

    /**
     * listLabel: Gera uma lista de indices
     * @type {array}
     */
    const listLabel = listCharts.map((listChar, key) => {
      return key
    })

    /**
     * data: dados para personalização do grafico
     * @type {Object}
     */
    const data = {
      labels: listLabel,
      datasets: [
        {
          label: 'Forecast5',
          data: listTemp,
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          spanGaps: false
        }
      ]
    }

    /**
     * options: configurações do grafico
     * @type {Object}
     */
    const options = {
      responsive: true,
      barStrokeWidth: 1,
      scales: {
        xAxes: [{
          stacked: true
        }],
        yAxes: [{
          stacked: true
        }]
      }
    }

    /**
     * Retorna o JSX do grafico
     * @type {JSX}
     */
    return (
      <div className="CityChart">
        <Line data={data} options={options} redraw/>
      </div>
    )
  }
}

export default CityChart
