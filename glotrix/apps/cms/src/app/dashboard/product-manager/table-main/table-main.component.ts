import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../models';

@Component({
  selector: 'gt-table-main',
  templateUrl: './table-main.component.html',
  styleUrls: ['./table-main.component.scss']
})
export class TableMainComponent implements OnInit {
  @Input() products: Product[] = [];
  constructor() {}

  ngOnInit() {}
}
