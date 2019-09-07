import { Component, OnInit } from '@angular/core';
import { getConfiguration } from './chart-configuration';
import { Chart } from 'chart.js';

@Component({
  selector: 'gt-active-users-report',
  templateUrl: './active-users-report.component.html',
  styleUrls: ['./active-users-report.component.scss']
})
export class ActiveUsersReportComponent implements OnInit {
  chart: Chart;
  constructor() {}

  ngOnInit() {
    this.chart = new Chart('canvas', getConfiguration([1, 2, 3]));
  }
}
