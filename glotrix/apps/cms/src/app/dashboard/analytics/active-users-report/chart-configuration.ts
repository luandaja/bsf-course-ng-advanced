import { ChartConfiguration } from 'chart.js';

export interface DataItem {
  count: number;
  date: Date;
}

export function getConfiguration(data: DataItem[]) {
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
      title: {
        display: true,
        text: 'Active users per day'
      },
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
