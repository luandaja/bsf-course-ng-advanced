import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { getConfiguration } from './chart-configuration';
import { Chart } from 'chart.js';

@Component({
  selector: 'gt-active-users-report',
  templateUrl: './active-users-report.component.html',
  styleUrls: ['./active-users-report.component.scss']
})
export class ActiveUsersReportComponent implements OnInit {
  protected chart: Chart;
  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  private context: CanvasRenderingContext2D;

  constructor() {}

  ngOnInit() {
    this.context = this.canvas.nativeElement.getContext('2d');
    this.chart = new Chart(
      this.context,
      getConfiguration([
        {
          date: new Date(),
          count: 5
        },
        {
          date: new Date(2019, 11, 25),
          count: 10
        },
        {
          date: new Date(2019, 10, 25),
          count: 2
        }
      ])
    );
  }
}
