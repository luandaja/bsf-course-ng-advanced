import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gt-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() placeholder: string;
  constructor() { }

  ngOnInit() {
  }

}
