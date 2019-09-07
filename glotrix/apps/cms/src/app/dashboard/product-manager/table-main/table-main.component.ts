import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../../../shared';

@Component({
  selector: 'gt-table-main',
  templateUrl: './table-main.component.html',
  styleUrls: ['./table-main.component.scss']
})
export class TableMainComponent implements OnInit {
  @Input() products: IProduct[] = [];
  constructor() {}

  ngOnInit() {}
}
