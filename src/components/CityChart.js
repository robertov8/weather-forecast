import React from 'react'
import { Line } from 'react-chartjs'

class CityChart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      list: []
    }
  }
  render () {
    const {listCharts} = this.props

    const listTemp = listCharts.map((listChart) => {
      return listChart.main.temp
    })

    const listLabel = listCharts.map((listChar, key) => {
      return key
    })

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

    return (
      <Line data={data} options={options} redraw/>
    )
  }
}

export default CityChart
