import { ChartConfiguration, ChartType } from 'chart.js';

export function getConfiguration(data: any[]) {
  return {
    type: 'line',
    data: {
      labels: ['tesrt'],
      datasets: [
        {
          data: data
        }
      ]
    }
    // options: {}
  } as ChartConfiguration;
}
