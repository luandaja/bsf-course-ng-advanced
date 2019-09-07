import { ChartConfiguration, ChartType } from 'chart.js';

export function getConfiguration(data: any[]) {
  return {
    type: 'line',
    data: {
      labels: data.map(item => item.date.toLocaleDateString()),
      datasets: [
        {
          label: 'Active users',
          data: data.map(item => item.count)
        }
      ],
      fill: false,
      steppedLine: true
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  } as ChartConfiguration;
}
